import { Metadata } from 'next';
import SpiderVeinsClient from './SpiderVeinsClient';

export const metadata: Metadata = {
  title: 'Удаление сосудистых звездочек и капилляров лазером | СкинМед',
  description: 'Лазерное удаление сосудистых сеточек, звездочек и купероза на лице и теле. Безопасно, без рубцов. Видимый результат уже после первой процедуры.',
  keywords: [
    'удаление сосудистых звездочек',
    'удаление купероза',
    'лазерное удаление капилляров',
    'лечение сосудов Казань',
    'клиника СкинМед'
  ],
  openGraph: {
    title: 'Удаление сосудистых звездочек | Клиника СкинМед',
    description: 'Эффективное лазерное удаление капиллярной сетки на лице и теле без повреждения кожи.',
    url: 'https://skinmedclinic.ru/services/lazernaya-kosmetologiya/udalenie-sosudistyh-zvezdochek',
    type: 'website',
    locale: 'ru_RU',
    images: [{ url: '/images/spider-veins-hero-v2.png', width: 1200, height: 630 }]
  },
  alternates: {
    canonical: '/services/lazernaya-kosmetologiya/udalenie-sosudistyh-zvezdochek'
  }
};

export default function SpiderVeinsPage() {
  return <SpiderVeinsClient />;
}
