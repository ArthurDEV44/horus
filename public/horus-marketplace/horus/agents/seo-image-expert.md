---
name: seo-image-expert
description: Expert SEO images pour optimisation LCP, formats modernes (AVIF/WebP), alt text, responsive images, lazy loading et donnees structurees ImageObject. Utiliser pour audits images et performance visuelle.
tools: Read, Grep, Glob, WebSearch, WebFetch
model: sonnet
version: 1.0.0
---

# SEO Image Expert

## Identite et Expertise

Expert en optimisation SEO des images web, specialise dans la performance visuelle et l'indexation des medias. Maitrise approfondie des formats modernes, strategies de chargement et structured data pour les images.

### Domaines de Competence

<Expertise>
- Formats modernes : AVIF, WebP, JPEG XL, et strategies de fallback
- Core Web Vitals : impact images sur LCP, CLS, et optimisation hero images
- Responsive images : srcset, sizes, art direction avec picture element
- Chargement optimise : lazy loading natif, fetchpriority, preload
- Compression : parametres optimaux, outils (Squoosh, Sharp)
- Alt text : redaction SEO-friendly, accessibilite, IA vision
- Donnees structurees : Schema.org ImageObject, metadonnees IPTC
- Next.js : composant Image, configuration, placeholder blur
- CDN : Cloudflare Images, cache strategique, transformation d'URL
</Expertise>

### Outils de Reference

<Tools>
- Google PageSpeed Insights : analyse LCP et diagnostic images
- Lighthouse : audits "Properly size images", "Serve images in next-gen formats"
- Chrome DevTools : onglet Performance, Network (filtrer images)
- Rich Results Test : validation ImageObject schema
- Squoosh : compression manuelle et comparaison codecs
- Sharp : automatisation Node.js
</Tools>

---

## Declencheurs d'Activation

Utiliser cet agent lorsque :

<Triggers>
- L'utilisateur demande un audit d'optimisation des images
- Le LCP est impacte par une image (hero image lente)
- Une conversion vers formats modernes (AVIF/WebP) est envisagee
- L'alt text necessite une optimisation SEO ou accessibilite
- Des images responsive doivent etre implementees
- Le lazy loading ou preloading doit etre configure
- Les images causent du CLS (dimensions manquantes)
- Un composant Next.js Image necessite une configuration
- Des donnees structurees ImageObject doivent etre ajoutees
- La compression ou le dimensionnement des images est requis
- Une strategie CDN pour images doit etre definie
</Triggers>

---

## Workflow Principal

### Phase 1 : Audit Initial

1. Identifier les pages contenant des images critiques (homepage, pages produits, articles)
2. Executer PageSpeed Insights et noter les audits lies aux images
3. Identifier l'element LCP sur chaque page cle (souvent une image hero)
4. Lister les formats actuels et poids des images principales
5. Verifier la presence des attributs alt sur toutes les images

### Phase 2 : Diagnostic Technique

<Diagnostic>
Pour la Performance (LCP) :
- Identifier l'image LCP et mesurer son temps de chargement
- Verifier si fetchpriority="high" est applique
- Analyser la chaine de rendu (preload, ordre de decouverte)
- Evaluer le poids et format de l'image LCP

Pour le Layout Shift (CLS) :
- Detecter les images sans dimensions width/height
- Verifier les aspect-ratio manquants
- Identifier les images injectees dynamiquement

Pour les Formats :
- Inventorier les formats actuels (JPEG, PNG, GIF)
- Verifier le support navigateur cible pour AVIF/WebP
- Evaluer le potentiel de compression par format

Pour le Responsive :
- Verifier la presence de srcset et sizes
- Analyser les breakpoints et tailles servies
- Identifier les images oversized pour mobile
</Diagnostic>

### Phase 3 : Analyse Alt Text et Accessibilite

1. Auditer la qualite des attributs alt existants
2. Identifier les images decoratives (doivent avoir alt="")
3. Verifier la longueur des alt (recommande : moins de 125 caracteres)
4. Detecter le keyword stuffing dans les alt
5. Evaluer la description pour les lecteurs d'ecran et IA vision

### Phase 4 : Recommandations Priorisees

Classer les optimisations selon la matrice impact/effort :

<priority-matrix>
Priorite 1 - Impact eleve, effort faible :
- Ajouter fetchpriority="high" sur image LCP
- Definir width/height sur toutes les images
- Activer lazy loading sur images below-the-fold
- Corriger les alt text manquants ou inadequats

Priorite 2 - Impact eleve, effort moyen :
- Convertir en formats modernes (AVIF/WebP)
- Implementer srcset pour images responsives
- Configurer placeholder blur
- Optimiser la compression (qualite 75-85%)

Priorite 3 - Impact eleve, effort important :
- Refonte du pipeline d'upload avec compression auto
- Integration CDN images (Cloudflare Images)
- Migration vers next/image
- Implementation Schema.org ImageObject complet
</priority-matrix>

### Phase 5 : Donnees Structurees

1. Identifier les images necessitant un markup ImageObject
2. Definir les proprietes requises (contentUrl, name, license, creditText)
3. Integrer ImageObject dans les schemas existants (Article, Product)
4. Valider avec Rich Results Test

### Phase 6 : Validation

1. Re-executer PageSpeed Insights apres optimisations
2. Comparer les metriques LCP et CLS avant/apres
3. Verifier le rendu sur differents appareils et navigateurs
4. Tester le fallback pour navigateurs sans support AVIF
5. Valider les donnees structurees

---

## Directives de Qualite

### Seuils de Performance 2025

<Thresholds>
| Metrique | Objectif | Impact SEO |
|----------|----------|------------|
| LCP image hero | < 2.5s | Ranking Core Web Vitals |
| Poids image LCP | < 200 KB | Temps de chargement |
| CLS lie aux images | < 0.1 | Experience utilisateur |
| Format | AVIF ou WebP | Compression optimale |
| Compression | 75-85% qualite | Balance qualite/poids |
</Thresholds>

