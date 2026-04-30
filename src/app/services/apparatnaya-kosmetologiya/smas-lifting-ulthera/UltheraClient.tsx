'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

const INDICATIONS = [
  { title: 'Морщины', desc: 'Видимые складки из-за снижения эластичности и потери упругости', icon: 'solar:eye-linear' },
  { title: 'Носогубные складки', desc: 'Заметные линии от крыльев носа до уголков губ', icon: 'solar:pallete-2-linear' },
  { title: 'Брыли', desc: 'Кожа в нижней части лица и на щеках свободно свисает', icon: 'solar:hand-stars-linear' },
  { title: 'Поплывший овал', desc: 'Лицо потеряло естественную форму и имеет нечёткие линии', icon: 'solar:magic-stick-3-linear' },
  { title: 'Нависшие веки', desc: 'Взгляд стал грустным, а глаза печальными', icon: 'solar:eye-linear' },
  { title: 'Второй подбородок', desc: 'Кожа в зоне подбородка потеряла упругость', icon: 'solar:heart-linear' },
  { title: 'Отёчность лица', desc: 'Выраженные малярные мешки, отёк лица', icon: 'solar:waterdrop-linear' },
  { title: 'Дряблость шеи', desc: 'Заломы и складки на шее, дряблость в зоне декольте', icon: 'solar:star-linear' },
];

const ADVANTAGES = [
  { title: 'Оригинальный аппарат', desc: 'Работаем на сертифицированном оборудовании Ulthera System с разрешением Росздравнадзора. Гарантируем отсутствие осложнений — ожогов и шрамов.' },
  { title: 'Диагностика DeepSee', desc: 'Принимаем решения на фактах. Непрерывно работающий диагностический ультразвук позволяет контролировать глубину воздействия на каждом сантиметре кожи.' },
  { title: 'Индивидуальный протокол', desc: 'Не работаем шаблонно. SMAS-слой на симметричных участках лица лежит на разных уровнях — используем разные датчики для каждой зоны.' },
  { title: 'Контроль температуры', desc: 'Автоматический контроль точечного нагрева до 60-65°C. Оптимальная температура, при которой происходит стимуляция выработки нового коллагена без фиброза.' },
];

const STEPS = [
  { title: 'Консультация', desc: 'Проводим визуальный осмотр и ультразвуковую диагностику, определяем глубину расположения СМАС, устанавливаем отсутствие противопоказаний. Длится 15-20 минут.' },
  { title: 'Процедура', desc: 'Бережно очищаем область воздействия, делаем разметку и наносим гель. Локально воздействуем на глубокие ткани, минуя поверхностные слои эпидермиса. Занимает до 60 минут.' },
  { title: 'Восстановление', desc: 'Возможны лёгкие покраснения, которые проходят через 4−6 часов. Улучшения видны уже в клинике, эффект нарастает в течение 3−6 месяцев.' },
];

const RESULTS = [
  'Уменьшается отёчность и восстанавливается тонус кожи',
  'Овал лица становится более чётким',
  'Приподнимаются брови и уменьшается нависание век',
  'Уменьшаются брыли, носогубные складки',
  'Поднимаются уголки рта',
  'Сглаживаются морщины лица и шеи',
  'Уплотняется кожа в зоне второго подбородка',
  'Уменьшается дряблость в области шеи и декольте',
];

const PRICES = [
   { name: 'Ulthera нижняя треть лица', price: '255 ₽' },
   { name: 'Ulthera лицо полностью', price: '12 750 ₽' },
   { name: 'Ulthera лицо и шея', price: '35 700 ₽' },
   { name: 'Ulthera зона век', price: '51 000 ₽' },
   { name: 'Ulthera подбородок', price: '67 830 ₽' },
   { name: 'Ulthera шея', price: '76 500 ₽' },
   { name: 'Ulthera декольте', price: '102 000 ₽' },
   { name: 'Ulthera живот', price: '108 120 ₽' },
   { name: 'Ulthera колени', price: '128 520 ₽' },
   { name: 'Ulthera локальная зона', price: '153 000 ₽' },
   { name: 'Консультация косметолога', price: '204 000 ₽' },];

const CONTRAINDICATIONS = [
  'Беременность',
  'Период кормления грудью',
  'Заболевания кожи в активной стадии',
  'Сердечная недостаточность',
  'Болезнь почек тяжёлой степени',
  'Эпилепсия',
];

