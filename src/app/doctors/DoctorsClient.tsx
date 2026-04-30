"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import { Icon } from "@iconify/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimationsProvider from "@/components/AnimationsProvider";

// Интерфейсы
interface Case {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

interface Doctor {
  id: string;
  name: string;
  nameDative: string;
  role?: string;
  specialties: string[];
  experience: number;
  status?: string;
  education: string[];
  courses: string[];
  about: string;
  cases: Case[];
  photo: string;
}

// Специальности для фильтра
const SPECIALTIES = [
  { id: "all", label: "Все специалисты", icon: "solar:users-group-rounded-linear" },
  { id: "косметолог", label: "Косметологи", icon: "solar:face-scan-circle-linear" },
  { id: "дерматолог", label: "Дерматологи", icon: "solar:shield-health-linear" },
  { id: "трихолог", label: "Трихологи", icon: "solar:scissors-linear" },
  { id: "невролог", label: "Неврологи", icon: "solar:brain-linear" },
  { id: "онколог", label: "Онкологи", icon: "solar:medical-kit-linear" },
];

// Данные врачей
const DOCTORS: Doctor[] = [
  {
    id: "davletshina",
    name: "Давлетшина Резеда Ильсуровна",
    nameDative: "Давлетшиной Р. И.",
    role: "Косметолог, Дерматолог",
    specialties: ["косметолог", "дерматолог"],
    experience: 22,
    education: [
      "Казанский государственный медицинский университет (лечебное дело)",
      "Интернатура по неврологии",
      "Аспирантура по специальности 'Неврология'",
      "Кандидатская диссертация по клинической неврологии",
    ],
    courses: [
      "Современные методы диагностики головной боли — 2023",
      "Неврологические проявления системных заболеваний — 2022",
      "Электронейромиография в клинической практике — 2021",
    ],
    about: "За 22 года практики помогла более 15 000 пациентам справиться с хроническими головными болями, мигренью и неврологическими нарушениями. Верю, что точная диагностика — это основа успешного лечения. Индивидуальный подход к каждому пациенту и применение доказательных методов терапии позволяют достигать стойких результатов даже в сложных случаях.",
    cases: [
      {
        id: "case1",
        title: "Лечение хронической мигрени",
        description: "Пациентка 34 года, мигрени с аурой 2-3 раза в неделю",
        beforeImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
      },
    ],
    photo: "/images/doctors/davletshina.jpg",
  },
  {
    id: "vorobyova",
    name: "Воробьёва Лилия Николаевна",
    nameDative: "Воробьёвой Л. Н.",
    role: "Косметолог, Дерматолог, Трихолог",
    specialties: ["косметолог", "дерматолог", "трихолог"],
    experience: 19,
    education: [
      "Казанский государственный медицинский университет",
      "Специализация по дерматовенерологии",
      "Профессиональная переподготовка по косметологии",
    ],
    courses: [
      "Мастер-класс 'Сложные кейсы в инъекционной косметологии' — 2024",
      "Лазерные технологии в эстетической медицине — 2023",
      "Пилинги: от классики до инноваций — 2022",
      "Базовая ботулинотерапия и контурная пластика — 2020",
    ],
    about: "19 лет в эстетической медицине научили меня главному: красота — это гармония здоровья и внешности. Каждая процедура начинается с тщательного анализа состояния кожи и понимания индивидуальных особенностей пациента. Моя цель — не изменить вас до неузнаваемости, а подчеркнуть природную красоту и сохранить молодость на долгие годы.",
    cases: [
      {
        id: "case1",
        title: "Комплексное омоложение",
        description: "Пациентка 52 года, комплекс процедур за 6 месяцев",
        beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
      },
      {
        id: "case2",
        title: "Коррекция мимических морщин",
        description: "Ботулинотерапия зоны лба и межбровья",
        beforeImage: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&h=300&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=300&fit=crop",
      },
    ],
    photo: "/images/doctors/vorobyova.jpg",
  },
  {
    id: "glubokaya",
    name: "Глубокая Оксана Юрьевна",
    nameDative: "Глубокой О. Ю.",
    role: "В декретном отпуске",
    specialties: ["косметолог", "дерматолог"],
    experience: 16,
    status: "В декретном отпуске",
    education: [
      "Казанский государственный медицинский университет",
      "Ординатура по дерматовенерологии",
      "Специализация по эстетической медицине",
    ],
    courses: [
      "Нитевая методика в эстетической медицине — 2023",
      "PRP-терапия и плазмолифтинг — 2022",
      "Современные методы лечения акне — 2021",
    ],
    about: "16 лет практики в дерматологии и косметологии. Специализируюсь на решении сложных проблем кожи: постакне, рубцы, пигментация. Верю, что здоровая кожа — это основа уверенности в себе. Сейчас временно в декретном отпуске, но скоро вернусь к любимому делу.",
    cases: [
      {
        id: "case1",
        title: "Лечение постакне",
        description: "Пациент 28 лет, рубцы постакне 3-й степени",
        beforeImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&h=300&fit=crop",
      },
    ],
    photo: "/images/doctors/glubokaya.jpg",
  },
  {
    id: "safyanova",
    name: "Сафьянова Айгуль Рамиловна",
    nameDative: "Сафьяновой А. Р.",
    specialties: ["косметолог", "трихолог"],
    experience: 14,
    education: [
      "Казанский государственный медицинский университет",
      "Специализация по дерматовенерологии и косметологии",
    ],
    courses: [
      "Биоревитализация и мезотерапия — 2024",
      "Лазерная косметология (CO2, Erbium, IPL) — 2023",
      "Контурная пластика объемного моделирования — 2022",
    ],
    about: "14 лет помогаю пациентам сохранять молодость и здоровье кожи. Моя философия — естественная красота без перебора. Люблю сложные кейсы, когда нужно разработать индивидуальную программу омоложения. Каждый пациент для меня — это история успеха, которую мы пишем вместе.",
    cases: [
      {
        id: "case1",
        title: "Лазерное омоложение",
        description: "Фракционный лазер, курс из 3 процедур",
        beforeImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=300&fit=crop",
      },
    ],
    photo: "/images/doctors/safyanova.jpg",
  },
  {
    id: "kachurina",
    name: "Качурина Екатерина Левановна",
    nameDative: "Качуриной Е. Л.",
    role: "Главный врач, Дерматолог, Косметолог",
    specialties: ["косметолог", "дерматолог"],
    experience: 13,
    education: [
      "Казанский государственный медицинский университет",
      "Ординатура по дерматовенерологии",
      "MBA в управлении медицинскими организациями",
    ],
    courses: [
      "Управление медицинской организацией — 2024",
      "Антивозрастная медицина: гормональная терапия — 2023",
      "Сложные кейсы в эстетической дерматологии — 2022",
    ],
    about: "Как главный врач и руководитель клиники SkinMed, я несу ответственность за каждого пациента и каждого врача в нашей команде. 13 лет клинической практики научили меня: успех лечения — это 50% профессионализма врача и 50% качества сервиса. Моя миссия — создать место, где медицина и забота о пациенте становятся единым целым.",
    cases: [
      {
        id: "case1",
        title: "Комплексная реjuvenация",
        description: "Пациентка 45 лет, 3D-омоложение",
        beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=300&fit=crop",
      },
    ],
    photo: "/images/doctors/kachyurina.jpg",
  },
  {
    id: "bagautdinov",
    name: "Багаутдинов Адель Фахрутдинович",
    nameDative: "Багаутдинову А. Ф.",
    role: "Онколог, Терапевт",
    specialties: ["онколог"],
    experience: 12,
    education: [
      "Казанский государственный медицинский университет",
      "Специализация по дерматовенерологии",
      "Профессиональная переподготовка по косметологии",
    ],
    courses: [
      "Мужская косметология и трихология — 2024",
      "SMAS-лифтинг и аппаратные методики — 2023",
      "Инъекционная косметология: advanced level — 2022",
    ],
    about: "12 лет в эстетической медицине. Специализируюсь на мужской косметологии и трихологии. Знаю, как мужчины ценят быстрый результат без долгой реабилитации. Моя задача — чтобы вы выглядели свежо и уверенно, сохраняя мужественные черты лица.",
    cases: [
      {
        id: "case1",
        title: "Мужское омоложение",
        description: "Пациент 48 лет, сохранение мужественных черт",
        beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop",
      },
    ],
    photo: "/images/doctors/bagautdinov.jpg",
  },
  {
    id: "mukhametzyanova",
    name: "Мухаметзянова Алсу Ренатовна",
    nameDative: "Мухаметзяновой А. Р.",
    specialties: ["косметолог"],
    experience: 10,
    education: [
      "Казанский государственный медицинский университет",
      "Специализация по косметологии",
    ],
    courses: [
      "Нити PDO и их применение — 2024",
      "Коллагеностимуляторы: Juvelook, AestheFill — 2023",
      "Базовые и продвинутые техники мезотерапии — 2022",
    ],
    about: "10 лет практики в косметологии. Моя страсть — это работа с текстурой кожи и профилактика возрастных изменений. Люблю работать с молодыми пациентами, помогая им сохранить естественную красоту на долгие годы. Каждая процедура — это искусство, требующее точности и вкуса.",
    cases: [
      {
        id: "case1",
        title: "Профилактика старения",
        description: "Пациентка 35 лет, программа 'Beauty Forever'",
        beforeImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
      },
    ],
    photo: "/images/doctors/muhametzanova.jpg",
  },
  {
    id: "musina",
    name: "Мусина Динара Марсовна",
    nameDative: "Мусиной Д. М.",
    specialties: ["косметолог", "дерматолог", "трихолог"],
    experience: 8,
    education: [
      "Казанский государственный медицинский университет",
      "Специализация по дерматовенерологии",
      "Профессиональная переподготовка по трихологии",
    ],
    courses: [
      "Трихоскопия и диагностика волос — 2024",
      "Лечение андрогенной алопеции — 2023",
      "Плазмотерапия PRP в трихологии — 2022",
    ],
    about: "8 лет помогаю пациентам решать проблемы с кожей и волосами. Трихология — моя особенная страсть. Выпадение волос — это не просто косметическая проблема, часто это сигнал организма о внутренних нарушениях. Нахожу причины и комплексно решаю проблему.",
    cases: [
      {
        id: "case1",
        title: "Лечение диффузного выпадения",
        description: "Пациентка 29 лет, результат за 4 месяца",
        beforeImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1521590832169-7c5ec325562c?w=400&h=300&fit=crop",
      },
    ],
    photo: "/images/doctors/musina.jpg",
  },
  {
    id: "valeeva",
    name: "Валеева Лилия Рамилевна",
    nameDative: "Валеевой Л. Р.",
    specialties: ["косметолог", "дерматолог", "трихолог"],
    experience: 8,
    education: [
      "Казанский государственный медицинский университет",
      "Специализация по дерматовенерологии и косметологии",
      "Дополнительное образование по трихологии",
    ],
    courses: [
      "Мезотерапия кожи головы — 2024",
      "Контурная пластика губ и скул — 2023",
      "Лечение себорейного дерматита — 2022",
    ],
    about: "8 лет в медицине. Совмещаю дерматологию, косметологию и трихологию, что позволяет видеть полную картину состояния пациента. Кожа, волосы и ногти — это зеркало здоровья. Работаю с проблемами от акне до алопеции, всегда ищу корень проблемы, а не маскирую симптомы.",
    cases: [],
    photo: "/images/doctors/valeeva.jpg",
  },
  {
    id: "emelina",
    name: "Емелина Виктория Евгеньевна",
    nameDative: "Емелиной В. Е.",
    specialties: ["косметолог", "трихолог"],
    experience: 5,
    education: [
      "Казанский государственный медицинский университет",
      "Интернатура по дерматовенерологии",
      "Специализация по косметологии и трихологии",
    ],
    courses: [
      "Современные методы биоревитализации — 2024",
      "Диагностика и лечение заболеваний волос — 2023",
      "Базовая контурная пластика — 2022",
    ],
    about: "5 лет в профессии, но уже успела полюбить её всей душой. Современная косметология — это невероятные возможности для сохранения молодости. Слежу за всеми новинками и методиками, постоянно обучаюсь. Молодость и энтузиазм помогают мне находить общий язык с пациентами любого возраста.",
    cases: [],
    photo: "/images/doctors/emelina.jpg",
  },
  {
    id: "evdokimova",
    name: "Евдокимова Наиля Рустемовна",
    nameDative: "Евдокимовой Н. Р.",
    specialties: ["косметолог", "дерматолог", "трихолог"],
    experience: 5,
    education: [
      "Казанский государственный медицинский университет",
      "Специализация по дерматовенерологии",
      "Профессиональная переподготовка по косметологии и трихологии",
    ],
    courses: [
      "Комплексный уход за проблемной кожей — 2024",
      "Лазерная эпиляция и фотоомоложение — 2023",
      "Пилинги и чистки: безопасные протоколы — 2022",
    ],
    about: "5 лет практики в дерматологии и косметологии. Моя цель — сделать здоровую и красивую кожу доступной каждому. Работаю с акне, пигментацией, возрастными изменениями. Верю, что даже небольшие изменения могут дать огромный прирост уверенности в себе.",
    cases: [],
    photo: "/images/doctors/evdokimova.jpg",
  },
  {
    id: "shitov",
    name: "Шитов Денис Викторович",
    nameDative: "Шитову Д. В.",
    role: "Косметолог, Дерматолог",
    specialties: ["косметолог", "дерматолог"],
    experience: 4,
    education: [
      "Казанский государственный медицинский университет",
      "Интернатура по онкологии",
      "Специализация по терапии",
    ],
    courses: [
      "Дерматоскопия и ранняя диагностика меланомы — 2024",
      "Онкологические аспекты в дерматологии — 2023",
      "Удаление новообразований: методы и показания — 2022",
    ],
    about: "4 года специализируюсь на диагностике и удалении новообразований кожи. Безопасность пациента — мой приоритет номер один. Каждое образование перед удалением тщательно диагностирую дерматоскопом. При необходимости направляю на гистологическое исследование. Спокойствие пациента начинается с уверенности в правильности диагноза.",
    cases: [
      {
        id: "case1",
        title: "Удаление множественных невусов",
        description: "Пациент 35 лет, диагностика и удаление 12 образований",
        beforeImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop",
      },
    ],
    photo: "/images/doctors/shitov.jpg",
  },
  {
    id: "nikiforova",
    name: "Никифорова Екатерина Станиславовна",
    nameDative: "Никифоровой Е. С.",
    role: "Онколог, Дерматолог, Косметолог",
    specialties: ["онколог", "дерматолог", "косметолог"],
    experience: 3,
    education: [
      "Казанский государственный медицинский университет",
      "Ординатура по онкологии",
    ],
    courses: [
      "Современные аспекты онкодерматологии — 2024",
      "Молекулярная диагностика новообразований — 2023",
      "Минимально инвазивные методы в онкологии — 2022",
    ],
    about: "3 года в онкологии. Работаю с диагностикой кожных новообразований, консультирую по профилактике онкологических заболеваний кожи. Молодой специалист с современным взглядом на медицину. Постоянно изучаю новейшие методики диагностики и лечения.",
    cases: [],
    photo: "/images/doctors/nikiforova.jpg",
  },
];

// ─── Doctor Card: Premium Luxury Minimalist (Spotlight + Watermark + Inset Photo) ───
function DoctorCard({ doctor, isHead, index, onSelect, onBook, onCases }: {
  doctor: Doctor;
  isHead: boolean;
  index: number;
  onSelect: () => void;
  onBook: () => void;
  onCases: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [glowOpacity, setGlowOpacity] = useState(0);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  const watermarkIcon = doctor.specialties[0] === 'Косметолог' ? 'solar:stars-line-duotone'
    : doctor.specialties[0] === 'Дерматолог' ? 'solar:shield-check-bold-duotone'
    : doctor.specialties[0] === 'Трихолог' ? 'solar:leaf-bold-duotone'
    : doctor.specialties[0] === 'Невролог' ? 'solar:atom-bold-duotone'
    : 'solar:heart-pulse-bold-duotone';

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setGlowOpacity(1)}
      onMouseLeave={() => setGlowOpacity(0)}
      onClick={onSelect}
      style={{ animationDelay: `${index * 80}ms` }}
      className={`group relative bg-white/50 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-3 sm:p-4 overflow-hidden isolate transform-gpu transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_1.5rem_4rem_-0.5rem_rgba(0,0,0,0.08)] hover:border-[#60c2ff]/40 flex flex-col ${
        isHead ? "md:col-span-2 xl:col-span-2 sm:flex-row" : "xl:col-span-1"
      }`}
    >
      {/* ── Cursor spotlight ── */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] z-30 transition-opacity duration-300"
        style={{
          opacity: glowOpacity,
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(96,194,255,0.08), transparent 50%)`,
        }}
      />

      {/* === Встроенное Фото (Inset Photo) === */}
      <div className={`relative shrink-0 rounded-[2rem] overflow-hidden shadow-sm bg-slate-100 ${isHead ? "w-full sm:w-[50%] h-80 sm:h-auto" : "h-[20rem] sm:h-[22rem] lg:h-[24rem] mb-5"} w-full`}>
        <img
          src={doctor.photo}
          alt={doctor.name}
          className="w-full h-full object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-70"></div>

        {/* Бейджи */}
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
          <span className="px-3.5 py-1.5 bg-white/95 backdrop-blur-md text-slate-800 text-[10px] font-bold uppercase tracking-[0.15em] rounded-full shadow-md flex items-center gap-1.5 group-hover:-translate-y-0.5 transition-transform duration-500">
            <Icon icon="solar:star-bold" className="text-[#60c2ff] text-[13px]" />
            {doctor.experience} лет
          </span>
          {doctor.status && (
            <span className="px-3.5 py-1.5 bg-amber-50/95 backdrop-blur-md text-amber-700 text-[10px] font-bold uppercase tracking-[0.1em] rounded-full shadow-sm border border-amber-200/50 group-hover:-translate-y-0.5 transition-transform duration-500 delay-75">
              {doctor.status}
            </span>
          )}
        </div>
      </div>

      {/* === Текстовый блок === */}
      <div className={`relative flex flex-col flex-grow ${isHead ? "pl-5 sm:pl-7 justify-center py-4 sm:w-[50%]" : "px-2 sm:px-3 pb-2"} h-full`}>
        
        {/* Водяной знак сбоку или снизу */}
        <div className="absolute -bottom-4 right-0 text-[#60c2ff]/[0.05] group-hover:text-[#60c2ff]/[0.10] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
          <Icon icon={watermarkIcon} className="text-[8rem] sm:text-[10rem]" />
        </div>

        {/* Деликатная линия декора */}
        <div className="w-8 h-[2px] bg-slate-200 mb-4 group-hover:w-16 group-hover:bg-[#60c2ff] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full hidden sm:block"></div>

        {/* Специальности (овальные плашки) */}
        <div className="flex flex-wrap gap-2 mb-5 relative z-10">
          {doctor.specialties.map((spec, idx) => (
            <span key={idx} className="px-3 py-1.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-slate-500 bg-white/60 shadow-sm border border-slate-200/60 rounded-full group-hover:border-[#60c2ff]/40 group-hover:text-[#60c2ff] transition-colors duration-500">
              {spec}
            </span>
          ))}
        </div>

        {/* Имя (менее жирное, больше воздуха) */}
        <h3 className={`text-slate-900 leading-[1.15] mb-4 flex flex-col tracking-tight relative z-10 ${isHead ? "text-[2rem] sm:text-[2.5rem]" : "text-[1.5rem] sm:text-[1.7rem]"}`}>
          <span className="font-medium text-slate-800">{doctor.name.split(" ")[0]}</span>
          <span className="font-light text-slate-400 mt-1">{doctor.name.split(" ").slice(1).join(" ")}</span>
        </h3>

        {doctor.role && (
          <p className="text-[13px] text-slate-500 font-medium mb-4 relative z-10 hidden sm:block">{doctor.role}</p>
        )}

        {/* Описание */}
        <p className="text-slate-500 text-[13px] sm:text-[14px] font-light leading-relaxed line-clamp-2 mt-2 relative z-10 group-hover:text-slate-700 transition-colors duration-500">
          {doctor.about}
        </p>

        {/* === Action Island === */}
        <div className="flex gap-2 w-full mt-auto pt-5 relative z-20">
          {/* Main Booking Button */}
          <button
            onClick={(e) => { e.stopPropagation(); onBook(); }}
            className="flex-1 h-12 bg-gradient-to-r from-[#60c2ff] to-[#3ba3e0] text-white rounded-xl sm:rounded-2xl shadow-[0_4px_15px_rgba(96,194,255,0.3)] hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center font-medium text-[14px] overflow-hidden group/btn relative"
          >
            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]" />
            <span className="relative z-10">Записаться</span>
          </button>
          
          {/* Secondary Actions: Works & Certificates */}
          {doctor.cases.length > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); onCases(); }}
              title={`Работы (${doctor.cases.length})`}
              className="w-12 h-12 flex items-center justify-center rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-slate-400 hover:border-[#60c2ff]/40 hover:text-[#60c2ff] hover:bg-white shadow-sm transition-all active:scale-95 shrink-0 group/icon relative"
            >
              <Icon icon="solar:gallery-wide-linear" className="text-[20px] group-hover/icon:scale-110 transition-transform" />
            </button>
          )}

          
        </div>
      </div>
    </div>
  );
}

export default function DoctorsClient() {
  const [activeSpecialty, setActiveSpecialty] = useState("all");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [activeTab, setActiveTab] = useState<"education" | "about">("about");
  const [casesDoctor, setCasesDoctor] = useState<Doctor | null>(null);
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);

  // Фильтрация врачей
  const filteredDoctors = useMemo(() => {
    if (activeSpecialty === "all") return DOCTORS;
    return DOCTORS.filter((doc) =>
      doc.specialties.some((s) => s.toLowerCase().includes(activeSpecialty.toLowerCase()))
    );
  }, [activeSpecialty]);

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

      {/* Основной контент */}
      <div className="w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col gap-16 sm:gap-24 pb-24 pt-16 flex-grow">
        <Header />

        {/* Hero секция с SEO-текстом */}
        <section className="text-center reveal-up opacity-0">
          <div className="inline-flex items-center gap-2 bg-[#eaf3f8] text-[#60c2ff] px-4 py-2 rounded-full mb-6 border border-white">
            <Icon icon="solar:medical-kit-linear" className="text-lg" style={{ strokeWidth: 1.5 }} />
            <span className="text-xs sm:text-sm font-extralight uppercase tracking-widest">Команда экспертов</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-slate-900 tracking-tight leading-[1.1] mb-6">
            Врачи клиники
            <br />
            <span className="text-[#60c2ff]">SkinMed Казань</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-extralight max-w-3xl mx-auto leading-relaxed mb-4">
            Косметологи, дерматологи, трихологи, неврологи и онкологи — здесь с вами 
            <span className="text-[#60c2ff] font-light"> говорят</span>, а не просто делают процедуру.
          </p>
          <p className="text-base text-slate-500 font-extralight max-w-2xl mx-auto leading-relaxed">
            Результат без «эффекта неожиданности». Эксперты с высшим медицинским образованием 
            и опытом от 8 до 22 лет. Подход, основанный на доказательной медицине и уважении к пациенту.
          </p>
        </section>

        {/* Фильтры по специальностям */}
        <section className="flex justify-center sticky top-[72px] z-40 mb-10 w-full pointer-events-none px-3">
          <div className="flex items-center p-1.5 rounded-[2rem] bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.08)] pointer-events-auto gap-1 max-w-full overflow-x-auto no-scrollbar scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {SPECIALTIES.map((spec) => (
              <button
                key={spec.id}
                onClick={() => setActiveSpecialty(spec.id)}
                className={`relative flex items-center justify-center gap-1 sm:gap-1.5 rounded-full font-medium whitespace-nowrap transition-all duration-500 overflow-hidden shrink-0
                  px-3 py-2 sm:px-5 sm:py-3 text-[11px] sm:text-sm ${
                  activeSpecialty === spec.id
                    ? "text-white shadow-md"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/80"
                }`}
              >
                {activeSpecialty === spec.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#60c2ff] to-[#3ba3e0] z-0" />
                )}
                <Icon icon={spec.icon} className="text-sm sm:text-lg relative z-10 shrink-0" />
                <span className="relative z-10">{spec.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Сетка врачей */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 reveal-up opacity-0 relative z-10">
          {filteredDoctors.map((doctor, index) => {
            const isHead = doctor.role?.includes("Главный врач") || doctor.role?.includes("Руководитель");
            
            return (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                isHead={!!isHead}
                index={index}
                onSelect={() => { setSelectedDoctor(doctor); setActiveTab("about"); }}
                onBook={() => window.dispatchEvent(new Event('open-booking-modal'))}
                onCases={() => { setCasesDoctor(doctor); setActiveCaseIdx(0); }}
              />
            );
          })}
        </section>

        {/* CTA секция */}
        <section className="reveal-up opacity-0">
          <div className="bg-gradient-to-br from-[#60c2ff] to-[#3ba3e0] rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-8">
                <Icon icon="solar:chat-round-dots-bold" className="text-3xl text-white" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-tight leading-[1.1] mb-6">
                Не знаете, к какому
                <br />
                <span className="font-light">врачу обратиться?</span>
              </h2>
              
              <p className="text-sm sm:text-lg lg:text-xl text-white/90 font-extralight mb-10 max-w-xl mx-auto leading-relaxed">
                Оставьте заявку — наш администратор подберёт специалиста под ваш запрос 
                и назначит удобное время приёма
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <button 
                  onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                  className="bg-white text-[#60c2ff] px-10 py-5 sm:py-4 rounded-2xl shadow-[0_1rem_2rem_rgba(0,0,0,0.15)] text-sm sm:text-base font-medium sm:font-light transition-all duration-500 hover:shadow-[0_1.5rem_3rem_rgba(0,0,0,0.2)] hover:-translate-y-1 active:scale-95 group/btn w-full sm:w-auto uppercase tracking-wider sm:normal-case sm:tracking-normal relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#60c2ff]/10 to-transparent -translate-x-[150%] skew-x-[30deg] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                  <span className="flex items-center justify-center gap-2 relative z-10">
                    Получить консультацию
                    <Icon icon="solar:arrow-right-linear" className="text-xl transition-transform group-hover/btn:translate-x-1" />
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

      {/* ====== ПОПАП ПОДРОБНЕЕ (Slide-in Drawer) ====== */}
      {selectedDoctor && (
        <div
          className="fixed inset-0 z-50 flex justify-end animate-fade-in"
          onClick={() => setSelectedDoctor(null)}
        >
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />

          {/* Панель */}
          <div
            className="relative w-full sm:w-[500px] md:w-[700px] lg:w-[900px] max-w-full h-full bg-white shadow-[-2rem_0_6rem_rgba(0,0,0,0.15)] flex flex-col md:flex-row overflow-hidden translate-x-0 animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Закрыть */}
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-slate-400 hover:text-slate-900 bg-white hover:bg-slate-100 rounded-full transition-colors z-50 shadow-sm border border-slate-100"
            >
              <Icon icon="solar:close-circle-bold" className="text-3xl" />
            </button>

            {/* Левая колонка - Фото (на десктопе) */}
            <div className="relative w-full md:w-[45%] h-[35vh] md:h-full shrink-0 overflow-hidden bg-slate-100">
              <img src={selectedDoctor.photo} alt={selectedDoctor.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 md:from-transparent md:bg-gradient-to-r md:from-transparent md:to-white/90 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 md:hidden">
                <h2 className="text-3xl text-white font-light leading-tight drop-shadow-md">
                  <span className="font-semibold">{selectedDoctor.name.split(" ")[0]} </span>
                  <br/>
                  <span className="font-extralight">{selectedDoctor.name.split(" ").slice(1).join(" ")}</span>
                </h2>
              </div>
            </div>

            {/* Правая колонка - Контент */}
            <div className="relative w-full md:w-[55%] flex flex-col h-[65vh] md:h-full bg-white z-10 overflow-hidden">
              <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-8 md:p-10 lg:p-12">
                
                {/* Водяной знак с именем */}
                <div className="absolute top-10 right-10 text-[100px] font-black text-slate-50 opacity-50 z-0 pointer-events-none select-none tracking-tighter leading-none whitespace-nowrap hidden lg:block overflow-hidden">
                  {selectedDoctor.name.split(" ")[0]}
                </div>

                <div className="relative z-10">
                  {/* Заголовок (десктоп) */}
                  <div className="hidden md:block mb-8">
                    <h2 className="text-4xl lg:text-5xl text-slate-900 leading-[1.1] mb-4 tracking-tight">
                      <span className="font-bold">{selectedDoctor.name.split(" ")[0]} </span>
                      <br/>
                      <span className="font-light">{selectedDoctor.name.split(" ").slice(1).join(" ")}</span>
                    </h2>
                    {selectedDoctor.role && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f0f7f9] text-[#60c2ff] rounded-lg text-sm font-medium mb-3">
                        <Icon icon="solar:crown-star-bold" className="text-lg" />
                        {selectedDoctor.role}
                      </div>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                       <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold uppercase tracking-wider">Опыт: {selectedDoctor.experience} лет</span>
                    </div>
                  </div>

                  {/* Мобильная версия стажа */}
                  <div className="md:hidden flex items-center gap-2 mb-6 flex-wrap">
                     <span className="px-3 py-1 bg-[#f0f7f9] text-[#60c2ff] rounded-lg text-xs font-semibold uppercase tracking-wider">Опыт: {selectedDoctor.experience} лет</span>
                     {selectedDoctor.role && <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold uppercase tracking-wider">{selectedDoctor.role}</span>}
                  </div>

                  {/* Специальности */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedDoctor.specialties.map((spec, i) => (
                      <span key={i} className="px-4 py-2 bg-white text-slate-800 border border-slate-200 text-[11px] font-bold rounded-full uppercase tracking-widest shadow-sm">
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Табы */}
                  <div className="flex gap-2 p-1.5 bg-slate-50 border border-slate-100 rounded-2xl mb-8 relative">
                    {["about", "education"].map((tabId) => (
                      <button
                        key={tabId}
                        onClick={() => setActiveTab(tabId as typeof activeTab)}
                        className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 z-10 flex items-center justify-center gap-2 ${
                          activeTab === tabId ? "text-slate-900 bg-white shadow shadow-slate-200/50" : "text-slate-400 hover:text-slate-600"
                        }`}
                      >
                        <Icon icon={tabId === "about" ? "solar:user-circle-bold" : "solar:diploma-bold"} className="text-lg" />
                        {tabId === "about" ? "О враче" : "Образование"}
                      </button>
                    ))}
                  </div>

                  {/* Контент табов */}
                  <div className="min-h-[300px]">
                    {activeTab === "about" && (
                      <div className="animate-fade-in space-y-4">
                        <p className="text-slate-600 font-light leading-relaxed text-base md:text-lg">
                          {selectedDoctor.about}
                        </p>
                      </div>
                    )}

                    {activeTab === "education" && (
                      <div className="animate-fade-in space-y-8">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-[#eaf3f8] text-[#60c2ff] flex items-center justify-center shrink-0">
                              <Icon icon="solar:medal-ribbon-star-bold" className="text-lg" />
                            </span>
                            Основное образование
                          </h4>
                          <div className="space-y-4 pl-4 border-l-2 border-slate-100">
                            {selectedDoctor.education.map((edu, idx) => (
                              <div key={idx} className="relative">
                                <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-300 border-2 border-white" />
                                <span className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">{edu}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                              <Icon icon="solar:diploma-bold" className="text-lg" />
                            </span>
                            Курсы и квалификация
                          </h4>
                          <div className="space-y-4 pl-4 border-l-2 border-slate-100">
                            {selectedDoctor.courses.map((course, idx) => (
                              <div key={idx} className="relative">
                                <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-[#60c2ff] border-2 border-white" />
                                <span className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">{course}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Кнопка с фиксированным низом */}
              <div className="shrink-0 p-6 md:p-8 bg-white border-t border-slate-100 relative z-20">
                <button 
                  onClick={() => {
                    window.dispatchEvent(new Event('open-booking-modal'));
                    setSelectedDoctor(null);
                  }}
                  className="w-full flex items-center justify-center gap-2.5 bg-[#60c2ff] hover:bg-[#4db8ff] text-white px-6 py-4 rounded-2xl shadow-[0_8px_24px_rgba(96,194,255,0.3)] hover:shadow-[0_14px_36px_rgba(96,194,255,0.45)] hover:-translate-y-1 transition-all duration-500 font-medium text-lg active:scale-[0.97] group/btnCTA"
                >
                  <span>Записаться на прием</span>
                  <Icon icon="solar:arrow-right-up-linear" className="text-2xl group-hover/btnCTA:translate-x-0.5 group-hover/btnCTA:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ====== ПОПАП КЕЙСЫ (слайдер) ====== */}
      {casesDoctor && casesDoctor.cases.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setCasesDoctor(null)}
        >
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />

          <div
            className="relative w-full max-w-5xl bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_2rem_6rem_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row animate-scale-in max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Закрыть */}
            <button
              onClick={() => setCasesDoctor(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white/50 hover:bg-white backdrop-blur-md rounded-full transition-colors z-50 shadow-sm border border-slate-100/50"
            >
              <Icon icon="solar:close-circle-bold" className="text-3xl text-slate-800" />
            </button>

            {/* Левая часть - Информация */}
            <div className="w-full md:w-[35%] bg-slate-50 p-8 md:p-10 flex flex-col shrink-0">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white text-[#60c2ff] rounded-lg text-sm font-medium mb-6 shadow-sm border border-slate-100 w-max">
                <Icon icon="solar:gallery-wide-bold" className="text-lg" />
                Портфолио работ
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-light text-slate-900 mb-2 leading-tight">
                {casesDoctor.name.split(" ")[0]} {casesDoctor.name.split(" ")[1]?.[0]}.{casesDoctor.name.split(" ")[2]?.[0]}.
              </h3>
              
              <div className="w-12 h-1 bg-[#60c2ff] rounded-full mb-8 shrink-0"></div>

              <div className="mb-auto overflow-y-auto pr-2 custom-scrollbar">
                <h4 className="text-xl font-medium text-slate-900 mb-3">
                  {casesDoctor.cases[activeCaseIdx].title}
                </h4>
                <p className="text-slate-600 font-light leading-relaxed">
                  {casesDoctor.cases[activeCaseIdx].description}
                </p>
              </div>

              {/* Навигация (десктоп) */}
              {casesDoctor.cases.length > 1 && (
                <div className="mt-8 hidden md:block shrink-0">
                  <p className="text-sm text-slate-400 font-medium mb-3">
                    Кейс {activeCaseIdx + 1} из {casesDoctor.cases.length}
                  </p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setActiveCaseIdx((prev) => (prev === 0 ? casesDoctor.cases.length - 1 : prev - 1))}
                      className="p-3 rounded-xl bg-white hover:bg-[#60c2ff] hover:text-white text-slate-600 transition-all shadow-sm border border-slate-100 group"
                    >
                      <Icon icon="solar:arrow-left-linear" className="text-xl group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                      onClick={() => setActiveCaseIdx((prev) => (prev === casesDoctor.cases.length - 1 ? 0 : prev + 1))}
                      className="p-3 rounded-xl bg-white hover:bg-[#60c2ff] hover:text-white text-slate-600 transition-all shadow-sm border border-slate-100 group"
                    >
                      <Icon icon="solar:arrow-right-linear" className="text-xl group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Правая часть - Фото */}
            <div className="w-full md:w-[65%] p-4 sm:p-8 bg-slate-100 flex items-center relative overflow-y-auto custom-scrollbar">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative group rounded-2xl overflow-hidden shadow-md">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-slate-900/60 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-lg border border-white/20">
                    До процедуры
                  </div>
                  <img
                    src={casesDoctor.cases[activeCaseIdx].beforeImage}
                    alt="До"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="relative group rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#60c2ff]/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-lg border border-white/40 shadow-sm">
                    После
                  </div>
                  <img
                    src={casesDoctor.cases[activeCaseIdx].afterImage}
                    alt="После"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            
            {/* Навигация (мобилка) */}
            {casesDoctor.cases.length > 1 && (
              <div className="md:hidden p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center shrink-0">
                 <p className="text-sm text-slate-500 font-medium">
                    Кейс {activeCaseIdx + 1} из {casesDoctor.cases.length}
                 </p>
                 <div className="flex gap-2">
                    <button
                      onClick={() => setActiveCaseIdx((prev) => (prev === 0 ? casesDoctor.cases.length - 1 : prev - 1))}
                      className="p-2 rounded-lg bg-white shadow-sm border border-slate-200"
                    >
                      <Icon icon="solar:arrow-left-linear" className="text-lg" />
                    </button>
                    <button
                      onClick={() => setActiveCaseIdx((prev) => (prev === casesDoctor.cases.length - 1 ? 0 : prev + 1))}
                      className="p-2 rounded-lg bg-white shadow-sm border border-slate-200"
                    >
                      <Icon icon="solar:arrow-right-linear" className="text-lg" />
                    </button>
                 </div>
              </div>
            )}
          </div>
        </div>
      )}
        </div>
  );
}
