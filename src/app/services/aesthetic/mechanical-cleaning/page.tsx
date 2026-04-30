import { Metadata } from 'next';
import MechanicalCleaningClient from './MechanicalCleaningClient';

export const metadata: Metadata = {
  title: 'Механическая чистка лица в Казани | Ручная чистка пор | СкинМед',
  description: 'Профессиональная механическая (ручная) чистка лица в клинике СкинМед. Удаление комедонов, очищение пор, здоровая чистая кожа. Запишитесь на процедуру.',
  openGraph: {
    title: 'Механическая чистка лица — глубокое очищение пор',
    description: 'Ручная чистка лица стерильными инструментами. Удаление чёрных точек, комедонов и загрязнений.',
    url: 'https://skinmedclinic.ru/services/aesthetic/mechanical-cleaning',
    siteName: 'Клиника SkinMed',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function MechanicalCleaningPage() {
  return <MechanicalCleaningClient />;
}
