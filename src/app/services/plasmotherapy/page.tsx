import { Metadata } from 'next';
import PlasmotherapyClient from './PlasmotherapyClient';

export const metadata: Metadata = {
  title: 'Плазмотерапия Cortexil PRP в Казани | Омоложение в СКИНМЕД',
  description: 'Инновационная процедура плазмотерапии Cortexil PRP. Омоложение лица собственной плазмой, богатой тромбоцитами. Лифтинг, лечение акне и рубцов.',
  openGraph: {
    title: 'Плазмотерапия Cortexil PRP - СКИНМЕД',
    description: 'Вернём коже упругость, увлажнение и естественное сияние с помощью плазмы до 9 млн тромбоцитов.',
    images: [{ url: '/images/og/plasmotherapy.jpg' }],
  },
};

export default function PlasmotherapyPage() {
  return <PlasmotherapyClient />;
}
