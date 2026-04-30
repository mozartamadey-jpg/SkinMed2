'use client';
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

const INDICATIONS = [
  { title: 'Р”РµС„РѕСЂРјР°С†РёРѕРЅРЅРѕРµ СЃС‚Р°СЂРµРЅРёРµ', desc: 'РџР»РѕС‚РЅР°СЏ РєРѕР¶Р° СЃ РѕС‚С‘С‡РЅРѕСЃС‚СЊСЋ, РїР°СЃС‚РѕР·РЅРѕСЃС‚СЊСЋ Рё РѕРїСѓС‰РµРЅРёРµРј', icon: 'solar:hand-stars-linear' },
  { title: 'Р Р°СЃС€РёСЂРµРЅРЅС‹Рµ РїРѕСЂС‹', desc: 'РџРѕРІС‹С€РµРЅРЅР°СЏ Р°РєС‚РёРІРЅРѕСЃС‚СЊ СЃР°Р»СЊРЅС‹С… Р¶РµР»С‘Р·, С‚СѓСЃРєР»С‹Р№ РІРёРґ', icon: 'solar:waterdrop-linear' },
  { title: 'РџРѕСЃС‚Р°РєРЅРµ', desc: 'РџРѕРєСЂР°СЃРЅРµРЅРёСЏ, РЅРµСЂРѕРІРЅР°СЏ С‚РµРєСЃС‚СѓСЂР°, Р°С‚СЂРѕС„РёС‡РµСЃРєРёРµ СЂСѓР±С†С‹', icon: 'solar:star-linear' },
  { title: 'РњРѕСЂС‰РёРЅС‹', desc: 'РњРµР»РєРёРµ Рё СЃСЂРµРґРЅРёРµ РјРѕСЂС‰РёРЅС‹ Р»РёС†Р° Рё С€РµРё', icon: 'solar:eye-linear' },
  { title: 'Р”СЂСЏР±Р»РѕСЃС‚СЊ РєРѕР¶Рё', desc: 'РЎРЅРёР¶РµРЅРёРµ СѓРїСЂСѓРіРѕСЃС‚Рё Рё СЌР»Р°СЃС‚РёС‡РЅРѕСЃС‚Рё', icon: 'solar:magic-stick-3-linear' },
  { title: 'Р СѓР±С†С‹ Рё С€СЂР°РјС‹', desc: 'РђС‚СЂРѕС„РёС‡РµСЃРєРёРµ Рё РіРёРїРµСЂС‚СЂРѕС„РёС‡РµСЃРєРёРµ СЂСѓР±С†С‹', icon: 'solar:clipboard-text-linear' },
];

const ADVANTAGES = [
  { title: 'Р‘РµР·РѕРїР°СЃРЅРѕСЃС‚СЊ', desc: 'РСЃРїРѕР»СЊР·СѓСЋС‚СЃСЏ РѕРґРЅРѕСЂР°Р·РѕРІС‹Рµ СЃС‚РµСЂРёР»СЊРЅС‹Рµ Р°РїРїР»РёРєР°С‚РѕСЂС‹. Р’Р°С€Р° РєРѕР¶Р° Р·Р°С‰РёС‰РµРЅР° РѕС‚ СЂР°Р·РґСЂР°Р¶РµРЅРёР№ Рё Р°Р»Р»РµСЂРіРёРё.' },
  { title: 'Р‘С‹СЃС‚СЂРѕРµ РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёРµ', desc: 'Р”РёР°РјРµС‚СЂ РјРёРєСЂРѕРїРѕРІСЂРµР¶РґРµРЅРёР№ РјРµРЅРµРµ 0,1 РјРј. РџРѕРєСЂР°СЃРЅРµРЅРёРµ РїСЂРѕС…РѕРґРёС‚ Р·Р° 4в€’6 С‡Р°СЃРѕРІ.' },
  { title: 'Р’С‹СЃРѕРєР°СЏ СЌС„С„РµРєС‚РёРІРЅРѕСЃС‚СЊ', desc: 'РћРґРЅРѕРІСЂРµРјРµРЅРЅРѕ РІРѕР·РґРµР№СЃС‚РІСѓРµС‚ РЅР° Р±РѕР»СЊС€СѓСЋ РїРѕРІРµСЂС…РЅРѕСЃС‚СЊ, РјСЏРіРєРёРµ С‚РєР°РЅРё РїСЂРѕРіСЂРµРІР°СЋС‚СЃСЏ РѕРґРЅРѕРјРѕРјРµРЅС‚РЅРѕ.' },
  { title: 'РќРёР·РєР°СЏ С‡СѓРІСЃС‚РІРёС‚РµР»СЊРЅРѕСЃС‚СЊ', desc: 'РџСЂРѕРЅРёРєР°РµС‚ РЅР° РіР»СѓР±РёРЅСѓ РґРѕ 3,5 РјРј, СЂР°РІРЅРѕРјРµСЂРЅРѕ СЂР°СЃРїСЂРµРґРµР»СЏСЏ С‚РµРїР»РѕРІСѓСЋ СЌРЅРµСЂРіРёСЋ. РњРёРЅРёРјСѓРј Р±РѕР»РµРІС‹С… РѕС‰СѓС‰РµРЅРёР№.' },
];

