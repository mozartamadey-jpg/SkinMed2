'use client';
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

const INDICATIONS = [
  { title: 'Брыли', desc: '«Бульдожьи щёчки» и провисание нижней трети лица', icon: 'solar:hand-stars-linear' },
  { title: 'Второй подбородок', desc: 'Снижение упругости кожи в субментальной зоне', icon: 'solar:heart-linear' },
  { title: 'Потеря овала', desc: 'Контур лица стал менее чётким, лицо «поплыло»', icon: 'solar:magic-stick-3-linear' },
  { title: 'Дряблость кожи', desc: 'Снижение тургора и эластичности', icon: 'solar:waterdrop-linear' },
  { title: 'Нависшие веки', desc: 'Опущение верхних век', icon: 'solar:eye-linear' },
  { title: 'Носогубные складки', desc: 'Выраженные морщины от носа до уголков губ', icon: 'solar:pallete-2-linear' },
  { title: 'Отёчность лица', desc: '«Уставший» вид и пастозность', icon: 'solar:temperature-linear' },
  { title: 'Профилактика', desc: 'Способ «поймать момент» и отложить радикальные меры', icon: 'solar:shield-check-linear' },
];

const ADVANTAGES = [
  { title: 'Клинически доказанный результат', desc: 'До 95% пациентов отмечают лифтинг и выраженное улучшение качества кожи за 1 процедуру. Максимальный эффект — через 2−3 месяца. Держится до 1,5 лет.' },
  { title: 'Безопасен в любое время года', desc: 'Эффективнее аналогов, подходит для работы по лицу и телу. Безопасен для применения даже в летний сезон.' },
  { title: 'Сертифицирован FDA и CE', desc: 'Аппарат сертифицирован FDA, CE и Росздравнадзором, что подтверждает его эффективность и безопасность для пациентов.' },
  { title: 'Комфорт без боли', desc: 'Процедура проходит без боли, ожогов и повреждения кожи — ощущается как мягкое тепло и лёгкое покалывание.' },
];

const STEPS = [
  { title: 'Консультация и подготовка', desc: 'Осмотр и сбор анамнеза. Специалист изучает особенности Вашей кожи, фиксирует эстетические задачи и исключает противопоказания. Делается фото «до» для объективной оценки.' },
  { title: 'Ультразвуковой лифтинг', desc: 'Аппарат Bison мягко прогревает ткани на глубине до 4,5 мм, активируя сокращение коллагеновых волокон и запуск неоколлагенеза. Процедура длится 30−90 минут.' },
  { title: 'Результат', desc: 'После завершения врач делает фото «после» и даёт рекомендации по домашнему уходу. Кожа подтягивается уже в день процедуры.' },
];

const AFTERCARE = [
  'В день процедуры — не пользуйтесь макияжем',
  'Избегайте сильного нагрева: сауна, баня — 3−5 дней',
  'Используйте крем с SPF 50',
];

const FAQ = [
  { q: 'Сколько длится эффект?', a: 'Около 1,5−2 лет. Можно повторять раз в год для поддержания результата.' },
  { q: 'Это больно?', a: 'Нет, ощущается как лёгкое покалывание и тепло. Возможно нанесение местной аппликационной анестезии.' },
  { q: 'Когда виден результат?', a: 'Сразу после процедуры — подтяжка. Максимум — через 2−3 месяца за счёт нарастания нового коллагена.' },
  { q: 'Можно ли делать летом?', a: 'Да. Ультразвук не повышает фоточувствительность кожи.' },
  { q: 'Чем отличается от аналогов?', a: 'Это единственная процедура, воздействующая на SMAS без операции — на слой кожи, отвечающий за упругость и лифтинг.' },
];

const DOCTORS = [
   { name: 'Специалист SkinMed', role: 'Главный врач, косметолог, дерматолог', photo: '/images/doctors/kachyurina.jpg' },
   { name: 'Специалист SkinMed', role: 'Врач-косметолог, дерматолог, трихолог', photo: '/images/doctors/glubokaya.jpg' },
   { name: 'Специалист SkinMed', role: 'Врач-косметолог, дерматолог, лазеролог', photo: '/images/doctors/nikiforova.jpg' },
   { name: 'Специалист SkinMed', role: 'Врач-косметолог, ботулинотерапевт', photo: '/images/doctors/muhametzanova.jpg' },
];