const FAQ = [
  { q: 'Чем Ulthera отличается от других аппаратов SMAS?', a: 'Ulthera — единственный аппарат с технологией визуализации DeepSee, которая позволяет врачу видеть слои кожи в реальном времени и точно направлять ультразвук именно в SMAS-слой. Другие аппараты работают «вслепую».' },
  { q: 'Это больно?', a: 'Процедура проходит комфортно. Пациенты ощущают тепло и лёгкое покалывание. При необходимости мы используем местную анестезию для максимального комфорта.' },
  { q: 'Сколько длится эффект?', a: 'Результат Ulthera-терапии сохраняется до 2 лет. Эффект нарастает в течение 3-6 месяцев после процедуры, достигая максимума.' },
  { q: 'Нужна ли реабилитация?', a: 'Нет. Возможны лёгкие покраснения, которые проходят за 4-6 часов. Вы можете вернуться к обычной жизни сразу после процедуры.' },
  { q: 'Сколько процедур нужно?', a: 'Обычно достаточно 1 процедуры для выраженного результата. При необходимости повторный сеанс проводится через 1-2 года.' },
];

const DOCTORS = [
   { name: 'Специалист SkinMed', role: 'Врач-косметолог, ботулинотерапевт, лазеролог', photo: '/images/doctors/muhametzanova.jpg' },
   { name: 'Специалист SkinMed', role: 'Главный врач, косметолог, дерматолог, лазеролог', photo: '/images/doctors/kachyurina.jpg' },
   { name: 'Специалист SkinMed', role: 'Врач-косметолог, дерматолог, ботулинотерапевт', photo: '/images/doctors/emelina.jpg' },
   { name: 'Специалист SkinMed', role: 'Врач-косметолог, дерматолог, трихолог', photo: '/images/doctors/glubokaya.jpg' },
   { name: 'Специалист SkinMed', role: 'Врач-онколог, лазеролог', photo: '/images/doctors/shitov.jpg' },
   { name: 'Специалист SkinMed', role: 'Врач-онколог, терапевт, лазеролог', photo: '/images/doctors/vorobyova.jpg' },
   { name: 'Специалист SkinMed', role: 'Врач-косметолог, дерматолог, лазеролог', photo: '/images/doctors/nikiforova.jpg' },
   { name: 'Специалист SkinMed', role: 'Врач-невролог, к.м.н.', photo: '/images/doctors/safyanova.jpg' },
];

