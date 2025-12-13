/**
 * Generate Claude Code Plugin Agents from MDX sources
 *
 * This script transforms the MDX documentation in content/docs/
 * into Claude Code plugin agent format in the agents/ directory.
 *
 * All agents are generated as single .md files with frontmatter.
 *
 * Usage: bun run scripts/generate-plugin-agents.ts
 */

import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Configuration
const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, '..', 'content', 'docs');
const AGENTS_DIR = join(__dirname, '..', 'agents');

// All categories to process
const CATEGORIES = ['architecture', 'seo', 'tailwind-responsive', 'experts'];

// Tool assignments by category
const TOOLS_BY_CATEGORY: Record<string, string> = {
  'architecture': 'Read, Grep, Glob, WebSearch',
  'seo': 'Read, Grep, Glob, WebSearch, WebFetch',
  'tailwind-responsive': 'Read, Grep, Glob, WebSearch',
  'experts': 'Read, Write, Edit, Bash, Grep, Glob, WebSearch',
};

// Agents that should use opus model (complex architectural/security tasks)
const OPUS_AGENTS = [
  'react-expert',
  'nextjs-expert',
  'architect-expert',
  'solid-expert',
  'patterns-expert',
  'security-expert',
];

interface AgentMeta {
  title: string;
  description: string;
}

/**
 * Parse frontmatter from MDX content
 */
function parseFrontmatter(content: string): { frontmatter: AgentMeta; body: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: { title: '', description: '' }, body: content };
  }

  const frontmatterStr = match[1];
  const body = match[2].trim();

  const frontmatter: AgentMeta = { title: '', description: '' };

  for (const line of frontmatterStr.split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      if (key === 'title') frontmatter.title = value;
      if (key === 'description') frontmatter.description = value;
    }
  }

  return { frontmatter, body };
}

/**
 * Generate new frontmatter for Claude Code agent format
 */
function generateFrontmatter(
  agentSlug: string,
  description: string,
  category: string
): string {
  const model = OPUS_AGENTS.includes(agentSlug) ? 'opus' : 'sonnet';
  const tools = TOOLS_BY_CATEGORY[category] || 'Read, Grep, Glob';

  return `---
name: ${agentSlug}
description: ${description}
tools: ${tools}
model: ${model}
version: 1.0.0
---`;
}

/**
 * Read MDX file and extract content
 */
async function readMdxFile(filePath: string): Promise<{ frontmatter: AgentMeta; body: string } | null> {
  try {
    const content = await readFile(filePath, 'utf-8');
    return parseFrontmatter(content);
  } catch {
    return null;
  }
}

/**
 * Get all agent directories in a category
 */
async function getAgentDirs(categoryPath: string): Promise<string[]> {
  const entries = await readdir(categoryPath, { withFileTypes: true });
  return entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);
}

/**
 * Process a category and generate single-file agents
 * Creates: agents/{agent-slug}.md with all content merged
 */
async function processCategory(category: string): Promise<number> {
  const categoryPath = join(CONTENT_DIR, category);
  const agentDirs = await getAgentDirs(categoryPath);
  let count = 0;

  for (const agentDir of agentDirs) {
    const agentSourcePath = join(categoryPath, agentDir);

    // Read source files
    const skillData = await readMdxFile(join(agentSourcePath, 'skill.mdx'));
    const referenceData = await readMdxFile(join(agentSourcePath, 'reference.mdx'));
    const workflowsData = await readMdxFile(join(agentSourcePath, 'workflows.mdx'));

    if (!skillData) {
      console.warn(`  Skipping ${agentDir}: no skill.mdx found`);
      continue;
    }

    // Generate frontmatter
    const frontmatter = generateFrontmatter(
      agentDir,
      skillData.frontmatter.description || `Expert ${skillData.frontmatter.title}`,
      category
    );

    // Merge all content into single file
    let content = `${frontmatter}\n\n${skillData.body}`;

    if (referenceData) {
      content += `\n\n---\n\n# Reference Technique\n\n${referenceData.body}`;
    }

    if (workflowsData) {
      content += `\n\n---\n\n# Workflows\n\n${workflowsData.body}`;
    }

    // Write single file directly in agents/ directory
    await writeFile(join(AGENTS_DIR, `${agentDir}.md`), content);
    count++;
    console.log(`  Generated: ${agentDir}.md`);
  }

  return count;
}

/**
 * Main function
 */
async function main() {
  console.log('=== Horus Plugin Agent Generator ===\n');

  // Clean existing agents directory
  if (existsSync(AGENTS_DIR)) {
    console.log('Cleaning existing agents directory...');
    await rm(AGENTS_DIR, { recursive: true });
  }
  await mkdir(AGENTS_DIR, { recursive: true });

  let totalAgents = 0;

  // Process all categories
  for (const category of CATEGORIES) {
    console.log(`\nProcessing ${category}/:`);
    const count = await processCategory(category);
    totalAgents += count;
    console.log(`  Total: ${count} agents`);
  }

  console.log(`\n=== Generation complete: ${totalAgents} agents ===`);
  console.log(`\nAll agents are now in: ${AGENTS_DIR}/`);
}

main().catch(console.error);
