'use client';

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie_consent');
    if (!hasConsented) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto z-50 max-w-sm sm:max-w-md bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-2xl animate-fade-in-up">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-[#60c2ff]/20 flex items-center justify-center shrink-0 text-xl">
           🍪
        </div>
        <div className="flex-1">
          <h4 className="text-white font-medium mb-1">Мы используем файлы cookie</h4>
          <p className="text-white/60 text-sm font-light leading-relaxed mb-4">
            Продолжая использовать сайт, вы соглашаетесь с нашей <a href="/safety" className="text-[#60c2ff] hover:underline">Политикой конфиденциальности</a> и использованием cookie-файлов для улучшения интерфейса.
          </p>
          <div className="flex gap-3">
             <button
               onClick={acceptCookies}
               className="px-5 py-2.5 bg-[#60c2ff] text-white text-sm font-medium rounded-xl hover:bg-[#4db8ff] transition-colors"
             >
               Я согласен
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
