import { Metadata } from 'next';
import PapillomaRemovalClient from './PapillomaRemovalClient';

export const metadata: Metadata = {
  title: 'Удаление папиллом лазером в Казани — цена, консультация | СкинМед',
  description: 'Безопасное и быстрое лазерное удаление папиллом на лице и теле в клинике СкинМед. Без боли и крови. Опытные врачи-дерматовенерологи, современное оборудование.',
  keywords: [
    'удаление папиллом',
    'удаление папиллом лазером',
    'лазерное удаление папиллом',
    'удалить папиллому казань',
    'удаление новообразований'
  ],
  openGraph: {
    title: 'Удаление папиллом | Клиника СкинМед',
    description: 'Безопасное лазерное удаление папиллом. Без шрамов, быстрое заживление.',
    url: 'https://skinmedclinic.ru/services/lazernaya-kosmetologiya/udalenie-papillom',
    type: 'website',
    locale: 'ru_RU',
    images: [{ url: '/images/papilloma-removal-hero.png', width: 1200, height: 630 }]
  },
  alternates: {
    canonical: '/services/lazernaya-kosmetologiya/udalenie-papillom'
  }
};

export default function PapillomaRemovalPage() {
  return <PapillomaRemovalClient />;
}
