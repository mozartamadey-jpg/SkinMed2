"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimationsProvider from "@/components/AnimationsProvider";
import EditorialList from '@/components/EditorialList';

// ============================================
// DESIGN SYSTEM - Healthcare/Wellness Aesthetic
// Based on SKILL3.md: Soft Minimalism + Glassmorphism
// Typography: Outfit (headings) + Nunito (body)
// Palette: Healthcare blue (#0891B2) + soft pastels
// Effects: Subtle shadows, 150-300ms micro-interactions
// Accessibility: WCAG 4.5:1 contrast, focus states
// ============================================

const SERVICES = [
  {
    id: "biorevitalization",
    title: "Биоревитализация",
    description: "Глубокое увлажнение и восстановление структуры кожи. Возвращает эластичность, здоровый цвет лица и убирает мелкую сетку морщин.",
    image: "/images/services/injection/inj_biorev_1775859281338.png",
    href: "/services/biorevitalization",
    icon: "solar:drop-bold",
    featured: true,
  },
  {
    id: "contour",
    title: "Контурная пластика",
    description: "Моделирование скул, подбородка и углов нижней челюсти филлерами на основе гиалуроновой кислоты.",
    image: "/images/services/injection/inj_contour_1775859317872.png",
    href: "/services/contour-plastics",
    icon: "solar:face-scan-circle-bold",
    featured: true,
  },
  {
    id: "lips",
    title: "Увеличение губ",
    description: "Увеличение губ и бережная коррекция формы. Эффективная работа с «кольцами Венеры» на шее.",
    image: "/images/services/injection/inj_lips_1775859296621.png",
    href: "/services/lip-augmentation",
    icon: "solar:heart-bold",
    featured: false,
  },
  {
    id: "wrinkles",
    title: "Ботулинотерапия",
    description: "Коррекция морщин (лоб, межбровье, «гусиные лапки»), поднятие кончиков бровей и расслабление жевательных мышц. Эффект омоложения на 5–7 лет.",
    image: "/images/services/injection/inj_wrinkles_1775859331437.png",
    href: "/services/botulinum-therapy",
    icon: "solar:stars-bold",
    featured: false,
  },
  {
    id: "mesotherapy-face",
    title: "Мезотерапия лица",
    description: "Инъекционные коктейли из витаминов и пептидов. Идеально для сияния кожи и интенсивного питания клеток.",
    image: "/images/services/injection/inj_meso_face_1775859347281.png",
    href: "/services/mesotherapy",
    icon: "solar:sparkles-bold",
    featured: false,
  },
  {
    id: "mesotherapy-hair",
    title: "Мезотерапия волос",
    description: "Лечение выпадения волос посредством инъекций (прямая стимуляция луковиц).",
    image: "/images/services/trichology/trich_sub_hair_loss_1_1775856696674.png",
    href: "/services/mesotherapy-hair",
    icon: "solar:scissors-bold",
    featured: false,
  },
  {
    id: "prp-cortexil",
    title: "PRP-терапия",
    description: "Использование собственной плазмы пациента для регенерации тканей на клеточном уровне. Самый безопасный метод омоложения.",
    image: "/images/services/injection/prp_realistic.png",
    href: "/services/plasmotherapy",
    icon: "solar:heart-pulse-bold",
    featured: true,
  },
  {
    id: "collagen",
    title: "Коллагенотерапия",
    description: "Восполнение дефицита естественного коллагена. Работает с рубцами, шрамами, растяжками и потерей тургора.",
    image: "/images/services/injection/inj_collagen_1775859375570.png",
    href: "/services/collagen-injections",
    icon: "solar:magic-stick-3-bold",
    featured: false,
  },
  {
    id: "hyperhidrosis",
    title: "Лечение потливости",
    description: "Избавление от мокрых подмышек, ладоней и стоп до 10 месяцев за один сеанс. Абсолютный комфорт.",
    image: "/images/services/injection/inj_hyperhidrosis_1775859389020.png",
    href: "/services/hyperhidrosis",
    icon: "solar:snowflake-bold",
    featured: false,
  },
  {
    id: "prp-hair",
    title: "PRP для волос",
    description: "Оздоровление кожи головы собственной обогащенной плазмой.",
    image: "/images/services/trichology/trich_sub_plasma_1_1775856711792.png",
    href: "/services/plasmotherapy-hair",
    icon: "solar:hairdryer-bold",
    featured: false,
  },
  {
    id: "pdrn",
    title: "PDRN-терапия",
    description: "Восстановление поврежденных клеток ДНК. Защита от фотостарения и мощный синтез нового коллагена.",
    image: "/images/services/injection/inj_pdrn_1775859403752.png",
    href: "/services/pdrn-therapy",
    icon: "solar:dna-bold",
    featured: false,
  },
];