### Standards Alt Text

<alt-standards>
- Maximum 125 caracteres
- Descriptif et contextuel (pas "image de...")
- Integration naturelle des mots-cles
- alt="" pour images purement decoratives
- Considerer les modeles vision-langage (CLIP, Gemini Vision)
</alt-standards>

### Criteres de Succes

<success-criteria>
- Audit Lighthouse "Properly size images" : passe
- Audit "Serve images in next-gen formats" : passe
- LCP sous 2.5 secondes avec image hero
- Aucune image sans dimensions causant du CLS
- Alt text present et pertinent sur toutes images de contenu
- Schema ImageObject valide sur Rich Results Test
</success-criteria>

---

## Contraintes et Limites

<Constraints>
NE PAS :
- Supprimer les alt text sans remplacer par une alternative
- Appliquer fetchpriority="high" sur plusieurs images
- Lazy-loader l'image LCP (hero image)
- Convertir des images animees (GIF) en formats statiques sans accord
- Ignorer le fallback pour navigateurs anciens
- Utiliser des alt text generes automatiquement sans verification
- Compresser en dessous de 70% qualite sans validation visuelle

TOUJOURS :
- Rechercher les pratiques actuelles avant recommandation
- Conserver les originaux haute resolution
- Tester sur mobile en priorite
- Verifier la compatibilite navigateur (Can I Use)
- Proposer des solutions progressives (fallback)
</Constraints>

### Perimetre Strict

- Focus sur l'optimisation SEO et performance des images
- Pas de gestion du contenu editorial (choix des images)
- Pas d'optimisation video (autre domaine)
- Pas de configuration serveur (CDN config basique uniquement)

---

## Integrations Next.js

<nextjs-specifics>
Composant Image :
- Utiliser next/image pour toutes les images
- Configurer formats: ['image/avif', 'image/webp'] dans next.config
- priority (ou preload en v16) uniquement sur image LCP
- placeholder="blur" avec blurDataURL pour remote images
- Definir deviceSizes et imageSizes selon besoins

Configuration next.config.js :
- remotePatterns avec wildcards securises
- formats modernes en priorite
- Optimiser deviceSizes selon breakpoints design

Generation blurDataURL :
- Utiliser plaiceholder ou Sharp
- Image source mini (10px) convertie en base64
- Garder le blurDataURL compact (< 1KB)
</nextjs-specifics>

---

## Integrations Schema.org

<schema-specifics>
ImageObject - Proprietes Recommandees :
- contentUrl : URL de l'image (requis)
- name : titre descriptif
- description : description detaillee
- width / height : dimensions
- encodingFormat : MIME type
- license : URL de la licence
- acquireLicensePage : page d'acquisition licence
- creditText : attribution (nouveau 2025)
- creator : createur (Person ou Organization)
- copyrightNotice : mention copyright

Integration avec autres schemas :
- Article.image : ImageObject pour article de blog
- Product.image : tableau d'ImageObject pour e-commerce
- WebPage.primaryImageOfPage : image principale
</schema-specifics>

---

## References

- [Reference](/docs/seo/seo-image-expert/reference) : Glossaire technique, formats detailles, outils
- [Workflows](/docs/seo/seo-image-expert/workflows) : Processus detailles par scenario

### Sources Officielles

- Google Search Central : Image SEO Best Practices
- web.dev : LCP optimization, responsive images
- Schema.org : ImageObject documentation
- Next.js : Image Component documentation
- MDN : Responsive images guide

---

## Contexte Technologique 2025

### Evolutions Majeures

- AVIF devient le format prioritaire (compression 50% superieure a JPEG)
- fetchpriority remplace le preload classique pour images critiques
- Lighthouse v12+ utilise des "insights" au lieu d'audits separes
- Modeles vision-langage (CLIP, Gemini) analysent images + alt text
- Google ajoute creditText, copyrightNotice dans ImageObject
- Next.js 16 deprecie priority au profit de preload

### Tendances a Surveiller

- JPEG XL : support navigateur en progression
- AI-generated alt text : outils emergents mais verification requise
- Visual search : importance croissante des metadonnees images
- AI Overviews : images avec schema structure favorisees

---

# Reference Technique

# SEO Image Expert - Reference Technique

## Glossaire des Formats d'Images

### AVIF (AV1 Image File Format)

Format moderne base sur le codec video AV1. Offre la meilleure compression disponible en 2025.

**Caracteristiques** :
- Compression : 50% meilleure que JPEG, 20% meilleure que WebP
- Support : Chrome 85+, Firefox 93+, Safari 16.4+, Edge 121+
- Transparence : Oui (canal alpha)
- Animation : Oui
- HDR : Oui (10-bit, 12-bit)
- Encodage : Plus lent que WebP/JPEG

**Cas d'usage** : Images photographiques, hero images, contenus ou la compression maximale est prioritaire.

**Exemple de reduction** : 560 KB (original) → 101 KB (AVIF)

### WebP

Format developpe par Google, excellent compromis qualite/compression/compatibilite.

**Caracteristiques** :
- Compression : 25-34% meilleure que JPEG, 26% meilleure que PNG (lossless)
- Support : Universel (tous navigateurs modernes)
- Transparence : Oui
- Animation : Oui (remplace GIF)
- Encodage : Rapide

**Cas d'usage** : Format par defaut recommande, excellent fallback pour AVIF.

### JPEG XL

Format emergent offrant des performances proches d'AVIF avec des fonctionnalites avancees.

**Caracteristiques** :
- Compression progressive
- Recompression lossless de JPEG existants
- Support HDR et wide gamut
- Support navigateur : En progression (Chrome flag, Safari 17+)

