# Ergoterapi

Marketing website for a self-employed Danish occupational therapist
(ergoterapeut), built with Next.js 15 (App Router), TypeScript, Tailwind
CSS v4, and lucide-react.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.


## Structure

- `app/page.tsx` homepage (hero + CTA)
- `app/services/page.tsx` services grid
- `app/about/page.tsx` bio, credentials, headshot placeholder
- `app/contact/page.tsx` inline Cal.com booking widget + fallback message form
- `components/Navbar.tsx`, `components/Footer.tsx` shared layout
- `components/BookingButton.tsx` button that opens the Cal.com popup from anywhere in the app
- `components/CalProvider.tsx` boots the Cal.com embed once, mounted in the root layout
- `components/CalInlineBooking.tsx` the embedded calendar on the Contact page
- `lib/cal.ts` reads `NEXT_PUBLIC_CAL_LINK` (see Booking section below)
- `components/ContactForm.tsx` client-side form (currently simulates a
  submit; wire it up to an API route or a service like Resend/Formspree
  before going live)
- `app/globals.css` design tokens (colors, fonts) via Tailwind `@theme`
