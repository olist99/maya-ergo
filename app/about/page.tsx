import type { Metadata } from "next";
import Image from "next/image";
import { User } from "lucide-react";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Om mig - Sikker Havn Ergoterapi",
  description: "Ergoterapeut med egen erfaring med autisme, angst og belastningsreaktioner.",
};

const credentials = [
  {
    title: "Uddannelse",
    text: "Professionsbachelor i ergoterapi.",
  },
  {
    title: "Autorisation",
    text: `Autoriseret af Sundhedsstyrelsen, autorisations-ID ${business.autorisationsId}.`,
  },
  {
    title: "Efteruddannelse",
    text: "Kurser inden for sanseterapi, angst, depression, ADHD og autisme.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-16">
            <div className="mx-auto w-full max-w-[280px] md:mx-0">
              <div className="tint-panel flex aspect-[4/5] w-full items-center justify-center border border-[var(--color-line)]">
                <div className="flex flex-col items-center gap-2 text-[var(--color-ink-soft)]">
                  <User className="h-14 w-14" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-xs">Portrætfoto</span>
                </div>
              </div>
              <p className="mt-3 text-center text-sm font-medium text-[var(--color-ink)]">{business.name}</p>
              <p className="text-center text-xs text-[var(--color-ink-soft)]">Ergoterapeut, 27 år</p>
            </div>

            <div>
              <h1 className="font-display text-4xl font-semibold text-[var(--color-ink)]">Om mig</h1>
              <div className="mt-6 space-y-4 text-[var(--color-ink-soft)]">
                <p>
                  Jeg hedder {business.name}, og jeg er ergoterapeut med en
                  masse gode redskaber i kufferten. Sammen med min assistent{" "}
                  {business.assistantName} hjælper jeg børn, unge og voksne
                  med neurodivergens, sanseforstyrrelser og
                  belastningsreaktioner.
                </p>
                <p>
                  Jeg fokuserer meget på psykoedukation og mestringsforløb,
                  både virtuelt og i dit eget hjem. Mine forløb går blandt
                  andet ud på, at forældre lærer om deres barns
                  neurodivergens og får værktøjer til at støtte barnet i de
                  problemer, der opleves. Derudover har jeg forløb, der
                  hjælper dig med at lære din egen neurodivergens at kende,
                  og forløb der giver dig redskaber til at mestre din angst,
                  ud fra evidensbaserede metoder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
            Min baggrund
          </h2>
          <div className="card mt-6 space-y-4 p-7 text-[var(--color-ink-soft)] md:p-10">
            <p>
              Min baggrund for at starte Sikker Havn er, at jeg selv er
              vokset op som det, man kalder høj-funktionel autistisk. Jeg
              modtog aldrig støtte, for jeg klarede mig jo, men det ledte
              til angst og depression. Jeg havde meget svært ved at være i
              skole, mine sociale evner var mangelfulde, og jeg blev meget
              ensom.
            </p>
            <p>
              Jeg har altid formået at virke hverdagsfunktionel, selv på de
              mest kritiske tidspunkter, så ingen tog mig alvorligt, når jeg
              opsøgte hjælp. Men virkeligheden var, at når jeg lukkede
              døren, kunne jeg ikke få mig selv til at rejse mig fra sofaen.
              Jeg kunne ikke klare de vigtige ting i hjemmet og passede
              knap nok på mig selv ud over lige nok til at fremstå
              anstændig i det offentlige rum. Jeg endte med at blive meget
              syg, men kunne stadig virke ressourcestærk udadtil.
            </p>
            <p>
              Selvom jeg klarede mig igennem skolen, tog det mig tre gange
              så lang tid som alle andre. Jeg lærte intet, mens jeg var der,
              og når jeg kom hjem, var jeg så psykisk drænet, at jeg ikke
              kunne lære noget, uanset hvor hårdt jeg prøvede.
            </p>
            <p>
              Jeg fandt selv min vej på den anden side. Det hjalp meget at
              acceptere min diagnose og lære om, hvordan den påvirker mig i
              mine hverdagsaktiviteter. Herfra opstod en passion for at give
              noget, der mangler i systemet, og for at fange dem, der ryger
              igennem nettet, samt at arbejde forebyggende, så børn med
              neurodivergens vokser op psykisk stærke.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">Kvalifikationer</h2>
          <div className="mt-8 grid gap-10 sm:grid-cols-[1fr_180px] sm:items-start">
            <dl className="space-y-6">
              {credentials.map(({ title, text }) => (
                <div key={title} className="card p-5">
                  <dt className="text-sm font-semibold text-[var(--color-ink)]">{title}</dt>
                  <dd className="mt-1 text-sm text-[var(--color-ink-soft)]">{text}</dd>
                </div>
              ))}
            </dl>
            <Image
              src="/illustrations/about-credentials.svg"
              alt=""
              width={180}
              height={180}
              className="mx-auto hidden h-auto w-full sm:block"
            />
          </div>
        </div>
      </section>
    </>
  );
}
