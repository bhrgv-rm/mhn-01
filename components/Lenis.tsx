"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

import type { PropsWithChildren } from "react";

export default function SmoothScrollWrapper({
  children,
}: PropsWithChildren<{}>) {
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!lenis.current) {
      lenis.current = new Lenis({
        duration: 1.2,
        // easing: (t) => t * (2 - t),
      });
    }

    function raf(time: number): void {
      if (lenis.current) {
        lenis.current.raf(time);
      }
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Optional cleanup if needed
      lenis.current = null;
    };
  }, []);

  return <>{children}</>;
}
