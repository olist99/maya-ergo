"use client";

import type { ReactNode } from "react";
import { KOALENDAR_URL } from "@/lib/koalendar";

type BookingButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function BookingButton({ children, className, onClick }: BookingButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        window.Koalendar?.("open", { url: KOALENDAR_URL });
        onClick?.();
      }}
      className={className}
    >
      {children}
    </button>
  );
}
