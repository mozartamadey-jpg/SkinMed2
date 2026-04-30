"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const usesCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const isServiceRoute = pathname.startsWith("/services");

    document.body.dataset.surface = isServiceRoute ? "services" : "default";

    const scrollToTarget = (target: Element) => {
      if ((window as any).__lenis) {
        (window as any).__lenis.scrollTo(target as HTMLElement, { offset: -80 });
        return;
      }

      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();
      scrollToTarget(target);
    };

    document.addEventListener("click", handleAnchorClick);

    if (prefersReducedMotion || usesCoarsePointer || isServiceRoute) {
      ScrollTrigger.refresh();
      return () => {
        document.removeEventListener("click", handleAnchorClick);
        delete document.body.dataset.surface;
      };
    }

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.78,
      touchMultiplier: 1,
      syncTouch: false,
      autoRaf: false,
    });

    (window as any).__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.cancelAnimationFrame(rafId);
      (window as any).__lenis = undefined;
      lenis.destroy();
      delete document.body.dataset.surface;
    };
  }, [pathname]);

  return <>{children}</>;
}
