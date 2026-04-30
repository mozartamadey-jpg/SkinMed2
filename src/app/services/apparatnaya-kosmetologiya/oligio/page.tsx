import { Metadata } from 'next';
import OligioClient from './OligioClient';

export const metadata: Metadata = {
  title: 'Термолифтинг Oligio в Казани — 7D омоложение | СкинМед',
  description: 'Термолифтинг Oligio в клинике СкинМед. 7D-омоложение, монополярный RF-лифтинг. Подтяжка кожи, уплотнение, сияние. Цены от 15.300₽. Запишитесь!',
};

export default function Page() {
  return <OligioClient />;
}
