import { Metadata } from 'next';
import PlasmaHairClient from './PlasmaHairClient';

export const metadata: Metadata = {
  title: 'Плазмотерапия для волос в Казани — PRP-Cortexil | СкинМед',
  description: 'Плазмотерапия PRP-Cortexil для волос в Казани. Восстановление роста волос из собственной плазмы. Клиника СкинМед.',
  openGraph: {
    title: 'Плазмотерапия для волос | СкинМед Казань',
    description: 'PRP-Cortexil — инновационная регенерация волос из собственной плазмы.',
    url: 'https://skinmedclinic.ru/services/trichology/plasma-hair',
    siteName: 'Клиника SkinMed', locale: 'ru_RU', type: 'website',
  },
};

export default function PlasmaHairPage() {
  return <PlasmaHairClient />;
}
