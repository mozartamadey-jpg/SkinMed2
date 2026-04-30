import { Metadata } from 'next';
import MesotherapyHairClient from './MesotherapyHairClient';

export const metadata: Metadata = {
  title: 'Мезотерапия для волос Казань | Лечение выпадения в СКИНМЕД',
  description: 'Инъекционная мезотерапия кожи головы. Остановим выпадение, восстановим естественный блеск и густоту волос. Получите сертификат 1000 рублей!',
  openGraph: {
    title: 'Мезотерапия для волос - клиника СКИНМЕД',
    description: 'Инновационные мезопрепараты для здоровья кожи головы и лечения аномального выпадения.',
    images: [{ url: '/images/og/meso-hair.jpg' }],
  },
};

export default function MesotherapyHairPage() {
  return <MesotherapyHairClient />;
}
