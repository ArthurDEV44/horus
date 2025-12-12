import { createMcpHandler } from 'mcp-handler';
import { registerTools } from '@/lib/mcp/tools';
import { registerResources } from '@/lib/mcp/resources';
import { registerPrompts } from '@/lib/mcp/prompts';

const handler = createMcpHandler(
  (server) => {
    // Register all MCP components from modular files
    registerTools(server);
    registerResources(server);
    registerPrompts(server);
  },
  {
    capabilities: {
      tools: {},
      resources: {},
      prompts: {},
    },
  },
  {
    basePath: '/api/mcp',
    verboseLogs: process.env.NODE_ENV === 'development',
  }
);

export { handler as GET, handler as POST, handler as DELETE };
