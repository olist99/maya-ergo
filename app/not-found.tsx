import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center md:px-10">
      <p className="text-sm font-medium uppercase tracking-wide text-[var(--color-sage-dark)]">Fejl 404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-[var(--color-ink)]">
        Siden kunne ikke findes
      </h1>
      <p className="mt-4 text-[var(--color-ink-soft)]">
        Siden, du leder efter, findes ikke, eller er blevet flyttet. Prøv forsiden, eller find det, du søger, via menuen.
      </p>
      <Link href="/" className="btn btn-primary btn-lg mt-8">
        Til forsiden
      </Link>
    </div>
  );
}
