import Image from "next/image";
import { Icon } from "@iconify/react";

export default function AboutPreviewSection() {
  return (
    <section className="w-full relative z-10 scale-100 mt-20 lg:mt-32 max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14">
      {/* ── Editorial Header Row ── */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24 reveal-up opacity-0">
        <div>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-slate-300"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Манифест
            </span>
          </div>
          <h2 className="anim-whip font-serif text-[2.5rem] sm:text-5xl lg:text-6xl tracking-tight text-slate-800 leading-[1.1] max-w-2xl opacity-0">
            Красота через <br/>
            <span className="italic font-light text-slate-500">доказательную</span> медицину
          </h2>
        </div>
        <div className="max-w-md lg:pb-3">
          <p className="anim-words text-base sm:text-lg text-slate-500 font-light leading-[1.8] text-left" style={{ opacity: 0 }}>
            Мы не маскируем недостатки. СкинМед — это глубокий медицинский подход к раскрытию вашего природного потенциала с помощью инновационных мировых технологий.
          </p>
        </div>
      </div>

      {/* ── The Z-Axis Cascade & Asymmetrical Bento ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 relative">
        
        {/* BIG LEFT COMPONENT (Span 8) */}
        <div className="lg:col-span-8 relative z-10 reveal-up opacity-0">
          <div className="w-full bg-white/60 backdrop-blur-lg rounded-[2rem] sm:rounded-[3rem] p-2 border border-white/80 shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.03)] h-full min-h-[500px] relative overflow-hidden group">
            {/* Inner Core (Double-Bezel) */}
            <div className="w-full h-full bg-[#f9fafb] rounded-[1.5rem] sm:rounded-[2.5rem] relative overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)] p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
              
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#60c2ff]/10 to-transparent blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-1000"></div>

              <div className="relative z-10">
                <Icon icon="solar:shield-check-bold-duotone" className="text-4xl sm:text-5xl text-[#60c2ff] mb-8" />
                <h3 className="text-3xl sm:text-4xl font-light text-slate-800 tracking-tight leading-[1.2] max-w-lg mb-6">
                  Никаких компромиссов в безопасности и протоколах лечения.
                </h3>
                <p className="text-slate-500 font-light text-base sm:text-lg max-w-md leading-relaxed">
                  Используем исключительно оригинальное сертифицированное FDA оборудование и сертифицированные препараты для абсолютной уверенности в результате.
                </p>
              </div>

              {/* Stats row inside the card */}
              <div className="relative z-10 flex items-center gap-8 sm:gap-10 mt-16 pt-8 border-t border-slate-200/60 flex-wrap">
                <div>
                  <div className="text-4xl lg:text-5xl font-serif text-slate-800 tracking-tighter mb-1">22+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#60c2ff]">лет опыта</div>
                </div>
                <div className="w-px h-12 bg-slate-200/60"></div>
                <div>
                  <div className="text-4xl lg:text-5xl font-serif text-slate-800 tracking-tighter mb-1">15к+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#60c2ff]">пациентов</div>
                </div>
                <div className="w-px h-12 bg-slate-200/60"></div>
                <div>
                  <div className="text-4xl lg:text-5xl font-serif text-slate-800 tracking-tighter mb-1">98%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#60c2ff]">рекомендуют</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CENTER IMAGE COMPONENT — Full Width */}
        <div className="lg:col-span-12 relative z-20 mt-8 lg:mt-12 reveal-scale opacity-0">
          <div className="w-full max-w-5xl mx-auto bg-white/80 backdrop-blur-lg rounded-[2rem] sm:rounded-[3rem] p-2 border border-white shadow-[0_3rem_6rem_-1.5rem_rgba(0,0,0,0.08)]">
            <div className="anim-clip relative w-full aspect-square rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden group bg-[#f0ece6] opacity-0" style={{ clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" }}>
              
              <Image 
                src="/images/homepage/doctors_team_full.webp" 
                alt="Врачи-эксперты клиники СкинМед" 
                fill
                priority
                sizes="(min-width: 1024px) 1024px, calc(100vw - 3rem)"
                className="object-cover"
              />
              
              {/* Inner Gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>

              {/* Floating element inside */}
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="text-white text-base font-semibold tracking-wide">Врачи-эксперты</p>
                  <p className="text-white/70 text-xs font-light mt-1">Непрерывное повышение квалификации</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#60c2ff] shadow-lg flex-shrink-0">
                  <Icon icon="solar:arrow-right-up-linear" className="text-lg" />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
