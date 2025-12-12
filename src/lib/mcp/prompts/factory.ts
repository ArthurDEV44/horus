import { type McpServerInstance, userMessage, promptResult } from '../types';
import { getAgentContent, type Category } from '../agents';
import type { ZodRawShape } from 'zod';

/**
 * Configuration for an agent group to load skills from
 */
export interface AgentGroup {
  category: Category;
  slugs: string[];
  descriptions?: Record<string, string>;
}

/**
 * Configuration for creating an advanced analysis prompt
 */
export interface AdvancedAnalysisConfig<TSchema extends ZodRawShape, TArgs> {
  name: string;
  description: string;
  schema: TSchema;
  agents: AgentGroup[];
  buildInstructions: (skills: CombinedSkills, args: TArgs) => string;
}

/**
 * Combined skills data passed to buildInstructions
 */
export interface CombinedSkills {
  /** All agent slugs in order */
  allAgents: string[];
  /** Formatted skills text with agent names and content */
  formattedSkills: string;
  /** Raw skills map: slug -> content */
  skillsMap: Map<string, string | null>;
}

/**
 * Load and combine skills from multiple agent groups
 */
async function loadAgentSkills(agents: AgentGroup[]): Promise<CombinedSkills> {
  const allAgents: string[] = [];
  const skillsMap = new Map<string, string | null>();

  // Load all skills in parallel
  const loadPromises = agents.flatMap((group) =>
    group.slugs.map(async (slug) => {
      const content = await getAgentContent(group.category, slug, 'skill');
      return { slug, content, descriptions: group.descriptions };
    })
  );

  const results = await Promise.all(loadPromises);

  // Process results
  const formattedParts: string[] = [];
  for (const { slug, content, descriptions } of results) {
    allAgents.push(slug);
    skillsMap.set(slug, content);

    const description = descriptions?.[slug];
    const header = description
      ? `## ${slug}\n**Scope:** ${description}`
      : `## ${slug}`;

    formattedParts.push(`${header}\n\n${content || 'Not available'}`);
  }

  return {
    allAgents,
    formattedSkills: formattedParts.join('\n\n---\n\n'),
    skillsMap,
  };
}

/**
 * Create an advanced analysis prompt registration function
 *
 * @example
 * ```ts
 * const registerMyPrompt = createAdvancedAnalysisPrompt({
 *   name: 'my_analysis',
 *   description: 'My analysis description',
 *   schema: { context: z.string().optional() },
 *   agents: [{ category: 'architecture', slugs: ['solid-expert'] }],
 *   buildInstructions: (skills, args) => `Analyze using: ${skills.formattedSkills}`,
 * });
 *
 * registerMyPrompt(server);
 * ```
 */
export function createAdvancedAnalysisPrompt<
  TSchema extends ZodRawShape,
  TArgs extends Record<string, unknown>,
>(config: AdvancedAnalysisConfig<TSchema, TArgs>) {
  return function register(server: McpServerInstance) {
    server.prompt(
      config.name,
      config.description,
      config.schema,
      async (args: TArgs) => {
        const skills = await loadAgentSkills(config.agents);
        const instructions = config.buildInstructions(skills, args);

        return promptResult([userMessage(instructions)]);
      }
    );
  };
}
