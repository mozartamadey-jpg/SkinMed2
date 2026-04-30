'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  features: string[];
}

interface BeforeAfterProps {
  title: string;
  items: { before: string; after: string; label: string }[];
}

interface TextBlockProps {
  title: string;
  content: string[];
}

interface HighlightBlockProps {
  title: string;
  description: string;
  image: string;
  list: string[];
}

interface IndicationsProps {
  indications: string[];
  contraindications: string[];
}

interface AdvantagesProps {
  title: string;
  items: { title: string; desc: string; icon: string }[];
}

interface StepsProps {
  title: string;
  items: { title: string; desc: string }[];
}

interface InfoListProps {
  title: string;
  items: string[];
}

interface FaqProps {
  items: { q: string; a: string }[];
}

interface LaserServicePageProps {
  hero: HeroProps;
  beforeAfter?: BeforeAfterProps;
  aboutProcedure?: TextBlockProps;
  highlightBlock?: HighlightBlockProps;
  indications?: IndicationsProps;
  advantages?: AdvantagesProps;
  steps?: StepsProps;
  afterCare?: InfoListProps;
  faq?: FaqProps;
}

function ServiceImage({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={90}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      onLoad={() => setLoaded(true)}
      className={`${className} transition-[opacity,transform] duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] ${loaded ? "opacity-100" : "opacity-0"}`}
    />
  );
}

