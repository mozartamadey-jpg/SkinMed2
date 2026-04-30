'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';

export default function MesotherapyHairClient() {

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
    <div className="min-h-screen relative font-sans text-slate-800 bg-[#FAFAFA] overflow-hidden selection:bg-[#60c2ff]/30 flex flex-col">
      <AnimationsProvider />
      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        
        <main className="w-full mt-8 sm:mt-12 px-4 lg:px-8 max-w-[1400px] mx-auto">
          
          {/* THE DARK PREMIERE CONTAINER */}
          <div className="bg-slate-900 rounded-[3rem] lg:rounded-[4rem] text-white overflow-hidden relative shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.5)]">
            
            {/* HERO ВНУТРИ ТЕМНОГО КОНТЕЙНЕРА */}
            <section className="relative min-h-[70vh] flex flex-col lg:flex-row items-center justify-between p-8 lg:p-24 overflow-hidden">
              <div className="absolute top-0 right-0 w-2/3 h-full mix-blend-overlay opacity-30 z-0 hidden lg:block">
                <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover rounded-l-[50rem]" alt="Hair aesthetic" />
              </div>
              <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="relative z-10 w-full lg:w-1/2 max-w-2xl stagger-container pt-12 lg:pt-0">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#60c2ff] text-xs font-medium uppercase tracking-[0.1em] mb-8 border border-white/10 stagger-item animate-fade-in shadow-[0_0_20px_rgba(96,194,255,0.2)]">
                  Трихология Скинмед
                </span>
                
                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-light tracking-[-0.03em] leading-[1.0] mb-8 stagger-item animate-fade-in pr-4 sm:pr-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                  Мезотерапия<br/>
                  <span className="font-serif italic text-slate-400">для волос</span>
                </h1>
                
                <p className="text-base sm:text-xl text-slate-400 font-light max-w-xl leading-relaxed mb-10 stagger-item animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                  Остановим сильное выпадение, восстановим естественный блеск и густоту волос с помощью инновационных мезопрепаратов из гиалуроновой кислоты и незаменимых витаминов.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 stagger-item animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                  <button
                    onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                    className="px-8 py-4 sm:py-5 bg-gradient-to-br from-[#60c2ff] to-[#3ba3e0] text-white rounded-full font-medium shadow-[0_1rem_2.5rem_rgba(96,194,255,0.25)] transition-all duration-500 hover:shadow-[0_1.5rem_3.5rem_rgba(96,194,255,0.4)] hover:-translate-y-1 focus:outline-none flex items-center justify-center gap-3 overflow-hidden"
                  >
                    Записаться от 7 400 ₽
                  </button>
                </div>
              </div>
            </section>

            {/* ПРОМО БЛОК: СЕРТИФИКАТ 1000Р (ИНТЕРАКТИВНАЯ КАРТОЧКА ВНУТРИ ТЕМНОЙ ТЕМЫ) */}
            <section className="mb-20 px-8 lg:px-24 relative z-10 stagger-container max-w-6xl mx-auto -mt-10 lg:-mt-20">
              <div className="bg-gradient-to-r from-[#60c2ff]/20 to-transparent border border-[#60c2ff]/30 p-8 lg:p-12 rounded-[2.5rem] backdrop-blur-xl flex flex-col md:flex-row items-center justify-between shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.1)] stagger-item opacity-0 group hover:border-[#60c2ff]/50 transition-colors duration-500">
                <div className="flex-1 md:pr-10">
                  <div className="w-16 h-16 rounded-full bg-[#60c2ff]/20 flex items-center justify-center mb-6">
                    <Icon icon="solar:ticket-star-bold-duotone" className="text-3xl text-[#60c2ff]" />
                  </div>
                  <h3 className="text-3xl font-light mb-4">Депозит 1 000 ₽ + Консультация</h3>
                  <p className="text-slate-400 font-light leading-relaxed mb-8 md:mb-0">
                    Ответьте на 5 простых вопросов по диагностике раннего выпадения и мы подарим вам сертификат на мезотерапию с бесплатной консультацией специалиста трихолога!
                  </p>
                </div>
                <div className="w-full md:w-auto">
                  <button className="w-full md:w-auto px-10 py-5 bg-white text-slate-900 rounded-full font-medium hover:bg-[#60c2ff] hover:text-white transition-colors duration-300">
                    Пройти диагностику
                  </button>
                </div>
              </div>
            </section>

            {/* СОСТАВ КОКТЕЙЛЯ (ИНСТРУМЕНТЫ РЕКОНСТРУКЦИИ) */}
            <section className="mb-32 px-8 lg:px-24 stagger-container relative z-10 w-full max-w-7xl mx-auto">
              <div className="text-left mb-16">
                <span className="text-[#60c2ff] uppercase tracking-widest text-xs font-semibold mb-4 block stagger-item opacity-0">Биохимия здоровья</span>
                <h2 className="text-4xl sm:text-5xl font-light tracking-tight stagger-item opacity-0">Как работает <span className="font-serif italic text-slate-400">мезококтейль?</span></h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Пептиды", desc: "Восстанавливают гидробаланс, укрепляют стенки волосяных луковиц." },
                  { title: "Биотин", desc: "Стимулирует работу сальных желез, поддерживает здоровую флору и предотвращает перхоть." },
                  { title: "Витамины группы В", desc: "Существенно улучшают структурную решетку волоса, продлевают жизнь стержня и уменьшают седину." },
                  { title: "Гиалурон и Аминокислоты", desc: "Мощное увлажнение и восполнение белка (кератина), возвращающее волосам роскошное сияние." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-8 lg:p-10 rounded-[2rem] hover:bg-white/10 transition-colors duration-500 stagger-item opacity-0">
                    <span className="text-5xl font-serif text-[#60c2ff]/30 mb-6 block">0{idx+1}</span>
                    <h3 className="text-2xl font-light mb-3">{item.title}</h3>
                    <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ПОКАЗАНИЯ (BENTO BOX DARK) */}
            <section className="mb-32 px-8 lg:px-24 stagger-container relative z-10 w-full max-w-7xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-light text-center tracking-tight mb-20 stagger-item opacity-0">В каких случаях мы <span className="font-serif italic text-[#60c2ff]">поможем?</span></h2>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-gradient-to-br from-[#60c2ff]/20 to-transparent p-10 lg:p-14 rounded-[2.5rem] border border-[#60c2ff]/20 stagger-item opacity-0">
                  <h3 className="text-3xl font-light mb-4 text-[#60c2ff]">Аномальное выпадение</h3>
                  <p className="text-slate-300 font-light mb-8 max-w-xl">Побуждает «сонные» луковицы к росту, выводит токсины. Для лечения рекомендуем терапию из 4−6 сеансов.</p>
                  <Icon icon="solar:shield-check-bold-duotone" className="text-6xl text-[#60c2ff]/50" />
                </div>
                
                <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 hover:border-white/30 transition-all stagger-item opacity-0">
                  <h3 className="text-2xl font-light mb-3">Медленный рост</h3>
                  <p className="text-slate-400 font-light text-sm">Укрепляет стержни и защищает от УФ-лучей. Эффект уже после 2 сеансов.</p>
                </div>
                
                <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 hover:border-white/30 transition-all stagger-item opacity-0">
                  <h3 className="text-2xl font-light mb-3">Сухие и ломкие</h3>
                  <p className="text-slate-400 font-light text-sm">Нормализация обмена веществ и глубокое увлажнение волосистой части головы.</p>
                </div>

                <div className="lg:col-span-2 bg-slate-800/80 p-10 lg:p-14 rounded-[2.5rem] border border-white/10 stagger-item opacity-0 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div>
                    <h3 className="text-3xl font-light mb-4">Перхоть и себорея</h3>
                    <p className="text-slate-400 font-light max-w-md">Сохраняем от поражения себореей и предотвращаем раннюю потерю волос. Лечебно-оздоровительный протокол.</p>
                  </div>
                  <div className="w-20 h-20 shrink-0 bg-[#60c2ff]/20 rounded-full flex items-center justify-center">
                    <Icon icon="solar:leaf-linear" className="text-4xl text-[#60c2ff]" />
                  </div>
                </div>
              </div>
            </section>

            {/* ПРОТИВОПОКАЗАНИЯ (МИНИМАЛИЗМ) */}
            <section className="mb-32 px-8 lg:px-24 py-16 lg:py-24 bg-white/5 mx-auto lg:rounded-[3rem] stagger-container">
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-16">
                <div className="stagger-item opacity-0 md:w-1/3">
                  <h3 className="text-3xl font-light text-rose-400 mb-4">Противопоказания</h3>
                  <p className="text-slate-400 font-light text-sm">Перед курсом проводится строгий осмотр врача трихолога.</p>
                </div>
                <div className="stagger-item opacity-0 md:w-2/3">
                  <ul className="space-y-4">
                    {["Безопасность беременным не установлена", "Раны и воспалительные процессы на коже головы", "Индивидуальная аллергия на витамины состава", "Онкологические заболевания"].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-slate-300 font-light">
                        <span className="text-rose-400 mt-0.5">—</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ЦЕНЫ И CTA */}
            <section className="pb-32 px-8 lg:px-24 stagger-container relative z-10 w-full max-w-5xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-light text-center tracking-tight mb-16 stagger-item opacity-0">Стоимость <span className="font-serif italic text-slate-400">курса</span></h2>

              <div className="space-y-4 mb-20 text-slate-900 stagger-item opacity-0">
                <div className="bg-white p-8 lg:p-10 rounded-[2rem] flex flex-col md:flex-row justify-between items-center hover:scale-[1.01] transition-transform duration-300">
                  <div>
                    <h4 className="text-2xl font-medium mb-1">Вискодерм Скинко (5мл)</h4>
                    <span className="text-slate-500 font-light text-sm">Комплекс для волосистой части головы</span>
                  </div>
                  <div className="mt-4 md:mt-0 text-3xl text-[#60c2ff]">8 000 ₽</div>
                </div>
                <div className="bg-white p-8 lg:p-10 rounded-[2rem] flex flex-col md:flex-row justify-between items-center hover:scale-[1.01] transition-transform duration-300 shadow-[0_0_0_2px_#60c2ff]">
                  <div>
                    <div className="flex gap-3 items-center mb-1">
                      <h4 className="text-2xl font-medium">Hair X</h4>
                      <span className="px-2 py-1 bg-rose-100 text-rose-500 text-[10px] uppercase font-bold rounded-md">Хит</span>
                    </div>
                    <span className="text-slate-500 font-light text-sm">Максимальная эффективность роста</span>
                  </div>
                  <div className="mt-4 md:mt-0 text-3xl font-medium text-slate-900">9 400 ₽</div>
                </div>
              </div>
            </section>

            {/* CTA-БЛОК С ЗАПИСЬЮ */}
            <section className="pb-32 px-4 sm:px-8 lg:px-24 stagger-container relative z-10 w-full mx-auto">
              <div className="bg-gradient-to-br from-[#60c2ff] to-[#3ba3e0] rounded-[3rem] p-10 lg:p-16 shadow-[0_2rem_5rem_-1rem_rgba(96,194,255,0.4)] stagger-item opacity-0">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-4xl lg:text-[3.5rem] font-light text-white leading-tight mb-6 tracking-tight">
                      Остановите потерю волос
                    </h2>
                    <p className="text-white/80 font-light text-lg mb-8 max-w-md">
                      Оставьте номер телефона. Трихолог свяжется с вами и проведет первичную консультацию.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="bg-white/20 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/20 shadow-xl">
                      <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); }}>
                        <input 
                          type="tel" 
                          placeholder="Ваш номер телефона" 
                          className="w-full px-6 py-5 rounded-full bg-slate-900/40 focus:bg-slate-900/80 text-white outline-none transition-colors border border-transparent focus:border-[#60c2ff] font-light placeholder:text-white/40"
                          required 
                        />
                        <button 
                          type="submit"
                          className="w-full px-6 py-5 bg-white text-[#60c2ff] font-medium rounded-full hover:bg-slate-50 hover:shadow-lg transition-all duration-300"
                        >
                          Оставить заявку
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

          </div>
        </main>
          </div>

      <div className="relative z-20 w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
