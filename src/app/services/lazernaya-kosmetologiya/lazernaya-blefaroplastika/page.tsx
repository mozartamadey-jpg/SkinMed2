import { Metadata } from 'next';
import LaserBlepharoClient from './LaserBlepharoClient';

export const metadata: Metadata = {
  title: 'Лазерная блефаропластика в Казани — безоперационная подтяжка век | СкинМед',
  description: 'Лазерная блефаропластика в СкинМед. Устраняем мешки под глазами, морщины и нависание верхних век без скальпеля. Быстрый результат и короткая реабилитация. Фото до и после.',
};

export default function Page() {
  return <LaserBlepharoClient />;
}
