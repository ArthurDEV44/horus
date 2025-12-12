import { type McpServerInstance, userMessage, promptResult } from '../types';
import { z } from 'zod';
import { getAgentContent } from '../agents';

export function registerTailwindResponsiveAuditPrompt(server: McpServerInstance) {
  server.prompt(
    'tailwind_responsive_audit',
    'Perform a responsive design audit using Tailwind CSS expert agents',
    {
      context: z
        .string()
        .optional()
        .describe('Description of the components or pages to audit'),
    },
    async (args: { context?: string }) => {
      const { context } = args;
      const agents = [
        'tw-mobile-first-expert',
        'tw-breakpoints-expert',
        'tw-layout-expert',
        'tw-accessibility-expert',
      ];
      const skills = await Promise.all(
        agents.map((a) => getAgentContent('tailwind-responsive', a, 'skill'))
      );

      const combinedSkills = agents
        .map((name, i) => `## ${name}\n${skills[i] || 'Not available'}`)
        .join('\n\n---\n\n');

      return promptResult([
        userMessage(
          `You are a responsive design expert specializing in Tailwind CSS with expertise in the following areas:\n\n${combinedSkills}\n\n---\n\nPerform a comprehensive responsive design audit.${context ? `\n\nContext:\n${context}` : ''}`
        ),
      ]);
    }
  );
}
