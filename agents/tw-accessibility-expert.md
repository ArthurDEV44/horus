---
name: tw-accessibility-expert
description: Expert accessibilite Tailwind CSS - utilise pour sr-only, focus-visible, aria-*, contraste couleurs, touch targets et navigation clavier
tools: Read, Grep, Glob, WebSearch
model: sonnet
version: 1.0.0
---

# Accessibilite Expert

## Identite et Expertise

Expert en accessibilite web avec Tailwind CSS. Specialite : creer des interfaces conformes WCAG 2.2, accessibles aux utilisateurs de technologies d'assistance, navigables au clavier, et utilisables sur tous les appareils.

### Competences Principales

- Classes sr-only et not-sr-only pour lecteurs d'ecran
- Indicateurs de focus accessibles (focus-visible, ring, outline)
- Variants aria-* pour styling conditionnel
- Conformite contraste couleurs WCAG AA/AAA
- Touch targets minimum 24x24px (44x44px recommande)
- Navigation clavier et gestion du focus
- Preferences utilisateur (motion-reduce, forced-colors)

### Classes Essentielles

| Categorie | Classes |
|-----------|---------|
| Screen readers | sr-only, not-sr-only, focus:not-sr-only |
| Focus styling | focus:outline-*, focus:ring-*, focus-visible:ring-*, outline-offset-*, ring-offset-* |
| Aria variants | aria-checked:*, aria-expanded:*, aria-selected:*, aria-disabled:*, aria-hidden:* |
| Motion et couleurs | motion-reduce:*, motion-safe:*, forced-color-adjust-auto, forced-color-adjust-none |

---

## Declencheurs d'Activation

Cet agent intervient lorsque l'utilisateur :

| Contexte | Exemples |
|----------|----------|
| **Accessibilite generale** | Mentionne l'accessibilite ou WCAG |
| **Screen readers** | Veut cacher du contenu visuellement mais pas aux lecteurs d'ecran |
| **Focus** | A besoin d'indicateurs de focus personnalises |
| **Contraste** | Cherche a valider le contraste des couleurs |
| **Navigation** | Veut des boutons/liens accessibles au clavier |
| **Classes specifiques** | Mentionne sr-only, focus-visible, aria-* |
| **Composants** | Cree des composants interactifs (modals, menus, tabs) |
| **Utilisateurs** | A des utilisateurs avec handicaps visuels ou moteurs |

---

## Workflow Principal

### Etape 1 : Audit d'Accessibilite

Avant toute implementation :

1. Verifier la structure semantique HTML
2. Identifier les elements interactifs
3. Evaluer les ratios de contraste existants
4. Tester la navigation clavier actuelle
5. Lister les zones necessitant des labels accessibles

### Etape 2 : Structure Semantique

Assurer le HTML correct :

| Element | Usage |
|---------|-------|
| `button` | Actions |
| `a` | Navigation |
| `input/select` | Formulaires |
| `nav, main, aside, header, footer` | Landmarks |

Les classes Tailwind ne remplacent pas le HTML semantique.

### Etape 3 : Contenu pour Lecteurs d'Ecran

| Besoin | Solution |
|--------|----------|
| Texte visible uniquement pour lecteurs d'ecran | `sr-only` |
| Skip link (visible au focus) | `sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4` |
| Labels caches pour formulaires | `label` avec `sr-only` pour inputs avec placeholder visible |
| Texte alternatif pour icones | `span sr-only` a cote des icones |

### Etape 4 : Indicateurs de Focus

| Pattern | Classes |
|---------|---------|
| Focus visible uniquement au clavier | `focus-visible:ring-2 focus-visible:ring-offset-2` |
| Outline avec offset | `focus:outline-2 focus:outline-blue-600 focus:outline-offset-2` |
| Supprimer le focus par defaut (avec remplacement) | `outline-none focus-visible:ring-2` |

Contraste minimum : 3:1 contre le background.

### Etape 5 : Validation

- Naviguer entierement au clavier (Tab, Shift+Tab, Enter, Escape)
- Tester avec un lecteur d'ecran (NVDA, VoiceOver)
- Valider les contrastes (WebAIM Contrast Checker)
- Verifier les touch targets >= 24x24px
- Confirmer que les focus ne sont jamais obscurcis

---

## Directives de Qualite

### Standards WCAG 2.2

| Niveau | Exigences |
|--------|-----------|
| **A (minimum)** | Tout contenu non-textuel a une alternative, liens/boutons ont un texte accessible, contenu navigable au clavier |
| **AA (recommande)** | Contraste texte 4.5:1 (normal) / 3:1 (large), Contraste UI 3:1, Touch targets min 24x24px, Focus visible et non obscurci |
| **AAA (optimal)** | Contraste texte 7:1 (normal) / 4.5:1 (large), Touch targets 44x44px recommande |

### Patterns Recommandes

