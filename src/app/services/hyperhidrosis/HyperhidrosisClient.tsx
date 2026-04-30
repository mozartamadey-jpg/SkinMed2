'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

export default function HyperhidrosisClient() {

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-glow-active');
          } else {
            entry.target.classList.remove('scroll-glow-active');
          }
        });
      },
      { threshold: 0.3 }
    );
    const items = document.querySelectorAll('.scroll-glow-item');
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const indications = [
    { icon: 'solar:waterdrop-linear', title: 'РџРѕС‚Р»РёРІРѕСЃС‚СЊ РїРѕРґРјС‹С€РµРє', desc: 'РџРѕСЃС‚РѕСЏРЅРЅРѕРµ РїСЂРѕРјРѕРєР°РЅРёРµ РѕРґРµР¶РґС‹ РґР°Р¶Рµ РІ РїРѕРєРѕРµ' },
    { icon: 'solar:hand-stars-linear', title: 'Р’Р»Р°Р¶РЅС‹Рµ Р»Р°РґРѕРЅРё', desc: 'Р”РёСЃРєРѕРјС„РѕСЂС‚ РїСЂРё СЂСѓРєРѕРїРѕР¶Р°С‚РёСЏС… Рё РїРёСЃСЊРјРµ' },
    { icon: 'solar:running-2-linear', title: 'РџРѕС‚Р»РёРІРѕСЃС‚СЊ СЃС‚РѕРї', desc: 'РџРѕРІС‹С€РµРЅРЅР°СЏ РІР»Р°Р¶РЅРѕСЃС‚СЊ, РЅРµРїСЂРёСЏС‚РЅС‹Р№ Р·Р°РїР°С…' },
    { icon: 'solar:sun-2-linear', title: 'Р›РёС†РµРІРѕР№ РіРёРїРµСЂРіРёРґСЂРѕР·', desc: 'РџРѕС‚Р»РёРІРѕСЃС‚СЊ Р»Р±Р° Рё РІРёСЃРєРѕРІ Р±РµР· С„РёР·РёС‡РµСЃРєРѕР№ РЅР°РіСЂСѓР·РєРё' },
    { icon: 'solar:danger-triangle-linear', title: 'Р­РјРѕС†РёРѕРЅР°Р»СЊРЅР°СЏ РїРѕС‚Р»РёРІРѕСЃС‚СЊ', desc: 'РР·Р±С‹С‚РѕС‡РЅРѕРµ РїРѕС‚РѕРѕС‚РґРµР»РµРЅРёРµ РїСЂРё СЃС‚СЂРµСЃСЃРµ' },
    { icon: 'solar:temperature-linear', title: 'РЎРµР·РѕРЅРЅРѕРµ РѕР±РѕСЃС‚СЂРµРЅРёРµ', desc: 'РЈСЃРёР»РµРЅРёРµ РїСЂРѕР±Р»РµРјС‹ РІ С‚С‘РїР»РѕРµ РІСЂРµРјСЏ РіРѕРґР°' },
  ];

  const advantages = [
    { title: 'Р‘С‹СЃС‚СЂС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚', desc: 'Р—Р°РјРµС‚РЅРѕРµ СЃРЅРёР¶РµРЅРёРµ РїРѕС‚РѕРѕС‚РґРµР»РµРЅРёСЏ СѓР¶Рµ С‡РµСЂРµР· 3вЂ“5 РґРЅРµР№ РїРѕСЃР»Рµ РїСЂРѕС†РµРґСѓСЂС‹. РџРѕР»РЅС‹Р№ СЌС„С„РµРєС‚ СЂР°Р·РІРёРІР°РµС‚СЃСЏ Рє 14 РґРЅСЋ.' },
    { title: 'РџСЂРѕРґРѕР»Р¶РёС‚РµР»СЊРЅС‹Р№ СЌС„С„РµРєС‚', desc: 'Р”РµР№СЃС‚РІРёРµ РїСЂРµРїР°СЂР°С‚Р° СЃРѕС…СЂР°РЅСЏРµС‚СЃСЏ РѕС‚ 6 РґРѕ 8 РјРµСЃСЏС†РµРІ. РџСЂРё СЂРµРіСѓР»СЏСЂРЅС‹С… РїСЂРѕС†РµРґСѓСЂР°С… РґР»РёС‚РµР»СЊРЅРѕСЃС‚СЊ СЌС„С„РµРєС‚Р° СѓРІРµР»РёС‡РёРІР°РµС‚СЃСЏ.' },
    { title: 'Р‘РµР·Р±РѕР»РµР·РЅРµРЅРЅРѕСЃС‚СЊ', desc: 'РџСЂРёРјРµРЅСЏРµРј Р°РЅРµСЃС‚РµР·РёСЂСѓСЋС‰РёР№ РєСЂРµРј РїРµСЂРµРґ РёРЅСЉРµРєС†РёСЏРјРё вЂ” РїСЂРѕС†РµРґСѓСЂР° РїСЂРѕС…РѕРґРёС‚ РјР°РєСЃРёРјР°Р»СЊРЅРѕ РєРѕРјС„РѕСЂС‚РЅРѕ РґР»СЏ РїР°С†РёРµРЅС‚Р°.' },
    { title: 'Р‘РµР·РѕРїР°СЃРЅРѕСЃС‚СЊ', desc: 'РСЃРїРѕР»СЊР·СѓРµРј С‚РѕР»СЊРєРѕ СЃРµСЂС‚РёС„РёС†РёСЂРѕРІР°РЅРЅС‹Рµ РїСЂРµРїР°СЂР°С‚С‹ Р‘РѕС‚РѕРєСЃ Рё Р”РёСЃРїРѕСЂС‚. РњРµС‚РѕРґРёРєР° РѕРґРѕР±СЂРµРЅР° FDA Рё РїСЂРёРјРµРЅСЏРµС‚СЃСЏ Р±РѕР»РµРµ 20 Р»РµС‚.' },
    { title: 'Р‘РµР· СЂРµР°Р±РёР»РёС‚Р°С†РёРё', desc: 'РџСЂРѕС†РµРґСѓСЂР° РЅРµ С‚СЂРµР±СѓРµС‚ РІРѕСЃСЃС‚Р°РЅРѕРІРёС‚РµР»СЊРЅРѕРіРѕ РїРµСЂРёРѕРґР°. Р’С‹ РјРѕР¶РµС‚Рµ РІРµСЂРЅСѓС‚СЊСЃСЏ Рє РѕР±С‹С‡РЅРѕРјСѓ РѕР±СЂР°Р·Сѓ Р¶РёР·РЅРё РІ С‚РѕС‚ Р¶Рµ РґРµРЅСЊ.' },
  ];

  const steps = [
    { title: 'РљРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ', desc: 'Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі РїСЂРѕРІРѕРґРёС‚ РѕСЃРјРѕС‚СЂ, РѕРїСЂРµРґРµР»СЏРµС‚ Р·РѕРЅС‹ РїРѕРІС‹С€РµРЅРЅРѕРіРѕ РїРѕС‚РѕРѕС‚РґРµР»РµРЅРёСЏ Рё РїРѕРґР±РёСЂР°РµС‚ РѕРїС‚РёРјР°Р»СЊРЅСѓСЋ РґРѕР·РёСЂРѕРІРєСѓ РїСЂРµРїР°СЂР°С‚Р°.' },
    { title: 'РџСЂРѕР±Р° РњРёРЅРѕСЂР°', desc: 'РќР° РєРѕР¶Сѓ РЅР°РЅРѕСЃРёС‚СЃСЏ Р№РѕРґ Рё РєСЂР°С…РјР°Р» РґР»СЏ С‚РѕС‡РЅРѕРіРѕ РѕРїСЂРµРґРµР»РµРЅРёСЏ РіСЂР°РЅРёС† Р°РєС‚РёРІРЅС‹С… РїРѕС‚РѕРІС‹С… Р¶РµР»С‘Р· вЂ” С‚Р°Рє РјС‹ РіР°СЂР°РЅС‚РёСЂСѓРµРј С‚РѕС‡РµС‡РЅРѕРµ РІРѕР·РґРµР№СЃС‚РІРёРµ.' },
    { title: 'РђРЅРµСЃС‚РµР·РёСЏ', desc: 'РќР° РѕР±СЂР°Р±Р°С‚С‹РІР°РµРјСѓСЋ Р·РѕРЅСѓ РЅР°РЅРѕСЃРёС‚СЃСЏ Р°РїРїР»РёРєР°С†РёРѕРЅРЅС‹Р№ Р°РЅРµСЃС‚РµС‚РёРє РґР»СЏ РїРѕР»РЅРѕРіРѕ РєРѕРјС„РѕСЂС‚Р° РІРѕ РІСЂРµРјСЏ РёРЅСЉРµРєС†РёР№.' },
    { title: 'РРЅСЉРµРєС†РёРё', desc: 'Р‘РѕС‚СѓР»РѕС‚РѕРєСЃРёРЅ РІРІРѕРґРёС‚СЃСЏ РјРёРєСЂРѕРёРіР»РѕР№ РЅР° РіР»СѓР±РёРЅСѓ 2вЂ“3 РјРј СЃ С€Р°РіРѕРј 1,5вЂ“2 СЃРј РїРѕ РІСЃРµР№ Р·РѕРЅРµ РіРёРїРµСЂРіРёРґСЂРѕР·Р°. РџСЂРѕС†РµРґСѓСЂР° Р·Р°РЅРёРјР°РµС‚ 15вЂ“30 РјРёРЅСѓС‚.' },
    { title: 'Р РµРєРѕРјРµРЅРґР°С†РёРё', desc: 'РџРѕСЃР»Рµ РїСЂРѕС†РµРґСѓСЂС‹ РІСЂР°С‡ РґР°С‘С‚ СЂРµРєРѕРјРµРЅРґР°С†РёРё РїРѕ СѓС…РѕРґСѓ: РЅРµ РїРѕСЃРµС‰Р°С‚СЊ Р±Р°РЅСЋ Рё СЃР°СѓРЅСѓ 7 РґРЅРµР№, РЅРµ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ Р°РЅС‚РёРїРµСЂСЃРїРёСЂР°РЅС‚С‹ 24 С‡Р°СЃР°.' },
  ];

  const prices = [
     { name: 'Процедура 1', price: 'РѕС‚ 18 000 в‚Ѕ' },
     { name: 'Процедура 1', price: 'РѕС‚ 12 000 в‚Ѕ' },
     { name: 'Процедура 1', price: 'РѕС‚ 20 000 в‚Ѕ' },
     { name: 'Процедура 1', price: 'РѕС‚ 22 000 в‚Ѕ' },
     { name: 'Процедура 1', price: 'Р‘РµСЃРїР»Р°С‚РЅРѕ' },];

  const faq = [
    { q: 'РќР°СЃРєРѕР»СЊРєРѕ Р±РѕР»РµР·РЅРµРЅРЅР° РїСЂРѕС†РµРґСѓСЂР°?', a: 'Р‘Р»Р°РіРѕРґР°СЂСЏ РїСЂРµРґРІР°СЂРёС‚РµР»СЊРЅРѕРјСѓ РЅР°РЅРµСЃРµРЅРёСЋ Р°РЅРµСЃС‚РµР·РёСЂСѓСЋС‰РµРіРѕ РєСЂРµРјР° РїСЂРѕС†РµРґСѓСЂР° РїСЂР°РєС‚РёС‡РµСЃРєРё Р±РµР·Р±РѕР»РµР·РЅРµРЅРЅР°. РџР°С†РёРµРЅС‚С‹ РѕС‰СѓС‰Р°СЋС‚ Р»РёС€СЊ Р»С‘РіРєРѕРµ РїРѕРєР°Р»С‹РІР°РЅРёРµ РІ РјРѕРјРµРЅС‚ РІРІРµРґРµРЅРёСЏ РїСЂРµРїР°СЂР°С‚Р°.' },
    { q: 'РљРѕРіРґР° РЅР°СЃС‚СѓРїР°РµС‚ СЌС„С„РµРєС‚?', a: 'РџРµСЂРІС‹Рµ СЂРµР·СѓР»СЊС‚Р°С‚С‹ Р·Р°РјРµС‚РЅС‹ С‡РµСЂРµР· 3вЂ“5 РґРЅРµР№ РїРѕСЃР»Рµ РёРЅСЉРµРєС†РёР№. РњР°РєСЃРёРјР°Р»СЊРЅС‹Р№ СЌС„С„РµРєС‚ СЂР°Р·РІРёРІР°РµС‚СЃСЏ Рє 10вЂ“14 РґРЅСЋ Рё СЃРѕС…СЂР°РЅСЏРµС‚СЃСЏ 6вЂ“8 РјРµСЃСЏС†РµРІ.' },
    { q: 'РќСѓР¶РЅРѕ Р»Рё РіРѕС‚РѕРІРёС‚СЊСЃСЏ Рє РїСЂРѕС†РµРґСѓСЂРµ?', a: 'Р—Р° 3 РґРЅСЏ РґРѕ РїСЂРѕС†РµРґСѓСЂС‹ СЂРµРєРѕРјРµРЅРґСѓРµС‚СЃСЏ РїСЂРµРєСЂР°С‚РёС‚СЊ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ Р°РЅС‚РёРїРµСЂСЃРїРёСЂР°РЅС‚РѕРІ. Р’ РґРµРЅСЊ РІРёР·РёС‚Р° РїСЂРёС…РѕРґРёС‚Рµ СЃ С‡РёСЃС‚РѕР№, СЃСѓС…РѕР№ РєРѕР¶РµР№ РѕР±СЂР°Р±Р°С‚С‹РІР°РµРјРѕР№ Р·РѕРЅС‹.' },
    { q: 'РњРѕР¶РЅРѕ Р»Рё Р·Р°РЅРёРјР°С‚СЊСЃСЏ СЃРїРѕСЂС‚РѕРј РїРѕСЃР»Рµ РїСЂРѕС†РµРґСѓСЂС‹?', a: 'Р РµРєРѕРјРµРЅРґСѓРµС‚СЃСЏ РІРѕР·РґРµСЂР¶Р°С‚СЊСЃСЏ РѕС‚ РёРЅС‚РµРЅСЃРёРІРЅС‹С… С„РёР·РёС‡РµСЃРєРёС… РЅР°РіСЂСѓР·РѕРє РІ С‚РµС‡РµРЅРёРµ 3 РґРЅРµР№, Р° С‚Р°РєР¶Рµ РѕС‚ РїРѕСЃРµС‰РµРЅРёСЏ Р±Р°РЅРё Рё СЃР°СѓРЅС‹ РІ С‚РµС‡РµРЅРёРµ 7 РґРЅРµР№.' },
    { q: 'Р‘РµР·РѕРїР°СЃРЅР° Р»Рё Р±Р»РѕРєРёСЂРѕРІРєР° РїРѕС‚РѕРІС‹С… Р¶РµР»С‘Р·?', a: 'РђР±СЃРѕР»СЋС‚РЅРѕ Р±РµР·РѕРїР°СЃРЅР°. РџРѕС‚РѕРІС‹Рµ Р¶РµР»РµР·С‹ РѕР±СЂР°Р±Р°С‚С‹РІР°РµРјРѕР№ Р·РѕРЅС‹ СЃРѕСЃС‚Р°РІР»СЏСЋС‚ РјРµРЅРµРµ 2% РѕС‚ РѕР±С‰РµРіРѕ РєРѕР»РёС‡РµСЃС‚РІР°. РўРµСЂРјРѕСЂРµРіСѓР»СЏС†РёСЏ РѕСЂРіР°РЅРёР·РјР° РЅРµ РЅР°СЂСѓС€Р°РµС‚СЃСЏ вЂ” С‚РµР»Рѕ РїСЂРѕРґРѕР»Р¶Р°РµС‚ РѕС…Р»Р°Р¶РґР°С‚СЊСЃСЏ С‡РµСЂРµР· РѕСЃС‚Р°Р»СЊРЅС‹Рµ Р·РѕРЅС‹.' },
  ];

  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

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

          {/* Breadcrumbs */}
          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Р“Р»Р°РІРЅР°СЏ</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <a href="/services/injection" className="hover:text-[#60c2ff] transition-colors duration-300">РРЅСЉРµРєС†РёРѕРЅРЅР°СЏ РєРѕСЃРјРµС‚РѕР»РѕРіРёСЏ</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">Р›РµС‡РµРЅРёРµ РіРёРїРµСЂРіРёРґСЂРѕР·Р°</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img src="/images/services/hyperhidrosis/hero.png" alt="Р›РµС‡РµРЅРёРµ РіРёРїРµСЂРіРёРґСЂРѕР·Р° РёРЅСЉРµРєС†РёСЏРјРё Р±РѕС‚СѓР»РѕС‚РѕРєСЃРёРЅР°" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>

              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  Р­С„С„РµРєС‚ РґРѕ 8 РјРµСЃСЏС†РµРІ
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  Р›РµС‡РµРЅРёРµ <br />
                  <span className="font-serif italic text-[#60c2ff]/80">РіРёРїРµСЂРіРёРґСЂРѕР·Р°</span>
                </h1>

                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  РР·Р±Р°РІСЊС‚РµСЃСЊ РѕС‚ РїРѕРІС‹С€РµРЅРЅРѕР№ РїРѕС‚Р»РёРІРѕСЃС‚Рё Р·Р° РѕРґРЅСѓ РїСЂРѕС†РµРґСѓСЂСѓ. РРЅСЉРµРєС†РёРё Р±РѕС‚СѓР»РѕС‚РѕРєСЃРёРЅР° Р±Р»РѕРєРёСЂСѓСЋС‚ СЂР°Р±РѕС‚Сѓ РїРѕС‚РѕРІС‹С… Р¶РµР»С‘Р· вЂ” Р±РµР·РѕРїР°СЃРЅРѕ, Р±С‹СЃС‚СЂРѕ Рё СЃ РіР°СЂР°РЅС‚РёСЂРѕРІР°РЅРЅС‹Рј СЂРµР·СѓР»СЊС‚Р°С‚РѕРј.
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button
                      onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                      className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]"
                    >
                      Р—Р°РїРёСЃР°С‚СЊСЃСЏ РЅР° РїСЂРѕС†РµРґСѓСЂСѓ
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto reveal-up opacity-0">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Рћ РїСЂРѕС†РµРґСѓСЂРµ</span>
                <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                  Р§С‚Рѕ С‚Р°РєРѕРµ <span className="font-serif italic text-slate-400">РіРёРїРµСЂРіРёРґСЂРѕР·</span>
                </h2>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed mb-6">
                  Р“РёРїРµСЂРіРёРґСЂРѕР· вЂ” СЌС‚Рѕ РїР°С‚РѕР»РѕРіРёС‡РµСЃРєРѕРµ СЃРѕСЃС‚РѕСЏРЅРёРµ, РїСЂРё РєРѕС‚РѕСЂРѕРј РїРѕС‚РѕРІС‹Рµ Р¶РµР»РµР·С‹ СЂР°Р±РѕС‚Р°СЋС‚ РІ РґРµСЃСЏС‚РєРё СЂР°Р· Р°РєС‚РёРІРЅРµРµ РЅРѕСЂРјС‹. РџСЂРѕР±Р»РµРјР° Р·Р°С‚СЂР°РіРёРІР°РµС‚ РґРѕ 3% РЅР°СЃРµР»РµРЅРёСЏ Рё Р·РЅР°С‡РёС‚РµР»СЊРЅРѕ РІР»РёСЏРµС‚ РЅР° РєР°С‡РµСЃС‚РІРѕ Р¶РёР·РЅРё: РјРѕРєСЂС‹Рµ РїСЏС‚РЅР° РЅР° РѕРґРµР¶РґРµ, РґРёСЃРєРѕРјС„РѕСЂС‚ РїСЂРё РѕР±С‰РµРЅРёРё, РѕРіСЂР°РЅРёС‡РµРЅРёСЏ РІ РІС‹Р±РѕСЂРµ РіР°СЂРґРµСЂРѕР±Р°.
                </p>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">
                  РРЅСЉРµРєС†РёРё <span className="font-medium text-[#60c2ff]">Р‘РѕС‚РѕРєСЃ</span> РёР»Рё <span className="font-medium text-[#60c2ff]">Р”РёСЃРїРѕСЂС‚</span> вЂ” Р·РѕР»РѕС‚РѕР№ СЃС‚Р°РЅРґР°СЂС‚ Р»РµС‡РµРЅРёСЏ РіРёРїРµСЂРіРёРґСЂРѕР·Р°. Р‘РѕС‚СѓР»РѕС‚РѕРєСЃРёРЅ Р±Р»РѕРєРёСЂСѓРµС‚ РЅРµСЂРІРЅС‹Рµ РёРјРїСѓР»СЊСЃС‹ Рє РїРѕС‚РѕРІС‹Рј Р¶РµР»РµР·Р°Рј, СЃРЅРёР¶Р°СЏ РїРѕС‚РѕРѕС‚РґРµР»РµРЅРёРµ РЅР° 85вЂ“95% РІ РѕР±СЂР°Р±РѕС‚Р°РЅРЅРѕР№ Р·РѕРЅРµ.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-10 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)]">
                <div className="flex flex-col gap-6">
                  {[
                    { num: '85вЂ“95%', label: 'РЎРЅРёР¶РµРЅРёРµ РїРѕС‚РѕРѕС‚РґРµР»РµРЅРёСЏ' },
                    { num: '6вЂ“8', label: 'РњРµСЃСЏС†РµРІ РґРµР№СЃС‚РІРёСЏ РїСЂРµРїР°СЂР°С‚Р°' },
                    { num: '15вЂ“30', label: 'РњРёРЅСѓС‚ вЂ” РґР»РёС‚РµР»СЊРЅРѕСЃС‚СЊ РїСЂРѕС†РµРґСѓСЂС‹' },
                    { num: '2 400+', label: 'Р”РѕРІРѕР»СЊРЅС‹С… РїР°С†РёРµРЅС‚РѕРІ РЎРєРёРЅРњРµРґ' },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-4 py-3 border-b border-slate-100 last:border-0">
                      <span className="text-2xl md:text-3xl font-light text-[#60c2ff] min-w-[100px]">{stat.num}</span>
                      <span className="text-base text-slate-600 font-light">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Indications */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџРѕРєР°Р·Р°РЅРёСЏ</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                РљРѕРіРґР° РЅСѓР¶РЅР° <span className="font-serif italic text-slate-400">РїРѕРјРѕС‰СЊ</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                РџСЂРѕС†РµРґСѓСЂР° СЂРµРєРѕРјРµРЅРґРѕРІР°РЅР° РїСЂРё РёР·Р±С‹С‚РѕС‡РЅРѕРј РїРѕС‚РѕРѕС‚РґРµР»РµРЅРёРё, РЅРµ СЃРІСЏР·Р°РЅРЅРѕРј СЃ С„РёР·РёС‡РµСЃРєРѕР№ РЅР°РіСЂСѓР·РєРѕР№
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container">
              {indications.map((item, index) => (
                <div key={index}
                  className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden cursor-pointer stagger-item opacity-0 scroll-glow-item"
                >
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

          {/* Advantages */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџСЂРµРёРјСѓС‰РµСЃС‚РІР°</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                РџРѕС‡РµРјСѓ <br /> <span className="font-serif italic text-slate-400">Р±РѕС‚СѓР»РёРЅРѕС‚РµСЂР°РїРёСЏ</span>
              </h2>
            </div>

            <div className="flex flex-col stagger-container">
              <EditorialList items={advantages} />
            </div>
          </section>

          {/* Zones */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р—РѕРЅС‹ РѕР±СЂР°Р±РѕС‚РєРё</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                РћР±Р»Р°СЃС‚СЊ <span className="font-serif italic text-slate-400">РІРѕР·РґРµР№СЃС‚РІРёСЏ</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
              {[
                { icon: 'solar:shield-check-linear', title: 'РџРѕРґРјС‹С€РµС‡РЅС‹Рµ РІРїР°РґРёРЅС‹', desc: 'РЎР°РјР°СЏ СЂР°СЃРїСЂРѕСЃС‚СЂР°РЅС‘РЅРЅР°СЏ Р·РѕРЅР°. Р­С„С„РµРєС‚ 6вЂ“8 РјРµСЃСЏС†РµРІ, РґРѕР·РёСЂРѕРІРєР° 50вЂ“100 РµРґ.' },
                { icon: 'solar:hand-stars-linear', title: 'Р›Р°РґРѕРЅРё', desc: 'РўРѕС‡РµС‡РЅС‹Рµ РёРЅСЉРµРєС†РёРё СЃ Р°РЅРµСЃС‚РµР·РёРµР№. РР·Р±Р°РІР»РµРЅРёРµ РѕС‚ РІР»Р°Р¶РЅС‹С… СЂСѓРє РЅР° 4вЂ“6 РјРµСЃСЏС†РµРІ.' },
                { icon: 'solar:running-2-linear', title: 'РЎС‚РѕРїС‹', desc: 'РЎРЅРёР¶РµРЅРёРµ РїРѕС‚Р»РёРІРѕСЃС‚Рё РЅРѕРі Рё СЃРѕРїСѓС‚СЃС‚РІСѓСЋС‰РµРіРѕ Р·Р°РїР°С…Р°. Р­С„С„РµРєС‚ РґРѕ 6 РјРµСЃСЏС†РµРІ.' },
                { icon: 'solar:eye-linear', title: 'Р›РёС†Рѕ Рё Р»РѕР±', desc: 'РљРѕСЂСЂРµРєС†РёСЏ РїРѕС‚Р»РёРІРѕСЃС‚Рё Р»Р±Р°, РІРёСЃРѕС‡РЅРѕР№ Р·РѕРЅС‹. РњРёРЅРёРјР°Р»СЊРЅС‹Рµ РґРѕР·РёСЂРѕРІРєРё.' },
              ].map((zone, i) => (
                <div key={i} className="group bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 stagger-item opacity-0 scroll-glow-item">
                  <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                    <Icon icon={zone.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300 mb-2">{zone.title}</h3>
                  <p className="text-base text-slate-600 font-light leading-relaxed">{zone.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Steps */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р­С‚Р°РїС‹</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                РљР°Рє РїСЂРѕС…РѕРґРёС‚ <br /> <span className="font-serif italic text-slate-400">РїСЂРѕС†РµРґСѓСЂР°</span>
              </h2>
            </div>

            <div className="flex flex-col stagger-container">
              <EditorialList items={steps} />
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full">
            <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)] reveal-up opacity-0">
              <div className="mb-12 border-b border-slate-100 pb-6">
                <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">
                  РЎС‚РѕРёРјРѕСЃС‚СЊ <span className="font-serif italic text-slate-400">СѓСЃР»СѓРі</span>
                </h2>
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
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Р§Р°СЃС‚С‹Рµ <span className="font-serif italic text-slate-400">РІРѕРїСЂРѕСЃС‹</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 stagger-container">
              {faq.map((item, index) => (
                <div key={index}
                  className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] overflow-hidden shadow-[0_0.5rem_1.5rem_-0.5rem_rgba(0,0,0,0.03)] stagger-item opacity-0"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left gap-4"
                  >
                    <span className="text-lg md:text-xl font-medium text-slate-900">{item.q}</span>
                    <Icon
                      icon={openFaq === index ? 'solar:minus-linear' : 'solar:add-linear'}
                      className="text-2xl text-[#60c2ff] shrink-0 transition-transform duration-300"
                    />
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
                    Р—Р°Р±СѓРґСЊС‚Рµ Рѕ <br />
                    <span className="font-serif italic text-slate-400">РїРѕС‚Р»РёРІРѕСЃС‚Рё</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">
                    Р—Р°РїРёС€РёС‚РµСЃСЊ РЅР° Р±РµСЃРїР»Р°С‚РЅСѓСЋ РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЋ РІСЂР°С‡Р°-РєРѕСЃРјРµС‚РѕР»РѕРіР°. РџРѕРґР±РµСЂС‘Рј РѕРїС‚РёРјР°Р»СЊРЅС‹Р№ РїСЂРѕС‚РѕРєРѕР» Р»РµС‡РµРЅРёСЏ Рё СЂР°СЃСЃС‡РёС‚Р°РµРј СЃС‚РѕРёРјРѕСЃС‚СЊ РїСЂРѕС†РµРґСѓСЂС‹.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group">
                      <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                      <button
                        onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                        className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3"
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
</div>
  );
}
