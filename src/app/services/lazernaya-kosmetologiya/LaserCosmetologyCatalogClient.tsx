"use client";

import { useEffect, useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimationsProvider from "@/components/AnimationsProvider";
import EditorialList from '@/components/EditorialList';

type LaserService = {
  title: string;
  slug: string;
  category: string;
  priceFrom: string;
  device: string;
  heroImage?: string;
  description?: string;
};

type CatalogService = LaserService & {
  image: string;
  icon: string;
  featured: boolean;
  shortDescription: string;
};

const STOCK_IMAGES = [
  "/images/laser_catalog_stock_1.png",
  "/images/laser_catalog_stock_2.png",
  "/images/laser_catalog_stock_3.png",
  "/images/laser_catalog_stock_4.png",
  "/images/laser_catalog_stock_5.png",
  "/images/laser_catalog_stock_6.png",
  "/images/laser_catalog_stock_7.png",
  "/images/laser_catalog_stock_8.png",
];

const HERO_IMAGE = "/images/laser_catalog_hero.png";
const ABOUT_IMAGE = "/images/laser_catalog_about.png";

const CATEGORY_ICONS: Record<string, string> = {
  "Лазерное омоложение и шлифовка": "solar:star-fall-bold",
  "Удаление новообразований": "solar:shield-check-bold",
  "Работа с кожей и эстетика": "solar:magic-stick-3-bold",
  "Удаление пигмента": "solar:pallete-2-bold",
};

const FEATURED_SLUGS = new Set([
  "lazernoe-omolozhenie",
  "lazernaya-shlifovka",
  "udalenie-tatu",
  "udalenie-pigmentnyh-pyaten",
]);

const SOLUTION_CARDS = [
  {
    icon: "solar:stars-linear",
    title: "Омоложение",
    desc: "Работаем с морщинами, тусклым цветом лица, неровной текстурой и снижением плотности кожи без ощущения тяжелой процедуры.",
  },
  {
    icon: "solar:magic-stick-3-linear",
    title: "Шлифовка рельефа",
    desc: "Снижаем выраженность постакне, рубцов и следов травмы, чтобы кожа выглядела ровнее, чище и визуально дороже.",
  },
  {
    icon: "solar:heart-linear",
    title: "Чистая эстетика",
    desc: "Работаем с сосудистыми проявлениями, пигментом, татуажем и другими деталями, которые мешают ощущению ухоженности.",
  },
  {
    icon: "solar:shield-check-linear",
    title: "Удаление образований",
    desc: "Деликатный подход к родинкам, папилломам и бородавкам с фокусом на безопасность, стерильность и аккуратное заживление.",
  },
  {
    icon: "solar:sun-2-linear",
    title: "Ровный тон кожи",
    desc: "Корректируем фотостарение, возрастную и поствоспалительную пигментацию, возвращая коже чистый и свежий оттенок.",
  },
  {
    icon: "solar:medical-kit-linear",
    title: "Персональный подбор",
    desc: "Подбираем не просто аппарат, а глубину, длину волны и интенсивность под задачу, фототип и период восстановления.",
  },
];

const ADVANTAGES = [
  {
    title: "Врачи-лазерологи",
    desc: "Процедуры выполняют специалисты, которые понимают не только эстетику результата, но и клиническую логику безопасного лазерного воздействия.",
  },
  {
    title: "Парк сильных систем",
    desc: "В одном направлении собраны пикосекундные, неодимовые и CO2-лазеры, поэтому мы не подгоняем пациента под один аппарат.",
  },
  {
    title: "Деликатная тактика",
    desc: "Наша задача не просто быстро “сделать вспышку”, а получить красивое заживление, прогнозируемый эффект и спокойный реабилитационный период.",
  },
  {
    title: "Премиальный результат",
    desc: "Мы стремимся к тому, чтобы кожа после курса выглядела дорого: ровнее по тону, чище по фактуре и спокойнее визуально.",
  },
];

function buildShortDescription(service: LaserService) {
  const device = service.device ? `на ${service.device}` : "на современной лазерной системе";
  const categoryText =
    service.category === "Удаление новообразований"
      ? "Деликатная работа с образованием и контролем заживления."
      : service.category === "Удаление пигмента"
        ? "Работа с цветом, тоном и чистотой кожи."
        : service.category === "Работа с кожей и эстетика"
          ? "Коррекция текстуры, воспалительных следов и эстетических несовершенств."
          : "Лифтинг, обновление и ровный рельеф без грубой агрессии.";

  return `${categoryText} Индивидуальный протокол ${device}.`;
}

function ServiceCard({ service }: { service: CatalogService }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/services/lazernaya-kosmetologiya/${service.slug}`}
      className="group relative flex flex-col outline-none stagger-item opacity-0 transition-all duration-700 hover:-translate-y-2"
    >
      <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden bg-slate-50 mb-6">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-slate-900/5 transition-opacity duration-700 group-hover:opacity-0" />

        {service.featured && (
          <div className="absolute left-6 top-6 z-20 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-slate-800 shadow-sm backdrop-blur-sm">
            Популярное
          </div>
        )}

        <div className="absolute bottom-6 right-6 z-20 flex h-12 w-12 -translate-x-2 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
          <Icon icon="solar:arrow-right-up-linear" className="text-xl text-slate-900" />
        </div>
      </div>

      <div className="flex flex-col px-2">
        <div className="mb-3 flex items-center gap-3">
          <Icon icon={service.icon} className="text-2xl text-[#0ea5e9]" />
          <h3 className="text-xl font-normal tracking-tight text-slate-900 transition-colors group-hover:text-[#0ea5e9] lg:text-2xl">
            {service.title}
          </h3>
        </div>

        <p className="line-clamp-3 text-sm font-light leading-relaxed text-slate-500 lg:text-base">
          {service.shortDescription}
        </p>
      </div>
    </Link>
  );
}

export default function LaserCosmetologyCatalogClient({ services }: { services: LaserService[] }) {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mobile-glow-active");
          } else {
            entry.target.classList.remove("mobile-glow-active");
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    setTimeout(() => {
      const elements = document.querySelectorAll(".scroll-glow-item");
      elements.forEach((el) => observer.observe(el));
    }, 500);

    return () => observer.disconnect();
  }, []);

  const catalogServices = useMemo<CatalogService[]>(
    () =>
      services.map((service, index) => ({
        ...service,
        image: STOCK_IMAGES[index % STOCK_IMAGES.length],
        icon: CATEGORY_ICONS[service.category] || "solar:star-fall-bold",
        featured: FEATURED_SLUGS.has(service.slug),
        shortDescription: buildShortDescription(service),
      })),
    [services],
  );

  const groupedCounts = useMemo(() => {
    return services.reduce<Record<string, number>>((acc, service) => {
      acc[service.category] = (acc[service.category] || 0) + 1;
      return acc;
    }, {});
  }, [services]);

  const totalDevices = useMemo(() => new Set(services.map((item) => item.device)).size, [services]);

  return (
    <div className="min-h-screen relative font-sans flex flex-col">
      <AnimationsProvider />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fdfdfd]">
      </div>

      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />

        <main className="w-full mt-12 sm:mt-16">
          <section className="mb-32 lg:mb-48 pt-10 min-h-[70vh] flex flex-col justify-center overflow-visible">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center stagger-container overflow-visible">
              <div className="text-left overflow-visible">
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-6 stagger-item opacity-0">
                  — Направление клиники
                </span>

                <h1 className="text-[3.5rem] sm:text-6xl lg:text-[6.5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-8 stagger-item opacity-0 relative z-10">
                  Лазерная
                  <br />
                  <span className="font-serif italic text-slate-400">косметология</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-500 font-light max-w-2xl leading-relaxed mb-12 stagger-item opacity-0">
                  Современные лазерные методики для омоложения, шлифовки, удаления
                  новообразований, работы с пигментом и эстетикой кожи. Премиальная
                  подача, точный подбор протокола и аккуратный результат без ощущения
                  шаблонного конвейера.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6 stagger-item opacity-0">
                  <button
                    onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
                    className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-full font-medium transition-all duration-300 hover:bg-[#0ea5e9] focus:outline-none"
                  >
                    Записаться на консультацию
                  </button>

                  <a
                    href="#services"
                    className="group w-full sm:w-auto px-6 py-4 text-slate-500 rounded-full font-light transition-all duration-500 hover:text-slate-900 focus:outline-none flex items-center justify-center gap-3"
                  >
                    Смотреть услуги
                    <Icon icon="solar:arrow-down-linear" className="text-xl transition-transform group-hover:translate-y-1" />
                  </a>
                </div>
              </div>

              <div className="relative h-[600px] lg:h-[800px] w-full stagger-item opacity-0 hidden lg:block">
                <div className="absolute inset-0 rounded-[2rem] lg:rounded-[4rem] overflow-hidden">
                  <Image 
                    src={HERO_IMAGE} 
                    alt="Лазерная косметология" 
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-32 lg:mb-48 border-y border-slate-200/50 py-16 lg:py-24 relative z-10">
            <div className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center lg:items-start text-center lg:text-left gap-16 lg:gap-8 max-w-6xl mx-auto stagger-container">
              {[
                { value: String(totalDevices), suffix: "", label: "Лазерных платформ в клиническом арсенале" },
                { value: String(services.length), suffix: "", label: "Направлений и лазерных сценариев в каталоге" },
                { value: String(groupedCounts["Лазерное омоложение и шлифовка"] || 0), suffix: "", label: "Протоколов для омоложения и шлифовки кожи" },
                { value: String(groupedCounts["Удаление новообразований"] || 0), suffix: "", label: "Отдельных решений для удаления образований" },
              ].map((stat, index) => (
                <div key={index} className="flex-1 w-full lg:w-auto min-w-[200px] stagger-item opacity-0 group scroll-glow-item flex flex-col items-center lg:items-start">
                  <div className="flex items-baseline mb-4 justify-center lg:justify-start">
                    <span className="text-[6rem] sm:text-[5rem] lg:text-[7rem] font-light text-slate-400 tracking-[-0.04em] leading-none group-hover:text-slate-800 transition-colors duration-700">
                      {stat.value}
                    </span>
                    {stat.suffix ? (
                      <span className="text-3xl sm:text-2xl lg:text-3xl font-light text-[#0ea5e9] ml-1.5 tracking-tighter transition-colors duration-700">
                        {stat.suffix}
                      </span>
                    ) : null}
                  </div>
                  <div className="w-12 h-[2px] bg-[#0ea5e9]/30 mb-5 transform origin-center lg:origin-left group-hover:scale-x-150 group-hover:bg-[#0ea5e9] transition-all duration-500"></div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium uppercase tracking-[0.15em] leading-relaxed max-w-[240px] lg:max-w-[220px] group-hover:text-slate-900 transition-colors duration-700">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="services" className="mb-20 lg:mb-32">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-[#60c2ff] mb-4">
                <span className="w-8 h-px bg-[#60c2ff]" />
                Услуги
                <span className="w-8 h-px bg-[#60c2ff]" />
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 tracking-tight leading-[1.1] mb-4">
                Лазерная <span className="text-[#60c2ff]">косметология</span>
              </h2>
              <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
                Выберите направление, чтобы перейти к отдельной странице процедуры,
                узнать о методике, результате и подобрать подходящий лазерный протокол.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container">
              {catalogServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </section>

          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
              <div className="relative reveal-up opacity-0" style={{ transitionDelay: "200ms" }}>
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.1)] relative">
                  <img src={ABOUT_IMAGE} alt="Лазерная процедура" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-slate-900/10"></div>
                </div>
              </div>

              <div className="reveal-up opacity-0">
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-6">
                  — О направлении
                </span>
                <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-8">
                  Премиальная
                  <br />
                  <span className="font-serif italic text-slate-400">лазерология</span>
                </h2>
                <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg lg:text-xl max-w-xl mb-16">
                  <p>
                    Лазерная косметология в SkinMed — это не набор одинаковых вспышек, а
                    точная работа с качеством кожи, рельефом, цветом и эстетикой лица и
                    тела. Мы подбираем сценарий под задачу пациента, а не под один
                    “любимый” аппарат.
                  </p>
                  <div className="pl-6 md:pl-8 border-l-4 border-[#60c2ff]/40 py-2">
                    <p className="italic font-serif text-slate-800 text-xl md:text-2xl leading-snug tracking-tight">
                      «В клинике SkinMed лазерные процедуры выстраиваются как премиальный
                      маршрут: консультация, подбор длины волны, деликатная тактика и
                      красивое заживление без лишней агрессии».
                    </p>
                  </div>
                </div>

                <div className="space-y-10 mt-12 md:mt-16">
                  <h3 className="text-3xl font-light tracking-[-0.03em] text-slate-900 mb-6">Этапы работы:</h3>
                  <EditorialList items={[
                    { num: "01", title: "Консультация", desc: "Оцениваем фототип, состояние кожи, выраженность проблемы и собираем план, который действительно подходит именно Вам." },
                    { num: "02", title: "Подготовка", desc: "Подбираем режим работы лазера, объясняем ощущения и реабилитацию, при необходимости используем комфортную местную подготовку." },
                    { num: "03", title: "Процедура", desc: "Проводим лазерное воздействие в деликатной клинической логике: точность, аккуратность, контроль реакции тканей и прогнозируемый результат." },
                  ]} />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-20 reveal-up opacity-0">
              <div className="max-w-3xl">
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-6">
                  — Решения
                </span>
                <h2 className="text-[3rem] sm:text-5xl lg:text-[5.5rem] font-light text-slate-900 tracking-[-0.04em] leading-[0.9]">
                  Какие задачи <span className="font-serif italic text-slate-400">решаем</span>
                </h2>
              </div>
              <div className="lg:max-w-sm pb-2">
                <p className="text-lg sm:text-[1.15rem] text-slate-500 font-light leading-relaxed">
                  Лазерные протоколы для обновления, очищения и выравнивания кожи с
                  акцентом на эстетичный, предсказуемый и аккуратный результат.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 stagger-container">
              {SOLUTION_CARDS.map((item, index) => {
                // Asymmetrical Bento zig-zag pattern
                const isWide = index === 0 || index === 3 || index === 4;
                return (
                  <div
                    key={index}
                    className={`group relative p-1.5 sm:p-2 rounded-[2.5rem] bg-slate-200/40 border border-slate-200/60 shadow-sm stagger-item opacity-0 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 ${
                      isWide ? "md:col-span-2" : "md:col-span-1"
                    }`}
                  >
                    {/* Inner Core (Double-Bezel Architecture) */}
                    <div className="relative h-full bg-white/90 backdrop-blur-md rounded-[calc(2.5rem-0.375rem)] sm:rounded-[calc(2.5rem-0.5rem)] p-8 sm:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_10px_30px_-10px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col">
                      
                      {/* Subtle ambient hover glow */}
                      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#60c2ff]/10 rounded-full blur-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                      <div className="flex items-center justify-between mb-8 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[#60c2ff]/10 group-hover:border-[#60c2ff]/20 transition-colors duration-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
                          <Icon icon={item.icon} className="text-[1.75rem] text-slate-400 group-hover:text-[#60c2ff] transition-colors duration-500" />
                        </div>
                        
                        {/* Nested trailing icon physics */}
                        <div className="w-10 h-10 rounded-full border border-slate-200/80 bg-white flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-sm">
                          <Icon icon="solar:arrow-right-up-linear" className="text-slate-400 group-hover:text-[#60c2ff] transition-colors" />
                        </div>
                      </div>

                      <div className="relative z-10 mt-auto">
                        <h3 className="text-2xl lg:text-[1.75rem] font-medium text-slate-900 mb-3 tracking-tight leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-[17px] text-slate-500 font-light leading-relaxed max-w-md">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-slate-200/50 pb-8">
              <div>
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                  — Преимущества
                </span>
                <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                  Выбирают <span className="font-serif italic text-slate-400">лучших</span>
                </h2>
              </div>
            </div>

            <div className="flex flex-col stagger-container">
              <EditorialList items={ADVANTAGES} />
            </div>
          </section>

          <section className="relative z-10 reveal-up opacity-0">
            <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-slate-900 p-10 md:p-16 lg:p-24 border border-white/5">
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-[2.5rem] sm:text-5xl lg:text-[4.5rem] font-light text-white tracking-[-0.02em] leading-[1.1] mb-6">
                    Начать путь к
                    <br />
                    <span className="font-serif italic text-slate-300">чистой коже</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-10 max-w-lg mx-auto lg:mx-0">
                    Оставьте заявку, и мы подскажем, какой лазерный сценарий подойдет
                    именно под Вашу задачу, фототип кожи и желаемый результат.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group w-full sm:w-auto">
                      <div className="absolute inset-0 bg-white/40 rounded-full blur-[20px] opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>
                      <button 
                        onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                        className="relative z-10 w-full sm:w-auto px-10 py-5 bg-white text-slate-900 rounded-full font-medium shadow-[0_0_2rem_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 hover:bg-slate-50 focus:outline-none flex justify-center items-center gap-3"
                      >
                        Записаться онлайн
                        <Icon icon="solar:arrow-right-linear" className="text-xl" />
                      </button>
                    </div>

                    <a
                      href="tel:+78432045511"
                      className="group flex items-center gap-4 text-slate-300 hover:text-white transition-colors focus:outline-none"
                    >
                      <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-slate-400 transition-colors">
                        <Icon icon="solar:phone-linear" className="text-xl" />
                      </div>
                      <span className="text-lg font-light tracking-wide">+7 (843) 204-55-11</span>
                    </a>
                  </div>
                </div>

                <div className="hidden lg:flex w-64 h-64 rounded-full border border-white/5 relative items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-white/10 animate-[spin-slow_15s_linear_infinite]"></div>
                  <div className="absolute inset-6 rounded-full border border-white/5 border-dashed animate-[spin-slow_20s_linear_infinite_reverse]"></div>
                  <div className="text-center mt-2">
                    <Icon icon="solar:star-fall-bold" className="text-3xl text-white/80 mx-auto mb-3" />
                    <span className="block text-xs uppercase tracking-[0.3em] text-white/50">SkinMed</span>
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
