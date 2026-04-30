'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

export default function MechanicalCleaningClient() {

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

  const indications = [
    { icon: 'solar:danger-triangle-linear', title: 'РљРѕРјРµРґРѕРЅС‹', desc: 'РћС‚РєСЂС‹С‚С‹Рµ Рё Р·Р°РєСЂС‹С‚С‹Рµ РєРѕРјРµРґРѕРЅС‹ (С‡С‘СЂРЅС‹Рµ Рё Р±РµР»С‹Рµ С‚РѕС‡РєРё)' },
    { icon: 'solar:eye-linear', title: 'Р Р°СЃС€РёСЂРµРЅРЅС‹Рµ РїРѕСЂС‹', desc: 'Р’РёР·СѓР°Р»СЊРЅРѕ Р·Р°РјРµС‚РЅС‹Рµ, Р·Р°Р±РёС‚С‹Рµ РїРѕСЂС‹ Рў-Р·РѕРЅС‹' },
    { icon: 'solar:waterdrop-linear', title: 'Р–РёСЂРЅР°СЏ РєРѕР¶Р°', desc: 'РР·Р±С‹С‚РѕС‡РЅРѕРµ СЃР°Р»РѕРѕС‚РґРµР»РµРЅРёРµ, Р¶РёСЂРЅС‹Р№ Р±Р»РµСЃРє' },
    { icon: 'solar:pallete-2-linear', title: 'РўСѓСЃРєР»С‹Р№ С†РІРµС‚', desc: 'РЎРµСЂС‹Р№, РЅРµСЂРѕРІРЅС‹Р№ С‚РѕРЅ РєРѕР¶Рё РёР·-Р·Р° Р·Р°РіСЂСЏР·РЅРµРЅРёР№' },
    { icon: 'solar:heart-linear', title: 'РњРёР»РёСѓРјС‹', desc: 'Р‘РµР»С‹Рµ СѓР·РµР»РєРё (РїСЂРѕСЃСЏРЅРєРё), РЅРµ СѓРґР°Р»СЏРµРјС‹Рµ СЃРєСЂР°Р±Р°РјРё' },
    { icon: 'solar:shield-check-linear', title: 'РџСЂРѕС„РёР»Р°РєС‚РёРєР° Р°РєРЅРµ', desc: 'РџСЂРµРґРѕС‚РІСЂР°С‰РµРЅРёРµ РІРѕСЃРїР°Р»РёС‚РµР»СЊРЅС‹С… РІС‹СЃС‹РїР°РЅРёР№' },
  ];

  const steps = [
    { title: 'Р”РµРјР°РєРёСЏР¶', desc: 'РўС‰Р°С‚РµР»СЊРЅРѕРµ РѕС‡РёС‰РµРЅРёРµ РєРѕР¶Рё РѕС‚ РјР°РєРёСЏР¶Р°, Р·Р°РіСЂСЏР·РЅРµРЅРёР№ Рё РёР·Р±С‹С‚РєР° РєРѕР¶РЅРѕРіРѕ СЃР°Р»Р° РїСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅС‹РјРё СЃСЂРµРґСЃС‚РІР°РјРё.' },
    { title: 'РџРѕРґРіРѕС‚РѕРІРєР° РєРѕР¶Рё', desc: 'РќР°РЅРµСЃРµРЅРёРµ СЌРєСЃС„РѕР»РёР°РЅС‚Р° Рё СЂР°Р·РѕРіСЂРµРІР°СЋС‰РёС… СЃСЂРµРґСЃС‚РІ РґР»СЏ СЂР°СЃРєСЂС‹С‚РёСЏ РїРѕСЂ. РљРѕР¶Р° СЃС‚Р°РЅРѕРІРёС‚СЃСЏ РјСЏРіРєРѕР№ Рё РїРѕРґРіРѕС‚РѕРІР»РµРЅРЅРѕР№ Рє РіР»СѓР±РѕРєРѕР№ С‡РёСЃС‚РєРµ.' },
    { title: 'РЈР»СЊС‚СЂР°Р·РІСѓРєРѕРІР°СЏ С‡РёСЃС‚РєР°', desc: 'РџСЂРµРґРІР°СЂРёС‚РµР»СЊРЅР°СЏ РЈР—-РѕР±СЂР°Р±РѕС‚РєР° РєРѕР¶Рё РґР»СЏ РїРѕРІРµСЂС…РЅРѕСЃС‚РЅРѕРіРѕ РѕС‡РёС‰РµРЅРёСЏ Рё РїРѕРґРіРѕС‚РѕРІРєРё Рє РјРµС…Р°РЅРёС‡РµСЃРєРѕРјСѓ СЌС‚Р°РїСѓ вЂ” РІРєР»СЋС‡РµРЅР° РІ РїСЂРѕС†РµРґСѓСЂСѓ.' },
    { title: 'РњРµС…Р°РЅРёС‡РµСЃРєР°СЏ СЌРєСЃС‚СЂР°РєС†РёСЏ', desc: 'Р СѓС‡РЅРѕРµ СѓРґР°Р»РµРЅРёРµ РєРѕРјРµРґРѕРЅРѕРІ, РјРёР»РёСѓРјРѕРІ Рё Р·Р°РіСЂСЏР·РЅРµРЅРёР№ СЃ РїРѕРјРѕС‰СЊСЋ СЃС‚РµСЂРёР»СЊРЅРѕР№ Р»РѕР¶РєРё РЈРЅРѕ Рё РїРµС‚Р»Рё Р’РёРґР°Р»СЏ. РђРЅС‚РёСЃРµРїС‚РёС‡РµСЃРєР°СЏ РѕР±СЂР°Р±РѕС‚РєР° РїРѕСЃР»Рµ РєР°Р¶РґРѕРіРѕ СѓС‡Р°СЃС‚РєР°.' },
    { title: 'РњР°СЃРєР°', desc: 'РќР°РЅРµСЃРµРЅРёРµ Р·Р°Р¶РёРІР»СЏСЋС‰РµР№, РїРѕСЂРѕСЃСѓР¶Р°СЋС‰РµР№ РјР°СЃРєРё СЃ РїСЂРѕС‚РёРІРѕРІРѕСЃРїР°Р»РёС‚РµР»СЊРЅС‹Рј РґРµР№СЃС‚РІРёРµРј РґР»СЏ СѓСЃРїРѕРєРѕРµРЅРёСЏ Рё РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёСЏ РєРѕР¶Рё.' },
    { title: 'SPF-Р·Р°С‰РёС‚Р°', desc: 'РќР°РЅРµСЃРµРЅРёРµ СѓРІР»Р°Р¶РЅСЏСЋС‰РµРіРѕ РєСЂРµРјР° СЃ СЃРѕР»РЅС†РµР·Р°С‰РёС‚РЅС‹Рј С„Р°РєС‚РѕСЂРѕРј SPF РґР»СЏ Р·Р°С‰РёС‚С‹ РѕР±РЅРѕРІР»С‘РЅРЅРѕР№ РєРѕР¶Рё.' },
  ];

  const advantages = [
    { title: 'РњР°РєСЃРёРјР°Р»СЊРЅР°СЏ РіР»СѓР±РёРЅР°', desc: 'Р’ РѕС‚Р»РёС‡РёРµ РѕС‚ СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІРѕР№ С‡РёСЃС‚РєРё, РјРµС…Р°РЅРёС‡РµСЃРєР°СЏ РїРѕР·РІРѕР»СЏРµС‚ СѓРґР°Р»РёС‚СЊ РіР»СѓР±РѕРєРѕ Р·Р°Р»РµРіР°СЋС‰РёРµ РєРѕРјРµРґРѕРЅС‹, РєРѕС‚РѕСЂС‹Рµ РЅРµРґРѕСЃС‚СѓРїРЅС‹ РґР»СЏ Р°РїРїР°СЂР°С‚РЅС‹С… РјРµС‚РѕРґРѕРІ.' },
    { title: 'Р’РёР·СѓР°Р»СЊРЅС‹Р№ РєРѕРЅС‚СЂРѕР»СЊ', desc: 'Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі СЂР°Р±РѕС‚Р°РµС‚ РїРѕРґ СѓРІРµР»РёС‡РёС‚РµР»СЊРЅРѕР№ Р»Р°РјРїРѕР№, РєРѕРЅС‚СЂРѕР»РёСЂСѓСЏ РєР°Р¶РґС‹Р№ РјРёР»Р»РёРјРµС‚СЂ РѕР±СЂР°Р±Р°С‚С‹РІР°РµРјРѕР№ Р·РѕРЅС‹ вЂ” РЅРёС‡РµРіРѕ РЅРµ РїСЂРѕРїСѓСЃРєР°РµС‚СЃСЏ.' },
    { title: 'РњРіРЅРѕРІРµРЅРЅС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚', desc: 'РЎСЂР°Р·Сѓ РїРѕСЃР»Рµ РїСЂРѕС†РµРґСѓСЂС‹ РїРѕСЂС‹ РѕС‡РёС‰РµРЅС‹, С†РІРµС‚ Р»РёС†Р° СЃРІРµР¶РёР№, СЂРµР»СЊРµС„ СЂРѕРІРЅС‹Р№. Р§РµСЂРµР· 1вЂ“2 РґРЅСЏ РїРѕРєСЂР°СЃРЅРµРЅРёСЏ РїРѕР»РЅРѕСЃС‚СЊСЋ РїСЂРѕС…РѕРґСЏС‚.' },
    { title: 'РџСЂРѕС„РёР»Р°РєС‚РёРєР° РІРѕСЃРїР°Р»РµРЅРёР№', desc: 'Р РµРіСѓР»СЏСЂРЅР°СЏ С‡РёСЃС‚РєР° РїСЂРµРґРѕС‚РІСЂР°С‰Р°РµС‚ СЂР°Р·РІРёС‚РёРµ Р°РєРЅРµ вЂ” СѓРґР°Р»СЏРµС‚ В«РїСЂРѕР±РєРёВ» РІ РїРѕСЂР°С… РґРѕ С‚РѕРіРѕ, РєР°Рє РѕРЅРё РІРѕСЃРїР°Р»СЏС‚СЃСЏ.' },
  ];

  const prices = [
     { name: 'Процедура 1', price: 'РѕС‚ 3 500 в‚Ѕ' },
     { name: 'Процедура 1', price: 'РѕС‚ 4 500 в‚Ѕ' },
     { name: 'Процедура 1', price: 'РѕС‚ 2 000 в‚Ѕ' },
     { name: 'Процедура 1', price: 'РѕС‚ 5 000 в‚Ѕ' },
     { name: 'Процедура 1', price: 'Р‘РµСЃРїР»Р°С‚РЅРѕ' },];

  const faq = [
    { q: 'Р§РµРј РјРµС…Р°РЅРёС‡РµСЃРєР°СЏ С‡РёСЃС‚РєР° РѕС‚Р»РёС‡Р°РµС‚СЃСЏ РѕС‚ СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІРѕР№?', a: 'РЈР»СЊС‚СЂР°Р·РІСѓРєРѕРІР°СЏ С‡РёСЃС‚РєР° РґР°С‘С‚ РїРѕРІРµСЂС…РЅРѕСЃС‚РЅРѕРµ РѕС‡РёС‰РµРЅРёРµ Рё РїРѕРґС…РѕРґРёС‚ РґР»СЏ Р»С‘РіРєРёС… Р·Р°РіСЂСЏР·РЅРµРЅРёР№. РњРµС…Р°РЅРёС‡РµСЃРєР°СЏ С‡РёСЃС‚РєР° СѓРґР°Р»СЏРµС‚ РіР»СѓР±РѕРєРёРµ РєРѕРјРµРґРѕРЅС‹, РјРёР»РёСѓРјС‹ Рё РїР»РѕС‚РЅС‹Рµ СЃР°Р»СЊРЅС‹Рµ РїСЂРѕР±РєРё, РєРѕС‚РѕСЂС‹Рµ РЈР— РЅРµ СЃРїРѕСЃРѕР±РµРЅ РёР·РІР»РµС‡СЊ. РћРїС‚РёРјР°Р»СЊРЅС‹Р№ РІР°СЂРёР°РЅС‚ вЂ” РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅС‹Р№ РїРѕРґС…РѕРґ.' },
    { q: 'Р‘РѕР»СЊРЅРѕ Р»Рё РґРµР»Р°С‚СЊ РјРµС…Р°РЅРёС‡РµСЃРєСѓСЋ С‡РёСЃС‚РєСѓ?', a: 'РћС‰СѓС‰РµРЅРёСЏ Р·Р°РІРёСЃСЏС‚ РѕС‚ РєРѕР»РёС‡РµСЃС‚РІР° РІС‹СЃС‹РїР°РЅРёР№ Рё РёРЅРґРёРІРёРґСѓР°Р»СЊРЅРѕР№ С‡СѓРІСЃС‚РІРёС‚РµР»СЊРЅРѕСЃС‚Рё РєРѕР¶Рё. Р‘РѕР»СЊС€РёРЅСЃС‚РІРѕ РїР°С†РёРµРЅС‚РѕРІ РѕС†РµРЅРёРІР°СЋС‚ РїСЂРѕС†РµРґСѓСЂСѓ РєР°Рє С‚РµСЂРїРёРјСѓСЋ. РџСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё РјС‹ РёСЃРїРѕР»СЊР·СѓРµРј РѕР±РµР·Р±РѕР»РёРІР°СЋС‰РёР№ РєСЂРµРј.' },
    { q: 'РљР°Рє С‡Р°СЃС‚Рѕ РЅСѓР¶РЅРѕ РґРµР»Р°С‚СЊ С‡РёСЃС‚РєСѓ?', a: 'Р”Р»СЏ Р¶РёСЂРЅРѕР№ Рё РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅРѕР№ РєРѕР¶Рё вЂ” РєР°Р¶РґС‹Рµ 4вЂ“6 РЅРµРґРµР»СЊ. Р”Р»СЏ РЅРѕСЂРјР°Р»СЊРЅРѕР№ РєРѕР¶Рё вЂ” 1 СЂР°Р· РІ 2вЂ“3 РјРµСЃСЏС†Р°. РўРѕС‡РЅСѓСЋ РїРµСЂРёРѕРґРёС‡РЅРѕСЃС‚СЊ РѕРїСЂРµРґРµР»СЏРµС‚ РІСЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі.' },
    { q: 'РљР°РєРёРµ РѕРіСЂР°РЅРёС‡РµРЅРёСЏ РїРѕСЃР»Рµ РїСЂРѕС†РµРґСѓСЂС‹?', a: 'Р’ С‚РµС‡РµРЅРёРµ 24 С‡Р°СЃРѕРІ: РЅРµ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РґРµРєРѕСЂР°С‚РёРІРЅСѓСЋ РєРѕСЃРјРµС‚РёРєСѓ, РЅРµ С‚СЂРѕРіР°С‚СЊ Р»РёС†Рѕ СЂСѓРєР°РјРё. 3вЂ“5 РґРЅРµР№: РёР·Р±РµРіР°С‚СЊ Р±Р°РЅРё, СЃР°СѓРЅС‹, Р±Р°СЃСЃРµР№РЅР°. 7 РґРЅРµР№: РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ SPF-Р·Р°С‰РёС‚Сѓ.' },
    { q: 'РљРѕРјСѓ РїСЂРѕС‚РёРІРѕРїРѕРєР°Р·Р°РЅР° РјРµС…Р°РЅРёС‡РµСЃРєР°СЏ С‡РёСЃС‚РєР°?', a: 'Р“РµСЂРїРµСЃ РІ Р°РєС‚РёРІРЅРѕР№ С„Р°Р·Рµ, С‚СЏР¶С‘Р»Р°СЏ СЃС‚РµРїРµРЅСЊ Р°РєРЅРµ (С‚СЂРµР±СѓРµС‚ РјРµРґРёРєР°РјРµРЅС‚РѕР·РЅРѕРіРѕ Р»РµС‡РµРЅРёСЏ), РѕСЃС‚СЂС‹Рµ РєРѕР¶РЅС‹Рµ Р·Р°Р±РѕР»РµРІР°РЅРёСЏ, РїРѕРІСЂРµР¶РґРµРЅРёСЏ РєРѕР¶Рё РІ Р·РѕРЅРµ С‡РёСЃС‚РєРё, РїРѕРІС‹С€РµРЅРЅР°СЏ Р»РѕРјРєРѕСЃС‚СЊ СЃРѕСЃСѓРґРѕРІ.' },
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
              <span className="text-slate-700 font-medium">РњРµС…Р°РЅРёС‡РµСЃРєР°СЏ С‡РёСЃС‚РєР°</span>
            </div>
          </section>

          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img src="/images/services/aesthetic/mechanical-cleaning/hero.png" alt="РњРµС…Р°РЅРёС‡РµСЃРєР°СЏ С‡РёСЃС‚РєР° Р»РёС†Р° РІ РЎРєРёРЅРњРµРґ" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  Р“Р»СѓР±РѕРєРѕРµ РѕС‡РёС‰РµРЅРёРµ
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  РњРµС…Р°РЅРёС‡РµСЃРєР°СЏ <br />
                  <span className="font-serif italic text-[#60c2ff]/80">С‡РёСЃС‚РєР° Р»РёС†Р°</span>
                </h1>
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  РџСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅРѕРµ РіР»СѓР±РѕРєРѕРµ РѕС‡РёС‰РµРЅРёРµ РїРѕСЂ РѕС‚ РєРѕРјРµРґРѕРЅРѕРІ Рё Р·Р°РіСЂСЏР·РЅРµРЅРёР№. Р СѓС‡РЅР°СЏ СЂР°Р±РѕС‚Р° РІСЂР°С‡Р°-РєРѕСЃРјРµС‚РѕР»РѕРіР° СЃРѕ СЃС‚РµСЂРёР»СЊРЅС‹РјРё РёРЅСЃС‚СЂСѓРјРµРЅС‚Р°РјРё вЂ” РјР°РєСЃРёРјР°Р»СЊРЅР°СЏ С‡РёСЃС‚РѕС‚Р° Рё Р·РґРѕСЂРѕРІСЊРµ РєРѕР¶Рё.
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]">
                      Р—Р°РїРёСЃР°С‚СЊСЃСЏ РЅР° С‡РёСЃС‚РєСѓ
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Indications */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџРѕРєР°Р·Р°РЅРёСЏ</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                РљРѕРјСѓ РЅСѓР¶РЅР° <span className="font-serif italic text-slate-400">С‡РёСЃС‚РєР°</span>
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

          {/* Advantages */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџСЂРµРёРјСѓС‰РµСЃС‚РІР°</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                РџРѕС‡РµРјСѓ СЂСѓС‡РЅР°СЏ <br /> <span className="font-serif italic text-slate-400">С‡РёСЃС‚РєР°</span>
              </h2>
            </div>
            <div className="flex flex-col stagger-container">
              <EditorialList items={advantages} />
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
                    Р§РёСЃС‚Р°СЏ РєРѕР¶Р° вЂ” <br /><span className="font-serif italic text-slate-400">Р·РґРѕСЂРѕРІР°СЏ РєРѕР¶Р°</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">Р—Р°РїРёС€РёС‚РµСЃСЊ РЅР° Р±РµСЃРїР»Р°С‚РЅСѓСЋ РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЋ Рё РїРѕРґР±РµСЂРёС‚Рµ РїСЂРѕРіСЂР°РјРјСѓ РѕС‡РёС‰РµРЅРёСЏ РґР»СЏ Р’Р°С€РµРіРѕ С‚РёРїР° РєРѕР¶Рё.</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group">
                      <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                      <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3">
                        Р—Р°РїРёСЃР°С‚СЊСЃСЏ РЅР° С‡РёСЃС‚РєСѓ
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
