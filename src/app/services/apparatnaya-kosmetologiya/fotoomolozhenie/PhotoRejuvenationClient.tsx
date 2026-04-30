'use client';
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

const INDICATIONS = [
  { title: 'Пигментные пятна', desc: 'Удаление пигментации и веснушек', icon: 'solar:sun-linear' },
  { title: 'Сосудистые звёздочки', desc: 'Удаление капилляров на лице и носу', icon: 'solar:heart-linear' },
  { title: 'Купероз и розацеа', desc: 'Лечение покраснений и сосудистой сетки', icon: 'solar:pallete-2-linear' },
  { title: 'Акне и постакне', desc: 'Лечение воспалений и застойных пятен', icon: 'solar:star-linear' },
  { title: 'Тусклый тон кожи', desc: 'Естественный ровный тон без тонального крема', icon: 'solar:magic-stick-3-linear' },
  { title: 'Фотостарение', desc: 'Омоложение, подтяжка и уплотнение кожи', icon: 'solar:shield-check-linear' },
];

const STEPS = [
  { title: 'Консультация', desc: 'Врач тщательно собирает анамнез, изучает состояние кожи и убеждается в отсутствии противопоказаний.' },
  { title: 'Подготовка', desc: 'Пациенту надеваются защитные очки, на зону лечения наносится специальный гель.' },
  { title: 'IPL-терапия', desc: 'Широкополосный луч света проникает в глубокие слои, запуская регенерацию. Продолжительность — 20-40 минут.' },
  { title: 'Финальный уход', desc: 'Специальный крем снимает отёчность, ускоряет заживление и защищает кожу.' },
];

const PRICES = [
   { name: 'Фотоомоложение лица', price: '2 800 ₽' },
   { name: 'Фотоомоложение лица и шеи', price: '8 000 ₽' },
   { name: 'Фотоомоложение декольте', price: '8 000 ₽' },
   { name: 'Удаление сосудов IPL', price: '8 000 ₽' },
   { name: 'Лечение пигментации', price: '9 900 ₽' },
   { name: 'IPL кисти рук', price: '9 000 ₽' },
   { name: 'IPL комплекс лицо', price: '12 000 ₽' },
   { name: 'IPL лицо, шея и декольте', price: '15 900 ₽' },
   { name: 'Локальная зона IPL', price: '20 000 ₽' },
   { name: 'Консультация косметолога', price: '30 000 ₽' },];

const AFTERCARE = ['Первые 2 недели не загорайте и не посещайте солярий','Пользуйтесь SPF для защиты от солнца','1 неделю не посещайте баню и бассейн','2 недели не пользуйтесь пилингами и скрабами'];
const FAQ = [
  { q: 'Больно ли это?', a: 'Процедура на аппарате IPL Clearlight комфортна. Пациенты отмечают отсутствие боли и сильных отёков.' },
  { q: 'Когда виден результат?', a: 'Результат имеет накопительный эффект и лучше всего проявляется через 2 недели после процедуры. Сохраняется до 1,5 лет.' },
  { q: 'Сколько процедур нужно?', a: 'Для лифтинга и уплотнения — курс 2-4 процедуры. Для удаления сосудов — часто достаточно 1-2 процедур.' },
  { q: 'Можно ли делать летом?', a: 'При отсутствии противопоказаний терапия проводится в любое время года.' },
];

const DOCTORS = [
   { name: 'Специалист SkinMed', role: 'Главный врач, косметолог, дерматолог', photo: '/images/doctors/kachyurina.jpg' },
   { name: 'Специалист SkinMed', role: 'Врач-косметолог, ботулинотерапевт', photo: '/images/doctors/muhametzanova.jpg' },
   { name: 'Специалист SkinMed', role: 'Врач-косметолог, дерматолог, лазеролог', photo: '/images/doctors/nikiforova.jpg' },
   { name: 'Специалист SkinMed', role: 'Врач-косметолог, дерматолог, трихолог', photo: '/images/doctors/glubokaya.jpg' },
];

