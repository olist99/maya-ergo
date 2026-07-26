import type { Metadata } from "next";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import BookingButton from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "Ydelser - Klar Hverdag Ergoterapi",
  description: "Hjemmebesøg, ergonomi, genoptræning og hjælpemidler tilpasset dine behov.",
};

const services = [
  {
    image: "/illustrations/service-home-visit.svg",
    title: "Hjemmebesøg & boligindretning",
    text: "Jeg kommer hjem til dig og vurderer, hvordan boligen understøtter din hverdag, og hvor der er plads til forbedring.",
    points: ["Gennemgang af hele boligen", "Konkrete anbefalinger til indretning", "Skriftlig rapport efter besøget"],
  },
  {
    image: "/illustrations/service-ergonomics.svg",
    title: "Ergonomi & arbejdsmiljø",
    text: "Rådgivning om arbejdsstillinger, hjælpemidler og indretning af arbejdspladsen, så belastningen på kroppen mindskes.",
    points: ["Vurdering af arbejdsplads", "Øvelser mod belastningsskader", "Anbefalinger til arbejdsgiver"],
  },
  {
    image: "/illustrations/service-rehab.svg",
    title: "Genoptræning",
    text: "Individuelt tilrettelagte genoptræningsforløb efter sygdom, operation eller skade, med fokus på dine egne mål.",
    points: ["Funktionsvurdering", "Skræddersyet træningsplan", "Løbende opfølgning"],
  },
  {
    image: "/illustrations/service-aids.svg",
    title: "Hjælpemidler & rådgivning",
    text: "Vejledning i valg og ansøgning om hjælpemidler, der gør konkrete daglige gøremål lettere og mere sikre.",
    points: ["Afprøvning af hjælpemidler", "Hjælp til ansøgning hos kommunen", "Opfølgning på brug"],
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-semibold text-[var(--color-ink)]">Ydelser</h1>
        <p className="mt-4 text-lg text-[var(--color-ink-soft)]">
          Alle forløb starter med en samtale om din situation. Herfra
          sammensætter vi den kombination af ydelser, der giver mest mening
          for dig.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map(({ image, title, text, points }) => (
          <article key={title} className="card flex flex-col overflow-hidden">
            <div className="bg-[var(--color-sand)] p-8">
              <Image src={image} alt="" width={320} height={220} className="mx-auto h-40 w-auto" />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h2 className="font-display text-xl font-semibold text-[var(--color-ink)]">{title}</h2>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{text}</p>
              <ul className="mt-5 space-y-2.5 border-t border-[var(--color-line)] pt-5">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-[var(--color-ink)]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-sage-dark)]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="tint-panel mt-16 flex flex-col items-center gap-4 px-8 py-10 text-center">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
          Er du i tvivl om, hvad du har brug for?
        </h2>
        <p className="max-w-lg text-[var(--color-ink-soft)]">
          Book en konsultation, så finder vi sammen ud af, hvilken hjælp der
          giver bedst mening for lige netop din hverdag.
        </p>
        <BookingButton className="btn btn-primary btn-lg">
          Book en konsultation
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </BookingButton>
      </div>
    </div>
  );
}
