'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import Link from 'next/link';
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

export default function LaserServiceTemplate({ data }: { data: any }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    // Add mobile glow effect for cards
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
    <div className="min-h-screen relative font-sans text-slate-800 bg-[#faf8f5] overflow-hidden selection:bg-blue-200 flex flex-col">
      <AnimationsProvider />
      
      {/* GLOWING AMBIENT BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[5%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-blue-100/50 blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-50/60 blur-[130px] opacity-50"></div>
      </div>

      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        
        <main className="w-full mt-12 sm:mt-16 overflow-x-hidden">
          
          {/* HERO SECTION */}
          <section className="mb-24 lg:mb-32 relative flex justify-center mt-8 px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center max-w-7xl mx-auto w-full">
              
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                <Link href="/services/lazernaya-kosmetologiya" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-slate-400 uppercase mb-8 hover:text-blue-500 transition-colors">
                  <Icon icon="solar:arrow-left-linear" className="text-lg" />
                  Все лазерные услуги
                </Link>
                
                <h1 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light tracking-tight text-slate-900 leading-[1.05] mb-6">
                  {data.title}<br/>
                  <span className="font-serif italic text-blue-500">{data.subtitle}</span>
                </h1>
                
                <p className="text-xl text-slate-500 font-light max-w-xl leading-relaxed mb-10">
                  {data.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <button onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-8 py-5 bg-blue-500 hover:bg-blue-600 transition-colors text-white text-lg font-medium rounded-full shadow-[0_1rem_2rem_-0.5rem_rgba(59,130,246,0.3)] flex justify-center items-center gap-3">
                    Записаться {data.priceFrom}
                    <Icon icon="solar:arrow-right-linear" className="text-2xl" />
                  </button>
                  <div className="flex items-center gap-4 text-slate-500">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm">
                      <Icon icon="solar:shield-check-bold-duotone" className="text-2xl text-green-500" />
                    </div>
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Гарантия</span>
                      <span className="font-medium text-slate-700">Оригинальный аппарат</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in relative">
                <div className="relative w-full max-w-[550px] aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-white/50">
                  <ServiceImage src={data.heroImage} alt={data.title} sizes="(max-width: 1024px) 100vw, 50vw" priority className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                     <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white font-medium">
                       Аппарат: {data.device}
                     </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* INDICATIONS & CONTRAINDICATIONS */}
          <section className="mb-32 lg:mb-48 max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              
              <div className="bg-white rounded-[3rem] p-10 lg:p-14 border border-slate-100 shadow-[0_1rem_4rem_-1rem_rgba(0,0,0,0.05)] scroll-glow-item">
                <div className="flex items-center gap-4 mb-10 pb-8 border-b border-slate-100">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                    <Icon icon="solar:shield-up-bold-duotone" className="text-2xl text-green-500" />
                  </div>
                  <h3 className="text-3xl font-light text-slate-900">Показания</h3>
                </div>
                <div className="flex flex-col gap-6">
                  {data.indications.map((text: string, i: number) => (
                    <div key={i} className="flex gap-4 items-start">
                      <Icon icon="solar:check-circle-bold" className="text-green-500 text-xl shrink-0 mt-1" />
                      <p className="text-lg text-slate-600 font-light leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-14 lg:mt-32 border border-slate-800 shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)] text-white/90 scroll-glow-item">
                <div className="flex items-center gap-4 mb-10 pb-8 border-b border-white/10">
                  <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Icon icon="solar:shield-cross-bold-duotone" className="text-2xl text-rose-400" />
                  </div>
                  <h3 className="text-3xl font-light text-white">Противопоказания</h3>
                </div>
                <div className="flex flex-col gap-6">
                  {data.contraindications.map((text: string, i: number) => (
                    <div key={i} className="flex gap-4 items-start">
                      <Icon icon="solar:forbidden-bold" className="text-rose-400 text-xl shrink-0 mt-1" />
                      <p className="text-lg font-light leading-relaxed text-slate-300">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* RICH TEXT CONTENT (Legacy Parsed) */}
          {data.richSections && data.richSections.length > 0 && (
            <section className="mb-32 lg:mb-48 max-w-5xl mx-auto px-4 lg:px-8">
              <div className="bg-white rounded-[3rem] p-10 lg:p-14 border border-slate-100 shadow-[0_1rem_4rem_-1rem_rgba(0,0,0,0.05)]">
                <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-12 text-center">Подробности о процедуре</h2>
                <div className="flex flex-col gap-12">
                  {data.richSections.map((section: any, idx: number) => (
                    <div key={idx} className="flex flex-col gap-6">
                       {section.heading && section.heading.toLowerCase() !== data.title.toLowerCase() && (
                         <h3 className="text-2xl font-medium text-slate-900 border-l-4 border-blue-500 pl-4">{section.heading}</h3>
                       )}
                       <div className="flex flex-col gap-4 text-slate-600 font-light text-lg leading-relaxed">
                         {section.texts.map((text: string, tIdx: number) => (
                           <p key={tIdx}>{text}</p>
                         ))}
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* GALLERY & BEFORE/AFTER */}
          {data.gallery && data.gallery.length > 0 && (
            <section className="mb-32 lg:mb-48 max-w-7xl mx-auto px-4 lg:px-8">
               <div className="text-center mb-16">
                 <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-slate-900">
                   Галерея и <span className="font-serif italic text-slate-400">результаты</span>
                 </h2>
               </div>
               
               <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                 {data.gallery.map((media: any, i: number) => (
                   <div key={i} className="break-inside-avoid relative group rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
                     {media.type === 'video' ? (
                       <video src={media.src} controls className="w-full h-auto bg-slate-900" />
                     ) : (
                       <div className="relative w-full min-h-[18rem]">
                         <ServiceImage src={media.src} alt={media.alt || 'Результат до/после'} sizes="(max-width: 1024px) 100vw, 33vw" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                       </div>
                     )}
                     {media.context && (
                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <p className="text-white text-sm font-medium leading-tight">{media.context}</p>
                       </div>
                     )}
                   </div>
                 ))}
               </div>
            </section>
          )}

          {/* STEPS TIMELINE */}
          <section className="mb-32 lg:mb-48 max-w-5xl mx-auto px-4 lg:px-8">
             <div className="text-center mb-16">
               <span className="block text-sm font-bold uppercase tracking-widest text-blue-500 mb-4">Этапы лечения</span>
               <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-slate-900">
                 Как проходит <span className="font-serif italic text-slate-400">процедура?</span>
               </h2>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {data.steps.map((step: any, i: number) => (
                 <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-shadow duration-300">
                   <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-500 font-serif italic text-2xl border border-blue-100">
                     {step.num}
                   </div>
                   <h4 className="text-xl font-medium mb-3 text-slate-900">{step.title}</h4>
                   <p className="text-slate-500 font-light text-sm leading-relaxed">{step.text}</p>
                 </div>
               ))}
             </div>
          </section>

          {/* FAQ */}
          <section className="mb-32 max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-12 text-center">Часто задаваемые вопросы</h2>
            <div className="flex flex-col gap-4">
              {data.faq.map((faqItem: any, idx: number) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden transition-all duration-300 shadow-sm">
                  <button 
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-8 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-xl text-slate-800 font-medium pr-8 leading-snug">{faqItem.q}</span>
                    <div className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-500 ${openFaqIndex === idx ? 'rotate-180 bg-slate-100' : ''}`}>
                      <Icon icon="solar:alt-arrow-down-linear" className="text-xl text-slate-500" />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaqIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-8 pt-0 text-slate-500 font-light text-lg leading-relaxed">
                      {faqItem.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FINALY CTA */}
          <section id="cta" className="mb-20 max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-10 lg:p-16 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-500/20 to-transparent pointer-events-none"></div>
               <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
                 <div className="w-full lg:w-1/2 flex flex-col justify-center">
                   <h2 className="text-4xl lg:text-[3.5rem] font-light text-white leading-[1.1] mb-6 tracking-tight">
                     Начните преображение
                   </h2>
                   <p className="text-slate-400 font-light text-lg mb-8 max-w-md">
                     Оставьте заявку. Мы свяжемся с вами в течение 5 минут, подробно расскажем о процедуре "{data.title}" и запишем на удобное время.
                   </p>
                 </div>
                 <div className="w-full lg:w-1/2">
                   <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/10 shadow-xl">
                     <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); }}>
                       <input 
                         type="tel" 
                         placeholder="Ваш номер телефона" 
                         className="w-full px-6 py-5 rounded-full bg-white/5 focus:bg-white/10 text-white outline-none transition-colors border border-transparent focus:border-blue-500 font-light placeholder:text-slate-500"
                         required 
                       />
                       <button 
                         type="submit"
                         className="w-full px-6 py-5 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                       >
                         Записаться на процедуру
                       </button>
                     </form>
                     <div className="mt-8 flex items-center justify-center gap-4 text-slate-300 hover:text-white transition-colors cursor-pointer">
                       <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                         <Icon icon="solar:phone-calling-bold" className="text-xl" />
                       </div>
                       <span className="font-light text-lg tracking-wide">+7 (843) 204-55-11</span>
                     </div>
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
