'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

export default function MoleRemovalClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

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

  const indications = [
    { title: "Родинки на лице", desc: "Бережное удаление в эстетически значимых зонах без рубцов и следов.", icon: "solar:eye-linear" },
    { title: "Висячие родинки", desc: "Образования, которые цепляются за одежду и постоянно травмируются.", icon: "solar:scissors-linear" },
    { title: "Невусы на теле", desc: "Спина, шея, грудь, живот — любая локализация. Мужчинам и женщинам.", icon: "solar:star-linear" },
    { title: "Деликатные зоны", desc: "Интимные и труднодоступные области — максимальная аккуратность и конфиденциальность.", icon: "solar:shield-check-linear" },
    { title: "Растущие образования", desc: "Срочное удаление при изменении размера, формы, цвета или появлении дискомфорта.", icon: "solar:danger-triangle-linear" },
    { title: "Множественные родинки", desc: "До 15 новообразований за один сеанс под одной анестезией.", icon: "solar:copy-linear" },
  ];

  const advantages = [
    { title: "Без боли", desc: "Процедура проходит под местной анестезией — вы не почувствуете ничего, кроме лёгкого прикосновения." },
    { title: "Без крови и швов", desc: "Лазер CO2 Bison мгновенно запаивает сосуды. Никакой крови, никаких наложенных швов." },
    { title: "Ювелирная точность", desc: "Лазер послойно испаряет только клетки новообразования, не затрагивая здоровую кожу вокруг." },
    { title: "Быстрое заживление", desc: "Ранка заживает за 7–10 дней. На лице и открытых зонах обычно не остаётся следов." },
    { title: "Врачебный контроль", desc: "Каждый случай осматривает врач-дерматолог и онколог. Гистология — при необходимости." },
  ];

  const steps = [
    { title: "Консультация", desc: "Обязательный осмотр дерматологом-онкологом. Дерматоскопия — исследование плюс новообразования под увеличением для точной диагностики." },
    { title: "Анестезия", desc: "Местное обезболивание — один укол достаточен для удаления до 15 образований. Комфорт гарантирован." },
    { title: "Удаление лазером", desc: "Процедура занимает 15–30 минут. Лазер CO2 Bison послойно испаряет ткани новообразования с максимальной точностью." },
    { title: "Рекомендации", desc: "Краткий осмотр, обработка антисептиком и персональные рекомендации по уходу за кожей." },
  ];

  const aftercare = [
    { text: "Не сдирайте корочку — она отпадёт сама за 7–14 дней", icon: "solar:hand-stars-linear" },
    { text: "Избегайте солнца 4–6 недель, используйте SPF 50+", icon: "solar:sun-2-linear" },
    { text: "Не мочите зону удаления первые сутки", icon: "solar:waterdrop-linear" },
    { text: "Исключите баню и бассейн на 7–10 дней", icon: "solar:temperature-linear" },
    { text: "Не наносите косметику до полного восстановления", icon: "solar:pallete-2-linear" },
    { text: "Обрабатывайте антисептиком по назначению врача", icon: "solar:medical-kit-linear" },
  ];

  const faq = [
    { q: "Удалять родинки — это больно?", a: "Нет. Процедура проходит под местной анестезией. Вы не почувствуете боли — максимум лёгкий дискомфорт в момент укола. Большинство пациентов удивляются: «Я зря боялся — всё прошло легко и быстро»." },
    { q: "Нужны ли предварительные анализы?", a: "Обычно — нет. Врач проводит осмотр и дерматоскопию прямо на приёме, и при необходимости направляет ткань на гистологию уже после удаления." },
    { q: "Сколько стоит удаление?", a: <>Цена зависит от количества, размера и расположения:<br />• Небольшие родинки и папилломы: <span className="font-medium text-[#60c2ff]">от 450 ₽</span><br />• Родинки среднего размера: <span className="font-medium text-[#60c2ff]">от 500 ₽</span><br />Точную стоимость врач рассчитает на консультации.</> },
    { q: "Когда лучше удалять?", a: "Не откладывайте, если родинка начала меняться, болеть или травмироваться. Оптимально — до активного загара, чтобы ускорить заживление." },
  ];

    const doctors = [
     { name: "Специалист SkinMed", role: "Главный врач, косметолог, дерматовенеролог", exp: "Опыт 15 лет", img: "/images/doctors/kachyurina.jpg" },
     { name: "Специалист SkinMed", role: "Врач-косметолог, дерматолог", exp: "Опыт 10 лет", img: "/images/doctors/muhametzanova.jpg" },
     { name: "Специалист SkinMed", role: "Врач-дерматолог, трихолог, косметолог", exp: "Опыт 12 лет", img: "/images/doctors/vorobyova.jpg" },
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
              <span className="text-slate-700 font-medium">Удаление родинок</span>
            </div>
          </section>

          {/* Hero Section */}
          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/mole-removal-hero.png"
                  alt="Удаление родинок лазером"
                  className="w-full h-full object-cover object-right md:object-center opacity-[0.35] md:opacity-60 mix-blend-overlay scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
              </div>
              
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  Консультация онколога — в подарок
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  Удаление <br />
                  <span className="font-serif italic text-[#60c2ff]/80">родинок</span> лазером
                </h1>
                
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  Безопасно, бескровно и безболезненно. Под контролем врача-дерматолога и онколога с применением лазера <span className="font-medium text-[#60c2ff]">CO2 Bison</span> последнего поколения.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  {["Без боли и крови", "Без швов", "Без госпитализации"].map((tag, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white/80 text-sm font-light">
                      <Icon icon="solar:check-circle-bold" className="text-[#60c2ff]" />
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-6 items-center">
                  <div className="relative inline-flex group/btn">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                    <button 
                      onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                      className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]"
                    >
                      Записаться на удаление
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pain Points / Empathy */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto reveal-up opacity-0">
            <div className="text-center mb-10">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— О проблеме</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.1]">
                Хотите удалить, <span className="font-serif italic text-slate-400">но откладываете?</span>
              </h2>
            </div>
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-8 md:p-12 shadow-sm">
              <p className="text-lg md:text-xl text-slate-700 font-light leading-relaxed mb-6">
                Родинки и невусы — мы к ним привыкаем, пока они не начинают мешать. Знакомо?
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Задеваются при стрижке у парикмахера",
                  "Цепляются за одежду и бельё",
                  "Воспаляются после сауны или загара",
                  "Начинают чесаться, болеть или расти",
                  "Мешают психологически на лице и шее",
                  "«А вдруг больно? А вдруг нельзя?»"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3">
                    <Icon icon="solar:check-read-linear" className="text-[#60c2ff] text-xl mt-0.5 shrink-0" />
                    <span className="text-base text-slate-600 font-light">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-base md:text-lg text-slate-500 font-light mt-6 border-l-2 border-[#60c2ff]/30 pl-4 italic">
                Вы не одиноки: почти каждый пациент приходит с такими вопросами. В нашей клинике удаление проводят врачи-эксперты — безболезненно, бескровно и с максимальным вниманием к вашему комфорту.
              </p>
            </div>
          </section>

          {/* Indications */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Показания</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Кому подойдёт <span className="font-serif italic text-slate-400">процедура</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container">
              {indications.map((item, index) => (
                <div key={index}
                  className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden cursor-pointer stagger-item opacity-0 scroll-glow-item"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                    <Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300">{item.title}</h3>
                  <p className="text-base sm:text-[17px] text-slate-600 font-light mt-3 leading-relaxed relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cases / Before-After */}
          <section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0 max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Результаты</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
                Работы наших <span className="font-serif italic text-slate-400">специалистов</span>
              </h2>
              <p className="text-lg text-slate-500 font-light">Удаление невуса над глазом — врач дерматолог Багаутдинов А.Ф.</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "https://optim.tildacdn.com/tild3666-3165-4664-a632-336364646561/-/cover/351x351/center/center/-/format/webp/-5.jpg.webp",
                "https://optim.tildacdn.com/tild3466-6139-4165-a465-653063326630/-/cover/351x351/center/center/-/format/webp/-4.jpg.webp",
                "https://optim.tildacdn.com/tild6363-3561-4663-b965-646231326132/-/cover/351x351/center/center/-/format/webp/-1.jpg.webp",
                "https://optim.tildacdn.com/tild3732-3765-4030-a135-656535623065/-/cover/351x351/center/center/-/format/webp/-2.jpg.webp"
              ].map((img, i) => (
                <div key={i} className="relative rounded-[2rem] overflow-hidden shadow-md group aspect-square">
                  <img src={img} alt={`Результат ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium text-slate-700">
                      {i < 2 ? 'До' : 'После'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Advantages */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Преимущества</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
                Почему лазерное <br /> <span className="font-serif italic text-slate-400">удаление</span>
              </h2>
            </div>

            <div className="flex flex-col stagger-container">
              <EditorialList items={advantages} />
            </div>
          </section>

          {/* Process Steps */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-5xl mx-auto reveal-up opacity-0">
            <div className="text-center mb-16">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Этапы</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                Как проходит <span className="font-serif italic text-slate-400">удаление</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <EditorialList items={steps} />
            </div>
          </section>

          {/* Aftercare */}
          <section className="mb-32 lg:mb-48 max-w-5xl mx-auto reveal-up opacity-0">
            <div className="text-center mb-12">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— После процедуры</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                Рекомендации по <span className="font-serif italic text-slate-400">уходу</span>
              </h2>
              <p className="text-lg text-slate-500 font-light mt-4 max-w-2xl mx-auto">Соблюдайте простые правила — и кожа восстановится быстро, а результат будет аккуратным и без осложнений.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {aftercare.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#60c2ff]/10 flex items-center justify-center shrink-0">
                    <Icon icon={item.icon} className="text-xl text-[#60c2ff]" />
                  </div>
                  <p className="text-base text-slate-700 font-normal leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Doctors */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto reveal-up opacity-0">
            <div className="text-center mb-16">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Наши врачи</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                Эксперты по <span className="font-serif italic text-slate-400">удалению</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doc, i) => (
                <div key={i} className="group relative bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-500">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors">{doc.name}</h3>
                    <p className="text-base text-slate-600 font-light mt-1">{doc.role}</p>
                    <div className="flex items-center gap-2 mt-3 text-sm text-[#60c2ff] font-medium">
                      <Icon icon="solar:verified-check-bold-duotone" className="text-lg" />
                      РћРїС‹С‚: {doc.exp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto w-full reveal-up opacity-0">
            <div className="text-center mb-16">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Вопросы и ответы</span>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">
                Частые <span className="font-serif italic text-slate-400">вопросы</span>
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
                  <div className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === idx ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-[17px] text-slate-600 font-light leading-relaxed border-l-2 border-[#60c2ff]/30 pl-4">{item.a}</p>
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
              {[
                { title: "Воспаления в зоне удаления", icon: "solar:fire-bold-duotone" },
                { title: "Герпес, псориаз, экзема", icon: "solar:shield-warning-bold-duotone" },
                { title: "Беременность и лактация", icon: "solar:heart-bold-duotone" },
                { title: "Онкологические заболевания", icon: "solar:danger-triangle-bold-duotone" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-4 bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/80 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
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
                    Удалите родинки <br />
                    <span className="font-serif italic text-slate-400">безопасно</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    Запишитесь на приём и получите консультацию врача-дерматолога и онколога в подарок. Лазер <span className="font-medium text-white">CO2 Bison</span> — современное, безопасное оборудование.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                    <div className="relative inline-flex group w-full sm:w-auto">
                      <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                      <button 
                        onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-booking-modal'))}
                        className="relative z-10 w-full sm:w-auto px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center justify-center gap-3"
                      >
                        Записаться на удаление
                        <Icon icon="solar:arrow-right-linear" className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="hidden lg:flex w-64 h-64 rounded-full border border-[#60c2ff]/20 relative items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div>
                  <div className="text-center">
                    <Icon icon="solar:health-bold-duotone" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" />
                    <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/50 leading-tight">SkinMed<br/>Laser Surgery</span>
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