const RESULTS = [
  'РЈР»СѓС‡С€Р°РµС‚СЃСЏ С‚РµРєСЃС‚СѓСЂР° Рё С‚РѕРЅСѓСЃ РєРѕР¶Рё',
  'РЎРѕРєСЂР°С‰Р°РµС‚СЃСЏ РєРѕР¶РЅС‹Р№ Р»РѕСЃРєСѓС‚',
  'РџРѕСЏРІР»СЏРµС‚СЃСЏ Р»РёС„С‚РёРЅРі-СЌС„С„РµРєС‚',
  'РЈРјРµРЅСЊС€Р°СЋС‚СЃСЏ СЂСѓР±С†С‹ РїРѕСЃС‚Р°РєРЅРµ',
  'Р’С‹СЂР°РІРЅРёРІР°РµС‚СЃСЏ СЂРµР»СЊРµС„',
  'Р Р°Р·РіР»Р°Р¶РёРІР°СЋС‚СЃСЏ РјРµР»РєРёРµ РјРѕСЂС‰РёРЅС‹',
  'РџРѕСЂС‹ СЃС‚Р°РЅРѕРІСЏС‚СЃСЏ РјРµРЅРµРµ Р·Р°РјРµС‚РЅС‹РјРё',
];

const STEPS = [
  { title: 'РљРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ', desc: 'Р—РЅР°РєРѕРјРёС‚РµСЃСЊ СЃ Р»РµС‡Р°С‰РёРј РІСЂР°С‡РѕРј, СЃРѕРѕР±С‰Р°РµС‚Рµ Рѕ Р¶Р°Р»РѕР±Р°С…. Р”РѕРєС‚РѕСЂ РѕР±СЃР»РµРґСѓРµС‚ РєРѕР¶Сѓ, СѓСЃС‚Р°РЅР°РІР»РёРІР°РµС‚ РѕС‚СЃСѓС‚СЃС‚РІРёРµ РїСЂРѕС‚РёРІРѕРїРѕРєР°Р·Р°РЅРёР№ Рё РґР°С‘С‚ СЂРµРєРѕРјРµРЅРґР°С†РёРё. Р”Р»РёС‚СЃСЏ 15-30 РјРёРЅСѓС‚.' },
  { title: 'РџСЂРѕС†РµРґСѓСЂР° RF-Р»РёС„С‚РёРЅРі', desc: 'РќР°РЅРѕСЃРёРј Р°РїРїР»РёРєР°С†РёРѕРЅРЅСѓСЋ Р°РЅРµСЃС‚РµР·РёСЋ. РЈР»СЊС‚СЂР°С‚РѕРЅРєРёРµ Р·РѕР»РѕС‚С‹Рµ РёРіР»С‹ Р·Р°С…РѕРґСЏС‚ РЅР° Р·Р°РґР°РЅРЅСѓСЋ РіР»СѓР±РёРЅСѓ, РїРѕРґР°С‘С‚СЃСЏ СЂР°РґРёРѕРІРѕР»РЅРѕРІР°СЏ СЌРЅРµСЂРіРёСЏ 60в€’65В°C. РљРѕР»Р»Р°РіРµРЅРѕРІС‹Рµ РІРѕР»РѕРєРЅР° СЃРѕРєСЂР°С‰Р°СЋС‚СЃСЏ, СЂРµР»СЊРµС„ СѓРїР»РѕС‚РЅСЏРµС‚СЃСЏ. Р—Р°РЅРёРјР°РµС‚ 60-90 РјРёРЅСѓС‚.' },
  { title: 'Р’РѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёРµ', desc: 'Р›РѕРєР°Р»СЊРЅР°СЏ РѕС‚С‘С‡РЅРѕСЃС‚СЊ Рё РїРѕРєСЂР°СЃРЅРµРЅРёСЏ РїСЂРѕС…РѕРґСЏС‚ С‡РµСЂРµР· 4в€’6 С‡Р°СЃРѕРІ. РџРµСЂРІС‹Рµ Р·Р°РјРµС‚РЅС‹Рµ СѓР»СѓС‡С€РµРЅРёСЏ РІРёРґРЅРѕ РЅР° 4в€’5 РґРµРЅСЊ, СЌС„С„РµРєС‚ РЅР°СЂР°СЃС‚Р°РµС‚ РІ С‚РµС‡РµРЅРёРµ 1в€’1,5 РјРµСЃСЏС†Р°.' },
];

