"use client";

import Cal from "@calcom/embed-react";
import { CAL_LINK, CAL_NAMESPACE } from "@/lib/cal";

export default function CalInlineBooking() {
  return (
    <Cal
      namespace={CAL_NAMESPACE}
      calLink={CAL_LINK}
      style={{ width: "100%", height: "100%", minHeight: "700px" }}
      config={{ layout: "month_view", theme: "light" }}
    />
  );
}
