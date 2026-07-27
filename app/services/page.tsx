import type { Metadata } from "next";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import BookingButton from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "Ydelser - Sikker Havn Ergoterapi",
  description: "Psykoedukation, mestringsforløb, sanseterapi og samtaleterapi for børn, unge og voksne.",
};

const services = [
  {
    image: "/illustrations/service-home-visit.svg",
    title: "Psykoedukation for forældre",
    text: "I lærer om jeres barns neurodivergens og får konkrete redskaber til at støtte barnet i de problemer, der opleves i hverdagen.",
    points: ["Forståelse for barnets oplevelse", "Konkrete redskaber til hverdagen", "Virtuelt eller i jeres hjem"],
  },
  {
    image: "/illustrations/service-ergonomics.svg",
    title: "Kend din egen neurodivergens",
    text: "Et forløb der hjælper dig med at lære din egen autisme eller ADHD at kende, og hvordan den påvirker dine hverdagsaktiviteter.",
    points: ["Personlig indsigt i din neurodivergens", "Redskaber tilpasset dig", "Løbende opfølgning"],
  },
  {
    image: "/illustrations/service-rehab.svg",
    title: "Angst-mestringsforløb",
    text: "Redskaber til at mestre angst, baseret på evidensbaserede metoder, tilpasset din situation og dine udfordringer.",
    points: ["Evidensbaserede metoder", "Konkrete mestringsstrategier", "Individuelt tilrettelagt"],
  },
  {
    image: "/illustrations/service-aids.svg",
    title: "Samtaleterapi",
    text: "En tryg ramme til at tale om det, der fylder, med udgangspunkt i psykoedukation og mestring frem for kun samtale.",
    points: ["Tryg og ligeværdig dialog", "Virtuelt eller fysisk", "Til unge og voksne"],
  },
  {
    image: "/illustrations/service-sensory.svg",
    title: "Sanseterapi & sanseforstyrrelser",
    text: "Hjælp til at forstå og regulere sanseforstyrrelser. Der etableres løbende sanseshold for forældre og børn med fokus på aldersvarende udvikling af sansesystemet.",
    points: ["Individuel sansescreening", "Konkrete strategier til regulering", "Sanseshold for forældre og børn"],
  },
  {
    image: "/illustrations/service-dysfagi.svg",
    title: "Dysfagi-konsulentydelse for virksomheder",
    text: "Privat konsulentydelse inden for dysfagi (synkebesvær) og undervisning baseret på den nyeste evidens, til arbejdspladser på Sjælland og Lolland.",
    points: ["Udredning og træning", "Undervisning på højeste evidensniveau", "Til arbejdspladser i hele regionen"],
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
          for dig og din familie.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map(({ image, title, text, points }) => (
          <article key={title} className="card flex flex-col overflow-hidden">
            <div className="bg-[var(--color-mint)] p-8">
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
          giver bedst mening for lige netop din situation.
        </p>
        <BookingButton className="btn btn-primary btn-lg">
          Book en konsultation
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </BookingButton>
      </div>
    </div>
  );
}
