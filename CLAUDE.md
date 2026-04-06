@AGENTS.md

# COSMIC — Project Context

## What This Is

COSMIC is a landing page for an innovative beauty product: a single-use dissolvable makeup mask that transfers pigment directly onto skin in under 2 minutes. The site's goal is to introduce the concept, build hype, and collect waitlist emails.

## Tech Stack

- **Framework:** Next.js 16.2.2 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4 (config lives in `globals.css` via `@theme inline`, NOT in `tailwind.config.js`)
- **Language:** TypeScript
- **Backend:** API route (`/api/waitlist`) stores to local JSON. Convex files ready for upgrade (see below).
- **Animations:** Framer Motion (hero entrance), CSS keyframes (marquee, fade-up, aurora)
- **Utilities:** clsx + tailwind-merge (`lib/utils.ts` → `cn()` helper)
- **Fonts:** Syne (display/headings), Space Grotesk (sub-headers/labels), Inter (body)
- **Deployment target:** Vercel

## File Structure

```
cosmic/
├── app/
│   ├── globals.css                 # Tailwind v4 theme, animations, grain texture
│   ├── layout.tsx                  # Root layout — fonts, metadata
│   ├── page.tsx                    # Main landing page — assembles all sections + marquees
│   ├── ConvexClientProvider.tsx     # Convex provider (not used by default — see Convex section)
│   ├── api/
│   │   └── waitlist/route.ts       # POST endpoint — stores emails to waitlist-emails.json
│   └── components/
│       ├── ui/
│       │   ├── aurora-background.tsx   # Subtle aurora gradient (hero background)
│       │   ├── FadeInSection.tsx        # Scroll-triggered fade-in wrapper
│       │   ├── Marquee.tsx             # Infinite scrolling text band divider
│       │   └── SectionHeading.tsx      # Reusable section heading
│       └── sections/
│           ├── Navbar.tsx          # Fixed navbar, white bg, always-visible text
│           ├── Hero.tsx            # Aurora bg, logo, headline, CTA (uses framer-motion)
│           ├── Problem.tsx         # Pain point stats with editorial typography
│           ├── Solution.tsx        # Split layout — logo + product description
│           ├── HowItWorks.tsx      # 3-step horizontal row layout
│           ├── Features.tsx        # 2-column numbered feature list
│           ├── Visual.tsx          # Product system cards (mask/spray/app) with placeholders
│           ├── Waitlist.tsx        # Email capture form (uses /api/waitlist)
│           ├── FAQ.tsx             # Numbered accordion
│           └── Footer.tsx          # Minimal footer with logo
├── convex/                         # Ready for Convex upgrade (not active by default)
│   ├── schema.ts                   # Waitlist table schema
│   └── waitlist.ts                 # join (mutation) + count (query)
├── lib/
│   └── utils.ts                    # cn() utility (clsx + tailwind-merge)
├── public/
│   └── logo.jpeg                   # COSMIC mascot logo (chibi character, star forehead, cat ears)
├── CLAUDE.md                       # This file
└── AGENTS.md                       # Next.js 16 doc-reading rule
```

## Design System

### Philosophy
Premium minimalist — inspired by Aesop (warm editorial storytelling), Byredo (luxury restraint), Linear (precision UI), The Ordinary (clinical clarity). White-dominant with intentional texture. Not plain — uses grain overlays, marquee dividers, oversized typography, numbered items, and gallery-style labels.

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `background` | `#ffffff` | Page background (dominant) |
| `foreground` | `#0a0a0a` | Text, buttons |
| `muted` | `#6b6b6b` | Body text |
| `muted-light` | `#a3a3a3` | Labels, captions |
| `border` | `#e5e5e5` | Dividers, card borders |
| `surface` | `#f8f8f8` | Alternating section backgrounds |
| `accent` | `#c4a0d4` | Subtle lavender ("cosmic" touch, used sparingly) |

### Typography Hierarchy
| Token | Font | Use |
|-------|------|-----|
| `font-display` | Syne | Brand name, h1, h2. Extra Bold. Chunky, editorial. |
| `font-heading` | Space Grotesk | Section labels, sub-headers, buttons, nav. Medium weight, wide tracking, uppercase. |
| `font-body` | Inter | Body copy, descriptions. |

### Recurring Patterns
- **Section label:** `text-[11px] font-heading font-medium tracking-[0.3em] uppercase text-muted-light mb-8`
- **Numbered items:** `font-heading text-[10px] tracking-[0.2em] text-muted-light` (01, 02...)
- **Grain texture:** `relative grain` class on `bg-surface` sections
- **Marquee dividers:** Between major content blocks for kinetic energy
- **Gallery labels:** `text-[10px] font-heading tracking-[0.3em] uppercase text-muted-light` ("Fig. 01 — ...")

### Button Styles
- **Primary:** `bg-foreground text-white` — solid black, white text (always high contrast)
- **Text link:** `border-b border-muted-light hover:border-foreground` underline style

## Convex (Optional Upgrade)

The `convex/` directory contains schema and mutations ready to go. To activate:

1. Run `npx convex dev` (creates project + `.env.local`)
2. In `layout.tsx`, wrap `{children}` with `<ConvexClientProvider>`
3. In `Waitlist.tsx`, replace the `fetch('/api/waitlist')` with `useMutation(api.waitlist.join)`

Until then, the API route at `/api/waitlist` handles email storage locally.

## Running

```bash
npm run dev       # Start dev server (http://localhost:3000)
npm run build     # Production build
```
