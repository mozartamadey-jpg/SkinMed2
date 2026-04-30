"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if it already played in this session
    if (sessionStorage.getItem("skinmed_preloader_played")) {
      setIsPlaying(false);
      return;
    }

    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        setIsPlaying(false);
        document.body.style.overflow = "";
        sessionStorage.setItem("skinmed_preloader_played", "true");
      },
    });

    // Initial states
    gsap.set(textRef.current, { yPercent: 100 });
    gsap.set(maskRef.current, { scaleX: 0, transformOrigin: "left center" });

    // Animation sequence
    tl.to(textRef.current, {
      yPercent: 0,
      duration: 1.2,
      ease: "expo.out",
      delay: 0.2
    })
    .to(maskRef.current, {
      scaleX: 1,
      duration: 1.2,
      ease: "power3.inOut",
    }, "-=0.5")
    .to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power2.in",
      delay: 0.4
    })
    .to(maskRef.current, {
      opacity: 0,
      duration: 0.4,
    }, "<")
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "expo.inOut",
    });

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (!isPlaying) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[99999] bg-[#fdfdfd] flex flex-col items-center justify-center pointer-events-auto"
    >
      <div className="relative flex flex-col items-center">
        {/* Overflow hidden mask for text reveal */}
        <div className="overflow-hidden pb-2 mb-6">
          <span 
            ref={textRef}
            className="block text-4xl sm:text-5xl lg:text-7xl font-extralight text-slate-900 tracking-tighter uppercase"
          >
            СкинМед
          </span>
        </div>
        
        {/* Elegant loading line */}
        <div className="w-[140px] sm:w-[200px] h-[1px] bg-slate-200 relative overflow-hidden">
          <div 
            ref={maskRef}
            className="absolute inset-0 bg-[#0ea5e9]"
          />
        </div>
      </div>
    </div>
  );
}
