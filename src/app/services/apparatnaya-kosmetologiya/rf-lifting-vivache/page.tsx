import { Metadata } from 'next';
import VivaceClient from './VivaceClient';

export const metadata: Metadata = {
  title: 'RF-лифтинг Vivace в Казани — микроигольчатый RF нового поколения | СкинМед',
  description: 'Микроигольчатый RF-лифтинг Vivace в клинике СкинМед. Радиочастотный лифтинг, стимуляция коллагена, упругость кожи. Цены, отзывы. Звоните 204 55 11!',
};

export default function Page() {
  return <VivaceClient />;
}
