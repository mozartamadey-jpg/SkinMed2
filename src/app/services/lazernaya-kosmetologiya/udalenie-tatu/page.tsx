import { Metadata } from 'next';
import TattooRemovalClient from './TattooRemovalClient';

export const metadata: Metadata = {
  title: 'Удаление татуировок "холодным" лазером PicoCare в Казани | СкинМед',
  description: 'Удалите татуировку и тату любого цвета и размера в Казани без ожогов и шрамов со 100% гарантией результата! Акция: минус 30% на удаление тату "холодным" лазером PicoCare. Звоните и записывайтесь: +7 (843) 204-55-11.',
};

export default function Page() {
  return <TattooRemovalClient />;
}
