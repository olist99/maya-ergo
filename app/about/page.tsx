import type { Metadata } from "next";
import Image from "next/image";
import { User } from "lucide-react";

export const metadata: Metadata = {
  title: "Om mig - Klar Hverdag Ergoterapi",
  description: "Autoriseret ergoterapeut med over 12 års erfaring i borgernær ergoterapi.",
};

const credentials = [
  {
    title: "Uddannelse",
    text: "Professionsbachelor i ergoterapi, Professionshøjskolen Absalon, Campus Næstved, 2012.",
  },
  {
    title: "Autorisation",
    text: "Autoriseret af Sundhedsstyrelsen. Autorisations-ID stilles gerne til rådighed ved forespørgsel.",
  },
  {
    title: "Efteruddannelse",
    text: "Diplomuddannelse i ergonomi og arbejdsmiljø samt kurser i neurologisk genoptræning.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-16">
        <div className="mx-auto w-full max-w-[280px] md:mx-0">
          <div className="tint-panel flex aspect-[4/5] w-full items-center justify-center border border-[var(--color-line)]">
            <div className="flex flex-col items-center gap-2 text-[var(--color-ink-soft)]">
              <User className="h-14 w-14" strokeWidth={1.5} aria-hidden="true" />
              <span className="text-xs">Portrætfoto</span>
            </div>
          </div>
          <p className="mt-3 text-center text-sm font-medium text-[var(--color-ink)]">Maya Pedersen</p>
          <p className="text-center text-xs text-[var(--color-ink-soft)]">Autoriseret ergoterapeut</p>
        </div>

        <div>
          <h1 className="font-display text-4xl font-semibold text-[var(--color-ink)]">Om mig</h1>
          <div className="mt-6 space-y-4 text-[var(--color-ink-soft)]">
            <p>
              Jeg hedder Maya Pedersen og er autoriseret ergoterapeut med
              base i Næstved. I over 12 år har jeg arbejdet med borgere i
              alle aldre, fra unge med arbejdsrelaterede skader til ældre,
              der ønsker at blive boende trygt i eget hjem.
            </p>
            <p>
              Efter flere år i kommunalt regi valgte jeg at blive
              selvstændig, fordi jeg ønskede bedre tid til den enkelte. Hos
              mig får du et forløb, der tager udgangspunkt i din hverdag, dine
              vaner og dine egne mål, ikke en standardløsning.
            </p>
            <p>
              Jeg lægger vægt på en ligeværdig dialog, faglig grundighed og
              konkrete løsninger, du kan mærke forskel på i praksis.
            </p>
          </div>

          <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_180px] sm:items-start">
            <dl className="space-y-6 border-t border-[var(--color-line)] pt-6">
              {credentials.map(({ title, text }) => (
                <div key={title}>
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
      </div>
    </div>
  );
}
