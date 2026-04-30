'use client';
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

const INDICATIONS = [
  { title: 'Р‘СЂС‹Р»Рё', desc: 'В«Р‘СѓР»СЊРґРѕР¶СЊРё С‰С‘С‡РєРёВ» Рё РїСЂРѕРІРёСЃР°РЅРёРµ РЅРёР¶РЅРµР№ С‚СЂРµС‚Рё Р»РёС†Р°', icon: 'solar:hand-stars-linear' },
  { title: 'Р’С‚РѕСЂРѕР№ РїРѕРґР±РѕСЂРѕРґРѕРє', desc: 'РЎРЅРёР¶РµРЅРёРµ СѓРїСЂСѓРіРѕСЃС‚Рё РєРѕР¶Рё РІ СЃСѓР±РјРµРЅС‚Р°Р»СЊРЅРѕР№ Р·РѕРЅРµ', icon: 'solar:heart-linear' },
  { title: 'РџРѕС‚РµСЂСЏ РѕРІР°Р»Р°', desc: 'РљРѕРЅС‚СѓСЂ Р»РёС†Р° СЃС‚Р°Р» РјРµРЅРµРµ С‡С‘С‚РєРёРј, Р»РёС†Рѕ В«РїРѕРїР»С‹Р»РѕВ»', icon: 'solar:magic-stick-3-linear' },
  { title: 'Р”СЂСЏР±Р»РѕСЃС‚СЊ РєРѕР¶Рё', desc: 'РЎРЅРёР¶РµРЅРёРµ С‚СѓСЂРіРѕСЂР° Рё СЌР»Р°СЃС‚РёС‡РЅРѕСЃС‚Рё', icon: 'solar:waterdrop-linear' },
  { title: 'РќР°РІРёСЃС€РёРµ РІРµРєРё', desc: 'РћРїСѓС‰РµРЅРёРµ РІРµСЂС…РЅРёС… РІРµРє', icon: 'solar:eye-linear' },
  { title: 'РќРѕСЃРѕРіСѓР±РЅС‹Рµ СЃРєР»Р°РґРєРё', desc: 'Р’С‹СЂР°Р¶РµРЅРЅС‹Рµ РјРѕСЂС‰РёРЅС‹ РѕС‚ РЅРѕСЃР° РґРѕ СѓРіРѕР»РєРѕРІ РіСѓР±', icon: 'solar:pallete-2-linear' },
  { title: 'РћС‚С‘С‡РЅРѕСЃС‚СЊ Р»РёС†Р°', desc: 'В«РЈСЃС‚Р°РІС€РёР№В» РІРёРґ Рё РїР°СЃС‚РѕР·РЅРѕСЃС‚СЊ', icon: 'solar:temperature-linear' },
  { title: 'РџСЂРѕС„РёР»Р°РєС‚РёРєР°', desc: 'РЎРїРѕСЃРѕР± В«РїРѕР№РјР°С‚СЊ РјРѕРјРµРЅС‚В» Рё РѕС‚Р»РѕР¶РёС‚СЊ СЂР°РґРёРєР°Р»СЊРЅС‹Рµ РјРµСЂС‹', icon: 'solar:shield-check-linear' },
];

