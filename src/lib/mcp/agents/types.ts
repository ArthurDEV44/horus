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
