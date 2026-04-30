'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import EditorialList from '@/components/EditorialList';

const SERVICES = [
  {
    slug: 'smas-lifting-ulthera',
    title: 'SMAS-лифтинг Ulthera',
    desc: 'Эталонный аппарат для микросфокусированного ультразвукового лифтинга лица и шеи. Эффект до 2 лет.',
    price: 'от 30.000 ₽',
    icon: 'solar:bolt-linear',
    image: '/images/hardware/heroes/ulthera-hero.png',
    tags: ['Опущение тканей', 'Нависание век', 'Второй подбородок'],
  },
  {
    slug: 'smas-lifting-bison',
    title: 'SMAS-лифтинг Bizon',
    desc: 'Глубокая подтяжка овала, брылей, компактизация лица. Эффект до 1,5–2 лет.',
    price: 'от 24.990 ₽',
    icon: 'solar:shield-check-linear',
    image: '/images/hardware/heroes/bison-hero.png',
    tags: ['Потеря чёткости овала', 'Дряблая кожа', 'Большие щеки'],
  },
  {
    slug: 'rf-lifting-vivache',
    title: 'RF-лифтинг Vivace',
    desc: 'Радиочастотный лифтинг и стимуляция выработки здорового коллагена. Микроигольчатый RF нового поколения.',
    price: 'от 12.750 ₽',
    icon: 'solar:magic-stick-3-linear',
    image: '/images/hardware/heroes/vivace-hero.png',
    tags: ['Снижение упругости', 'Рубцы постакне', 'Морщины'],
  },
  {
    slug: 'oligio',
    title: 'Oligio — 7D-омоложение',
    desc: 'Мощный монополярный RF-лифтинг для плотности кожи. Подходит для возрастной кожи с признаками провисания.',
    price: 'от 15.300 ₽',
    icon: 'solar:star-linear',
    image: '/images/hardware/heroes/oligio-hero.png',
    tags: ['Поплывший овал', 'Птоз тканей', 'Снижение тонуса'],
  },
  {
    slug: 'ultrazvukovaya-chistka-litsa',
    title: 'Ультразвуковая чистка',
    desc: 'Деликатное очищение кожи ультразвуком — безболезненная процедура без периода восстановления.',
    price: 'от 1.800 ₽',
    icon: 'solar:waterdrop-linear',
    image: '/images/hardware/heroes/ultrasonic-hero.png',
    tags: ['Расширенные поры', 'Чёрные точки', 'Тусклая кожа'],
  },
  {
    slug: 'fotoomolozhenie',
    title: 'Фотоомоложение IPL',
    desc: 'Удаление сосудистой сетки, покраснений, пигментации и улучшение цвета лица с помощью IPL-технологии.',
    price: 'от 15.900 ₽',
    icon: 'solar:sun-2-linear',
    image: '/images/hardware/heroes/ipl-hero.png',
    tags: ['Усталый вид', 'Тусклый цвет лица', 'Фотостарение'],
  },
];

const ADVANTAGES = [
  {
    title: 'Результат без инъекций',
    desc: 'SMAS-лифтинг, RF, IPL, ультразвук — подтяжка, сияние и чёткий овал лица без уколов и операций.',
    icon: 'solar:hand-stars-linear',
  },
  {
    title: 'Медицинский подход',
    desc: 'Процедуры назначаются специалистом после диагностики. Без шаблонов, только персональные протоколы.',
    icon: 'solar:stethoscope-linear',
  },
  {
    title: 'Сертифицированное оборудование',
    desc: 'Работаем на оригинальных аппаратах (Ulthera, PicoCare, Vivace, Oligio), одобренных FDA и Минздравом РФ.',
    icon: 'solar:diploma-linear',
  },
  {
    title: 'Комфорт без реабилитации',
    desc: 'Большинство процедур не требуют восстановления. Через 48 часов Вы снова сияете.',
    icon: 'solar:heart-linear',
  },
];

