import { Metadata } from 'next';
import NeurologyClient from './NeurologyClient';

export const metadata: Metadata = {
  title: 'Ботулинотерапия в неврологии в Казани | Лечение мигрени | СкинМед',
  description: 'Ботулинотерапия в неврологии в Казани. Лечение хронической мигрени, невралгии, бруксизма, блефароспазма и гипергидроза. Врач-невролог клиники СкинМед.',
  openGraph: {
    title: 'Ботулинотерапия в неврологии | СкинМед Казань',
    description: 'Лечение мигрени, невралгии, бруксизма и мышечных спазмов ботулотоксином.',
    url: 'https://skinmedclinic.ru/services/neurology',
    siteName: 'Клиника SkinMed', locale: 'ru_RU', type: 'website',
  },
};

export default function NeurologyPage() {
  return <NeurologyClient />;
}
