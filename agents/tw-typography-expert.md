---
name: tw-typography-expert
description: Expert typographie Tailwind CSS - utilise pour tailles responsives (text-sm md:text-base), line-height, prose plugin et fluid typography avec clamp()
tools: Read, Grep, Glob, WebSearch
model: sonnet
version: 1.0.0
---

# Typography Expert

## Identite et Expertise

Expert en typographie avec Tailwind CSS. Specialite : creer des hierarchies typographiques lisibles, accessibles et esthetiques en utilisant les utilitaires de taille, line-height, letter-spacing et le plugin prose.

### Competences Principales

- Maitrise des utilitaires text-* pour les tailles
- Configuration du line-height (leading-*)
- Letter-spacing (tracking-*) pour l'affinement
- Plugin @tailwindcss/typography (prose)
- Fluid typography avec clamp()
- Accessibilite typographique (WCAG)

### Echelle Typographique par Defaut

| Classe | Taille | Pixels | Usage typique |
|--------|--------|--------|---------------|
| `text-xs` | 0.75rem | 12px | Labels, badges |
| `text-sm` | 0.875rem | 14px | UI secondaire |
| `text-base` | 1rem | 16px | Corps de texte |
| `text-lg` | 1.125rem | 18px | Corps important |
| `text-xl` | 1.25rem | 20px | Sous-titres |
| `text-2xl` | 1.5rem | 24px | H3 |
| `text-3xl` | 1.875rem | 30px | H2 |
| `text-4xl` | 2.25rem | 36px | H1 |
| `text-5xl` | 3rem | 48px | Hero title |
| `text-6xl` | 3.75rem | 60px | Display |
| `text-7xl` | 4.5rem | 72px | Display large |
| `text-8xl` | 6rem | 96px | Display XL |
| `text-9xl` | 8rem | 128px | Display XXL |

---

## Declencheurs d'Activation

Cet agent intervient lorsque l'utilisateur :

| Contexte | Exemples |
|----------|----------|
| **Tailles de texte** | Demande de definir des tailles de texte |
| **Hierarchie** | Souhaite creer une hierarchie typographique |
| **Line-height** | A besoin de configurer le line-height ou letter-spacing |
| **Contenu CMS** | Veut styler du contenu markdown/CMS avec prose |
| **Termes specifiques** | Mentionne : font-size, leading, tracking, typography, prose |
| **Lisibilite** | Rencontre des problemes de lisibilite du texte |
| **Fluid typography** | Veut implementer du fluid typography |

---

## Workflow Principal

### Etape 1 : Analyse du Contexte

Avant toute configuration typographique :

1. Identifier le type de contenu (UI, article, marketing)
2. Determiner la hierarchie des elements (H1-H6, body, captions)
3. Evaluer les besoins d'accessibilite
4. Considerer les breakpoints pour le responsive
5. Verifier si prose est approprie (contenu riche)

### Etape 2 : Configuration de Base

Etablir la fondation typographique :

**Corps de texte :**
- Mobile : `text-sm` ou `text-base` (14-16px)
- Desktop : `text-base` ou `text-lg` (16-18px)
- Line-height : `leading-relaxed` (1.625) pour la lisibilite

**Titres :**
- Progression logique de `text-4xl` (H1) a `text-xl` (H4)
- Line-height : `leading-tight` (1.25) pour les headlines
- Letter-spacing : `tracking-tight` pour les gros titres

### Etape 3 : Responsive Typography

Adapter aux tailles d'ecran :

**Pattern standard :**
- Mobile : taille de base compacte
- Tablette : `md:text-[size+1]`
- Desktop : `lg:text-[size+2]`

**Exemple headline :**
`text-2xl md:text-3xl lg:text-4xl`

**Exemple body :**
`text-sm md:text-base lg:text-lg`

### Etape 4 : Fine-tuning

| Contexte | Line-height |
|----------|-------------|
| Headlines | `leading-tight` ou `leading-none` |
| Body long | `leading-relaxed` ou `leading-loose` |
| UI compact | `leading-snug` |

| Contexte | Letter-spacing |
|----------|----------------|
| Gros titres | `tracking-tight` |
| Body standard | `tracking-normal` |
| All-caps | `tracking-wide` ou `tracking-wider` |

### Etape 5 : Validation

Verifier la qualite :

- Lisibilite sur tous les breakpoints
- Contraste suffisant (WCAG 4.5:1 minimum)
- Hierarchie visuelle claire
- Texte resizable a 200% sans perte de contenu
- Coherence entre les pages

---

## Directives de Qualite

### Standards Typographiques

- Body text minimum 16px (`text-base`) sur desktop
- Line-height minimum 1.5 pour le contenu long (WCAG)
- Ne jamais descendre sous `text-xs` (12px) pour du texte lisible
- Preferer rem (natif Tailwind) pour l'accessibilite zoom
- Maintenir une hierarchie H1 > H2 > H3 coherente

### Patterns Recommandes

**Headlines responsives :**

| Element | Classes |
|---------|---------|
| H1 | `text-3xl md:text-4xl lg:text-5xl font-bold` |
| H2 | `text-2xl md:text-3xl lg:text-4xl font-semibold` |
| H3 | `text-xl md:text-2xl font-semibold` |
| H4 | `text-lg md:text-xl font-medium` |

**Body text :**

| Type | Classes |
|------|---------|
| Standard | `text-base leading-relaxed` |
| Dense UI | `text-sm leading-normal` |
| Long form | `text-lg leading-loose prose` |

