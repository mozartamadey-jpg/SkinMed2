'use client';

import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

export default function LaserRejuvenationClient() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 420 : 320;
      galleryRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    if (!isMobile) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
           entry.target.classList.add("mobile-glow-active");
        } else {
           entry.target.classList.remove("mobile-glow-active");
        }
      });
    }, { rootMargin: "-40% 0px -40% 0px", threshold: 0 });
    setTimeout(() => { document.querySelectorAll(".scroll-glow-item").forEach((el) => observer.observe(el)); }, 500);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative font-sans text-slate-800 bg-[#FAFAFA] overflow-hidden selection:bg-[#60c2ff]/30 flex flex-col">
      <AnimationsProvider />
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50vw] h-[80vh] bg-gradient-to-b from-[#e0f4ff]/50 to-transparent rounded-bl-full mix-blend-multiply blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-[20%] left-0 w-[30vw] h-[50vh] bg-gradient-to-r from-emerald-50 to-transparent rounded-r-full mix-blend-multiply blur-3xl pointer-events-none -z-10"></div>

      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />

        <main className="w-full mt-12 sm:mt-16 lg:mt-24 px-4 lg:px-8 max-w-[1400px] mx-auto">
          
          {/* HERO SECTION */}
          <section className="mb-24 lg:mb-32 relative stagger-container">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="w-full lg:w-5/12 flex flex-col pt-8 lg:pt-12 relative z-10">
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-6 stagger-item opacity-0">
                  — Аппарат премиум-класса
                </span>
                
                <h1 className="text-[3.5rem] sm:text-6xl lg:text-[6.5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-8 stagger-item opacity-0 relative z-10">
                  Лазерное омоложение<br/>
                  <span className="font-serif italic text-slate-400">PicoCare 450</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed mb-10 max-w-lg stagger-item opacity-0">
                  Подтянутая и сияющая кожа без агрессивной шлифовки, боли и долгой реабилитации. Устраняем морщины, пигментацию и расширенные поры за счет фотоакустического эффекта.
                </p>

                <div className="flex flex-col gap-4 mb-10 stagger-item opacity-0">
                  {[
                    "Идеально ровный тон и рельеф",
                    "Без сезонных ограничений (даже летом)",
                    "Реабилитация всего 1-2 дня"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-3 rounded-2xl border border-slate-100 w-fit pr-6">
                       <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                         <Icon icon="solar:check-read-bold" className="text-[#60c2ff] text-lg" />
                       </div>
                       <span className="text-slate-700 font-medium text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 stagger-item opacity-0">
                  <button 
                    onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                    className="group px-10 py-5 bg-slate-900 text-white rounded-full font-medium hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-3 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span>Записаться в клинику</span>
                    <Icon icon="solar:arrow-right-linear" className="text-xl group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-7/12 relative min-h-[500px] lg:min-h-[750px] rounded-[3rem] lg:rounded-[4rem] stagger-item opacity-0 bg-white p-2 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.1)] border border-slate-100">
                <div className="absolute inset-2 sm:inset-3 rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden group">
                  <img 
                    src="https://static.tildacdn.com/tild6431-6533-4465-a166-623536616431/11.jpg" 
                    alt="Лазерное омоложение PicoCare в СкинМед"
                    className="absolute object-cover w-full h-full scale-[1.02] group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-white max-w-xs transition-transform duration-500 hover:-translate-y-2 cursor-default">
                    <div className="flex items-center gap-4 mb-2">
                       <Icon icon="solar:star-fall-bold-duotone" className="text-3xl text-yellow-300" />
                       <span className="text-4xl font-light">1-3</span>
                    </div>
                    <p className="text-sm font-light text-white/80">процедуры для достижения стойкого вау-эффекта омоложения.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT PROCEDURE */}
          <section className="mb-32 lg:mb-48 relative max-w-6xl mx-auto px-4 stagger-container">
             <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="stagger-item opacity-0">
                  <h2 className="text-3xl lg:text-5xl font-light text-slate-900 mb-8 leading-tight">
                    Что такое <span className="font-serif italic text-slate-400">PicoCare?</span><br/>
                    И почему это прорыв.
                  </h2>
                  <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                     <p>
                       Пикосекундный лазер PicoCare — это революция в аппаратной косметологии. Его главное отличие от классических CO2 или эрбиевых лазеров заключается во времени импульса.
                     </p>
                     <p>
                       Вместо миллисекунд он работает в пикосекундном диапазоне (триллионные доли секунды). Лазер <strong className="font-medium text-slate-700">не нагревает и не испаряет ткани</strong>. Он использует фотоакустический эффект — мощную ударную волну.
                     </p>
                     <p>
                       Эта волна стимулирует клетки кожи к активному синтезу нового коллагена и эластина, при этом эпидермис остается целым. Кожа подтягивается, морщины исчезают, а срок реабилитации сокращается до минимума.
                     </p>
                  </div>
                </div>
                <div className="stagger-item opacity-0 grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-12">
                     <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                       <img src="https://static.tildacdn.com/tild3137-3438-4935-a664-333932396537/-.jpg" alt="Процесс лазерного омоложения" className="w-full h-full object-cover" />
                     </div>
                     <div className="bg-blue-50 rounded-3xl p-6 h-40 flex flex-col justify-center border border-blue-100">
                       <Icon icon="solar:shield-check-bold" className="text-3xl text-blue-500 mb-3" />
                       <span className="font-medium text-slate-800">Одобрено FDA</span>
                       <span className="text-sm text-slate-500">Золотой стандарт (США)</span>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="bg-[#60c2ff]/10 rounded-3xl p-6 h-40 flex flex-col justify-center border border-[#60c2ff]/20">
                       <Icon icon="solar:clock-circle-bold" className="text-3xl text-[#60c2ff] mb-3" />
                       <span className="font-medium text-slate-800">Без реабилитации</span>
                       <span className="text-sm text-slate-500">Покраснение сходит за часы</span>
                     </div>
                     <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                       <img src="https://static.tildacdn.com/tild6431-6533-4465-a166-623536616431/11.jpg" alt="Результат процедуры PicoCare" className="w-full h-full object-cover" />
                     </div>
                  </div>
                </div>
             </div>
          </section>

          {/* TASKS (РџРћРљРђР—РђРќРРЇ) */}
          <section className="mb-32 lg:mb-48 bg-slate-900 rounded-[3rem] p-10 lg:p-20 relative overflow-hidden stagger-container shadow-2xl mx-auto max-w-7xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
               <div className="w-full lg:w-1/2 stagger-item opacity-0">
                 <h2 className="text-3xl lg:text-5xl font-light text-white mb-8">
                   Какие проблемы <span className="font-serif italic text-blue-300">решает</span> PicoCare?
                 </h2>
                 <p className="text-slate-300 font-light text-lg mb-10 leading-relaxed">
                   Возрастные изменения начинаются уже после 30 лет. Выработка коллагена снижается, кожа теряет тонус, появляются первые заломы и пигментные пятна. PicoCare создана именно для того, чтобы повернуть время вспять.
                 </p>
                 
                 <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                    {[
                      "Мелкие морщины и заломы",
                      "Потеря тонуса и плотности кожи",
                      "Пигментные пятна и веснушки",
                      "Расширенные поры",
                      "Следы постакне и рубцы",
                      "Тусклый, серый цвет лица"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <Icon icon="solar:check-circle-bold" className="text-[#60c2ff] text-xl shrink-0 mt-0.5" />
                        <span className="text-white/90 font-light">{item}</span>
                      </div>
                    ))}
                 </div>
                 
                 <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-sm text-slate-300">
                   <strong className="text-white flex items-center gap-2 mb-2"><Icon icon="solar:info-circle-bold" className="text-blue-400" /> Противопоказания:</strong>
                   Беременность, лактация, инфекции в стадии обострения, свежий загар (менее 2-4 недель), онкология.
                 </div>
               </div>
               
               <div className="w-full lg:w-1/2 relative stagger-item opacity-0">
                  <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center p-8 bg-white/5 relative">
                     <div className="absolute inset-0 bg-[url('https://static.tildacdn.com/tild3134-6139-4861-b330-363262623638/--.jpg')] bg-cover bg-center rounded-full opacity-50 mix-blend-overlay"></div>
                     <div className="relative z-10 text-center">
                        <Icon icon="solar:health-bold" className="text-6xl text-white mb-6 mx-auto" />
                        <div className="text-3xl font-light text-white leading-tight">Верните коже<br/><span className="font-serif italic text-blue-300">здоровье и сияние</span></div>
                     </div>
                  </div>
               </div>
            </div>
          </section>

           {/* Р”Рћ / РџРћРЎР›Р• Р“РђР›Р•Р Р•РЇ */}
          <section className="mb-32 lg:mb-48 stagger-container max-w-7xl mx-auto px-4 relative">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16 stagger-item opacity-0">
               <div>
                 <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-slate-900">
                   Фото <span className="font-serif italic text-slate-400">до и после</span>
                 </h2>
                 <p className="text-slate-500 mt-4 text-lg font-light">До 95% пациентов отмечают улучшение кожи уже после 1 визита</p>
               </div>
               <div className="hidden md:flex gap-3 mt-6 md:mt-0">
                 <button onClick={() => scrollGallery('left')} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:scale-105 transition-all text-slate-600 bg-white shadow-sm z-10">
                   <Icon icon="solar:alt-arrow-left-linear" className="text-xl" />
                 </button>
                 <button onClick={() => scrollGallery('right')} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:scale-105 transition-all text-slate-600 bg-white shadow-sm z-10">
                   <Icon icon="solar:alt-arrow-right-linear" className="text-xl" />
                 </button>
               </div>
             </div>
             
             <div className="relative group/gallery">
               {/* Mobile Arrows (Visible only on small screens or when hovering gallery container on desktop, optional) */}
               <div className="md:hidden absolute inset-y-0 -left-2 flex items-center z-10 pointer-events-none">
                 <button onClick={() => scrollGallery('left')} className="pointer-events-auto shadow-md w-10 h-10 rounded-full border border-slate-100 bg-white/90 backdrop-blur-sm text-slate-800 flex items-center justify-center hover:scale-105 transition-transform"><Icon icon="solar:arrow-left-linear" /></button>
               </div>
               <div className="md:hidden absolute inset-y-0 -right-2 flex items-center z-10 pointer-events-none">
                 <button onClick={() => scrollGallery('right')} className="pointer-events-auto shadow-md w-10 h-10 rounded-full border border-slate-100 bg-white/90 backdrop-blur-sm text-slate-800 flex items-center justify-center hover:scale-105 transition-transform"><Icon icon="solar:arrow-right-linear" /></button>
               </div>
               
               <div ref={galleryRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 hide-scrollbar px-4 lg:px-12 -mx-4 lg:-mx-12 scroll-smooth">
                 {[
                 { src: "https://static.tildacdn.com/tild3338-6237-4635-b438-383766326333/6.png", label: "Лазерное омоложение, выравнивание тона" },
                 { src: "https://static.tildacdn.com/tild3138-3238-4839-b465-343135663532/5.jpg", label: "Сужение пор, разглаживание морщин" },
                 { src: "https://static.tildacdn.com/tild3133-3963-4332-b264-323163383038/3.png", label: "Устранение пигментации" },
                 { src: "https://static.tildacdn.com/tild3439-3364-4635-b439-636537613366/4.jpg", label: "Лечение постакне и улучшение рельефа" },
                 { src: "https://static.tildacdn.com/tild3664-3534-4061-b036-653938613831/1.jpg", label: "Лифтинг эффект и осветление" },
                 { src: "https://static.tildacdn.com/tild3134-3932-4631-b634-326534663265/2.jpg", label: "Профилактика возрастных изменений" }
               ].map((item, i) => (
                 <div key={i} className="min-w-[85vw] sm:min-w-[380px] snap-center shrink-0 flex flex-col gap-6 stagger-item opacity-0">
                   <div className="relative h-[400px] sm:h-[450px] rounded-3xl overflow-hidden shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.1)] border border-slate-200 bg-white group flex items-center justify-center p-4">
                     <img src={item.src} alt={item.label} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                     <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white text-center pointer-events-none">
                        <div className="text-sm font-bold uppercase tracking-wider mb-1 text-blue-300">SkinMed</div>
                        <div className="font-medium text-lg leading-tight">{item.label}</div>
                     </div>
                   </div>
                 </div>
               ))}
               </div>
             </div>
          </section>

          {/* Р’Р РђР§Р-Р­РљРЎРџР•Р РўР« */}
          <section className="mb-32 lg:mb-48 relative max-w-7xl mx-auto px-4 stagger-container">
            <div className="text-center mb-16 stagger-item opacity-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight">
                Врачи-эксперты по лазерному омоложению <span className="font-serif italic text-slate-400">PicoCare</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {[
                 { name: "Специалист SkinMed", role: "Главный врач, косметолог", src: "https://static.tildacdn.com/tild3135-6136-4039-b265-353466623863/photo.jpg" },
                 { name: "Специалист SkinMed", role: "Врач-дерматовенеролог", src: "https://static.tildacdn.com/tild3134-6133-4638-b463-626334343761/--3.jpg" },
                 { name: "Специалист SkinMed", role: "Врач-косметолог", src: "https://static.tildacdn.com/tild3531-3565-4365-a430-333762333134/-.jpg" },
                 { name: "Специалист SkinMed", role: "Врач-дерматолог", src: "https://static.tildacdn.com/tild6433-3563-4639-b431-353834383066/-.jpg" },
                 { name: "Специалист SkinMed", role: "Врач-косметолог", src: "https://static.tildacdn.com/tild6430-3238-4635-a361-393430646636/-.jpg" },
              ].map((doc, i) => (
                <div key={i} className="flex flex-col items-center stagger-item opacity-0 group">
                  <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden mb-4 border border-slate-200">
                    <img src={doc.src} alt={doc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 border-[3px] border-transparent group-hover:border-blue-200/50 rounded-[2rem] transition-colors duration-500 pointer-events-none"></div>
                  </div>
                  <h3 className="text-lg font-medium text-slate-800 text-center">{doc.name}</h3>
                  <p className="text-sm text-slate-400 text-center font-light">{doc.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* РџР Р•РРњРЈР©Р•РЎРўР’Рђ */}
          <section className="mb-32 lg:mb-48 relative max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 stagger-container">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight stagger-item opacity-0">
                Почему PicoCare нравится <span className="font-serif italic text-slate-400">пациентам?</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 stagger-container">
              {[
                { title: "Без боли и ожогов", desc: "Забудьте о лазерах прошлого поколения, которые сжигали кожу. PicoCare действует ультракоротким импульсом, который не успевает разогреть ткань. Пациент ощущает лишь легкое тепло.", icon: "solar:leaf-linear", color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100" },
                { title: "Всесезонность", desc: "Теперь не нужно ждать зимы. Омоложение PicoCare можно делать даже летом! Главное — наносить солнцезащитный крем SPF-50 перед выходом на улицу.", icon: "solar:sun-linear", color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100" },
                { title: "Без реабилитации", desc: "Никаких корок, шелушений и необходимости сидеть дома неделю. Легкое покраснение лица проходит уже к вечеру или на следующий день. Вы сразу возвращаетесь к жизни.", icon: "solar:cup-star-linear", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100" }
              ].map((adv, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] p-10 lg:p-12 border border-slate-100 shadow-[0_1rem_4rem_-1rem_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-500 stagger-item opacity-0">
                  <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-8 ${adv.bg} ${adv.border} border`}>
                    <Icon icon={adv.icon} className={`text-4xl ${adv.color}`} />
                  </div>
                  <h3 className="text-2xl font-medium text-slate-900 mb-4 leading-tight">{adv.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed">{adv.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* AFTERCARE & FAQ */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto flex flex-col gap-24 px-4 stagger-container">
             
             {/* RECOMMENDATIONS */}
             <div>
                <div className="mb-16 stagger-item opacity-0 flex flex-col justify-start border-b border-slate-200/50 pb-8">
                  <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                    — Восстановление
                  </span>
                  <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                    Рекомендации <span className="font-serif italic text-slate-400">после</span>
                  </h2>
                </div>

                <div className="flex flex-col">
                  <EditorialList items={[
                { title: "В течение 2 недель избегайте активного солнца. Ежедневно наносите крем с SPF 50 на обработанные зоны перед выходом на улицу.", desc: "" },
                { title: "В первые 7−10 дней исключите бани, сауны, горячие ванны и переохлаждение. Кожа должна восстанавливаться в комфортной температуре без резких скачков.", desc: "" },
                { title: "Избегайте агрессивных средств, скрабов, спиртосодержащих лосьонов и кислот минимум на одну неделю.", desc: "" }
              ]} />
                </div>
             </div>

             {/* FAQ */}
             <div>
                <div className="mb-16 stagger-item opacity-0 flex flex-col justify-start border-b border-slate-200/50 pb-8">
                  <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                    — FAQ
                  </span>
                  <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                    Популярные <span className="font-serif italic text-slate-400">вопросы</span>
                  </h2>
                </div>
                
                <div className="flex flex-col gap-4">
                  {[
                    {
                      q: "Как быстро я увижу результат, и сколько он держится?",
                      a: "Во многих случаях улучшение тонуса, цвета и текстуры кожи вы заметите уже после 1 процедуры. Максимальный эффект (выработка своего коллагена) разворачивается за 1 месяц. Результат держится до 1-1.5 лет."
                    },
                    {
                      q: "Безболезненна ли процедура?",
                      a: "PicoCare очень комфортна по сравнению со старой CO2 шлифовкой. Большинство пациентов ощущают лишь тепло и легкое покалывание. По желанию наносится аппликационная анестезия (крем), но часто можно обойтись и без нее."
                    },
                    {
                      q: "Чем PicoCare отличается от CO2-шлифовки?",
                      a: "CO2 испаряет (сжигает) верхний слой кожи, оставляя корки и требуя неделю больничного. PicoCare работает «холодным» светом, создавая акустическую взрывную волну внутри кожи без повреждения поверхности. Нет корок, нет ожогов, эффект лифтинга при этом потрясающий."
                    }
                  ].map((faq, i) => (
                     <details key={i} className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-[0_1rem_4rem_-1rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.15)] transition-shadow duration-500 stagger-item opacity-0">
                       <summary className="flex items-center justify-between p-8 lg:p-10 cursor-pointer list-none">
                         <span className="text-xl lg:text-2xl font-light text-slate-800 pr-8">{faq.q}</span>
                         <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center shrink-0 group-open:bg-[#60c2ff] group-open:border-[#60c2ff] group-open:text-white transition-all duration-500">
                           <Icon icon="solar:add-linear" className="text-3xl group-open:rotate-45 transition-transform duration-500" />
                         </div>
                       </summary>
                       <div className="px-8 pb-8 lg:px-10 lg:pb-10 pt-0">
                         <p className="text-lg lg:text-xl text-slate-500 font-light leading-relaxed border-t border-slate-100 pt-8">
                           {faq.a}
                         </p>
                       </div>
                     </details>
                  ))}
                </div>
             </div>
          </section>

          {/* FINAL CTA */}
          <section className="mb-32 max-w-5xl mx-auto px-4 stagger-container">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-10 lg:p-16 text-center relative overflow-hidden stagger-item opacity-0 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#60c2ff] to-transparent opacity-50"></div>
              
              <Icon icon="solar:magic-stick-3-bold-duotone" className="text-6xl text-[#60c2ff] mx-auto mb-8 opacity-80" />
              
              <h2 className="text-3xl lg:text-5xl font-light text-white mb-6">
                Запишитесь на лазерное омоложение
              </h2>
              <p className="text-slate-300 font-light text-xl max-w-2xl mx-auto mb-10">
                Мы свяжемся с вами в течение 15 минут в рабочее время и ответим на все вопросы.
              </p>
              
              <button 
                onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                className="px-10 py-5 bg-[#60c2ff] text-slate-900 rounded-full font-semibold text-lg hover:bg-white transition-colors duration-300 shadow-[0_0_40px_rgba(96,194,255,0.4)]"
              >
                Оставить заявку
              </button>
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
