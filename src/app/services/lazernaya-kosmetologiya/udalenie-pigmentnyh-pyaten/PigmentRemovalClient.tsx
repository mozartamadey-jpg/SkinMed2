'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const pageData = [
  {
    id: 'hero',
    type: 'hero',
    title: 'Удаление пигментных пятен',
    mediaAsset: '/images/services/pigment-hero.png',
    content: 'Безупречно ровный тон кожи без агрессивной шлифовки. Удаление веснушек, возрастных и гормональных пятен на сверхмощном пикосекундном лазере PicoCare.',
    items: []
  },
  {
    id: 'indications',
    type: 'grid',
    title: 'Какую пигментацию мы устраняем',
    mediaAsset: null,
    content: 'Лазерная система эффективна при любых видах гиперпигментации, независимо от глубины залегания пигмента.',
    items: [
      { id: 1, title: "Веснушки (эфелиды)", desc: "Поверхностный пигмент", icon: "solar:sun-2-linear" },
      { id: 2, title: "Возрастная пигментация", desc: "Старческое лентиго", icon: "solar:hourglass-linear" },
      { id: 3, title: "Гормональная мелазма", desc: "Хлоазма беременных", icon: "solar:leaf-linear" },
      { id: 4, title: "Поствоспалительная", desc: "Пятна постакне", icon: "solar:healing-linear" }
    ]
  },
  {
    id: 'technology',
    type: 'feature',
    title: 'Осветление за счет акустической волны',
    mediaAsset: 'https://static.tildacdn.com/tild3938-3436-4139-b032-386361356139/-.jpg',
    content: 'Лазер разрушает пигмент уникальными ультракороткими импульсами (одна триллионная доля секунды). Меланин буквально рассыпается в "пыль", не нагревая и не травмируя окружающую ткань. Благодаря этому риск ожогов и рубцов сведен к абсолютному нулю.',
    items: []
  },
  {
    id: 'cases',
    type: 'cases',
    title: 'Наши Кейсы',
    mediaAsset: null,
    content: 'Более 2400 успешных процедур. Посмотрите на результаты осветления пигментации до и после.',
    items: [
      { id: 1, imgBefore: "https://static.tildacdn.com/tild3831-3838-4333-b537-643939643839/1.jpg", imgAfter: "https://static.tildacdn.com/tild6530-3661-4865-b865-613931323338/1.jpg" },
      { id: 2, imgBefore: "https://static.tildacdn.com/tild3132-3962-4339-b433-303134363563/11.jpg", imgAfter: "https://static.tildacdn.com/tild6133-6436-4430-b037-613764656635/1.jpg" },
      { id: 3, imgBefore: "https://static.tildacdn.com/tild3464-6339-4330-a563-383638613937/4.jpg", imgAfter: "https://static.tildacdn.com/tild3239-3464-4432-b830-303966396661/4.jpg" }
    ]
  },
  {
    id: 'results',
    type: 'feature-reverse',
    title: 'Эффект чистой кожи',
    mediaAsset: 'https://optim.tildacdn.com/tild6133-3335-4337-a436-353232616236/-/cover/591x587/center/center/-/format/webp/--11.jpg.webp',
    content: 'После процедуры пигмент может слегка потемнеть — это нормальная реакция. В течение 7-14 дней он постепенно отшелушивается вместе с ороговевшими клетками эпидермиса, открывая идеально ровный и свежий тон лица.',
    items: []
  },
  {
    id: 'prices',
    type: 'pricing',
    title: 'Стоимость процедур',
    mediaAsset: null,
    content: 'Окончательная площадь воздействия и количество сеансов определяются индивидуально.',
    items: [
      { id: 1, title: 'Удаление пигментных пятен (2 кв.см)', price: '4.900₽' },
      { id: 2, title: 'Удаление пигментного пятна (единичное)', price: 'от 4.900₽' },
      { id: 3, title: 'Щечная область', price: '25.000₽' },
      { id: 4, title: 'Лицо полностью с зоной вокруг глаз', price: '29.000₽' },
      { id: 5, title: 'Лицо + шея', price: '35.000₽' }
    ]
  },
  {
    id: 'cta',
    type: 'cta',
    title: 'Готовы к идеальному тону кожи?',
    content: 'Запишитесь на консультацию. Врач проведет диагностику пигментации и подберет индивидуальный курс.',
    mediaAsset: null,
    items: []
  }
];

