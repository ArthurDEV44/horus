import {
  type McpServerInstance,
  type McpMessage,
  userMessage,
  assistantMessage,
  promptResult,
} from '../types';
import { z } from 'zod';
import { CATEGORIES, getAgentContent, type Category } from '../agents';

// Pre-defined schema to avoid deep type instantiation
const activateAgentSchema = {
  category: z.enum(CATEGORIES).describe('Agent category'),
  agent: z.string().describe('Agent slug'),
  task: z.string().optional().describe('Optional task description to include'),
};

export function registerActivateAgentPrompt(server: McpServerInstance) {
  server.prompt(
    'activate_agent',
    'Activate an agent by loading its SKILL as system context',
    activateAgentSchema,
    async (args: { category: Category; agent: string; task?: string }) => {
      const { category, agent, task } = args;
      const skill = await getAgentContent(category, agent, 'skill');

      if (!skill) {
        return promptResult([
          userMessage(`Error: Agent "${agent}" not found in category "${category}"`),
        ]);
      }

      const messages: McpMessage[] = [
        userMessage(`You are now operating as the following specialized agent:\n\n${skill}`),
        assistantMessage(
          `I am now operating as the ${agent} agent. I have loaded my specialized knowledge and capabilities. How can I help you?`
        ),
      ];

      if (task) {
        messages.push(userMessage(task));
      }

      return promptResult(messages);
    }
  );
}
