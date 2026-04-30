"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a1120] px-6 sm:px-12 lg:px-16 pt-16 sm:pt-20 lg:pt-24 pb-8 text-white relative flex flex-col overflow-hidden reveal-up opacity-0">
      {/* Heavy Decorative Glow Elements & Particles */}
      <div className="absolute top-[-20%] right-[-10%] w-[50rem] h-[50rem] bg-[#60c2ff] opacity-15 rounded-full blur-[8rem] pointer-events-none animate-pulse" style={{ animationDuration: "8s" }}></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[60rem] h-[40rem] bg-gradient-to-t from-[#60c2ff]/20 to-transparent rounded-full blur-[8rem] pointer-events-none mix-blend-screen"></div>
      
      {/* Advanced base glow acting as a spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1d3152]/60 via-[#0a1120] to-[#040810] z-0 pointer-events-none"></div>

      {/* Particle noise overlay overlay for premium texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">
        
        {/* Brand Column */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <Link href="/" className="inline-flex items-center gap-3 w-fit group">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#60c2ff] group-hover:text-white transition-colors duration-500 shadow-[0_0_15px_rgba(96,194,255,0.2)]">
              <Icon icon="solar:health-bold" className="text-2xl text-[#60c2ff] group-hover:text-white transition-colors duration-500" />
            </div>
            <span className="text-2xl font-light tracking-wide text-white uppercase group-hover:text-[#60c2ff] transition-colors duration-500 line-clamp-1 drop-shadow-sm">
              Скин<span className="font-medium text-[#60c2ff] group-hover:text-white transition-colors duration-500">Мед</span>
            </span>
          </Link>
          
          <div className="flex flex-col gap-2 border-l-2 border-[#60c2ff]/40 pl-4 mt-2">
            <p className="text-[17px] font-light text-slate-200 leading-relaxed max-w-[280px]">
              Умная косметология. Премиальный подход к красоте и здоровью вашей кожи.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4">
             <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full shadow-sm backdrop-blur-sm">
               <span className="w-2 h-2 rounded-full bg-[#60c2ff] shadow-[0_0_10px_#60c2ff] animate-pulse"></span>
               <span className="text-sm font-medium text-white tracking-wide">Пн-Вс 09:00 - 21:00</span>
             </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:pl-10">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-5">
            <h4 className="text-base font-medium text-white uppercase tracking-widest mb-2 flex items-center gap-2 drop-shadow-md">
              <Icon icon="solar:info-circle-bold-duotone" className="text-[#60c2ff] text-xl opacity-90" /> Клиника
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="/about" className="text-[15px] font-light text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">О нас</Link>
              <Link href="/doctors" className="text-[15px] font-light text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Наши врачи</Link>
              <Link href="/prices" className="text-[15px] font-light text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Цены</Link>
              <Link href="#" className="text-[15px] font-light text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Акции</Link>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-5">
            <h4 className="text-base font-medium text-white uppercase tracking-widest mb-2 flex items-center gap-2 drop-shadow-md">
              <Icon icon="solar:star-fall-bold-duotone" className="text-[#60c2ff] text-xl opacity-90" /> Услуги
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="/services/lazernaya-kosmetologiya" className="text-[15px] font-light text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Лазерная</Link>
              <Link href="/services/injection" className="text-[15px] font-light text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Инъекционная</Link>
              <Link href="/services/contour-plastics" className="text-[15px] font-light text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Контурная пластика</Link>
              <Link href="/services/aesthetic" className="text-[15px] font-light text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Эстетическая</Link>
            </div>
          </div>

          {/* Col 3: Contacts */}
          <div className="flex flex-col gap-5 col-span-2 md:col-span-1 border-t md:border-t-0 border-white/10 pt-6 md:pt-0">
            <h4 className="text-base font-medium text-white uppercase tracking-widest mb-2 flex items-center gap-2 drop-shadow-md">
              <Icon icon="solar:phone-calling-bold-duotone" className="text-[#60c2ff] text-xl opacity-90" /> Контакты
            </h4>
            <div className="flex flex-col gap-4">
              <a href="https://t.me/Clinic_SkinMed" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[15px] font-light text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit group">
                <Icon icon="mdi:telegram" className="text-[#60c2ff] opacity-80 group-hover:opacity-100 text-xl transition-all" />
                Telegram
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[15px] font-light text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit group">
                <img src="/icons/Max_logo_footer.svg" alt="Max" className="w-[1.125rem] h-[1.125rem] object-contain opacity-80 group-hover:opacity-100 transition-all" />
                Max
              </a>
              <div className="flex items-start gap-3 text-[15px] font-light text-slate-300 mt-2">
                <Icon icon="solar:map-point-bold-duotone" className="text-[#60c2ff] opacity-80 text-xl shrink-0 mt-0.5" />
                <span className="leading-relaxed">г. Казань,<br/> пр-кт А. Камалеева, 30</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col xl:flex-row gap-8 justify-between xl:items-end">
        
        {/* Legal Text */}
        <div className="flex flex-col gap-3 text-[13px] font-light text-slate-400 max-w-2xl">
          <p className="font-medium text-slate-300">Информация о юридическом лице:</p>
          <p className="leading-relaxed">
            ООО «СКИНМЕД», ОГРН: 1201600082221 | ИНН: 1660353318. Юридический адрес: 420081, Республика Татарстан, г. Казань, пр-кт Альберта Камалеева, д. 30, помещ. 1022. Лицензия Л041-01181-16/00360668.
          </p>
          <p className="leading-relaxed mt-2 text-slate-500">
            Вся предоставленная информация на сайте не является публичной офертой (ст. 437 (2) ГК РФ). Точную стоимость услуг уточняйте у администраторов или на консультации у специалиста.
          </p>
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-col gap-4 items-start xl:items-end">
          <div className="flex flex-wrap gap-4 text-[13px] font-light">
             <Link href="/safety" className="text-slate-300 hover:text-white hover:underline underline-offset-4 decoration-white/20 transition-all">Политика конфиденциальности</Link>
             <span className="text-slate-600 hidden sm:block">•</span>
             <Link href="/regulatory" className="text-slate-300 hover:text-white hover:underline underline-offset-4 decoration-white/20 transition-all">Контролирующие органы</Link>
             <span className="text-slate-600 hidden sm:block">•</span>
             <Link href="/licences" className="text-slate-300 hover:text-white hover:underline underline-offset-4 decoration-white/20 transition-all">Лицензии</Link>
          </div>
          <p className="text-[13px] font-medium text-slate-400 tracking-wider">
             &copy; {new Date().getFullYear()} СкинМед. Все права защищены.
          </p>
        </div>
        
      </div>
      
      {/* Warning Text Component moved to absolute bottom */}
      <div className="relative z-10 w-full mt-12 mb-2">
        <p className="w-full text-center text-[10px] sm:text-xs md:text-sm font-light text-slate-500 tracking-[0.2em] md:tracking-[0.3em] uppercase max-w-7xl mx-auto px-4">
          Имеются противопоказания. Необходима консультация специалиста.
        </p>
      </div>

    </footer>
  );
}
