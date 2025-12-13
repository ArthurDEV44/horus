---
description: Audit complet TailwindCSS responsive avec les 8 agents specialises
---

# Audit TailwindCSS Responsive

Analyse la codebase TailwindCSS en utilisant **tous** les agents specialises en PARALLELE :

1. **horus:tw-mobile-first-expert** - approche mobile-first, utilites non-prefixees pour mobile, breakpoints sm/md/lg/xl/2xl
2. **horus:tw-breakpoints-expert** - breakpoints par defaut (640/768/1024/1280/1536px), custom breakpoints, max-* variants, ranges
3. **horus:tw-layout-expert** - Flexbox (flex, justify, items, gap), Grid (grid-cols, grid-rows, place-items), container
4. **horus:tw-spacing-expert** - padding, margin, gap, space-x/y, espacement coherent, fluid spacing avec clamp()
5. **horus:tw-typography-expert** - tailles responsives (text-sm md:text-base), line-height, prose, fluid typography
6. **horus:tw-images-expert** - aspect-ratio, object-fit/cover/contain, lazy loading, srcset, responsive images
7. **horus:tw-container-queries-expert** - @container, @lg:, @md:, container queries natives v4
8. **horus:tw-accessibility-expert** - sr-only, focus-visible, aria-*, contraste, touch targets, navigation clavier

**IMPORTANT** : Chaque agent DOIT effectuer des recherches web sur la doc officielle TailwindCSS v4 avant d'evaluer.

---

## Plan d'action

Cree `RESPONSIVE_OPTI_PLAN.md` a la racine avec ce format :

```markdown
# Plan d'Optimisation Responsive TailwindCSS - Codebase

**Agents consultes** : [liste des 8 agents]
**Date** : [DATE]
**Version Tailwind** : [v3.x/v4.x]
**Score responsive estime** : [SCORE]/100

---

## Critiques (cassent sur mobile/tablette)

1. [TYPE] Description
   - **Agent** : nom-agent
   - **Breakpoint concerne** : sm/md/lg/xl/2xl
   - **Fichier** : `path/component.tsx:ligne`
   - **Fix** : classes TailwindCSS exactes
   - **Temps** : Xh

## Importants (UX degradee)

1. [TYPE] Description
   - **Agent** : nom-agent
   - **Probleme** : description du comportement
   - **Fichier** : `path/component.tsx:ligne`
   - **Classes** : remplacement exact
   - **Temps** : Xh

## Ameliorations (optimisations)

1. [TYPE] Description
   - **Agent** : nom-agent
   - **Amelioration** : pattern recommande
   - **Fichier** : `path/component.tsx:ligne`
   - **Classes** : implementation TailwindCSS
   - **Temps** : Xh

## Checklist Responsive

- [ ] Viewport meta tag present
- [ ] Approche mobile-first respectee
- [ ] Touch targets >= 44px
- [ ] Images responsives avec aspect-ratio + object-fit + lazy loading
- [ ] Texte lisible >= 16px sur mobile
- [ ] Pas de scroll horizontal
- [ ] Container queries pour composants reutilisables

## Configuration Recommandee

Definir dans @theme (v4) ou tailwind.config.js (v3) :
- Custom breakpoints (xs: 475px, 3xl: 1920px)
- Fluid typography avec clamp() pour sm/base/lg/xl
- Fluid spacing avec clamp() pour sm/md/lg
```

---

## Types de taches

`[MOBILE]` - `[BREAKPOINT]` - `[LAYOUT]` - `[SPACING]` - `[TYPO]` - `[IMAGE]` - `[CONTAINER]` - `[A11Y]` - `[PERF]` - `[OVERFLOW]`

---

## Priorisation

1. **Cassures mobile** (layout broken, overflow, text illisible)
2. **Navigation inaccessible** (touch targets, focus)
3. **Images non-responsives** (CLS, pas de lazy loading)
4. **Incoherences breakpoints** (sauts visuels)
5. **Typography** (tailles, line-height)
6. **Optimisations** (container queries, fluid design)

Chaque tache doit inclure les classes TailwindCSS exactes a implementer.

---

## Checklist par Agent

### horus:tw-mobile-first-expert
- [ ] Classes non-prefixees utilisees pour mobile (pas `sm:` pour mobile)
- [ ] Progressive enhancement : mobile -> sm -> md -> lg -> xl -> 2xl
- [ ] Pas de `hidden` sans breakpoint responsive (ex: `hidden md:block`)
- [ ] Layouts stack sur mobile (flex-col) -> row sur desktop (md:flex-row)
- [ ] Padding/margin augmentent avec la taille d'ecran
- [ ] Navigation collapse sur mobile avec menu hamburger

