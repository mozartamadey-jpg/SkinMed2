'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

const INDICATIONS = [
  { title: 'РњРѕСЂС‰РёРЅС‹', desc: 'Р’РёРґРёРјС‹Рµ СЃРєР»Р°РґРєРё РёР·-Р·Р° СЃРЅРёР¶РµРЅРёСЏ СЌР»Р°СЃС‚РёС‡РЅРѕСЃС‚Рё Рё РїРѕС‚РµСЂРё СѓРїСЂСѓРіРѕСЃС‚Рё', icon: 'solar:eye-linear' },
  { title: 'РќРѕСЃРѕРіСѓР±РЅС‹Рµ СЃРєР»Р°РґРєРё', desc: 'Р—Р°РјРµС‚РЅС‹Рµ Р»РёРЅРёРё РѕС‚ РєСЂС‹Р»СЊРµРІ РЅРѕСЃР° РґРѕ СѓРіРѕР»РєРѕРІ РіСѓР±', icon: 'solar:pallete-2-linear' },
  { title: 'Р‘СЂС‹Р»Рё', desc: 'РљРѕР¶Р° РІ РЅРёР¶РЅРµР№ С‡Р°СЃС‚Рё Р»РёС†Р° Рё РЅР° С‰РµРєР°С… СЃРІРѕР±РѕРґРЅРѕ СЃРІРёСЃР°РµС‚', icon: 'solar:hand-stars-linear' },
  { title: 'РџРѕРїР»С‹РІС€РёР№ РѕРІР°Р»', desc: 'Р›РёС†Рѕ РїРѕС‚РµСЂСЏР»Рѕ РµСЃС‚РµСЃС‚РІРµРЅРЅСѓСЋ С„РѕСЂРјСѓ Рё РёРјРµРµС‚ РЅРµС‡С‘С‚РєРёРµ Р»РёРЅРёРё', icon: 'solar:magic-stick-3-linear' },
  { title: 'РќР°РІРёСЃС€РёРµ РІРµРєРё', desc: 'Р’Р·РіР»СЏРґ СЃС‚Р°Р» РіСЂСѓСЃС‚РЅС‹Рј, Р° РіР»Р°Р·Р° РїРµС‡Р°Р»СЊРЅС‹РјРё', icon: 'solar:eye-linear' },
  { title: 'Р’С‚РѕСЂРѕР№ РїРѕРґР±РѕСЂРѕРґРѕРє', desc: 'РљРѕР¶Р° РІ Р·РѕРЅРµ РїРѕРґР±РѕСЂРѕРґРєР° РїРѕС‚РµСЂСЏР»Р° СѓРїСЂСѓРіРѕСЃС‚СЊ', icon: 'solar:heart-linear' },
  { title: 'РћС‚С‘С‡РЅРѕСЃС‚СЊ Р»РёС†Р°', desc: 'Р’С‹СЂР°Р¶РµРЅРЅС‹Рµ РјР°Р»СЏСЂРЅС‹Рµ РјРµС€РєРё, РѕС‚С‘Рє Р»РёС†Р°', icon: 'solar:waterdrop-linear' },
  { title: 'Р”СЂСЏР±Р»РѕСЃС‚СЊ С€РµРё', desc: 'Р—Р°Р»РѕРјС‹ Рё СЃРєР»Р°РґРєРё РЅР° С€РµРµ, РґСЂСЏР±Р»РѕСЃС‚СЊ РІ Р·РѕРЅРµ РґРµРєРѕР»СЊС‚Рµ', icon: 'solar:star-linear' },
];

