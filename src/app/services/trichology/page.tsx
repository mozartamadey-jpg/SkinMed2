import { Metadata } from 'next';
import TrichologyClient from './TrichologyClient';

export const metadata: Metadata = {
  title: 'Трихология в Казани — лечение волос и кожи головы | СкинМед',
  description: 'Трихология в Казани: диагностика кожи головы, лечение выпадения волос, мезотерапия, плазмотерапия и RF-лифтинг. Клиника СкинМед, пр. А. Камалеева, 30.',
  openGraph: {
    title: 'Трихология и лечение волос | СкинМед Казань',
    description: 'Профессиональная диагностика и лечение волос и кожи головы на современном оборудовании.',
    url: 'https://skinmedclinic.ru/services/trichology',
    siteName: 'Клиника SkinMed',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function TrichologyPage() {
  return <TrichologyClient />;
}