const FAQ = [
  {
    q: 'Кому подходит аппаратная косметология?',
    a: 'Большинство процедур подходят для женщин и мужчин от 25 до 60 лет. Но перед любым воздействием мы проводим очную консультацию и диагностику кожи — чтобы точно определить показания, исключить противопоказания и подобрать оптимальную методику.',
  },
  {
    q: 'Это больно?',
    a: 'Процедуры, которые мы используем (SMAS, RF, IPL, лазер), проводятся с минимальным дискомфортом. Для чувствительной кожи мы применяем местную анестезию. Пациенты описывают ощущения как «тепло», «покалывание» или «легкое натяжение» — всё переносится комфортно.',
  },
  {
    q: 'Сколько процедур нужно?',
    a: 'Зависит от методики и состояния кожи. SMAS-лифтинг даёт эффект уже после 1 процедуры, который усиливается до 3 месяцев. IPL и RF дают накопительный результат за 3–5 сеансов. Мы всегда составляем индивидуальный курс, ориентируясь на Ваш запрос и потенциал кожи.',
  },
  {
    q: 'Нужна ли реабилитация?',
    a: 'Большинство процедур не требуют реабилитации. После ультразвука, RF или IPL Вы можете вернуться к привычной жизни в тот же день. После лазерных процедур возможно лёгкое покраснение и шелушение в течение 2−3 дней.',
  },
  {
    q: 'Как подбирается процедура?',
    a: 'Мы не работаем «по шаблону». Перед процедурой проводится подробная консультация, фотодиагностика и анализ кожи. На основе показаний мы подбираем методику (или комбинируем несколько) — чтобы получить наилучший эффект в Вашем конкретном случае.',
  },
];

const DOCTORS = [
  { name: 'Доктор Мухаметзянова', role: 'Врач-косметолог, ботулинотерапевт, лазеролог', photo: '/images/doctors/muhametzanova.jpg' },
  { name: 'Доктор Качурина', role: 'Главный врач, косметолог, дерматолог, лазеролог', photo: '/images/doctors/kachyurina.jpg' },
  { name: 'Доктор Емелина', role: 'Врач-косметолог, дерматолог, ботулинотерапевт', photo: '/images/doctors/emelina.jpg' },
  { name: 'Доктор Глубокая', role: 'Врач-косметолог, дерматолог, трихолог', photo: '/images/doctors/glubokaya.jpg' },
  { name: 'Доктор Шитов', role: 'Врач-онколог, лазеролог', photo: '/images/doctors/shitov.jpg' },
  { name: 'Доктор Воробьева', role: 'Врач-онколог, терапевт, лазеролог', photo: '/images/doctors/vorobyova.jpg' },
  { name: 'Доктор Никифорова', role: 'Врач-косметолог, дерматолог, лазеролог', photo: '/images/doctors/nikiforova.jpg' },
  { name: 'Доктор Сафьянова', role: 'Врач-невролог, кандидат медицинских наук', photo: '/images/doctors/safyanova.jpg' },
];

