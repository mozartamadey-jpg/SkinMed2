'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function AestheticCosmetologyClient() {

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('scroll-glow-active');
          else entry.target.classList.remove('scroll-glow-active');
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('.scroll-glow-item').forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: 'solar:hand-stars-linear',
      title: 'Массаж лица',
      desc: 'Классический, лимфодренажный и скульптурный массаж для лифтинга, тонуса и расслабления лицевых мышц.',
      href: '/services/aesthetic/face-massage',
      image: '/images/services/aesthetic/aesthetic_face_massage_1777581006574.png',
    },
    {
      icon: 'solar:scissors-linear',
      title: 'Механическая чистка',
      desc: 'Глубокое ручное очищение пор от комедонов и загрязнений с использованием ложки Уно и стерильных инструментов.',
      href: '/services/aesthetic/mechanical-cleaning',
      image: '/images/services/aesthetic/aesthetic_mech_cleaning_1777581028573.png',
    },
    {
      icon: 'solar:heart-linear',
      title: 'Уход за лицом',
      desc: 'Комплексная 6-этапная процедура: демакияж, эксфолиация, УЗ-чистка, ручная чистка, маска, SPF-защита.',
      href: '/services/aesthetic/face-care',
      image: '/images/services/aesthetic/aesthetic_face_care_1777581050005.png',
    },
    {
      icon: 'solar:test-tube-linear',
      title: 'Пилинг Биорепил',
      desc: 'Инновационный двухфазный TCA-пилинг без шелушения. Всесезонная процедура для обновления и сияния кожи.',
      href: '/services/aesthetic/biorepeel-peeling',
      image: '/images/services/aesthetic/aesthetic_biorepeel_1777581069881.png',
    },
    {
      icon: 'solar:sun-2-linear',
      title: 'Жёлтый пилинг',
      desc: 'Ретиноевый пилинг для активного обновления клеток, лечения акне и выравнивания тона кожи.',
      href: '/services/lazernaya-kosmetologiya/yellow-peel',
      image: '/images/services/aesthetic/aesthetic_yellow_peel_1777581089895.png',
    },
  ];

  const advantages = [
    { icon: 'solar:shield-check-linear', title: 'Безопасность', desc: 'Все процедуры проводятся сертифицированными врачами-косметологами с использованием стерильных инструментов и премиальной косметики' },
    { icon: 'solar:user-check-linear', title: 'Индивидуальный подход', desc: 'Каждая процедура адаптируется под тип кожи, её состояние и задачи пациента — нет шаблонных решений' },
    { icon: 'solar:bolt-linear', title: 'Видимый результат', desc: 'Сияющая, чистая, подтянутая кожа уже после первого визита. Курсовые программы закрепляют и усиливают эффект' },
    { icon: 'solar:star-linear', title: 'Премиальная косметика', desc: 'Работаем исключительно с профессиональными марками: медицинские линейки, которые недоступны в розничной продаже' },
  ];

  return (
    <div className="min-h-screen relative font-sans text-slate-800 flex flex-col">
      <AnimationsProvider />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fdfdfd]">
      </div>

      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        <main className="w-full mt-12 sm:mt-16">

          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">Эстетическая косметология</span>
            </div>
          </section>

          {/* Asymmetric Hero Секция */}
          <section className="mb-32 lg:mb-48 pt-10 min-h-[70vh] flex flex-col justify-center">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center stagger-container">
              {/* Left Column: Text */}
              <div className="text-left">
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#0ea5e9] mb-6 stagger-item opacity-0">
                  — Направление клиники
                </span>
                
                <h1 className="text-[clamp(2.75rem,13vw,3.5rem)] sm:text-6xl lg:text-[6.5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-8 stagger-item opacity-0 relative z-10">
                  Эстетическая
                  <br />
                  <span className="font-serif italic text-slate-400">косметология</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-slate-500 font-light max-w-2xl leading-relaxed mb-12 stagger-item opacity-0">
                  Профессиональный уход, чистки, массаж и пилинги для поддержания красоты и здоровья Вашей кожи. Врачи-косметологи СкинМед подберут индивидуальную программу ухода.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6 stagger-item opacity-0">
                  <button
                    onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                    className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-full font-medium transition-all duration-300 hover:bg-[#0ea5e9] focus:outline-none"
                  >
                    Записаться на консультацию
                  </button>
                  
                  <a
                    href="#services"
                    className="group w-full sm:w-auto px-6 py-4 text-slate-500 rounded-full font-light transition-all duration-500 hover:text-slate-900 focus:outline-none flex items-center justify-center gap-3"
                  >
                    Смотреть услуги
                    <Icon icon="solar:arrow-down-linear" className="text-xl transition-transform group-hover:translate-y-1" />
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Medical Imagery */}
              <div className="relative h-[600px] lg:h-[800px] w-full stagger-item opacity-0 hidden lg:block">
                <div className="absolute inset-0 rounded-[2rem] lg:rounded-[4rem] overflow-hidden">
                  <Image 
                    src="/images/services/aesthetic/hero.png" 
                    alt="Эстетическая косметология" 
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Advantages */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Наш подход</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Почему <span className="font-serif italic text-slate-400">СкинМед</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-y-16 stagger-container">
              {advantages.map((item, index) => (
                <div key={index} className="flex flex-col border-t border-slate-200 pt-6 group stagger-item opacity-0">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#0ea5e9]/10">
                    <Icon icon={item.icon} className="text-2xl text-[#0ea5e9]" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight transition-colors group-hover:text-[#0ea5e9]">{item.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Giant Editorial Stats (Inline, No Cards) */}
          <section className="mb-32 lg:mb-48 border-y border-slate-200/50 py-16 lg:py-24 relative z-10">
            <div className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center lg:items-start text-center lg:text-left gap-16 lg:gap-8 max-w-6xl mx-auto stagger-container">
              {[
                { value: "5", suffix: "ЛЕТ", label: "Проверенного клинического опыта" },
                { value: "40", suffix: "+", label: "Протоколов эстетического ухода" },
                { value: "2", suffix: "К+", label: "Благодарных пациентов клиники" },
                { value: "100", suffix: "%", label: "Премиальная космецевтика" },
              ].map((stat, index) => (
                <div key={index} className="flex-1 w-full lg:w-auto min-w-[200px] stagger-item opacity-0 group scroll-glow-item flex flex-col items-center lg:items-start">
                  <div className="flex items-baseline mb-4 justify-center lg:justify-start">
                    <span className="text-[6rem] sm:text-[5rem] lg:text-[7rem] font-light text-slate-400 tracking-[-0.04em] leading-none group-hover:text-slate-800 transition-colors duration-700">
                      {stat.value}
                    </span>
                    <span className="text-3xl sm:text-2xl lg:text-3xl font-light text-[#0ea5e9] ml-1.5 tracking-tighter transition-colors duration-700">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="w-12 h-[2px] bg-[#0ea5e9]/30 mb-5 transform origin-center lg:origin-left group-hover:scale-x-150 group-hover:bg-[#0ea5e9] transition-all duration-500"></div>
                  <div className="text-sm text-slate-700 font-medium uppercase tracking-[0.12em] leading-relaxed max-w-[260px] lg:max-w-[210px] group-hover:text-slate-900 transition-colors duration-700">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Сетка услуг - Bento Grid Layout */}
          <section id="services" className="mb-20 lg:mb-32">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-[#0ea5e9] mb-4">
                <span className="w-8 h-px bg-[#0ea5e9]" />
                Услуги
                <span className="w-8 h-px bg-[#0ea5e9]" />
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 tracking-tight leading-[1.1] mb-4">
                Эстетическая <span className="text-[#0ea5e9]">косметология</span>
              </h2>
              <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
                Выберите процедуру для подробной информации о методике, результате и стоимости
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container max-w-6xl mx-auto">
              {services.map((service, index) => (
                <a key={index} href={service.href}
                  className="group relative flex flex-col outline-none stagger-item opacity-0 transition-all duration-700 hover:-translate-y-2 no-underline"
                >
                  <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden bg-slate-50 mb-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/5 transition-opacity duration-700 group-hover:opacity-0" />
                    
                    <div className="absolute bottom-6 right-6 z-20 flex h-12 w-12 -translate-x-2 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                      <Icon icon="solar:arrow-right-up-linear" className="text-xl text-slate-900" />
                    </div>
                  </div>

                  <div className="flex flex-col px-2">
                    <div className="mb-3 flex items-center gap-3">
                      <Icon icon={service.icon} className="text-2xl text-[#0ea5e9]" />
                      <h3 className="text-xl lg:text-2xl font-normal tracking-tight text-slate-900 transition-colors group-hover:text-[#0ea5e9]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="line-clamp-3 text-sm lg:text-base font-light leading-relaxed text-slate-500">
                      {service.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="relative z-10 reveal-up opacity-0">
            <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-slate-900 p-10 md:p-16 lg:p-24 border border-white/5">
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-[2.5rem] sm:text-5xl lg:text-[4.5rem] font-light text-white tracking-[-0.02em] leading-[1.1] mb-6">
                    Подарите коже <br />
                    <span className="font-serif italic text-slate-300">сияние</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-10 max-w-lg mx-auto lg:mx-0">
                    Запишитесь на бесплатную консультацию врача-косметолога. Подберём индивидуальную программу ухода именно для Вашей кожи.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group w-full sm:w-auto">
                      <div className="absolute inset-0 bg-white/40 rounded-full blur-[20px] opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>
                      <button onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 w-full sm:w-auto px-10 py-5 bg-white text-slate-900 rounded-full font-medium shadow-[0_0_2rem_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 hover:bg-slate-50 focus:outline-none flex justify-center items-center gap-3">
                        Бесплатная консультация
                        <Icon icon="solar:arrow-right-linear" className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-64 h-64 rounded-full border border-white/5 relative items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-white/10 animate-[spin-slow_15s_linear_infinite]"></div>
                  <div className="absolute inset-6 rounded-full border border-white/5 border-dashed animate-[spin-slow_20s_linear_infinite_reverse]"></div>
                  <div className="text-center mt-2">
                    <Icon icon="solar:heart-bold-duotone" className="text-3xl text-white/80 mx-auto mb-3" />
                    <span className="block text-xs uppercase tracking-[0.3em] text-white/50 leading-tight">SkinMed<br/>Premium</span>
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
