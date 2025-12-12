import type { McpServerInstance } from '../types';
import { z } from 'zod';
import { getAgentContent } from '../agents';

export function registerArchitectureAuditPrompt(server: McpServerInstance) {
  server.prompt(
    'architecture_audit',
    'Perform a comprehensive architecture audit using multiple architecture agents',
    {
      context: z
        .string()
        .optional()
        .describe('Description of the codebase or specific concerns'),
    },
    async (args: { context?: string }) => {
      const { context } = args;
      const agents = [
        'patterns-expert',
        'solid-expert',
        'coupling-expert',
        'structure-expert',
      ];
      const skills = await Promise.all(
        agents.map((a) => getAgentContent('architecture', a, 'skill'))
      );

      const combinedSkills = agents
        .map((name, i) => `## ${name}\n${skills[i] || 'Not available'}`)
        .join('\n\n---\n\n');

      return {
        messages: [
          {
            role: 'user' as const,
            content: {
              type: 'text' as const,
              text: `You are a senior software architect with expertise in the following areas:\n\n${combinedSkills}\n\n---\n\nPerform a comprehensive architecture audit.${context ? `\n\nContext:\n${context}` : ''}`,
            },
          },
        ],
      };
    }
  );
}
