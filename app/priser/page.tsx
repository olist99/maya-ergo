import type { Metadata } from "next";
import { Check } from "lucide-react";
import BookingButton from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "Priser - Klar Hverdag Ergoterapi",
  description: "Priser på konsultationer, hjemmebesøg og forløb hos Ergoterapi.",
};

const plans = [
  {
    title: "Indledende konsultation",
    duration: "60 min",
    price: "950 kr.",
    text: "Din første samtale, hvor vi kortlægger din situation, dine udfordringer og hvad du gerne vil opnå.",
    points: ["Grundig samtale og funktionsvurdering", "Klar plan for det videre forløb", "Skriftligt resumé bagefter"],
  },
  {
    title: "Opfølgende konsultation",
    duration: "45 min",
    price: "650 kr.",
    text: "Løbende sessioner, hvor vi arbejder videre med træning, ergonomi eller hjælpemidler.",
    points: ["Tilpasset dagens behov", "Øvelser til hjemmebrug", "Kan foregå i klinik eller hjemme"],
  },
  {
    title: "Hjemmebesøg",
    duration: "op til 90 min",
    price: "1.200 kr.",
    text: "Et fuldt hjemmebesøg med gennemgang af boligen og konkrete anbefalinger til indretning.",
    points: ["Inkl. transport i Næstved og omegn", "Gennemgang af hele boligen", "Skriftlig rapport efter besøget"],
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-semibold text-[var(--color-ink)]">Priser</h1>
        <p className="mt-4 text-lg text-[var(--color-ink-soft)]">
          Gennemsigtige priser uden overraskelser. Har du et forløb med flere
          gange, laver vi altid en samlet plan, så du ved, hvad det koster,
          før vi går i gang.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map(({ title, duration, price, text, points }) => (
          <article key={title} className="card flex flex-col p-7">
            <p className="text-sm font-medium text-[var(--color-blue-dark)]">{duration}</p>
            <h2 className="mt-1 font-display text-xl font-semibold text-[var(--color-ink)]">{title}</h2>
            <p className="mt-3 font-display text-3xl font-semibold text-[var(--color-ink)]">{price}</p>
            <p className="mt-3 text-sm text-[var(--color-ink-soft)]">{text}</p>
            <ul className="mt-5 space-y-2.5 border-t border-[var(--color-line)] pt-5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-[var(--color-ink)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-sage-dark)]" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="card mt-6 flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-xl font-semibold text-[var(--color-ink)]">Forløbspakke, 5 gange</h2>
          <p className="mt-2 max-w-xl text-sm text-[var(--color-ink-soft)]">
            Fem opfølgende konsultationer betalt samlet: 2.900 kr. i stedet for
            3.250 kr., til dig der ønsker et længere forløb med fast opfølgning.
          </p>
        </div>
        <p className="font-display text-2xl font-semibold text-[var(--color-ink)] sm:shrink-0">2.900 kr.</p>
      </div>

      <div className="tint-panel mt-10 p-6 text-sm text-[var(--color-ink-soft)]">
        Ergoterapi er ikke omfattet af den offentlige sygesikring eller
        Sygeforsikringen Danmark. Enkelte private sundhedsforsikringer giver
        tilskud til ergoterapeutisk behandling. Kontakt dit forsikringsselskab
        for at høre, om din forsikring dækker, før din tid.
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="card p-6">
          <h2 className="font-display text-lg font-semibold text-[var(--color-ink)]">Betaling</h2>
          <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
            Der betales med MobilePay eller bankoverførsel efter hver
            konsultation. Sundhedsydelser er momsfrie, så den pris du ser, er
            den endelige pris. Ved længere forløb kan betalingen deles op
            efter aftale.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="font-display text-lg font-semibold text-[var(--color-ink)]">Afbud</h2>
          <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
            Afbud skal ske senest 24 timer før din tid. Ved sent afbud eller
            udeblivelse opkræves et gebyr på 300 kr., da tiden ikke kan nå at
            blive givet videre til en anden.
          </p>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 text-center">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
          Klar til at komme i gang?
        </h2>
        <p className="max-w-lg text-[var(--color-ink-soft)]">
          Book en indledende konsultation, så finder vi sammen ud af, hvad der
          passer bedst til din situation.
        </p>
        <BookingButton className="btn btn-primary btn-lg">
          Book en konsultation
        </BookingButton>
      </div>
    </div>
  );
}
