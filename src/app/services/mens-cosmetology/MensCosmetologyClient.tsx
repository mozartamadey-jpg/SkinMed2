'use client';
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';

export default function MensCosmetologyClient() {
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
      icon: 'solar:pallete-2-linear',
      title: 'Удаление пигментации',
      desc: 'Без боли, без ожогов и шрамов. В 97% случаев пигмент удаляем за 1 визит.',
      details: ['отсутствие боли во время и после удаления', 'не травмирует кожу, не оставляет ожогов и шрамов', 'короткий период реабилитации до 5 дней', 'в 97% случаев пигмент удаляем за 1 визит'],
      image: '/images/services/mens-cosmetology/kosmetologiya-dlya-muzhchin_1.jpg',
    },
    {
      icon: 'solar:face-scan-circle-linear',
      title: 'Коррекция морщин',
      desc: 'Быстрый эффект прямо в кресле косметолога. Сохраняем естественную мимику.',
      details: ['быстрый эффект, сразу в кресле косметолога', 'сохраняем естественную мимику', 'используем ультракороткие иголочки без следов', 'эффект сохраняется от 6 до 18 месяцев'],
      image: '/images/services/mens-cosmetology/kosmetologiya-dlya-muzhchin_3.jpg',
    },
    {
      icon: 'solar:shield-warning-linear',
      title: 'Лечение акне',
      desc: 'Гладкая здоровая кожа при любой стадии акне. Большой опыт и узкая специализация.',
      details: ['гладкая здоровая кожа возможна при любой стадии акне', 'большой опыт и узкая специализация специалистов', 'снижение дискомфорта и рост уверенности в себе'],
      image: '/images/services/mens-cosmetology/kosmetologiya-dlya-muzhchin_5.jpg',
    },
    {
      icon: 'solar:scissors-linear',
      title: 'Лечение выпадения волос',
      desc: 'Несколько вариантов лечения без хирургической пересадки. Доказанная эффективность.',
      details: ['экономия времени — обходимся без хирургической пересадки', 'несколько вариантов лечения для максимального успеха', 'доказанная эффективность у наших врачей-трихологов'],
      image: '/images/services/mens-cosmetology/kosmetologiya-dlya-muzhchin_7.jpg',
    },
    {
      icon: 'solar:eraser-linear',
      title: 'Удаление тату',
      desc: 'Минимум болевых ощущений с крио-охлаждением Zimmer (до −30°). 100% безопасность.',
      details: ['минимум болевых ощущений, крио-система Zimmer (−30°)', '100% безопасность, исключены ожоги и шрамы', 'минимальное количество повторных сеансов'],
      image: '/images/services/mens-cosmetology/kosmetologiya-dlya-muzhchin_9.jpg',
    },
    {
      icon: 'solar:magic-stick-3-linear',
      title: 'Лазерная шлифовка и RF-лифтинг',
      desc: 'Более 700 довольных пациентов. Возможность лечения сложных форм постакне.',
      details: ['более 700 довольных пациентов', 'возможность лечения даже сложных форм постакне'],
      image: '/images/services/mens-cosmetology/kosmetologiya-dlya-muzhchin_11.jpg',
    },
    {
      icon: 'solar:eye-linear',
      title: 'Лазерная блефаропластика',
      desc: 'Минимальная болезненность с местной анестезией. 1 сеанс, реабилитация до 7 дней.',
      details: ['минимальная болезненность, местная анестезия', 'отсутствуют корочки', '1 сеанс, реабилитация до 7 дней', 'продолжительный эффект до 18 месяцев'],
      image: '/images/services/mens-cosmetology/kosmetologiya-dlya-muzhchin_12.jpg',
    },
    {
      icon: 'solar:star-linear',
      title: 'Уход за лицом',
      desc: 'Профессиональный уход подбирает врач-дерматолог по типу и чувствительности кожи.',
      details: ['профессиональный уход подбирает врач-дерматолог', 'назначается по типу и чувствительности кожи', 'подробная рекомендация по домашнему уходу'],
      image: '/images/services/mens-cosmetology/kosmetologiya-dlya-muzhchin_14.jpg',
    },
  ];

  const cases = [
    { before: '/images/services/mens-cosmetology/before-wrinkles.png', after: '/images/services/mens-cosmetology/after-wrinkles.png', label: 'Коррекция морщин, мужчина 40 лет' },
  ];

  const faq = [
    { q: 'Какие процедуры подойдут для быстрого омоложения?', a: 'Ботулинотерапия препаратом Диспорт позволяет быстро разгладить морщины и омолодить лицо. Количество препарата рассчитывается врачом после осмотра. Проводится 1 раз, эффект сохраняется до 6–8 месяцев.' },
    { q: 'Что такое лазерное омоложение PicoCare?', a: 'Лазерное омоложение PicoCare улучшит тонус и текстуру кожи, избавит от пигментных пятен, разгладит мелкую сеточку морщин, освежит и сделает подтянутым лицо. Проводится 1 раз, эффект до 18 месяцев.' },
    { q: 'Чем поможет мезотерапия?', a: 'Мезотерапия восстанавливает дефицит необходимых витаминов для поддержания упругости кожи. Курс из 1–3 визитов, эффект до 6 месяцев.' },
    { q: 'Что такое SMAS-лифтинг?', a: 'SMAS-лифтинг уменьшает дряблость и птоз лица, подтянет зону второго подбородка, скорректирует брыли и носогубные складки. Проводится 1 раз, результат до 18 месяцев.' },
    { q: 'Как лечится акне у мужчин?', a: 'Лечение акне назначается индивидуально после осмотра врачом-дерматологом. Может включать плазмотерапию, мезотерапию. При воспалительных элементах исключаем чистку и химический пилинг.' },
    { q: 'Как лечить постакне?', a: 'Лечение постакне включает лазерную терапию, микроигольчатый RF-лифтинг, плазмотерапию и мезотерапию. Выбор и количество процедур назначает врач на консультации.' },
  ];

  const [openService, setOpenService] = React.useState<number | null>(null);
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

      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        <main className="w-full mt-12 sm:mt-16">

          {/* Breadcrumbs */}
          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">Мужская косметология</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img src="/images/services/mens-cosmetology/hero.png" alt="Мужская косметология в клинике СкинМед" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  Для тех, кто привык к высоким стандартам
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  Мужская <br />
                  <span className="font-serif italic text-[#60c2ff]/80">косметология</span>
                </h1>
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  Поможем сохранить безупречный облик, подчеркнуть силу и привлекательность. Профессиональные врачи-косметологи, дерматологи и трихологи в клинике <span className="font-medium text-[#60c2ff]">СкинМед</span>.
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]">
                      Записаться на приём
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About + Stats */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto reveal-up opacity-0">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— О направлении</span>
                <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                  Забота о внешности — <span className="font-serif italic text-slate-400">разумный выбор</span>
                </h2>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed mb-6">
                  Современный мужчина заботится о своём здоровье и облике. В клинике <span className="font-medium text-[#60c2ff]">СкинМед</span> мы предлагаем полный спектр косметологических услуг, адаптированных под мужскую кожу — от коррекции морщин до комплексного лечения акне и алопеции.
                </p>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">
                  Все процедуры проводят врачи-косметологи, дерматологи и трихологи с узкой специализацией. Мы используем только оборудование экспертного класса — лазер <span className="font-medium text-[#60c2ff]">PicoCare</span>, аппарат <span className="font-medium text-[#60c2ff]">Vivace RF</span>, криосистему <span className="font-medium text-[#60c2ff]">Zimmer</span>.
                </p>
              </div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg">
                <img src="/images/services/mens-cosmetology/process-injection.png" alt="Процедура для мужчин" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Услуги</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Услуги для <span className="font-serif italic text-slate-400">мужчин</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                8 направлений — от экспресс-омоложения до комплексного лечения
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container max-w-7xl mx-auto">
              {services.map((item, i) => (
                <div key={i} onClick={() => setOpenService(openService === i ? null : i)} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] overflow-hidden shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 cursor-pointer stagger-item opacity-0 scroll-glow-item">
                  <div className="p-6">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    <div className="w-12 h-12 rounded-xl bg-[#60c2ff]/10 flex items-center justify-center mb-4 group-hover:bg-[#60c2ff] transition-all duration-500">
                      <Icon icon={item.icon} className="text-2xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300 mb-2">{item.title}</h3>
                    <p className="text-base text-slate-600 font-light leading-relaxed mb-4">{item.desc}</p>
                    {openService === i && (
                      <ul className="flex flex-col gap-2 mb-4">
                        {item.details.map((d, j) => (
                          <li key={j} className="flex items-start gap-2 text-base text-slate-600 font-light">
                            <Icon icon="solar:check-circle-bold" className="text-[#60c2ff] mt-0.5 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <button onClick={(e) => { e.stopPropagation(); window.dispatchEvent(new Event('open-booking-modal')); }} className="text-base text-[#60c2ff] font-medium hover:underline flex items-center gap-1">
                      Записаться <Icon icon="solar:arrow-right-linear" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Before/After Cases */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0">
            <div className="mb-16 text-center">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Эффект</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Результат <span className="font-serif italic text-slate-400">процедур</span>
              </h2>
            </div>
            <div className="max-w-5xl mx-auto">
              {cases.map((c, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg group flex-1">
                      <img src={c.before} alt="До" className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                      <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur text-sm px-4 py-2 rounded-full font-medium">До</div>
                    </div>
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg group flex-1">
                      <img src={c.after} alt="После" className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                      <div className="absolute bottom-4 right-4 bg-[#60c2ff]/90 text-white text-sm px-4 py-2 rounded-full font-medium">После</div>
                    </div>
                  </div>
                  <p className="text-center text-base text-slate-600 font-light">{c.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto w-full relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Вопросы</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Вопросы от <span className="font-serif italic text-slate-400">мужчин</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4 stagger-container">
              {faq.map((item, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] overflow-hidden shadow-[0_0.5rem_1.5rem_-0.5rem_rgba(0,0,0,0.03)] stagger-item opacity-0">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 md:p-8 text-left gap-4">
                    <span className="text-lg md:text-xl font-medium text-slate-900">{item.q}</span>
                    <Icon icon={openFaq === i ? 'solar:minus-linear' : 'solar:add-linear'} className="text-2xl text-[#60c2ff] shrink-0" />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
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
                    Безупречный облик <br /><span className="font-serif italic text-slate-400">для современных мужчин</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">
                    Запишитесь на бесплатную консультацию и получите индивидуальный план процедур от наших специалистов.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group">
                      <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                      <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3">
                        Бесплатная консультация
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
