"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[var(--color-line)] border-t border-b border-[var(--color-line)]">
      {items.map(({ question, answer }, index) => {
        const open = openIndex === index;
        return (
          <div key={question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-lg font-semibold text-[var(--color-ink)]">{question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[var(--color-sage-dark)] transition-transform ${open ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {open && <p className="pb-5 text-sm text-[var(--color-ink-soft)]">{answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
