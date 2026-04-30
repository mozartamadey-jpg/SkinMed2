"use client";

import { Icon } from "@iconify/react";

export default function DiagnosticsCTA() {
  return (
    <section id="diagnostics-cta" className="w-full bg-gradient-to-br from-[#ffffff] to-[#eaf3f8]/80 backdrop-blur-2xl border border-white/90 shadow-[0_1.25rem_3.75rem_-0.9375rem_rgba(96,194,255,0.15)] rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-20 flex flex-col items-center justify-center text-center relative overflow-hidden reveal-scale mx-2 sm:mx-0 opacity-0 scroll-mt-24">
      <div className="absolute top-0 right-0 w-[18.75rem] h-[18.75rem] sm:w-[31.25rem] sm:h-[31.25rem] bg-gradient-to-bl from-[#60c2ff]/10 to-transparent rounded-full blur-[5rem] pointer-events-none"></div>

      <div className="relative mb-8 sm:mb-10 z-10">
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#60c2ff] rounded-full animate-orbit blur-[1px]"></div>
          <div
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-400 rounded-full animate-orbit"
            style={{ animationDelay: "-4s", animationDirection: "reverse" }}
          ></div>
        </div>
        <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-white/80 backdrop-blur-md shadow-[0_0.625rem_1.875rem_rgba(0,0,0,0.05)] border border-white/50 flex items-center justify-center text-[#60c2ff] animate-float relative z-10">
          <Icon icon="solar:magnifer-linear" className="text-4xl sm:text-[3.5rem]" style={{ strokeWidth: 1.5 }} />
        </div>
      </div>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-700 tracking-tighter leading-tight mb-6 sm:mb-8 z-10">
        Не знаете, какую
        <br />
        процедуру выбрать?
      </h2>

      <p className="text-base sm:text-lg lg:text-xl text-slate-500 font-light mb-10 sm:mb-12 max-w-2xl z-10 leading-relaxed px-4 sm:px-0">
        Наш врач-косметолог проведет диагностику и разработает протокол омоложения, идеально подходящий вашей коже.
      </p>

      <button 
        onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
        className="bg-[#60c2ff] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-[0_0.75rem_1.875rem_rgba(96,194,255,0.3)] text-sm sm:text-base font-medium transition-all duration-500 hover:shadow-[0_1.25rem_2.5rem_rgba(96,194,255,0.45)] hover:-translate-y-1 relative overflow-hidden group active:scale-95 z-10"
      >
        <span className="relative z-10">Консультация эксперта</span>
        <div className="absolute inset-0 bg-white/20 translate-y-full rounded-[40%] group-hover:translate-y-0 transition-transform duration-700 scale-150"></div>
      </button>
    </section>
  );
}
