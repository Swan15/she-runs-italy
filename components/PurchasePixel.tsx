"use client";

import { useEffect } from "react";

export default function PurchasePixel() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Purchase", {
        value: 100,
        currency: "AUD",
        content_name: "She Runs Italy Deposit",
      });
    }
  }, []);

  return null;
}
