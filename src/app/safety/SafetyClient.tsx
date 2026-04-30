'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';

export default function SafetyClient() {
  return (
    <div className="min-h-screen relative font-sans text-slate-800 flex flex-col">
      <AnimationsProvider />

      {/* Aurora Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/90 via-[#f0f5fa]/80 to-[#e4eaf0]/90"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] bg-gradient-to-br from-[#60c2ff]/30 to-transparent blur-[8rem] opacity-60 mix-blend-multiply animate-orbit" style={{ animationDuration: "25s" }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] bg-gradient-to-tl from-[#80d0ff]/20 via-[#cddce9]/40 to-transparent blur-[10rem] opacity-60 mix-blend-multiply animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}></div>
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-[100%] bg-gradient-to-bl from-[#b8e0ff]/30 to-transparent blur-[9rem] opacity-70 mix-blend-multiply animate-orbit" style={{ animationDuration: "30s", animationDirection: "reverse" }}></div>
        <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
      </div>

      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        
        <main className="w-full mt-12 sm:mt-16 max-w-4xl mx-auto">
          
          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">Политика конфиденциальности</span>
            </div>
          </section>

          <section className="mb-16 reveal-up opacity-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.04em] leading-[1.0] text-slate-900 mb-6">
              Политика <span className="font-serif italic text-slate-400">конфиденциальности</span>
            </h1>
            <p className="text-lg text-slate-500 font-light max-w-2xl">
              Политика в отношении обработки персональных данных посетителей веб-сайта skinmedclinic.ru
            </p>
          </section>

          <section className="reveal-up opacity-0 bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 md:p-12 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] font-light text-slate-700 leading-relaxed space-y-8">
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">1. Общие положения</h3>
              <div className="space-y-3">
                <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые ООО «СКИНМЕД» (далее — Оператор).</p>
                <ul className="list-none space-y-2 pl-4">
                  <li><strong>1.1.</strong> Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных.</li>
                  <li><strong>1.2.</strong> Настоящая политика Оператора в отношении обработки персональных данных (далее — Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта skinmedclinic.ru.</li>
                </ul>
              </div>
            </div>

            <div className="w-full h-px bg-slate-200/50"></div>

            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">2. Основные понятия, используемые в Политике</h3>
              <ul className="list-none space-y-2 pl-4">
                <li><strong>2.1. Автоматизированная обработка персональных данных</strong> — обработка персональных данных с помощью средств вычислительной техники;</li>
                <li><strong>2.2. Блокирование персональных данных</strong> — временное прекращение обработки персональных данных;</li>
                <li><strong>2.3. Веб-сайт</strong> — совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по адресу skinmedclinic.ru;</li>
                <li><strong>2.4. Информационная система персональных данных</strong> — совокупность содержащихся в базах данных персональных данных;</li>
                <li><strong>2.5. Обезличивание персональных данных</strong> — действия, в результате которых невозможно определить принадлежность персональных данных;</li>
                <li><strong>2.6. Обработка персональных данных</strong> — любое действие (операция) или совокупность действий с персональными данными;</li>
                <li><strong>2.7. Оператор</strong> — государственный орган, юридическое или физическое лицо, организующие обработку персональных данных;</li>
                <li><strong>2.8. Персональные данные</strong> — любая информация, относящаяся к определяемому Пользователю;</li>
                <li><strong>2.9. Пользователь</strong> — любой посетитель веб-сайта;</li>
                <li><strong>2.10. Предоставление персональных данных</strong> — действия, направленные на раскрытие данных определенному лицу;</li>
                <li><strong>2.11. Распространение персональных данных</strong> — раскрытие персональных данных неопределенному кругу лиц;</li>
                <li><strong>2.12. Трансграничная передача персональных данных</strong> — передача на территорию иностранного государства;</li>
                <li><strong>2.13. Уничтожение персональных данных</strong> — любые действия, в результате которых персональные данные уничтожаются безвозвратно.</li>
              </ul>
            </div>

            <div className="w-full h-px bg-slate-200/50"></div>

            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">3. Оператор может обрабатывать следующие данные:</h3>
              <ul className="list-decimal space-y-2 pl-8">
                <li>Фамилия, имя, отчество;</li>
                <li>Номер телефона;</li>
                <li>Адрес электронной почты;</li>
                <li>Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов Яндекс Метрика и Гугл Аналитика.</li>
                <li>Вышеперечисленные данные объединены общим понятием Персональные данные.</li>
              </ul>
            </div>

            <div className="w-full h-px bg-slate-200/50"></div>

            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">4. Цели обработки персональных данных</h3>
              <ul className="list-none space-y-2 pl-4">
                <li><strong>4.1.</strong> Цель обработки персональных данных Пользователя — Уточнение деталей заказа и запись на прием.</li>
                <li><strong>4.2.</strong> Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах. Пользователь всегда может отказаться от получения уведомлений, направив письмо на SkinMedClinic@yandex.ru.</li>
                <li><strong>4.3.</strong> Обезличенные данные служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта.</li>
              </ul>
            </div>

            <div className="w-full h-px bg-slate-200/50"></div>

            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">5-8. Прочие положения</h3>
              <div className="space-y-4">
                <p><strong>Правовые основания:</strong> Оператор обрабатывает данные только в случае их заполнения через формы на сайте skinmedclinic.ru. Отправляя данные, Пользователь выражает свое согласие с Политикой.</p>
                <p><strong>Хранение и защита:</strong> Безопасность данных обеспечивается реализацией правовых, организационных и технических мер. Данные никогда не будут переданы третьим лицам, за исключением случаев, предусмотренных законом.</p>
                <p><strong>Отзыв согласия:</strong> Срок обработки является неограниченным. Пользователь может в любой момент отозвать свое согласие, направив письмо на SkinMedClinic@yandex.ru с пометкой «Отзыв согласия».</p>
                <p><strong>Контакты:</strong> Пользователь может получить любые разъяснения по электронной почте SkinMedClinic@yandex.ru.</p>
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