export default function PigmentRemovalClient() {
  
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const initObserver = () => {
      if (window.innerWidth > 768) {
        if (observer) {
          observer.disconnect();
          observer = null;
        }
        document.querySelectorAll('.mobile-glow-active').forEach(el => el.classList.remove('mobile-glow-active'));
        return;
      }
      if (!observer) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('mobile-glow-active');
            } else {
              entry.target.classList.remove('mobile-glow-active');
            }
          });
        }, {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0
        });
        setTimeout(() => {
          const elements = document.querySelectorAll('.scroll-glow-item');
          elements.forEach(el => observer?.observe(el));
        }, 500);
      }
    };
    initObserver();
    window.addEventListener('resize', initObserver);
    return () => {
      window.removeEventListener('resize', initObserver);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen relative font-sans text-slate-800 flex flex-col">
      <AnimationsProvider />
      
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/90 via-[#f0f5fa]/80 to-[#e4eaf0]/90"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] bg-gradient-to-br from-[#60c2ff]/30 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "25s" }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] bg-gradient-to-tl from-[#80d0ff]/20 via-[#cddce9]/40 to-transparent blur-[5rem] opacity-40 mix-blend-normal animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />

        <main className="w-full mt-12 sm:mt-16 relative">
          
          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <Link href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</Link>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <Link href="/services/lazernaya-kosmetologiya" className="hover:text-[#60c2ff] transition-colors duration-300">Лазерная косметология</Link>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">Удаление пигментации</span>
            </div>
          </section>

          {/* DYNAMIC JSON MAP RENDERING FOR ENCAPSULATED MEDIA */}
          <div className="flex flex-col gap-20 md:gap-32 w-full stagger-container">
            {pageData.map((block, idx) => (
              <section key={block.id || idx} className="stagger-item opacity-0 w-full scroll-glow-item group">
                
                {block.type === 'hero' && (
                  <div className="bg-[#050B14] rounded-[2rem] md:rounded-[3rem] p-8 md:py-12 md:px-16 flex flex-col justify-center items-start min-h-[400px] md:min-h-0 relative overflow-hidden shadow-2xl transition-all duration-700 group-[.mobile-glow-active]:shadow-[#60c2ff]/20 hover:shadow-[#60c2ff]/30">
                     {/* Background Image Layer */}
                     {block.mediaAsset && (
                        <div className="absolute inset-0 z-0 overflow-hidden">
                           <img 
                             src={block.mediaAsset} 
                             alt={block.title} 
                             className="w-full h-full object-cover object-right md:object-center opacity-70 md:opacity-90 md:scale-105 transition-transform duration-[2s]" 
                           />
                           {/* Responsive gradient: bottom-to-top on mobile with darkened top for text readability, left-to-right on desktop */}
                           <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent"></div>
                        </div>
                     )}
                     
                     {/* Content Layer */}
                     <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-light text-white leading-tight uppercase tracking-tight z-20 mb-4 md:mb-6 drop-shadow-2xl mt-auto md:mt-0 pt-16 md:pt-0">
                        {block.title.split(' ')[0]} <br/> <span className="font-serif italic text-[#60c2ff]/80">{block.title.split(' ').slice(1).join(' ')}</span>
                     </h1>
                     <p className="text-lg md:text-xl font-light text-slate-300 max-w-2xl relative z-20 mb-8 md:mb-10 leading-relaxed border-l-2 border-[#60c2ff]/40 pl-4 md:pl-6">
                        {block.content}
                     </p>
                     <div className="relative z-20 inline-flex group/btn">
                         <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                         <button 
                           onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                           className="relative px-8 py-4 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl flex gap-2 items-center"
                         >
                           Записаться <Icon icon="solar:arrow-right-linear" className="text-xl" />
                         </button>
                      </div>
                  </div>
                )}

                {block.type === 'feature' && (
                  <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center p-8 lg:p-12 bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.05)] transition-all duration-500 group-[.mobile-glow-active]:shadow-[#60c2ff]/20 hover:shadow-[#60c2ff]/10">
                     <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
                        <span className="text-xs uppercase tracking-widest text-[#60c2ff] font-bold">— Технология</span>
                        <h2 className="text-3xl lg:text-5xl font-light text-slate-900 leading-tight">
                           {block.title}
                        </h2>
                        {/* Mobile positioning of media */}
                        {block.mediaAsset && (
                           <div className="w-full lg:hidden relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-lg mt-4 mb-4">
                              <img src={block.mediaAsset} alt={block.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[1s]" />
                           </div>
                        )}
                        <p className="text-lg text-slate-600 font-light leading-relaxed">
                           {block.content}
                        </p>
                     </div>
                     {/* Desktop positioning of media */}
                     {block.mediaAsset && (
                        <div className="hidden lg:block w-full lg:w-1/2 relative rounded-[2rem] overflow-hidden h-[400px] shadow-lg">
                            <img src={block.mediaAsset} alt={block.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]" />
                        </div>
                     )}
                  </div>
                )}

                {block.type === 'feature-reverse' && (
                  <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center p-8 lg:p-12 bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.05)] transition-all duration-500 group-[.mobile-glow-active]:shadow-[#60c2ff]/20 hover:shadow-[#60c2ff]/10">
                     <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
                        <span className="text-xs uppercase tracking-widest text-[#60c2ff] font-bold">— Результат</span>
                        <h2 className="text-3xl lg:text-5xl font-light text-slate-900 leading-tight">
                           {block.title}
                        </h2>
                        {/* STRICT RULE: Image right after title in code loop */}
                        {block.mediaAsset && (
                           <div className="w-full lg:hidden relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-lg mt-4 mb-4">
                              <img src={block.mediaAsset} alt={block.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[1s]" />
                           </div>
                        )}
                        <p className="text-lg text-slate-600 font-light leading-relaxed">
                           {block.content}
                        </p>
                     </div>
                     {/* Desktop positioning of media for visual balance */}
                     {block.mediaAsset && (
                        <div className="hidden lg:block w-full lg:w-1/2 relative rounded-[2rem] overflow-hidden h-[400px] shadow-lg">
                            <img src={block.mediaAsset} alt={block.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]" />
                        </div>
                     )}
                  </div>
                )}

                {block.type === 'grid' && (
                  <div className="w-full flex flex-col items-center">
                    <h2 className="text-3xl lg:text-5xl font-light text-slate-900 leading-tight mb-4 text-center">
                       {block.title}
                    </h2>
                    {block.mediaAsset && (
                        <img src={block.mediaAsset} alt={block.title} className="rounded-2xl shadow-md my-8 max-w-full" />
                    )}
                    {block.content && <p className="text-lg text-slate-500 font-light text-center max-w-2xl mb-12">{block.content}</p>}
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                       {block.items.map((item: any, i) => (
                           <div key={item.id || i} className="group/item relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-500 hover:-translate-y-2 flex flex-col cursor-pointer">
                              <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover/item:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover/item:rotate-12 group-hover/item:scale-110">
                                <Icon icon={item.icon || "solar:star-fall-linear"} className="text-3xl text-[#60c2ff] group-hover/item:text-white transition-colors duration-300" />
                              </div>
                              <h3 className="text-xl font-medium text-slate-900 group-hover/item:text-[#60c2ff] transition-colors">{item.title}</h3>
                              {item.desc && <p className="text-sm text-slate-500 font-light mt-2">{item.desc}</p>}
                           </div>
                       ))}
                    </div>
                  </div>
                )}

                {block.type === 'cases' && (
                  <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-8 md:p-16 shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.05)] mx-auto max-w-6xl transition-all duration-500 group-[.mobile-glow-active]:shadow-[#60c2ff]/20 hover:shadow-[#60c2ff]/10">
                    <div className="mb-10 flex flex-col items-center">
                      <h2 className="text-[2.5rem] md:text-5xl font-light text-slate-900 tracking-tight text-center">
                        {block.title}
                      </h2>
                      <p className="text-slate-500 mt-4 text-center max-w-2xl text-lg font-light">{block.content}</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {block.items.map((caseItem: any, idx) => (
                         <div key={caseItem.id || idx} className="relative rounded-[2rem] overflow-hidden group/case shadow-[0_1rem_2rem_-0.5rem_rgba(0,0,0,0.1)] hover:shadow-[0_1.5rem_3rem_-1rem_rgba(96,194,255,0.3)] transition-shadow duration-500 bg-white">
                             <div className="flex w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3]">
                                <div className="w-1/2 relative overflow-hidden">
                                   <img src={caseItem.imgBefore} alt={`До ${idx+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover/case:scale-105" loading="lazy" />
                                   <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/90 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold text-slate-800 tracking-widest shadow-sm">ДО</div>
                                </div>
                                <div className="w-[3px] bg-white z-10 relative shadow-[0_0_15px_rgba(0,0,0,0.15)] flex flex-col justify-center items-center">
                                   <div className="absolute w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex flex-col gap-[3px] items-center justify-center shadow-lg transform active:scale-95 transition-transform">
                                      <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                      <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                                   </div>
                                </div>
                                <div className="w-1/2 relative overflow-hidden">
                                   <img src={caseItem.imgAfter} alt={`После ${idx+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover/case:scale-105" loading="lazy" />
                                   <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-gradient-to-r from-[#60c2ff] to-[#4da8e8] shadow-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold text-white tracking-widest">ПОСЛЕ</div>
                                </div>
                             </div>
                         </div>
                      ))}
                    </div>
                  </div>
                )}

                {block.type === 'pricing' && (
                  <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.05)] mx-auto max-w-5xl transition-all duration-500 group-[.mobile-glow-active]:shadow-[#60c2ff]/20 hover:shadow-[#60c2ff]/10">
                    <div className="mb-12 border-b border-slate-100 pb-6">
                      <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight text-center sm:text-left">
                        {block.title}
                      </h2>
                      {block.mediaAsset && <img src={block.mediaAsset} alt={block.title} className="w-full rounded-2xl mt-8 mb-4 max-h-[300px] object-cover" />}
                      <p className="text-slate-500 mt-4 text-center sm:text-left">{block.content}</p>
                    </div>
                    <div className="flex flex-col divide-y divide-slate-100">
                      {block.items.map((price: any, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-6 group/price hover:px-4 transition-all duration-300">
                          <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover/price:text-[#60c2ff] transition-colors">{price.title}</span>
                          <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{price.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {block.type === 'cta' && (
                  <div className="relative overflow-hidden rounded-[3rem] bg-[#050B14] p-10 md:p-16 lg:p-24 border border-white/10 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)] max-w-6xl mx-auto mt-8 group/cta">
                     <div className="absolute top-0 right-0 w-[50vw] h-[50vw] sm:w-96 sm:h-96 bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none group-hover/cta:bg-[#60c2ff]/20 transition-colors duration-700"></div>
                     <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] sm:w-80 sm:h-80 bg-[#fbbf24]/5 rounded-full blur-[80px] pointer-events-none"></div>
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                     
                     <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
                       <div className="flex-1 text-center lg:text-left">
                         <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-light text-white tracking-[-0.04em] leading-[1.05] mb-6">
                           Готовы к идеальному <br className="hidden sm:block"/> <span className="font-serif italic text-slate-400">тону кожи?</span>
                         </h2>
                         <p className="text-slate-400 font-light text-lg md:text-xl mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                           {block.content}
                         </p>
                         
                         <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                           <div className="relative inline-flex group/btn w-full sm:w-auto">
                             <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                             <button 
                               onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                               className="relative z-10 w-full sm:w-auto px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 text-lg"
                             >
                               Записаться на прием
                               <Icon icon="solar:arrow-right-linear" className="text-xl" />
                             </button>
                           </div>
                         </div>
                       </div>
                       
                       <div className="hidden lg:flex w-64 h-64 shrink-0 rounded-full border border-[#60c2ff]/20 relative items-center justify-center">
                         <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div>
                         <div className="text-center">
                           <Icon icon="solar:magic-stick-3-bold-duotone" className="text-5xl text-[#60c2ff] mx-auto mb-3 opacity-90" />
                           <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/50 leading-tight">SkinMed<br/>Premium Care</span>
                         </div>
                       </div>
                     </div>
                  </div>
                )}

              </section>
            ))}
          </div>
        </main>
      </div>
    <div className="relative z-20 w-full mt-auto">
        <Footer />
      </div>

    </div>
  );
}
