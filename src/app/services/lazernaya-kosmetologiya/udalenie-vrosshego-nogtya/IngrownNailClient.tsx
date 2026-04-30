'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import EditorialList from '@/components/EditorialList';

export default function IngrownNailClient() {
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
    { title: "РћСЃС‚СЂР°СЏ Р±РѕР»СЊ", desc: "Р РµР·РєР°СЏ Р±РѕР»СЊ РІ РїР°Р»СЊС†Рµ РїСЂРё С…РѕРґСЊР±Рµ, РґР°РІР»РµРЅРёРё РѕР±СѓРІРё РёР»Рё РґР°Р¶Рµ Р»РµРіРєРѕРј РїСЂРёРєРѕСЃРЅРѕРІРµРЅРёРё.", icon: "solar:health-linear" },
    { title: "Р’РѕСЃРїР°Р»РµРЅРёРµ Рё РѕС‚РµРє", desc: "РџРѕРєСЂР°СЃРЅРµРЅРёРµ, РїСЂРёРїСѓС…Р»РѕСЃС‚СЊ Рё Р¶Р°СЂ РІ РѕР±Р»Р°СЃС‚Рё Р±РѕРєРѕРІРѕРіРѕ РІР°Р»РёРєР° РЅРѕРіС‚СЏ.", icon: "solar:danger-triangle-linear" },
    { title: "РќР°РіРЅРѕРµРЅРёРµ", desc: "Р’С‹РґРµР»РµРЅРёРµ РіРЅРѕСЏ РёР»Рё СЃСѓРєСЂРѕРІРёС†С‹ РёР·-РїРѕРґ РЅРѕРіС‚РµРІРѕРіРѕ РІР°Р»РёРєР°, РїРѕСЏРІР»РµРЅРёРµ В«РґРёРєРѕРіРѕ РјСЏСЃР°В» (РіСЂР°РЅСѓР»СЏС†РёРѕРЅРЅРѕР№ С‚РєР°РЅРё).", icon: "solar:medical-kit-linear" },
    { title: "Р РµС†РёРґРёРІС‹", desc: "РќРѕРіРѕС‚СЊ РїРѕСЃС‚РѕСЏРЅРЅРѕ РІСЂР°СЃС‚Р°РµС‚ РїРѕСЃР»Рµ РѕР±С‹С‡РЅРѕРіРѕ С…РёСЂСѓСЂРіРёС‡РµСЃРєРѕРіРѕ СѓРґР°Р»РµРЅРёСЏ РІ РїРѕР»РёРєР»РёРЅРёРєРµ.", icon: "solar:refresh-circle-linear" },
    { title: "Р”РµС„РѕСЂРјР°С†РёСЏ РЅРѕРіС‚СЏ", desc: "РЈС‚РѕР»С‰РµРЅРёРµ, СЃРєСЂСѓС‡РёРІР°РЅРёРµ РїР»Р°СЃС‚РёРЅС‹ РёР·-Р·Р° С‚СЂР°РІРј, С‚РµСЃРЅРѕР№ РѕР±СѓРІРё РёР»Рё РіСЂРёР±РєРѕРІРѕР№ РёРЅС„РµРєС†РёРё.", icon: "solar:scissors-linear" },
    { title: "РћРіСЂР°РЅРёС‡РµРЅРёРµ Р°РєС‚РёРІРЅРѕСЃС‚Рё", desc: "РќРµРІРѕР·РјРѕР¶РЅРѕСЃС‚СЊ РЅРѕСЃРёС‚СЊ РјРѕРґРµР»СЊРЅСѓСЋ РѕР±СѓРІСЊ Рё Р·Р°РЅРёРјР°С‚СЊСЃСЏ СЃРїРѕСЂС‚РѕРј РёР·-Р·Р° Р±РѕР»Рё.", icon: "solar:walking-linear" },
  ];

  const advantages = [
    { title: "РЈРґР°Р»РµРЅРёРµ Р±РµР· РїРѕС‚РµСЂРё РЅРѕРіС‚СЏ", desc: "Р›Р°Р·РµСЂРѕРј РёСЃСЃРµРєР°РµС‚СЃСЏ С‚РѕР»СЊРєРѕ 1вЂ“2 РјРј РІСЂР°СЃС‚Р°СЋС‰РµРіРѕ РєСЂР°СЏ РїР»Р°СЃС‚РёРЅС‹. Р‘РѕР»СЊС€Р°СЏ С‡Р°СЃС‚СЊ РЅРѕРіС‚СЏ СЃРѕС…СЂР°РЅСЏРµС‚ СЃРІРѕР№ СЌСЃС‚РµС‚РёС‡РЅС‹Р№ РІРёРґ." },
    { title: "Р“Р°СЂР°РЅС‚РёСЏ РѕС‚ СЂРµС†РёРґРёРІРѕРІ", desc: "Р›Р°Р·РµСЂ РІС‹Р¶РёРіР°РµС‚ СЂРѕСЃС‚РєРѕРІСѓСЋ Р·РѕРЅСѓ (РјР°С‚СЂРёРєСЃ) РёРјРµРЅРЅРѕ РІ РјРµСЃС‚Рµ РІСЂР°СЃС‚Р°РЅРёСЏ, РїРѕСЌС‚РѕРјСѓ РЅРѕРіРѕС‚СЊ Р±РѕР»СЊС€Рµ РЅРёРєРѕРіРґР° РЅРµ Р±СѓРґРµС‚ СЂР°СЃС‚Рё РІР±РѕРє." },
    { title: "РЎС‚РµСЂРёР»СЊРЅРѕСЃС‚СЊ", desc: "Р›Р°Р·РµСЂРЅС‹Р№ Р»СѓС‡ СѓРЅРёС‡С‚РѕР¶Р°РµС‚ Р±Р°РєС‚РµСЂРёРё РІ РіРЅРѕР№РЅРѕРј РѕС‡Р°РіРµ, РїСЂРµРґРѕС‚РІСЂР°С‰Р°СЏ СЂР°СЃРїСЂРѕСЃС‚СЂР°РЅРµРЅРёРµ РёРЅС„РµРєС†РёРё." },
    { title: "Р‘С‹СЃС‚СЂР°СЏ СЂРµР°Р±РёР»РёС‚Р°С†РёСЏ", desc: "Р’ РѕС‚Р»РёС‡РёРµ РѕС‚ СЃРєР°Р»СЊРїРµР»СЏ, Р»Р°Р·РµСЂ РєРѕР°РіСѓР»РёСЂСѓРµС‚ СЃРѕСЃСѓРґС‹. Р’РѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёРµ РїСЂРѕС…РѕРґРёС‚ Р±С‹СЃС‚СЂРµРµ, Р±РµР· СЃРёР»СЊРЅРѕР№ РєСЂРѕРІРѕС‚РѕС‡РёРІРѕСЃС‚Рё." }
  ];

  const steps = [
    { title: "РћСЃРјРѕС‚СЂ Рё РґРёР°РіРЅРѕСЃС‚РёРєР°", desc: "РџРѕРґРѕР»РѕРі-С…РёСЂСѓСЂРі РѕС†РµРЅРёРІР°РµС‚ СЃС‚РµРїРµРЅСЊ РІСЂР°СЃС‚Р°РЅРёСЏ Рё РІРѕСЃРїР°Р»РµРЅРёСЏ." },
    { title: "РџСЂРѕРІРѕРґРЅРёРєРѕРІР°СЏ Р°РЅРµСЃС‚РµР·РёСЏ", desc: "РЈРєРѕР» Р°РЅРµСЃС‚РµС‚РёРєР° РІ РѕСЃРЅРѕРІР°РЅРёРµ РїР°Р»СЊС†Р°. Р§РµСЂРµР· РЅРµСЃРєРѕР»СЊРєРѕ РјРёРЅСѓС‚ РїР°Р»РµС† РїРѕР»РЅРѕСЃС‚СЊСЋ С‚РµСЂСЏРµС‚ С‡СѓРІСЃС‚РІРёС‚РµР»СЊРЅРѕСЃС‚СЊ." },
    { title: "РљСЂР°РµРІР°СЏ СЂРµР·РµРєС†РёСЏ", desc: "РЎ РїРѕРјРѕС‰СЊСЋ РёРЅСЃС‚СЂСѓРјРµРЅС‚Р° Рё CO2 Р»Р°Р·РµСЂР° РІСЂР°С‡ Р°РєРєСѓСЂР°С‚РЅРѕ РѕС‚РґРµР»СЏРµС‚ Рё СѓРґР°Р»СЏРµС‚ РІСЂР°СЃС‚Р°СЋС‰СѓСЋ РєСЂРѕРјРєСѓ РЅРѕРіС‚СЏ РІРјРµСЃС‚Рµ СЃ В«РґРёРєРёРј РјСЏСЃРѕРјВ»." },
    { title: "РЈРґР°Р»РµРЅРёРµ РјР°С‚СЂРёС†С‹", desc: "Р›Р°Р·РµСЂРѕРј РѕР±СЂР°Р±Р°С‚С‹РІР°РµС‚СЃСЏ РєРѕСЂРµРЅСЊ РЅРѕРіС‚СЏ РІ Р·РѕРЅРµ СѓРґР°Р»РµРЅРЅРѕР№ РєСЂРѕРјРєРё, С‡С‚РѕР±С‹ РѕРЅР° Р±РѕР»СЊС€Рµ РЅРµ РѕС‚СЂР°СЃС‚Р°Р»Р°. РќР°РєР»Р°РґС‹РІР°РµС‚СЃСЏ РїРѕРІСЏР·РєР°." }
  ];

  const aftercare = [
    { title: "РџРѕРєРѕР№", desc: "Р’ РїРµСЂРІС‹Р№ РґРµРЅСЊ РїРѕСЃР»Рµ РїСЂРѕС†РµРґСѓСЂС‹ РїРѕСЃС‚Р°СЂР°Р№С‚РµСЃСЊ РјРµРЅСЊС€Рµ С…РѕРґРёС‚СЊ Рё РґР°Р№С‚Рµ РЅРѕРіРµ РїРѕРєРѕР№.", icon: "solar:bed-linear" },
    { title: "РџРµСЂРµРІСЏР·РєРё", desc: "Р•Р¶РµРґРЅРµРІРЅРѕ РјРµРЅСЏР№С‚Рµ РїРѕРІСЏР·РєРё Рё РѕР±СЂР°Р±Р°С‚С‹РІР°Р№С‚Рµ СЂР°РЅСѓ Р°РЅС‚РёСЃРµРїС‚РёРєРѕРј СЃС‚СЂРѕРіРѕ РїРѕ РёРЅСЃС‚СЂСѓРєС†РёРё РІСЂР°С‡Р°.", icon: "solar:medical-kit-linear" },
    { title: "РЈРґРѕР±РЅР°СЏ РѕР±СѓРІСЊ", desc: "Р’ С‚РµС‡РµРЅРёРµ 2вЂ“3 РЅРµРґРµР»СЊ РЅРѕСЃРёС‚Рµ С‚РѕР»СЊРєРѕ С€РёСЂРѕРєСѓСЋ, РЅРµ СЃРґР°РІР»РёРІР°СЋС‰СѓСЋ РїР°Р»СЊС†С‹ РѕР±СѓРІСЊ.", icon: "solar:walking-linear" },
    { title: "РЎРЅСЏС‚РёРµ РІРѕСЃРїР°Р»РµРЅРёСЏ", desc: "РџСЂРё СЃРёР»СЊРЅРѕРј РѕС‚РµРєРµ РІСЂР°С‡ РјРѕР¶РµС‚ РЅР°Р·РЅР°С‡РёС‚СЊ Р·Р°Р¶РёРІР»СЏСЋС‰РёРµ РјР°Р·Рё РёР»Рё РІР°РЅРЅРѕС‡РєРё.", icon: "solar:leaf-linear" }
  ];

  const faqData = [
    { q: "РЎРЅРёРјР°СЋС‚ Р»Рё РІРµСЃСЊ РЅРѕРіРѕС‚СЊ С†РµР»РёРєРѕРј?", a: "РќРµС‚. РҐРёСЂСѓСЂРіРёС‡РµСЃРєРѕРµ СѓРґР°Р»РµРЅРёРµ РІСЃРµР№ РїР»Р°СЃС‚РёРЅС‹ вЂ” СЌС‚Рѕ СѓСЃС‚Р°СЂРµРІС€РёР№ Рё С‚СЂР°РІРјР°С‚РёС‡РЅС‹Р№ РјРµС‚РѕРґ. РњС‹ РїСЂРѕРІРѕРґРёРј РєСЂР°РµРІСѓСЋ СЂРµР·РµРєС†РёСЋ: СѓРґР°Р»СЏРµРј С‚РѕР»СЊРєРѕ СѓР·РєСѓСЋ РІСЂР°СЃС‚Р°СЋС‰СѓСЋ РїРѕР»РѕСЃРєСѓ, СЃРѕС…СЂР°РЅСЏСЏ РЅРѕРіС‚СЋ СЌСЃС‚РµС‚РёС‡РЅС‹Р№ РІРЅРµС€РЅРёР№ РІРёРґ." },
    { q: "Р‘РѕР»СЊРЅРѕ Р»Рё РґРµР»Р°С‚СЊ РѕРїРµСЂР°С†РёСЋ?", a: "Р‘Р»Р°РіРѕРґР°СЂСЏ РјРµСЃС‚РЅРѕР№ РїСЂРѕРІРѕРґРЅРёРєРѕРІРѕР№ Р°РЅРµСЃС‚РµР·РёРё РїСЂРѕС†РµРґСѓСЂР° РїСЂРѕС…РѕРґРёС‚ Р°Р±СЃРѕР»СЋС‚РЅРѕ Р±РµР·Р±РѕР»РµР·РЅРµРЅРЅРѕ. РќРµР±РѕР»СЊС€Р°СЏ Р±РѕР»РµР·РЅРµРЅРЅРѕСЃС‚СЊ РјРѕР¶РµС‚ РїРѕСЏРІРёС‚СЊСЃСЏ РїРѕСЃР»Рµ РѕРєРѕРЅС‡Р°РЅРёСЏ РґРµР№СЃС‚РІРёСЏ Р°РЅРµСЃС‚РµС‚РёРєР° (С‡РµСЂРµР· РЅРµСЃРєРѕР»СЊРєРѕ С‡Р°СЃРѕРІ), РѕРЅР° Р»РµРіРєРѕ СЃРЅРёРјР°РµС‚СЃСЏ РѕР±РµР·Р±РѕР»РёРІР°СЋС‰РёРјРё С‚Р°Р±Р»РµС‚РєР°РјРё." },
    { q: "РљР°РєРѕРІР° РІРµСЂРѕСЏС‚РЅРѕСЃС‚СЊ С‚РѕРіРѕ, С‡С‚Рѕ РЅРѕРіРѕС‚СЊ РІСЂР°СЃС‚РµС‚ СЃРЅРѕРІР°?", a: "РџСЂРё Р»Р°Р·РµСЂРЅРѕР№ РѕР±СЂР°Р±РѕС‚РєРµ РјР°С‚СЂРёРєСЃР° (РєРѕСЂРѕРЅСЏ РЅРѕРіС‚СЏ) СЂРµС†РёРґРёРІС‹ РїСЂР°РєС‚РёС‡РµСЃРєРё РёСЃРєР»СЋС‡РµРЅС‹. РњС‹ РґР°РµРј 99% РіР°СЂР°РЅС‚РёСЋ, С‡С‚Рѕ РІ СЌС‚РѕРј РјРµСЃС‚Рµ РЅРѕРіРѕС‚СЊ Р±РѕР»СЊС€Рµ РЅРµ РІСЂР°СЃС‚РµС‚." },
    { q: "Р§РµСЂРµР· РєР°РєРѕРµ РІСЂРµРјСЏ СЏ СЃРјРѕРіСѓ СЃРЅРѕРІР° РЅРѕСЃРёС‚СЊ РїСЂРёРІС‹С‡РЅСѓСЋ РѕР±СѓРІСЊ Рё Р·Р°РЅРёРјР°С‚СЊСЃСЏ СЃРїРѕСЂС‚РѕРј?", a: "РљР°Рє РїСЂР°РІРёР»Рѕ, РїРµСЂРёРѕРґ Р°РєС‚РёРІРЅРѕРіРѕ Р·Р°Р¶РёРІР»РµРЅРёСЏ РґР»РёС‚СЃСЏ РѕС‚ 7 РґРѕ 14 РґРЅРµР№. РџРѕСЃР»Рµ СЌС‚РѕРіРѕ РІС‹ СЃРјРѕР¶РµС‚Рµ РІРµСЂРЅСѓС‚СЊСЃСЏ Рє Р°РєС‚РёРІРЅРѕР№ Р¶РёР·РЅРё." }
  ];

    const doctors = [
     { name: "Специалист SkinMed", role: "Р“Р»Р°РІРЅС‹Р№ РІСЂР°С‡, РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕРІРµРЅРµСЂРѕР»РѕРі", exp: "РћРїС‹С‚ 15 Р»РµС‚", img: "/images/doctors/kachyurina.jpg" },
     { name: "Специалист SkinMed", role: "Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕР»РѕРі", exp: "РћРїС‹С‚ 10 Р»РµС‚", img: "/images/doctors/muhametzanova.jpg" },
     { name: "Специалист SkinMed", role: "Р’СЂР°С‡-РґРµСЂРјР°С‚РѕР»РѕРі, С‚СЂРёС…РѕР»РѕРі, РєРѕСЃРјРµС‚РѕР»РѕРі", exp: "РћРїС‹С‚ 12 Р»РµС‚", img: "/images/doctors/vorobyova.jpg" },
  ];

  const cases = [
    { before: "/images/ingrown-nail-before.png", after: "/images/ingrown-nail-after.png" }
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
                <span className="text-slate-700 font-medium">Р›РµС‡РµРЅРёРµ РІСЂРѕСЃС€РµРіРѕ РЅРѕРіС‚СЏ</span>
              </div>
            </section>

            {/* Hero Section */}
            <section className="reveal-up opacity-0 scroll-glow-item group">
              <div className="bg-[#050B14] rounded-[2rem] md:rounded-[3rem] p-8 md:py-16 md:px-20 min-h-[550px] md:min-h-[700px] relative overflow-hidden shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)] flex items-center border border-white/10 group-[.mobile-glow-active]:shadow-[#60c2ff]/30 transition-all duration-700">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent z-10"></div>
                  <img src="/images/ingrown-nail-hero.png" alt="РЈРґР°Р»РµРЅРёРµ РІСЂРѕСЃС€РµРіРѕ РЅРѕРіС‚СЏ Р»Р°Р·РµСЂРѕРј" className="w-full h-full object-cover opacity-80 mix-blend-overlay transform scale-105 transition-transform duration-[3s] hover:scale-110" />
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
                </div>
                
                <div className="relative z-20 w-full max-w-4xl mt-auto md:mt-0 pt-32 md:pt-0">
                  <div className="inline-flex items-center gap-3 bg-[#60c2ff]/10 backdrop-blur-md text-[#60c2ff] px-5 py-2.5 rounded-full border border-[#60c2ff]/20 shadow-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white">Р РµС€РµРЅРёРµ РїСЂРѕР±Р»РµРјС‹ РЅР°РІСЃРµРіРґР°</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light text-white leading-[1.0] uppercase tracking-[-0.04em] drop-shadow-2xl mb-6">
                    Р›РµС‡РµРЅРёРµ <br/> <span className="font-serif italic text-[#60c2ff]/80">РІСЂРѕСЃС€РµРіРѕ РЅРѕРіС‚СЏ</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl font-light text-slate-300 leading-relaxed max-w-2xl mb-8">
                    Р›Р°Р·РµСЂРЅР°СЏ РєСЂР°РµРІР°СЏ СЂРµР·РµРєС†РёСЏ СЃ СѓРґР°Р»РµРЅРёРµРј РјР°С‚СЂРёС†С‹. Р‘С‹СЃС‚СЂРѕРµ РёР·Р±Р°РІР»РµРЅРёРµ РѕС‚ РѕСЃС‚СЂРѕР№ Р±РѕР»Рё Рё РІРѕСЃРїР°Р»РµРЅРёСЏ Р±РµР· РїРѕС‚РµСЂРё РІСЃРµР№ РЅРѕРіС‚РµРІРѕР№ РїР»Р°СЃС‚РёРЅС‹.
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
                  РљРѕРіРґР° РЅРµРѕР±С…РѕРґРёРјР° <span className="font-serif italic text-slate-400">РїРѕРјРѕС‰СЊ</span>
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
                  <span className="text-xs uppercase tracking-widest text-[#60c2ff] font-bold block">вЂ” РҐРёСЂСѓСЂРіРёС‡РµСЃРєРёР№ CO2 Р»Р°Р·РµСЂ</span>
                  <h2 className="text-[2.5rem] md:text-5xl font-light text-slate-900 leading-tight">
                     РСЃСЃРµС‡РµРЅРёРµ СЃ РіР°СЂР°РЅС‚РёРµР№ РѕС‚ <span className="font-serif italic text-[#60c2ff]">СЂРµС†РёРґРёРІРѕРІ</span>
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mt-4">
                     РћР±С‹С‡РЅРѕРµ СѓРґР°Р»РµРЅРёРµ РЅРѕРіС‚СЏ С…РёСЂСѓСЂРіРѕРј С‡Р°СЃС‚Рѕ РїСЂРёРІРѕРґРёС‚ Рє С‚РѕРјСѓ, С‡С‚Рѕ РІРѕСЃРїР°Р»РµРЅРёРµ РІРѕР·РІСЂР°С‰Р°РµС‚СЃСЏ СЃРЅРѕРІР°. Р­С‚Рѕ СЃРІСЏР·Р°РЅРѕ СЃ С‚РµРј, С‡С‚Рѕ СЂРѕСЃС‚РєРѕРІР°СЏ Р·РѕРЅР° РЅРѕРіС‚СЏ (РјР°С‚СЂРёРєСЃ) РїСЂРѕРґРѕР»Р¶Р°РµС‚ С„РѕСЂРјРёСЂРѕРІР°С‚СЊ РёСЃРєСЂРёРІР»РµРЅРЅСѓСЋ РїР»Р°СЃС‚РёРЅСѓ.
                  </p>
                  <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                     РњС‹ РёСЃРїРѕР»СЊР·СѓРµРј СЃРѕРІСЂРµРјРµРЅРЅСѓСЋ РјРµС‚РѕРґРёРєСѓ: РєСЂР°РµРІСѓСЋ Р»Р°Р·РµСЂРЅСѓСЋ СЂРµР·РµРєС†РёСЋ. Р›СѓС‡ Р»Р°Р·РµСЂР° С‚РѕС‡РµС‡РЅРѕ РІС‹Р¶РёРіР°РµС‚ СѓР·РєСѓСЋ РїРѕР»РѕСЃРєСѓ РјР°С‚СЂРёРєСЃР° С‚РѕР»СЊРєРѕ РІ Р·РѕРЅРµ РІСЂР°СЃС‚Р°РЅРёСЏ. РџРѕСЃР»Рµ СЌС‚РѕРіРѕ РЅРѕРіРѕС‚СЊ СЃС‚Р°РЅРѕРІРёС‚СЃСЏ С‡СѓС‚СЊ СѓР¶Рµ, РЅРѕ Р±РѕР»СЊС€Рµ РЅРёРєРѕРіРґР° РЅРµ РІСЂРµР·Р°РµС‚СЃСЏ РІ РєРѕР¶Сѓ.
                  </p>
               </div>
               <div className="w-full lg:w-1/2 relative rounded-[2.5rem] overflow-hidden aspect-[4/3] lg:h-[500px] shadow-2xl">
                   <img src="/images/ingrown-nail-process.png" alt="РџСЂРѕС†РµСЃСЃ Р»РµС‡РµРЅРёСЏ РІСЂРѕСЃС€РµРіРѕ РЅРѕРіС‚СЏ" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s]" />
               </div>
            </section>

            {/* Advantages (Numbered List) */}
            <section className="reveal-up opacity-0 max-w-6xl mx-auto w-full relative z-10">
              <div className="mb-16 border-b border-slate-200/50 pb-8 text-center sm:text-left">
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџРѕС‡РµРјСѓ Р»Р°Р·РµСЂ</span>
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
                  Р­С‚Р°РїС‹ <span className="font-serif italic text-[#60c2ff]">Р»РµС‡РµРЅРёСЏ</span>
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
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">Р Р°РґРёРѕРІРѕР»РЅРѕРІР°СЏ/Р»Р°Р·РµСЂРЅР°СЏ РєСЂР°РµРІР°СЏ СЂРµР·РµРєС†РёСЏ РІСЂРѕСЃС€РµРіРѕ РЅРѕРіС‚СЏ СЃ СЂРѕСЃС‚РєРѕРІРѕР№ Р·РѕРЅРѕР№</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100 shrink-0">РѕС‚ 5 000 в‚Ѕ</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">РџР°СЂР°РЅРёС…РёР№ (РіРЅРѕР№РЅС‹Р№)</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100 shrink-0">РѕС‚ 2 000 в‚Ѕ</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">РђРЅРµСЃС‚РµР·РёСЏ РёРЅС„РёР»СЊС‚СЂР°С†РёРѕРЅРЅР°СЏ (РЈР±РёСЃС‚РµР·РёРЅ) РїСЂРѕРІРѕРґРЅРёРєРѕРІР°СЏ</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100 shrink-0">600 в‚Ѕ</span>
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
                 <p className="text-lg text-slate-500 font-light mb-8">РЎРѕР±СЂР°Р»Рё РґР»СЏ РІР°СЃ РѕС‚РІРµС‚С‹ РЅР° С‡Р°СЃС‚Рѕ Р·Р°РґР°РІР°РµРјС‹Рµ РІРѕРїСЂРѕСЃС‹.</p>
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
                       РћСЃРІРѕР±РѕРґРёС‚РµСЃСЊ <br />
                       <span className="font-serif italic text-slate-400">РѕС‚ Р±РѕР»Рё</span>
                     </h2>
                     <p className="text-slate-400 font-light text-lg lg:text-xl mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                       РћСЃС‚Р°РІСЊС‚Рµ Р·Р°СЏРІРєСѓ РЅР° Р»РµС‡РµРЅРёРµ РІСЂРѕСЃС€РµРіРѕ РЅРѕРіС‚СЏ. РџСЂРѕС†РµРґСѓСЂР° Р·Р°Р№РјРµС‚ РґРѕ 30 РјРёРЅСѓС‚: РІС‹ РёР·Р±Р°РІРёС‚РµСЃСЊ РѕС‚ Р±РѕР»Рё Рё РІРѕСЃРїР°Р»РµРЅРёСЏ СЃ РіР°СЂР°РЅС‚РёРµР№ СЂРµР·СѓР»СЊС‚Р°С‚Р°.
                     </p>
                     
                     <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                       <div className="relative inline-flex group">
                         <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                         <button 
                           onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                           className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full text-lg font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3"
                         >
                           Р—Р°РїРёСЃР°С‚СЊСЃСЏ Рє С…РёСЂСѓСЂРіСѓ
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
