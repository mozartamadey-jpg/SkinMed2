import type { Metadata } from 'next';
import BiorevitalizationClient from './BiorevitalizationClient';

export const metadata: Metadata = {
  title: 'Биоревитализация лица в Казани — эффективное увлажнение и омоложение кожи | Клиника «СкинМед»',
  description: 'Биоревитализация лица в Казани — процедура, способная вернуть коже молодость и свежий вид. Инъекции гиалуроновой кислоты для упругости и здорового сияния. Цены и запись в клинику «СкинМед».',
};

export default function Page() {
  return <BiorevitalizationClient />;
}
