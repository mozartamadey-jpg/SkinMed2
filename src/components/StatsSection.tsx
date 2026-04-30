export default function StatsSection() {
  return (
    <section className="w-full relative z-10 py-16 sm:py-24 lg:py-32 max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 overflow-hidden stagger-container">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* Left Side: Empty Space + Abstract Text (Macro-Whitespace) */}
        <div className="lg:col-span-5 relative z-10 hidden lg:flex flex-col justify-end h-full opacity-0 stagger-item">
          <div className="max-w-md mt-auto mb-10 overflow-hidden px-4 -mx-4 pb-4">
            <h4 className="anim-whip text-3xl lg:text-4xl font-light text-slate-800 tracking-tight leading-snug mb-6 opacity-0">
              Точность, измеряемая в миллиметрах. <br/>Доверие, измеряемое в годах.
            </h4>
            <p className="anim-words text-lg font-light text-slate-500 leading-relaxed" style={{ opacity: 0 }}>
              Наши метрики — это не просто числа. Это сотни реальных историй пациентов, обретших уверенность в себе благодаря командной работе наших экспертов.
            </p>
          </div>
        </div>

        {/* Right Side: Grouped Stats Layout */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-16 lg:pl-16 relative z-20">
          
          {/* Stat 1 */}
          <div className="flex flex-col opacity-0 stagger-item group">
            <span className="text-[5rem] sm:text-[6.5rem] lg:text-[8rem] font-medium text-slate-800 tracking-tighter tabular-nums leading-[0.8] mb-4 transform group-hover:-translate-y-2 transition-transform duration-700">
              <span className="stat-counter" data-target="5.0">5.0</span>
            </span>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#60c2ff]"></div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Рейтинг на платформах</span>
            </div>
          </div>
          
          {/* Stat 2 */}
          <div className="flex flex-col opacity-0 stagger-item group lg:mt-16">
            <span className="text-[5rem] sm:text-[6.5rem] lg:text-[8rem] font-medium text-slate-800 tracking-tighter tabular-nums leading-[0.8] mb-4 transform group-hover:-translate-y-2 transition-transform duration-700">
              <span className="stat-counter" data-target="12">12</span>
            </span>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#60c2ff]"></div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Врачей-экспертов</span>
            </div>
          </div>
          
          {/* Stat 3 */}
          <div className="flex flex-col opacity-0 stagger-item group">
            <span className="relative inline-block text-[5rem] sm:text-[6.5rem] lg:text-[8rem] font-medium text-slate-800 tracking-tighter tabular-nums leading-[0.8] mb-4 transform group-hover:-translate-y-2 transition-transform duration-700 w-max">
              <span className="stat-counter z-10 relative text-slate-800" data-target="3">3</span>
              <span className="absolute -right-8 sm:-right-12 lg:-right-14 top-0 text-[#60c2ff]/30 text-5xl sm:text-7xl lg:text-8xl font-light z-0">+</span>
            </span>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#60c2ff]"></div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Года практики</span>
            </div>
          </div>
          
          {/* Stat 4 */}
          <div className="flex flex-col opacity-0 stagger-item group lg:mt-16">
            <span className="relative inline-block text-[5rem] sm:text-[6.5rem] lg:text-[8rem] font-medium text-slate-800 tracking-tighter tabular-nums leading-[0.8] mb-4 transform group-hover:-translate-y-2 transition-transform duration-700 w-max">
              <span className="stat-counter z-10 relative text-slate-800" data-target="100">100</span>
              <span className="absolute -right-12 sm:-right-16 lg:-right-20 top-0 text-[#60c2ff]/30 text-5xl sm:text-7xl lg:text-8xl font-light z-0">%</span>
            </span>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#60c2ff]"></div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Сертифицированных препаратов</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
