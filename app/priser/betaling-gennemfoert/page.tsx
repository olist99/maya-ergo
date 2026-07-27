import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { getStripe } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Betaling gennemført - Ergoterapi",
  description: "Bekræftelse på din betaling.",
};

type Props = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function PaymentSuccessPage({ searchParams }: Props) {
  const { session_id: sessionId } = await searchParams;
  const stripe = getStripe();

  let summary: { productName: string; amount: string } | null = null;

  if (stripe && sessionId) {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["line_items"],
      });
      const item = session.line_items?.data?.[0];
      const amount = session.amount_total;
      if (item?.description && amount) {
        summary = {
          productName: item.description,
          amount: `${(amount / 100).toLocaleString("da-DK")} kr.`,
        };
      }
    } catch {
      summary = null;
    }
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center md:px-10">
      <CheckCircle2 className="h-14 w-14 text-[var(--color-sage-dark)]" aria-hidden="true" />
      <h1 className="mt-6 font-display text-3xl font-semibold text-[var(--color-ink)]">
        Tak for din betaling
      </h1>
      {summary ? (
        <p className="mt-4 text-[var(--color-ink-soft)]">
          Vi har modtaget din betaling på {summary.amount} for {summary.productName}. Du modtager en kvittering på email.
        </p>
      ) : (
        <p className="mt-4 text-[var(--color-ink-soft)]">
          Vi har modtaget din betaling. Du modtager en kvittering på email.
        </p>
      )}
      <p className="mt-4 text-[var(--color-ink-soft)]">
        Har du ikke allerede booket en tid, så gør det gerne nu, så vi kan få lagt en plan sammen.
      </p>
      <Link href="/contact" className="btn btn-primary btn-lg mt-8">
        Book en tid
      </Link>
    </div>
  );
}
