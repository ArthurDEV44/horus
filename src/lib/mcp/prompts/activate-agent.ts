import type { McpServerInstance } from '../types';
import { z } from 'zod';
import { CATEGORIES, getAgentContent, type Category } from '../agents';

export function registerActivateAgentPrompt(server: McpServerInstance) {
  server.prompt(
    'activate_agent',
    'Activate an agent by loading its SKILL as system context',
    {
      category: z.enum(CATEGORIES).describe('Agent category'),
      agent: z.string().describe('Agent slug'),
      task: z
        .string()
        .optional()
        .describe('Optional task description to include'),
    },
    async (args: { category: Category; agent: string; task?: string }) => {
      const { category, agent, task } = args;
      const skill = await getAgentContent(category, agent, 'skill');

      if (!skill) {
        return {
          messages: [
            {
              role: 'user' as const,
              content: {
                type: 'text' as const,
                text: `Error: Agent "${agent}" not found in category "${category}"`,
              },
            },
          ],
        };
      }

      const messages: Array<{
        role: 'user' | 'assistant';
        content: { type: 'text'; text: string };
      }> = [
        {
          role: 'user',
          content: {
            type: 'text',
            text: `You are now operating as the following specialized agent:\n\n${skill}`,
          },
        },
        {
          role: 'assistant',
          content: {
            type: 'text',
            text: `I am now operating as the ${agent} agent. I have loaded my specialized knowledge and capabilities. How can I help you?`,
          },
        },
      ];

      if (task) {
        messages.push({
          role: 'user',
          content: {
            type: 'text',
            text: task,
          },
        });
      }

      return { messages };
    }
  );
}
