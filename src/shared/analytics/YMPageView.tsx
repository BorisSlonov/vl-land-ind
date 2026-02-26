"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

type Props = {
  id: number;
};

export default function YMPageView({ id }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastUrlRef = useRef<string | null>(null);

  useEffect(() => {
    if (!id || typeof window === "undefined") return;

    const qs = searchParams?.toString();
    const url = qs ? `${pathname}?${qs}` : pathname || "/";

    // Skip firing on first mount; Yandex will record the initial view on init.
    if (lastUrlRef.current === null) {
      lastUrlRef.current = url;
      return;
    }

    if (lastUrlRef.current === url) return;

    try {
      // @ts-expect-error ym is injected by Yandex Metrika script
      if (typeof window.ym === "function") {
        // Pass previous URL as referer to keep navigation chain
        // @ts-expect-error ym is injected by Yandex Metrika script
        window.ym(id, "hit", url, { referer: lastUrlRef.current || undefined });
        lastUrlRef.current = url;
      }
    } catch {
      // no-op: avoid breaking navigation on analytics errors
    }
  }, [id, pathname, searchParams]);

  return null;
}
