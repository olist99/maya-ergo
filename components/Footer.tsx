import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-lg font-semibold text-[var(--color-ink)]">
            Ergoterapi
          </p>
          <p className="mt-2 max-w-xs text-sm text-[var(--color-ink-soft)]">
            Autoriseret ergoterapeut med fokus på selvstændighed, tryghed og
            en hverdag der fungerer i dit eget hjem.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--color-ink)]">Genveje</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-ink-soft)]">
            <li><Link className="hover:text-[var(--color-sage-dark)]" href="/services">Ydelser</Link></li>
            <li><Link className="hover:text-[var(--color-sage-dark)]" href="/priser">Priser</Link></li>
            <li><Link className="hover:text-[var(--color-sage-dark)]" href="/about">Om mig</Link></li>
            <li><Link className="hover:text-[var(--color-sage-dark)]" href="/contact">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--color-ink)]">Kontaktoplysninger</p>
          <ul className="mt-3 space-y-2.5 text-sm text-[var(--color-ink-soft)]">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-[var(--color-sage-dark)]" aria-hidden="true" />
              <a className="hover:text-[var(--color-sage-dark)]" href="tel:+4512345678">12 34 56 78</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-[var(--color-sage-dark)]" aria-hidden="true" />
              <a className="hover:text-[var(--color-sage-dark)]" href="mailto:kontakt@ergoterapi.dk">kontakt@ergoterapi.dk</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-[var(--color-sage-dark)]" aria-hidden="true" />
              <span>ADRESSE HER</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--color-line)] py-5 text-center text-xs text-[var(--color-ink-soft)]">
        © {new Date().getFullYear()} Ergoterapi · CVR 12345678
      </div>
    </footer>
  );
}
