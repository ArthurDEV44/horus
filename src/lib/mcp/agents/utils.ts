/**
 * Convert slug to display name
 * e.g., "patterns-expert" -> "Patterns Expert"
 */
export function slugToName(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Extract frontmatter description from MDX content
 */
export function extractDescription(content: string): string | undefined {
  const match = content.match(/^---\s*\n[\s\S]*?description:\s*["']?([^"'\n]+)["']?\s*\n[\s\S]*?---/);
  return match?.[1]?.trim();
}