export default function BisonSmasClient() {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const initObserver = () => {
      if (window.innerWidth > 768) { if (observer) { observer.disconnect(); observer = null; } document.querySelectorAll('.mobile-glow-active').forEach(el => el.classList.remove('mobile-glow-active')); return; }
      if (!observer) { observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('mobile-glow-active'); else entry.target.classList.remove('mobile-glow-active'); }); }, { rootMargin: "-40% 0px -40% 0px", threshold: 0 }); setTimeout(() => { document.querySelectorAll('.scroll-glow-item').forEach(el => observer?.observe(el)); }, 500); }
    };
    initObserver(); window.addEventListener('resize', initObserver);
    return () => { window.removeEventListener('resize', initObserver); if (observer) observer.disconnect(); };
  }, []);

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
          {/* Breadcrumbs */}
          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <a href="/services/apparatnaya-kosmetologiya" className="hover:text-[#60c2ff] transition-colors duration-300">Аппаратная косметология</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">SMAS-лифтинг Bizon</span>
            </div>
          </section>
          {/* Hero */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img src="/images/hardware/heroes/bison-hero.png" alt="SMAS-лифтинг Bizon" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent z-10"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  Нарастающий эффект до 1,5 лет
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  SMAS-лифтинг <br /><span className="font-serif italic text-[#60c2ff]/80">Bizon</span>
                </h1>
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  Безоперационная подтяжка лица с первого сеанса. Глубокая компактизация овала, устранение брылей и дряблости. Врачи с опытом 7+ лет, лифтинг без боли и реабилитации.
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]">
                      Записаться на SMAS-лифтинг
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto reveal-up opacity-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— О процедуре</span>
                <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.1] mb-8">
                  Что такое <span className="font-serif italic text-slate-400">SMAS-лифтинг?</span>
                </h2>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed mb-6">
                  Ультразвуковой SMAS-лифтинг — альтернатива пластике лица. Это безоперационная процедура, воздействующая на глубокий мышечно-апоневротический слой кожи (SMAS).
                </p>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">
                  Аппарат <span className="font-medium text-[#60c2ff]">Bison</span> направляет фокусированный ультразвук на глубину до 4,5 мм, где запускается образование нового коллагена. В результате пациент получает — подтянутый овал, упругую кожу и разглаженные морщины.
                </p>
              </div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)]">
                <img src="/images/hardware/smas-lifting-bison/smas-lifting-bison_2.jpg" alt="SMAS-лифтинг Bizon" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </section>
          {/* Indications */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Показания</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Кому <span className="font-serif italic text-slate-400">подойдёт</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-container">
              {INDICATIONS.map((item, index) => (
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
          {/* Cases */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0">
            <div className="mb-16 text-center">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Эффект</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Результат <span className="font-serif italic text-slate-400">лечения</span></h2>
              <p className="text-lg sm:text-xl text-slate-500 font-light max-w-4xl mx-auto">Фотогалерея с результатами реальных пациентов</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { before: '/images/hardware/smas-lifting-bison/smas-lifting-bison_4.webp', after: '/images/hardware/smas-lifting-bison/smas-lifting-bison_3.webp', descB: 'Отёчность, дряблость нижней трети лица, видны брыли', descA: 'Компактное, свежее лицо, снижение отёчности' },
                { before: '/images/hardware/smas-lifting-bison/smas-lifting-bison_6.webp', after: '/images/hardware/smas-lifting-bison/smas-lifting-bison_5.webp', descB: 'Нечёткий овал, снижение эластичности', descA: 'Овал подтянулся, провисание уменьшилось' },
              ].map((c, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-4">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg group flex-1">
                    <img src={c.before} alt="До" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                    <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium">До</div>
                  </div>
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg group flex-1">
                    <img src={c.after} alt="После" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                    <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium">После</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Advantages */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Преимущества</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">Почему <span className="font-serif italic text-slate-400">Bizon</span></h2>
            </div>
            <div className="flex flex-col stagger-container">
              <EditorialList items={ADVANTAGES} />
            </div>
          </section>
          {/* Steps */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full">
            <div className="mb-12 border-b border-slate-200/50 pb-6 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Этапы</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">Как <span className="font-serif italic text-slate-400">проходит</span></h2>
            </div>
            <div className="stagger-container flex flex-col">
              <EditorialList items={STEPS} />
            </div>
          </section>
          {/* Aftercare */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto w-full reveal-up opacity-0">
            <div className="mb-12 text-center">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Рекомендации</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.1]">Уход <span className="font-serif italic text-slate-400">после</span></h2>
            </div>
            <div className="flex flex-col gap-4">
              {AFTERCARE.map((tip, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-sm">
                  <Icon icon="solar:check-read-linear" className="text-2xl text-[#60c2ff] shrink-0" />
                  <span className="text-base text-slate-700 font-normal leading-relaxed">{tip}</span>
                </div>
              ))}
            </div>
          </section>
          {/* Doctors */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Команда</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Наши <span className="font-serif italic text-slate-400">эксперты</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
              {DOCTORS.map((doc, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] overflow-hidden shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 stagger-item opacity-0 scroll-glow-item">
                  <div className="h-72 overflow-hidden"><img src={doc.photo} alt={doc.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" /></div>
                  <div className="p-6"><h3 className="text-lg font-medium text-slate-900 mb-1 group-hover:text-[#60c2ff] transition-colors duration-300">{doc.name}</h3><p className="text-base text-slate-600 font-light">{doc.role}</p></div>
                </div>
              ))}
            </div>
          </section>
          {/* FAQ */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto w-full relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— FAQ</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Частые <span className="font-serif italic text-slate-400">вопросы</span></h2>
            </div>
            <div className="flex flex-col gap-4 stagger-container">
              {FAQ.map((faq, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 stagger-item opacity-0">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex items-center justify-between w-full p-6 md:p-8 text-left">
                    <h3 className="text-lg md:text-xl font-medium text-slate-900 pr-4">{faq.q}</h3>
                    <div className={`w-10 h-10 rounded-full bg-[#60c2ff]/10 flex items-center justify-center shrink-0 transition-transform duration-500 ${openFaq === index ? 'rotate-45 bg-[#60c2ff]' : ''}`}><Icon icon="solar:add-linear" className={`text-xl ${openFaq === index ? 'text-white' : 'text-[#60c2ff]'}`} /></div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-96 pb-6 md:pb-8' : 'max-h-0'}`}><p className="text-[17px] text-slate-600 font-light leading-relaxed px-6 md:px-8">{faq.a}</p></div>
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
                  <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">Запишитесь на <br /><span className="font-serif italic text-slate-400">SMAS-лифтинг</span></h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">Консультация врача-косметолога в подарок. Подберём протокол и ответим на все вопросы.</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group"><div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                      <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3">Бесплатная консультация<Icon icon="solar:arrow-right-linear" className="text-xl" /></button>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-64 h-64 rounded-full border border-[#60c2ff]/20 relative items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div>
                  <div className="text-center"><Icon icon="solar:shield-check-linear" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" /><span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/50 leading-tight">SkinMed<br/>Premium Care</span></div>
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
