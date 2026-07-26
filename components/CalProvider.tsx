"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { CAL_NAMESPACE } from "@/lib/cal";

/**
 * Mounted once in the root layout. After this runs, any element anywhere
 * in the app with `data-cal-link` + `data-cal-namespace="konsultation"`
 * attributes automatically opens a booking popup on click — no routing
 * or extra wiring needed per button.
 */
export default function CalProvider() {
  useEffect(() => {
    (async function initCal() {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#3d5b43" },
          dark: { "cal-brand": "#3d5b43" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return null;
}
