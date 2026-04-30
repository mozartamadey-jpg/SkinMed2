'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

export default function BiorevitalizationClient() {

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
        setTimeout(() => { document.querySelectorAll('.scroll-glow-item').forEach(el => observer?.observe(el)); }, 500);
      }
    };
    initObserver();
    window.addEventListener('resize', initObserver);
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

      {/* Content */}
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
              <span className="text-slate-700 font-medium">Биоревитализация</span>
            </div>
          </section>

          {/* Hero Section */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/services/injection/inj_biorev_1775859281338.png"
                  alt="Биоревитализация лица"
                  className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent z-10"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>

              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  Глубокое увлажнение и омоложение
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  Биоревитализация <br />
                  <span className="font-serif italic text-[#60c2ff]/80">лица</span>
                </h1>

                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  Возвращаем коже молодость и сияние. Инъекции <span className="font-medium text-white border-b border-[#60c2ff]/50">гиалуроновой кислоты</span> глубоко увлажняют, стимулируют регенерацию и дарят естественный результат без видимых следов вмешательства.
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
                    <Icon icon="solar:star-bold-duotone" className="text-2xl text-[#60c2ff]" />
                    <span>Эффект после 1 процедуры</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* О процедуре */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                — О процедуре
              </span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                Что такое <br /> <span className="font-serif italic text-slate-400">биоревитализация?</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center reveal-up opacity-0">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)] group aspect-[4/5]">
                <img
                  src="https://static.tildacdn.com/tild3137-3366-4966-a534-366666633938/11.jpg"
                  alt="Биоревитализация процедура"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]"
                />
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">
                  Биоревитализация — это инъекционный метод, направленный на глубокое увлажнение, лифтинг и восстановление кожи. Основу методики составляет введение <span className="font-medium text-[#60c2ff]">гиалуроновой кислоты</span>, которая запускает естественные процессы обновления клеток.
                </p>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">
                  Результаты видны уже после первого сеанса, а полный курс процедур позволяет достичь значительного улучшения внешнего вида кожи. В клинике «СкинМед» применяются исключительно сертифицированные биоревитализанты, и каждый пациент получает индивидуальный подход.
                </p>
                <ul className="space-y-3 mt-4">
                  {[
                    "Глубоко увлажняет кожу изнутри",
                    "Активизирует естественные процессы обновления клеток",
                    "Повышает эластичность и тургор кожи",
                    "Сглаживает мелкие морщинки и предупреждает их образование"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <Icon icon="solar:check-circle-bold" className="text-emerald-500 text-xl shrink-0 mt-0.5" />
                      <span className="text-base text-slate-700 font-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Показания */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                — Показания
              </span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Почему <span className="font-serif italic text-slate-400">биоревитализация?</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Процедура подойдёт, если Вы заметили у себя следующие изменения.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-container">
              {[
                { title: "Обезвоженная кожа", desc: "Сухость и шелушение", icon: "solar:waterdrop-linear" },
                { title: "Тусклый цвет лица", desc: "Бледный, серый оттенок", icon: "solar:sun-2-linear" },
                { title: "Мелкие морщины", desc: "Первые признаки старения", icon: "solar:eye-linear" },
                { title: "Потеря упругости", desc: "Снижение эластичности", icon: "solar:heart-linear" },
                { title: "Фотостарение", desc: "Реабилитация после солнца", icon: "solar:danger-triangle-linear" },
                { title: "Подготовка к лету", desc: "Защита от УФ", icon: "solar:pallete-2-linear" },
                { title: "Зона декольте и шея", desc: "Комплексное воздействие", icon: "solar:star-linear" },
                { title: "Кожа вокруг глаз", desc: "Деликатное увлажнение", icon: "solar:magic-stick-3-linear" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden cursor-pointer stagger-item opacity-0 scroll-glow-item"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                    <Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300">{item.title}</h3>
                  {item.desc && <p className="text-base text-slate-600 font-light mt-2">{item.desc}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Как проходит процедура — Этапы */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                — Процесс
              </span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                Этапы <span className="font-serif italic text-slate-400">процедуры</span>
              </h2>
            </div>
            <div className="stagger-container flex flex-col">
              <EditorialList items={[
                "КОНСУЛЬТАЦИЯ: Специалист проводит осмотр и подбирает оптимальный препарат, исходя из текущего состояния Вашей кожи.",
                "ПОДГОТОВКА: Тщательное очищение кожи и нанесение анестезирующего крема для максимального комфорта.",
                "ИНЪЕКЦИИ: Точечное введение гиалуроновой кислоты по специальной схеме в целевые участки.",
                "ЗАВЕРШЕНИЕ: Лёгкий массаж для равномерного распределения препарата. Весь процесс занимает около 30−40 минут."
              ]} />
            </div>
          </section>

          {/* Результаты */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0">
            <div className="mb-16 text-center">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Эффект</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Какие результаты <span className="font-serif italic text-slate-400">ожидать?</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto items-center">
              <div className="flex flex-col gap-4">
                {[
                  "Быстрое и глубокое увлажнение кожи",
                  "Заметное уменьшение мелких морщин",
                  "Повышенная упругость и сияющий внешний вид",
                  "Естественный эффект — без «перекачанности»",
                  "Стойкое омоложение после курса процедур"
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-sm">
                    <Icon icon="solar:check-circle-bold" className="text-2xl text-[#60c2ff]" />
                    <p className="text-slate-700 font-light text-lg">{t}</p>
                  </div>
                ))}
              </div>

              <div className="relative flex flex-col md:flex-row gap-6">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)] group flex-1">
                  <img
                    src="https://static.tildacdn.com/tild3339-6437-4564-a131-366134653834/photo.jpg"
                    alt="Биоревитализация результат"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium text-slate-800">Результат</div>
                </div>
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)] group flex-1 mt-4 md:mt-16">
                  <img
                    src="https://static.tildacdn.com/tild3462-3436-4062-b934-393665373238/--.jpg"
                    alt="Биоревитализация процесс"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium text-slate-800">Процедура</div>
                </div>
              </div>
            </div>
          </section>

          {/* Противопоказания */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto px-4 lg:px-8 reveal-up opacity-0">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-8 lg:p-12 border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-light text-slate-900 mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Icon icon="solar:check-circle-bold" className="text-emerald-500 text-xl" />
                  </div>
                  Показания
                </h3>
                <ul className="space-y-4">
                  {[
                    "Обезвоженная, сухая кожа",
                    "Бледный оттенок лица",
                    "Появление возрастных морщин",
                    "Утрата эластичности и упругости",
                    "Подготовка к активному солнцу",
                    "Восстановление кожи после лета"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span className="text-slate-600 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 rounded-[3rem] p-8 lg:p-12 border border-slate-100">
                <h3 className="text-2xl font-light text-slate-900 mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <Icon icon="solar:danger-triangle-bold-duotone" className="text-red-500 text-xl" />
                  </div>
                  Противопоказания
                </h3>
                <ul className="space-y-4">
                  {[
                    "Беременность и лактация",
                    "Обострение кожных заболеваний",
                    "Аутоиммунные заболевания",
                    "Приём антикоагулянтов",
                    "Герпес в зоне воздействия",
                    "Острые инфекционные заболевания"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start pb-4 border-b border-white last:border-0 last:pb-0">
                      <span className="text-red-400 mt-1">•</span>
                      <span className="text-slate-600 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Стоимость */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full">
            <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)] reveal-up opacity-0">
              <div className="mb-12 border-b border-slate-100 pb-6">
                <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">
                  Стоимость <span className="font-serif italic text-slate-400">услуг</span>
                </h2>
              </div>
              <div className="flex flex-col divide-y divide-slate-100">
                {[
                  { name: 'P-SHINE', price: '7 500₽' },
                  { name: 'NCTF 135 HA+', price: '14 000₽' },
                  { name: 'Вискодерм Скинко 5мл', price: '12 000₽' },
                  { name: 'REVI (EYE Correction) 1мл', price: '14 500₽' },
                  { name: 'REVI STYLE 1мл', price: '12 500₽' },
                  { name: 'Вискодерм СКИНКО Е 5мл', price: '13 000₽' },
                  { name: 'JALUPRO 3,0 мл', price: '14 000₽' },
                  { name: 'Belotero Hydro 1мл', price: '14 000₽' },
                  { name: 'Belotero Revive', price: '19 100₽' },
                  { name: 'REVI SILK 1мл', price: '15 000₽' },
                  { name: 'REVI STRONG 1мл', price: '15 000₽' },
                  { name: 'Профайло', price: '27 000₽' },
                  { name: 'Профайло Боди', price: '40 000₽' },
                  { name: 'PLINEST 2мл', price: '22 500₽' },
                  { name: 'PLINEST FAST 2мл', price: '22 500₽' },
                  { name: 'МЕЗОСКАЛЬПТ 1,5 мл', price: '21 000₽' },
                  { name: 'МЕЗОВАРТОН 1,5мл', price: '21 000₽' },
                  { name: 'СФЕРОГЕЛЬ Long Fine 0,5мл', price: '19 000₽' },
                  { name: 'МЕЗОКСАНТИН 1,5мл', price: '21 000₽' },
                  { name: 'Novocutan Y-Bio 2 мл', price: '21 000₽' },
                  { name: 'Bellarty Lift 2 мл', price: '18 000₽' },
                  { name: 'Bellarty Vita', price: '16 200₽' },
                ].map((price, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{price.name}</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{price.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16 reveal-up opacity-0">
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light tracking-tight text-slate-900 tracking-[-0.04em] leading-[1.0]">
                Часто задаваемые <span className="font-serif italic text-slate-400">вопросы</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4 stagger-container">
              {[
                { q: "Сколько процедур нужно для стабильного результата?", a: "Обычно курс состоит из 3−4 сеансов с интервалами 2−3 недели. Наш врач определит оптимальное число процедур после консультации." },
                { q: "Можно ли делать вокруг глаз?", a: "Да, процедура мягко воздействует на нежную кожу век, эффективно увлажняя её и уменьшая мелкие морщинки." },
                { q: "Подходит ли биоревитализация перед летним сезоном?", a: "Да, процедура помогает защитить кожу от негативного влияния ультрафиолета и способствует восстановлению после загара." },
                { q: "Чем отличается биоревитализация от филлеров?", a: "Филлеры создают дополнительный объём, в то время как биоревитализация улучшает качество кожи — увлажняет, разглаживает, придаёт сияние." },
                { q: "Как долго сохраняется эффект?", a: "Результат может сохраняться до 6 месяцев, после чего рекомендуется повторить курс." },
                { q: "Нужна ли подготовка к процедуре?", a: "За 2−3 дня до сеанса воздержитесь от приёма препаратов, разжижающих кровь. Избегайте алкоголя и чрезмерных физических нагрузок." },
              ].map((item, i) => (
                <details key={i} className="group bg-white rounded-3xl border border-slate-100 overflow-hidden [&_summary::-webkit-details-marker]:hidden stagger-item opacity-0">
                  <summary className="flex items-center justify-between p-6 lg:p-8 cursor-pointer list-none">
                    <span className="text-lg lg:text-xl font-medium text-slate-900 pr-8">{item.q}</span>
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center shrink-0 group-open:bg-slate-900 group-open:border-slate-900 group-open:text-white transition-colors">
                      <Icon icon="solar:alt-arrow-down-linear" className="text-xl group-open:rotate-180 transition-transform duration-300" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 lg:px-8 lg:pb-8 pt-0">
                    <p className="text-[17px] text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-6">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Block */}
          <section className="relative z-10 reveal-up opacity-0">
            <div className="relative overflow-hidden rounded-[3rem] bg-[#050B14] p-10 md:p-16 lg:p-24 border border-white/10 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)]">
              <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#fbbf24]/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">
                    Верните коже <br />
                    <span className="font-serif italic text-slate-400">сияние</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">
                    Запишитесь на бесплатную консультацию по биоревитализации. Наш врач подберёт оптимальный препарат и составит персональную программу омоложения.
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
</div>
  );
}
