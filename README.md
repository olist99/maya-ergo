# Sikker Havn Ergoterapi

Hjemmeside til Sikker Havn. Next.js 15 + Tailwind, deployer direkte til Vercel.

## Sådan kører du den

```bash
npm install
cp .env.example .env.local
npm run dev
```

Gå så bare ind på localhost:3000.

## Ting der skal udfyldes, før den går i luften

Lige nu er en del ting placeholder, så siden ikke går ned:

- `lib/business.ts` har det falske telefonnummer, CVR, adresse osv. Ret det dér, så opdaterer det sig alle steder (footer, privatlivspolitik, det Google-schema-agtige). Ikke noget med at lede efter det i fem forskellige filer, det er kun den ene.
- Der er ikke noget rigtigt billede endnu, så About-siden har en grå boks med et personikon. Skift det ud i `app/about/page.tsx`, når der er et rigtigt portrætfoto.
- Kopiér `.env.example` til `.env.local` og udfyld:
  - Koalendar-linket (`NEXT_PUBLIC_KOALENDAR_URL`), når der er en rigtig booking-side sat op
  - Resend-nøgle, så kontaktformularen faktisk sender en mail nogen steder hen (lige nu viser den bare en fejl, hvis man prøver uden, bedre end at lade som om det virkede)
  - Stripe-nøgle til "betal online"-knapperne
  - Trustpilot-tingene, betyder først noget, når der er rigtige anmeldelser at vise

- Domænet er placeholder overalt (layout, robots.txt, sitemap), `sikkerhavnergoterapi.dk`. Opdater, når det rigtige domæne er registreret.
- Resend's afsenderadresse er deres delte testadresse lige nu (`onboarding@resend.dev`), som kun virker, hvis man sender til sin egen mail. Når domænet er verificeret hos Resend, skal `from` i `app/api/contact/route.ts` ændres, ellers bliver mails til andre bare afvist.

## Integrationerne, kort fortalt

**Booking** går gennem Koalendar, det er bare et embed/popup, ikke noget avanceret. Sæt `NEXT_PUBLIC_KOALENDAR_URL`, så virker det.

**Betaling** er Stripe Checkout, redirect-baseret, så der er ingen kortfelter, vi selv skal bygge eller sikre, det klarer Stripe. Priserne ligger ét sted, `lib/pricing.ts`, og ingen andre steder, så det, der vises på siden, og det, der rent faktisk trækkes, kan ikke komme til at afvige fra hinanden.

**Kontaktformularen** poster til en lille API-route, som sender mailen videre via Resend. Er nøglen ikke sat, fejler den tydeligt i stedet for stille og roligt at lyve for den, der har udfyldt den.

**Trustpilot** er delt op i to ting med vilje: et almindeligt link til anmeldelserne (virker med det samme, ingen cookie-godkendelse nødvendig for et link) og selve widgetten (venter på cookie-samtykke, da det er et tracking-script). De to kan slås til hver for sig.

**Cookies**: der er en banner, Koalendars cookies tæller som nødvendige, siden booking jo er hele pointen med siden, Trustpilots widget venter på samtykke.

## Designting værd at vide

- Farverne er taget direkte fra det rigtige logo (grøn-tonen er samplet fra selve PNG'en), alt sammen i `app/globals.css`.
- Alle rundede hjørner på siden er den samme 0,4rem, med vilje, sat ét sted og genbrugt overalt.
- Ikonerne er Phosphor, ikke det mere gængse Lucide.
- Illustrationerne er fra ManyPixels, farvet om til brandets grønne. Skifter du en ud, er tricket at søge-og-erstatte `#68e1fd` (deres standardaccent) og `#ffd200` (deres sekundære) før filen lægges ind, ellers dukker den op i den forkerte farve.

Det er stort set det. Selve koden burde være læsbar nok til resten.
