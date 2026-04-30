"use client";

import { Icon } from "@iconify/react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <div className="w-20 h-20 rounded-2xl bg-red-100 flex items-center justify-center mx-auto mb-6">
              <Icon icon="solar:danger-triangle-bold" className="text-3xl text-red-500" />
            </div>
            <h2 className="text-2xl font-light text-slate-900 mb-2">Что-то пошло не так</h2>
        <p className="text-slate-500 font-extralight mb-6 max-w-md">
          Произошла ошибка при загрузке страницы. Попробуйте обновить страницу.
        </p>
        <button
          onClick={reset}
          className="flex items-center gap-2 bg-[#60c2ff] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-extralight mx-auto"
        >
          <Icon icon="solar:refresh-circle-bold" className="text-lg" />
          Попробовать снова
        </button>
      </div>
    </div>
  );
}
