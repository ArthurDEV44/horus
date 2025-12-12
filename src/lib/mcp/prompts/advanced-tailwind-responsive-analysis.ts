import { z } from 'zod';
import { createAdvancedAnalysisPrompt } from './factory';

const TAILWIND_AGENT_DESCRIPTIONS: Record<string, string> = {
  'tw-mobile-first-expert':
    'mobile-first approach, non-prefixed utilities for mobile, sm/md/lg/xl/2xl breakpoints',
  'tw-breakpoints-expert':
    'default breakpoints (640/768/1024/1280/1536px), custom breakpoints, max-* variants, ranges',
  'tw-layout-expert':
    'Flexbox (flex, justify, items, gap), Grid (grid-cols, grid-rows, place-items), container',
  'tw-spacing-expert':
    'padding, margin, gap, space-x/y, consistent spacing, fluid spacing with clamp()',
  'tw-typography-expert':
    'responsive sizes (text-sm md:text-base), line-height, prose, fluid typography',
  'tw-images-expert':
    'aspect-ratio, object-fit/cover/contain, lazy loading, srcset, responsive images',
  'tw-container-queries-expert': '@container, @lg:, @md:, native container queries v4',
  'tw-accessibility-expert':
    'sr-only, focus-visible, aria-*, contrast, touch targets, keyboard navigation',
};

const OUTPUT_TEMPLATE = `
# Plan d'Optimisation Responsive TailwindCSS - Codebase

**Agents consultés** : {AGENTS}
**Date** : [DATE]
**Version Tailwind** : [v3.x/v4.x]
**Score responsive estimé** : [SCORE]/100

---

## 🔴 Critiques (cassent sur mobile/tablette)

1. [TYPE] Description
   - **Agent** : nom-agent
   - **Breakpoint concerné** : sm/md/lg/xl/2xl
   - **Fichier** : \`path/component.tsx:ligne\`
   - **Fix** : classes TailwindCSS exactes
   - **Temps** : Xh

## 🟠 Importants (UX dégradée)

1. [TYPE] Description
   - **Agent** : nom-agent
   - **Problème** : description du comportement
   - **Fichier** : \`path/component.tsx:ligne\`
   - **Classes** : remplacement exact
   - **Temps** : Xh

## 🟡 Améliorations (optimisations)

1. [TYPE] Description
   - **Agent** : nom-agent
   - **Amélioration** : pattern recommandé
   - **Fichier** : \`path/component.tsx:ligne\`
   - **Classes** : implémentation TailwindCSS
   - **Temps** : Xh

## 📊 Checklist Responsive

- [ ] Viewport meta tag présent
- [ ] Approche mobile-first respectée
- [ ] Touch targets ≥44px
- [ ] Images responsives avec aspect-ratio + object-fit + lazy loading
- [ ] Texte lisible ≥16px sur mobile
- [ ] Pas de scroll horizontal
- [ ] Container queries pour composants réutilisables

## 🔧 Configuration Recommandée

Définir dans @theme (v4) ou tailwind.config.js (v3) :
- Custom breakpoints (xs: 475px, 3xl: 1920px)
- Fluid typography avec clamp() pour sm/base/lg/xl
- Fluid spacing avec clamp() pour sm/md/lg
`;

const AGENT_CHECKLISTS = `
## Checklist par Agent

### tw-mobile-first-expert
- [ ] Classes non-préfixées utilisées pour mobile (pas \`sm:\` pour mobile)
- [ ] Progressive enhancement : mobile → sm → md → lg → xl → 2xl
- [ ] Pas de \`hidden\` sans breakpoint responsive (ex: \`hidden md:block\`)
- [ ] Layouts stack sur mobile (flex-col) → row sur desktop (md:flex-row)

### tw-breakpoints-expert
- [ ] Breakpoints standards : sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536px)
- [ ] Breakpoints utilisés de manière cohérente
- [ ] Pas de sauts visuels entre breakpoints

### tw-layout-expert
- [ ] flex + flex-col pour mobile, md:flex-row pour desktop
- [ ] gap-* préféré à space-x/y (fonctionne avec wrap)
- [ ] Pattern grid-cols-1 md:grid-cols-2 lg:grid-cols-3

### tw-spacing-expert
- [ ] Échelle de spacing cohérente (4, 8, 12, 16, 24, 32, 48, 64)
- [ ] Padding augmente avec breakpoints (p-4 md:p-6 lg:p-8)
- [ ] gap-* préféré à margins sur enfants

### tw-typography-expert
- [ ] Font-size minimum 16px sur mobile (évite zoom iOS)
- [ ] Tailles responsives (text-sm md:text-base lg:text-lg)
- [ ] Max-width sur paragraphes (max-w-prose ou max-w-2xl)

### tw-images-expert
- [ ] w-full h-auto pour images responsives basiques
- [ ] aspect-video, aspect-square, aspect-[16/9] pour ratios fixes
- [ ] object-cover pour fill sans distorsion

### tw-container-queries-expert
- [ ] @container sur parent, @md: @lg: sur enfants
- [ ] Container queries pour composants réutilisables (cards, widgets)

### tw-accessibility-expert
- [ ] Touch targets ≥44x44px (min-h-11 min-w-11 ou p-3)
- [ ] focus-visible:ring-2 focus-visible:ring-offset-2
- [ ] sr-only pour texte accessible caché visuellement
`;

