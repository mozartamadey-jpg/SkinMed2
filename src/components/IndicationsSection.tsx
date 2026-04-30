"use client";

import { useRef } from "react";
import { Icon } from "@iconify/react";

/*
 * ─────────────────────────────────────────────────────────────
 * DESIGN DIRECTION: Interactive Editorial Bento
 * ─────────────────────────────────────────────────────────────
 *
 * DFII Score: Excellent
 * Aesthetic: Refined minimal with high-end interactive tech
 * Memorable: Asymmetric grid (7-5 / 5-7), oversized bleeding icons,
 *            dynamic spotlight hover effect that follows the cursor.
 * ─────────────────────────────────────────────────────────────
 */

interface IndicationData {
  id: string;
  title: string;
  desc: string;
  icon: string;
  colSpan: string;
}

const INDICATIONS: IndicationData[] = [
  {
    id: "wrinkles",
    title: "Морщины",
    desc: "Коррекция возрастных изменений с применением самых современных инъекционных технологий последнего поколения.",
    icon: "solar:stars-line-duotone",
    colSpan: "md:col-span-7",
  },
  {
    id: "contour",
    title: "Овал лица",
    desc: "Безоперационная подтяжка и формирование четких контуров лица для абсолютно естественного результата.",
    icon: "solar:user-circle-bold-duotone",
    colSpan: "md:col-span-5",
  },
  {
    id: "acne",
    title: "Акне",
    desc: "Системный медицинский подход к лечению высыпаний с долгосрочной гарантией абсолютной чистоты кожи.",
    icon: "solar:shield-check-bold-duotone",
    colSpan: "md:col-span-5",
  },
  {
    id: "trichology",
    title: "Трихология",
    desc: "Комплексное решение проблем выпадения и стимуляция роста здоровой густоты ваших волос.",
    icon: "solar:leaf-bold-duotone",
    colSpan: "md:col-span-7",
  },
];

// Reusable card component with spotlight effect
function IndicationCard({ item }: { item: IndicationData }) {
  const divRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // ── Use direct DOM manipulation instead of React state for mousemove perf ──
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !spotlightRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(96,194,255,0.1), transparent 40%)`;
  };

  const handleMouseEnter = () => {
    if (spotlightRef.current) spotlightRef.current.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative group flex flex-col justify-between overflow-hidden rounded-3xl bg-white/40 border border-white/60 backdrop-blur-md p-8 sm:p-10 min-h-[16rem] transition-[transform,box-shadow] duration-700 hover:-translate-y-1 hover:shadow-[0_1.5rem_4rem_-0.5rem_rgba(96,194,255,0.08)] cursor-pointer ${item.colSpan}`}
    >
      {/* ── Spotlight Hover Effect (ref-driven, no React re-renders) ── */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute -inset-px rounded-[2rem]"
        style={{ opacity: 0, transition: "opacity 0.3s" }}
      />
      
      {/* ── Ambient Static Gradient Glow ── */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#60c2ff] opacity-[0.03] blur-[3rem] rounded-full group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none" />

      {/* ── Card Content ── */}
      <div className="relative z-10">
        {/* Abstracted structural line */}
        <div className="w-12 h-px bg-slate-400 mb-6 group-hover:w-24 group-hover:bg-[#60c2ff] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" />
        
        <h3 className="text-2xl sm:text-3xl font-normal text-slate-700 tracking-tight mb-3">
          {item.title}
        </h3>
        <p className="text-base sm:text-[1.05rem] text-slate-500 font-light leading-relaxed max-w-sm group-hover:text-slate-700 transition-colors duration-500">
          {item.desc}
        </p>
      </div>

      {/* ── Oversized Bleeding Icon ── */}
      <div className="absolute -bottom-8 -right-8 text-[#60c2ff]/10 group-hover:text-[#60c2ff]/20 transition-colors duration-700 pointer-events-none">
        <Icon icon={item.icon} className="text-[12rem] sm:text-[14rem]" />
      </div>
      
      {/* ── Floating Action Arrow ── */}
      <div className="absolute top-8 right-8 sm:top-10 sm:right-10 w-10 h-10 rounded-full border border-slate-200 bg-white/50 flex items-center justify-center text-slate-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-[#60c2ff] group-hover:text-[#60c2ff] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
        <Icon icon="solar:arrow-right-up-linear" className="text-lg" />
      </div>
    </div>
  );
}

export default function IndicationsSection() {
  return (
    <section className="w-full flex flex-col gap-10 sm:gap-14">
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 px-2 sm:px-6 reveal-up opacity-0">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 text-slate-400 mb-4">
            <span className="w-8 h-px bg-slate-300" />
            <span className="text-[0.7rem] font-light uppercase tracking-[0.3em]">
              Компетенции
            </span>
          </div>
          
        <h2 className="anim-whip text-4xl sm:text-5xl lg:text-6xl font-extralight text-slate-700 tracking-tight leading-[1.1] opacity-0">
            Показания <br />
            <span className="text-[#60c2ff] italic font-light">& решения</span>
          </h2>
          
          <p className="anim-words text-[1.05rem] sm:text-lg text-slate-600 font-light mt-6 max-w-2xl leading-relaxed text-left" style={{ opacity: 0 }}>
            Решаем индивидуальные задачи вашей кожи, используя{" "}
            <span className="font-medium text-slate-800">доказательную медицину</span>. 
            План составляется после высокоточной цифровой диагностики.
          </p>
        </div>

        <a
          href="#directions"
          className="group inline-flex items-center gap-3 self-start md:self-auto px-6 py-3.5 rounded-full border border-slate-200 hover:border-[#60c2ff] transition-colors duration-500 cursor-pointer bg-white/40 backdrop-blur-md"
        >
          <span className="text-sm font-medium text-slate-700 group-hover:text-[#60c2ff] uppercase tracking-wider transition-colors">
            Все направления
          </span>
          <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-[#60c2ff] flex items-center justify-center transition-colors duration-500">
            <Icon
              icon="solar:arrow-right-linear"
              className="text-sm text-slate-500 group-hover:text-white transition-colors"
            />
          </div>
        </a>
      </div>

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 px-2 sm:px-6 reveal-up opacity-0 stagger-container w-full">
        {INDICATIONS.map((item, idx) => (
          <IndicationCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
