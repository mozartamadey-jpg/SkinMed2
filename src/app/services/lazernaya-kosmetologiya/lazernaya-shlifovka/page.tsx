import { Metadata } from 'next';
import LaserShlifovkaClient from './LaserShlifovkaClient';

export const metadata: Metadata = {
  title: 'Лазерная шлифовка лица PicoCare, цены в Казани – шлифовка лица лазером | СкинМед',
  description: 'Лазерная шлифовка лица PicoCare в клинике СкинМед. Акция! Лицо и зона вокруг глаз за 34.000₽, шея в подарок. Результат за 1 процедуру. Отзывы, фото до и после. Звоните 204-55-11!',
};

export default function Page() {
  return <LaserShlifovkaClient />;
}
