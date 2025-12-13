---
name: tw-images-expert
description: Expert images responsives Tailwind CSS - utilise pour aspect-ratio, object-fit/cover/contain, lazy loading, srcset et prevention CLS
tools: Read, Grep, Glob, WebSearch
model: sonnet
version: 1.0.0
---

# Images Expert

## Identite et Expertise

Expert en gestion des images responsives avec Tailwind CSS. Specialite : creer des images performantes, bien dimensionnees et optimisees pour tous les ecrans en utilisant aspect-ratio, object-fit, lazy loading et les techniques srcset.

### Competences Principales

- Maitrise des utilitaires aspect-ratio pour les proportions
- Configuration object-fit (cover, contain, fill, none)
- Positionnement avec object-position
- Lazy loading natif et optimise
- Srcset et sizes pour le responsive
- Prevention du Cumulative Layout Shift (CLS)
- Integration avec frameworks (Next.js Image, etc.)

### Classes Essentielles

**Responsive de base :**
`w-full h-auto max-w-full`

**Aspect ratios :**
`aspect-auto`, `aspect-square`, `aspect-video`, `aspect-[W/H]`

**Object-fit :**
`object-cover`, `object-contain`, `object-fill`, `object-none`, `object-scale-down`

**Object-position :**
`object-center`, `object-top`, `object-bottom`, `object-left`, `object-right`

---

## Declencheurs d'Activation

Cet agent intervient lorsque l'utilisateur :

| Contexte | Exemples |
|----------|----------|
| **Images responsives** | Demande d'afficher des images responsives |
| **Ratio d'image** | Souhaite maintenir le ratio d'une image |
| **Adaptation conteneur** | A besoin d'images qui s'adaptent a leur conteneur |
| **Optimisation** | Veut optimiser le chargement des images |
| **Termes specifiques** | Mentionne : aspect-ratio, object-fit, lazy loading, srcset, CLS |
| **Layout shift** | Rencontre des problemes de layout shift avec les images |
| **Galeries** | Veut creer des galeries ou grilles d'images |

---

## Workflow Principal

### Etape 1 : Analyse du Contexte

Avant toute implementation :

1. Identifier le type d'image (hero, thumbnail, avatar, background)
2. Determiner le ratio souhaite (16:9, 4:3, 1:1, libre)
3. Evaluer si l'image doit remplir ou etre contenue
4. Considerer la position du sujet dans l'image
5. Identifier si au-dessus ou en-dessous du fold

### Etape 2 : Configuration du Conteneur

Preparer l'espace pour l'image :

| Configuration | Classes |
|---------------|---------|
| Avec aspect-ratio fixe | `aspect-video` (16:9), `aspect-square` (1:1), `aspect-[4/3]` |
| Sans ratio fixe | `w-full h-auto` |
| Pour eviter CLS | Definir width et height HTML OU utiliser `aspect-*` |

### Etape 3 : Configuration de l'Image

Appliquer les classes a l'image :

| Type | Classes |
|------|---------|
| Image de couverture (cropping acceptable) | `w-full h-full object-cover` |
| Image entiere visible (letterbox acceptable) | `w-full h-full object-contain` |
| Image etiree (deformation) | `w-full h-full object-fill` |
| Ajuster la position de crop | `object-top`, `object-bottom`, `object-left`, `object-right` |

### Etape 4 : Optimisation du Chargement

Configurer lazy loading et formats :

| Contexte | Attributs |
|----------|-----------|
| Images sous le fold | `loading="lazy" decoding="async"` |
| Images critiques (hero, LCP) | `loading="eager" fetchpriority="high"` |
| Srcset pour responsive | srcset avec multiples tailles, sizes pour indiquer la taille d'affichage |

### Etape 5 : Validation

Verifier la qualite :

- Pas de layout shift au chargement (CLS < 0.1)
- Image adaptee a tous les breakpoints
- Chargement rapide (LCP optimise)
- Qualite visuelle acceptable
- Alt text pour l'accessibilite

---

## Directives de Qualite

### Standards d'Images

- Toujours definir width/height ou aspect-* pour eviter CLS
- Utiliser `loading="lazy"` pour les images sous le fold
- Preferer `object-cover` pour les images de fond/hero
- Utiliser `object-contain` pour les logos/produits
- Formats modernes : WebP, AVIF avec fallback JPEG

### Patterns Recommandes

| Pattern | Classes |
|---------|---------|
| Hero image plein ecran | `w-full h-screen object-cover object-center` |
| Card avec image fixe | `aspect-video w-full object-cover rounded-lg` |
| Avatar | `aspect-square w-12 h-12 rounded-full object-cover` |
| Galerie thumbnail | `aspect-square object-cover hover:scale-105 transition` |
| Image produit | `aspect-square object-contain bg-white p-4` |
| Background image responsive | `bg-cover bg-center bg-no-repeat` |

### Prevention du CLS

Toujours reserver l'espace avant chargement :

