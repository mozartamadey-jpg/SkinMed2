import RegulatoryClient from './RegulatoryClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контролирующие органы | SkinMed',
  description: 'Сведения о контролирующих органах и ведомствах Республики Татарстан.',
};

export default function RegulatoryPage() {
  return <RegulatoryClient />;
}
