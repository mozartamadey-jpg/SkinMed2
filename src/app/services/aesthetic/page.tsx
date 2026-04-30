import { Metadata } from 'next';
import AestheticCosmetologyClient from './AestheticCosmetologyClient';

export const metadata: Metadata = {
  title: 'Эстетическая косметология в Казани | Уход, чистка, массаж, пилинги | СкинМед',
  description: 'Эстетическая косметология в клинике СкинМед: профессиональная чистка лица, массаж, уходовые процедуры и пилинги. Индивидуальный подход, видимый результат после 1 процедуры.',
  openGraph: {
    title: 'Эстетическая косметология — премиальный уход за Вашей кожей',
    description: 'Массаж лица, механическая чистка, уходовые процедуры и инновационные пилинги от врачей-косметологов СкинМед.',
    url: 'https://skinmedclinic.ru/services/aesthetic',
    siteName: 'Клиника SkinMed',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function AestheticPage() {
  return <AestheticCosmetologyClient />;
}