const PRICES = [
   { name: 'Процедура 1', price: '36.000 в‚Ѕ' },
   { name: 'Процедура 1', price: '38.000 в‚Ѕ' },
   { name: 'Процедура 1', price: '54.000 в‚Ѕ' },
   { name: 'Процедура 1', price: '20.000 в‚Ѕ' },
   { name: 'Процедура 1', price: '28.000 в‚Ѕ' },
   { name: 'Процедура 1', price: '25.000 в‚Ѕ' },
   { name: 'Процедура 1', price: '28.000 в‚Ѕ' },
   { name: 'Процедура 1', price: '28.000 в‚Ѕ' },
   { name: 'Процедура 1', price: '36.000 в‚Ѕ' },
   { name: 'Процедура 1', price: '36.000 в‚Ѕ' },
   { name: 'Процедура 1', price: '36.000 в‚Ѕ' },
   { name: 'Процедура 1', price: '36.000 в‚Ѕ' },];

const FAQ = [
  { q: 'Р­С‚Рѕ Р±РѕР»СЊРЅРѕ?', a: 'Vivace вЂ” СЃР°РјС‹Р№ Р±РµР·Р±РѕР»РµР·РЅРµРЅРЅС‹Р№ РјРёРєСЂРѕРёРіРѕР»СЊС‡Р°С‚С‹Р№ RF-Р»РёС„С‚РёРЅРі. РџРµСЂРµРґ РїСЂРѕС†РµРґСѓСЂРѕР№ РЅР°РЅРѕСЃРёС‚СЃСЏ Р°РїРїР»РёРєР°С†РёРѕРЅРЅР°СЏ Р°РЅРµСЃС‚РµР·РёСЏ. РћС‰СѓС‰РµРЅРёСЏ РјРёРЅРёРјР°Р»СЊРЅС‹.' },
  { q: 'РЎРєРѕР»СЊРєРѕ РїСЂРѕС†РµРґСѓСЂ РЅСѓР¶РЅРѕ?', a: 'Р”Р»СЏ РІС‹СЂР°Р¶РµРЅРЅРѕРіРѕ СЂРµР·СѓР»СЊС‚Р°С‚Р° СЂРµРєРѕРјРµРЅРґСѓРµРј РєСѓСЂСЃ РёР· 3-5 РїСЂРѕС†РµРґСѓСЂ СЃ РёРЅС‚РµСЂРІР°Р»РѕРј 4-6 РЅРµРґРµР»СЊ. РљР°Р¶РґС‹Р№ СЃРµР°РЅСЃ РґР°С‘С‚ РЅР°РєРѕРїРёС‚РµР»СЊРЅС‹Р№ СЌС„С„РµРєС‚.' },
  { q: 'РљРѕРіРґР° РІРёРґРµРЅ СЂРµР·СѓР»СЊС‚Р°С‚?', a: 'РџРµСЂРІС‹Рµ СѓР»СѓС‡С€РµРЅРёСЏ РІРёРґРЅС‹ РЅР° 4-5 РґРµРЅСЊ. РњР°РєСЃРёРјР°Р»СЊРЅС‹Р№ СЌС„С„РµРєС‚ РЅР°СЂР°СЃС‚Р°РµС‚ РІ С‚РµС‡РµРЅРёРµ 1-1,5 РјРµСЃСЏС†РµРІ Р·Р° СЃС‡С‘С‚ РЅРѕРІРѕРіРѕ РєРѕР»Р»Р°РіРµРЅР°.' },
  { q: 'РњРѕР¶РЅРѕ Р»Рё РґРµР»Р°С‚СЊ Р»РµС‚РѕРј?', a: 'Р”Р°, Vivace Р±РµР·РѕРїР°СЃРµРЅ РІ Р»СЋР±РѕРµ РІСЂРµРјСЏ РіРѕРґР° РїСЂРё СЃРѕР±Р»СЋРґРµРЅРёРё СЂРµРєРѕРјРµРЅРґР°С†РёР№ РїРѕ Р·Р°С‰РёС‚Рµ РѕС‚ СЃРѕР»РЅС†Р°.' },
];

