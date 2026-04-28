"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GATracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;

    const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");

    // Fire GA pageview
    window.gtag?.("config", "G-CXS01RW5T3", {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}
