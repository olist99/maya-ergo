import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BookingButton from "@/components/BookingButton";
import FaqAccordion from "@/components/FaqAccordion";

const teaserServices = [
  {
    image: "/illustrations/service-home-visit.svg",
    title: "Psykoedukation for forældre",
    text: "I lærer om jeres barns neurodivergens og får konkrete redskaber til at støtte barnet i de problemer, I oplever i hverdagen. Vi finder ud af, hvad der faktisk virker for jer, ikke en generel opskrift.",
  },
  {
    image: "/illustrations/service-ergonomics.svg",
    title: "Kend din egen neurodivergens",
    text: "Et forløb hvor du lærer din egen autisme eller ADHD at kende, og hvordan den påvirker dine hverdagsaktiviteter. Jeg ved af egen erfaring, hvor stor en forskel den forståelse gør.",
  },
  {
    image: "/illustrations/service-rehab.svg",
    title: "Angst-mestringsforløb",
    text: "Redskaber til at mestre din angst, ud fra evidensbaserede metoder. Ikke bare copingstrategier fra en bog, men noget der er tilpasset dig og din hverdag.",
  },
];

const trust = [
  "Egen erfaring med autisme",
  "Evidensbaserede metoder",
  "Virtuelt eller hjemme hos dig",
];

const faq = [
  {
    question: "Skal jeg have en lægehenvisning?",
    answer: "Nej, du kan booke en tid hos mig direkte, uden henvisning fra din læge.",
  },
  {
    question: "Er det dækket af den offentlige sygesikring?",
    answer:
      "Nej, ergoterapi er hverken omfattet af den offentlige sygesikring eller Sygeforsikringen Danmark. Enkelte private sundhedsforsikringer giver tilskud, så spørg endelig dit forsikringsselskab, inden du booker.",
  },
  {
    question: "Foregår forløbene virtuelt eller hjemme hos mig?",
    answer:
      "Begge dele. Psykoedukation og samtaleterapi fungerer ofte fint virtuelt, og jeg kommer også gerne ud i hjemmet, hvis det giver mere mening for jer.",
  },
  {
    question: "Hvornår kan jeg booke en tid?",
    answer:
      "Fra september kan jeg bookes fredage til psykoedukation. Book gerne direkte i kalenderen her på siden, eller skriv til mig, hvis du er i tvivl om, hvad der passer bedst, jeg svarer så hurtigt jeg kan.",
  },
  {
    question: "Er det kun til børn?",
    answer:
      "Nej. Jeg arbejder med børn, unge og voksne. Nogle kommer som forældre, der vil forstå og støtte deres barn bedre, andre kommer for at lære deres egen neurodivergens at kende, eller for at få redskaber mod angst.",
  },
  {
    question: "I har vist noget med dysfagi på arbejdspladser?",
    answer:
      "Ja, jeg tager også opgaver som privat konsulent inden for dysfagi (synkebesvær) til arbejdspladser på Sjælland og Lolland, med udredning, træning og undervisning. Det er noget af det, jeg brænder allermest for, skriv endelig til mig.",
  },
  {
    question: "Hvad hvis jeg bliver nødt til at aflyse?",
    answer:
      "Så sig endelig til senest 24 timer før din tid. Ved sent afbud eller udeblivelse opkræver jeg et gebyr på 300 kr.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-[var(--color-sage-dark)]">
              Ergoterapeut · Autisme & sanseforstyrrelser · Næstved
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] text-[var(--color-ink)] sm:text-5xl">
              En sikker havn for dig og din familie
            </h1>
            <p className="mt-6 max-w-md text-lg text-[var(--color-ink-soft)]">
              Jeg er ergoterapeut med en masse gode redskaber i kufferten.
              Sammen med min assistent Selina hjælper jeg børn, unge og
              voksne med neurodivergens, sanseforstyrrelser og
              belastningsreaktioner, med fokus på psykoedukation og mestring,
              virtuelt eller i dit eget hjem.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <BookingButton className="btn btn-primary btn-lg">
                Book en konsultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </BookingButton>
              <Link href="/services" className="btn btn-outline btn-lg">
                Se ydelser
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-ink-soft)]">
              {trust.map((text) => (
                <li key={text} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-sage-dark)]" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-md">
            <Image
              src="/illustrations/hero-at-home.svg"
              alt="Illustration af en person, der har det godt og trygt"
              width={400}
              height={400}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-[var(--color-ink)]">
            Hjælp der møder dig, hvor du er
          </h2>
          <p className="mt-4 text-[var(--color-ink-soft)]">
            Uanset om det handler om at forstå dit barns neurodivergens, din
            egen, eller om at få redskaber mod angst, tager jeg altid
            udgangspunkt i lige præcis din situation.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {teaserServices.map(({ image, title, text }, index) => (
            <div
              key={title}
              className={`grid items-center gap-8 md:grid-cols-[280px_1fr] md:gap-14 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="tint-panel h-48 overflow-hidden p-6 md:h-56">
                <Image
                  src={image}
                  alt=""
                  width={300}
                  height={220}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">{title}</h3>
                <p className="mt-3 max-w-xl text-[var(--color-ink-soft)]">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-sage-dark)] hover:underline"
          >
            Se alle ydelser
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 md:px-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map(({ question, answer }) => ({
                "@type": "Question",
                name: question,
                acceptedAnswer: { "@type": "Answer", text: answer },
              })),
            }),
          }}
        />
        <h2 className="text-center font-display text-3xl font-semibold text-[var(--color-ink)]">
          Ofte stillede spørgsmål
        </h2>
        <div className="mt-10">
          <FaqAccordion items={faq} />
        </div>
      </section>

      <section className="bg-[var(--color-sage-dark)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center md:px-10">
          <h2 className="font-display text-3xl font-semibold text-white">
            Klar til at finde din sikre havn?
          </h2>
          <p className="max-w-xl text-[var(--color-sage-light)]">
            Book en uforpligtende konsultation, så tager vi en snak om, hvor
            du er, og hvordan jeg bedst kan hjælpe.
          </p>
          <BookingButton className="btn btn-on-dark btn-lg">
            Book en konsultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </BookingButton>
        </div>
      </section>
    </>
  );
}
