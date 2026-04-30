'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';

export default function TattooRemovalClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videoReviews = [
    { src: 'https://www.dl.dropboxusercontent.com/s/h71hfma5asre9yr/IMG_8321.MOV?dl=0', thumb: 'https://static.tildacdn.com/tild3763-6464-4532-b437-396133393261/photo_2021-04-28_09-.jpg', title: 'Отзыв пациента' },
    { src: 'https://www.dl.dropboxusercontent.com/s/zzrt1ekny0f3l9e/IMG_7289.MOV?dl=0', thumb: 'https://optim.tildacdn.com/tild6430-6134-4238-b333-646236633763/-/cover/357x478/center/center/-/format/webp/_.png.webp', title: 'Результат удаления' },
    { src: 'https://www.dl.dropboxusercontent.com/s/6ew7b3u6c6dmo3j/IMG_7639.MOV?dl=0', thumb: 'https://optim.tildacdn.com/tild3663-6361-4266-a335-316431366136/-/cover/357x478/center/center/-/format/webp/_05-05-2021_163840.png.webp', title: 'Процесс лечения' },
    { src: 'https://www.dl.dropboxusercontent.com/s/tmfk6uv5oj4fu2q/IMG_7062.MOV?dl=0', thumb: 'https://static.tildacdn.com/tild3861-6364-4338-a164-323638343764/_25-05-2021_115335.png', title: 'История пациента' },
  ];

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

  const advantages = [
    { title: "Без шрамов и рубцов", desc: <>«Холодный» лазер <span className="font-medium text-[#60c2ff]">PicoCare</span> не перегревает ткани, полностью исключая риск образования рубцов и ожогов.</>, icon: "solar:shield-check-linear" },
    { title: "Любые цвета", desc: "Успешно удаляем черные, серые, красные, коричневые, зеленые и синие пигменты.", icon: "solar:pallete-2-linear" },
    { title: "Быстро и комфортно", desc: "Удаление небольшого тату длится от 1 минуты. Система охлаждения Zimmer Z Cryo снижает дискомфорт.", icon: "solar:stopwatch-linear" },
    { title: "Минимум сеансов", desc: <>Ультракороткий импульс <span className="font-medium text-[#60c2ff]">PicoCare</span> в 450 пикосекунд разбивает пигмент в пыль, сокращая курс до минимума.</>, icon: "solar:bolt-linear" },
    { title: "Без реабилитации", desc: "Уникальная технология HEXA MLA защищает верхние слои кожи — вы можете сразу вернуться к своим делам.", icon: "solar:magic-stick-3-linear" },
  ];

  const faq = [
    { q: "Останутся ли шрамы после удаления?", a: <>Мы даем 100% гарантию, что шрамов и рубцов не останется, если их не было до этого. Наш «холодный» лазер <span className="font-medium text-[#60c2ff]">PicoCare</span> оказывает только фотоакустическое (ударное) воздействие, не нагревая кожу.</> },
    { q: "Сколько процедур потребуется?", a: "Поверхностный пигмент татуажа может уйти за 1-2 процедуры. Стойкий и глубоко введенный пигмент тату потребует от 3 до 8 сеансов. Точный прогноз доктор даст на консультации с помощью диагностической программы." },
    { q: "Это больно?", a: "Определенный дискомфорт присутствует (около 6-8 баллов из 10). Однако время воздействия максимально короткое, а для снижения неприятных ощущений мы используем криосистему Zimmer и местную анестезию." },
    { q: "Удаляете ли вы все цвета?", a: "Да! Мы удаляем практически все цвета радуги, включая самые «коварные» оттенки, за исключением белого и телесного пигментов (их не видит ни один лазер в мире)." },
    { q: "Как ухаживать за кожей после процедуры?", a: "Со второго дня можно принимать душ. На 5-7 дней стоит исключить бани, сауны и спортзал, а также избегать трения одеждой. Небольшое шелушение проходит самостоятельно за 3-7 дней." },
  ];

  const contraindications = [
    { title: "Онкологические заболевания", icon: "solar:shield-cross-linear" },
    { title: "Иммуносупрессивные состояния", icon: "solar:virus-linear" },
    { title: "Острые инфекции и воспаления", icon: "solar:thermometer-linear" },
    { title: "Беременность и лактация", icon: "solar:heart-pulse-linear" },
  ];

  return (
    <div className="min-h-screen relative font-sans text-slate-800 flex flex-col">
      <AnimationsProvider />
      
      {/* Aurora Background */}
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
              <a href="/services/lazernaya-kosmetologiya" className="hover:text-[#60c2ff] transition-colors duration-300">Лазерная косметология</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">Удаление тату</span>
            </div>
          </section>

          {/* Hero Section */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/tattoo_removal_hero.png" 
                  alt="Удаление татуировок"
                  className="w-full h-full object-cover object-right md:object-center opacity-[0.4] md:opacity-60 mix-blend-overlay scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>
              
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  -30% до конца месяца
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  Удаление <br />
                  <span className="font-serif italic text-[#60c2ff]/80">тату</span> и татуажа
                </h1>
                
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  Избавьтесь от нежелательных татуировок любого цвета и размера с гарантией результата. Используем пикосекундный «холодный» лазер <span className="font-medium text-[#60c2ff]">PicoCare</span> — без боли, ожогов и рубцов.
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button 
                      onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                      className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]"
                    >
                      Записаться со скидкой
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white font-light">
                    <Icon icon="solar:verified-check-bold-duotone" className="text-2xl text-[#60c2ff]" />
                    <span>Чистая кожа без следов</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Advantages Grid */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
                — Технологии
              </span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                100% гарантия <span className="font-serif italic text-slate-400">результата</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
                Мы используем неодимовый пикосекундный лазер <span className="font-medium text-[#60c2ff]">PicoCare</span> экспертного класса, одобренный FDA. Это самый результативный и безопасный аппарат в мире.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 stagger-container">
              {advantages.map((item, index) => (
                <div key={index}
                  className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden cursor-pointer stagger-item opacity-0 scroll-glow-item group-[.mobile-glow-active]:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] group-[.mobile-glow-active]:border-[#60c2ff]/30 group-[.mobile-glow-active]:-translate-y-2"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                    <Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300">{item.title}</h3>
                  <p className="text-[15px] sm:text-base text-slate-500 font-light mt-3 leading-relaxed relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Social Project Callout */}
          <section className="mb-32 lg:mb-48 max-w-5xl mx-auto reveal-up opacity-0">
            <div className="relative rounded-[3rem] overflow-hidden bg-white/70 backdrop-blur-xl border border-white p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.05)]">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-500 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                  <Icon icon="solar:heart-angle-bold-duotone" />
                  Социальный проект
                </div>
                <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 leading-tight">
                  Бесплатное удаление <span className="font-serif italic text-slate-400">тату на лице</span>
                </h3>
                <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-8">
                  Мы гордимся нашим социальным проектом: помогаем жителям Казани безопасно исправить ошибки молодости. Если у вас есть нежеланная татуировка на лице, мы предоставим услугу её удаления абсолютно бесплатно. Мы заботимся о здоровье вашей кожи!
                </p>
                <button 
                  onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                  className="font-medium text-[#60c2ff] hover:text-[#4facfe] flex items-center gap-2 group transition-colors"
                >
                  Оставить заявку на бесплатное удаление
                  <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="w-full md:w-1/3 aspect-square rounded-[2rem] overflow-hidden shrink-0">
                <img src="/images/tattoo_social_project.png" alt="Социальный проект" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

          {/* Cases / Results Grid */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0 max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Результаты работы</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Чистая кожа <span className="font-serif italic text-slate-400">уже скоро</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: "https://static.tildacdn.com/tild6333-3833-4430-a235-323835356333/_.jpg", label: "После 1 процедуры" },
                { img: "https://static.tildacdn.com/tild6337-3339-4266-a132-306438613361/photo.jpg", label: "После 3-х процедур" },
                { img: "https://static.tildacdn.com/tild3131-3830-4638-a661-373766623461/photo.jpg", label: "После 2-х процедур" }
              ].map((c, i) => (
                <div key={i} className="relative rounded-[2rem] overflow-hidden shadow-md group aspect-[4/3]">
                  <img src={c.img} alt={c.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="flex items-center gap-2">
                       <Icon icon="solar:check-circle-bold" className="text-[#60c2ff]" />
                       {c.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Video Reviews Section */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto reveal-up opacity-0">
            <div className="text-center mb-16">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Видеоотзывы</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                Наши пациенты <span className="font-serif italic text-slate-400">делятся опытом</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {videoReviews.map((v, i) => (
                <div 
                  key={i}
                  onClick={() => setActiveVideo(v.src)}
                  className="group relative rounded-[2rem] overflow-hidden cursor-pointer aspect-[3/4] bg-slate-900 shadow-lg hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.25)] transition-all duration-500 hover:-translate-y-2"
                >
                  <img src={v.thumb} alt={v.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-[#60c2ff] group-hover:border-[#60c2ff]/50 group-hover:scale-110 transition-all duration-500 shadow-xl">
                      <Icon icon="solar:play-bold" className="text-2xl text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-white font-medium text-base">{v.title}</p>
                    <p className="text-white/60 text-sm mt-1">Смотреть видео</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Video Modal */}
          {activeVideo && (
            <div 
              className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
              onClick={() => setActiveVideo(null)}
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
              >
                <Icon icon="solar:close-circle-linear" className="text-2xl" />
              </button>
              <div className="relative w-full max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <video 
                  src={activeVideo} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain rounded-2xl"
                  style={{ maxHeight: '85vh' }}
                />
              </div>
            </div>
          )}

          {/* FAQ Section */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto w-full reveal-up opacity-0">
            <div className="text-center mb-16">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Вопросы и ответы</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                Часто задаваемые <span className="font-serif italic text-slate-400">вопросы</span>
              </h2>
            </div>
            
            <div className="flex flex-col gap-4">
              {faq.map((item, idx) => (
                <div 
                  key={idx}
                  className={`bg-white/60 backdrop-blur-sm border transition-all duration-300 rounded-[2rem] overflow-hidden cursor-pointer
                    ${activeFaq === idx ? 'border-[#60c2ff]/50 shadow-[0_1rem_3rem_-1rem_rgba(96,194,255,0.2)]' : 'border-white/80 shadow-sm hover:border-slate-300'}`}
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <div className="px-8 py-6 flex items-center justify-between gap-6">
                    <h4 className="text-lg md:text-xl font-medium text-slate-800">{item.q}</h4>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${activeFaq === idx ? 'bg-[#60c2ff] text-white' : 'bg-slate-100 text-slate-400'}`}>
                      <Icon icon={activeFaq === idx ? "solar:minus-linear" : "solar:add-linear"} className="text-xl" />
                    </div>
                  </div>
                  <div 
                    className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === idx ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                  >
                    <p className="text-base text-slate-600 font-light leading-relaxed border-l-2 border-[#60c2ff]/30 pl-4">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contraindications */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-5xl mx-auto reveal-up opacity-0">
            <div className="text-center mb-12">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Ограничения</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                Противо<span className="font-serif italic text-slate-400">показания</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contraindications.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-4 bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/80 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                    <Icon icon={item.icon} className="text-2xl text-red-400" />
                  </div>
                  <p className="text-slate-800 font-medium text-[15px] lg:text-base leading-tight">{item.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative z-10 reveal-up opacity-0">
            <div className="relative overflow-hidden rounded-[3rem] bg-[#050B14] p-10 md:p-16 lg:p-24 border border-white/10 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)]">
              <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#fbbf24]/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">
                    Избавьтесь <br />
                    <span className="font-serif italic text-slate-400">от тату навсегда</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    Запишитесь на консультацию сегодня и узнайте точное количество процедур для полного удаления вашего тату с помощью передового лазера <span className="font-medium text-white">PicoCare</span>.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group w-full sm:w-auto">
                      <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                      <button 
                        onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                        className="relative z-10 w-full sm:w-auto px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center justify-center gap-3"
                      >
                        Оставить заявку
                        <Icon icon="solar:arrow-right-linear" className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="hidden lg:flex w-64 h-64 rounded-full border border-[#60c2ff]/20 relative items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div>
                  <div className="text-center">
                    <Icon icon="solar:magic-stick-3-bold-duotone" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" />
                    <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/50 leading-tight">SkinMed<br/>Premium Laser</span>
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
