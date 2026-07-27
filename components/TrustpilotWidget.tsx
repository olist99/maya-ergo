"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { useCookieConsent } from "@/components/CookieConsentProvider";
import { TRUSTPILOT_BUSINESS_ID, TRUSTPILOT_REVIEW_URL, TRUSTPILOT_TEMPLATE_ID } from "@/lib/trustpilot";

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement | null, forceRender?: boolean) => void;
    };
  }
}

export default function TrustpilotWidget() {
  const { consent } = useCookieConsent();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (consent === "accepted" && window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, [consent]);

  if (consent !== "accepted" || !TRUSTPILOT_BUSINESS_ID) {
    return null;
  }

  return (
    <>
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
        onLoad={() => window.Trustpilot?.loadFromElement(ref.current, true)}
      />
      <div
        ref={ref}
        className="trustpilot-widget"
        data-locale="da-DK"
        data-template-id={TRUSTPILOT_TEMPLATE_ID}
        data-businessunit-id={TRUSTPILOT_BUSINESS_ID}
        data-style-height="150px"
        data-style-width="100%"
        data-theme="light"
      >
        {TRUSTPILOT_REVIEW_URL && (
          <a href={TRUSTPILOT_REVIEW_URL} target="_blank" rel="noopener noreferrer">
            Trustpilot
          </a>
        )}
      </div>
    </>
  );
}
