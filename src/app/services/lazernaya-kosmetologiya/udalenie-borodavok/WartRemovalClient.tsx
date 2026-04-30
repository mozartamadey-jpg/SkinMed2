'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image';
import EditorialList from '@/components/EditorialList';

type ServiceImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

function ServiceImage(props: ServiceImageProps) {
  const { src, alt, sizes, priority = false, className = '' } = props;
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={90}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      className={className}
    />
  );
}

export default function WartRemovalClient() {
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
    { title: "РџРѕРґРѕС€РІРµРЅРЅС‹Рµ Р±РѕСЂРѕРґР°РІРєРё", desc: "Р“Р»СѓР±РѕРєРёРµ Рё Р±РѕР»РµР·РЅРµРЅРЅС‹Рµ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ РЅР° СЃС‚РѕРїР°С…, РјРµС€Р°СЋС‰РёРµ РЅРѕСЂРјР°Р»СЊРЅРѕР№ С…РѕРґСЊР±Рµ.", icon: "solar:adhesive-plaster-linear" },
    { title: "Р’СѓР»СЊРіР°СЂРЅС‹Рµ (РїСЂРѕСЃС‚С‹Рµ) Р±РѕСЂРѕРґР°РІРєРё", desc: "РџР»РѕС‚РЅС‹Рµ СЃСѓС…РёРµ РЅР°СЂРѕСЃС‚С‹, С‡Р°С‰Рµ РІСЃРµРіРѕ РІРѕР·РЅРёРєР°СЋС‰РёРµ РЅР° РїР°Р»СЊС†Р°С… Рё С‚С‹Р»СЊРЅРѕР№ СЃС‚РѕСЂРѕРЅРµ РєРёСЃС‚РµР№.", icon: "solar:danger-triangle-linear" },
    { title: "РџР»РѕСЃРєРёРµ Р±РѕСЂРѕРґР°РІРєРё", desc: "РњРЅРѕР¶РµСЃС‚РІРµРЅРЅС‹Рµ РјРµР»РєРёРµ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ, С‡Р°СЃС‚Рѕ РїРѕСЏРІР»СЏСЋС‰РёРµСЃСЏ РЅР° Р»РёС†Рµ РёР»Рё С€РµРµ.", icon: "solar:stars-linear" },
    { title: "РћРєРѕР»РѕРЅРѕРіС‚РµРІС‹Рµ Р±РѕСЂРѕРґР°РІРєРё", desc: "РћР±СЂР°Р·РѕРІР°РЅРёСЏ РІРѕРєСЂСѓРі РєСѓС‚РёРєСѓР»С‹, СЃРїРѕСЃРѕР±РЅС‹Рµ РґРµС„РѕСЂРјРёСЂРѕРІР°С‚СЊ РЅРѕРіС‚РµРІСѓСЋ РїР»Р°СЃС‚РёРЅСѓ.", icon: "solar:scissors-linear" },
    { title: "Р‘РѕР»РµР·РЅРµРЅРЅРѕСЃС‚СЊ", desc: "Р›СЋР±С‹Рµ РЅР°СЂРѕСЃС‚С‹, РєРѕС‚РѕСЂС‹Рµ Р±РѕР»СЏС‚ РїСЂРё РЅР°РґР°РІР»РёРІР°РЅРёРё РёР»Рё СЃР»СѓС‡Р°Р№РЅРѕРј С‚СЂРµРЅРёРё.", icon: "solar:heart-pulse-linear" },
    { title: "Р‘С‹СЃС‚СЂС‹Р№ СЂРѕСЃС‚", desc: "РЎС‚СЂРµРјРёС‚РµР»СЊРЅРѕРµ СѓРІРµР»РёС‡РµРЅРёРµ Р±РѕСЂРѕРґР°РІРєРё РёР»Рё РїРѕСЏРІР»РµРЅРёРµ РЅРѕРІС‹С… СЌР»РµРјРµРЅС‚РѕРІ (СЂР°СЃСЃРµРёРІР°РЅРёРµ РІРёСЂСѓСЃР°).", icon: "solar:graph-up-linear" },
  ];

  const advantages = [
    { title: "Р Р°РґРёРєР°Р»СЊРЅРѕРµ СѓРґР°Р»РµРЅРёРµ РєРѕСЂРЅСЏ", desc: "Р›Р°Р·РµСЂ РїРѕСЃР»РѕР№РЅРѕ РІС‹РїР°СЂРёРІР°РµС‚ РїРѕСЂР°Р¶РµРЅРЅС‹Рµ Р’РџР§ С‚РєР°РЅРё РґРѕ СЃР°РјРѕРіРѕ РѕСЃРЅРѕРІР°РЅРёСЏ, С‡С‚Рѕ РјРёРЅРёРјРёР·РёСЂСѓРµС‚ СЂРёСЃРє СЂРµС†РёРґРёРІР°." },
    { title: "РђР±СЃРѕР»СЋС‚РЅР°СЏ СЃС‚РµСЂРёР»СЊРЅРѕСЃС‚СЊ", desc: "Р‘РµСЃРєРѕРЅС‚Р°РєС‚РЅРѕРµ РІРѕР·РґРµР№СЃС‚РІРёРµ Рё РІС‹СЃРѕРєР°СЏ С‚РµРјРїРµСЂР°С‚СѓСЂР° Р»СѓС‡Р° СѓРЅРёС‡С‚РѕР¶Р°СЋС‚ РІРёСЂСѓСЃС‹ Рё Р±Р°РєС‚РµСЂРёРё РІ СЂР°РЅРµ." },
    { title: "Р‘РµСЃРєСЂРѕРІРЅРѕСЃС‚СЊ", desc: "РџСЂРѕС†РµРґСѓСЂР° Р°Р±СЃРѕР»СЋС‚РЅРѕ СЃСѓС…Р°СЏ вЂ” Р»Р°Р·РµСЂ РјРіРЅРѕРІРµРЅРЅРѕ РєРѕР°РіСѓР»РёСЂСѓРµС‚ СЃРѕСЃСѓРґС‹, РїРёС‚Р°СЋС‰РёРµ Р±РѕСЂРѕРґР°РІРєСѓ." },
    { title: "Р‘С‹СЃС‚СЂРѕРµ Р·Р°Р¶РёРІР»РµРЅРёРµ", desc: "РќР° РјРµСЃС‚Рµ РЅР°СЂРѕСЃС‚Р° РѕР±СЂР°Р·СѓРµС‚СЃСЏ СЃСѓС…Р°СЏ РєРѕСЂРѕС‡РєР°, РїРѕРґ РєРѕС‚РѕСЂРѕР№ Р°РєС‚РёРІРЅРѕ С„РѕСЂРјРёСЂСѓРµС‚СЃСЏ РЅРѕРІР°СЏ Р·РґРѕСЂРѕРІР°СЏ С‚РєР°РЅСЊ." }
  ];

  const steps = [
    { title: "РћСЃРјРѕС‚СЂ РІСЂР°С‡Р°", desc: "Р”РµСЂРјР°С‚РѕСЃРєРѕРїРёСЏ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ РґР»СЏ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ РІРёСЂСѓСЃРЅРѕР№ РїСЂРёСЂРѕРґС‹ Р±РѕСЂРѕРґР°РІРєРё." },
    { title: "РђРЅРµСЃС‚РµР·РёСЏ", desc: "РРЅСЉРµРєС†РёСЏ Р»РѕРєР°Р»СЊРЅРѕРіРѕ Р°РЅРµСЃС‚РµС‚РёРєР°. Р’С‹ РїРѕС‡СѓРІСЃС‚РІСѓРµС‚Рµ С‚РѕР»СЊРєРѕ Р»РµРіРєРёР№ СѓРєРѕР», СЃР°РјР° РїСЂРѕС†РµРґСѓСЂР° РїСЂРѕР№РґРµС‚ РЅРµР·Р°РјРµС‚РЅРѕ." },
    { title: "Р›Р°Р·РµСЂРЅР°СЏ РІР°РїРѕСЂРёР·Р°С†РёСЏ", desc: "Р’СЂР°С‡ С…РёСЂСѓСЂРіРёС‡РµСЃРєРёРј CO2 Р»Р°Р·РµСЂРѕРј РїРѕСЃР»РѕР№РЅРѕ РІС‹РїР°СЂРёРІР°РµС‚ Р±РѕСЂРѕРґР°РІРєСѓ РІРјРµСЃС‚Рµ СЃ РµРµ РіР»СѓР±РѕРєРёРј РєРѕСЂРЅРµРј." },
    { title: "РћР±СЂР°Р±РѕС‚РєР° Рё РїРѕРІСЏР·РєР°", desc: "РќР°РЅРµСЃРµРЅРёРµ Р°РЅС‚РёСЃРµРїС‚РёРєР° Рё, РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё (РЅР° СЃС‚РѕРїРµ РёР»Рё РїР°Р»СЊС†Рµ), РЅР°Р»РѕР¶РµРЅРёРµ СЃС‚РµСЂРёР»СЊРЅРѕР№ РїРѕРІСЏР·РєРё." }
  ];

  const aftercare = [
    { title: "РЎСѓС…РѕР№ СЂРµР¶РёРј", desc: "РќРµ РјРѕС‡РёС‚Рµ СЂР°РЅРєСѓ РїРµСЂРІС‹Рµ 2вЂ“3 РґРЅСЏ. РСЃРєР»СЋС‡РёС‚Рµ СЂР°СЃРїР°СЂРёРІР°РЅРёРµ РІ РіРѕСЂСЏС‡РµР№ РІРѕРґРµ.", icon: "solar:waterdrop-linear" },
    { title: "РђРЅС‚РёСЃРµРїС‚РёРєР°", desc: "РћР±СЂР°Р±Р°С‚С‹РІР°Р№С‚Рµ Р·РѕРЅСѓ Р°РЅС‚РёСЃРµРїС‚РёРєРѕРј (РњРёСЂР°РјРёСЃС‚РёРЅ/РҐР»РѕСЂРіРµРєСЃРёРґРёРЅ) РїРѕ СЂРµРєРѕРјРµРЅРґР°С†РёРё РІСЂР°С‡Р°.", icon: "solar:medical-kit-linear" },
    { title: "РЈРґРѕР±РЅР°СЏ РѕР±СѓРІСЊ", desc: "РџСЂРё СѓРґР°Р»РµРЅРёРё РЅР° СЃС‚РѕРїРµ РЅРѕСЃРёС‚Рµ СЃРІРѕР±РѕРґРЅСѓСЋ РѕР±СѓРІСЊ, С‡С‚РѕР±С‹ РёР·Р±РµР¶Р°С‚СЊ С‚СЂРµРЅРёСЏ.", icon: "solar:walking-linear" },
    { title: "РќРµ С‚СЂРѕРіР°С‚СЊ СЃС‚СЂСѓРї", desc: "РљРѕСЂРѕС‡РєР° РґРѕР»Р¶РЅР° РѕС‚РїР°СЃС‚СЊ РµСЃС‚РµСЃС‚РІРµРЅРЅС‹Рј РїСѓС‚РµРј (РґРѕ 2 РЅРµРґРµР»СЊ), РЅРµ РѕС‚РєРѕРІС‹СЂРёРІР°Р№С‚Рµ РµРµ.", icon: "solar:hand-stars-linear" }
  ];

  const faqData = [
    { q: "Р‘РѕР»СЊРЅРѕ Р»Рё СѓРґР°Р»СЏС‚СЊ РїРѕРґРѕС€РІРµРЅРЅСѓСЋ Р±РѕСЂРѕРґР°РІРєСѓ?", a: "РЎР°РјРѕ СѓРґР°Р»РµРЅРёРµ Р°Р±СЃРѕР»СЋС‚РЅРѕ Р±РµР·Р±РѕР»РµР·РЅРµРЅРЅРѕ, С‚Р°Рє РєР°Рє РјС‹ РёСЃРїРѕР»СЊР·СѓРµРј РєР°С‡РµСЃС‚РІРµРЅРЅСѓСЋ Р»РѕРєР°Р»СЊРЅСѓСЋ Р°РЅРµСЃС‚РµР·РёСЋ. Р’С‹ РјРѕР¶РµС‚Рµ РїРѕС‡СѓРІСЃС‚РІРѕРІР°С‚СЊ Р»РёС€СЊ Р»РµРіРєРёР№ СѓРєРѕР» РІ РјРѕРјРµРЅС‚ РІРІРµРґРµРЅРёСЏ Р°РЅРµСЃС‚РµС‚РёРєР°." },
    { q: "РџРѕС‡РµРјСѓ Р±РѕСЂРѕРґР°РІРєРё РїРѕСЏРІР»СЏСЋС‚СЃСЏ СЃРЅРѕРІР°?", a: "Р‘РѕСЂРѕРґР°РІРєРё РІС‹Р·С‹РІР°РµС‚ РІРёСЂСѓСЃ РїР°РїРёР»Р»РѕРјС‹ С‡РµР»РѕРІРµРєР° (Р’РџР§). Р•СЃР»Рё РёРјРјСѓРЅРёС‚РµС‚ СЃРЅРёР¶РµРЅ, РІРёСЂСѓСЃ РјРѕР¶РµС‚ СЃРїСЂРѕРІРѕС†РёСЂРѕРІР°С‚СЊ СЂРѕСЃС‚ РЅРѕРІРѕРіРѕ СЌР»РµРјРµРЅС‚Р° СЂСЏРґРѕРј. РўР°РєР¶Рµ СЂРµС†РёРґРёРІ РІРѕР·РјРѕР¶РµРЅ РїСЂРё РЅРµРїРѕР»РЅРѕРј СѓРґР°Р»РµРЅРёРё РєРѕСЂРЅСЏ (РЅР°РїСЂРёРјРµСЂ, РїСЂРё РїРѕРїС‹С‚РєР°С… РїСЂРёР¶РµС‡СЊ С‡РёСЃС‚РѕС‚РµР»РѕРј РґРѕРјР°)." },
    { q: "РљР°Рє РґРѕР»РіРѕ Р·Р°Р¶РёРІР°РµС‚ СЂР°РЅР°?", a: "РќРµР±РѕР»СЊС€РёРµ Р±РѕСЂРѕРґР°РІРєРё РЅР° СЂСѓРєР°С… Р·Р°Р¶РёРІР°СЋС‚ Р·Р° 7вЂ“10 РґРЅРµР№. Р“Р»СѓР±РѕРєРёРµ РїРѕРґРѕС€РІРµРЅРЅС‹Рµ Р±РѕСЂРѕРґР°РІРєРё Р·Р°Р¶РёРІР°СЋС‚ РґРѕР»СЊС€Рµ вЂ” РѕС‚ 2 РґРѕ 4 РЅРµРґРµР»СЊ, С‚Р°Рє РєР°Рє РєРѕСЂРµРЅСЊ РЅР°С…РѕРґРёС‚СЃСЏ РіР»СѓР±РѕРєРѕ РІ РґРµСЂРјРµ." },
    { q: "РњРѕР¶РЅРѕ Р»Рё СѓРґР°Р»РёС‚СЊ Р±РѕСЂРѕРґР°РІРєСѓ СЂРµР±РµРЅРєСѓ?", a: "Р”Р°, РјС‹ СѓРґР°Р»СЏРµРј РІРёСЂСѓСЃРЅС‹Рµ Р±РѕСЂРѕРґР°РІРєРё РґРµС‚СЏРј СЃ РїСЂРёРјРµРЅРµРЅРёРµРј Р°РґРµРєРІР°С‚РЅРѕРіРѕ РѕР±РµР·Р±РѕР»РёРІР°РЅРёСЏ Рё РјР°РєСЃРёРјР°Р»СЊРЅРѕ С‰Р°РґСЏС‰РёС… СЂРµР¶РёРјРѕРІ Р»Р°Р·РµСЂР°." }
  ];

    const doctors = [
     { name: "Специалист SkinMed", role: "Р“Р»Р°РІРЅС‹Р№ РІСЂР°С‡, РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕРІРµРЅРµСЂРѕР»РѕРі", exp: "РћРїС‹С‚ 15 Р»РµС‚", img: "/images/doctors/kachyurina.jpg" },
     { name: "Специалист SkinMed", role: "Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕР»РѕРі", exp: "РћРїС‹С‚ 10 Р»РµС‚", img: "/images/doctors/muhametzanova.jpg" },
     { name: "Специалист SkinMed", role: "Р’СЂР°С‡-РґРµСЂРјР°С‚РѕР»РѕРі, С‚СЂРёС…РѕР»РѕРі, РєРѕСЃРјРµС‚РѕР»РѕРі", exp: "РћРїС‹С‚ 12 Р»РµС‚", img: "/images/doctors/vorobyova.jpg" },
  ];

  const cases = [
    { before: "/images/wart-removal-before.png", after: "/images/wart-removal-after.png" }
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
                <span className="text-slate-700 font-medium">РЈРґР°Р»РµРЅРёРµ Р±РѕСЂРѕРґР°РІРѕРє</span>
              </div>
            </section>

            {/* Hero Section */}
            <section className="reveal-up opacity-0 scroll-glow-item group">
              <div className="bg-[#050B14] rounded-[2rem] md:rounded-[3rem] p-8 md:py-16 md:px-20 min-h-[550px] md:min-h-[700px] relative overflow-hidden shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)] flex items-center border border-white/10 group-[.mobile-glow-active]:shadow-[#60c2ff]/30 transition-all duration-700">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent z-10"></div>
                  <ServiceImage src="/images/wart-removal-hero.png" alt="РЈРґР°Р»РµРЅРёРµ Р±РѕСЂРѕРґР°РІРѕРє РЎРћ2 Р»Р°Р·РµСЂРѕРј" sizes="100vw" priority className="w-full h-full object-cover opacity-80 mix-blend-overlay scale-[1.02] md:group-hover:scale-[1.04] transition-transform duration-[2s]" />
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
                </div>
                
                <div className="relative z-20 w-full max-w-4xl mt-auto md:mt-0 pt-32 md:pt-0">
                  <div className="inline-flex items-center gap-3 bg-[#60c2ff]/10 backdrop-blur-md text-[#60c2ff] px-5 py-2.5 rounded-full border border-[#60c2ff]/20 shadow-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white">РЈРґР°Р»РµРЅРёРµ СЃ РєРѕСЂРЅРµРј</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light text-white leading-[1.0] uppercase tracking-[-0.04em] drop-shadow-2xl mb-6">
                    РЈРґР°Р»РµРЅРёРµ <br/> <span className="font-serif italic text-[#60c2ff]/80">Р±РѕСЂРѕРґР°РІРѕРє</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl font-light text-slate-300 leading-relaxed max-w-2xl mb-8">
                    Р­С„С„РµРєС‚РёРІРЅРѕРµ Р»Р°Р·РµСЂРЅРѕРµ Р»РµС‡РµРЅРёРµ РїРѕРґРѕС€РІРµРЅРЅС‹С…, РїР»РѕСЃРєРёС… Рё РѕРєРѕР»РѕРЅРѕРіС‚РµРІС‹С… Р±РѕСЂРѕРґР°РІРѕРє. Р‘РµР· Р±РѕР»Рё, СЃ РјРёРЅРёРјР°Р»СЊРЅС‹Рј СЂРёСЃРєРѕРј СЂРµС†РёРґРёРІР° Р±Р»Р°РіРѕРґР°СЂСЏ РїРѕР»РЅРѕРјСѓ РІС‹РїР°СЂРёРІР°РЅРёСЋ РєРѕСЂРЅСЏ.
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
                       <ServiceImage src={c.before} alt="Р”Рѕ" sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-full object-cover md:group-hover:scale-[1.03] transition-transform duration-700" />
                       <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-xs px-4 py-2 rounded-full font-bold tracking-widest">Р”Рћ</div>
                     </div>
                     <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-8">
                       <div className="w-[1px] h-full bg-slate-200"></div>
                     </div>
                     <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.15)] group flex-1 aspect-square sm:aspect-auto">
                       <ServiceImage src={c.after} alt="РџРѕСЃР»Рµ" sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-full object-cover md:group-hover:scale-[1.03] transition-transform duration-700" />
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
                     РЈРЅРёС‡С‚РѕР¶РµРЅРёРµ РІРёСЂСѓСЃР° СЃ <span className="font-serif italic text-[#60c2ff]">РєРѕСЂРЅРµРј</span>
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mt-4">
                     Р“Р»Р°РІРЅР°СЏ РїСЂРѕР±Р»РµРјР° Р±РѕСЂРѕРґР°РІРѕРє (РѕСЃРѕР±РµРЅРЅРѕ РїРѕРґРѕС€РІРµРЅРЅС‹С…) вЂ” РёС… РіР»СѓР±РѕРєРѕ Р·Р°Р»РµРіР°СЋС‰РёР№ РєРѕСЂРµРЅСЊ, РїСЂРѕРЅРёР·Р°РЅРЅС‹Р№ РєСЂРѕРІРµРЅРѕСЃРЅС‹РјРё РєР°РїРёР»Р»СЏСЂР°РјРё, РїРёС‚Р°СЋС‰РёРјРё РІРёСЂСѓСЃ. 
                  </p>
                  <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                     РҐРёСЂСѓСЂРіРёС‡РµСЃРєРёР№ CO2-Р»Р°Р·РµСЂ РїРѕР·РІРѕР»СЏРµС‚ РІСЂР°С‡Сѓ СЃР»РѕР№ Р·Р° СЃР»РѕРµРј РІС‹РїР°СЂРёРІР°С‚СЊ РїРѕСЂР°Р¶РµРЅРЅС‹Рµ С‚РєР°РЅРё СЂРѕРІРЅРѕ РґРѕ С‚РѕРіРѕ РјРѕРјРµРЅС‚Р°, РїРѕРєР° РєРѕСЂРµРЅСЊ РЅРµ Р±СѓРґРµС‚ РїРѕР»РЅРѕСЃС‚СЊСЋ СѓРЅРёС‡С‚РѕР¶РµРЅ. Р’С‹СЃРѕРєР°СЏ С‚РµРјРїРµСЂР°С‚СѓСЂР° Р»Р°Р·РµСЂР° РјРіРЅРѕРІРµРЅРЅРѕ СѓР±РёРІР°РµС‚ РІРёСЂСѓСЃРЅС‹Рµ С‡Р°СЃС‚РёС†С‹. Р­С‚Рѕ РµРґРёРЅСЃС‚РІРµРЅРЅР°СЏ РјРµС‚РѕРґРёРєР°, РѕР±РµСЃРїРµС‡РёРІР°СЋС‰Р°СЏ СЃС‚РѕР№РєРёР№ СЂРµР·СѓР»СЊС‚Р°С‚ Р±РµР· РїРѕСЃС‚РѕСЏРЅРЅС‹С… СЂРµС†РёРґРёРІРѕРІ.
                  </p>
               </div>
               <div className="w-full lg:w-1/2 relative rounded-[2.5rem] overflow-hidden aspect-[4/3] lg:h-[500px] shadow-2xl">
                  <ServiceImage src="/images/wart-removal-process.png" alt="РџСЂРѕС†РµСЃСЃ СѓРґР°Р»РµРЅРёСЏ Р±РѕСЂРѕРґР°РІРєРё" sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover md:group-hover:scale-[1.03] transition-transform duration-700" />
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
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">РЈРґР°Р»РµРЅРёРµ Р±РѕСЂРѕРґР°РІРєРё РІСѓР»СЊРіР°СЂРЅРѕР№ (РѕС‚ 0.5СЃРј)</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100 shrink-0">РѕС‚ 1 000 в‚Ѕ</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">РЈРґР°Р»РµРЅРёРµ РїРѕРґРѕС€РІРµРЅРЅРѕР№ Р±РѕСЂРѕРґР°РІРєРё (РґРѕ 1 СЃРј)</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100 shrink-0">РѕС‚ 1 500 в‚Ѕ</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">РђРЅРµСЃС‚РµР·РёСЏ РёРЅС„РёР»СЊС‚СЂР°С†РёРѕРЅРЅР°СЏ (РЈР±РёСЃС‚РµР·РёРЅ)</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100 shrink-0">500 в‚Ѕ</span>
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
                      <ServiceImage src={doc.img} alt={doc.name} sizes="(max-width: 1024px) 50vw, 25vw" className="w-full h-full object-cover object-top transition-transform duration-700 md:group-hover/doc:scale-[1.04]" />
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
                 <p className="text-lg text-slate-500 font-light mb-8">РЎРѕР±СЂР°Р»Рё РґР»СЏ РІР°СЃ РѕС‚РІРµС‚С‹ РЅР° С‡Р°СЃС‚Рѕ Р·Р°РґР°РІР°РµРјС‹Рµ РІРѕРїСЂРѕСЃС‹ РѕР± СѓРґР°Р»РµРЅРёРё Р±РѕСЂРѕРґР°РІРѕРє.</p>
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
                       РҐРѕРґРёС‚Рµ <br />
                       <span className="font-serif italic text-slate-400">Р±РµР· Р±РѕР»Рё</span>
                     </h2>
                     <p className="text-slate-400 font-light text-lg lg:text-xl mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                       РћСЃС‚Р°РІСЊС‚Рµ Р·Р°СЏРІРєСѓ РЅР° СѓРґР°Р»РµРЅРёРµ РїРѕРґРѕС€РІРµРЅРЅС‹С… РёР»Рё РІСѓР»СЊРіР°СЂРЅС‹С… Р±РѕСЂРѕРґР°РІРѕРє. РџСЂРѕС†РµРґСѓСЂР° Р·Р°РЅРёРјР°РµС‚ РЅРµ Р±РѕР»СЊС€Рµ 15 РјРёРЅСѓС‚ РїРѕРґ РЅР°РґРµР¶РЅРѕР№ Р°РЅРµСЃС‚РµР·РёРµР№.
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
