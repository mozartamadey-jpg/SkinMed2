"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export default function NeuronParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // ── Performance: reduce particle count & connection checks ──
    const PARTICLE_COUNT = 35; // was 70
    const CONNECTION_DISTANCE = 120; // was 150
    const CONNECTION_DISTANCE_SQ = CONNECTION_DISTANCE * CONNECTION_DISTANCE;
    const ACCENT = { r: 96, g: 194, b: 255 };

    let w = 0;
    let h = 0;
    let particles: Particle[] = [];
    let frameCount = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      // Cap DPR at 1.5 for performance (was 2)
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = parent.offsetWidth;
      h = parent.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius: Math.random() * 1.5 + 0.6,
          opacity: Math.random() * 0.3 + 0.08,
        });
      }
    };

    const animate = () => {
      frameCount++;

      // ── Skip every other frame for performance ──
      if (frameCount % 2 !== 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, w, h);

      // Update positions
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        p.x = Math.max(0, Math.min(w, p.x));
        p.y = Math.max(0, Math.min(h, p.y));
      }

      // ── Draw connections (no sqrt — use distance squared) ──
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < CONNECTION_DISTANCE_SQ) {
            const alpha = (1 - distSq / CONNECTION_DISTANCE_SQ) * 0.08;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${alpha})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // ── Draw particles (simple circles, NO radial gradients) ──
      for (const p of particles) {
        // Simple glow circle (cheap fill, no gradient)
        ctx.beginPath();
        ctx.fillStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${p.opacity * 0.15})`;
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.fillStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${p.opacity})`;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    initParticles();
    animate();

    // Debounced resize handler
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        initParticles();
      }, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  );
}
