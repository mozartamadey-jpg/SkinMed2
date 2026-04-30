import { Metadata } from 'next';
import WartRemovalClient from './WartRemovalClient';

export const metadata: Metadata = {
  title: 'Удаление бородавок лазером — быстро и без боли | СкинМед Казань',
  description: 'Лазерное и радиоволновое удаление подошвенных и обычных бородавок в Казани. Удаление в день обращения. Врачи-дерматологи высшей категории.',
  keywords: [
    'удаление бородавок',
    'удаление подошвенной бородавки',
    'удалить бородавку лазером',
    'лечение бородавок казань',
    'удаление вирусных бородавок'
  ],
  openGraph: {
    title: 'Удаление бородавок | Клиника СкинМед',
    description: 'Эффективное лазерное удаление бородавок без крови и длительной реабилитации.',
    url: 'https://skinmedclinic.ru/services/lazernaya-kosmetologiya/udalenie-borodavok',
    type: 'website',
    locale: 'ru_RU',
    images: [{ url: '/images/wart-removal-hero.png', width: 1200, height: 630 }]
  },
  alternates: {
    canonical: '/services/lazernaya-kosmetologiya/udalenie-borodavok'
  }
};

export default function WartRemovalPage() {
  return <WartRemovalClient />;
}