const ADVANTAGES = [
  { title: 'РћСЂРёРіРёРЅР°Р»СЊРЅС‹Р№ Р°РїРїР°СЂР°С‚', desc: 'Р Р°Р±РѕС‚Р°РµРј РЅР° СЃРµСЂС‚РёС„РёС†РёСЂРѕРІР°РЅРЅРѕРј РѕР±РѕСЂСѓРґРѕРІР°РЅРёРё Ulthera System СЃ СЂР°Р·СЂРµС€РµРЅРёРµРј Р РѕСЃР·РґСЂР°РІРЅР°РґР·РѕСЂР°. Р“Р°СЂР°РЅС‚РёСЂСѓРµРј РѕС‚СЃСѓС‚СЃС‚РІРёРµ РѕСЃР»РѕР¶РЅРµРЅРёР№ вЂ” РѕР¶РѕРіРѕРІ Рё С€СЂР°РјРѕРІ.' },
  { title: 'Р”РёР°РіРЅРѕСЃС‚РёРєР° DeepSee', desc: 'РџСЂРёРЅРёРјР°РµРј СЂРµС€РµРЅРёСЏ РЅР° С„Р°РєС‚Р°С…. РќРµРїСЂРµСЂС‹РІРЅРѕ СЂР°Р±РѕС‚Р°СЋС‰РёР№ РґРёР°РіРЅРѕСЃС‚РёС‡РµСЃРєРёР№ СѓР»СЊС‚СЂР°Р·РІСѓРє РїРѕР·РІРѕР»СЏРµС‚ РєРѕРЅС‚СЂРѕР»РёСЂРѕРІР°С‚СЊ РіР»СѓР±РёРЅСѓ РІРѕР·РґРµР№СЃС‚РІРёСЏ РЅР° РєР°Р¶РґРѕРј СЃР°РЅС‚РёРјРµС‚СЂРµ РєРѕР¶Рё.' },
  { title: 'РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Р№ РїСЂРѕС‚РѕРєРѕР»', desc: 'РќРµ СЂР°Р±РѕС‚Р°РµРј С€Р°Р±Р»РѕРЅРЅРѕ. SMAS-СЃР»РѕР№ РЅР° СЃРёРјРјРµС‚СЂРёС‡РЅС‹С… СѓС‡Р°СЃС‚РєР°С… Р»РёС†Р° Р»РµР¶РёС‚ РЅР° СЂР°Р·РЅС‹С… СѓСЂРѕРІРЅСЏС… вЂ” РёСЃРїРѕР»СЊР·СѓРµРј СЂР°Р·РЅС‹Рµ РґР°С‚С‡РёРєРё РґР»СЏ РєР°Р¶РґРѕР№ Р·РѕРЅС‹.' },
  { title: 'РљРѕРЅС‚СЂРѕР»СЊ С‚РµРјРїРµСЂР°С‚СѓСЂС‹', desc: 'РђРІС‚РѕРјР°С‚РёС‡РµСЃРєРёР№ РєРѕРЅС‚СЂРѕР»СЊ С‚РѕС‡РµС‡РЅРѕРіРѕ РЅР°РіСЂРµРІР° РґРѕ 60-65В°C. РћРїС‚РёРјР°Р»СЊРЅР°СЏ С‚РµРјРїРµСЂР°С‚СѓСЂР°, РїСЂРё РєРѕС‚РѕСЂРѕР№ РїСЂРѕРёСЃС…РѕРґРёС‚ СЃС‚РёРјСѓР»СЏС†РёСЏ РІС‹СЂР°Р±РѕС‚РєРё РЅРѕРІРѕРіРѕ РєРѕР»Р»Р°РіРµРЅР° Р±РµР· С„РёР±СЂРѕР·Р°.' },
];

