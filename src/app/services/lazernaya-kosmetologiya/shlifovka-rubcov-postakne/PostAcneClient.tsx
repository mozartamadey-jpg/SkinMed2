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

export default function PostAcneClient() {
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
    { title: "РђС‚СЂРѕС„РёС‡РµСЃРєРёРµ СЂСѓР±С†С‹", desc: "РЇРјРєРё Рё РІРїР°РґРёРЅРєРё РЅР° РєРѕР¶Рµ (В«СЃРєРѕР»РѕС‚С‹РµВ», В«РїСЂСЏРјРѕСѓРіРѕР»СЊРЅС‹РµВ» Рё В«Р·Р°РєСЂСѓРіР»РµРЅРЅС‹РµВ» СЂСѓР±С†С‹), РѕСЃС‚Р°РІС€РёРµСЃСЏ РїРѕСЃР»Рµ РіР»СѓР±РѕРєРёС… РІРѕСЃРїР°Р»РµРЅРёР№.", icon: "solar:adhesive-plaster-linear" },
    { title: "Р—Р°СЃС‚РѕР№РЅС‹Рµ РїСЏС‚РЅР°", desc: "РЎРёРЅСЋС€РЅС‹Рµ, РєСЂР°СЃРЅС‹Рµ РёР»Рё РєРѕСЂРёС‡РЅРµРІС‹Рµ РїСЏС‚РЅР° (РіРёРїРµСЂРїРёРіРјРµРЅС‚Р°С†РёСЏ), СЃРѕС…СЂР°РЅСЏСЋС‰РёРµСЃСЏ РјРµСЃСЏС†Р°РјРё РїРѕСЃР»Рµ Р·Р°Р¶РёРІР»РµРЅРёСЏ РїСЂС‹С‰РµР№.", icon: "solar:danger-triangle-linear" },
    { title: "РќРµСЂРѕРІРЅС‹Р№ СЂРµР»СЊРµС„", desc: "РћР±С‰Р°СЏ Р±СѓРіСЂРёСЃС‚РѕСЃС‚СЊ Рё РІРёР·СѓР°Р»СЊРЅР°СЏ В«СЂС‹С…Р»РѕСЃС‚СЊВ» РёР»Рё В«СѓСЃС‚Р°Р»РѕСЃС‚СЊВ» РєРѕР¶Рё Р»РёС†Р°.", icon: "solar:layers-minimalistic-linear" },
    { title: "Р Р°СЃС€РёСЂРµРЅРЅС‹Рµ РїРѕСЂС‹", desc: "В«РљСЂР°С‚РµСЂРѕРѕР±СЂР°Р·РЅС‹РµВ» РїРѕСЂС‹, РїРѕС‚РµСЂСЏРІС€РёРµ СЃРІРѕСЋ СЌР»Р°СЃС‚РёС‡РЅРѕСЃС‚СЊ РёР·-Р·Р° РїРµСЂРµРЅРµСЃРµРЅРЅРѕРіРѕ РІРѕСЃРїР°Р»РµРЅРёСЏ.", icon: "solar:stars-linear" },
    { title: "РЎРєСЂС‹С‚С‹Рµ РјРёРєСЂРѕСЂСѓР±С†С‹", desc: "РЎРЅРёР¶РµРЅРёРµ С‚СѓСЂРіРѕСЂР° Рё РїР»РѕС‚РЅРѕСЃС‚Рё РєРѕР¶Рё РІ Р·РѕРЅР°С… РІС‹СЃС‹РїР°РЅРёР№ (С‰РµРєРё, РїРѕРґР±РѕСЂРѕРґРѕРє, РІРёСЃРєРё).", icon: "solar:health-linear" },
    { title: "Р“РёРїРµСЂС‚СЂРѕС„РёС‡РµСЃРєРёРµ С€СЂР°РјС‹", desc: "РџР»РѕС‚РЅС‹Рµ, РІС‹РїСѓРєР»С‹Рµ, РІРѕР·РІС‹С€Р°СЋС‰РёРµСЃСЏ РЅР°Рґ РїРѕРІРµСЂС…РЅРѕСЃС‚СЊСЋ РєРѕР¶Рё СЂСѓР±С†С‹ РЅР° РјРµСЃС‚Рµ Р±С‹РІС€РёС… СѓР·Р»РѕРІ.", icon: "solar:shield-check-linear" },
  ];

  const advantages = [
    { title: "Р”РІРѕР№РЅРѕРµ РґРµР№СЃС‚РІРёРµ", desc: "Р›Р°Р·РµСЂ РЅРµ С‚РѕР»СЊРєРѕ РІС‹РїР°СЂРёРІР°РµС‚ СЃС‚Р°СЂСѓСЋ СЂСѓР±С†РѕРІСѓСЋ С‚РєР°РЅСЊ, РЅРѕ Рё Р·Р°РїСѓСЃРєР°РµС‚ РјРѕС‰РЅС‹Р№ СЃРёРЅС‚РµР· РЅРѕРІРѕРіРѕ РєРѕР»Р»Р°РіРµРЅР°, РєРѕС‚РѕСЂС‹Р№ В«РІС‹С‚Р°Р»РєРёРІР°РµС‚В» СЏРјРєРё РёР·РЅСѓС‚СЂРё." },
    { title: "РљРѕРЅС‚СЂРѕР»РёСЂСѓРµРјР°СЏ РіР»СѓР±РёРЅР°", desc: "Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі СЃ С‚РѕС‡РЅРѕСЃС‚СЊСЋ РґРѕ РјРёРєСЂРѕРЅ РЅР°СЃС‚СЂР°РёРІР°РµС‚ РіР»СѓР±РёРЅСѓ РїСЂРѕРЅРёРєРЅРѕРІРµРЅРёСЏ Р»СѓС‡Р° РґР»СЏ РєР°Р¶РґРѕРіРѕ С‚РёРїР° СЂСѓР±С†Р° (Ice Pick, Boxcar, Rolling)." },
    { title: "Р¤СЂР°РєС†РёРѕРЅРЅР°СЏ С‚РµС…РЅРѕР»РѕРіРёСЏ", desc: "Р›СѓС‡ РїРѕРґР°РµС‚СЃСЏ РІ РІРёРґРµ СЃРµС‚РєРё. РќРµС‚СЂРѕРЅСѓС‚С‹Рµ РєР»РµС‚РєРё РјРµР¶РґСѓ РјРёРєСЂРѕР·РѕРЅР°РјРё РїРѕРІСЂРµР¶РґРµРЅРёСЏ РѕР±РµСЃРїРµС‡РёРІР°СЋС‚ СЃРІРµСЂС…Р±С‹СЃС‚СЂСѓСЋ СЂРµРіРµРЅРµСЂР°С†РёСЋ." },
    { title: "РЎС‚РѕР№РєРёР№ СЂРµР·СѓР»СЊС‚Р°С‚", desc: "Р РµРјРѕРґРµР»РёСЂРѕРІР°РЅРёРµ РєРѕР¶Рё РїСЂРѕРґРѕР»Р¶Р°РµС‚СЃСЏ РІ С‚РµС‡РµРЅРёРµ 3вЂ“6 РјРµСЃСЏС†РµРІ РїРѕСЃР»Рµ СЃРµР°РЅСЃР°, РѕР±РµСЃРїРµС‡РёРІР°СЏ РЅР°СЂР°СЃС‚Р°СЋС‰РёР№ Рё РїРѕСЃС‚РѕСЏРЅРЅС‹Р№ СЌС„С„РµРєС‚." }
  ];

  const steps = [
    { title: "РљРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ", desc: "РћС†РµРЅРєР° С‚РёРїР° СЂСѓР±С†РѕРІ (СЃРєРѕР»РѕС‚С‹Рµ, РїСЂСЏРјРѕСѓРіРѕР»СЊРЅС‹Рµ РёР»Рё Р·Р°РєСЂСѓРіР»РµРЅРЅС‹Рµ) Рё РїРѕРґР±РѕСЂ РїР°СЂР°РјРµС‚СЂРѕРІ С„СЂР°РєС†РёРѕРЅРЅРѕРіРѕ Р°Р±Р»СЏС‚РёРІРЅРѕРіРѕ Р»Р°Р·РµСЂР°." },
    { title: "РђРЅРµСЃС‚РµР·РёСЏ", desc: "РќР°РЅРµСЃРµРЅРёРµ РјРѕС‰РЅРѕРіРѕ Р°РїРїР»РёРєР°С†РёРѕРЅРЅРѕРіРѕ РєСЂРµРјР°-Р°РЅРµСЃС‚РµС‚РёРєР° (РїРѕРґ РїР»РµРЅРєСѓ РЅР° 30вЂ“40 РјРёРЅСѓС‚) РґР»СЏ РєРѕРјС„РѕСЂС‚Р° РїСЂРѕС†РµРґСѓСЂС‹." },
    { title: "Р›Р°Р·РµСЂРЅР°СЏ С€Р»РёС„РѕРІРєР°", desc: "РћР±СЂР°Р±РѕС‚РєР° Р·РѕРЅ РїРѕСЃС‚Р°РєРЅРµ. Р’С‹ РјРѕР¶РµС‚Рµ С‡СѓРІСЃС‚РІРѕРІР°С‚СЊ РёРЅС‚РµРЅСЃРёРІРЅРѕРµ С‚РµРїР»Рѕ Рё Р»РµРіРєРѕРµ РїРѕРєР°Р»С‹РІР°РЅРёРµ." },
    { title: "РћС…Р»Р°Р¶РґРµРЅРёРµ Рё Р·Р°С‰РёС‚Р°", desc: "РќР°РЅРµСЃРµРЅРёРµ СѓСЃРїРѕРєР°РёРІР°СЋС‰РёС… СЂРµРіРµРЅРµСЂРёСЂСѓСЋС‰РёС… РјР°Р·РµР№. Р’СЂР°С‡ РІС‹РґР°РµС‚ РїРѕРґСЂРѕР±РЅСѓСЋ РёРЅСЃС‚СЂСѓРєС†РёСЋ РїРѕ РґРѕРјР°С€РЅРµРјСѓ СѓС…РѕРґСѓ." }
  ];

  const aftercare = [
    { title: "РРЅС‚РµРЅСЃРёРІРЅС‹Р№ СѓС…РѕРґ", desc: "РќР°РЅРѕСЃРёС‚Рµ СЂРµРєРѕРјРµРЅРґРѕРІР°РЅРЅС‹Р№ РІСЂР°С‡РѕРј Р·Р°Р¶РёРІР»СЏСЋС‰РёР№ РєСЂРµРј (Р‘РµРїР°РЅС‚РµРЅ/РџР°РЅС‚РµРЅРѕР») РїР»РѕС‚РЅС‹Рј СЃР»РѕРµРј РєР°Р¶РґС‹Рµ 2-3 С‡Р°СЃР°.", icon: "solar:medical-kit-linear" },
    { title: "РћС‚РєР°Р· РѕС‚ СѓРјС‹РІР°РЅРёСЏ", desc: "РџРµСЂРІС‹Рµ СЃСѓС‚РєРё РЅРµР»СЊР·СЏ СѓРјС‹РІР°С‚СЊСЃСЏ РІРѕРґРѕР№. Р—Р°С‚РµРј С‚РѕР»СЊРєРѕ РјСЏРіРєРѕРµ РѕСЂРѕС€РµРЅРёРµ Р°РЅС‚РёСЃРµРїС‚РёРєРѕРј Р±РµР· С‚СЂРµРЅРёСЏ.", icon: "solar:waterdrop-linear" },
    { title: "Р‘РµР· С‚РµРїР»Р° Рё СЃРїРѕСЂС‚Р°", desc: "РСЃРєР»СЋС‡РёС‚Рµ Р±Р°РЅРё, СЃР°СѓРЅС‹, РёРЅС‚РµРЅСЃРёРІРЅС‹Р№ СЃРїРѕСЂС‚ Рё Р°Р»РєРѕРіРѕР»СЊ РЅР° 2 РЅРµРґРµР»Рё, С‡С‚РѕР±С‹ РёР·Р±РµР¶Р°С‚СЊ СЃРёР»СЊРЅРѕРіРѕ РѕС‚РµРєР°.", icon: "solar:temperature-linear" },
    { title: "Р—Р°С‰РёС‚Р° SPF 50+", desc: "РџРѕСЃР»Рµ СЃС…РѕР¶РґРµРЅРёСЏ РєРѕСЂРѕС‡РµРє (5-7 РґРЅРµР№) РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ РєСЂРµРјР° СЃ SPF 50 РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ РІ С‚РµС‡РµРЅРёРµ РјРµСЃСЏС†Р°.", icon: "solar:sun-2-linear" }
  ];

  const faqData = [
    { q: "РЎРєРѕР»СЊРєРѕ РїСЂРѕС†РµРґСѓСЂ РЅСѓР¶РЅРѕ РґР»СЏ РїРѕР»РЅРѕРіРѕ РёР·Р±Р°РІР»РµРЅРёСЏ РѕС‚ СЂСѓР±С†РѕРІ?", a: "РџРѕСЃС‚Р°РєРЅРµ вЂ” СЃР»РѕР¶РЅР°СЏ РїСЂРѕР±Р»РµРјР°. РџРѕР»РЅРѕСЃС‚СЊСЋ В«СЃС‚РµСЂРµС‚СЊВ» РіР»СѓР±РѕРєРёРµ СЃРєРѕР»РѕС‚С‹Рµ СЂСѓР±С†С‹ РЅРµРІРѕР·РјРѕР¶РЅРѕ, РЅРѕ РјРѕР¶РЅРѕ СЃРіР»Р°РґРёС‚СЊ СЂРµР»СЊРµС„ РЅР° 70вЂ“80%. Р’ СЃСЂРµРґРЅРµРј С‚СЂРµР±СѓРµС‚СЃСЏ РѕС‚ 2 РґРѕ 4 РїСЂРѕС†РµРґСѓСЂ С„СЂР°РєС†РёРѕРЅРЅРѕР№ С€Р»РёС„РѕРІРєРё СЃ РёРЅС‚РµСЂРІР°Р»РѕРј РІ 1вЂ“2 РјРµСЃСЏС†Р°." },
    { q: "РњРѕР¶РЅРѕ Р»Рё РґРµР»Р°С‚СЊ С€Р»РёС„РѕРІРєСѓ, РµСЃР»Рё РµС‰Рµ РµСЃС‚СЊ РІРѕСЃРїР°Р»РµРЅРёСЏ?", a: "РќРµС‚. Р›Р°Р·РµСЂРЅР°СЏ С€Р»РёС„РѕРІРєР° РїСЂРѕРІРѕРґРёС‚СЃСЏ С‚РѕР»СЊРєРѕ РЅР° СЃС‚Р°РґРёРё СЃС‚РѕР№РєРѕР№ СЂРµРјРёСЃСЃРёРё, РєРѕРіРґР° РЅРµС‚ РіР»СѓР±РѕРєРёС… РіРЅРѕР№РЅС‹С… СЌР»РµРјРµРЅС‚РѕРІ. Р•СЃР»Рё Сѓ РІР°СЃ Р°РєС‚РёРІРЅРѕРµ Р°РєРЅРµ, РІСЂР°С‡ СЃРЅР°С‡Р°Р»Р° РЅР°Р·РЅР°С‡РёС‚ РјРµРґРёРєР°РјРµРЅС‚РѕР·РЅРѕРµ Р»РµС‡РµРЅРёРµ (РЅР°РїСЂРёРјРµСЂ, СЃРёСЃС‚РµРјРЅС‹Рµ СЂРµС‚РёРЅРѕРёРґС‹ РёР»Рё РЅРµРѕРґРёРјРѕРІС‹Р№ Р»Р°Р·РµСЂ)." },
    { q: "РљР°Рє РІС‹РіР»СЏРґРёС‚ Р»РёС†Рѕ РїРѕСЃР»Рµ С€Р»РёС„РѕРІРєРё?", a: "РџРµСЂРІС‹Рµ 2вЂ“3 РґРЅСЏ РЅР°Р±Р»СЋРґР°РµС‚СЃСЏ СЃРёР»СЊРЅС‹Р№ РѕС‚РµРє Рё РїРѕРєСЂР°СЃРЅРµРЅРёРµ (СЌС„С„РµРєС‚ В«РѕС€РїР°СЂРµРЅРЅРѕРіРѕ Р»РёС†Р°В»), РЅР° РєРѕР¶Рµ РІРёРґРЅР° В«РјР°СЂР»РµРІР°СЏ СЃРµС‚РѕС‡РєР°В» РѕС‚ РјРёРєСЂРѕРїРѕРІСЂРµР¶РґРµРЅРёР№. Р—Р°С‚РµРј СЃРµС‚РѕС‡РєР° С‚РµРјРЅРµРµС‚, РїСЂРµРІСЂР°С‰Р°РµС‚СЃСЏ РІ РјРµР»РєРёРµ РєРѕСЂРѕС‡РєРё Рё РѕС‚С€РµР»СѓС€РёРІР°РµС‚СЃСЏ (5вЂ“7 РґРЅРµР№). Р§РµСЂРµР· 7вЂ“10 РґРЅРµР№ РІС‹ РјРѕР¶РµС‚Рµ РІС‹С…РѕРґРёС‚СЊ РЅР° СЂР°Р±РѕС‚Сѓ, РёСЃРїРѕР»СЊР·СѓСЏ Р»РµРіРєРёР№ С‚РѕРЅР°Р»СЊРЅС‹Р№ РєСЂРµРј." },
    { q: "РљРѕРіРґР° Р±СѓРґРµС‚ РІРёРґРµРЅ РѕРєРѕРЅС‡Р°С‚РµР»СЊРЅС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚?", a: "РџРµСЂРІРёС‡РЅРѕРµ РІС‹СЂР°РІРЅРёРІР°РЅРёРµ СЂРµР»СЊРµС„Р° Р·Р°РјРµС‚РЅРѕ С‡РµСЂРµР· 2вЂ“3 РЅРµРґРµР»Рё РїРѕСЃР»Рµ СЃС…РѕР¶РґРµРЅРёСЏ РєРѕСЂРѕС‡РµРє. РћРґРЅР°РєРѕ РѕРєРѕРЅС‡Р°С‚РµР»СЊРЅС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚ РѕС†РµРЅРёРІР°РµС‚СЃСЏ С‡РµСЂРµР· 3вЂ“6 РјРµСЃСЏС†РµРІ вЂ” РёРјРµРЅРЅРѕ СЃС‚РѕР»СЊРєРѕ РІСЂРµРјРµРЅРё С‚СЂРµР±СѓРµС‚СЃСЏ РєРѕР¶Рµ РґР»СЏ РІС‹СЂР°Р±РѕС‚РєРё РЅРѕРІРѕРіРѕ РєРѕР»Р»Р°РіРµРЅР° Рё РїРѕРґРЅСЏС‚РёСЏ РґРЅР° СЂСѓР±С†Р°." }
  ];

    const doctors = [
     { name: "Специалист SkinMed", role: "Р“Р»Р°РІРЅС‹Р№ РІСЂР°С‡, РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕРІРµРЅРµСЂРѕР»РѕРі", exp: "РћРїС‹С‚ 15 Р»РµС‚", img: "/images/doctors/kachyurina.jpg" },
     { name: "Специалист SkinMed", role: "Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕР»РѕРі", exp: "РћРїС‹С‚ 10 Р»РµС‚", img: "/images/doctors/muhametzanova.jpg" },
     { name: "Специалист SkinMed", role: "Р’СЂР°С‡-РґРµСЂРјР°С‚РѕР»РѕРі, С‚СЂРёС…РѕР»РѕРі, РєРѕСЃРјРµС‚РѕР»РѕРі", exp: "РћРїС‹С‚ 12 Р»РµС‚", img: "/images/doctors/vorobyova.jpg" },
  ];

  const cases = [
    { before: "/images/post-acne-before.png", after: "/images/post-acne-after.png" }
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
                <span className="text-slate-700 font-medium">РЁР»РёС„РѕРІРєР° СЂСѓР±С†РѕРІ РїРѕСЃС‚Р°РєРЅРµ</span>
              </div>
            </section>

            {/* Hero Section */}
            <section className="reveal-up opacity-0 scroll-glow-item group">
              <div className="bg-[#050B14] rounded-[2rem] md:rounded-[3rem] p-8 md:py-16 md:px-20 min-h-[550px] md:min-h-[700px] relative overflow-hidden shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)] flex items-center border border-white/10 group-[.mobile-glow-active]:shadow-[#60c2ff]/30 transition-all duration-700">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent z-10"></div>
                  <ServiceImage src="/images/post-acne-hero.png" alt="РЁР»РёС„РѕРІРєР° СЂСѓР±С†РѕРІ РїРѕСЃС‚Р°РєРЅРµ" sizes="100vw" priority className="w-full h-full object-cover opacity-80 mix-blend-overlay scale-[1.02] md:group-hover:scale-[1.04] transition-transform duration-[2s]" />
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
                </div>
                
                <div className="relative z-20 w-full max-w-4xl mt-auto md:mt-0 pt-32 md:pt-0">
                  <div className="inline-flex items-center gap-3 bg-[#60c2ff]/10 backdrop-blur-md text-[#60c2ff] px-5 py-2.5 rounded-full border border-[#60c2ff]/20 shadow-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white">Р’С‹СЂР°РІРЅРёРІР°РЅРёРµ СЂРµР»СЊРµС„Р° РєРѕР¶Рё</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light text-white leading-[1.0] uppercase tracking-[-0.04em] drop-shadow-2xl mb-6">
                    РЁР»РёС„РѕРІРєР° <br/> <span className="font-serif italic text-[#60c2ff]/80">РїРѕСЃС‚Р°РєРЅРµ</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl font-light text-slate-300 leading-relaxed max-w-2xl mb-8">
                    РЈСЃС‚СЂР°РЅРёС‚Рµ В«СЏРјРєРёВ» РѕС‚ РїСЂС‹С‰РµР№, РЅРµСЂРѕРІРЅС‹Р№ СЂРµР»СЊРµС„ Рё РїСЏС‚РЅР° СЃ РїРѕРјРѕС‰СЊСЋ С„СЂР°РєС†РёРѕРЅРЅРѕРіРѕ CO2 Рё СЌСЂР±РёРµРІРѕРіРѕ Р»Р°Р·РµСЂР°. РРґРµР°Р»СЊРЅРѕ РіР»Р°РґРєР°СЏ РєРѕР¶Р° Р±РµР· СЃР»РµРґРѕРІ РІРѕСЃРїР°Р»РµРЅРёР№.
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
                  РљРѕРіРґР° РЅРµРѕР±С…РѕРґРёРјР° <span className="font-serif italic text-slate-400">С€Р»РёС„РѕРІРєР°</span>
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
                  <span className="text-xs uppercase tracking-widest text-[#60c2ff] font-bold block">вЂ” Р¤СЂР°РєС†РёРѕРЅРЅС‹Р№ Р»Р°Р·РµСЂ</span>
                  <h2 className="text-[2.5rem] md:text-5xl font-light text-slate-900 leading-tight">
                     РЎРіР»Р°Р¶РёРІР°РЅРёРµ РёР·СЉСЏРЅРѕРІ <br/>РёР·-<span className="font-serif italic text-[#60c2ff]">РІРЅСѓС‚СЂРё</span>
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mt-4">
                     Р СѓР±С†С‹ РїРѕСЃС‚Р°РєРЅРµ РѕР±СЂР°Р·СѓСЋС‚СЃСЏ РёР·-Р·Р° РґРµС„РёС†РёС‚Р° РёР»Рё РїРµСЂРµРёР·Р±С‹С‚РєР° РєРѕР»Р»Р°РіРµРЅР° РІ РјРµСЃС‚Р°С… СЃРёР»СЊРЅС‹С… РіРЅРѕР№РЅС‹С… РІРѕСЃРїР°Р»РµРЅРёР№. РќРёРєР°РєРёРµ РєСЂРµРјС‹ РёР»Рё РїРёР»РёРЅРіРё РЅРµ СЃРїРѕСЃРѕР±РЅС‹ РїСЂРѕРЅРёРєРЅСѓС‚СЊ РЅР° СЌС‚Сѓ РіР»СѓР±РёРЅСѓ РґРµСЂРјС‹.
                  </p>
                  <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                     CO2 Р»Р°Р·РµСЂ РіРµРЅРµСЂРёСЂСѓРµС‚ РјРёРєСЂРѕР»СѓС‡Рё, РєРѕС‚РѕСЂС‹Рµ РїРѕ РїСЂРёРЅС†РёРїСѓ В«СЂРµС€РµС‚Р°В» (С„СЂР°РєС†РёРѕРЅРЅРѕ) РІС‹РїР°СЂРёРІР°СЋС‚ СЂСѓР±С†РѕРІСѓСЋ С‚РєР°РЅСЊ. Р—РґРѕСЂРѕРІС‹Рµ СѓС‡Р°СЃС‚РєРё РјРµР¶РґСѓ РјРёРєСЂРѕРєР°РЅР°Р»Р°РјРё РЅР°С‡РёРЅР°СЋС‚ РёРЅС‚РµРЅСЃРёРІРЅРѕ РІС‹СЂР°Р±Р°С‚С‹РІР°С‚СЊ РЅРѕРІС‹Р№ РєРѕР»Р»Р°РіРµРЅ Рё РіРёР°Р»СѓСЂРѕРЅРѕРІСѓСЋ РєРёСЃР»РѕС‚Сѓ. Р­С‚Р° РЅРѕРІР°СЏ С‚РєР°РЅСЊ Р±СѓРєРІР°Р»СЊРЅРѕ РІС‹С‚Р°Р»РєРёРІР°РµС‚ СЏРјРєСѓ РЅР°СЂСѓР¶Сѓ, РІС‹СЂР°РІРЅРёРІР°СЏ СЂРµР»СЊРµС„ Р»РёС†Р°.
                  </p>
               </div>
               <div className="w-full lg:w-1/2 relative rounded-[2.5rem] overflow-hidden aspect-[4/3] lg:h-[500px] shadow-2xl">
                  <ServiceImage src="/images/post-acne-process.png" alt="Р¤СЂР°РєС†РёРѕРЅРЅР°СЏ Р»Р°Р·РµСЂРЅР°СЏ С€Р»РёС„РѕРІРєР° Р»РёС†Р°" sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover md:group-hover:scale-[1.03] transition-transform duration-700" />
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
                  Р­С‚Р°РїС‹ <span className="font-serif italic text-[#60c2ff]">С€Р»РёС„РѕРІРєРё</span>
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
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">Р›Р°Р·РµСЂРЅР°СЏ С€Р»РёС„РѕРІРєР° Р»РёС†Р° (РїРѕР»РЅРѕСЃС‚СЊСЋ)</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100 shrink-0">РѕС‚ 12 000 в‚Ѕ</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">Р›Р°Р·РµСЂРЅР°СЏ С€Р»РёС„РѕРІРєР° С‰РµРє (Р·РѕРЅР° РїРѕСЃС‚Р°РєРЅРµ)</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100 shrink-0">РѕС‚ 6 000 в‚Ѕ</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">Р›РѕРєР°Р»СЊРЅР°СЏ С€Р»РёС„РѕРІРєР° (РѕС‚РґРµР»СЊРЅС‹Рµ СЂСѓР±С†С‹, 1 РєРІ. СЃРј)</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100 shrink-0">РѕС‚ 1 500 в‚Ѕ</span>
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
                 <p className="text-lg text-slate-500 font-light mb-8">РЎРѕР±СЂР°Р»Рё РґР»СЏ РІР°СЃ РѕС‚РІРµС‚С‹ РЅР° С‡Р°СЃС‚Рѕ Р·Р°РґР°РІР°РµРјС‹Рµ РІРѕРїСЂРѕСЃС‹ Рѕ Р»РµС‡РµРЅРёРё РїРѕСЃС‚Р°РєРЅРµ.</p>
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
                       Р“Р»Р°РґРєР°СЏ РєРѕР¶Р° <br />
                       <span className="font-serif italic text-slate-400">Р±РµР· СЃР»РµРґРѕРІ</span> Р°РєРЅРµ
                     </h2>
                     <p className="text-slate-400 font-light text-lg lg:text-xl mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                       Р—Р°РїРёС€РёС‚РµСЃСЊ РЅР° РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЋ Рє РІСЂР°С‡Сѓ-РєРѕСЃРјРµС‚РѕР»РѕРіСѓ. РњС‹ РїРѕРґР±РµСЂРµРј СЌС„С„РµРєС‚РёРІРЅС‹Р№ РїСЂРѕС‚РѕРєРѕР» Р»Р°Р·РµСЂРЅРѕР№ С€Р»РёС„РѕРІРєРё, С‡С‚РѕР±С‹ РІРµСЂРЅСѓС‚СЊ РІР°С€РµР№ РєРѕР¶Рµ СЂРѕРІРЅС‹Р№ СЂРµР»СЊРµС„ Рё Р·РґРѕСЂРѕРІС‹Р№ С†РІРµС‚.
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
