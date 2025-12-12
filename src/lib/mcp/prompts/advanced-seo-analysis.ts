import type { McpServerInstance } from '../types';
import { z } from 'zod';
import { getAgentContent } from '../agents';

export function registerAdvancedSeoAnalysisPrompt(server: McpServerInstance) {
  server.prompt(
    'advanced_seo_analysis',
    'Perform a comprehensive SEO analysis using all specialized SEO agents with web research on official documentation',
    {
      url: z.string().optional().describe('URL to analyze'),
      framework: z
        .string()
        .optional()
        .describe('Framework being used (e.g., Next.js, React)'),
      context: z
        .string()
        .optional()
        .describe('Additional context or specific SEO concerns'),
    },
    async (args: { url?: string; framework?: string; context?: string }) => {
      const { url, framework, context } = args;

      const seoAgents = [
        'seo-metadata-expert',
        'seo-schema-expert',
        'seo-crawl-expert',
        'seo-performance-expert',
        'seo-content-expert',
        'seo-rendering-expert',
        'seo-image-expert',
      ];

      const agentDescriptions: Record<string, string> = {
        'seo-metadata-expert': 'titles, descriptions, OpenGraph, Twitter Cards, canonical',
        'seo-schema-expert': 'JSON-LD, structured data Schema.org',
        'seo-crawl-expert': 'sitemap.xml, robots.txt, Google indexation',
        'seo-performance-expert': 'Core Web Vitals (LCP ≤2.5s, INP ≤200ms, CLS <0.1)',
        'seo-content-expert': 'headings H1-H6, alt text, semantic HTML',
        'seo-rendering-expert': 'SSR/SSG/ISR, Next.js rendering strategy',
        'seo-image-expert': 'next/image, WebP/AVIF formats, lazy loading',
      };

      const skills = await Promise.all(
        seoAgents.map((a) => getAgentContent('seo', a, 'skill'))
      );

      const combinedSkills = seoAgents
        .map(
          (name, i) =>
            `## ${name}\n**Scope:** ${agentDescriptions[name]}\n\n${skills[i] || 'Not available'}`
        )
        .join('\n\n---\n\n');

      const outputTemplate = `
# Plan d'Optimisation SEO - Codebase

**Agents consultés** : ${seoAgents.join(', ')}
**Date** : [DATE]
**Score Lighthouse estimé** : [SCORE]/100

---

## 🔴 Critiques (bloquent l'indexation)

1. [TYPE] Description
   - **Agent** : nom-agent
   - **Impact SEO** : critère Google mesurable
   - **Fichier** : \`path/file.tsx\`
   - **Fix** : code/config exact
   - **Temps** : Xh

## 🟠 Importants (pénalisent le ranking)

...

## 🟡 Améliorations (optimisations)

...

## 📊 Checklist Core Web Vitals

- [ ] LCP : [état actuel] → objectif ≤2.5s
- [ ] INP : [état actuel] → objectif ≤200ms
- [ ] CLS : [état actuel] → objectif <0.1
`;

      let analysisContext = '';
      if (url) analysisContext += `**URL:** ${url}\n`;
      if (framework) analysisContext += `**Framework:** ${framework}\n`;
      if (context) analysisContext += `**Additional context:** ${context}\n`;

      const instructions = `You are a senior SEO specialist with expertise from 7 specialized agents.

**CRITICAL INSTRUCTIONS:**
1. Each agent MUST perform web searches on official Next.js documentation and Schema.org before evaluating
2. Analyze the codebase using ALL agents' perspectives
3. Generate the file \`SEO_OPTI_PLAN.md\` at the project root with the exact format below

**Issue Types:** \`[META]\` · \`[SCHEMA]\` · \`[CWV]\` · \`[CRAWL]\` · \`[SEM]\` · \`[IMG]\` · \`[URL]\` · \`[RENDER]\`

**Prioritization:** Sort by descending Google ranking impact. Each task must include the exact code/config to implement.

---

## Agent Expertise:

${combinedSkills}

---

## Output Format:

\`\`\`markdown
${outputTemplate}
\`\`\`

${analysisContext ? `\n**Analysis Context:**\n${analysisContext}` : ''}

Begin the comprehensive SEO analysis now.`;

      return {
        messages: [
          {
            role: 'user' as const,
            content: {
              type: 'text' as const,
              text: instructions,
            },
          },
        ],
      };
    }
  );
}
