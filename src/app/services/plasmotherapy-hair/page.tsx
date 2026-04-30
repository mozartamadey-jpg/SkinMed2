import { Metadata } from 'next';
import PlasmotherapyHairClient from './PlasmotherapyHairClient';

export const metadata: Metadata = {
  title: 'Плазмотерапия для волос Казань | Cortexil PRP в СКИНМЕД',
  description: 'Эффективное лечение выпадения волос и алопеции методом Cortexil PRP. Собственная плазма с высокой концентрацией факторов роста (более 1 млн тромбоцитов).',
  openGraph: {
    title: 'Плазмотерапия Cortexil PRP для волос',
    description: 'Остановите выпадение волос и верните им густоту за 3-6 процедур. Получите трихоскопию в подарок при записи!',
    images: [{ url: '/images/og/plasmo-hair.jpg' }],
  },
};

export default function PlasmotherapyHairPage() {
  return <PlasmotherapyHairClient />;
}
