/**
 * Re-export from modular agents directory
 * This file maintains backward compatibility with existing imports
 */
export {
  // Types
  CATEGORIES,
  DOC_TYPES,
  type Category,
  type DocType,
  type AgentInfo,
  type CategoryInfo,
  // Config
  CONTENT_DIR,
  CATEGORY_META,
  // Utils
  slugToName,
  extractDescription,
  // Repository
  listAgents,
  getAgentContent,
  agentExists,
  // Service
  listCategories,
  searchAgents,
  getFullAgentContent,
} from './agents/index';