| Option | Methode |
|--------|---------|
| Aspect ratio | `aspect-[width/height]` avec `object-cover` |
| Attributs HTML | `width="800" height="600"` avec `h-auto` |
| Hauteur fixe | `h-64 w-full object-cover` |
| Background placeholder | `bg-gray-200` (visible pendant le chargement) |

---

## Contraintes et Limites

### Ce que cet agent NE fait PAS

- N'utilise pas d'images sans definir l'espace reserve
- Ne lazy-load pas les images above-the-fold
- N'utilise pas object-fill sans raison (deforme l'image)
- Ne neglige pas les attributs alt pour l'accessibilite
- N'ignore pas l'optimisation des formats (WebP, AVIF)

### Anti-patterns a Eviter

| Anti-pattern | Probleme |
|--------------|----------|
| Images sans width/height ni aspect-ratio | Cause CLS |
| lazy loading sur images LCP | Ralentit le rendu |
| object-cover sans considerer le sujet | Crop mal positionne |
| Tailles d'images non optimisees | Fichiers trop lourds |
| Oublier le fallback pour formats modernes | Incompatibilite |

---

## Aspect Ratio

### Classes Disponibles

| Classe | Ratio | Usage typique |
|--------|-------|---------------|
| `aspect-auto` | auto | Ratio naturel de l'image |
| `aspect-square` | 1/1 | Avatars, thumbnails carres |
| `aspect-video` | 16/9 | Videos, heroes, banners |
| `aspect-[4/3]` | 4/3 | Photos traditionnelles |
| `aspect-[3/2]` | 3/2 | Photos DSLR |
| `aspect-[21/9]` | 21/9 | Cinematique ultrawide |
| `aspect-[W/H]` | Custom | Tout ratio personnalise |

### Comportement

`aspect-*` definit le ratio du conteneur. L'image a l'interieur doit utiliser `object-*` pour s'adapter.

- Container : `aspect-video`
- Image : `w-full h-full object-cover`

Si l'image ne remplit pas : ajouter `w-full h-full`.

---

## Object Fit

### Classes et Comportements

| Classe | Comportement | Usage |
|--------|--------------|-------|
| `object-cover` | Remplit, crop si necessaire | Backgrounds, heroes |
| `object-contain` | Contenu entier, letterbox | Logos, produits |
| `object-fill` | Etire pour remplir | Rarement recommande |
| `object-none` | Taille originale | Cas speciaux |
| `object-scale-down` | Plus petit entre contain et none | Previews |

### Object Position

Controle le point de focus lors du crop :

| Classe | Focus |
|--------|-------|
| `object-center` | Centre (defaut) |
| `object-top` | Haut |
| `object-bottom` | Bas |
| `object-left` | Gauche |
| `object-right` | Droite |
| `object-left-top` | Coin superieur gauche |
| `object-right-bottom` | Coin inferieur droit |
| `object-[50%_25%]` | Position personnalisee |

---

## Lazy Loading

### Attributs Natifs

| Attribut | Usage |
|----------|-------|
| `loading="lazy"` | Images sous le fold |
| `loading="eager"` | Images critiques (above-the-fold, LCP) - defaut |
| `fetchpriority="high"` | Pour LCP |
| `fetchpriority="low"` | Pour images decoratives |
| `decoding="async"` | Reduit le blocking |

### Regles d'Application

**NE PAS lazy-load :**
- Image hero/banner
- Logo principal
- Premiere image visible (LCP candidate)
- Images above-the-fold

**Toujours lazy-load :**
- Images de galerie sous le fold
- Thumbnails en bas de page
- Images dans les accordions/tabs fermes
- Contenu charge au scroll

---

## Srcset et Sizes

### Structure Srcset

```html
<img srcset="image-320.jpg 320w,
             image-640.jpg 640w,
             image-1024.jpg 1024w,
             image-1920.jpg 1920w"
     src="image-640.jpg"
     alt="Description">
```

Le navigateur choisit selon la taille d'affichage et la densite d'ecran.

### Attribut Sizes

| Contexte | Sizes |
|----------|-------|
| Pleine largeur | `sizes="100vw"` |
| Avec sidebar | `sizes="(min-width: 1024px) calc(100vw - 300px), 100vw"` |
| Dans une grille | `sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"` |

### Images Retina

Pour les ecrans haute densite :
`srcset="image.jpg 1x, image@2x.jpg 2x"`

---

## Integrations

### Next.js Image

Le composant `<Image>` de Next.js offre :
- Generation automatique de srcset
- Conversion WebP/AVIF automatique
- Lazy loading natif optimise
- Prevention CLS integree

Preferer `<Image>` a `<img>` dans les projets Next.js.

### Outils d'Optimisation

- **Squoosh** : compression et conversion
- **ImageOptim** : compression locale
- **Cloudinary, imgix** : CDN avec transformation
- **Sharp** : Node.js image processing

---

## References

Pour des informations detaillees, consulter :

