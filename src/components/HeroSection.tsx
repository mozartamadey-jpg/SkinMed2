"use client";

import { Icon } from "@iconify/react";
import Header from "./Header";
import NeuronParticles from "./NeuronParticles";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[100dvh] relative overflow-hidden flex flex-col items-center justify-center pt-32 pb-10 sm:pt-36 sm:pb-20 lg:pt-0 animate-fade-in">

      {/* ===== NEURAL PARTICLES BACKGROUND ===== */}
      <NeuronParticles />

      <div className="absolute top-4 sm:top-6 inset-x-0 mx-auto w-[calc(100%-2rem)] sm:w-[90%] lg:w-[84%] xl:w-[80%] z-[80]">
        <Header mode="static" />
      </div>

      {/* ===== INTEGRATED HEADER (inside hero) ===== */}
      <header className="hidden">
        <div className="bg-white/70 backdrop-blur-lg border border-white/80 rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between shadow-[0_10px_24px_-18px_rgba(96,194,255,0.18)] overflow-hidden isolate">

          {/* Logo */}
          <a href="/" className="inline-flex items-center gap-2 lg:gap-3 cursor-pointer group relative z-10 w-fit">
            <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-[0.85rem] bg-white shadow-sm flex items-center justify-center group-hover:bg-[#60c2ff] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hidden sm:flex">
              <Icon icon="solar:health-bold" className="text-xl lg:text-2xl text-[#60c2ff] group-hover:text-white transition-colors duration-500" />
            </div>
            <span className="text-xl sm:text-[22px] font-extralight tracking-wide text-slate-800 uppercase">
              Скин<span className="font-medium text-[#60c2ff]">Мед</span>
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13px] font-medium tracking-wide uppercase text-slate-500 relative z-10">
            <a href="/" className="px-3 xl:px-4 py-1.5 rounded-full hover:bg-white hover:text-[#60c2ff] hover:shadow-sm cursor-pointer transition-all duration-500">Главная</a>
            <a href="/about" className="px-3 xl:px-4 py-1.5 rounded-full hover:bg-white hover:text-[#60c2ff] hover:shadow-sm cursor-pointer transition-all duration-500">О нас</a>
            <a href="/#directions" className="px-3 xl:px-4 py-1.5 rounded-full hover:bg-white hover:text-[#60c2ff] hover:shadow-sm cursor-pointer transition-all duration-500">Услуги</a>
            <a href="/prices" className="px-3 xl:px-4 py-1.5 rounded-full hover:bg-white hover:text-[#60c2ff] hover:shadow-sm cursor-pointer transition-all duration-500">Цены</a>
            <a href="#" className="px-3 xl:px-4 py-1.5 rounded-full hover:bg-white hover:text-[#60c2ff] hover:shadow-sm cursor-pointer transition-all duration-500">Акции</a>
            <a href="/doctors" className="px-3 xl:px-4 py-1.5 rounded-full hover:bg-white hover:text-[#60c2ff] hover:shadow-sm cursor-pointer transition-all duration-500">Врачи</a>
            <a href="/#reviews" className="px-3 xl:px-4 py-1.5 rounded-full hover:bg-white hover:text-[#60c2ff] hover:shadow-sm cursor-pointer transition-all duration-500">Отзывы</a>
          </nav>

          <div className="flex items-center gap-3 relative z-10">
            <div className="hidden xl:flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 mr-2">
              <Icon icon="solar:map-point-linear" className="text-sm text-[#60c2ff]" />
              <span>Казань</span>
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3 pr-2 lg:pr-3 border-r border-slate-200/50 mr-1 lg:mr-2">
              <a href="https://t.me/Clinic_SkinMed" target="_blank" rel="noreferrer" className="flex items-center justify-center hover:opacity-80 transition-opacity">
                <img src="/icons/Telegram_logo.svg" alt="Telegram" className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="flex items-center justify-center hover:opacity-80 transition-opacity">
                <img src="/icons/MAX.svg" alt="MAX" className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
            </div>

            <button 
              type="button"
              onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
              className="hidden sm:inline-flex items-center justify-center bg-[#60c2ff] hover:bg-[#4db8ff] text-white px-5 sm:px-6 py-2.5 rounded-full text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_8px_16px_rgba(96,194,255,0.3)] hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              Записаться
            </button>
            <button type="button" className="lg:hidden w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 hover:text-[#60c2ff] shadow-sm cursor-pointer transition-colors duration-500">
              <Icon icon="solar:hamburger-menu-linear" className="text-xl" style={{ strokeWidth: 1.5 }} />
            </button>
          </div>
        </div>
      </header>

      {/* ===== SPLIT EDITORIAL LAYOUT ===== */}
      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 h-full mt-8 lg:mt-28">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-[45%] flex flex-col items-start z-10 relative mt-10 lg:mt-0">
          
          <div className="inline-flex items-center gap-3 mb-8 animate-fade-in-up">
            <span className="w-10 h-px bg-[#60c2ff]"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#60c2ff]">
              Эстетическая медицина
            </span>
          </div>

          <h1 className="font-serif text-[3.5rem] sm:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tighter text-slate-800 mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Премиальная <br />
            <span className="italic font-light text-slate-500">косметология</span><br />
            деталей.
          </h1>

          <p className="text-base sm:text-[1.1rem] leading-[1.8] font-light text-slate-500 max-w-md mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            СкинМед объединяет доказательную медицину и высокую эстетику для достижения естественного, совершенного результата.
          </p>

          <div className="flex items-center gap-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            {/* Magnetic Button-in-Button */}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
              className="group relative inline-flex items-center gap-4 bg-[#60c2ff] text-white pl-8 pr-2 py-2 rounded-full font-medium transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_1rem_2rem_-0.5rem_rgba(96,194,255,0.4)] active:scale-[0.98]"
            >
              <span className="text-xs uppercase tracking-[0.1em] font-semibold">Начать преображение</span>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-700 group-hover:translate-x-1 group-hover:scale-105 group-hover:bg-white text-white group-hover:text-[#60c2ff]">
                <Icon icon="solar:arrow-right-up-linear" className="text-lg transition-transform duration-700 group-hover:rotate-[45deg]" />
              </div>
            </button>
          </div>
        </div>

        {/* Right Media Area: Asymmetric Floating Showcase */}
        <div className="w-full lg:w-[50%] relative flex justify-end items-center h-[50vh] sm:h-[60vh] lg:h-[80vh] animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          
          {/* Ambient Glow (static radial-gradient, no blur filter for performance) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(96,194,255,0.08) 0%, transparent 70%)' }}></div>

          {/* Double-Bezel Main Image (Z-Axis Cascade) */}
          <div className="relative w-full sm:w-[90%] lg:w-[100%] h-full p-2 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.08)] border border-white/60">
            <img 
              src="/images/homepage/hero.jpg" 
              alt="СкинМед - Премиальная косметология" 
              className="w-full h-full object-cover rounded-[1.5rem] sm:rounded-[2.5rem] lg:rounded-[3.5rem] shadow-inner"
            />
            {/* Abstract Overlay Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent rounded-[1.5rem] sm:rounded-[2.5rem] lg:rounded-[3.5rem] pointer-events-none flex items-end p-8">
               <div className="bg-white/80 backdrop-blur-xl border border-white/60 p-4 rounded-2xl flex items-center gap-4 shadow-lg transform -translate-x-4 lg:-translate-x-12 translate-y-4 lg:translate-y-6 animate-fade-in-up delay-1000">
                  <div className="w-12 h-12 bg-[#60c2ff] rounded-xl flex items-center justify-center text-white shrink-0">
                    <Icon icon="solar:star-fall-minimalistic-2-bold" className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Высочайший стандарт</h4>
                    <p className="text-sm font-medium text-slate-800">Передовые FDA-аппараты</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
