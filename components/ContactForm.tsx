"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // Placeholder submit behaviour — wire up to an API route or form
    // service (e.g. Resend, Formspree) before going live.
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-lg border border-[var(--color-line)] bg-[var(--color-sage-light)] p-10 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-[var(--color-sage-dark)]" aria-hidden="true" />
        <p className="font-display text-xl font-semibold text-[var(--color-ink)]">Tak for din besked!</p>
        <p className="text-sm text-[var(--color-ink-soft)]">
          Jeg vender tilbage til dig hurtigst muligt — normalt inden for 1-2 hverdage.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
          Navn
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-2.5 text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)]/60 focus:border-[var(--color-sage-dark)]"
          placeholder="Dit fulde navn"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-2.5 text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)]/60 focus:border-[var(--color-sage-dark)]"
          placeholder="dig@eksempel.dk"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
          Besked
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-y rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-2.5 text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)]/60 focus:border-[var(--color-sage-dark)]"
          placeholder="Fortæl kort, hvad du gerne vil have hjælp til…"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="btn btn-primary btn-lg w-full disabled:opacity-70 sm:w-auto"
      >
        {sending ? "Sender…" : "Send besked"}
        {!sending && <Send className="h-4 w-4" aria-hidden="true" />}
      </button>
    </form>
  );
}