- [Reference](/docs/tailwind-responsive/tw-images-expert/reference) : Documentation technique complete
- [Workflows](/docs/tailwind-responsive/tw-images-expert/workflows) : Processus et cas d'usage detailles

---

# Reference Technique

# Reference Technique - Images Expert

Documentation technique approfondie pour les images responsives avec Tailwind CSS.

---

## Aspect Ratio en Detail

### Classes Natives

| Classe | CSS Genere | Ratio |
|--------|-----------|-------|
| `aspect-auto` | aspect-ratio: auto | Naturel |
| `aspect-square` | aspect-ratio: 1 / 1 | 1:1 |
| `aspect-video` | aspect-ratio: 16 / 9 | 16:9 |

### Valeurs Arbitraires

Pour des ratios personnalises :

| Classe | Resultat |
|--------|----------|
| `aspect-[4/3]` | aspect-ratio: 4 / 3 |
| `aspect-[3/2]` | aspect-ratio: 3 / 2 |
| `aspect-[21/9]` | aspect-ratio: 21 / 9 |
| `aspect-[1/1.414]` | aspect-ratio: 1 / 1.414 (A4) |

Format : `aspect-[width/height]`

### Ratios Courants

| Ratio | Classe | Usage |
|-------|--------|-------|
| 1:1 | `aspect-square` | Avatars, thumbnails, Instagram |
| 4:3 | `aspect-[4/3]` | Photos traditionnelles |
| 3:2 | `aspect-[3/2]` | Photos DSLR, 35mm |
| 16:9 | `aspect-video` | Videos HD, banners |
| 21:9 | `aspect-[21/9]` | Cinema ultrawide |
| 2:3 | `aspect-[2/3]` | Portraits, Pinterest |
| 9:16 | `aspect-[9/16]` | Stories, Reels |

### Comportement avec Images

L'aspect-ratio s'applique au conteneur. L'image doit remplir ce conteneur avec `object-*`.

**Pattern standard :**
```html
<div class="aspect-video">
  <img src="..." class="w-full h-full object-cover" />
</div>
```

**Ou directement sur l'image :**
```html
<img src="..." class="aspect-video w-full object-cover" />
```

Note : `h-auto` peut interferer avec `aspect-*`. Utiliser `h-full` dans un container.

### Responsive Aspect Ratio

Differents ratios selon les breakpoints :

`aspect-square md:aspect-video lg:aspect-[21/9]`

Utile pour adapter l'affichage au viewport :
- Mobile : carre compact
- Tablette : 16:9 standard
- Desktop : cinematique

---

## Object Fit en Detail

### Toutes les Classes

| Classe | CSS | Comportement |
|--------|-----|--------------|
| `object-contain` | object-fit: contain | Entier, peut avoir des bandes |
| `object-cover` | object-fit: cover | Remplit, peut etre croppe |
| `object-fill` | object-fit: fill | Remplit, peut etre deforme |
| `object-none` | object-fit: none | Taille originale |
| `object-scale-down` | object-fit: scale-down | Plus petit de contain ou none |

### Comparaison Visuelle

Image 800x600 dans container 400x400 :

**object-contain :**
- Image affichee : 400x300 (reduite proportionnellement)
- Bandes vides : 50px haut et bas
- Aucune partie croppee

**object-cover :**
- Image remplit : 400x400
- Image originale utilisee : portion centrale de ~533x400
- Parties laterales croppees

**object-fill :**
- Image affichee : 400x400
- Image deformee (ratio non respecte)
- Aplatie visuellement

**object-none :**
- Image affichee : taille originale (800x600)
- Depasse du container
- Centre visible, bords croppes

**object-scale-down :**
- Compare contain et none
- Choisit le plus petit
- Ici : 400x300 (comme contain)

### Quand Utiliser Chaque Valeur

| Valeur | Cas d'usage |
|--------|-------------|
| `object-cover` | Backgrounds, heroes, banners, images de cards, avatars |
| `object-contain` | Logos, images produit, previews de documents |
| `object-fill` | Rarement recommande, cas ou la deformation est acceptable |
| `object-none` | Images a taille fixe, sprites |
| `object-scale-down` | Petites images dans grands containers, eviter l'upscaling |

---

## Object Position en Detail

### Classes Predefinies

| Classe | CSS | Position |
|--------|-----|----------|
| `object-center` | object-position: center | Centre (defaut) |
| `object-top` | object-position: top | Haut centre |
| `object-bottom` | object-position: bottom | Bas centre |
| `object-left` | object-position: left | Gauche centre |
| `object-right` | object-position: right | Droite centre |
| `object-left-top` | object-position: left top | Coin sup. gauche |
| `object-left-bottom` | object-position: left bottom | Coin inf. gauche |
| `object-right-top` | object-position: right top | Coin sup. droit |
| `object-right-bottom` | object-position: right bottom | Coin inf. droit |

### Valeurs Arbitraires

Pour un positionnement precis :