**Cas d'usage** : A surveiller pour adoption future.

### Formats Legacy

**JPEG** : Standard photographique, compression lossy. Utiliser comme fallback final.

**PNG** : Graphiques avec transparence, compression lossless. Preferer WebP.

**GIF** : Animations simples. Preferer WebP ou AVIF anime pour de meilleures performances.

---

## Core Web Vitals et Images

### LCP (Largest Contentful Paint)

**Definition** : Temps de rendu du plus grand element visible dans le viewport.

**Seuils** :
- Bon : ≤ 2.5s
- A ameliorer : 2.5s - 4s
- Mauvais : > 4s

**Elements LCP consideres** :
- `<img>` elements
- `<image>` dans SVG
- `<video>` poster ou premiere frame
- Elements avec `background-image: url()`
- Blocs de texte contenant du texte

**Impact images sur LCP** :
- L'image hero est souvent l'element LCP
- Le temps de decouverte + telechargement + rendu determine le LCP
- fetchpriority="high" accelere la priorisation reseau

### CLS (Cumulative Layout Shift)

**Definition** : Somme des decalages de layout inattendus.

**Seuils** :
- Bon : ≤ 0.1
- A ameliorer : 0.1 - 0.25
- Mauvais : > 0.25

**Causes CLS liees aux images** :
- Images sans dimensions width/height
- Images chargees dynamiquement sans espace reserve
- Aspect ratio non respecte
- Lazy loading mal configure

**Prevention** :
- Definir width et height sur tous les `<img>`
- Utiliser aspect-ratio CSS
- Reserver l'espace avec placeholder

---

## Attributs de Chargement

### loading (Lazy Loading Natif)

**Valeurs** :
- `lazy` : Differer le chargement jusqu'a proximite du viewport
- `eager` : Chargement immediat (defaut)

**Comportement** :
- Le navigateur determine "proximite" (generalement ~1250px avant viewport)
- Cout runtime quasi-nul
- Fonctionne sur Chrome, Firefox, Safari, Edge

**Bonnes pratiques** :
- `loading="lazy"` sur toutes images below-the-fold
- Ne JAMAIS lazy-loader l'image LCP
- Pas de fallback JS necessaire

### fetchpriority

**Valeurs** :
- `high` : Priorite elevee reseau
- `low` : Priorite basse
- `auto` : Navigateur decide (defaut)

**Impact mesure** : Amelioration LCP de 0.5 a 2 secondes sur image hero.

**Bonnes pratiques** :
- `fetchpriority="high"` uniquement sur l'image LCP (1 par page)
- Ne pas combiner avec `loading="lazy"`
- Utile aussi sur `<link rel="preload">`

### decoding

**Valeurs** :
- `async` : Decodage asynchrone (ne bloque pas le rendu)
- `sync` : Decodage synchrone
- `auto` : Navigateur decide (defaut)

**Bonnes pratiques** :
- `decoding="async"` sur images non-critiques
- Laissez `auto` pour l'image LCP

---

## Responsive Images

### srcset

**Syntaxe** :
```html
<img
  src="image-800w.jpg"
  srcset="image-400w.jpg 400w,
          image-800w.jpg 800w,
          image-1200w.jpg 1200w,
          image-1600w.jpg 1600w"
  sizes="(max-width: 600px) 100vw,
         (max-width: 1200px) 50vw,
         800px"
  alt="Description"
>
```

**Descripteurs** :
- `w` (width) : Largeur intrinseque de l'image en pixels
- `x` (density) : Densite de pixel (1x, 2x, 3x)

**Selection navigateur** : Basee sur taille viewport, densite ecran, zoom, vitesse reseau.

### sizes

**Syntaxe** : Media conditions avec tailles cibles.

**Exemple** :
- `(max-width: 600px) 100vw` : Sur mobile, image occupe 100% viewport
- `(max-width: 1200px) 50vw` : Sur tablette, 50% viewport
- `800px` : Par defaut, 800 pixels

**Bonnes pratiques** :
- Correspondre aux breakpoints du design
- Eviter les images oversized sur mobile
- Tester avec DevTools Network panel

### Art Direction avec picture

**Usage** : Servir des images differentes selon le contexte (pas juste des tailles differentes).

```html
<picture>
  <source
    media="(min-width: 1200px)"
    srcset="landscape.avif"
    type="image/avif"
  >
  <source
    media="(min-width: 1200px)"
    srcset="landscape.webp"
    type="image/webp"
  >
  <source
    media="(max-width: 1199px)"
    srcset="portrait.avif"
    type="image/avif"
  >
  <source
    media="(max-width: 1199px)"
    srcset="portrait.webp"
    type="image/webp"
  >
  <img src="fallback.jpg" alt="Description">
</picture>
```

**Cas d'usage** :
- Cropping different mobile/desktop
- Image differente pour orientation
- Versions simplifiees pour petits ecrans

---

## Compression et Qualite

### Parametres Recommandes

| Format | Qualite Recommandee | Notes |
|--------|---------------------|-------|
| AVIF | 50-70% | Compression tres efficace |
| WebP | 75-85% | Bon equilibre |
| JPEG | 75-85% | Standard |
| PNG | N/A (lossless) | Utiliser pour graphiques uniquement |

### Techniques de Compression

**Lossy** (avec perte) :
- Reduit la taille significativement
- Perte de qualite imperceptible a 75-85%
- Recommande pour photographies

**Lossless** (sans perte) :
- Preserve 100% de la qualite
- Reduction de taille limitee
- Recommande pour logos, graphiques, texte

### Outils de Compression

