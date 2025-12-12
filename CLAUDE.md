# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Horus is a documentation library for Claude Code agents built with Next.js 16, Fumadocs, and Tailwind CSS 4. It hosts 29 optimized agents organized into 4 categories: Architecture (8), SEO (7), Tailwind Responsive (8), and Experts (7).

## Commands

```bash
# Development
bun dev          # Start dev server at localhost:3000

# Build & Production
bun build        # Build for production
bun start        # Start production server

# Linting
bun lint         # Run ESLint
```

## Architecture

### Tech Stack
- **Next.js 16** with App Router
- **Fumadocs** for documentation framework (fumadocs-mdx, fumadocs-core, fumadocs-ui)
- **Tailwind CSS 4** with PostCSS
- **bun** as package manager
- **TypeScript** with strict mode

### Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with RootProvider from fumadocs-ui
│   ├── page.tsx                # Landing page with Hero, Features, Footer
│   ├── docs/
│   │   ├── layout.tsx          # DocsLayout wrapper
│   │   └── [[...slug]]/page.tsx # Dynamic docs page with MDX rendering
│   └── api/
│       ├── search/route.ts     # Fumadocs search endpoint
│       └── agent-download/route.ts # ZIP download endpoint for agents
├── lib/
│   ├── source.ts               # Fumadocs loader configuration
│   └── layout.shared.tsx       # Shared navigation config (nav links)
└── components/
    ├── home/                   # Landing page components
    ├── docs/                   # Doc-specific components (CopyMarkdownButton, DownloadAgentButton)
    └── ui/                     # Shared UI components

content/docs/                   # MDX documentation content
├── meta.json                   # Root navigation structure
├── index.mdx                   # Docs landing page
├── architecture/               # Architecture agents
├── seo/                        # SEO agents
├── tailwind-responsive/        # Tailwind responsive agents
└── experts/                    # Expert agents

mdx-components.tsx              # Custom MDX components (semantic tags)
source.config.ts                # Fumadocs MDX configuration
```

### Key Patterns

**Fumadocs Integration**: The documentation system uses fumadocs-mdx for content processing. Content is loaded via `src/lib/source.ts` which imports from the generated `.source/` directory.

**Agent Documentation Structure**: Each agent has 3 files:
- `skill.mdx` - Agent capabilities and description
- `reference.mdx` - Technical reference documentation
- `workflows.mdx` - Use cases and workflow examples

**Custom MDX Components**: The `mdx-components.tsx` file defines semantic wrapper components (SemanticSection) for agent documentation tags like `<ContextQuestions>`, `<PatternSelection>`, `<Analysis>`, etc.

**Path Aliases**: Use `@/*` for imports from `src/` directory. Fumadocs collections are accessed via `fumadocs-mdx:collections/*`.

### API Routes

- `GET /api/search` - Full-text search across documentation
- `GET /api/agent-download?category=X&agent=Y` - Download agent as ZIP (contains SKILL.md, REFERENCE.md, WORKFLOWS.md)
