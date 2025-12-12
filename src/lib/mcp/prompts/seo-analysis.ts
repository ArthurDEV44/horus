import type { McpServerInstance } from '../types';
import { z } from 'zod';
import { getAgentContent } from '../agents';

export function registerSeoAnalysisPrompt(server: McpServerInstance) {
  server.prompt(
    'seo_analysis',
    'Perform SEO analysis using SEO expert agents',
    {
      url: z.string().optional().describe('URL to analyze'),
      framework: z
        .string()
        .optional()
        .describe('Framework being used (e.g., Next.js, React)'),
    },
    async (args: { url?: string; framework?: string }) => {
      const { url, framework } = args;
      const agents = [
        'seo-metadata-expert',
        'seo-performance-expert',
        'seo-schema-expert',
      ];
      const skills = await Promise.all(
        agents.map((a) => getAgentContent('seo', a, 'skill'))
      );

      const combinedSkills = agents
        .map((name, i) => `## ${name}\n${skills[i] || 'Not available'}`)
        .join('\n\n---\n\n');

      let context = '';
      if (url) context += `URL: ${url}\n`;
      if (framework) context += `Framework: ${framework}\n`;

      return {
        messages: [
          {
            role: 'user' as const,
            content: {
              type: 'text' as const,
              text: `You are an SEO specialist with expertise in the following areas:\n\n${combinedSkills}\n\n---\n\nPerform a comprehensive SEO analysis.${context ? `\n\nContext:\n${context}` : ''}`,
            },
          },
        ],
      };
    }
  );
}
