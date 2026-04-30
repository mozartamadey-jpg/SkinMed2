import { Icon } from "@iconify/react";

export default function ServicesSection() {
  return (
    <section className="w-full flex flex-col gap-6 sm:gap-8">
      <div className="px-2 sm:px-6 mb-2 sm:mb-4 reveal-up opacity-0">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-slate-700 tracking-tight">Эксклюзивные решения</h2>
        <p className="text-base sm:text-lg text-slate-500 font-extralight mt-3 sm:mt-4">Технологии будущего для вашей красоты.</p>
      </div>

      <div className="w-full bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_1.875rem_5rem_-1.25rem_rgba(0,0,0,0.05)] rounded-3xl sm:rounded-[3rem] p-2 sm:p-3 lg:p-4 flex flex-col lg:flex-row glass-refract hover:bg-white/80 reveal-up opacity-0">
        <div className="w-full lg:w-[45%] h-[15.625rem] sm:h-[18.75rem] lg:h-auto bg-[#f0f3f6] rounded-[2rem] sm:rounded-3xl overflow-hidden relative group">
          <img
            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            alt="СМАС Лифтинг"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>
        <div className="w-full lg:w-[55%] flex flex-col justify-center py-8 sm:py-12 px-5 sm:px-10 lg:pl-16">
          <div className="inline-flex items-center gap-2 bg-[#eaf3f8] text-[#60c2ff] px-4 py-2 rounded-full w-max mb-5 sm:mb-6 border border-white">
            <span className="text-xs sm:text-sm font-extralight uppercase tracking-widest">Хит сезона</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-slate-700 tracking-tight mb-4 sm:mb-5">СМАС-лифтинг</h2>
          <p className="text-base sm:text-lg text-slate-600 font-extralight leading-relaxed mb-6 sm:mb-8 max-w-lg">
            Абсолютный лидер безоперационного омоложения. Инновационный <span className="font-light text-slate-800">Ультраформер</span> возвращает четкость контурам лица без хирургического вмешательства.
          </p>
          <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base lg:text-lg text-slate-700 font-extralight">
              <Icon icon="solar:check-circle-linear" className="text-[#60c2ff] text-xl sm:text-2xl" style={{ strokeWidth: 1.5 }} /> Подтяжка без скальпеля
            </li>
            <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base lg:text-lg text-slate-700 font-extralight">
              <Icon icon="solar:check-circle-linear" className="text-[#60c2ff] text-xl sm:text-2xl" style={{ strokeWidth: 1.5 }} /> Один сеанс на 1.5 — 2 года
            </li>
            <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base lg:text-lg text-slate-700 font-extralight">
              <Icon icon="solar:check-circle-linear" className="text-[#60c2ff] text-xl sm:text-2xl" style={{ strokeWidth: 1.5 }} /> Без реабилитации
            </li>
          </ul>
          <button className="text-sm sm:text-base font-light text-[#60c2ff] border-b border-[#60c2ff]/40 w-max pb-1 hover:border-[#60c2ff] transition-colors uppercase tracking-widest">
            Подробнее
          </button>
        </div>
      </div>

      <div className="w-full bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_1.875rem_5rem_-1.25rem_rgba(0,0,0,0.05)] rounded-3xl sm:rounded-[3rem] p-2 sm:p-3 lg:p-4 flex flex-col lg:flex-row-reverse glass-refract hover:bg-white/80 reveal-up opacity-0">
        <div className="w-full lg:w-[45%] h-[15.625rem] sm:h-[18.75rem] lg:h-auto bg-[#f0f3f6] rounded-[2rem] sm:rounded-3xl overflow-hidden relative group">
          <img
            src="/images/homepage/home_picocare_1775859681885.png"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            alt="ПикоКеа"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>
        <div className="w-full lg:w-[55%] flex flex-col justify-center py-8 sm:py-12 px-5 sm:px-10 lg:pr-16">
          <div className="inline-flex items-center gap-2 bg-[#eaf3f8] text-[#60c2ff] px-4 py-2 rounded-full w-max mb-5 sm:mb-6 border border-white">
            <span className="text-xs sm:text-sm font-extralight uppercase tracking-widest">Технологии будущего</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-slate-700 tracking-tight mb-4 sm:mb-5">PicoCare Лазер</h2>
          <p className="text-base sm:text-lg text-slate-600 font-extralight leading-relaxed mb-6 sm:mb-8 max-w-lg">
            <span className="font-light text-slate-800">Пикосекундный лазер</span> для безупречно чистой кожи. Воздействует на пигмент в 1000 раз быстрее обычных лазеров, не повреждая ткани.
          </p>
          <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base lg:text-lg text-slate-700 font-extralight">
              <Icon icon="solar:check-circle-linear" className="text-[#60c2ff] text-xl sm:text-2xl" style={{ strokeWidth: 1.5 }} /> Удаление пигментации
            </li>
            <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base lg:text-lg text-slate-700 font-extralight">
              <Icon icon="solar:check-circle-linear" className="text-[#60c2ff] text-xl sm:text-2xl" style={{ strokeWidth: 1.5 }} /> Лечение рубцов и стрий
            </li>
            <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base lg:text-lg text-slate-700 font-extralight">
              <Icon icon="solar:check-circle-linear" className="text-[#60c2ff] text-xl sm:text-2xl" style={{ strokeWidth: 1.5 }} /> Точечное воздействие
            </li>
          </ul>
          <button className="text-sm sm:text-base font-light text-[#60c2ff] border-b border-[#60c2ff]/40 w-max pb-1 hover:border-[#60c2ff] transition-colors uppercase tracking-widest">
            Подробнее
          </button>
        </div>
      </div>
    </section>
  );
}