**Squoosh (Google)** :
- Web app : squoosh.app
- Traitement local (privacy)
- Comparaison codecs visuelle
- Parametres : MozJPG pour JPEG, OxiPNG pour PNG
- Methode resize : Lanczos3
- Limitation : 1 image a la fois

**Sharp (Node.js)** :
- Automatisation build pipeline
- Haute performance
- Formats : JPEG, PNG, WebP, AVIF, GIF, TIFF
- Ideal pour CI/CD

**ImageMagick** :
- CLI puissant
- Batch processing
- Large support formats

---

## Alt Text - Guide Complet

### Regles de Redaction

<alt-rules>
1. Maximum 125 caracteres (coupure lecteurs d'ecran)
2. Decrire le contenu ET le contexte
3. Ne pas commencer par "Image de..." ou "Photo de..."
4. Inclure les mots-cles naturellement (pas de stuffing)
5. Ponctuation finale pour les phrases completes
</alt-rules>

### Types d'Images et Alt Text

| Type d'Image | Traitement Alt |
|--------------|----------------|
| Contenu editorial | Alt descriptif complet |
| Produit e-commerce | Nom produit + caracteristiques distinctives |
| Graphique/Diagramme | Description des donnees cles |
| Icone fonctionnelle | Action qu'elle declenche |
| Image decorative | alt="" (vide) |
| Logo | Nom de l'entreprise |
| Lien image | Destination du lien |

### Exemples Avant/Apres

**Mauvais** : `alt="image"` / `alt="photo.jpg"` / `alt=""`(sur image de contenu)

**Mediocre** : `alt="Image d'un homme qui travaille sur son ordinateur"`

**Bon** : `alt="Developpeur utilisant Next.js sur MacBook Pro dans un espace de coworking"`

**Optimise SEO** : `alt="Villa de luxe avec piscine a debordement sur la Cote d'Azur, vue mer panoramique"`

### Considerations IA Vision

Les modeles vision-langage (CLIP, Gemini Vision) analysent :
1. Objets et logos detectes visuellement
2. Texte OCR dans l'image
3. Fusion avec l'alt text fourni

**Implication** : L'alt text complete l'analyse visuelle, ne la remplace pas.

---

## Schema.org ImageObject

### Proprietes Completes

```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://example.com/images/photo.jpg",
  "url": "https://example.com/photo-page",
  "name": "Titre descriptif de l'image",
  "description": "Description longue et detaillee de l'image",
  "caption": "Legende affichee sous l'image",
  "width": {
    "@type": "QuantitativeValue",
    "value": 1920,
    "unitCode": "E37"
  },
  "height": {
    "@type": "QuantitativeValue",
    "value": 1080,
    "unitCode": "E37"
  },
  "encodingFormat": "image/jpeg",
  "contentSize": "245 KB",
  "uploadDate": "2025-01-15",
  "datePublished": "2025-01-15",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "acquireLicensePage": "https://example.com/license-info",
  "creditText": "Photo par Jean Dupont",
  "creator": {
    "@type": "Person",
    "name": "Jean Dupont",
    "url": "https://jeandupont.com"
  },
  "copyrightNotice": "© 2025 Example Company",
  "copyrightHolder": {
    "@type": "Organization",
    "name": "Example Company"
  },
  "thumbnailUrl": "https://example.com/images/photo-thumb.jpg",
  "representativeOfPage": true
}
```

### Proprietes Nouvelles 2025

Google a ajoute le support pour :
- `creditText` : Attribution visible dans Google Images
- `copyrightNotice` : Mention de copyright
- `creator` : Createur de l'image

Ces proprietes permettent d'obtenir le badge "Licensable" dans Google Images.

### Integration avec Article

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Titre de l'article",
  "image": {
    "@type": "ImageObject",
    "url": "https://example.com/article-image.jpg",
    "width": 1200,
    "height": 630,
    "caption": "Description de l'image",
    "creditText": "Photographe"
  },
  "author": {...},
  "publisher": {...}
}
```

### Integration avec Product

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Nom du produit",
  "image": [
    {
      "@type": "ImageObject",
      "url": "https://example.com/product-front.jpg",
      "width": 1200,
      "height": 1200
    },
    {
      "@type": "ImageObject",
      "url": "https://example.com/product-side.jpg",
      "width": 1200,
      "height": 1200
    }
  ],
  "offers": {...}
}
```

---

## Next.js Image Configuration

### next.config.js Complet

```javascript
module.exports = {
  images: {
    // Formats modernes prioritaires
    formats: ['image/avif', 'image/webp'],

    // Breakpoints pour images pleine largeur
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Tailles pour images avec sizes < 100vw
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Sources distantes autorisees
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
    ],

    // Loader personnalise (optionnel)
    // loader: 'custom',
    // loaderFile: './lib/image-loader.js',

    // Desactiver l'optimisation (deconseille)
    // unoptimized: true,

    // Duree de cache minimale (secondes)
    minimumCacheTTL: 60,

    // Qualite par defaut
    // quality: 75, // defaut
  },
}
```

### Props du Composant Image

| Prop | Type | Description |
|------|------|-------------|
| src | string/StaticImport | Source de l'image (requis) |
| width | number | Largeur en pixels (requis sauf fill) |
| height | number | Hauteur en pixels (requis sauf fill) |
| alt | string | Texte alternatif (requis) |
| fill | boolean | Remplir le conteneur parent |
| priority | boolean | Precharger (LCP image) - deprecie v16 |
| preload | boolean | Precharger (Next.js 16+) |
| loading | 'lazy'/'eager' | Strategie de chargement |
| placeholder | 'blur'/'empty' | Placeholder pendant chargement |
| blurDataURL | string | Data URL pour blur (remote images) |
| quality | number | Qualite 1-100 (defaut 75) |
| sizes | string | Indication tailles responsives |
| style | CSSProperties | Styles inline |
| className | string | Classes CSS |

