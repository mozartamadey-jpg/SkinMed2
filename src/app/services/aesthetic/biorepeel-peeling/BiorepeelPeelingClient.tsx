'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

export default function BiorepeelPeelingClient() {

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

  const indications = [
    { icon: 'solar:sun-2-linear', title: 'Фотостарение', desc: 'Пигментация, мелкие морщины, потеря тонуса из-за UV-повреждений' },
    { icon: 'solar:danger-triangle-linear', title: 'Акне и постакне', desc: 'Активные высыпания, рубцы и неровная текстура после акне' },
    { icon: 'solar:pallete-2-linear', title: 'Тусклый цвет лица', desc: 'Серый, безжизненный тон кожи, потеря естественного сияния' },
    { icon: 'solar:eye-linear', title: 'Расширенные поры', desc: 'Визуально заметные поры, неровный рельеф кожи' },
    { icon: 'solar:waterdrop-linear', title: 'Обезвоженность', desc: 'Сухость, стянутость, потеря эластичности кожи' },
    { icon: 'solar:star-linear', title: 'Профилактика старения', desc: 'Поддержание молодости и качества кожи в любом возрасте' },
  ];

  const advantages = [
    { title: 'Без шелушения', desc: 'В отличие от классических TCA-пилингов, BioRePeel не вызывает видимого шелушения. Вы выходите из клиники с сияющей кожей — можно сразу вернуться к обычной жизни.' },
    { title: 'Всесезонность', desc: 'Процедуру можно проводить круглый год, включая летние месяцы. Формула препарата разработана так, чтобы минимизировать фоточувствительность кожи.' },
    { title: 'Двухфазная формула', desc: 'Уникальная технология: кислоты-эксфолианты (TCA 35%) работают одновременно с биостимулирующими компонентами (аминокислоты, витамины B2, C, ферменты), обеспечивая обновление + питание.' },
    { title: 'Мгновенный результат', desc: 'Сияние и гладкость кожи заметны сразу после процедуры. Максимальный эффект нарастает в течение 5–7 дней по мере завершения обновления клеток.' },
    { title: 'Совместимость', desc: 'Отлично сочетается с биоревитализацией, мезотерапией и инъекционными процедурами. Идеальная подготовка кожи перед «уколами красоты».' },
  ];

  const composition = [
    { icon: 'solar:test-tube-linear', title: 'TCA 35%', desc: 'Трихлоруксусная кислота — стимулирует глубокое обновление кожи' },
    { icon: 'solar:atom-linear', title: 'Салициловая кислота', desc: 'Очищает поры, регулирует работу сальных желёз' },
    { icon: 'solar:heart-linear', title: 'Аминокислоты', desc: 'Строительный материал для новых клеток, антиоксидантная защита' },
    { icon: 'solar:bolt-linear', title: 'Витамин C', desc: 'Осветление пигментации, стимуляция синтеза коллагена' },
  ];

  const steps = [
    { title: 'Очищение', desc: 'Тщательный демакияж и обезжиривание кожи для оптимального проникновения активных компонентов пилинга.' },
    { title: 'Нанесение BioRePeel', desc: 'Врач наносит двухфазный состав на кожу и массирует до полного впитывания. Ощущается лёгкое покалывание — это работают кислоты.' },
    { title: 'Экспозиция', desc: 'Состав остаётся на коже 5–7 минут для максимального эффекта. Врач контролирует реакцию кожи на протяжении всего времени.' },
    { title: 'Нейтрализация', desc: 'Остатки препарата удаляются, наносится успокаивающая маска и SPF-защита. Кожа мгновенно выглядит свежей и сияющей.' },
  ];

  const prices = [
     { name: 'Пилинг BioRePeel лицо', price: 'от 5 000 ₽' },
     { name: 'BioRePeel лицо и шея', price: 'от 7 000 ₽' },
     { name: 'BioRePeel лицо, шея и декольте', price: 'от 9 000 ₽' },
     { name: 'Пилинг спины', price: 'от 6 000 ₽' },
     { name: 'Курс BioRePeel', price: 'от 18 000 ₽' },
     { name: 'Консультация косметолога', price: 'Бесплатно' },];

  const faq = [
    { q: 'Что такое BioRePeel?', a: 'BioRePeel CL3 — это инновационный двухфазный пилинг итальянского производства на основе TCA 35%. Уникальная формула сочетает отшелушивающее действие трихлоруксусной кислоты с биостимулирующим эффектом аминокислот, витаминов и ферментов.' },
    { q: 'Больно ли делать пилинг BioRePeel?', a: 'Процедура сопровождается лёгким покалыванием и ощущением тепла — это абсолютно нормальная реакция кожи на кислотную активность. Неприятных болезненных ощущений нет.' },
    { q: 'Сколько процедур нужно?', a: 'Для заметного стойкого результата рекомендуется курс из 4–6 процедур с интервалом 7–14 дней. Видимый эффект проявляется уже после первого сеанса.' },
    { q: 'Можно ли делать летом?', a: 'Да! Это одно из ключевых преимуществ BioRePeel — всесезонность. Формула разработана так, что не повышает фоточувствительность критически. Однако SPF-защита обязательна.' },
    { q: 'Кому противопоказан BioRePeel?', a: 'Беременность и лактация, активный герпес, нарушение целостности кожи в зоне обработки, индивидуальная непереносимость компонентов, приём изотретиноина в последние 6 месяцев.' },
  ];

  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen relative font-sans text-slate-800 flex flex-col">
      <AnimationsProvider />

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

          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <a href="/services/aesthetic" className="hover:text-[#60c2ff] transition-colors duration-300">Эстетическая косметология</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">Пилинг BioRePeel</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img src="/images/services/aesthetic/biorepeel-peeling/hero.png" alt="Пилинг BioRePeel в клинике СкинМед" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  Без шелушения, всесезонный
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  Пилинг <br />
                  <span className="font-serif italic text-[#60c2ff]/80">BioRePeel</span>
                </h1>
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  Инновационный двухфазный TCA-пилинг без шелушения. Глубокое обновление кожи, борьба с акне и пигментацией — круглый год и без периода реабилитации.
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]">
                      Записаться на пилинг
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto reveal-up opacity-0">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— О процедуре</span>
                <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                  Что такое <span className="font-serif italic text-slate-400">BioRePeel</span>
                </h2>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed mb-6">
                  <span className="font-medium text-[#60c2ff]">BioRePeel CL3</span> — двухфазный биостимулирующий пилинг итальянского производства (CMed Aesthetics). Содержит 35% трихлоруксусной кислоты (TCA) в сочетании с аминокислотами, витаминами C и B2, а также коферментами.
                </p>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">
                  Уникальная двухфазная технология обеспечивает одновременное отшелушивание и биостимуляцию — кислоты обновляют поверхностные слои, а биоактивные компоненты питают и восстанавливают глубокие. Результат — сияющая, обновлённая кожа без шелушения и реабилитации.
                </p>
              </div>
              <div className="flex flex-col gap-8">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg">
                  <img src="/images/services/aesthetic/biorepeel-peeling/process.png" alt="Нанесение BioRePeel" className="w-full h-[280px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-10 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)]">
                <div className="flex flex-col gap-6">
                  {[
                    { num: 'TCA 35%', label: 'Трихлоруксусная кислота' },
                    { num: '0 дней', label: 'Период реабилитации' },
                    { num: '365', label: 'Дней в году — всесезонность' },
                    { num: '4–6', label: 'Процедур — полный курс' },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-4 py-3 border-b border-slate-100 last:border-0">
                      <span className="text-2xl md:text-3xl font-light text-[#60c2ff] min-w-[100px]">{stat.num}</span>
                      <span className="text-base text-slate-600 font-light">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </div>
          </section>

          {/* Indications */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Показания</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Кому подойдёт <span className="font-serif italic text-slate-400">BioRePeel</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container">
              {indications.map((item, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden cursor-pointer stagger-item opacity-0 scroll-glow-item">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                    <Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300">{item.title}</h3>
                  <p className="text-base text-slate-600 font-light mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Advantages */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Преимущества</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                Почему <br /> <span className="font-serif italic text-slate-400">BioRePeel</span>
              </h2>
            </div>
            <div className="flex flex-col stagger-container">
              <EditorialList items={advantages} />
            </div>
          </section>

          {/* Composition */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Состав</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Активные <span className="font-serif italic text-slate-400">компоненты</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container max-w-6xl mx-auto">
              {composition.map((item, i) => (
                <div key={i} className="group bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 stagger-item opacity-0 scroll-glow-item">
                  <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                    <Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300 mb-2">{item.title}</h3>
                  <p className="text-base text-slate-600 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Steps */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Этапы</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                Как проходит <br /> <span className="font-serif italic text-slate-400">процедура</span>
              </h2>
            </div>
            <div className="flex flex-col stagger-container">
              <EditorialList items={steps} />
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full">
            <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)] reveal-up opacity-0">
              <div className="mb-12 border-b border-slate-100 pb-6">
                <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">Стоимость <span className="font-serif italic text-slate-400">услуг</span></h2>
              </div>
              <div className="flex flex-col divide-y divide-slate-100">
                {prices.map((price, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{price.name}</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{price.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto w-full relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Вопросы</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Частые <span className="font-serif italic text-slate-400">вопросы</span></h2>
            </div>
            <div className="flex flex-col gap-4 stagger-container">
              {faq.map((item, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] overflow-hidden shadow-[0_0.5rem_1.5rem_-0.5rem_rgba(0,0,0,0.03)] stagger-item opacity-0">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between p-6 md:p-8 text-left gap-4">
                    <span className="text-lg md:text-xl font-medium text-slate-900">{item.q}</span>
                    <Icon icon={openFaq === index ? 'solar:minus-linear' : 'solar:add-linear'} className="text-2xl text-[#60c2ff] shrink-0" />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="px-6 md:px-8 pb-6 md:pb-8 text-[17px] text-slate-600 font-light leading-relaxed">{item.a}</p>
                  </div>
                </div>
              ))}
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
                    Сияние кожи <br /><span className="font-serif italic text-slate-400">без компромиссов</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">Запишитесь на бесплатную консультацию и узнайте, подойдёт ли BioRePeel для Вашей кожи.</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group">
                      <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                      <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3">
                        Записаться на пилинг
                        <Icon icon="solar:arrow-right-linear" className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-64 h-64 rounded-full border border-[#60c2ff]/20 relative items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div>
                  <div className="text-center">
                    <Icon icon="solar:star-bold-duotone" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" />
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
