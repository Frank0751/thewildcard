# The Wild Card Project

A youth-focused nonprofit website built with Next.js 16, TypeScript, Tailwind CSS 3, and shadcn/ui. Inspired by charity:water's design patterns.

## Quick Start

```bash
# 1. Install dependencies
npm install
# or
bun install

# 2. Run the development server
npm run dev
# or
bun run dev

# 3. Open http://localhost:3000
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3 + shadcn/ui components
- **Fonts**: Crimson Pro (serif headlines) + Satoshi (sans body, via Fontshare CDN)
- **Icons**: Lucide React
- **Database**: Prisma ORM with SQLite (dev) / PostgreSQL (production)
- **Deployment**: Vercel

## Brand Colors

- **Primary Teal**: `#006666`
- **Accent Yellow**: `#F8DE22`
- **Background Cream**: `#FAF6EE`
- **Text Charcoal**: `#0F1A1A`

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── programs/page.tsx  # Programs page
│   ├── impact/page.tsx    # Impact page
│   ├── get-involved/      # Donate / Get Involved page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout (fonts, metadata)
│   └── globals.css        # Global styles + Tailwind
├── components/
│   ├── site/              # Custom site components
│   │   ├── header.tsx     # Sticky nav with mega-menu dropdowns
│   │   ├── footer.tsx     # 4-column expanded footer
│   │   ├── promo-bar.tsx  # Dismissible yellow top banner
│   │   ├── site-shell.tsx # Page wrapper (promo + header + footer)
│   │   ├── page-hero.tsx  # Teal hero for sub-pages
│   │   ├── page-cta.tsx   # End-of-page CTA section
│   │   ├── newsletter-signup.tsx
│   │   ├── reveal.tsx     # Scroll-triggered animation
│   │   ├── stat-counter.tsx # Animated number counters
│   │   └── sections/      # Home page sections
│   └── ui/                # shadcn/ui base components (button, input, etc.)
├── hooks/                 # React hooks (use-toast, use-mobile)
└── lib/                   # Utilities (cn, db)

public/
├── logo.png               # Brand logo (teal)
├── logo-white.png         # Brand logo (white, for dark backgrounds)
├── photos/                # All project photos
└── robots.txt

prisma/
└── schema.prisma          # Database schema (User, Post models)
```

## Pages

1. **Home** (`/`) — Hero, Mission, Stats, Three Pillars, Why Youth (interactive tabs), Programs, Impact, CTA, Newsletter
2. **About** (`/about`) — Story, Values (4 cards), Timeline, Stats, CTA, Newsletter
3. **Programs** (`/programs`) — Three Pillars, Upcoming Events, Past Programs, CTA, Newsletter
4. **Impact** (`/impact`) — Stats, Why It Matters, Field Stories, Partners, CTA, Newsletter
5. **Get Involved** (`/get-involved`) — Donation form (Paystack/Flutterwave), Bank Transfer, MoMo, Volunteer/Partner/Attend cards, Take Action carousel, Reassurance, Other Ways accordion, Newsletter
6. **Contact** (`/contact`) — Contact info cards, Working form (composes mailto)

## Deploy to Vercel

### Option A: Via Vercel Dashboard (Easiest)

1. Push this project to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects Next.js — just click **Deploy**
5. Add your environment variables in the Vercel dashboard:
   - `DATABASE_URL` — Use Vercel Postgres or external PostgreSQL URL
   - `PAYSTACK_SECRET_KEY` — When ready to accept live donations
   - `PAYSTACK_PUBLIC_KEY` — When ready to accept live donation

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Deploy to production
vercel --prod
```

### After Deployment

1. Set up a PostgreSQL database (Vercel Postgres, Supabase, Neon, etc.)
2. Update `DATABASE_URL` in Vercel environment variables
3. Run Prisma migration: `npx prisma db push`
4. Add a custom domain in Vercel → Settings → Domains

## Important Notes

- The donation form currently opens a pre-filled email. To accept live payments, integrate Paystack or Flutterwave SDK by replacing the `handleDonate` function in `src/app/get-involved/page.tsx`.
- The contact form also opens a pre-filled email. To collect submissions automatically, integrate a form service (Resend, Formspree, Vercel Forms) or create an API route.
- Bank account details show "To be confirmed" — update these in `src/app/get-involved/page.tsx` with real account info.

## Available Scripts

- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
- `npx prisma studio` — Open Prisma database GUI
- `npx prisma db push` — Push schema to database

## License

© The Wild Card Project. All rights reserved.
