import Image from "next/image";
import Link from "next/link";
import { Phone, EnvelopeSimple, MapPin, FacebookLogo, InstagramLogo, Star } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/lib/business";
import TrustpilotWidget from "@/components/TrustpilotWidget";
import { TRUSTPILOT_REVIEW_URL } from "@/lib/trustpilot";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3 md:px-10">
        <div>
          <Image
            src="/brand/logo-wordmark.png"
            alt={business.practiceName}
            width={241}
            height={49}
            className="h-8 w-auto"
          />
          <p className="mt-3 max-w-xs text-sm text-[var(--color-ink-soft)]">
            Ergoterapeutisk hjælp til børn, unge og voksne med neurodivergens,
            sanseforstyrrelser og belastningsreaktioner.
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Sikker Havn Ergoterapi på Facebook"
              className="text-[var(--color-ink-soft)] hover:text-[var(--color-sage-dark)]"
            >
              <FacebookLogo weight="duotone" className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Sikker Havn Ergoterapi på Instagram"
              className="text-[var(--color-ink-soft)] hover:text-[var(--color-sage-dark)]"
            >
              <InstagramLogo weight="duotone" className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--color-ink)]">Genveje</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-ink-soft)]">
            <li><Link className="hover:text-[var(--color-sage-dark)]" href="/services">Ydelser</Link></li>
            <li><Link className="hover:text-[var(--color-sage-dark)]" href="/priser">Priser</Link></li>
            <li><Link className="hover:text-[var(--color-sage-dark)]" href="/about">Om mig</Link></li>
            <li><Link className="hover:text-[var(--color-sage-dark)]" href="/contact">Kontakt</Link></li>
            <li><Link className="hover:text-[var(--color-sage-dark)]" href="/privatlivspolitik">Privatlivspolitik</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--color-ink)]">Kontaktoplysninger</p>
          <ul className="mt-3 space-y-2.5 text-sm text-[var(--color-ink-soft)]">
            <li className="flex items-center gap-2">
              <Phone weight="duotone" className="h-4 w-4 shrink-0 text-[var(--color-sage-dark)]" aria-hidden="true" />
              <a className="hover:text-[var(--color-sage-dark)]" href={business.phoneHref}>{business.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeSimple weight="duotone" className="h-4 w-4 shrink-0 text-[var(--color-sage-dark)]" aria-hidden="true" />
              <a className="hover:text-[var(--color-sage-dark)]" href={`mailto:${business.email}`}>{business.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin weight="duotone" className="h-4 w-4 shrink-0 text-[var(--color-sage-dark)]" aria-hidden="true" />
              <span>{business.address}, {business.postalCode} {business.city}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-line)] px-6 py-8 md:px-10">
        <div className="mx-auto max-w-6xl">
          {TRUSTPILOT_REVIEW_URL && (
            <a
              href={TRUSTPILOT_REVIEW_URL}
              target="_blank"
              rel="noreferrer"
              className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-sage-dark)]"
            >
              <Star weight="fill" className="h-4 w-4 text-[var(--color-sage-dark)]" aria-hidden="true" />
              Se vores anmeldelser på Trustpilot
            </a>
          )}
          <TrustpilotWidget />
        </div>
      </div>

      <div className="border-t border-[var(--color-line)] py-5 text-center text-xs text-[var(--color-ink-soft)]">
        © {new Date().getFullYear()} {business.practiceName} · CVR {business.cvr}
      </div>
    </footer>
  );
}
