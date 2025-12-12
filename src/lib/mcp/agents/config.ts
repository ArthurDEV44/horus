import path from 'path';
import type { Category } from './types';

// Content directory path
export const CONTENT_DIR = path.join(process.cwd(), 'content/docs');

// Category display names and descriptions
export const CATEGORY_META: Record<Category, { name: string; description: string }> = {
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
