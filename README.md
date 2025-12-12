# Horus

Horus est une bibliothèque de documentation pour agents Claude Code. Elle héberge **29 agents optimisés** organisés en **4 catégories** pour améliorer vos workflows de développement.

## Catégories d'agents

| Catégorie | Agents | Description |
|-----------|--------|-------------|
| **Architecture** | 8 | Analyse SOLID, patterns, couplage, dette technique, structure, state, types, modularité |
| **SEO** | 7 | Metadata, Schema.org, crawling, Core Web Vitals, contenu, rendu, images |
| **Tailwind Responsive** | 8 | Mobile-first, breakpoints, layout, spacing, typography, images, container queries, accessibilité |
| **Experts** | 6 | React 19+, Next.js 16+, TypeScript, et autres expertises spécialisées |

## Utilisation

### Option 1 : Télécharger les agents (recommandé)

1. Rendez-vous sur l'interface web Horus
2. Naviguez vers l'agent souhaité
3. Cliquez sur **"Download Agent"** pour télécharger le ZIP contenant les 3 fichiers :
   - `SKILL.md` - Compétences et capacités de l'agent
   - `REFERENCE.md` - Documentation technique de référence
   - `WORKFLOWS.md` - Cas d'usage et exemples de workflows
4. Extrayez le contenu dans le dossier `.claude/agents/` de votre codebase :

```
votre-projet/
└── .claude/
    └── agents/
        ├── react-expert/
        │   ├── SKILL.md
        │   ├── REFERENCE.md
        │   └── WORKFLOWS.md
        ├── nextjs-expert/
        │   └── ...
        └── ...
```

Claude Code détectera automatiquement les agents disponibles et pourra les utiliser selon le contexte.

### Option 2 : Utiliser le serveur MCP

Horus expose un serveur MCP (Model Context Protocol) permettant d'accéder aux agents directement depuis Claude Code.

#### Configuration

Ajoutez Horus à votre configuration MCP Claude Code :

```json
{
  "mcpServers": {
    "horus": {
      "url": "https://votre-instance-horus.com/api/mcp"
    }
  }
}
```

#### Tools MCP disponibles

| Tool | Description |
|------|-------------|
| `list_agents` | Liste tous les agents disponibles par catégorie |
| `get_agent` | Récupère le contenu complet d'un agent (skill, reference, workflows) |

#### Prompts MCP disponibles

**Prompts basiques :**
- `activate_agent` - Active un agent unique avec son SKILL comme contexte
- `multi_agent` - Combine plusieurs agents pour une tâche complexe

**Audits pré-configurés :**
- `architecture_audit` - Audit d'architecture (4 agents)
- `seo_analysis` - Analyse SEO (3 agents)
- `tailwind_responsive_audit` - Audit responsive Tailwind (4 agents)

**Analyses avancées :**
- `advanced_architecture_analysis` - Analyse complète avec 10 agents + recherche web des best practices → génère `ARCHI_OPTI_PLAN.md`
- `advanced_seo_analysis` - Analyse SEO complète avec 7 agents + recherche doc officielle → génère `SEO_OPTI_PLAN.md`
- `advanced_tailwind_responsive_analysis` - Analyse responsive avec 8 agents + recherche doc TailwindCSS v4 → génère `RESPONSIVE_OPTI_PLAN.md`

## Stack technique

- **Next.js 16** avec App Router
- **Fumadocs** pour le framework de documentation
- **Tailwind CSS 4**
- **TypeScript** en mode strict

## Développement

```bash
bun dev      # Serveur de développement
bun build    # Build production
bun start    # Serveur production
bun lint     # Linting ESLint
```

## Licence

MIT
