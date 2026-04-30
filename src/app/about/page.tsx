import { Metadata } from "next";
import { Icon } from "@iconify/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimationsProvider from "@/components/AnimationsProvider";
import EquipmentSection from "@/components/equipment/EquipmentSection";
import BookingButton from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "О клинике СкинМед | Премиальная косметология в Казани",
  description:
    "Клиника эстетической медицины СкинМед в Казани. Премиум класс, 13+ врачей, современное оборудование мирового уровня. СМАС-лифтинг, лазерное омоложение, лечение акне. Работаем с 2021 года. Лицензия Минздрава РФ.",
  keywords: [
    "клиника косметологии Казань",
    "СкинМед",
    "эстетическая медицина",
    "премиум косметология",
    "СМАС-лифтинг Казань",
    "лазерное омоложение",
    "врачи косметологи",
    "дерматология Казань",
  ],
  openGraph: {
    title: "О клинике СкинМед | Премиальная косметология в Казани",
    description:
      "Клиника эстетической медицины СкинМед. Премиум класс, 13+ врачей, оборудование мирового уровня. Работаем с 2021 года.",
    url: "https://skinmed-kzn.ru/about",
    type: "website",
    locale: "ru_RU",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col relative font-sans text-slate-800">
      {/* Аврора Фоновое Свечение (Premium WOW effect) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
        {/* Soft base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/90 via-[#f0f5fa]/80 to-[#e4eaf0]/90"></div>
        
        {/* Animated Aurora meshes */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] opacity-50 animate-orbit" style={{ background: "radial-gradient(circle, rgba(96,194,255,0.26) 0%, transparent 70%)", animationDuration: "34s", willChange: "transform" }}></div>
        
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] opacity-50 animate-float" style={{ background: "radial-gradient(circle, rgba(128,208,255,0.18) 0%, rgba(205,220,233,0.3) 40%, transparent 70%)", animationDuration: "28s", animationDelay: "-8s", willChange: "transform" }}></div>

        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-[100%] opacity-55 animate-orbit" style={{ background: "radial-gradient(circle, rgba(184,224,255,0.25) 0%, transparent 70%)", animationDuration: "40s", animationDirection: "reverse", willChange: "transform" }}></div>
        
        {/* Noise overlay for premium luxury texture */}
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 20% 30%, rgba(15,23,42,0.45) 0 1px, transparent 1px 4px)",
          }}
        ></div>
      </div>

      {/* Основной контейнер */}
      <div className="w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col gap-16 sm:gap-24 pb-24 flex-grow">
        <Header />

        {/* Hero-секция: Визитка и миссия */}
        <HeroSection />

        {/* Философия и принципы */}
        <PhilosophySection />

        {/* Технологии и аппараты */}
        <TechnologySection />

        {/* Преимущества СкинМед */}
        <AdvantagesSection />

        {/* Каталог оборудования */}
        <EquipmentSection />

        {/* Команда экспертов */}
        <TeamSection />

        {/* CTA */}
        <CTASection />
      </div>

      <div className="relative z-20 w-full mt-auto">
        <Footer />
      </div>

      <AnimationsProvider />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="w-full min-h-[85vh] flex flex-col lg:flex-row gap-8 lg:gap-12 items-center pt-8 lg:pt-16">
      {/* Левая колонка - Главный визуал */}
      <div className="w-full lg:w-[55%] relative group">
        {/* Animated glowing orb behind the card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-[#60c2ff]/30 blur-[100px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-1000 -z-10 animate-pulse" style={{ animationDuration: "6s" }}></div>
        
        <div className="relative bg-white/40 backdrop-blur-3xl rounded-[2.5rem] sm:rounded-[3rem] border-t border-l border-white/90 border-b border-r border-white/40 shadow-[0_2rem_5rem_-1rem_rgba(96,194,255,0.15)] p-3 sm:p-4 overflow-hidden reveal-scale opacity-0 transition-transform duration-700 hover:scale-[1.01]">
          <div className="aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
            {/* Dark/color overlay for premium deep feel */}
            <div className="absolute inset-0 bg-[#0f172a]/10 mix-blend-overlay z-10"></div>
            <img
              src="/images/about_hero.png"
              alt="Интерьер клиники СкинМед"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-[#0f172a]/10 to-transparent z-10 transition-opacity duration-700 group-hover:opacity-90"></div>
            
            {/* Наложенные бейджи */}
            <div className="absolute top-6 left-6 flex flex-col gap-3 z-20">
              <div className="bg-white/80 backdrop-blur-xl px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-800 border border-white/60 shadow-[0_1rem_2rem_rgba(0,0,0,0.1)]">
                <span className="text-[#60c2ff] font-semibold">С 2021 года</span> — Премиум класс
              </div>
              <div className="bg-white/80 backdrop-blur-xl px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-800 border border-white/60 shadow-[0_1rem_2rem_rgba(0,0,0,0.1)]">
                <span className="text-[#60c2ff] font-semibold">13+</span> Врачей-экспертов
              </div>
            </div>
          </div>
        </div>

        {/* Плавающая карточка с рейтингом */}
        <div className="absolute -bottom-6 -right-4 sm:right-8 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[0_1.25rem_3rem_rgba(0,0,0,0.1)] border border-white/80 reveal-up opacity-0 z-20 max-w-[220px]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#eaf3f8] flex items-center justify-center text-[#60c2ff]">
              <Icon icon="solar:star-bold" className="text-xl" />
            </div>
            <div>
              <div className="text-2xl font-light text-slate-900">4.9</div>
              <div className="text-xs text-slate-400">Яндекс Карты</div>
            </div>
          </div>
          <p className="text-xs text-slate-500 font-extralight leading-relaxed">
            Оценка на основе 200+ реальных отзывов
          </p>
        </div>
      </div>

      {/* Правая колонка - Контент */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center lg:pl-8">
        <div className="stagger-container">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#eaf3f8] to-white text-[#60c2ff] px-4 py-2 rounded-full w-max mb-6 sm:mb-8 border border-[#eaf3f8] shadow-sm stagger-item opacity-0">
            <Icon icon="solar:buildings-linear" className="text-lg" style={{ strokeWidth: 1.5 }} />
            <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-slate-700">О клинике</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight leading-[1.1] mb-6 stagger-item opacity-0">
            Клиника
            <br />
            <span className="font-light">эстетической</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60c2ff] via-[#48abeb] to-[#80d0ff] animate-pulse" style={{ animationDuration: "5s" }}>медицины</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed mb-8 stagger-item opacity-0">
            Экспертная косметология и дерматология в Казани. Наша миссия — объединить передовые технологии лазерной медицины и заботливый сервис уровня premium.
          </p>

          <div className="flex flex-wrap gap-4 stagger-item opacity-0">
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-4 py-3 rounded-xl border border-white/60">
              <Icon icon="solar:shield-check-bold" className="text-2xl text-[#60c2ff]" />
              <span className="text-sm font-light text-slate-700">Лицензия<br/>Минздрава РФ</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-4 py-3 rounded-xl border border-white/60">
              <Icon icon="solar:medal-ribbon-star-linear" className="text-2xl text-[#60c2ff]" />
              <span className="text-sm font-light text-slate-700">Премиум<br/>класс</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const principles = [
    { icon: "solar:shield-check-linear", title: "Безопасность", desc: "Только сертифицированное оборудование" },
    { icon: "solar:heart-linear", title: "Честная медицина", desc: "Процедуры с реальным результатом" },
    { icon: "solar:document-text-linear", title: "Доказательный подход", desc: "Объясняем методику понятным языком" },
    { icon: "solar:scanner-linear", title: "Диагностика", desc: "Глубокий разбор задачи на консультации" },
  ];

  return (
    <section className="w-full">
      <div className="bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_1.875rem_5rem_-1.25rem_rgba(0,0,0,0.05)] rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Левая часть - Заголовок и описание */}
          <div className="reveal-up opacity-0">
            <div className="inline-flex items-center gap-2 bg-[#eaf3f8] text-[#60c2ff] px-4 py-2 rounded-full mb-6 border border-white">
              <Icon icon="solar:stars-minimalistic-linear" className="text-lg" style={{ strokeWidth: 1.5 }} />
              <span className="text-xs sm:text-sm font-light uppercase tracking-widest">Философия</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-[1.1] mb-6">
              Точность в деталях,
              <br />
              <span className="text-[#60c2ff]">прогнозируемый</span> результат
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-8">
              Клиника СкинМед начала свою работу в 2021 году. Наша миссия — объединить передовые технологии лазерной медицины и заботливый премиальный сервис.
            </p>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-8 border-l-2 border-[#60c2ff] pl-6">
              Мы не даем пустых обещаний, а опираемся на точную аппаратную диагностику и экспертность наших врачей со стажем более 8 лет. Вы всегда знаете, какой препарат вводится и как работает аппарат, потому что прозрачность — наше главное правило.
            </p>

            <BookingButton 
              className="bg-[#60c2ff] text-white px-8 py-4 rounded-2xl shadow-[0_0.75rem_1.875rem_rgba(96,194,255,0.3)] text-sm sm:text-base font-extralight transition-all duration-500 hover:shadow-[0_1.25rem_2.5rem_rgba(96,194,255,0.45)] hover:-translate-y-1 relative overflow-hidden group active:scale-95"
            >
              <span className="relative z-10">Записаться на консультацию</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full rounded-[40%] group-hover:translate-y-0 transition-transform duration-700 scale-150"></div>
            </BookingButton>
          </div>

          {/* Правая часть - Ключевые принципы в нестандартной сетке */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 text-[#60c2ff]/5 pointer-events-none">
              <Icon icon="solar:atom-linear" className="text-[12rem] sm:text-[16rem]" style={{ strokeWidth: 0.5 }} />
            </div>

            <h3 className="text-xl sm:text-2xl font-light text-slate-900 mb-8 relative z-10">
              Ключевые принципы
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 stagger-container">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-md rounded-2xl p-5 border-t border-l border-white/90 border-b border-r border-white/40 shadow-[0_1rem_2rem_-0.5rem_rgba(0,0,0,0.03)] cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-[0_1.5rem_3rem_-1rem_rgba(96,194,255,0.15)] hover:-translate-y-1 hover:border-[#60c2ff]/30 stagger-item opacity-0"
                >
                  {/* Subtle radial glow on hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#60c2ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#eaf3f8] to-white flex items-center justify-center text-[#60c2ff] mb-4 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[#60c2ff]/20">
                      <Icon icon={principle.icon} className="text-2xl" style={{ strokeWidth: 1.5 }} />
                    </div>
                    <h4 className="text-base sm:text-lg font-medium text-slate-900 mb-2">{principle.title}</h4>
                    <p className="text-sm text-slate-600 font-light leading-relaxed">{principle.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  const technologies = [
    {
      title: "Удаление пигментации и тату",
      brand: "PicoCare (Wontech)",
      desc: "Мы одними из первых внедрили пикосекундный лазер в Казани. Это «золотой стандарт» в лечении веснушек и пигментных пятен без ожогов и боли.",
      tags: ["Без ожогов", "Без боли", "Золотой стандарт"],
      icon: "solar:magic-stick-3-linear",
    },
    {
      title: "Ультразвуковая подтяжка",
      brand: "Индивидуальный СМАС-лифтинг",
      desc: "В арсенале клиники две разные технологии ультразвуковой подтяжки. Это позволяет подобрать методику под морфотип лица, плотность тканей и ваш бюджет.",
      tags: ["2 технологии", "Под любой бюджет", "Индивидуально"],
      icon: "solar:layers-linear",
    },
    {
      title: "Аппаратный лифтинг",
      brand: "Ulthera & Bison",
      desc: "Эффективная коррекция дряблости, носогубных складок и второго подбородка без хирургического вмешательства за 1 сеанс.",
      tags: ["1 сеанс", "Без операции", "Долгий эффект"],
      icon: "solar:bolt-linear",
    },
    {
      title: "Термолифтинг",
      brand: "Oligio (7D-омоложение)",
      desc: "Быстрая подтяжка овала лица без периода восстановления. Идеально для тех, кто ценит время.",
      tags: ["Без восстановления", "Быстро", "Овал лица"],
      icon: "solar:clock-circle-linear",
    },
  ];

  return (
    <section className="w-full">
      <div className="text-center mb-12 reveal-up opacity-0">
        <div className="inline-flex items-center gap-2 bg-[#eaf3f8] text-[#60c2ff] px-4 py-2 rounded-full mb-6 border border-white">
          <Icon icon="solar:cpu-linear" className="text-lg" style={{ strokeWidth: 1.5 }} />
          <span className="text-xs sm:text-sm font-light uppercase tracking-widest">Технологии</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-[1.1] mb-6">
          Современные технологии
          <br />
          <span className="text-[#60c2ff]">омоложения</span> и коррекции
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-light max-w-2xl mx-auto">
          Мы прошли большой путь, чтобы собрать в Казани парк оборудования мирового уровня. Каждый аппарат выбран для решения конкретных эстетических задач.
        </p>
      </div>

      {/* Нестандартная сетка - шахматная (Bento) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`group relative bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-3xl border-t border-l border-white/90 border-b border-r border-white/40 shadow-[0_1.5rem_4rem_-1rem_rgba(0,0,0,0.05)] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 cursor-pointer overflow-hidden transition-all duration-[0.6s] ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_2.5rem_6rem_-1.5rem_rgba(96,194,255,0.25)] hover:border-[#60c2ff]/30 hover:-translate-y-2 reveal-up opacity-0 ${
              index % 2 === 1 ? "md:mt-12" : ""
            }`}
          >
            {/* Bento Grid Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
            
            {/* Hover Glow Behind */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#60c2ff]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

            <div className="relative z-10 flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#eaf3f8] to-white shadow-sm flex items-center justify-center text-[#60c2ff] transition-all duration-[0.6s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0.5rem_1.5rem_rgba(96,194,255,0.3)]">
                <Icon icon={tech.icon} className="text-3xl" style={{ strokeWidth: 1.5 }} />
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Технология</span>
                <p className="text-sm font-medium text-slate-700">{tech.brand}</p>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-normal text-slate-900 mb-4">{tech.title}</h3>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-6">{tech.desc}</p>

            <div className="flex flex-wrap gap-2">
              {tech.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-[#eaf3f8] text-[#60c2ff] text-xs font-medium rounded-full border border-white/60 inline-flex items-center gap-1.5"
                >
                  <Icon icon="solar:check-circle-bold" className="text-sm" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AdvantagesSection() {
  const advantages = [
    { num: "01", title: "Эксклюзивное оборудование", desc: "Которого нет в других клиниках города. Парк из 6 лазерных систем премиум-класса." },
    { num: "02", title: "8+ лет средний стаж врачей", desc: "Постоянные участники международных конгрессов по анти-эйдж медицине." },
    { num: "03", title: "Премиальный сервис", desc: "Атмосфера, в которой каждому пациенту комфортно и спокойно." },
    { num: "04", title: "Персональные программы", desc: "Протокол составляется на основе вашего анамнеза, целей и бюджета." },
    { num: "05", title: "Быстрый результат", desc: "Большинство проблем с кожей лица решаем максимум за 3 визита." },
    { num: "06", title: "Прозрачность", desc: "Вы всегда знаете, какой препарат вводится и как работает аппарат." },
  ];

  return (
    <section className="w-full">
      <div className="bg-gradient-to-br from-slate-900 via-[#0a0f1c] to-[#020617] border border-slate-800 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-16 text-white overflow-hidden relative shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.5)]">
        {/* Декоративные элементы: Deep Space Glowing Cosmos */}
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-[#3ba3e0]/15 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
        {/* Subtle grid noise overlay for premium dark mode */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
            <div className="reveal-up opacity-0">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
                <Icon icon="solar:crown-linear" className="text-lg text-[#60c2ff]" style={{ strokeWidth: 1.5 }} />
                <span className="text-xs sm:text-sm font-light uppercase tracking-widest text-white/80">Преимущества</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1]">
                Почему пациенты
                <br />
                <span className="text-[#60c2ff]">выбирают СкинМед</span>
              </h2>
            </div>
            <p className="text-white/80 font-light max-w-md reveal-up opacity-0 leading-relaxed">
              СМАС-лифтинг в СкинМед — это сочетание передового оборудования, экспертности врачей и индивидуального подхода.
            </p>
          </div>

          {/* Нестандартная сетка преимуществ с лазерными бордерами */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-container">
            {advantages.map((adv, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden p-[1px] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-[0.6s] ease-[cubic-bezier(0.23,1,0.32,1)] stagger-item opacity-0 cursor-pointer shadow-lg hover:shadow-[0_1rem_3rem_-0.5rem_rgba(96,194,255,0.15)]"
              >
                {/* Default static border */}
                <div className="absolute inset-0 bg-white/5 group-hover:opacity-0 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                
                {/* Spinning laser border layer */}
                <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#60c2ff_360deg)] w-[200%] h-[200%] animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Card content mask */}
                <div className="relative z-10 h-full bg-[#050811]/90 backdrop-blur-xl rounded-2xl p-6 flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
                  <div className="relative z-20 flex items-start justify-between mb-4">
                    <span className="text-4xl font-light text-[#60c2ff]/30 group-hover:text-[#60c2ff]/60 transition-colors duration-500">{adv.num}</span>
                    <div className="w-8 h-8 rounded-full bg-[#60c2ff]/10 flex items-center justify-center text-[#60c2ff] opacity-0 group-hover:opacity-100 group-hover:bg-[#60c2ff]/20 transition-all duration-500 transform group-hover:rotate-12">
                      <Icon icon="solar:arrow-right-up-linear" className="text-sm" />
                    </div>
                  </div>
                  <h3 className="relative z-20 text-lg font-medium text-white/90 mb-2">{adv.title}</h3>
                  <p className="relative z-20 text-sm text-white/60 font-light leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Дополнительные фишки */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 reveal-up opacity-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#60c2ff]/20 flex items-center justify-center text-[#60c2ff]">
                <Icon icon="solar:home-smile-linear" className="text-2xl" />
              </div>
              <div>
                <p className="text-base font-medium">Современный интерьер</p>
                <p className="text-sm text-white/60 font-light mt-1">Продуманное пространство</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#60c2ff]/20 flex items-center justify-center text-[#60c2ff]">
                <Icon icon="solar:bolt-circle-linear" className="text-2xl" />
              </div>
              <div>
                <p className="text-base font-medium">РФ-лифтинг</p>
                <p className="text-sm text-white/60 font-light mt-1">Vivace — в 2 раза быстрее</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#60c2ff]/20 flex items-center justify-center text-[#60c2ff]">
                <Icon icon="solar:document-text-linear" className="text-2xl" />
              </div>
              <div>
                <p className="text-base font-medium">50+ услуг</p>
                <p className="text-sm text-white/60 font-light mt-1">В прайсе клиники</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center reveal-up opacity-0">
            <BookingButton 
              className="bg-[#60c2ff] text-white px-10 py-4 rounded-2xl shadow-[0_0.75rem_1.875rem_rgba(96,194,255,0.3)] text-base font-extralight transition-all duration-500 hover:shadow-[0_1.25rem_2.5rem_rgba(96,194,255,0.45)] hover:-translate-y-1 active:scale-95"
            >
              Записаться
            </BookingButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const doctors = [
    { name: "Глубокая О.Ю.", role: "Главный врач, косметолог", exp: "15 лет", image: "https://static.tildacdn.com/tild3135-6136-4039-b265-353466623863/photo.jpg" },
    { name: "Дощанова А.Р.", role: "Врач-дерматовенеролог", exp: "12 лет", image: "https://static.tildacdn.com/tild3134-6133-4638-b463-626334343761/--3.jpg" },
    { name: "Мусина Д.М.", role: "Врач-косметолог", exp: "8 лет", image: "https://static.tildacdn.com/tild3531-3565-4365-a430-333762333134/-.jpg" },
    { name: "Валеева Л.Р.", role: "Врач-дерматолог", exp: "10 лет", image: "https://static.tildacdn.com/tild6433-3563-4639-b431-353834383066/-.jpg" }
  ];

  return (
    <section className="w-full">
      <div className="bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_1.875rem_5rem_-1.25rem_rgba(0,0,0,0.05)] rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-16 overflow-hidden">
        <div className="text-center mb-12 reveal-up opacity-0">
          <div className="inline-flex items-center gap-2 bg-[#eaf3f8] text-[#60c2ff] px-4 py-2 rounded-full mb-6 border border-white">
            <Icon icon="solar:users-group-rounded-linear" className="text-lg" style={{ strokeWidth: 1.5 }} />
            <span className="text-xs sm:text-sm font-light uppercase tracking-widest">Наши врачи</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-[1.1] mb-6">
            Команда экспертов
            <br />
            <span className="text-[#60c2ff]">СкинМед</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            Наши врачи — постоянные участники международных конгрессов по анти-эйдж медицине. Каждый специалист владеет в совершенстве всеми представленными в клинике методиками.
          </p>
        </div>

        {/* Сетка врачей (Luxury Editorial Format) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
          {doctors.map((doctor, index) => (
            <a
              key={index}
              href="/doctors"
              className="group relative bg-white/60 backdrop-blur-3xl rounded-[2rem] p-3 border border-white/80 shadow-[0_1.5rem_3.5rem_-1rem_rgba(0,0,0,0.04)] cursor-pointer hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-700 hover:-translate-y-2 stagger-item opacity-0 flex flex-col h-full"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-[1.5rem] relative mb-5">
                {/* Animated Sweep Shine on hover */}
                <div className="absolute top-0 -left-[150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-[1.2s] ease-in-out z-30 pointer-events-none"></div>

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/60 shadow-sm flex items-center gap-1.5 z-20">
                   <Icon icon="solar:clock-circle-bold" className="text-[#60c2ff] text-sm" />
                   <span className="text-[10px] font-medium text-slate-800 uppercase tracking-wider">{doctor.exp} стаж</span>
                </div>
              </div>
              
              <div className="px-3 pb-3 flex flex-col flex-1">
                <h3 className="text-xl font-medium text-slate-900 leading-[1.15] tracking-tight group-hover:text-[#60c2ff] transition-colors duration-500 mb-2">
                  <span className="font-medium">{doctor.name.split(" ")[0]}</span>
                  {doctor.name.split(" ").length > 1 && (
                    <span className="font-light text-slate-600 block mt-0.5">{doctor.name.split(" ").slice(1).join(" ")}</span>
                  )}
                </h3>
                <p className="text-[13px] text-slate-500 font-light leading-relaxed line-clamp-2 mb-4">{doctor.role}</p>
                
                <div className="mt-auto flex items-center gap-2 text-[#60c2ff] text-xs font-semibold uppercase tracking-widest group-hover:gap-3 transition-all duration-500">
                  <span>Анкета врача</span>
                  <Icon icon="solar:arrow-right-linear" className="text-base" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center reveal-up opacity-0">
          <a href="/doctors" className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md text-slate-800 px-8 py-4 rounded-2xl border border-white/60 text-sm sm:text-base font-extralight transition-all hover:bg-white hover:text-[#60c2ff] hover:shadow-md active:scale-95 group">
            <span>Смотреть всех врачей</span>
            <Icon icon="solar:arrow-right-linear" className="text-lg transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative z-10 reveal-up opacity-0">
      <div className="relative overflow-hidden rounded-[3rem] bg-[#050B14] p-10 md:p-16 lg:p-24 border border-white/10 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)]">
        {/* Dark Decorative Elements */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#60c2ff]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">
              Готовы начать путь
              <br />
              <span className="font-serif italic text-slate-400">к совершенству?</span>
            </h2>
            <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">
              Запишитесь на бесплатную консультацию и получите персональный план омоложения от наших экспертов в течение 15 минут.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <div className="relative inline-flex group">
                <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                <BookingButton 
                  className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3"
                >
                  Оставить заявку
                  <Icon icon="solar:arrow-right-linear" className="text-xl" />
                </BookingButton>
              </div>

              <a
                href="tel:+78432022020"
                className="group flex items-center gap-4 text-white hover:text-[#60c2ff] transition-colors focus:outline-none"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#60c2ff] transition-colors">
                  <Icon icon="solar:phone-linear" className="text-xl" />
                </div>
                <span className="text-lg font-light tracking-wide">+7 (843) 202-20-20</span>
              </a>
            </div>
          </div>
          
          {/* Visual badge */}
          <div className="hidden lg:flex w-64 h-64 rounded-full border border-white/10 relative items-center justify-center">
            <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div>
            <div className="text-center">
              <Icon icon="solar:star-fall-bold" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" />
              <span className="block text-xs uppercase tracking-[0.2em] text-white/50">SkinMed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
