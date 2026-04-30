'use client';
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

const INDICATIONS = [
  { title: 'Деформационное старение', desc: 'Плотная кожа с отёчностью, пастозностью и опущением', icon: 'solar:hand-stars-linear' },
  { title: 'Расширенные поры', desc: 'Повышенная активность сальных желёз, тусклый вид', icon: 'solar:waterdrop-linear' },
  { title: 'Постакне', desc: 'Покраснения, неровная текстура, атрофические рубцы', icon: 'solar:star-linear' },
  { title: 'Морщины', desc: 'Мелкие и средние морщины лица и шеи', icon: 'solar:eye-linear' },
  { title: 'Дряблость кожи', desc: 'Снижение упругости и эластичности', icon: 'solar:magic-stick-3-linear' },
  { title: 'Рубцы и шрамы', desc: 'Атрофические и гипертрофические рубцы', icon: 'solar:clipboard-text-linear' },
];

const ADVANTAGES = [
  { title: 'Безопасность', desc: 'Используются одноразовые стерильные аппликаторы. Ваша кожа защищена от раздражений и аллергии.' },
  { title: 'Быстрое восстановление', desc: 'Диаметр микроповреждений менее 0,1 мм. Покраснение проходит за 4−6 часов.' },
  { title: 'Высокая эффективность', desc: 'Одновременно воздействует на большую поверхность, мягкие ткани прогреваются одномоментно.' },
  { title: 'Низкая чувствительность', desc: 'Проникает на глубину до 3,5 мм, равномерно распределяя тепловую энергию. Минимум болевых ощущений.' },
];

const RESULTS = [
  'Улучшается текстура и тонус кожи',
  'Сокращается кожный лоскут',
  'Появляется лифтинг-эффект',
  'Уменьшаются рубцы постакне',
  'Выравнивается рельеф',
  'Разглаживаются мелкие морщины',
  'Поры становятся менее заметными',
];

const STEPS = [
  { title: 'Консультация', desc: 'Знакомитесь с лечащим врачом, сообщаете о жалобах. Доктор обследует кожу, устанавливает отсутствие противопоказаний и даёт рекомендации. Длится 15-30 минут.' },
  { title: 'Процедура RF-лифтинг', desc: 'Наносим аппликационную анестезию. Ультратонкие золотые иглы заходят на заданную глубину, подаётся радиоволновая энергия 60−65°C. Коллагеновые волокна сокращаются, рельеф уплотняется. Занимает 60-90 минут.' },
  { title: 'Восстановление', desc: 'Локальная отёчность и покраснения проходят через 4−6 часов. Первые заметные улучшения видно на 4−5 день, эффект нарастает в течение 1−1,5 месяца.' },
];

const PRICES = [
   { name: 'Vivace лицо', price: '36 000 ₽' },
   { name: 'Vivace лицо и шея', price: '38 000 ₽' },
   { name: 'Vivace лицо, шея и декольте', price: '54 000 ₽' },
   { name: 'Vivace зона вокруг глаз', price: '20 000 ₽' },
   { name: 'Vivace кисти рук', price: '28 000 ₽' },
   { name: 'Vivace рубцы постакне', price: '25 000 ₽' },
   { name: 'Vivace растяжки', price: '28 000 ₽' },
   { name: 'Vivace шея', price: '28 000 ₽' },
   { name: 'Vivace декольте', price: '36 000 ₽' },
   { name: 'Vivace живот', price: '36 000 ₽' },
   { name: 'Vivace бедра', price: '36 000 ₽' },
   { name: 'Vivace комплексная зона', price: '36 000 ₽' },];

const FAQ = [
  { q: 'Это больно?', a: 'Vivace — самый безболезненный микроигольчатый RF-лифтинг. Перед процедурой наносится аппликационная анестезия. Ощущения минимальны.' },
  { q: 'Сколько процедур нужно?', a: 'Для выраженного результата рекомендуем курс из 3-5 процедур с интервалом 4-6 недель. Каждый сеанс даёт накопительный эффект.' },
  { q: 'Когда виден результат?', a: 'Первые улучшения видны на 4-5 день. Максимальный эффект нарастает в течение 1-1,5 месяцев за счёт нового коллагена.' },
  { q: 'Можно ли делать летом?', a: 'Да, Vivace безопасен в любое время года при соблюдении рекомендаций по защите от солнца.' },
];

const DOCTORS = [
   { name: 'Специалист SkinMed', role: 'Главный врач, косметолог, дерматолог', photo: '/images/doctors/kachyurina.jpg' },
   { name: 'Специалист SkinMed', role: 'Врач-косметолог, ботулинотерапевт', photo: '/images/doctors/muhametzanova.jpg' },
   { name: 'Специалист SkinMed', role: 'Врач-косметолог, дерматолог', photo: '/images/doctors/emelina.jpg' },
   { name: 'Специалист SkinMed', role: 'Врач-косметолог, дерматолог, трихолог', photo: '/images/doctors/glubokaya.jpg' },
];