| Classe | Effet |
|--------|-------|
| `object-[50%_25%]` | Focus sur le quart superieur |
| `object-[center_top]` | Alignement personnalise |
| `object-[20%_80%]` | Focus bas-gauche |

Format : `object-[x_y]` ou `object-[keyword_keyword]`

### Cas d'Usage

| Situation | Classes |
|-----------|---------|
| Portrait avec visage en haut | `object-cover object-top` |
| Paysage avec sujet a droite | `object-cover object-right` |
| Produit centre en bas | `object-cover object-bottom` |
| Focus sur un point precis | `object-cover object-[30%_20%]` |

---

## Lazy Loading Natif

### Attribut loading

| Valeur | Comportement |
|--------|--------------|
| `loading="lazy"` | Charge quand proche du viewport |
| `loading="eager"` | Charge immediatement (defaut) |

Support : 92%+ des navigateurs (2025)

### Attribut decoding

| Valeur | Comportement |
|--------|--------------|
| `decoding="async"` | Decode sans bloquer le rendu |
| `decoding="sync"` | Decode avant d'afficher |
| `decoding="auto"` | Le navigateur decide (defaut) |

Recommandation : `decoding="async"` pour les images non-critiques.

### Attribut fetchpriority

| Valeur | Usage |
|--------|-------|
| `fetchpriority="high"` | Image LCP, hero |
| `fetchpriority="low"` | Images decoratives, icones |
| `fetchpriority="auto"` | Defaut |

**Combinaison optimale pour LCP :**
`loading="eager" fetchpriority="high"`

**Combinaison pour images secondaires :**
`loading="lazy" fetchpriority="low" decoding="async"`

### Distance de Chargement

Le navigateur decide quand charger les images lazy. Facteurs : vitesse connexion, distance du viewport.

Typiquement : commence a charger ~1250px avant d'etre visible.

Non configurable en HTML natif. Pour controle fin : Intersection Observer API.

---

## Srcset et Sizes Avances

### Syntaxe Srcset Complete

**Descripteurs de largeur (w) :**
`srcset="small.jpg 320w, medium.jpg 640w, large.jpg 1280w"`

**Descripteurs de densite (x) :**
`srcset="normal.jpg 1x, retina.jpg 2x, ultra.jpg 3x"`

Ne pas melanger w et x dans le meme srcset.

### Calcul de Selection

Le navigateur choisit selon :
1. Taille d'affichage (via sizes)
2. Densite d'ecran (device pixel ratio)
3. Conditions reseau

Exemple :
- `sizes="50vw"` sur ecran 1920px = 960px
- Sur ecran 2x DPR = besoin de 1920px d'image
- Choisit l'image >= 1920w dans srcset

### Patterns Sizes Courants

| Contexte | Sizes |
|----------|-------|
| Pleine largeur | `sizes="100vw"` |
| Avec max-width | `sizes="(max-width: 800px) 100vw, 800px"` |
| Layout avec sidebar | `sizes="(min-width: 1024px) calc(100vw - 250px), 100vw"` |
| Grille 3 colonnes desktop | `sizes="(min-width: 1024px) 33.33vw, (min-width: 640px) 50vw, 100vw"` |
| Card dans container | `sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"` |

### Bonnes Pratiques Srcset

**Tailles d'images recommandees :**
320w, 640w, 960w, 1280w, 1920w, 2560w

Pas besoin de plus de 2560w pour la plupart des cas. Ecart de ~1.5x a 2x entre les tailles.

**Formats :**
- Preferer WebP (30% plus leger que JPEG)
- AVIF si support suffisant (50% plus leger)
- Fallback JPEG pour compatibilite

**Qualite compression :**
- WebP : 75-85%
- JPEG : 80-90%
- AVIF : 60-70%

---

## Element Picture Avance

### Structure Complete

```html
<picture>
  <!-- Sources ordonnees du plus specifique au moins -->
  <source media="..." type="..." srcset="..." sizes="..." />
  <!-- Fallback obligatoire -->
  <img src="..." alt="..." class="..." />
</picture>
```

L'ordre compte : premiere source qui matche est utilisee.

### Art Direction

Differentes images selon le viewport :

```html
<picture>
  <source media="(min-width: 1024px)" srcset="desktop.jpg" />
  <source media="(min-width: 640px)" srcset="tablet.jpg" />
  <img src="mobile.jpg" alt="..." />
</picture>
```

Cas d'usage :
- Crop different par viewport
- Orientation differente (portrait mobile, paysage desktop)
- Niveau de detail different

### Format Switching

Servir le meilleur format supporte :

```html
<picture>
  <source type="image/avif" srcset="image.avif" />
  <source type="image/webp" srcset="image.webp" />
  <img src="image.jpg" alt="..." />
</picture>
```

### Classes Tailwind avec Picture

Les classes Tailwind s'appliquent sur `<img>`, pas sur `<picture>` :

```html
<picture>
  <source ... />
  <img src="..." alt="..."
       class="w-full h-auto object-cover rounded-lg" />
</picture>
```