const ADVANTAGES = [
  { title: 'РљР»РёРЅРёС‡РµСЃРєРё РґРѕРєР°Р·Р°РЅРЅС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚', desc: 'Р”Рѕ 95% РїР°С†РёРµРЅС‚РѕРІ РѕС‚РјРµС‡Р°СЋС‚ Р»РёС„С‚РёРЅРі Рё РІС‹СЂР°Р¶РµРЅРЅРѕРµ СѓР»СѓС‡С€РµРЅРёРµ РєР°С‡РµСЃС‚РІР° РєРѕР¶Рё Р·Р° 1 РїСЂРѕС†РµРґСѓСЂСѓ. РњР°РєСЃРёРјР°Р»СЊРЅС‹Р№ СЌС„С„РµРєС‚ вЂ” С‡РµСЂРµР· 2в€’3 РјРµСЃСЏС†Р°. Р”РµСЂР¶РёС‚СЃСЏ РґРѕ 1,5 Р»РµС‚.' },
  { title: 'Р‘РµР·РѕРїР°СЃРµРЅ РІ Р»СЋР±РѕРµ РІСЂРµРјСЏ РіРѕРґР°', desc: 'Р­С„С„РµРєС‚РёРІРЅРµРµ Р°РЅР°Р»РѕРіРѕРІ, РїРѕРґС…РѕРґРёС‚ РґР»СЏ СЂР°Р±РѕС‚С‹ РїРѕ Р»РёС†Сѓ Рё С‚РµР»Сѓ. Р‘РµР·РѕРїР°СЃРµРЅ РґР»СЏ РїСЂРёРјРµРЅРµРЅРёСЏ РґР°Р¶Рµ РІ Р»РµС‚РЅРёР№ СЃРµР·РѕРЅ.' },
  { title: 'РЎРµСЂС‚РёС„РёС†РёСЂРѕРІР°РЅ FDA Рё CE', desc: 'РђРїРїР°СЂР°С‚ СЃРµСЂС‚РёС„РёС†РёСЂРѕРІР°РЅ FDA, CE Рё Р РѕСЃР·РґСЂР°РІРЅР°РґР·РѕСЂРѕРј, С‡С‚Рѕ РїРѕРґС‚РІРµСЂР¶РґР°РµС‚ РµРіРѕ СЌС„С„РµРєС‚РёРІРЅРѕСЃС‚СЊ Рё Р±РµР·РѕРїР°СЃРЅРѕСЃС‚СЊ РґР»СЏ РїР°С†РёРµРЅС‚РѕРІ.' },
  { title: 'РљРѕРјС„РѕСЂС‚ Р±РµР· Р±РѕР»Рё', desc: 'РџСЂРѕС†РµРґСѓСЂР° РїСЂРѕС…РѕРґРёС‚ Р±РµР· Р±РѕР»Рё, РѕР¶РѕРіРѕРІ Рё РїРѕРІСЂРµР¶РґРµРЅРёСЏ РєРѕР¶Рё вЂ” РѕС‰СѓС‰Р°РµС‚СЃСЏ РєР°Рє РјСЏРіРєРѕРµ С‚РµРїР»Рѕ Рё Р»С‘РіРєРѕРµ РїРѕРєР°Р»С‹РІР°РЅРёРµ.' },
];

const STEPS = [
  { title: 'РљРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ Рё РїРѕРґРіРѕС‚РѕРІРєР°', desc: 'РћСЃРјРѕС‚СЂ Рё СЃР±РѕСЂ Р°РЅР°РјРЅРµР·Р°. РЎРїРµС†РёР°Р»РёСЃС‚ РёР·СѓС‡Р°РµС‚ РѕСЃРѕР±РµРЅРЅРѕСЃС‚Рё Р’Р°С€РµР№ РєРѕР¶Рё, С„РёРєСЃРёСЂСѓРµС‚ СЌСЃС‚РµС‚РёС‡РµСЃРєРёРµ Р·Р°РґР°С‡Рё Рё РёСЃРєР»СЋС‡Р°РµС‚ РїСЂРѕС‚РёРІРѕРїРѕРєР°Р·Р°РЅРёСЏ. Р”РµР»Р°РµС‚СЃСЏ С„РѕС‚Рѕ В«РґРѕВ» РґР»СЏ РѕР±СЉРµРєС‚РёРІРЅРѕР№ РѕС†РµРЅРєРё.' },
  { title: 'РЈР»СЊС‚СЂР°Р·РІСѓРєРѕРІРѕР№ Р»РёС„С‚РёРЅРі', desc: 'РђРїРїР°СЂР°С‚ Bison РјСЏРіРєРѕ РїСЂРѕРіСЂРµРІР°РµС‚ С‚РєР°РЅРё РЅР° РіР»СѓР±РёРЅРµ РґРѕ 4,5 РјРј, Р°РєС‚РёРІРёСЂСѓСЏ СЃРѕРєСЂР°С‰РµРЅРёРµ РєРѕР»Р»Р°РіРµРЅРѕРІС‹С… РІРѕР»РѕРєРѕРЅ Рё Р·Р°РїСѓСЃРє РЅРµРѕРєРѕР»Р»Р°РіРµРЅРµР·Р°. РџСЂРѕС†РµРґСѓСЂР° РґР»РёС‚СЃСЏ 30в€’90 РјРёРЅСѓС‚.' },
  { title: 'Р РµР·СѓР»СЊС‚Р°С‚', desc: 'РџРѕСЃР»Рµ Р·Р°РІРµСЂС€РµРЅРёСЏ РІСЂР°С‡ РґРµР»Р°РµС‚ С„РѕС‚Рѕ В«РїРѕСЃР»РµВ» Рё РґР°С‘С‚ СЂРµРєРѕРјРµРЅРґР°С†РёРё РїРѕ РґРѕРјР°С€РЅРµРјСѓ СѓС…РѕРґСѓ. РљРѕР¶Р° РїРѕРґС‚СЏРіРёРІР°РµС‚СЃСЏ СѓР¶Рµ РІ РґРµРЅСЊ РїСЂРѕС†РµРґСѓСЂС‹.' },
];

