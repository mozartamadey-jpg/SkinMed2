import type { Metadata } from 'next';
import ContourPlasticsClient from './ContourPlasticsClient';

export const metadata: Metadata = {
  title: 'Контурная пластика лица в Казани — скулы, подбородок, филлеры | Клиника «СкинМед»',
  description: 'Контурная пластика лица в Казани: коррекция скул, подбородка, устранение возрастных изменений. Сертифицированные филлеры Radiesse, Belotero, Neauvia, Эстефил. Бесплатная консультация в клинике «СкинМед».',
};

export default function Page() {
  return <ContourPlasticsClient />;
}
