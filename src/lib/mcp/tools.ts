import { type McpServerInstance, toolResult } from './types';
import { z } from 'zod';
import {
  CATEGORIES,
  listCategories,
  listAgents,
  getAgentContent,
  searchAgents,
  getFullAgentContent,
  slugToName,
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
      return toolResult(JSON.stringify(categories, null, 2));
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
      return toolResult(JSON.stringify(agents, null, 2));
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
        return toolResult(`Agent "${agent}" not found in category "${category}"`, true);
      }
      return toolResult(content);
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
        return toolResult(`Agent "${agent}" not found in category "${category}"`, true);
      }
      return toolResult(content);
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
        return toolResult(`Agent "${agent}" not found in category "${category}"`, true);
      }
      return toolResult(content);
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
      return toolResult(
        results.length > 0
          ? JSON.stringify(results, null, 2)
          : `No agents found matching "${query}"`
      );
    }
  );

  // Tool: Activate agent (inject agent context as system prompt)
  server.tool(
    'activate_agent',
    'Activate an agent by injecting its full context as a system prompt. Use this to "become" a specialized agent with its expertise, workflows, and guidelines.',
    {
      category: z.enum(CATEGORIES).describe('Agent category'),
      agent: z.string().describe('Agent slug (e.g., "react-expert", "nextjs-expert")'),
      include_reference: z
        .boolean()
        .optional()
        .default(false)
        .describe('Include the reference document for deeper technical details'),
    },
    async (args: { category: Category; agent: string; include_reference?: boolean }) => {
      const { category, agent, include_reference } = args;
      const content = await getFullAgentContent(category, agent);

      if (!content.skill) {
        return toolResult(`Agent "${agent}" not found in category "${category}"`, true);
      }

      const agentName = slugToName(agent);
      const sections: string[] = [];

      // Header
      sections.push(`# Agent Activation: ${agentName}`);
      sections.push('');
      sections.push('You are now operating as a specialized Horus agent. Follow the expertise, workflows, and guidelines below.');
      sections.push('');

      // Skill (always included)
      sections.push('---');
      sections.push('## SKILL (Capabilities & Expertise)');
      sections.push('');
      sections.push(content.skill);

      // Reference (optional, for deeper context)
      if (include_reference && content.reference) {
        sections.push('');
        sections.push('---');
        sections.push('## REFERENCE (Technical Documentation)');
        sections.push('');
        sections.push(content.reference);
      }

      // Workflows summary hint
      if (content.workflows) {
        sections.push('');
        sections.push('---');
        sections.push('## WORKFLOWS AVAILABLE');
        sections.push('');
        sections.push('This agent has detailed workflow documentation. Use `get_agent_workflows` to access specific use cases and step-by-step guides when needed.');
      }

      // Footer
      sections.push('');
      sections.push('---');
      sections.push('');
      sections.push('**Instructions:** Apply this agent\'s expertise to assist the user. Follow the workflows and quality guidelines defined above.');

      return toolResult(sections.join('\n'));
    }
  );
}
