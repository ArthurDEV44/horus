import type { McpServerInstance } from './types';
import { ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import {
  CATEGORIES,
  DOC_TYPES,
  listAgents,
  getAgentContent,
  type Category,
  type DocType,
} from './agents';

/**
 * Register all MCP resources on the server
 */
export function registerResources(server: McpServerInstance) {
  // Resource template for agent documents
  server.resource(
    'agent-document',
    new ResourceTemplate('agent://{category}/{agent}/{docType}', {
      list: async () => {
        const agents = await listAgents();
        const resources = [];

        for (const agentInfo of agents) {
          for (const docType of DOC_TYPES) {
            resources.push({
              uri: `agent://${agentInfo.category}/${agentInfo.slug}/${docType}`,
              name: `${agentInfo.name} - ${docType.toUpperCase()}`,
              description: `${docType.toUpperCase()} document for ${agentInfo.name}`,
              mimeType: 'text/markdown',
            });
          }
        }

        return { resources };
      },
    }),
    {
      description: 'Access agent documentation (skill, reference, or workflows)',
      mimeType: 'text/markdown',
    },
    async (uri: URL, variables: Record<string, string>) => {
      const { category, agent, docType } = variables;

      // Validate category
      if (!CATEGORIES.includes(category as Category)) {
        return {
          contents: [
            {
              uri: uri.href,
              mimeType: 'text/plain',
              text: `Invalid category "${category}". Valid categories: ${CATEGORIES.join(', ')}`,
            },
          ],
        };
      }

      // Validate docType
      if (!DOC_TYPES.includes(docType as DocType)) {
        return {
          contents: [
            {
              uri: uri.href,
              mimeType: 'text/plain',
              text: `Invalid document type "${docType}". Valid types: ${DOC_TYPES.join(', ')}`,
            },
          ],
        };
      }

      const content = await getAgentContent(
        category as Category,
        agent,
        docType as DocType
      );

      if (!content) {
        return {
          contents: [
            {
              uri: uri.href,
              mimeType: 'text/plain',
              text: `Agent "${agent}" not found in category "${category}"`,
            },
          ],
        };
      }

      return {
        contents: [
          {
            uri: uri.href,
            mimeType: 'text/markdown',
            text: content,
          },
        ],
      };
    }
  );
}
