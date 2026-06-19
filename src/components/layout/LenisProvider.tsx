"use client";

import { useEffect, useRef } from "react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<import("lenis").default | null>(null);

  useEffect(() => {
    let animationId: number;

    async function init() {
      const Lenis = (await import("lenis")).default;
      lenisRef.current = new Lenis({
        duration: 0.8,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
      });

      function raf(time: number) {
        lenisRef.current?.raf(time);
        animationId = requestAnimationFrame(raf);
      }
      animationId = requestAnimationFrame(raf);
    }

    init();

    return () => {
      cancelAnimationFrame(animationId);
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}
