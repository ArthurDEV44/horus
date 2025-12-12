import fs from 'fs/promises';
import path from 'path';

// Agent categories
export const CATEGORIES = [
  'architecture',
  'seo',
  'tailwind-responsive',
  'experts',
] as const;

export type Category = (typeof CATEGORIES)[number];

// Agent document types
export const DOC_TYPES = ['skill', 'reference', 'workflows'] as const;
export type DocType = (typeof DOC_TYPES)[number];

// Agent metadata
export interface AgentInfo {
  slug: string;
  name: string;
  category: Category;
  description?: string;
}

// Category metadata
export interface CategoryInfo {
  slug: Category;
  name: string;
  description: string;
  agentCount: number;
}

// Content directory path
const CONTENT_DIR = path.join(process.cwd(), 'content/docs');

// Category display names and descriptions
const CATEGORY_META: Record<Category, { name: string; description: string }> = {
  architecture: {
    name: 'Architecture',
    description: 'Agents pour la structure et les patterns de code (SOLID, coupling, modularity, etc.)',
  },
  seo: {
    name: 'SEO',
    description: "Agents pour l'optimisation du référencement (metadata, crawl, schema, performance, etc.)",
  },
  'tailwind-responsive': {
    name: 'Tailwind Responsive',
    description: 'Agents pour le design responsive avec Tailwind CSS (typography, layout, breakpoints, etc.)',
  },
  experts: {
    name: 'Experts',
    description: 'Agents spécialisés (Next.js, React, Clerk, Security, etc.)',
  },
};

/**
 * Convert slug to display name
 * e.g., "patterns-expert" -> "Patterns Expert"
 */
function slugToName(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

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
 * List all agents, optionally filtered by category
 */
export async function listAgents(category?: Category): Promise<AgentInfo[]> {
  const agents: AgentInfo[] = [];
  const categoriesToScan = category ? [category] : CATEGORIES;

  for (const cat of categoriesToScan) {
    const categoryPath = path.join(CONTENT_DIR, cat);

    try {
      const entries = await fs.readdir(categoryPath, { withFileTypes: true });

      for (const entry of entries) {
        // Skip non-directories and special files
        if (!entry.isDirectory() || entry.name.startsWith('.')) {
          continue;
        }

        // Check if it's an agent directory (has skill.mdx)
        const skillPath = path.join(categoryPath, entry.name, 'skill.mdx');
        try {
          await fs.access(skillPath);
          agents.push({
            slug: entry.name,
            name: slugToName(entry.name),
            category: cat,
          });
        } catch {
          // Not an agent directory, skip
        }
      }
    } catch {
      // Category directory doesn't exist, skip
    }
  }

  return agents;
}

/**
 * Get agent content by category, slug, and document type
 */
export async function getAgentContent(
  category: Category,
  agentSlug: string,
  docType: DocType
): Promise<string | null> {
  const filePath = path.join(CONTENT_DIR, category, agentSlug, `${docType}.mdx`);

  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return content;
  } catch {
    return null;
  }
}

/**
 * Check if an agent exists
 */
export async function agentExists(
  category: Category,
  agentSlug: string
): Promise<boolean> {
  const skillPath = path.join(CONTENT_DIR, category, agentSlug, 'skill.mdx');

  try {
    await fs.access(skillPath);
    return true;
  } catch {
    return false;
  }
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

/**
 * Extract frontmatter description from MDX content
 */
export function extractDescription(content: string): string | undefined {
  const match = content.match(/^---\s*\n[\s\S]*?description:\s*["']?([^"'\n]+)["']?\s*\n[\s\S]*?---/);
  return match?.[1]?.trim();
}
