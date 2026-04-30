'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';

export default function PlasmotherapyClient() {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    if (!isMobile) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("mobile-glow-active");
        } else {
          entry.target.classList.remove("mobile-glow-active");
        }
      });
    }, { rootMargin: "-40% 0px -40% 0px", threshold: 0 });
    setTimeout(() => { document.querySelectorAll(".scroll-glow-item").forEach((el) => observer.observe(el)); }, 500);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative font-sans text-slate-800 bg-[#FAFAFA] overflow-hidden selection:bg-[#60c2ff]/30 flex flex-col">
      <AnimationsProvider />
      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        
        <main className="w-full mt-8 sm:mt-12 overflow-x-hidden">
          
          {/* HERO SECTION (ASYMMETRICAL GLASS) */}
          <section className="mb-24 lg:mb-32 max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
              
              <div className="w-full lg:w-7/12 relative z-20 bg-white/40 backdrop-blur-2xl rounded-[3rem] p-10 lg:p-16 border border-white/60 shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.05)] stagger-container">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#60c2ff]/10 text-[#60c2ff] text-xs font-semibold uppercase tracking-widest mb-6 border border-[#60c2ff]/20 stagger-item animate-fade-in shadow-sm">
                  Инновация регенерации
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-slate-900 tracking-[-0.03em] leading-[1.05] mb-8 stagger-item animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                  Плазмотерапия <br/>
                  <span className="font-serif italic text-[#60c2ff]">лица</span> Cortexil
                </h1>
                
                <p className="text-lg sm:text-xl text-slate-500 font-light max-w-xl leading-relaxed mb-10 stagger-item animate-fade-in pr-4 sm:pr-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                  Вернём коже упругость, увлажнение и естественное сияние. Инъекционная процедура омоложения с помощью собственной плазмы (Buffy Coat), богатой факторами роста.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 stagger-item animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                  <div className="relative inline-flex group w-full sm:w-auto">
                    <div className="absolute inset-0 bg-[#60c2ff]/40 rounded-full blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <button
                      onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                      className="relative z-10 w-full sm:w-auto px-8 py-4 sm:py-5 bg-gradient-to-br from-[#60c2ff] to-[#3ba3e0] text-white rounded-full font-medium shadow-[0_1rem_2.5rem_rgba(96,194,255,0.4)] transition-all duration-500 hover:shadow-[0_1.5rem_3.5rem_rgba(96,194,255,0.6)] hover:-translate-y-1 focus:outline-none flex items-center justify-center gap-3 overflow-hidden group/btn"
                    >
                      <span className="relative z-10">Записаться по акции</span>
                    </button>
                  </div>
                  <div className="px-6 py-4 rounded-full border border-rose-200 bg-rose-50 flex items-center justify-center gap-3 text-rose-500 shadow-sm w-full sm:w-auto">
                    <Icon icon="solar:clock-circle-bold-duotone" className="text-2xl" />
                    <span className="font-medium text-sm">Акция до 30 апреля</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-5/12 relative aspect-[4/5] lg:aspect-auto lg:h-[700px] rounded-[3rem] overflow-hidden group shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.1)]">
                <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transform duration-[2s] group-hover:scale-105" alt="Cortexil PRP" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="backdrop-blur-md bg-white/20 border border-white/40 p-6 rounded-2xl text-white">
                    <span className="text-4xl font-light mb-1 block">100%</span>
                    <span className="text-sm font-light text-white/80 uppercase tracking-wider">Стерильно и гипоаллергенно</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* BUFFY COAT STATISTIC BANNER */}
          <section className="mb-32 lg:mb-48 max-w-7xl mx-auto px-4 lg:px-8 stagger-container">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-[3rem] p-10 lg:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute -left-20 -top-20 w-96 h-96 bg-[#60c2ff]/20 rounded-full blur-[80px] pointer-events-none"></div>
              
              <div className="relative z-10 w-full md:w-1/2 stagger-item opacity-0">
                <span className="text-[#60c2ff] font-serif italic text-2xl mb-4 block">Platelet-Rich Plasma</span>
                <h2 className="text-5xl lg:text-7xl font-light text-white tracking-tight mb-4">9 000 000</h2>
                <h3 className="text-xl text-white/70 font-light mb-8 lg:mb-0">жизнеспособных тромбоцитов в 1 мкл</h3>
              </div>
              
              <div className="relative z-10 w-full md:w-1/2 md:pl-16 border-l-0 md:border-l border-white/10 stagger-item opacity-0">
                <p className="text-white/60 font-light text-lg leading-relaxed">
                  Используя метод PRP-Cortexil, мы получаем Buffy Coat концентрат. В обычной крови количество тромбоцитов — не более 350 тыс. Такая высочайшая концентрация имеет невероятное терапевтическое и ревитализирующее действие, запуская масштабные процессы омоложения кожи лица.
                </p>
              </div>
            </div>
          </section>

          {/* ПОКАЗАНИЯ (Вертикальный Sticky Скролл) */}
          <section className="mb-32 lg:mb-48 max-w-7xl mx-auto px-4 lg:px-8 stagger-container">
            <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 relative">
              
              {/* Sticky Заголовок */}
              <div className="lg:w-1/3 lg:sticky lg:top-32 stagger-item opacity-0">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#60c2ff]/10 text-[#60c2ff] text-xs font-semibold uppercase tracking-widest mb-6">Кому подойдет</span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Для каких <br/>
                  <span className="font-serif italic text-slate-400">целей?</span>
                </h2>
                <p className="text-slate-500 font-light leading-relaxed mb-8">
                  Курс PRP-терапии решает широкий спектр косметологических и трихологических проблем через естественную регенерацию клеток.
                </p>
              </div>

              {/* Скроллящиеся карточки */}
              <div className="lg:w-2/3 flex flex-col gap-6">
                {[
                  { t: "Хроно- и Фотостарение", d: "Замедляет увядание кожи, повышает эластичность и тургор, восстанавливает ровную текстуру эпидермиса от последствий ультрафиолета.", act: "solar:sun-fog-bold" },
                  { t: "Акне и Розацеа", d: "Ускоряет лечение воспалений сальных желез, снижает риск постакне, укрепляет стенки сосудов и убирает сосудистую сеточку.", act: "solar:shield-warning-bold" },
                  { t: "Рубцы и постакне", d: "Обогащенные факторы роста ускоряют заживление и восстанавливают гладкий рельеф кожи вокруг рубцовой ткани.", act: "solar:magic-stick-3-bold" },
                  { t: "Пигментация и Синяки", d: "Нормализует выработку меланина. Активизирует кровообращение и лимфоотток в периорбитальной зоне, осветляя синяки под глазами.", act: "solar:eye-scan-bold" },
                  { t: "Снижение тургора", d: "Стимулирует выработку коллагена и эластина, возвращает коже тонус, плотность и здоровое молодое сияние.", act: "solar:spengo-bold" }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-slate-100 shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.02)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.1)] transition-shadow duration-500 stagger-item opacity-0 flex flex-col sm:flex-row gap-8 items-start">
                    <div className="w-16 h-16 rounded-full bg-[#60c2ff]/10 flex items-center justify-center shrink-0">
                      <Icon icon={item.act} className="text-3xl text-[#60c2ff]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-slate-900 mb-3">{item.t}</h3>
                      <p className="text-slate-500 font-light leading-relaxed text-lg">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          </section>

          {/* ПЛЮСЫ И МИНУСЫ (COMPARISON CARDS) */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto px-4 lg:px-0 stagger-container">
            <h2 className="text-4xl sm:text-5xl font-light text-center text-slate-900 mb-16 stagger-item opacity-0">Плюсы и <span className="font-serif italic text-slate-400">минусы</span></h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#f2fbf4] border border-emerald-100 rounded-[3rem] p-10 lg:p-14 hover:-translate-y-1 transition-transform duration-500 stagger-item opacity-0">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-emerald-400/20 flex items-center justify-center">
                    <Icon icon="solar:check-circle-bold" className="text-2xl text-emerald-500" />
                  </div>
                  <h3 className="text-3xl font-light text-slate-900">Преимущества</h3>
                </div>
                <ul className="space-y-5">
                  {[
                    "100% безопасность и отсутствие аллергии",
                    "Интенсивно увлажняет и выравнивает тон",
                    "Устраняет угри и лечит акне в короткие сроки",
                    "Осветляет гиперпигментацию",
                    "Результат омоложения видно уже после 1 сеанса"
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-start text-slate-600 font-light text-lg">
                      <Icon icon="solar:round-alt-arrow-right-bold" className="text-emerald-400 mt-1 shrink-0" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#fdf5f5] border border-rose-100 rounded-[3rem] p-10 lg:p-14 hover:-translate-y-1 transition-transform duration-500 stagger-item opacity-0">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-rose-400/20 flex items-center justify-center">
                    <Icon icon="solar:close-circle-bold" className="text-2xl text-rose-500" />
                  </div>
                  <h3 className="text-3xl font-light text-slate-900">Ограничения</h3>
                </div>
                <ul className="space-y-5">
                  {[
                    "Микроследы от уколов сохраняются 3−8 часов",
                    "Возможен легкий дискомфорт (как укус комара)",
                    "Для стойкого эффекта требуется курс из нескольких визитов",
                    "Противопоказано при беременности и ОРВИ"
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-start text-slate-600 font-light text-lg">
                      <div className="w-2 h-2 rounded-full bg-rose-400 mt-2.5 shrink-0"></div>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ЭТАПЫ ПРОХОЖДЕНИЯ (4 ШАГА) */}
          <section className="mb-32 lg:mb-48 max-w-7xl mx-auto px-4 lg:px-8 stagger-container">
            <h2 className="text-4xl sm:text-5xl font-light text-center text-slate-900 mb-16 stagger-item opacity-0">Как проходит <span className="font-serif italic text-slate-400">сеанс</span></h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { n: "01", t: "Осмотр", d: "Сбор анамнеза, выявление показаний." },
                { n: "02", t: "Подготовка", d: "Очищение кожи и аккуратный демакияж. (3 мин)." },
                { n: "03", t: "Анестезия", d: "Крем-анестетик при низком болевом пороге." },
                { n: "04", t: "PRP-Терапия", d: "Забор крови, подготовка плазмы в центрифуге и точные микроинъекции (20 мин)." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white/40 border border-white/60 backdrop-blur-md rounded-[2rem] p-8 hover:bg-white/80 transition-colors duration-500 stagger-item opacity-0">
                  <span className="text-4xl font-serif text-[#60c2ff]/40 block mb-6">{step.n}</span>
                  <h3 className="text-2xl font-medium text-slate-900 mb-3">{step.t}</h3>
                  <p className="text-slate-500 font-light leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* СТОИМОСТЬ */}
          <section className="pb-32 px-4 lg:px-8 max-w-4xl mx-auto text-center stagger-container relative z-10">
            <h2 className="text-4xl sm:text-5xl font-light text-slate-900 tracking-tight mb-12 stagger-item opacity-0">Стоимость <span className="font-serif italic text-slate-400">PRP Cortexil</span></h2>
            
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_1rem_4rem_-1rem_rgba(0,0,0,0.03)] overflow-hidden text-left stagger-item opacity-0 hover:border-[#60c2ff]/30 transition-colors">
              <div className="flex flex-col md:flex-row items-center justify-between p-8 lg:p-12">
                <div>
                  <h4 className="text-2xl sm:text-3xl font-medium text-slate-900 mb-2">Плазмотерапия (Лицо)</h4>
                  <p className="text-slate-500 font-light">Cortexil PRP (1 пробирка)</p>
                </div>
                <div className="mt-4 md:mt-0 text-4xl font-light text-[#60c2ff]">9 900 ₽</div>
              </div>
            </div>
          </section>

          {/* CTA-БЛОК С ЗАПИСЬЮ */}
          <section className="mb-20 max-w-7xl mx-auto stagger-container relative z-10">
            <div className="bg-gradient-to-br from-[#60c2ff] to-[#3ba3e0] rounded-[3rem] p-10 lg:p-16 shadow-[0_2rem_5rem_-1rem_rgba(96,194,255,0.4)] stagger-item opacity-0">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-4xl lg:text-[3.5rem] font-light text-white leading-tight mb-6 tracking-tight">
                    Запишитесь на PRP-терапию
                  </h2>
                  <p className="text-white/80 font-light text-lg mb-8 max-w-md">
                    Оставьте номер телефона. Специалист свяжется с вами и проконсультирует по нюансам плазмотерапии.
                  </p>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-white/20 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/20 shadow-xl">
                    <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); }}>
                      <input 
                        type="tel" 
                        placeholder="Ваш номер телефона" 
                        className="w-full px-6 py-5 rounded-full bg-white/90 focus:bg-white text-slate-800 outline-none transition-colors border border-transparent focus:border-[#60c2ff] font-light placeholder:text-slate-400"
                        required 
                      />
                      <button 
                        type="submit"
                        className="w-full px-6 py-5 bg-white text-[#60c2ff] font-medium rounded-full hover:bg-slate-50 hover:shadow-lg transition-all duration-300"
                      >
                        Записаться к специалисту
                      </button>
                    </form>
                    <div className="mt-8 flex flex-col gap-4 text-white">
                      <div className="flex items-center gap-4 hover:text-white/80 transition-colors cursor-pointer">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                          <Icon icon="solar:phone-calling-bold" className="text-xl" />
                        </div>
                        <span className="font-light text-lg">+7 (843) 204-55-11</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
          </div>

      <div className="relative z-20 w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
