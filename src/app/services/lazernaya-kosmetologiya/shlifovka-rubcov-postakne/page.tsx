import { Metadata } from 'next';
import PostAcneClient from './PostAcneClient';

export const metadata: Metadata = {
  title: 'Шлифовка рубцов постакне лазером в Казани — цена, отзывы | СкинМед',
  description: 'Эффективное удаление рубцов, шрамов и пятен постакне (после угревой болезни) с помощью фракционного CO2 и эрбиевого лазера. Выравнивание рельефа кожи.',
  keywords: [
    'шлифовка рубцов постакне',
    'удаление постакне лазером',
    'лечение постакне',
    'убрать шрамы от прыщей',
    'фракционная шлифовка лица',
    'лазерная шлифовка постакне'
  ],
  openGraph: {
    title: 'Шлифовка рубцов постакне | Клиника СкинМед',
    description: 'Выравнивание рельефа кожи и удаление следов от прыщей с помощью мощных лазерных систем.',
    url: 'https://skinmedclinic.ru/services/lazernaya-kosmetologiya/shlifovka-rubcov-postakne',
    type: 'website',
    locale: 'ru_RU',
    images: [{ url: '/images/post-acne-hero.png', width: 1200, height: 630 }]
  },
  alternates: {
    canonical: '/services/lazernaya-kosmetologiya/shlifovka-rubcov-postakne'
  }
};

export default function PostAcnePage() {
  return <PostAcneClient />;
}
