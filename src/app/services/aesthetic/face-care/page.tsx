import { Metadata } from 'next';
import FaceCareClient from './FaceCareClient';

export const metadata: Metadata = {
  title: 'Чистка лица и профессиональный уход в Казани | Цены | СкинМед',
  description: 'Профессиональный уход за лицом и комплексная чистка в клинике СкинМед. 6-этапная процедура: демакияж, эксфолиация, УЗ-чистка, ручная чистка, маска, SPF. Видимый эффект после 1 процедуры.',
  openGraph: {
    title: 'Уход за лицом — комплексная чистка и профессиональный уход',
    description: 'Деликатная 6-этапная чистка лица от прыщей и чёрных точек. Видимый эффект после 1 процедуры. Запишитесь!',
    url: 'https://skinmedclinic.ru/services/aesthetic/face-care',
    siteName: 'Клиника SkinMed',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function FaceCarePage() {
  return <FaceCareClient />;
}
