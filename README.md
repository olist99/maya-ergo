# Klar Hverdag Ergoterapi

Marketing website for a self-employed Danish occupational therapist
(ergoterapeut), built with Next.js 15 (App Router), TypeScript, Tailwind
CSS v4, and lucide-react.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Illustrations

Illustrations in `public/illustrations/` are from [unDraw](https://undraw.co)
(MIT licensed, free to use, attribution not required — a small credit link
is included in the footer anyway). The brand green (`#6e8f73`) is baked
directly into each SVG's fill values, so swapping in other unDraw pieces
later means re-running the same color substitution rather than relying on
a CSS variable (SVGs loaded as files don't inherit page-level custom
properties).

## Deploying to Vercel

This is a stock Next.js 15 App Router project, so it deploys to
[Vercel](https://vercel.com) with zero extra config:

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. In Vercel, click **Add New → Project** and import the repo. Vercel
   auto-detects Next.js — no build command changes needed.
3. Before the first deploy, add the environment variable below under
   **Project Settings → Environment Variables** (Production, Preview, and
   Development).
4. Deploy. That's it — static pages, the contact form, and the booking
   widget all run fine on Vercel's default (serverless/edge) setup.

You can also run `npx vercel` from this folder to deploy straight from the
CLI once you're logged in.

## Booking (Cal.com)

"Book en konsultation" buttons across the site open a booking popup
powered by [Cal.com](https://cal.com), and the Contact page also embeds
the calendar inline. To connect it to a real calendar:

1. Create a free account at [cal.com](https://cal.com) and connect it to
   the calendar you actually use (Google Calendar, Outlook, etc.).
2. Create an event type for consultations (e.g. "Konsultation", 30 or 60
   minutes) and note its link — it looks like `your-username/konsultation`.
3. Set that value as `NEXT_PUBLIC_CAL_LINK` in `.env.local` (copy
   `.env.example`) for local development, and in Vercel's environment
   variables for the deployed site.

No further code changes are needed — `lib/cal.ts` reads the env var, and
every booking button (`components/BookingButton.tsx`) and the inline
widget (`components/CalInlineBooking.tsx`) pick it up automatically.

Cal.com's free plan is enough to run this (unlimited bookings and event
types). If GDPR data residency matters — this is a healthcare-adjacent
practice — Cal.com is open-source and can also be self-hosted; see their
docs if that's a requirement.

## Structure

- `app/page.tsx` — homepage (hero + CTA)
- `app/services/page.tsx` — services grid
- `app/about/page.tsx` — bio, credentials, headshot placeholder
- `app/contact/page.tsx` — inline Cal.com booking widget + fallback message form
- `components/Navbar.tsx`, `components/Footer.tsx` — shared layout
- `components/BookingButton.tsx` — button that opens the Cal.com popup from anywhere in the app
- `components/CalProvider.tsx` — boots the Cal.com embed once, mounted in the root layout
- `components/CalInlineBooking.tsx` — the embedded calendar on the Contact page
- `lib/cal.ts` — reads `NEXT_PUBLIC_CAL_LINK` (see Booking section below)
- `components/ContactForm.tsx` — client-side form (currently simulates a
  submit; wire it up to an API route or a service like Resend/Formspree
  before going live)
- `app/globals.css` — design tokens (colors, fonts) via Tailwind `@theme`

## Design notes

- Palette: soft sage green and muted blue on a warm neutral paper
  background, with a deep teal-charcoal ink color for text — chosen to
  meet WCAG AA contrast while feeling calm rather than clinical-cold.
- Type: Newsreader (a quiet, institutional serif) paired with Public Sans
  (body) for a professional, editorial feel rather than a playful
  startup look.
- Deliberately restrained interaction design: rectangular buttons (not
  pill-shaped), no gradients, no glassmorphism/blur, and hover states are
  a small, fixed color shift rather than an opacity fade or scale
  animation — shared button styles live in `app/globals.css` (`.btn`,
  `.btn-primary`, `.btn-outline`, `.btn-on-dark`).
- All interactive elements have visible focus states, and motion respects
  `prefers-reduced-motion`.

## Before going live

- Set `NEXT_PUBLIC_CAL_LINK` to your real Cal.com event link (see Booking section above).
- Replace the placeholder name, phone, email, address, and CVR number.
- Replace the headshot placeholder in `app/about/page.tsx` with a real
  photo.
- Connect `components/ContactForm.tsx` to a real backend (API route,
  email service, or CRM) — it's only for people who prefer messaging over
  booking directly.
