"use client";

import { ReactNode } from "react";

interface BookingButtonProps {
  className?: string;
  children: ReactNode;
}

export default function BookingButton({ className, children }: BookingButtonProps) {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
      className={className}
    >
      {children}
    </button>
  );
}
