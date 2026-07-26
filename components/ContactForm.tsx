"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Beskeden kunne ikke sendes.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Beskeden kunne ikke sendes.");
    } finally {
      setSending(false);
    }
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
          Jeg vender tilbage til dig hurtigst muligt, normalt inden for 1-2 hverdage.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {error && (
        <div role="alert" className="flex items-start gap-2.5 rounded-lg border border-[var(--color-line)] bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}

      <div>
        <label htmlFor="name" className="field-label">
          Navn
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          className="field"
          placeholder="Dit fulde navn"
        />
      </div>

      <div>
        <label htmlFor="email" className="field-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="field"
          placeholder="dig@eksempel.dk"
        />
      </div>

      <div>
        <label htmlFor="message" className="field-label">
          Besked
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={5}
          className="field field-textarea"
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
