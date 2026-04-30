'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';

export default function RegulatoryClient() {
  const bodies = [
    {
      title: 'Министерство здравоохранения Республики Татарстан',
      address: '420111, г. Казань, ул. Островского, д. 11/6',
      phone: '+7 (843) 231-79-98',
      email: 'minzdrav@tatar.ru',
      website: 'minzdrav.tatarstan.ru',
      icon: 'solar:hospital-linear'
    },
    {
      title: 'Территориальный орган Росздравнадзора по Республике Татарстан',
      address: '420021, г. Казань, ул. Нариманова, д. 63',
      phone: '+7 (843) 292-54-37',
      email: 'info@reg16.roszdravnadzor.gov.ru',
      website: '16reg.roszdravnadzor.gov.ru',
      icon: 'solar:shield-check-linear'
    },
    {
      title: 'Управление Роспотребнадзора по Республике Татарстан',
      address: '420111, г. Казань, ул. Большая Красная, д. 30',
      phone: '+7 (843) 238-98-54',
      email: 'org@16.rospotrebnadzor.ru',
      website: '16.rospotrebnadzor.ru',
      icon: 'solar:document-medicine-linear'
    }
  ];

  return (
    <div className="min-h-screen relative font-sans text-slate-800 flex flex-col">
      <AnimationsProvider />

      {/* Aurora Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/90 via-[#f0f5fa]/80 to-[#e4eaf0]/90"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] bg-gradient-to-br from-[#60c2ff]/30 to-transparent blur-[8rem] opacity-60 mix-blend-multiply animate-orbit" style={{ animationDuration: "25s" }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] bg-gradient-to-tl from-[#80d0ff]/20 via-[#cddce9]/40 to-transparent blur-[10rem] opacity-60 mix-blend-multiply animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}></div>
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-[100%] bg-gradient-to-bl from-[#b8e0ff]/30 to-transparent blur-[9rem] opacity-70 mix-blend-multiply animate-orbit" style={{ animationDuration: "30s", animationDirection: "reverse" }}></div>
        <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
      </div>

      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        
        <main className="w-full mt-12 sm:mt-16 max-w-5xl mx-auto">
          
          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">Контролирующие органы</span>
            </div>
          </section>

          <section className="mb-16 reveal-up opacity-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.04em] leading-[1.0] text-slate-900 mb-6">
              Контролирующие <span className="font-serif italic text-slate-400">органы</span>
            </h1>
            <p className="text-lg text-slate-500 font-light max-w-2xl">
              Сведения и контактная информация ведомств Республики Татарстан, осуществляющих надзор в сфере здравоохранения и защиты прав потребителей.
            </p>
          </section>

          <section className="grid lg:grid-cols-3 gap-6 stagger-container">
            {bodies.map((body, i) => (
              <div key={i} className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] transition-shadow duration-500 stagger-item opacity-0 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6">
                  <Icon icon={body.icon} className="text-3xl text-[#60c2ff]" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-6 leading-snug flex-1">
                  {body.title}
                </h3>
                
                <div className="flex flex-col gap-4 text-sm font-light text-slate-600">
                  <div className="flex items-start gap-3">
                    <Icon icon="solar:map-point-linear" className="text-lg text-[#60c2ff] shrink-0 mt-0.5" />
                    <span>{body.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon icon="solar:phone-calling-linear" className="text-lg text-[#60c2ff] shrink-0" />
                    <a href={`tel:${body.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#60c2ff] transition-colors">{body.phone}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon icon="solar:letter-linear" className="text-lg text-[#60c2ff] shrink-0" />
                    <a href={`mailto:${body.email}`} className="hover:text-[#60c2ff] transition-colors">{body.email}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon icon="solar:global-linear" className="text-lg text-[#60c2ff] shrink-0" />
                    <a href={`https://${body.website}`} target="_blank" rel="noreferrer" className="hover:text-[#60c2ff] transition-colors">{body.website}</a>
                  </div>
                </div>
              </div>
            ))}
          </section>

        </main>
      </div>
      <div className="relative z-20 w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
