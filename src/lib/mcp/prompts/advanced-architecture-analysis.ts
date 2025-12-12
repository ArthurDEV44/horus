import { z } from 'zod';
import { createAdvancedAnalysisPrompt } from './factory';

const OUTPUT_TEMPLATE = `
# Plan d'Optimisation Architecture - Codebase

**Agents consultés** : {AGENTS}
**Date** : [DATE]
**Score maintenabilité estimé** : [SCORE]/100

---

## 🔴 Critiques (bloquent la scalabilité)

1. [TYPE] Description
   - **Agent** : nom-agent
   - **Principe violé** : SOLID/Pattern/Convention
   - **Fichier(s)** : \`path/file.tsx\`
   - **Refacto** : code/structure exact
   - **Temps** : Xh

## 🟠 Importants (dette technique active)

...

## 🟡 Améliorations (optimisations)

...

## 📊 Métriques Architecture

- [ ] Dépendances circulaires : [nombre] → objectif 0
- [ ] Couplage moyen : [score] → objectif <3
- [ ] Fichiers >300 LOC : [nombre] → objectif 0
- [ ] Types \`any\` : [nombre] → objectif 0
`;

export const registerAdvancedArchitectureAnalysisPrompt = createAdvancedAnalysisPrompt({
  name: 'advanced_architecture_analysis',
  description:
    'Perform a comprehensive architecture analysis using all specialized agents with web research on best practices',
  schema: {
    context: z
      .string()
      .optional()
      .describe('Description of the codebase or specific concerns to analyze'),
  },
  agents: [
    {
      category: 'architecture',
      slugs: [
        'structure-expert',
        'solid-expert',
        'patterns-expert',
        'coupling-expert',
        'state-expert',
        'types-expert',
        'modularity-expert',
        'debt-expert',
      ],
    },
    {
      category: 'experts',
      slugs: ['nextjs-expert', 'react-expert'],
    },
  ],
  buildInstructions: (skills, args: { context?: string }) => {
    const template = OUTPUT_TEMPLATE.replace('{AGENTS}', skills.allAgents.join(', '));

    return `You are a senior software architect with expertise from 10 specialized agents.

**CRITICAL INSTRUCTIONS:**
1. Each agent MUST perform web searches on official best practices before evaluating
2. Analyze the codebase using ALL agents' perspectives
3. Generate the file \`ARCHI_OPTI_PLAN.md\` at the project root with the exact format below

**Issue Types:** \`[STRUCT]\` · \`[SOLID]\` · \`[PATTERN]\` · \`[COUPLING]\` · \`[STATE]\` · \`[TYPE]\` · \`[MODULE]\` · \`[DEBT]\`

**Prioritization:** Sort by descending maintainability impact. Each task must include the exact refactoring to implement.

---

## Agent Expertise:

${skills.formattedSkills}

---

## Output Format:

\`\`\`markdown
${template}
\`\`\`

${args.context ? `\n**Analysis Context:**\n${args.context}` : ''}

Begin the comprehensive architecture analysis now.`;
  },
});
