import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BookingButton from "@/components/BookingButton";

const teaserServices = [
  {
    image: "/illustrations/service-home-visit.svg",
    title: "Hjemmebesøg & boligindretning",
    text: "Vi ser på boligen med friske øjne og finder løsninger, der gør hverdagen lettere og tryggere.",
  },
  {
    image: "/illustrations/service-ergonomics.svg",
    title: "Ergonomi & arbejdsmiljø",
    text: "Rådgivning om arbejdsstillinger og indretning, så kroppen skånes, hjemme og på jobbet.",
  },
  {
    image: "/illustrations/service-rehab.svg",
    title: "Genoptræning",
    text: "Individuelt tilrettelagte forløb, der genopbygger funktion, styrke og selvstændighed.",
  },
];

const trust = [
  "Autoriseret Ergoterapi",
  "Individuelt tilpassede behandlingsforløb",
  "Evidensbaseret behandling",
];

const faq = [
  {
    question: "Skal jeg have en lægehenvisning?",
    answer: "Nej, du kan booke en tid hos mig direkte uden henvisning fra din læge.",
  },
  {
    question: "Dækker min sundhedsforsikring behandlingen?",
    answer:
      "Mange private sundhedsforsikringer dækker hele eller dele af behandlingen. Kontakt dit forsikringsselskab for at høre, om ergoterapi er omfattet, før din tid.",
  },
  {
    question: "Kommer du ud i hjemmet?",
    answer:
      "Ja, hjemmebesøg er en af mine kerneydelser. Jeg dækker Næstved og det meste af det omkringliggende område.",
  },
  {
    question: "Hvor langt varer et forløb?",
    answer:
      "Det afhænger helt af din situation. Nogle har brug for en enkelt konsultation, andre et længere forløb med løbende opfølgning. Vi lægger altid en plan sammen efter den indledende samtale.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-[var(--color-blue-dark)]">
              Autoriseret ergoterapeut · Næstved
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] text-[var(--color-ink)] sm:text-5xl">
              Styrk din hverdag med skræddersyet ergoterapi
            </h1>
            <p className="mt-6 max-w-md text-lg text-[var(--color-ink-soft)]">
              Jeg hjælper dig med at bevare selvstændigheden derhjemme,
              gennem personlig rådgivning, øvelser og praktiske løsninger
              tilpasset præcis din hverdag og dine mål.
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
              alt="Illustration af en person, der har det godt og trygt derhjemme"
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
            Uanset om det handler om boligen, arbejdspladsen eller vejen
            tilbage efter sygdom eller skade, tager vi udgangspunkt i dine
            konkrete udfordringer og mål.
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
            Klar til en hverdag, der fungerer bedre?
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
