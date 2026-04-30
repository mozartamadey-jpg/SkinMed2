import type { Metadata } from 'next';
import BotulinumTherapyClient from './BotulinumTherapyClient';

export const metadata: Metadata = {
  title: 'Ботулинотерапия в Казани: Диспорт, Ксеомин — коррекция морщин | Клиника «СкинМед»',
  description: 'Ботулинотерапия в Казани — коррекция морщин на лбу, межбровья, «гусиных лапок». Диспорт и Ксеомин. Выгодная стоимость, естественный результат. Запишитесь в клинику «СкинМед».',
};

export default function Page() {
  return <BotulinumTherapyClient />;
}
