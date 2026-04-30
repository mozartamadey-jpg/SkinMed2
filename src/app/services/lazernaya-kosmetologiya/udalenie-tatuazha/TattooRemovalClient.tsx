'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import EditorialList from '@/components/EditorialList';

export default function TattooRemovalClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const initObserver = () => {
      if (window.innerWidth > 768) {
        if (observer) {
          observer.disconnect();
          observer = null;
        }
        document.querySelectorAll('.mobile-glow-active').forEach(el => el.classList.remove('mobile-glow-active'));
        return;
      }
      if (!observer) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('mobile-glow-active');
            } else {
              entry.target.classList.remove('mobile-glow-active');
            }
          });
        }, {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0
        });
        setTimeout(() => {
          const elements = document.querySelectorAll('.scroll-glow-item');
          elements.forEach(el => observer?.observe(el));
        }, 500);
      }
    };
    initObserver();
    window.addEventListener('resize', initObserver);
    return () => {
      window.removeEventListener('resize', initObserver);
      if (observer) observer.disconnect();
    };
  }, []);

  const indications = [
    { title: "РќРµСѓРґР°С‡РЅР°СЏ С„РѕСЂРјР°", desc: "РђСЃРёРјРјРµС‚СЂРёСЏ, СЃР»РёС€РєРѕРј С€РёСЂРѕРєРёРµ Р»РёРЅРёРё РёР»Рё РЅРµРїСЂР°РІРёР»СЊРЅС‹Р№ РєРѕРЅС‚СѓСЂ Р±СЂРѕРІРµР№ Рё РіСѓР±.", icon: "solar:scissors-linear" },
    { title: "РР·РјРµРЅРµРЅРёРµ С†РІРµС‚Р°", desc: "РЈС…РѕРґ РїРёРіРјРµРЅС‚Р° РІ СЃРёРЅРёРµ, СЃРµСЂС‹Рµ, Р·РµР»РµРЅС‹Рµ РёР»Рё РєСЂР°СЃРЅС‹Рµ РЅРµР¶РµР»Р°С‚РµР»СЊРЅС‹Рµ РѕС‚С‚РµРЅРєРё.", icon: "solar:pallete-2-linear" },
    { title: "В«РџРѕРїР»С‹РІС€РёР№В» РїРёРіРјРµРЅС‚", desc: "Р Р°Р·РјС‹С‚С‹Рµ РіСЂР°РЅРёС†С‹ С‚Р°С‚СѓР°Р¶Р°, РјРёРіСЂР°С†РёСЏ РєСЂР°СЃРєРё Р·Р° РєРѕРЅС‚СѓСЂ РіСѓР± РёР»Рё РІРµРє.", icon: "solar:waterdrop-linear" },
    { title: "РЎРјРµРЅР° РёРјРёРґР¶Р°", desc: "Р–РµР»Р°РЅРёРµ РїРѕР»РЅРѕСЃС‚СЊСЋ РІРµСЂРЅСѓС‚СЊ РµСЃС‚РµСЃС‚РІРµРЅРЅС‹Р№ РІРёРґ РёР»Рё СЃРґРµР»Р°С‚СЊ РЅРѕРІСѓСЋ С‚РµС…РЅРёРєСѓ РїРµСЂРјР°РЅРµРЅС‚Р°.", icon: "solar:magic-stick-3-linear" },
    { title: "Р“Р»СѓР±РѕРєРѕРµ Р·Р°Р»РµРіР°РЅРёРµ", desc: "РЎР»РёС€РєРѕРј РїР»РѕС‚РЅРѕРµ Рё РіР»СѓР±РѕРєРѕРµ РІРЅРµСЃРµРЅРёРµ РєСЂР°СЃРєРё РјР°СЃС‚РµСЂРѕРј.", icon: "solar:danger-triangle-linear" },
    { title: "Р›СЋР±С‹Рµ С‚РёРїС‹ С‚Р°С‚СѓРёСЂРѕРІРѕРє", desc: "РџРёРєРѕСЃРµРєСѓРЅРґРЅС‹Р№ Р»Р°Р·РµСЂ СѓРґР°Р»СЏРµС‚ РєР°Рє РїСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅС‹Рµ, С‚Р°Рє Рё Р»СЋР±РёС‚РµР»СЊСЃРєРёРµ С‚Р°С‚Сѓ.", icon: "solar:star-linear" },
  ];

  const advantages = [
    { title: "Р‘РµР· С€СЂР°РјРѕРІ Рё СЂСѓР±С†РѕРІ", desc: "РЈР»СЊС‚СЂР°РєРѕСЂРѕС‚РєРёРµ РїРёРєРѕСЃРµРєСѓРЅРґРЅС‹Рµ РёРјРїСѓР»СЊСЃС‹ СЂР°Р·Р±РёРІР°СЋС‚ РїРёРіРјРµРЅС‚ РІ РїС‹Р»СЊ, РЅРµ СѓСЃРїРµРІР°СЏ РЅР°РіСЂРµС‚СЊ Рё РѕР±Р¶РµС‡СЊ РєРѕР¶Сѓ." },
    { title: "РЎРѕС…СЂР°РЅРµРЅРёРµ РІРѕР»РѕСЃРєРѕРІ", desc: "Р›Р°Р·РµСЂ РЅРµ РїРѕРІСЂРµР¶РґР°РµС‚ Р»СѓРєРѕРІРёС†С‹ Р±СЂРѕРІРµР№. Р’Р°С€Рё РІРѕР»РѕСЃРєРё РЅРµ РІС‹РїР°РґСѓС‚ Рё РїСЂРѕРґРѕР»Р¶Р°С‚ СЂР°СЃС‚Рё РµСЃС‚РµСЃС‚РІРµРЅРЅС‹Рј РѕР±СЂР°Р·РѕРј." },
    { title: "РЈРґР°Р»РµРЅРёРµ РІСЃРµС… С†РІРµС‚РѕРІ", desc: "РђРїРїР°СЂР°С‚ PicoCare СЃРїСЂР°РІР»СЏРµС‚СЃСЏ РґР°Р¶Рµ СЃРѕ СЃР»РѕР¶РЅС‹РјРё РѕС‚С‚РµРЅРєР°РјРё, РєРѕС‚РѕСЂС‹Рµ РЅРµ В«РІРёРґСЏС‚В» РѕР±С‹С‡РЅС‹Рµ Р»Р°Р·РµСЂС‹." },
    { title: "РњРµРЅСЊС€Рµ СЃРµР°РЅСЃРѕРІ", desc: "Р—Р° СЃС‡РµС‚ РјРѕС‰РЅРѕСЃС‚Рё С‚РµС…РЅРѕР»РѕРіРёРё РєРѕР»РёС‡РµСЃС‚РІРѕ РїСЂРѕС†РµРґСѓСЂ СЃРѕРєСЂР°С‰Р°РµС‚СЃСЏ РІ 1.5вЂ“2 СЂР°Р·Р°." }
  ];

  const steps = [
    { title: "РЎР±РѕСЂ Р°РЅР°РјРЅРµР·Р°", desc: "Р’СЂР°С‡ РѕРїСЂРµРґРµР»СЏРµС‚ С‚РёРї РєСЂР°СЃРёС‚РµР»СЏ, РіР»СѓР±РёРЅСѓ РµРіРѕ Р·Р°Р»РµРіР°РЅРёСЏ Рё СЃСЂРѕРє РґР°РІРЅРѕСЃС‚Рё, С‡С‚РѕР±С‹ РїРѕРґРѕР±СЂР°С‚СЊ РїР°СЂР°РјРµС‚СЂС‹ Р»Р°Р·РµСЂР°." },
    { title: "РџРѕРґРіРѕС‚РѕРІРєР° Р·РѕРЅС‹", desc: "РћС‡РёС‰РµРЅРёРµ РєРѕР¶Рё Рё, РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё, РЅР°РЅРµСЃРµРЅРёРµ Р°РїРїР»РёРєР°С†РёРѕРЅРЅРѕР№ Р°РЅРµСЃС‚РµР·РёРё РёР»Рё РѕС…Р»Р°Р¶РґРµРЅРёРµ." },
    { title: "Р’РѕР·РґРµР№СЃС‚РІРёРµ PicoCare", desc: "Р›Р°Р·РµСЂ РїСЂРѕС…РѕРґРёС‚ РїРѕ РєРѕРЅС‚СѓСЂСѓ С‚Р°С‚СѓР°Р¶Р°. РџСЂРѕС†РµСЃСЃ Р·Р°РЅРёРјР°РµС‚ РѕС‚ 2 РґРѕ 10 РјРёРЅСѓС‚, РїРёРіРјРµРЅС‚ РІ РјРѕРјРµРЅС‚ РІСЃРїС‹С€РєРё Р±РµР»РµРµС‚ (В«С„СЂРѕСЃС‚РёРЅРіВ»)." },
    { title: "Р РµР°Р±РёР»РёС‚Р°С†РёСЏ", desc: "РќР°РЅРµСЃРµРЅРёРµ СѓСЃРїРѕРєР°РёРІР°СЋС‰РµРіРѕ РєСЂРµРјР°. РџР°С†РёРµРЅС‚Сѓ РІС‹РґР°СЋС‚СЃСЏ РїР°РјСЏС‚РєР° РїРѕ СѓС…РѕРґСѓ Рё РЅР°Р·РЅР°С‡Р°РµС‚СЃСЏ РґР°С‚Р° СЃР»РµРґСѓСЋС‰РµРіРѕ РІРёР·РёС‚Р°." }
  ];

  const aftercare = [
    { title: "РћС…Р»Р°Р¶РґРµРЅРёРµ", desc: "РџСЂРёРєР»Р°РґС‹РІР°Р№С‚Рµ СЃСѓС…РѕР№ С…РѕР»РѕРґ РІ РїРµСЂРІС‹Рµ СЃСѓС‚РєРё РґР»СЏ СЃРЅСЏС‚РёСЏ РѕС‚РµРєР° (РїРѕ 5-10 РјРёРЅСѓС‚).", icon: "solar:temperature-linear" },
    { title: "Р‘РµР· РІРѕРґС‹ Рё С‚РµРїР»Р°", desc: "РќРµ РјРѕС‡РёС‚Рµ Р·РѕРЅСѓ РѕР±СЂР°Р±РѕС‚РєРё 24 С‡Р°СЃР°. РСЃРєР»СЋС‡РёС‚Рµ Р±Р°РЅРё Рё СЃР°СѓРЅС‹ РЅР° 7 РґРЅРµР№.", icon: "solar:waterdrop-linear" },
    { title: "РќРµ СЃСЂС‹РІР°С‚СЊ РєРѕСЂРѕС‡РєРё", desc: "Р•СЃР»Рё РїРѕСЏРІСЏС‚СЃСЏ Р»РµРіРєРёРµ С€РµР»СѓС€РµРЅРёСЏ, РЅРё РІ РєРѕРµРј СЃР»СѓС‡Р°Рµ РЅРµ РѕС‚РґРёСЂР°Р№С‚Рµ РёС… РІСЂСѓС‡РЅСѓСЋ.", icon: "solar:hand-stars-linear" },
    { title: "РЎС‚СЂРѕРіРёР№ SPF", desc: "РСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ РєСЂРµРјР° СЃ SPF 50 РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ РЅР° РїСЂРѕС‚СЏР¶РµРЅРёРё РІСЃРµРіРѕ РєСѓСЂСЃР° Р»РµС‡РµРЅРёСЏ.", icon: "solar:sun-2-linear" }
  ];

  const faqData = [
    { q: "РЎРєРѕР»СЊРєРѕ СЃРµР°РЅСЃРѕРІ РїРѕРЅР°РґРѕР±РёС‚СЃСЏ?", a: "Р’ СЃСЂРµРґРЅРµРј СѓРґР°Р»РµРЅРёРµ С‚Р°С‚СѓР°Р¶Р° Р±СЂРѕРІРµР№ Р·Р°РЅРёРјР°РµС‚ РѕС‚ 3 РґРѕ 6 РїСЂРѕС†РµРґСѓСЂ. РўРѕС‡РЅРѕРµ С‡РёСЃР»Рѕ Р·Р°РІРёСЃРёС‚ РѕС‚ РєР°С‡РµСЃС‚РІР° РєСЂР°СЃРєРё, РїР»РѕС‚РЅРѕСЃС‚Рё СѓРєР»Р°РґРєРё Рё РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹С… РѕСЃРѕР±РµРЅРЅРѕСЃС‚РµР№ РёРјРјСѓРЅРЅРѕР№ СЃРёСЃС‚РµРјС‹. РРЅС‚РµСЂРІР°Р» РјРµР¶РґСѓ СЃРµР°РЅСЃР°РјРё СЃРѕСЃС‚Р°РІР»СЏРµС‚ 4вЂ“6 РЅРµРґРµР»СЊ." },
    { q: "Р’С‹РїР°РґСѓС‚ Р»Рё РјРѕРё Р±СЂРѕРІРё РїРѕСЃР»Рµ Р»Р°Р·РµСЂР°?", a: "РќРµС‚. РџРёРєРѕСЃРµРєСѓРЅРґРЅС‹Р№ Р»Р°Р·РµСЂ PicoCare РґРµР№СЃС‚РІСѓРµС‚ С‚РѕС‡РµС‡РЅРѕ РЅР° РїРёРіРјРµРЅС‚ Рё РЅРµ С‚СЂР°РІРјРёСЂСѓРµС‚ РІРѕР»РѕСЃСЏРЅС‹Рµ С„РѕР»Р»РёРєСѓР»С‹. РќР°РѕР±РѕСЂРѕС‚, РёРЅРѕРіРґР° РЅР°Р±Р»СЋРґР°РµС‚СЃСЏ СЃС‚РёРјСѓР»СЏС†РёСЏ СЂРѕСЃС‚Р° РІРѕР»РѕСЃРєРѕРІ Р·Р° СЃС‡РµС‚ СѓР»СѓС‡С€РµРЅРёСЏ РєСЂРѕРІРѕРѕР±СЂР°С‰РµРЅРёСЏ. РџРѕСЃР»Рµ РїСЂРѕС†РµРґСѓСЂС‹ РІРѕР»РѕСЃРєРё РјРѕРіСѓС‚ Р»РёС€СЊ СЃР»РµРіРєР° РїРѕСЃРІРµС‚Р»РµС‚СЊ." },
    { q: "Р­С‚Рѕ Р±РѕР»СЊРЅРѕ?", a: "РџСЂРѕС†РµРґСѓСЂР° РїРµСЂРµРЅРѕСЃРёС‚СЃСЏ РІРїРѕР»РЅРµ РєРѕРјС„РѕСЂС‚РЅРѕ. Р’СЃРїС‹С€РєРё РїРѕ РѕС‰СѓС‰РµРЅРёСЏРј РїРѕС…РѕР¶Рё РЅР° Р»РµРіРєРёРµ С‰РµР»С‡РєРё РіРѕСЂСЏС‡РµР№ СЂРµР·РёРЅРєРѕР№. РџРѕ Р¶РµР»Р°РЅРёСЋ РЅР°РЅРѕСЃРёС‚СЃСЏ РѕР±РµР·Р±РѕР»РёРІР°СЋС‰РёР№ РєСЂРµРј РёР»Рё РїСЂРёРјРµРЅСЏРµС‚СЃСЏ РѕС…Р»Р°Р¶РґРµРЅРёРµ СЃС‚СЂСѓРµР№ РІРѕР·РґСѓС…Р° Zimmer." },
    { q: "РћСЃС‚Р°РЅСѓС‚СЃСЏ Р»Рё С€СЂР°РјС‹?", a: "РџРёРєРѕСЃРµРєСѓРЅРґРЅС‹Р№ Р»Р°Р·РµСЂ PicoCare СЂР°Р±РѕС‚Р°РµС‚ Р±РµР· С‚РµСЂРјРёС‡РµСЃРєРѕРіРѕ РѕР¶РѕРіР° РѕРєСЂСѓР¶Р°СЋС‰РёС… С‚РєР°РЅРµР№ (В«С…РѕР»РѕРґРЅРѕРµВ» СѓРґР°Р»РµРЅРёРµ), РїРѕСЌС‚РѕРјСѓ СЂРёСЃРє СЂСѓР±С†РµРІР°РЅРёСЏ СЃРІРµРґРµРЅ Рє Р°Р±СЃРѕР»СЋС‚РЅРѕРјСѓ РЅСѓР»СЋ." }
  ];

    const doctors = [
     { name: "Специалист SkinMed", role: "Р“Р»Р°РІРЅС‹Р№ РІСЂР°С‡, РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕРІРµРЅРµСЂРѕР»РѕРі", exp: "РћРїС‹С‚ 15 Р»РµС‚", img: "/images/doctors/kachyurina.jpg" },
     { name: "Специалист SkinMed", role: "Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕР»РѕРі", exp: "РћРїС‹С‚ 10 Р»РµС‚", img: "/images/doctors/muhametzanova.jpg" },
     { name: "Специалист SkinMed", role: "Р’СЂР°С‡-РґРµСЂРјР°С‚РѕР»РѕРі, С‚СЂРёС…РѕР»РѕРі, РєРѕСЃРјРµС‚РѕР»РѕРі", exp: "РћРїС‹С‚ 12 Р»РµС‚", img: "/images/doctors/vorobyova.jpg" },
  ];

  const cases = [
    { before: "/images/tattoo-removal-before.png", after: "/images/tattoo-removal-after.png" }
  ];

  return (
    <div className="min-h-screen relative font-sans text-slate-800 bg-[#FAFAFA] flex flex-col">
      <AnimationsProvider />
      
      {/* Background Aurora Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] bg-gradient-to-br from-[#60c2ff]/20 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "25s" }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] bg-gradient-to-tl from-[#fbbf24]/10 via-[#cddce9]/30 to-transparent blur-[5rem] opacity-40 mix-blend-normal animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen pt-8 sm:pt-16">
        <div className="w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex-1 flex flex-col pb-24">
          <Header />

          <main className="w-full mt-12 sm:mt-16 flex flex-col gap-20 md:gap-32 pb-24">
            
            {/* Breadcrumbs */}
            <section className="mb-[-2rem] reveal-up opacity-0">
              <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-slate-500 font-light">
                <Link href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Р“Р»Р°РІРЅР°СЏ</Link>
                <Icon icon="mdi:chevron-right" className="text-slate-400" />
                <Link href="/services/lazernaya-kosmetologiya" className="hover:text-[#60c2ff] transition-colors duration-300">Р›Р°Р·РµСЂРЅР°СЏ РєРѕСЃРјРµС‚РѕР»РѕРіРёСЏ</Link>
                <Icon icon="mdi:chevron-right" className="text-slate-400" />
                <span className="text-slate-700 font-medium">РЈРґР°Р»РµРЅРёРµ С‚Р°С‚СѓР°Р¶Р°</span>
              </div>
            </section>

            {/* Hero Section */}
            <section className="reveal-up opacity-0 scroll-glow-item group">
              <div className="bg-[#050B14] rounded-[2rem] md:rounded-[3rem] p-8 md:py-16 md:px-20 min-h-[550px] md:min-h-[700px] relative overflow-hidden shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)] flex items-center border border-white/10 group-[.mobile-glow-active]:shadow-[#60c2ff]/30 transition-all duration-700">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent z-10"></div>
                  <img src="/images/tattoo-removal-hero.png" alt="РЈРґР°Р»РµРЅРёРµ С‚Р°С‚СѓР°Р¶Р° PicoCare" className="w-full h-full object-cover opacity-80 mix-blend-overlay transform scale-105 transition-transform duration-[3s] hover:scale-110" />
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
                </div>
                
                <div className="relative z-20 w-full max-w-4xl mt-auto md:mt-0 pt-32 md:pt-0">
                  <div className="inline-flex items-center gap-3 bg-[#60c2ff]/10 backdrop-blur-md text-[#60c2ff] px-5 py-2.5 rounded-full border border-[#60c2ff]/20 shadow-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white">В«РҐРѕР»РѕРґРЅРѕРµВ» СѓРґР°Р»РµРЅРёРµ Р±РµР· РѕР¶РѕРіРѕРІ</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light text-white leading-[1.0] uppercase tracking-[-0.04em] drop-shadow-2xl mb-6">
                    РЈРґР°Р»РµРЅРёРµ <br/> <span className="font-serif italic text-[#60c2ff]/80">С‚Р°С‚СѓР°Р¶Р°</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl font-light text-slate-300 leading-relaxed max-w-2xl mb-8">
                    РР·Р±Р°РІСЊС‚РµСЃСЊ РѕС‚ РЅРµРєР°С‡РµСЃС‚РІРµРЅРЅРѕРіРѕ РїРµСЂРјР°РЅРµРЅС‚РЅРѕРіРѕ РјР°РєРёСЏР¶Р° РЅР°РІСЃРµРіРґР° РЅР° РјРѕС‰РЅРѕРј РїРёРєРѕСЃРµРєСѓРЅРґРЅРѕРј Р»Р°Р·РµСЂРµ <span className="font-medium text-white">PicoCare</span>. Р‘РµР·РѕРїР°СЃРЅРѕ, Р±РµР· РїРѕРІСЂРµР¶РґРµРЅРёСЏ РєРѕР¶Рё Рё Р±РµР· РІС‹РїР°РґРµРЅРёСЏ РІРѕР»РѕСЃРєРѕРІ.
                  </p>
                  
                  <div className="flex flex-wrap gap-6 items-center">
                    <div className="relative inline-flex group/btn w-full sm:w-auto">
                      <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                      <button 
                        onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                        className="relative z-10 w-full px-8 py-5 flex items-center justify-center bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl min-w-[240px] gap-2"
                      >
                        Р—Р°РїРёСЃР°С‚СЊСЃСЏ Рє РІСЂР°С‡Сѓ
                        <Icon icon="solar:arrow-right-linear" className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Indications Section */}
            <section className="reveal-up opacity-0 flex flex-col items-center max-w-7xl mx-auto w-full relative z-10">
              <div className="text-center mb-16">
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџРѕРєР°Р·Р°РЅРёСЏ</span>
                <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                  Р—Р°С‡РµРј РЅСѓР¶РЅРѕ <span className="font-serif italic text-slate-400">СѓРґР°Р»РµРЅРёРµ</span>
                </h2>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full stagger-container">
                {indications.map((item, idx) => (
                  <div key={idx} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 sm:p-10 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden cursor-default stagger-item opacity-0 scroll-glow-item">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                      <Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors mb-3">{item.title}</h3>
                    <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cases Section (Before & After) */}
            <section className="reveal-up opacity-0 relative z-10 max-w-7xl mx-auto w-full">
               <div className="mb-16 text-center">
                 <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р­С„С„РµРєС‚</span>
                 <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                   Р РµР·СѓР»СЊС‚Р°С‚ <span className="font-serif italic text-slate-400">Р»РµС‡РµРЅРёСЏ</span>
                 </h2>
               </div>
               
               <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
                 {cases.map((c, i) => (
                   <div key={i} className="flex flex-col md:flex-row gap-4 sm:gap-6 bg-white/50 p-4 sm:p-6 rounded-[3rem] border border-white">
                     <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.1)] group flex-1 aspect-square sm:aspect-auto">
                       <img src={c.before} alt="Р”Рѕ" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                       <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-xs px-4 py-2 rounded-full font-bold tracking-widest">Р”Рћ</div>
                     </div>
                     <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-8">
                       <div className="w-[1px] h-full bg-slate-200"></div>
                     </div>
                     <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.15)] group flex-1 aspect-square sm:aspect-auto">
                       <img src={c.after} alt="РџРѕСЃР»Рµ" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                       <div className="absolute top-6 right-6 bg-[#60c2ff] text-white text-xs px-4 py-2 rounded-full font-bold tracking-widest shadow-md">РџРћРЎР›Р•</div>
                     </div>
                   </div>
                 ))}
               </div>
            </section>

            {/* Problem & Tech Section */}
            <section className="reveal-up opacity-0 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.05)] max-w-7xl mx-auto scroll-glow-item group">
               <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
                  <span className="text-xs uppercase tracking-widest text-[#60c2ff] font-bold block">вЂ” РРЅРЅРѕРІР°С†РёСЏ</span>
                  <h2 className="text-[2.5rem] md:text-5xl font-light text-slate-900 leading-tight">
                     Р’ С‡РµРј СЃРµРєСЂРµС‚ <span className="font-serif italic text-[#60c2ff]">PicoCare</span>
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mt-4">
                     Р’ РѕС‚Р»РёС‡РёРµ РѕС‚ СѓСЃС‚Р°СЂРµРІС€РёС… Р»Р°Р·РµСЂРѕРІ, РЅР°РіСЂРµРІР°СЋС‰РёС… РєСЂР°СЃРєСѓ, <span className="font-medium text-[#60c2ff]">PicoCare</span> РіРµРЅРµСЂРёСЂСѓРµС‚ РјРѕС‰РЅС‹Р№ РёРјРїСѓР»СЊСЃ Р·Р° РѕРґРЅСѓ С‚СЂРёР»Р»РёРѕРЅРЅСѓСЋ РґРѕР»СЋ СЃРµРєСѓРЅРґС‹ (РїРёРєРѕСЃРµРєСѓРЅРґСѓ). 
                  </p>
                  <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                     Р­С‚Р° РєРѕР»РѕСЃСЃР°Р»СЊРЅР°СЏ С„РѕС‚РѕР°РєСѓСЃС‚РёС‡РµСЃРєР°СЏ РІРѕР»РЅР° СЂР°Р·Р±РёРІР°РµС‚ РіСЂР°РЅСѓР»С‹ РїРёРіРјРµРЅС‚Р° РІ РјРµР»СЊС‡Р°Р№С€СѓСЋ РїС‹Р»СЊ Р±РµР· С‚РµСЂРјРёС‡РµСЃРєРѕРіРѕ РѕР¶РѕРіР° РѕРєСЂСѓР¶Р°СЋС‰РёС… С‚РєР°РЅРµР№. Р—Р°С‚РµРј Р»РёРјС„Р°С‚РёС‡РµСЃРєР°СЏ СЃРёСЃС‚РµРјР° РѕСЂРіР°РЅРёР·РјР° Р±РµСЃРїСЂРµРїСЏС‚СЃС‚РІРµРЅРЅРѕ РІС‹РІРѕРґРёС‚ РјРёРєСЂРѕС‡Р°СЃС‚РёС†С‹. РРјРµРЅРЅРѕ РїРѕСЌС‚РѕРјСѓ СѓРґР°Р»РµРЅРёРµ РїСЂРѕРёСЃС…РѕРґРёС‚ Р±РµР· С€СЂР°РјРѕРІ, Р±РѕР»Рё Рё РєРѕСЂРѕС‡РµРє.
                  </p>
               </div>
               <div className="w-full lg:w-1/2 relative rounded-[2.5rem] overflow-hidden aspect-[4/3] lg:h-[500px] shadow-2xl">
                   <img src="/images/tattoo-removal-process.png" alt="РџСЂРѕС†РµСЃСЃ Р»Р°Р·РµСЂРЅРѕРіРѕ СѓРґР°Р»РµРЅРёСЏ С‚Р°С‚СѓР°Р¶Р° PicoCare" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s]" />
               </div>
            </section>

            {/* Advantages (Numbered List) */}
            <section className="reveal-up opacity-0 max-w-6xl mx-auto w-full relative z-10">
              <div className="mb-16 border-b border-slate-200/50 pb-8 text-center sm:text-left">
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РўРµС…РЅРѕР»РѕРіРёРё</span>
                <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                  РџСЂРµРёРјСѓС‰РµСЃС‚РІР° <br className="hidden sm:block"/> <span className="font-serif italic text-slate-400">РјРµС‚РѕРґРёРєРё</span>
                </h2>
              </div>
              <div className="flex flex-col stagger-container">
                <EditorialList items={advantages} />
              </div>
            </section>

            {/* Steps Section */}
            <section className="reveal-up opacity-0 relative z-10 w-full max-w-6xl mx-auto scroll-glow-item group">
              <div className="bg-gradient-to-br from-[#FAFAFA] to-white rounded-[3rem] p-8 md:p-16 xl:p-20 shadow-[0_1rem_4rem_-1rem_rgba(0,0,0,0.05)] border border-white relative overflow-hidden transition-all duration-700 group-[.mobile-glow-active]:shadow-[#60c2ff]/20">
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-bl from-[#60c2ff]/5 to-transparent rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
                
                <h2 className="text-[2.5rem] md:text-5xl lg:text-[4rem] font-light text-slate-900 tracking-tight leading-tight mb-16 text-center relative z-10">
                  Р­С‚Р°РїС‹ <span className="font-serif italic text-[#60c2ff]">СѓРґР°Р»РµРЅРёСЏ</span>
                </h2>

                <div className="relative z-10 flex flex-col gap-16 md:gap-20">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-16 items-start group/step">
                      <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center text-2xl md:text-4xl text-[#60c2ff] font-light font-serif shadow-lg group-hover/step:bg-[#60c2ff] group-hover/step:text-white transition-colors duration-500 shrink-0 border border-slate-50 relative z-10">
                        {idx + 1}
                      </div>
                      <div className="flex-1 border-t border-slate-200/60 pt-6 md:pt-8 md:border-t-0 md:pt-0 relative">
                        <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-4">{step.title}</h3>
                        <p className="text-[17px] text-slate-600 font-light leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Prices Section */}
            <section className="reveal-up opacity-0 max-w-5xl mx-auto w-full">
              <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)] reveal-up opacity-0">
                <div className="mb-12 border-b border-slate-100 pb-6 text-center sm:text-left">
                  <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">
                    РЎС‚РѕРёРјРѕСЃС‚СЊ <span className="font-serif italic text-slate-400">СѓСЃР»СѓРі</span>
                  </h2>
                </div>
                <div className="flex flex-col divide-y divide-slate-100">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">РЈРґР°Р»РµРЅРёРµ С‚Р°С‚СѓР°Р¶Р° Р±СЂРѕРІРµР№ (PicoCare)</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100 shrink-0">РѕС‚ 4 000 в‚Ѕ</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">РЈРґР°Р»РµРЅРёРµ С‚Р°С‚СѓР°Р¶Р° РіСѓР± / РІРµРє (PicoCare)</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100 shrink-0">РѕС‚ 4 000 в‚Ѕ</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">РЈРґР°Р»РµРЅРёРµ РЅРµР±РѕР»СЊС€РѕР№ С‚Р°С‚СѓРёСЂРѕРІРєРё (РґРѕ 10 РєРІ. СЃРј)</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100 shrink-0">РѕС‚ 2 500 в‚Ѕ</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Doctors Section */}
            <section className="reveal-up opacity-0 flex flex-col items-center w-full max-w-7xl mx-auto">
               <div className="mb-16 text-center">
                <span className="text-xs uppercase tracking-widest text-[#60c2ff] font-bold mb-3">вЂ” Р­РєСЃРїРµСЂС‚С‹</span>
                <h2 className="text-[2.5rem] md:text-5xl font-light text-slate-900 tracking-tight leading-tight">
                  РџСЂРѕС†РµРґСѓСЂСѓ РїСЂРѕРІРѕРґСЏС‚ <span className="font-serif italic text-slate-400">РІСЂР°С‡Рё</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4 sm:px-0">
                {doctors.map((doc, i) => (
                  <div key={i} className="group/doc bg-white rounded-[2rem] overflow-hidden shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 flex flex-col">
                    <div className="aspect-[4/5] w-full relative overflow-hidden bg-slate-50">
                      <img src={doc.img} alt={doc.name} className="w-full h-full object-cover object-top transition-transform duration-[2s] group-hover/doc:scale-110 group-hover/doc:object-center" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-[#60c2ff] shadow-sm flex items-center gap-1">
                        <Icon icon="solar:verified-check-bold" /> Р’С‹СЃС€РµРµ РјРµРґ.
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-1 bg-white relative z-10">
                      <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-2 group-hover/doc:text-[#60c2ff] transition-colors">{doc.name}</h3>
                      <p className="text-base text-slate-500 font-light mb-4">{doc.role}</p>
                      <div className="mt-auto inline-flex items-center gap-2 bg-[#FAFAFA] border border-slate-100 px-4 py-2 rounded-xl w-fit">
                        <Icon icon="solar:medal-star-linear" className="text-[#60c2ff] text-xl" />
                        <span className="text-sm font-medium text-slate-600">{doc.exp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Aftercare */}
            <section className="reveal-up opacity-0 max-w-6xl mx-auto w-full bg-[#FAFAFA] p-8 md:p-16 rounded-[3rem] border border-slate-100 shadow-sm">
                <div className="mb-12 text-center">
                  <h2 className="text-3xl md:text-5xl font-light text-slate-900 tracking-tight">Р РµРєРѕРјРµРЅРґР°С†РёРё <span className="font-serif italic text-slate-400">РїРѕСЃР»Рµ С‚РµСЂР°РїРёРё</span></h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {aftercare.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-[2rem] shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] border border-slate-50 flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 text-[#60c2ff]">
                         <Icon icon={item.icon} className="text-2xl" />
                      </div>
                      <h4 className="text-lg font-medium text-slate-800 mb-2">{item.title}</h4>
                      <p className="text-base font-normal text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
            </section>

            {/* FAQ Form */}
            <section className="reveal-up opacity-0 flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-7xl mx-auto w-full items-start">
               <div className="w-full lg:w-1/3 sticky top-32">
                 <h2 className="text-3xl md:text-5xl font-light text-slate-900 leading-tight mb-6">
                   Р’РѕРїСЂРѕСЃС‹ <br className="hidden lg:block"/><span className="font-serif italic text-slate-400">Рё РѕС‚РІРµС‚С‹</span>
                 </h2>
                 <p className="text-lg text-slate-500 font-light mb-8">РЎРѕР±СЂР°Р»Рё РґР»СЏ РІР°СЃ РѕС‚РІРµС‚С‹ РЅР° С‡Р°СЃС‚Рѕ Р·Р°РґР°РІР°РµРјС‹Рµ РІРѕРїСЂРѕСЃС‹ РѕР± СѓРґР°Р»РµРЅРёРё РїРёРіРјРµРЅС‚Р°.</p>
                 <button 
                  onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                  className="hidden lg:flex px-8 py-4 bg-white border border-[#60c2ff] text-[#60c2ff] rounded-full font-medium hover:bg-[#60c2ff] hover:text-white transition-all duration-300 items-center justify-center gap-2"
                 >
                   Р—Р°РґР°С‚СЊ СЃРІРѕР№ РІРѕРїСЂРѕСЃ <Icon icon="solar:arrow-right-linear" className="text-xl" />
                 </button>
               </div>
               
               <div className="w-full lg:w-2/3 flex flex-col gap-4">
                 {faqData.map((item, i) => (
                   <div 
                    key={i} 
                    className={`bg-white border rounded-[2rem] overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-[#60c2ff]/30 shadow-[0_1rem_2.5rem_-0.5rem_rgba(96,194,255,0.1)]' : 'border-slate-100 hover:border-slate-200'}`}
                   >
                     <button 
                       className="w-full px-6 py-6 sm:px-8 sm:py-8 flex items-center justify-between text-left gap-4"
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                     >
                       <span className="text-lg sm:text-xl font-medium text-slate-800">{item.q}</span>
                       <div className={`w-10 h-10 shrink-0 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 bg-[#60c2ff]/10 text-[#60c2ff]' : ''}`}>
                         <Icon icon="solar:alt-arrow-down-linear" className="text-xl" />
                       </div>
                     </button>
                     <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                       <p className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-[17px] text-slate-600 font-light leading-relaxed border-t border-slate-50">
                         {item.a}
                       </p>
                     </div>
                   </div>
                 ))}
               </div>
            </section>

            {/* Dark CTA Bottom */}
            <section className="relative z-10 reveal-up opacity-0">
               <div className="relative overflow-hidden rounded-[3rem] bg-[#050B14] p-10 md:p-16 lg:p-24 border border-white/10 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)] max-w-6xl mx-auto">
                 <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[120px] pointer-events-none" />
                 <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#fbbf24]/5 rounded-full blur-[100px] pointer-events-none" />
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                 
                 <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
                   <div className="flex-1 text-center lg:text-left">
                     <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">
                       Р§РёСЃС‚Р°СЏ РєРѕР¶Р° <br />
                       <span className="font-serif italic text-slate-400">Р±РµР· СЃР»РµРґРѕРІ</span> С‚Р°С‚СѓР°Р¶Р°
                     </h2>
                     <p className="text-slate-400 font-light text-lg lg:text-xl mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                       РћСЃС‚Р°РІСЊС‚Рµ Р·Р°СЏРІРєСѓ РЅР° Р±РµСЃРїР»Р°С‚РЅСѓСЋ РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЋ. Р’СЂР°С‡ РїСЂРѕРІРµРґРµС‚ РѕСЃРјРѕС‚СЂ Рё РїРѕРґР±РµСЂРµС‚ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Р№ РїР»Р°РЅ Р±РµР·РѕРїР°СЃРЅРѕРіРѕ СѓРґР°Р»РµРЅРёСЏ.
                     </p>
                     
                     <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                       <div className="relative inline-flex group">
                         <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                         <button 
                           onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                           className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full text-lg font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3"
                         >
                           Р—Р°РїРёСЃР°С‚СЊСЃСЏ Рє РІСЂР°С‡Сѓ
                           <Icon icon="solar:arrow-right-linear" className="text-xl" />
                         </button>
                       </div>
                     </div>
                   </div>
                   
                   <div className="hidden lg:flex w-64 h-64 rounded-full border border-[#60c2ff]/20 relative items-center justify-center shrink-0">
                     <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div>
                     <div className="text-center">
                       <Icon icon="solar:magic-stick-3-bold-duotone" className="text-5xl text-[#60c2ff] mx-auto mb-3 opacity-90" />
                       <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/50 leading-tight">SkinMed<br/>Premium Care</span>
                     </div>
                   </div>
                 </div>
               </div>
            </section>

          </main>
            </div>
          </div>

      <div className="relative z-20 w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
