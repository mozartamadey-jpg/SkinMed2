'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

export default function ScarRemovalClient() {

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const initObserver = () => {
      if (window.innerWidth > 768) {
        if (observer) { observer.disconnect(); observer = null; }
        document.querySelectorAll('.mobile-glow-active').forEach(el => el.classList.remove('mobile-glow-active'));
        return;
      }
      if (!observer) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('mobile-glow-active');
            else entry.target.classList.remove('mobile-glow-active');
          });
        }, { rootMargin: "-40% 0px -40% 0px", threshold: 0 });
        setTimeout(() => {
          document.querySelectorAll('.scroll-glow-item').forEach(el => observer?.observe(el));
        }, 500);
      }
    };

    initObserver();
    window.addEventListener('resize', initObserver);
    return () => { window.removeEventListener('resize', initObserver); if (observer) observer.disconnect(); };
  }, []);

  // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
  // DATA: rewritten premium content
  // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

  const cases = [
    { before: "https://static.tildacdn.com/tild3033-6565-4362-b066-373365386134/-5.jpg", after: "https://optim.tildacdn.com/tild6333-6363-4131-a337-636138393730/-/cover/351x351/center/center/-/format/webp/-7.jpg.webp", descBefore: "Женщина, 33 года. Рубцы постакне на лице", descAfter: "Здоровый цвет кожи и ровный рельеф после 1 процедуры" },
    { before: "https://optim.tildacdn.com/tild3063-3238-4961-b430-633064303934/-/cover/351x351/center/center/-/format/webp/-4.jpg.webp", after: "https://optim.tildacdn.com/tild3766-3164-4164-a363-313131376262/-/cover/351x351/center/center/-/format/webp/-3.jpg.webp", descBefore: "Женщина, 36 лет. Глубокие рубцы на лице", descAfter: "Улучшение текстуры и тона после 4 процедур" },
    { before: "https://optim.tildacdn.com/tild3737-6664-4135-b562-386531353233/-/cover/351x351/center/center/-/format/webp/-2.jpg.webp", after: "https://optim.tildacdn.com/tild3664-6266-4165-b436-336234626263/-/cover/351x351/center/center/-/format/webp/-1.jpg.webp", descBefore: "Девушка, 28 лет. Рубцы постакне", descAfter: "Гладкая кожа и ровный рельеф после 2 процедур" },
  ];

  const advantages = [
    { title: "Результат за 1 сеанс", desc: "Видимое улучшение рельефа кожи и уменьшение глубины рубцовой ткани уже после первой процедуры." },
    { title: "Без боли", desc: "Пикосекундный «холодный» лазер PicoCare не перегревает ткани — процедура проходит комфортно, без анестезии." },
    { title: "Минимум процедур", desc: "Энергия импульса PicoCare в 3 раза выше аналогов, что сокращает курс лечения до 1–3 процедур." },
    { title: "Комплексный подход", desc: "Сочетание двух лазеров — PicoCare и CO2 Bison — позволяет работать с любыми типами рубцов, включая гипертрофические." },
    { title: "Научная основа", desc: "Лечение проводится по протоколам с доказанной эффективностью. Все процедуры выполняет врач-дерматолог с профильным опытом от 3 лет." },
  ];

  const contraindications = [
    { title: "Онкологические заболевания", icon: "solar:shield-cross-linear" },
    { title: "Иммуносупрессивные состояния", icon: "solar:virus-linear" },
    { title: "Новообразования", icon: "solar:danger-triangle-linear" },
    { title: "Острые инфекции", icon: "solar:thermometer-linear" },
    { title: "Беременность и лактация", icon: "solar:heart-pulse-linear" },
    { title: "Наличие имплантов в зоне", icon: "solar:bone-linear" },
  ];

  const steps = [
    { title: "Консультация", desc: "Врач анализирует состояние кожи, определяет причину появления рубцов и составляет индивидуальный план лечения. Вы получите ответы на все вопросы и чёткое понимание ожидаемого результата." },
    { title: "Процедура", desc: "Тщательное очищение кожи, фотофиксация исходного состояния. Врач подбирает лазер и индивидуальные параметры. Длительность сеанса — 15–30 минут. После процедуры наносится восстанавливающий крем." },
    { title: "Забота после", desc: "Персональные рекомендации по уходу. На следующий день служба заботы узнает о вашем самочувствии. Через месяц — контрольный осмотр для оценки результата." },
  ];

  const pricesPicoCare = [
    { name: "PicoCare S", price: "5.000₽" },
    { name: "PicoCare M", price: "6.000₽" },
    { name: "PicoCare L", price: "8.000₽" },
    { name: "PicoCare XL", price: "9.000₽" },
    { name: "PicoCare Full", price: "15.000₽" },
  ];

  const pricesZones = [
    { name: "Малая зона", price: "6.000₽" },
    { name: "Средняя зона", price: "8.000₽" },
    { name: "Большая зона", price: "9.000₽" },
    { name: "Зона L", price: "12.000₽" },
    { name: "Зона XL", price: "15.000₽" },
    { name: "Курс зона M", price: "25.000₽" },
    { name: "Курс зона L", price: "30.000₽" },
  ];

  const pricesCO2 = [
    { name: "CO2 S", price: "2.000₽" },
    { name: "CO2 M", price: "4.000₽" },
    { name: "CO2 L", price: "4.900₽" },
    { name: "CO2 XL", price: "9.900₽" },
  ];

  return (
    <div className="min-h-screen relative font-sans text-slate-800 flex flex-col">
      <AnimationsProvider />
      
      {/* Aurora Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/90 via-[#f0f5fa]/80 to-[#e4eaf0]/90"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] bg-gradient-to-br from-[#60c2ff]/30 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "25s" }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] bg-gradient-to-tl from-[#80d0ff]/20 via-[#cddce9]/40 to-transparent blur-[5rem] opacity-40 mix-blend-normal animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}></div>
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-[100%] bg-gradient-to-bl from-[#b8e0ff]/30 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "30s", animationDirection: "reverse" }}></div>
        <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        <main className="w-full mt-12 sm:mt-16">

          {/* в•ђв•ђв•ђв•ђв•ђв•ђв•ђ Breadcrumbs в•ђв•ђв•ђв•ђв•ђв•ђв•ђ */}
          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <a href="/services/lazernaya-kosmetologiya" className="hover:text-[#60c2ff] transition-colors duration-300">Лазерная косметология</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">Удаление рубцов и шрамов</span>
            </div>
          </section>

          {/* в•ђв•ђв•ђв•ђв•ђв•ђв•ђ HERO в•ђв•ђв•ђв•ђв•ђв•ђв•ђ */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/scar_removal_hero.png"
                  alt="Лазерная шлифовка рубцов PicoCare"
                  className="w-full h-full object-cover object-right md:object-center opacity-50 md:opacity-70 mix-blend-overlay scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>

              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  PicoCare + CO2 Bison
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  Шлифовка <br />
                  <span className="font-serif italic text-[#60c2ff]/80">рубцов</span> и шрамов
                </h1>
                
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed border-l-2 border-[#60c2ff]/40 pl-4 md:pl-6">
                  Возвращаем гладкость кожи пикосекундным «холодным» лазером. Видимый результат с первого сеанса — без боли и длительной реабилитации.
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
                    <Icon icon="solar:verified-check-bold-duotone" className="text-2xl text-[#60c2ff]" />
                    <span>Эффект за 1 процедуру</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CASES: Before / After */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0">
            <div className="mb-16 text-center">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Результаты</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Фото <span className="font-serif italic text-slate-400">до и после</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
                Честные результаты наших пациентов. Каждый случай уникален — врач подбирает индивидуальный протокол лечения.
              </p>
            </div>

            <div className="flex flex-col gap-12 max-w-6xl mx-auto">
              {cases.map((c, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-6 items-stretch">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)] group aspect-square md:aspect-auto">
                    <img src={c.before} alt={c.descBefore} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                    <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur text-xs px-3 py-1.5 rounded-full font-medium text-slate-800">До</div>
                    <div className="absolute top-4 left-4 bg-[#050B14]/70 backdrop-blur text-[11px] px-3 py-1.5 rounded-full text-white/80 max-w-[85%]">{c.descBefore}</div>
                  </div>
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)] group aspect-square md:aspect-auto">
                    <img src={c.after} alt={c.descAfter} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                    <div className="absolute bottom-4 right-4 bg-[#60c2ff]/90 backdrop-blur text-xs px-3 py-1.5 rounded-full font-medium text-white">После</div>
                    <div className="absolute top-4 right-4 bg-[#050B14]/70 backdrop-blur text-[11px] px-3 py-1.5 rounded-full text-white/80 max-w-[85%] text-right">{c.descAfter}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* в•ђв•ђв•ђв•ђв•ђв•ђв•ђ ADVANTAGES в•ђв•ђв•ђв•ђв•ђв•ђв•ђ */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Преимущества</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                Почему <br /> <span className="font-serif italic text-slate-400">выбирают нас</span>
              </h2>
            </div>

            <div className="flex flex-col stagger-container">
              <EditorialList items={advantages} />
            </div>
          </section>

          {/* в•ђв•ђв•ђв•ђв•ђв•ђв•ђ WHO IT'S FOR ═══════ */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0">
            <div className="text-center mb-16">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Показания</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Кому <span className="font-serif italic text-slate-400">подходит</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
                Мужчинам и женщинам старше 18 лет, которые хотят вернуть коже гладкость и избавиться от видимых дефектов.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container max-w-5xl mx-auto">
              {[
                { title: "Рубцы постакне", desc: "Следы после угревой болезни", icon: "solar:face-scan-circle-linear" },
                { title: "Послеоперационные шрамы", desc: "Любой давности и глубины", icon: "solar:adhesive-plaster-linear" },
                { title: "Растяжки (стрии)", desc: "На теле, животе, бёдрах", icon: "solar:body-linear" },
                { title: "Атрофические рубцы", desc: "Углублённые дефекты кожи", icon: "solar:minimalistic-magnifer-linear" },
                { title: "Гипертрофические рубцы", desc: "Выпуклые, плотные рубцы", icon: "solar:layers-linear" },
                { title: "Травматические шрамы", desc: "Последствия травм и ожогов", icon: "solar:shield-warning-linear" },
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
                  <p className="text-sm text-slate-500 font-light mt-2 relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════ CONTRAINDICATIONS ═══════ */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-5xl mx-auto reveal-up opacity-0">
            <div className="text-center mb-12">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Ограничения</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                Противо<span className="font-serif italic text-slate-400">показания</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contraindications.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                    <Icon icon={item.icon} className="text-xl text-red-400" />
                  </div>
                  <p className="text-slate-700 font-light">{item.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════ STEPS ═══════ */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full">
            <div className="mb-12 border-b border-slate-200/50 pb-6 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Процесс</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                Этапы <span className="font-serif italic text-slate-400">процедуры</span>
              </h2>
            </div>
            <div className="stagger-container flex flex-col">
              <EditorialList items={steps} />
            </div>
          </section>

          {/* ═══════ PRICING ═══════ */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full flex flex-col gap-10 reveal-up opacity-0">
            
            {/* PicoCare prices */}
            <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-8 md:p-14 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)]">
              <div className="mb-10 border-b border-slate-100 pb-6">
                <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">
                  Шлифовка рубцов <span className="font-serif italic text-slate-400">PicoCare</span>
                </h2>
              </div>
              <div className="flex flex-col divide-y divide-slate-100">
                {pricesPicoCare.map((p, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center py-5 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{p.name}</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Zone prices */}
            <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-8 md:p-14 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)]">
              <div className="mb-10 border-b border-slate-100 pb-6">
                <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">
                  Шлифовка <span className="font-serif italic text-slate-400">по зонам</span>
                </h2>
              </div>
              <div className="flex flex-col divide-y divide-slate-100">
                {pricesZones.map((p, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center py-5 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{p.name}</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CO2 prices */}
            <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-8 md:p-14 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)]">
              <div className="mb-10 border-b border-slate-100 pb-6">
                <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">
                  CO2 <span className="font-serif italic text-slate-400">Bison</span>
                </h2>
              </div>
              <div className="flex flex-col divide-y divide-slate-100">
                {pricesCO2.map((p, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center py-5 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{p.name}</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════ CTA ═══════ */}
          <section className="relative z-10 reveal-up opacity-0">
            <div className="relative overflow-hidden rounded-[3rem] bg-[#050B14] p-10 md:p-16 lg:p-24 border border-white/10 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)]">
              <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#fbbf24]/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-4xl sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">
                    Верните коже <br />
                    <span className="font-serif italic text-slate-400">гладкость</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg md:text-xl mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    Запишитесь на бесплатную консультацию. Врач осмотрит рубцы, подберёт лазер и составит индивидуальный план лечения.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group w-full sm:w-auto">
                      <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                      <button 
                        onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                        className="relative z-10 w-full sm:w-auto px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center justify-center gap-3 text-lg"
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
