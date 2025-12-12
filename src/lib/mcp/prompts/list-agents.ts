import {
  type McpServerInstance,
  userMessage,
  assistantMessage,
  promptResult,
} from '../types';
import { z } from 'zod';
import { CATEGORIES, listAgents, type Category } from '../agents';

const listAgentsSchema = {
  category: z
    .enum(CATEGORIES)
    .optional()
    .describe('Filter by category (optional)'),
};

export function registerListAgentsPrompt(server: McpServerInstance) {
  server.prompt(
    'list_agents',
    'List all available agents in a compact format',
    listAgentsSchema,
    async (args: { category?: Category }) => {
      const { category } = args;
      const agents = await listAgents(category);

      // Group by category for compact display
      const grouped = agents.reduce(
        (acc, agent) => {
          if (!acc[agent.category]) acc[agent.category] = [];
          acc[agent.category].push(agent.slug);
          return acc;
        },
        {} as Record<string, string[]>
      );

      const output = Object.entries(grouped)
        .map(([cat, slugs]) => `**${cat}:** ${slugs.join(', ')}`)
        .join('\n');

      return promptResult([
        userMessage('List available Horus agents.'),
        assistantMessage(`${agents.length} agents:\n\n${output}`),
      ]);
    }
  );
}
