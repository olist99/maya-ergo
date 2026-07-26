/**
 * Cal.com event link, e.g. "mette-lindgaard/konsultation".
 *
 * Set NEXT_PUBLIC_CAL_LINK in your environment (locally in `.env.local`,
 * on Vercel under Project Settings → Environment Variables) once you've
 * created a Cal.com account and an event type for consultations.
 *
 * Falls back to a placeholder so the site still builds and runs before
 * that's configured — booking buttons just won't resolve to a real event
 * until the real value is set.
 */
export const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK ?? "klar-hverdag-ergoterapi/konsultation";

export const CAL_NAMESPACE = "konsultation";
