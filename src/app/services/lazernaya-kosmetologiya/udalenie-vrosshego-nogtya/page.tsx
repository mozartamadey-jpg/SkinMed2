import { Metadata } from 'next';
import IngrownNailClient from './IngrownNailClient';

export const metadata: Metadata = {
  title: 'Удаление вросшего ногтя лазером в Казани — цена, лечение | СкинМед',
  description: 'Лазерное лечение вросшего ногтя с гарантией от рецидивов. Удаление части ногтевой пластины (резекция) лучом CO2 лазера под местной анестезией.',
  keywords: [
    'удаление вросшего ногтя',
    'лечение вросшего ногтя лазером',
    'краевая резекция ногтя',
    'удалить вросший ноготь казань',
    'лазерная коррекция ногтя'
  ],
  openGraph: {
    title: 'Лечение вросшего ногтя лазером | Клиника СкинМед',
    description: 'Быстрое лазерное удаление вросшего ногтя. Без боли, быстро и навсегда.',
    url: 'https://skinmedclinic.ru/services/lazernaya-kosmetologiya/udalenie-vrosshego-nogtya',
    type: 'website',
    locale: 'ru_RU',
    images: [{ url: '/images/ingrown-nail-hero.png', width: 1200, height: 630 }]
  },
  alternates: {
    canonical: '/services/lazernaya-kosmetologiya/udalenie-vrosshego-nogtya'
  }
};

export default function IngrownNailPage() {
  return <IngrownNailClient />;
}
