import { Metadata } from 'next';
import TrichologistClient from './TrichologistClient';

export const metadata: Metadata = {
  title: 'Консультация трихолога в Казани — приём врача-трихолога | СкинМед',
  description: 'Трихолог в Казани. Дерматоскопия, диагностика волос и кожи головы, назначение лечения. Клиника СкинМед — запись по тел. 204-55-11.',
  openGraph: {
    title: 'Консультация трихолога | СкинМед Казань',
    description: 'Профессиональная диагностика и индивидуальный план лечения от опытных трихологов.',
    url: 'https://skinmedclinic.ru/services/trichology/consultation',
    siteName: 'Клиника SkinMed',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function TrichologistPage() {
  return <TrichologistClient />;
}
