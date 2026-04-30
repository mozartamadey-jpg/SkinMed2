import { Metadata } from 'next';
import LaserRejuvenationClient from './LaserRejuvenationClient';

export const metadata: Metadata = {
  title: 'Лазерное омоложение лица PicoCare в Казани — подтянутая и сияющая кожа | СкинМед',
  description: 'Лазерное омоложение на пикосекундном лазере PicoCare в СкинМед — устраняем морщины, пигментные пятна, сужаем поры, улучшаем цвет лица. Результат после 1 процедуры. Фото до и после.',
};

export default function Page() {
  return <LaserRejuvenationClient />;
}
