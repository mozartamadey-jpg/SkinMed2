import { Metadata } from 'next';
import TattooRemovalClient from './TattooRemovalClient';

export const metadata: Metadata = {
  title: 'Удаление татуажа и перманентного макияжа лазером PicoCare | СкинМед',
  description: 'Бесследное удаление татуажа бровей, губ и век пикосекундным лазером PicoCare в Казани. Без шрамов и ожогов, сохранение роста волосков.',
  keywords: [
    'удаление татуажа',
    'лазерное удаление татуажа',
    'удаление перманентного макияжа',
    'удаление татуажа бровей',
    'удалить татуаж губ',
    'picocare казань'
  ],
  openGraph: {
    title: 'Удаление татуажа | Клиника СкинМед',
    description: 'Удаление татуажа бровей, век и губ на пикосекундном лазере последнего поколения.',
    url: 'https://skinmedclinic.ru/services/lazernaya-kosmetologiya/udalenie-tatuazha',
    type: 'website',
    locale: 'ru_RU',
    images: [{ url: '/images/tattoo-removal-hero.png', width: 1200, height: 630 }]
  },
  alternates: {
    canonical: '/services/lazernaya-kosmetologiya/udalenie-tatuazha'
  }
};

export default function TattooRemovalPage() {
  return <TattooRemovalClient />;
}
