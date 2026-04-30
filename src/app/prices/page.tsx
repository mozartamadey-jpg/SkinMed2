import { Metadata } from "next";
import PricesClient from "./PricesClient";

export const metadata: Metadata = {
  title: "Цены на услуги | Клиника СкинМед Казань",
  description:
    "Прайс-лист на услуги косметологии и дерматологии в клинике СкинМед. Альтера, лазерное омоложение, инъекции, чистки лица. Акции и спецпредложения.",
  keywords: [
    "цены косметология Казань",
    "прайс СкинМед",
    "стоимость процедур",
    "Ulthera цена",
    "лазерное омоложение цена",
  ],
  openGraph: {
    title: "Цены на услуги | Клиника СкинМед",
    description: "Актуальный прайс-лист с акциями и спецпредложениями",
    url: "https://skinmed-kzn.ru/prices",
    type: "website",
    locale: "ru_RU",
  },
  alternates: {
    canonical: "/prices",
  },
};

export default function PricesPage() {
  return <PricesClient />;
}