export default function HardwareCosmetologyClient() {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const initObserver = () => {
      if (window.innerWidth > 768) {
        if (observer) { observer.disconnect(); observer = null; }
        document.querySelectorAll('.mobile-glow-active').forEach(el => el.classList.remove('mobile-glow-active'));
        return;
      }
      if (!observer) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('mobile-glow-active');
            else entry.target.classList.remove('mobile-glow-active');
          });
        }, { rootMargin: "-40% 0px -40% 0px", threshold: 0 });
        setTimeout(() => {
          document.querySelectorAll('.scroll-glow-item').forEach(el => observer?.observe(el));
        }, 500);
      }
    };
    initObserver();
    window.addEventListener('resize', initObserver);
    return () => { window.removeEventListener('resize', initObserver); if (observer) observer.disconnect(); };
  }, []);

  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen relative font-sans text-slate-800 flex flex-col">
      <AnimationsProvider />

      {/* Clean Premium Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fdfdfd]"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />

        <main className="w-full mt-12 sm:mt-16">

          {/* Breadcrumbs */}
          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <a href="/services" className="hover:text-[#60c2ff] transition-colors duration-300">Услуги</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">Аппаратная косметология</span>
            </div>
          </section>

          {/* Asymmetric Hero Секция */}
          <section className="mb-32 lg:mb-48 pt-10 min-h-[70vh] flex flex-col justify-center">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center stagger-container">
              {/* Left Column: Text */}
              <div className="text-left">
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#0ea5e9] mb-6 stagger-item opacity-0">
                  — Направление клиники
                </span>
                
                <h1 className="text-[clamp(2.75rem,13vw,3.5rem)] sm:text-6xl lg:text-[6.5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-8 stagger-item opacity-0 relative z-10">
                  Аппаратная
                  <br />
                  <span className="font-serif italic text-slate-400">косметология</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-slate-500 font-light max-w-2xl leading-relaxed mb-12 stagger-item opacity-0">
                  Минус брыли, морщины и тусклый цвет лица. Живой результат до 1,5 лет, эффект после 1 визита. Бесплатная консультация с подбором аппаратной процедуры под Вашу кожу.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6 stagger-item opacity-0">
                  <button
                    onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
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
                  <Image 
                    src="/images/hardware/heroes/hardware-main-hero.png" 
                    alt="Аппаратная косметология" 
                    fill
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
                { value: "12", suffix: "", label: "Оригинальных аппаратов премиум-класса" },
                { value: "100", suffix: "%", label: "Гарантия подлинности и безопасности" },
                { value: "24", suffix: "ч", label: "Быстрая реабилитация после процедур" },
                { value: "10", suffix: "К", label: "Проведенных аппаратных протоколов" },
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
          <section id="services" className="mb-20 lg:mb-32">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-[#0ea5e9] mb-4">
                <span className="w-8 h-px bg-[#0ea5e9]" />
                Услуги
                <span className="w-8 h-px bg-[#0ea5e9]" />
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 tracking-tight leading-[1.1] mb-4">
                Аппаратная <span className="text-[#0ea5e9]">косметология</span>
              </h2>
              <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
                Выберите процедуру для подробной информации о методике, результате и стоимости
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container max-w-6xl mx-auto">
              {SERVICES.map((svc, index) => (
                <a
                  key={index}
                  href={`/services/apparatnaya-kosmetologiya/${svc.slug}`}
                  className="group relative flex flex-col outline-none stagger-item opacity-0 transition-all duration-700 hover:-translate-y-2 no-underline"
                >
                  <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden bg-slate-50 mb-6">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/5 transition-opacity duration-700 group-hover:opacity-0" />

                    <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2 z-20">
                      {svc.tags.map((tag, ti) => (
                        <span key={ti} className="text-[10px] px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-slate-800 border border-white/20 font-medium uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="absolute bottom-6 right-6 z-20 flex h-12 w-12 -translate-x-2 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                      <Icon icon="solar:arrow-right-up-linear" className="text-xl text-slate-900" />
                    </div>
                  </div>

                  <div className="flex flex-col px-2">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Icon icon={svc.icon} className="text-2xl text-[#0ea5e9]" />
                        <h3 className="text-xl lg:text-2xl font-normal tracking-tight text-slate-900 transition-colors group-hover:text-[#0ea5e9]">
                          {svc.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-[#0ea5e9] mb-2">{svc.price}</span>
                    <p className="line-clamp-3 text-sm lg:text-base font-light leading-relaxed text-slate-500">
                      {svc.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Advantages */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                — Ваше преимущество
              </span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                Почему выбирают <br /> <span className="font-serif italic text-slate-400">СкинМед</span>
              </h2>
            </div>

            <div className="flex flex-col stagger-container">
              <EditorialList items={ADVANTAGES} />
            </div>
          </section>

          {/* About Section */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto reveal-up opacity-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                  — О направлении
                </span>
                <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.1] mb-8">
                  Для тех, кто хочет <br /> выглядеть <span className="font-serif italic text-slate-400">лучше</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">
                    В <span className="font-medium text-[#60c2ff]">SkinMed</span> мы фокусируемся на аппаратной неинвазивной косметологии — современных методах омоложения, которые активируют внутренние ресурсы кожи без боли и длительной реабилитации.
                  </p>
                  <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">
                    Выбирайте альтернативу «уколам красоты» и сохраните свою индивидуальность, а не шаблонную молодость. Мы не маскируем возраст — мы запускаем естественные процессы обновления кожи.
                  </p>
                  <p className="text-base sm:text-[17px] text-slate-600 font-light leading-relaxed">
                    Каждая процедура проходит под контролем сертифицированных специалистов и с использованием оригинального оборудования экспертного уровня: <span className="font-medium text-[#60c2ff]">Ulthera</span>, <span className="font-medium text-[#60c2ff]">PicoCare</span>, <span className="font-medium text-[#60c2ff]">Vivace</span>, <span className="font-medium text-[#60c2ff]">Oligio</span>.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[2rem] overflow-hidden shadow-lg">
                  <img src="/images/hardware/hardware-main/hardware-main_17.webp" alt="Процедура" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-lg mt-8">
                  <img src="/images/hardware/hardware-main/hardware-main_18.webp" alt="Процедура" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-lg">
                  <img src="/images/hardware/hardware-main/hardware-main_19.webp" alt="Клиника" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-lg mt-8">
                  <img src="/images/hardware/hardware-main/hardware-main_1.jpg" alt="Клиника" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </section>

          {/* Doctors */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                — Команда
              </span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Наши <span className="font-serif italic text-slate-400">эксперты</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                по красоте и здоровью кожи
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-container">
              {DOCTORS.map((doc, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] overflow-hidden shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 stagger-item opacity-0 scroll-glow-item"
                >
                  <div className="h-72 overflow-hidden">
                    <img src={doc.photo} alt={doc.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-slate-900 mb-1 group-hover:text-[#60c2ff] transition-colors duration-300">{doc.name}</h3>
                    <p className="text-base text-slate-600 font-light">{doc.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto w-full relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                — FAQ
              </span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Частые <span className="font-serif italic text-slate-400">вопросы</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 stagger-container">
              {FAQ.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 stagger-item opacity-0"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex items-center justify-between w-full p-6 md:p-8 text-left"
                  >
                    <h3 className="text-lg md:text-xl font-medium text-slate-900 pr-4">{faq.q}</h3>
                    <div className={`w-10 h-10 rounded-full bg-[#60c2ff]/10 flex items-center justify-center shrink-0 transition-transform duration-500 ${openFaq === index ? 'rotate-45 bg-[#60c2ff]' : ''}`}>
                      <Icon icon="solar:add-linear" className={`text-xl ${openFaq === index ? 'text-white' : 'text-[#60c2ff]'}`} />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-96 pb-6 md:pb-8' : 'max-h-0'}`}>
                    <p className="text-[17px] text-slate-600 font-light leading-relaxed px-6 md:px-8">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="relative z-10 reveal-up opacity-0">
            <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-slate-900 p-10 md:p-16 lg:p-24">
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-[2.5rem] sm:text-5xl lg:text-[4.5rem] font-light text-white tracking-[-0.02em] leading-[1.1] mb-6">
                    Получите <br />
                    <span className="font-serif italic text-slate-300">прогноз</span> результата
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-10 max-w-lg mx-auto lg:mx-0">
                    Бесплатная консультация с подбором аппаратной процедуры под Вашу кожу. Наш врач свяжется с Вами и ответит на все вопросы.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group w-full sm:w-auto">
                      <div className="absolute inset-0 bg-white/40 rounded-full blur-[20px] opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>
                      <button
                        onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                        className="relative z-10 px-10 py-5 bg-white text-slate-900 rounded-full font-medium shadow-[0_0_2rem_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 hover:bg-slate-50 focus:outline-none flex justify-center items-center gap-3 w-full sm:w-auto"
                      >
                        Бесплатная консультация
                        <Icon icon="solar:arrow-right-linear" className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex w-64 h-64 rounded-full border border-white/5 relative items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-white/10 animate-[spin-slow_15s_linear_infinite]"></div>
                  <div className="absolute inset-6 rounded-full border border-white/5 border-dashed animate-[spin-slow_20s_linear_infinite_reverse]"></div>
                  <div className="text-center mt-2">
                    <Icon icon="solar:magic-stick-3-bold-duotone" className="text-3xl text-white/80 mx-auto mb-3" />
                    <span className="block text-xs uppercase tracking-[0.3em] text-white/50 leading-tight">SkinMed<br/>Premium</span>
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
