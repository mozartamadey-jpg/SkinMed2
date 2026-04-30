import { Metadata } from 'next';
import UltheraClient from './UltheraClient';

export const metadata: Metadata = {
  title: 'СМАС лифтинг Альтера (Ulthera) в Казани — лучшая цена | СкинМед',
  description: 'СМАС (SMAS) лифтинг Альтера в клинике Скинмед. Подтяжка овала, нижней трети лица, второго подбородка, устранение нависания век без операции. Лучшая цена. Звоните 204 55 11!',
};

export default function Page() {
  return <UltheraClient />;
}
