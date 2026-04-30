import { Icon } from "@iconify/react";

/* ── Design Tokens ── */
const TOKENS = {
  radius: {
    card: "2rem",
    icon: "1rem",
  },
  shadow: {
    rest: "0 0.75rem 2.5rem -0.75rem rgba(0,0,0,0.06)",
    hover: "0 1.5rem 4rem -0.5rem rgba(0,0,0,0.13)",
  },
  timing: "cubic-bezier(0.23, 1, 0.32, 1)",
};

/* ── Data ── */
interface Category {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: string;
  glowColor: string;
  accentBase: string;
  href: string;
}

const COSMETOLOGY_CATEGORIES: Category[] = [
  {
    id: "injection",
    title: "Инъекционная",
    subtitle: "КОСМЕТОЛОГИЯ",
    description: "Мгновенное восполнение объемов, устранение морщин и глубокое увлажнение.",
    icon: "solar:syringe-bold",
    gradient: "linear-gradient(135deg, #5ab6ee 0%, #80ceff 55%, #aee3ff 100%)",
    glowColor: "rgba(90, 182, 238, 0.2)",
    accentBase: "#60c2ff",
    href: "/services/injection",
  },
  {
    id: "laser",
    title: "Лазерная",
    subtitle: "КОСМЕТОЛОГИЯ",
    description: "Аппаратное омоложение, шлифовка рубцов и удаление несовершенств светом.",
    icon: "solar:magic-stick-3-bold",
    gradient: "linear-gradient(135deg, #9ca3af 0%, #d1d5db 55%, #f3f4f6 100%)",
    glowColor: "rgba(156, 163, 175, 0.2)",
    accentBase: "#9ca3af",
    href: "/services/lazernaya-kosmetologiya",
  },
  {
    id: "hardware",
    title: "Аппаратная",
    subtitle: "КОСМЕТОЛОГИЯ",
    description: "Передовые технологии SMAS-лифтинга и RF-терапии для безоперационной подтяжки.",
    icon: "solar:server-square-bold",
    gradient: "linear-gradient(135deg, #a78bfa 0%, #c4b5fd 55%, #ddd6fe 100%)",
    glowColor: "rgba(167, 139, 250, 0.2)",
    accentBase: "#a78bfa",
    href: "/services/apparatnaya-kosmetologiya",
  },
  {
    id: "aesthetic",
    title: "Эстетическая",
    subtitle: "КОСМЕТОЛОГИЯ",
    description: "Массажи, чистки и пилинги для регулярного ухода, красоты и сияния кожи.",
    icon: "solar:hand-stars-bold",
    gradient: "linear-gradient(135deg, #f472b6 0%, #fbcfe8 55%, #fdf2f8 100%)",
    glowColor: "rgba(244, 114, 182, 0.2)",
    accentBase: "#f472b6",
    href: "/services/aesthetic",
  },
];

const SPECIAL_CATEGORIES: Category[] = [
  {
    id: "trichology",
    title: "Трихология",
    subtitle: "ЛЕЧЕНИЕ ВОЛОС",
    description: "Комплексное решение проблем выпадения волос и заболеваний кожи головы.",
    icon: "solar:scissors-bold",
    gradient: "linear-gradient(135deg, #42b0d5 0%, #6bc5e8 55%, #9cdbf1 100%)",
    glowColor: "rgba(66, 176, 213, 0.2)",
    accentBase: "#42b0d5",
    href: "/services/trichology",
  },
  {
    id: "mens",
    title: "Мужская",
    subtitle: "КОСМЕТОЛОГИЯ",
    description: "Сохраняем мужественность, бережно устраняем выраженные возрастные изменения.",
    icon: "solar:user-bold",
    gradient: "linear-gradient(135deg, #4472b6 0%, #6b9ad6 55%, #9abfeb 100%)",
    glowColor: "rgba(68, 114, 182, 0.2)",
    accentBase: "#4472b6",
    href: "/services/mens-cosmetology",
  },
  {
    id: "neurology",
    title: "Неврология",
    subtitle: "ТЕРАПИЯ БОЛИ",
    description: "Эффективное лечение хронических болей, мигреней и неврологических расстройств.",
    icon: "solar:bolt-bold",
    gradient: "linear-gradient(135deg, #4e8ec6 0%, #79b2dc 55%, #a4ceee 100%)",
    glowColor: "rgba(78, 142, 198, 0.2)",
    accentBase: "#4e8ec6",
    href: "/services/neurology",
  },
];

