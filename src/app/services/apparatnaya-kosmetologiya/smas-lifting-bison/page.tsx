import { Metadata } from 'next';
import BisonSmasClient from './BisonSmasClient';

export const metadata: Metadata = {
  title: 'SMAS-лифтинг Bizon в Казани — безоперационное омоложение | СкинМед',
  description: 'SMAS-лифтинг CO2 Bison в клинике СкинМед. Глубокая подтяжка овала, брылей, компактизация лица. Эффект до 1,5-2 лет. Запишитесь 204 55 11!',
};

export default function Page() {
  return <BisonSmasClient />;
}
