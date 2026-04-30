'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

export default function FaceCareClient() {

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
    { icon: 'solar:danger-triangle-linear', title: 'РљРѕРјРµРґРѕРЅС‹', desc: 'РћС‚РєСЂС‹С‚С‹Рµ Рё Р·Р°РєСЂС‹С‚С‹Рµ РєРѕРјРµРґРѕРЅС‹ вЂ” РїРµСЂРІС‹Р№ С€Р°Рі Рє РїРѕСЏРІР»РµРЅРёСЋ Р°РєРЅРµ. РџСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅР°СЏ С‡РёСЃС‚РєР° СѓРґР°Р»СЏРµС‚ РёС… Р±РµР·РѕРїР°СЃРЅРѕ.' },
    { icon: 'solar:eye-linear', title: 'Р Р°СЃС€РёСЂРµРЅРЅС‹Рµ РїРѕСЂС‹', desc: 'Р—Р°Р±РёС‚С‹Рµ РїРѕСЂС‹ РІРёР·СѓР°Р»СЊРЅРѕ СѓРІРµР»РёС‡РёРІР°СЋС‚СЃСЏ. РљРѕРјРїР»РµРєСЃРЅР°СЏ С‡РёСЃС‚РєР° СЃСѓР¶Р°РµС‚ РёС… Рё РїСЂРµРґРѕС‚РІСЂР°С‰Р°РµС‚ РїРѕРІС‚РѕСЂРЅРѕРµ Р·Р°РіСЂСЏР·РЅРµРЅРёРµ.' },
    { icon: 'solar:waterdrop-linear', title: 'Р–РёСЂРЅС‹Р№ Р±Р»РµСЃРє', desc: 'РР·Р±С‹С‚РѕС‡РЅРѕРµ СЃР°Р»РѕРѕС‚РґРµР»РµРЅРёРµ, РєРѕС‚РѕСЂРѕРµ РЅРµ РєРѕСЂСЂРµРєС‚РёСЂСѓРµС‚СЃСЏ РґРѕРјР°С€РЅРёРј СѓС…РѕРґРѕРј.' },
    { icon: 'solar:pallete-2-linear', title: 'РўСѓСЃРєР»С‹Р№ С†РІРµС‚ Р»РёС†Р°', desc: 'РЎРµСЂС‹Р№, РЅРµСЂРѕРІРЅС‹Р№ С‚РѕРЅ РёР·-Р·Р° СЃРєРѕРїР»РµРЅРёСЏ РѕСЂРѕРіРѕРІРµРІС€РёС… РєР»РµС‚РѕРє Рё Р·Р°РіСЂСЏР·РЅРµРЅРёР№.' },
    { icon: 'solar:sun-2-linear', title: 'РќРµСЂРѕРІРЅС‹Р№ СЂРµР»СЊРµС„', desc: 'РЁРµСЂРѕС…РѕРІР°С‚РѕСЃС‚СЊ, Р±СѓРіСЂРёСЃС‚РѕСЃС‚СЊ РєРѕР¶Рё, СЃР»РµРґС‹ РѕС‚ РїСЂС‹С‰РµР№.' },
    { icon: 'solar:shield-check-linear', title: 'РџСЂРѕС„РёР»Р°РєС‚РёРєР° Р°РєРЅРµ', desc: 'Р РµРіСѓР»СЏСЂРЅР°СЏ С‡РёСЃС‚РєР° РїСЂРµРґРѕС‚РІСЂР°С‰Р°РµС‚ СЂР°Р·РІРёС‚РёРµ РІРѕСЃРїР°Р»РёС‚РµР»СЊРЅС‹С… РїСЂРѕС†РµСЃСЃРѕРІ РІ РєРѕР¶Рµ.' },
  ];

  const steps = [
    { title: 'Р”РµРјР°РєРёСЏР¶', desc: 'РџСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅРѕРµ СѓРґР°Р»РµРЅРёРµ РјР°РєРёСЏР¶Р°, РїРѕРІРµСЂС…РЅРѕСЃС‚РЅС‹С… Р·Р°РіСЂСЏР·РЅРµРЅРёР№ Рё РёР·Р±С‹С‚РєР° РєРѕР¶РЅРѕРіРѕ СЃР°Р»Р° СЃРїРµС†РёР°Р»РёР·РёСЂРѕРІР°РЅРЅС‹РјРё СЃСЂРµРґСЃС‚РІР°РјРё.' },
    { title: 'Р­РєСЃС„РѕР»РёР°С†РёСЏ', desc: 'РќР°РЅРµСЃРµРЅРёРµ РјСЏРіРєРёС… СЌРєСЃС„РѕР»РёР°РЅС‚РѕРІ РґР»СЏ СѓСЃС‚СЂР°РЅРµРЅРёСЏ РѕСЂРѕРіРѕРІРµРІС€РёС… РєР»РµС‚РѕРє Рё СЃСЂРµРґСЃС‚РІ РґР»СЏ СЂР°СЃРєСЂС‹С‚РёСЏ РїРѕСЂ вЂ” РїРѕРґРіРѕС‚РѕРІРєР° Рє РіР»СѓР±РѕРєРѕРјСѓ РѕС‡РёС‰РµРЅРёСЋ.' },
    { title: 'РЈР»СЊС‚СЂР°Р·РІСѓРєРѕРІР°СЏ С‡РёСЃС‚РєР°', desc: 'Р‘РµР·Р±РѕР»РµР·РЅРµРЅРЅС‹Р№ СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІРѕР№ РїРёР»РёРЅРі РґР»СЏ РґРµР»РёРєР°С‚РЅРѕРіРѕ РѕС‡РёС‰РµРЅРёСЏ. Р’С…РѕРґРёС‚ РІ РїСЂРѕС†РµРґСѓСЂСѓ РєРѕРјРїР»РµРєСЃРЅРѕРіРѕ СѓС…РѕРґР° вЂ” РѕР±РµСЃРїРµС‡РёРІР°РµС‚ СЂР°РІРЅРѕРјРµСЂРЅСѓСЋ РїРѕРґРіРѕС‚РѕРІРєСѓ РєРѕР¶Рё.' },
    { title: 'РњРµС…Р°РЅРёС‡РµСЃРєР°СЏ С‡РёСЃС‚РєР°', desc: 'Р СѓС‡РЅРѕРµ СѓРґР°Р»РµРЅРёРµ РіР»СѓР±РѕРєРёС… РєРѕРјРµРґРѕРЅРѕРІ Рё Р·Р°РіСЂСЏР·РЅРµРЅРёР№ СЃ РїРѕРјРѕС‰СЊСЋ СЃС‚РµСЂРёР»СЊРЅРѕР№ Р»РѕР¶РєРё РЈРЅРѕ. РџРѕСЃР»Рµ РєР°Р¶РґРѕРіРѕ СѓС‡Р°СЃС‚РєР° вЂ” Р°РЅС‚РёСЃРµРїС‚РёС‡РµСЃРєР°СЏ РѕР±СЂР°Р±РѕС‚РєР°.' },
    { title: 'РњР°СЃРєР°', desc: 'РќР°РЅРµСЃРµРЅРёРµ Р·Р°Р¶РёРІР»СЏСЋС‰РµР№, РїРѕСЂРѕСЃСѓР¶Р°СЋС‰РµР№ РјР°СЃРєРё СЃ РїСЂРѕС‚РёРІРѕРІРѕСЃРїР°Р»РёС‚РµР»СЊРЅС‹Рј РґРµР№СЃС‚РІРёРµРј. РЈСЃРїРѕРєР°РёРІР°РµС‚ РєРѕР¶Сѓ Рё СѓСЃРєРѕСЂСЏРµС‚ РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёРµ.' },
    { title: 'SPF-Р·Р°С‰РёС‚Р°', desc: 'РќР°РЅРµСЃРµРЅРёРµ СѓРІР»Р°Р¶РЅСЏСЋС‰РµРіРѕ РєСЂРµРјР° СЃ С„Р°РєС‚РѕСЂРѕРј Р·Р°С‰РёС‚С‹ РѕС‚ СЃРѕР»РЅС†Р° (SPF). Р—Р°С‰РёС‚Р° РѕР±РЅРѕРІР»С‘РЅРЅРѕР№ РєРѕР¶Рё РѕС‚ С„РѕС‚РѕРїРѕРІСЂРµР¶РґРµРЅРёСЏ.' },
  ];

  const contraindications = [
    { icon: 'solar:danger-triangle-bold-duotone', title: 'Р“РµСЂРїРµСЃ', desc: 'РђРєС‚РёРІРЅР°СЏ С„Р°Р·Р° РіРµСЂРїРµС‚РёС‡РµСЃРєРѕР№ РёРЅС„РµРєС†РёРё РІ Р·РѕРЅРµ РѕР±СЂР°Р±РѕС‚РєРё' },
    { icon: 'solar:shield-warning-bold-duotone', title: 'РўСЏР¶С‘Р»Р°СЏ СЃС‚РµРїРµРЅСЊ Р°РєРЅРµ', desc: 'РўСЂРµР±СѓРµС‚СЃСЏ РѕР±СЃР»РµРґРѕРІР°РЅРёРµ Рё РјРµРґРёРєР°РјРµРЅС‚РѕР·РЅРѕРµ Р»РµС‡РµРЅРёРµ' },
    { icon: 'solar:health-bold-duotone', title: 'РћСЃС‚СЂС‹Рµ Р·Р°Р±РѕР»РµРІР°РЅРёСЏ', desc: 'РћР±РѕСЃС‚СЂРµРЅРёРµ С…СЂРѕРЅРёС‡РµСЃРєРёС… Р·Р°Р±РѕР»РµРІР°РЅРёР№ РєРѕР¶Рё РёР»Рё РѕР±С‰РёС… Р·Р°Р±РѕР»РµРІР°РЅРёР№' },
  ];

  const prices = [
     { name: 'Процедура 1', price: 'РѕС‚ 4 500 в‚Ѕ' },
     { name: 'Процедура 1', price: 'РѕС‚ 7 000 в‚Ѕ' },
     { name: 'Процедура 1', price: 'РѕС‚ 2 500 в‚Ѕ' },
     { name: 'Процедура 1', price: 'РѕС‚ 3 000 в‚Ѕ' },
     { name: 'Процедура 1', price: 'Р‘РµСЃРїР»Р°С‚РЅРѕ' },];

  const faq = [
    { q: 'РљР°Рє РїСЂРѕС…РѕРґРёС‚ С‡РёСЃС‚РєР° Р»РёС†Р°?', a: 'РџСЂРѕС†РµРґСѓСЂР° СЃРѕСЃС‚РѕРёС‚ РёР· 6 СЌС‚Р°РїРѕРІ: РґРµРјР°РєРёСЏР¶, СЌРєСЃС„РѕР»РёР°С†РёСЏ РґР»СЏ СЂР°СЃРєСЂС‹С‚РёСЏ РїРѕСЂ, СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІР°СЏ С‡РёСЃС‚РєР°, РјРµС…Р°РЅРёС‡РµСЃРєР°СЏ С‡РёСЃС‚РєР° Р»РѕР¶РєРѕР№ РЈРЅРѕ, Р·Р°Р¶РёРІР»СЏСЋС‰Р°СЏ РјР°СЃРєР° Рё РЅР°РЅРµСЃРµРЅРёРµ SPF-РєСЂРµРјР°. РљР°Р¶РґС‹Р№ СЌС‚Р°Рї С‚С‰Р°С‚РµР»СЊРЅРѕ РІС‹РїРѕР»РЅСЏРµС‚СЃСЏ РІСЂР°С‡РѕРј-РєРѕСЃРјРµС‚РѕР»РѕРіРѕРј.' },
    { q: 'РњРѕР¶РЅРѕ Р»Рё Р·Р°РјРµРЅРёС‚СЊ С‡РёСЃС‚РєСѓ Сѓ РєРѕСЃРјРµС‚РѕР»РѕРіР° РЅР° РґРѕРјР°С€РЅРёР№ СѓС…РѕРґ?', a: 'Р”РѕРјР°С€РЅРёР№ СѓС…РѕРґ вЂ” РІР°Р¶РЅР°СЏ С‡Р°СЃС‚СЊ РїРѕРґРґРµСЂР¶Р°РЅРёСЏ СЂРµР·СѓР»СЊС‚Р°С‚Р°, РЅРѕ РїРѕР»РЅРѕС†РµРЅРЅСѓСЋ Р·Р°РјРµРЅСѓ РїСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅРѕР№ С‡РёСЃС‚РєРµ РѕРЅ РЅРµ СЃРѕСЃС‚Р°РІРёС‚. РљРѕСЃРјРµС‚РѕР»РѕРі СѓРґР°Р»СЏРµС‚ РіР»СѓР±РѕРєРёРµ Р·Р°РіСЂСЏР·РЅРµРЅРёСЏ, РєРѕС‚РѕСЂС‹Рµ РЅРµРІРѕР·РјРѕР¶РЅРѕ РёР·РІР»РµС‡СЊ СЃРєСЂР°Р±Р°РјРё Рё РјР°СЃРєР°РјРё РІ РґРѕРјР°С€РЅРёС… СѓСЃР»РѕРІРёСЏС….' },
    { q: 'РљР°РєР°СЏ С‡РёСЃС‚РєР° Р»СѓС‡С€Рµ вЂ” РјРµС…Р°РЅРёС‡РµСЃРєР°СЏ РёР»Рё СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІР°СЏ?', a: 'Р­С‚Рѕ РЅРµ РІР·Р°РёРјРѕРёСЃРєР»СЋС‡Р°СЋС‰РёРµ РїСЂРѕС†РµРґСѓСЂС‹, Р° РґРѕРїРѕР»РЅСЏСЋС‰РёРµ РґСЂСѓРі РґСЂСѓРіР°. РЈР»СЊС‚СЂР°Р·РІСѓРєРѕРІР°СЏ С‡РёСЃС‚РєР° СЌС„С„РµРєС‚РёРІРЅР° РґР»СЏ РїРѕРІРµСЂС…РЅРѕСЃС‚РЅС‹С… Р·Р°РіСЂСЏР·РЅРµРЅРёР№, Р° РјРµС…Р°РЅРёС‡РµСЃРєР°СЏ вЂ” РґР»СЏ РіР»СѓР±РѕРєРёС… РєРѕРјРµРґРѕРЅРѕРІ. РРјРµРЅРЅРѕ РїРѕСЌС‚РѕРјСѓ РЅР°С€ РєРѕРјРїР»РµРєСЃРЅС‹Р№ СѓС…РѕРґ РІРєР»СЋС‡Р°РµС‚ РѕР±Р° РјРµС‚РѕРґР°.' },
    { q: 'РџРѕСЃР»Рµ С‡РёСЃС‚РєРё РѕСЃС‚Р°СЋС‚СЃСЏ СЂР°СЃС€РёСЂРµРЅРЅС‹Рµ РїРѕСЂС‹?', a: 'РќРµС‚. Р—Р°РІРµСЂС€Р°СЋС‰РёР№ СЌС‚Р°Рї РїСЂРѕС†РµРґСѓСЂС‹ вЂ” РЅР°РЅРµСЃРµРЅРёРµ РїРѕСЂРѕСЃСѓР¶Р°СЋС‰РµР№ РјР°СЃРєРё СЃ РїСЂРѕС‚РёРІРѕРІРѕСЃРїР°Р»РёС‚РµР»СЊРЅС‹Рј РґРµР№СЃС‚РІРёРµРј. РћРЅР° СЃСѓР¶Р°РµС‚ РѕС‡РёС‰РµРЅРЅС‹Рµ РїРѕСЂС‹ Рё РїСЂРµРґРѕС‚РІСЂР°С‰Р°РµС‚ РёС… РїРѕРІС‚РѕСЂРЅРѕРµ Р·Р°РіСЂСЏР·РЅРµРЅРёРµ РІ РїРµСЂРІС‹Рµ С‡Р°СЃС‹.' },
    { q: 'РљР°Рє С‡Р°СЃС‚Рѕ РЅСѓР¶РЅРѕ РґРµР»Р°С‚СЊ С‡РёСЃС‚РєСѓ?', a: 'Р”Р»СЏ Р¶РёСЂРЅРѕР№ Рё РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅРѕР№ РєРѕР¶Рё вЂ” РєР°Р¶РґС‹Рµ 4вЂ“6 РЅРµРґРµР»СЊ. Р”Р»СЏ РЅРѕСЂРјР°Р»СЊРЅРѕР№ Рё СЃСѓС…РѕР№ РєРѕР¶Рё вЂ” 1 СЂР°Р· РІ 2вЂ“3 РјРµСЃСЏС†Р°. Р§Р°СЃС‚РѕС‚Сѓ СЃРєРѕСЂСЂРµРєС‚РёСЂСѓРµС‚ РІСЂР°С‡ РЅР° РєРѕРЅСЃСѓР»СЊС‚Р°С†РёРё.' },
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
              <span className="text-slate-700 font-medium">РЈС…РѕРґ Р·Р° Р»РёС†РѕРј</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img src="/images/services/aesthetic/face-care/hero.png" alt="РџСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅС‹Р№ СѓС…РѕРґ Р·Р° Р»РёС†РѕРј РІ РЎРєРёРЅРњРµРґ" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  РљРѕРјРїР»РµРєСЃРЅС‹Р№ 6-СЌС‚Р°РїРЅС‹Р№ СѓС…РѕРґ
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  РЈС…РѕРґ Р·Р° <br />
                  <span className="font-serif italic text-[#60c2ff]/80">Р»РёС†РѕРј</span>
                </h1>
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  РџСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅР°СЏ С‡РёСЃС‚РєР° Рё СѓС…РѕРґ Р·Р° РєРѕР¶РµР№ РІ 6 СЌС‚Р°РїРѕРІ: РѕС‚ РґРµР»РёРєР°С‚РЅРѕРіРѕ РґРµРјР°РєРёСЏР¶Р° РґРѕ Р·Р°С‰РёС‚РЅРѕРіРѕ SPF. Р”РµР»РёРєР°С‚РЅРѕ РѕС‡РёС‰Р°РµРј Р»РёС†Рѕ РѕС‚ РїСЂС‹С‰РµР№ Рё С‡С‘СЂРЅС‹С… С‚РѕС‡РµРє вЂ” РІРёРґРёРјС‹Р№ СЌС„С„РµРєС‚ РїРѕСЃР»Рµ 1 РїСЂРѕС†РµРґСѓСЂС‹.
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
                РљРѕРіРґР° РЅСѓР¶РЅР° <span className="font-serif italic text-slate-400">С‡РёСЃС‚РєР°</span>
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

          {/* Process Image + About */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto reveal-up opacity-0">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg">
                <img src="/images/services/aesthetic/face-care/process.png" alt="РџСЂРѕС†РµРґСѓСЂР° С‡РёСЃС‚РєРё Р»РёС†Р°" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div>
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі</span>
                <h2 className="text-[3rem] sm:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                  РџСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅС‹Р№ <span className="font-serif italic text-slate-400">СѓС…РѕРґ</span>
                </h2>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed mb-4">
                  РџСЂРѕС†РµРґСѓСЂР° С‡РёСЃС‚РєРё Р»РёС†Р° РїСЂРѕРІРѕРґРёС‚СЃСЏ СЃ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРµРј РїСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅС‹С… СѓС…РѕРґРѕРІС‹С… СЃСЂРµРґСЃС‚РІ Рё РїСЂРµРїР°СЂР°С‚РѕРІ. Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі <span className="font-medium text-[#60c2ff]">Р›РёР»РёСЏ Р’Р°Р»РµРµРІР°</span> РїРѕРґР±РёСЂР°РµС‚ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Р№ РїСЂРѕС‚РѕРєРѕР» РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ С‚РёРїР° РєРѕР¶Рё.
                </p>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">
                  Р”РѕРјР°С€РЅРёР№ СѓС…РѕРґ вЂ” РІР°Р¶РЅР°СЏ С‡Р°СЃС‚СЊ РїРѕРґРґРµСЂР¶Р°РЅРёСЏ СЂРµР·СѓР»СЊС‚Р°С‚Р°, РЅРѕ РїРѕР»РЅРѕС†РµРЅРЅСѓСЋ Р·Р°РјРµРЅСѓ РїСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅРѕР№ С‡РёСЃС‚РєРµ РѕРЅ РЅРµ СЃРѕСЃС‚Р°РІРёС‚. РљРѕСЃРјРµС‚РѕР»РѕРі СѓРґР°Р»СЏРµС‚ РіР»СѓР±РѕРєРёРµ Р·Р°РіСЂСЏР·РЅРµРЅРёСЏ, РєРѕС‚РѕСЂС‹Рµ РЅРµРІРѕР·РјРѕР¶РЅРѕ РёР·РІР»РµС‡СЊ СЃРєСЂР°Р±Р°РјРё Рё РјР°СЃРєР°РјРё РІ РґРѕРјР°С€РЅРёС… СѓСЃР»РѕРІРёСЏС….
                </p>
              </div>
            </div>
          </section>

          {/* Before/After */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0">
            <div className="mb-16 text-center">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р­С„С„РµРєС‚</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Р РµР·СѓР»СЊС‚Р°С‚ <span className="font-serif italic text-slate-400">С‡РёСЃС‚РєРё</span>
              </h2>
            </div>
            <div className="max-w-5xl mx-auto flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg group flex-1">
                  <img src="/images/services/aesthetic/face-care/before.png" alt="Р”Рѕ С‡РёСЃС‚РєРё" className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                  <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur text-sm px-4 py-2 rounded-full font-medium">Р”Рѕ</div>
                </div>
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg group flex-1">
                  <img src="/images/services/aesthetic/face-care/after.png" alt="РџРѕСЃР»Рµ С‡РёСЃС‚РєРё" className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                  <div className="absolute bottom-4 right-4 bg-[#60c2ff]/90 text-white text-sm px-4 py-2 rounded-full font-medium">РџРѕСЃР»Рµ</div>
                </div>
              </div>
              <p className="text-center text-base text-slate-600 font-light">Р РµР·СѓР»СЊС‚Р°С‚ РїРѕСЃР»Рµ 1 РєРѕРјРїР»РµРєСЃРЅРѕР№ С‡РёСЃС‚РєРё вЂ” РѕС‡РёС‰РµРЅРЅС‹Рµ РїРѕСЂС‹, СЂРѕРІРЅС‹Р№ С‚РѕРЅ, Р·РґРѕСЂРѕРІРѕРµ СЃРёСЏРЅРёРµ</p>
            </div>
          </section>

          {/* Steps */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” 6 СЌС‚Р°РїРѕРІ</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                РљР°Рє РїСЂРѕС…РѕРґРёС‚ <br /> <span className="font-serif italic text-slate-400">РїСЂРѕС†РµРґСѓСЂР°</span>
              </h2>
            </div>
            <div className="flex flex-col stagger-container">
              <EditorialList items={steps} />
            </div>
          </section>

          {/* Contraindications */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџСЂРѕС‚РёРІРѕРїРѕРєР°Р·Р°РЅРёСЏ</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                РљРѕРіРґР° СЃС‚РѕРёС‚ <span className="font-serif italic text-slate-400">РїРѕРґРѕР¶РґР°С‚СЊ</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 stagger-container max-w-5xl mx-auto">
              {contraindications.map((item, index) => (
                <div key={index} className="group bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] stagger-item opacity-0 scroll-glow-item">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                    <Icon icon={item.icon} className="text-3xl text-red-400" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-base text-slate-600 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
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
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” 5 РІРѕРїСЂРѕСЃРѕРІ РІСЂР°С‡Сѓ</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Р§Р°СЃС‚С‹Рµ <span className="font-serif italic text-slate-400">РІРѕРїСЂРѕСЃС‹</span>
              </h2>
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
                    Р§РёСЃС‚Р°СЏ, СЃРёСЏСЋС‰Р°СЏ <br /><span className="font-serif italic text-slate-400">РєРѕР¶Р°</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">Р—Р°РїРёС€РёС‚РµСЃСЊ РЅР° Р±РµСЃРїР»Р°С‚РЅСѓСЋ РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЋ. Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі РѕС†РµРЅРёС‚ СЃРѕСЃС‚РѕСЏРЅРёРµ РєРѕР¶Рё Рё РїРѕРґР±РµСЂС‘С‚ РѕРїС‚РёРјР°Р»СЊРЅСѓСЋ РїСЂРѕРіСЂР°РјРјСѓ СѓС…РѕРґР°.</p>
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
                    <Icon icon="solar:heart-bold-duotone" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" />
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
