import { Metadata } from 'next';
import BiorepeelPeelingClient from './BiorepeelPeelingClient';

export const metadata: Metadata = {
  title: 'Пилинг BioRePeel в Казани | Инновационный TCA-пилинг | СкинМед',
  description: 'Пилинг BioRePeel CL3 — инновационный двухфазный TCA-пилинг без шелушения в Казани. Всесезонная процедура для сияния и обновления кожи. Запись в клинику СкинМед.',
  openGraph: {
    title: 'Пилинг BioRePeel — обновление кожи без шелушения',
    description: 'Двухфазный TCA-пилинг нового поколения. Всесезонность, без периода реабилитации, мгновенное сияние.',
    url: 'https://skinmedclinic.ru/services/aesthetic/biorepeel-peeling',
    siteName: 'Клиника SkinMed',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function BiorepeelPeelingPage() {
  return <BiorepeelPeelingClient />;
}
