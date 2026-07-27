import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import BookingButton from "@/components/BookingButton";
import CheckoutButton from "@/components/CheckoutButton";
import { plans, packagePlan } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Priser - Sikker Havn Ergoterapi",
  description: "Priser på psykoedukation, mestringsforløb og sanseterapi hos Sikker Havn Ergoterapi.",
};

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-semibold text-[var(--color-ink)]">Priser</h1>
            <p className="mt-4 text-lg text-[var(--color-ink-soft)]">
              Gennemsigtige priser, ingen overraskelser. Skal I have et
              forløb med flere gange, laver vi altid en samlet plan
              sammen, så du ved, hvad det koster, før vi går i gang.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map(({ id, title, duration, price, text, points }) => (
              <article key={id} className="card flex flex-col p-7">
                <p className="text-sm font-medium text-[var(--color-sage-dark)]">{duration}</p>
                <h2 className="mt-1 font-display text-xl font-semibold text-[var(--color-ink)]">{title}</h2>
                <p className="mt-3 font-display text-3xl font-semibold text-[var(--color-ink)]">{price}</p>
                <p className="mt-3 text-sm text-[var(--color-ink-soft)]">{text}</p>
                <ul className="mt-5 space-y-2.5 border-t border-[var(--color-line)] pt-5">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-[var(--color-ink)]">
                      <Check weight="bold" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-sage-dark)]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <CheckoutButton planId={id} className="btn btn-outline mt-5 w-full" />
              </article>
            ))}
          </div>

          <div className="card mt-6 flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-xl font-semibold text-[var(--color-ink)]">{packagePlan.title}</h2>
              <p className="mt-2 max-w-xl text-sm text-[var(--color-ink-soft)]">{packagePlan.text}</p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:items-end sm:shrink-0">
              <p className="font-display text-2xl font-semibold text-[var(--color-ink)]">{packagePlan.price}</p>
              <CheckoutButton planId={packagePlan.id} className="btn btn-primary" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="tint-panel grid gap-6 p-7 sm:grid-cols-[120px_1fr_auto] sm:items-center">
            <Image src="/illustrations/service-dysfagi.svg" alt="" width={200} height={140} className="mx-auto h-20 w-auto sm:mx-0" />
            <div>
              <h2 className="font-display text-xl font-semibold text-[var(--color-ink)]">
                Dysfagi-konsulentydelse for virksomheder
              </h2>
              <p className="mt-2 max-w-xl text-sm text-[var(--color-ink-soft)]">
                Udredning, træning og undervisning i dysfagi (synkebesvær)
                til arbejdspladser på Sjælland og Lolland. Det er noget af
                det, jeg elsker allermest at lave. Prisen afhænger af
                opgavens omfang, så skriv til mig for et tilbud.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary sm:shrink-0">
              Skriv til mig
              <ArrowRight weight="bold" className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="tint-panel p-6 text-sm text-[var(--color-ink-soft)]">
            Ergoterapi er ikke omfattet af den offentlige sygesikring eller
            Sygeforsikringen Danmark. Enkelte private sundhedsforsikringer
            giver tilskud til ergoterapeutisk behandling. Kontakt dit
            forsikringsselskab for at høre, om din forsikring dækker, før
            din tid.
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="card p-6">
              <h2 className="font-display text-lg font-semibold text-[var(--color-ink)]">Betaling</h2>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
                Du kan betale online med kort, eller med MobilePay og
                bankoverførsel, når vi ses. Sundhedsydelser er momsfrie, så
                prisen du ser, er den endelige pris. Skal I have et
                længere forløb, kan vi altid finde ud af noget med
                betalingen sammen.
              </p>
            </div>
            <div className="card p-6">
              <h2 className="font-display text-lg font-semibold text-[var(--color-ink)]">Afbud</h2>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
                Sig endelig til senest 24 timer før din tid, hvis du
                bliver nødt til at aflyse. Ved sent afbud eller
                udeblivelse opkræver jeg et gebyr på 300 kr., da jeg
                ellers ikke kan nå at give tiden videre til en anden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-16 text-center md:px-10 md:py-20">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
            Klar til at komme i gang?
          </h2>
          <p className="max-w-lg text-[var(--color-ink-soft)]">
            Book en indledende samtale, så finder vi sammen ud af, hvad der
            passer bedst til din situation.
          </p>
          <BookingButton className="btn btn-primary btn-lg">
            Book en konsultation
          </BookingButton>
        </div>
      </section>
    </>
  );
}
