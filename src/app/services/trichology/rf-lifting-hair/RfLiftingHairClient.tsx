'use client';
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

export default function RfLiftingHairClient() {
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

  const advantages = [
    { icon: 'solar:bolt-linear', title: 'Двойное воздействие', desc: 'Микроиглы создают микроканалы, а RF-энергия прогревает глубокие слои дермы — двойная стимуляция регенерации.' },
    { icon: 'solar:shield-check-linear', title: 'Безопасность', desc: 'Золотые микроиглы Vivace минимизируют травматизацию, а система заземления исключает ожоги.' },
    { icon: 'solar:heart-pulse-linear', title: 'Неоколлагенез', desc: 'RF-энергия запускает синтез нового коллагена и эластина вокруг волосяных фолликулов.' },
    { icon: 'solar:clock-circle-linear', title: 'Быстрое восстановление', desc: 'Минимальный период реабилитации — 24–48 часов. Легкое покраснение проходит самостоятельно.' },
    { icon: 'solar:atom-linear', title: 'Улучшение кровоснабжения', desc: 'Прогрев тканей расширяет сосуды, улучшая доставку питания к волосяным луковицам.' },
    { icon: 'solar:star-linear', title: 'Vivace RF', desc: 'Золотые микроиглы последнего поколения с регулируемой глубиной проникновения 0.5–3.5 мм.' },
  ];

  const steps = [
    { title: 'Консультация', desc: 'Трихолог проводит трихоскопию, определяет состояние фолликулов и подбирает параметры воздействия.' },
    { title: 'Подготовка', desc: 'Наносится местный анестетик для полного комфорта. Время экспозиции — 20–30 минут.' },
    { title: 'Процедура Vivace', desc: 'Аппарат с золотыми микроиглами обрабатывает зоны выпадения. RF-энергия доставляется на заданную глубину. Длительность — 30–40 минут.' },
    { title: 'Завершение', desc: 'Нанесение успокаивающей сыворотки, которая проникает через микроканалы и усиливает эффект процедуры.' },
  ];

  const cases = [
    { before: '/images/services/trichology/rf_before.png', after: '/images/services/trichology/rf_after.png', label: 'Результат после курса RF-лифтинга Vivace — 4 процедуры, 3 месяца' },
  ];

  const prices = [
     { name: '��������� 1', price: 'от 8 000 ₽' },
     { name: '��������� 1', price: 'от 28 000 ₽' },
     { name: '��������� 1', price: 'от 12 000 ₽' },
     { name: '��������� 1', price: 'от 1 500 ₽' },];

  const faq = [
    { q: 'Как работает RF-лифтинг для волос?', a: 'Микроигольчатый аппарат Vivace доставляет радиочастотную энергию в глубокие слои кожи головы. Это улучшает кровообращение, кислородный обмен и ускоряет восстановление структуры волос.' },
    { q: 'Больно ли это?', a: 'Перед процедурой наносится анестезирующий крем, поэтому ощущения минимальны — легкое покалывание и тепло.' },
    { q: 'Сколько процедур нужно?', a: 'Стандартный курс — 3–5 процедур с интервалом 3–4 недели. Поддерживающие сеансы — 1 раз в 2–3 месяца.' },
    { q: 'С чем лучше сочетать?', a: 'RF-лифтинг отлично сочетается с плазмотерапией PRP и мезотерапией. Комплексный подход усиливает результат.' },
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
              <a href="/services/trichology" className="hover:text-[#60c2ff] transition-colors duration-300">Трихология</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">RF-лифтинг для волос</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img src="/images/services/trichology/hero-rf.png" alt="RF-лифтинг Vivace для волос" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  Vivace RF
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  RF-лифтинг <br /><span className="font-serif italic text-[#60c2ff]/80">для волос</span>
                </h1>
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  Микроигольчатый RF-лифтинг Vivace — золотые микроиглы с радиочастотной энергией для улучшения кровообращения, кислородного обмена и ускорения восстановления структуры волос.
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]">
                      Записаться на RF
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About + Process Image */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto reveal-up opacity-0">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg">
                <img src="/images/services/trichology/process-rf.png" alt="RF-лифтинг Vivace" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div>
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Технология</span>
                <h2 className="text-[3rem] sm:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                  Vivace <span className="font-serif italic text-slate-400">RF</span>
                </h2>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed mb-4">
                  <span className="font-medium text-[#60c2ff]">Vivace</span> — аппарат последнего поколения с золотыми микроиглами. Регулируемая глубина проникновения от 0.5 до 3.5 мм позволяет точно воздействовать на глубину залегания волосяных фолликулов.
                </p>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">
                  Радиочастотная энергия прогревает ткани до оптимальной температуры, стимулируя неоколлагенез, улучшая кровоснабжение и активируя «спящие» волосяные луковицы.
                </p>
              </div>
            </div>
          </section>

          {/* Advantages */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Преимущества</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Почему <span className="font-serif italic text-slate-400">Vivace</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container max-w-6xl mx-auto">
              {advantages.map((a, i) => (
                <div key={i} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden stagger-item opacity-0 scroll-glow-item">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <Icon icon={a.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300">{a.title}</h3>
                  <p className="text-base text-slate-600 font-light mt-2 leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Steps */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Этапы</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">Ход <span className="font-serif italic text-slate-400">процедуры</span></h2>
            </div>
            <div className="flex flex-col stagger-container">
              <EditorialList items={steps} />
            </div>
          </section>

          {/* Before/After */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0">
            <div className="mb-16 text-center">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— До и после</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Результат <span className="font-serif italic text-slate-400">Vivace</span></h2>
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

          {/* Pricing */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full">
            <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)] reveal-up opacity-0">
              <div className="mb-12 border-b border-slate-100 pb-6">
                <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">Стоимость <span className="font-serif italic text-slate-400">RF</span></h2>
              </div>
              <div className="flex flex-col divide-y divide-slate-100">
                {prices.map((p, i) => (
                  <div key={i} className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{p.name}</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{p.price}</span>
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
              <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">
                  Технология Vivace <span className="font-serif italic text-slate-400">для ваших волос</span>
                </h2>
                <p className="text-slate-400 font-light text-lg mb-12 max-w-lg">Запишитесь на консультацию трихолога. Расскажем подробнее о RF-лифтинге и подберём курс.</p>
                <div className="relative inline-flex group">
                  <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                  <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3">
                    Консультация трихолога
                    <Icon icon="solar:arrow-right-linear" className="text-xl" />
                  </button>
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
