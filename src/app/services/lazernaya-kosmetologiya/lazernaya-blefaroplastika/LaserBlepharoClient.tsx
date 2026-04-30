'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

export default function LaserBlepharoClient() {
  
  useEffect(() => {
    // Add scroll glow logic for mobile only (<=1024px)
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    if (!isMobile) return;

    const observer = new IntersectionObserver((entries) => {
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

    // We defer slightly to ensure elements are rendered/animated by GSAP
    setTimeout(() => {
      const elements = document.querySelectorAll('.scroll-glow-item');
      elements.forEach(el => observer.observe(el));
    }, 500);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative font-sans text-slate-800 flex flex-col">
      
      {/* Аврора Фоновое Свечение (Premium WOW effect like on Injection Page) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
        {/* Soft base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/90 via-[#f0f5fa]/80 to-[#e4eaf0]/90"></div>
        
        {/* Animated Aurora meshes */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] bg-gradient-to-br from-[#60c2ff]/30 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "25s" }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] bg-gradient-to-tl from-[#80d0ff]/20 via-[#cddce9]/40 to-transparent blur-[5rem] opacity-40 mix-blend-normal animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}></div>
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-[100%] bg-gradient-to-bl from-[#b8e0ff]/30 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "30s", animationDirection: "reverse" }}></div>
        
        {/* Noise overlay for premium luxury texture */}
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
              <span className="text-slate-700 font-medium">Лазерная блефаропластика</span>
            </div>
          </section>

          {/* Premium Hero Section */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[500px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              {/* Background Image / Pattern */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://static.tildacdn.com/tild3038-3938-4264-a263-386133386132/-1.jpg"
                  alt="Лазерная блефаропластика"
                  className="w-full h-full object-cover opacity-50 mix-blend-overlay scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/80 to-transparent z-10"></div>
                {/* Glow behind text */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>

              <div className="relative z-20 px-6 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#60c2ff] animate-pulse"></span>
                  Аппаратная косметология
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6">
                  Лазерная <br />
                  <span className="font-serif italic text-[#60c2ff]/80">блефаропластика</span>
                </h1>
                
                <p className="text-lg md:text-2xl font-light text-slate-300 mb-10 max-w-2xl leading-relaxed">
                  Безоперационная подтяжка век в Казани. Открытый и ясный взгляд без скальпеля, швов и длительной реабилитации.
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button 
                      onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                      className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]"
                    >
                      Записаться на прием
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white font-light">
                    <Icon icon="solar:clock-circle-linear" className="text-2xl text-[#60c2ff]" />
                    <span>30 - 40 минут</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Альтернатива хирургии */}
          <section className="mb-24 lg:mb-40 grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center reveal-up opacity-0">
             <div className="text-left">
               <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-6">
                 — Суть метода
               </span>
               <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-8">
                 Альтернатива
                 <br />
                 <span className="font-serif italic text-slate-400">хирургии</span>
               </h2>
               <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg lg:text-xl max-w-xl">
                 <p>
                   Лазерная блефаропластика – это безопасный и эффективный метод подтяжки увядающей кожи век. 
                   Процедура проводится без хирургического вмешательства, что исключает риск рубцов, общего наркоза и изменения разреза глаз.
                 </p>
                 <div className="pl-6 md:pl-8 border-l-4 border-[#60c2ff]/40 py-2">
                   <p className="italic font-serif text-slate-800 text-lg md:text-xl leading-snug tracking-tight">
                     «Лазер стимулирует мощную выработку коллагена. Кожа сокращается, становится более плотной и упругой, мелкие морщинки разглаживаются.»
                   </p>
                 </div>
               </div>
             </div>
             <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] group shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.1)]">
               <img 
                 src="https://static.tildacdn.com/tild3763-3862-4336-b932-636535303536/photo.jpg" 
                 alt="Процедура лазерной блефаропластики" 
                 className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-[#050B14]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
             </div>
          </section>

          {/* Какие проблемы решаем (Glass cards exactly like Injection Page) */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-20 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                — Показания
              </span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Какие задачи <span className="font-serif italic text-slate-400">решаем</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Комплексное устранение эстетических проблем в параорбитальной области для ясного и открытого взгляда.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container">
              {[
                {
                  icon: "solar:eye-linear",
                  title: "Морщины",
                  desc: "Разглаживание «гусиных лапок» и мелкой сетки морщин вокруг глаз.",
                },
                {
                  icon: "solar:leaf-linear",
                  title: "Нависание верхних век",
                  desc: "Подтяжка ослабленной кожи и сокращение избыточного кожного лоскута.",
                },
                {
                  icon: "solar:cloud-linear",
                  title: "Мешки под глазами",
                  desc: "Устранение отечности и уплотнение тонкой кожи нижнего века.",
                },
                {
                  icon: "solar:graph-down-linear",
                  title: "Опущение уголков",
                  desc: "Лифтинг внешних уголков глаз, возвращение взгляду молодости и свежести.",
                },
                {
                  icon: "solar:scale-linear",
                  title: "Асимметрия век",
                  desc: "Мягкая и безопасная гармонизация разреза глаз без хирургического вмешательства.",
                },
                {
                  icon: "solar:droplets-linear",
                  title: "Темные круги",
                  desc: "Осветление пигментации и улучшение микроциркуляции для здорового тона.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-10 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 overflow-hidden cursor-pointer stagger-item opacity-0"
                >
                  {/* Subtle radial background glow on hover */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  
                  <div className="w-16 h-16 rounded-[1.25rem] bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                    <Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-medium text-slate-900 mb-3 group-hover:text-[#60c2ff] transition-colors duration-300">{item.title}</h3>
                  <p className="text-base text-slate-500 font-light leading-relaxed relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Video Section */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0 text-center">
             <div className="mb-16">
               <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                 — Процесс
               </span>
               <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                 Видео <span className="font-serif italic text-slate-400">до / после</span>
               </h2>
             </div>
             
             <div className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.1)] border border-white/80 bg-white p-2">
               <video 
                 controls 
                 className="w-full aspect-video object-cover rounded-[2.5rem]"
                 poster="https://static.tildacdn.com/tild3038-3938-4264-a263-386133386132/-1.jpg"
               >
                 <source src="https://smasclinicakzn.online/LB.mp4?dl=0" type="video/mp4" />
               </video>
             </div>
          </section>

          {/* Преимущества / Выбирают лучших (Editorial rows) */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 flex flex-col justify-between items-start gap-8 border-b border-slate-200/50 pb-8">
              <div>
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                  — Преимущества
                </span>
                <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                  Почему процедура <span className="font-serif italic text-slate-400">нравится</span> пациентам?
                </h2>
              </div>
            </div>

            <div className="flex flex-col stagger-container">
              <EditorialList items={[
                {
                  title: "Без хирургии и швов",
                  desc: "Отсутствие разрезов и риска изменения формы глаз. Процедура проводится амбулаторно и не требует наркоза.",
                },
                {
                  title: "Комплексный эффект",
                  desc: "Одновременное устранение морщин, подтяжка кожи, осветление темных кругов и улучшение текстуры в деликатной зоне век.",
                },
                {
                  title: "Короткая реабилитация",
                  desc: "Восстановление занимает всего несколько дней, в отличие от классической пластической хирургии (где сроки доходят до месяца).",
                },
                {
                  title: "Абсолютный комфорт",
                  desc: "Сильный крем-анестетик делает ощущения в момент лазерной вспышки воспринимаемыми как легкое тепло.",
                },
              ]} />
            </div>
          </section>
          
          {/* Этапы и Вопросы (FAQ) */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full flex flex-col gap-24">
              
              {/* Этапы */}
              <div className="w-full">
                <div className="mb-12 border-b border-slate-200/50 pb-6 reveal-up opacity-0">
                  <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                    — Процедура
                  </span>
                  <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                    Этапы <span className="font-serif italic text-slate-400">работы</span>
                  </h2>
                </div>
                <div className="stagger-container flex flex-col">
                  <EditorialList items={[
                { title: "Консультация", desc: "Осмотр врача-косметолога, исключение противопоказаний, выбор параметров." },
                { title: "Подготовка", desc: "Демакияж и нанесение мощного крема-анестетика (на 20-30 мин)." },
                { title: "Лазерное воздействие", desc: "Бережная обработка век фракционным лазером. Нанесение успокаивающего крема." }
              ]} />
                </div>
              </div>

              {/* FAQ */}
              <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)] reveal-up opacity-0">
                <div className="mb-12 border-b border-slate-100 pb-6">
                  <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">
                    Популярные <span className="font-serif italic text-slate-400">вопросы</span>
                  </h2>
                </div>
                <div className="flex flex-col gap-4 stagger-container">
                  {[
                    {
                      q: 'Как быстро я увижу результат?',
                      a: 'Первые изменения заметны после спадения отека (через 3-7 дней). Максимальный лифтинг-эффект раскрывается по мере синтеза нового коллагена — через 1–2 месяца после процедуры.'
                    },
                    {
                      q: 'Действительно ли это больно?',
                      a: 'Процедура вполне переносима. Мы наносим мощный крем-анестетик, поэтому во время сеанса вы будете чувствовать лишь тепло и легкое покалывание.'
                    },
                    {
                      q: 'Сколько процедур потребуется?',
                      a: 'Количество сеансов зависит от выраженности проблемы и индивидуальных особенностей кожи. В среднем требуется курс из 1-3 процедур с интервалом в 1 - 1.5 месяца.'
                    }
                  ].map((faq, idx) => (
                    <details key={idx} className="group bg-white rounded-[2rem] border border-slate-200/60 overflow-hidden [&_summary::-webkit-details-marker]:hidden hover:border-[#60c2ff]/40 transition-all duration-300 stagger-item opacity-0 cursor-pointer shadow-sm">
                      <summary className="flex items-center justify-between p-8 font-medium text-lg lg:text-xl text-slate-800 list-none focus:outline-none select-none">
                        <span className="pr-8">{faq.q}</span>
                        <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 group-open:bg-[#60c2ff] group-open:border-[#60c2ff] group-open:text-white transition-all duration-500">
                          <Icon icon="solar:add-linear" className="text-2xl group-open:rotate-45 transition-transform duration-500" />
                        </div>
                      </summary>
                      <div className="px-8 pb-8 pt-0">
                         <p className="text-lg text-slate-500 font-light leading-relaxed border-t border-slate-100 pt-6 mt-2">
                           {faq.a}
                         </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
          </section>

          {/* Dark CTA блок */}
          <section className="relative z-10 reveal-up opacity-0">
            <div className="relative overflow-hidden rounded-[3rem] bg-[#050B14] p-10 md:p-16 lg:p-24 border border-white/10 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)]">
              {/* Dark Decorative Elements */}
              <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#60c2ff]/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">
                    Откройте для себя
                    <br />
                    <span className="font-serif italic text-slate-400">ясный взгляд</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">
                    Запишитесь на лазерную блефаропластику. Оставьте заявку, и мы свяжемся с вами в течение 15 минут в рабочее время.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group">
                      <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                      <button 
                        onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                        className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3"
                      >
                        Оставить заявку
                        <Icon icon="solar:arrow-right-linear" className="text-xl" />
                      </button>
                    </div>

                    <a
                      href="tel:+78432022020"
                      className="group flex items-center gap-4 text-white hover:text-[#60c2ff] transition-colors focus:outline-none"
                    >
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#60c2ff] transition-colors">
                        <Icon icon="solar:phone-linear" className="text-xl" />
                      </div>
                      <span className="text-lg font-light tracking-wide">+7 (843) 202-20-20</span>
                    </a>
                  </div>
                </div>
                
                {/* Visual badge */}
                <div className="hidden lg:flex w-64 h-64 rounded-full border border-white/10 relative items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div>
                  <div className="text-center">
                    <Icon icon="solar:star-fall-bold" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" />
                    <span className="block text-xs uppercase tracking-[0.2em] text-white/50">SkinMed</span>
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
