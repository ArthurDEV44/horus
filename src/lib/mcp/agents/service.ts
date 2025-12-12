import { CATEGORY_META } from './config';
import { CATEGORIES, type Category, type CategoryInfo, type AgentInfo } from './types';
import { listAgents, getAgentContent } from './repository';

/**
 * List all categories with metadata
 */
export async function listCategories(): Promise<CategoryInfo[]> {
  const categories: CategoryInfo[] = [];

  for (const category of CATEGORIES) {
    const agents = await listAgents(category);
    categories.push({
      slug: category,
      name: CATEGORY_META[category].name,
      description: CATEGORY_META[category].description,
      agentCount: agents.length,
    });
  }

  return categories;
}

/**
 * Search agents by query (searches in slug and name)
 */
export async function searchAgents(query: string): Promise<AgentInfo[]> {
  const allAgents = await listAgents();
  const normalizedQuery = query.toLowerCase();

  return allAgents.filter(
    (agent) =>
      agent.slug.toLowerCase().includes(normalizedQuery) ||
      agent.name.toLowerCase().includes(normalizedQuery) ||
      agent.category.toLowerCase().includes(normalizedQuery)
  );
}

/**
 * Get all agent content (skill, reference, workflows) as a combined object
 */
export async function getFullAgentContent(
  category: Category,
  agentSlug: string
): Promise<{ skill: string | null; reference: string | null; workflows: string | null }> {
  const [skill, reference, workflows] = await Promise.all([
    getAgentContent(category, agentSlug, 'skill'),
    getAgentContent(category, agentSlug, 'reference'),
    getAgentContent(category, agentSlug, 'workflows'),
  ]);

  return { skill, reference, workflows };
}
