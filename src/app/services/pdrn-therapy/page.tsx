import { Metadata } from 'next';
import PdrnTherapyClient from './PdrnTherapyClient';

export const metadata: Metadata = {
  title: 'PDRN-терапия в Казани | Полинуклеотиды для кожи | СкинМед',
  description: 'PDRN-терапия (полинуклеотиды) — инновационная процедура клеточного омоложения кожи в Казани. Регенерация на уровне ДНК. Запишитесь на консультацию в клинику СкинМед.',
  openGraph: {
    title: 'PDRN-терапия — регенерация кожи на клеточном уровне',
    description: 'Полинуклеотидная терапия для глубокого восстановления и омоложения кожи. Инновационные препараты на основе ДНК лосося.',
    url: 'https://skinmedclinic.ru/services/pdrn-therapy',
    siteName: 'Клиника SkinMed',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function PdrnTherapyPage() {
  return <PdrnTherapyClient />;
}
