import { Metadata } from 'next';
import UltrasonicCleanClient from './UltrasonicCleanClient';

export const metadata: Metadata = {
  title: 'Ультразвуковая чистка лица в Казани — УЗ-чистка | СкинМед',
  description: 'Ультразвуковая чистка лица в клинике СкинМед. Деликатное очищение кожи без боли и восстановления. Цены от 1.800₽. Звоните 204 55 11!',
};

export default function Page() {
  return <UltrasonicCleanClient />;
}
