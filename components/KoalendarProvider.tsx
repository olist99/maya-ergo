"use client";

import Script from "next/script";

/**
 * Loads the Koalendar embed script once for the whole site so that
 * `window.Koalendar(...)` (used by BookingButton's popup and
 * KoalendarInlineBooking's inline calendar) is available everywhere.
 */
export default function KoalendarProvider() {
  return (
    <>
      <Script id="koalendar-stub" strategy="beforeInteractive">
        {`window.Koalendar=window.Koalendar||function(){(Koalendar.props=Koalendar.props||[]).push(arguments)};`}
      </Script>
      <Script
        id="koalendar-widget"
        src="https://koalendar.com/assets/widget.js"
        strategy="afterInteractive"
        async
      />
    </>
  );
}
