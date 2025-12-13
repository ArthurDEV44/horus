---
description: Audit complet d'architecture avec les 10 agents specialises
---

# Audit Architecture Codebase

Analyse l'architecture de la codebase en utilisant **tous** les agents specialises en PARALLELE :

1. **horus:structure-expert** - Organisation des dossiers, separation des responsabilites, clean architecture
2. **horus:solid-expert** - Principes SOLID (SRP, OCP, LSP, ISP, DIP)
3. **horus:patterns-expert** - Design patterns React et backend (Container/Presentational, Composition, Hooks, Factory, Repository)
4. **horus:coupling-expert** - Dependances circulaires, couplage/cohesion, optimisation imports
5. **horus:state-expert** - Gestion d'etat (Context, Zustand, TanStack Query), prop drilling, re-renders
6. **horus:types-expert** - Typage TypeScript (interfaces, generiques, inference, any/unknown)
7. **horus:modularity-expert** - Architecture modulaire, feature-based modules, encapsulation, exports
8. **horus:debt-expert** - Dette technique, code smells, dead code, complexite cyclomatique
9. **horus:nextjs-expert** - App Router, Server Components, Server Actions, caching, performance
10. **horus:react-expert** - React 19+, hooks modernes, patterns de composition, accessibilite

**IMPORTANT** : Chaque agent DOIT effectuer des recherches web sur les best practices officielles avant d'evaluer.

---

## Plan d'action

Cree `ARCHI_OPTI_PLAN.md` a la racine avec ce format :

```markdown
# Plan d'Optimisation Architecture - Codebase

**Agents consultes** : [liste des 10 agents]
**Date** : [DATE]
**Score maintenabilite estime** : [SCORE]/100

---

## Critiques (bloquent la scalabilite)

1. [TYPE] Description
   - **Agent** : nom-agent
   - **Principe viole** : SOLID/Pattern/Convention
   - **Fichier(s)** : `path/file.tsx:ligne`
   - **Refacto** : code/structure exact
   - **Temps** : Xh

## Importants (dette technique active)

1. [TYPE] Description
   - **Agent** : nom-agent
   - **Impact** : description de l'impact sur la maintenabilite
   - **Fichier(s)** : `path/file.tsx:ligne`
   - **Refacto** : code/structure exact
   - **Temps** : Xh

## Ameliorations (optimisations)

1. [TYPE] Description
   - **Agent** : nom-agent
   - **Benefice** : gain attendu
   - **Fichier(s)** : `path/file.tsx:ligne`
   - **Refacto** : code/structure exact
   - **Temps** : Xh

## Metriques Architecture

- [ ] Dependances circulaires : [nombre] -> objectif 0
- [ ] Couplage moyen : [score] -> objectif <3
- [ ] Fichiers >300 LOC : [nombre] -> objectif 0
- [ ] Types `any` : [nombre] -> objectif 0
- [ ] Fonctions >50 LOC : [nombre] -> objectif 0
- [ ] Complexite cyclomatique max : [score] -> objectif <10
- [ ] Couverture tests : [%] -> objectif >80%

## Structure Recommandee

src/
  app/           # Next.js App Router
  components/    # Composants UI reutilisables
  features/      # Modules metier (feature-based)
  lib/           # Utilitaires et configurations
  hooks/         # Custom hooks partages
  types/         # Types TypeScript globaux
  services/      # Acces donnees et APIs
```

---

## Types de taches

`[STRUCT]` - `[SOLID]` - `[PATTERN]` - `[COUPLING]` - `[STATE]` - `[TYPE]` - `[MODULE]` - `[DEBT]` - `[NEXTJS]` - `[REACT]`

---

## Priorisation

1. **Dependances circulaires** (bloquent le build/refactoring)
2. **Violations SOLID critiques** (classes god, couplage fort)
3. **Types any/unknown** (perte de type-safety)
4. **Code mort et dette technique** (complexite inutile)
5. **Patterns anti-React** (prop drilling, re-renders excessifs)
6. **Structure non-standard** (difficulte onboarding)

Chaque tache doit inclure le refactoring exact a implementer.

---

## Checklist par Agent

### horus:structure-expert
- [ ] Separation claire src/app, src/components, src/lib
- [ ] Feature-based modules pour logique metier
- [ ] Pas de logique metier dans les composants UI
- [ ] Index files pour re-exports propres
- [ ] Colocation des fichiers lies (component + test + styles)

### horus:solid-expert
- [ ] **SRP** : Une classe/fonction = une responsabilite
- [ ] **OCP** : Extensions sans modification du code existant
- [ ] **LSP** : Sous-types substituables aux types parents
- [ ] **ISP** : Interfaces specifiques, pas d'interfaces god
- [ ] **DIP** : Dependances vers abstractions, pas implementations

### horus:patterns-expert
- [ ] Container/Presentational pour separation logique/UI
- [ ] Composition over inheritance
- [ ] Custom hooks pour logique reutilisable
- [ ] Factory pattern pour creation d'objets complexes
- [ ] Repository pattern pour acces donnees

### horus:coupling-expert
- [ ] Zero dependances circulaires
- [ ] Imports unidirectionnels (features -> shared, jamais l'inverse)
- [ ] Facade pattern pour modules complexes
- [ ] Cohesion forte au sein des modules
- [ ] Couplage faible entre modules

### horus:state-expert
- [ ] State colocalise au plus proche de son usage
- [ ] Context pour state global bas-frequence
- [ ] Zustand/Jotai pour state global haute-frequence
- [ ] TanStack Query pour server state
- [ ] Pas de prop drilling >2 niveaux

### horus:types-expert
- [ ] Zero `any` (utiliser `unknown` si necessaire)
- [ ] Interfaces pour objets, types pour unions/intersections
- [ ] Generiques pour fonctions/composants reutilisables
- [ ] Type inference maximale (eviter annotations redondantes)
- [ ] Discriminated unions pour etats

### horus:modularity-expert
- [ ] Exports explicites via index.ts
- [ ] API publique claire par module
- [ ] Encapsulation des details d'implementation
- [ ] Independance des modules (testables isolement)
- [ ] Barrel files sans re-exports circulaires

### horus:debt-expert
- [ ] Zero code mort (fonctions/variables non utilisees)
- [ ] Complexite cyclomatique <10 par fonction
- [ ] Pas de TODO/FIXME anciens (>30 jours)
- [ ] Duplication de code <5%
- [ ] Fonctions <50 LOC, fichiers <300 LOC

### horus:nextjs-expert
- [ ] Server Components par defaut
- [ ] "use client" uniquement si necessaire
- [ ] Server Actions pour mutations
- [ ] Caching strategique (revalidate, tags)
- [ ] Streaming et Suspense pour UX

### horus:react-expert
- [ ] Hooks modernes (useTransition, useOptimistic)
- [ ] React Compiler compatible (pas de useMemo/useCallback prematures)
- [ ] Error Boundaries pour gestion d'erreurs
- [ ] Accessibilite (ARIA, keyboard navigation)
- [ ] Testing avec React Testing Library

---

## Patterns a Rechercher

Chaque agent doit rechercher sur le web les best practices pour :

- **Clean Architecture Next.js** : structure de projet moderne
- **Feature-Sliced Design** : organisation par fonctionnalite
- **React Server Components patterns** : composition RSC/Client
- **TypeScript strict patterns** : typage robuste
- **State management 2025** : patterns actuels (Zustand, TanStack Query)
- **Testing strategies** : unit, integration, e2e
