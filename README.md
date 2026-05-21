# Astha Health Care — Clinic Website

Production-ready React + Vite multi-page clinic site. Design tokens are extracted from the original homepage only (no new brand colors or icon packs).

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

```bash
npm run build    # production build → dist/
npm run preview  # preview production build
npm run lint
```

## Tech stack

- React 19 + Vite 8
- React Router DOM (lazy routes, nested layout)
- Tailwind CSS v4 + `tailwind.config.js` + CSS variables
- Zustand (UI, theme prefs, modal, navigation)
- Framer Motion (section animations)
- Icons: **local SVGs only** (`stethoscope`, `shieldCheck`, `heartPulse`, `calendar`)

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/insurance` | Insurance & fees |
| `/hours` | Opening hours |
| `/contact` | Contact |
| `/testimonials` | Testimonials |
| `/faq` | FAQ |
| `/gallery` | Gallery |

## Project structure

```
src/
├── assets/images/     # logo, doctor, clinic photos (local)
├── assets/icons/      # homepage SVG icons only
├── components/        # UI + section components
├── layouts/           # TopBar, Navbar, Footer, AppLayout
├── pages/             # Route pages
├── routes/            # AppRouter, ProtectedRoute
├── store/             # Zustand stores
├── theme/theme.ts     # Design tokens (source of truth)
├── data/              # Content modules
├── constants/         # Clinic info, route paths
├── animations/        # Framer Motion presets
├── styles/            # Utility component classes
└── hooks/, services/, utils/
```

## Theme (homepage-derived)

**Colors:** `astha-950` `#0a2238`, `astha-900` `#0c2847`, `astha-800` `#153c72`, `astha-700` `#1a4a85`, `astha-100` `#e9f1fb`, `astha-200` `#d4e0f0`, plus `white`, `blue-50/100`, `slate-700/800/900`, `red-600` (footer).

**Fonts:** Inter (body), Poppins (headings).

**Gradients:** hero overlay, services `astha-100→white`, image overlay, CTA `astha-900→astha-800`.

**Components:** `.btn-primary`, `.card`, `.card-glass`, `.container-app` — see `src/styles/utilities.css`.

## Environment

Optional API base URL:

```
VITE_API_URL=https://your-api.example
```

## Assets

- Video hero: `public/banner.mp4`
- Images bundled from `src/assets/images/`
- No external image URLs in production pages
