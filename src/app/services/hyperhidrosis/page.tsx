import { Metadata } from 'next';
import HyperhidrosisClient from './HyperhidrosisClient';

export const metadata: Metadata = {
  title: 'Лечение гипергидроза в Казани | Ботокс от потливости | СкинМед',
  description: 'Лечение повышенной потливости (гипергидроза) инъекциями ботулотоксина в Казани. Подмышки, ладони, стопы — эффект до 8 месяцев. Запишитесь на консультацию в клинику СкинМед.',
  openGraph: {
    title: 'Лечение гипергидроза ботулотоксином — избавьтесь от потливости',
    description: 'Эффективная коррекция повышенного потоотделения препаратами Ботокс и Диспорт. Результат после 1 процедуры, эффект до 8 месяцев.',
    url: 'https://skinmedclinic.ru/services/hyperhidrosis',
    siteName: 'Клиника SkinMed',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function HyperhidrosisPage() {
  return <HyperhidrosisClient />;
}
