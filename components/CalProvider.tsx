"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { CAL_NAMESPACE } from "@/lib/cal";

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
