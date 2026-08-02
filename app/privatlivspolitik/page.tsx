import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privatlivspolitik - Ergoterapi",
  description: "Sådan behandler Ergoterapi dine personoplysninger.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
      <h1 className="font-display text-4xl font-semibold text-[var(--color-ink)]">Privatlivspolitik</h1>
      <p className="mt-4 text-[var(--color-ink-soft)]">
        Sidst opdateret {new Date().toLocaleDateString("da-DK", { year: "numeric", month: "long", day: "numeric" })}.
      </p>

      <div className="mt-10 space-y-10 text-[var(--color-ink-soft)]">
        <section>
          <h2 className="font-display text-xl font-semibold text-[var(--color-ink)]">Dataansvarlig</h2>
          <p className="mt-3">
            {business.practiceName}, CVR {business.cvr}, {business.address}, {business.postalCode} {business.city},
            er dataansvarlig for behandlingen af dine personoplysninger. Har du spørgsmål, kan du kontakte os på{" "}
            <a className="text-[var(--color-sage-dark)] hover:underline" href={`mailto:${business.email}`}>
              {business.email}
            </a>{" "}
            eller {business.phone}.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-[var(--color-ink)]">Hvilke oplysninger indsamler vi</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Når du booker en tid: navn, email og de øvrige oplysninger, du selv angiver i
              bookingprocessen. Booking håndteres af Koalendar, som i denne sammenhæng er databehandler.
            </li>
            <li>
              Når du skriver til os via kontaktformularen: navn, email og indholdet af din besked. Beskeden
              sendes videre via Resend, som i denne sammenhæng er databehandler.
            </li>
            <li>
              Når du betaler online: dine betalingsoplysninger behandles direkte af Stripe, som er
              databehandler for betalingen. Vi ser og opbevarer ikke selv dine kortoplysninger.
            </li>
            <li>
              Hvis du accepterer valgfrie cookies: anonymiserede statistikoplysninger fra Trustpilot.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-[var(--color-ink)]">Formål og retsgrundlag</h2>
          <p className="mt-3">
            Vi behandler oplysningerne for at kunne planlægge og gennemføre konsultationer og
            genoptræningsforløb, besvare henvendelser, samt overholde vores journalpligt som autoriseret
            ergoterapeut. Retsgrundlaget er databeskyttelsesforordningens artikel 6, stk. 1, litra b (opfyldelse
            af aftale) og artikel 9, stk. 2, litra h (sundhedsfaglig behandling), samt bogføringsloven for
            eventuelle fakturaoplysninger.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-[var(--color-ink)]">Cookies</h2>
          <p className="mt-3">Denne hjemmeside anvender:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li><strong>Koalendar</strong>, nødvendig for at bookingkalenderen kan fungere.</li>
            <li><strong>Trustpilot</strong>, valgfri, viser anmeldelser og indlæses kun, hvis du accepterer det i cookiebeskeden.</li>
            <li><strong>Google Fonts</strong>, indlæser skrifttyper fra Google til visning af siden.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-[var(--color-ink)]">Opbevaring</h2>
          <p className="mt-3">
            Journaloplysninger opbevares i overensstemmelse med journalføringsbekendtgørelsen, som
            udgangspunkt i mindst 5 år efter seneste optegnelse. Almindelige kontakthenvendelser, der ikke
            fører til et forløb, sletter vi senest 12 måneder efter modtagelsen.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-[var(--color-ink)]">Dine rettigheder</h2>
          <p className="mt-3">
            Du har efter databeskyttelsesforordningen ret til indsigt i, berigtigelse eller sletning af dine
            personoplysninger, ret til at gøre indsigelse mod behandlingen samt ret til dataportabilitet.
            Henvendelser om dine rettigheder sendes til{" "}
            <a className="text-[var(--color-sage-dark)] hover:underline" href={`mailto:${business.email}`}>
              {business.email}
            </a>
            . Du kan også klage til Datatilsynet, se{" "}
            <a
              className="text-[var(--color-sage-dark)] hover:underline"
              href="https://www.datatilsynet.dk"
              target="_blank"
              rel="noreferrer"
            >
              datatilsynet.dk
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
