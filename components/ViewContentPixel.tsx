"use client";

import { useEffect } from "react";

export default function ViewContentPixel() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "ViewContent", {
        content_name: "She Runs Italy Trip",
        value: 1599,
        currency: "AUD",
      });
    }
  }, []);

  return null;
}
