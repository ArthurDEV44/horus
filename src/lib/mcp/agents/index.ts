// Types
export {
  CATEGORIES,
  DOC_TYPES,
  type Category,
  type DocType,
  type AgentInfo,
  type CategoryInfo,
} from './types';

// Config
export { CONTENT_DIR, CATEGORY_META } from './config';

// Utils
export { slugToName, extractDescription } from './utils';

// Repository (filesystem access)
export { listAgents, getAgentContent, agentExists } from './repository';

// Service (business logic)
export { listCategories, searchAgents, getFullAgentContent } from './service';
