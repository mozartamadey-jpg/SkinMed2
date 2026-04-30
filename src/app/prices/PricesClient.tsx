"use client";

import { useState, useMemo, useEffect } from "react";
import { Icon } from "@iconify/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimationsProvider from "@/components/AnimationsProvider";

// TypeScript interfaces
interface Variant {
  name: string;
  price: number;
  promo?: string;
  note?: string;
  unit?: string;
}

interface Service {
  name: string;
  description: string;
  tags: string[];
  hasCalculator?: boolean;
  promo?: string;
  variants?: Variant[];
  price?: number;
  note?: string;
}

interface Category {
  id: string;
  title: string;
  icon: string;
  tags: string[];
  services: Service[];
}

// Теги для фильтрации
const TAGS = [
  { id: "all", label: "Все", icon: "solar:filter-linear" },
  { id: "wrinkles", label: "Морщины", icon: "solar:face-scan-circle-linear" },
  { id: "acne", label: "Акне", icon: "solar:shield-warning-linear" },
  { id: "oval", label: "Овал лица", icon: "solar:layers-linear" },
  { id: "hair", label: "Выпадение волос", icon: "solar:cat-linear" }, // used cat-linear instead of scissors-linear if missing, but scissors-linear works
  { id: "pigment", label: "Пигментация", icon: "solar:magic-stick-3-linear" },
  { id: "lifting", label: "Лифтинг", icon: "solar:arrow-up-linear" },
  { id: "cleaning", label: "Чистка", icon: "solar:waterdrop-linear" },
];

