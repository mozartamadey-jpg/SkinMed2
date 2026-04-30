"use client";

import { useCallback, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import useEmblaCarousel from "embla-carousel-react";

/*
 * ─────────────────────────────────────────────────────────────
 * DESIGN DIRECTION: Premium Focus + Context Carousel
 * ─────────────────────────────────────────────────────────────
 * Embla Carousel with:
 *   • Active slide at full scale/opacity (Focus)
 *   • Neighbors scaled down + blurred + semi-transparent (Context)
 *   • GPU-accelerated translate3d transitions
 *   • Animated pagination dots
 *   • Smooth 500ms ease-out transitions
 * ─────────────────────────────────────────────────────────────
 */

const testimonials = [
  {
    name: "+7 953 48XXXXX",
    initial: "П",
    date: "20 мая 2025",
    text: "После не очень удачных походов к частным специалистам, решилась обратиться в профессиональную клинику. Приятно удивлена приемлемыми ценами. Врачи и персонал — настоящие профессионалы! Быстро, качественно работают, не навязывают лишнего. Единственный минус — размер клиники, нужно расширяться.",
  },
  {
    name: "+7 922 72XXXXX",
    initial: "П",
    date: "10 января 2025",
    text: "Обращалась дважды к разным специалистам (Мамлеева А. Ф. и Емелина В. Е.). Обе девушки показали себя как настоящие профессионалы: консультировали на всех этапах, интересовались самочувствием. Очень приятный сервис: чай, бонусы, подарки и чистота в кабинетах. Впечатление положительное.",
  },
  {
    name: "+7 917 93XXXXX",
    initial: "Ф",
    date: "2 апреля 2025",
    text: "Была на приёме у доктора Дощановой Айгуль Рамилевны. Приём состоялся вовремя. Врач очень внимательная, владеет знаниями и очень располагает к себе. Проведенные процедуры оставили только приятные ощущения. Золотые руки! Обязательно вернусь. (Фассахова Л. С.)",
  },
  {
    name: "+7 917 27XXXXX",
    initial: "П",
    date: "4 июля 2024",
    text: "Посещаю врача Валееву Лилию Рамилевну — очень грамотный специалист. Прием всегда вовремя, клиника оборудована современно, кругом чистота. Клиника всегда на связи и интересуется самочувствием на следующий день после процедур. Однозначно рекомендую.",
  },
  {
    name: "+7 919 69XXXXX",
    initial: "П",
    date: "15 сентября 2025",
    text: "Я давно хотел удалить мешающие родинки, папилломы. Понравилось всё: клиника, приветливость сотрудников ресепшен, прием и профессионализм врача Багаутдинова А. Ф., современное медоборудование, приём минута в минуту, уют, чистота, комфорт.",
  },
  {
    name: "+7 904 66XXXXX",
    initial: "П",
    date: "30 июня 2024",
    text: "Удаляла здесь глубокий татуаж бровей пикосекундным лазером. Врач Динара Марсовна исполнила мою мечту, процедура прошла максимально комфортно. Рекомендую.",
  },
  {
    name: "+7 900 32XXXXX",
    initial: "П",
    date: "13 марта 2024",
    text: "Обратилась с сыпью на лице. Лечение уже показало результат. Сделала чистку лица — процедура почти безболезненная, персонал вежливый. Рекомендую клинику!",
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    startIndex: 3,
    skipSnaps: false,
    dragFree: false,
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="reviews" className="w-full flex flex-col gap-10 sm:gap-14 scroll-mt-24">
      {/* ── Editorial Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 px-2 sm:px-6 reveal-up opacity-0">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 text-slate-400 mb-4">
            <span className="w-8 h-px bg-slate-300" />
            <span className="text-[0.7rem] font-light uppercase tracking-[0.3em]">
              Репутация
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-slate-700 tracking-tight leading-[1.1]">
            Отзывы <br />
            <span className="text-[#60c2ff] italic font-light">
              наших пациентов
            </span>
          </h2>
        </div>

        {/* Desktop Controls & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://prodoctorov.ru/kazan/lpu/75806-skinmed/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-slate-200 hover:border-slate-300 transition-colors duration-500 cursor-pointer bg-white/60 backdrop-blur-md"
          >
            <span className="text-sm font-medium text-slate-500 group-hover:text-slate-700 uppercase tracking-wider transition-colors">
              Смотреть на ProDoctorov
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#60c2ff]/10 flex items-center justify-center transition-colors duration-500 shrink-0">
              <Icon
                icon="solar:arrow-right-up-linear"
                className="text-lg text-slate-400 group-hover:text-[#60c2ff] transition-colors"
                style={{ strokeWidth: 1.5 }}
              />
            </div>
          </a>

          <a
            href="#"
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-slate-200 hover:border-[#60c2ff] transition-colors duration-500 cursor-pointer bg-white/40 backdrop-blur-md"
          >
            <span className="text-sm font-medium text-[#60c2ff] uppercase tracking-wider transition-colors">
              Оставить отзыв
            </span>
            <div className="w-8 h-8 rounded-full bg-[#60c2ff] flex items-center justify-center transition-colors duration-500 shrink-0 shadow-[0_0_1rem_rgba(96,194,255,0.4)]">
              <Icon
                icon="solar:pen-new-round-linear"
                className="text-lg text-white transition-colors"
                style={{ strokeWidth: 1.5 }}
              />
            </div>
          </a>

          <div className="flex gap-2 ml-2">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#60c2ff] hover:text-white hover:border-[#60c2ff] transition-all duration-500 shadow-sm bg-white/60 backdrop-blur-md cursor-pointer"
            >
              <Icon icon="solar:arrow-left-linear" className="text-xl" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#60c2ff] hover:text-white hover:border-[#60c2ff] transition-all duration-500 shadow-sm bg-white/60 backdrop-blur-md cursor-pointer"
            >
              <Icon icon="solar:arrow-right-linear" className="text-xl" />
            </button>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="flex flex-col sm:flex-row lg:hidden items-start gap-4">
          <a
            href="https://prodoctorov.ru/kazan/lpu/75806-skinmed/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-slate-300 hover:border-slate-400 transition-colors duration-500 cursor-pointer bg-white/60 backdrop-blur-md w-max"
          >
            <span className="text-sm font-medium text-slate-700 uppercase tracking-wider transition-colors">
              Отзывы на ProDoctorov
            </span>
          </a>
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-[#60c2ff] transition-colors duration-500 cursor-pointer bg-white/40 w-max"
          >
            <span className="text-sm font-medium text-[#60c2ff] uppercase tracking-wider">
              Оставить отзыв
            </span>
          </a>
        </div>
      </div>

      {/* ── Embla Carousel with Focus + Context effect ── */}
      <div className="relative w-full reveal-up opacity-0 select-none">
        {/* Viewport */}
        <div
          ref={emblaRef}
          className="overflow-hidden w-full"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          }}
        >
          {/* Container — Embla uses translate3d for GPU-accelerated scrolling */}
          <div className="flex gap-6 sm:gap-8 py-6">
            {testimonials.map((testimonial, idx) => {
              const isActive = idx === selectedIndex;

              return (
                <div
                  key={idx}
                  className="flex-[0_0_88%] sm:flex-[0_0_440px] min-w-0"
                >
                  <div
                    className={`
                      relative bg-white/50 border rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10
                      shadow-[0_0.25rem_1.5rem_rgba(0,0,0,0.04)] flex flex-col min-h-[24rem]
                      transition-all duration-500 ease-out will-change-transform
                      ${isActive
                        ? "scale-100 opacity-100 border-white/80 shadow-[0_1rem_3rem_rgba(96,194,255,0.12)]"
                        : "scale-[0.92] opacity-50 blur-[2px] border-white/40"
                      }
                    `}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Massive Editorial Quotation Mark Background */}
                    <span
                      className={`
                        absolute -top-4 left-6 text-[10rem] font-serif leading-none
                        select-none pointer-events-none transition-colors duration-700
                        ${isActive ? "text-[#60c2ff]/10" : "text-[#60c2ff]/5"}
                      `}
                    >
                      &ldquo;
                    </span>

                    {/* Sophisticated Stars */}
                    <div className="relative z-10 flex items-center gap-1.5 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          icon="solar:star-fall-minimalistic-bold-duotone"
                          className={`
                            text-xl sm:text-2xl text-amber-400 transition-opacity duration-500
                            ${isActive ? "opacity-100" : "opacity-40"}
                          `}
                          style={{ transitionDelay: `${i * 60}ms` }}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p
                      className={`
                        relative z-10 text-[1.05rem] sm:text-[1.15rem] leading-[1.75]
                        font-light flex-grow pr-2 transition-colors duration-500
                        ${isActive ? "text-slate-700" : "text-slate-500"}
                      `}
                    >
                      {testimonial.text}
                    </p>

                    {/* Signature Profile */}
                    <div className="relative z-10 mt-10 flex items-center gap-4">
                      <div
                        className={`
                          w-12 h-12 rounded-full border border-white shadow-sm flex items-center
                          justify-center font-light text-lg transition-all duration-500
                          ${isActive
                            ? "bg-[#60c2ff] text-white"
                            : "bg-[#60c2ff]/5 text-[#60c2ff]"
                          }
                        `}
                      >
                        <Icon icon="solar:user-bold-duotone" className="text-2xl" />
                      </div>
                      <div>
                        <span className="block text-slate-700 font-medium tracking-wide">
                          {testimonial.name}
                        </span>
                        <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-slate-400 mt-1 font-semibold">
                          {testimonial.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Pagination Dots ── */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`
                h-2 rounded-full transition-all duration-300 ease-out cursor-pointer
                ${idx === selectedIndex
                  ? "w-10 bg-[#60c2ff]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
                }
              `}
              aria-label={`Перейти к отзыву ${idx + 1}`}
            />
          ))}
        </div>

        {/* ── Mobile Arrow Controls ── */}
        <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#60c2ff] hover:text-white hover:border-[#60c2ff] transition-all duration-500 shadow-sm bg-white/60 cursor-pointer"
          >
            <Icon icon="solar:arrow-left-linear" className="text-xl" />
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#60c2ff] hover:text-white hover:border-[#60c2ff] transition-all duration-500 shadow-sm bg-white/60 cursor-pointer"
          >
            <Icon icon="solar:arrow-right-linear" className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
