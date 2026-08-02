import type { Metadata } from "next";
import Image from "next/image";
import { Phone, EnvelopeSimple, MapPin, Clock } from "@phosphor-icons/react/dist/ssr";
import ContactForm from "@/components/ContactForm";
import CalInlineBooking from "@/components/CalInlineBooking";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Kontakt - Sikker Havn Ergoterapi",
  description: "Book en konsultation eller send en besked, så vender jeg tilbage hurtigst muligt.",
};

const details = [
  { icon: Phone, label: "Telefon", value: business.phone, href: business.phoneHref },
  { icon: EnvelopeSimple, label: "Email", value: business.email, href: `mailto:${business.email}` },
  { icon: MapPin, label: "Adresse", value: `${business.address}, ${business.postalCode} ${business.city}` },
  { icon: Clock, label: "Åbningstider", value: business.openingHours },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_260px] md:items-center md:gap-16">
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl font-semibold text-[var(--color-ink)]">Kontakt</h1>
              <p className="mt-4 text-lg text-[var(--color-ink-soft)]">
                Book en tid direkte i kalenderen nedenfor, eller send en
                besked, så vender jeg tilbage hurtigst muligt.
              </p>
            </div>
            <Image
              src="/illustrations/contact-illustration.svg"
              alt=""
              width={260}
              height={200}
              className="hidden h-auto w-full md:block"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_320px] md:gap-16">
            <div className="card p-2 sm:p-4">
              <h2 className="px-4 pt-3 font-display text-lg font-semibold text-[var(--color-ink)] sm:px-2">
                Book en tid
              </h2>
            </div>

            <aside className="card p-6">
              <h2 className="font-display text-lg font-semibold text-[var(--color-ink)]">Kontaktoplysninger</h2>
              <ul className="mt-5 space-y-5">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <Icon weight="duotone" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-sage-dark)]" aria-hidden="true" />
                    <div className="text-sm">
                      <p className="font-medium text-[var(--color-ink)]">{label}</p>
                      {href ? (
                        <a className="text-[var(--color-ink-soft)] hover:text-[var(--color-sage-dark)]" href={href}>
                          {value}
                        </a>
                      ) : (
                        <p className="text-[var(--color-ink-soft)]">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="tint-panel mt-6 p-5 text-sm text-[var(--color-ink-soft)]">
                Har du eller dit barn brug for et roligt sted at vente,
                eller andre særlige hensyn? Sig endelig til på forhånd, så
                vi kan indrette besøget bedst muligt.
              </div>

              <div className="mt-6 overflow-hidden rounded-md border border-[var(--color-line)]">
                <iframe
                  title="Kort over klinikkens placering"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(`${business.address}, ${business.postalCode} ${business.city}`)}&output=embed`}
                  className="h-56 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
            Eller send en besked
          </h2>
          <p className="mt-2 max-w-xl text-[var(--color-ink-soft)]">
            Foretrækker du at skrive frem for at booke direkte? Brug
            formularen, så vender jeg tilbage.
          </p>
          <div className="card mt-6 max-w-xl p-7 sm:p-9">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
