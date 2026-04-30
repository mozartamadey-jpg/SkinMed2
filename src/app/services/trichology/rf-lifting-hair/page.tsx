import { Metadata } from 'next';
import RfLiftingHairClient from './RfLiftingHairClient';

export const metadata: Metadata = {
  title: 'РФ-лифтинг для волос в Казани — Vivace | СкинМед',
  description: 'Микроигольчатый RF-лифтинг Vivace для волос в Казани. Улучшение кровообращения и восстановление структуры волос. Клиника СкинМед.',
  openGraph: {
    title: 'РФ-лифтинг для волос Vivace | СкинМед Казань',
    description: 'Микроигольчатый RF-лифтинг — инновационное восстановление здоровья волос.',
    url: 'https://skinmedclinic.ru/services/trichology/rf-lifting-hair',
    siteName: 'Клиника SkinMed', locale: 'ru_RU', type: 'website',
  },
};

export default function RfLiftingHairPage() {
  return <RfLiftingHairClient />;
}
