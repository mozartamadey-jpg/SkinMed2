import { Metadata } from 'next';
import AcneTreatmentClient from './AcneTreatmentClient';

export const metadata: Metadata = {
  title: 'Лечение акне лазером в Казани — цена, консультация | СкинМед',
  description: 'Эффективное аппаратное и лазерное лечение акне в клинике СкинМед. Современное оборудование, врачи-дерматологи. Без боли и рубцов. Индивидуальный подход.',
  keywords: [
    'лечение акне',
    'удаление акне',
    'фотоомоложение акне',
    'лечение угрей Казань',
    'клиника СкинМед',
    'дерматолог акне Казань'
  ],
  openGraph: {
    title: 'Лечение акне | Клиника СкинМед',
    description: 'Лазерное лечение акне на современном оборудовании с гарантией результата.',
    url: 'https://skinmedclinic.ru/services/lazernaya-kosmetologiya/lechenie-akne',
    type: 'website',
    locale: 'ru_RU',
    images: [{ url: '/images/acne-treatment-hero.png', width: 1200, height: 630 }]
  },
  alternates: {
    canonical: '/services/lazernaya-kosmetologiya/lechenie-akne'
  }
};

export default function AcneTreatmentPage() {
  return <AcneTreatmentClient />;
}