const STEPS = [
  { title: 'РљРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ', desc: 'РџСЂРѕРІРѕРґРёРј РІРёР·СѓР°Р»СЊРЅС‹Р№ РѕСЃРјРѕС‚СЂ Рё СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІСѓСЋ РґРёР°РіРЅРѕСЃС‚РёРєСѓ, РѕРїСЂРµРґРµР»СЏРµРј РіР»СѓР±РёРЅСѓ СЂР°СЃРїРѕР»РѕР¶РµРЅРёСЏ РЎРњРђРЎ, СѓСЃС‚Р°РЅР°РІР»РёРІР°РµРј РѕС‚СЃСѓС‚СЃС‚РІРёРµ РїСЂРѕС‚РёРІРѕРїРѕРєР°Р·Р°РЅРёР№. Р”Р»РёС‚СЃСЏ 15-20 РјРёРЅСѓС‚.' },
  { title: 'РџСЂРѕС†РµРґСѓСЂР°', desc: 'Р‘РµСЂРµР¶РЅРѕ РѕС‡РёС‰Р°РµРј РѕР±Р»Р°СЃС‚СЊ РІРѕР·РґРµР№СЃС‚РІРёСЏ, РґРµР»Р°РµРј СЂР°Р·РјРµС‚РєСѓ Рё РЅР°РЅРѕСЃРёРј РіРµР»СЊ. Р›РѕРєР°Р»СЊРЅРѕ РІРѕР·РґРµР№СЃС‚РІСѓРµРј РЅР° РіР»СѓР±РѕРєРёРµ С‚РєР°РЅРё, РјРёРЅСѓСЏ РїРѕРІРµСЂС…РЅРѕСЃС‚РЅС‹Рµ СЃР»РѕРё СЌРїРёРґРµСЂРјРёСЃР°. Р—Р°РЅРёРјР°РµС‚ РґРѕ 60 РјРёРЅСѓС‚.' },
  { title: 'Р’РѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёРµ', desc: 'Р’РѕР·РјРѕР¶РЅС‹ Р»С‘РіРєРёРµ РїРѕРєСЂР°СЃРЅРµРЅРёСЏ, РєРѕС‚РѕСЂС‹Рµ РїСЂРѕС…РѕРґСЏС‚ С‡РµСЂРµР· 4в€’6 С‡Р°СЃРѕРІ. РЈР»СѓС‡С€РµРЅРёСЏ РІРёРґРЅС‹ СѓР¶Рµ РІ РєР»РёРЅРёРєРµ, СЌС„С„РµРєС‚ РЅР°СЂР°СЃС‚Р°РµС‚ РІ С‚РµС‡РµРЅРёРµ 3в€’6 РјРµСЃСЏС†РµРІ.' },
];

const RESULTS = [
  'РЈРјРµРЅСЊС€Р°РµС‚СЃСЏ РѕС‚С‘С‡РЅРѕСЃС‚СЊ Рё РІРѕСЃСЃС‚Р°РЅР°РІР»РёРІР°РµС‚СЃСЏ С‚РѕРЅСѓСЃ РєРѕР¶Рё',
  'РћРІР°Р» Р»РёС†Р° СЃС‚Р°РЅРѕРІРёС‚СЃСЏ Р±РѕР»РµРµ С‡С‘С‚РєРёРј',
  'РџСЂРёРїРѕРґРЅРёРјР°СЋС‚СЃСЏ Р±СЂРѕРІРё Рё СѓРјРµРЅСЊС€Р°РµС‚СЃСЏ РЅР°РІРёСЃР°РЅРёРµ РІРµРє',
  'РЈРјРµРЅСЊС€Р°СЋС‚СЃСЏ Р±СЂС‹Р»Рё, РЅРѕСЃРѕРіСѓР±РЅС‹Рµ СЃРєР»Р°РґРєРё',
  'РџРѕРґРЅРёРјР°СЋС‚СЃСЏ СѓРіРѕР»РєРё СЂС‚Р°',
  'РЎРіР»Р°Р¶РёРІР°СЋС‚СЃСЏ РјРѕСЂС‰РёРЅС‹ Р»РёС†Р° Рё С€РµРё',
  'РЈРїР»РѕС‚РЅСЏРµС‚СЃСЏ РєРѕР¶Р° РІ Р·РѕРЅРµ РІС‚РѕСЂРѕРіРѕ РїРѕРґР±РѕСЂРѕРґРєР°',
  'РЈРјРµРЅСЊС€Р°РµС‚СЃСЏ РґСЂСЏР±Р»РѕСЃС‚СЊ РІ РѕР±Р»Р°СЃС‚Рё С€РµРё Рё РґРµРєРѕР»СЊС‚Рµ',
];

const PRICES = [
   { name: 'Процедура 1', price: '255 в‚Ѕ' },
   { name: 'Процедура 1', price: '12.750 в‚Ѕ' },
   { name: 'Процедура 1', price: '35.700 в‚Ѕ' },
   { name: 'Процедура 1', price: '51.000 в‚Ѕ' },
   { name: 'Процедура 1', price: '67.830 в‚Ѕ' },
   { name: 'Процедура 1', price: '76.500 в‚Ѕ' },
   { name: 'Процедура 1', price: '102.000 в‚Ѕ' },
   { name: 'Процедура 1', price: '108.120 в‚Ѕ' },
   { name: 'Процедура 1', price: '128.520 в‚Ѕ' },
   { name: 'Процедура 1', price: '153.000 в‚Ѕ' },
   { name: 'Процедура 1', price: '204.000 в‚Ѕ' },];

