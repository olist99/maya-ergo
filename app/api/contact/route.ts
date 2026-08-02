import { NextResponse } from "next/server";
import { business } from "@/lib/business";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Ugyldig anmodning." }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  if (
    typeof name !== "string" || name.trim().length < 2 ||
    typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof message !== "string" || message.trim().length < 5
  ) {
    return NextResponse.json({ error: "Udfyld venligst navn, email og besked korrekt." }, { status: 400 });
  }

  const apiKey = re_NagwNomL_LFPse4R9hWbhkS8CBCo1w2uh;
  const toEmail = process.env.CONTACT_TO_EMAIL || business.email;

  if (!apiKey) {
    console.error("RESEND_API_KEY er ikke sat. Beskeden blev ikke sendt:", { name, email, message });
    return NextResponse.json(
      { error: "Formularen er ikke sat op til at sende endnu. Kontakt os venligst telefonisk i mellemtiden." },
      { status: 500 },
    );
  }

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${business.practiceName} <onboarding@resend.dev>`,
      to: [toEmail],
      reply_to: email,
      subject: `Ny besked fra ${name} via kontaktformularen`,
      text: `Navn: ${name}\nEmail: ${email}\n\nBesked:\n${message}`,
    }),
  });

  if (!emailResponse.ok) {
    const errorText = await emailResponse.text().catch(() => "");
    console.error("Resend afviste beskeden:", emailResponse.status, errorText);
    return NextResponse.json({ error: "Beskeden kunne ikke sendes. Prøv igen senere." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