export default function PhotoRejuvenationClient() {
  useEffect(() => { let o: IntersectionObserver | null = null; const init = () => { if (window.innerWidth > 768) { if (o) { o.disconnect(); o = null; } document.querySelectorAll('.mobile-glow-active').forEach(el => el.classList.remove('mobile-glow-active')); return; } if (!o) { o = new IntersectionObserver((es) => { es.forEach(e => { if (e.isIntersecting) e.target.classList.add('mobile-glow-active'); else e.target.classList.remove('mobile-glow-active'); }); }, { rootMargin: "-40% 0px -40% 0px", threshold: 0 }); setTimeout(() => { document.querySelectorAll('.scroll-glow-item').forEach(el => o?.observe(el)); }, 500); } }; init(); window.addEventListener('resize', init); return () => { window.removeEventListener('resize', init); if (o) o.disconnect(); }; }, []);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen relative font-sans text-slate-800 flex flex-col">
      <AnimationsProvider />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]"><div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/90 via-[#f0f5fa]/80 to-[#e4eaf0]/90"></div><div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] bg-gradient-to-br from-[#60c2ff]/30 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "25s" }}></div><div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] bg-gradient-to-tl from-[#80d0ff]/20 via-[#cddce9]/40 to-transparent blur-[5rem] opacity-40 mix-blend-normal animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}></div><div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-[100%] bg-gradient-to-bl from-[#b8e0ff]/30 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "30s", animationDirection: "reverse" }}></div><div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div></div>
      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        <main className="w-full mt-12 sm:mt-16">
          <section className="mb-6 md:mb-10 reveal-up opacity-0"><div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500"><a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</a><Icon icon="mdi:chevron-right" className="text-slate-400" /><a href="/services/apparatnaya-kosmetologiya" className="hover:text-[#60c2ff] transition-colors duration-300">Аппаратная косметология</a><Icon icon="mdi:chevron-right" className="text-slate-400" /><span className="text-slate-700 font-medium">Фотоомоложение IPL</span></div></section>

          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0"><img src="/images/hardware/heroes/photorejuvenation-hero.png" alt="Фотоомоложение IPL" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent z-10"></div><div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div></div>
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#fbbf24]/20 backdrop-blur-md border border-[#fbbf24]/30 text-white text-sm font-medium tracking-wide mb-6"><span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>До 30 апреля — БИОревитализация в подарок</div>
                <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">Фотоомоложение <br /><span className="font-serif italic text-[#60c2ff]/80">IPL</span></h1>
                <p className="text-lg md:text-xl font-light text-slate-300 mb-4 max-w-2xl leading-relaxed">Ровный тон кожи без тонального крема. Удаление пигментации, сосудов, покраснений. Видимый результат за 1 процедуру.</p>
                <div className="flex items-center gap-4 mb-8"><span className="text-4xl font-light text-white">15 900 ₽</span><span className="text-sm text-slate-400 font-light">/ всё лицо</span></div>
                <div className="flex flex-wrap gap-6 items-center"><div className="relative inline-flex group/btn"><div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div><button onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]">Записаться на процедуру<Icon icon="solar:arrow-right-linear" className="text-xl" /></button></div></div>
              </div>
            </div>
          </section>

          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0"><div className="mb-16 text-center"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— До и после</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Результаты <span className="font-serif italic text-slate-400">IPL-терапии</span></h2><p className="text-lg text-slate-500 font-light">Более 4 000 пациентов отмечают более свежий, ровный тон кожи после курса</p></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">{['/images/hardware/fotoomolozhenie/fotoomolozhenie_2.jpg','/images/hardware/fotoomolozhenie/fotoomolozhenie_3.jpg','/images/hardware/fotoomolozhenie/fotoomolozhenie_4.jpg','/images/hardware/fotoomolozhenie/fotoomolozhenie_5.jpg','/images/hardware/fotoomolozhenie/fotoomolozhenie_6.jpg'].slice(0,3).map((img, i) => (<div key={i} className="rounded-[2.5rem] overflow-hidden shadow-lg group"><img src={img} alt={`Результат IPL ${i+1}`} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-[1s]" /></div>))}</div>
          </section>

          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto reveal-up opacity-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— О процедуре</span>
                <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.1] mb-8">Что такое <span className="font-serif italic text-slate-400">фотоомоложение?</span></h2>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed mb-6">IPL-терапия использует технологию высокоинтенсивных световых вспышек разной длины волны, которые мягко проникают в кожу и стимулируют естественные процессы регенерации.</p>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">Мы единственная клиника в Казани, которая работает на инновационном аппарате <span className="font-medium text-[#60c2ff]">CLEARLIGHT IPL</span>. Видимый результат уже после первой процедуры.</p>
              </div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)]"><img src="/images/hardware/fotoomolozhenie/fotoomolozhenie_7.webp" alt="Фотоомоложение IPL" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" /></div>
            </div>
          </section>

          <section className="mb-32 lg:mb-48 relative z-10"><div className="text-center mb-16 reveal-up opacity-0"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Показания</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Что <span className="font-serif italic text-slate-400">решает IPL</span></h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container max-w-6xl mx-auto">{INDICATIONS.map((item, i) => (<div key={i} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden stagger-item opacity-0 scroll-glow-item"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div><div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110"><Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" /></div><h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300">{item.title}</h3><p className="text-base text-slate-600 font-light mt-2">{item.desc}</p></div>))}</div>
          </section>

          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full"><div className="mb-12 border-b border-slate-200/50 pb-6 reveal-up opacity-0"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Процесс</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">Как проходит <span className="font-serif italic text-slate-400">процедура</span></h2></div>
            <div className="stagger-container flex flex-col"><EditorialList items={STEPS} /></div>
          </section>

          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full"><div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)] reveal-up opacity-0"><div className="mb-12 border-b border-slate-100 pb-6"><h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">Стоимость <span className="font-serif italic text-slate-400">фотоомоложения</span></h2><p className="text-base text-[#60c2ff] font-medium mt-2">До 30 апреля — БИОревитализация в подарок</p></div>
            <div className="flex flex-col divide-y divide-slate-100">{PRICES.map((p, i) => (<div key={i} className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2"><span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{p.name}</span><span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{p.price}</span></div>))}</div></div>
          </section>

          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto w-full reveal-up opacity-0"><div className="mb-12 text-center"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Рекомендации</span><h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.1]">Уход <span className="font-serif italic text-slate-400">после</span></h2></div>
            <div className="flex flex-col gap-4">{AFTERCARE.map((t, i) => (<div key={i} className="flex items-center gap-4 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-sm"><Icon icon="solar:check-read-linear" className="text-2xl text-[#60c2ff] shrink-0" /><span className="text-base text-slate-700 font-normal leading-relaxed">{t}</span></div>))}</div>
          </section>

          <section className="mb-32 lg:mb-48 relative z-10"><div className="text-center mb-16 reveal-up opacity-0"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Команда</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Наши <span className="font-serif italic text-slate-400">эксперты</span></h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">{DOCTORS.map((d, i) => (<div key={i} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] overflow-hidden shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 stagger-item opacity-0"><div className="h-72 overflow-hidden"><img src={d.photo} alt={d.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" /></div><div className="p-6"><h3 className="text-lg font-medium text-slate-900 mb-1 group-hover:text-[#60c2ff] transition-colors duration-300">{d.name}</h3><p className="text-base text-slate-600 font-light">{d.role}</p></div></div>))}</div>
          </section>

          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto w-full relative z-10"><div className="text-center mb-16 reveal-up opacity-0"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— FAQ</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Частые <span className="font-serif italic text-slate-400">вопросы</span></h2></div>
            <div className="flex flex-col gap-4 stagger-container">{FAQ.map((f, i) => (<div key={i} className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 stagger-item opacity-0"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex items-center justify-between w-full p-6 md:p-8 text-left"><h3 className="text-lg md:text-xl font-medium text-slate-900 pr-4">{f.q}</h3><div className={`w-10 h-10 rounded-full bg-[#60c2ff]/10 flex items-center justify-center shrink-0 transition-transform duration-500 ${openFaq === i ? 'rotate-45 bg-[#60c2ff]' : ''}`}><Icon icon="solar:add-linear" className={`text-xl ${openFaq === i ? 'text-white' : 'text-[#60c2ff]'}`} /></div></button><div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-96 pb-6 md:pb-8' : 'max-h-0'}`}><p className="text-[17px] text-slate-600 font-light leading-relaxed px-6 md:px-8">{f.a}</p></div></div>))}</div>
          </section>

          <section className="relative z-10 reveal-up opacity-0"><div className="relative overflow-hidden rounded-[3rem] bg-[#050B14] p-10 md:p-16 lg:p-24 border border-white/10 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)]"><div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[120px] pointer-events-none" /><div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#fbbf24]/5 rounded-full blur-[100px] pointer-events-none" /><div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div><div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto"><div className="flex-1 text-center lg:text-left"><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">Запишитесь на <br /><span className="font-serif italic text-slate-400">фотоомоложение</span></h2><p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">Получите биоревитализацию в подарок! Предложение действует до 30 апреля.</p><div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8"><div className="relative inline-flex group"><div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div><button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3">Бесплатная консультация<Icon icon="solar:arrow-right-linear" className="text-xl" /></button></div></div></div><div className="hidden lg:flex w-64 h-64 rounded-full border border-[#60c2ff]/20 relative items-center justify-center"><div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div><div className="text-center"><Icon icon="solar:sun-bold-duotone" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" /><span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/50 leading-tight">SkinMed<br/>Premium Care</span></div></div></div></div>
          </section>
        </main>
        </div>
    <div className="relative z-20 w-full mt-auto">
        <Footer />
      </div>
</div>
  );
}
