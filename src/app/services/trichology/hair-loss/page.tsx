import { Metadata } from 'next';
import HairLossClient from './HairLossClient';

export const metadata: Metadata = {
  title: 'Лечение выпадения волос в Казани — остановить облысение | СкинМед',
  description: 'Лечение выпадения волос и алопеции в Казани. Мезотерапия, плазмотерапия, RF-лифтинг. Эффективная терапия без пересадки. Клиника СкинМед.',
  openGraph: {
    title: 'Лечение выпадения волос | СкинМед Казань',
    description: 'Комплексное лечение алопеции современными методами — без хирургии.',
    url: 'https://skinmedclinic.ru/services/trichology/hair-loss',
    siteName: 'Клиника SkinMed', locale: 'ru_RU', type: 'website',
  },
};

export default function HairLossPage() {
  return <HairLossClient />;
}
