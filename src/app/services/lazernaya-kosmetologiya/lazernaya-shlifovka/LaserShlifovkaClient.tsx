'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

export default function LaserShlifovkaClient() {
  
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const initObserver = () => {
      // Только для мобильных экранов (где элементы идут в одну колонку)
      if (window.innerWidth > 768) {
        if (observer) {
          observer.disconnect();
          observer = null;
        }
        document.querySelectorAll('.mobile-glow-active').forEach(el => el.classList.remove('mobile-glow-active'));
        return;
      }

      if (!observer) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('mobile-glow-active');
            } else {
              entry.target.classList.remove('mobile-glow-active');
            }
          });
        }, {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0
        });

        setTimeout(() => {
          const elements = document.querySelectorAll('.scroll-glow-item');
          elements.forEach(el => observer?.observe(el));
        }, 500);
      }
    };

    initObserver();
    window.addEventListener('resize', initObserver);

    return () => {
      window.removeEventListener('resize', initObserver);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen relative font-sans text-slate-800 flex flex-col">
      <AnimationsProvider />
      
      {/* Аврора Фоновое Свечение */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/90 via-[#f0f5fa]/80 to-[#e4eaf0]/90"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] bg-gradient-to-br from-[#60c2ff]/30 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "25s" }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] bg-gradient-to-tl from-[#80d0ff]/20 via-[#cddce9]/40 to-transparent blur-[5rem] opacity-40 mix-blend-normal animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}></div>
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-[100%] bg-gradient-to-bl from-[#b8e0ff]/30 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "30s", animationDirection: "reverse" }}></div>
        <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
      </div>

      {/* Контент */}
      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />

        <main className="w-full mt-12 sm:mt-16">
          
          {/* Breadcrumbs */}
          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <a href="/services/lazernaya-kosmetologiya" className="hover:text-[#60c2ff] transition-colors duration-300">Лазерная косметология</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">Лазерная шлифовка</span>
            </div>
          </section>

          {/* Premium Hero Section */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://static.tildacdn.com/tild3066-3135-4638-b463-333130633633/DSC09605.jpg"
                  alt="Лазерное омоложение"
                  className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/80 to-transparent z-10"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>

              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  Индивидуальный протокол
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase">
                  Лазерная <br />
                  <span className="font-serif italic text-[#60c2ff]/80">шлифовка</span> PicoCare
                </h1>
                
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  Избавим от дряблости, морщин и пигментных пятен за 1 визит. Лицо + Зона вокруг глаз = <span className="font-medium text-white border-b border-[#60c2ff]/50">34.000₽</span> (вместо 49.000₽), Шея 15.000₽ в подарок.
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button 
                      onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                      className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]"
                    >
                      Записаться на процедуру
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white font-light">
                    <Icon icon="solar:history-line-duotone" className="text-2xl text-[#60c2ff]" />
                    <span>Эффект за 1 процедуру</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Кому подходит */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                — Показания
              </span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Кому <span className="font-serif italic text-slate-400">подходит</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Мужчинам и женщинам 30-70 лет, которые заметили у себя следующие возрастные или эстетические изменения.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-container">
              {[
                { title: "Дряблость кожи", icon: "solar:leaf-linear" },
                { title: "Морщины", desc: "Мелкие и глубокие", icon: "solar:eye-linear" },
                { title: "Пигментация", desc: "Веснушки и пятна", icon: "solar:sun-2-linear" },
                { title: "Расширенные поры", icon: "solar:water-linear" },
                { title: "Неровный цвет", desc: "Серый тон лица", icon: "solar:magic-stick-3-linear" },
                { title: "Рубцы и стрии", icon: "solar:ruler-cross-pen-linear" },
                { title: "Постакне", desc: "Выравнивание рельефа", icon: "solar:star-fall-linear" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] group-[.mobile-glow-active]:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 group-[.mobile-glow-active]:border-[#60c2ff]/30 transition-all duration-[0.6s] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 group-[.mobile-glow-active]:-translate-y-2 overflow-hidden cursor-pointer stagger-item opacity-0 scroll-glow-item"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 group-[.mobile-glow-active]:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  
                  <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] group-[.mobile-glow-active]:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-[.mobile-glow-active]:rotate-12 group-hover:scale-110 group-[.mobile-glow-active]:scale-110">
                    <Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white group-[.mobile-glow-active]:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] group-[.mobile-glow-active]:text-[#60c2ff] transition-colors duration-300">{item.title}</h3>
                  {item.desc && <p className="text-sm text-slate-500 font-light mt-2 relative z-10">{item.desc}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Результаты (Слайдер / Картинки) */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0">
             <div className="mb-16 text-center">
               <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                 — Эффект
               </span>
               <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                 Результат <span className="font-serif italic text-slate-400">лечения</span>
               </h2>
               <p className="text-lg sm:text-xl text-slate-500 font-light max-w-4xl mx-auto leading-relaxed">
                 Лицо заметно свежеет и молодеет. Кожа обновляется, становится более плотной и сияющей. Первые изменения — через 7 дней. Максимальный лифтинг-эффект – через 1,5 месяца.
               </p>
             </div>
             
             <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto items-center">
               <div className="flex flex-col gap-4">
                 {[
                   "Исчезают пигментные пятна и веснушки",
                   "Разглаживается мелкая сеточка морщин",
                   "Подтягиваются носогубные складки и зона «второго подбородка»",
                   "Появляется сияние кожи, поры сужаются",
                   "Кожа становится упругой, выравнивается рельеф"
                 ].map((t, i) => (
                   <div key={i} className="flex items-center gap-4 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-sm">
                     <Icon icon="solar:check-circle-bold-duotone" className="text-2xl text-[#60c2ff]" />
                     <p className="text-slate-700 font-light text-lg">{t}</p>
                   </div>
                 ))}
               </div>

               <div className="relative flex flex-col md:flex-row gap-6">
                 <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)] group h-full">
                     <img 
                       src="https://static.tildacdn.com/tild6431-3861-4332-b134-643835623033/telegram-cloud-photo.jpg" 
                       alt="До и после лазерной шлифовки" 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]"
                     />
                     <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium text-slate-800">До / После</div>
                 </div>
                 <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)] group h-full mt-4 md:mt-16">
                     <img 
                       src="https://static.tildacdn.com/tild6436-6162-4037-b232-626163363364/telegram-cloud-docum.jpg" 
                       alt="До и после лазерной шлифовки" 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]"
                     />
                     <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium text-slate-800">До / После</div>
                 </div>
               </div>
             </div>
          </section>

          {/* Преимущества */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                — Технологии
              </span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                Преимущества <br /> <span className="font-serif italic text-slate-400">PicoCare (США)</span>
              </h2>
            </div>

            <div className="flex flex-col stagger-container">
              <EditorialList items={[
                { title: "Без боли", desc: "Процедура комфортна благодаря запатентованной технологии рассеивания пикосекундных импульсов. Чувствуется лишь легкое тепло." },
                { title: "Без реабилитации", desc: "Активное покраснение проходит за 3-36 часов. Период жестких корочек и активного шелушения полностью отсутствует." },
                { title: "Абсолютно безопасно", desc: "Холодный лазер не травмирует и не перегревает верхний слой кожи, воздействуя только на глубокие слои (эпидермис не спаливается)." },
                { title: "Мощный эффект за 1 сеанс", desc: "Одна процедура на аппарате PicoCare заменяет курс из 3-5 процедур на других, более старых лазерных системах (CO2, Erbium)." },
              ]} />
            </div>
          </section>

          {/* Видео */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0 text-center">
             <div className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.1)] border border-white/80 bg-white p-2">
               <video 
                 controls 
                 className="w-full aspect-video object-cover rounded-[2.5rem]"
                 poster="https://static.tildacdn.com/tild3066-3135-4638-b463-333130633633/DSC09605.jpg"
               >
                 <source src="https://smasclinicakzn.online/LHwww.mp4?dl=0" type="video/mp4" />
               </video>
             </div>
          </section>

          {/* Этапы и Цены */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full flex flex-col gap-24">
              
              <div className="w-full">
                <div className="mb-12 border-b border-slate-200/50 pb-6 reveal-up opacity-0">
                  <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                    — Процесс
                  </span>
                  <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                    Этапы <span className="font-serif italic text-slate-400">процедуры</span>
                  </h2>
                </div>
                <div className="stagger-container flex flex-col">
                  <EditorialList items={[
                { title: "КОНСУЛЬТАЦИЯ", desc: "Врач оценивает состояние кожи. Подбираются индивидуальные параметры аппарата для достижения желаемого результата." },
                { title: "ПРОЦЕДУРА", desc: "Тщательное очищение кожи от макияжа. Фото до. Процедура занимает 30−60 мин. Местная анестезия не требуется, лазер подается очень бережно." },
                { title: "ПОСЛЕ ПРОЦЕДУРЫ", desc: "На следующий день служба заботы узнает о Вашем состоянии. Через 1,5 месяца мы пригласим Вас на осмотр для оценки полученного результата." }
              ]} />
                </div>
              </div>

              {/* Цены - Элегантные табличные карточки */}
              <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)] reveal-up opacity-0">
                <div className="mb-12 border-b border-slate-100 pb-6">
                  <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">
                    Стоимость <span className="font-serif italic text-slate-400">услуг</span>
                  </h2>
                </div>
                <div className="flex flex-col divide-y divide-slate-100">
                  {[
                    { title: 'ЛАЗЕРНАЯ ШЛИФОВКА Лицо + Зона вокруг глаз', value: '34.000₽' },
                    { title: 'Лицо + шея (Акция)', value: '35.000₽' },
                    { title: 'ЛАЗЕРНАЯ ШЛИФОВКА Щечная область', value: '15.000₽' },
                    { title: 'LIGHT шлифовка (легкая) / лицо', value: '14.000₽' },
                  ].map((price, idx) => (
                    <div key={idx} className="flex justify-between items-center py-6 group hover:px-4 transition-all duration-300">
                      <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{price.title}</span>
                      <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">{price.value}</span>
                    </div>
                  ))}
                </div>
              </div>
          </section>

          {/* Dark CTA блок */}
          <section className="relative z-10 reveal-up opacity-0">
            <div className="relative overflow-hidden rounded-[3rem] bg-[#050B14] p-10 md:p-16 lg:p-24 border border-white/10 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)]">
              <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#fbbf24]/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">
                    Начните <br />
                    <span className="font-serif italic text-slate-400">обновление</span> кожи
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">
                    Оставьте заявку на бесплатную консультацию перед лазерной шлифовкой PicoCare. Наш врач свяжется с вами и ответит на все вопросы.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group">
                      <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                      <button 
                        onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                        className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3"
                      >
                        Бесплатная консультация
                        <Icon icon="solar:arrow-right-linear" className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="hidden lg:flex w-64 h-64 rounded-full border border-[#60c2ff]/20 relative items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div>
                  <div className="text-center">
                    <Icon icon="solar:magic-stick-3-bold-duotone" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" />
                    <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/50 leading-tight">SkinMed<br/>Premium Care</span>
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

      
      <AnimationsProvider />
    </div>
  );
}
