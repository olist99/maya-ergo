"use client";

import Cal from "@calcom/embed-react";
import { CAL_LINK, CAL_NAMESPACE } from "@/lib/cal";

export default function CalInlineBooking() {
  return (
    <Cal
      namespace={CAL_NAMESPACE}
      calLink={CAL_LINK}
      className="cal-embed"
      config={{ layout: "month_view", theme: "light" }}
    />
  );
}
