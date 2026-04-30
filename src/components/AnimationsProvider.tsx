"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function splitIntoWords(el: HTMLElement) {
  if (el.querySelector(".split-word")) {
    return Array.from(el.querySelectorAll(".split-word"));
  }

  const text = el.textContent || "";
  const words = text.split(/\s+/).filter(Boolean);
  el.innerHTML = words
    .map((word) => `<span class="split-word" style="display:inline-block;will-change:transform,opacity">${word}</span>`)
    .join(" ");

  return Array.from(el.querySelectorAll(".split-word"));
}

export default function AnimationsProvider() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const isServiceRoute = pathname.startsWith("/services");
    const isRichRoute = pathname === "/" || pathname === "/about";

    gsap.registerPlugin(ScrollTrigger);

    const cleanupFns: Array<() => void> = [];

    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      const defaults = {
        ease: "power2.out",
        force3D: true,
        overwrite: "auto" as const,
      };
      const triggerDefaults = {
        start: "top 92%",
        once: true,
        fastScrollEnd: true,
      };
      const revealDistance = isRichRoute ? 54 : 30;
      const revealDuration = isRichRoute ? 0.85 : 0.5;
      const staggerDistance = isRichRoute ? 34 : 20;
      const staggerDuration = isRichRoute ? 0.7 : 0.4;
      const staggerAmount = isRichRoute ? 0.08 : 0.06;

      gsap.utils.toArray(".reveal-up").forEach((el: any) => {
        gsap.set(el, { y: revealDistance, opacity: 0 });
        gsap.to(el, {
          scrollTrigger: { trigger: el, ...triggerDefaults },
          y: 0,
          opacity: 1,
          duration: revealDuration,
          onComplete() {
            gsap.set(el, { clearProps: "willChange" });
          },
          ...defaults,
        });
      });

      gsap.utils.toArray(".reveal-scale").forEach((el: any) => {
        gsap.set(el, { scale: isRichRoute ? 0.94 : 0.97, y: isRichRoute ? 18 : 0, opacity: 0 });
        gsap.to(el, {
          scrollTrigger: { trigger: el, ...triggerDefaults },
          scale: 1,
          y: 0,
          opacity: 1,
          duration: isRichRoute ? 0.85 : 0.5,
          ease: "power3.out",
          force3D: true,
          onComplete() {
            gsap.set(el, { clearProps: "willChange" });
          },
        });
      });

      gsap.utils.toArray(".stagger-container").forEach((container: any) => {
        const items = container.querySelectorAll(".stagger-item");
        if (!items.length) return;

        gsap.set(items, { y: staggerDistance, opacity: 0 });
        gsap.to(items, {
          scrollTrigger: { trigger: container, ...triggerDefaults },
          y: 0,
          opacity: 1,
          duration: staggerDuration,
          stagger: staggerAmount,
          onComplete() {
            gsap.set(items, { clearProps: "willChange" });
          },
          ...defaults,
        });
      });

      gsap.utils.toArray(".anim-whip").forEach((el: any) => {
        gsap.set(el, { x: isRichRoute ? -150 : -120, opacity: 0 });
        gsap.to(el, {
          scrollTrigger: { trigger: el, ...triggerDefaults },
          x: 0,
          opacity: 1,
          duration: isRichRoute ? 0.9 : 0.5,
          ease: isRichRoute ? "expo.out" : "power3.out",
          force3D: true,
          onComplete() {
            gsap.set(el, { clearProps: "willChange" });
          },
        });
      });

      if (isRichRoute) {
        gsap.utils.toArray(".anim-words").forEach((el: any) => {
          const words = splitIntoWords(el);
          if (!words.length) return;

          gsap.set(el, { opacity: 1, perspective: 900 });
          gsap.set(words, { opacity: 0, y: 24, rotationX: -18 });
          gsap.to(words, {
            scrollTrigger: { trigger: el, ...triggerDefaults },
            opacity: 1,
            y: 0,
            rotationX: 0,
            stagger: 0.035,
            duration: 0.62,
            transformOrigin: "50% 100%",
            onComplete() {
              gsap.set(words, { clearProps: "willChange,transform" });
            },
            ...defaults,
          });
        });

        gsap.utils.toArray(".anim-clip").forEach((el: any) => {
          gsap.set(el, { clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)", opacity: 0.3 });
          gsap.to(el, {
            scrollTrigger: { trigger: el, ...triggerDefaults },
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            opacity: 1,
            duration: 0.95,
            ease: "power4.out",
            force3D: true,
            onComplete() {
              gsap.set(el, { clearProps: "willChange,clipPath" });
            },
          });
        });
      }

      if (!isServiceRoute) {
        document.querySelectorAll(".stat-counter").forEach((counter: any) => {
          const textVal = counter.getAttribute("data-target") || counter.innerText.trim();
          const target = parseFloat(textVal);
          if (isNaN(target)) return;

          const isFloat = textVal.includes(".");
          const state = { val: 0 };

          gsap.to(state, {
            val: target,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: { trigger: counter, ...triggerDefaults },
            onUpdate() {
              counter.innerText = isFloat ? state.val.toFixed(1) : Math.round(state.val).toString();
            },
          });
        });
      }

      const refresh = () => ScrollTrigger.refresh();
      requestAnimationFrame(refresh);
      window.addEventListener("load", refresh, { once: true });
      window.addEventListener("resize", refresh, { passive: true });
      cleanupFns.push(() => {
        window.removeEventListener("load", refresh);
        window.removeEventListener("resize", refresh);
      });

      document.querySelectorAll("img").forEach((image) => {
        const isContentImage = Boolean(image.closest("main"));
        if (isContentImage) {
          image.decoding = "async";
          if (!image.closest("main > section:first-child") && !image.loading) {
            image.loading = "lazy";
          }
          if (image.closest("main > section:first-child")) {
            image.setAttribute("fetchpriority", "high");
          }
          image.classList.add("service-img-smooth");
          if (!image.complete) {
            image.dataset.targetOpacity = window.getComputedStyle(image).opacity;
            image.style.opacity = "0";
          }
        }

        const markLoaded = () => {
          if (isContentImage) {
            image.classList.add("is-loaded");
            const targetOpacity = image.dataset.targetOpacity || "";
            requestAnimationFrame(() => {
              if (targetOpacity && targetOpacity !== "0") {
                image.style.opacity = targetOpacity;
              } else {
                image.style.removeProperty("opacity");
              }
            });
          }
          refresh();
        };

        if (image.complete) {
          markLoaded();
          return;
        }

        image.addEventListener("load", markLoaded, { once: true });
        image.addEventListener("error", markLoaded, { once: true });
        cleanupFns.push(() => {
          image.removeEventListener("load", markLoaded);
          image.removeEventListener("error", markLoaded);
        });
      });
    });

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
