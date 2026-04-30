'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

export default function HyperhidrosisClient() {

  useEffect(() => {
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
    const items = document.querySelectorAll('.scroll-glow-item');
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const indications = [
    { icon: 'solar:waterdrop-linear', title: 'Потливость подмышек', desc: 'Постоянное промокание одежды даже в покое' },
    { icon: 'solar:hand-stars-linear', title: 'Влажные ладони', desc: 'Дискомфорт при рукопожатиях и письме' },
    { icon: 'solar:running-2-linear', title: 'Потливость стоп', desc: 'Повышенная влажность, неприятный запах' },
    { icon: 'solar:sun-2-linear', title: 'Лицевой гипергидроз', desc: 'Потливость лба и висков без физической нагрузки' },
    { icon: 'solar:danger-triangle-linear', title: 'Эмоциональная потливость', desc: 'Избыточное потоотделение при стрессе' },
    { icon: 'solar:temperature-linear', title: 'Сезонное обострение', desc: 'Усиление проблемы в тёплое время года' },
  ];

  const advantages = [
    { title: 'Быстрый результат', desc: 'Заметное снижение потоотделения уже через 3–5 дней после процедуры. Полный эффект развивается к 14 дню.' },
    { title: 'Продолжительный эффект', desc: 'Действие препарата сохраняется от 6 до 8 месяцев. При регулярных процедурах длительность эффекта увеличивается.' },
    { title: 'Безболезненность', desc: 'Применяем анестезирующий крем перед инъекциями — процедура проходит максимально комфортно для пациента.' },
    { title: 'Безопасность', desc: 'Используем только сертифицированные препараты Ботокс и Диспорт. Методика одобрена FDA и применяется более 20 лет.' },
    { title: 'Без реабилитации', desc: 'Процедура не требует восстановительного периода. Вы можете вернуться к обычному образу жизни в тот же день.' },
  ];

  const steps = [
    { title: 'Консультация', desc: 'Врач-косметолог проводит осмотр, определяет зоны повышенного потоотделения и подбирает оптимальную дозировку препарата.' },
    { title: 'Проба Минора', desc: 'На кожу наносится йод и крахмал для точного определения границ активных потовых желёз — так мы гарантируем точечное воздействие.' },
    { title: 'Анестезия', desc: 'На обрабатываемую зону наносится аппликационный анестетик для полного комфорта во время инъекций.' },
    { title: 'РРЅСЉРµРєС†РёРё', desc: 'Ботулотоксин вводится микроиглой на глубину 2–3 мм с шагом 1,5–2 см по всей зоне гипергидроза. Процедура занимает 15–30 минут.' },
    { title: 'Рекомендации', desc: 'После процедуры врач даёт рекомендации по уходу: не посещать баню и сауну 7 дней, не использовать антиперспиранты 24 часа.' },
  ];

  const prices = [
     { name: 'Лечение гипергидроза подмышек', price: 'от 18 000 ₽' },
     { name: 'Лечение гипергидроза ладоней', price: 'от 12 000 ₽' },
     { name: 'Лечение гипергидроза стоп', price: 'от 20 000 ₽' },
     { name: 'Расширенная зона гипергидроза', price: 'от 22 000 ₽' },
     { name: 'Консультация врача', price: 'Бесплатно' },];

  const faq = [
    { q: 'Насколько болезненна процедура?', a: 'Благодаря предварительному нанесению анестезирующего крема процедура практически безболезненна. Пациенты ощущают лишь лёгкое покалывание в момент введения препарата.' },
    { q: 'Когда наступает эффект?', a: 'Первые результаты заметны через 3–5 дней после инъекций. Максимальный эффект развивается к 10–14 дню и сохраняется 6–8 месяцев.' },
    { q: 'Нужно ли готовиться к процедуре?', a: 'За 3 дня до процедуры рекомендуется прекратить использование антиперспирантов. В день визита приходите с чистой, сухой кожей обрабатываемой зоны.' },
    { q: 'Можно ли заниматься спортом после процедуры?', a: 'Рекомендуется воздержаться от интенсивных физических нагрузок в течение 3 дней, а также от посещения бани и сауны в течение 7 дней.' },
    { q: 'Безопасна ли блокировка потовых желёз?', a: 'Абсолютно безопасна. Потовые железы обрабатываемой зоны составляют менее 2% от общего количества. Терморегуляция организма не нарушается — тело продолжает охлаждаться через остальные зоны.' },
  ];

  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

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
              <span className="text-slate-700 font-medium">Лечение гипергидроза</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img src="/images/services/hyperhidrosis/hero.png" alt="Лечение гипергидроза инъекциями ботулотоксина" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>

              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  Эффект до 8 месяцев
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  Лечение <br />
                  <span className="font-serif italic text-[#60c2ff]/80">гипергидроза</span>
                </h1>

                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  Избавьтесь от повышенной потливости за одну процедуру. Инъекции ботулотоксина блокируют работу потовых желёз — безопасно, быстро и с гарантированным результатом.
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button
                      onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                      className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]"
                    >
                      Записаться на процедуру
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
                  Что такое <span className="font-serif italic text-slate-400">гипергидроз</span>
                </h2>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed mb-6">
                  Гипергидроз — это патологическое состояние, при котором потовые железы работают в десятки раз активнее нормы. Проблема затрагивает до 3% населения и значительно влияет на качество жизни: мокрые пятна на одежде, дискомфорт при общении, ограничения в выборе гардероба.
                </p>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">
                  РРЅСЉРµРєС†РёРё <span className="font-medium text-[#60c2ff]">Ботокс</span> или <span className="font-medium text-[#60c2ff]">Диспорт</span> — золотой стандарт лечения гипергидроза. Ботулотоксин блокирует нервные импульсы к потовым железам, снижая потоотделение на 85–95% в обработанной зоне.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-10 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)]">
                <div className="flex flex-col gap-6">
                  {[
                    { num: '85–95%', label: 'Снижение потоотделения' },
                    { num: '6–8', label: 'Месяцев действия препарата' },
                    { num: '15–30', label: 'Минут — длительность процедуры' },
                    { num: '2 400+', label: 'Довольных пациентов СкинМед' },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-4 py-3 border-b border-slate-100 last:border-0">
                      <span className="text-2xl md:text-3xl font-light text-[#60c2ff] min-w-[100px]">{stat.num}</span>
                      <span className="text-base text-slate-600 font-light">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Indications */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Показания</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Когда нужна <span className="font-serif italic text-slate-400">помощь</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Процедура рекомендована при избыточном потоотделении, не связанном с физической нагрузкой
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container">
              {indications.map((item, index) => (
                <div key={index}
                  className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden cursor-pointer stagger-item opacity-0 scroll-glow-item"
                >
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
                Почему <br /> <span className="font-serif italic text-slate-400">ботулинотерапия</span>
              </h2>
            </div>

            <div className="flex flex-col stagger-container">
              <EditorialList items={advantages} />
            </div>
          </section>

          {/* Zones */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Зоны обработки</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Область <span className="font-serif italic text-slate-400">воздействия</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
              {[
                { icon: 'solar:shield-check-linear', title: 'Подмышечные впадины', desc: 'Самая распространённая зона. Эффект 6–8 месяцев, дозировка 50–100 ед.' },
                { icon: 'solar:hand-stars-linear', title: 'Ладони', desc: 'Точечные инъекции с анестезией. Избавление от влажных рук на 4–6 месяцев.' },
                { icon: 'solar:running-2-linear', title: 'Стопы', desc: 'Снижение потливости ног и сопутствующего запаха. Эффект до 6 месяцев.' },
                { icon: 'solar:eye-linear', title: 'Лицо и лоб', desc: 'Коррекция потливости лба, височной зоны. Минимальные дозировки.' },
              ].map((zone, i) => (
                <div key={i} className="group bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 stagger-item opacity-0 scroll-glow-item">
                  <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                    <Icon icon={zone.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300 mb-2">{zone.title}</h3>
                  <p className="text-base text-slate-600 font-light leading-relaxed">{zone.desc}</p>
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
                <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">
                  Стоимость <span className="font-serif italic text-slate-400">услуг</span>
                </h2>
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
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Частые <span className="font-serif italic text-slate-400">вопросы</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 stagger-container">
              {faq.map((item, index) => (
                <div key={index}
                  className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] overflow-hidden shadow-[0_0.5rem_1.5rem_-0.5rem_rgba(0,0,0,0.03)] stagger-item opacity-0"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left gap-4"
                  >
                    <span className="text-lg md:text-xl font-medium text-slate-900">{item.q}</span>
                    <Icon
                      icon={openFaq === index ? 'solar:minus-linear' : 'solar:add-linear'}
                      className="text-2xl text-[#60c2ff] shrink-0 transition-transform duration-300"
                    />
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
                    Забудьте о <br />
                    <span className="font-serif italic text-slate-400">потливости</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">
                    Запишитесь на бесплатную консультацию врача-косметолога. Подберём оптимальный протокол лечения и рассчитаем стоимость процедуры.
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
