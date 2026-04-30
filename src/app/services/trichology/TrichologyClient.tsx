'use client';
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
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

export default function TrichologyClient() {
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

  /* Content from parsed JSON — rewritten */
  const approach = [
    { icon: 'solar:stethoscope-linear', title: 'Дерматоскопия', desc: 'Аппаратная диагностика состояния кожи головы и волосяных фолликулов с определением причин проблемы.' },
    { icon: 'solar:test-tube-linear', title: 'Анализ дефицитов', desc: 'Определяем влияние дефицитов витаминов и аминокислот, стресса, гормонального дисбаланса и наследственности.' },
    { icon: 'solar:clipboard-text-linear', title: 'План лечения', desc: 'Подробное информирование и назначение лечения с доказанной эффективностью для оптимальных результатов.' },
    { icon: 'solar:heart-linear', title: 'Профилактика', desc: 'Рекомендации по правильному уходу и профилактике заболеваний кожи головы и волос.' },
  ];

  const treatments = [
    { icon: 'solar:stethoscope-linear', title: 'Консультация трихолога', desc: 'Аппаратная диагностика (трихоскопия), визуальный осмотр, сбор анамнеза и назначение комплексного индивидуального плана лечения.', link: '/services/trichology/consultation', image: '/images/services/trichology/trich_sub_consultation_1_1775856682230.png' },
    { icon: 'solar:syringe-linear', title: 'Лечение выпадения волос', desc: 'Инъекционные витаминные коктейли (мезотерапия) для восстановления обменных процессов, остановки выпадения волос и активации спящих фолликулов.', link: '/services/trichology/hair-loss', image: '/images/services/trichology/trich_sub_hair_loss_1_1775856696674.png' },
    { icon: 'solar:atom-linear', title: 'Плазмотерапия PRP-Cortexil', desc: 'Инновационная терапия собственной обогащённой плазмой пациента. Запускает клеточную регенерацию, борется с алопецией любой формы.', link: '/services/trichology/plasma-hair', image: '/images/services/trichology/trich_sub_plasma_1_1775856711792.png' },
    { icon: 'solar:bolt-linear', title: 'RF-лифтинг Vivace для волос', desc: 'Микроигольчатый аппаратный лифтинг. Улучшает кровообращение кожи головы, стимулируя мощный кислородный обмен и рост новых стержней волос.', link: '/services/trichology/rf-lifting-hair', image: '/images/services/trichology/trich_sub_rf_1_1775856724674.png' },
  ];

  const problems = [
    { title: 'Алопеция и выпадение', desc: 'Мезотерапия, плазмотерапия PRP-Cortexil, микроигольчатый RF-лифтинг Vivace', link: '/services/trichology/hair-loss' },
    { title: 'Сечение волос', desc: 'Мезотерапия для увлажнения и восстановления блеска, плазмотерапия PRP-Cortexil', link: '' },
    { title: 'Перхоть и зуд', desc: 'Диагностика причин, назначение лечебных шампуней с активными компонентами, уходовая программа', link: '' },
    { title: 'Рецидивы заболеваний', desc: 'RF-лифтинг Vivace, плазмотерапия, мезотерапия — комплексный подход для стойкого результата', link: '' },
    { title: 'Себорейный дерматит', desc: 'Консультация, диагностика кожи, медицинские шампуни, коррекция питания, медикаментозная терапия', link: '' },
    { title: 'Ослабление иммунитета', desc: 'Плазмотерапия PRP-Cortexil, мезотерапия для волос, индивидуальная уходовая программа', link: '' },
  ];

  const tips = [
    'Избегайте агрессивных средств гигиены — используйте мягкие шампуни без химических раздражителей.',
    'При сухой коже регулярно используйте увлажняющие средства или маски для предотвращения обезвоживания.',
    'Избегайте горячего душа и использования фена на высокой температуре — это сильно сушит кожу.',
    'Следите за питанием — включите в рацион продукты с Омега-3, жирными кислотами, антиоксидантами и минералами.',
    'Если симптомы не проходят и усиливаются, обратитесь к трихологу для составления оптимального плана лечения.',
  ];

  const cases = [
    { before: '/images/services/trichology/before-hair-loss.png', after: '/images/services/trichology/after-hair-growth.png', label: 'Результат лечения алопеции — улучшение густоты после курса плазмотерапии и мезотерапии' },
  ];

  const services = [
     { title: 'Консультация трихолога', price: 'от 1 500 ₽', link: '/services/trichology/consultation' },
     { title: 'Мезотерапия волос', price: 'от 3 000 ₽', link: '/services/mesotherapy-hair' },
     { title: 'Плазмотерапия PRP', price: 'от 6 400 ₽', link: '/services/plasmotherapy-hair' },
     { title: 'Лечение выпадения волос', price: 'от 3 000 ₽', link: '/services/trichology/hair-loss' },
     { title: 'RF-лифтинг для волос', price: 'от 8 000 ₽', link: '/services/trichology/rf-lifting-hair' },
  ];

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

          {/* Breadcrumbs */}
          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">Трихология</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <ServiceImage src="/images/services/trichology/hero.png" alt="Трихология в Казани" sizes="100vw" priority className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  Доказательная трихология
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  Трихо-<br />
                  <span className="font-serif italic text-[#60c2ff]/80">логия</span>
                </h1>
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  Профессиональное лечение выпадения волос, алопеции, себореи и других заболеваний кожи головы. Современная аппаратная диагностика и инъекционные процедуры с доказанной эффективностью.
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]">
                      Записаться к трихологу
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Approach — from parsed "Наш подход" */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto reveal-up opacity-0">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Наш подход</span>
                <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                  Диагностика и <span className="font-serif italic text-slate-400">лечение</span>
                </h2>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed mb-8">
                  Наш подход включает современную аппаратную диагностику, инъекционные и аппаратные процедуры с доказанной эффективностью. Мы не назначаем лечение «вслепую» — каждый план терапии основан на объективных данных.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {approach.map((a, i) => (
                    <div key={i} className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-5">
                      <Icon icon={a.icon} className="text-2xl text-[#60c2ff] mb-3" />
                      <h4 className="text-base font-medium text-slate-900 mb-1">{a.title}</h4>
                      <p className="text-base text-slate-600 font-light leading-relaxed">{a.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg">
                <div className="relative w-full h-[500px]">
                  <ServiceImage src="/images/services/trichology/process-dermatoscopy.png" alt="Трихоскопия" sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </section>

          {/* Treatments — visual grid */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8 text-center md:text-left">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Технологии</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                Направления <br /><span className="font-serif italic text-slate-400">лечения</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 stagger-container">
              {treatments.map((t, i) => (
                <a key={i} href={t.link} className="group flex flex-col bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] overflow-hidden shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 opacity-0 stagger-item scroll-glow-item">
                  <div className="relative h-[300px] w-full overflow-hidden">
                    <ServiceImage src={t.image} alt={t.title} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-full object-cover md:group-hover:scale-[1.03] transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                       <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                          <Icon icon={t.icon} className="text-2xl text-white" />
                       </div>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-4 group-hover:text-[#60c2ff] transition-colors leading-tight">{t.title}</h3>
                    <p className="text-[16px] md:text-[17px] text-slate-600 font-light leading-relaxed mb-8 flex-1">{t.desc}</p>
                    <div className="flex items-center gap-2 text-[#60c2ff] font-medium mt-auto group-hover:gap-3 transition-all duration-300">
                      <span>Подробнее об услуге</span>
                      <Icon icon="solar:arrow-right-linear" className="text-lg" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Problems Grid */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Проблемы</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Что мы <span className="font-serif italic text-slate-400">лечим</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container max-w-6xl mx-auto">
              {problems.map((p, i) => (
                <div key={i} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden stagger-item opacity-0 scroll-glow-item">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300 mb-3">{p.title}</h3>
                  <p className="text-base text-slate-600 font-light leading-relaxed mb-4">{p.desc}</p>
                  {p.link && (
                    <a href={p.link} className="text-base text-[#60c2ff] font-medium hover:underline flex items-center gap-1">
                      Подробнее <Icon icon="solar:arrow-right-linear" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Clinical Result Case */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0">
            <div className="max-w-5xl mx-auto">
              {/* Section label */}
              <div className="flex items-center gap-4 mb-12">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Клинический результат</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Two-column: annotation + photo */}
              <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start mb-12">
                {/* Left: Clinical annotation */}
                <div>
                  <div className="text-xs font-medium uppercase tracking-[0.15em] text-[#0ea5e9] mb-4">Диагноз</div>
                  <h3 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight leading-[1.2] mb-8">
                    Лечение алопеции
                  </h3>
                  <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
                    Комплексный подход стимулирует рост новых волос и&nbsp;возвращает природную густоту.
                  </p>

                  {/* Clinical comparison — minimal, text-only */}
                  <div className="space-y-6">
                    <div className="border-l-2 border-slate-300 pl-5">
                      <div className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400 mb-1.5">До лечения</div>
                      <p className="text-base text-slate-700 font-light leading-relaxed">
                        Поредение, критическое истончение стержня и общая потеря объёма волос.
                      </p>
                    </div>
                    <div className="border-l-2 border-[#0ea5e9] pl-5">
                      <div className="text-xs font-medium uppercase tracking-[0.15em] text-[#0ea5e9] mb-1.5">После курса</div>
                      <p className="text-base text-slate-800 font-normal leading-relaxed">
                        Заметное восстановление густоты, плотности и качества каждого волоса.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Photo as main proof */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden">
                    <div className="relative w-full aspect-[16/10]">
                      <ServiceImage src="/images/volos.png" alt="Результат лечения алопеции — до и после курса плазмотерапии и мезотерапии" sizes="(max-width: 1024px) 100vw, 60vw" className="w-full h-full object-contain" />
                    </div>
                    {/* Thin vertical divider in center of photo */}
                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/60 pointer-events-none" />
                    {/* Subtle До / После labels over photo */}
                    <div className="absolute bottom-4 left-4 sm:left-6 px-3 py-1 bg-white/80 backdrop-blur-sm rounded text-[11px] font-medium uppercase tracking-[0.15em] text-slate-600">
                      До
                    </div>
                    <div className="absolute bottom-4 right-4 sm:right-6 px-3 py-1 bg-white/80 backdrop-blur-sm rounded text-[11px] font-medium uppercase tracking-[0.15em] text-slate-600">
                      После
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-slate-400 font-light tracking-wide">
                * Результат индивидуален. Необходима консультация врача-трихолога.
              </p>
            </div>
          </section>

          {/* Tips — from parsed "5 рекомендаций" */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto reveal-up opacity-0">
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-12 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)]">
              <div className="flex items-center gap-3 mb-8">
                <Icon icon="solar:heart-bold-duotone" className="text-2xl text-[#60c2ff]" />
                <h3 className="text-xl font-medium text-slate-900">5 рекомендаций для здоровья волос</h3>
              </div>
              <ol className="flex flex-col gap-4">
                {tips.map((t, i) => (
                  <li key={i} className="flex items-start gap-4 text-base text-slate-700 font-normal leading-relaxed">
                    <span className="w-8 h-8 rounded-full bg-[#60c2ff]/10 flex items-center justify-center shrink-0 text-[#60c2ff] font-medium text-sm">{i + 1}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full">
            <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)] reveal-up opacity-0">
              <div className="mb-12 border-b border-slate-100 pb-6">
                <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">Стоимость <span className="font-serif italic text-slate-400">услуг</span></h2>
              </div>
              <div className="flex flex-col divide-y divide-slate-100">
                {services.map((s, i) => (
                  <a key={i} href={s.link} className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{s.title}</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{s.price}</span>
                  </a>
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
                    Верните волосам <br /><span className="font-serif italic text-slate-400">здоровье и густоту</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">
                    Запишитесь на консультацию трихолога. Проведём диагностику и подберём эффективный курс лечения.
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
                    <Icon icon="solar:magic-stick-3-bold-duotone" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" />
                    <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/50 leading-tight">SkinMed<br/>Trichology</span>
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