`<picture>` est transparent niveau styling.

---

## Prevention CLS Avancee

### Methodes de Reservation d'Espace

| Methode | Code |
|---------|------|
| Attributs HTML (recommande) | `<img width="800" height="600" class="w-full h-auto" />` |
| Aspect Ratio | `<img class="aspect-[4/3] w-full object-cover" />` |
| Container avec ratio | `<div class="aspect-video"><img class="w-full h-full object-cover" /></div>` |
| Padding hack (legacy) | `<div class="relative pb-[56.25%]"><img class="absolute inset-0 w-full h-full object-cover" /></div>` |

### Calcul du Ratio

Pour convertir dimensions en ratio :

| Dimensions | Classe |
|------------|--------|
| 800x600 | `aspect-[800/600]` ou `aspect-[4/3]` |
| 1920x1080 | `aspect-[1920/1080]` ou `aspect-video` |
| 400x400 | `aspect-square` |

Le navigateur simplifie automatiquement.

### Placeholder Visuel

Pendant le chargement :

| Technique | Classes |
|-----------|---------|
| Background color | `<img class="bg-gray-200 ..." />` |
| Skeleton | `<div class="animate-pulse bg-gray-300 aspect-video" />` |
| Blur placeholder | Afficher version tres basse resolution avec `blur-xl`, retirer au chargement |

### Impact CLS

Valeur CLS cible : < 0.1

**Impact sans reservation d'espace :**
- Image 600px haute = CLS de ~0.6 (tres mauvais)
- Cause : tout le contenu sous l'image se decale

**Avec reservation :**
- CLS = 0 pour l'image
- Pas de decalage de layout

---

## Background Images avec Tailwind

### Classes de Base

| Classe | Propriete |
|--------|-----------|
| `bg-cover` | background-size: cover |
| `bg-contain` | background-size: contain |
| `bg-auto` | background-size: auto |
| `bg-center` | background-position: center |
| `bg-top` | background-position: top |
| `bg-bottom` | background-position: bottom |
| `bg-left` | background-position: left |
| `bg-right` | background-position: right |
| `bg-no-repeat` | background-repeat: no-repeat |
| `bg-repeat` | background-repeat: repeat |
| `bg-fixed` | background-attachment: fixed |
| `bg-local` | background-attachment: local |

### Pattern Background Image

Hero avec background :

```html
<div class="bg-cover bg-center bg-no-repeat min-h-screen"
     style="background-image: url('hero.jpg')">
  <!-- Overlay -->
  <div class="bg-black/50">
    <!-- Content -->
  </div>
</div>
```

Note : background-image necessite `style=""` ou config Tailwind.

### Limites des Background Images

- Pas de lazy loading natif
- Pas de srcset/picture
- Pas de alt text (accessibilite)
- Pas de SEO pour les images

Preferer `<img>` quand possible. Reserver background-image aux cas ou l'image est purement decorative.

---

## Performance et Metriques

### LCP (Largest Contentful Paint)

Si l'image est candidate LCP :
- `loading="eager"` (defaut)
- `fetchpriority="high"`
- Preload dans `<head>`
- Pas de lazy loading

```html
<link rel="preload" as="image" href="hero.jpg" />
```

### Optimisation Taille Fichier

| Type d'image | Taille cible |
|--------------|--------------|
| Hero | < 200KB |
| Cards | < 50KB |
| Thumbnails | < 20KB |
| Avatars | < 10KB |

**Compression recommandee :**
- JPEG : mozjpeg, qualite 80-85%
- WebP : qualite 75-80%
- AVIF : qualite 60-70%

### CDN et Transformation

Services recommandes :
- Cloudinary
- Imgix
- Cloudflare Images
- Vercel Image Optimization

Avantages :
- Transformation a la volee
- Generation srcset automatique
- Conversion format automatique
- Cache global

---

## Accessibilite

### Alt Text

Obligatoire pour toute image informative.

**Bonnes pratiques :**
- Decrire le contenu, pas le format ("photo de...")
- Concis mais complet
- Contextuellement pertinent

**Images decoratives :**
`alt=""` (vide, pas absent)
`role="presentation"` optionnel

Sans alt : considere comme erreur d'accessibilite WCAG.

### Images de Texte

Eviter le texte dans les images. Si necessaire :
- Alt text incluant le texte de l'image
- Considerer aria-label pour plus de contexte

---

# Workflows

# Workflows - Images Expert

Processus detailles et cas d'usage pour les images responsives avec Tailwind CSS.

---

## Workflow 1 : Image Hero Full-Screen

### Contexte

L'utilisateur veut creer une image hero qui couvre l'ecran entier avec un bon comportement responsive.

### Processus

**Phase 1 - Analyse**

1. Identifier le sujet principal de l'image
2. Determiner si overlay/texte sera superpose
3. Evaluer les points de focus pour differents viewports
4. Verifier que c'est l'image LCP

**Phase 2 - Structure HTML**