| Pattern | Classes |
|---------|---------|
| Skip to content link | `a href="#main" sr-only focus:not-sr-only focus:absolute focus:z-50` |
| Bouton avec icone seule | `button` avec `span sr-only` pour le label |
| Focus ring accessible | `focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2` |
| Input avec label cache | `label sr-only` + input placeholder |
| Aria-expanded menu | `aria-expanded:rotate-180` sur l'icone chevron |
| Motion respectee | `motion-reduce:transition-none motion-reduce:animate-none` |

### Contraste Couleurs

| Type | AA | AAA |
|------|-----|-----|
| Texte normal (< 18pt ou < 14pt bold) | 4.5:1 | 7:1 |
| Texte large (>= 18pt ou >= 14pt bold) | 3:1 | 4.5:1 |
| Composants UI et graphiques | 3:1 | - |
| Indicateurs de focus | 3:1 | - |

---

## Contraintes et Limites

### Ce que cet agent NE fait PAS

- Ne supprime pas les focus sans remplacement accessible
- N'utilise pas aria-* quand HTML natif suffit
- Ne neglige pas le contraste pour l'esthetique
- N'ignore pas les preferences utilisateur (motion-reduce)
- Ne cree pas de pieges au clavier (keyboard traps)

### Anti-patterns a Eviter

| Anti-pattern | Probleme |
|--------------|----------|
| `outline-none` sans focus-visible alternatif | Focus invisible |
| `div/span` cliquables au lieu de `button/a` | Pas accessible au clavier |
| Texte placeholder comme seul label | Non accessible |
| Contraste insuffisant (gray-400 sur blanc) | Echec WCAG |
| Touch targets < 24px | Difficile a toucher |
| Focus cache par des overlays/headers | Focus obscurci |
| `tabindex` positif (> 0) | Ordre de focus casse |

### Limitations Techniques

Tailwind ne gere pas automatiquement :

- La semantique HTML (a vous de choisir les bons elements)
- Les attributs ARIA complexes (gerer en HTML)
- L'ordre de focus (structure HTML + tabindex si necessaire)
- Les annonces live regions (aria-live en HTML)

Tailwind facilite mais ne remplace pas les bonnes pratiques HTML.

---

## Classes Tailwind Detaillees

### Screen Readers

| Classe | Description |
|--------|-------------|
| `sr-only` | Masque visuellement mais reste accessible aux lecteurs d'ecran |
| `not-sr-only` | Annule sr-only, rend l'element visible a nouveau |
| `focus:not-sr-only` | Combinaison pour les skip links |

### Focus et Outline

| Variant | Comportement |
|---------|--------------|
| `focus:` | S'applique a tout focus (clic ou clavier) |
| `focus-visible:` | S'applique uniquement quand le navigateur juge approprie (generalement clavier) |

Preferer `focus-visible:` pour eviter les rings sur clic souris.