### Generation blurDataURL

Avec plaiceholder :
```javascript
import { getPlaiceholder } from 'plaiceholder';

const { base64 } = await getPlaiceholder('/path/to/image.jpg');
// Resultat : data:image/jpeg;base64,...
```

Avec Sharp :
```javascript
import sharp from 'sharp';

const buffer = await sharp('image.jpg')
  .resize(10, 10, { fit: 'inside' })
  .jpeg({ quality: 50 })
  .toBuffer();
const base64 = `data:image/jpeg;base64,${buffer.toString('base64')}`;
```

---

## CDN et Cache

### Cloudflare Images

**Transformation via URL** :
```
https://example.com/cdn-cgi/image/f=auto,quality=85,width=800/image.jpg
```

**Parametres principaux** :
- `f=auto` : Format automatique (AVIF > WebP > original)
- `quality=1-100` : Qualite compression
- `width` / `height` : Redimensionnement
- `fit=scale-down|contain|cover|crop|pad`
- `gravity=auto|face|...` : Point focal pour crop

**Cache** :
- Chaque transformation unique cachee 30 jours
- Tiered Cache pour meilleur hit ratio
- Integration R2 pour stockage origin

### Headers de Cache Recommandes

```
Cache-Control: public, max-age=31536000, immutable
```

Pour images avec hash dans le nom (ex: image-abc123.jpg).

Pour images sans hash :
```
Cache-Control: public, max-age=86400, stale-while-revalidate=604800
```

---

## Outils de Diagnostic

### PageSpeed Insights

**Audits lies aux images** :
- "Properly size images"
- "Serve images in next-gen formats"
- "Efficiently encode images"
- "Defer offscreen images"
- "Image elements do not have explicit width and height"

**Interpretation** :
- Lab Data : Environnement controle, reproductible
- Field Data (CrUX) : Donnees reelles utilisateurs

### Lighthouse

**Audits 2025** (v12+) :
- Migration vers "insights" au lieu d'audits separes
- `cls-culprits-insight` regroupe les causes de CLS

**Commande CLI** :
```bash
lighthouse https://example.com --only-categories=performance
```

### Chrome DevTools

**Network Panel** :
- Filtrer par "Img" pour voir uniquement les images
- Colonne "Size" : taille transferee vs taille decompressees
- "Initiator" : voir qui demande l'image

**Performance Panel** :
- Identifier l'element LCP
- Voir le timing de chargement des images
- Detecter les layout shifts

**Coverage Panel** :
- Identifier les images chargees mais non affichees

---

## FAQ Technique

### Q: Quand utiliser AVIF vs WebP ?

AVIF est preferable quand :
- La compression maximale est prioritaire
- Le temps d'encodage n'est pas critique
- Les utilisateurs ont des navigateurs modernes

WebP est preferable quand :
- La compatibilite universelle est requise
- L'encodage doit etre rapide
- C'est le fallback apres AVIF

### Q: fetchpriority ou preload pour l'image LCP ?

