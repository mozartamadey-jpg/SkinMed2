import type { Metadata } from 'next';
import MesotherapyClient from './MesotherapyClient';

export const metadata: Metadata = {
  title: 'Мезотерапия лица в Казани — цена процедуры | Клиника «СкинМед»',
  description: 'Мезотерапия лица в Казани по доступным ценам. Безоперационное омоложение — витаминные коктейли для сияния, увлажнения и лечения пигментации. Запишитесь в клинику «СкинМед».',
};

export default function Page() {
  return <MesotherapyClient />;
}