// Компонент карточки услуги
function FadeImage({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={90}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      onLoad={() => setLoaded(true)}
      className={`${className} transition-[opacity,transform] duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] ${loaded ? "opacity-100" : "opacity-0"}`}
    />
  );
}

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  return (
    <Link
      href={service.href}
      className="group relative flex flex-col outline-none stagger-item opacity-0 transition-all duration-700 hover:-translate-y-2"
    >
      <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden bg-slate-50 mb-6">
        {/* Background Image */}
        <FadeImage
          src={service.image}
          alt={service.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        />
        
        {/* Subtle overlay for image contrast if needed, no heavy gradients */}
        <div className="absolute inset-0 bg-slate-900/5 transition-opacity duration-700 group-hover:opacity-0"></div>
        
        {/* Featured Badge */}
        {service.featured && (
          <div className="absolute top-6 left-6 px-4 py-2 bg-white/80 backdrop-blur-sm text-slate-800 text-[10px] font-medium uppercase tracking-[0.15em] rounded-full shadow-sm z-20">
            Популярное
          </div>
        )}

        {/* Hover Arrow Icon */}
        <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm transform transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 z-20">
          <Icon icon="solar:arrow-right-up-linear" className="text-xl text-slate-900" />
        </div>
      </div>

      {/* Text Content Below Image */}
      <div className="flex flex-col px-2">
        <div className="flex items-center gap-3 mb-3">
          <Icon icon={service.icon} className="text-2xl text-[#0ea5e9]" />
          <h3 className="text-xl lg:text-2xl font-normal text-slate-900 tracking-tight transition-colors group-hover:text-[#0ea5e9]">
            {service.title}
          </h3>
        </div>
        <p className="text-base text-slate-600 font-normal leading-relaxed line-clamp-3">
          {service.description}
        </p>
      </div>
    </Link>
  );
}

