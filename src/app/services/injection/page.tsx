import type { Metadata } from "next";
import InjectionCosmetologyPage from "./InjectionCosmetologyPage";

export const metadata: Metadata = {
  title: "Инъекционная косметология в Казани — Цены на уколы красоты в SkinMed",
  description: "Профессиональная инъекционная косметология в Казани. Увеличение губ, ботулинотерапия, биоревитализация и мезотерапия. Врачи-косметологи, сертифицированные препараты. Записывайтесь!",
  keywords: "инъекционная косметология казань, уколы красоты, увеличение губ казань, ботокс цена, биоревитализация казань, мезотерапия волос",
};

export default function Page() {
  return <InjectionCosmetologyPage />;
}
