import { Metadata } from 'next';
import PhotoRejuvenationClient from './PhotoRejuvenationClient';

export const metadata: Metadata = {
  title: 'Фотоомоложение IPL в Казани за 15.900₽ + БИОревитализация в подарок | СкинМед',
  description: 'Фотоомоложение IPL в клинике СкинМед. Удаление пигментации, сосудов, покраснений. Улучшение цвета лица. Цена 15.900₽. Запишитесь!',
};

export default function Page() {
  return <PhotoRejuvenationClient />;
}
