import type { McpServerInstance } from '../types';
import { registerListAgentsPrompt } from './list-agents';
import { registerActivateAgentPrompt } from './activate-agent';
import { registerMultiAgentPrompt } from './multi-agent';
import { registerArchitectureAuditPrompt } from './architecture-audit';
import { registerSeoAnalysisPrompt } from './seo-analysis';
import { registerTailwindResponsiveAuditPrompt } from './tailwind-responsive-audit';
import { registerAdvancedArchitectureAnalysisPrompt } from './advanced-architecture-analysis';
import { registerAdvancedSeoAnalysisPrompt } from './advanced-seo-analysis';
import { registerAdvancedTailwindResponsiveAnalysisPrompt } from './advanced-tailwind-responsive-analysis';

/**
 * Register all MCP prompts on the server
 */
export function registerPrompts(server: McpServerInstance) {
  // Basic prompts
  registerListAgentsPrompt(server);
  registerActivateAgentPrompt(server);
  registerMultiAgentPrompt(server);

  // Pre-configured multi-agent prompts
  registerArchitectureAuditPrompt(server);
  registerSeoAnalysisPrompt(server);
  registerTailwindResponsiveAuditPrompt(server);

  // Advanced analysis prompts
  registerAdvancedArchitectureAnalysisPrompt(server);
  registerAdvancedSeoAnalysisPrompt(server);
  registerAdvancedTailwindResponsiveAnalysisPrompt(server);
}
