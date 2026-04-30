'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

export default function MoleRemovalClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

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

  const indications = [
    { title: "Р РѕРґРёРЅРєРё РЅР° Р»РёС†Рµ", desc: "Р‘РµСЂРµР¶РЅРѕРµ СѓРґР°Р»РµРЅРёРµ РІ СЌСЃС‚РµС‚РёС‡РµСЃРєРё Р·РЅР°С‡РёРјС‹С… Р·РѕРЅР°С… Р±РµР· СЂСѓР±С†РѕРІ Рё СЃР»РµРґРѕРІ.", icon: "solar:eye-linear" },
    { title: "Р’РёСЃСЏС‡РёРµ СЂРѕРґРёРЅРєРё", desc: "РћР±СЂР°Р·РѕРІР°РЅРёСЏ, РєРѕС‚РѕСЂС‹Рµ С†РµРїР»СЏСЋС‚СЃСЏ Р·Р° РѕРґРµР¶РґСѓ Рё РїРѕСЃС‚РѕСЏРЅРЅРѕ С‚СЂР°РІРјРёСЂСѓСЋС‚СЃСЏ.", icon: "solar:scissors-linear" },
    { title: "РќРµРІСѓСЃС‹ РЅР° С‚РµР»Рµ", desc: "РЎРїРёРЅР°, С€РµСЏ, РіСЂСѓРґСЊ, Р¶РёРІРѕС‚ вЂ” Р»СЋР±Р°СЏ Р»РѕРєР°Р»РёР·Р°С†РёСЏ. РњСѓР¶С‡РёРЅР°Рј Рё Р¶РµРЅС‰РёРЅР°Рј.", icon: "solar:star-linear" },
    { title: "Р”РµР»РёРєР°С‚РЅС‹Рµ Р·РѕРЅС‹", desc: "РРЅС‚РёРјРЅС‹Рµ Рё С‚СЂСѓРґРЅРѕРґРѕСЃС‚СѓРїРЅС‹Рµ РѕР±Р»Р°СЃС‚Рё вЂ” РјР°РєСЃРёРјР°Р»СЊРЅР°СЏ Р°РєРєСѓСЂР°С‚РЅРѕСЃС‚СЊ Рё РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚СЊ.", icon: "solar:shield-check-linear" },
    { title: "Р Р°СЃС‚СѓС‰РёРµ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ", desc: "РЎСЂРѕС‡РЅРѕРµ СѓРґР°Р»РµРЅРёРµ РїСЂРё РёР·РјРµРЅРµРЅРёРё СЂР°Р·РјРµСЂР°, С„РѕСЂРјС‹, С†РІРµС‚Р° РёР»Рё РїРѕСЏРІР»РµРЅРёРё РґРёСЃРєРѕРјС„РѕСЂС‚Р°.", icon: "solar:danger-triangle-linear" },
    { title: "РњРЅРѕР¶РµСЃС‚РІРµРЅРЅС‹Рµ СЂРѕРґРёРЅРєРё", desc: "Р”Рѕ 15 РЅРѕРІРѕРѕР±СЂР°Р·РѕРІР°РЅРёР№ Р·Р° РѕРґРёРЅ СЃРµР°РЅСЃ РїРѕРґ РѕРґРЅРѕР№ Р°РЅРµСЃС‚РµР·РёРµР№.", icon: "solar:copy-linear" },
  ];

  const advantages = [
    { title: "Р‘РµР· Р±РѕР»Рё", desc: "РџСЂРѕС†РµРґСѓСЂР° РїСЂРѕС…РѕРґРёС‚ РїРѕРґ РјРµСЃС‚РЅРѕР№ Р°РЅРµСЃС‚РµР·РёРµР№ вЂ” РІС‹ РЅРµ РїРѕС‡СѓРІСЃС‚РІСѓРµС‚Рµ РЅРёС‡РµРіРѕ, РєСЂРѕРјРµ Р»С‘РіРєРѕРіРѕ РїСЂРёРєРѕСЃРЅРѕРІРµРЅРёСЏ." },
    { title: "Р‘РµР· РєСЂРѕРІРё Рё С€РІРѕРІ", desc: "Р›Р°Р·РµСЂ CO2 Bison РјРіРЅРѕРІРµРЅРЅРѕ Р·Р°РїР°РёРІР°РµС‚ СЃРѕСЃСѓРґС‹. РќРёРєР°РєРѕР№ РєСЂРѕРІРё, РЅРёРєР°РєРёС… РЅР°Р»РѕР¶РµРЅРЅС‹С… С€РІРѕРІ." },
    { title: "Р®РІРµР»РёСЂРЅР°СЏ С‚РѕС‡РЅРѕСЃС‚СЊ", desc: "Р›Р°Р·РµСЂ РїРѕСЃР»РѕР№РЅРѕ РёСЃРїР°СЂСЏРµС‚ С‚РѕР»СЊРєРѕ РєР»РµС‚РєРё РЅРѕРІРѕРѕР±СЂР°Р·РѕРІР°РЅРёСЏ, РЅРµ Р·Р°С‚СЂР°РіРёРІР°СЏ Р·РґРѕСЂРѕРІСѓСЋ РєРѕР¶Сѓ РІРѕРєСЂСѓРі." },
    { title: "Р‘С‹СЃС‚СЂРѕРµ Р·Р°Р¶РёРІР»РµРЅРёРµ", desc: "Р Р°РЅРєР° Р·Р°Р¶РёРІР°РµС‚ Р·Р° 7вЂ“10 РґРЅРµР№. РќР° Р»РёС†Рµ Рё РѕС‚РєСЂС‹С‚С‹С… Р·РѕРЅР°С… РѕР±С‹С‡РЅРѕ РЅРµ РѕСЃС‚Р°С‘С‚СЃСЏ СЃР»РµРґРѕРІ." },
    { title: "Р’СЂР°С‡РµР±РЅС‹Р№ РєРѕРЅС‚СЂРѕР»СЊ", desc: "РљР°Р¶РґС‹Р№ СЃР»СѓС‡Р°Р№ РѕСЃРјР°С‚СЂРёРІР°РµС‚ РІСЂР°С‡-РґРµСЂРјР°С‚РѕР»РѕРі Рё РѕРЅРєРѕР»РѕРі. Р“РёСЃС‚РѕР»РѕРіРёСЏ вЂ” РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё." },
  ];

  const steps = [
    { title: "РљРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ", desc: "РћР±СЏР·Р°С‚РµР»СЊРЅС‹Р№ РѕСЃРјРѕС‚СЂ РґРµСЂРјР°С‚РѕР»РѕРіРѕРј-РѕРЅРєРѕР»РѕРіРѕРј. Р”РµСЂРјР°С‚РѕСЃРєРѕРїРёСЏ вЂ” РёСЃСЃР»РµРґРѕРІР°РЅРёРµ РїР»СЋСЃ РЅРѕРІРѕРѕР±СЂР°Р·РѕРІР°РЅРёСЏ РїРѕРґ СѓРІРµР»РёС‡РµРЅРёРµРј РґР»СЏ С‚РѕС‡РЅРѕР№ РґРёР°РіРЅРѕСЃС‚РёРєРё." },
    { title: "РђРЅРµСЃС‚РµР·РёСЏ", desc: "РњРµСЃС‚РЅРѕРµ РѕР±РµР·Р±РѕР»РёРІР°РЅРёРµ вЂ” РѕРґРёРЅ СѓРєРѕР» РґРѕСЃС‚Р°С‚РѕС‡РµРЅ РґР»СЏ СѓРґР°Р»РµРЅРёСЏ РґРѕ 15 РѕР±СЂР°Р·РѕРІР°РЅРёР№. РљРѕРјС„РѕСЂС‚ РіР°СЂР°РЅС‚РёСЂРѕРІР°РЅ." },
    { title: "РЈРґР°Р»РµРЅРёРµ Р»Р°Р·РµСЂРѕРј", desc: "РџСЂРѕС†РµРґСѓСЂР° Р·Р°РЅРёРјР°РµС‚ 15вЂ“30 РјРёРЅСѓС‚. Р›Р°Р·РµСЂ CO2 Bison РїРѕСЃР»РѕР№РЅРѕ РёСЃРїР°СЂСЏРµС‚ С‚РєР°РЅРё РЅРѕРІРѕРѕР±СЂР°Р·РѕРІР°РЅРёСЏ СЃ РјР°РєСЃРёРјР°Р»СЊРЅРѕР№ С‚РѕС‡РЅРѕСЃС‚СЊСЋ." },
    { title: "Р РµРєРѕРјРµРЅРґР°С†РёРё", desc: "РљСЂР°С‚РєРёР№ РѕСЃРјРѕС‚СЂ, РѕР±СЂР°Р±РѕС‚РєР° Р°РЅС‚РёСЃРµРїС‚РёРєРѕРј Рё РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹Рµ СЂРµРєРѕРјРµРЅРґР°С†РёРё РїРѕ СѓС…РѕРґСѓ Р·Р° РєРѕР¶РµР№." },
  ];

  const aftercare = [
    { text: "РќРµ СЃРґРёСЂР°Р№С‚Рµ РєРѕСЂРѕС‡РєСѓ вЂ” РѕРЅР° РѕС‚РїР°РґС‘С‚ СЃР°РјР° Р·Р° 7вЂ“14 РґРЅРµР№", icon: "solar:hand-stars-linear" },
    { text: "РР·Р±РµРіР°Р№С‚Рµ СЃРѕР»РЅС†Р° 4вЂ“6 РЅРµРґРµР»СЊ, РёСЃРїРѕР»СЊР·СѓР№С‚Рµ SPF 50+", icon: "solar:sun-2-linear" },
    { text: "РќРµ РјРѕС‡РёС‚Рµ Р·РѕРЅСѓ СѓРґР°Р»РµРЅРёСЏ РїРµСЂРІС‹Рµ СЃСѓС‚РєРё", icon: "solar:waterdrop-linear" },
    { text: "РСЃРєР»СЋС‡РёС‚Рµ Р±Р°РЅСЋ Рё Р±Р°СЃСЃРµР№РЅ РЅР° 7вЂ“10 РґРЅРµР№", icon: "solar:temperature-linear" },
    { text: "РќРµ РЅР°РЅРѕСЃРёС‚Рµ РєРѕСЃРјРµС‚РёРєСѓ РґРѕ РїРѕР»РЅРѕРіРѕ РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёСЏ", icon: "solar:pallete-2-linear" },
    { text: "РћР±СЂР°Р±Р°С‚С‹РІР°Р№С‚Рµ Р°РЅС‚РёСЃРµРїС‚РёРєРѕРј РїРѕ РЅР°Р·РЅР°С‡РµРЅРёСЋ РІСЂР°С‡Р°", icon: "solar:medical-kit-linear" },
  ];

  const faq = [
    { q: "РЈРґР°Р»СЏС‚СЊ СЂРѕРґРёРЅРєРё вЂ” СЌС‚Рѕ Р±РѕР»СЊРЅРѕ?", a: "РќРµС‚. РџСЂРѕС†РµРґСѓСЂР° РїСЂРѕС…РѕРґРёС‚ РїРѕРґ РјРµСЃС‚РЅРѕР№ Р°РЅРµСЃС‚РµР·РёРµР№. Р’С‹ РЅРµ РїРѕС‡СѓРІСЃС‚РІСѓРµС‚Рµ Р±РѕР»Рё вЂ” РјР°РєСЃРёРјСѓРј Р»С‘РіРєРёР№ РґРёСЃРєРѕРјС„РѕСЂС‚ РІ РјРѕРјРµРЅС‚ СѓРєРѕР»Р°. Р‘РѕР»СЊС€РёРЅСЃС‚РІРѕ РїР°С†РёРµРЅС‚РѕРІ СѓРґРёРІР»СЏСЋС‚СЃСЏ: В«РЇ Р·СЂСЏ Р±РѕСЏР»СЃСЏ вЂ” РІСЃС‘ РїСЂРѕС€Р»Рѕ Р»РµРіРєРѕ Рё Р±С‹СЃС‚СЂРѕВ»." },
    { q: "РќСѓР¶РЅС‹ Р»Рё РїСЂРµРґРІР°СЂРёС‚РµР»СЊРЅС‹Рµ Р°РЅР°Р»РёР·С‹?", a: "РћР±С‹С‡РЅРѕ вЂ” РЅРµС‚. Р’СЂР°С‡ РїСЂРѕРІРѕРґРёС‚ РѕСЃРјРѕС‚СЂ Рё РґРµСЂРјР°С‚РѕСЃРєРѕРїРёСЋ РїСЂСЏРјРѕ РЅР° РїСЂРёС‘РјРµ, Рё РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё РЅР°РїСЂР°РІР»СЏРµС‚ С‚РєР°РЅСЊ РЅР° РіРёСЃС‚РѕР»РѕРіРёСЋ СѓР¶Рµ РїРѕСЃР»Рµ СѓРґР°Р»РµРЅРёСЏ." },
    { q: "РЎРєРѕР»СЊРєРѕ СЃС‚РѕРёС‚ СѓРґР°Р»РµРЅРёРµ?", a: <>Р¦РµРЅР° Р·Р°РІРёСЃРёС‚ РѕС‚ РєРѕР»РёС‡РµСЃС‚РІР°, СЂР°Р·РјРµСЂР° Рё СЂР°СЃРїРѕР»РѕР¶РµРЅРёСЏ:<br />вЂў РќРµР±РѕР»СЊС€РёРµ СЂРѕРґРёРЅРєРё Рё РїР°РїРёР»Р»РѕРјС‹: <span className="font-medium text-[#60c2ff]">РѕС‚ 450 в‚Ѕ</span><br />вЂў Р РѕРґРёРЅРєРё СЃСЂРµРґРЅРµРіРѕ СЂР°Р·РјРµСЂР°: <span className="font-medium text-[#60c2ff]">РѕС‚ 500 в‚Ѕ</span><br />РўРѕС‡РЅСѓСЋ СЃС‚РѕРёРјРѕСЃС‚СЊ РІСЂР°С‡ СЂР°СЃСЃС‡РёС‚Р°РµС‚ РЅР° РєРѕРЅСЃСѓР»СЊС‚Р°С†РёРё.</> },
    { q: "РљРѕРіРґР° Р»СѓС‡С€Рµ СѓРґР°Р»СЏС‚СЊ?", a: "РќРµ РѕС‚РєР»Р°РґС‹РІР°Р№С‚Рµ, РµСЃР»Рё СЂРѕРґРёРЅРєР° РЅР°С‡Р°Р»Р° РјРµРЅСЏС‚СЊСЃСЏ, Р±РѕР»РµС‚СЊ РёР»Рё С‚СЂР°РІРјРёСЂРѕРІР°С‚СЊСЃСЏ. РћРїС‚РёРјР°Р»СЊРЅРѕ вЂ” РґРѕ Р°РєС‚РёРІРЅРѕРіРѕ Р·Р°РіР°СЂР°, С‡С‚РѕР±С‹ СѓСЃРєРѕСЂРёС‚СЊ Р·Р°Р¶РёРІР»РµРЅРёРµ." },
  ];

    const doctors = [
     { name: "Специалист SkinMed", role: "Р“Р»Р°РІРЅС‹Р№ РІСЂР°С‡, РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕРІРµРЅРµСЂРѕР»РѕРі", exp: "РћРїС‹С‚ 15 Р»РµС‚", img: "/images/doctors/kachyurina.jpg" },
     { name: "Специалист SkinMed", role: "Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕР»РѕРі", exp: "РћРїС‹С‚ 10 Р»РµС‚", img: "/images/doctors/muhametzanova.jpg" },
     { name: "Специалист SkinMed", role: "Р’СЂР°С‡-РґРµСЂРјР°С‚РѕР»РѕРі, С‚СЂРёС…РѕР»РѕРі, РєРѕСЃРјРµС‚РѕР»РѕРі", exp: "РћРїС‹С‚ 12 Р»РµС‚", img: "/images/doctors/vorobyova.jpg" },
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

      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        
        <main className="w-full mt-12 sm:mt-16">
          {/* Breadcrumbs */}
          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Р“Р»Р°РІРЅР°СЏ</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <a href="/services/lazernaya-kosmetologiya" className="hover:text-[#60c2ff] transition-colors duration-300">Р›Р°Р·РµСЂРЅР°СЏ РєРѕСЃРјРµС‚РѕР»РѕРіРёСЏ</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">РЈРґР°Р»РµРЅРёРµ СЂРѕРґРёРЅРѕРє</span>
            </div>
          </section>

          {/* Hero Section */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/mole-removal-hero.png"
                  alt="РЈРґР°Р»РµРЅРёРµ СЂРѕРґРёРЅРѕРє Р»Р°Р·РµСЂРѕРј"
                  className="w-full h-full object-cover object-right md:object-center opacity-[0.35] md:opacity-60 mix-blend-overlay scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>
              
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  РљРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ РѕРЅРєРѕР»РѕРіР° вЂ” РІ РїРѕРґР°СЂРѕРє
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  РЈРґР°Р»РµРЅРёРµ <br />
                  <span className="font-serif italic text-[#60c2ff]/80">СЂРѕРґРёРЅРѕРє</span> Р»Р°Р·РµСЂРѕРј
                </h1>
                
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  Р‘РµР·РѕРїР°СЃРЅРѕ, Р±РµСЃРєСЂРѕРІРЅРѕ Рё Р±РµР·Р±РѕР»РµР·РЅРµРЅРЅРѕ. РџРѕРґ РєРѕРЅС‚СЂРѕР»РµРј РІСЂР°С‡Р°-РґРµСЂРјР°С‚РѕР»РѕРіР° Рё РѕРЅРєРѕР»РѕРіР° СЃ РїСЂРёРјРµРЅРµРЅРёРµРј Р»Р°Р·РµСЂР° <span className="font-medium text-[#60c2ff]">CO2 Bison</span> РїРѕСЃР»РµРґРЅРµРіРѕ РїРѕРєРѕР»РµРЅРёСЏ.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  {["Р‘РµР· Р±РѕР»Рё Рё РєСЂРѕРІРё", "Р‘РµР· С€РІРѕРІ", "Р‘РµР· РіРѕСЃРїРёС‚Р°Р»РёР·Р°С†РёРё"].map((tag, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white/80 text-sm font-light">
                      <Icon icon="solar:check-circle-bold" className="text-[#60c2ff]" />
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button 
                      onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                      className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]"
                    >
                      Р—Р°РїРёСЃР°С‚СЊСЃСЏ РЅР° СѓРґР°Р»РµРЅРёРµ
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pain Points / Empathy */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto reveal-up opacity-0">
            <div className="text-center mb-10">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Рћ РїСЂРѕР±Р»РµРјРµ</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.1]">
                РҐРѕС‚РёС‚Рµ СѓРґР°Р»РёС‚СЊ, <span className="font-serif italic text-slate-400">РЅРѕ РѕС‚РєР»Р°РґС‹РІР°РµС‚Рµ?</span>
              </h2>
            </div>
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-8 md:p-12 shadow-sm">
              <p className="text-lg md:text-xl text-slate-700 font-light leading-relaxed mb-6">
                Р РѕРґРёРЅРєРё Рё РЅРµРІСѓСЃС‹ вЂ” РјС‹ Рє РЅРёРј РїСЂРёРІС‹РєР°РµРј, РїРѕРєР° РѕРЅРё РЅРµ РЅР°С‡РёРЅР°СЋС‚ РјРµС€Р°С‚СЊ. Р—РЅР°РєРѕРјРѕ?
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Р—Р°РґРµРІР°СЋС‚СЃСЏ РїСЂРё СЃС‚СЂРёР¶РєРµ Сѓ РїР°СЂРёРєРјР°С…РµСЂР°",
                  "Р¦РµРїР»СЏСЋС‚СЃСЏ Р·Р° РѕРґРµР¶РґСѓ Рё Р±РµР»СЊС‘",
                  "Р’РѕСЃРїР°Р»СЏСЋС‚СЃСЏ РїРѕСЃР»Рµ СЃР°СѓРЅС‹ РёР»Рё Р·Р°РіР°СЂР°",
                  "РќР°С‡РёРЅР°СЋС‚ С‡РµСЃР°С‚СЊСЃСЏ, Р±РѕР»РµС‚СЊ РёР»Рё СЂР°СЃС‚Рё",
                  "РњРµС€Р°СЋС‚ РїСЃРёС…РѕР»РѕРіРёС‡РµСЃРєРё РЅР° Р»РёС†Рµ Рё С€РµРµ",
                  "В«Рђ РІРґСЂСѓРі Р±РѕР»СЊРЅРѕ? Рђ РІРґСЂСѓРі РЅРµР»СЊР·СЏ?В»"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3">
                    <Icon icon="solar:check-read-linear" className="text-[#60c2ff] text-xl mt-0.5 shrink-0" />
                    <span className="text-base text-slate-600 font-light">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-base md:text-lg text-slate-500 font-light mt-6 border-l-2 border-[#60c2ff]/30 pl-4 italic">
                Р’С‹ РЅРµ РѕРґРёРЅРѕРєРё: РїРѕС‡С‚Рё РєР°Р¶РґС‹Р№ РїР°С†РёРµРЅС‚ РїСЂРёС…РѕРґРёС‚ СЃ С‚Р°РєРёРјРё РІРѕРїСЂРѕСЃР°РјРё. Р’ РЅР°С€РµР№ РєР»РёРЅРёРєРµ СѓРґР°Р»РµРЅРёРµ РїСЂРѕРІРѕРґСЏС‚ РІСЂР°С‡Рё-СЌРєСЃРїРµСЂС‚С‹ вЂ” Р±РµР·Р±РѕР»РµР·РЅРµРЅРЅРѕ, Р±РµСЃРєСЂРѕРІРЅРѕ Рё СЃ РјР°РєСЃРёРјР°Р»СЊРЅС‹Рј РІРЅРёРјР°РЅРёРµРј Рє РІР°С€РµРјСѓ РєРѕРјС„РѕСЂС‚Сѓ.
              </p>
            </div>
          </section>

          {/* Indications */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџРѕРєР°Р·Р°РЅРёСЏ</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                РљРѕРјСѓ РїРѕРґРѕР№РґС‘С‚ <span className="font-serif italic text-slate-400">РїСЂРѕС†РµРґСѓСЂР°</span>
              </h2>
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
                  <p className="text-base sm:text-[17px] text-slate-600 font-light mt-3 leading-relaxed relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cases / Before-After */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0 max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р РµР·СѓР»СЊС‚Р°С‚С‹</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Р Р°Р±РѕС‚С‹ РЅР°С€РёС… <span className="font-serif italic text-slate-400">СЃРїРµС†РёР°Р»РёСЃС‚РѕРІ</span>
              </h2>
              <p className="text-lg text-slate-500 font-light">РЈРґР°Р»РµРЅРёРµ РЅРµРІСѓСЃР° РЅР°Рґ РіР»Р°Р·РѕРј вЂ” РІСЂР°С‡ РґРµСЂРјР°С‚РѕР»РѕРі Р‘Р°РіР°СѓС‚РґРёРЅРѕРІ Рђ.Р¤.</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "https://optim.tildacdn.com/tild3666-3165-4664-a632-336364646561/-/cover/351x351/center/center/-/format/webp/-5.jpg.webp",
                "https://optim.tildacdn.com/tild3466-6139-4165-a465-653063326630/-/cover/351x351/center/center/-/format/webp/-4.jpg.webp",
                "https://optim.tildacdn.com/tild6363-3561-4663-b965-646231326132/-/cover/351x351/center/center/-/format/webp/-1.jpg.webp",
                "https://optim.tildacdn.com/tild3732-3765-4030-a135-656535623065/-/cover/351x351/center/center/-/format/webp/-2.jpg.webp"
              ].map((img, i) => (
                <div key={i} className="relative rounded-[2rem] overflow-hidden shadow-md group aspect-square">
                  <img src={img} alt={`Р РµР·СѓР»СЊС‚Р°С‚ ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium text-slate-700">
                      {i < 2 ? 'Р”Рѕ' : 'РџРѕСЃР»Рµ'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Advantages */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџСЂРµРёРјСѓС‰РµСЃС‚РІР°</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                РџРѕС‡РµРјСѓ Р»Р°Р·РµСЂРЅРѕРµ <br /> <span className="font-serif italic text-slate-400">СѓРґР°Р»РµРЅРёРµ</span>
              </h2>
            </div>

            <div className="flex flex-col stagger-container">
              <EditorialList items={advantages} />
            </div>
          </section>

          {/* Process Steps */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-5xl mx-auto reveal-up opacity-0">
            <div className="text-center mb-16">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р­С‚Р°РїС‹</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                РљР°Рє РїСЂРѕС…РѕРґРёС‚ <span className="font-serif italic text-slate-400">СѓРґР°Р»РµРЅРёРµ</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <EditorialList items={steps} />
            </div>
          </section>

          {/* Aftercare */}
          <section className="mb-32 lg:mb-48 max-w-5xl mx-auto reveal-up opacity-0">
            <div className="text-center mb-12">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџРѕСЃР»Рµ РїСЂРѕС†РµРґСѓСЂС‹</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                Р РµРєРѕРјРµРЅРґР°С†РёРё РїРѕ <span className="font-serif italic text-slate-400">СѓС…РѕРґСѓ</span>
              </h2>
              <p className="text-lg text-slate-500 font-light mt-4 max-w-2xl mx-auto">РЎРѕР±Р»СЋРґР°Р№С‚Рµ РїСЂРѕСЃС‚С‹Рµ РїСЂР°РІРёР»Р° вЂ” Рё РєРѕР¶Р° РІРѕСЃСЃС‚Р°РЅРѕРІРёС‚СЃСЏ Р±С‹СЃС‚СЂРѕ, Р° СЂРµР·СѓР»СЊС‚Р°С‚ Р±СѓРґРµС‚ Р°РєРєСѓСЂР°С‚РЅС‹Рј Рё Р±РµР· РѕСЃР»РѕР¶РЅРµРЅРёР№.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {aftercare.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#60c2ff]/10 flex items-center justify-center shrink-0">
                    <Icon icon={item.icon} className="text-xl text-[#60c2ff]" />
                  </div>
                  <p className="text-base text-slate-700 font-normal leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Doctors */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto reveal-up opacity-0">
            <div className="text-center mb-16">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РќР°С€Рё РІСЂР°С‡Рё</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                Р­РєСЃРїРµСЂС‚С‹ РїРѕ <span className="font-serif italic text-slate-400">СѓРґР°Р»РµРЅРёСЋ</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doc, i) => (
                <div key={i} className="group relative bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-500">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors">{doc.name}</h3>
                    <p className="text-base text-slate-600 font-light mt-1">{doc.role}</p>
                    <div className="flex items-center gap-2 mt-3 text-sm text-[#60c2ff] font-medium">
                      <Icon icon="solar:verified-check-bold-duotone" className="text-lg" />
                      РћРїС‹С‚: {doc.exp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto w-full reveal-up opacity-0">
            <div className="text-center mb-16">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р’РѕРїСЂРѕСЃС‹ Рё РѕС‚РІРµС‚С‹</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                Р§Р°СЃС‚С‹Рµ <span className="font-serif italic text-slate-400">РІРѕРїСЂРѕСЃС‹</span>
              </h2>
            </div>
            
            <div className="flex flex-col gap-4">
              {faq.map((item, idx) => (
                <div 
                  key={idx}
                  className={`bg-white/60 backdrop-blur-sm border transition-all duration-300 rounded-[2rem] overflow-hidden cursor-pointer
                    ${activeFaq === idx ? 'border-[#60c2ff]/50 shadow-[0_1rem_3rem_-1rem_rgba(96,194,255,0.2)]' : 'border-white/80 shadow-sm hover:border-slate-300'}`}
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <div className="px-8 py-6 flex items-center justify-between gap-6">
                    <h4 className="text-lg md:text-xl font-medium text-slate-800">{item.q}</h4>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${activeFaq === idx ? 'bg-[#60c2ff] text-white' : 'bg-slate-100 text-slate-400'}`}>
                      <Icon icon={activeFaq === idx ? "solar:minus-linear" : "solar:add-linear"} className="text-xl" />
                    </div>
                  </div>
                  <div className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === idx ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-[17px] text-slate-600 font-light leading-relaxed border-l-2 border-[#60c2ff]/30 pl-4">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contraindications */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-5xl mx-auto reveal-up opacity-0">
            <div className="text-center mb-12">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РћРіСЂР°РЅРёС‡РµРЅРёСЏ</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                РџСЂРѕС‚РёРІРѕ<span className="font-serif italic text-slate-400">РїРѕРєР°Р·Р°РЅРёСЏ</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Р’РѕСЃРїР°Р»РµРЅРёСЏ РІ Р·РѕРЅРµ СѓРґР°Р»РµРЅРёСЏ", icon: "solar:fire-bold-duotone" },
                { title: "Р“РµСЂРїРµСЃ, РїСЃРѕСЂРёР°Р·, СЌРєР·РµРјР°", icon: "solar:shield-warning-bold-duotone" },
                { title: "Р‘РµСЂРµРјРµРЅРЅРѕСЃС‚СЊ Рё Р»Р°РєС‚Р°С†РёСЏ", icon: "solar:heart-bold-duotone" },
                { title: "РћРЅРєРѕР»РѕРіРёС‡РµСЃРєРёРµ Р·Р°Р±РѕР»РµРІР°РЅРёСЏ", icon: "solar:danger-triangle-bold-duotone" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-4 bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/80 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                    <Icon icon={item.icon} className="text-2xl text-red-400" />
                  </div>
                  <p className="text-slate-800 font-medium text-[15px] lg:text-base leading-tight">{item.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative z-10 reveal-up opacity-0">
            <div className="relative overflow-hidden rounded-[3rem] bg-[#050B14] p-10 md:p-16 lg:p-24 border border-white/10 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)]">
              <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#fbbf24]/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">
                    РЈРґР°Р»РёС‚Рµ СЂРѕРґРёРЅРєРё <br />
                    <span className="font-serif italic text-slate-400">Р±РµР·РѕРїР°СЃРЅРѕ</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    Р—Р°РїРёС€РёС‚РµСЃСЊ РЅР° РїСЂРёС‘Рј Рё РїРѕР»СѓС‡РёС‚Рµ РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЋ РІСЂР°С‡Р°-РґРµСЂРјР°С‚РѕР»РѕРіР° Рё РѕРЅРєРѕР»РѕРіР° РІ РїРѕРґР°СЂРѕРє. Р›Р°Р·РµСЂ <span className="font-medium text-white">CO2 Bison</span> вЂ” СЃРѕРІСЂРµРјРµРЅРЅРѕРµ, Р±РµР·РѕРїР°СЃРЅРѕРµ РѕР±РѕСЂСѓРґРѕРІР°РЅРёРµ.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group w-full sm:w-auto">
                      <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                      <button 
                        onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                        className="relative z-10 w-full sm:w-auto px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center justify-center gap-3"
                      >
                        Р—Р°РїРёСЃР°С‚СЊСЃСЏ РЅР° СѓРґР°Р»РµРЅРёРµ
                        <Icon icon="solar:arrow-right-linear" className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="hidden lg:flex w-64 h-64 rounded-full border border-[#60c2ff]/20 relative items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div>
                  <div className="text-center">
                    <Icon icon="solar:health-bold-duotone" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" />
                    <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/50 leading-tight">SkinMed<br/>Laser Surgery</span>
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