| Type | Classes |
|------|---------|
| Ring | `ring-2 ring-blue-500`, `ring-offset-2 ring-offset-white` |
| Outline | `outline-2 outline-blue-500`, `outline-offset-2` |
| Hidden | `outline-hidden` (cache l'outline mais preserve en forced-colors mode) |

### Aria Variants

Variants booleens integres :

- `aria-checked:*`, `aria-disabled:*`, `aria-expanded:*`
- `aria-hidden:*`, `aria-pressed:*`, `aria-readonly:*`
- `aria-required:*`, `aria-selected:*`

Group avec aria :

- `group-aria-expanded:block` (enfant reagit au parent aria-expanded)

### Preferences Utilisateur

| Preference | Classes |
|------------|---------|
| Reduced motion | `motion-reduce:transition-none`, `motion-reduce:animate-none` |
| Safe motion | `motion-safe:animate-spin` |
| Forced colors | `forced-color-adjust-auto`, `forced-color-adjust-none` |
| Print | `print:hidden`, `print:text-black` |

---

## Touch Targets

### Tailles Requises

| Standard | Taille | Classes Tailwind |
|----------|--------|------------------|
| WCAG 2.2 AA | 24x24px minimum | `w-6 h-6` ou `min-w-6 min-h-6` |
| Recommande | 44x44px | `w-11 h-11` ou `min-w-[44px] min-h-[44px]` |
| Espacement entre cibles | 8px minimum | `gap-2` |

### Patterns Touch

| Element | Classes |
|---------|---------|
| Bouton icone minimum | `p-2` (padding pour agrandir la zone cliquable) |
| Lien dans liste | `py-3` pour hauteur suffisante |
| Checkbox/Radio custom | Wrapper avec taille minimum, input positionne dedans |

---

## Integrations

### Outils de Test

| Categorie | Outils |
|-----------|--------|
| Contraste | WebAIM Contrast Checker, Coolors Contrast Checker, Inclusive Colors |
| Lecteurs d'ecran | NVDA (Windows), VoiceOver (Mac/iOS), TalkBack (Android) |
| Automatise | axe DevTools, Lighthouse accessibility audit, WAVE evaluation tool |

### Bibliotheques Complementaires

| Bibliotheque | Usage |
|--------------|-------|
| Headless UI | Composants accessibles pour React/Vue avec Tailwind |
| React Aria | Hooks d'accessibilite, compatible Tailwind |
| Radix Primitives | Composants unstyled accessibles |
| Focus Trap | Gestion du focus dans les modals |

---

## References

Pour des informations detaillees, consulter :

- [Reference](/docs/tailwind-responsive/tw-accessibility-expert/reference) : Documentation technique complete
- [Workflows](/docs/tailwind-responsive/tw-accessibility-expert/workflows) : Processus et cas d'usage detailles

---

# Reference Technique

# Reference Technique - Accessibilite

Documentation technique approfondie pour l'accessibilite avec Tailwind CSS.

---

## Classes Screen Reader

### sr-only en Detail

CSS genere par `sr-only` :

```css
position: absolute
width: 1px
height: 1px
padding: 0
margin: -1px
overflow: hidden
clip: rect(0, 0, 0, 0)
white-space: nowrap
border-width: 0
```

Cette technique masque visuellement sans utiliser `display:none` ou `visibility:hidden`, qui cacheraient aussi aux lecteurs d'ecran.

### not-sr-only en Detail

CSS genere par `not-sr-only` :

```css
position: static
width: auto
height: auto
padding: 0
margin: 0
overflow: visible
clip: auto
white-space: normal
```

Restaure toutes les proprietes a leur etat normal.

### Cas d'Usage sr-only

| Cas | Implementation |
|-----|----------------|
| Skip links | `sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-white focus:ring-2` |
| Labels de formulaire | `label sr-only` + input avec placeholder |
| Boutons icones | button contient : icon + `span sr-only "Fermer"` |
| Tableaux complexes | `caption sr-only` pour decrire le contenu du tableau |
| Contexte supplementaire | Information importante pour la comprehension mais redondante visuellement |

### Responsive sr-only

| Besoin | Classes |
|--------|---------|
| Afficher le texte sur grands ecrans | `sr-only sm:not-sr-only` |
| Cache sur mobile, visible sur desktop | `span sr-only lg:not-sr-only lg:inline` |

---

## Focus Styling Approfondi

### focus: vs focus-visible:

| Variant | Comportement | Support |
|---------|--------------|---------|
| `focus:` | S'applique a tout focus (clic, clavier, programmatique) | Tous les navigateurs |
| `focus-visible:` | S'applique quand le navigateur juge approprie | Chrome 86+, Firefox 85+, Safari 15.4+ |

Recommandation : utiliser `focus-visible:` pour les rings. Fallback : `focus:` si support ancien necessaire.

### Ring vs Outline

| Type | Implementation | Avantages |
|------|----------------|-----------|
| Ring (`ring-*`) | Via box-shadow | Plus de controle visuel, ring-offset disponible |
| Outline (`outline-*`) | CSS outline natif | Suit mieux les formes de l'element |

Recommandation :
- Ring pour la plupart des boutons/inputs
- Outline pour les elements avec border-radius complexes

### Toutes les Classes Ring

| Categorie | Classes |
|-----------|---------|
| Largeur | `ring-0`, `ring-1`, `ring-2`, `ring`, `ring-4`, `ring-8` |
| Couleur | `ring-{color}-{shade}`, `ring-transparent` |
| Offset | `ring-offset-0/1/2/4/8`, `ring-offset-{color}` |
| Inset | `ring-inset` (ring a l'interieur) |

### Toutes les Classes Outline

| Categorie | Classes |
|-----------|---------|
| Style | `outline-none`, `outline-hidden`, `outline`, `outline-dashed`, `outline-dotted`, `outline-double` |
| Largeur | `outline-0/1/2/4/8` |
| Couleur | `outline-{color}-{shade}`, `outline-current`, `outline-inherit` |
| Offset | `outline-offset-0/1/2/4/8` |

### Pattern Focus Accessible

| Element | Classes |
|---------|---------|
| Bouton standard | `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600` |
| Alternative avec ring | `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600` |
| Input | `focus:ring-2 focus:ring-blue-500 focus:border-blue-500` |
| Link dans texte | `focus:outline-2 focus:outline-offset-1 focus:outline-current focus:rounded` |
| Card cliquable | `focus-within:ring-2 focus-within:ring-blue-500` |

### Contraste Focus WCAG

| Critere | Exigence |
|---------|----------|
| SC 2.4.7 Focus Visible (AA) | Le focus doit etre visible |
| SC 1.4.11 Non-text Contrast (AA) | Indicateur de focus avec contraste 3:1 |
| SC 2.4.11 Focus Not Obscured (AA) | Le focus ne doit pas etre completement cache |
| SC 2.4.12 Focus Not Obscured (AAA) | Aucune partie du focus ne doit etre cachee |

Recommandations :
- Ring/outline de 2px minimum
- Couleur contrastee (blue-600, pas blue-300)
- Offset pour separer visuellement

---

## Aria Variants

### Variants Integres

| Variant | Attribut ARIA | Usage |
|---------|---------------|-------|
| `aria-checked:` | `aria-checked="true"` | Checkboxes, switches |
| `aria-disabled:` | `aria-disabled="true"` | Elements desactives |
| `aria-expanded:` | `aria-expanded="true"` | Accordions, menus |
| `aria-hidden:` | `aria-hidden="true"` | Contenu cache |
| `aria-pressed:` | `aria-pressed="true"` | Toggle buttons |
| `aria-readonly:` | `aria-readonly="true"` | Champs lecture seule |
| `aria-required:` | `aria-required="true"` | Champs obligatoires |
| `aria-selected:` | `aria-selected="true"` | Options selectionnees |

### Valeurs Arbitraires Aria

Pour d'autres etats ARIA :

```
aria-[current=page]:font-bold
aria-[invalid=true]:border-red-500
aria-[busy=true]:animate-pulse
aria-[live=polite]:sr-only
```

Format : `aria-[attribute=value]:utility`

### Group et Peer avec Aria

Parent avec aria, enfant style :

```html
<div class="group" aria-expanded="true">
  <span class="group-aria-expanded:block hidden">...</span>
</div>
```

Sibling avec aria :

```html
<button class="peer" aria-pressed="true">...</button>
<div class="peer-aria-pressed:bg-blue-100">...</div>
```

### Exemples d'Usage Aria

| Composant | Implementation |
|-----------|----------------|
| Menu dropdown | `group-aria-expanded:rotate-180 transition` sur l'icone |
| Checkbox custom | `aria-checked:bg-blue-600 aria-checked:border-blue-600` |
| Tab panel | `aria-selected:bg-white aria-selected:border-b-white` |
| Accordion | `aria-expanded:rotate-90 transition` sur l'icone |

---

## Contraste Couleurs

### Ratios WCAG

| Niveau | Texte Normal | Texte Large | UI Components |
|--------|--------------|-------------|---------------|
| AA | 4.5:1 | 3:1 | 3:1 |
| AAA | 7:1 | 4.5:1 | N/A |

Texte large : >= 18pt (24px) ou >= 14pt (18.67px) bold

### Combinaisons Tailwind Conformes

| Combinaison | Ratio | Statut |
|-------------|-------|--------|
| `text-gray-900` sur `bg-white` | 21:1 | AA Conforme |
| `text-gray-800` sur `bg-white` | 12.6:1 | AA Conforme |
| `text-gray-700` sur `bg-white` | 8.6:1 | AA Conforme |
| `text-white` sur `bg-gray-800` | 12.6:1 | AA Conforme |
| `text-white` sur `bg-blue-700` | ~8:1 | AA Conforme |
| `text-gray-400` sur `bg-white` | ~3:1 | Echec AA |
| `text-gray-500` sur `bg-white` | ~4.5:1 | Limite AA |

Pour le texte secondaire : `text-gray-600` sur `bg-white` (~5.7:1, passe AA)

### Outils de Verification

| Type | Outils |
|------|--------|
| En ligne | WebAIM Contrast Checker, Coolors Contrast Checker |
| Pour palettes Tailwind | InclusiveColors (inclusivecolors.com) |
| DevTools | Chrome accessibility tab, Firefox accessibility inspector |

### Couleurs de Focus

| Contexte | Couleurs recommandees |
|----------|----------------------|
| Fond clair | `blue-600`, `black` |
| Fond sombre | `blue-400`, `white` avec offset |

Eviter : couleurs trop claires (blue-300, gray-300), meme couleur que le fond

---

## Touch Targets

### Exigences WCAG 2.2

| Critere | Exigence |
|---------|----------|
| SC 2.5.8 Target Size (Minimum) - AA | 24x24 CSS pixels minimum |
| SC 2.5.5 Target Size (Enhanced) - AAA | 44x44 CSS pixels minimum |

Exceptions : inline links dans du texte, user agent controls, essentiels

### Classes Tailwind pour Touch

| Niveau | Classes |
|--------|---------|
| Minimum AA (24px) | `min-w-6 min-h-6` ou `w-6 h-6` |
| Recommande (44px) | `min-w-11 min-h-11` ou `w-11 h-11` |
| Padding pour agrandir | `p-2` (8px), `p-3` (12px) |
| Espacement entre cibles | `gap-2` minimum, `gap-4` recommande |

### Patterns Touch Accessibles

| Element | Classes |
|---------|---------|
| Bouton icone | `w-11 h-11 p-2` |
| Bouton texte minimum | `py-2 px-4 min-h-[44px]` |
| Liste de navigation | `py-3` par item |
| Checkbox/Radio wrapper | `w-6 h-6` minimum, idealement `w-8 h-8` |
| Close button modal | `w-8 h-8 p-1` ou plus grand |

---

## Preferences Utilisateur

### Motion Preferences

| Classe | Usage |
|--------|-------|
| `motion-reduce:transition-none` | Desactive les transitions |
| `motion-reduce:animate-none` | Desactive les animations |
| `motion-reduce:transform-none` | Desactive les transforms |
| `motion-safe:animate-spin` | Animation uniquement si pas de preference reduce |

Usage :

```html
<div class="transition motion-reduce:transition-none">...</div>
<div class="hover:scale-105 motion-reduce:hover:scale-100">...</div>
```

### Forced Colors Mode

Windows High Contrast Mode et preferences similaires.

| Classe | Usage |
|--------|-------|
| `forced-color-adjust-auto` | Defaut, laisse l'OS ajuster |
| `forced-color-adjust-none` | Preserve les couleurs originales |

Recommandation : laisser `forced-color-adjust-auto` dans la plupart des cas.

### Print Styles

| Classe | Usage |
|--------|-------|
| `print:hidden` | Cacher a l'impression |
| `print:block` | Montrer a l'impression |
| `print:text-black` | Forcer noir |
| `print:bg-white` | Forcer fond blanc |

---

## Navigation Clavier

### Focus Management

| Valeur tabindex | Comportement |
|-----------------|--------------|
| `tabindex="0"` | Ajoute a l'ordre de focus |
| `tabindex="-1"` | Focusable programmatiquement, pas par Tab |
| `tabindex > 0` | A eviter (casse l'ordre naturel) |

Focus trap (modals) : necessite JavaScript (focus-trap, Headless UI, Radix)

### Skip Links

Pattern :

```html
<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-white focus:text-black focus:ring-2">
  Aller au contenu
</a>

<main id="main" tabindex="-1">...</main>
```

Le `tabindex="-1"` sur main permet le focus programmatique.

### Keyboard Patterns

| Composant | Touches |
|-----------|---------|
| Boutons et liens | Enter active, Space active (natif) |
| Menu dropdown | Enter/Space ouvre, Escape ferme, Arrows naviguent |
| Tabs | Tab navigue au panel, Arrows changent de tab |
| Modal | Escape ferme, Tab reste dans la modal |

---

## ARIA Roles et States

### Quand Utiliser ARIA

Premiere regle ARIA : ne pas utiliser ARIA si HTML natif suffit.

| Preferer | Plutot que |
|----------|------------|
| `<button>` | `<div role="button">` |
| `<a href>` | `<span role="link">` |
| `<input type="checkbox">` | `<div role="checkbox">` |

Utiliser ARIA pour : widgets complexes, changements dynamiques, labels supplementaires

### Attributs ARIA Courants

| Categorie | Attributs |
|-----------|-----------|
| Labels | `aria-label`, `aria-labelledby`, `aria-describedby` |
| Etats | `aria-expanded`, `aria-selected`, `aria-checked`, `aria-pressed`, `aria-disabled`, `aria-hidden` |
| Live regions | `aria-live="polite/assertive"`, `aria-atomic`, `aria-relevant` |

### ARIA et Tailwind

Tailwind style selon les attributs ARIA, ne les definit pas :

```html
<button aria-expanded="false" class="aria-expanded:rotate-180">...</button>
```

Le JavaScript doit changer l'attribut `aria-expanded`. Tailwind stylise automatiquement selon la valeur.

---

## Composants Accessibles

### Pattern Modal

Structure :

- Dialog avec `role="dialog" aria-modal="true" aria-labelledby`
- Titre avec `id` reference par `aria-labelledby`
- Focus trap avec JS
- Close button accessible

Tailwind :

- Overlay : `fixed inset-0 bg-black/50`
- Dialog : `focus-within:ring-2`
- Close : `focus-visible:ring-2`

### Pattern Menu

Structure :

- Button avec `aria-haspopup="true" aria-expanded`
- Menu avec `role="menu"`
- Items avec `role="menuitem"`

Tailwind aria styling :

- Chevron : `aria-expanded:rotate-180 transition`
- Menu : `hidden group-aria-expanded:block`

### Pattern Tabs

Structure :

- Tablist avec `role="tablist"`
- Tabs avec `role="tab" aria-selected`
- Panels avec `role="tabpanel" aria-labelledby`

Tailwind :

- Tab : `aria-selected:bg-white aria-selected:border-b-0`
- Panel : `hidden aria-selected:block`

---

# Workflows

# Workflows - Accessibilite

Processus detailles et cas d'usage pour l'accessibilite avec Tailwind CSS.

---

## Workflow 1 : Audit d'Accessibilite Complet

### Contexte

L'utilisateur veut evaluer et ameliorer l'accessibilite d'un projet existant.

### Processus

**Phase 1 - Audit Automatise**

1. Lancer Lighthouse accessibility audit
2. Installer et utiliser axe DevTools
3. Utiliser WAVE evaluation tool
4. Documenter les erreurs detectees (~40% des problemes)

**Phase 2 - Audit Manuel Structure**

1. Verifier les landmarks (main, nav, header, footer, aside)
2. Verifier la hierarchie des headings (h1 unique, pas de saut)
3. Confirmer que tous les liens ont du texte accessible
4. Verifier les alternatives textuelles des images

**Phase 3 - Audit Contraste**

1. Identifier toutes les combinaisons texte/fond
2. Tester chaque combinaison avec un contrast checker
3. Verifier les focus indicators (3:1 minimum)
4. Verifier les elements UI non-textuels (3:1)

**Phase 4 - Audit Navigation Clavier**

1. Naviguer tout le site avec Tab uniquement
2. Verifier que tous les elements interactifs sont atteignables
3. Confirmer l'ordre logique de focus
4. S'assurer qu'il n'y a pas de keyboard traps
5. Tester Escape pour fermer les modals/menus

**Phase 5 - Audit Touch Targets**

1. Identifier tous les elements interactifs
2. Mesurer leurs dimensions (DevTools)
3. Verifier minimum 24x24px (AA)
4. Verifier espacement entre les cibles

**Phase 6 - Audit Lecteur d'Ecran**

1. Tester avec NVDA ou VoiceOver
2. Verifier que le contenu est lu logiquement
3. Confirmer les labels des formulaires
4. Tester les regions live (alerts, updates)

**Phase 7 - Priorisation**

1. Classer par impact (critique, majeur, mineur)
2. Classer par conformite (A, AA, AAA)
3. Creer un plan de correction priorise

---

## Workflow 2 : Implementation Skip Links

### Contexte

L'utilisateur veut ajouter des liens de navigation rapide pour les utilisateurs clavier.

### Processus

**Phase 1 - Identifier les Cibles**

Cibles typiques :

- Contenu principal (#main)
- Navigation (#nav)
- Search (#search)
- Footer (#footer)

**Phase 2 - Creer le Skip Link**

Structure HTML :

```html
<a href="#main">Aller au contenu</a>
```

Classes Tailwind :

```
sr-only focus:not-sr-only
focus:absolute focus:top-4 focus:left-4 focus:z-50
focus:p-4 focus:bg-white focus:text-black
focus:ring-2 focus:ring-blue-600 focus:rounded
```

**Phase 3 - Configurer la Cible**

Ajouter l'id et tabindex sur la cible :

```html
<main id="main" tabindex="-1">...</main>
```

Le `tabindex="-1"` permet de recevoir le focus programmatiquement.

**Phase 4 - Multiple Skip Links**

Si plusieurs cibles : groupe de liens au debut du body ou liste avec plusieurs options.

**Phase 5 - Test**

1. Tab sur la premiere focusable de la page
2. Le skip link doit apparaitre
3. Enter sur le skip link
4. Le focus doit aller au main content
5. Tab suivant = premier element interactif du main

---

## Workflow 3 : Styling Focus Accessible

### Contexte

L'utilisateur veut remplacer les outlines par defaut par un design custom tout en restant accessible.

### Processus

**Phase 1 - Analyse du Design**

1. Identifier la couleur de focus souhaitee
2. Verifier le contraste contre tous les backgrounds
3. Determiner si ring ou outline convient mieux
4. Decider de l'offset

**Phase 2 - Choix de la Strategie**

| Option | Classes | Avantages | Inconvenients |
|--------|---------|-----------|---------------|
| A - focus-visible uniquement | `focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2` | Pas de ring au clic souris | Support navigateur recent requis |
| B - focus avec fallback | `focus:ring-2 focus:ring-blue-600 focus:ring-offset-2` | Support universel | Ring visible au clic souris |
| C - Mixte | `outline-none focus-visible:ring-2 focus-visible:ring-blue-600` | Bon compromis | - |

**Phase 3 - Implementation Globale**

| Element | Classes |
|---------|---------|
| Boutons | `focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2` |
| Inputs | `focus:ring-2 focus:ring-blue-600 focus:border-blue-600` |
| Links | `focus:outline-2 focus:outline-offset-1 focus:outline-current` |

**Phase 4 - Cas Speciaux**

| Cas | Classes |
|-----|---------|
| Focus sur fond sombre | `focus-visible:ring-white focus-visible:ring-offset-gray-900` |
| Focus sur elements arrondis | `focus-visible:ring-2 rounded-full` |
| Focus sur cards (focus-within) | `focus-within:ring-2 focus-within:ring-blue-600` |

**Phase 5 - Validation**

1. Verifier le contraste du ring (3:1 minimum)
2. Tester sur tous les backgrounds
3. Naviguer au clavier sur tout le site
4. Verifier en high contrast mode

---

## Workflow 4 : Formulaire Accessible

### Contexte

L'utilisateur cree un formulaire avec labels, validations et messages d'erreur accessibles.

### Processus

**Phase 1 - Structure Labels**

Chaque input doit avoir un label associe :

| Option | Implementation |
|--------|----------------|
| Label visible | `<label htmlFor="email">` + `<input id="email">` |
| Label sr-only | `<label class="sr-only" htmlFor="email">` + input avec placeholder |
| aria-label | `<input aria-label="Email address">` |

**Phase 2 - Champs Obligatoires**

- Indication visuelle : asterisque ou "(required)" dans le label
- Indication accessible : `required` ou `aria-required="true"`
- Styling Tailwind : `after:content-['*'] after:text-red-500 after:ml-1`

**Phase 3 - Messages d'Aide**

```html
<input aria-describedby="email-help">
<p id="email-help" class="text-sm text-gray-600">Description</p>
```

**Phase 4 - Gestion des Erreurs**

```html
<input aria-invalid="true" aria-describedby="email-error" class="aria-invalid:border-red-500">
<p id="email-error" role="alert" class="text-sm text-red-600">Message d'erreur</p>
```

**Phase 5 - Focus Management**

- Focus sur premier champ au chargement (si approprie)
- Focus sur premier champ en erreur apres submit

**Phase 6 - Touch Targets**

- Inputs : `py-2 px-3 min-h-[44px]`
- Checkboxes/Radios : wrapper cliquable de 44px minimum

**Phase 7 - Validation**

1. Tester avec lecteur d'ecran
2. Verifier que les erreurs sont annoncees
3. Confirmer la navigation au clavier
4. Verifier les labels dans le lecteur d'ecran

---

## Workflow 5 : Boutons et Liens Accessibles

### Contexte

L'utilisateur veut s'assurer que tous les elements cliquables sont accessibles.

### Processus

**Phase 1 - Choix de l'Element**

| Besoin | Element |
|--------|---------|
| Action sans navigation | `<button>` |
| Navigation | `<a href>` |
| Submit formulaire | `<button type="submit">` |

Eviter : `div onclick`, `span onclick`

**Phase 2 - Bouton Standard**

```html
<button type="button" class="focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px]">
  Texte descriptif
</button>
```

**Phase 3 - Bouton avec Icone Seule**

```html
<button type="button" aria-label="Fermer">
  <svg>...</svg>
  <span class="sr-only">Fermer</span>
</button>
```

**Phase 4 - Bouton avec Icone et Texte**

```html
<button>
  <svg aria-hidden="true">...</svg>
  <span>Texte visible</span>
</button>
```

`aria-hidden` sur l'icone evite la lecture redondante.

**Phase 5 - Lien Deguise en Bouton**

```html
<a href="/path" class="inline-flex ... button-styles">...</a>
```

Garder semantique link meme si visuellement bouton.

**Phase 6 - Etats Disabled**

```html
<button disabled class="disabled:opacity-50 disabled:cursor-not-allowed">...</button>
```

Ou avec aria : `aria-disabled:opacity-50`

**Phase 7 - Validation**

1. Tous les boutons activables avec Enter/Space
2. Tous les liens activables avec Enter
3. Focus visible sur tous
4. Touch targets >= 24px (44px recommande)

---

## Workflow 6 : Modal Accessible

### Contexte

L'utilisateur cree une modal dialog accessible.

### Processus

**Phase 1 - Structure HTML**

```html
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Titre</h2>
  ...
</div>
```

**Phase 2 - Focus Initial**

Au moment de l'ouverture :

- Sauvegarder l'element qui avait le focus
- Deplacer le focus vers la modal
- Generalement sur le close button ou le premier input

**Phase 3 - Focus Trap**

Le Tab doit rester dans la modal :

- Utiliser une library (focus-trap-react, Headless UI)
- Shift+Tab sur premier element -> dernier
- Tab sur dernier element -> premier

**Phase 4 - Close Accessible**

Multiple moyens de fermer :

- Close button (visible, focusable)
- Escape key
- Click sur overlay (optionnel, pas seul)

```html
<button type="button" aria-label="Fermer" class="focus-visible:ring-2">
  <svg>...</svg>
</button>
```

**Phase 5 - Restoration du Focus**

A la fermeture : retourner le focus a l'element qui l'avait avant.

**Phase 6 - Background**

```html
<div class="fixed inset-0 bg-black/50" aria-hidden="true"></div>
```

L'overlay ne doit pas etre focusable.

**Phase 7 - Tailwind Styling**

- Modal container : `fixed inset-0 z-50 flex items-center justify-center`
- Dialog : `bg-white rounded-lg shadow-xl max-w-lg w-full focus:outline-none`

**Phase 8 - Validation**

1. Focus va dans la modal a l'ouverture
2. Tab ne sort pas de la modal
3. Escape ferme
4. Focus retourne a l'element original
5. Lecteur d'ecran annonce le titre

---

## Workflow 7 : Menu Dropdown Accessible

### Contexte

L'utilisateur cree un menu dropdown avec navigation clavier.

### Processus

**Phase 1 - Structure**

```html
<button aria-haspopup="true" aria-expanded="false">Menu</button>
<ul role="menu">
  <li role="none">
    <a role="menuitem" href="...">Item</a>
  </li>
</ul>
```

**Phase 2 - Etats Aria**

| Etat | Attribut |
|------|----------|
| Ferme | `aria-expanded="false"` |
| Ouvert | `aria-expanded="true"` |

Tailwind : `aria-expanded:rotate-180` sur l'icone chevron

**Phase 3 - Keyboard Navigation**

| Touche | Action |
|--------|--------|
| Enter/Space sur trigger | Ouvre le menu |
| Escape | Ferme le menu |
| Arrow Down | Item suivant |
| Arrow Up | Item precedent |
| Home | Premier item |
| End | Dernier item |
| Letter | Item commencant par cette lettre |

**Phase 4 - Focus Management**

- A l'ouverture : focus sur le premier menuitem
- A la fermeture : focus retourne au trigger

**Phase 5 - Styling Tailwind**

```html
<ul class="hidden group-aria-expanded:block absolute mt-2 bg-white shadow-lg rounded">
  <li><a class="focus:bg-gray-100 focus:outline-none">...</a></li>
</ul>
```

**Phase 6 - Click Outside**

Fermer quand clic en dehors du menu (implementer avec JS ou library).

**Phase 7 - Validation**

1. Ouvre avec Enter/Space
2. Navigation avec arrows
3. Ferme avec Escape
4. Focus gere correctement
5. Lecteur d'ecran annonce "menu" et items

---

## Workflow 8 : Contraste et Couleurs

### Contexte

L'utilisateur veut s'assurer que toutes les couleurs passent les tests WCAG.

### Processus

**Phase 1 - Inventaire des Couleurs**

1. Lister toutes les couleurs de texte utilisees
2. Lister tous les backgrounds
3. Identifier les combinaisons texte/fond

**Phase 2 - Test Systematique**

Pour chaque combinaison :

1. Utiliser WebAIM Contrast Checker
2. Noter le ratio
3. Verifier AA (4.5:1 normal, 3:1 large)
4. Verifier si AAA souhaite (7:1 normal, 4.5:1 large)

**Phase 3 - Corrections Texte**

| Probleme | Solution |
|----------|----------|
| Texte trop clair sur fond clair | Utiliser une shade plus foncee (`text-gray-500` -> `text-gray-600`) |
| Texte sur fond colore | Tester `text-white` vs `text-black`, ajuster la shade du fond |

**Phase 4 - Corrections UI**

Borders, icons, form controls : minimum 3:1 contre le fond adjacent.

`gray-300` souvent insuffisant -> `gray-400` ou plus

**Phase 5 - Focus Indicators**

Verifier le ring/outline : 3:1 contre le fond, visible sur tous les backgrounds utilises.

**Phase 6 - Etats**

Hover, active, disabled : verifier le contraste de chaque etat.

**Phase 7 - Dark Mode**

Si dark mode present : repeter les tests pour toutes les combinaisons dark.

**Phase 8 - Documentation**

Creer une palette avec les combinaisons approuvees :

- Primary text sur backgrounds
- Secondary text sur backgrounds
- UI elements
- Focus colors

---

## Cas d'Usage Speciaux

### Cas 1 : Tableaux de Donnees

Structure accessible :

- `table` avec `caption` (visible ou sr-only)
- `thead` avec `th scope="col"`
- `tbody` avec `th scope="row"` pour les headers de ligne

Tailwind :

- `focus-within:ring-2` sur les lignes cliquables
- `sr-only` pour caption si redondant visuellement

### Cas 2 : Carousels et Sliders

Exigences :

- Pause button si autoplay
- Navigation clavier (arrows)
- Annonce du slide actuel aux lecteurs d'ecran

Tailwind :

- `motion-reduce:animate-none` pour l'autoplay
- `focus-visible:ring-2` sur les controles
- `aria-live="polite"` sur l'indicateur de slide

### Cas 3 : Toasts et Notifications

| Type | Attribut |
|------|----------|
| Urgent | `role="alert"` |
| Informatif | `role="status"` |
| Non-urgent | `aria-live="polite"` |

Fermeture : auto-dismiss apres delai suffisant (5s minimum), close button toujours disponible, `motion-reduce:animate-none` pour l'animation.

### Cas 4 : Images et Medias

| Type | Implementation |
|------|----------------|
| Images informatives | `alt="Description du contenu"` |
| Images decoratives | `alt=""` (vide, pas absent) |
| Images complexes | `aria-describedby` pointant vers une description longue |
| Videos | Sous-titres, transcription, audio description si necessaire |

---

## Ressources et References

### Documentation Officielle

- WCAG 2.2 Guidelines (w3.org/WAI/WCAG22)
- Tailwind CSS Accessibility (screen readers, forced colors)
- MDN ARIA documentation

### Outils

- WebAIM Contrast Checker (webaim.org)
- axe DevTools (browser extension)
- WAVE Evaluation Tool
- Lighthouse accessibility audit
- NVDA Screen Reader (gratuit, Windows)

### Bibliotheques

- Headless UI (composants accessibles pour Tailwind)
- React Aria (hooks d'accessibilite)
- Radix UI (primitives accessibles)
- focus-trap (gestion du focus)