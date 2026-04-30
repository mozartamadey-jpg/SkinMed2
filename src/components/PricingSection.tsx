"use client";

import { Icon } from "@iconify/react";

export default function PricingSection() {
  return (
    <section className="w-full flex flex-col gap-6 sm:gap-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 px-2 sm:px-6 reveal-up opacity-0">
        <div>
          <div className="inline-flex items-center gap-3 text-slate-400 mb-4">
            <span className="w-8 h-px bg-slate-300" />
            <span className="text-[0.7rem] font-light uppercase tracking-[0.3em]">
              Стоимость
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-slate-700 tracking-tight">Предложения</h2>
        </div>
        <p className="text-[1.05rem] text-slate-500 font-light max-w-sm leading-relaxed md:text-right">
          Прозрачные цены на самые востребованные процедуры
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 stagger-container">
        
        {/* Card 1 — Botox */}
        <a 
          href="#diagnostics-cta"
          className="block bg-white/50 backdrop-blur-xl border border-white/70 rounded-3xl p-6 sm:p-8 flex flex-col hover:bg-white/80 hover:border-[#60c2ff]/20 transition-all duration-500 shadow-sm relative overflow-hidden group stagger-item cursor-pointer opacity-0"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#60c2ff]/5 rounded-full blur-[3rem] -mr-10 -mt-10 group-hover:bg-[#60c2ff]/10 transition-colors duration-700 pointer-events-none"></div>
          
          <h3 className="text-xl sm:text-2xl font-light text-slate-700 mb-2 sm:mb-3 tracking-tight">Ботокс</h3>
          <p className="text-sm sm:text-[1rem] text-slate-500 font-light mb-8 sm:mb-10 h-auto sm:h-12 leading-relaxed">
            Эффективные инъекции против мимических морщин.
          </p>
          <div className="mt-auto flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-normal text-slate-700 tracking-tighter">300 ₽</span>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">за единицу</span>
            </div>
            <div className="w-11 h-11 rounded-full bg-[#60c2ff]/10 text-[#60c2ff] flex items-center justify-center transition-all duration-300 group-hover:bg-[#60c2ff] group-hover:text-white shrink-0">
              <Icon icon="solar:arrow-right-linear" className="text-lg" style={{ strokeWidth: 1.5 }} />
            </div>
          </div>
        </a>

        {/* Card 2 — Dysport */}
        <a 
          href="#diagnostics-cta"
          className="block bg-white/50 backdrop-blur-xl border border-white/70 rounded-3xl p-6 sm:p-8 flex flex-col hover:bg-white/80 hover:border-[#60c2ff]/20 transition-all duration-500 shadow-sm relative overflow-hidden group stagger-item cursor-pointer opacity-0"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#60c2ff]/5 rounded-full blur-[3rem] -mr-10 -mt-10 group-hover:bg-[#60c2ff]/10 transition-colors duration-700 pointer-events-none"></div>
          
          <h3 className="text-xl sm:text-2xl font-light text-slate-700 mb-2 sm:mb-3 tracking-tight">Диспорт</h3>
          <p className="text-sm sm:text-[1rem] text-slate-500 font-light mb-8 sm:mb-10 h-auto sm:h-12 leading-relaxed">
            Французская коррекция возрастных изменений.
          </p>
          <div className="mt-auto flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-normal text-slate-700 tracking-tighter">140 ₽</span>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">за единицу</span>
            </div>
            <div className="w-11 h-11 rounded-full bg-[#60c2ff]/10 text-[#60c2ff] flex items-center justify-center transition-all duration-300 group-hover:bg-[#60c2ff] group-hover:text-white shrink-0">
              <Icon icon="solar:arrow-right-linear" className="text-lg" style={{ strokeWidth: 1.5 }} />
            </div>
          </div>
        </a>

        {/* Card 3 — SMAS Lifting (HIGHLIGHTED with soft cyan) */}
        <a 
          href="#diagnostics-cta"
          className="block bg-gradient-to-br from-[#f0f8ff] via-[#e8f4fd] to-[#dceefa] border border-[#60c2ff]/25 rounded-3xl p-6 sm:p-8 flex flex-col hover:border-[#60c2ff]/40 transition-all duration-500 shadow-[0_0.5rem_2rem_-0.5rem_rgba(96,194,255,0.15)] hover:shadow-[0_1rem_3rem_-0.5rem_rgba(96,194,255,0.25)] hover:-translate-y-1 relative overflow-hidden group stagger-item cursor-pointer opacity-0"
        >
          {/* Ambient cyan glows */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#60c2ff]/15 rounded-full blur-[4rem] -mr-12 -mt-12 group-hover:bg-[#60c2ff]/20 transition-colors duration-700 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#60c2ff]/10 rounded-full blur-[3rem] -ml-10 -mb-10 pointer-events-none"></div>
          
          <div className="inline-flex items-center gap-1.5 bg-[#60c2ff]/10 text-[#60c2ff] border border-[#60c2ff]/20 text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-full w-max mb-5 relative z-10">
            <Icon icon="solar:star-fall-bold-duotone" className="text-sm" />
            ХИТ КЛИНИКИ
          </div>
          
          <h3 className="text-xl sm:text-2xl font-light text-slate-700 mb-2 sm:mb-3 relative z-10 tracking-tight">СМАС Лифтинг</h3>
          <p className="text-sm sm:text-[1rem] text-slate-500 font-light mb-8 sm:mb-10 h-auto sm:h-12 relative z-10 leading-relaxed">
            Инновационный Ультраформер: безоперационная подтяжка.
          </p>
          <div className="mt-auto flex items-end justify-between relative z-10">
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-normal text-slate-700 tracking-tighter">45 000 ₽</span>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">за процедуру</span>
            </div>
            <div className="w-11 h-11 rounded-full bg-[#60c2ff] text-white flex items-center justify-center shadow-[0_0_1.5rem_rgba(96,194,255,0.35)] transition-transform group-hover:scale-110 shrink-0">
              <Icon icon="solar:arrow-right-linear" className="text-lg" style={{ strokeWidth: 1.5 }} />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
