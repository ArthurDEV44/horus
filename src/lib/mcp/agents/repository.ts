import fs from 'fs/promises';
import path from 'path';
import { CONTENT_DIR } from './config';
import { CATEGORIES, type Category, type DocType, type AgentInfo } from './types';
import { slugToName } from './utils';

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
