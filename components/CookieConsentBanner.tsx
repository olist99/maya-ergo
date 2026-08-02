"use client";

import Link from "next/link";
import { useCookieConsent } from "@/components/CookieConsentProvider";

export default function CookieConsentBanner() {
  const { consent, setConsent } = useCookieConsent();

  if (consent !== null) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--color-ink-soft)]">
          Denne side bruger cookies fra Koalendar til booking og valgfrit fra Trustpilot til at vise anmeldelser.
          Læs mere i{" "}
          <Link href="/privatlivspolitik" className="font-medium text-[var(--color-sage-dark)] hover:underline">
            privatlivspolitikken
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button type="button" onClick={() => setConsent("declined")} className="btn btn-outline">
            Afvis valgfrie
          </button>
          <button type="button" onClick={() => setConsent("accepted")} className="btn btn-primary">
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
