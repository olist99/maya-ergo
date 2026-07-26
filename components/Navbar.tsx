"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import BookingButton from "@/components/BookingButton";

const links = [
  { href: "/", label: "Hjem" },
  { href: "/services", label: "Ydelser" },
  { href: "/priser", label: "Priser" },
  { href: "/about", label: "Om mig" },
  { href: "/contact", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-surface)]">
      <nav
        aria-label="Hovednavigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10"
      >
        <Link
          href="/"
          className="font-display text-lg font-semibold text-[var(--color-ink)]"
          onClick={() => setOpen(false)}
        >
          <span className="text-[var(--color-sage-dark)]">Ergoterapi</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={active ? "nav-link nav-link-active" : "nav-link"}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <BookingButton className="btn btn-primary hidden md:inline-flex">
          Book en konsultation
        </BookingButton>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Luk menu" : "Åbn menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--color-ink)] md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-[var(--color-line)] bg-[var(--color-surface)] md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={active ? "mobile-nav-link mobile-nav-link-active" : "mobile-nav-link"}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <BookingButton onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Book en konsultation
              </BookingButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