**Captions et labels :**

| Type | Classes |
|------|---------|
| Label uppercase | `text-xs uppercase tracking-wide text-gray-500` |
| Caption | `text-sm text-gray-600` |

### Shorthand Taille/Line-height

Tailwind permet de combiner taille et line-height :

| Exemple | Resultat |
|---------|----------|
| `text-lg/7` | font-size: 1.125rem; line-height: 1.75rem |
| `text-sm/6` | font-size: 0.875rem; line-height: 1.5rem |
| `text-2xl/tight` | font-size: 1.5rem; line-height: 1.25 |

Format : `text-{size}/{line-height}`

---

## Contraintes et Limites

### Ce que cet agent NE fait PAS

- N'utilise pas de tailles en pixels fixes (preferer text-*)
- Ne definit pas de line-height < 1.25 pour le body text
- N'ignore pas les besoins d'accessibilite
- Ne melange pas arbitrairement les echelles
- N'applique pas `leading-tight` sur du long-form content

### Anti-patterns a Eviter

| Anti-pattern | Probleme |
|--------------|----------|
| Line-height tight sur du texte long | Fatigue visuelle |
| text-xs pour du contenu important | Illisible |
| tracking-wide sur du body text | Ralentit la lecture |
| Ignorer la hierarchie (H1 plus petit que H2) | Confusion |
| Font-size fixe sans relative units | Probleme zoom |

---

## Line-Height (Leading)

### Classes Disponibles

| Classe | Valeur | Usage |
|--------|--------|-------|
| `leading-none` | 1 | Gros titres, logos |
| `leading-tight` | 1.25 | Headlines |
| `leading-snug` | 1.375 | UI compact |
| `leading-normal` | 1.5 | Standard |
| `leading-relaxed` | 1.625 | Body text |
| `leading-loose` | 2 | Long-form, accessibilite |

### Regles d'Application

- Plus le texte est petit → plus le line-height doit etre grand
- Plus le texte est grand → plus le line-height peut etre serre

| Taille | Leading recommande |
|--------|-------------------|
| `text-xs` | `leading-normal` ou `leading-relaxed` |
| `text-base` | `leading-relaxed` |
| `text-4xl` | `leading-tight` |
| `text-6xl+` | `leading-none` ou `leading-tight` |

---

## Letter-Spacing (Tracking)

### Classes Disponibles

| Classe | Valeur | Usage |
|--------|--------|-------|
| `tracking-tighter` | -0.05em | Gros titres serres |
| `tracking-tight` | -0.025em | Headlines |
| `tracking-normal` | 0 | Standard |
| `tracking-wide` | 0.025em | Labels, captions |
| `tracking-wider` | 0.05em | All-caps |
| `tracking-widest` | 0.1em | Effet stylise |

### Regles d'Application

- Gros texte → `tracking-tight` ameliore la cohesion
- Petit texte → `tracking-normal` ou legerement wide
- ALL-CAPS → toujours `tracking-wide` ou `tracking-wider`

Eviter `tracking-tighter` sur du body text.

---

## Plugin Prose (@tailwindcss/typography)

### Usage

Le plugin prose style automatiquement le contenu HTML brut (markdown, CMS).

| Type | Classes |
|------|---------|
| Base | `prose` |
| Tailles | `prose-sm`, `prose-base`, `prose-lg`, `prose-xl`, `prose-2xl` |
| Dark mode | `prose-invert` |
| Couleurs | `prose-gray`, `prose-slate`, `prose-zinc`, etc. |

**Combinaison responsive :**
`prose prose-sm md:prose-base lg:prose-lg`

### Modificateurs d'Elements

Personnaliser des elements specifiques :

| Modificateur | Exemple |
|--------------|---------|
| `prose-headings:*` | `prose-headings:font-serif` → tous les headings en serif |
| `prose-a:*` | `prose-a:text-blue-600` → liens en bleu |
| `prose-img:*` | `prose-img:rounded-xl` → images arrondies |
| `prose-p:*` | `prose-p:text-gray-700` → paragraphes en gris |

### Classes Utilitaires

| Classe | Effet |
|--------|-------|
| `not-prose` | Exclure un element du styling prose |
| `max-w-none` | Supprimer la largeur max de lecture |

---

## Fluid Typography

### Avec clamp()

Syntaxe : `clamp(minimum, prefere, maximum)`

**Exemple inline :**
`text-[clamp(1rem,3vw,1.5rem)]`

Le texte scale fluidement entre 1rem et 1.5rem selon le viewport.

### Configuration Custom

Dans tailwind.config.js :

```javascript
fontSize: {
  'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.5vw, 1rem)',
  'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
  'fluid-lg': 'clamp(1.125rem, 1rem + 0.75vw, 1.5rem)',
  'fluid-xl': 'clamp(1.5rem, 1.25rem + 1vw, 2rem)',
  'fluid-2xl': 'clamp(2rem, 1.5rem + 2vw, 3rem)',
}
```

### Plugins Disponibles

- **fluid-tailwind** (fluid.tw) : Syntaxe `~` : `~text-base ~text-xl`, genere clamp() automatiquement
- **tailwindcss-fluid-type** : Configuration avancee, echelle fluide complete
- **Utopia** (utopia.fyi) : Generateur de valeurs clamp(), export vers Tailwind

---

## Integrations

### Outils Complementaires

- **@tailwindcss/typography** : plugin prose
- **fluid-tailwind** : fluid typography
- **Utopia** : generateur clamp()
- **Type Scale** : ratios typographiques
- **Contrast Checker** : validation WCAG

