"use client";

import type { ReactNode } from "react";
import { CAL_LINK, CAL_NAMESPACE } from "@/lib/cal";

type BookingButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

/**
 * Renders as a real <button>, but Cal.com's embed script (booted once via
 * CalProvider) intercepts clicks on elements carrying these data attributes
 * and opens the booking popup — no page navigation required.
 */
export default function BookingButton({ children, className, onClick }: BookingButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-cal-link={CAL_LINK}
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  );
}