const AFTERCARE = [
  'Р’ РґРµРЅСЊ РїСЂРѕС†РµРґСѓСЂС‹ вЂ” РЅРµ РїРѕР»СЊР·СѓР№С‚РµСЃСЊ РјР°РєРёСЏР¶РµРј',
  'РР·Р±РµРіР°Р№С‚Рµ СЃРёР»СЊРЅРѕРіРѕ РЅР°РіСЂРµРІР°: СЃР°СѓРЅР°, Р±Р°РЅСЏ вЂ” 3в€’5 РґРЅРµР№',
  'РСЃРїРѕР»СЊР·СѓР№С‚Рµ РєСЂРµРј СЃ SPF 50',
];

const FAQ = [
  { q: 'РЎРєРѕР»СЊРєРѕ РґР»РёС‚СЃСЏ СЌС„С„РµРєС‚?', a: 'РћРєРѕР»Рѕ 1,5в€’2 Р»РµС‚. РњРѕР¶РЅРѕ РїРѕРІС‚РѕСЂСЏС‚СЊ СЂР°Р· РІ РіРѕРґ РґР»СЏ РїРѕРґРґРµСЂР¶Р°РЅРёСЏ СЂРµР·СѓР»СЊС‚Р°С‚Р°.' },
  { q: 'Р­С‚Рѕ Р±РѕР»СЊРЅРѕ?', a: 'РќРµС‚, РѕС‰СѓС‰Р°РµС‚СЃСЏ РєР°Рє Р»С‘РіРєРѕРµ РїРѕРєР°Р»С‹РІР°РЅРёРµ Рё С‚РµРїР»Рѕ. Р’РѕР·РјРѕР¶РЅРѕ РЅР°РЅРµСЃРµРЅРёРµ РјРµСЃС‚РЅРѕР№ Р°РїРїР»РёРєР°С†РёРѕРЅРЅРѕР№ Р°РЅРµСЃС‚РµР·РёРё.' },
  { q: 'РљРѕРіРґР° РІРёРґРµРЅ СЂРµР·СѓР»СЊС‚Р°С‚?', a: 'РЎСЂР°Р·Сѓ РїРѕСЃР»Рµ РїСЂРѕС†РµРґСѓСЂС‹ вЂ” РїРѕРґС‚СЏР¶РєР°. РњР°РєСЃРёРјСѓРј вЂ” С‡РµСЂРµР· 2в€’3 РјРµСЃСЏС†Р° Р·Р° СЃС‡С‘С‚ РЅР°СЂР°СЃС‚Р°РЅРёСЏ РЅРѕРІРѕРіРѕ РєРѕР»Р»Р°РіРµРЅР°.' },
  { q: 'РњРѕР¶РЅРѕ Р»Рё РґРµР»Р°С‚СЊ Р»РµС‚РѕРј?', a: 'Р”Р°. РЈР»СЊС‚СЂР°Р·РІСѓРє РЅРµ РїРѕРІС‹С€Р°РµС‚ С„РѕС‚РѕС‡СѓРІСЃС‚РІРёС‚РµР»СЊРЅРѕСЃС‚СЊ РєРѕР¶Рё.' },
  { q: 'Р§РµРј РѕС‚Р»РёС‡Р°РµС‚СЃСЏ РѕС‚ Р°РЅР°Р»РѕРіРѕРІ?', a: 'Р­С‚Рѕ РµРґРёРЅСЃС‚РІРµРЅРЅР°СЏ РїСЂРѕС†РµРґСѓСЂР°, РІРѕР·РґРµР№СЃС‚РІСѓСЋС‰Р°СЏ РЅР° SMAS Р±РµР· РѕРїРµСЂР°С†РёРё вЂ” РЅР° СЃР»РѕР№ РєРѕР¶Рё, РѕС‚РІРµС‡Р°СЋС‰РёР№ Р·Р° СѓРїСЂСѓРіРѕСЃС‚СЊ Рё Р»РёС„С‚РёРЅРі.' },
];