/* ── Component ── */
export default function ServiceCategoriesSection() {
  const renderCard = (cat: Category, index: number) => {
    return (
      <a
        key={cat.id}
        href={cat.href}
        className="group relative h-full stagger-item opacity-0 cursor-pointer block no-underline"
        style={{ animationDelay: `${index * 120}ms` }}
      >
        {/* Card Shell */}
        <div
          className="relative bg-white/40 backdrop-blur-md border border-white/50 overflow-hidden transition-[transform,box-shadow,background-color,border-color] duration-700 flex flex-col h-full p-6 sm:p-8 z-10 group-hover:bg-white/60 group-hover:border-white/80 group-hover:-translate-y-1.5 group-hover:shadow-[0_1.5rem_4rem_-0.5rem_rgba(0,0,0,0.13)]"
          style={{
            borderRadius: TOKENS.radius.card,
            boxShadow: TOKENS.shadow.rest,
            transitionTimingFunction: TOKENS.timing,
          }}
        >
          {/* ── Ambient Gradient Glow (Inside Card) ── */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-0 blur-[3rem] group-hover:opacity-40 transition-opacity duration-1000 ease-out pointer-events-none"
            style={{ background: cat.glowColor }}
          />

          {/* Top Block: Title & Icon */}
          <div className="relative z-10 flex flex-col mb-4 sm:mb-6">
            {/* Glass Icon Box */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-5 rounded-[1.2rem] bg-white/70 border border-white flex items-center justify-center shadow-sm relative overflow-hidden group-hover:shadow-[0_0.5rem_1.5rem_-0.25rem_rgba(96,194,255,0.2)] transition-[box-shadow] duration-500">
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: cat.gradient }}
              />
              <Icon icon={cat.icon} className="text-[1.75rem] sm:text-3xl transition-all duration-500" style={{ color: cat.accentBase }} />
            </div>

            <div>
              <h4 className="text-[11px] sm:text-xs font-medium tracking-[0.2em] mb-1.5 transition-colors duration-500 uppercase text-slate-500 group-hover:text-[#60c2ff]">
                {cat.subtitle}
              </h4>
              <h3 className="text-2xl sm:text-[1.7rem] font-light text-slate-700 leading-tight tracking-tight">
                {cat.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="relative z-10 text-slate-500 font-light text-sm sm:text-[1rem] leading-relaxed mb-6 sm:mb-8 flex-grow transition-colors duration-500 group-hover:text-slate-700">
            {cat.description}
          </p>

          {/* Bottom Block: CTA */}
          <div className="relative z-10 border-t border-slate-200/40 pt-5 sm:pt-6 mt-auto">
            <div
              className="inline-flex items-center gap-2 text-sm font-light transition-all duration-500 text-slate-400 group-hover:text-[#60c2ff]"
            >
              Подробнее
              <Icon
                icon="solar:arrow-right-linear"
                className="text-lg transition-transform duration-500 group-hover:translate-x-1.5"
              />
            </div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <section id="directions" className="w-full reveal-up opacity-0 scroll-mt-24">
      {/* ── Editorial Header ── */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 lg:mb-16 px-2 sm:px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-3 text-slate-400 mb-4">
            <span className="w-8 h-px bg-slate-300" />
            <span className="text-[0.7rem] font-light uppercase tracking-[0.3em]">
              Направления
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-slate-700 tracking-tight leading-[1.08]">
            Клиника{" "}
            <span className="font-light italic text-[#60c2ff]">комплексного</span>
            <br />
            подхода к здоровью
          </h2>
        </div>

        <p className="text-[1.05rem] text-slate-500 font-light max-w-sm leading-relaxed md:text-right">
          Специализированные отделения для высокоточного решения задач любой сложности
        </p>
      </div>

      <div className="px-2 sm:px-6 flex flex-col gap-12 lg:gap-16">
        
        {/* Main Cosmetology Block */}
        <div>
          <h3 className="text-xl sm:text-2xl font-light text-slate-800 mb-6 flex items-center gap-4 before:w-12 before:h-[1px] before:bg-slate-300">
            Основы красоты
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 stagger-container">
            {COSMETOLOGY_CATEGORIES.map((cat, index) => renderCard(cat, index))}
          </div>
        </div>

        {/* Specialized Block */}
        <div>
          <h3 className="text-xl sm:text-2xl font-light text-slate-800 mb-6 flex items-center gap-4 before:w-12 before:h-[1px] before:bg-slate-300">
            Специализированный уход
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 stagger-container">
            {SPECIAL_CATEGORIES.map((cat, index) => renderCard(cat, index + 4))}
          </div>
        </div>

      </div>
    </section>
  );
}