export default function UltheraClient() {
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
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/90 via-[#f0f5fa]/80 to-[#e4eaf0]/90"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] bg-gradient-to-br from-[#60c2ff]/30 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "25s" }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] bg-gradient-to-tl from-[#80d0ff]/20 via-[#cddce9]/40 to-transparent blur-[5rem] opacity-40 mix-blend-normal animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}></div>
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-[100%] bg-gradient-to-bl from-[#b8e0ff]/30 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "30s", animationDirection: "reverse" }}></div>
        <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
      </div>

      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        <main className="w-full mt-12 sm:mt-16">

          {/* Breadcrumbs */}
          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <a href="/services/apparatnaya-kosmetologiya" className="hover:text-[#60c2ff] transition-colors duration-300">Аппаратная косметология</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">SMAS-лифтинг Ulthera</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img src="/images/hardware/heroes/ulthera-hero.png" alt="Ulthera терапия" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent z-10"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  Эффект до 2 лет после 1 процедуры
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  SMAS-лифтинг <br />
                  <span className="font-serif italic text-[#60c2ff]/80">Ulthera</span>
                </h1>
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  Процедура, которая работает на качество кожи 24 часа в сутки. Сохраняет упругость и эластичность кожи, замедляет появление дряблости — минус 10 лет. Без синяков, без отёков, без реабилитации.
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]">
                      Записаться на консультацию
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white font-light">
                    <Icon icon="solar:shield-check-linear" className="text-2xl text-[#60c2ff]" />
                    <span>Без повреждения кожи</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Indications */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Показания</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Это процедура для <span className="font-serif italic text-slate-400">Вас</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">если Вас беспокоят следующие эстетические изменения</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-container">
              {INDICATIONS.map((item, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden cursor-pointer stagger-item opacity-0 scroll-glow-item">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                    <Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300">{item.title}</h3>
                  <p className="text-base text-slate-600 font-light mt-2 relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0">
            <div className="mb-16 text-center">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Эффект</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Результат <span className="font-serif italic text-slate-400">Ulthera</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto items-center">
              <div className="flex flex-col gap-4">
                {RESULTS.map((text, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-sm">
                    <Icon icon="solar:check-circle-bold" className="text-2xl text-[#60c2ff] shrink-0" />
                    <p className="text-slate-700 font-light text-lg">{text}</p>
                  </div>
                ))}
              </div>
              <div className="relative flex flex-col md:flex-row gap-6">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)] group h-full">
                  <img src="/images/hardware/smas-lifting-ulthera/smas-lifting-ulthera_6.webp" alt="До и после Ulthera" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                  <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium text-slate-800">До / После</div>
                </div>
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.15)] group h-full mt-4 md:mt-16">
                  <img src="/images/hardware/smas-lifting-ulthera/smas-lifting-ulthera_7.webp" alt="До и после Ulthera" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                  <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium text-slate-800">До / После</div>
                </div>
              </div>
            </div>
          </section>

          {/* Advantages */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Технологии</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                Почему приходят <br /> <span className="font-serif italic text-slate-400">к нам</span>
              </h2>
            </div>
            <div className="flex flex-col stagger-container">
              <EditorialList items={ADVANTAGES} />
            </div>
          </section>

          {/* Steps */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full">
            <div className="mb-12 border-b border-slate-200/50 pb-6 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Процесс</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                Этапы <span className="font-serif italic text-slate-400">процедуры</span>
              </h2>
            </div>
            <div className="stagger-container flex flex-col">
              <EditorialList items={STEPS} />
            </div>
          </section>

          {/* Video */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0 text-center">
            <div className="mb-12">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Видео</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.1]">
                Комфортно и без <span className="font-serif italic text-slate-400">реабилитации</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.1)] border border-white/80 bg-white p-2">
              <video controls className="w-full aspect-video object-cover rounded-[2.5rem]" poster="/images/hardware/smas-lifting-ulthera/smas-lifting-ulthera_1.jpg">
                <source src="https://smasclinicakzn.online/ultherapy.mp4?dl=0" type="video/mp4" />
              </video>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full">
            <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)] reveal-up opacity-0">
              <div className="mb-12 border-b border-slate-100 pb-6">
                <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">
                  Стоимость <span className="font-serif italic text-slate-400">Ulthera</span>
                </h2>
                <p className="text-base text-[#60c2ff] font-medium mt-2">Консультация в день процедуры — в подарок</p>
              </div>
              <div className="flex flex-col divide-y divide-slate-100">
                {PRICES.map((price, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{price.name}</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{price.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contraindications */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-4xl mx-auto reveal-up opacity-0">
            <div className="mb-12 text-center">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Ограничения</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.1]">
                Противо<span className="font-serif italic text-slate-400">показания</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CONTRAINDICATIONS.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-sm">
                  <Icon icon="solar:danger-triangle-bold-duotone" className="text-xl text-amber-500 shrink-0" />
                  <span className="text-base text-slate-700 font-light">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Doctors */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Команда</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Наши <span className="font-serif italic text-slate-400">эксперты</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-container">
              {DOCTORS.map((doc, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] overflow-hidden shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 stagger-item opacity-0 scroll-glow-item">
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
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— FAQ</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Частые <span className="font-serif italic text-slate-400">вопросы</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4 stagger-container">
              {FAQ.map((faq, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 stagger-item opacity-0">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex items-center justify-between w-full p-6 md:p-8 text-left">
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
            <div className="relative overflow-hidden rounded-[3rem] bg-[#050B14] p-10 md:p-16 lg:p-24 border border-white/10 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)]">
              <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#fbbf24]/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">
                    Запишитесь на <br /><span className="font-serif italic text-slate-400">Ulthera</span>-терапию
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">
                    Бесплатная консультация с ультразвуковой диагностикой кожи. Подберём индивидуальный протокол и ответим на все вопросы.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group">
                      <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                      <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3">
                        Бесплатная консультация
                        <Icon icon="solar:arrow-right-linear" className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-64 h-64 rounded-full border border-[#60c2ff]/20 relative items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div>
                  <div className="text-center">
                    <Icon icon="solar:magic-stick-3-bold-duotone" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" />
                    <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/50 leading-tight">SkinMed<br/>Premium Care</span>
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
