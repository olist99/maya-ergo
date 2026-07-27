import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
    text: "I lærer om jeres barns neurodivergens og får konkrete redskaber til at støtte barnet i de problemer, I oplever i hverdagen.",
    points: ["Forståelse for barnets oplevelse", "Konkrete redskaber til hverdagen", "Virtuelt eller i jeres hjem"],
  },
  {
    image: "/illustrations/service-ergonomics.svg",
    title: "Kend din egen neurodivergens",
    text: "Et forløb hvor du lærer din egen autisme eller ADHD at kende, og hvordan den påvirker dine hverdagsaktiviteter.",
    points: ["Personlig indsigt i din neurodivergens", "Redskaber tilpasset dig", "Løbende opfølgning"],
  },
  {
    image: "/illustrations/service-rehab.svg",
    title: "Angst-mestringsforløb",
    text: "Redskaber til at mestre din angst, ud fra evidensbaserede metoder, tilpasset din situation.",
    points: ["Evidensbaserede metoder", "Konkrete mestringsstrategier", "Individuelt tilrettelagt"],
  },
  {
    image: "/illustrations/service-aids.svg",
    title: "Samtaleterapi",
    text: "En tryg ramme til at tale om det, der fylder. Jeg arbejder med psykoedukation og mestring, ikke bare samtale for samtalens skyld.",
    points: ["Tryg og ligeværdig dialog", "Virtuelt eller fysisk", "Til unge og voksne"],
  },
  {
    image: "/illustrations/service-sensory.svg",
    title: "Sanseterapi & sanseforstyrrelser",
    text: "Hjælp til at forstå og regulere sanseforstyrrelser. Jeg er ved at få sanseshold op at stå for forældre og børn, med fokus på aldersvarende udvikling af sansesystemet.",
    points: ["Individuel sansescreening", "Konkrete strategier til regulering", "Sanseshold på vej for forældre og børn"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-semibold text-[var(--color-ink)]">Ydelser</h1>
            <p className="mt-4 text-lg text-[var(--color-ink-soft)]">
              Alle forløb starter med, at vi tager en snak om din situation.
              Herfra finder vi sammen frem til den kombination af ydelser,
              der giver mest mening for dig og din familie.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
            Til dig og din familie
          </h2>

          <div className="mt-8 space-y-6">
            {services.map(({ image, title, text, points }, index) => (
              <article
                key={title}
                className={`card flex flex-col gap-6 p-6 sm:flex-row sm:items-center md:p-7 ${
                  index % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="tint-panel h-36 w-full shrink-0 overflow-hidden p-5 sm:h-32 sm:w-48">
                  <Image src={image} alt="" width={320} height={220} className="h-full w-full object-contain" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">{title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{text}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                    {points.map((point) => (
                      <li key={point} className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-ink)]">
                        <Check className="h-3.5 w-3.5 shrink-0 text-[var(--color-sage-dark)]" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
            Til virksomheder
          </h2>
          <div className="tint-panel mt-8 grid gap-8 p-8 sm:grid-cols-[200px_1fr] sm:items-center md:p-10">
            <Image
              src="/illustrations/service-dysfagi.svg"
              alt=""
              width={320}
              height={220}
              className="mx-auto h-32 w-auto sm:mx-0"
            />
            <div>
              <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">
                Dysfagi-konsulentydelse for virksomheder
              </h3>
              <p className="mt-2 max-w-xl text-sm text-[var(--color-ink-soft)]">
                Jeg tager opgaver som privat konsulent inden for dysfagi
                (synkebesvær), med udredning, træning og undervisning
                baseret på den nyeste evidens, til arbejdspladser på
                Sjælland og Lolland. Det er noget af det, jeg brænder
                allermest for.
              </p>
              <Link href="/contact" className="btn btn-primary mt-5">
                Skriv til mig
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-16 text-center md:px-10 md:py-20">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
            Er du i tvivl om, hvad du har brug for?
          </h2>
          <p className="max-w-lg text-[var(--color-ink-soft)]">
            Book en konsultation, så finder vi sammen ud af, hvilken hjælp
            der giver bedst mening for lige netop din situation.
          </p>
          <BookingButton className="btn btn-primary btn-lg">
            Book en konsultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </BookingButton>
        </div>
      </section>
    </>
  );
}
