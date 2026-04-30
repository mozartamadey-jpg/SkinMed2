'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function GiftCertificateClient() {
  useEffect(() => {
    // Add scroll glow observer
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-glow-active');
          } else {
            entry.target.classList.remove('scroll-glow-active');
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('.scroll-glow-item').forEach((item) => {
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);

  const dreamProcedures = [
    {
      icon: 'solar:face-scan-circle-linear',
      title: 'Лицо с эффектом «фотошопа»',
      desc: 'Комплексное омоложение на 5–7 лет: эффективная коррекция морщин, устранение глубоких заломов и выравнивание тона лица.',
    },
    {
      icon: 'solar:moon-stars-linear',
      title: 'Бархатистая и ровная кожа',
      desc: 'Лазерная шлифовка и ультразвуковой лифтинг (SMAS). Удаление пигментации, сужение пор и мощная стимуляция регенерации тканей.',
    },
    {
      icon: 'solar:lips-linear',
      title: 'Чувственные и пухлые губы',
      desc: 'Профессиональная контурная пластика. Создаем выразительный объем, сохраняя естественную форму и гармонию лица.',
    },
  ];

  const certificates = [
    { name: 'Премиум', price: '50 000 ₽', period: '12 месяцев', color: 'from-[#fbbf24]/20 via-[#fbbf24]/5 to-transparent', iconColor: 'text-[#fbbf24]' },
    { name: 'Оптимальный', price: '35 000 ₽', period: '12 месяцев', color: 'from-[#60c2ff]/20 via-[#60c2ff]/5 to-transparent', iconColor: 'text-[#60c2ff]' },
    { name: 'Стандарт', price: '15 000 ₽', period: '12 месяцев', color: 'from-slate-300/20 via-slate-300/5 to-transparent', iconColor: 'text-slate-400' },
  ];

  const whyUs = [
    {
      icon: 'solar:shield-check-linear',
      title: 'Безопасность и качество',
      desc: 'Мы используем только сертифицированные препараты и оборудование, одобренное Росздравнадзором и FDA.',
    },
    {
      icon: 'solar:leaf-linear',
      title: 'Эстетика естественности',
      desc: 'Наши врачи деликатно подчеркивают природную красоту, избегая эффекта «перекаченного» лица.',
    },
    {
      icon: 'solar:calendar-linear',
      title: 'Пролонгированный эффект',
      desc: 'Результаты процедур сохраняются максимально долго благодаря медицинскому подходу и высокой квалификации.',
    },
  ];

  return (
    <div className="min-h-screen relative font-sans text-slate-800">
      <AnimationsProvider />

      {/* Aurora Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/90 via-[#f0f5fa]/80 to-[#e4eaf0]/90"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] bg-gradient-to-br from-[#60c2ff]/30 to-transparent blur-[8rem] opacity-60 mix-blend-multiply animate-orbit" style={{ animationDuration: "25s" }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] bg-gradient-to-tl from-[#80d0ff]/20 via-[#cddce9]/40 to-transparent blur-[10rem] opacity-60 mix-blend-multiply animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}></div>
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-[100%] bg-gradient-to-bl from-[#b8e0ff]/30 to-transparent blur-[9rem] opacity-70 mix-blend-multiply animate-orbit" style={{ animationDuration: "30s", animationDirection: "reverse" }}></div>
        <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
      </div>

      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        
        <main className="w-full mt-12 sm:mt-16">
          
          {/* Breadcrumbs */}
          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">Подарки для любимых</span>
            </div>
          </section>

          {/* Premium Hero */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[600px] md:min-h-[750px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/gifts/hero.png" 
                  alt="Подарочные сертификаты SkinMed" 
                  className="w-full h-full object-cover opacity-[0.4] mix-blend-overlay scale-105 group-hover:scale-100 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/80 md:to-transparent"></div>
                
                {/* Glow effects */}
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#60c2ff]/20 transition-colors duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#fbbf24]/10 rounded-full blur-[100px] pointer-events-none"></div>
              </div>

              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 lg:px-20 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]"></span>
                  Красота и забота в одном подарке
                </div>
                
                <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-light text-white tracking-[-0.04em] mb-8 drop-shadow-2xl">
                  Подарочные <br />
                  <span className="font-serif italic text-[#60c2ff]/90">сертификаты</span> SkinMed
                </h1>
                
                <p className="text-lg md:text-xl font-light text-slate-300 mb-10 max-w-2xl leading-relaxed">
                  Ищете идеальный способ выразить свои чувства? Подарите возможность стать еще прекраснее. Подарочный сертификат на процедуры в клинику современной косметологии — это проявление истинного внимания и заботы.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button 
                      onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                      className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl min-w-[240px] gap-3"
                    >
                      <Icon icon="solar:gift-bold" className="text-xl" />
                      Приобрести онлайн
                    </button>
                  </div>
                  
                  <p className="text-sm text-slate-400 max-w-[200px] leading-tight">
                    Для оформления нажмите кнопку и оставьте заявку.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Promo Offer Alert */}
          <section className="mb-24 lg:mb-32 reveal-up opacity-0 transform -translate-y-12 relative z-30">
             <div className="max-w-5xl mx-auto px-4 md:px-0">
               <div className="bg-gradient-to-r from-[#050B14] to-[#12233b] border border-[#60c2ff]/30 rounded-3xl p-8 md:p-10 shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="flex items-start gap-5">
                   <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] shadow-[0_0_20px_rgba(251,191,36,0.3)] flex items-center justify-center shrink-0">
                     <Icon icon="solar:star-fall-bold" className="text-2xl text-white" />
                   </div>
                   <div>
                     <h3 className="text-xl font-medium text-white mb-2">Специальное предложение до 30 апреля!</h3>
                     <p className="text-slate-300 font-light leading-relaxed">
                       Успейте купить сертификат со <span className="text-[#fbbf24] font-medium">скидкой 5%</span> и сделайте её день по-настоящему особенным.
                     </p>
                   </div>
                 </div>
                 <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="shrink-0 whitespace-nowrap bg-white text-[#050B14] px-6 py-3 md:px-8 md:py-4 rounded-full font-medium hover:bg-slate-100 transition-colors shadow-lg">
                   Купить со скидкой
                 </button>
               </div>
             </div>
          </section>

          {/* Procedures */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Возможности</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Процедуры мечты для <br /><span className="font-serif italic text-slate-400">совершенного образа</span>
              </h2>
              <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
                Мы помогаем достичь результатов, которые обычно видны только после профессиональной ретуши. В SkinMed ваша кожа станет безупречной в реальности.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 stagger-container">
              {dreamProcedures.map((item, idx) => (
                <div key={idx} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-10 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 stagger-item opacity-0 scroll-glow-item">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="w-16 h-16 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-8 group-hover:bg-[#60c2ff] group-hover:rotate-12 transition-all duration-500">
                    <Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-normal text-slate-900 mb-4 tracking-tight group-hover:text-[#60c2ff] transition-colors duration-300">{item.title}</h3>
                  <p className="text-slate-600 font-light leading-relaxed text-[17px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Gift Cards Interactive */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="relative bg-[#050B14] rounded-[3rem] shadow-2xl mx-[-1rem] sm:mx-0 overflow-hidden py-20 px-4 sm:px-12 md:px-16">
              <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[120px] pointer-events-none"></div>
              
              <div className="text-center mb-20 reveal-up opacity-0 relative z-10">
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Сертификаты</span>
                <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">
                  Выберите свой <span className="font-serif italic text-slate-400">формат подарка</span>
                </h2>
                <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
                  Подарочный сертификат в SkinMed — это универсальный презент, который не подлежит обмену или возврату и действует 12 месяцев с даты покупки.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 lg:gap-10 max-w-6xl mx-auto stagger-container relative z-10">
                {certificates.map((cert, idx) => (
                  <div key={idx} className="group relative stagger-item opacity-0">
                    {/* Glow behind card */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${cert.color} rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700`}></div>
                    
                    {/* Card */}
                    <div className="relative bg-[#0d1727]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 h-full flex flex-col group-hover:border-[#60c2ff]/30 transition-all duration-500 overflow-hidden transform group-hover:-translate-y-2">
                       <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                          <Icon icon="solar:card-2-bold-duotone" className={`text-[6rem] ${cert.iconColor}`} />
                       </div>
                       
                       <div className="relative z-10">
                         <span className="block text-sm font-medium uppercase tracking-widest text-slate-400 mb-2">Номинал</span>
                         <h3 className="text-4xl lg:text-5xl font-light text-white tracking-tight mb-8">{cert.price}</h3>
                         
                         <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent mb-8"></div>
                         
                         <h4 className={`text-2xl font-serif italic ${cert.iconColor} mb-4`}>{cert.name}</h4>
                         <ul className="flex flex-col gap-3 mb-10">
                           <li className="flex items-center gap-3 text-slate-300 font-light">
                             <Icon icon="solar:check-circle-bold" className="text-[#60c2ff]" /> Действует {cert.period}
                           </li>
                           <li className="flex items-center gap-3 text-slate-300 font-light">
                             <Icon icon="solar:check-circle-bold" className="text-[#60c2ff]" /> Любые процедуры
                           </li>
                           <li className="flex items-center gap-3 text-slate-300 font-light">
                             <Icon icon="solar:check-circle-bold" className="text-[#60c2ff]" /> Премиальный сервис
                           </li>
                         </ul>
                       </div>

                       <div className="mt-auto relative z-10">
                          <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="w-full py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium group-hover:bg-[#60c2ff] group-hover:border-[#60c2ff] transition-all duration-500">
                             Оформить
                          </button>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Us (Features) */}
          <section className="mb-32 lg:mb-48 relative z-10 pt-16">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Преимущества</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Почему выбирают <span className="font-serif italic text-slate-400">SkinMed</span>
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6 stagger-container max-w-6xl mx-auto">
              {whyUs.map((feature, idx) => (
                 <div key={idx} className="group relative bg-white/60 backdrop-blur-xl border border-slate-200/50 rounded-[2rem] p-8 md:p-10 shadow-[0_0.5rem_1rem_-0.25rem_rgba(0,0,0,0.02)] hover:border-[#60c2ff]/30 transition-all duration-500 stagger-item opacity-0 scroll-glow-item">
                    <Icon icon={feature.icon} className="text-4xl text-[#60c2ff] mb-6 drop-shadow-sm" />
                    <h3 className="text-xl font-medium text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 font-light leading-relaxed">{feature.desc}</p>
                 </div>
              ))}
            </div>
          </section>

          {/* About & CTA Row */}
          <section className="mb-32 max-w-6xl mx-auto reveal-up opacity-0">
            <div className="bg-gradient-to-br from-[#050B14] to-[#0A1628] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)] relative overflow-hidden border border-white/5">
              <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#60c2ff]/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
              
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 relative z-10 items-center">
                <div>
                   <h2 className="text-[2.5rem] md:text-5xl font-light text-white tracking-[-0.04em] leading-[1.05] mb-8">
                     Ваша красота в руках <span className="font-serif italic text-[#60c2ff]/90">экспертов</span>
                   </h2>
                   <p className="text-lg text-slate-300 font-light leading-relaxed mb-6">
                     В нашей команде работают опытные врачи-косметологи, дерматологи, лазерологи и кандидаты медицинских наук. От главного врача до узких специалистов — мы обеспечиваем комплексный подход к здоровью.
                   </p>
                   <ul className="flex flex-col gap-4 text-white/80 font-light mb-10">
                     <li className="flex items-center gap-3">
                       <span className="w-8 h-8 rounded-full bg-[#60c2ff]/20 flex items-center justify-center shrink-0">
                         <Icon icon="solar:syringe-bold" className="text-[#60c2ff]" />
                       </span>
                       Инъекционные методики премиум-класса
                     </li>
                     <li className="flex items-center gap-3">
                       <span className="w-8 h-8 rounded-full bg-[#60c2ff]/20 flex items-center justify-center shrink-0">
                         <Icon icon="solar:magic-stick-3-bold" className="text-[#60c2ff]" />
                       </span>
                       Аппаратная косметология последнего поколения
                     </li>
                     <li className="flex items-center gap-3">
                       <span className="w-8 h-8 rounded-full bg-[#60c2ff]/20 flex items-center justify-center shrink-0">
                         <Icon icon="solar:health-bold" className="text-[#60c2ff]" />
                       </span>
                       Медицинский контроль каждого этапа
                     </li>
                   </ul>
                   <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="px-8 py-4 bg-white text-[#050B14] rounded-full font-medium hover:bg-slate-100 transition-transform duration-300 hover:scale-105 shadow-xl">
                     Записаться на консультацию
                   </button>
                </div>
                <div className="hidden lg:flex justify-center items-center relative">
                   <div className="absolute inset-0 bg-[#60c2ff]/20 blur-[60px] rounded-full"></div>
                   <div className="w-[400px] h-[400px] rounded-full border border-white/10 relative flex items-center justify-center group pointer-events-none">
                     <div className="absolute inset-4 rounded-full border-t border-[#60c2ff]/30 animate-[spin-slow_20s_linear_infinite]"></div>
                     <div className="absolute inset-8 rounded-full border-b border-[#fbbf24]/20 animate-[spin-slow_15s_linear_infinite_reverse]"></div>
                     <Icon icon="solar:shield-check-bold-duotone" className="text-[120px] text-[#60c2ff] opacity-80 group-hover:scale-110 transition-transform duration-1000" />
                   </div>
                </div>
              </div>
            </div>
          </section>

        </main>
        <div className="mt-20"></div>
        <div className="relative z-20 w-full mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