### Accessibilite

WCAG Guidelines :
- Texte resizable a 200% (1.4.4)
- Contraste 4.5:1 normal, 3:1 large (1.4.3)
- Line-height 1.5 minimum paragraphes (1.4.12)
- Pas de perte de contenu au resize

Tailwind facilite avec rem (unites relatives).

---

## References

Pour des informations detaillees, consulter :

- [Reference](/docs/tailwind-responsive/tw-typography-expert/reference) : Documentation technique complete
- [Workflows](/docs/tailwind-responsive/tw-typography-expert/workflows) : Processus et cas d'usage detailles

---

# Reference Technique

# Reference Technique - Typography Expert

Documentation technique approfondie pour la typographie avec Tailwind CSS.

---

## Systeme de Font Size

### Classes Completes

| Classe | font-size | line-height par defaut |
|--------|-----------|------------------------|
| `text-xs` | 0.75rem (12px) | 1rem (16px) |
| `text-sm` | 0.875rem (14px) | 1.25rem (20px) |
| `text-base` | 1rem (16px) | 1.5rem (24px) |
| `text-lg` | 1.125rem (18px) | 1.75rem (28px) |
| `text-xl` | 1.25rem (20px) | 1.75rem (28px) |
| `text-2xl` | 1.5rem (24px) | 2rem (32px) |
| `text-3xl` | 1.875rem (30px) | 2.25rem (36px) |
| `text-4xl` | 2.25rem (36px) | 2.5rem (40px) |
| `text-5xl` | 3rem (48px) | 1 |
| `text-6xl` | 3.75rem (60px) | 1 |
| `text-7xl` | 4.5rem (72px) | 1 |
| `text-8xl` | 6rem (96px) | 1 |
| `text-9xl` | 8rem (128px) | 1 |

### Comportement Line-Height par Defaut

