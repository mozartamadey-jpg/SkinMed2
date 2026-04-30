import { Metadata } from 'next';
import ScarRemovalClient from './ScarRemovalClient';

export const metadata: Metadata = {
  title: 'Удаление рубцов, шрамов и стрий лазером в Казани — цены | СкинМед',
  description: 'Лазерное удаление рубцов, шрамов и стрий пикосекундным лазером PicoCare и CO2 в клинике СкинМед в Казани. Видимый результат за 1 процедуру. Без боли и длительной реабилитации. Акция до 30 апреля. Звоните +7 (843) 204-55-11.',
};

export default function Page() {
  return <ScarRemovalClient />;
}
