import type { McpServerInstance } from './types';
import { z } from 'zod';
import {
  CATEGORIES,
  listCategories,
  listAgents,
  getAgentContent,
  searchAgents,
  type Category,
} from './agents';

/**
 * Register all MCP tools on the server
 */
export function registerTools(server: McpServerInstance) {
  // Tool: List all categories
  server.tool(
    'list_categories',
    'List all agent categories with their descriptions and agent counts',
    async () => {
      const categories = await listCategories();
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(categories, null, 2),
          },
        ],
      };
    }
  );

  // Tool: List agents (optionally filtered by category)
  server.tool(
    'list_agents',
    'List all agents, optionally filtered by category',
    {
      category: z
        .enum(CATEGORIES)
        .optional()
        .describe('Filter by category: architecture, seo, tailwind-responsive, or experts'),
    },
    async (args: { category?: Category }) => {
      const { category } = args;
      const agents = await listAgents(category);
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(agents, null, 2),
          },
        ],
      };
    }
  );

  // Tool: Get agent SKILL content
  server.tool(
    'get_agent_skill',
    "Get the SKILL document of an agent - describes the agent's capabilities and expertise",
    {
      category: z.enum(CATEGORIES).describe('Agent category'),
      agent: z.string().describe('Agent slug (e.g., "react-expert", "patterns-expert")'),
    },
    async (args: { category: Category; agent: string }) => {
      const { category, agent } = args;
      const content = await getAgentContent(category, agent, 'skill');
      if (!content) {
        return {
          content: [
            {
              type: 'text' as const,
              text: `Agent "${agent}" not found in category "${category}"`,
            },
          ],
          isError: true,
        };
      }
      return {
        content: [{ type: 'text' as const, text: content }],
      };
    }
  );

  // Tool: Get agent REFERENCE content
  server.tool(
    'get_agent_reference',
    'Get the REFERENCE document of an agent - technical reference and documentation',
    {
      category: z.enum(CATEGORIES).describe('Agent category'),
      agent: z.string().describe('Agent slug (e.g., "react-expert", "patterns-expert")'),
    },
    async (args: { category: Category; agent: string }) => {
      const { category, agent } = args;
      const content = await getAgentContent(category, agent, 'reference');
      if (!content) {
        return {
          content: [
            {
              type: 'text' as const,
              text: `Agent "${agent}" not found in category "${category}"`,
            },
          ],
          isError: true,
        };
      }
      return {
        content: [{ type: 'text' as const, text: content }],
      };
    }
  );

  // Tool: Get agent WORKFLOWS content
  server.tool(
    'get_agent_workflows',
    'Get the WORKFLOWS document of an agent - use cases and workflow examples',
    {
      category: z.enum(CATEGORIES).describe('Agent category'),
      agent: z.string().describe('Agent slug (e.g., "react-expert", "patterns-expert")'),
    },
    async (args: { category: Category; agent: string }) => {
      const { category, agent } = args;
      const content = await getAgentContent(category, agent, 'workflows');
      if (!content) {
        return {
          content: [
            {
              type: 'text' as const,
              text: `Agent "${agent}" not found in category "${category}"`,
            },
          ],
          isError: true,
        };
      }
      return {
        content: [{ type: 'text' as const, text: content }],
      };
    }
  );

  // Tool: Search agents
  server.tool(
    'search_agents',
    'Search for agents by name, slug, or category',
    {
      query: z.string().describe('Search query'),
    },
    async (args: { query: string }) => {
      const { query } = args;
      const results = await searchAgents(query);
      return {
        content: [
          {
            type: 'text' as const,
            text:
              results.length > 0
                ? JSON.stringify(results, null, 2)
                : `No agents found matching "${query}"`,
          },
        ],
      };
    }
  );
}