export default function LaserServicePage({
  hero,
  beforeAfter,
  aboutProcedure,
  highlightBlock,
  indications,
  advantages,
  steps,
  afterCare,
  faq
}: LaserServicePageProps) {
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
    <div className="min-h-screen relative font-sans text-slate-800 bg-[#FAFAFA] overflow-hidden selection:bg-[#60c2ff]/30">
      <AnimationsProvider />
      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24">
        <Header />
        
        <main className="w-full mt-8 sm:mt-12 lg:mt-24 px-4 lg:px-8 max-w-[1400px] mx-auto">
          
          {/* HERO SECTION */}
          <section className="mb-24 lg:mb-32 relative stagger-container">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="w-full lg:w-1/2 flex flex-col pt-8 lg:pt-12 relative z-10">
                {hero.subtitle && (
                  <span className="inline-block px-4 py-2 rounded-full bg-sky-50 text-sky-700 text-[13px] font-medium uppercase tracking-[0.16em] mb-6 w-fit stagger-item opacity-0 border border-sky-100">
                    {hero.subtitle}
                  </span>
                )}
                
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-slate-900 tracking-tight leading-[1.05] mb-8 stagger-item opacity-0">
                  {hero.title.split(' ').map((word, i) => {
                    if (word.toLowerCase() === 'лица' || word.toLowerCase() === 'picocare') {
                       return <React.Fragment key={i}><br/><span className="font-serif italic text-slate-400">{word}</span> </React.Fragment>;
                    }
                    return word + ' ';
                  })}
                </h1>
                
                <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed mb-10 max-w-2xl stagger-item opacity-0">
                  {hero.description}
                </p>

                <div className="flex flex-col gap-4 mb-10 stagger-item opacity-0">
                  {hero.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <Icon icon="solar:verified-check-linear" className="text-sky-500 text-xl" />
                       <span className="text-slate-700 font-normal leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 stagger-item opacity-0">
                  <button 
                    onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                    className="px-10 py-5 bg-slate-900 border border-slate-900 text-white rounded-full font-medium hover:bg-transparent hover:text-slate-900 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2"
                  >
                    <span>Записаться в клинику</span>
                    <Icon icon="solar:arrow-right-linear" className="text-xl" />
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[700px] rounded-[3rem] lg:rounded-[4rem] overflow-hidden stagger-item opacity-0 bg-slate-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#60c2ff]/10"></div>
                <ServiceImage
                  src={hero.image}
                  alt={hero.title}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="absolute object-cover w-full h-full scale-[1.01] md:hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </div>
          </section>

          {/* ДО / ПОСЛЕ */}
          {beforeAfter && (beforeAfter.items.length > 0) && (
            <section className="mb-32 lg:mb-48 stagger-container max-w-7xl mx-auto px-4 lg:px-8">
               <div className="text-center mb-16 stagger-item opacity-0">
                 <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-slate-900">
                   {beforeAfter.title.split(':')[0]} <span className="font-serif italic text-slate-400">{beforeAfter.title.split(':')[1] || ''}</span>
                 </h2>
               </div>
               <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
                 {beforeAfter.items.map((item, i) => (
                   <div key={i} className="min-w-[85vw] sm:min-w-[400px] snap-center shrink-0 flex flex-col gap-4">
                     <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                       <ServiceImage
                         src={item.after}
                         alt={item.label}
                         sizes="(max-width: 640px) 85vw, 400px"
                         className="w-full h-full object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                       <div className="absolute bottom-4 left-6 right-6 flex justify-between text-white text-sm font-medium">
                          <span>До / После</span>
                       </div>
                     </div>
                     <p className="text-center text-slate-600 font-medium">{item.label}</p>
                   </div>
                 ))}
               </div>
            </section>
          )}

          {/* О ПРОЦЕДУРЕ (Текст) */}
          {aboutProcedure && (
            <section className="mb-32 lg:mb-48 max-w-4xl mx-auto text-center px-4">
              <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-8">{aboutProcedure.title}</h2>
              <div className="flex flex-col gap-6 text-slate-500 font-light text-lg leading-relaxed">
                {aboutProcedure.content.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </section>
          )}

          {/* РЕШАЕМЫЕ ЗАДАЧИ (Блок с картинкой) */}
          {highlightBlock && (
            <section className="mb-32 lg:mb-48 bg-white rounded-[3rem] p-10 lg:p-16 border border-slate-100 shadow-[0_1rem_4rem_-1rem_rgba(0,0,0,0.05)] mx-auto max-w-7xl">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="w-full lg:w-1/2">
                   <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6">{highlightBlock.title}</h2>
                   <p className="text-slate-500 font-light text-lg mb-8">{highlightBlock.description}</p>
                   <ul className="space-y-4">
                     {highlightBlock.list.map((item, i) => (
                       <li key={i} className="flex gap-4 items-start">
                         <Icon icon="solar:verified-check-linear" className="text-sky-500 text-xl shrink-0 mt-1" />
                         <span className="text-slate-700 font-medium text-lg">{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden">
                    <ServiceImage
                      src={highlightBlock.image}
                      alt={highlightBlock.title}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ПОКАЗАНИЯ / ПРОТИВОПОКАЗАНИЯ */}
          {indications && (
            <section className="mb-32 lg:mb-48 max-w-6xl mx-auto px-4 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div className="bg-white rounded-[3rem] p-8 lg:p-12 border border-slate-100 shadow-sm scroll-glow-item transition-all duration-700">
                  <h3 className="text-2xl font-light text-slate-900 mb-8 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Icon icon="solar:verified-check-linear" className="text-emerald-600 text-xl" />
                    </div>
                    Кому подойдет?
                  </h3>
                  <ul className="space-y-4">
                    {indications.indications.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                        <span className="text-emerald-500 mt-1">•</span>
                        <span className="text-slate-700 font-normal leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-slate-50 rounded-[3rem] p-8 lg:p-12 border border-slate-100 scroll-glow-item transition-all duration-700">
                  <h3 className="text-2xl font-light text-slate-900 mb-8 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <Icon icon="solar:shield-warning-linear" className="text-rose-500 text-xl" />
                    </div>
                    Противопоказания
                  </h3>
                  <ul className="space-y-4">
                    {indications.contraindications.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start pb-4 border-b border-white last:border-0 last:pb-0">
                        <span className="text-red-400 mt-1">•</span>
                        <span className="text-slate-700 font-normal leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* ПРЕИМУЩЕСТВА */}
          {advantages && (
            <section className="mb-32 lg:mb-48 relative z-10 max-w-7xl mx-auto">
              <div className="text-center mb-16 stagger-container">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight stagger-item opacity-0">
                  {advantages.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container px-2">
                {advantages.items.map((item, i) => (
                  <div key={i} className="bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500 stagger-item opacity-0">
                    <div className="w-14 h-14 rounded-[1.15rem] bg-sky-50 border border-sky-100 flex items-center justify-center mb-8">
                      <Icon icon={item.icon.replace("-bold", "-linear")} className="text-3xl text-sky-500" />
                    </div>
                    <h3 className="text-xl font-medium text-slate-900 mb-4">{item.title}</h3>
                    <p className="text-slate-600 font-normal leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ЭТАПЫ */}
          {steps && (
            <section className="mb-32 lg:mb-48 max-w-5xl mx-auto px-4 lg:px-8">
               <div className="text-center mb-16">
                 <h2 className="text-3xl lg:text-5xl font-light tracking-tight text-slate-900">
                   {steps.title}
                 </h2>
               </div>
               
               <div className="relative">
                 <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden sm:block"></div>
                 <div className="space-y-12 lg:space-y-24">
                   {steps.items.map((step, i) => {
                     const isEven = i % 2 === 0;
                     return (
                       <div key={i} className={`relative flex flex-col sm:flex-row items-center gap-8 lg:gap-16 ${isEven ? 'lg:flex-row-reverse' : ''} scroll-glow-item transition-all duration-700`}>
                         <div className="w-16 h-16 sm:absolute sm:left-0 lg:left-1/2 sm:-translate-x-1/2 rounded-full bg-white border border-sky-100 flex items-center justify-center z-10 shrink-0 text-sky-500 font-serif text-xl italic shadow-[0_1rem_2.5rem_-1.75rem_rgba(14,165,233,0.5)]">
                           0{i + 1}
                         </div>
                         <div className={`w-full lg:w-1/2 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                           <div className={`bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 relative ${isEven ? 'lg:mr-12' : 'lg:ml-12'}`}>
                             <h4 className="text-2xl font-medium text-slate-900 mb-4">{step.title}</h4>
                             <p className="text-slate-600 font-normal leading-relaxed">{step.desc}</p>
                           </div>
                         </div>
                       </div>
                     );
                   })}
                 </div>
               </div>
            </section>
          )}

          {/* РЕКОМЕНДАЦИИ (ДО / ПОСЛЕ) */}
          {afterCare && (
            <section className="mb-32 lg:mb-48 max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden stagger-container shadow-2xl">
               <div className="relative z-10 text-center mb-12 stagger-item opacity-0">
                  <h2 className="text-3xl lg:text-4xl font-light text-white">{afterCare.title}</h2>
               </div>
               <div className="relative z-10 stagger-item opacity-0">
                  <ul className="space-y-6">
                    {afterCare.items.map((text, i) => (
                      <li key={i} className="flex gap-4 items-start text-white/80 font-light text-lg">
                        <div className="w-2 h-2 rounded-full bg-[#60c2ff] mt-2.5 shrink-0"></div>
                        <span className="leading-relaxed">{text}</span>
                      </li>
                    ))}
                  </ul>
               </div>
            </section>
          )}

          {/* FAQ */}
          {faq && (
            <section className="mb-32 lg:mb-48 max-w-4xl mx-auto px-4 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-light tracking-tight text-slate-900">
                  Часто задаваемые <span className="font-serif italic text-slate-400">вопросы</span>
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                {faq.items.map((item, i) => (
                  <details key={i} className="group bg-white rounded-3xl border border-slate-100 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between p-6 lg:p-8 cursor-pointer list-none">
                      <span className="text-lg lg:text-xl font-medium text-slate-900 pr-8">{item.q}</span>
                      <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center shrink-0 group-open:bg-slate-900 group-open:border-slate-900 group-open:text-white transition-colors">
                        <Icon icon="solar:alt-arrow-down-linear" className="text-xl group-open:rotate-180 transition-transform duration-300" />
                      </div>
                    </summary>
                    <div className="px-6 pb-6 lg:px-8 lg:pb-8 pt-0">
                      <p className="text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-6">
                        {item.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

        </main>
        
        <Footer />
      </div>
    </div>
  );
}
