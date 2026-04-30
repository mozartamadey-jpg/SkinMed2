import { Icon } from "@iconify/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <div className="w-20 h-20 rounded-2xl bg-[#eaf3f8] flex items-center justify-center mx-auto mb-6">
          <Icon icon="solar:question-circle-bold" className="text-3xl text-[#60c2ff]" />
        </div>
        <h2 className="text-2xl font-light text-slate-900 mb-2">Страница не найдена</h2>
        <p className="text-slate-500 font-extralight mb-6 max-w-md">
          Запрашиваемая страница не существует или была перемещена.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#60c2ff] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-extralight"
        >
          <Icon icon="solar:home-2-bold" className="text-lg" />
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