const CONTRAINDICATIONS = [
  'Р‘РµСЂРµРјРµРЅРЅРѕСЃС‚СЊ',
  'РџРµСЂРёРѕРґ РєРѕСЂРјР»РµРЅРёСЏ РіСЂСѓРґСЊСЋ',
  'Р—Р°Р±РѕР»РµРІР°РЅРёСЏ РєРѕР¶Рё РІ Р°РєС‚РёРІРЅРѕР№ СЃС‚Р°РґРёРё',
  'РЎРµСЂРґРµС‡РЅР°СЏ РЅРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕСЃС‚СЊ',
  'Р‘РѕР»РµР·РЅСЊ РїРѕС‡РµРє С‚СЏР¶С‘Р»РѕР№ СЃС‚РµРїРµРЅРё',
  'Р­РїРёР»РµРїСЃРёСЏ',
];

const FAQ = [
  { q: 'Р§РµРј Ulthera РѕС‚Р»РёС‡Р°РµС‚СЃСЏ РѕС‚ РґСЂСѓРіРёС… Р°РїРїР°СЂР°С‚РѕРІ SMAS?', a: 'Ulthera вЂ” РµРґРёРЅСЃС‚РІРµРЅРЅС‹Р№ Р°РїРїР°СЂР°С‚ СЃ С‚РµС…РЅРѕР»РѕРіРёРµР№ РІРёР·СѓР°Р»РёР·Р°С†РёРё DeepSee, РєРѕС‚РѕСЂР°СЏ РїРѕР·РІРѕР»СЏРµС‚ РІСЂР°С‡Сѓ РІРёРґРµС‚СЊ СЃР»РѕРё РєРѕР¶Рё РІ СЂРµР°Р»СЊРЅРѕРј РІСЂРµРјРµРЅРё Рё С‚РѕС‡РЅРѕ РЅР°РїСЂР°РІР»СЏС‚СЊ СѓР»СЊС‚СЂР°Р·РІСѓРє РёРјРµРЅРЅРѕ РІ SMAS-СЃР»РѕР№. Р”СЂСѓРіРёРµ Р°РїРїР°СЂР°С‚С‹ СЂР°Р±РѕС‚Р°СЋС‚ В«РІСЃР»РµРїСѓСЋВ».' },
  { q: 'Р­С‚Рѕ Р±РѕР»СЊРЅРѕ?', a: 'РџСЂРѕС†РµРґСѓСЂР° РїСЂРѕС…РѕРґРёС‚ РєРѕРјС„РѕСЂС‚РЅРѕ. РџР°С†РёРµРЅС‚С‹ РѕС‰СѓС‰Р°СЋС‚ С‚РµРїР»Рѕ Рё Р»С‘РіРєРѕРµ РїРѕРєР°Р»С‹РІР°РЅРёРµ. РџСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё РјС‹ РёСЃРїРѕР»СЊР·СѓРµРј РјРµСЃС‚РЅСѓСЋ Р°РЅРµСЃС‚РµР·РёСЋ РґР»СЏ РјР°РєСЃРёРјР°Р»СЊРЅРѕРіРѕ РєРѕРјС„РѕСЂС‚Р°.' },
  { q: 'РЎРєРѕР»СЊРєРѕ РґР»РёС‚СЃСЏ СЌС„С„РµРєС‚?', a: 'Р РµР·СѓР»СЊС‚Р°С‚ Ulthera-С‚РµСЂР°РїРёРё СЃРѕС…СЂР°РЅСЏРµС‚СЃСЏ РґРѕ 2 Р»РµС‚. Р­С„С„РµРєС‚ РЅР°СЂР°СЃС‚Р°РµС‚ РІ С‚РµС‡РµРЅРёРµ 3-6 РјРµСЃСЏС†РµРІ РїРѕСЃР»Рµ РїСЂРѕС†РµРґСѓСЂС‹, РґРѕСЃС‚РёРіР°СЏ РјР°РєСЃРёРјСѓРјР°.' },
  { q: 'РќСѓР¶РЅР° Р»Рё СЂРµР°Р±РёР»РёС‚Р°С†РёСЏ?', a: 'РќРµС‚. Р’РѕР·РјРѕР¶РЅС‹ Р»С‘РіРєРёРµ РїРѕРєСЂР°СЃРЅРµРЅРёСЏ, РєРѕС‚РѕСЂС‹Рµ РїСЂРѕС…РѕРґСЏС‚ Р·Р° 4-6 С‡Р°СЃРѕРІ. Р’С‹ РјРѕР¶РµС‚Рµ РІРµСЂРЅСѓС‚СЊСЃСЏ Рє РѕР±С‹С‡РЅРѕР№ Р¶РёР·РЅРё СЃСЂР°Р·Сѓ РїРѕСЃР»Рµ РїСЂРѕС†РµРґСѓСЂС‹.' },
  { q: 'РЎРєРѕР»СЊРєРѕ РїСЂРѕС†РµРґСѓСЂ РЅСѓР¶РЅРѕ?', a: 'РћР±С‹С‡РЅРѕ РґРѕСЃС‚Р°С‚РѕС‡РЅРѕ 1 РїСЂРѕС†РµРґСѓСЂС‹ РґР»СЏ РІС‹СЂР°Р¶РµРЅРЅРѕРіРѕ СЂРµР·СѓР»СЊС‚Р°С‚Р°. РџСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё РїРѕРІС‚РѕСЂРЅС‹Р№ СЃРµР°РЅСЃ РїСЂРѕРІРѕРґРёС‚СЃСЏ С‡РµСЂРµР· 1-2 РіРѕРґР°.' },
];