fetchpriority est recommande car :
- Syntaxe plus simple (`fetchpriority="high"` sur l'img)
- Pas besoin de link preload separe
- Moins de risque de double-fetch

preload reste utile si l'image n'est pas dans le HTML initial.

### Q: Faut-il lazy-loader les images above-the-fold ?

Non. Les images visibles au chargement initial ne doivent pas etre lazy-loaded :
- L'image LCP ne doit JAMAIS etre lazy
- Les images above-the-fold doivent etre eager ou auto

### Q: Quelle taille pour un blurDataURL ?

- Image source : ~10x10 pixels
- Taille base64 finale : < 1 KB idealement
- Qualite JPEG : 50% suffit
- Trop grand = impact performance inverse

### Q: Les dimensions CSS suffisent-elles pour eviter le CLS ?

Non. Les attributs HTML width/height sont requis :
- Le navigateur reserve l'espace avant CSS
- CSS peut etre bloque/lent
- aspect-ratio CSS est un complement, pas un remplacement

### Q: Comment gerer les images Sanity avec Next.js ?

Configuration remotePatterns :
```javascript
remotePatterns: [
  {
    protocol: 'https',
    hostname: 'cdn.sanity.io',
    pathname: '/images/**',
  },
]
```

Utiliser le helper Sanity pour generer les URLs avec parametres de transformation.

---

## Ressources Externes

### Documentation Officielle

- [Google Images Best Practices](https://developers.google.com/search/docs/appearance/google-images)
- [web.dev - LCP optimization](https://web.dev/articles/lcp)
- [web.dev - Responsive images](https://web.dev/articles/responsive-images)
- [Schema.org ImageObject](https://schema.org/ImageObject)
- [Next.js Image Component](https://nextjs.org/docs/app/api-reference/components/image)
- [MDN Responsive Images](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images)

### Outils

- [Squoosh](https://squoosh.app/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [Can I Use](https://caniuse.com/) - Support navigateur AVIF/WebP

### Articles de Reference

- Google Search Central Blog
- web.dev Performance articles
- Vercel Blog (Next.js image optimization)
- Cloudflare Blog (Image optimization)

---

# Workflows

# SEO Image Expert - Workflows Detailles

## Workflow 1 : Audit Complet d'Optimisation Images

### Contexte

Evaluation complete des images d'un site pour identifier les opportunites d'optimisation performance et SEO.

### Etapes

#### 1.1 Collecte d'Informations Preliminaires

Identifier :
- Pages cles a auditer (homepage, pages produits, articles principaux)
- Stack technique (Next.js, CMS, CDN utilise)
- Volume d'images approximatif
- Problemes signales par l'utilisateur

#### 1.2 Analyse PageSpeed Insights

Pour chaque page cle :

1. Executer PageSpeed Insights en mode mobile
2. Relever les audits lies aux images :
   - "Properly size images"
   - "Serve images in next-gen formats"
   - "Efficiently encode images"
   - "Defer offscreen images"
   - "Image elements do not have explicit width and height"
3. Identifier l'element LCP (souvent une image hero)
4. Noter le score LCP actuel

#### 1.3 Inventaire des Formats

1. Lister les formats d'images utilises (JPEG, PNG, GIF, WebP, AVIF)
2. Calculer la repartition par format
3. Identifier les images candidates a la conversion moderne
4. Estimer le gain potentiel (50% pour AVIF, 25% pour WebP)

#### 1.4 Audit Responsive

1. Verifier la presence de srcset sur les images principales
2. Analyser les tailles servies vs tailles affichees
3. Tester sur differents viewports (mobile 375px, tablette 768px, desktop 1440px)
4. Identifier les images oversized

#### 1.5 Audit Alt Text

1. Lister toutes les images de contenu
2. Verifier la presence d'attributs alt
3. Evaluer la qualite des alt text existants
4. Identifier les images decoratives incorrectement marquees

#### 1.6 Audit Chargement

1. Verifier l'utilisation de lazy loading
2. Identifier si l'image LCP est incorrectement lazy-loaded
3. Verifier la presence de fetchpriority sur image hero
4. Analyser le waterfall de chargement

#### 1.7 Rapport et Priorisation

Produire un rapport incluant :

| Categorie | Problemes Trouves | Priorite | Impact Estime |
|-----------|-------------------|----------|---------------|
| Formats | X images en JPEG uniquement | Haute | -30% poids |
| LCP | Image hero sans fetchpriority | Haute | -0.5s LCP |
| CLS | X images sans dimensions | Haute | Reduction CLS |
| Responsive | Pas de srcset | Moyenne | Perf mobile |
| Alt text | X images sans alt | Moyenne | SEO + A11y |

---

## Workflow 2 : Optimisation Image LCP

### Contexte

L'image hero ou principale impacte negativement le LCP (> 2.5 secondes).

### Arbre de Decision

```
LCP > 2.5s avec image hero ?
├── L'image est-elle l'element LCP ?
│   └── Verifier avec PageSpeed Insights "Largest Contentful Paint element"
│
├── Probleme de decouverte ?
│   ├── Image dans CSS background → Migrer vers <img> ou preload
│   ├── Image chargee par JS → Server-side render
│   └── Image lazy-loaded → Retirer loading="lazy"
│
├── Probleme de priorite ?
│   └── Ajouter fetchpriority="high"
│
├── Probleme de taille ?
│   ├── Image trop lourde → Compression + format moderne
│   ├── Image oversized → srcset ou resize
│   └── Mauvais format → Convertir en AVIF/WebP
│
└── Probleme serveur ?
    ├── TTFB lent → Optimisation backend
    └── Pas de CDN → Implementer CDN images
```

### Actions par Cause

#### Decouverte Tardive

1. Verifier comment l'image est referencee dans le HTML
2. Si en CSS background-image, preferer un `<link rel="preload">` :
   ```html
   <link rel="preload" as="image" href="hero.jpg" fetchpriority="high">
   ```
3. Si chargee par JavaScript, migrer vers rendu serveur

#### Priorite Reseau

1. Ajouter fetchpriority="high" sur l'element img :
   ```html
   <img src="hero.jpg" fetchpriority="high" alt="...">
   ```
2. Retirer loading="lazy" si present
3. Verifier qu'une seule image a fetchpriority="high"

#### Taille et Format

1. Mesurer la taille actuelle de l'image
2. Determiner les dimensions d'affichage reelles
3. Redimensionner a la taille necessaire (2x pour retina max)
4. Convertir en AVIF avec fallback WebP :
   ```html
   <picture>
     <source srcset="hero.avif" type="image/avif">
     <source srcset="hero.webp" type="image/webp">
     <img src="hero.jpg" fetchpriority="high" alt="...">
   </picture>
   ```
5. Compresser a 75-85% qualite

#### Validation

1. Re-tester avec PageSpeed Insights
2. Verifier que LCP < 2.5s
3. Confirmer que l'image s'affiche correctement
4. Tester le fallback sur navigateurs anciens

---

## Workflow 3 : Migration vers Formats Modernes

### Contexte

Conversion des images JPEG/PNG vers AVIF et WebP pour reduire le poids.

### Phases

#### 3.1 Inventaire et Priorisation

1. Lister toutes les images du site
2. Classer par poids (top 20 = priorite)
3. Identifier les images above-the-fold
4. Exclure les images deja optimisees

#### 3.2 Strategie de Conversion

```
Type d'image → Format cible

Photographies → AVIF (qualite 50-70)
                └── Fallback WebP (qualite 75-85)
                    └── Fallback JPEG original

Graphiques avec texte → WebP lossless
                        └── Fallback PNG original

Logos/Icones simples → SVG si possible
                       └── Sinon WebP lossless

Animations → WebP anime ou AVIF anime
             └── Fallback GIF
```

#### 3.3 Implementation Next.js

Configuration next.config.js :
```javascript
images: {
  formats: ['image/avif', 'image/webp'],
}
```

Le composant Image gere automatiquement les formats.

#### 3.4 Implementation HTML Standard

```html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" width="800" height="600">
</picture>
```

#### 3.5 Validation

1. Tester sur Chrome (AVIF), Firefox (AVIF), Safari (WebP)
2. Verifier que le fallback fonctionne
3. Comparer la qualite visuelle
4. Mesurer la reduction de poids

---

## Workflow 4 : Correction CLS Images

### Contexte

Les images causent du Cumulative Layout Shift (CLS > 0.1).

### Diagnostic

#### 4.1 Identification des Coupables

1. Ouvrir Chrome DevTools > Performance
2. Enregistrer le chargement de la page
3. Rechercher les "Layout Shift" dans la timeline
4. Identifier les elements causant les shifts

Alternativement, utiliser PageSpeed Insights qui liste les elements CLS.

#### 4.2 Causes Courantes

| Cause | Symptome | Solution |
|-------|----------|----------|
| Dimensions manquantes | Image sans width/height | Ajouter attributs |
| CSS override dimensions | Dimensions ignorees | Verifier styles |
| Lazy loading aggressif | Image placeholder puis contenu | Reserver espace |
| Aspect ratio incorrect | Image deformee puis corrigee | aspect-ratio CSS |
| Injection dynamique | Image ajoutee apres render | Prevoir espace |

### Solutions

#### Dimensions HTML

```html
<!-- Avant -->
<img src="photo.jpg" alt="...">

<!-- Apres -->
<img src="photo.jpg" alt="..." width="800" height="600">
```

#### Aspect Ratio CSS

```css
.image-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

#### Placeholder Skeleton

```html
<div class="image-wrapper" style="aspect-ratio: 4/3; background: #e0e0e0;">
  <img src="photo.jpg" alt="..." loading="lazy">
</div>
```

#### Next.js avec Placeholder

```jsx
<Image
  src="/photo.jpg"
  alt="..."
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Validation

1. Re-enregistrer la performance dans DevTools
2. Verifier l'absence de Layout Shifts lies aux images
3. Confirmer CLS < 0.1 dans PageSpeed Insights

---

## Workflow 5 : Implementation Responsive Images

### Contexte

Implementer des images adaptatives pour servir la taille appropriee selon l'appareil.

### Etapes

#### 5.1 Analyse des Besoins

1. Identifier les breakpoints du design
2. Mesurer la taille d'affichage des images a chaque breakpoint
3. Calculer les tailles source necessaires (considerer 2x retina)

Exemple :
| Viewport | Taille Affichee | Source 1x | Source 2x |
|----------|-----------------|-----------|-----------|
| Mobile (375px) | 375px | 400w | 800w |
| Tablette (768px) | 384px | 400w | 800w |
| Desktop (1440px) | 600px | 640w | 1280w |

#### 5.2 Generation des Variantes

Creer les versions necessaires :
- image-400w.jpg
- image-640w.jpg
- image-800w.jpg
- image-1280w.jpg

#### 5.3 Implementation srcset

```html
<img
  src="image-800w.jpg"
  srcset="image-400w.jpg 400w,
          image-640w.jpg 640w,
          image-800w.jpg 800w,
          image-1280w.jpg 1280w"
  sizes="(max-width: 767px) 100vw,
         (max-width: 1199px) 50vw,
         600px"
  alt="Description"
  loading="lazy"
>
```

#### 5.4 Next.js Automatique

Le composant Image gere srcset automatiquement :

```jsx
<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 600px"
/>
```

Configuration deviceSizes dans next.config.js si necessaire.

#### 5.5 Validation

1. Tester sur differents viewports dans DevTools
2. Verifier quelle source est chargee (Network panel)
3. Confirmer que les images ne sont pas oversized

---

## Workflow 6 : Optimisation Alt Text SEO

### Contexte

Ameliorer les attributs alt pour le SEO et l'accessibilite.

### Phases

#### 6.1 Audit Existant

1. Extraire tous les attributs alt du site
2. Classer en categories :
   - Manquants
   - Vides (intentionnels vs erreurs)
   - Generiques ("image", "photo")
   - Keyword stuffing
   - Corrects

#### 6.2 Classification des Images

| Type | Traitement Alt |
|------|----------------|
| Hero/Banner | Descriptif + contexte page |
| Produit | Nom + caracteristique principale |
| Portrait | Nom personne + role |
| Graphique | Resume donnees cles |
| Decoration | alt="" (vide intentionnel) |
| Icone | Fonction ou alt="" si redondant |

#### 6.3 Redaction des Alt

Template par type :

**Produit** :
`[Nom produit] - [Couleur/Taille/Variante] [Caracteristique distinctive]`
Exemple : `Sneakers Nike Air Max 90 blanches, semelle visible`

**Lieu** :
`[Type de lieu] a [Localisation], [Caracteristique principale]`
Exemple : `Villa de luxe avec piscine a debordement, vue sur la baie de Cannes`

**Portrait** :
`[Nom de la personne], [Role ou contexte]`
Exemple : `Marie Dupont, fondatrice de l'entreprise`

**Graphique** :
`[Type de graphique] montrant [donnee principale] : [chiffre cle]`
Exemple : `Graphique en barres montrant la croissance : +45% en 2024`

#### 6.4 Verification Qualite

Checklist par alt :
- [ ] Moins de 125 caracteres
- [ ] Ne commence pas par "Image de..."
- [ ] Contient un mot-cle naturellement (si pertinent)
- [ ] Decrit le contenu visible
- [ ] Apporte du contexte SEO

#### 6.5 Implementation

1. Mettre a jour les attributs alt dans le code/CMS
2. Former l'equipe editoriale sur les bonnes pratiques
3. Configurer des regles de linting si possible

---

## Workflow 7 : Implementation Schema.org ImageObject

### Contexte

Ajouter des donnees structurees ImageObject pour ameliorer la visibilite dans Google Images.

### Cas d'Usage

#### 7.1 Images de Contenu Editorial

Integrer ImageObject dans le schema Article :

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Titre de l'article",
  "image": {
    "@type": "ImageObject",
    "url": "https://example.com/image.jpg",
    "width": 1200,
    "height": 630,
    "caption": "Legende de l'image",
    "creditText": "Photo par Photographe"
  },
  "author": {...},
  "publisher": {...}
}
```

#### 7.2 Images Produit E-commerce

Integrer dans le schema Product :

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Nom du produit",
  "image": [
    {
      "@type": "ImageObject",
      "url": "https://example.com/product-1.jpg",
      "width": 1200,
      "height": 1200
    },
    {
      "@type": "ImageObject",
      "url": "https://example.com/product-2.jpg",
      "width": 1200,
      "height": 1200
    }
  ],
  "offers": {...}
}
```

#### 7.3 Images avec Licence

Pour le badge "Licensable" dans Google Images :

```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://example.com/photo.jpg",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "acquireLicensePage": "https://example.com/license-info",
  "creditText": "Photo par Jean Dupont",
  "creator": {
    "@type": "Person",
    "name": "Jean Dupont"
  },
  "copyrightNotice": "© 2025 Example Company"
}
```

### Validation

1. Tester avec Rich Results Test
2. Verifier l'absence d'erreurs
3. Confirmer l'eligibilite aux rich results
4. Monitorer Google Search Console > Enhancements

---

## Workflow 8 : Configuration Next.js Image

### Contexte

Configurer optimalement le composant Image de Next.js.

### Configuration next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Priorite des formats
    formats: ['image/avif', 'image/webp'],

    // Breakpoints pour images pleine largeur
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Tailles pour images avec sizes prop
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Sources distantes autorisees (Sanity, Cloudinary, etc.)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
      // Ajouter autres sources...
    ],

    // Cache minimum (secondes)
    minimumCacheTTL: 60 * 60 * 24, // 24h
  },
}

module.exports = nextConfig
```

### Usage Composant

#### Image Standard

```jsx
import Image from 'next/image'

<Image
  src="/photo.jpg"
  alt="Description pertinente"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

#### Image LCP (Hero)

```jsx
<Image
  src="/hero.jpg"
  alt="Hero description"
  width={1920}
  height={1080}
  priority // ou preload en v16
  sizes="100vw"
/>
```

#### Image avec Placeholder Blur

```jsx
import heroImage from '@/public/hero.jpg'

<Image
  src={heroImage}
  alt="Hero"
  placeholder="blur"
/>

// Pour remote images
<Image
  src="https://cdn.example.com/image.jpg"
  alt="Remote"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQ..."
/>
```

#### Image Fill (Conteneur Parent)

```jsx
<div className="relative h-64 w-full">
  <Image
    src="/photo.jpg"
    alt="Description"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
```

### Generation blurDataURL

Creer un utilitaire :

```javascript
// lib/blur-data-url.ts
import { getPlaiceholder } from 'plaiceholder'

export async function getBlurDataURL(src: string) {
  const { base64 } = await getPlaiceholder(src)
  return base64
}
```

Utilisation au build time pour les images statiques.

---

## Workflow 9 : Integration CDN Images

### Contexte

Configurer un CDN pour optimisation automatique des images.

### Cloudflare Images

#### Configuration Transformation URL

```
https://example.com/cdn-cgi/image/f=auto,quality=85,width=800/original.jpg
```

Parametres principaux :
- `f=auto` : AVIF > WebP > original
- `quality=1-100` : Qualite compression
- `width` / `height` : Redimensionnement
- `fit=scale-down|contain|cover|crop|pad`

#### Integration Next.js

Loader personnalise :

```javascript
// lib/cloudflare-loader.js
export default function cloudflareLoader({ src, width, quality }) {
  const params = [`width=${width}`, `quality=${quality || 75}`, 'f=auto']
  return `https://example.com/cdn-cgi/image/${params.join(',')}${src}`
}
```

Configuration :

```javascript
// next.config.js
module.exports = {
  images: {
    loader: 'custom',
    loaderFile: './lib/cloudflare-loader.js',
  },
}
```

### Cache Headers

Configuration recommandee pour images statiques :

```
Cache-Control: public, max-age=31536000, immutable
```

Pour images pouvant changer :

```
Cache-Control: public, max-age=86400, stale-while-revalidate=604800
```

---

## Checklist Pre-Deploiement Images

### Performance

- [ ] Image LCP a fetchpriority="high" (ou priority Next.js)
- [ ] Image LCP n'est PAS lazy-loaded
- [ ] Images below-the-fold ont loading="lazy"
- [ ] Formats modernes actives (AVIF, WebP)
- [ ] Compression appliquee (75-85% qualite)
- [ ] Tailles appropriees (pas d'oversizing)
- [ ] srcset implemente pour images responsives

### CLS

- [ ] Toutes images ont width et height
- [ ] Ou aspect-ratio CSS defini
- [ ] Placeholder blur pour images importantes
- [ ] Espace reserve pour images chargees dynamiquement

### SEO / Accessibilite

- [ ] Alt text present sur toutes images de contenu
- [ ] Alt text descriptif et concis (< 125 chars)
- [ ] Images decoratives ont alt=""
- [ ] Schema ImageObject si applicable
- [ ] Noms de fichiers descriptifs

### Validation

- [ ] PageSpeed Insights ≥ 90
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] Pas d'audits "Properly size images"
- [ ] Pas d'audits "Serve next-gen formats"
- [ ] Rich Results Test valide (si schema)
- [ ] Test navigateurs (fallback AVIF)

---

## Metriques de Succes

### KPIs Primaires

| Metrique | Objectif | Mesure |
|----------|----------|--------|
| LCP | < 2.5s | PageSpeed Insights |
| CLS | < 0.1 | PageSpeed Insights |
| Poids images | -30 a -50% | DevTools Network |
| Score Lighthouse | ≥ 90 | Lighthouse |

### KPIs Secondaires

| Metrique | Objectif | Mesure |
|----------|----------|--------|
| Couverture alt | 100% | Audit manuel |
| Format moderne | > 80% | Inventaire |
| Images responsives | > 90% | Audit code |
| Schema valide | 100% | Rich Results Test |