// Данные услуг с тегами
const CATEGORIES: Category[] = [
  {
    id: "lifting",
    title: "Аппаратный лифтинг и омоложение",
    icon: "solar:minus-square-outline", // changed icon to empty frame to match user's faint box if they want it, but flash-circle-bold was cooler
    tags: ["lifting", "oval", "wrinkles"],
    services: [
      {
        name: "Альтера-терапия (Ulthera)",
        description: "СМАС-лифтинг с УЗ-визуализацией. Расчет по линиям.",
        tags: ["lifting", "oval"],
        hasCalculator: true,
        promo: "-10% + консультация в подарок",
      },
      {
        name: "Oligio (7D RF)",
        description: "250₽/импульс. Без восстановления.",
        tags: ["lifting", "oval"],
        variants: [
          { name: "Глаза", price: 40000 },
          { name: "Овал", price: 80000 },
          { name: "Лицо полностью", price: 120000 },
        ],
      },
      {
        name: "СМАС-лифтинг Bison",
        description: "Ультразвуковая подтяжка",
        tags: ["lifting", "oval", "wrinkles"],
        variants: [
          { name: "Малярные области/Веки", price: 9900 },
          { name: "Шея", price: 18000 },
          { name: "Низ лица", price: 35000 },
          { name: "Всё лицо", price: 49900 },
        ],
      },
      {
        name: "РФ-лифтинг Vivace",
        description: "Микроигольчатый лифтинг",
        tags: ["lifting", "wrinkles"],
        variants: [
          { name: "Шея", price: 20000 },
          { name: "Глаза", price: 25000 },
          { name: "Лицо", price: 36000 },
          { name: "Лицо+Шея", price: 38000, promo: "Акция" },
          { name: "Лицо+Шея+Декольте", price: 54000, promo: "Акция" },
        ],
      },
      {
        name: "Exilis Ultra 360",
        description: "Радиочастотный лифтинг",
        tags: ["lifting", "oval"],
        variants: [
          { name: "Тело (от)", price: 6000 },
          { name: "Лицо", price: 12000 },
          { name: "Глаза", price: 8000 },
        ],
      },
    ],
  },
  {
    id: "injections",
    title: "Инъекционная косметология",
    icon: "solar:cup-outline",
    tags: ["wrinkles", "lifting", "hair"],
    services: [
      {
        name: "Биоревитализация",
        description: "Увлажнение и омоложение",
        tags: ["wrinkles", "lifting"],
        variants: [
          { name: "P-SHINE", price: 7500 },
          { name: "NCTF", price: 14000 },
          { name: "REVI Style", price: 12500 },
          { name: "REVI Strong 1мл", price: 15000 },
          { name: "REVI Strong 2мл", price: 21500 },
          { name: "Profhilo", price: 27000 },
          { name: "Novocutan", price: 21000 },
          { name: "Плинест", price: 22500 },
        ],
      },
      {
        name: "Ботулинотерапия",
        description: "Коррекция морщин",
        tags: ["wrinkles"],
        variants: [
          { name: "Диспорт", price: 180, unit: "ед" },
          { name: "Ксеомин", price: 350, unit: "ед" },
          { name: "Лоб+межбровье", price: 10500, promo: "Акция" },
          { name: "Гипергидроз", price: 30000 },
        ],
      },
      {
        name: "Коллагенотерапия",
        description: "Стимуляция коллагена",
        tags: ["wrinkles", "lifting"],
        variants: [
          { name: "Collost", price: 15000, note: "от" },
          { name: "Nithya", price: 23000 },
          { name: "AestheFill", price: 56000 },
          { name: "Juvelook", price: 60000 },
        ],
      },
      {
        name: "Контурная пластика",
        description: "Филлеры",
        tags: ["wrinkles", "lifting"],
        variants: [
          { name: "Belotero", price: 17500, note: "от" },
          { name: "Radiesse 1.5мл", price: 33000 },
          { name: "Radiesse 3мл", price: 61000 },
          { name: "Stylage M", price: 23000 },
        ],
      },
      {
        name: "Увеличение губ / Растворение",
        description: "Коррекция объема",
        tags: ["wrinkles"],
        variants: [
          { name: "Belotero Lips", price: 17500 },
          { name: "Neauvia", price: 23500 },
          { name: "Art Filler", price: 20000 },
          { name: "Растворение геля", price: 10000 },
        ],
      },
      {
        name: "Плазмотерапия PRP Cortexil",
        description: "Омоложение плазмой",
        tags: ["wrinkles", "hair"],
        price: 9900,
        note: "1 пробирка",
      },
    ],
  },
  {
    id: "laser",
    title: "Лазерная косметология и удаление",
    icon: "solar:mask-happly-outline",
    tags: ["pigment", "acne", "wrinkles"],
    services: [
      {
        name: "PicoCare (Омоложение)",
        description: "Пикосекундный лазер",
        tags: ["pigment", "wrinkles"],
        variants: [
          { name: "Веки", price: 9900 },
          { name: "Лицо", price: 35000 },
          { name: "Лицо+Шея", price: 35000, promo: "Акция" },
          { name: "Кисти рук", price: 25000 },
        ],
      },
      {
        name: "Лазерная шлифовка СО2",
        description: "Bison CO2 лазер",
        tags: ["wrinkles", "acne"],
        variants: [
          { name: "Рубцы", price: 4000, note: "от" },
          { name: "Лицо полностью", price: 48000 },
          { name: "Лазерная блефаропластика", price: 29000 },
        ],
      },
      {
        name: "Фотоомоложение IPL",
        description: "Clearlight IPL",
        tags: ["pigment", "acne", "wrinkles"],
        variants: [
          { name: "Нос/Подбородок", price: 8000 },
          { name: "Лицо", price: 15900 },
          { name: "Лицо+Шея+Декольте", price: 30000 },
        ],
      },
      {
        name: "Удаление тату/татуажа",
        description: "PicoCare",
        tags: ["pigment"],
        variants: [
          { name: "XS (до 2 см)", price: 5000 },
          { name: "Брови/Веки", price: 9000 },
        ],
        promo: "-30% до 31 марта",
      },
      {
        name: "Удаление пигментации",
        description: "PicoCare",
        tags: ["pigment"],
        variants: [
          { name: "2 кв.см", price: 4900 },
          { name: "Лицо полностью", price: 29000 },
        ],
      },
      {
        name: "Удаление сосудов",
        description: "Clearlight IPL",
        tags: ["pigment"],
        variants: [
          { name: "Нос", price: 6000 },
          { name: "Лицо полностью", price: 14900 },
        ],
      },
    ],
  },
  {
    id: "cleaning",
    title: "Чистки, пилинги и уход",
    icon: "solar:waterdrop-bold",
    tags: ["cleaning", "acne"],
    services: [
      {
        name: "Чистки",
        description: "Все типы",
        tags: ["cleaning", "acne"],
        variants: [
          { name: "УЗ-чистка", price: 3000 },
          { name: "Комбинированная", price: 6500 },
          { name: "Атравматичная Holy Land", price: 6500 },
        ],
      },
      {
        name: "Пилинги",
        description: "Химические пилинги",
        tags: ["cleaning", "acne", "pigment"],
        variants: [
          { name: "PRX-T33", price: 5800 },
          { name: "BioRePeel", price: 6800 },
          { name: "Желтый пилинг", price: 5400 },
        ],
      },
      {
        name: "Массаж лица",
        description: "Классический",
        tags: ["lifting"],
        price: 3000,
      },
      {
        name: "Уход за лицом",
        description: "Комплексный уход",
        tags: ["cleaning", "acne"],
        price: 6500,
      },
    ],
  },
  {
    id: "dermatology",
    title: "Дерматология и Лечение",
    icon: "solar:medical-kit-bold",
    tags: ["acne", "hair", "cleaning"],
    services: [
      {
        name: "Консультации",
        description: "Прием специалистов",
        tags: ["acne", "hair"],
        variants: [
          { name: "Первичная консультация", price: 2000 },
          { name: "Узкий специалист", price: 5000, note: "Невролог/Дерматолог/Трихолог" },
        ],
      },
      {
        name: "Удаление образований",
        description: "Родинки, бородавки, папилломы",
        tags: ["cleaning"],
        variants: [
          { name: "До 3 мм", price: 500 },
          { name: "3-5 мм", price: 1200 },
          { name: "5-10 мм", price: 2200 },
          { name: "Более 10 мм", price: 3400 },
        ],
      },
      {
        name: "Вросший ноготь",
        description: "Лечение",
        tags: ["cleaning"],
        price: 4000,
        note: "от",
      },
      {
        name: "Волосы",
        description: "Лечение волос",
        tags: ["hair"],
        variants: [
          { name: "Мезотерапия волос", price: 8000 },
          { name: "РФ-лифтинг головы", price: 28000 },
        ],
      },
    ],
  },
];

