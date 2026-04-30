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
                  вЂ” РђРїРїР°СЂР°С‚ РїСЂРµРјРёСѓРј-РєР»Р°СЃСЃР°
                </span>
                
                <h1 className="text-[3.5rem] sm:text-6xl lg:text-[6.5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-8 stagger-item opacity-0 relative z-10">
                  Р›Р°Р·РµСЂРЅРѕРµ РѕРјРѕР»РѕР¶РµРЅРёРµ<br/>
                  <span className="font-serif italic text-slate-400">PicoCare 450</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed mb-10 max-w-lg stagger-item opacity-0">
                  РџРѕРґС‚СЏРЅСѓС‚Р°СЏ Рё СЃРёСЏСЋС‰Р°СЏ РєРѕР¶Р° Р±РµР· Р°РіСЂРµСЃСЃРёРІРЅРѕР№ С€Р»РёС„РѕРІРєРё, Р±РѕР»Рё Рё РґРѕР»РіРѕР№ СЂРµР°Р±РёР»РёС‚Р°С†РёРё. РЈСЃС‚СЂР°РЅСЏРµРј РјРѕСЂС‰РёРЅС‹, РїРёРіРјРµРЅС‚Р°С†РёСЋ Рё СЂР°СЃС€РёСЂРµРЅРЅС‹Рµ РїРѕСЂС‹ Р·Р° СЃС‡РµС‚ С„РѕС‚РѕР°РєСѓСЃС‚РёС‡РµСЃРєРѕРіРѕ СЌС„С„РµРєС‚Р°.
                </p>

                <div className="flex flex-col gap-4 mb-10 stagger-item opacity-0">
                  {[
                    "РРґРµР°Р»СЊРЅРѕ СЂРѕРІРЅС‹Р№ С‚РѕРЅ Рё СЂРµР»СЊРµС„",
                    "Р‘РµР· СЃРµР·РѕРЅРЅС‹С… РѕРіСЂР°РЅРёС‡РµРЅРёР№ (РґР°Р¶Рµ Р»РµС‚РѕРј)",
                    "Р РµР°Р±РёР»РёС‚Р°С†РёСЏ РІСЃРµРіРѕ 1-2 РґРЅСЏ"
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
                    <span>Р—Р°РїРёСЃР°С‚СЊСЃСЏ РІ РєР»РёРЅРёРєСѓ</span>
                    <Icon icon="solar:arrow-right-linear" className="text-xl group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-7/12 relative min-h-[500px] lg:min-h-[750px] rounded-[3rem] lg:rounded-[4rem] stagger-item opacity-0 bg-white p-2 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.1)] border border-slate-100">
                <div className="absolute inset-2 sm:inset-3 rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden group">
                  <img 
                    src="https://static.tildacdn.com/tild6431-6533-4465-a166-623536616431/11.jpg" 
                    alt="Р›Р°Р·РµСЂРЅРѕРµ РѕРјРѕР»РѕР¶РµРЅРёРµ PicoCare РІ РЎРєРёРЅРњРµРґ"
                    className="absolute object-cover w-full h-full scale-[1.02] group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-white max-w-xs transition-transform duration-500 hover:-translate-y-2 cursor-default">
                    <div className="flex items-center gap-4 mb-2">
                       <Icon icon="solar:star-fall-bold-duotone" className="text-3xl text-yellow-300" />
                       <span className="text-4xl font-light">1-3</span>
                    </div>
                    <p className="text-sm font-light text-white/80">РїСЂРѕС†РµРґСѓСЂС‹ РґР»СЏ РґРѕСЃС‚РёР¶РµРЅРёСЏ СЃС‚РѕР№РєРѕРіРѕ РІР°Сѓ-СЌС„С„РµРєС‚Р° РѕРјРѕР»РѕР¶РµРЅРёСЏ.</p>
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
                    Р§С‚Рѕ С‚Р°РєРѕРµ <span className="font-serif italic text-slate-400">PicoCare?</span><br/>
                    Р РїРѕС‡РµРјСѓ СЌС‚Рѕ РїСЂРѕСЂС‹РІ.
                  </h2>
                  <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                     <p>
                       РџРёРєРѕСЃРµРєСѓРЅРґРЅС‹Р№ Р»Р°Р·РµСЂ PicoCare вЂ” СЌС‚Рѕ СЂРµРІРѕР»СЋС†РёСЏ РІ Р°РїРїР°СЂР°С‚РЅРѕР№ РєРѕСЃРјРµС‚РѕР»РѕРіРёРё. Р•РіРѕ РіР»Р°РІРЅРѕРµ РѕС‚Р»РёС‡РёРµ РѕС‚ РєР»Р°СЃСЃРёС‡РµСЃРєРёС… CO2 РёР»Рё СЌСЂР±РёРµРІС‹С… Р»Р°Р·РµСЂРѕРІ Р·Р°РєР»СЋС‡Р°РµС‚СЃСЏ РІРѕ РІСЂРµРјРµРЅРё РёРјРїСѓР»СЊСЃР°.
                     </p>
                     <p>
                       Р’РјРµСЃС‚Рѕ РјРёР»Р»РёСЃРµРєСѓРЅРґ РѕРЅ СЂР°Р±РѕС‚Р°РµС‚ РІ РїРёРєРѕСЃРµРєСѓРЅРґРЅРѕРј РґРёР°РїР°Р·РѕРЅРµ (С‚СЂРёР»Р»РёРѕРЅРЅС‹Рµ РґРѕР»Рё СЃРµРєСѓРЅРґС‹). Р›Р°Р·РµСЂ <strong className="font-medium text-slate-700">РЅРµ РЅР°РіСЂРµРІР°РµС‚ Рё РЅРµ РёСЃРїР°СЂСЏРµС‚ С‚РєР°РЅРё</strong>. РћРЅ РёСЃРїРѕР»СЊР·СѓРµС‚ С„РѕС‚РѕР°РєСѓСЃС‚РёС‡РµСЃРєРёР№ СЌС„С„РµРєС‚ вЂ” РјРѕС‰РЅСѓСЋ СѓРґР°СЂРЅСѓСЋ РІРѕР»РЅСѓ.
                     </p>
                     <p>
                       Р­С‚Р° РІРѕР»РЅР° СЃС‚РёРјСѓР»РёСЂСѓРµС‚ РєР»РµС‚РєРё РєРѕР¶Рё Рє Р°РєС‚РёРІРЅРѕРјСѓ СЃРёРЅС‚РµР·Сѓ РЅРѕРІРѕРіРѕ РєРѕР»Р»Р°РіРµРЅР° Рё СЌР»Р°СЃС‚РёРЅР°, РїСЂРё СЌС‚РѕРј СЌРїРёРґРµСЂРјРёСЃ РѕСЃС‚Р°РµС‚СЃСЏ С†РµР»С‹Рј. РљРѕР¶Р° РїРѕРґС‚СЏРіРёРІР°РµС‚СЃСЏ, РјРѕСЂС‰РёРЅС‹ РёСЃС‡РµР·Р°СЋС‚, Р° СЃСЂРѕРє СЂРµР°Р±РёР»РёС‚Р°С†РёРё СЃРѕРєСЂР°С‰Р°РµС‚СЃСЏ РґРѕ РјРёРЅРёРјСѓРјР°.
                     </p>
                  </div>
                </div>
                <div className="stagger-item opacity-0 grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-12">
                     <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                       <img src="https://static.tildacdn.com/tild3137-3438-4935-a664-333932396537/-.jpg" alt="РџСЂРѕС†РµСЃСЃ Р»Р°Р·РµСЂРЅРѕРіРѕ РѕРјРѕР»РѕР¶РµРЅРёСЏ" className="w-full h-full object-cover" />
                     </div>
                     <div className="bg-blue-50 rounded-3xl p-6 h-40 flex flex-col justify-center border border-blue-100">
                       <Icon icon="solar:shield-check-bold" className="text-3xl text-blue-500 mb-3" />
                       <span className="font-medium text-slate-800">РћРґРѕР±СЂРµРЅРѕ FDA</span>
                       <span className="text-sm text-slate-500">Р—РѕР»РѕС‚РѕР№ СЃС‚Р°РЅРґР°СЂС‚ (РЎРЁРђ)</span>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="bg-[#60c2ff]/10 rounded-3xl p-6 h-40 flex flex-col justify-center border border-[#60c2ff]/20">
                       <Icon icon="solar:clock-circle-bold" className="text-3xl text-[#60c2ff] mb-3" />
                       <span className="font-medium text-slate-800">Р‘РµР· СЂРµР°Р±РёР»РёС‚Р°С†РёРё</span>
                       <span className="text-sm text-slate-500">РџРѕРєСЂР°СЃРЅРµРЅРёРµ СЃС…РѕРґРёС‚ Р·Р° С‡Р°СЃС‹</span>
                     </div>
                     <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                       <img src="https://static.tildacdn.com/tild6431-6533-4465-a166-623536616431/11.jpg" alt="Р РµР·СѓР»СЊС‚Р°С‚ РїСЂРѕС†РµРґСѓСЂС‹ PicoCare" className="w-full h-full object-cover" />
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
                   РљР°РєРёРµ РїСЂРѕР±Р»РµРјС‹ <span className="font-serif italic text-blue-300">СЂРµС€Р°РµС‚</span> PicoCare?
                 </h2>
                 <p className="text-slate-300 font-light text-lg mb-10 leading-relaxed">
                   Р’РѕР·СЂР°СЃС‚РЅС‹Рµ РёР·РјРµРЅРµРЅРёСЏ РЅР°С‡РёРЅР°СЋС‚СЃСЏ СѓР¶Рµ РїРѕСЃР»Рµ 30 Р»РµС‚. Р’С‹СЂР°Р±РѕС‚РєР° РєРѕР»Р»Р°РіРµРЅР° СЃРЅРёР¶Р°РµС‚СЃСЏ, РєРѕР¶Р° С‚РµСЂСЏРµС‚ С‚РѕРЅСѓСЃ, РїРѕСЏРІР»СЏСЋС‚СЃСЏ РїРµСЂРІС‹Рµ Р·Р°Р»РѕРјС‹ Рё РїРёРіРјРµРЅС‚РЅС‹Рµ РїСЏС‚РЅР°. PicoCare СЃРѕР·РґР°РЅР° РёРјРµРЅРЅРѕ РґР»СЏ С‚РѕРіРѕ, С‡С‚РѕР±С‹ РїРѕРІРµСЂРЅСѓС‚СЊ РІСЂРµРјСЏ РІСЃРїСЏС‚СЊ.
                 </p>
                 
                 <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                    {[
                      "РњРµР»РєРёРµ РјРѕСЂС‰РёРЅС‹ Рё Р·Р°Р»РѕРјС‹",
                      "РџРѕС‚РµСЂСЏ С‚РѕРЅСѓСЃР° Рё РїР»РѕС‚РЅРѕСЃС‚Рё РєРѕР¶Рё",
                      "РџРёРіРјРµРЅС‚РЅС‹Рµ РїСЏС‚РЅР° Рё РІРµСЃРЅСѓС€РєРё",
                      "Р Р°СЃС€РёСЂРµРЅРЅС‹Рµ РїРѕСЂС‹",
                      "РЎР»РµРґС‹ РїРѕСЃС‚Р°РєРЅРµ Рё СЂСѓР±С†С‹",
                      "РўСѓСЃРєР»С‹Р№, СЃРµСЂС‹Р№ С†РІРµС‚ Р»РёС†Р°"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <Icon icon="solar:check-circle-bold" className="text-[#60c2ff] text-xl shrink-0 mt-0.5" />
                        <span className="text-white/90 font-light">{item}</span>
                      </div>
                    ))}
                 </div>
                 
                 <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-sm text-slate-300">
                   <strong className="text-white flex items-center gap-2 mb-2"><Icon icon="solar:info-circle-bold" className="text-blue-400" /> РџСЂРѕС‚РёРІРѕРїРѕРєР°Р·Р°РЅРёСЏ:</strong>
                   Р‘РµСЂРµРјРµРЅРЅРѕСЃС‚СЊ, Р»Р°РєС‚Р°С†РёСЏ, РёРЅС„РµРєС†РёРё РІ СЃС‚Р°РґРёРё РѕР±РѕСЃС‚СЂРµРЅРёСЏ, СЃРІРµР¶РёР№ Р·Р°РіР°СЂ (РјРµРЅРµРµ 2-4 РЅРµРґРµР»СЊ), РѕРЅРєРѕР»РѕРіРёСЏ.
                 </div>
               </div>
               
               <div className="w-full lg:w-1/2 relative stagger-item opacity-0">
                  <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center p-8 bg-white/5 relative">
                     <div className="absolute inset-0 bg-[url('https://static.tildacdn.com/tild3134-6139-4861-b330-363262623638/--.jpg')] bg-cover bg-center rounded-full opacity-50 mix-blend-overlay"></div>
                     <div className="relative z-10 text-center">
                        <Icon icon="solar:health-bold" className="text-6xl text-white mb-6 mx-auto" />
                        <div className="text-3xl font-light text-white leading-tight">Р’РµСЂРЅРёС‚Рµ РєРѕР¶Рµ<br/><span className="font-serif italic text-blue-300">Р·РґРѕСЂРѕРІСЊРµ Рё СЃРёСЏРЅРёРµ</span></div>
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
                   Р¤РѕС‚Рѕ <span className="font-serif italic text-slate-400">РґРѕ Рё РїРѕСЃР»Рµ</span>
                 </h2>
                 <p className="text-slate-500 mt-4 text-lg font-light">Р”Рѕ 95% РїР°С†РёРµРЅС‚РѕРІ РѕС‚РјРµС‡Р°СЋС‚ СѓР»СѓС‡С€РµРЅРёРµ РєРѕР¶Рё СѓР¶Рµ РїРѕСЃР»Рµ 1 РІРёР·РёС‚Р°</p>
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
                 { src: "https://static.tildacdn.com/tild3338-6237-4635-b438-383766326333/6.png", label: "Р›Р°Р·РµСЂРЅРѕРµ РѕРјРѕР»РѕР¶РµРЅРёРµ, РІС‹СЂР°РІРЅРёРІР°РЅРёРµ С‚РѕРЅР°" },
                 { src: "https://static.tildacdn.com/tild3138-3238-4839-b465-343135663532/5.jpg", label: "РЎСѓР¶РµРЅРёРµ РїРѕСЂ, СЂР°Р·РіР»Р°Р¶РёРІР°РЅРёРµ РјРѕСЂС‰РёРЅ" },
                 { src: "https://static.tildacdn.com/tild3133-3963-4332-b264-323163383038/3.png", label: "РЈСЃС‚СЂР°РЅРµРЅРёРµ РїРёРіРјРµРЅС‚Р°С†РёРё" },
                 { src: "https://static.tildacdn.com/tild3439-3364-4635-b439-636537613366/4.jpg", label: "Р›РµС‡РµРЅРёРµ РїРѕСЃС‚Р°РєРЅРµ Рё СѓР»СѓС‡С€РµРЅРёРµ СЂРµР»СЊРµС„Р°" },
                 { src: "https://static.tildacdn.com/tild3664-3534-4061-b036-653938613831/1.jpg", label: "Р›РёС„С‚РёРЅРі СЌС„С„РµРєС‚ Рё РѕСЃРІРµС‚Р»РµРЅРёРµ" },
                 { src: "https://static.tildacdn.com/tild3134-3932-4631-b634-326534663265/2.jpg", label: "РџСЂРѕС„РёР»Р°РєС‚РёРєР° РІРѕР·СЂР°СЃС‚РЅС‹С… РёР·РјРµРЅРµРЅРёР№" }
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
                Р’СЂР°С‡Рё-СЌРєСЃРїРµСЂС‚С‹ РїРѕ Р»Р°Р·РµСЂРЅРѕРјСѓ РѕРјРѕР»РѕР¶РµРЅРёСЋ <span className="font-serif italic text-slate-400">PicoCare</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {[
                 { name: "Специалист SkinMed", role: "Р“Р»Р°РІРЅС‹Р№ РІСЂР°С‡, РєРѕСЃРјРµС‚РѕР»РѕРі", src: "https://static.tildacdn.com/tild3135-6136-4039-b265-353466623863/photo.jpg" },
                 { name: "Специалист SkinMed", role: "Р’СЂР°С‡-РґРµСЂРјР°С‚РѕРІРµРЅРµСЂРѕР»РѕРі", src: "https://static.tildacdn.com/tild3134-6133-4638-b463-626334343761/--3.jpg" },
                 { name: "Специалист SkinMed", role: "Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі", src: "https://static.tildacdn.com/tild3531-3565-4365-a430-333762333134/-.jpg" },
                 { name: "Специалист SkinMed", role: "Р’СЂР°С‡-РґРµСЂРјР°С‚РѕР»РѕРі", src: "https://static.tildacdn.com/tild6433-3563-4639-b431-353834383066/-.jpg" },
                 { name: "Специалист SkinMed", role: "Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі", src: "https://static.tildacdn.com/tild6430-3238-4635-a361-393430646636/-.jpg" },
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
                РџРѕС‡РµРјСѓ PicoCare РЅСЂР°РІРёС‚СЃСЏ <span className="font-serif italic text-slate-400">РїР°С†РёРµРЅС‚Р°Рј?</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 stagger-container">
              {[
                { title: "Р‘РµР· Р±РѕР»Рё Рё РѕР¶РѕРіРѕРІ", desc: "Р—Р°Р±СѓРґСЊС‚Рµ Рѕ Р»Р°Р·РµСЂР°С… РїСЂРѕС€Р»РѕРіРѕ РїРѕРєРѕР»РµРЅРёСЏ, РєРѕС‚РѕСЂС‹Рµ СЃР¶РёРіР°Р»Рё РєРѕР¶Сѓ. PicoCare РґРµР№СЃС‚РІСѓРµС‚ СѓР»СЊС‚СЂР°РєРѕСЂРѕС‚РєРёРј РёРјРїСѓР»СЊСЃРѕРј, РєРѕС‚РѕСЂС‹Р№ РЅРµ СѓСЃРїРµРІР°РµС‚ СЂР°Р·РѕРіСЂРµС‚СЊ С‚РєР°РЅСЊ. РџР°С†РёРµРЅС‚ РѕС‰СѓС‰Р°РµС‚ Р»РёС€СЊ Р»РµРіРєРѕРµ С‚РµРїР»Рѕ.", icon: "solar:leaf-linear", color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100" },
                { title: "Р’СЃРµСЃРµР·РѕРЅРЅРѕСЃС‚СЊ", desc: "РўРµРїРµСЂСЊ РЅРµ РЅСѓР¶РЅРѕ Р¶РґР°С‚СЊ Р·РёРјС‹. РћРјРѕР»РѕР¶РµРЅРёРµ PicoCare РјРѕР¶РЅРѕ РґРµР»Р°С‚СЊ РґР°Р¶Рµ Р»РµС‚РѕРј! Р“Р»Р°РІРЅРѕРµ вЂ” РЅР°РЅРѕСЃРёС‚СЊ СЃРѕР»РЅС†РµР·Р°С‰РёС‚РЅС‹Р№ РєСЂРµРј SPF-50 РїРµСЂРµРґ РІС‹С…РѕРґРѕРј РЅР° СѓР»РёС†Сѓ.", icon: "solar:sun-linear", color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100" },
                { title: "Р‘РµР· СЂРµР°Р±РёР»РёС‚Р°С†РёРё", desc: "РќРёРєР°РєРёС… РєРѕСЂРѕРє, С€РµР»СѓС€РµРЅРёР№ Рё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё СЃРёРґРµС‚СЊ РґРѕРјР° РЅРµРґРµР»СЋ. Р›РµРіРєРѕРµ РїРѕРєСЂР°СЃРЅРµРЅРёРµ Р»РёС†Р° РїСЂРѕС…РѕРґРёС‚ СѓР¶Рµ Рє РІРµС‡РµСЂСѓ РёР»Рё РЅР° СЃР»РµРґСѓСЋС‰РёР№ РґРµРЅСЊ. Р’С‹ СЃСЂР°Р·Сѓ РІРѕР·РІСЂР°С‰Р°РµС‚РµСЃСЊ Рє Р¶РёР·РЅРё.", icon: "solar:cup-star-linear", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100" }
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
                    вЂ” Р’РѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёРµ
                  </span>
                  <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                    Р РµРєРѕРјРµРЅРґР°С†РёРё <span className="font-serif italic text-slate-400">РїРѕСЃР»Рµ</span>
                  </h2>
                </div>

                <div className="flex flex-col">
                  <EditorialList items={[
                { title: "Р’ С‚РµС‡РµРЅРёРµ 2 РЅРµРґРµР»СЊ РёР·Р±РµРіР°Р№С‚Рµ Р°РєС‚РёРІРЅРѕРіРѕ СЃРѕР»РЅС†Р°. Р•Р¶РµРґРЅРµРІРЅРѕ РЅР°РЅРѕСЃРёС‚Рµ РєСЂРµРј СЃ SPF 50 РЅР° РѕР±СЂР°Р±РѕС‚Р°РЅРЅС‹Рµ Р·РѕРЅС‹ РїРµСЂРµРґ РІС‹С…РѕРґРѕРј РЅР° СѓР»РёС†Сѓ.", desc: "" },
                { title: "Р’ РїРµСЂРІС‹Рµ 7в€’10 РґРЅРµР№ РёСЃРєР»СЋС‡РёС‚Рµ Р±Р°РЅРё, СЃР°СѓРЅС‹, РіРѕСЂСЏС‡РёРµ РІР°РЅРЅС‹ Рё РїРµСЂРµРѕС…Р»Р°Р¶РґРµРЅРёРµ. РљРѕР¶Р° РґРѕР»Р¶РЅР° РІРѕСЃСЃС‚Р°РЅР°РІР»РёРІР°С‚СЊСЃСЏ РІ РєРѕРјС„РѕСЂС‚РЅРѕР№ С‚РµРјРїРµСЂР°С‚СѓСЂРµ Р±РµР· СЂРµР·РєРёС… СЃРєР°С‡РєРѕРІ.", desc: "" },
                { title: "РР·Р±РµРіР°Р№С‚Рµ Р°РіСЂРµСЃСЃРёРІРЅС‹С… СЃСЂРµРґСЃС‚РІ, СЃРєСЂР°Р±РѕРІ, СЃРїРёСЂС‚РѕСЃРѕРґРµСЂР¶Р°С‰РёС… Р»РѕСЃСЊРѕРЅРѕРІ Рё РєРёСЃР»РѕС‚ РјРёРЅРёРјСѓРј РЅР° РѕРґРЅСѓ РЅРµРґРµР»СЋ.", desc: "" }
              ]} />
                </div>
             </div>

             {/* FAQ */}
             <div>
                <div className="mb-16 stagger-item opacity-0 flex flex-col justify-start border-b border-slate-200/50 pb-8">
                  <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                    вЂ” FAQ
                  </span>
                  <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                    РџРѕРїСѓР»СЏСЂРЅС‹Рµ <span className="font-serif italic text-slate-400">РІРѕРїСЂРѕСЃС‹</span>
                  </h2>
                </div>
                
                <div className="flex flex-col gap-4">
                  {[
                    {
                      q: "РљР°Рє Р±С‹СЃС‚СЂРѕ СЏ СѓРІРёР¶Сѓ СЂРµР·СѓР»СЊС‚Р°С‚, Рё СЃРєРѕР»СЊРєРѕ РѕРЅ РґРµСЂР¶РёС‚СЃСЏ?",
                      a: "Р’Рѕ РјРЅРѕРіРёС… СЃР»СѓС‡Р°СЏС… СѓР»СѓС‡С€РµРЅРёРµ С‚РѕРЅСѓСЃР°, С†РІРµС‚Р° Рё С‚РµРєСЃС‚СѓСЂС‹ РєРѕР¶Рё РІС‹ Р·Р°РјРµС‚РёС‚Рµ СѓР¶Рµ РїРѕСЃР»Рµ 1 РїСЂРѕС†РµРґСѓСЂС‹. РњР°РєСЃРёРјР°Р»СЊРЅС‹Р№ СЌС„С„РµРєС‚ (РІС‹СЂР°Р±РѕС‚РєР° СЃРІРѕРµРіРѕ РєРѕР»Р»Р°РіРµРЅР°) СЂР°Р·РІРѕСЂР°С‡РёРІР°РµС‚СЃСЏ Р·Р° 1 РјРµСЃСЏС†. Р РµР·СѓР»СЊС‚Р°С‚ РґРµСЂР¶РёС‚СЃСЏ РґРѕ 1-1.5 Р»РµС‚."
                    },
                    {
                      q: "Р‘РµР·Р±РѕР»РµР·РЅРµРЅРЅР° Р»Рё РїСЂРѕС†РµРґСѓСЂР°?",
                      a: "PicoCare РѕС‡РµРЅСЊ РєРѕРјС„РѕСЂС‚РЅР° РїРѕ СЃСЂР°РІРЅРµРЅРёСЋ СЃРѕ СЃС‚Р°СЂРѕР№ CO2 С€Р»РёС„РѕРІРєРѕР№. Р‘РѕР»СЊС€РёРЅСЃС‚РІРѕ РїР°С†РёРµРЅС‚РѕРІ РѕС‰СѓС‰Р°СЋС‚ Р»РёС€СЊ С‚РµРїР»Рѕ Рё Р»РµРіРєРѕРµ РїРѕРєР°Р»С‹РІР°РЅРёРµ. РџРѕ Р¶РµР»Р°РЅРёСЋ РЅР°РЅРѕСЃРёС‚СЃСЏ Р°РїРїР»РёРєР°С†РёРѕРЅРЅР°СЏ Р°РЅРµСЃС‚РµР·РёСЏ (РєСЂРµРј), РЅРѕ С‡Р°СЃС‚Рѕ РјРѕР¶РЅРѕ РѕР±РѕР№С‚РёСЃСЊ Рё Р±РµР· РЅРµРµ."
                    },
                    {
                      q: "Р§РµРј PicoCare РѕС‚Р»РёС‡Р°РµС‚СЃСЏ РѕС‚ CO2-С€Р»РёС„РѕРІРєРё?",
                      a: "CO2 РёСЃРїР°СЂСЏРµС‚ (СЃР¶РёРіР°РµС‚) РІРµСЂС…РЅРёР№ СЃР»РѕР№ РєРѕР¶Рё, РѕСЃС‚Р°РІР»СЏСЏ РєРѕСЂРєРё Рё С‚СЂРµР±СѓСЏ РЅРµРґРµР»СЋ Р±РѕР»СЊРЅРёС‡РЅРѕРіРѕ. PicoCare СЂР°Р±РѕС‚Р°РµС‚ В«С…РѕР»РѕРґРЅС‹РјВ» СЃРІРµС‚РѕРј, СЃРѕР·РґР°РІР°СЏ Р°РєСѓСЃС‚РёС‡РµСЃРєСѓСЋ РІР·СЂС‹РІРЅСѓСЋ РІРѕР»РЅСѓ РІРЅСѓС‚СЂРё РєРѕР¶Рё Р±РµР· РїРѕРІСЂРµР¶РґРµРЅРёСЏ РїРѕРІРµСЂС…РЅРѕСЃС‚Рё. РќРµС‚ РєРѕСЂРѕРє, РЅРµС‚ РѕР¶РѕРіРѕРІ, СЌС„С„РµРєС‚ Р»РёС„С‚РёРЅРіР° РїСЂРё СЌС‚РѕРј РїРѕС‚СЂСЏСЃР°СЋС‰РёР№."
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
                Р—Р°РїРёС€РёС‚РµСЃСЊ РЅР° Р»Р°Р·РµСЂРЅРѕРµ РѕРјРѕР»РѕР¶РµРЅРёРµ
              </h2>
              <p className="text-slate-300 font-light text-xl max-w-2xl mx-auto mb-10">
                РњС‹ СЃРІСЏР¶РµРјСЃСЏ СЃ РІР°РјРё РІ С‚РµС‡РµРЅРёРµ 15 РјРёРЅСѓС‚ РІ СЂР°Р±РѕС‡РµРµ РІСЂРµРјСЏ Рё РѕС‚РІРµС‚РёРј РЅР° РІСЃРµ РІРѕРїСЂРѕСЃС‹.
              </p>
              
              <button 
                onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                className="px-10 py-5 bg-[#60c2ff] text-slate-900 rounded-full font-semibold text-lg hover:bg-white transition-colors duration-300 shadow-[0_0_40px_rgba(96,194,255,0.4)]"
              >
                РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ
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
