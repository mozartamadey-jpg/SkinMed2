'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';

export default function MesotherapyClient() {
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
              <span className="text-slate-700 font-medium">Мезотерапия лица</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img src="/images/services/injection/inj_meso_face_1775859347281.png" alt="Мезотерапия лица" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent z-10"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  Витаминные коктейли
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  Мезотерапия <br /><span className="font-serif italic text-[#60c2ff]/80">лица</span>
                </h1>
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  Вернём сияние и блеск Вашей коже. Устраним усталый вид, обезвоженность и сухость. Осветлим пигментные пятна и разгладим мелкие морщины. Стоимость — от <span className="font-medium text-white border-b border-[#60c2ff]/50">6 000₽</span>.
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]">
                      Записаться на процедуру <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white font-light">
                    <Icon icon="solar:heart-bold-duotone" className="text-2xl text-[#60c2ff]" />
                    <span>Депозит 1000₽ в подарок</span>
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
                Что такое <span className="font-serif italic text-slate-400">мезотерапия?</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center reveal-up opacity-0">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)] group aspect-[4/5]">
                <img src="https://optim.tildacdn.com/tild6261-6665-4633-b131-356366393431/-/cover/520x420/center/center/-/format/webp/_DSC1323_1.jpg.webp" alt="Мезотерапия процесс" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]" />
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">
                  Мезотерапия — это инъекционная процедура, которая помогает коже чувствовать себя отлично, а Вам — выглядеть потрясающе. Во время терапии врач вводит индивидуально подобранный <span className="font-medium text-[#60c2ff]">мезококтейль</span> из витаминов, пептидов и аминокислот.
                </p>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">
                  Мезотерапию можно проводить с 25 лет. Метод подходит к разному типу кожи и эффективен для работы с пигментацией, обезвоженностью, потерей тонуса и первыми признаками старения. Коктейль даёт быстрый результат и не требует длительной реабилитации.
                </p>
                <ul className="space-y-3 mt-4">
                  {["Глубокое питание и увлажнение кожи", "Осветление пигментных пятен", "Разглаживание мелких морщин", "Восстановление тонуса и сияния лица"].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start"><Icon icon="solar:check-circle-bold" className="text-emerald-500 text-xl shrink-0 mt-0.5" /><span className="text-base text-slate-700 font-normal">{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Результаты до/после */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0">
            <div className="mb-16 text-center">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Эффект</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                До и <span className="font-serif italic text-slate-400">после</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                { img: "https://static.tildacdn.com/tild3862-3362-4361-b961-316533326666/_2-2.jpg", label: "Омоложение" },
                { img: "https://static.tildacdn.com/tild6364-6333-4430-b165-613063396162/_2-1.jpg", label: "Увлажнение" },
                { img: "https://static.tildacdn.com/tild3932-3132-4132-b662-373565373238/_2_2.jpg", label: "Сияние кожи" },
              ].map((item, i) => (
                <div key={i} className="relative rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)] group aspect-[4/5]">
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                  <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium text-slate-800">{item.label}</div>
                </div>
              ))}
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
                { title: "Пигментация", desc: "Осветление пятен и выравнивание тона", icon: "solar:sun-2-linear" },
                { title: "Морщины", desc: "Восстановление коллагена и эластина", icon: "solar:eye-linear" },
                { title: "Обезвоженность", desc: "Интенсивное увлажнение и защита", icon: "solar:waterdrop-linear" },
                { title: "Тусклый цвет", desc: "Здоровый цвет и микроциркуляция", icon: "solar:star-linear" },
                { title: "Зона вокруг глаз", desc: "Тёмные круги, отёки, синяки", icon: "solar:magic-stick-3-linear" },
                { title: "Шея и декольте", desc: "Омоложение деликатных зон", icon: "solar:heart-linear" },
                { title: "Кисти рук", desc: "Восстановление молодости рук", icon: "solar:hand-stars-linear" },
                { title: "Кожа головы", desc: "Укрепление и рост волос", icon: "solar:scissors-linear" },
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

          {/* Противопоказания */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto px-4 lg:px-8 reveal-up opacity-0">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-8 lg:p-12 border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-light text-slate-900 mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center"><Icon icon="solar:check-circle-bold" className="text-emerald-500 text-xl" /></div>
                  Врачи-эксперты
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    { img: "https://optim.tildacdn.com/tild3431-6364-4062-a161-623263306434/-/cover/192x192/center/center/-/format/webp/_DSC1298_1_1_1.jpg.webp", name: "Наши специалисты", role: "Врачи-косметологи с богатым опытом инъекционных процедур" },
                    { img: "https://optim.tildacdn.com/tild3234-3665-4539-b433-386134356265/-/cover/192x192/center/center/-/format/webp/_DSC1542_1_1_1.jpg.webp", name: "Индивидуальный подбор", role: "Мезококтейль подбирается с учётом Вашего типа кожи" },
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-50">
                      <img src={doc.img} alt={doc.name} className="w-16 h-16 rounded-full object-cover" />
                      <div>
                        <p className="text-base font-medium text-slate-900">{doc.name}</p>
                        <p className="text-base text-slate-600 font-light">{doc.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50 rounded-[3rem] p-8 lg:p-12 border border-slate-100">
                <h3 className="text-2xl font-light text-slate-900 mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center"><Icon icon="solar:danger-triangle-bold-duotone" className="text-red-500 text-xl" /></div>
                  Противопоказания
                </h3>
                <ul className="space-y-4">
                  {["Беременность и грудное вскармливание", "Обострение кожных заболеваний", "Аллергия на компоненты препарата", "Склонность к образованию келоидных рубцов", "Острые инфекционные заболевания"].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start pb-4 border-b border-white last:border-0 last:pb-0">
                      <span className="text-red-400 mt-1">•</span><span className="text-slate-600 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
                  { name: 'Лечение пигментации (Вискодерм Скинко 3,5мл)', price: '6 000₽' },
                  { name: 'Вискодерм Скинко 5 мл', price: '10 000₽' },
                  { name: 'Мезотерапия зоны вокруг глаз', price: 'от 6 000₽' },
                  { name: 'Мезотерапия шеи и декольте', price: 'от 8 000₽' },
                  { name: 'Мезотерапия кистей рук', price: 'от 6 000₽' },
                  { name: 'Мезотерапия кожи головы', price: 'от 6 000₽' },
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
                    Сияющая <br /><span className="font-serif italic text-slate-400">кожа</span> лица
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">Запишитесь на мезотерапию с депозитом 1000₽ в подарок. Наш специалист подберёт индивидуальный мезококтейль для Вашего типа кожи.</p>
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
