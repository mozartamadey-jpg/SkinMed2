'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image';

type ServiceImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

function ServiceImage(props: ServiceImageProps) {
  const { src, alt, sizes, priority = false, className = '' } = props;
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={90}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      className={className}
    />
  );
}

export default function AcneTreatmentClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const initObserver = () => {
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

  const indications = [
    { title: "Активная стадия акне", desc: "Гнойничковые и воспалительные высыпания на лице, спине или груди.", icon: "solar:danger-triangle-linear" },
    { title: "Постакне и пятна", desc: "Застойные пятна и изменения цвета кожи после разрешения воспалений.", icon: "solar:star-linear" },
    { title: "Расширенные поры", desc: "Повышенная выработка себума, жирный блеск и черные точки (комедоны).", icon: "solar:waterdrop-linear" },
    { title: "Неровный рельеф", desc: "Наличие застойных инфильтратов и неровностей на поверхности кожи.", icon: "solar:medical-kit-linear" },
    { title: "Подростковое акне", desc: "Гормональные высыпания, требующие бережного медицинского подхода.", icon: "solar:clock-circle-linear" },
    { title: "Частые рецидивы", desc: "Возвращение прыщей даже после использования наружных косметических средств.", icon: "solar:heart-linear" },
  ];

  const advantages = [
    { title: "Высокая эффективность", desc: "Свет блокирует размножение бактерий P.acnes — главной причины воспалений, а также нормализует работу сальных желез." },
    { title: "Многоцелевое действие", desc: "Помимо лечения свежих элементов, аппарат деликатно осветляет пигментацию постакне и улучшает текстуру кожи." },
    { title: "Без повреждения и шрамов", desc: "Процедура абсолютно атравматична. Здоровые ткани остаются в полной сохранности, и риск рубцевания отсутствует." },
    { title: "Быстрый видимый результат", desc: "Воспаления начинают подсыхать и уменьшаться в размерах уже после первых сеансов терапии." }
  ];

  const steps = [
    { title: "Диагностика", desc: "Консультация дерматолога, сбор анамнеза, осмотр состояний кожи. При необходимости — назначение анализов для выявления истинной причины." },
    { title: "Подготовка кожи", desc: "Тщательный демакияж и мягкое очищение кожи профессиональными средствами перед аппаратным воздействием." },
    { title: "Аппаратное воздействие", desc: "Врач обрабатывает проблемные зоны импульсами света на аппарате Clearlight IPL. Во время вспышек пациент ощущает лишь легкое тепло." },
    { title: "Постпроцедурный уход", desc: "Нанесение успокаивающих масок или гелей, а затем крема с фактором защиты SPF для безопасного восстановления." }
  ];

  const aftercare = [
    { title: "Защита от солнца", desc: "Обязательно наносите крем с SPF 50 перед выходом на улицу.", icon: "solar:sun-2-linear" },
    { title: "Отказ от скрабов", desc: "Избегайте агрессивных химических пилингов и скрабов первые 5–7 дней.", icon: "solar:hand-stars-linear" },
    { title: "Мягкое очищение", desc: "Используйте в уходе деликатные гели и пенки для умывания без спирта.", icon: "solar:waterdrop-linear" },
    { title: "Термальный покой", desc: "Воздержитесь от посещения бани, сауны и солярия на 1 неделю.", icon: "solar:temperature-linear" }
  ];

  const faqData = [
    { q: "Сколько процедур потребуется?", a: "Курс назначается индивидуально врачом. В среднем требуется от 3 до 6 сеансов с интервалом в 2–4 недели для стойкого лечебного эффекта." },
    { q: "Больно ли это?", a: "Нет, лечение фотосистемой Clearlight IPL переносится комфортно. Пациент ощущает только мягкое тепло. Встроенная система охлаждения защищает кожу от ожогов." },
    { q: "Что будет с кожей сразу после сеанса?", a: "Возможно легкое покраснение (эритема), которое самостоятельно проходит в течение пары часов. Вы можете сразу вернуться к своим привычным делам." },
    { q: "Можно ли вылечить акне навсегда?", a: "Аппаратные методики — это наиболее эффективный способ быстро погасить вспышку воспалений и убрать следы. Однако акне — это хроническое заболевание, и для долгосрочной ремиссии важен комплексный подход, назначенный врачом-дерматологом, включая домашний уход." }
  ];

    const doctors = [
    { name: "Качурина Екатерина Левановна", role: "Главный врач, косметолог, дерматовенеролог", exp: "Опыт 15 лет", img: "/images/doctors/kachyurina.jpg" },
    { name: "Мухаметзянова Алсу Ренатовна", role: "Врач-косметолог, дерматолог", exp: "Опыт 10 лет", img: "/images/doctors/muhametzanova.jpg" },
    { name: "Воробьёва Лилия Николаевна", role: "Врач-дерматолог, трихолог, косметолог", exp: "Опыт 12 лет", img: "/images/doctors/vorobyova.jpg" }
  ];

  return (
    <div className="min-h-screen relative font-sans text-slate-800 bg-[#FAFAFA] flex flex-col">
      <AnimationsProvider />
      
      {/* Background Aurora Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] bg-gradient-to-br from-[#60c2ff]/20 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "25s" }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] bg-gradient-to-tl from-[#80d0ff]/20 via-[#cddce9]/30 to-transparent blur-[5rem] opacity-40 mix-blend-normal animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen pt-8 sm:pt-16">
        <div className="w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex-1 flex flex-col pb-24">
          <Header />

          <main className="w-full mt-12 sm:mt-16 flex flex-col gap-20 md:gap-32 pb-24">
            
            {/* Breadcrumbs */}
            <section className="mb-[-2rem] reveal-up opacity-0">
              <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-slate-500 font-light">
                <Link href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</Link>
                <Icon icon="mdi:chevron-right" className="text-slate-400" />
                <Link href="/services/lazernaya-kosmetologiya" className="hover:text-[#60c2ff] transition-colors duration-300">Лазерная косметология</Link>
                <Icon icon="mdi:chevron-right" className="text-slate-400" />
                <span className="text-slate-700 font-medium">Лечение акне</span>
              </div>
            </section>

            {/* Hero Section */}
            <section className="reveal-up opacity-0 scroll-glow-item group">
              <div className="bg-[#050B14] rounded-[2rem] md:rounded-[3rem] p-8 md:py-16 md:px-20 min-h-[500px] md:min-h-0 relative overflow-hidden shadow-2xl transition-all duration-700 group-[.mobile-glow-active]:shadow-[#60c2ff]/30 hover:shadow-[0_2rem_5rem_-1rem_rgba(96,194,255,0.3)] flex flex-col md:flex-row items-center border border-white/10">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-l from-transparent via-[#050B14]/80 to-[#050B14] z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent z-10 md:hidden"></div>
                  <ServiceImage src="/images/acne-treatment-hero-v3.png" alt="Лечение акне лазером" sizes="100vw" priority className="w-full h-full object-cover object-center opacity-80 md:opacity-100 mix-blend-lighten scale-[1.02] md:group-hover:scale-[1.04] transition-transform duration-[2s]" />
                </div>
                
                <div className="relative z-20 w-full md:w-1/2 flex flex-col items-start gap-8 mt-auto md:mt-0 pt-32 md:pt-0">
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-[#60c2ff] px-5 py-2.5 rounded-full border border-white/20 shadow-sm">
                    <Icon icon="solar:bolt-linear" className="text-lg" />
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white">Чистая кожа без высыпаний</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-light text-white leading-[1.1] uppercase tracking-tight drop-shadow-lg">
                    Лазерное <br/> <span className="font-serif italic text-[#60c2ff]">лечение акне</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl font-light text-slate-300 leading-relaxed max-w-lg border-l-2 border-[#60c2ff]/50 pl-5">
                    Уничтожение бактерий, снятие воспаления и нормализация работы сальных желез. Верните своей коже безупречный тон и гладкость.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start gap-4 mt-4 w-full">
                    <div className="relative inline-flex group/btn w-full sm:w-auto">
                      <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                      <button 
                        onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                        className="relative w-full px-8 py-4.5 bg-[#60c2ff] text-white rounded-full text-base sm:text-lg font-medium transition-transform duration-500 hover:scale-105 shadow-[0_0.5rem_1.5rem_rgba(96,194,255,0.3)] flex gap-2 items-center justify-center"
                      >
                        Бесплатная консультация
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Indications Section */}
            <section className="reveal-up opacity-0 flex flex-col items-center max-w-6xl mx-auto w-full">
              <div className="mb-12 text-center flex flex-col items-center">
                <span className="text-xs sm:text-sm uppercase tracking-widest text-[#60c2ff] font-bold mb-3">— Показания</span>
                <h2 className="text-3xl md:text-[3.5rem] font-light text-slate-900 leading-tight">
                  Кому подойдёт <span className="font-serif italic text-slate-400">лечение</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
                {indications.map((item, idx) => (
                  <div key={idx} className="group/card relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 sm:p-10 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.15)] hover:border-[#60c2ff]/30 transition-all duration-500 hover:-translate-y-2 flex flex-col items-start cursor-default">
                    <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 lg:mb-8 group-hover/card:bg-[#60c2ff] group-hover/card:shadow-[0_0_20px_rgba(96,194,255,0.4)] transition-all duration-500 transform group-hover/card:-translate-y-2 group-hover/card:scale-110">
                      <Icon icon={item.icon} className="text-[32px] text-[#60c2ff] group-hover/card:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-medium text-slate-900 group-hover/card:text-[#60c2ff] transition-colors mb-3 leading-snug">{item.title}</h3>
                    <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cases Section (Before & After) */}
            <section className="reveal-up opacity-0 relative z-10 max-w-7xl mx-auto w-full">
               <div className="mb-16 text-center">
                 <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Эффект</span>
                 <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                   Результат <span className="font-serif italic text-slate-400">лечения</span>
                 </h2>
               </div>
               
               <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
                 <div className="flex flex-col md:flex-row gap-4 sm:gap-6 bg-white/50 p-4 sm:p-6 rounded-[3rem] border border-white">
                   <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.1)] group flex-1 aspect-square sm:aspect-auto">
                     <ServiceImage src="/images/acne-treatment-before-v3.png" alt="До" sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-full object-cover md:group-hover:scale-[1.03] transition-transform duration-700" />
                     <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-xs px-4 py-2 rounded-full font-bold tracking-widest">ДО</div>
                   </div>
                   <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-8">
                     <div className="w-[1px] h-full bg-slate-200"></div>
                   </div>
                   <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.15)] group flex-1 aspect-square sm:aspect-auto">
                     <ServiceImage src="/images/acne-treatment-after-v3.png" alt="После" sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-full object-cover md:group-hover:scale-[1.03] transition-transform duration-700" />
                     <div className="absolute top-6 right-6 bg-[#60c2ff] text-white text-xs px-4 py-2 rounded-full font-bold tracking-widest shadow-md">ПОСЛЕ</div>
                   </div>
                 </div>
               </div>
            </section>

            {/* Problem & Tech Section */}
            <section className="reveal-up opacity-0 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-8 md:p-16 shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.05)] max-w-7xl mx-auto scroll-glow-item group">
               <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
                  <span className="text-xs uppercase tracking-widest text-[#60c2ff] font-bold">— Механизм действия</span>
                  <h2 className="text-3xl md:text-5xl font-light text-slate-900 leading-tight">
                     Как работает <span className="font-serif italic text-[#60c2ff]">аппаратное лечение</span>
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mt-4">
                     Основа терапии — это световое или лазерное воздействие (например, на аппарате <span className="font-medium text-[#60c2ff]">Clearlight IPL</span> или <span className="font-medium text-[#60c2ff]">PicoCare</span>). 
                     Световые импульсы проникают вглубь кожи и взаимодействуют с порфирином — специфическим ферментом бактерий P.acnes.
                  </p>
                  <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                     В результате происходит разрушение самих бактерий и стерилизация очага воспаления. Параллельно тепловая энергия сужает сосуды, снижая выработку кожного сала (себума) и устраняя застойные красные пятна постакне.
                  </p>
               </div>
               <div className="w-full lg:w-1/2 relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl">
                  <ServiceImage src="/images/acne-treatment-process-v2.png" alt="Процесс лечения" sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover md:group-hover:scale-[1.03] transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
               </div>
            </section>

            {/* Advantages (Numbered List) */}
            <section className="reveal-up opacity-0 flex flex-col items-center max-w-5xl mx-auto w-full">
              <h2 className="text-3xl md:text-[3.5rem] font-light text-slate-900 mb-16 text-center">
                Преимущества <span className="font-serif italic text-[#60c2ff]">методики</span>
              </h2>
              <div className="flex flex-col gap-6 w-full">
                {advantages.map((adv, idx) => (
                  <div key={idx} className="flex gap-6 sm:gap-8 items-start bg-white/50 backdrop-blur-sm p-6 sm:p-8 rounded-[2rem] border border-white/60 hover:bg-white/80 transition-colors">
                    <span className="text-4xl sm:text-[3.5rem] font-extralight text-[#60c2ff]/30 leading-none tabular-nums shrink-0">0{idx + 1}</span>
                    <div className="flex flex-col gap-2 pt-2">
                       <h3 className="text-xl sm:text-2xl font-medium text-slate-800">{adv.title}</h3>
                       <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">{adv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Steps Section */}
            <section className="reveal-up opacity-0 relative z-10 w-full max-w-6xl mx-auto scroll-glow-item group">
              <div className="bg-gradient-to-br from-[#FAFAFA] to-white rounded-[3rem] p-8 md:p-16 xl:p-20 shadow-[0_1rem_4rem_-1rem_rgba(0,0,0,0.05)] border border-white relative overflow-hidden transition-all duration-700 group-[.mobile-glow-active]:shadow-[#60c2ff]/20">
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-bl from-[#60c2ff]/5 to-transparent rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
                
                <h2 className="text-[2.5rem] md:text-5xl lg:text-[4rem] font-light text-slate-900 tracking-tight leading-tight mb-16 text-center relative z-10">
                  Как проходит <span className="font-serif italic text-[#60c2ff]">процедура</span>
                </h2>

                <div className="relative z-10 flex flex-col gap-16 md:gap-20">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-16 items-start group/step">
                      <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center text-2xl md:text-4xl text-[#60c2ff] font-light font-serif shadow-lg group-hover/step:bg-[#60c2ff] group-hover/step:text-white transition-colors duration-500 shrink-0 border border-slate-50 relative z-10">
                        {idx + 1}
                      </div>
                      <div className="flex-1 border-t border-slate-200/60 pt-6 md:pt-8 md:border-t-0 md:pt-0 relative">
                        <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-4">{step.title}</h3>
                        <p className="text-[17px] text-slate-600 font-light leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Prices Section */}
            <section className="reveal-up opacity-0 max-w-4xl mx-auto w-full">
              <div className="mb-12 text-center">
                <h2 className="text-[2.5rem] md:text-5xl font-light text-slate-900 tracking-tight">Стоимость <span className="font-serif italic text-slate-400">лечения</span></h2>
                <p className="text-lg text-slate-500 font-light mt-4">Комплексная терапия акне в клинике СкинМед.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.05)] rounded-[2.5rem] p-6 sm:p-12">
                 <div className="flex flex-col divide-y divide-slate-100">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 gap-4 hover:px-4 transition-all duration-300 group/price">
                       <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover/price:text-[#60c2ff]">Фототерапия (Clearlight IPL) - Лицо</span>
                       <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100 shrink-0">15 900 ₽</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 gap-4 hover:px-4 transition-all duration-300 group/price">
                       <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover/price:text-[#60c2ff]">Фототерапия (Clearlight IPL) - Нос/Подбородок</span>
                       <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100 shrink-0">8 000 ₽</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 gap-4 hover:px-4 transition-all duration-300 group/price">
                       <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover/price:text-[#60c2ff]">Химические пилинги (по показаниям)</span>
                       <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100 shrink-0">от 5 400 ₽</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 gap-4 hover:px-4 transition-all duration-300 group/price">
                       <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover/price:text-[#60c2ff]">Чистка лица (Комплексная)</span>
                       <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100 shrink-0">6 500 ₽</span>
                    </div>
                 </div>
              </div>
            </section>

            {/* Doctors Section */}
            <section className="reveal-up opacity-0 flex flex-col items-center w-full max-w-7xl mx-auto">
               <div className="mb-16 text-center">
                <span className="text-xs uppercase tracking-widest text-[#60c2ff] font-bold mb-3">— Эксперты</span>
                <h2 className="text-[2.5rem] md:text-5xl font-light text-slate-900 tracking-tight leading-tight">
                  Процедуру проводят <span className="font-serif italic text-slate-400">врачи</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4 sm:px-0">
                {doctors.map((doc, i) => (
                  <div key={i} className="group/doc bg-white rounded-[2rem] overflow-hidden shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 flex flex-col">
                    <div className="aspect-[4/5] w-full relative overflow-hidden bg-slate-50">
                      <ServiceImage src={doc.img} alt={doc.name} sizes="(max-width: 1024px) 50vw, 25vw" className="w-full h-full object-cover object-top transition-transform duration-700 md:group-hover/doc:scale-[1.04]" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-[#60c2ff] shadow-sm flex items-center gap-1">
                        <Icon icon="solar:verified-check-bold" /> Высшее мед.
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-1 bg-white relative z-10">
                      <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-2 group-hover/doc:text-[#60c2ff] transition-colors">{doc.name}</h3>
                      <p className="text-base text-slate-500 font-light mb-4">{doc.role}</p>
                      <div className="mt-auto inline-flex items-center gap-2 bg-[#FAFAFA] border border-slate-100 px-4 py-2 rounded-xl w-fit">
                        <Icon icon="solar:medal-star-linear" className="text-[#60c2ff] text-xl" />
                        <span className="text-sm font-medium text-slate-600">{doc.exp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Aftercare */}
            <section className="reveal-up opacity-0 max-w-6xl mx-auto w-full bg-[#FAFAFA] p-8 md:p-16 rounded-[3rem] border border-slate-100 shadow-sm">
                <div className="mb-12 text-center">
                  <h2 className="text-3xl md:text-5xl font-light text-slate-900 tracking-tight">Рекомендации <span className="font-serif italic text-slate-400">после терапии</span></h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {aftercare.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-[2rem] shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] border border-slate-50 flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 text-[#60c2ff]">
                         <Icon icon={item.icon} className="text-2xl" />
                      </div>
                      <h4 className="text-lg font-medium text-slate-800 mb-2">{item.title}</h4>
                      <p className="text-base font-normal text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
            </section>

            {/* FAQ Form */}
            <section className="reveal-up opacity-0 flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-7xl mx-auto w-full items-start">
               <div className="w-full lg:w-1/3 sticky top-32">
                 <h2 className="text-3xl md:text-5xl font-light text-slate-900 leading-tight mb-6">
                   Вопросы <br className="hidden lg:block"/><span className="font-serif italic text-slate-400">и ответы</span>
                 </h2>
                 <p className="text-lg text-slate-500 font-light mb-8">Собрали для вас ответы на часто задаваемые вопросы о лечении акне.</p>
                 <button 
                  onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                  className="hidden lg:flex px-8 py-4 bg-white border border-[#60c2ff] text-[#60c2ff] rounded-full font-medium hover:bg-[#60c2ff] hover:text-white transition-all duration-300 items-center justify-center gap-2"
                 >
                   Задать свой вопрос <Icon icon="solar:arrow-right-linear" className="text-xl" />
                 </button>
               </div>
               
               <div className="w-full lg:w-2/3 flex flex-col gap-4">
                 {faqData.map((item, i) => (
                   <div 
                    key={i} 
                    className={`bg-white border rounded-[2rem] overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-[#60c2ff]/30 shadow-[0_1rem_2.5rem_-0.5rem_rgba(96,194,255,0.1)]' : 'border-slate-100 hover:border-slate-200'}`}
                   >
                     <button 
                       className="w-full px-6 py-6 sm:px-8 sm:py-8 flex items-center justify-between text-left gap-4"
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                     >
                       <span className="text-lg sm:text-xl font-medium text-slate-800">{item.q}</span>
                       <div className={`w-10 h-10 shrink-0 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 bg-[#60c2ff]/10 text-[#60c2ff]' : ''}`}>
                         <Icon icon="solar:alt-arrow-down-linear" className="text-xl" />
                       </div>
                     </button>
                     <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                       <p className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-[17px] text-slate-600 font-light leading-relaxed border-t border-slate-50">
                         {item.a}
                       </p>
                     </div>
                   </div>
                 ))}
               </div>
            </section>

            {/* Dark CTA Bottom */}
            <section className="reveal-up opacity-0">
               <div className="relative overflow-hidden rounded-[3rem] bg-[#050B14] p-10 md:p-16 lg:p-24 border border-white/10 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)] max-w-6xl mx-auto mt-8 group/cta">
                  <div className="absolute top-0 right-0 w-[50vw] h-[50vw] sm:w-96 sm:h-96 bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none group-hover/cta:bg-[#60c2ff]/20 transition-colors duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] sm:w-80 sm:h-80 bg-[#fbbf24]/5 rounded-full blur-[80px] pointer-events-none"></div>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                  
                  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
                    <div className="flex-1 text-center lg:text-left">
                      <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-light text-white tracking-[-0.04em] leading-[1.05] mb-6">
                        Оставьте акне <br className="hidden sm:block"/> <span className="font-serif italic text-slate-400">в прошлом</span>
                      </h2>
                      <p className="text-slate-400 font-light text-lg md:text-xl mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Запишитесь на первичную консультацию врача. Мы проведем диагностику и составим персональный план лечения.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                        <div className="relative inline-flex group/btn w-full sm:w-auto">
                          <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                          <button 
                            onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                            className="relative z-10 w-full sm:w-auto px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 text-lg"
                          >
                            Записаться на прием
                            <Icon icon="solar:arrow-right-linear" className="text-xl" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="hidden lg:flex w-64 h-64 shrink-0 rounded-full border border-[#60c2ff]/20 relative items-center justify-center">
                      <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div>
                      <div className="text-center">
                        <Icon icon="solar:health-bold-duotone" className="text-5xl text-[#60c2ff] mx-auto mb-3 opacity-90" />
                        <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/50 leading-tight">SkinMed<br/>Healthy Skin</span>
                      </div>
                    </div>
                  </div>
               </div>
            </section>

          </main>
            </div>
          </div>

      <div className="relative z-20 w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
