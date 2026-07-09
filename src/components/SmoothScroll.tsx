"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Animation frame hook
    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // Sync window scroll with Lenis on resize
    const handleResize = () => {
      lenis.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Reset scroll to top on page navigation
  useEffect(() => {
    if (lenisRef.current) {
      // Small timeout to allow the DOM to render/update before scrolling/updating Lenis
      const timer = setTimeout(() => {
        lenisRef.current?.scrollTo(0, { immediate: true });
        lenisRef.current?.resize();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}
