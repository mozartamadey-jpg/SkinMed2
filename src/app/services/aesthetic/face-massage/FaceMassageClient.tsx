'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

export default function FaceMassageClient() {

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('scroll-glow-active');
          else entry.target.classList.remove('scroll-glow-active');
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('.scroll-glow-item').forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const types = [
    { icon: 'solar:hand-stars-linear', title: 'РљР»Р°СЃСЃРёС‡РµСЃРєРёР№ РјР°СЃСЃР°Р¶', desc: 'РЈР»СѓС‡С€Р°РµС‚ РєСЂРѕРІРѕСЃРЅР°Р±Р¶РµРЅРёРµ, СЃРЅРёРјР°РµС‚ РЅР°РїСЂСЏР¶РµРЅРёРµ РјС‹С€С†, СѓСЃРєРѕСЂСЏРµС‚ РѕР±РјРµРЅРЅС‹Рµ РїСЂРѕС†РµСЃСЃС‹. РРґРµР°Р»РµРЅ РґР»СЏ РїСЂРѕС„РёР»Р°РєС‚РёРєРё РІРѕР·СЂР°СЃС‚РЅС‹С… РёР·РјРµРЅРµРЅРёР№.' },
    { icon: 'solar:waterdrop-linear', title: 'Р›РёРјС„РѕРґСЂРµРЅР°Р¶РЅС‹Р№ РјР°СЃСЃР°Р¶', desc: 'Р’С‹РІРѕРґРёС‚ Р»РёС€РЅСЋСЋ Р¶РёРґРєРѕСЃС‚СЊ, СѓСЃС‚СЂР°РЅСЏРµС‚ РѕС‚С‘С‡РЅРѕСЃС‚СЊ Рё В«РјРµС€РєРёВ» РїРѕРґ РіР»Р°Р·Р°РјРё. Р’РѕР·РІСЂР°С‰Р°РµС‚ С‡С‘С‚РєРёР№ РєРѕРЅС‚СѓСЂ Р»РёС†Р°.' },
    { icon: 'solar:star-linear', title: 'РЎРєСѓР»СЊРїС‚СѓСЂРЅС‹Р№ РјР°СЃСЃР°Р¶', desc: 'Р“Р»СѓР±РѕРєР°СЏ РїСЂРѕСЂР°Р±РѕС‚РєР° РјС‹С€РµС‡РЅРѕРіРѕ РєР°СЂРєР°СЃР° Р»РёС†Р°. Р¤РѕСЂРјРёСЂСѓРµС‚ С‡С‘С‚РєРёР№ РѕРІР°Р», РїСЂРёРїРѕРґРЅРёРјР°РµС‚ СЃРєСѓР»С‹ Рё СѓРіРѕР»РєРё РіСѓР± вЂ” СЌС„С„РµРєС‚ Р±РµР·РѕРїРµСЂР°С†РёРѕРЅРЅРѕРіРѕ Р»РёС„С‚РёРЅРіР°.' },
  ];

  const indications = [
    { icon: 'solar:eye-linear', title: 'РћС‚С‘С‡РЅРѕСЃС‚СЊ Р»РёС†Р°', desc: 'РЈС‚СЂРµРЅРЅРёРµ РѕС‚С‘РєРё, В«РјРµС€РєРёВ» РїРѕРґ РіР»Р°Р·Р°РјРё' },
    { icon: 'solar:pallete-2-linear', title: 'РўСѓСЃРєР»С‹Р№ С†РІРµС‚ РєРѕР¶Рё', desc: 'РќРµР·РґРѕСЂРѕРІС‹Р№ Р·РµРјР»РёСЃС‚С‹Р№ РѕС‚С‚РµРЅРѕРє, СѓСЃС‚Р°Р»С‹Р№ РІРёРґ' },
    { icon: 'solar:bolt-linear', title: 'РџРѕС‚РµСЂСЏ С‚РѕРЅСѓСЃР°', desc: 'Р”СЂСЏР±Р»РѕСЃС‚СЊ РєРѕР¶Рё, РЅРµС‡С‘С‚РєРёР№ РѕРІР°Р» Р»РёС†Р°' },
    { icon: 'solar:heart-linear', title: 'РњРёРјРёС‡РµСЃРєРёРµ РјРѕСЂС‰РёРЅС‹', desc: 'РџРµСЂРІС‹Рµ РјРµР»РєРёРµ РјРѕСЂС‰РёРЅРєРё, В«РіСѓСЃРёРЅС‹Рµ Р»Р°РїРєРёВ»' },
    { icon: 'solar:danger-triangle-linear', title: 'РњС‹С€РµС‡РЅРѕРµ РЅР°РїСЂСЏР¶РµРЅРёРµ', desc: 'Р—Р°Р¶Р°С‚С‹Рµ РјС‹С€С†С‹ Р»РёС†Р° РёР·-Р·Р° СЃС‚СЂРµСЃСЃР°' },
    { icon: 'solar:running-2-linear', title: 'РџСЂРѕС„РёР»Р°РєС‚РёРєР° СЃС‚Р°СЂРµРЅРёСЏ', desc: 'РџРѕРґРґРµСЂР¶Р°РЅРёРµ РјРѕР»РѕРґРѕСЃС‚Рё РєРѕР¶Рё СЃ 25 Р»РµС‚' },
  ];

  const effects = [
    { title: 'Р›РёС„С‚РёРЅРі-СЌС„С„РµРєС‚', desc: 'РЈРєСЂРµРїР»РµРЅРёРµ РјС‹С€РµС‡РЅРѕРіРѕ РєР°СЂРєР°СЃР° Р»РёС†Р° С„РѕСЂРјРёСЂСѓРµС‚ РµСЃС‚РµСЃС‚РІРµРЅРЅС‹Р№ РїРѕРґС‚СЏРЅСѓС‚С‹Р№ РѕРІР°Р» Р±РµР· С…РёСЂСѓСЂРіРёС‡РµСЃРєРѕРіРѕ РІРјРµС€Р°С‚РµР»СЊСЃС‚РІР°. Р РµР·СѓР»СЊС‚Р°С‚ РІРёРґРµРЅ РїРѕСЃР»Рµ РїРµСЂРІРѕР№ РїСЂРѕС†РµРґСѓСЂС‹.' },
    { title: 'РЈР»СѓС‡С€РµРЅРёРµ РјРёРєСЂРѕС†РёСЂРєСѓР»СЏС†РёРё', desc: 'РђРєС‚РёРІРёР·Р°С†РёСЏ РєСЂРѕРІРѕС‚РѕРєР° РѕР±РµСЃРїРµС‡РёРІР°РµС‚ РґРѕСЃС‚Р°РІРєСѓ РїРёС‚Р°С‚РµР»СЊРЅС‹С… РІРµС‰РµСЃС‚РІ Рё РєРёСЃР»РѕСЂРѕРґР° Рє РєР°Р¶РґРѕР№ РєР»РµС‚РєРµ РєРѕР¶Рё. Р›РёС†Рѕ РїСЂРёРѕР±СЂРµС‚Р°РµС‚ Р·РґРѕСЂРѕРІС‹Р№, СЃРёСЏСЋС‰РёР№ РІРёРґ.' },
    { title: 'РЎРЅСЏС‚РёРµ РѕС‚С‘С‡РЅРѕСЃС‚Рё', desc: 'Р›РёРјС„РѕРґСЂРµРЅР°Р¶РЅС‹Рµ С‚РµС…РЅРёРєРё РІС‹РІРѕРґСЏС‚ Р»РёС€РЅСЋСЋ Р¶РёРґРєРѕСЃС‚СЊ РёР· С‚РєР°РЅРµР№, СѓСЃС‚СЂР°РЅСЏСЏ РїР°СЃС‚РѕР·РЅРѕСЃС‚СЊ Рё РІРѕР·РІСЂР°С‰Р°СЏ Р»РёС†Сѓ С‡С‘С‚РєРёРµ РєРѕРЅС‚СѓСЂС‹.' },
    { title: 'Р Р°СЃСЃР»Р°Р±Р»РµРЅРёРµ РјС‹С€С†', desc: 'РЎРЅРёРјР°РµС‚ РјС‹С€РµС‡РЅС‹Рµ Р·Р°Р¶РёРјС‹, СЂР°Р·РіР»Р°Р¶РёРІР°РµС‚ Р·Р°Р»РѕРјС‹ Рё РїСЂРµРґРѕС‚РІСЂР°С‰Р°РµС‚ С„РѕСЂРјРёСЂРѕРІР°РЅРёРµ РЅРѕРІС‹С… РјРѕСЂС‰РёРЅ. Р­С„С„РµРєС‚ СЃСЂР°РІРЅРёРј СЃ 8 С‡Р°СЃР°РјРё РєР°С‡РµСЃС‚РІРµРЅРЅРѕРіРѕ СЃРЅР°.' },
    { title: 'Р“Р»СѓР±РѕРєРѕРµ СѓРІР»Р°Р¶РЅРµРЅРёРµ', desc: 'РњР°СЃСЃР°Р¶ СѓСЃРёР»РёРІР°РµС‚ РїСЂРѕРЅРёРєРЅРѕРІРµРЅРёРµ Р°РєС‚РёРІРЅС‹С… РєРѕРјРїРѕРЅРµРЅС‚РѕРІ СѓС…РѕРґРѕРІС‹С… СЃСЂРµРґСЃС‚РІ РІ РіР»СѓР±РѕРєРёРµ СЃР»РѕРё РєРѕР¶Рё, РїРѕРІС‹С€Р°СЏ СЌС„С„РµРєС‚РёРІРЅРѕСЃС‚СЊ РєРѕСЃРјРµС‚РёРєРё.' },
  ];

  const prices = [
     { name: 'Процедура 1', price: 'РѕС‚ 2 500 в‚Ѕ' },
     { name: 'Процедура 1', price: 'РѕС‚ 3 000 в‚Ѕ' },
     { name: 'Процедура 1', price: 'РѕС‚ 3 500 в‚Ѕ' },
     { name: 'Процедура 1', price: 'РѕС‚ 4 000 в‚Ѕ' },
     { name: 'Процедура 1', price: 'РѕС‚ 12 000 в‚Ѕ' },
     { name: 'Процедура 1', price: 'Р‘РµСЃРїР»Р°С‚РЅРѕ' },];

  const faq = [
    { q: 'РљР°Рє С‡Р°СЃС‚Рѕ РЅСѓР¶РЅРѕ РґРµР»Р°С‚СЊ РјР°СЃСЃР°Р¶ Р»РёС†Р°?', a: 'Р РµРєРѕРјРµРЅРґСѓРµРјС‹Р№ РєСѓСЂСЃ вЂ” 8вЂ“10 РїСЂРѕС†РµРґСѓСЂ СЃ РёРЅС‚РµСЂРІР°Р»РѕРј 2вЂ“3 РґРЅСЏ. Р”Р»СЏ РїРѕРґРґРµСЂР¶Р°РЅРёСЏ СЌС„С„РµРєС‚Р° вЂ” 1вЂ“2 СЂР°Р·Р° РІ РјРµСЃСЏС†. РўРѕС‡РЅСѓСЋ С‡Р°СЃС‚РѕС‚Сѓ РѕРїСЂРµРґРµР»СЏРµС‚ РІСЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі РЅР° РѕСЃРЅРѕРІРµ СЃРѕСЃС‚РѕСЏРЅРёСЏ Р’Р°С€РµР№ РєРѕР¶Рё.' },
    { q: 'Р•СЃС‚СЊ Р»Рё РїСЂРѕС‚РёРІРѕРїРѕРєР°Р·Р°РЅРёСЏ?', a: 'Р”Р°: РіРµСЂРїРµСЃ РІ Р°РєС‚РёРІРЅРѕР№ С„Р°Р·Рµ, РІРѕСЃРїР°Р»РёС‚РµР»СЊРЅС‹Рµ РІС‹СЃС‹РїР°РЅРёСЏ РЅР° Р»РёС†Рµ, РЅР°СЂСѓС€РµРЅРёСЏ СЃРІС‘СЂС‚С‹РІР°РµРјРѕСЃС‚Рё РєСЂРѕРІРё, РѕРЅРєРѕР»РѕРіРёС‡РµСЃРєРёРµ Р·Р°Р±РѕР»РµРІР°РЅРёСЏ, РїРѕРІС‹С€РµРЅРЅР°СЏ С‚РµРјРїРµСЂР°С‚СѓСЂР°. РџРѕР»РЅС‹Р№ РїРµСЂРµС‡РµРЅСЊ РѕР±СЃСѓР¶РґР°РµС‚СЃСЏ РЅР° РєРѕРЅСЃСѓР»СЊС‚Р°С†РёРё.' },
    { q: 'Р‘РѕР»РµР·РЅРµРЅРЅР° Р»Рё РїСЂРѕС†РµРґСѓСЂР°?', a: 'РљР»Р°СЃСЃРёС‡РµСЃРєРёР№ Рё Р»РёРјС„РѕРґСЂРµРЅР°Р¶РЅС‹Р№ РјР°СЃСЃР°Р¶ Р°Р±СЃРѕР»СЋС‚РЅРѕ РєРѕРјС„РѕСЂС‚РЅС‹ Рё РїСЂРёРЅРѕСЃСЏС‚ СЂР°СЃСЃР»Р°Р±Р»РµРЅРёРµ. РЎРєСѓР»СЊРїС‚СѓСЂРЅС‹Р№ РјР°СЃСЃР°Р¶ РјРѕР¶РµС‚ СЃРѕРїСЂРѕРІРѕР¶РґР°С‚СЊСЃСЏ Р»С‘РіРєРёРј РґРёСЃРєРѕРјС„РѕСЂС‚РѕРј РїСЂРё РїРµСЂРІС‹С… СЃРµР°РЅСЃР°С… вЂ” СЌС‚Рѕ РЅРѕСЂРјР°Р»СЊРЅР°СЏ СЂРµР°РєС†РёСЏ РјС‹С€С†.' },
    { q: 'РњРѕР¶РЅРѕ Р»Рё РєРѕРјР±РёРЅРёСЂРѕРІР°С‚СЊ СЃ РґСЂСѓРіРёРјРё РїСЂРѕС†РµРґСѓСЂР°РјРё?', a: 'Р‘РµР·СѓСЃР»РѕРІРЅРѕ. РњР°СЃСЃР°Р¶ РїСЂРµРєСЂР°СЃРЅРѕ СЃРѕС‡РµС‚Р°РµС‚СЃСЏ СЃ С‡РёСЃС‚РєРѕР№ Р»РёС†Р°, РїРёР»РёРЅРіР°РјРё, Р±РёРѕСЂРµРІРёС‚Р°Р»РёР·Р°С†РёРµР№ Рё РјРµР·РѕС‚РµСЂР°РїРёРµР№. Р’СЂР°С‡ СЃРѕСЃС‚Р°РІРёС‚ РѕРїС‚РёРјР°Р»СЊРЅСѓСЋ РїСЂРѕРіСЂР°РјРјСѓ РєРѕРјРїР»РµРєСЃРЅРѕРіРѕ СѓС…РѕРґР°.' },
  ];

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

          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Р“Р»Р°РІРЅР°СЏ</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <a href="/services/aesthetic" className="hover:text-[#60c2ff] transition-colors duration-300">Р­СЃС‚РµС‚РёС‡РµСЃРєР°СЏ РєРѕСЃРјРµС‚РѕР»РѕРіРёСЏ</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">РњР°СЃСЃР°Р¶ Р»РёС†Р°</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img src="/images/services/aesthetic/face-massage/hero.png" alt="РњР°СЃСЃР°Р¶ Р»РёС†Р° РІ РєР»РёРЅРёРєРµ РЎРєРёРЅРњРµРґ" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  Р‘РµР·РёРЅСЉРµРєС†РёРѕРЅРЅС‹Р№ Р»РёС„С‚РёРЅРі
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  РњР°СЃСЃР°Р¶ <br />
                  <span className="font-serif italic text-[#60c2ff]/80">Р»РёС†Р°</span>
                </h1>
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  РџСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅС‹Р№ РјР°СЃСЃР°Р¶ Р»РёС†Р° вЂ” РјРѕС‰РЅС‹Р№ РёРЅСЃС‚СЂСѓРјРµРЅС‚ РѕРјРѕР»РѕР¶РµРЅРёСЏ Р±РµР· РµРґРёРЅРѕР№ РёРЅСЉРµРєС†РёРё. РЈРєСЂРµРїР»СЏРµРј РјС‹С€РµС‡РЅС‹Р№ РєР°СЂРєР°СЃ, СѓР»СѓС‡С€Р°РµРј Р»РёРјС„РѕРґСЂРµРЅР°Р¶ Рё РІРѕР·РІСЂР°С‰Р°РµРј РєРѕР¶Рµ Р·РґРѕСЂРѕРІРѕРµ СЃРёСЏРЅРёРµ.
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]">
                      Р—Р°РїРёСЃР°С‚СЊСЃСЏ РЅР° РјР°СЃСЃР°Р¶
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Types */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р’РёРґС‹ РјР°СЃСЃР°Р¶Р°</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                РўРµС…РЅРёРєРё <span className="font-serif italic text-slate-400">РјР°СЃСЃР°Р¶Р°</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 stagger-container max-w-6xl mx-auto">
              {types.map((item, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 md:p-10 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden stagger-item opacity-0 scroll-glow-item">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                    <Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300 mb-3">{item.title}</h3>
                  <p className="text-base text-slate-600 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Indications */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџРѕРєР°Р·Р°РЅРёСЏ</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                РљРѕРјСѓ РїРѕРґРѕР№РґС‘С‚ <span className="font-serif italic text-slate-400">РјР°СЃСЃР°Р¶</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container">
              {indications.map((item, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden cursor-pointer stagger-item opacity-0 scroll-glow-item">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                    <Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300">{item.title}</h3>
                  <p className="text-base text-slate-600 font-light mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Effects */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р­С„С„РµРєС‚</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                Р РµР·СѓР»СЊС‚Р°С‚ <br /> <span className="font-serif italic text-slate-400">РїСЂРѕС†РµРґСѓСЂС‹</span>
              </h2>
            </div>
            <div className="flex flex-col stagger-container">
              <EditorialList items={effects} />
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full">
            <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)] reveal-up opacity-0">
              <div className="mb-12 border-b border-slate-100 pb-6">
                <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">РЎС‚РѕРёРјРѕСЃС‚СЊ <span className="font-serif italic text-slate-400">СѓСЃР»СѓРі</span></h2>
              </div>
              <div className="flex flex-col divide-y divide-slate-100">
                {prices.map((price, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{price.name}</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{price.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto w-full relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р’РѕРїСЂРѕСЃС‹</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Р§Р°СЃС‚С‹Рµ <span className="font-serif italic text-slate-400">РІРѕРїСЂРѕСЃС‹</span></h2>
            </div>
            <div className="flex flex-col gap-4 stagger-container">
              {faq.map((item, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] overflow-hidden shadow-[0_0.5rem_1.5rem_-0.5rem_rgba(0,0,0,0.03)] stagger-item opacity-0">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between p-6 md:p-8 text-left gap-4">
                    <span className="text-lg md:text-xl font-medium text-slate-900">{item.q}</span>
                    <Icon icon={openFaq === index ? 'solar:minus-linear' : 'solar:add-linear'} className="text-2xl text-[#60c2ff] shrink-0" />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="px-6 md:px-8 pb-6 md:pb-8 text-[17px] text-slate-600 font-light leading-relaxed">{item.a}</p>
                  </div>
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
                  <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">
                    РџРѕРґР°СЂРёС‚Рµ Р»РёС†Сѓ <br /><span className="font-serif italic text-slate-400">РјРѕР»РѕРґРѕСЃС‚СЊ</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">Р—Р°РїРёС€РёС‚РµСЃСЊ РЅР° Р±РµСЃРїР»Р°С‚РЅСѓСЋ РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЋ вЂ” РїРѕРґР±РµСЂС‘Рј РѕРїС‚РёРјР°Р»СЊРЅСѓСЋ С‚РµС…РЅРёРєСѓ РјР°СЃСЃР°Р¶Р° РґР»СЏ Р’Р°С€РёС… Р·Р°РґР°С‡.</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group">
                      <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                      <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3">
                        Р—Р°РїРёСЃР°С‚СЊСЃСЏ РЅР° РјР°СЃСЃР°Р¶
                        <Icon icon="solar:arrow-right-linear" className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-64 h-64 rounded-full border border-[#60c2ff]/20 relative items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div>
                  <div className="text-center">
                    <Icon icon="solar:hand-stars-linear" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" />
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
</div>
  );
}
