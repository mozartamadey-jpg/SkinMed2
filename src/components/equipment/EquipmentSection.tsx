"use client";

import { Icon } from "@iconify/react";
import { useState, useRef, useEffect } from "react";
import ParticlesBackground from "../ParticlesBackground";

interface EquipmentItem {
  name: string;
  brand: string;
  desc: string;
  tags: string[];
  color: string;
}

const equipment: EquipmentItem[] = [
  {
    name: "PicoCare",
    brand: "Wontech",
    desc: "Пикосекундный лазер для удаления татуировок, татуажа, пигментации и бережной лазерной шлифовки. Без реабилитации.",
    tags: ["Удаление пигментации", "Омоложение", "Без боли"],
    color: "#60c2ff",
  },
  {
    name: "Ulthera",
    brand: "США",
    desc: "Единственный аппарат с УЗИ-визуализацией слоев кожи. Позволяет врачу точно воздействовать на мышечно-апоневротический слой.",
    tags: ["СМАС-лифтинг", "УЗ-визуализация", "Точность"],
    color: "#8b5cf6",
  },
  {
    name: "Bison",
    brand: "CO2 лазер",
    desc: "Высокотехнологичный контроль глубины луча. Эффективен для глубокой шлифовки, лечения постакне, удаления растяжек и морщин.",
    tags: ["Шлифовка", "Постакне", "Омоложение"],
    color: "#f59e0b",
  },
  {
    name: "Clearlight IPL",
    brand: "Фототерапия",
    desc: "Лечение розацеа, удаление сосудистых сеточек, борьба с акне и фотоомоложение.",
    tags: ["Сосуды", "Розацеа", "Акне"],
    color: "#10b981",
  },
  {
    name: "VIVACE",
    brand: "РФ-лифтинг",
    desc: "Микроигольчатый РФ-лифтинг последнего поколения. Лечение рубцов и подтяжка кожи в любое время года.",
    tags: ["Рубцы", "Поры", "Лифтинг"],
    color: "#ec4899",
  },
  {
    name: "Oligio",
    brand: "7D-омоложение",
    desc: "Быстрая подтяжка овала лица без периода восстановления. Идеально для тех, кто ценит время.",
    tags: ["Без восстановления", "Овал", "Быстро"],
    color: "#6366f1",
  },
];

const procedurePhotos = [
  { src: "/equipment/ulthera.png", title: "Ulthera — УЗ-лифтинг", desc: "СМАС-лифтинг с визуализацией" },
  { src: "/equipment/bison.jpg", title: "Bison — CO2 лазер", desc: "Глубокая шлифовка и омоложение" },
  { src: "/equipment/bison2.jpg", title: "Bison — процедура", desc: "Лечение постакне и рубцов" },
  { src: "/equipment/clearlight.jpg", title: "Clearlight IPL", desc: "Фототерапия для сосудов и акне" },
  { src: "/equipment/vivace.jpg", title: "VIVACE — РФ-лифтинг", desc: "Микроигольчатый лифтинг" },
];

export default function EquipmentSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScroll);
      return () => slider.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full">
      <div className="text-center mb-12 reveal-up opacity-0">
        <div className="inline-flex items-center gap-2 bg-[#eaf3f8] text-[#60c2ff] px-4 py-2 rounded-full mb-6 border border-white">
          <Icon icon="solar:medical-kit-linear" className="text-lg" style={{ strokeWidth: 1.5 }} />
          <span className="text-xs sm:text-sm font-extralight uppercase tracking-widest">Оборудование</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-slate-900 tracking-tight leading-[1.1] mb-6">
          Гарантия качества
          <br />
          <span className="text-[#60c2ff]">и безопасности</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-extralight max-w-2xl mx-auto">
          Все аппараты имеют регистрационные удостоверения (РУ) Росздравнадзора, а препараты закупаются у официальных дистрибьюторов.
        </p>
      </div>

      {/* Карточки оборудования - исходный вид */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {equipment.map((item, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_1.875rem_5rem_-1.25rem_rgba(0,0,0,0.05)] rounded-[2rem] p-6 hover:border-[#60c2ff]/40 hover:shadow-[0_2rem_5rem_-1rem_rgba(96,194,255,0.2)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] flex flex-col reveal-up opacity-0 ${
              index === 0 || index === 3 ? "lg:row-span-2" : ""
            }`}
          >
            {(index === 0 || index === 3) && (
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                <ParticlesBackground />
              </div>
            )}

            <div className="relative z-10 flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-light text-slate-900">{item.name}</h3>
                <p className="text-sm text-slate-400 font-extralight">{item.brand}</p>
              </div>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                style={{ backgroundColor: item.color }}
              >
                <Icon icon="solar:flash-circle-bold" className="text-xl" />
              </div>
            </div>

            <p className="relative z-10 text-sm sm:text-base text-slate-600 font-extralight leading-relaxed mb-6">
              {item.desc}
            </p>

            <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
              {item.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-4 py-1.5 bg-[#eaf3f8] text-[#60c2ff] text-xs font-medium rounded-full border border-[#60c2ff]/30 shadow-sm transition-colors group-hover:bg-[#60c2ff] group-hover:text-white tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Слайдер фото процедур */}
      <div className="mt-16 sm:mt-20 reveal-up opacity-0">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extralight text-slate-900 mb-2">Фото процедур</h3>
            <p className="text-sm text-slate-500 font-extralight">Плавно листайте, чтобы посмотреть все фото</p>
          </div>
          
          {/* Кнопки навигации */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "bg-white shadow-md hover:bg-[#60c2ff] hover:text-white text-slate-700"
                  : "bg-slate-100 text-slate-400 cursor-not-allowed"
              }`}
            >
              <Icon icon="solar:arrow-left-linear" className="text-xl" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "bg-white shadow-md hover:bg-[#60c2ff] hover:text-white text-slate-700"
                  : "bg-slate-100 text-slate-400 cursor-not-allowed"
              }`}
            >
              <Icon icon="solar:arrow-right-linear" className="text-xl" />
            </button>
          </div>
        </div>

        {/* Слайдер */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {procedurePhotos.map((photo, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 w-[300px] sm:w-[350px] snap-start"
            >
              <div className="relative h-[280px] sm:h-[320px] rounded-[1.5rem] overflow-hidden bg-[#f0f3f6]">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                
                {/* Контент на фото */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h4 className="text-lg font-light mb-1">{photo.title}</h4>
                  <p className="text-sm text-white/70 font-extralight">{photo.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Индикаторы */}
        <div className="flex justify-center gap-2 mt-6">
          {procedurePhotos.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-slate-300 transition-colors duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
