import {
  type McpServerInstance,
  type McpMessage,
  userMessage,
  assistantMessage,
  promptResult,
} from '../types';
import { z } from 'zod';
import { getAgentContent, listAgents, type Category } from '../agents';

export function registerMultiAgentPrompt(server: McpServerInstance) {
  server.prompt(
    'multi_agent',
    'Combine multiple agents to tackle a complex task requiring diverse expertise',
    {
      agents: z
        .string()
        .describe(
          'Comma-separated list of agent slugs (e.g., "react-expert,nextjs-expert,security-expert")'
        ),
      task: z
        .string()
        .optional()
        .describe('Task description to perform with combined agent expertise'),
    },
    async (args: { agents: string; task?: string }) => {
      const { agents: agentsList, task } = args;
      const agentSlugs = agentsList.split(',').map((s) => s.trim());
      const allAgents = await listAgents();

      const matchedAgents: Array<{
        slug: string;
        category: Category;
        skill: string | null;
      }> = [];

      for (const slug of agentSlugs) {
        const found = allAgents.find((a) => a.slug === slug);
        if (found) {
          const skill = await getAgentContent(found.category, found.slug, 'skill');
          matchedAgents.push({
            slug: found.slug,
            category: found.category,
            skill,
          });
        }
      }

      if (matchedAgents.length === 0) {
        return promptResult([
          userMessage(
            `Error: No valid agents found. Requested: ${agentSlugs.join(', ')}. Use list_agents tool to see available agents.`
          ),
        ]);
      }

      const notFound = agentSlugs.filter(
        (slug) => !matchedAgents.find((a) => a.slug === slug)
      );

      const combinedSkills = matchedAgents
        .map((a) => `## ${a.slug} (${a.category})\n${a.skill || 'Skill not available'}`)
        .join('\n\n---\n\n');

      let systemMessage = `You are a multi-disciplinary expert combining the following specialized knowledge:\n\n${combinedSkills}`;

      if (notFound.length > 0) {
        systemMessage += `\n\n⚠️ Note: The following agents were not found: ${notFound.join(', ')}`;
      }

      const messages: McpMessage[] = [
        userMessage(systemMessage),
        assistantMessage(
          `I am now operating with combined expertise from: ${matchedAgents.map((a) => a.slug).join(', ')}. I have loaded all specialized knowledge and capabilities. How can I help you?`
        ),
      ];

      if (task) {
        messages.push(userMessage(task));
      }

      return promptResult(messages);
    }
  );
}
