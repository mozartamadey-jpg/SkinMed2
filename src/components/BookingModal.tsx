"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", website: "" });
  const [consent, setConsent] = useState(false);

  // Handle global events
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-booking-modal", handleOpen);
    return () => window.removeEventListener("open-booking-modal", handleOpen);
  }, []);

  // Prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset form if closed
      if (isSuccess) {
        setTimeout(() => setIsSuccess(false), 300);
      }
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isSuccess]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    // Spam protection (Honeypot)
    if (formData.website) {
       console.log("Bot detected!");
       return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", phone: "", website: "" });

      // Auto close after showing success message
      setTimeout(() => {
        closeModal();
      }, 3500);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 opacity-0 animate-fade-in-down backdrop-blur-md bg-slate-900/40">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={closeModal}></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-white/90 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-[2rem] p-8 sm:p-10 transform transition-all duration-500 reveal-scale">
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100/80 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
        >
          <Icon icon="solar:close-circle-linear" className="text-2xl" />
        </button>

        {!isSuccess ? (
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-[#eaf3f8] text-[#60c2ff] px-4 py-2 rounded-full mb-6 border border-white/60">
              <Icon icon="solar:calendar-linear" className="text-lg" style={{ strokeWidth: 1.5 }} />
              <span className="text-xs font-medium uppercase tracking-widest">Онлайн запись</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extralight text-slate-900 tracking-tight leading-[1.1] mb-2">
              Оставьте заявку
            </h3>
            <p className="text-sm text-slate-500 font-light mb-8">
              Заполните форму, и наш администратор перезвонит вам для подтверждения удобного времени.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Honeypot field for spam bots */}
              <input 
                type="text" 
                name="website" 
                value={formData.website} 
                onChange={(e) => setFormData({ ...formData, website: e.target.value })} 
                className="hidden" 
                tabIndex={-1} 
                autoComplete="off" 
              />

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Icon icon="solar:user-linear" className="text-lg" />
                </div>
                <input
                  type="text"
                  required
                  maxLength={50}
                  pattern="^[a-zA-Zа-яА-ЯёЁ\s\-]{2,50}$"
                  title="Имя должно содержать только буквы и быть длиной от 2 до 50 символов"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ваше имя"
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-slate-800 font-light placeholder-slate-400 focus:outline-none focus:border-[#60c2ff] focus:ring-1 focus:ring-[#60c2ff] transition-all"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Icon icon="solar:phone-linear" className="text-lg" />
                </div>
                <input
                  type="tel"
                  required
                  pattern="^(\+7|8)[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$"
                  title="Введите номер в формате +7 (XXX) XXX-XX-XX или 8XXXXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-slate-800 font-light placeholder-slate-400 focus:outline-none focus:border-[#60c2ff] focus:ring-1 focus:ring-[#60c2ff] transition-all"
                />
              </div>

              <div className="flex items-start gap-3 mt-2">
                <div className="relative flex items-start pt-1">
                  <div className="flex h-5 items-center">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="h-4 w-4 rounded border-slate-300 text-[#60c2ff] focus:ring-[#60c2ff]"
                    />
                  </div>
                </div>
                <div className="text-xs text-slate-500 font-light leading-relaxed">
                  Нажимая кнопку, я принимаю условия <a href="/safety" target="_blank" className="text-[#60c2ff] hover:underline">Политики конфиденциальности</a> и даю согласие на обработку персональных данных
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !consent}
                className="mt-2 w-full bg-[#60c2ff] text-white py-4 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-[#4db8ff] hover:shadow-[0_0.625rem_1.25rem_rgba(96,194,255,0.3)] hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:pointer-events-none disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Icon icon="solar:spinner-linear" className="text-xl animate-spin" />
                    <span>Отправка...</span>
                  </>
                ) : (
                  <span>Перезвоните мне</span>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-6 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-[#eaf3f8] border-2 border-white flex items-center justify-center text-[#60c2ff] mb-6 animate-bounce">
              <Icon icon="solar:check-read-linear" className="text-4xl" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight leading-[1.1] mb-4">
              Спасибо за заявку!
            </h3>
            <p className="text-sm text-slate-500 font-light max-w-[16rem]">
              Ваша заявка успешно отправлена. Наш менеджер скоро свяжется с вами для уточнения деталей.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