// Калькулятор линий Ulthera
const LINE_OPTIONS = [
  { lines: 1, price: 255 },
  { lines: 50, price: 12750 },
  { lines: 140, price: 35700 },
  { lines: 300, price: 76500 },
  { lines: 500, price: 128520, note: "от" },
  { lines: 800, price: 204000 },
];

export default function PricesClient() {
  const [activeTag, setActiveTag] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const [selectedLines, setSelectedLines] = useState(140);
  const [showPromo, setShowPromo] = useState(true);

  // Обработчики: поиск и теги не конфликтуют
  const handleTagClick = (tagId: string) => {
    if (activeTag === tagId) {
      setActiveTag("all"); // Отжимаем тег
    } else {
      setActiveTag(tagId);
      setSearchQuery(""); // Сбрасываем поиск
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setActiveTag("all"); // Сбрасываем тег
  };

  // Фильтрация категорий и услуг
  const filteredCategories = useMemo(() => {
    if (activeTag === "all" && !searchQuery.trim()) return CATEGORIES;
    
    const query = searchQuery.toLowerCase().trim();
    
    return CATEGORIES.map((cat) => {
      const filteredServices = cat.services.filter((svc) => {
        const matchesTag = activeTag === "all" || svc.tags.includes(activeTag);
        const matchesSearch = !query || 
                              svc.name.toLowerCase().includes(query) || 
                              svc.description.toLowerCase().includes(query);
        return matchesTag && matchesSearch;
      });
      return { ...cat, services: filteredServices };
    }).filter(cat => cat.services.length > 0);
  }, [activeTag, searchQuery]);

  // Авто-разкрытие аккордеонов при поиске или фильтрации
  useEffect(() => {
    if (activeTag !== "all" || searchQuery.trim() !== "") {
      setOpenCategories(filteredCategories.map(c => c.id));
    } else {
      setOpenCategories([]); // Сбрасываем аккордеоны если ничего не выбрано
    }
  }, [activeTag, searchQuery, filteredCategories]);

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const calculatedPrice = useMemo(() => {
    const option = LINE_OPTIONS.find((o) => o.lines === selectedLines);
    return option ? option.price : 0;
  }, [selectedLines]);

  const formatPrice = (price: number) => {
    return price.toLocaleString("ru-RU") + " ₽";
  };

  return (
    <div className="min-h-screen flex flex-col relative font-sans text-slate-800">
      <AnimationsProvider />
      
      {/* Фоновое свечение */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#eaf3f8] to-transparent blur-[6.25rem] opacity-70 mix-blend-multiply animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tl from-[#cbe4f4] to-transparent blur-[7.5rem] opacity-60 mix-blend-multiply animate-pulse"
          style={{ animationDuration: "18s" }}
        ></div>
      </div>

      {/* Sticky баннер акций */}
      {showPromo && (
        <div className={`fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#60c2ff] to-[#3ba3e0] text-white py-2 px-3 sm:px-4 shadow-lg transition-transform duration-300`}>
          <div className="max-w-[100rem] mx-auto flex items-center justify-between sm:justify-center relative px-4 sm:px-8 lg:px-12 flex-grow">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-1 sm:gap-2 text-xs font-semibold sm:text-sm font-extralight pr-6 sm:pr-0 w-full sm:w-auto">
              <div className="flex items-center gap-2 mb-1 sm:mb-0">
                <Icon icon="solar:fire-bold" className="text-sm sm:text-lg animate-pulse" />
                <span className="font-medium whitespace-nowrap">Спецпредложения до 31 марта:</span>
              </div>
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 leading-tight">
                <span className="font-light">Альтера -10%</span>
                <span className="text-white/60 hidden sm:inline">|</span>
                <span className="text-white/60 sm:hidden">&bull;</span>
                <span>Лицо+Шея PicoCare 35.000₽</span>
                <span className="text-white/60 hidden sm:inline">|</span>
                <span className="text-white/60 sm:hidden">&bull;</span>
                <span>Удаление тату -30%</span>
                <button className="ml-0 sm:ml-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-white/20 rounded-full text-xs font-semibold sm:text-xs hover:bg-white/30 transition-colors whitespace-nowrap mt-1 sm:mt-0">
                  Подробнее
                </button>
              </div>
            </div>
            <button
              onClick={() => setShowPromo(false)}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
              aria-label="Закрыть"
            >
              <Icon icon="solar:close-circle-linear" className="text-lg sm:text-xl" />
            </button>
          </div>
        </div>
      )}

      {/* Основной контент */}
      <div className={`w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col gap-12 sm:gap-20 pb-24 ${showPromo ? 'pt-24 sm:pt-20' : 'pt-8 sm:pt-16'} transition-all duration-300`}>
        <Header />

        {/* Hero секция с Поиском */}
        <section className="text-center reveal-up opacity-0">
          <div className="inline-flex items-center gap-2 bg-[#eaf3f8] text-[#60c2ff] px-4 py-2 rounded-full mb-6 border border-white">
            <Icon icon="solar:tag-linear" className="text-lg" style={{ strokeWidth: 1.5 }} />
            <span className="text-sm sm:text-base font-medium uppercase tracking-widest">Прайс-лист</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight leading-[1.1] mb-6">
            Цены на услуги
            <br />
            <span className="text-[#60c2ff]">клиники СкинМед</span>
          </h1>
          
          <div className="relative w-full max-w-xl mx-auto mt-8 mb-4">
            <Icon icon="carbon:search" className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-2xl" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Поиск по названию услуги (например, Биоревитализация)"
              className="w-full bg-white/80 backdrop-blur-2xl border border-white/80 rounded-full py-4 pl-14 pr-10 text-lg sm:text-xl font-medium font-normal text-slate-900 focus:outline-none focus:border-[#60c2ff] focus:ring-4 focus:ring-[#60c2ff]/10 shadow-[0_0.625rem_1.5rem_rgba(0,0,0,0.03)] transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
              >
                <Icon icon="solar:close-circle-linear" className="text-xl" />
              </button>
            )}
          </div>
        </section>

        {/* Фильтры */}
        <section className="reveal-up opacity-0 -mt-6 sm:-mt-10">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {TAGS.map((tag) => (
              <button
                key={tag.id}
                onClick={() => handleTagClick(tag.id)}
                className={`flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeTag === tag.id
                    ? "bg-[#60c2ff] text-white shadow-[0_0.5rem_1.5rem_rgba(96,194,255,0.4)]"
                    : "bg-white/80 backdrop-blur-md text-slate-600 border border-white/60 hover:bg-white hover:text-[#60c2ff] hover:shadow-sm"
                }`}
              >
                {tag.icon && <Icon icon={tag.icon} className="text-lg sm:text-xl font-medium" />}
                <span>{tag.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Аккордеоны с услугами */}
        <section className="flex flex-col gap-4">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 bg-white/40 backdrop-blur-md rounded-[2rem] border border-white/60 animate-fade-in-down">
              <Icon icon="solar:sad-circle-linear" className="text-4xl text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 font-light">По вашему запросу ничего не найдено</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveTag("all"); }}
                className="mt-4 text-[#60c2ff] hover:underline font-light text-sm"
              >
                Сбросить фильтры
              </button>
            </div>
          ) : (
            filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_1.875rem_5rem_-1.25rem_rgba(0,0,0,0.05)] rounded-[2rem] overflow-hidden transition-shadow hover:shadow-[0_2rem_5rem_-1rem_rgba(96,194,255,0.15)] group animate-fade-in"
              >
                {/* Заголовок категории */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-8 hover:bg-white/60 transition-colors"
                >
                  <div className="flex items-center gap-3 sm:gap-4 text-left">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#eaf3f8] group-hover:bg-[#60c2ff]/20 transition-colors flex items-center justify-center text-[#60c2ff] shrink-0">
                      <Icon icon={category.icon} className="text-xl sm:text-2xl" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-3xl font-medium text-slate-900 leading-tight mb-1">{category.title}</h2>
                      <p className="text-sm sm:text-base text-slate-600 font-normal">
                        {category.services.length} {category.services.length === 1 ? 'услуга' : category.services.length < 5 ? 'услуги' : 'услуг'}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-100 flex items-center justify-center transition-transform duration-500 ${
                      openCategories.includes(category.id) ? "rotate-180 bg-[#60c2ff]/10 text-[#60c2ff]" : "text-slate-500"
                    }`}
                  >
                    <Icon icon="solar:alt-arrow-down-bold" className="text-lg" />
                  </div>
                </button>

                {/* Содержимое категории */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    openCategories.includes(category.id) ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-8 pb-6 sm:pb-8">
                      <div className="border-t border-slate-100/50 pt-6 space-y-4 sm:space-y-6">
                        {category.services.map((service, svcIndex) => (
                          <div
                            key={svcIndex}
                            className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/60 hover:border-[#60c2ff]/30 hover:shadow-[0_1rem_2rem_-0.5rem_rgba(96,194,255,0.15)] hover:-translate-y-0.5 transition-all duration-500"
                          >
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 sm:gap-6">
                              <div className="flex-1 w-full">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <h3 className="text-lg sm:text-2xl font-semibold text-slate-900 leading-snug">
                                    {service.name}
                                  </h3>
                                  {service.promo && (
                                    <span className="px-2 py-1 bg-[#60c2ff] text-white text-xs font-semibold sm:text-xs font-light rounded-full whitespace-nowrap">
                                      {service.promo}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm sm:text-base text-slate-600 font-normal mb-4 leading-relaxed max-w-2xl">
                                  {service.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                  {service.tags.map((tag) => {
                                    const tagInfo = TAGS.find((t) => t.id === tag);
                                    return tagInfo ? (
                                      <span
                                        key={tag}
                                        className="px-2 sm:px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs sm:text-sm uppercase tracking-wide font-medium rounded-full"
                                      >
                                        {tagInfo.label}
                                      </span>
                                    ) : null;
                                  })}
                                </div>
                              </div>

                              {/* Цены / Калькулятор */}
                              <div className="w-full lg:w-auto lg:min-w-[20rem] shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200/50 pt-4 lg:pt-0 lg:pl-6 mt-2 lg:mt-0">
                                {service.hasCalculator ? (
                                  <div className="bg-gradient-to-br from-[#eaf3f8] to-white/50 rounded-xl p-4 border border-[#60c2ff]/10">
                                    <p className="text-sm sm:text-base font-medium text-slate-600 mb-3">
                                      Количество линий:
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                                      {LINE_OPTIONS.map((opt) => (
                                        <button
                                          key={opt.lines}
                                          onClick={() => setSelectedLines(opt.lines)}
                                          className={`flex-1 min-w-[3.5rem] px-2 py-1.5 rounded-lg text-sm font-medium transition-all ${
                                            selectedLines === opt.lines
                                              ? "bg-[#60c2ff] text-white shadow-sm"
                                              : "bg-white text-slate-600 hover:bg-[#60c2ff]/10 border border-slate-100"
                                          }`}
                                        >
                                          {opt.lines}
                                        </button>
                                      ))}
                                    </div>
                                    <div className="flex items-center justify-between pt-2 border-t border-slate-200/50">
                                      <span className="text-base font-medium text-slate-600">Итого:</span>
                                      <span className="text-2xl sm:text-3xl font-semibold text-[#60c2ff]">
                                        {formatPrice(calculatedPrice)}
                                      </span>
                                    </div>
                                  </div>
                                ) : service.variants ? (
                                  <div className="space-y-1 sm:space-y-2">
                                    {service.variants.map((variant, vIndex) => (
                                      <div
                                        key={vIndex}
                                        className="flex flex-col sm:flex-row sm:items-center justify-between py-2.5 sm:py-2 border-b border-slate-100/50 last:border-0 gap-1 sm:gap-4"
                                      >
                                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                                          <span className="text-base font-medium text-slate-800">{variant.name}</span>
                                          {variant.promo && (
                                            <span className="px-1.5 py-0.5 bg-green-50 text-green-600 text-xs font-semibold rounded border border-green-100">
                                              {variant.promo}
                                            </span>
                                          )}
                                        </div>
                                        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto mt-1 sm:mt-0">
                                          {variant.note && (
                                            <span className="text-xs sm:text-sm text-slate-500 mr-2 sm:mr-3 font-medium">{variant.note}</span>
                                          )}
                                          <span className="font-light text-[#60c2ff] sm:text-slate-900 whitespace-nowrap text-lg sm:text-xl font-medium">
                                            {formatPrice(variant.price)}
                                            {variant.unit && (
                                              <span className="text-xs sm:text-sm text-slate-400 font-extralight ml-0.5">/{variant.unit}</span>
                                            )}
                                          </span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="flex items-center justify-between lg:justify-end gap-3 w-full">
                                    {service.note && (
                                      <span className="text-xs sm:text-sm text-slate-400 font-extralight">{service.note}</span>
                                    )}
                                    <span className="text-3xl sm:text-4xl font-bold text-[#60c2ff]">
                                      {formatPrice(service.price || 0)}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}

                        {/* CTA после каждой категории */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 bg-gradient-to-r from-[#eaf3f8] to-white border border-[#60c2ff]/10 rounded-2xl p-5 sm:p-6 shadow-sm mt-8">
                          <div>
                            <p className="text-slate-900 font-medium text-base sm:text-lg mb-1">
                              Сложно выбрать подходящую процедуру?
                            </p>
                            <p className="text-sm sm:text-base text-slate-600 font-normal">
                              Оставьте заявку — наш врач-косметолог подберет план индивидуально
                            </p>
                          </div>
                          <button 
                            onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#60c2ff] text-white px-6 py-3 rounded-xl hover:shadow-[0_0.5rem_1.5rem_rgba(96,194,255,0.4)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap shadow-sm group active:scale-95"
                          >
                            <Icon icon="solar:phone-rounded-bold" className="text-lg group-hover:rotate-12 transition-transform" />
                            <span className="font-extralight">Консультация</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>

        {/* Общий CTA */}
        <section className="reveal-up opacity-0">
          <div className="bg-gradient-to-br from-[#60c2ff] to-[#3ba3e0] rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-8">
                <Icon icon="solar:gift-bold" className="text-3xl text-white" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-tight leading-[1.1] mb-6">
                Первичная консультация
                <br />
                <span className="font-light">со скидкой 50%</span>
              </h2>
              
              <p className="text-sm sm:text-lg lg:text-xl text-white/90 font-extralight mb-10 max-w-xl mx-auto leading-relaxed">
                Запишитесь сейчас и получите полную аппаратную диагностику кожи + персональный план процедур на год
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <button 
                  onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                  className="bg-white text-[#60c2ff] px-10 py-5 sm:py-4 rounded-2xl shadow-[0_1rem_2rem_rgba(0,0,0,0.15)] text-sm sm:text-base font-medium sm:font-light transition-all duration-500 hover:shadow-[0_1.5rem_3rem_rgba(0,0,0,0.2)] hover:-translate-y-1 active:scale-95 group w-full sm:w-auto uppercase tracking-wider sm:normal-case sm:tracking-normal"
                >
                  <span className="flex items-center justify-center gap-2">
                    Записаться онлайн
                    <Icon icon="solar:arrow-right-linear" className="text-xl transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
                <a
                  href="tel:+78432103256"
                  className="flex items-center gap-3 px-6 py-4 text-white/90 hover:text-white transition-colors bg-white/5 sm:bg-transparent rounded-2xl w-full sm:w-auto justify-center"
                >
                  <Icon icon="solar:phone-rounded-bold" className="text-xl" />
                  <span className="font-extralight text-lg">+7 (843) 210-32-56</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="relative z-20 w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
