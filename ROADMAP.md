# Roadmap - Horus : Librairie d'Agents Claude Code

> **Progression globale : 70%** ██████████████░░░░░░

---

## Vue d'ensemble

Horus est une librairie de documentation et un serveur MCP pour 29 agents Claude Code optimisés.

**Stack technique :**
- Next.js 16 (App Router) + Fumadocs + Tailwind CSS 4
- MCP Server (Model Context Protocol)
- bun (package manager)

---

## Phase 1 : Setup du projet ✅ COMPLÉTÉ

- [x] Initialiser Next.js 16 avec App Router, TypeScript, Tailwind CSS 4
- [x] Installer Fumadocs (`fumadocs-mdx`, `fumadocs-core`, `fumadocs-ui`)
- [x] Configurer `next.config.mjs`, `source.config.ts`, `tsconfig.json`

---

## Phase 2 : Structure de l'application ✅ COMPLÉTÉ

- [x] Créer `layout.tsx` avec RootProvider
- [x] Configurer `globals.css` et `mdx-components.tsx`
- [x] Créer `lib/source.ts` (loader Fumadocs)
- [x] Créer `lib/layout.shared.tsx` (navigation)
- [x] Implémenter `app/docs/layout.tsx`
- [x] Implémenter `app/docs/[[...slug]]/page.tsx`
- [x] Créer `app/api/search/route.ts`

---

## Phase 3 : Migration du contenu ✅ COMPLÉTÉ

- [x] Créer structure `content/docs/` par catégorie
- [x] Migrer les 8 agents **Architecture**
  - [x] patterns-expert
  - [x] solid-expert
  - [x] coupling-expert
  - [x] debt-expert
  - [x] modularity-expert
  - [x] state-expert
  - [x] structure-expert
  - [x] types-expert
- [x] Migrer les 7 agents **SEO**
  - [x] seo-metadata-expert
  - [x] seo-crawl-expert
  - [x] seo-content-expert
  - [x] seo-schema-expert
  - [x] seo-performance-expert
  - [x] seo-image-expert
  - [x] seo-rendering-expert
- [x] Migrer les 8 agents **Tailwind Responsive**
  - [x] tw-typography-expert
  - [x] tw-layout-expert
  - [x] tw-accessibility-expert
  - [x] tw-breakpoints-expert
  - [x] tw-container-queries-expert
  - [x] tw-spacing-expert
  - [x] tw-images-expert
  - [x] tw-mobile-first-expert
- [x] Migrer les 7 agents **Experts**
  - [x] architect-expert
  - [x] nextjs-expert
  - [x] react-expert
  - [x] clerk-expert
  - [x] tailwind-expert
  - [x] security-expert
  - [x] techwatch-expert
- [x] Configurer `meta.json` pour chaque section

---

## Phase 4 : Personnalisation & UX ✅ COMPLÉTÉ

- [x] Page d'accueil avec Hero
- [x] Section Features
- [x] Footer
- [x] Navbar
- [x] Bouton "Copy Markdown"
- [x] Bouton "Download Agent" (ZIP)
- [x] API `agent-download/route.ts`

---

## Phase 5 : Serveur MCP 🚧 EN COURS

> **Objectif :** Exposer les 29 agents via Model Context Protocol

### 5.1 MVP - API Route Next.js ✅ COMPLÉTÉ

- [x] Installer les dépendances MCP
  ```bash
  bun add @modelcontextprotocol/sdk zod mcp-handler
  ```
- [x] Créer `src/app/api/mcp/[transport]/route.ts`
- [x] Implémenter les **Tools** de base
  - [x] `list_categories` - Lister les 4 catégories
  - [x] `list_agents` - Lister les agents (filtrable par catégorie)
  - [x] `get_agent_skill` - Obtenir le SKILL d'un agent
  - [x] `get_agent_reference` - Obtenir la REFERENCE d'un agent
  - [x] `get_agent_workflows` - Obtenir les WORKFLOWS d'un agent
  - [x] `search_agents` - Rechercher dans les agents
- [x] Implémenter les **Resources**
  - [x] `agent://{category}/{agent}/{docType}` - Template unifié pour skill/reference/workflows
