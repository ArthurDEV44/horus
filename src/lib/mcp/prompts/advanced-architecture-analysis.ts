import type { McpServerInstance } from '../types';
import { z } from 'zod';
import { getAgentContent } from '../agents';

export function registerAdvancedArchitectureAnalysisPrompt(server: McpServerInstance) {
  server.prompt(
    'advanced_architecture_analysis',
    'Perform a comprehensive architecture analysis using all specialized agents with web research on best practices',
    {
      context: z
        .string()
        .optional()
        .describe('Description of the codebase or specific concerns to analyze'),
    },
    async (args: { context?: string }) => {
      const { context } = args;

      const architectureAgents = [
        'structure-expert',
        'solid-expert',
        'patterns-expert',
        'coupling-expert',
        'state-expert',
        'types-expert',
        'modularity-expert',
        'debt-expert',
      ];

      const expertAgents = ['nextjs-expert', 'react-expert'];

      const [architectureSkills, expertSkills] = await Promise.all([
        Promise.all(
          architectureAgents.map((a) => getAgentContent('architecture', a, 'skill'))
        ),
        Promise.all(expertAgents.map((a) => getAgentContent('experts', a, 'skill'))),
      ]);

      const allAgents = [...architectureAgents, ...expertAgents];
      const allSkills = [...architectureSkills, ...expertSkills];

      const combinedSkills = allAgents
        .map((name, i) => `## ${name}\n${allSkills[i] || 'Not available'}`)
        .join('\n\n---\n\n');

      const outputTemplate = `
# Plan d'Optimisation Architecture - Codebase

**Agents consultés** : ${allAgents.join(', ')}
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

      const instructions = `You are a senior software architect with expertise from 10 specialized agents.

**CRITICAL INSTRUCTIONS:**
1. Each agent MUST perform web searches on official best practices before evaluating
2. Analyze the codebase using ALL agents' perspectives
3. Generate the file \`ARCHI_OPTI_PLAN.md\` at the project root with the exact format below

**Issue Types:** \`[STRUCT]\` · \`[SOLID]\` · \`[PATTERN]\` · \`[COUPLING]\` · \`[STATE]\` · \`[TYPE]\` · \`[MODULE]\` · \`[DEBT]\`

**Prioritization:** Sort by descending maintainability impact. Each task must include the exact refactoring to implement.

---

## Agent Expertise:

${combinedSkills}

---

## Output Format:

\`\`\`markdown
${outputTemplate}
\`\`\`

${context ? `\n**Analysis Context:**\n${context}` : ''}

Begin the comprehensive architecture analysis now.`;

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
