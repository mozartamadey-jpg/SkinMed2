'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

export default function ScarRemovalClient() {

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const initObserver = () => {
      if (window.innerWidth > 768) {
        if (observer) { observer.disconnect(); observer = null; }
        document.querySelectorAll('.mobile-glow-active').forEach(el => el.classList.remove('mobile-glow-active'));
        return;
      }
      if (!observer) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('mobile-glow-active');
            else entry.target.classList.remove('mobile-glow-active');
          });
        }, { rootMargin: "-40% 0px -40% 0px", threshold: 0 });
        setTimeout(() => {
          document.querySelectorAll('.scroll-glow-item').forEach(el => observer?.observe(el));
        }, 500);
      }
    };

    initObserver();
    window.addEventListener('resize', initObserver);
    return () => { window.removeEventListener('resize', initObserver); if (observer) observer.disconnect(); };
  }, []);

  // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
  //  DATA вЂ” rewritten premium content
  // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

  const cases = [
    { before: "https://static.tildacdn.com/tild3033-6565-4362-b066-373365386134/-5.jpg", after: "https://optim.tildacdn.com/tild6333-6363-4131-a337-636138393730/-/cover/351x351/center/center/-/format/webp/-7.jpg.webp", descBefore: "Р–РµРЅС‰РёРЅР°, 33 РіРѕРґР°. Р СѓР±С†С‹ РїРѕСЃС‚Р°РєРЅРµ РЅР° Р»РёС†Рµ", descAfter: "Р—РґРѕСЂРѕРІС‹Р№ С†РІРµС‚ РєРѕР¶Рё Рё СЂРѕРІРЅС‹Р№ СЂРµР»СЊРµС„ РїРѕСЃР»Рµ 1 РїСЂРѕС†РµРґСѓСЂС‹" },
    { before: "https://optim.tildacdn.com/tild3063-3238-4961-b430-633064303934/-/cover/351x351/center/center/-/format/webp/-4.jpg.webp", after: "https://optim.tildacdn.com/tild3766-3164-4164-a363-313131376262/-/cover/351x351/center/center/-/format/webp/-3.jpg.webp", descBefore: "Р–РµРЅС‰РёРЅР°, 36 Р»РµС‚. Р“Р»СѓР±РѕРєРёРµ СЂСѓР±С†С‹ РЅР° Р»РёС†Рµ", descAfter: "РЈР»СѓС‡С€РµРЅРёРµ С‚РµРєСЃС‚СѓСЂС‹ Рё С‚РѕРЅР° РїРѕСЃР»Рµ 4 РїСЂРѕС†РµРґСѓСЂ" },
    { before: "https://optim.tildacdn.com/tild3737-6664-4135-b562-386531353233/-/cover/351x351/center/center/-/format/webp/-2.jpg.webp", after: "https://optim.tildacdn.com/tild3664-6266-4165-b436-336234626263/-/cover/351x351/center/center/-/format/webp/-1.jpg.webp", descBefore: "Р”РµРІСѓС€РєР°, 28 Р»РµС‚. Р СѓР±С†С‹ РїРѕСЃС‚Р°РєРЅРµ", descAfter: "Р“Р»Р°РґРєР°СЏ РєРѕР¶Р° Рё СЂРѕРІРЅС‹Р№ СЂРµР»СЊРµС„ РїРѕСЃР»Рµ 2 РїСЂРѕС†РµРґСѓСЂ" },
  ];

  const advantages = [
    { title: "Р РµР·СѓР»СЊС‚Р°С‚ Р·Р° 1 СЃРµР°РЅСЃ", desc: "Р’РёРґРёРјРѕРµ СѓР»СѓС‡С€РµРЅРёРµ СЂРµР»СЊРµС„Р° РєРѕР¶Рё Рё СѓРјРµРЅСЊС€РµРЅРёРµ РіР»СѓР±РёРЅС‹ СЂСѓР±С†РѕРІРѕР№ С‚РєР°РЅРё СѓР¶Рµ РїРѕСЃР»Рµ РїРµСЂРІРѕР№ РїСЂРѕС†РµРґСѓСЂС‹." },
    { title: "Р‘РµР· Р±РѕР»Рё", desc: "РџРёРєРѕСЃРµРєСѓРЅРґРЅС‹Р№ В«С…РѕР»РѕРґРЅС‹Р№В» Р»Р°Р·РµСЂ PicoCare РЅРµ РїРµСЂРµРіСЂРµРІР°РµС‚ С‚РєР°РЅРё вЂ” РїСЂРѕС†РµРґСѓСЂР° РїСЂРѕС…РѕРґРёС‚ РєРѕРјС„РѕСЂС‚РЅРѕ, Р±РµР· Р°РЅРµСЃС‚РµР·РёРё." },
    { title: "РњРёРЅРёРјСѓРј РїСЂРѕС†РµРґСѓСЂ", desc: "Р­РЅРµСЂРіРёСЏ РёРјРїСѓР»СЊСЃР° PicoCare РІ 3 СЂР°Р·Р° РІС‹С€Рµ Р°РЅР°Р»РѕРіРѕРІ, С‡С‚Рѕ СЃРѕРєСЂР°С‰Р°РµС‚ РєСѓСЂСЃ Р»РµС‡РµРЅРёСЏ РґРѕ 1вЂ“3 РїСЂРѕС†РµРґСѓСЂ." },
    { title: "РљРѕРјРїР»РµРєСЃРЅС‹Р№ РїРѕРґС…РѕРґ", desc: "РЎРѕС‡РµС‚Р°РЅРёРµ РґРІСѓС… Р»Р°Р·РµСЂРѕРІ вЂ” PicoCare Рё CO2 Bison вЂ” РїРѕР·РІРѕР»СЏРµС‚ СЂР°Р±РѕС‚Р°С‚СЊ СЃ Р»СЋР±С‹РјРё С‚РёРїР°РјРё СЂСѓР±С†РѕРІ, РІРєР»СЋС‡Р°СЏ РіРёРїРµСЂС‚СЂРѕС„РёС‡РµСЃРєРёРµ." },
    { title: "РќР°СѓС‡РЅР°СЏ РѕСЃРЅРѕРІР°", desc: "Р›РµС‡РµРЅРёРµ РїСЂРѕРІРѕРґРёС‚СЃСЏ РїРѕ РїСЂРѕС‚РѕРєРѕР»Р°Рј СЃ РґРѕРєР°Р·Р°РЅРЅРѕР№ СЌС„С„РµРєС‚РёРІРЅРѕСЃС‚СЊСЋ. Р’СЃРµ РїСЂРѕС†РµРґСѓСЂС‹ РІС‹РїРѕР»РЅСЏРµС‚ РІСЂР°С‡-РґРµСЂРјР°С‚РѕР»РѕРі СЃ РїСЂРѕС„РёР»СЊРЅС‹Рј РѕРїС‹С‚РѕРј РѕС‚ 3 Р»РµС‚." },
  ];

  const contraindications = [
    { title: "РћРЅРєРѕР»РѕРіРёС‡РµСЃРєРёРµ Р·Р°Р±РѕР»РµРІР°РЅРёСЏ", icon: "solar:shield-cross-linear" },
    { title: "РРјРјСѓРЅРѕСЃСѓРїСЂРµСЃСЃРёРІРЅС‹Рµ СЃРѕСЃС‚РѕСЏРЅРёСЏ", icon: "solar:virus-linear" },
    { title: "РќРѕРІРѕРѕР±СЂР°Р·РѕРІР°РЅРёСЏ", icon: "solar:danger-triangle-linear" },
    { title: "РћСЃС‚СЂС‹Рµ РёРЅС„РµРєС†РёРё", icon: "solar:thermometer-linear" },
    { title: "Р‘РµСЂРµРјРµРЅРЅРѕСЃС‚СЊ Рё Р»Р°РєС‚Р°С†РёСЏ", icon: "solar:heart-pulse-linear" },
    { title: "РќР°Р»РёС‡РёРµ РёРјРїР»Р°РЅС‚РѕРІ РІ Р·РѕРЅРµ", icon: "solar:bone-linear" },
  ];

  const steps = [
    { title: "РљРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ", desc: "Р’СЂР°С‡ Р°РЅР°Р»РёР·РёСЂСѓРµС‚ СЃРѕСЃС‚РѕСЏРЅРёРµ РєРѕР¶Рё, РѕРїСЂРµРґРµР»СЏРµС‚ РїСЂРёС‡РёРЅСѓ РїРѕСЏРІР»РµРЅРёСЏ СЂСѓР±С†РѕРІ Рё СЃРѕСЃС‚Р°РІР»СЏРµС‚ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Р№ РїР»Р°РЅ Р»РµС‡РµРЅРёСЏ. Р’С‹ РїРѕР»СѓС‡РёС‚Рµ РѕС‚РІРµС‚С‹ РЅР° РІСЃРµ РІРѕРїСЂРѕСЃС‹ Рё С‡С‘С‚РєРѕРµ РїРѕРЅРёРјР°РЅРёРµ РѕР¶РёРґР°РµРјРѕРіРѕ СЂРµР·СѓР»СЊС‚Р°С‚Р°." },
    { title: "РџСЂРѕС†РµРґСѓСЂР°", desc: "РўС‰Р°С‚РµР»СЊРЅРѕРµ РѕС‡РёС‰РµРЅРёРµ РєРѕР¶Рё, С„РѕС‚РѕС„РёРєСЃР°С†РёСЏ РёСЃС…РѕРґРЅРѕРіРѕ СЃРѕСЃС‚РѕСЏРЅРёСЏ. Р’СЂР°С‡ РїРѕРґР±РёСЂР°РµС‚ Р»Р°Р·РµСЂ Рё РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ РїР°СЂР°РјРµС‚СЂС‹. Р”Р»РёС‚РµР»СЊРЅРѕСЃС‚СЊ СЃРµР°РЅСЃР° вЂ” 15вЂ“30 РјРёРЅСѓС‚. РџРѕСЃР»Рµ РїСЂРѕС†РµРґСѓСЂС‹ РЅР°РЅРѕСЃРёС‚СЃСЏ РІРѕСЃСЃС‚Р°РЅР°РІР»РёРІР°СЋС‰РёР№ РєСЂРµРј." },
    { title: "Р—Р°Р±РѕС‚Р° РїРѕСЃР»Рµ", desc: "РџРµСЂСЃРѕРЅР°Р»СЊРЅС‹Рµ СЂРµРєРѕРјРµРЅРґР°С†РёРё РїРѕ СѓС…РѕРґСѓ. РќР° СЃР»РµРґСѓСЋС‰РёР№ РґРµРЅСЊ СЃР»СѓР¶Р±Р° Р·Р°Р±РѕС‚С‹ СѓР·РЅР°РµС‚ Рѕ РІР°С€РµРј СЃР°РјРѕС‡СѓРІСЃС‚РІРёРё. Р§РµСЂРµР· РјРµСЃСЏС† вЂ” РєРѕРЅС‚СЂРѕР»СЊРЅС‹Р№ РѕСЃРјРѕС‚СЂ РґР»СЏ РѕС†РµРЅРєРё СЂРµР·СѓР»СЊС‚Р°С‚Р°." },
  ];

  const pricesPicoCare = [
    { name: "PicoCare S", price: "5.000в‚Ѕ" },
    { name: "PicoCare M", price: "6.000в‚Ѕ" },
    { name: "PicoCare L", price: "8.000в‚Ѕ" },
    { name: "PicoCare XL", price: "9.000в‚Ѕ" },
    { name: "PicoCare Full", price: "15.000в‚Ѕ" },
  ];

  const pricesZones = [
    { name: "РњР°Р»Р°СЏ Р·РѕРЅР°", price: "6.000в‚Ѕ" },
    { name: "РЎСЂРµРґРЅСЏСЏ Р·РѕРЅР°", price: "8.000в‚Ѕ" },
    { name: "Р‘РѕР»СЊС€Р°СЏ Р·РѕРЅР°", price: "9.000в‚Ѕ" },
    { name: "Р—РѕРЅР° L", price: "12.000в‚Ѕ" },
    { name: "Р—РѕРЅР° XL", price: "15.000в‚Ѕ" },
    { name: "РљСѓСЂСЃ Р·РѕРЅР° M", price: "25.000в‚Ѕ" },
    { name: "РљСѓСЂСЃ Р·РѕРЅР° L", price: "30.000в‚Ѕ" },
  ];

  const pricesCO2 = [
    { name: "CO2 S", price: "2.000в‚Ѕ" },
    { name: "CO2 M", price: "4.000в‚Ѕ" },
    { name: "CO2 L", price: "4.900в‚Ѕ" },
    { name: "CO2 XL", price: "9.900в‚Ѕ" },
  ];

  return (
    <div className="min-h-screen relative font-sans text-slate-800 flex flex-col">
      <AnimationsProvider />
      
      {/* Aurora Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/90 via-[#f0f5fa]/80 to-[#e4eaf0]/90"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] bg-gradient-to-br from-[#60c2ff]/30 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "25s" }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] bg-gradient-to-tl from-[#80d0ff]/20 via-[#cddce9]/40 to-transparent blur-[5rem] opacity-40 mix-blend-normal animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}></div>
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-[100%] bg-gradient-to-bl from-[#b8e0ff]/30 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "30s", animationDirection: "reverse" }}></div>
        <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        <main className="w-full mt-12 sm:mt-16">

          {/* в•ђв•ђв•ђв•ђв•ђв•ђв•ђ Breadcrumbs в•ђв•ђв•ђв•ђв•ђв•ђв•ђ */}
          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Р“Р»Р°РІРЅР°СЏ</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <a href="/services/lazernaya-kosmetologiya" className="hover:text-[#60c2ff] transition-colors duration-300">Р›Р°Р·РµСЂРЅР°СЏ РєРѕСЃРјРµС‚РѕР»РѕРіРёСЏ</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">РЈРґР°Р»РµРЅРёРµ СЂСѓР±С†РѕРІ Рё С€СЂР°РјРѕРІ</span>
            </div>
          </section>

          {/* в•ђв•ђв•ђв•ђв•ђв•ђв•ђ HERO в•ђв•ђв•ђв•ђв•ђв•ђв•ђ */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/scar_removal_hero.png"
                  alt="Р›Р°Р·РµСЂРЅР°СЏ С€Р»РёС„РѕРІРєР° СЂСѓР±С†РѕРІ PicoCare"
                  className="w-full h-full object-cover object-right md:object-center opacity-50 md:opacity-70 mix-blend-overlay scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>

              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  PicoCare + CO2 Bison
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  РЁР»РёС„РѕРІРєР° <br />
                  <span className="font-serif italic text-[#60c2ff]/80">СЂСѓР±С†РѕРІ</span> Рё С€СЂР°РјРѕРІ
                </h1>
                
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed border-l-2 border-[#60c2ff]/40 pl-4 md:pl-6">
                  Р’РѕР·РІСЂР°С‰Р°РµРј РіР»Р°РґРєРѕСЃС‚СЊ РєРѕР¶Рё РїРёРєРѕСЃРµРєСѓРЅРґРЅС‹Рј В«С…РѕР»РѕРґРЅС‹РјВ» Р»Р°Р·РµСЂРѕРј. Р’РёРґРёРјС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚ СЃ РїРµСЂРІРѕРіРѕ СЃРµР°РЅСЃР° вЂ” Р±РµР· Р±РѕР»Рё Рё РґР»РёС‚РµР»СЊРЅРѕР№ СЂРµР°Р±РёР»РёС‚Р°С†РёРё.
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button 
                      onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                      className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]"
                    >
                      Р—Р°РїРёСЃР°С‚СЊСЃСЏ РЅР° РїСЂРѕС†РµРґСѓСЂСѓ
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white font-light">
                    <Icon icon="solar:verified-check-bold-duotone" className="text-2xl text-[#60c2ff]" />
                    <span>Р­С„С„РµРєС‚ Р·Р° 1 РїСЂРѕС†РµРґСѓСЂСѓ</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* в•ђв•ђв•ђв•ђв•ђв•ђв•ђ CASES вЂ” Before / After в•ђв•ђв•ђв•ђв•ђв•ђв•ђ */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0">
            <div className="mb-16 text-center">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р РµР·СѓР»СЊС‚Р°С‚С‹</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Р¤РѕС‚Рѕ <span className="font-serif italic text-slate-400">РґРѕ Рё РїРѕСЃР»Рµ</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
                Р§РµСЃС‚РЅС‹Рµ СЂРµР·СѓР»СЊС‚Р°С‚С‹ РЅР°С€РёС… РїР°С†РёРµРЅС‚РѕРІ. РљР°Р¶РґС‹Р№ СЃР»СѓС‡Р°Р№ СѓРЅРёРєР°Р»РµРЅ вЂ” РІСЂР°С‡ РїРѕРґР±РёСЂР°РµС‚ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Р№ РїСЂРѕС‚РѕРєРѕР» Р»РµС‡РµРЅРёСЏ.
              </p>
            </div>

            <div className="flex flex-col gap-12 max-w-6xl mx-auto">
              {cases.map((c, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-6 items-stretch">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)] group aspect-square md:aspect-auto">
                    <img src={c.before} alt={c.descBefore} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                    <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur text-xs px-3 py-1.5 rounded-full font-medium text-slate-800">Р”Рѕ</div>
                    <div className="absolute top-4 left-4 bg-[#050B14]/70 backdrop-blur text-[11px] px-3 py-1.5 rounded-full text-white/80 max-w-[85%]">{c.descBefore}</div>
                  </div>
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)] group aspect-square md:aspect-auto">
                    <img src={c.after} alt={c.descAfter} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                    <div className="absolute bottom-4 right-4 bg-[#60c2ff]/90 backdrop-blur text-xs px-3 py-1.5 rounded-full font-medium text-white">РџРѕСЃР»Рµ</div>
                    <div className="absolute top-4 right-4 bg-[#050B14]/70 backdrop-blur text-[11px] px-3 py-1.5 rounded-full text-white/80 max-w-[85%] text-right">{c.descAfter}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* в•ђв•ђв•ђв•ђв•ђв•ђв•ђ ADVANTAGES в•ђв•ђв•ђв•ђв•ђв•ђв•ђ */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџСЂРµРёРјСѓС‰РµСЃС‚РІР°</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                РџРѕС‡РµРјСѓ <br /> <span className="font-serif italic text-slate-400">РІС‹Р±РёСЂР°СЋС‚ РЅР°СЃ</span>
              </h2>
            </div>

            <div className="flex flex-col stagger-container">
              <EditorialList items={advantages} />
            </div>
          </section>

          {/* в•ђв•ђв•ђв•ђв•ђв•ђв•ђ WHO IT'S FOR в•ђв•ђв•ђв•ђв•ђв•ђв•ђ */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0">
            <div className="text-center mb-16">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџРѕРєР°Р·Р°РЅРёСЏ</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                РљРѕРјСѓ <span className="font-serif italic text-slate-400">РїРѕРґС…РѕРґРёС‚</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
                РњСѓР¶С‡РёРЅР°Рј Рё Р¶РµРЅС‰РёРЅР°Рј СЃС‚Р°СЂС€Рµ 18 Р»РµС‚, РєРѕС‚РѕСЂС‹Рµ С…РѕС‚СЏС‚ РІРµСЂРЅСѓС‚СЊ РєРѕР¶Рµ РіР»Р°РґРєРѕСЃС‚СЊ Рё РёР·Р±Р°РІРёС‚СЊСЃСЏ РѕС‚ РІРёРґРёРјС‹С… РґРµС„РµРєС‚РѕРІ.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container max-w-5xl mx-auto">
              {[
                { title: "Р СѓР±С†С‹ РїРѕСЃС‚Р°РєРЅРµ", desc: "РЎР»РµРґС‹ РїРѕСЃР»Рµ СѓРіСЂРµРІРѕР№ Р±РѕР»РµР·РЅРё", icon: "solar:face-scan-circle-linear" },
                { title: "РџРѕСЃР»РµРѕРїРµСЂР°С†РёРѕРЅРЅС‹Рµ С€СЂР°РјС‹", desc: "Р›СЋР±РѕР№ РґР°РІРЅРѕСЃС‚Рё Рё РіР»СѓР±РёРЅС‹", icon: "solar:adhesive-plaster-linear" },
                { title: "Р Р°СЃС‚СЏР¶РєРё (СЃС‚СЂРёРё)", desc: "РќР° С‚РµР»Рµ, Р¶РёРІРѕС‚Рµ, Р±С‘РґСЂР°С…", icon: "solar:body-linear" },
                { title: "РђС‚СЂРѕС„РёС‡РµСЃРєРёРµ СЂСѓР±С†С‹", desc: "РЈРіР»СѓР±Р»С‘РЅРЅС‹Рµ РґРµС„РµРєС‚С‹ РєРѕР¶Рё", icon: "solar:minimalistic-magnifer-linear" },
                { title: "Р“РёРїРµСЂС‚СЂРѕС„РёС‡РµСЃРєРёРµ СЂСѓР±С†С‹", desc: "Р’С‹РїСѓРєР»С‹Рµ, РїР»РѕС‚РЅС‹Рµ СЂСѓР±С†С‹", icon: "solar:layers-linear" },
                { title: "РўСЂР°РІРјР°С‚РёС‡РµСЃРєРёРµ С€СЂР°РјС‹", desc: "РџРѕСЃР»РµРґСЃС‚РІРёСЏ С‚СЂР°РІРј Рё РѕР¶РѕРіРѕРІ", icon: "solar:shield-warning-linear" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] group-[.mobile-glow-active]:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 group-[.mobile-glow-active]:border-[#60c2ff]/30 transition-all duration-[0.6s] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 group-[.mobile-glow-active]:-translate-y-2 overflow-hidden cursor-pointer stagger-item opacity-0 scroll-glow-item"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 group-[.mobile-glow-active]:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] group-[.mobile-glow-active]:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-[.mobile-glow-active]:rotate-12 group-hover:scale-110 group-[.mobile-glow-active]:scale-110">
                    <Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white group-[.mobile-glow-active]:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] group-[.mobile-glow-active]:text-[#60c2ff] transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-light mt-2 relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* в•ђв•ђв•ђв•ђв•ђв•ђв•ђ CONTRAINDICATIONS в•ђв•ђв•ђв•ђв•ђв•ђв•ђ */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-5xl mx-auto reveal-up opacity-0">
            <div className="text-center mb-12">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РћРіСЂР°РЅРёС‡РµРЅРёСЏ</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                РџСЂРѕС‚РёРІРѕ<span className="font-serif italic text-slate-400">РїРѕРєР°Р·Р°РЅРёСЏ</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contraindications.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                    <Icon icon={item.icon} className="text-xl text-red-400" />
                  </div>
                  <p className="text-slate-700 font-light">{item.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* в•ђв•ђв•ђв•ђв•ђв•ђв•ђ STEPS в•ђв•ђв•ђв•ђв•ђв•ђв•ђ */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full">
            <div className="mb-12 border-b border-slate-200/50 pb-6 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџСЂРѕС†РµСЃСЃ</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                Р­С‚Р°РїС‹ <span className="font-serif italic text-slate-400">РїСЂРѕС†РµРґСѓСЂС‹</span>
              </h2>
            </div>
            <div className="stagger-container flex flex-col">
              <EditorialList items={steps} />
            </div>
          </section>

          {/* в•ђв•ђв•ђв•ђв•ђв•ђв•ђ PRICING в•ђв•ђв•ђв•ђв•ђв•ђв•ђ */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full flex flex-col gap-10 reveal-up opacity-0">
            
            {/* PicoCare prices */}
            <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-8 md:p-14 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)]">
              <div className="mb-10 border-b border-slate-100 pb-6">
                <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">
                  РЁР»РёС„РѕРІРєР° СЂСѓР±С†РѕРІ <span className="font-serif italic text-slate-400">PicoCare</span>
                </h2>
              </div>
              <div className="flex flex-col divide-y divide-slate-100">
                {pricesPicoCare.map((p, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center py-5 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{p.name}</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Zone prices */}
            <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-8 md:p-14 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)]">
              <div className="mb-10 border-b border-slate-100 pb-6">
                <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">
                  РЁР»РёС„РѕРІРєР° <span className="font-serif italic text-slate-400">РїРѕ Р·РѕРЅР°Рј</span>
                </h2>
              </div>
              <div className="flex flex-col divide-y divide-slate-100">
                {pricesZones.map((p, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center py-5 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{p.name}</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CO2 prices */}
            <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-8 md:p-14 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)]">
              <div className="mb-10 border-b border-slate-100 pb-6">
                <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">
                  CO2 <span className="font-serif italic text-slate-400">Bison</span>
                </h2>
              </div>
              <div className="flex flex-col divide-y divide-slate-100">
                {pricesCO2.map((p, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center py-5 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{p.name}</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* в•ђв•ђв•ђв•ђв•ђв•ђв•ђ CTA в•ђв•ђв•ђв•ђв•ђв•ђв•ђ */}
          <section className="relative z-10 reveal-up opacity-0">
            <div className="relative overflow-hidden rounded-[3rem] bg-[#050B14] p-10 md:p-16 lg:p-24 border border-white/10 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)]">
              <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#fbbf24]/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-4xl sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">
                    Р’РµСЂРЅРёС‚Рµ РєРѕР¶Рµ <br />
                    <span className="font-serif italic text-slate-400">РіР»Р°РґРєРѕСЃС‚СЊ</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg md:text-xl mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    Р—Р°РїРёС€РёС‚РµСЃСЊ РЅР° Р±РµСЃРїР»Р°С‚РЅСѓСЋ РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЋ. Р’СЂР°С‡ РѕСЃРјРѕС‚СЂРёС‚ СЂСѓР±С†С‹, РїРѕРґР±РµСЂС‘С‚ Р»Р°Р·РµСЂ Рё СЃРѕСЃС‚Р°РІРёС‚ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Р№ РїР»Р°РЅ Р»РµС‡РµРЅРёСЏ.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group w-full sm:w-auto">
                      <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                      <button 
                        onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                        className="relative z-10 w-full sm:w-auto px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center justify-center gap-3 text-lg"
                      >
                        Р‘РµСЃРїР»Р°С‚РЅР°СЏ РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ
                        <Icon icon="solar:arrow-right-linear" className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="hidden lg:flex w-64 h-64 rounded-full border border-[#60c2ff]/20 relative items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div>
                  <div className="text-center">
                    <Icon icon="solar:magic-stick-3-bold-duotone" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" />
                    <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/50 leading-tight">SkinMed<br/>Premium Care</span>
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

      
      <AnimationsProvider />
    </div>
  );
}
