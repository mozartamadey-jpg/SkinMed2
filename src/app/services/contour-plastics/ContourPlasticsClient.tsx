'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

export default function ContourPlasticsClient() {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const initObserver = () => {
      if (window.innerWidth > 768) { if (observer) { observer.disconnect(); observer = null; } document.querySelectorAll('.mobile-glow-active').forEach(el => el.classList.remove('mobile-glow-active')); return; }
      if (!observer) {
        observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('mobile-glow-active'); else entry.target.classList.remove('mobile-glow-active'); }); }, { rootMargin: "-40% 0px -40% 0px", threshold: 0 });
        setTimeout(() => { document.querySelectorAll('.scroll-glow-item').forEach(el => observer?.observe(el)); }, 500);
      }
    };
    initObserver(); window.addEventListener('resize', initObserver);
    return () => { window.removeEventListener('resize', initObserver); if (observer) observer.disconnect(); };
  }, []);

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

      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        <main className="w-full mt-12 sm:mt-16">

          {/* Breadcrumbs */}
          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <a href="/services/injection" className="hover:text-[#60c2ff] transition-colors duration-300">Инъекционная косметология</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">Контурная пластика</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img src="/images/services/injection/inj_contour_1775859317872.png" alt="Контурная пластика" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent z-10"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  Моделирование контуров лица
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  Контурная <br /><span className="font-serif italic text-[#60c2ff]/80">пластика</span>
                </h1>
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  Коррекция скул, подбородка и контуров лица сертифицированными филлерами <span className="font-medium text-white border-b border-[#60c2ff]/50">Radiesse, Belotero, Neauvia, Эстефил</span>. Бесплатная консультация в день процедуры.
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]">
                      Записаться на процедуру <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* О процедуре */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— О процедуре</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                Что такое контурная <span className="font-serif italic text-slate-400">пластика?</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center reveal-up opacity-0">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)] group aspect-[4/5]">
                <img src="https://optim.tildacdn.com/tild3136-6161-4037-b136-356265323439/-/format/webp/photo.jpg.webp" alt="Контурная пластика процедура" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]" />
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">
                  Контурная пластика — это инъекционный метод коррекции и моделирования черт лица с помощью дермальных филлеров на основе <span className="font-medium text-[#60c2ff]">гиалуроновой кислоты</span> и <span className="font-medium text-[#60c2ff]">гидроксиапатита кальция</span>. Процедура позволяет добиться гармоничных пропорций без хирургического вмешательства.
                </p>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">
                  В клинике «СкинМед» используются только сертифицированные препараты мировых лидеров: Radiesse, Belotero, Neauvia, Эстефил. Каждый пациент получает индивидуальный протокол, результат — естественный и гармоничный.
                </p>
                <ul className="space-y-3 mt-4">
                  {["Восстановление объёма средней трети лица", "Коррекция формы подбородка и скул", "Устранение носогубных складок и морщин марионеток", "Моделирование нижней челюсти (jawline)"].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start"><Icon icon="solar:check-circle-bold" className="text-emerald-500 text-xl shrink-0 mt-0.5" /><span className="text-base text-slate-700 font-normal">{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Показания */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Показания</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Кому <span className="font-serif italic text-slate-400">подойдёт?</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-container">
              {[
                { title: "Впалые щёки", desc: "Потеря объёма средней трети", icon: "solar:heart-linear" },
                { title: "Асимметрия лица", desc: "Коррекция пропорций", icon: "solar:pallete-2-linear" },
                { title: "Носогубные складки", desc: "Глубокие заломы", icon: "solar:eye-linear" },
                { title: "Скошенный подбородок", desc: "Моделирование профиля", icon: "solar:star-linear" },
                { title: "Брыли и птоз", desc: "Провисание нижней трети", icon: "solar:danger-triangle-linear" },
                { title: "Морщины марионеток", desc: "Складки у рта", icon: "solar:magic-stick-3-linear" },
                { title: "Нечёткий овал", desc: "Формирование jawline", icon: "solar:shield-check-linear" },
                { title: "Тёмные круги", desc: "Коррекция слёзной борозды", icon: "solar:waterdrop-linear" },
              ].map((item, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden cursor-pointer stagger-item opacity-0 scroll-glow-item">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                    <Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300">{item.title}</h3>
                  <p className="text-base text-slate-600 font-light mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Преимущества филлеров */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Технологии</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                Сертифицированные <br /> <span className="font-serif italic text-slate-400">филлеры</span>
              </h2>
            </div>
            <div className="flex flex-col stagger-container">
              <EditorialList items={[
                { title: "Radiesse", desc: "Филлер на основе гидроксиапатита кальция. Обеспечивает мгновенный объём и стимулирует выработку собственного коллагена. Эффект до 18 месяцев." },
                { title: "Belotero", desc: "Премиальная линейка филлеров от Merz Aesthetics. Идеальная интеграция в ткани — естественный результат даже в деликатных зонах (губы, периорбита)." },
                { title: "Neauvia", desc: "Инновационные филлеры с PEG-перекрёстным сшиванием. Высокая биосовместимость, минимальный отёк. Идеальны для зоны скул и подбородка." },
                { title: "Эстефил", desc: "Корейский филлер премиум-класса с высокой когезивностью. Стабильное моделирование объёма без миграции препарата." },
              ]} />
            </div>
          </section>

          {/* Этапы процедуры */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Процесс</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                Этапы <span className="font-serif italic text-slate-400">процедуры</span>
              </h2>
            </div>
            <div className="stagger-container flex flex-col">
              <EditorialList items={[
                "КОНСУЛЬТАЦИЯ: Врач-косметолог определяет зоны коррекции, подбирает филлер и объём, обсуждает желаемый результат.",
                "АНЕСТЕЗИЯ: Нанесение топического анестетика на зоны инъекций. Комфортное ожидание 15−20 минут.",
                "ВВЕДЕНИЕ ФИЛЛЕРА: Точечные микроинъекции канюлей или иглой с постоянным контролем симметрии и объёма.",
                "МОДЕЛИРОВАНИЕ: Мягкое распределение препарата и финальная коррекция формы. Длительность — 30−45 минут."
              ]} />
            </div>
          </section>

          {/* Цены */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full">
            <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)] reveal-up opacity-0">
              <div className="mb-12 border-b border-slate-100 pb-6">
                <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">Стоимость <span className="font-serif italic text-slate-400">услуг</span></h2>
              </div>
              <div className="flex flex-col divide-y divide-slate-100">
                {[
                  { name: 'Belotero Balance 1 мл', price: '22 000₽' },
                  { name: 'Belotero Volume 1 мл', price: '25 000₽' },
                  { name: 'Belotero Intense 1 мл', price: '25 000₽' },
                  { name: 'Belotero Lips 0.6 мл', price: '19 100₽' },
                  { name: 'Radiesse 0.8 мл', price: '23 000₽' },
                  { name: 'Radiesse 1.5 мл', price: '33 000₽' },
                  { name: 'Neauvia Organic Intense 1 мл', price: '22 000₽' },
                  { name: 'Neauvia Organic Intense LV 1 мл', price: '22 000₽' },
                  { name: 'Эстефил 1 мл', price: '17 000₽' },
                  { name: 'Revi Meso 2 мл', price: '15 000₽' },
                  { name: 'Коррекция носогубных складок', price: 'от 17 000₽' },
                  { name: 'Моделирование скул (2 мл)', price: 'от 34 000₽' },
                ].map((price, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{price.name}</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{price.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative z-10 reveal-up opacity-0">
            <div className="relative overflow-hidden rounded-[3rem] bg-[#050B14] p-10 md:p-16 lg:p-24 border border-white/10 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)]">
              <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#fbbf24]/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">
                    Идеальные <br /><span className="font-serif italic text-slate-400">контуры</span> лица
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">Запишитесь на бесплатную консультацию. Наш косметолог подберёт оптимальный филлер и объём для естественного результата.</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group">
                      <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                      <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3">
                        Бесплатная консультация <Icon icon="solar:arrow-right-linear" className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-64 h-64 rounded-full border border-[#60c2ff]/20 relative items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div>
                  <div className="text-center"><Icon icon="solar:magic-stick-3-bold-duotone" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" /><span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/50 leading-tight">SkinMed<br/>Premium Care</span></div>
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