const DOCTORS = [
   { name: 'Специалист SkinMed', role: 'Р“Р»Р°РІРЅС‹Р№ РІСЂР°С‡, РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕР»РѕРі', photo: '/images/doctors/kachyurina.jpg' },
   { name: 'Специалист SkinMed', role: 'Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕР»РѕРі, С‚СЂРёС…РѕР»РѕРі', photo: '/images/doctors/glubokaya.jpg' },
   { name: 'Специалист SkinMed', role: 'Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕР»РѕРі, Р»Р°Р·РµСЂРѕР»РѕРі', photo: '/images/doctors/nikiforova.jpg' },
   { name: 'Специалист SkinMed', role: 'Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі, Р±РѕС‚СѓР»РёРЅРѕС‚РµСЂР°РїРµРІС‚', photo: '/images/doctors/muhametzanova.jpg' },
];

export default function BisonSmasClient() {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const initObserver = () => {
      if (window.innerWidth > 768) { if (observer) { observer.disconnect(); observer = null; } document.querySelectorAll('.mobile-glow-active').forEach(el => el.classList.remove('mobile-glow-active')); return; }
      if (!observer) { observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('mobile-glow-active'); else entry.target.classList.remove('mobile-glow-active'); }); }, { rootMargin: "-40% 0px -40% 0px", threshold: 0 }); setTimeout(() => { document.querySelectorAll('.scroll-glow-item').forEach(el => observer?.observe(el)); }, 500); }
    };
    initObserver(); window.addEventListener('resize', initObserver);
    return () => { window.removeEventListener('resize', initObserver); if (observer) observer.disconnect(); };
  }, []);

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
          {/* Breadcrumbs */}
          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Р“Р»Р°РІРЅР°СЏ</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <a href="/services/apparatnaya-kosmetologiya" className="hover:text-[#60c2ff] transition-colors duration-300">РђРїРїР°СЂР°С‚РЅР°СЏ РєРѕСЃРјРµС‚РѕР»РѕРіРёСЏ</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">SMAS-Р»РёС„С‚РёРЅРі Bizon</span>
            </div>
          </section>
          {/* Hero */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img src="/images/hardware/heroes/bison-hero.png" alt="SMAS-Р»РёС„С‚РёРЅРі Bizon" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent z-10"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  РќР°СЂР°СЃС‚Р°СЋС‰РёР№ СЌС„С„РµРєС‚ РґРѕ 1,5 Р»РµС‚
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  SMAS-Р»РёС„С‚РёРЅРі <br /><span className="font-serif italic text-[#60c2ff]/80">Bizon</span>
                </h1>
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  Р‘РµР·РѕРїРµСЂР°С†РёРѕРЅРЅР°СЏ РїРѕРґС‚СЏР¶РєР° Р»РёС†Р° СЃ РїРµСЂРІРѕРіРѕ СЃРµР°РЅСЃР°. Р“Р»СѓР±РѕРєР°СЏ РєРѕРјРїР°РєС‚РёР·Р°С†РёСЏ РѕРІР°Р»Р°, СѓСЃС‚СЂР°РЅРµРЅРёРµ Р±СЂС‹Р»РµР№ Рё РґСЂСЏР±Р»РѕСЃС‚Рё. Р’СЂР°С‡Рё СЃ РѕРїС‹С‚РѕРј 7+ Р»РµС‚, Р»РёС„С‚РёРЅРі Р±РµР· Р±РѕР»Рё Рё СЂРµР°Р±РёР»РёС‚Р°С†РёРё.
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]">
                      Р—Р°РїРёСЃР°С‚СЊСЃСЏ РЅР° SMAS-Р»РёС„С‚РёРЅРі
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto reveal-up opacity-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Рћ РїСЂРѕС†РµРґСѓСЂРµ</span>
                <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.1] mb-8">
                  Р§С‚Рѕ С‚Р°РєРѕРµ <span className="font-serif italic text-slate-400">SMAS-Р»РёС„С‚РёРЅРі?</span>
                </h2>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed mb-6">
                  РЈР»СЊС‚СЂР°Р·РІСѓРєРѕРІРѕР№ SMAS-Р»РёС„С‚РёРЅРі вЂ” Р°Р»СЊС‚РµСЂРЅР°С‚РёРІР° РїР»Р°СЃС‚РёРєРµ Р»РёС†Р°. Р­С‚Рѕ Р±РµР·РѕРїРµСЂР°С†РёРѕРЅРЅР°СЏ РїСЂРѕС†РµРґСѓСЂР°, РІРѕР·РґРµР№СЃС‚РІСѓСЋС‰Р°СЏ РЅР° РіР»СѓР±РѕРєРёР№ РјС‹С€РµС‡РЅРѕ-Р°РїРѕРЅРµРІСЂРѕС‚РёС‡РµСЃРєРёР№ СЃР»РѕР№ РєРѕР¶Рё (SMAS).
                </p>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">
                  РђРїРїР°СЂР°С‚ <span className="font-medium text-[#60c2ff]">Bison</span> РЅР°РїСЂР°РІР»СЏРµС‚ С„РѕРєСѓСЃРёСЂРѕРІР°РЅРЅС‹Р№ СѓР»СЊС‚СЂР°Р·РІСѓРє РЅР° РіР»СѓР±РёРЅСѓ РґРѕ 4,5 РјРј, РіРґРµ Р·Р°РїСѓСЃРєР°РµС‚СЃСЏ РѕР±СЂР°Р·РѕРІР°РЅРёРµ РЅРѕРІРѕРіРѕ РєРѕР»Р»Р°РіРµРЅР°. Р’ СЂРµР·СѓР»СЊС‚Р°С‚Рµ РїР°С†РёРµРЅС‚ РїРѕР»СѓС‡Р°РµС‚ вЂ” РїРѕРґС‚СЏРЅСѓС‚С‹Р№ РѕРІР°Р», СѓРїСЂСѓРіСѓСЋ РєРѕР¶Сѓ Рё СЂР°Р·РіР»Р°Р¶РµРЅРЅС‹Рµ РјРѕСЂС‰РёРЅС‹.
                </p>
              </div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)]">
                <img src="/images/hardware/smas-lifting-bison/smas-lifting-bison_2.jpg" alt="SMAS-Р»РёС„С‚РёРЅРі Bizon" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </section>
          {/* Indications */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџРѕРєР°Р·Р°РЅРёСЏ</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">РљРѕРјСѓ <span className="font-serif italic text-slate-400">РїРѕРґРѕР№РґС‘С‚</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-container">
              {INDICATIONS.map((item, index) => (
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
          {/* Cases */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0">
            <div className="mb-16 text-center">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р­С„С„РµРєС‚</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Р РµР·СѓР»СЊС‚Р°С‚ <span className="font-serif italic text-slate-400">Р»РµС‡РµРЅРёСЏ</span></h2>
              <p className="text-lg sm:text-xl text-slate-500 font-light max-w-4xl mx-auto">Р¤РѕС‚РѕРіР°Р»РµСЂРµСЏ СЃ СЂРµР·СѓР»СЊС‚Р°С‚Р°РјРё СЂРµР°Р»СЊРЅС‹С… РїР°С†РёРµРЅС‚РѕРІ</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { before: '/images/hardware/smas-lifting-bison/smas-lifting-bison_4.webp', after: '/images/hardware/smas-lifting-bison/smas-lifting-bison_3.webp', descB: 'РћС‚С‘С‡РЅРѕСЃС‚СЊ, РґСЂСЏР±Р»РѕСЃС‚СЊ РЅРёР¶РЅРµР№ С‚СЂРµС‚Рё Р»РёС†Р°, РІРёРґРЅС‹ Р±СЂС‹Р»Рё', descA: 'РљРѕРјРїР°РєС‚РЅРѕРµ, СЃРІРµР¶РµРµ Р»РёС†Рѕ, СЃРЅРёР¶РµРЅРёРµ РѕС‚С‘С‡РЅРѕСЃС‚Рё' },
                { before: '/images/hardware/smas-lifting-bison/smas-lifting-bison_6.webp', after: '/images/hardware/smas-lifting-bison/smas-lifting-bison_5.webp', descB: 'РќРµС‡С‘С‚РєРёР№ РѕРІР°Р», СЃРЅРёР¶РµРЅРёРµ СЌР»Р°СЃС‚РёС‡РЅРѕСЃС‚Рё', descA: 'РћРІР°Р» РїРѕРґС‚СЏРЅСѓР»СЃСЏ, РїСЂРѕРІРёСЃР°РЅРёРµ СѓРјРµРЅСЊС€РёР»РѕСЃСЊ' },
              ].map((c, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-4">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg group flex-1">
                    <img src={c.before} alt="Р”Рѕ" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                    <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium">Р”Рѕ</div>
                  </div>
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg group flex-1">
                    <img src={c.after} alt="РџРѕСЃР»Рµ" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                    <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium">РџРѕСЃР»Рµ</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Advantages */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџСЂРµРёРјСѓС‰РµСЃС‚РІР°</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">РџРѕС‡РµРјСѓ <span className="font-serif italic text-slate-400">Bizon</span></h2>
            </div>
            <div className="flex flex-col stagger-container">
              <EditorialList items={ADVANTAGES} />
            </div>
          </section>
          {/* Steps */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full">
            <div className="mb-12 border-b border-slate-200/50 pb-6 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р­С‚Р°РїС‹</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">РљР°Рє <span className="font-serif italic text-slate-400">РїСЂРѕС…РѕРґРёС‚</span></h2>
            </div>
            <div className="stagger-container flex flex-col">
              <EditorialList items={STEPS} />
            </div>
          </section>
          {/* Aftercare */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto w-full reveal-up opacity-0">
            <div className="mb-12 text-center">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р РµРєРѕРјРµРЅРґР°С†РёРё</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.1]">РЈС…РѕРґ <span className="font-serif italic text-slate-400">РїРѕСЃР»Рµ</span></h2>
            </div>
            <div className="flex flex-col gap-4">
              {AFTERCARE.map((tip, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-sm">
                  <Icon icon="solar:check-read-linear" className="text-2xl text-[#60c2ff] shrink-0" />
                  <span className="text-base text-slate-700 font-normal leading-relaxed">{tip}</span>
                </div>
              ))}
            </div>
          </section>
          {/* Doctors */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РљРѕРјР°РЅРґР°</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">РќР°С€Рё <span className="font-serif italic text-slate-400">СЌРєСЃРїРµСЂС‚С‹</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
              {DOCTORS.map((doc, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] overflow-hidden shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 stagger-item opacity-0 scroll-glow-item">
                  <div className="h-72 overflow-hidden"><img src={doc.photo} alt={doc.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" /></div>
                  <div className="p-6"><h3 className="text-lg font-medium text-slate-900 mb-1 group-hover:text-[#60c2ff] transition-colors duration-300">{doc.name}</h3><p className="text-base text-slate-600 font-light">{doc.role}</p></div>
                </div>
              ))}
            </div>
          </section>
          {/* FAQ */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto w-full relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” FAQ</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Р§Р°СЃС‚С‹Рµ <span className="font-serif italic text-slate-400">РІРѕРїСЂРѕСЃС‹</span></h2>
            </div>
            <div className="flex flex-col gap-4 stagger-container">
              {FAQ.map((faq, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 stagger-item opacity-0">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex items-center justify-between w-full p-6 md:p-8 text-left">
                    <h3 className="text-lg md:text-xl font-medium text-slate-900 pr-4">{faq.q}</h3>
                    <div className={`w-10 h-10 rounded-full bg-[#60c2ff]/10 flex items-center justify-center shrink-0 transition-transform duration-500 ${openFaq === index ? 'rotate-45 bg-[#60c2ff]' : ''}`}><Icon icon="solar:add-linear" className={`text-xl ${openFaq === index ? 'text-white' : 'text-[#60c2ff]'}`} /></div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-96 pb-6 md:pb-8' : 'max-h-0'}`}><p className="text-[17px] text-slate-600 font-light leading-relaxed px-6 md:px-8">{faq.a}</p></div>
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
                  <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">Р—Р°РїРёС€РёС‚РµСЃСЊ РЅР° <br /><span className="font-serif italic text-slate-400">SMAS-Р»РёС„С‚РёРЅРі</span></h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">РљРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ РІСЂР°С‡Р°-РєРѕСЃРјРµС‚РѕР»РѕРіР° РІ РїРѕРґР°СЂРѕРє. РџРѕРґР±РµСЂС‘Рј РїСЂРѕС‚РѕРєРѕР» Рё РѕС‚РІРµС‚РёРј РЅР° РІСЃРµ РІРѕРїСЂРѕСЃС‹.</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group"><div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                      <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3">Р‘РµСЃРїР»Р°С‚РЅР°СЏ РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ<Icon icon="solar:arrow-right-linear" className="text-xl" /></button>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-64 h-64 rounded-full border border-[#60c2ff]/20 relative items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div>
                  <div className="text-center"><Icon icon="solar:shield-check-linear" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" /><span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/50 leading-tight">SkinMed<br/>Premium Care</span></div>
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
