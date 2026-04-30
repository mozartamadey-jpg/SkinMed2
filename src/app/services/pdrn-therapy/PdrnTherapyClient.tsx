'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

export default function PdrnTherapyClient() {

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
    { icon: 'solar:pallete-2-linear', title: 'Р’РѕР·СЂР°СЃС‚РЅС‹Рµ РёР·РјРµРЅРµРЅРёСЏ', desc: 'РњРѕСЂС‰РёРЅС‹, СЃРЅРёР¶РµРЅРёРµ С‚СѓСЂРіРѕСЂР°, РїРѕС‚РµСЂСЏ С‡С‘С‚РєРѕРіРѕ РѕРІР°Р»Р°' },
    { icon: 'solar:sun-2-linear', title: 'Р¤РѕС‚РѕРїРѕРІСЂРµР¶РґРµРЅРёРµ', desc: 'РџРёРіРјРµРЅС‚Р°С†РёСЏ, СЃСѓС…РѕСЃС‚СЊ, РґСЂСЏР±Р»РѕСЃС‚СЊ РїРѕСЃР»Рµ СЃРѕР»РЅРµС‡РЅРѕРіРѕ РІРѕР·РґРµР№СЃС‚РІРёСЏ' },
    { icon: 'solar:heart-linear', title: 'Р СѓР±С†С‹ Рё РїРѕСЃС‚Р°РєРЅРµ', desc: 'РђС‚СЂРѕС„РёС‡РµСЃРєРёРµ СЂСѓР±С†С‹, РЅРµСЂРѕРІРЅС‹Р№ СЂРµР»СЊРµС„ РєРѕР¶Рё' },
    { icon: 'solar:waterdrop-linear', title: 'РћР±РµР·РІРѕР¶РµРЅРЅР°СЏ РєРѕР¶Р°', desc: 'РҐСЂРѕРЅРёС‡РµСЃРєР°СЏ СЃСѓС…РѕСЃС‚СЊ, С‚СѓСЃРєР»РѕСЃС‚СЊ, РјРµР»РєРёРµ РјРѕСЂС‰РёРЅС‹' },
    { icon: 'solar:eye-linear', title: 'РўС‘РјРЅС‹Рµ РєСЂСѓРіРё', desc: 'РџРµСЂРёРѕСЂР±РёС‚Р°Р»СЊРЅР°СЏ Р·РѕРЅР°: РѕС‚С‘С‡РЅРѕСЃС‚СЊ, В«СѓСЃС‚Р°РІС€РёР№В» РІРёРґ' },
    { icon: 'solar:medical-kit-linear', title: 'Р РµР°Р±РёР»РёС‚Р°С†РёСЏ', desc: 'Р’РѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёРµ РїРѕСЃР»Рµ Р»Р°Р·РµСЂРЅС‹С… РїСЂРѕС†РµРґСѓСЂ Рё РїРёР»РёРЅРіРѕРІ' },
  ];

  const mechanism = [
    { title: 'РђРєС‚РёРІР°С†РёСЏ С„РёР±СЂРѕР±Р»Р°СЃС‚РѕРІ', desc: 'PDRN СЃС‚РёРјСѓР»РёСЂСѓРµС‚ СЂРµС†РµРїС‚РѕСЂС‹ A2A РЅР° РїРѕРІРµСЂС…РЅРѕСЃС‚Рё С„РёР±СЂРѕР±Р»Р°СЃС‚РѕРІ, Р·Р°РїСѓСЃРєР°СЏ СѓСЃРёР»РµРЅРЅС‹Р№ СЃРёРЅС‚РµР· РєРѕР»Р»Р°РіРµРЅР° I Рё III С‚РёРїР°, СЌР»Р°СЃС‚РёРЅР° Рё РіРёР°Р»СѓСЂРѕРЅРѕРІРѕР№ РєРёСЃР»РѕС‚С‹.' },
    { title: 'РџСЂРѕС‚РёРІРѕРІРѕСЃРїР°Р»РёС‚РµР»СЊРЅРѕРµ РґРµР№СЃС‚РІРёРµ', desc: 'Р‘Р»РѕРєРёСЂСѓРµС‚ РїСЂРѕРІРѕСЃРїР°Р»РёС‚РµР»СЊРЅС‹Рµ С†РёС‚РѕРєРёРЅС‹ (TNF-О±, IL-6), СЃРЅРёР¶Р°СЏ С…СЂРѕРЅРёС‡РµСЃРєРѕРµ РІРѕСЃРїР°Р»РµРЅРёРµ вЂ” РіР»Р°РІРЅС‹Р№ РґСЂР°Р№РІРµСЂ РїСЂРµР¶РґРµРІСЂРµРјРµРЅРЅРѕРіРѕ СЃС‚Р°СЂРµРЅРёСЏ РєРѕР¶Рё.' },
    { title: 'РђРЅРіРёРѕРіРµРЅРµР·', desc: 'РЎС‚РёРјСѓР»РёСЂСѓРµС‚ РѕР±СЂР°Р·РѕРІР°РЅРёРµ РЅРѕРІС‹С… РєР°РїРёР»Р»СЏСЂРѕРІ (VEGF), СѓР»СѓС‡С€Р°СЏ РјРёРєСЂРѕС†РёСЂРєСѓР»СЏС†РёСЋ, РїРёС‚Р°РЅРёРµ С‚РєР°РЅРµР№ Рё РґРѕСЃС‚Р°РІРєСѓ РєРёСЃР»РѕСЂРѕРґР° Рє РєР»РµС‚РєР°Рј РєРѕР¶Рё.' },
    { title: 'Р РµРїР°СЂР°С†РёСЏ Р”РќРљ', desc: 'РџРѕР»РёРЅСѓРєР»РµРѕС‚РёРґС‹ СЃР»СѓР¶Р°С‚ В«СЃС‚СЂРѕРёС‚РµР»СЊРЅС‹Рј РјР°С‚РµСЂРёР°Р»РѕРјВ» РґР»СЏ РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёСЏ РїРѕРІСЂРµР¶РґС‘РЅРЅС‹С… СѓС‡Р°СЃС‚РєРѕРІ РєР»РµС‚РѕС‡РЅРѕР№ Р”РќРљ, Р·Р°РјРµРґР»СЏСЏ Р±РёРѕР»РѕРіРёС‡РµСЃРєРѕРµ СЃС‚Р°СЂРµРЅРёРµ.' },
    { title: 'РђРЅС‚РёРѕРєСЃРёРґР°РЅС‚РЅР°СЏ Р·Р°С‰РёС‚Р°', desc: 'РќРµР№С‚СЂР°Р»РёР·СѓРµС‚ СЃРІРѕР±РѕРґРЅС‹Рµ СЂР°РґРёРєР°Р»С‹ (ROS), Р·Р°С‰РёС‰Р°СЏ РєР»РµС‚РєРё РѕС‚ РѕРєСЃРёРґР°С‚РёРІРЅРѕРіРѕ СЃС‚СЂРµСЃСЃР° вЂ” РѕСЃРЅРѕРІРЅРѕР№ РїСЂРёС‡РёРЅС‹ РґРµРіСЂР°РґР°С†РёРё РєРѕР»Р»Р°РіРµРЅРѕРІС‹С… РІРѕР»РѕРєРѕРЅ.' },
  ];

  const steps = [
    { title: 'РљРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ', desc: 'Р’СЂР°С‡ РѕС†РµРЅРёРІР°РµС‚ Р±РёРѕР»РѕРіРёС‡РµСЃРєРёР№ РІРѕР·СЂР°СЃС‚ РєРѕР¶Рё, РѕРїСЂРµРґРµР»СЏРµС‚ Р·РѕРЅС‹ РІРѕР·РґРµР№СЃС‚РІРёСЏ Рё РїРѕРґР±РёСЂР°РµС‚ РѕРїС‚РёРјР°Р»СЊРЅСѓСЋ РєРѕРЅС†РµРЅС‚СЂР°С†РёСЋ Рё РѕР±СЉС‘Рј РїСЂРµРїР°СЂР°С‚Р°.' },
    { title: 'РћС‡РёС‰РµРЅРёРµ', desc: 'РўС‰Р°С‚РµР»СЊРЅС‹Р№ РґРµРјР°РєРёСЏР¶ Рё Р°РЅС‚РёСЃРµРїС‚РёС‡РµСЃРєР°СЏ РѕР±СЂР°Р±РѕС‚РєР° РєРѕР¶Рё. РќР°РЅРµСЃРµРЅРёРµ С‚РѕРїРёС‡РµСЃРєРѕРіРѕ Р°РЅРµСЃС‚РµС‚РёРєР° РЅР° 15вЂ“20 РјРёРЅСѓС‚.' },
    { title: 'РРЅСЉРµРєС†РёРё PDRN', desc: 'РњРёРєСЂРѕРЅРёРґР»РёРЅРі-С‚РµС…РЅРёРєР° РІРІРµРґРµРЅРёСЏ РїСЂРµРїР°СЂР°С‚Р° РЅР° РѕСЃРЅРѕРІРµ РїРѕР»РёРЅСѓРєР»РµРѕС‚РёРґРѕРІ вЂ” СЂР°РІРЅРѕРјРµСЂРЅРѕРµ СЂР°СЃРїСЂРµРґРµР»РµРЅРёРµ РїРѕ РІСЃРµР№ Р·РѕРЅРµ РѕР±СЂР°Р±РѕС‚РєРё СЃ РїРѕРјРѕС‰СЊСЋ РјРµР·РѕРёРіР»С‹ 30G.' },
    { title: 'Р—Р°РІРµСЂС€Р°СЋС‰РёР№ СѓС…РѕРґ', desc: 'РќР°РЅРµСЃРµРЅРёРµ СЂРµРіРµРЅРµСЂРёСЂСѓСЋС‰РµР№ РјР°СЃРєРё Рё SPF-Р·Р°С‰РёС‚С‹. Р’СЂР°С‡ СЃРѕСЃС‚Р°РІР»СЏРµС‚ РїР»Р°РЅ РґР°Р»СЊРЅРµР№С€РёС… РїСЂРѕС†РµРґСѓСЂ Рё РґР°С‘С‚ СЂРµРєРѕРјРµРЅРґР°С†РёРё РїРѕ РґРѕРјР°С€РЅРµРјСѓ СѓС…РѕРґСѓ.' },
  ];

  const prices = [
     { name: 'Процедура 1', price: 'РѕС‚ 9 000 в‚Ѕ' },
     { name: 'Процедура 1', price: 'РѕС‚ 14 000 в‚Ѕ' },
     { name: 'Процедура 1', price: 'РѕС‚ 18 000 в‚Ѕ' },
     { name: 'Процедура 1', price: 'РѕС‚ 7 000 в‚Ѕ' },
     { name: 'Процедура 1', price: 'РѕС‚ 8 000 в‚Ѕ' },
     { name: 'Процедура 1', price: 'Р‘РµСЃРїР»Р°С‚РЅРѕ' },];

  const faq = [
    { q: 'Р§С‚Рѕ С‚Р°РєРѕРµ PDRN Рё РєР°Рє СЌС‚Рѕ СЂР°Р±РѕС‚Р°РµС‚?', a: 'PDRN (РїРѕР»РёРґРµР·РѕРєСЃРёСЂРёР±РѕРЅСѓРєР»РµРѕС‚РёРґ) вЂ” С„СЂР°РіРјРµРЅС‚С‹ Р”РќРљ, РїРѕР»СѓС‡РµРЅРЅС‹Рµ РёР· РјРѕР»РѕРє Р»РѕСЃРѕСЃСЏ РјРµС‚РѕРґРѕРј РІС‹СЃРѕРєРѕР№ РѕС‡РёСЃС‚РєРё. РћРЅРё Р°РєС‚РёРІРёСЂСѓСЋС‚ Р°РґРµРЅРѕР·РёРЅРѕРІС‹Рµ СЂРµС†РµРїС‚РѕСЂС‹ A2A РІ РєР»РµС‚РєР°С… РєРѕР¶Рё, Р·Р°РїСѓСЃРєР°СЏ РµСЃС‚РµСЃС‚РІРµРЅРЅС‹Рµ РїСЂРѕС†РµСЃСЃС‹ РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёСЏ Рё РѕРјРѕР»РѕР¶РµРЅРёСЏ.' },
    { q: 'Р§РµРј PDRN РѕС‚Р»РёС‡Р°РµС‚СЃСЏ РѕС‚ Р±РёРѕСЂРµРІРёС‚Р°Р»РёР·Р°С†РёРё?', a: 'Р‘РёРѕСЂРµРІРёС‚Р°Р»РёР·Р°С†РёСЏ СѓРІР»Р°Р¶РЅСЏРµС‚ РєРѕР¶Сѓ РіРёР°Р»СѓСЂРѕРЅРѕРІРѕР№ РєРёСЃР»РѕС‚РѕР№. PDRN СЂР°Р±РѕС‚Р°РµС‚ РіР»СѓР±Р¶Рµ вЂ” РЅР° СѓСЂРѕРІРЅРµ РєР»РµС‚РѕС‡РЅРѕР№ Р”РќРљ, СЃС‚РёРјСѓР»РёСЂСѓСЏ СЂРµРіРµРЅРµСЂР°С†РёСЋ С‚РєР°РЅРµР№, СЃРёРЅС‚РµР· СЃРѕР±СЃС‚РІРµРЅРЅРѕРіРѕ РєРѕР»Р»Р°РіРµРЅР° Рё СѓР»СѓС‡С€РµРЅРёРµ РјРёРєСЂРѕС†РёСЂРєСѓР»СЏС†РёРё. РџСЂРѕС†РµРґСѓСЂС‹ РїСЂРµРєСЂР°СЃРЅРѕ СЃРѕС‡РµС‚Р°СЋС‚СЃСЏ.' },
    { q: 'РЎРєРѕР»СЊРєРѕ РїСЂРѕС†РµРґСѓСЂ РЅРµРѕР±С…РѕРґРёРјРѕ?', a: 'Р‘Р°Р·РѕРІС‹Р№ РєСѓСЂСЃ вЂ” 3вЂ“4 РїСЂРѕС†РµРґСѓСЂС‹ СЃ РёРЅС‚РµСЂРІР°Р»РѕРј 2вЂ“3 РЅРµРґРµР»Рё. Р”Р»СЏ РїРѕРґРґРµСЂР¶Р°РЅРёСЏ СЂРµР·СѓР»СЊС‚Р°С‚Р° СЂРµРєРѕРјРµРЅРґСѓРµС‚СЃСЏ 1 СЃРµР°РЅСЃ РєР°Р¶РґС‹Рµ 3вЂ“4 РјРµСЃСЏС†Р°. Р РµР·СѓР»СЊС‚Р°С‚ РЅР°СЂР°СЃС‚Р°РµС‚ РІ С‚РµС‡РµРЅРёРµ 4вЂ“6 РЅРµРґРµР»СЊ РїРѕСЃР»Рµ РєР°Р¶РґРѕР№ РїСЂРѕС†РµРґСѓСЂС‹.' },
    { q: 'Р‘РµР·РѕРїР°СЃРЅР° Р»Рё PDRN-С‚РµСЂР°РїРёСЏ?', a: 'РђР±СЃРѕР»СЋС‚РЅРѕ. РџСЂРµРїР°СЂР°С‚С‹ РїСЂРѕС…РѕРґСЏС‚ РјРЅРѕРіРѕСЃС‚СѓРїРµРЅС‡Р°С‚СѓСЋ РѕС‡РёСЃС‚РєСѓ Рё СЃС‚РµСЂРёР»РёР·Р°С†РёСЋ. Р—Р° Р±РѕР»РµРµ С‡РµРј 30 Р»РµС‚ РїСЂРёРјРµРЅРµРЅРёСЏ РІ РјРµРґРёС†РёРЅРµ РЅРµ Р·Р°С„РёРєСЃРёСЂРѕРІР°РЅРѕ РЅРё РѕРґРЅРѕРіРѕ СЃР»СѓС‡Р°СЏ Р°Р»Р»РµСЂРіРёС‡РµСЃРєРѕР№ СЂРµР°РєС†РёРё РёР»Рё РёРјРјСѓРЅРЅРѕРіРѕ РѕС‚РІРµС‚Р° РЅР° PDRN.' },
    { q: 'РљР°РєРѕР№ РїРµСЂРёРѕРґ РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёСЏ?', a: 'РњРёРЅРёРјР°Р»СЊРЅС‹Р№ вЂ” Р»С‘РіРєРѕРµ РїРѕРєСЂР°СЃРЅРµРЅРёРµ Рё С‚РѕС‡РµС‡РЅС‹Рµ СЃР»РµРґС‹ РѕС‚ РёРЅСЉРµРєС†РёР№ РїСЂРѕС…РѕРґСЏС‚ Р·Р° 1вЂ“2 РґРЅСЏ. РњР°РєРёСЏР¶ РјРѕР¶РЅРѕ РЅР°РЅРѕСЃРёС‚СЊ РЅР° СЃР»РµРґСѓСЋС‰РёР№ РґРµРЅСЊ. Р РµРєРѕРјРµРЅРґСѓРµС‚СЃСЏ РёР·Р±РµРіР°С‚СЊ Р±Р°РЅРё, СЃР°СѓРЅС‹ Рё СЃРѕР»РЅС†Р° РІ С‚РµС‡РµРЅРёРµ 3 РґРЅРµР№.' },
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
              <a href="/services/injection" className="hover:text-[#60c2ff] transition-colors duration-300">РРЅСЉРµРєС†РёРѕРЅРЅР°СЏ РєРѕСЃРјРµС‚РѕР»РѕРіРёСЏ</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">PDRN-С‚РµСЂР°РїРёСЏ</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img src="/images/services/pdrn-therapy/hero.png" alt="PDRN-С‚РµСЂР°РїРёСЏ РїРѕР»РёРЅСѓРєР»РµРѕС‚РёРґР°РјРё РІ РЎРєРёРЅРњРµРґ" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  Р РµРіРµРЅРµСЂР°С†РёСЏ РЅР° СѓСЂРѕРІРЅРµ Р”РќРљ
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  PDRN <br />
                  <span className="font-serif italic text-[#60c2ff]/80">С‚РµСЂР°РїРёСЏ</span>
                </h1>
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  РРЅРЅРѕРІР°С†РёРѕРЅРЅР°СЏ РїСЂРѕС†РµРґСѓСЂР° РЅР° РѕСЃРЅРѕРІРµ РїРѕР»РёРЅСѓРєР»РµРѕС‚РёРґРѕРІ вЂ” С„СЂР°РіРјРµРЅС‚РѕРІ Р”РќРљ Р»РѕСЃРѕСЃСЏ. Р’РѕСЃСЃС‚Р°РЅР°РІР»РёРІР°РµС‚ РєРѕР¶Сѓ РЅР° РєР»РµС‚РѕС‡РЅРѕРј СѓСЂРѕРІРЅРµ, СЃС‚РёРјСѓР»РёСЂСѓСЏ СЂРµРіРµРЅРµСЂР°С†РёСЋ, РЅРµРѕРєРѕР»Р»Р°РіРµРЅРѕРіРµРЅРµР· Рё Р°РЅРіРёРѕРіРµРЅРµР·.
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]">
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
                  Р§С‚Рѕ С‚Р°РєРѕРµ <span className="font-serif italic text-slate-400">PDRN</span>
                </h2>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed mb-6">
                  <span className="font-medium text-[#60c2ff]">PDRN</span> (РїРѕР»РёРґРµР·РѕРєСЃРёСЂРёР±РѕРЅСѓРєР»РµРѕС‚РёРґ) вЂ” СЌС‚Рѕ РѕС‡РёС‰РµРЅРЅС‹Рµ С„СЂР°РіРјРµРЅС‚С‹ Р”РќРљ, РїРѕР»СѓС‡РµРЅРЅС‹Рµ РёР· РјРѕР»РѕРє Р»РѕСЃРѕСЃСЏ. РЈРЅРёРєР°Р»СЊРЅР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР° СЌС‚РёС… РјРѕР»РµРєСѓР» РЅР° 95% СЃРѕРІРїР°РґР°РµС‚ СЃ С‡РµР»РѕРІРµС‡РµСЃРєРѕР№ Р”РќРљ, С‡С‚Рѕ РѕР±РµСЃРїРµС‡РёРІР°РµС‚ РїРѕР»РЅСѓСЋ Р±РёРѕСЃРѕРІРјРµСЃС‚РёРјРѕСЃС‚СЊ.
                </p>
                <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">
                  Р’ РѕС‚Р»РёС‡РёРµ РѕС‚ С„РёР»Р»РµСЂРѕРІ Рё СѓРІР»Р°Р¶РЅСЏСЋС‰РёС… РёРЅСЉРµРєС†РёР№, PDRN СЂР°Р±РѕС‚Р°РµС‚ РЅР° РіР»СѓР±РёРЅРЅРѕРј РєР»РµС‚РѕС‡РЅРѕРј СѓСЂРѕРІРЅРµ вЂ” Р°РєС‚РёРІРёСЂСѓРµС‚ Р°РґРµРЅРѕР·РёРЅРѕРІС‹Рµ СЂРµС†РµРїС‚РѕСЂС‹, Р·Р°РїСѓСЃРєР°СЋС‰РёРµ РєР°СЃРєР°Рґ СЂРµРіРµРЅРµСЂР°С‚РёРІРЅС‹С… РїСЂРѕС†РµСЃСЃРѕРІ. Р­С‚Рѕ РЅРµ РјР°СЃРєРёСЂРѕРІРєР° РїСЂРѕР±Р»РµРј, Р° РёСЃС‚РёРЅРЅРѕРµ РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёРµ РјРѕР»РѕРґРѕСЃС‚Рё РєРѕР¶Рё.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-10 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)]">
                <div className="flex flex-col gap-6">
                  {[
                    { num: '95%', label: 'РЎРѕРІРјРµСЃС‚РёРјРѕСЃС‚СЊ СЃ Р”РќРљ С‡РµР»РѕРІРµРєР°' },
                    { num: '30+', label: 'Р›РµС‚ РєР»РёРЅРёС‡РµСЃРєРѕРіРѕ РїСЂРёРјРµРЅРµРЅРёСЏ' },
                    { num: '3вЂ“4', label: 'РџСЂРѕС†РµРґСѓСЂС‹ вЂ” Р±Р°Р·РѕРІС‹Р№ РєСѓСЂСЃ' },
                    { num: '0', label: 'РЎР»СѓС‡Р°РµРІ Р°Р»Р»РµСЂРіРёС‡РµСЃРєРёС… СЂРµР°РєС†РёР№' },
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
                РљРѕРјСѓ РїРѕРґРѕР№РґС‘С‚ <span className="font-serif italic text-slate-400">PDRN</span>
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

          {/* Mechanism */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РњРµС…Р°РЅРёР·Рј РґРµР№СЃС‚РІРёСЏ</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                РљР°Рє СЂР°Р±РѕС‚Р°РµС‚ <br /> <span className="font-serif italic text-slate-400">PDRN</span>
              </h2>
            </div>
            <div className="flex flex-col stagger-container">
              <EditorialList items={mechanism} />
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
                <div key={index} className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] overflow-hidden shadow-[0_0.5rem_1.5rem_-0.5rem_rgba(0,0,0,0.03)] stagger-item opacity-0">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between p-6 md:p-8 text-left gap-4">
                    <span className="text-lg md:text-xl font-medium text-slate-900">{item.q}</span>
                    <Icon icon={openFaq === index ? 'solar:minus-linear' : 'solar:add-linear'} className="text-2xl text-[#60c2ff] shrink-0 transition-transform duration-300" />
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
                    РћР±РЅРѕРІРёС‚Рµ РєРѕР¶Сѓ <br />
                    <span className="font-serif italic text-slate-400">РЅР° СѓСЂРѕРІРЅРµ Р”РќРљ</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">
                    Р—Р°РїРёС€РёС‚РµСЃСЊ РЅР° Р±РµСЃРїР»Р°С‚РЅСѓСЋ РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЋ Рё РѕС‚РєСЂРѕР№С‚Рµ РґР»СЏ СЃРµР±СЏ СЃРёР»Сѓ РїРѕР»РёРЅСѓРєР»РµРѕС‚РёРґРЅРѕР№ С‚РµСЂР°РїРёРё вЂ” РїРµСЂРµРґРѕРІРѕР№ РјРµС‚РѕРґ РєР»РµС‚РѕС‡РЅРѕРіРѕ РѕРјРѕР»РѕР¶РµРЅРёСЏ.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group">
                      <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                      <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3">
                        Р‘РµСЃРїР»Р°С‚РЅР°СЏ РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ
                        <Icon icon="solar:arrow-right-linear" className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-64 h-64 rounded-full border border-[#60c2ff]/20 relative items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div>
                  <div className="text-center">
                    <Icon icon="solar:atom-linear" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" />
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
