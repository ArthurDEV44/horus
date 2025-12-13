---
description: Audit complet SEO avec les 7 agents specialises
---

# Audit SEO Codebase

Analyse la codebase SEO en utilisant **tous** les agents specialises en PARALLELE :

1. **horus:seo-metadata-expert** - titles, descriptions, OpenGraph, Twitter Cards, canonical
2. **horus:seo-schema-expert** - JSON-LD, donnees structurees Schema.org
3. **horus:seo-crawl-expert** - sitemap.xml, robots.txt, indexation Google
4. **horus:seo-performance-expert** - Core Web Vitals (LCP <= 2.5s, INP <= 200ms, CLS < 0.1)
5. **horus:seo-content-expert** - headings H1-H6, alt text, semantic HTML
6. **horus:seo-rendering-expert** - SSR/SSG/ISR, strategie de rendu Next.js
7. **horus:seo-image-expert** - next/image, formats WebP/AVIF, lazy loading

**IMPORTANT** : Chaque agent DOIT effectuer des recherches web sur la doc officielle Next.js et Schema.org avant d'evaluer.

---

## Plan d'action

Cree `SEO_OPTI_PLAN.md` a la racine avec ce format :

```markdown
# Plan d'Optimisation SEO - Codebase

**Agents consultes** : [liste des 7 agents]
**Date** : [DATE]
**Score Lighthouse estime** : [SCORE]/100

---

## Critiques (bloquent l'indexation)

1. [TYPE] Description
   - **Agent** : nom-agent
   - **Impact SEO** : critere Google mesurable
   - **Fichier** : `path/file.tsx:ligne`
   - **Fix** : code/config exact
   - **Temps** : Xh

## Importants (penalisent le ranking)

1. [TYPE] Description
   - **Agent** : nom-agent
   - **Impact SEO** : effet sur le positionnement
   - **Fichier** : `path/file.tsx:ligne`
   - **Fix** : code/config exact
   - **Temps** : Xh

## Ameliorations (optimisations)

1. [TYPE] Description
   - **Agent** : nom-agent
   - **Benefice SEO** : gain attendu
   - **Fichier** : `path/file.tsx:ligne`
   - **Fix** : code/config exact
   - **Temps** : Xh

## Checklist Core Web Vitals

- [ ] LCP : [etat actuel] -> objectif <= 2.5s
- [ ] INP : [etat actuel] -> objectif <= 200ms
- [ ] CLS : [etat actuel] -> objectif < 0.1
- [ ] TTFB : [etat actuel] -> objectif < 800ms
- [ ] FCP : [etat actuel] -> objectif < 1.8s

## Checklist Technique SEO

- [ ] robots.txt present et valide
- [ ] sitemap.xml genere dynamiquement
- [ ] Canonical URLs sur toutes les pages
- [ ] Meta robots index/noindex appropries
- [ ] Structured data JSON-LD valide
- [ ] Open Graph complet (og:title, og:description, og:image)
- [ ] Twitter Cards configurees
```

---

## Types de taches

`[META]` - `[SCHEMA]` - `[CWV]` - `[CRAWL]` - `[SEM]` - `[IMG]` - `[URL]` - `[RENDER]`

---

## Priorisation

1. **Blocage indexation** (robots.txt, noindex errone, erreurs 4xx/5xx)
2. **Core Web Vitals** (LCP, INP, CLS hors seuils)
3. **Metadata manquantes** (titles, descriptions vides)
4. **Structured data invalide** (JSON-LD avec erreurs)
5. **Images non optimisees** (LCP, CLS)
6. **Semantic HTML** (headings, alt text)

Chaque tache doit inclure le code/config exact a implementer.

---

## Checklist par Agent

### horus:seo-metadata-expert
- [ ] Title unique par page (50-60 caracteres)
- [ ] Meta description unique par page (150-160 caracteres)
- [ ] Canonical URL sur chaque page
- [ ] Open Graph complet (og:title, og:description, og:image, og:url, og:type)
- [ ] Twitter Cards (twitter:card, twitter:title, twitter:description, twitter:image)
- [ ] Viewport meta tag present
- [ ] Charset UTF-8 declare

### horus:seo-schema-expert
- [ ] JSON-LD valide (tester avec Rich Results Test)
- [ ] Schema.org types appropries (Organization, WebSite, Article, Product, etc.)
- [ ] Breadcrumbs structure data
- [ ] FAQ schema si applicable
- [ ] LocalBusiness si applicable
- [ ] Pas de donnees structurees orphelines

### horus:seo-crawl-expert
- [ ] robots.txt present et valide
- [ ] sitemap.xml dynamique avec toutes les pages
- [ ] sitemap.xml reference dans robots.txt
- [ ] Pas de pages importantes bloquees
- [ ] URLs propres (pas de parametres inutiles)
- [ ] Redirections 301 pour anciennes URLs
- [ ] Pas de chaines de redirections (>2)

### horus:seo-performance-expert
- [ ] LCP <= 2.5s (element LCP identifie et optimise)
- [ ] INP <= 200ms (interactions principales testees)
- [ ] CLS < 0.1 (pas de layout shifts)
- [ ] TTFB < 800ms (optimisation serveur)
- [ ] Compression gzip/brotli active
- [ ] Cache headers configures

### horus:seo-content-expert
- [ ] Un seul H1 par page
- [ ] Hierarchie H1 > H2 > H3 respectee
- [ ] Alt text sur toutes les images
- [ ] Texte alternatif descriptif (pas "image1.jpg")
- [ ] Semantic HTML (header, main, footer, nav, article)
- [ ] Liens internes avec texte d'ancrage descriptif

### horus:seo-rendering-expert
- [ ] SSG pour pages statiques
- [ ] SSR pour pages dynamiques
- [ ] ISR avec revalidation appropriee
- [ ] Pas de contenu client-only critique pour SEO
- [ ] generateStaticParams pour routes dynamiques
- [ ] Streaming pour pages lourdes

### horus:seo-image-expert
- [ ] next/image pour toutes les images
- [ ] Formats modernes (WebP, AVIF)
- [ ] Attributs width/height pour eviter CLS
- [ ] Lazy loading pour images below-the-fold
- [ ] Priority sur image LCP
- [ ] Srcset/sizes pour responsive
- [ ] Alt text descriptif

---

## Patterns a Rechercher

Chaque agent doit rechercher sur le web les best practices pour :

- **Next.js SEO 2025** : metadata API, generateMetadata, sitemap.ts
- **Core Web Vitals optimization** : LCP, INP, CLS fixes
- **Schema.org patterns** : Article, Product, Organization, BreadcrumbList
- **Image optimization** : next/image, formats, lazy loading
- **SSR vs SSG vs ISR** : quand utiliser chaque strategie
- **Google Search Console** : erreurs courantes et corrections

---

## Outils de Validation

Apres implementation, valider avec :

- **Google Rich Results Test** : structured data
- **PageSpeed Insights** : Core Web Vitals
- **Google Search Console** : indexation et erreurs
- **Schema.org Validator** : JSON-LD
- **Lighthouse** : score SEO global
- **Screaming Frog** : audit technique complet
