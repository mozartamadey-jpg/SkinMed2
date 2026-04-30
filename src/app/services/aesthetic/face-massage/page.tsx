import { Metadata } from 'next';
import FaceMassageClient from './FaceMassageClient';

export const metadata: Metadata = {
  title: 'Массаж лица в Казани | Скульптурный, лимфодренажный массаж | СкинМед',
  description: 'Профессиональный массаж лица в клинике СкинМед: классический, лимфодренажный, скульптурный. Лифтинг-эффект, улучшение тонуса и цвета кожи. Запишитесь на процедуру.',
  openGraph: {
    title: 'Массаж лица — профессиональный лифтинг без инъекций',
    description: 'Классический, лимфодренажный и скульптурный массаж лица для молодости и тонуса кожи.',
    url: 'https://skinmedclinic.ru/services/aesthetic/face-massage',
    siteName: 'Клиника SkinMed',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function FaceMassagePage() {
  return <FaceMassageClient />;
}