- [x] Implémenter les **Prompts**
  - [x] `activate_agent` - Template système pour activer un agent
  - [x] `multi_agent` - Combiner plusieurs agents
  - [x] `architecture_audit` - Audit architecture multi-agents
  - [x] `seo_analysis` - Analyse SEO multi-agents
  - [x] `tailwind_responsive_audit` - Audit responsive multi-agents
- [x] Créer `src/lib/mcp/` pour la logique MCP
  - [x] `agents.ts` - Fonctions d'accès aux agents
  - [x] `tools.ts` - Définitions des tools
  - [x] `resources.ts` - Définitions des resources
  - [x] `prompts.ts` - Définitions des prompts
  - [x] `types.ts` - Types TypeScript
  - [x] `index.ts` - Exports centralisés
- [x] Tester avec Claude Code localement
  - [x] Créer `.mcp.json` de test
  - [x] Valider `list_agents`
  - [x] Valider `get_agent_*`
  - [x] Valider resources
  - [x] Valider prompts

### 5.2 Package npm Standalone

- [ ] Créer structure monorepo
  ```
  packages/
  ├── mcp-server/        # @horus/mcp-server
  └── agents-content/    # Contenu partagé
  ```
- [ ] Configurer Turborepo ou nx
- [ ] Extraire le serveur MCP en package
- [ ] Implémenter transport **stdio**
- [ ] Configurer build et publication npm
- [ ] Créer `package.json` pour `@horus/mcp-server`
- [ ] Tester avec `npx @horus/mcp-server`
- [ ] Documenter l'installation

### 5.3 Publication & Distribution

- [ ] Créer `server.json` pour MCP Registry
- [ ] Publier sur npm
- [ ] Soumettre au GitHub MCP Registry
- [ ] Soumettre au Docker MCP Catalog
- [ ] Ajouter au Smithery.ai
- [ ] Créer page de documentation MCP sur le site

### 5.4 Fonctionnalités Avancées

- [ ] Authentification OAuth 2.1
- [ ] Rate limiting
- [ ] Analytics d'usage
- [ ] Caching des réponses
- [ ] Support multi-langues (fr/en)
- [ ] Versioning des agents

---

## Phase 6 : Déploiement & Production

- [ ] Configurer Vercel pour le site
- [ ] Configurer variables d'environnement
- [ ] Activer le domaine custom
- [ ] Configurer CDN pour les assets
- [ ] Mettre en place monitoring
- [ ] Créer page status

---

## Phase 7 : Documentation & Communauté

- [ ] Rédiger guide d'installation MCP
- [ ] Créer tutoriels vidéo
- [ ] Exemples d'utilisation par cas d'usage
- [ ] Contribution guidelines
- [ ] Changelog automatisé
- [ ] Discord/GitHub Discussions

---

## Récapitulatif des Agents (29 total)

| Catégorie | Agents | Status |
|-----------|--------|--------|
| **Architecture** (8) | patterns, solid, coupling, debt, modularity, state, structure, types | ✅ Migrés |
| **SEO** (7) | metadata, crawl, content, schema, performance, image, rendering | ✅ Migrés |
| **Tailwind** (8) | typography, layout, accessibility, breakpoints, container-queries, spacing, images, mobile-first | ✅ Migrés |
| **Experts** (7) | architect, nextjs, react, clerk, tailwind, security, techwatch | ✅ Migrés |

---

## Ressources

### Documentation
- [Fumadocs](https://fumadocs.dev/docs)
- [Next.js 16](https://nextjs.org/docs)
- [Tailwind CSS 4](https://tailwindcss.com/docs)

### MCP
- [MCP Specification](https://modelcontextprotocol.io/docs/learn/architecture)
- [TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [Next.js MCP Guide](https://nextjs.org/docs/app/guides/mcp)
- [Vercel MCP Handler](https://github.com/vercel/mcp-handler)
- [Étude de faisabilité](./docs/MCP_FEASIBILITY_STUDY.md)

### Registries
- [GitHub MCP Registry](https://github.blog/ai-and-ml/github-copilot/meet-the-github-mcp-registry-the-fastest-way-to-discover-mcp-servers/)
- [Official MCP Registry](https://modelcontextprotocol.info/tools/registry/)
- [Docker MCP Catalog](https://www.docker.com/blog/docker-mcp-catalog-secure-way-to-discover-and-run-mcp-servers/)

---

*Dernière mise à jour : 12 décembre 2025*
