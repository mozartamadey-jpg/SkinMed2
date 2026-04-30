"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const links = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О нас" },
  { href: "/#directions", label: "Услуги" },
  { href: "/prices", label: "Цены" },
  { href: "#", label: "Акции" },
  { href: "/doctors", label: "Врачи" },
  { href: "/#reviews", label: "Отзывы" },
];

export default function Header({ mode = "sticky" }: { mode?: "sticky" | "static" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const frameClass = mode === "sticky" ? "sticky top-4 sm:top-6" : "relative";

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header id="site-header" className={`${frameClass} w-full z-50 animate-fade-in-down`}>
      <div className={`relative border rounded-2xl sm:rounded-3xl px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 flex items-center justify-between overflow-hidden isolate transition-[background-color,border-color,box-shadow] duration-300 ${
        isMenuOpen
          ? "bg-white border-white shadow-[0_1.5rem_3rem_-1.5rem_rgba(15,23,42,0.28)]"
          : "bg-white/90 backdrop-blur-xl border-white/70 shadow-[0_10px_24px_-18px_rgba(96,194,255,0.18)]"
      }`}>
        <a href="/" className="flex items-center gap-2.5 cursor-pointer group relative z-10" onClick={closeMenu}>
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#60c2ff]/10 flex items-center justify-center group-hover:bg-[#60c2ff] transition-colors duration-500">
            <Icon icon="solar:health-bold" className="text-lg sm:text-xl text-[#60c2ff] group-hover:text-white transition-colors duration-500" />
          </div>
          <span className="text-lg sm:text-xl font-light text-slate-800 tracking-wide uppercase group-hover:text-[#60c2ff] transition-colors duration-500">
            Скин<span className="font-medium text-[#60c2ff] group-hover:text-slate-800 transition-colors duration-500">Мед</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10 xl:gap-14 text-base font-light text-slate-700 relative z-10">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-[#60c2ff] transition-colors relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#60c2ff] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-6 relative z-10">
          <div className="hidden xl:flex items-center gap-2 text-sm font-light text-slate-600">
            <Icon icon="solar:map-point-linear" className="text-lg text-[#60c2ff]" style={{ strokeWidth: 1.5 }} />
            <span className="mr-2">г. Казань, пр. А. Камалеева, 30</span>
          </div>

          <div className="hidden md:flex items-center gap-3 pr-2 border-r border-slate-200/50 mr-2 xl:border-none xl:pr-0 xl:mr-0">
            <a href="https://t.me/Clinic_SkinMed" target="_blank" rel="noreferrer" className="flex items-center justify-center hover:opacity-80 transition-opacity">
              <img src="/icons/Telegram_logo.svg" alt="Telegram" width={26} height={26} />
            </a>
            <a href="#" className="flex items-center justify-center hover:opacity-80 transition-opacity">
              <img src="/icons/MAX.svg" alt="MAX" width={26} height={26} />
            </a>
          </div>

          <a
            href="https://t.me/Clinic_SkinMed"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center bg-[#60c2ff] hover:bg-[#4db8ff] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm font-light transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-[0_0.3125rem_0.9375rem_rgba(96,194,255,0.3)]"
          >
            Записаться
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
            className="lg:hidden text-slate-800 p-2 -mr-2 flex items-center justify-center"
          >
            <Icon icon={isMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} className="text-2xl" style={{ strokeWidth: 1.5 }} />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed left-0 right-0 top-24 bottom-0 z-40 bg-slate-950/10 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      <aside
        className={`lg:hidden fixed right-4 left-4 top-24 z-50 rounded-[2rem] border border-white bg-white shadow-[0_2rem_5rem_-1rem_rgba(15,23,42,0.18)] p-5 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={closeMenu} className="flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-normal text-slate-800 hover:bg-sky-50 hover:text-[#0ea5e9] transition-colors">
              {link.label}
              <Icon icon="solar:arrow-right-up-linear" className="text-xl text-sky-400" />
            </a>
          ))}
        </nav>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <a href="https://t.me/Clinic_SkinMed" target="_blank" rel="noreferrer" onClick={closeMenu} className="col-span-2 inline-flex items-center justify-center rounded-2xl bg-[#60c2ff] px-5 py-4 text-white font-medium shadow-[0_1rem_2rem_-1rem_rgba(96,194,255,0.9)]">
            Записаться
          </a>
          <a href="https://t.me/Clinic_SkinMed" target="_blank" rel="noreferrer" onClick={closeMenu} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-slate-700">
            <img src="/icons/Telegram_logo.svg" alt="" width={22} height={22} />
            Telegram
          </a>
          <a href="#" onClick={closeMenu} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-slate-700">
            <img src="/icons/MAX.svg" alt="" width={22} height={22} />
            MAX
          </a>
        </div>
      </aside>
    </header>
  );
}
