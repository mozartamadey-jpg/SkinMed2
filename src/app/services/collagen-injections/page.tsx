import { Metadata } from 'next';
import CollagenInjectionsClient from './CollagenInjectionsClient';

export const metadata: Metadata = {
  title: 'Инъекции коллагена в Казани | Коллагенотерапия | СкинМед',
  description: 'Инъекции коллагена для восстановления молодости и упругости кожи в Казани. Биостимуляция выработки собственного коллагена. Запишитесь на консультацию в клинику СкинМед.',
  openGraph: {
    title: 'Инъекции коллагена — биостимуляция обновления кожи',
    description: 'Коллагенотерапия препаратами нового поколения. Естественное омоложение, повышение тургора и эластичности кожи.',
    url: 'https://skinmedclinic.ru/services/collagen-injections',
    siteName: 'Клиника SkinMed',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function CollagenInjectionsPage() {
  return <CollagenInjectionsClient />;
}