| Element | Classes |
|---------|---------|
| Container pleine hauteur | `min-h-screen` ou `h-screen`, `relative` pour overlays |
| Image configuration | `w-full h-full object-cover` |
| Focus | `object-center` ou `object-[position]` |

**Phase 3 - Optimisation Chargement**

Image critique (LCP) :
- `loading="eager"` (ou omettre, c'est le defaut)
- `fetchpriority="high"`
- Preload dans `<head>` si possible

**Phase 4 - Srcset pour Performance**

Fournir plusieurs tailles :
- srcset avec widths (640w, 1280w, 1920w, 2560w)
- `sizes="100vw"` car pleine largeur

**Phase 5 - Art Direction (optionnel)**

Si le crop mobile necessite une image differente :
- Utiliser `<picture>`
- Source differente pour mobile vs desktop
- Crop portrait pour mobile, paysage pour desktop

**Phase 6 - Overlay**

Si texte superpose :
- Container `relative` sur le wrapper
- Overlay `absolute` avec `bg-black/50` ou gradient
- Contenu `relative z-10 text-white`

**Phase 7 - Validation**

1. Verifier le rendu sur mobile (320px) a 4K
2. Confirmer que le sujet reste visible
3. Tester le LCP dans Lighthouse
4. Verifier CLS = 0

---

## Workflow 2 : Grille de Cards avec Images

### Contexte

L'utilisateur cree une grille de cards produit ou article avec des images uniformes.

### Processus

**Phase 1 - Definir le Ratio**

Choisir un ratio coherent pour toutes les cards :
- `aspect-video` (16:9) pour contenu multimedia
- `aspect-[4/3]` pour photos
- `aspect-square` pour produits/e-commerce

**Phase 2 - Structure de la Card**

| Element | Classes |
|---------|---------|
| Container card | `overflow-hidden rounded-lg` ou `rounded-xl` |
| Container image | `aspect-[ratio] w-full` |
| Image | `w-full h-full object-cover loading="lazy"` (sauf premiere rangee) |

**Phase 3 - Gestion du Hover**

Effet zoom au hover :

| Element | Classes |
|---------|---------|
| Image | `transition-transform duration-300` |
| Hover | `hover:scale-105` ou `hover:scale-110` |
| Container | `overflow-hidden` pour contenir le zoom |

**Phase 4 - Responsive Grid**

Configuration grid :
`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6`

Srcset avec sizes appropries :
`sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"`

**Phase 5 - Lazy Loading Strategique**

| Rangee | Attribut |
|--------|----------|
| Premiere rangee visible | pas de lazy |
| Rangees suivantes | `loading="lazy"` |

Determiner selon le viewport :
- Mobile : 1-2 images eager
- Desktop : 3-4 images eager

**Phase 6 - Placeholder**

Pendant le chargement :
- `bg-gray-200` sur l'image
- Ou skeleton avec `animate-pulse`

**Phase 7 - Validation**

1. Verifier l'uniformite des ratios
2. Tester le lazy loading en scrollant
3. Confirmer CLS < 0.1
4. Verifier la performance reseau

---

## Workflow 3 : Image Produit avec Zoom

### Contexte

L'utilisateur veut afficher une image produit qui doit etre vue entierement, avec possibilite de zoom.

### Processus

**Phase 1 - Choix Object-Fit**

Produit doit etre entierement visible :
- `object-contain` (pas `object-cover`)
- Background blanc ou transparent

**Phase 2 - Structure**

| Element | Classes |
|---------|---------|
| Container avec ratio | `aspect-square` ou `aspect-[4/5]`, `bg-white` |
| Image | `w-full h-full object-contain p-4` ou `p-8` |

**Phase 3 - Multiple Images (Galerie)**

| Element | Classes |
|---------|---------|
| Image principale | Grande, ratio defini, sans lazy loading |
| Thumbnails | `aspect-square object-cover cursor-pointer` |
| Etat actif | Style distinct (ring, border) |

**Phase 4 - Fonctionnalite Zoom**

Options :
- Zoom au hover (CSS scale)
- Loupe suivant le curseur (JS)
- Modal fullscreen (JS)

Pour zoom simple au hover :
- Container : `overflow-hidden`
- Image : `transition-transform hover:scale-150`
- `origin-[position]` selon le curseur (JS)

**Phase 5 - Multi-Format**

Fournir WebP avec fallback :
- `<picture>` avec `<source type="image/webp">`
- Fallback PNG/JPEG

**Phase 6 - Validation**

1. Produit entierement visible
2. Details visibles au zoom
3. Pas de deformation
4. Background coherent

---

## Workflow 4 : Avatars Responsive

### Contexte

L'utilisateur veut afficher des avatars utilisateur a differentes tailles selon le contexte.

### Processus

**Phase 1 - Definir les Tailles**

Etablir une echelle :

| Taille | Classes | Pixels |
|--------|---------|--------|
| XS | `w-6 h-6` | 24px |
| SM | `w-8 h-8` | 32px |
| MD | `w-10 h-10` | 40px |
| LG | `w-12 h-12` | 48px |
| XL | `w-16 h-16` | 64px |
| 2XL | `w-24 h-24` | 96px |

**Phase 2 - Structure de Base**

Image avatar :
- `rounded-full` pour le cercle
- `object-cover` pour le crop
- `aspect-square` implicite avec w et h egaux

**Phase 3 - Gestion du Fallback**

Si pas d'image :
- Initiales sur fond colore
- Icone utilisateur generique
- Gere via JS/state, pas CSS seul

**Phase 4 - Border et Ring**

Distinction visuelle :
- `ring-2 ring-white` pour superposition
- `border-2 border-white` pour contour simple

**Phase 5 - Groupe d'Avatars**

Avatars empiles :
- `flex -space-x-2`
- Chaque avatar : `ring-2 ring-white`
- z-index croissant : `z-10`, `z-20`, etc.
- Ou `hover:z-50` pour elever au survol

**Phase 6 - Responsive**

Taille selon le contexte :

| Contexte | Classes |
|----------|---------|
| Liste | `w-8 h-8` |
| Profile | `w-24 h-24 md:w-32 md:h-32` |
| Header | `w-8 h-8 md:w-10 md:h-10` |

**Phase 7 - Accessibilite**

- Alt text avec nom de l'utilisateur
- Ou `alt=""` si le nom est affiche a cote

---

## Workflow 5 : Galerie d'Images Responsive

### Contexte

L'utilisateur cree une galerie de photos avec differentes tailles et layouts.

### Processus

**Phase 1 - Choix du Layout**

| Option | Description |
|--------|-------------|
| Grille uniforme | Toutes images meme taille |
| Masonry | Hauteurs variables |
| Featured | Une grande + petites |

**Phase 2 - Grille Uniforme**

Structure :
- `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4`

Chaque image :
- `aspect-square object-cover`
- `loading="lazy"` (sauf visibles)
- `cursor-pointer` pour lightbox

**Phase 3 - Layout Masonry (CSS)**

Avec columns :
- `columns-2 md:columns-3 lg:columns-4 gap-4`
- Chaque item : `break-inside-avoid mb-4`

Note : ordre de lecture en colonnes, pas en rangees.

**Phase 4 - Layout Featured**

Structure grid :
- `grid grid-cols-4 grid-rows-2`
- Featured : `col-span-2 row-span-2`
- Autres : `col-span-1 row-span-1`

Toutes : `aspect-square object-cover`

**Phase 5 - Lazy Loading**

Configuration :
- Premieres images visibles : eager
- Reste : `loading="lazy"`
- `decoding="async"` pour toutes

**Phase 6 - Lightbox**

Preparation pour modal :
- `data-*` attributes avec URL haute resolution
- Srcset avec grande taille disponible
- Alt text pour accessibilite

**Phase 7 - Srcset et Sizes**

Adapter selon le layout :

Grille 4 colonnes :
`sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"`

**Phase 8 - Validation**

1. Toutes images chargent correctement
2. Lazy loading fonctionne
3. Performance acceptable
4. Layout coherent

---

## Workflow 6 : Images avec Texte Superpose

### Contexte

L'utilisateur veut superposer du texte lisible sur une image.

### Processus

**Phase 1 - Structure de Base**

| Element | Classes |
|---------|---------|
| Container | `relative overflow-hidden` |
| Image | `w-full h-full object-cover` |

**Phase 2 - Options d'Overlay**

| Type | Classes |
|------|---------|
| Overlay plein | `absolute inset-0 bg-black/50` |
| Gradient de bas | `bg-gradient-to-t from-black/70 via-black/30 to-transparent` |
| Gradient horizontal | `bg-gradient-to-r from-black/70 to-transparent` |

**Phase 3 - Positionnement du Texte**

Container texte :
- `absolute` avec positionnement (`bottom-0 left-0`, `inset-0`, etc.)
- `z-10` pour etre au-dessus de l'overlay
- Padding approprie : `p-4 md:p-6`

**Phase 4 - Lisibilite**

Texte :
- `text-white`
- Optionnel : text-shadow via style ou `drop-shadow-lg`

Si pas d'overlay :
- text-shadow obligatoire
- Ou `backdrop-blur` sur le texte container

**Phase 5 - Responsive**

Ajuster selon le viewport :
- Taille du texte : `text-lg md:text-xl lg:text-2xl`
- Padding : `p-4 md:p-6 lg:p-8`
- Gradient intensity si necessaire

**Phase 6 - Accessibilite**

- Alt text decrit l'image, pas le texte dessus
- Le texte superpose est dans le HTML, pas l'image
- Contraste suffisant texte/fond

---

## Workflow 7 : Optimisation des Images Existantes

### Contexte

L'utilisateur a des images existantes a optimiser pour la performance.

### Processus

**Phase 1 - Audit**

Identifier les problemes :
- Images sans dimensions → CLS
- Images trop grandes → Performance
- Pas de lazy loading → Temps de chargement
- Format JPEG/PNG uniquement → Taille fichier

**Phase 2 - Ajouter les Dimensions**

Pour chaque image :
- Ajouter `width` et `height` HTML
- Ou ajouter `aspect-[W/H]`
- Ajouter `h-auto` pour responsive

**Phase 3 - Implementer Lazy Loading**

| Type | Attributs |
|------|-----------|
| Images sous le fold | `loading="lazy" decoding="async"` |
| Images critiques | `loading="eager" fetchpriority="high"` si LCP |

**Phase 4 - Convertir en Formats Modernes**

Generer versions WebP :
- Utiliser Squoosh, ImageOptim, ou CLI
- Qualite 75-85%

Implementer avec `<picture>` :
```html
<picture>
  <source type="image/webp" srcset="...">
  <img src="original.jpg">
</picture>
```

**Phase 5 - Generer Srcset**

Creer multiples tailles :
- 320w, 640w, 960w, 1280w, 1920w
- Automatiser avec script ou CDN

Ajouter srcset et sizes aux images.

**Phase 6 - Configurer un CDN (optionnel)**

Services :
- Cloudinary, Imgix, Cloudflare
- Transformation automatique
- Format automatique

**Phase 7 - Validation**

Tester avec Lighthouse :
- LCP < 2.5s
- CLS < 0.1
- Pas d'images oversized
- Formats modernes utilises

---

## Workflow 8 : Debug des Problemes d'Images

### Contexte

Les images ne s'affichent pas correctement.

### Processus

**Phase 1 - Identification du Probleme**

Symptomes courants :
- Image deformee
- Image croppee incorrectement
- Layout shift au chargement
- Image ne charge pas
- Image trop lente

**Phase 2 - Image Deformee**

| Cause | Solution |
|-------|----------|
| `object-fill` ou pas d'object-* | Ajouter `object-cover` ou `object-contain` |
| Ratio inapproprie | Verifier que le ratio est correct |

**Phase 3 - Crop Incorrect**

| Cause | Solution |
|-------|----------|
| object-position ne cible pas le sujet | Ajuster `object-position` (top, bottom, [x_y]) |
| Image differente selon viewport | Considerer art direction avec `<picture>` |

**Phase 4 - Layout Shift**

| Cause | Solution |
|-------|----------|
| Pas de dimensions reservees | Ajouter width/height HTML ou `aspect-[W/H]` |
| h-auto sans width | Verifier que `h-auto` est present pour responsive |

**Phase 5 - Image Ne Charge Pas**

Verifications :
- URL correcte ?
- CORS configure ?
- Fichier existe ?
- Console errors ?

**Phase 6 - Image Lente**

| Cause | Solution |
|-------|----------|
| Fichier trop gros | Compresser l'image |
| Pas de lazy loading | Ajouter `loading="lazy"` si applicable |
| Pas de CDN | Utiliser un CDN |
| Format non optimise | Convertir en WebP |

**Phase 7 - DevTools**

Network tab :
- Verifier taille des images
- Verifier temps de chargement
- Verifier format servi

Performance tab :
- Identifier les images blocking
- Verifier LCP element

---

## Cas d'Usage Speciaux

### Cas 1 : Image avec Ratio Variable

Contexte : l'image source a un ratio inconnu

**Solution aspect-auto :**
```html
<img class="w-full h-auto aspect-auto object-cover" />
```

**Avec contrainte max-height :**
```html
<img class="w-full h-auto max-h-96 object-cover" />
```

Le ratio naturel est respecte jusqu'a la hauteur max.

### Cas 2 : Image Responsive en Background

Contexte : background-image ne supporte pas srcset

Solutions :
1. Utiliser `<img>` avec absolute positioning
2. Image-set() CSS (support limite)
3. JS pour changer l'URL selon viewport
4. CDN avec transformation automatique

Preferer `<img>` quand possible.

### Cas 3 : Sprites et Icones

Pour les icones, preferer SVG.

Si sprites necessaires :
- `object-none` pour garder la taille originale
- `object-[position]` pour selectionner la zone
- Clip ou `overflow-hidden` sur le container

Moderne : utiliser SVG sprite avec `<use>`.

### Cas 4 : Images dans Markdown/CMS

Contenu non controle :

Avec prose :
- `prose prose-img:rounded-lg`
- `prose prose-img:shadow-md`

Pour garantir le responsive :
- CSS global : `img { max-width: 100%; height: auto; }`
- Tailwind : `@layer base` avec `img { @apply max-w-full h-auto }`

---

## Ressources et References

### Documentation Officielle

- Tailwind CSS Aspect Ratio
- Tailwind CSS Object Fit
- Tailwind CSS Object Position
- MDN Responsive Images

### Outils

- Squoosh (squoosh.app) : compression et conversion
- Cloudinary : CDN et transformation
- imgix : CDN et transformation
- responsivebreakpoints.com : generateur srcset
- Lighthouse : audit performance