const DOCTORS = [
   { name: 'Специалист SkinMed', role: 'Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі, Р±РѕС‚СѓР»РёРЅРѕС‚РµСЂР°РїРµРІС‚, Р»Р°Р·РµСЂРѕР»РѕРі', photo: '/images/doctors/muhametzanova.jpg' },
   { name: 'Специалист SkinMed', role: 'Р“Р»Р°РІРЅС‹Р№ РІСЂР°С‡, РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕР»РѕРі, Р»Р°Р·РµСЂРѕР»РѕРі', photo: '/images/doctors/kachyurina.jpg' },
   { name: 'Специалист SkinMed', role: 'Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕР»РѕРі, Р±РѕС‚СѓР»РёРЅРѕС‚РµСЂР°РїРµРІС‚', photo: '/images/doctors/emelina.jpg' },
   { name: 'Специалист SkinMed', role: 'Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕР»РѕРі, С‚СЂРёС…РѕР»РѕРі', photo: '/images/doctors/glubokaya.jpg' },
   { name: 'Специалист SkinMed', role: 'Р’СЂР°С‡-РѕРЅРєРѕР»РѕРі, Р»Р°Р·РµСЂРѕР»РѕРі', photo: '/images/doctors/shitov.jpg' },
   { name: 'Специалист SkinMed', role: 'Р’СЂР°С‡-РѕРЅРєРѕР»РѕРі, С‚РµСЂР°РїРµРІС‚, Р»Р°Р·РµСЂРѕР»РѕРі', photo: '/images/doctors/vorobyova.jpg' },
   { name: 'Специалист SkinMed', role: 'Р’СЂР°С‡-РєРѕСЃРјРµС‚РѕР»РѕРі, РґРµСЂРјР°С‚РѕР»РѕРі, Р»Р°Р·РµСЂРѕР»РѕРі', photo: '/images/doctors/nikiforova.jpg' },
   { name: 'Специалист SkinMed', role: 'Р’СЂР°С‡-РЅРµРІСЂРѕР»РѕРі, Рє.Рј.РЅ.', photo: '/images/doctors/safyanova.jpg' },
];

