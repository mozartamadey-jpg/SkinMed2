'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';

export default function LipAugmentationClient() {
  const [quizStep, setQuizStep] = useState(0);
  const [galleryActive, setGalleryActive] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const QUIZ_QUESTIONS = [
    {
      q: "Как бы вы описали свои губы сейчас?",
      options: [
        "Очень тонкие (объема практически нет)",
        "Средние – не тонкие, но и не пухлые",
        "Достаточно полные от природы",
        "Ранее делала, сейчас эффект практически сошел"
      ]
    },
    {
      q: "Какого эффекта вам хотелось бы?",
      options: [
        "Слегка освежить для максимально естественного результата",
        "Добавить немного объема, чтобы губы стали более выразительными",
        "Значительно увеличить для заметно пухлого эффекта",
        "Еще не решила, рассчитываю на совет специалиста"
      ]
    },
    {
      q: "Что для вас важнее всего в процедуре?",
      options: [
        "Чтобы губы выглядели натурально, без эффекта «перекаченности»",
        "Чтобы изменения были заметны и подчеркнули мою внешность",
        "Минимум боли и быстрота процедуры",
        "Доверяю профессионалу – важнее услышать рекомендацию врача"
      ]
    }
  ];

  const handleQuizNext = () => {
    if (quizStep < 3) setQuizStep(prev => prev + 1);
  };

  const FAQS = [
    {
      q: "Сколько держится эффект увеличения губ?",
      a: "Результат сохраняется в среднем от 6 до 12 месяцев и более — это зависит от филлера, обмена веществ и образа жизни. Спорт и сауна могут ускорить рассасывание. Для поддержания объёма достаточно 1−2 процедур в год. При желании можно прийти раньше — вреда от повторного увеличения нет."
    },
    {
      q: "Больно ли увеличивать губы филлером?",
      a: "Для вашего комфорта мы используем сильную аппликационную анестезию в виде крема, а большинство современных филлеров уже содержат лидокаин. Вы почувствуете лишь легкие покалывания. Процедура переносится очень легко."
    },
    {
      q: "Сколько времени занимает процедура?",
      a: "Сама контурная пластика филлером занимает около 15-30 минут в зависимости от сложности работы. Вместе с консультацией и временем на обезболивание рассчитывайте примерно на 1 час пребывания в клинике."
    },
    {
      q: "Можно ли увеличить губы так, чтобы никто не заметил?",
      a: "Конечно. В этом суть нашей концепции «без утиных губ». Если использовать 0.5-0.6 мл филлера и правильно распределить его, мы просто увлажним губы, исправим асимметрию и сделаем их чуточку более сочными. Окружающие заметят, что вы похорошели, но не догадаются об инъекциях."
    }
  ];

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
    <div className="min-h-screen relative font-sans text-slate-800 bg-[#FFFDFE] overflow-hidden selection:bg-[#f6a1bd]/30 flex flex-col">
      <AnimationsProvider />
      
      {/* BACKGROUND MAGIC */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#fce0eb] blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#fdebf1] blur-[100px] opacity-70"></div>
      </div>

      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        
        <main className="w-full mt-12 sm:mt-16 overflow-x-hidden">
          
          {/* SEC 1: ROSE GLAMOUR HERO */}
          <section className="mb-24 lg:mb-32 relative flex flex-col min-h-[70vh] justify-center mt-8 px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center max-w-7xl mx-auto w-full">
              
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#f6a1bd]/30 bg-[#f6a1bd]/10 text-sm font-medium tracking-widest text-[#d86689] uppercase mb-8">
                  <Icon icon="solar:heart-angle-bold" className="text-lg" />
                  Никакого эффекта «утиных губ»
                </span>
                
                <h1 className="text-[3.5rem] sm:text-6xl lg:text-[6.5rem] font-light tracking-tight text-slate-900 leading-[0.95] mb-8">
                  Идеальные<br/>
                  <span className="font-serif italic text-[#d86689]">контуры.</span>
                </h1>
                
                <p className="text-xl sm:text-2xl text-slate-500 font-light max-w-xl leading-relaxed mb-12">
                  Мы создаем соблазнительные губы, в которые хочется влюбляться снова и снова. Естественная гармония, подчеркнутая премиальными биосовместимыми филлерами.
                </p>

                <button onClick={() => {
                  document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
                }} className="px-10 py-5 bg-[#d86689] hover:bg-[#c25174] transition-colors text-white text-lg font-medium rounded-full shadow-[0_1rem_2rem_-0.5rem_rgba(216,102,137,0.4)] flex items-center gap-4 group">
                  Рассчитать стоимость
                  <Icon icon="solar:arrow-right-linear" className="text-3xl group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              <div className="w-full lg:w-1/2 relative flex justify-center animate-pulse-slow">
                <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[3rem] sm:rounded-[4rem] overflow-hidden shadow-[0_3rem_6rem_-1.5rem_rgba(216,102,137,0.2)] bg-slate-100">
                  <img src="/images/lip-augmentation/hero.png" alt="Увеличение губ в Казани" className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#d86689]/20 to-transparent"></div>
                </div>
                
                {/* Floating element */}
                <div className="absolute -bottom-10 lg:bottom-10 -left-10 lg:-left-20 bg-white/60 backdrop-blur-3xl px-8 py-5 border border-white rounded-[2rem] shadow-xl flex items-center gap-6">
                  <div className="text-5xl">💉</div>
                  <div className="flex flex-col">
                    <span className="text-xs tracking-widest uppercase font-bold text-slate-400 mb-1">Без боли</span>
                    <span className="text-2xl text-slate-900 font-light">Анестезия в подарок</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* SEC 2: INTERACTIVE QUIZ (THE MASTERPIECE) */}
          <section id="quiz-section" className="mb-32 lg:mb-48 scroll-mt-32 px-4 lg:px-8 max-w-5xl mx-auto">
            <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] lg:rounded-[4rem] shadow-[0_2rem_6rem_-1rem_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="p-8 lg:p-16 border-b border-indigo-50/50 bg-gradient-to-br from-[#fdf5f8] to-transparent">
                <div className="flex items-center gap-4 mb-4">
                  <Icon icon="solar:chat-round-check-bold-duotone" className="text-4xl text-[#d86689]" />
                  <h2 className="text-3xl lg:text-4xl font-light text-slate-900">Калькулятор эстетики</h2>
                </div>
                <p className="text-slate-500 font-light text-lg">
                  Ответьте на 3 коротких вопроса и получите персональный расчет стоимости под ваши пожелания с консультацией в подарок.
                </p>
              </div>

              <div className="p-8 lg:p-16">
                {quizStep < 3 ? (
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-3 mb-10">
                      <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Шаг</span>
                      <div className="flex gap-2 relative top-0.5">
                        {[0, 1, 2].map(stepIndex => (
                          <div key={stepIndex} className={`h-1.5 w-10 rounded-full transition-all duration-700 ${quizStep >= stepIndex ? 'bg-[#d86689]' : 'bg-slate-200'}`}></div>
                        ))}
                      </div>
                      <span className="text-[#d86689] font-serif italic text-lg ml-2">{quizStep + 1}/3</span>
                    </div>

                    <h3 className="text-3xl font-light text-slate-900 mb-8">{QUIZ_QUESTIONS[quizStep].q}</h3>
                    
                    <div className="flex flex-col gap-4">
                      {QUIZ_QUESTIONS[quizStep].options.map((opt, i) => (
                        <button 
                          key={i}
                          onClick={handleQuizNext}
                          className="w-full text-left p-6 rounded-[2rem] border border-slate-200 hover:border-[#d86689] hover:bg-[#fff9fb] hover:shadow-lg transition-all duration-300 font-light text-slate-700 text-xl group flex justify-between items-center"
                        >
                          {opt}
                          <div className="w-8 h-8 rounded-full border border-slate-300 group-hover:border-[#d86689] group-hover:bg-[#d86689] flex items-center justify-center transition-colors">
                            <Icon icon="solar:check-read-linear" className="text-white opacity-0 group-hover:opacity-100" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="animate-fade-in flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8 border border-green-100">
                      <Icon icon="solar:gift-bold" className="text-5xl text-green-400" />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6">Готово! За вами закреплен подарок</h3>
                    <p className="text-slate-500 font-light text-lg mb-12 max-w-lg">
                      Оставьте свой номер — врач рассчитает точную стоимость процедуры и проведет бесплатную консультацию.
                    </p>
                    
                    <form className="w-full max-w-md flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert('Отправлено'); }}>
                      <input 
                        type="tel" 
                        placeholder="Ваш номер телефона" 
                        className="w-full px-6 py-5 rounded-full bg-white border border-slate-200 text-slate-800 outline-none transition-colors focus:border-[#d86689] focus:ring-4 focus:ring-[#d86689]/10 font-light shadow-sm text-lg text-center"
                        required 
                      />
                      <button 
                        type="submit"
                        className="w-full px-6 py-5 bg-[#d86689] text-white font-medium rounded-full hover:bg-[#c25174] shadow-xl shadow-[#d86689]/20 transition-all text-lg"
                      >
                        Получить расчет стоимости
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* SEC 3: BEFORE / AFTER GALLERY */}
          <section className="mb-32 lg:mb-48 max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-slate-900">
                Работы наших <span className="font-serif italic text-[#d86689]">специалистов</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-8 bg-white/40 backdrop-blur-xl border border-white rounded-[3rem] p-4 lg:p-6 shadow-sm overflow-hidden h-full">
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-slate-900">
                  <div className="absolute inset-0 flex transition-transform duration-[1.5s] ease-[cubic-bezier(0.8,0,0.2,1)]" style={{ transform: `translateX(-${galleryActive * 100}%)` }}>
                    {[
                      "/images/lip-augmentation/gallery_1.png", 
                      "/images/lip-augmentation/gallery_2.png",
                      "/images/lip-augmentation/gallery_3.png",
                      "/images/lip-augmentation/gallery_4.png"
                    ].map((imgUrl, i) => (
                      <div key={i} className="min-w-full h-full relative">
                        <img src={imgUrl} className="w-full h-full object-cover" alt="Губы до после" />
                      </div>
                    ))}
                  </div>
                  {/* DO / POSLE Badge labels */}
                  <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest shadow-xl">
                    До и После
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-6">
                {[
                  {
                    b: "До: губы узкие, практически плоские, макияжем сложно добавить объём.",
                    a: "После: филлер (1,0 мл Stylage) вернул губам утраченную пухлость. Появилась чёткая форма и увлажнение."
                  },
                  {
                    b: "До: аугментация губ у женщины 55 лет, губы потеряли объём с возрастом, опущение уголков.",
                    a: "После: филлер (0,6 мл Belotero) поднял уголки губ, вернул им юношеский бантик и объемную фактуру."
                  },
                  {
                    b: "До: асимметрия, нижняя губа сильно превосходит верхнюю.",
                    a: "После: гармонизация формы без гиперкоррекции. Идеальные трендовые губы на 6-12 месяцев."
                  },
                  {
                    b: "До: стертый контур кисетными морщинами, сухость.",
                    a: "После: мощное внутреннее увлажнение гиалуроновой кислотой, выразительная мягкость."
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setGalleryActive(idx)}
                    className={`cursor-pointer p-6 sm:p-8 rounded-[2rem] border transition-all duration-500 ${galleryActive === idx ? 'bg-[#fff9fb] border-[#d86689]/40 shadow-xl shadow-[#d86689]/5' : 'bg-white/50 border-slate-100 hover:border-slate-300'}`}
                  >
                    <div className="mb-4">
                      <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-1">Ситуация</span>
                      <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">{item.b}</p>
                    </div>
                    <div>
                      <span className={`text-xs uppercase font-bold tracking-widest block mb-1 ${galleryActive === idx ? 'text-[#d86689]' : 'text-slate-400'}`}>Решение врача</span>
                      <p className={`font-light text-sm sm:text-base leading-relaxed transition-colors ${galleryActive === idx ? 'text-slate-900' : 'text-slate-500'}`}>{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SEC 4: ASYMMETRICAL INDICATIONS */}
          <section className="mb-32 lg:mb-48 max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              
              <div className="bg-white rounded-[3rem] p-10 lg:p-14 border border-slate-100 shadow-[0_1rem_4rem_-1rem_rgba(0,0,0,0.05)]">
                <h3 className="text-4xl font-light text-slate-900 mb-10 pb-10 border-b border-slate-100">Показания</h3>
                <div className="flex flex-col gap-6">
                  {[
                    "Тонкие от природы губы — для большего объёма и выразительности.",
                    "Асимметрия формы и незначительное различие контуров.",
                    "Слабовыраженный контур — чёткие границы делают губы моложе.",
                    "Сухость и обезвоженность — филлеры питают ткани.",
                    "Возрастные изменения — кисетные морщины, опущение уголков рта.",
                    "Нечёткая форма «бантика» на верхней губе."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-1">
                        <Icon icon="solar:check-circle-bold" className="text-green-500 text-lg" />
                      </div>
                      <p className="text-lg text-slate-600 font-light leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-14 lg:mt-32 border border-slate-800 shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)] text-white/90">
                <h3 className="text-4xl font-light text-white mb-10 pb-10 border-b border-white/10">Противопоказания</h3>
                <div className="flex flex-col gap-6">
                  {[
                    "Беременность и грудное вскармливание.",
                    "Возраст до 18 лет (строго после совершеннолетия).",
                    "Аллергия на гиалуроновую кислоту или лидокаин.",
                    "Наличие силикона, биополимера в губах (сначала удаление).",
                    "ОРВИ, простуда, герпес в активной стадии.",
                    "Онкология и аутоиммунные заболевания."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0 mt-1">
                        <Icon icon="solar:forbidden-bold" className="text-rose-400 text-lg" />
                      </div>
                      <p className="text-lg font-light leading-relaxed text-white/70">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* SEC 5: TIMELINE / POST-CARE */}
          <section className="mb-32 lg:mb-48 max-w-5xl mx-auto px-4 lg:px-8 text-center text-slate-900 border-t border-slate-200 pt-24 lg:pt-32">
            <span className="block text-sm font-bold uppercase tracking-widest text-[#d86689] mb-4">Этапы и Уход</span>
            <h2 className="text-4xl lg:text-5xl font-light mb-16">
              Как проходит процедура?
            </h2>
            
            <div className="grid md:grid-cols-4 gap-4 mb-24">
              {[
                { n: "01", t: "Анестезия", d: "Наносится аппликационный крем с лидокаином." },
                { n: "02", t: "Инъекция", d: "Филлинг занимает 30 минут тончайшей иглой." },
                { n: "03", t: "Эффект", d: "Мгновенный результат (небольшой отек спадет)." },
                { n: "04", t: "Осмотр", d: "Ждем вас через 2 недели для контроля работы." }
              ].map((step, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center">
                  <span className="text-5xl font-serif italic text-slate-200 mb-6">{step.n}</span>
                  <h4 className="text-xl font-medium mb-3">{step.t}</h4>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#fff9fb] p-10 lg:p-14 rounded-[3rem] text-left border border-[#d86689]/10 relative overflow-hidden">
              <Icon icon="solar:info-circle-bold-duotone" className="absolute top-0 right-0 text-[15rem] text-[#d86689]/5" />
              <h3 className="text-3xl font-light mb-8 relative z-10">Уход после инъекции</h3>
              <div className="grid md:grid-cols-2 gap-10 relative z-10">
                <div>
                  <h4 className="font-medium text-lg mb-2">В первые сутки</h4>
                  <p className="text-slate-600 font-light leading-relaxed">Не трогайте губы руками, не массируйте и не ешьте чересчур горячее. Допускается только мягкий увлажняющий крем.</p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">Первые 3-4 дня</h4>
                  <p className="text-slate-600 font-light leading-relaxed">Может сохраняться отёчность. Не целуйтесь страстно, избегайте активной мимики. Не посещайте баню, сауну и солярий.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SEC 6: FAQ ACCORDION */}
          <section className="mb-32 max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tight text-center mb-16">
              Частые <span className="font-serif italic text-slate-400">вопросы</span>
            </h2>
            <div className="flex flex-col gap-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-8 text-left bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-xl text-slate-800 font-medium pr-8">{faq.q}</span>
                    <div className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-500 ${openFaqIndex === idx ? 'rotate-180 bg-slate-100' : ''}`}>
                      <Icon icon="solar:alt-arrow-down-linear" className="text-xl text-slate-500" />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaqIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-8 pt-0 text-slate-600 font-light text-lg leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FINAL CTA FORM */}
          <section className="mb-20 max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="bg-gradient-to-br from-[#d86689] to-[#b34063] rounded-[3rem] p-10 lg:p-16 shadow-[0_2rem_5rem_-1rem_rgba(216,102,137,0.4)]">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-4xl lg:text-[3.5rem] font-light text-white leading-[1.1] mb-6 tracking-tight">
                    Мечтаете о выразительных губах?
                  </h2>
                  <p className="text-white/80 font-light text-lg mb-8 max-w-md">
                    Запишитесь прямо сейчас — получите консультацию врача-косметолога и анестезию в подарок!
                  </p>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-white/20 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/20 shadow-xl">
                    <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); }}>
                      <input 
                        type="tel" 
                        placeholder="Ваш номер телефона" 
                        className="w-full px-6 py-5 rounded-full bg-white/90 focus:bg-white text-slate-800 outline-none transition-colors border border-transparent focus:border-[#d86689] font-light shadow-inner"
                        required 
                      />
                      <button 
                        type="submit"
                        className="w-full px-6 py-5 bg-white text-[#d86689] font-medium rounded-full hover:bg-slate-50 hover:shadow-lg transition-all duration-300 border border-white"
                      >
                        Записаться к специалисту
                      </button>
                    </form>
                    <div className="mt-8 flex items-center justify-center gap-4 text-white hover:text-white/80 transition-colors cursor-pointer">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                        <Icon icon="solar:phone-calling-bold" className="text-xl" />
                      </div>
                      <span className="font-light text-lg tracking-wide">+7 (843) 204-55-11</span>
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
