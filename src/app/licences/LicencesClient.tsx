'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const licences = [
  { src: '/licences/s1_1.jpg', alt: 'Лицензия на осуществление медицинской деятельности — страница 1' },
  { src: '/licences/s2_1.jpg', alt: 'Лицензия на осуществление медицинской деятельности — страница 2' },
  { src: '/licences/--1.jpg.webp', alt: 'Сертификат клиники СкинМед — 1' },
  { src: '/licences/--2.jpg', alt: 'Сертификат клиники СкинМед — 2' },
];

export default function LicencesClient() {
  return (
    <div className="min-h-screen relative font-sans text-slate-800 flex flex-col">
      <AnimationsProvider />

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/90 via-[#f0f5fa]/80 to-[#e4eaf0]/90"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] bg-gradient-to-br from-[#60c2ff]/20 to-transparent blur-[4rem] opacity-30 animate-orbit" style={{ animationDuration: "30s" }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] bg-gradient-to-tl from-[#80d0ff]/15 via-[#cddce9]/30 to-transparent blur-[5rem] opacity-30 animate-float" style={{ animationDuration: "24s" }}></div>
      </div>

      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        <main className="w-full mt-12 sm:mt-16">

          {/* Breadcrumbs */}
          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">Лицензии и сертификаты</span>
            </div>
          </section>

          {/* Header */}
          <section className="mb-16 md:mb-24 reveal-up opacity-0">
            <div className="max-w-4xl">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#0ea5e9] mb-4">
                — Документы
              </span>
              <h1 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Лицензии и{' '}
                <span className="font-serif italic text-slate-400">сертификаты</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
                Клиника СкинМед осуществляет медицинскую деятельность на основании лицензии. 
                Все документы доступны для ознакомления.
              </p>
            </div>
          </section>

          {/* Licences Grid */}
          <section className="mb-32 max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-8 lg:gap-10 stagger-container">
              {licences.map((licence, index) => (
                <a
                  key={index}
                  href={licence.src}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.04)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.15)] hover:border-[#0ea5e9]/30 transition-all duration-500 hover:-translate-y-1 stagger-item opacity-0"
                >
                  <div className="relative w-full aspect-[3/4] bg-slate-50">
                    <Image
                      src={licence.src}
                      alt={licence.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      quality={90}
                      className="object-contain p-4"
                    />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                      <Icon icon="solar:magnifer-linear" className="text-xl text-slate-700" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Legal note */}
            <div className="mt-12 border-t border-slate-200/60 pt-8">
              <p className="text-sm text-slate-500 font-light leading-relaxed max-w-3xl">
                ООО «СКИНМЕД», ОГРН: 1201600082221 | ИНН: 1660353318. 
                Лицензия Л041-01181-16/00360668 на осуществление медицинской деятельности. 
                Нажмите на изображение для просмотра в полном размере.
              </p>
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