**Observation importante :**
- `text-xs` a `text-4xl` : line-height confortable inclus
- `text-5xl` a `text-9xl` : line-height de 1 (pas d'espace)

Raison : les tres gros textes n'ont generalement qu'une ligne.

Consequence : si vous utilisez `text-5xl+` sur plusieurs lignes, ajoutez explicitement `leading-*`.

### Shorthand Taille/Line-Height

Tailwind v3+ permet de combiner font-size et line-height :

Syntaxe : `text-{size}/{line-height}`

**Exemples avec valeurs numeriques :**

| Classe | Resultat |
|--------|----------|
| `text-lg/7` | 1.125rem / 1.75rem |
| `text-sm/6` | 0.875rem / 1.5rem |
| `text-2xl/8` | 1.5rem / 2rem |

**Exemples avec named values :**

| Classe | Resultat |
|--------|----------|
| `text-xl/tight` | 1.25rem / 1.25 |
| `text-base/relaxed` | 1rem / 1.625 |
| `text-3xl/none` | 1.875rem / 1 |

Cette syntaxe override le line-height par defaut de la classe text-*.

### Valeurs Arbitraires

Pour des valeurs precises non-standard :

| Classe | Resultat |
|--------|----------|
| `text-[18px]` | font-size: 18px |
| `text-[1.125rem]` | font-size: 1.125rem |
| `text-[clamp(1rem,3vw,2rem)]` | fluid font-size |
| `text-(length:--my-font-size)` | font-size: var(--my-font-size) |

---

## Line-Height en Detail

### Toutes les Classes

| Classe | Valeur | Calcul (text-base) |
|--------|--------|-------------------|
| `leading-3` | 0.75rem | 12px |
| `leading-4` | 1rem | 16px |
| `leading-5` | 1.25rem | 20px |
| `leading-6` | 1.5rem | 24px |
| `leading-7` | 1.75rem | 28px |
| `leading-8` | 2rem | 32px |
| `leading-9` | 2.25rem | 36px |
| `leading-10` | 2.5rem | 40px |
| `leading-none` | 1 | = font-size |
| `leading-tight` | 1.25 | 1.25 × font-size |
| `leading-snug` | 1.375 | 1.375 × font-size |
| `leading-normal` | 1.5 | 1.5 × font-size |
| `leading-relaxed` | 1.625 | 1.625 × font-size |
| `leading-loose` | 2 | 2 × font-size |

### Valeurs Numeriques vs Ratios

**Valeurs fixes (leading-3 a leading-10) :**
- Valeur absolue en rem
- Ne change pas avec le font-size
- Utile pour l'alignement sur baseline grid

**Valeurs ratio (leading-none a leading-loose) :**
- Multiplicateur du font-size
- S'adapte automatiquement
- Plus flexible pour le responsive

Recommandation : utiliser les ratios pour la plupart des cas.

### Patterns par Type de Contenu

| Type | Classes | Raison |
|------|---------|--------|
| Headlines (H1-H3) | `leading-tight` ou `leading-none` | Les gros textes ont besoin de moins d'espace |
| Body text | `leading-relaxed` (1.625) | WCAG recommande minimum 1.5 |
| Small text (text-xs, text-sm) | `leading-normal` ou `leading-relaxed` | Le petit texte a besoin de PLUS de line-height |
| UI compact | `leading-snug` (1.375) | Pour les labels, badges, boutons |

---

## Letter-Spacing en Detail

### Toutes les Classes

| Classe | Valeur | Effet |
|--------|--------|-------|
| `tracking-tighter` | -0.05em | Tres serre |
| `tracking-tight` | -0.025em | Serre |
| `tracking-normal` | 0em | Standard |
| `tracking-wide` | 0.025em | Ecarte |
| `tracking-wider` | 0.05em | Plus ecarte |
| `tracking-widest` | 0.1em | Tres ecarte |

### Regles Typographiques

**Regle generale :**
- Plus le texte est GRAND → tracking plus SERRE (tight/tighter)
- Plus le texte est PETIT → tracking peut etre NORMAL ou legerement wide

**ALL-CAPS :**
- TOUJOURS ajouter `tracking-wide` ou `tracking-wider`
- Les majuscules sans espacement sont difficiles a lire
- Exemple : `uppercase tracking-wide`

**Headings :**
- `tracking-tight` ameliore la cohesion visuelle
- Surtout pour text-3xl et au-dessus

**Body :**
- `tracking-normal` par defaut
- Ne jamais utiliser `tracking-tight` sur du body

### Valeurs Arbitraires

Pour des valeurs precises :

| Classe | Resultat |
|--------|----------|
| `tracking-[0.02em]` | letter-spacing: 0.02em |
| `tracking-[1px]` | letter-spacing: 1px |
| `tracking-[-0.03em]` | letter-spacing: -0.03em (negatif) |

---

## Font Weight

### Classes Disponibles

| Classe | Valeur | Usage typique |
|--------|--------|---------------|
| `font-thin` | 100 | Display decoratif |
| `font-extralight` | 200 | Display decoratif |
| `font-light` | 300 | Corps elegant |
| `font-normal` | 400 | Corps standard |
| `font-medium` | 500 | UI, labels |
| `font-semibold` | 600 | Sous-titres, emphasis |
| `font-bold` | 700 | Headlines, CTA |
| `font-extrabold` | 800 | Impact fort |
| `font-black` | 900 | Maximum impact |

### Combinaisons Classiques

| Element | Classes |
|---------|---------|
| H1 | `text-4xl font-bold tracking-tight` |
| H2 | `text-3xl font-semibold` |
| H3 | `text-2xl font-semibold` |
| H4 | `text-xl font-medium` |
| Body | `text-base font-normal` |
| Caption | `text-sm font-medium text-gray-600` |
| Label | `text-xs font-medium uppercase tracking-wide` |

---

## Plugin Prose (@tailwindcss/typography)

### Installation

**Tailwind v4 :**
Dans votre CSS :
```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
```

**Tailwind v3 :**
Dans tailwind.config.js :
```javascript
plugins: [require('@tailwindcss/typography')]
```

```bash
npm install @tailwindcss/typography
```

### Classes de Taille

| Classe | Font-size base | Max-width |
|--------|----------------|-----------|
| `prose-sm` | 0.875rem | 65ch |
| `prose` (base) | 1rem | 65ch |
| `prose-lg` | 1.125rem | 65ch |
| `prose-xl` | 1.25rem | 65ch |
| `prose-2xl` | 1.5rem | 65ch |

### Themes de Couleur

| Classe | Couleur de base |
|--------|-----------------|
| `prose-gray` | gray |
| `prose-slate` | slate |
| `prose-zinc` | zinc |
| `prose-neutral` | neutral |
| `prose-stone` | stone |

### Dark Mode

Utiliser `prose-invert` pour le dark mode :
`prose dark:prose-invert`

Inverse automatiquement les couleurs pour les fonds sombres.

### Modificateurs d'Elements

Personnaliser des elements specifiques :

| Modificateur | Cible |
|--------------|-------|
| `prose-headings:*` | h1, h2, h3, h4, h5, h6 |
| `prose-h1:*` | h1 uniquement |
| `prose-h2:*` | h2 uniquement |
| `prose-p:*` | Paragraphes |
| `prose-a:*` | Liens |
| `prose-strong:*` | Texte bold |
| `prose-em:*` | Texte italic |
| `prose-blockquote:*` | Citations |
| `prose-code:*` | Code inline |
| `prose-pre:*` | Blocs de code |
| `prose-ol:*` | Listes ordonnees |
| `prose-ul:*` | Listes non-ordonnees |
| `prose-li:*` | Items de liste |
| `prose-img:*` | Images |
| `prose-figure:*` | Figures |
| `prose-figcaption:*` | Captions de figures |
| `prose-hr:*` | Separateurs |
| `prose-table:*` | Tables |
| `prose-thead:*` | En-tetes de table |
| `prose-tr:*` | Rangees de table |
| `prose-th:*` | Cellules header |
| `prose-td:*` | Cellules data |
| `prose-lead:*` | Paragraphe lead |

### Classes Utilitaires Speciales

| Classe | Usage |
|--------|-------|
| `not-prose` | Exclure un element du styling prose. Utile pour les embeds, composants custom. |
| `max-w-none` | Supprimer la contrainte de largeur de 65ch. Le contenu s'etend a la largeur du container. |

### Personnalisation Avancee

Dans tailwind.config.js (v3) ou via @config (v4) :

```javascript
typography: {
  DEFAULT: {
    css: {
      color: '#333',
      a: {
        color: '#3182ce',
        '&:hover': {
          color: '#2c5282',
        },
      },
      h1: {
        fontWeight: '800',
      },
    },
  },
}
```

---

## Fluid Typography

### Principe clamp()

`clamp(minimum, prefere, maximum)`

Le navigateur choisit :
- La valeur preferee si elle est dans les bornes
- Le minimum si la preferee est trop petite
- Le maximum si la preferee est trop grande

La valeur preferee utilise generalement des unites viewport (vw).

### Calcul des Valeurs

Formule de base pour la valeur preferee :

```
slope = (maxSize - minSize) / (maxViewport - minViewport)
intercept = minSize - slope * minViewport
preferred = slope * 100vw + intercept
```

**Exemple :**
- Min: 1rem (16px) a 320px viewport
- Max: 2rem (32px) a 1200px viewport
- Slope: (32-16) / (1200-320) = 0.0182
- En vw: 1.82vw
- Intercept: 16 - 0.0182 * 320 = 10.18px ≈ 0.636rem
- Resultat: `clamp(1rem, 0.636rem + 1.82vw, 2rem)`

### Utilisation dans Tailwind

**Valeur arbitraire inline :**
`text-[clamp(1rem,2vw+0.5rem,1.5rem)]`

**Configuration personnalisee :**

```javascript
fontSize: {
  'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
  'fluid-lg': 'clamp(1.125rem, 1rem + 0.75vw, 1.5rem)',
  'fluid-xl': 'clamp(1.5rem, 1.25rem + 1vw, 2rem)',
  'fluid-2xl': 'clamp(2rem, 1.5rem + 2vw, 3rem)',
  'fluid-3xl': 'clamp(2.5rem, 2rem + 2.5vw, 4rem)',
}
```

### Plugins Fluid

**fluid-tailwind (fluid.tw) :**
- Syntaxe modificateur `~`
- `~text-base` a mobile, `~text-xl` a desktop
- Genere automatiquement le clamp()
- WCAG-compliant par defaut
- Support container queries

**tailwindcss-fluid-type (davidhellmann) :**
- Configuration d'echelle complete
- Base sur des ratios typographiques
- Valeurs min/max viewport configurables

**Utopia (utopia.fyi) :**
- Generateur web de valeurs clamp()
- Export CSS ou config Tailwind
- Visualisation interactive

---

## Accessibilite Typographique

### WCAG Guidelines

**SC 1.4.3 - Contraste Minimum :**
- Texte normal : ratio 4.5:1
- Texte large (18pt/24px ou 14pt/18.66px bold) : ratio 3:1

**SC 1.4.4 - Resize Text :**
- Texte doit etre resizable a 200% sans perte
- Utiliser des unites relatives (rem, em, %)
- Tailwind utilise rem par defaut

**SC 1.4.12 - Text Spacing :**
- Line-height : 1.5× minimum pour paragraphes
- Paragraph spacing : 2× font-size
- Letter-spacing : 0.12× font-size
- Word spacing : 0.16× font-size

### Taille Minimum Recommandee

Bien que WCAG ne specifie pas de minimum :

| Type | Taille | Notes |
|------|--------|-------|
| Body text | 16px (`text-base`) | iOS zoome automatiquement sous 16px dans les inputs |
| Minimum absolu | 12px (`text-xs`) | Uniquement pour labels secondaires |
| Large text | 18.66px+ (`text-lg+`) | Contraste reduit acceptable (3:1) |

### Bonnes Pratiques

- Utiliser `text-base` (16px) comme baseline body
- Line-height `leading-relaxed` (1.625) ou `leading-loose` (2)
- Eviter le texte justifie (justify problematique)
- Contraste suffisant (pas de gray-400 sur blanc)
- Ne pas desactiver le zoom utilisateur
- Tester avec zoom navigateur a 200%

---

## Patterns de Hierarchie

### Marketing / Landing Page

| Element | Classes |
|---------|---------|
| Hero Title | `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight` |
| Hero Subtitle | `text-xl md:text-2xl text-gray-600 leading-relaxed` |
| Section Title | `text-3xl md:text-4xl font-bold` |
| Section Subtitle | `text-lg md:text-xl text-gray-600` |
| Body | `text-base md:text-lg leading-relaxed` |
| Caption | `text-sm text-gray-500` |

### Application / Dashboard

| Element | Classes |
|---------|---------|
| Page Title | `text-2xl font-bold` |
| Section Title | `text-xl font-semibold` |
| Card Title | `text-lg font-medium` |
| Body | `text-sm leading-normal` |
| Helper Text | `text-xs text-gray-500` |
| Label | `text-xs font-medium uppercase tracking-wide` |
| Badge | `text-xs font-medium` |

### Blog / Article

| Element | Classes |
|---------|---------|
| Article Title | `text-3xl md:text-4xl font-bold leading-tight` |
| Article Subtitle | `text-xl text-gray-600 leading-relaxed` |
| Body | `prose prose-lg leading-relaxed` |
| Blockquote | `prose-blockquote:italic prose-blockquote:border-l-4` |
| Code | `prose-code:bg-gray-100 prose-code:rounded` |
| Caption | `text-sm text-gray-500 text-center` |

---

## Fonts Custom

### Configuration

Dans tailwind.config.js :

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  serif: ['Merriweather', 'Georgia', 'serif'],
  mono: ['Fira Code', 'monospace'],
  display: ['Playfair Display', 'serif'],
}
```

Usage : `font-sans`, `font-serif`, `font-mono`, `font-display`

### Variable Fonts

Pour les fonts variables :

```css
@font-face {
  font-family: 'Inter var';
  src: url('Inter.var.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
}
```

Permet d'utiliser n'importe quel font-weight avec `font-[450]`.

---

# Workflows

# Workflows - Typography Expert

Processus detailles et cas d'usage pour la typographie avec Tailwind CSS.

---

## Workflow 1 : Creation d'une Hierarchie Typographique

### Contexte

L'utilisateur demarre un projet et doit etablir une hierarchie typographique coherente pour l'ensemble du site.

### Processus

**Phase 1 - Analyse du Projet**

1. Identifier le type de projet (marketing, app, editorial)
2. Determiner le ton (corporate, playful, minimal)
3. Evaluer la densite de contenu
4. Lister les types d'elements textuels necessaires

**Phase 2 - Definition de l'Echelle**

Etablir la progression des tailles :

**Marketing/Landing :**

| Element | Classes |
|---------|---------|
| H1 | `text-4xl` → `text-5xl` → `text-6xl` |
| H2 | `text-3xl` → `text-4xl` |
| H3 | `text-2xl` → `text-3xl` |
| Body | `text-base` → `text-lg` |
| Small | `text-sm` |

**Application/Dashboard :**

| Element | Classes |
|---------|---------|
| H1 | `text-2xl` → `text-3xl` |
| H2 | `text-xl` → `text-2xl` |
| H3 | `text-lg` |
| Body | `text-sm` → `text-base` |
| Small | `text-xs` |

**Phase 3 - Configuration des Weights**

Associer les poids aux niveaux :

| Element | Weight |
|---------|--------|
| Headlines (H1-H2) | `font-bold` ou `font-extrabold` |
| Subheadings (H3-H4) | `font-semibold` |
| Body | `font-normal` |
| Emphasis | `font-medium` |
| Labels | `font-medium uppercase` |

**Phase 4 - Configuration Line-Height**

Adapter le leading par taille :

| Element | Leading |
|---------|---------|
| Headlines gros (text-4xl+) | `leading-tight` ou `leading-none` |
| Headlines moyens (text-2xl-3xl) | `leading-tight` |
| Body content | `leading-relaxed` |
| UI compact | `leading-snug` |

**Phase 5 - Creation des Compositions**

Documenter les classes completes :

| Element | Classes |
|---------|---------|
| H1 | `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight` |
| H2 | `text-3xl md:text-4xl font-bold leading-tight` |
| H3 | `text-2xl md:text-3xl font-semibold` |
| Body | `text-base md:text-lg leading-relaxed` |
| Caption | `text-sm text-gray-500` |

**Phase 6 - Validation**

1. Tester la hierarchie visuelle
2. Verifier la lisibilite sur mobile
3. Confirmer l'accessibilite (contraste, tailles)
4. Documenter pour l'equipe

---

## Workflow 2 : Configuration du Plugin Prose

### Contexte

L'utilisateur a du contenu markdown/CMS a styler automatiquement.

### Processus

**Phase 1 - Installation**

- Tailwind v4 : ajouter `@plugin "@tailwindcss/typography"` dans le CSS
- Tailwind v3 : ajouter `require('@tailwindcss/typography')` aux plugins

**Phase 2 - Usage de Base**

Appliquer la classe prose au container de contenu :

| Type | Classes |
|------|---------|
| Container basique | `prose` |
| Avec taille responsive | `prose prose-sm md:prose-base lg:prose-lg` |
| Avec dark mode | `prose dark:prose-invert` |

**Phase 3 - Personnalisation des Couleurs**

Choisir une palette de gris :

| Classe | Style |
|--------|-------|
| `prose-gray` | Defaut |
| `prose-slate` | Plus bleute |
| `prose-zinc` | Neutre |

Combiner : `prose prose-slate dark:prose-invert`

**Phase 4 - Modification d'Elements Specifiques**

Utiliser les modificateurs d'elements :

| Usage | Classes |
|-------|---------|
| Links personnalises | `prose prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline` |
| Headings personnalises | `prose prose-headings:font-serif prose-headings:text-gray-900` |
| Images arrondies | `prose prose-img:rounded-lg prose-img:shadow-md` |
| Code style | `prose prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded` |

**Phase 5 - Gestion des Exclusions**

Pour les elements non-textuels dans le contenu :

**Exclure un composant :**
```html
<div class="not-prose">
  <!-- Composant custom non affecte par prose -->
</div>
```

**Supprimer la largeur max :**
`prose max-w-none` (pour les layouts full-width)

**Phase 6 - Responsive**

Adapter la taille selon le viewport :
`prose prose-sm md:prose-base lg:prose-lg xl:prose-xl`

La taille de base et tous les elements s'adaptent.

**Phase 7 - Test**

1. Verifier tous les types d'elements (h1-h6, p, ul, ol, blockquote, code, table)
2. Tester le dark mode
3. Confirmer la lisibilite
4. Valider les liens et images

---

## Workflow 3 : Implementation de Fluid Typography

### Contexte

L'utilisateur veut une typographie qui scale fluidement entre mobile et desktop sans breakpoints abrupts.

### Processus

**Phase 1 - Evaluer le Besoin**

Questions :
1. Quels elements beneficient du fluid ? (headlines, body, ou tout)
2. Quelles sont les tailles min/max souhaitees ?
3. Quel viewport min/max pour le calcul ?

Candidats ideaux :
- Hero titles
- Section headings
- Display text
- Optionnellement : body text

**Phase 2 - Choix de l'Approche**

| Option | Methode |
|--------|---------|
| Valeurs Arbitraires | `text-[clamp(1.5rem,3vw+1rem,3rem)]` |
| Configuration Custom | Dans tailwind.config.js : `fontSize: { 'fluid-xl': 'clamp(...)' }` |
| Plugin fluid-tailwind | Syntaxe `~` : `~text-xl ~text-4xl` |

**Phase 3 - Calcul des Valeurs**

Utiliser Utopia (utopia.fyi) ou calculer manuellement :

Exemple pour H1 :
- Mobile (320px) : 2rem (32px)
- Desktop (1200px) : 4rem (64px)
- Formule : `clamp(2rem, 1.27rem + 3.64vw, 4rem)`

**Phase 4 - Application**

| Element | Classes |
|---------|---------|
| Headlines | `text-[clamp(2rem,1.27rem+3.64vw,4rem)] font-bold tracking-tight` |
| Body (optionnel) | `text-[clamp(1rem,0.95rem+0.25vw,1.125rem)] leading-relaxed` |

**Phase 5 - Accessibilite WCAG**

Verifier SC 1.4.4 :
- Le texte doit rester lisible a 200% zoom
- Le plugin fluid-tailwind inclut des safeguards
- Tester manuellement avec zoom navigateur

**Phase 6 - Fallback**

Pour les navigateurs sans support clamp() (rare) :
- Prevoir une taille fixe comme fallback
- Ou accepter que 91%+ des navigateurs supportent

**Phase 7 - Validation**

1. Redimensionner le navigateur de 320px a 1920px
2. Observer la transition fluide
3. Verifier la lisibilite aux extremes
4. Tester le zoom a 200%

---

## Workflow 4 : Typography Responsive avec Breakpoints

### Contexte

L'utilisateur prefere des tailles fixes par breakpoint plutot que du fluid typography.

### Processus

**Phase 1 - Definir les Breakpoints Cibles**

Standard Tailwind :
- Mobile : base (< 640px)
- Tablette : md (768px+)
- Desktop : lg (1024px+)
- Large : xl (1280px+)

**Phase 2 - Etablir les Progressions**

**Headlines :**

| Element | Classes |
|---------|---------|
| H1 | `text-3xl md:text-4xl lg:text-5xl xl:text-6xl` |
| H2 | `text-2xl md:text-3xl lg:text-4xl` |
| H3 | `text-xl md:text-2xl lg:text-3xl` |

**Body :**

| Type | Classes |
|------|---------|
| Standard | `text-sm md:text-base lg:text-lg` |
| Compact | `text-sm` (uniforme) |

**Phase 3 - Considerations Line-Height**

Attention : chaque classe text-* a son propre line-height par defaut. Un leading-* explicite sera override par un text-* responsive.

**Solution shorthand :**
`text-base/relaxed md:text-lg/relaxed`

**Ou repeter le leading :**
`text-base md:text-lg leading-relaxed`

**Phase 4 - Letter-Spacing Responsive (si necessaire)**

Rarement necessaire, mais possible :
`tracking-tight md:tracking-normal`

**Phase 5 - Simplification**

Eviter trop de breakpoints. Souvent base + md: ou base + lg: suffit.

| Mauvais | Mieux |
|---------|-------|
| `text-sm sm:text-base md:text-lg lg:text-xl` | `text-sm md:text-base lg:text-lg` |

**Phase 6 - Validation**

1. Tester chaque breakpoint
2. S'assurer que le texte reste lisible
3. Verifier la coherence de la hierarchie
4. Confirmer sur devices reels si possible

---

## Workflow 5 : Optimisation de la Lisibilite Long-Form

### Contexte

L'utilisateur a du contenu long (articles, documentation) et veut optimiser la lisibilite.

### Processus

**Phase 1 - Largeur de Lecture**

Limiter la longueur de ligne :

| Methode | Classes |
|---------|---------|
| Avec prose | `prose` (inclut max-w-65ch) |
| Sans prose | `max-w-prose` (65ch), `max-w-2xl` (42rem), `max-w-3xl` (48rem) |

Recommandation : 45-75 caracteres par ligne.

**Phase 2 - Taille de Texte**

Pour la lecture prolongee :

| Breakpoint | Classe |
|------------|--------|
| Desktop | `text-lg` ou `text-xl` |
| Mobile | `text-base` |

Eviter text-sm pour le corps d'article.

**Phase 3 - Line-Height Optimal**

Pour le long-form :

| Classe | Usage |
|--------|-------|
| `leading-relaxed` (1.625) | Standard recommande |
| `leading-loose` (2) | Accessibilite maximale |

WCAG recommande minimum 1.5.

**Phase 4 - Espacement des Paragraphes**

Entre paragraphes :

| Methode | Classes |
|---------|---------|
| Avec prose | Automatique |
| Sans prose | `space-y-4` ou `space-y-6` entre les elements |

**Phase 5 - Headings dans le Contenu**

Creer des breaks visuels :

| Element | Classes |
|---------|---------|
| H2 | `mt-12 mb-4` ou `mt-16 mb-6` |
| H3 | `mt-8 mb-3` |

Assez d'espace avant pour separer les sections.

**Phase 6 - Considerations Typographiques**

| Aspect | Recommandation |
|--------|----------------|
| Letter-spacing | `tracking-normal` (ne pas serrer le body) |
| Font | Preferer des fonts concues pour la lecture (Inter, Source Sans, etc.) |
| Contraste | Minimum 4.5:1, idealement 7:1 |

**Phase 7 - Test de Lecture**

1. Lire un paragraphe complet
2. Evaluer la fatigue visuelle
3. Tester sur differents ecrans
4. Demander feedback utilisateurs

---

## Workflow 6 : Typography pour UI Dense

### Contexte

L'utilisateur construit un dashboard ou une interface avec beaucoup d'informations.

### Processus

**Phase 1 - Reduction de l'Echelle**

Partir d'une base plus petite :

| Element | Classe |
|---------|--------|
| Body principal | `text-sm` (14px) |
| Labels | `text-xs` (12px) |
| Headings | `text-base` a `text-xl` max |

**Phase 2 - Line-Height Compact**

Reduire sans sacrifier la lisibilite :

| Usage | Classe |
|-------|--------|
| Listes | `leading-snug` (1.375) |
| Paragraphes | `leading-normal` (1.5) |
| Labels one-line | `leading-tight` (1.25) |

**Phase 3 - Utilisation des Weights**

Creer de la hierarchie avec le poids plutot que la taille :

| Element | Classes |
|---------|---------|
| Titre de section | `text-sm font-semibold` |
| Label | `text-xs font-medium` |
| Valeur | `text-sm font-normal` |
| Stat importante | `text-sm font-bold` |

**Phase 4 - Tracking pour les Petites Tailles**

Eviter de serrer le petit texte :

| Usage | Classes |
|-------|---------|
| text-xs standard | `text-xs tracking-normal` (pas tracking-tight) |
| Labels uppercase | `text-xs uppercase tracking-wide` |

**Phase 5 - Couleurs pour la Hierarchie**

Utiliser les variations de gris :

| Niveau | Classe |
|--------|--------|
| Primaire | `text-gray-900` |
| Secondaire | `text-gray-600` |
| Tertiaire | `text-gray-400` |

**Phase 6 - Validation**

1. Verifier la lisibilite a 100% zoom
2. Tester l'accessibilite (contraste)
3. Confirmer que 12px est le minimum
4. S'assurer que les elements importants restent visibles

---

## Workflow 7 : Debug des Problemes Typographiques

### Contexte

Le texte ne s'affiche pas comme prevu.

### Processus

**Phase 1 - Identification du Probleme**

Symptomes courants :
- Line-height incorrect
- Taille qui ne change pas au breakpoint
- Font-weight non applique
- Letter-spacing bizarre

**Phase 2 - Inspection DevTools**

1. Selectionner l'element texte
2. Verifier les styles computed
3. Identifier les classes appliquees
4. Chercher les overrides

**Phase 3 - Problemes Line-Height**

**Line-height inattendu apres changement de taille :**
Chaque text-* definit son propre line-height. `md:text-lg` override le `leading-relaxed` precedent.

**Solution :**
`text-base/relaxed md:text-lg/relaxed`
Ou : `text-base md:text-lg leading-relaxed md:leading-relaxed`

**Phase 4 - Problemes de Font**

**Font non chargee :**
- Verifier le @font-face
- Confirmer le chemin du fichier
- Verifier la config fontFamily

**Font non appliquee :**
- Verifier que font-sans/font-serif est present
- Confirmer que la config est correcte

**Phase 5 - Problemes de Responsive**

**Taille ne change pas au breakpoint :**
- Verifier l'orthographe (md: pas MD:)
- Confirmer que le breakpoint est atteint
- Inspecter les media queries dans DevTools

**Phase 6 - Problemes Prose**

**Styles non appliques :**
- Confirmer que prose est sur le container parent
- Verifier que le plugin est installe
- S'assurer que les elements sont des enfants directs ou imbriques correctement

**Element non style :**
- Peut-etre dans un not-prose
- Verifier la structure HTML

---

## Cas d'Usage Speciaux

### Cas 1 : Texte sur Image

Assurer la lisibilite sur backgrounds varies :

| Technique | Classes |
|-----------|---------|
| Overlay sombre | `relative` + Image `object-cover` + Overlay `absolute inset-0 bg-black/50` + Text `relative z-10 text-white` |
| Text shadow | `text-white drop-shadow-lg` ou `[text-shadow:0_2px_4px_rgba(0,0,0,0.5)]` |
| Gradient overlay | `bg-gradient-to-t from-black/70 to-transparent` |

### Cas 2 : Texte Tronque

| Type | Classes |
|------|---------|
| Une ligne | `truncate` (overflow-hidden text-ellipsis whitespace-nowrap) |
| Plusieurs lignes | `line-clamp-2` (2 lignes max), `line-clamp-3` (3 lignes max) |

### Cas 3 : Responsive Font pour CTA

Bouton avec texte qui s'adapte :

| Approche | Classes |
|----------|---------|
| Breakpoints | `text-sm md:text-base px-4 md:px-6 py-2 md:py-3` |
| Fluid | `text-[clamp(0.875rem,0.8rem+0.2vw,1rem)]` |

### Cas 4 : Typography Multilingue

Certaines langues necessitent des ajustements :

**CJK (Chinois, Japonais, Coreen) :**
- Peut necessiter plus de line-height
- `leading-loose` recommande

**RTL (Arabe, Hebreu) :**
- `dir="rtl"` sur le container
- `text-right` ou `text-start`

**Caracteres etendus :**
- S'assurer que la font supporte les caracteres

---

## Ressources et References

### Documentation Officielle

- Tailwind CSS Font Size
- Tailwind CSS Line Height
- Tailwind CSS Letter Spacing
- @tailwindcss/typography Plugin

### Outils

- Utopia (utopia.fyi) : generateur fluid typography
- Type Scale (type-scale.com) : ratios typographiques
- Contrast Checker (webaim.org) : validation WCAG
- fluid-tailwind (fluid.tw) : plugin Tailwind