export default function UltheraClient() {
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

          {/* Breadcrumbs */}
          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Р“Р»Р°РІРЅР°СЏ</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <a href="/services/apparatnaya-kosmetologiya" className="hover:text-[#60c2ff] transition-colors duration-300">РђРїРїР°СЂР°С‚РЅР°СЏ РєРѕСЃРјРµС‚РѕР»РѕРіРёСЏ</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">SMAS-Р»РёС„С‚РёРЅРі Ulthera</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img src="/images/hardware/heroes/ulthera-hero.png" alt="Ulthera С‚РµСЂР°РїРёСЏ" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent z-10"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  Р­С„С„РµРєС‚ РґРѕ 2 Р»РµС‚ РїРѕСЃР»Рµ 1 РїСЂРѕС†РµРґСѓСЂС‹
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  SMAS-Р»РёС„С‚РёРЅРі <br />
                  <span className="font-serif italic text-[#60c2ff]/80">Ulthera</span>
                </h1>
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  РџСЂРѕС†РµРґСѓСЂР°, РєРѕС‚РѕСЂР°СЏ СЂР°Р±РѕС‚Р°РµС‚ РЅР° РєР°С‡РµСЃС‚РІРѕ РєРѕР¶Рё 24 С‡Р°СЃР° РІ СЃСѓС‚РєРё. РЎРѕС…СЂР°РЅСЏРµС‚ СѓРїСЂСѓРіРѕСЃС‚СЊ Рё СЌР»Р°СЃС‚РёС‡РЅРѕСЃС‚СЊ РєРѕР¶Рё, Р·Р°РјРµРґР»СЏРµС‚ РїРѕСЏРІР»РµРЅРёРµ РґСЂСЏР±Р»РѕСЃС‚Рё вЂ” РјРёРЅСѓСЃ 10 Р»РµС‚. Р‘РµР· СЃРёРЅСЏРєРѕРІ, Р±РµР· РѕС‚С‘РєРѕРІ, Р±РµР· СЂРµР°Р±РёР»РёС‚Р°С†РёРё.
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]">
                      Р—Р°РїРёСЃР°С‚СЊСЃСЏ РЅР° РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЋ
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white font-light">
                    <Icon icon="solar:shield-check-linear" className="text-2xl text-[#60c2ff]" />
                    <span>Р‘РµР· РїРѕРІСЂРµР¶РґРµРЅРёСЏ РєРѕР¶Рё</span>
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
                Р­С‚Рѕ РїСЂРѕС†РµРґСѓСЂР° РґР»СЏ <span className="font-serif italic text-slate-400">Р’Р°СЃ</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">РµСЃР»Рё Р’Р°СЃ Р±РµСЃРїРѕРєРѕСЏС‚ СЃР»РµРґСѓСЋС‰РёРµ СЌСЃС‚РµС‚РёС‡РµСЃРєРёРµ РёР·РјРµРЅРµРЅРёСЏ</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-container">
              {INDICATIONS.map((item, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden cursor-pointer stagger-item opacity-0 scroll-glow-item">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                    <Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300">{item.title}</h3>
                  <p className="text-base text-slate-600 font-light mt-2 relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0">
            <div className="mb-16 text-center">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р­С„С„РµРєС‚</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Р РµР·СѓР»СЊС‚Р°С‚ <span className="font-serif italic text-slate-400">Ulthera</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto items-center">
              <div className="flex flex-col gap-4">
                {RESULTS.map((text, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-sm">
                    <Icon icon="solar:check-circle-bold" className="text-2xl text-[#60c2ff] shrink-0" />
                    <p className="text-slate-700 font-light text-lg">{text}</p>
                  </div>
                ))}
              </div>
              <div className="relative flex flex-col md:flex-row gap-6">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)] group h-full">
                  <img src="/images/hardware/smas-lifting-ulthera/smas-lifting-ulthera_6.webp" alt="Р”Рѕ Рё РїРѕСЃР»Рµ Ulthera" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                  <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium text-slate-800">Р”Рѕ / РџРѕСЃР»Рµ</div>
                </div>
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)] group h-full mt-4 md:mt-16">
                  <img src="/images/hardware/smas-lifting-ulthera/smas-lifting-ulthera_7.webp" alt="Р”Рѕ Рё РїРѕСЃР»Рµ Ulthera" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                  <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium text-slate-800">Р”Рѕ / РџРѕСЃР»Рµ</div>
                </div>
              </div>
            </div>
          </section>

          {/* Advantages */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РўРµС…РЅРѕР»РѕРіРёРё</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                РџРѕС‡РµРјСѓ РїСЂРёС…РѕРґСЏС‚ <br /> <span className="font-serif italic text-slate-400">Рє РЅР°Рј</span>
              </h2>
            </div>
            <div className="flex flex-col stagger-container">
              <EditorialList items={ADVANTAGES} />
            </div>
          </section>

          {/* Steps */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full">
            <div className="mb-12 border-b border-slate-200/50 pb-6 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РџСЂРѕС†РµСЃСЃ</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                Р­С‚Р°РїС‹ <span className="font-serif italic text-slate-400">РїСЂРѕС†РµРґСѓСЂС‹</span>
              </h2>
            </div>
            <div className="stagger-container flex flex-col">
              <EditorialList items={STEPS} />
            </div>
          </section>

          {/* Video */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0 text-center">
            <div className="mb-12">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” Р’РёРґРµРѕ</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.1]">
                РљРѕРјС„РѕСЂС‚РЅРѕ Рё Р±РµР· <span className="font-serif italic text-slate-400">СЂРµР°Р±РёР»РёС‚Р°С†РёРё</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.1)] border border-white/80 bg-white p-2">
              <video controls className="w-full aspect-video object-cover rounded-[2.5rem]" poster="/images/hardware/smas-lifting-ulthera/smas-lifting-ulthera_1.jpg">
                <source src="https://smasclinicakzn.online/ultherapy.mp4?dl=0" type="video/mp4" />
              </video>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full">
            <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)] reveal-up opacity-0">
              <div className="mb-12 border-b border-slate-100 pb-6">
                <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">
                  РЎС‚РѕРёРјРѕСЃС‚СЊ <span className="font-serif italic text-slate-400">Ulthera</span>
                </h2>
                <p className="text-base text-[#60c2ff] font-medium mt-2">РљРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ РІ РґРµРЅСЊ РїСЂРѕС†РµРґСѓСЂС‹ вЂ” РІ РїРѕРґР°СЂРѕРє</p>
              </div>
              <div className="flex flex-col divide-y divide-slate-100">
                {PRICES.map((price, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{price.name}</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{price.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contraindications */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-4xl mx-auto reveal-up opacity-0">
            <div className="mb-12 text-center">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РћРіСЂР°РЅРёС‡РµРЅРёСЏ</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.1]">
                РџСЂРѕС‚РёРІРѕ<span className="font-serif italic text-slate-400">РїРѕРєР°Р·Р°РЅРёСЏ</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CONTRAINDICATIONS.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-sm">
                  <Icon icon="solar:danger-triangle-bold-duotone" className="text-xl text-amber-500 shrink-0" />
                  <span className="text-base text-slate-700 font-light">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Doctors */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” РљРѕРјР°РЅРґР°</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                РќР°С€Рё <span className="font-serif italic text-slate-400">СЌРєСЃРїРµСЂС‚С‹</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-container">
              {DOCTORS.map((doc, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] overflow-hidden shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 stagger-item opacity-0 scroll-glow-item">
                  <div className="h-72 overflow-hidden">
                    <img src={doc.photo} alt={doc.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-slate-900 mb-1 group-hover:text-[#60c2ff] transition-colors duration-300">{doc.name}</h3>
                    <p className="text-base text-slate-600 font-light">{doc.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto w-full relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">вЂ” FAQ</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Р§Р°СЃС‚С‹Рµ <span className="font-serif italic text-slate-400">РІРѕРїСЂРѕСЃС‹</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4 stagger-container">
              {FAQ.map((faq, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 stagger-item opacity-0">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex items-center justify-between w-full p-6 md:p-8 text-left">
                    <h3 className="text-lg md:text-xl font-medium text-slate-900 pr-4">{faq.q}</h3>
                    <div className={`w-10 h-10 rounded-full bg-[#60c2ff]/10 flex items-center justify-center shrink-0 transition-transform duration-500 ${openFaq === index ? 'rotate-45 bg-[#60c2ff]' : ''}`}>
                      <Icon icon="solar:add-linear" className={`text-xl ${openFaq === index ? 'text-white' : 'text-[#60c2ff]'}`} />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-96 pb-6 md:pb-8' : 'max-h-0'}`}>
                    <p className="text-[17px] text-slate-600 font-light leading-relaxed px-6 md:px-8">{faq.a}</p>
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
                    Р—Р°РїРёС€РёС‚РµСЃСЊ РЅР° <br /><span className="font-serif italic text-slate-400">Ulthera</span>-С‚РµСЂР°РїРёСЋ
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">
                    Р‘РµСЃРїР»Р°С‚РЅР°СЏ РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ СЃ СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІРѕР№ РґРёР°РіРЅРѕСЃС‚РёРєРѕР№ РєРѕР¶Рё. РџРѕРґР±РµСЂС‘Рј РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Р№ РїСЂРѕС‚РѕРєРѕР» Рё РѕС‚РІРµС‚РёРј РЅР° РІСЃРµ РІРѕРїСЂРѕСЃС‹.
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
