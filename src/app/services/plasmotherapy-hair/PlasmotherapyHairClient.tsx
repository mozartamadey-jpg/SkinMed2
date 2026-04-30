'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';

export default function PlasmotherapyHairClient() {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    if (!isMobile) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("mobile-glow-active");
        } else {
          entry.target.classList.remove("mobile-glow-active");
        }
      });
    }, { rootMargin: "-40% 0px -40% 0px", threshold: 0 });
    setTimeout(() => { document.querySelectorAll(".scroll-glow-item").forEach((el) => observer.observe(el)); }, 500);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative font-sans text-slate-800 bg-white overflow-hidden selection:bg-[#60c2ff]/30 flex flex-col">
      <AnimationsProvider />
      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        
        <main className="w-full mt-12 sm:mt-16 overflow-x-hidden">
          
          {/* CENTERED MINIMALIST HERO */}
          <section className="mb-24 lg:mb-32 relative flex flex-col items-center justify-center text-center px-4 lg:px-8 max-w-5xl mx-auto min-h-[50vh] stagger-container">
            
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#60c2ff]/30 bg-[#60c2ff]/5 text-[#60c2ff] text-sm font-medium mb-10 stagger-item opacity-0 shadow-sm">
              <Icon icon="solar:shield-check-bold" className="text-xl" />
              <span>Гарантируем результат за 3–6 процедур</span>
            </div>

            <h1 className="text-[3rem] sm:text-6xl md:text-7xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] mb-8 stagger-item opacity-0">
              Плазмотерапия<br/>
              <span className="font-serif italic text-slate-400">для волос</span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-500 font-light max-w-3xl leading-relaxed mb-12 stagger-item opacity-0">
              Остановим выпадение, вылечим перхоть и зуд. Вернём волосам силу, здоровье и натуральный блеск с технологией Platelet Rich Plasma (PRP).
            </p>

            <div className="relative group w-full sm:w-auto stagger-item opacity-0">
              <div className="absolute inset-0 bg-[#60c2ff]/40 rounded-[2rem] blur-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 flex flex-col sm:flex-row bg-white rounded-[2rem] p-3 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.08)] border border-slate-100 items-stretch">
                <div className="px-8 py-5 flex flex-col justify-center text-left border-b sm:border-b-0 sm:border-r border-slate-100">
                  <span className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-1">Стоимость</span>
                  <span className="text-3xl font-light text-slate-900">9 900 ₽</span>
                </div>
                <div className="px-8 py-5 flex items-center justify-center gap-3 bg-gradient-to-br from-rose-50 to-transparent m-1 rounded-[1.5rem]">
                  <Icon icon="solar:gift-bold" className="text-3xl text-rose-400" />
                  <span className="text-sm text-slate-600 font-medium max-w-[150px] text-left">Трихоскопия головы в подарок</span>
                </div>
                <button 
                  onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                  className="bg-[#60c2ff] text-white px-10 py-5 sm:ml-2 rounded-[1.5rem] font-medium hover:bg-[#3ba3e0] transition-colors flex items-center justify-center m-1 sm:m-0"
                >
                  Записаться
                </button>
              </div>
            </div>

          </section>

          {/* LARGE IMAGE BREAK */}
          <section className="mb-32 lg:mb-48 max-w-[1400px] mx-auto px-4 lg:px-8 stagger-container">
            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.1)] stagger-item opacity-0 group">
              <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transform duration-[3s] group-hover:scale-105" alt="Plasmotherapy Hair" />
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-1000"></div>
            </div>
          </section>

          {/* THE SCIENCE (CORTEXIL) */}
          <section className="mb-32 lg:mb-48 max-w-5xl mx-auto px-4 lg:px-0 stagger-container relative">
            <div className="text-center mb-16 stagger-item opacity-0">
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">Platelet <span className="font-serif italic text-slate-400">Rich Plasma</span></h2>
              <p className="text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
                Это гипоаллергенный материал с высокой концентрацией белка, незаменимых витаминов и минералов, полученный из вашей собственной крови с помощью медицинской центрифуги.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-[#FAFAFA] rounded-[3rem] p-12 lg:p-20 border border-slate-100 stagger-item opacity-0">
              <div className="w-full md:w-1/2 text-center md:text-right">
                <span className="text-7xl lg:text-8xl font-light text-[#60c2ff] block mb-2">&gt; 1 млн</span>
                <span className="text-2xl text-slate-900 font-medium">тромбоцитов</span>
              </div>
              <div className="w-px h-32 bg-slate-200 hidden md:block"></div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <p className="text-lg text-slate-500 font-light max-w-sm">
                  содержится всего в 1 мкл биоматериала Cortexil. Это колоссальный объем природных факторов роста, которые моментально запускают процессы возрождения волосяных фолликулов.
                </p>
              </div>
            </div>
          </section>

          {/* ПОКАЗАНИЯ (ASYMMETRIC LIST) */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto px-4 lg:px-0 stagger-container">
            <h2 className="text-4xl sm:text-5xl font-light text-slate-900 mb-20 text-center stagger-item opacity-0">Когда <span className="font-serif italic text-slate-400">помогает Cortexil?</span></h2>
            
            <div className="flex flex-col border-t border-slate-200 pt-8">
              {[
                { t: "Выпадение волос", d: "Восстанавливает кровообращение и дефицит необходимых веществ, увеличивает количество и густоту волос. Курс лечения включает 3−6 процедур с перерывом 2−4 недели." },
                { t: "Андрогенетическая алопеция", d: "Останавливает частичное облысение, восполняет дефициты, снижает побочное влияния гормонов. Потребуется 4−6 сеансов с промежутком 7−14 суток." },
                { t: "Зуд, жирность и перхоть", d: "Нормализует активность сальных желез и выработку кожного сало. Восстанавливает мягкую и увлажненную кожу, убирает чувство раздражения." },
                { t: "Медленный рост и ломкость", d: "Улучшает питание волосяных фолликул, устраняет нехватку антиоксидантов и восстанавливает эластичность сухих прядей." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center border-b border-slate-200 py-12 lg:py-16 hover:bg-[#FAFAFA] transition-colors group px-6 lg:px-12 rounded-[2rem] stagger-item opacity-0">
                  <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <span className="text-6xl font-serif text-[#60c2ff]/30 group-hover:text-[#60c2ff]/50 transition-colors">0{idx+1}</span>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-3xl font-light text-slate-900 mb-4">{item.t}</h3>
                    <p className="text-lg text-slate-500 font-light leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ПЛАЗМО VS МЕЗО (CRUCIAL COMPARISON FAQ) */}
          <section className="mb-32 lg:mb-48 bg-[#FAFAFA] py-24 lg:py-32 stagger-container">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
              <div className="text-center mb-20 stagger-item opacity-0">
                <h2 className="text-4xl sm:text-5xl font-light text-slate-900 tracking-tight">
                  Мезотерапия или <span className="font-serif italic text-[#60c2ff]">Плазмотерапия?</span>
                </h2>
                <p className="text-slate-500 font-light mt-6 text-xl">Разбираем главное отличие методов лечения</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Мезо */}
                <div className="bg-white rounded-[3rem] p-10 lg:p-14 border border-slate-100 shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-500 stagger-item opacity-0">
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-400 block mb-4">Для профилактики</span>
                  <h3 className="text-4xl font-light text-slate-900 mb-8">Мезотерапия</h3>
                  <p className="text-slate-600 font-light text-lg leading-relaxed mb-8">
                    Препараты содержат внешние витамины и аминокислоты. Имеют широкое действие благодаря богатому искусственно собранному составу. 
                  </p>
                  <div className="flex items-center gap-3 text-slate-500">
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    <span className="font-light">Подходит для поддержания здоровья и профилактики потери.</span>
                  </div>
                </div>

                {/* Плазмо */}
                <div className="bg-gradient-to-br from-[#60c2ff]/10 to-transparent rounded-[3rem] p-10 lg:p-14 border border-[#60c2ff]/30 shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.15)] hover:-translate-y-2 transition-transform duration-500 stagger-item opacity-0 relative overflow-hidden">
                  <Icon icon="solar:star-fall-minimalistic-2-bold-duotone" className="absolute top-10 right-10 text-6xl text-[#60c2ff]/20" />
                  <span className="text-sm font-bold uppercase tracking-widest text-[#60c2ff] block mb-4">Для лечения</span>
                  <h3 className="text-4xl font-light text-[#60c2ff] mb-8">Плазмотерапия</h3>
                  <p className="text-slate-700 font-light text-lg leading-relaxed mb-8 relative z-10">
                    Используется материал из вашей собственной крови с гигантской концентрацией тромбоцитов. Обладает высочайшими гипоаллергенными регенеративными свойствами.
                  </p>
                  <div className="flex items-center gap-3 text-slate-700 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-[#60c2ff]"></div>
                    <span className="font-light">Подходит для лечения острых проблем и алопеции.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ПОСЛЕ ИНЪЕКЦИЙ */}
          <section className="mb-32 lg:mb-48 max-w-7xl mx-auto px-4 lg:px-8 stagger-container">
            <h2 className="text-3xl text-center font-light mb-16 stagger-item opacity-0">Как ухаживать после?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "24 часа не мойте голову",
                "3–5 дней без бани и сауны",
                "Неделю не красьте волосы",
                "Носите легкий головной убор"
              ].map((text, i) => (
                <div key={i} className="bg-[#FAFAFA] p-8 rounded-3xl text-center flex flex-col items-center justify-center border border-slate-100 stagger-item opacity-0">
                  <Icon icon="solar:info-circle-bold-duotone" className="text-3xl text-slate-300 mb-4" />
                  <p className="text-slate-600 font-light">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA-БЛОК С ЗАПИСЬЮ */}
          <section className="mb-20 max-w-7xl mx-auto stagger-container relative z-10 px-4 lg:px-8">
            <div className="bg-gradient-to-br from-[#60c2ff] to-[#3ba3e0] rounded-[3rem] p-10 lg:p-16 shadow-[0_2rem_5rem_-1rem_rgba(96,194,255,0.4)] stagger-item opacity-0">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-4xl lg:text-[3.5rem] font-light text-white leading-tight mb-6 tracking-tight">
                    Запишитесь на плазмотерапию
                  </h2>
                  <p className="text-white/80 font-light text-lg mb-8 max-w-md">
                    Оставьте номер телефона. Трихолог свяжется с вами и проведет аппаратную трихоскопию волос в подарок!
                  </p>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-white/20 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/20 shadow-xl">
                    <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); }}>
                      <input 
                        type="tel" 
                        placeholder="Ваш номер телефона" 
                        className="w-full px-6 py-5 rounded-full bg-white/90 focus:bg-white text-slate-800 outline-none transition-colors border border-transparent focus:border-[#60c2ff] font-light placeholder:text-slate-400"
                        required 
                      />
                      <button 
                        type="submit"
                        className="w-full px-6 py-5 bg-white text-[#60c2ff] font-medium rounded-full hover:bg-slate-50 hover:shadow-lg transition-all duration-300"
                      >
                        Получить трихоскопию 
                      </button>
                    </form>
                    <div className="mt-8 flex flex-col gap-4 text-white">
                      <div className="flex items-center gap-4 hover:text-white/80 transition-colors cursor-pointer">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                          <Icon icon="solar:phone-calling-bold" className="text-xl" />
                        </div>
                        <span className="font-light text-lg">+7 (843) 204-55-11</span>
                      </div>
                    </div>
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
