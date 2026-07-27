import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BookingButton from "@/components/BookingButton";

const teaserServices = [
  {
    image: "/illustrations/service-home-visit.svg",
    title: "Psykoedukation for forældre",
    text: "Lær om dit barns neurodivergens og få konkrete redskaber til at støtte barnet i de udfordringer, I møder i hverdagen.",
  },
  {
    image: "/illustrations/service-ergonomics.svg",
    title: "Kend din egen neurodivergens",
    text: "Et forløb der hjælper dig med at forstå din egen autisme eller ADHD, og hvordan den påvirker dine hverdagsaktiviteter.",
  },
  {
    image: "/illustrations/service-rehab.svg",
    title: "Angst-mestringsforløb",
    text: "Evidensbaserede redskaber til at mestre angst og belastningsreaktioner, tilpasset din situation.",
  },
];

const trust = [
  "Ergoterapeut med egen erfaring med autisme",
  "Evidensbaserede metoder",
  "Forløb virtuelt eller i dit eget hjem",
];

const faq = [
  {
    question: "Skal jeg have en lægehenvisning?",
    answer: "Nej, du kan booke en tid hos mig direkte uden henvisning fra din læge.",
  },
  {
    question: "Er det dækket af den offentlige sygesikring?",
    answer:
      "Nej, ergoterapi er hverken omfattet af den offentlige sygesikring eller Sygeforsikringen Danmark. Enkelte private sundhedsforsikringer giver tilskud, så det er værd at spørge dit forsikringsselskab, inden din tid.",
  },
  {
    question: "Foregår forløbene virtuelt eller i mit hjem?",
    answer:
      "Begge dele er muligt. Mange forløb, særligt psykoedukation og samtaleterapi, fungerer godt virtuelt, og jeg kommer også gerne ud i hjemmet, hvis det giver mere mening for jer.",
  },
  {
    question: "Hvornår kan jeg booke en tid?",
    answer:
      "Fra september kan jeg bookes fredage til sessioner med psykoedukation. Du er velkommen til at booke direkte i kalenderen her på siden, eller skrive en besked, hvis du er i tvivl om, hvad der passer bedst.",
  },
  {
    question: "Er ydelserne kun til børn?",
    answer:
      "Nej, jeg arbejder med børn, unge og voksne. Nogle forløb er rettet mod forældre, der ønsker at forstå og støtte deres barn, andre er til dig, der selv ønsker at forstå din neurodivergens eller få redskaber mod angst.",
  },
  {
    question: "Hvad hvis jeg har brug for hjælp til dysfagi på min arbejdsplads?",
    answer:
      "Jeg tilbyder også konsulentydelser inden for dysfagi (synkebesvær) til arbejdspladser på Sjælland og Lolland, med udredning, træning og undervisning baseret på den nyeste evidens. Skriv til mig for et tilbud.",
  },
  {
    question: "Hvad sker der, hvis jeg bliver nødt til at aflyse?",
    answer:
      "Afbud skal ske senest 24 timer før din tid. Ved sent afbud eller udeblivelse opkræves et gebyr på 300 kr.",
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
              Jeg hjælper børn, unge og voksne med neurodivergens,
              sanseforstyrrelser og belastningsreaktioner, gennem
              psykoedukation, mestringsforløb og samtaleterapi, der giver dig
              redskaber til en hverdag, der fungerer.
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

      <section className="border-y border-[var(--color-line)] bg-[var(--color-surface)]">
        <ul className="mx-auto flex max-w-6xl flex-col divide-y divide-[var(--color-line)] px-6 sm:flex-row sm:divide-x sm:divide-y-0 md:px-10">
          {trust.map((text) => (
            <li key={text} className="flex-1 py-6 text-center text-sm font-medium text-[var(--color-ink)] sm:px-6">
              {text}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-[var(--color-ink)]">
            Hjælp der møder dig, hvor du er
          </h2>
          <p className="mt-4 text-[var(--color-ink-soft)]">
            Uanset om det handler om at forstå dit barns neurodivergens, din
            egen, eller om at få redskaber mod angst og belastning, tager vi
            udgangspunkt i din konkrete situation.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {teaserServices.map(({ image, title, text }) => (
            <div key={title} className="flex flex-col">
              <div className="tint-panel h-48 overflow-hidden p-6">
                <Image
                  src={image}
                  alt=""
                  width={300}
                  height={220}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-[var(--color-ink)]">{title}</h3>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
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
        <div className="mt-10 space-y-6">
          {faq.map(({ question, answer }) => (
            <div key={question} className="card p-6">
              <h3 className="font-display text-lg font-semibold text-[var(--color-ink)]">{question}</h3>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{answer}</p>
            </div>
          ))}
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