export default function InjectionCosmetologyPage() {
  useEffect(() => {
    // Add scroll glow logic for mobile only (<=1024px)
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    if (!isMobile) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('mobile-glow-active');
        } else {
          entry.target.classList.remove('mobile-glow-active');
        }
      });
    }, {
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0
    });

    // We defer slightly to ensure elements are rendered/animated by GSAP
    setTimeout(() => {
      const elements = document.querySelectorAll('.scroll-glow-item');
      elements.forEach(el => observer.observe(el));
    }, 500);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative font-sans flex flex-col">
      <AnimationsProvider />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
        {/* Clean, calm medical base */}
        <div className="absolute inset-0 bg-[#fdfdfd]"></div>
      </div>

      {/* Контент */}
      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />

        <main className="w-full mt-12 sm:mt-16">
          {/* Asymmetric Hero Секция */}
          <section className="mb-32 lg:mb-48 pt-10 min-h-[70vh] flex flex-col justify-center">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center stagger-container">
              {/* Left Column: Text */}
              <div className="text-left">
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-6 stagger-item opacity-0">
                  — Направление клиники
                </span>
                
                <h1 className="text-[clamp(2.75rem,13vw,3.5rem)] sm:text-6xl lg:text-[6.5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-8 stagger-item opacity-0 relative z-10">
                  Инъекционная
                  <br />
                  <span className="font-serif italic text-slate-400">косметология</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-slate-500 font-light max-w-2xl leading-relaxed mb-12 stagger-item opacity-0">
                  Современные методы омоложения без хирургии. Эффективные решения для красоты и упругости кожи с гарантированным результатом.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6 stagger-item opacity-0">
                  <button
                    onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
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

              {/* Right Column: Clean Medical Imagery */}
              <div className="relative h-[600px] lg:h-[800px] w-full stagger-item opacity-0 hidden lg:block">
                <div className="absolute inset-0 rounded-[2rem] lg:rounded-[4rem] overflow-hidden">
                  <FadeImage 
                    src="/images/services/injection/hero_realistic.png" 
                    alt="Инъекционная косметология" 
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Giant Editorial Stats (Inline, No Cards) */}
          <section className="mb-32 lg:mb-48 border-y border-slate-200/50 py-16 lg:py-24 relative z-10">
            <div className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center lg:items-start text-center lg:text-left gap-16 lg:gap-8 max-w-6xl mx-auto stagger-container">
              {[
                { value: "15", suffix: "ЛЕТ", label: "Проверенного клинического опыта" },
                { value: "50", suffix: "+", label: "Авторских инъекционных протоколов" },
                { value: "10", suffix: "К", label: "Лояльных пациентов клиники" },
                { value: "98", suffix: "%", label: "Индекс удовлетворенности" },
              ].map((stat, index) => (
                <div key={index} className="flex-1 w-full lg:w-auto min-w-[200px] stagger-item opacity-0 group scroll-glow-item flex flex-col items-center lg:items-start">
                  <div className="flex items-baseline mb-4 justify-center lg:justify-start">
                    <span className="text-[6rem] sm:text-[5rem] lg:text-[7rem] font-light text-slate-400 tracking-[-0.04em] leading-none group-hover:text-slate-800 transition-colors duration-700">
                      {stat.value}
                    </span>
                    <span className="text-3xl sm:text-2xl lg:text-3xl font-light text-[#0ea5e9] ml-1.5 tracking-tighter transition-colors duration-700">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="w-12 h-[2px] bg-[#0ea5e9]/30 mb-5 transform origin-center lg:origin-left group-hover:scale-x-150 group-hover:bg-[#0ea5e9] transition-all duration-500"></div>
                  <div className="text-sm text-slate-700 font-medium uppercase tracking-[0.12em] leading-relaxed max-w-[260px] lg:max-w-[210px] group-hover:text-slate-900 transition-colors duration-700">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Сетка услуг - Bento Grid Layout */}
          <section className="mb-20 lg:mb-32">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-[#60c2ff] mb-4">
                <span className="w-8 h-px bg-[#60c2ff]" />
                Услуги
                <span className="w-8 h-px bg-[#60c2ff]" />
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 tracking-tight leading-[1.1] mb-4">
                Инъекционная <span className="text-[#60c2ff]">косметология</span>
              </h2>
              <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
                Выберите процедуру для подробной информации о методике, результате и стоимости
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container">
              {SERVICES.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </section>

          {/* Описание инъекционной косметологии */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
              <div className="relative reveal-up opacity-0" style={{ transitionDelay: '200ms' }}>
                <div className="relative aspect-[4/5] rounded-[2rem] lg:rounded-[3rem] overflow-hidden">
                  <FadeImage 
                    src="/images/services/injection/inj_about_1775859268008.png" 
                    alt="Процесс лечения" 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-slate-900/5"></div>
                </div>
              </div>

              <div className="reveal-up opacity-0">
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-6">
                  — О направлении
                </span>
                <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-8">
                  Премиальная
                  <br />
                  <span className="font-serif italic text-slate-400">косметология</span>
                </h2>
                <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg lg:text-xl max-w-xl mb-16">
                  <p>
                    Инъекционная косметология — это эффективная альтернатива пластической хирургии. 
                    «Уколы красоты» позволяют продлить молодость, скорректировать черты лица и улучшить 
                    качество кожи без скальпеля и длительной реабилитации.
                  </p>
                  <div className="pl-6 md:pl-8 border-l-4 border-[#60c2ff]/40 py-2">
                    <p className="italic font-serif text-slate-800 text-xl md:text-2xl leading-snug tracking-tight">
                      «В клинике SkinMed процедуры проводят только врачи-косметологи с использованием 
                      сертифицированных препаратов премиум-класса.»
                    </p>
                  </div>
                </div>

                <div className="space-y-10">
                  <h3 className="text-3xl font-light tracking-[-0.03em] text-slate-900 mb-6">Этапы работы:</h3>
                  <EditorialList items={[
                    { num: "01", title: "Консультация", desc: "Глубокая 3D-диагностика кожи и составление персонального плана омоложения" },
                    { num: "02", title: "Подготовка", desc: "Тщательное очищение кожи, бережная и комфортная аппликационная анестезия" },
                    { num: "03", title: "Процедура", desc: "Филигранные инъекции препаратами с использованием атравматичных наноигл" },
                  ]} />
                </div>
              </div>
            </div>
          </section>

          {/* Какие проблемы решают */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-20 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                — Решения
              </span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Какие задачи <span className="font-serif italic text-slate-400">решаем</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Авторские протоколы для достижения абсолютно естественного и долгосрочного результата
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16 stagger-container">
              {[
                {
                  title: "Омоложение",
                  desc: "Устранение мимических морщин, заломов на лбу и межбровье. Эффект «отдохнувшего лица» минус 7 лет.",
                },
                {
                  title: "Лифтинг без операций",
                  desc: "Создание чёткого овала лица, устранение малярных мешков и провисаний всего за 1 процедуру.",
                },
                {
                  title: "Контурная коррекция",
                  desc: "Бережное моделирование губ, акцент на скулах. Сохраняем вашу индивидуальность без гиперкоррекции.",
                },
                {
                  title: "Качество кожи",
                  desc: "Мощное увлажнение, ластик для пигментации, стирание следов усталости и темных кругов.",
                },
                {
                  title: "Здоровье волос",
                  desc: "Активация луковиц с помощью обогащенной плазмы. Останавливаем выпадение раз и навсегда.",
                },
                {
                  title: "Гипергидроз",
                  desc: "Абсолютный комфорт. Избавление от мокрых подмышек, ладоней и стоп до 10 месяцев за один сеанс.",
                },
              ].map((item, index) => (
                <div key={index} className="stagger-item opacity-0 flex flex-col border-t border-slate-200 pt-6 group">
                  <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-3 tracking-tight transition-colors group-hover:text-[#0ea5e9]">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Dark CTA блок */}
          <section className="relative z-10 reveal-up opacity-0">
            <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-slate-900 p-10 md:p-16 lg:p-24">
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-[2.5rem] sm:text-5xl lg:text-[4.5rem] font-light text-white tracking-[-0.02em] leading-[1.1] mb-6">
                    Начать путь к
                    <br />
                    <span className="font-serif italic text-slate-300">совершенству</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-10 max-w-lg mx-auto lg:mx-0">
                    Сделайте первый шаг к идеальной коже. Получите подробную консультацию врача и персональный план лечения.
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
                      href="tel:+78432022020"
                      className="group flex items-center gap-4 text-slate-300 hover:text-white transition-colors focus:outline-none"
                    >
                      <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-slate-400 transition-colors">
                        <Icon icon="solar:phone-linear" className="text-xl" />
                      </div>
                      <span className="text-lg font-light tracking-wide">+7 (843) 202-20-20</span>
                    </a>
                  </div>
                </div>

                {/* Premium Visual Badge */}
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
