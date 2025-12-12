// MCP Server module exports
export { registerTools } from './tools';
export { registerResources } from './resources';
export { registerPrompts } from './prompts';

// Type exports
export type { McpServerInstance } from './types';

// Re-export agent utilities for external use
export {
  CATEGORIES,
  DOC_TYPES,
  listCategories,
  listAgents,
  getAgentContent,
  getFullAgentContent,
  searchAgents,
  agentExists,
  extractDescription,
  type Category,
  type DocType,
  type AgentInfo,
  type CategoryInfo,
} from './agents';
