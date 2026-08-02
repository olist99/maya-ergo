"use client";

import { useEffect, useId } from "react";
import { KOALENDAR_URL } from "@/lib/koalendar";

export default function KoalendarInlineBooking() {
  const reactId = useId().replace(/[^a-zA-Z0-9-]/g, "");
  const domId = `koalendar-inline-${reactId}`;

  useEffect(() => {
    window.Koalendar?.("inline", {
      url: KOALENDAR_URL,
      selector: `#${domId}`,
    });
  }, [domId]);

  return <div id={domId} className="koalendar-embed" />;
}
