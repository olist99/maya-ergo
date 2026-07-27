"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";

type CheckoutButtonProps = {
  planId: string;
  className?: string;
};

export default function CheckoutButton({ planId, className }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.url) {
        throw new Error(data?.error || "Betalingen kunne ikke startes.");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Betalingen kunne ikke startes.");
      setLoading(false);
    }
  }

  return (
    <div>
      <button type="button" onClick={handleClick} disabled={loading} className={className}>
        {loading ? "Åbner betaling…" : "Betal online"}
        {!loading && <CreditCard className="h-4 w-4" aria-hidden="true" />}
      </button>
      {error && <p className="mt-2 text-xs text-red-700">{error}</p>}
    </div>
  );
}
