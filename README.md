# Ergoterapi

Marketing website for a self-employed Danish occupational therapist
(ergoterapeut), built with Next.js 15 (App Router), TypeScript, Tailwind
CSS v4, and lucide-react.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Before going live

- `lib/business.ts` is the single place to edit real business details:
  name, phone, email, address, CVR, autorisationsnummer, and social links.
  Everything else on the site (footer, about page, contact page, privacy
  policy, structured data) reads from this file.
- Set the environment variables described in `.env.example`:
  `NEXT_PUBLIC_CAL_LINK` (your real Cal.com event), `RESEND_API_KEY` and
  `CONTACT_TO_EMAIL` (so the contact form actually sends), and
  `NEXT_PUBLIC_TRUSTPILOT_BUSINESS_ID` (once you have Trustpilot reviews
  to show).
- Replace the headshot placeholder in `app/about/page.tsx` with a real
  photo.
- Update `siteUrl` in `app/layout.tsx`, `app/robots.ts`, and
  `app/sitemap.ts` once the real domain is registered.
- The `RESEND_API_KEY` sender address in `app/api/contact/route.ts` uses
  Resend's shared test address (`onboarding@resend.dev`), which only
  works for sending to your own verified email while testing. Verify your
  real domain in Resend and change the `from` address before launch, or
  emails to other recipients will be rejected.

## Contact form

`components/ContactForm.tsx` posts to `app/api/contact/route.ts`, which
sends the message via [Resend](https://resend.com)'s API. Without
`RESEND_API_KEY` set, the form shows an error asking people to call
instead of silently pretending to succeed.

## Booking (Cal.com)

"Book en konsultation" buttons across the site open a booking popup
powered by [Cal.com](https://cal.com), and the Contact page also embeds
the calendar inline. Create a free account, add an event type, and set
`NEXT_PUBLIC_CAL_LINK` to its link (`your-username/konsultation`).

## Cookies, privacy, and reviews

- A cookie banner ("Accepter" / "Afvis valgfrie") shows on first visit,
  stored in `localStorage`. Cal.com's booking cookies are treated as
  essential and always active; the Trustpilot widget only loads after a
  visitor accepts optional cookies.
- `/privatlivspolitik` documents what's collected through the contact
  form and Cal.com bookings, cookie usage, retention periods, and GDPR
  rights, all pulled from `lib/business.ts`.
- To show real Trustpilot reviews: create a
  [Trustpilot Business](https://business.trustpilot.com) account, verify
  the domain, and set `NEXT_PUBLIC_TRUSTPILOT_BUSINESS_ID`.

## Illustrations

Illustrations in `public/illustrations/` are from
[ManyPixels](https://www.manypixels.co/gallery) (free for personal and
commercial use, no attribution required). The brand colors are baked
directly into each SVG's fill values (`#6fcba0` for the green accent,
`#74b9de` for the blue accent), so swapping in other ManyPixels pieces
later means running the same find-and-replace on `#68e1fd` (their
default accent) and `#ffd200` (their default secondary accent) rather
than relying on a CSS variable, since SVGs loaded as files don't inherit
page-level custom properties.

## SEO basics

`app/robots.ts`, `app/sitemap.ts`, a generated favicon (`app/icon.tsx`,
no external image needed), Open Graph/Twitter metadata, and JSON-LD
structured data (`MedicalBusiness` in the root layout, `FAQPage` on the
homepage) are all in place.

## Structure

- `app/page.tsx` homepage (hero, services teaser, FAQ, CTA)
- `app/services/page.tsx` services grid
- `app/priser/page.tsx` pricing
- `app/about/page.tsx` bio, credentials, headshot placeholder
- `app/contact/page.tsx` inline Cal.com booking widget, map, fallback message form
- `app/privatlivspolitik/page.tsx` GDPR privacy policy
- `app/api/contact/route.ts` sends the contact form via Resend
- `app/robots.ts`, `app/sitemap.ts`, `app/icon.tsx`, `app/not-found.tsx`
- `lib/business.ts` central business details, edit this before launch
- `lib/cal.ts`, `lib/trustpilot.ts` read the relevant env vars
- `components/Navbar.tsx`, `components/Footer.tsx` shared layout
- `components/BookingButton.tsx` opens the Cal.com popup from anywhere
- `components/CalProvider.tsx`, `components/CalInlineBooking.tsx` Cal.com embed
- `components/CookieConsentProvider.tsx`, `components/CookieConsentBanner.tsx`
- `components/TrustpilotWidget.tsx` reviews, gated behind cookie consent
- `components/ContactForm.tsx` posts to the API route above
- `app/globals.css` design tokens (colors, fonts, a single 0.4rem radius
  used everywhere) via Tailwind `@theme`, plus shared `.btn`/`.card`/
  `.tint-panel`/`.field` classes
