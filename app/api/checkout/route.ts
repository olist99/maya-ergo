import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { allPlans } from "@/lib/pricing";
import { business } from "@/lib/business";

export async function POST(request: Request) {
  const stripe = getStripe();

  if (!stripe) {
    return NextResponse.json(
      { error: "Onlinebetaling er ikke sat op endnu. Kontakt os venligst for at booke og betale." },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => null);
  const planId = body && typeof body === "object" ? (body as Record<string, unknown>).planId : null;
  const plan = typeof planId === "string" ? allPlans.find((p) => p.id === planId) : undefined;

  if (!plan) {
    return NextResponse.json({ error: "Ukendt ydelse." }, { status: 400 });
  }

  const origin = request.headers.get("origin") ?? new URL(request.url).origin;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "dkk",
          product_data: { name: `${plan.title} - ${business.practiceName}` },
          unit_amount: plan.amount,
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/priser/betaling-gennemfoert?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/priser`,
  });

  if (!session.url) {
    return NextResponse.json({ error: "Betalingen kunne ikke startes." }, { status: 502 });
  }

  return NextResponse.json({ url: session.url });
}