const DOCTORS = [
   { name: 'Специалист SkinMed', role: 'Р“Р»Р°РІРЅС‹Р№ РІСЂР°С‡, РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕР»РѕРі', photo: '/images/doctors/kachyurina.jpg' },
   { name: 'Специалист SkinMed', role: 'Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі, Р±РѕС‚СѓР»РёРЅРѕС‚РµСЂР°РїРµРІС‚', photo: '/images/doctors/muhametzanova.jpg' },
   { name: 'Специалист SkinMed', role: 'Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕР»РѕРі', photo: '/images/doctors/emelina.jpg' },
   { name: 'Специалист SkinMed', role: 'Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕР»РѕРі, С‚СЂРёС…РѕР»РѕРі', photo: '/images/doctors/glubokaya.jpg' },
];

export default function VivaceClient() {
  useEffect(() => { let observer: IntersectionObserver | null = null; const initObserver = () => { if (window.innerWidth > 768) { if (observer) { observer.disconnect(); observer = null; } document.querySelectorAll('.mobile-glow-active').forEach(el => el.classList.remove('mobile-glow-active')); return; } if (!observer) { observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('mobile-glow-active'); else entry.target.classList.remove('mobile-glow-active'); }); }, { rootMargin: "-40% 0px -40% 0px", threshold: 0 }); setTimeout(() => { document.querySelectorAll('.scroll-glow-item').forEach(el => observer?.observe(el)); }, 500); } }; initObserver(); window.addEventListener('resize', initObserver); return () => { window.removeEventListener('resize', initObserver); if (observer) observer.disconnect(); }; }, []);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen relative font-sans text-slate-800 flex flex-col">
      <AnimationsProvider />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]"><div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/90 via-[#f0f5fa]/80 to-[#e4eaf0]/90"></div><div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] bg-gradient-to-br from-[#60c2ff]/30 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "25s" }}></div><div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] bg-gradient-to-tl from-[#80d0ff]/20 via-[#cddce9]/40 to-transparent blur-[5rem] opacity-40 mix-blend-normal animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}></div><div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-[100%] bg-gradient-to-bl from-[#b8e0ff]/30 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "30s", animationDirection: "reverse" }}></div><div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div></div>
      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        <main className="w-full mt-12 sm:mt-16">
          <section className="mb-6 md:mb-10 reveal-up opacity-0"><div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500"><a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Р“Р»Р°РІРЅР°СЏ</a><Icon icon="mdi:chevron-right" className="text-slate-400" /><a href="/services/apparatnaya-kosmetologiya" className="hover:text-[#60c2ff] transition-colors duration-300">РђРїРїР°СЂР°С‚РЅР°СЏ РєРѕСЃРјРµС‚РѕР»РѕРіРёСЏ</a><Icon icon="mdi:chevron-right" className="text-slate-400" /><span className="text-slate-700 font-medium">RF-Р»РёС„С‚РёРЅРі Vivace</span></div></section>

          {/* Hero */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0"><img src="/images/hardware/heroes/vivace-hero.png" alt="RF-Р»РёС„С‚РёРЅРі Vivace" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent z-10"></div><div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div></div>
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6"><span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>РњРёРєСЂРѕРёРіРѕР»СЊС‡Р°С‚С‹Р№ RF РЅРѕРІРѕРіРѕ РїРѕРєРѕР»РµРЅРёСЏ</div>
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">RF-Р»РёС„С‚РёРЅРі <br /><span className="font-serif italic text-[#60c2ff]/80">Vivace</span></h1>
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">Р•СЃС‚РµСЃС‚РІРµРЅРЅС‹Р№ Р»РёС„С‚РёРЅРі-СЌС„С„РµРєС‚ Р±РµР· Р±РѕР»Рё Рё Р·Р°РјРµС‚РЅРѕРµ СЃРёСЏРЅРёРµ РєРѕР¶Рё Р·Р° РѕРґРЅСѓ РїСЂРѕС†РµРґСѓСЂСѓ. Р§С‘С‚РєРёР№ РєРѕРЅС‚СѓСЂ Р±РµР· РѕРїРµСЂР°С†РёРё, СѓРїСЂСѓРіРѕСЃС‚СЊ Рё СЃРІРµР¶РµСЃС‚СЊ.</p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn"><div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div><button onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]">Р—Р°РїРёСЃР°С‚СЊСЃСЏ РЅР° RF-Р»РёС„С‚РёРЅРі<Icon icon="solar:arrow-right-linear" className="text-xl" /></button></div>
                  <div className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white font-light"><Icon icon="solar:bolt-linear" className="text-2xl text-[#60c2ff]" /><span>Р“Р»Р°РґРєР°СЏ, СЂРѕРІРЅР°СЏ РєРѕР¶Р°</span></div>
                </div>
              </div>
            </div>
          </section>

          {/* Cases */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0">
            <div className="mb-16 text-center"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р”Рѕ Рё РїРѕСЃР»Рµ</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">РљР»РёРЅРёС‡РµСЃРєРёРµ <span className="font-serif italic text-slate-400">СЂРµР·СѓР»СЊС‚Р°С‚С‹</span></h2></div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {['/images/hardware/rf-lifting-vivace/rf-lifting-vivace_2.webp', '/images/hardware/rf-lifting-vivace/rf-lifting-vivace_3.webp', '/images/hardware/rf-lifting-vivace/rf-lifting-vivace_4.webp'].map((img, i) => (
                <div key={i} className="rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)] group">
                  <img src={img} alt={`Р РµР·СѓР»СЊС‚Р°С‚ RF-Р»РёС„С‚РёРЅРі ${i+1}`} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                </div>
              ))}
            </div>
          </section>

          {/* Indications */}
          <section className="mb-32 lg:mb-48 relative z-10"><div className="text-center mb-16 reveal-up opacity-0"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџРѕРєР°Р·Р°РЅРёСЏ</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">РљРѕРіРґР° Vivace РґР°С‘С‚ <span className="font-serif italic text-slate-400">Р»СѓС‡С€РёР№ СЂРµР·СѓР»СЊС‚Р°С‚</span></h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container">
              {INDICATIONS.map((item, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden stagger-item opacity-0 scroll-glow-item">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110"><Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" /></div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300">{item.title}</h3>
                  <p className="text-base text-slate-600 font-light mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0"><div className="mb-16 text-center"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р­С„С„РµРєС‚</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">РљР°Рє РјРµРЅСЏРµС‚СЃСЏ <span className="font-serif italic text-slate-400">РєРѕР¶Р°</span></h2></div>
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center"><div className="flex flex-col gap-4">{RESULTS.map((t, i) => (<div key={i} className="flex items-center gap-4 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-sm"><Icon icon="solar:check-circle-bold" className="text-2xl text-[#60c2ff] shrink-0" /><p className="text-slate-700 font-light text-lg">{t}</p></div>))}</div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)]"><img src="/images/hardware/rf-lifting-vivace/rf-lifting-vivace_8.webp" alt="Vivace РїСЂРѕС†РµРґСѓСЂР°" className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700" /></div>
            </div>
          </section>

          {/* Advantages */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto"><div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РўРµС…РЅРѕР»РѕРіРёРё</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">РџСЂРµРёРјСѓС‰РµСЃС‚РІР° <br /><span className="font-serif italic text-slate-400">Vivace</span></h2></div>
            <div className="flex flex-col stagger-container"><EditorialList items={ADVANTAGES} /></div>
          </section>

          {/* Video */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0 text-center"><div className="mb-12"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р’РёРґРµРѕ</span><h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.1]">RF-Р»РёС„С‚РёРЅРі Р±РµР· Р±РѕР»Рё <span className="font-serif italic text-slate-400">Рё РґРёСЃРєРѕРјС„РѕСЂС‚Р°</span></h2></div>
            <div className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.1)] border border-white/80 bg-white p-2"><video controls className="w-full aspect-video object-cover rounded-[2.5rem]" poster="/images/hardware/rf-lifting-vivace/rf-lifting-vivace_1.jpg"><source src="https://smasclinicakzn.online/Vivace_site.mp4?dl=0" type="video/mp4" /></video></div>
          </section>

          {/* Steps */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full"><div className="mb-12 border-b border-slate-200/50 pb-6 reveal-up opacity-0"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџСЂРѕС†РµСЃСЃ</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">Р­С‚Р°РїС‹ <span className="font-serif italic text-slate-400">РїСЂРѕС†РµРґСѓСЂС‹</span></h2></div>
            <div className="stagger-container flex flex-col"><EditorialList items={STEPS} /></div>
          </section>

          {/* Pricing */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full"><div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)] reveal-up opacity-0"><div className="mb-12 border-b border-slate-100 pb-6"><h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">РЎС‚РѕРёРјРѕСЃС‚СЊ <span className="font-serif italic text-slate-400">Vivace</span></h2></div>
            <div className="flex flex-col divide-y divide-slate-100">{PRICES.map((price, idx) => (<div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2"><span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{price.name}</span><span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{price.price}</span></div>))}</div></div>
          </section>

          {/* Doctors */}
          <section className="mb-32 lg:mb-48 relative z-10"><div className="text-center mb-16 reveal-up opacity-0"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РљРѕРјР°РЅРґР°</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">РќР°С€Рё <span className="font-serif italic text-slate-400">СЌРєСЃРїРµСЂС‚С‹</span></h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">{DOCTORS.map((doc, index) => (<div key={index} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] overflow-hidden shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 stagger-item opacity-0"><div className="h-72 overflow-hidden"><img src={doc.photo} alt={doc.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" /></div><div className="p-6"><h3 className="text-lg font-medium text-slate-900 mb-1 group-hover:text-[#60c2ff] transition-colors duration-300">{doc.name}</h3><p className="text-base text-slate-600 font-light">{doc.role}</p></div></div>))}</div>
          </section>

          {/* FAQ */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto w-full relative z-10"><div className="text-center mb-16 reveal-up opacity-0"><span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” FAQ</span><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">Р§Р°СЃС‚С‹Рµ <span className="font-serif italic text-slate-400">РІРѕРїСЂРѕСЃС‹</span></h2></div>
            <div className="flex flex-col gap-4 stagger-container">{FAQ.map((faq, index) => (<div key={index} className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 stagger-item opacity-0"><button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex items-center justify-between w-full p-6 md:p-8 text-left"><h3 className="text-lg md:text-xl font-medium text-slate-900 pr-4">{faq.q}</h3><div className={`w-10 h-10 rounded-full bg-[#60c2ff]/10 flex items-center justify-center shrink-0 transition-transform duration-500 ${openFaq === index ? 'rotate-45 bg-[#60c2ff]' : ''}`}><Icon icon="solar:add-linear" className={`text-xl ${openFaq === index ? 'text-white' : 'text-[#60c2ff]'}`} /></div></button><div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-96 pb-6 md:pb-8' : 'max-h-0'}`}><p className="text-[17px] text-slate-600 font-light leading-relaxed px-6 md:px-8">{faq.a}</p></div></div>))}</div>
          </section>

          {/* CTA */}
          <section className="relative z-10 reveal-up opacity-0"><div className="relative overflow-hidden rounded-[3rem] bg-[#050B14] p-10 md:p-16 lg:p-24 border border-white/10 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)]"><div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[120px] pointer-events-none" /><div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#fbbf24]/5 rounded-full blur-[100px] pointer-events-none" /><div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto"><div className="flex-1 text-center lg:text-left"><h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">Р—Р°РїРёС€РёС‚РµСЃСЊ РЅР° <br /><span className="font-serif italic text-slate-400">Vivace</span></h2><p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">РћСЃС‚Р°РІСЊС‚Рµ Р·Р°СЏРІРєСѓ Рё РїРѕР»СѓС‡РёС‚Рµ Р·РѕРЅСѓ С€РµРё РІ РїРѕРґР°СЂРѕРє. РџСЂРµРґР»РѕР¶РµРЅРёРµ РґРµР№СЃС‚РІСѓРµС‚ РґРѕ 30 Р°РїСЂРµР»СЏ!</p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8"><div className="relative inline-flex group"><div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div><button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3">Р‘РµСЃРїР»Р°С‚РЅР°СЏ РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ<Icon icon="solar:arrow-right-linear" className="text-xl" /></button></div></div></div>
              <div className="hidden lg:flex w-64 h-64 rounded-full border border-[#60c2ff]/20 relative items-center justify-center"><div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div><div className="text-center"><Icon icon="solar:magic-stick-3-bold-duotone" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" /><span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/50 leading-tight">SkinMed<br/>Premium Care</span></div></div>
            </div></div>
          </section>
        </main>
        </div>
    <div className="relative z-20 w-full mt-auto">
        <Footer />
      </div>
</div>
  );
}
