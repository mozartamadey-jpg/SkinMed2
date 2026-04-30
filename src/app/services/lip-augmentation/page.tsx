import { Metadata } from 'next';
import LipAugmentationClient from './LipAugmentationClient';

export const metadata: Metadata = {
  title: 'Увеличение губ в Казани | Природный эффект без утиных губ',
  description: 'Процедура контурной пластики губ филлерами. Добавим объём, скорректируем асимметрию, чётче обозначим контур. Естественный результат и премиальные препараты (Stylage, Belotero).',
  openGraph: {
    title: 'Увеличение губ: Естественность и Гармония',
    description: 'Опытные врачи-косметологи СкинМед сделают ваши губы объемнее на 30%. Пройдите короткий тест и получите консультацию и анестезию в подарок!',
    images: [{ url: '/images/og/lips-augmentation.jpg' }],
  },
};

export default function LipAugmentationPage() {
  return <LipAugmentationClient />;
}
