"use client";

import { Icon } from "@iconify/react";

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col gap-6 sm:gap-8">
      {/* ── Main Container ── */}
      <div className="w-full bg-white/50 backdrop-blur-2xl border border-white/60 shadow-[0_1rem_3rem_-1rem_rgba(96,194,255,0.08)] rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 overflow-hidden relative">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#60c2ff] opacity-[0.04] blur-[5rem] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#60c2ff] opacity-[0.03] blur-[4rem] rounded-full pointer-events-none" />

        {/* ── Left Column: About ── */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-12 reveal-up opacity-0 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#60c2ff]/8 text-[#60c2ff] border border-[#60c2ff]/15 px-4 py-2 rounded-full w-max mb-8">
            <Icon
              icon="solar:star-fall-minimalistic-2-linear"
              className="text-lg"
              style={{ strokeWidth: 1.5 }}
            />
            <span className="text-xs font-medium uppercase tracking-[0.15em]">
              О клинике
            </span>
          </div>

          <h2 className="anim-whip text-4xl sm:text-5xl font-extralight text-slate-700 tracking-tight leading-[1.1] mb-8 opacity-0">
            Премиальная клиника <br/>
            <span className="font-light italic text-[#60c2ff]">косметологии</span>
          </h2>

          <div className="space-y-5 text-[1rem] sm:text-[1.05rem] text-slate-500 font-normal leading-relaxed">
            <p className="anim-words" style={{ opacity: 0 }}>
              СкинМед объединяет последние достижения мировой косметологии и
              безупречный профессионализм экспертов. Мы специализируемся на{" "}
              <span className="font-medium text-slate-700">
                высокотехнологичных методах
              </span>{" "}
              омоложения.
            </p>
            <p className="anim-words" style={{ opacity: 0 }}>
              Наша цель — не просто коррекция недостатков, а достижение
              абсолютно гармоничного, естественного результата.
            </p>
          </div>

          {/* Mini trust badges */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-200/40">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Icon icon="solar:shield-check-bold-duotone" className="text-xl text-[#60c2ff]" />
              <span className="font-medium">Лицензия</span>
            </div>
            <div className="w-px h-4 bg-slate-200/60"></div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Icon icon="solar:verified-check-bold-duotone" className="text-xl text-[#60c2ff]" />
              <span className="font-medium">FDA</span>
            </div>
            <div className="w-px h-4 bg-slate-200/60"></div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Icon icon="solar:star-circle-bold-duotone" className="text-xl text-[#60c2ff]" />
              <span className="font-medium">22 года</span>
            </div>
          </div>
        </div>

        {/* ── Right Column: Interactive Map & Contacts ── */}
        <div className="w-full lg:w-7/12 relative rounded-2xl overflow-hidden border border-slate-200/40 group flex flex-col sm:justify-end reveal-up opacity-0 h-auto sm:min-h-[550px] lg:min-h-[600px] z-10">
          
          {/* Map Container */}
          <div className="relative w-full h-[350px] sm:absolute sm:inset-0 sm:h-full bg-slate-100 z-0 overflow-hidden sm:rounded-2xl">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=49.1926815,55.7851635&pt=49.1926815,55.7851635,pm2rdm&z=17"
              className="absolute inset-0 w-full h-full border-0 filter saturate-[0.85] contrast-[1.02]"
              title="Интерактивная карта"
              loading="lazy"
            />
            {/* Soft gradient overlays for premium blending */}
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none" />
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Glass Contact Panel */}
          <div className="relative z-10 m-0 sm:mx-6 sm:mb-6 bg-white/85 backdrop-blur-2xl border border-white/90 sm:rounded-2xl p-6 sm:p-7 shadow-[0_0.5rem_2rem_-0.25rem_rgba(96,194,255,0.1)] transition-all duration-500 sm:hover:-translate-y-0.5 sm:hover:shadow-[0_1rem_3rem_-0.5rem_rgba(96,194,255,0.15)]">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-between items-start sm:items-center">
              
              {/* Address Block */}
              <div className="flex items-center gap-4 flex-1">
                <div className="w-11 h-11 rounded-xl bg-[#60c2ff]/10 flex items-center justify-center text-[#60c2ff] shrink-0">
                  <Icon icon="solar:map-point-bold-duotone" className="text-[1.4rem]" />
                </div>
                <div>
                  <p className="text-[0.65rem] font-semibold text-slate-400 uppercase tracking-[0.2em] mb-0.5">
                    Адрес
                  </p>
                  <p className="text-[0.95rem] sm:text-base text-slate-700 font-medium leading-snug">
                    г. Казань, просп. А. Камалеева, 30
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-slate-100 sm:hidden" />
              <div className="hidden sm:block w-px h-10 bg-slate-200/60 shrink-0" />

              {/* Phone Block */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#60c2ff]/10 flex items-center justify-center text-[#60c2ff] shrink-0">
                  <Icon icon="solar:phone-calling-bold-duotone" className="text-[1.4rem]" />
                </div>
                <div>
                  <p className="text-[0.65rem] text-slate-400 font-semibold uppercase tracking-[0.2em] mb-0.5">Телефон</p>
                  <p className="text-[0.95rem] sm:text-base text-slate-700 font-medium tracking-tight">
                    +7 (843) 210-32-56
                  </p>
                </div>
              </div>

              {/* Route Button */}
              <a
                href="https://yandex.ru/maps/-/CDuU6Z0Z"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 bg-[#60c2ff] hover:bg-[#4db8ff] text-white px-5 py-2.5 rounded-xl w-full sm:w-auto justify-center shadow-[0_4px_12px_rgba(96,194,255,0.25)] hover:shadow-[0_6px_16px_rgba(96,194,255,0.35)] hover:-translate-y-0.5 cursor-pointer shrink-0"
              >
                <Icon icon="solar:routing-2-linear" className="text-lg transition-transform group-hover:translate-x-0.5" />
                <span className="tracking-wide text-[0.8rem]">
                  Маршрут
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
