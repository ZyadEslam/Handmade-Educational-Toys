# 🧸 HM Toys — Handmade Educational Toys

A bilingual (EN/AR, LTR/RTL) landing page for **HM Toys's** handmade educational games for children.
Image-first, animation-rich, kid-colourful on the surface and parent-serious where it counts.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · GSAP + `@gsap/react` · Zod · Vitest + Testing Library

---

## ✨ Highlights

| Area | What was done |
| --- | --- |
| **Design** | No gradients, no boring AI layout. Hand-drawn identity: ink borders, "pop" offset shadows, doodle stars, a custom sun-logo, washi tape, squiggly underlines. White primary canvas mixed with sun-yellow, coral, mint & lilac sections. |
| **Image-first** | Real product photography everywhere (busy board, rainbow stacker, ABC puzzle, abacus, quiet book, lacing set), cropped + sized to WebP, tiny blur placeholders, `next/image` with AVIF/WebP and immutable caching. |
| **Animations** | GSAP ScrollTrigger reveals, idle floats, scrub parallax, spinning gears, tilting spotlight board, sticky-header reactions, hover micro-interactions — all disabled for `prefers-reduced-motion`. |
| **Bilingual** | Full EN + AR dictionaries (typed, shape-checked by tests), RTL layout, Arabic font (Cairo) + display fonts (Baloo/Nunito/Caveat), language toggle preserving scroll position, accept-language redirect. |
| **Commerce-lite** | Cart with localStorage persistence + slide-over drawer; orders are completed over WhatsApp (no payment backend needed) — perfect for an artisan shop. Custom-order form: zod validation + XSS sanitization → WhatsApp. |
| **SEO** | Per-locale metadata + canonical + `hreflang` alternates, OpenGraph/Twitter cards, auto-generated `og.png`, JSON-LD (Store + WebSite + ItemList with product prices in EGP), `sitemap.xml`, `robots.txt`. |
| **Quality** | Feature-based architecture, 30+ tests (cart, validators, sanitization, i18n, FAQ a11y, forms), ESLint, `tsc --noEmit`, CI-ready `npm run check`. |

---

## 🚀 Getting started

```bash
npm install
npm run dev        # http://localhost:3000  → /en or /ar
npm run check      # lint + typecheck + tests (25 unit/component tests)
npm run build      # production build (both locales SSG)

# Visual QA (optional, needs a running server on :3000)
node scripts/screenshot.mjs          # section-by-section screenshots
node scripts/e2e-interactions.mjs    # cart → drawer → WhatsApp → AR toggle e2e
node scripts/mobile-check.mjs        # mobile viewport checks
```

## 📁 Project structure (feature-based)

```
src/
├── app/
│   ├── [locale]/           # layout.tsx (fonts, metadata, providers), page.tsx (section assembly)
│   ├── sitemap.ts          # robots.ts · middleware.ts (accept-language redirect)
├── components/
│   ├── layout/             # Header, Footer, LangToggle
│   └── ui/                 # Logo/SunMark, Button, doodles (Sparkle, Smiley, Wave, HandmadeSticker)
├── data/products.ts        # typed product catalogue (bilingual, EGP prices)
├── features/
│   ├── cart/               # cart-context (zustand-free React context + localStorage), CartDrawer
│   ├── home/               # Hero, Marquee, Spotlight, WhyHandmade, Gallery, Steps,
│   │                       # Testimonials, Story, CustomCta, Faq, FinalCta, SectionHeading
│   ├── motion/             # MotionProvider — declarative data-attribute GSAP system
│   ├── products/           # ProductCard, AddToBagButton, ProductGrid
│   └── seo/                # JsonLd, WhatsAppFab
├── i18n/                   # config, get-dictionary, dictionaries/en.ts (source of truth), ar.ts
├── lib/                    # cx, gsap, constants (SITE), sanitize, validators, images.generated.ts
└── __tests__/              # Vitest + Testing Library suites
scripts/prepare-images.mjs  # sharp pipeline: crop → WebP → blur placeholders → og.png → typed metadata
```

## 🎨 Brand toolkit

- **Palette:** coral `#FF6B5C` · sun `#FFC94D` · sky `#5BC6F5` · teal `#2EC4B6` · grape `#8B7CF6` · pink `#FF92B6` · ink `#2B2440` · cream `#FFF7EC`
- **Fonts:** Baloo 2 (display) · Nunito (body) · Cairo (Arabic) · Caveat (handwritten quotes)
- **Logo:** the smiling "Sun Mark" (inline SVG, no gradients) — the brand belongs to **HM Toys**

## 📸 Product photography

Place source photos in one level above the project (e.g. `../image-search/`) and run:

```bash
npm run images
```

This regenerates `public/images/*.webp`, `public/og.png`, and `src/lib/images.generated.ts`.

## 🔧 Before going live

1. Set your real WhatsApp number + email + Instagram in `src/lib/constants.ts`.
2. Set `NEXT_PUBLIC_SITE_URL=https://yoursite.com` (used by metadata, sitemap, JSON-LD).
3. Replace the demo product photos/names with Mariem's real catalogue.