export default function VivaceClient() {
  useEffect(() => { let observer: IntersectionObserver | null = null; const initObserver = () => { if (window.innerWidth > 768) { if (observer) { observer.disconnect(); observer = null; } document.querySelectorAll('.mobile-glow-active').forEach(el => el.classList.remove('mobile-glow-active')); return; } if (!observer) { observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('mobile-glow-active'); else entry.target.classList.remove('mobile-glow-active'); }); }, { rootMargin: "-40% 0px -40% 0px", threshold: 0 }); setTimeout(() => { document.querySelectorAll('.scroll-glow-item').forEach(el => observer?.observe(el)); }, 500); } }; initObserver(); window.addEventListener('resize', initObserver); return () => { window.removeEventListener('resize', initObserver); if (observer) observer.disconnect(); }; }, []);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen relative font-sans text-slate-800 flex flex-col">
      <AnimationsProvider />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]"><div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/90 via-[#f0f5fa]/80 to-[#e4eaf0]/90"></div><div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] bg-gradient-to-br from-[#60c2ff]/30 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "25s" }}></div><div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] bg-gradient-to-tl from-[#80d0ff]/20 via-[#cddce9]/40 to-transparent blur-[5rem] opacity-40 mix-blend-normal animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}></div><div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-[100%] bg-gradient-to-bl from-[#b8e0ff]/30 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "30s", animationDirection: "reverse" }}></div><div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div></div>
      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        <main className="w-full mt-12 sm:mt-16">
          <section className="mb-6 md:mb-10 reveal-up opacity-0"><div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500"><a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</a><Icon icon="mdi:chevron-right" className="text-slate-400" /><a href="/services/apparatnaya-kosmetologiya" className="hover:text-[#60c2ff] transition-colors duration-300">Аппаратная косметология</a><Icon icon="mdi:chevron-right" className="text-slate-400" /><span className="text-slate-700 font-medium">RF-лифтинг Vivace</span></div></section>

          {/* Hero */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0"><img src="/images/hardware/heroes/vivace-hero.png" alt="RF-лифтинг Vivace" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent z-10"></div><div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div></div>
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6"><span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>Микроигольчатый RF нового поколения</div>
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">RF-лифтинг <br /><span className="font-serif italic text-[#60c2ff]/80">Vivace</span></h1>
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">Естественный лифтинг-эффект без боли и заметное сияние кожи за одну процедуру. Чёткий контур без операции, упругость и свежесть.</p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn"><div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div><button onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]">Записаться на RF-лифтинг<Icon icon="solar:arrow-right-linear" className="text-xl" /></button></div>
                  <div className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white font-light"><Icon icon="solar:bolt-linear" className="text-2xl text-[#60c2ff]" /><span>Гладкая, ровная кожа</span></div>
                </div>
              </div>
            </div>
          </section>

          {/* Cases */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0">
            <div className="mb-16 text-center"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— До и после</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Клинические <span className="font-serif italic text-slate-400">результаты</span></h2></div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {['/images/hardware/rf-lifting-vivace/rf-lifting-vivace_2.webp', '/images/hardware/rf-lifting-vivace/rf-lifting-vivace_3.webp', '/images/hardware/rf-lifting-vivace/rf-lifting-vivace_4.webp'].map((img, i) => (
                <div key={i} className="rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)] group">
                  <img src={img} alt={`Результат RF-лифтинг ${i+1}`} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                </div>
              ))}
            </div>
          </section>

          {/* Indications */}
          <section className="mb-32 lg:mb-48 relative z-10"><div className="text-center mb-16 reveal-up opacity-0"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Показания</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Когда Vivace даёт <span className="font-serif italic text-slate-400">лучший результат</span></h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container">
              {INDICATIONS.map((item, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden stagger-item opacity-0 scroll-glow-item">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110"><Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" /></div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300">{item.title}</h3>
                  <p className="text-base text-slate-600 font-light mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0"><div className="mb-16 text-center"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Эффект</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Как меняется <span className="font-serif italic text-slate-400">кожа</span></h2></div>
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center"><div className="flex flex-col gap-4">{RESULTS.map((t, i) => (<div key={i} className="flex items-center gap-4 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-sm"><Icon icon="solar:check-circle-bold" className="text-2xl text-[#60c2ff] shrink-0" /><p className="text-slate-700 font-light text-lg">{t}</p></div>))}</div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)]"><img src="/images/hardware/rf-lifting-vivace/rf-lifting-vivace_8.webp" alt="Vivace процедура" className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700" /></div>
            </div>
          </section>

          {/* Advantages */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto"><div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Технологии</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">Преимущества <br /><span className="font-serif italic text-slate-400">Vivace</span></h2></div>
            <div className="flex flex-col stagger-container"><EditorialList items={ADVANTAGES} /></div>
          </section>

          {/* Video */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0 text-center"><div className="mb-12"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Видео</span><h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.1]">RF-лифтинг без боли <span className="font-serif italic text-slate-400">и дискомфорта</span></h2></div>
            <div className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.1)] border border-white/80 bg-white p-2"><video controls className="w-full aspect-video object-cover rounded-[2.5rem]" poster="/images/hardware/rf-lifting-vivace/rf-lifting-vivace_1.jpg"><source src="https://smasclinicakzn.online/Vivace_site.mp4?dl=0" type="video/mp4" /></video></div>
          </section>

          {/* Steps */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full"><div className="mb-12 border-b border-slate-200/50 pb-6 reveal-up opacity-0"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Процесс</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">Этапы <span className="font-serif italic text-slate-400">процедуры</span></h2></div>
            <div className="stagger-container flex flex-col"><EditorialList items={STEPS} /></div>
          </section>

          {/* Pricing */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full"><div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)] reveal-up opacity-0"><div className="mb-12 border-b border-slate-100 pb-6"><h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">Стоимость <span className="font-serif italic text-slate-400">Vivace</span></h2></div>
            <div className="flex flex-col divide-y divide-slate-100">{PRICES.map((price, idx) => (<div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2"><span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{price.name}</span><span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{price.price}</span></div>))}</div></div>
          </section>

          {/* Doctors */}
          <section className="mb-32 lg:mb-48 relative z-10"><div className="text-center mb-16 reveal-up opacity-0"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Команда</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Наши <span className="font-serif italic text-slate-400">эксперты</span></h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">{DOCTORS.map((doc, index) => (<div key={index} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] overflow-hidden shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 stagger-item opacity-0"><div className="h-72 overflow-hidden"><img src={doc.photo} alt={doc.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" /></div><div className="p-6"><h3 className="text-lg font-medium text-slate-900 mb-1 group-hover:text-[#60c2ff] transition-colors duration-300">{doc.name}</h3><p className="text-base text-slate-600 font-light">{doc.role}</p></div></div>))}</div>
          </section>

          {/* FAQ */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto w-full relative z-10"><div className="text-center mb-16 reveal-up opacity-0"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— FAQ</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Частые <span className="font-serif italic text-slate-400">вопросы</span></h2></div>
            <div className="flex flex-col gap-4 stagger-container">{FAQ.map((faq, index) => (<div key={index} className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 stagger-item opacity-0"><button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex items-center justify-between w-full p-6 md:p-8 text-left"><h3 className="text-lg md:text-xl font-medium text-slate-900 pr-4">{faq.q}</h3><div className={`w-10 h-10 rounded-full bg-[#60c2ff]/10 flex items-center justify-center shrink-0 transition-transform duration-500 ${openFaq === index ? 'rotate-45 bg-[#60c2ff]' : ''}`}><Icon icon="solar:add-linear" className={`text-xl ${openFaq === index ? 'text-white' : 'text-[#60c2ff]'}`} /></div></button><div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-96 pb-6 md:pb-8' : 'max-h-0'}`}><p className="text-[17px] text-slate-600 font-light leading-relaxed px-6 md:px-8">{faq.a}</p></div></div>))}</div>
          </section>

          {/* CTA */}
          <section className="relative z-10 reveal-up opacity-0"><div className="relative overflow-hidden rounded-[3rem] bg-[#050B14] p-10 md:p-16 lg:p-24 border border-white/10 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)]"><div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[120px] pointer-events-none" /><div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#fbbf24]/5 rounded-full blur-[100px] pointer-events-none" /><div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto"><div className="flex-1 text-center lg:text-left"><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">Запишитесь на <br /><span className="font-serif italic text-slate-400">Vivace</span></h2><p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">Оставьте заявку и получите зону шеи в подарок. Предложение действует до 30 апреля!</p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8"><div className="relative inline-flex group"><div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div><button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3">Бесплатная консультация<Icon icon="solar:arrow-right-linear" className="text-xl" /></button></div></div></div>
              <div className="hidden lg:flex w-64 h-64 rounded-full border border-[#60c2ff]/20 relative items-center justify-center"><div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div><div className="text-center"><Icon icon="solar:magic-stick-3-bold-duotone" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" /><span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/50 leading-tight">SkinMed<br/>Premium Care</span></div></div>
            </div></div>
          </section>
        </main>
        </div>
    <div className="relative z-20 w-full mt-auto">
        <Footer />
      </div>
</div>
  );
}
