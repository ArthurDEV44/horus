import { z } from 'zod';
import { createAdvancedAnalysisPrompt } from './factory';

const SEO_AGENT_DESCRIPTIONS: Record<string, string> = {
  'seo-metadata-expert': 'titles, descriptions, OpenGraph, Twitter Cards, canonical',
  'seo-schema-expert': 'JSON-LD, structured data Schema.org',
  'seo-crawl-expert': 'sitemap.xml, robots.txt, Google indexation',
  'seo-performance-expert': 'Core Web Vitals (LCP ≤2.5s, INP ≤200ms, CLS <0.1)',
  'seo-content-expert': 'headings H1-H6, alt text, semantic HTML',
  'seo-rendering-expert': 'SSR/SSG/ISR, Next.js rendering strategy',
  'seo-image-expert': 'next/image, WebP/AVIF formats, lazy loading',
};

const OUTPUT_TEMPLATE = `
# Plan d'Optimisation SEO - Codebase

**Agents consultés** : {AGENTS}
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

export const registerAdvancedSeoAnalysisPrompt = createAdvancedAnalysisPrompt({
  name: 'advanced_seo_analysis',
  description:
    'Perform a comprehensive SEO analysis using all specialized SEO agents with web research on official documentation',
  schema: {
    url: z.string().optional().describe('URL to analyze'),
    framework: z.string().optional().describe('Framework being used (e.g., Next.js, React)'),
    context: z.string().optional().describe('Additional context or specific SEO concerns'),
  },
  agents: [
    {
      category: 'seo',
      slugs: [
        'seo-metadata-expert',
        'seo-schema-expert',
        'seo-crawl-expert',
        'seo-performance-expert',
        'seo-content-expert',
        'seo-rendering-expert',
        'seo-image-expert',
      ],
      descriptions: SEO_AGENT_DESCRIPTIONS,
    },
  ],
  buildInstructions: (skills, args: { url?: string; framework?: string; context?: string }) => {
    const template = OUTPUT_TEMPLATE.replace('{AGENTS}', skills.allAgents.join(', '));

    let analysisContext = '';
    if (args.url) analysisContext += `**URL:** ${args.url}\n`;
    if (args.framework) analysisContext += `**Framework:** ${args.framework}\n`;
    if (args.context) analysisContext += `**Additional context:** ${args.context}\n`;

    return `You are a senior SEO specialist with expertise from 7 specialized agents.

**CRITICAL INSTRUCTIONS:**
1. Each agent MUST perform web searches on official Next.js documentation and Schema.org before evaluating
2. Analyze the codebase using ALL agents' perspectives
3. Generate the file \`SEO_OPTI_PLAN.md\` at the project root with the exact format below

**Issue Types:** \`[META]\` · \`[SCHEMA]\` · \`[CWV]\` · \`[CRAWL]\` · \`[SEM]\` · \`[IMG]\` · \`[URL]\` · \`[RENDER]\`

**Prioritization:** Sort by descending Google ranking impact. Each task must include the exact code/config to implement.

---

## Agent Expertise:

${skills.formattedSkills}

---

## Output Format:

\`\`\`markdown
${template}
\`\`\`

${analysisContext ? `\n**Analysis Context:**\n${analysisContext}` : ''}

Begin the comprehensive SEO analysis now.`;
  },
});