const PATTERNS_TO_SEARCH = `
## Patterns à Rechercher

Chaque agent doit rechercher sur le web les patterns officiels TailwindCSS pour :

- **Navigation responsive** : header avec menu hamburger mobile, nav desktop
- **Card grid responsive** : grille adaptative avec images et contenu
- **Hero section fluid** : titres, sous-titres et CTA adaptatifs
- **Container query card** : composants qui s'adaptent à leur conteneur parent
- **Footer responsive** : colonnes qui stackent sur mobile
`;

export const registerAdvancedTailwindResponsiveAnalysisPrompt = createAdvancedAnalysisPrompt({
  name: 'advanced_tailwind_responsive_analysis',
  description:
    'Perform a comprehensive TailwindCSS responsive analysis using all specialized agents with web research on official documentation',
  schema: {
    tailwindVersion: z
      .enum(['v3', 'v4'])
      .optional()
      .describe('TailwindCSS version (v3 or v4)'),
    context: z
      .string()
      .optional()
      .describe('Additional context or specific responsive concerns'),
  },
  agents: [
    {
      category: 'tailwind-responsive',
      slugs: [
        'tw-mobile-first-expert',
        'tw-breakpoints-expert',
        'tw-layout-expert',
        'tw-spacing-expert',
        'tw-typography-expert',
        'tw-images-expert',
        'tw-container-queries-expert',
        'tw-accessibility-expert',
      ],
      descriptions: TAILWIND_AGENT_DESCRIPTIONS,
    },
  ],
  buildInstructions: (skills, args: { tailwindVersion?: 'v3' | 'v4'; context?: string }) => {
    const template = OUTPUT_TEMPLATE.replace('{AGENTS}', skills.allAgents.join(', '));

    let analysisContext = '';
    if (args.tailwindVersion) analysisContext += `**Tailwind Version:** ${args.tailwindVersion}\n`;
    if (args.context) analysisContext += `**Additional context:** ${args.context}\n`;

    return `You are a senior frontend developer specializing in responsive design with TailwindCSS, with expertise from 8 specialized agents.

**CRITICAL INSTRUCTIONS:**
1. Each agent MUST perform web searches on official TailwindCSS v4 documentation before evaluating
2. Analyze the codebase using ALL agents' perspectives
3. Generate the file \`RESPONSIVE_OPTI_PLAN.md\` at the project root with the exact format below

**Issue Types:** \`[MOBILE]\` · \`[BREAKPOINT]\` · \`[LAYOUT]\` · \`[SPACING]\` · \`[TYPO]\` · \`[IMAGE]\` · \`[CONTAINER]\` · \`[A11Y]\` · \`[PERF]\` · \`[OVERFLOW]\`

**Prioritization (descending order):**
1. Mobile breakages (broken layout, overflow, unreadable text)
2. Inaccessible navigation (touch targets, focus)
3. Non-responsive images (CLS, no lazy loading)
4. Breakpoint inconsistencies (visual jumps)
5. Typography issues (sizes, line-height)
6. Optimizations (container queries, fluid design)

Each task must include the exact TailwindCSS classes to implement.

---

## Agent Expertise:

${skills.formattedSkills}

---

${AGENT_CHECKLISTS}

---

${PATTERNS_TO_SEARCH}

---

## Output Format:

\`\`\`markdown
${template}
\`\`\`

${analysisContext ? `\n**Analysis Context:**\n${analysisContext}` : ''}

Begin the comprehensive TailwindCSS responsive analysis now.`;
  },
});