### horus:tw-breakpoints-expert
- [ ] Breakpoints standards : sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536px)
- [ ] Breakpoints utilises de maniere coherente
- [ ] Pas de sauts visuels entre breakpoints
- [ ] Utilisation de max-* variants pour ranges specifiques (md:max-lg:)
- [ ] Custom breakpoints definis si necessaire (xs, 3xl)
- [ ] Arbitrary breakpoints min-[840px]: utilises avec parcimonie

### horus:tw-layout-expert
**Flexbox**
- [ ] flex + flex-col pour mobile, md:flex-row pour desktop
- [ ] justify-between, justify-center, items-center pour alignement
- [ ] gap-* prefere a space-x/y (fonctionne avec wrap)
- [ ] flex-wrap pour eviter overflow horizontal
- [ ] flex-1, flex-shrink-0, flex-grow pour distribution

**Grid**
- [ ] Pattern grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- [ ] gap-* coherent entre mobile et desktop
- [ ] place-items-center pour centrage rapide
- [ ] col-span-*, row-span-* pour layouts complexes
- [ ] auto-fit/auto-fill avec minmax() pour grilles fluides

**Container**
- [ ] container mx-auto px-4 pour centrage
- [ ] max-w-* pour limiter largeur de contenu
- [ ] Padding horizontal responsive (px-4 md:px-6 lg:px-8)

### horus:tw-spacing-expert
- [ ] Echelle de spacing coherente (4, 8, 12, 16, 24, 32, 48, 64)
- [ ] Padding augmente avec breakpoints (p-4 md:p-6 lg:p-8)
- [ ] gap-* prefere a margins sur enfants
- [ ] space-y-* pour listes verticales sans wrapper grid/flex
- [ ] Fluid spacing avec clamp() pour eviter trop de breakpoints
- [ ] Sections avec padding vertical consequent (py-12 md:py-16 lg:py-24)

### horus:tw-typography-expert
- [ ] Font-size minimum 16px sur mobile (evite zoom iOS)
- [ ] Tailles responsives (text-sm md:text-base lg:text-lg)
- [ ] Line-height adapte (leading-relaxed pour body, leading-tight pour titres)
- [ ] Max-width sur paragraphes (max-w-prose ou max-w-2xl)
- [ ] Plugin @tailwindcss/typography pour content markdown
- [ ] Fluid typography avec clamp() : text-[clamp(1.5rem,1.2rem+1.5vw,2.25rem)]

### horus:tw-images-expert
- [ ] w-full h-auto pour images responsives basiques
- [ ] aspect-video, aspect-square, aspect-[16/9] pour ratios fixes
- [ ] object-cover pour fill sans distorsion, object-contain pour fit
- [ ] loading="lazy" sur images below-the-fold
- [ ] srcset et sizes pour art direction
- [ ] Plugin @tailwindcss/aspect-ratio si v3
- [ ] Placeholder/skeleton pendant chargement

### horus:tw-container-queries-expert (v4 natif, v3 plugin)
- [ ] @container sur parent, @md: @lg: sur enfants
- [ ] Named containers @container/sidebar -> @md/sidebar:
- [ ] Container queries pour composants reutilisables (cards, widgets)
- [ ] Preferer container queries aux media queries pour composants isoles
- [ ] Breakpoints container : @xs(20rem) @sm(24rem) @md(28rem) @lg(32rem)

### horus:tw-accessibility-expert
- [ ] Touch targets >= 44x44px (min-h-11 min-w-11 ou p-3)
- [ ] focus-visible:ring-2 focus-visible:ring-offset-2
- [ ] sr-only pour texte accessible cache visuellement
- [ ] Contraste suffisant (4.5:1 pour texte, 3:1 pour UI)
- [ ] aria-expanded, aria-controls sur toggles responsive
- [ ] Skip links pour navigation clavier
- [ ] :focus-within pour groupes interactifs

---

## Patterns a Rechercher

Chaque agent doit rechercher sur le web les patterns officiels TailwindCSS pour :

- **Navigation responsive** : header avec menu hamburger mobile, nav desktop
- **Card grid responsive** : grille adaptative avec images et contenu
- **Hero section fluid** : titres, sous-titres et CTA adaptatifs
- **Container query card** : composants qui s'adaptent a leur conteneur parent
- **Footer responsive** : colonnes qui stackent sur mobile
- **Sidebar responsive** : drawer mobile, sidebar fixe desktop
- **Table responsive** : scroll horizontal ou cards sur mobile
- **Form responsive** : inputs full-width mobile, inline desktop
