import { Metadata } from 'next';
import MoleRemovalClient from './MoleRemovalClient';

export const metadata: Metadata = {
  title: 'Удаление родинок лазером в Казани — цена, консультация дерматолога | СкинМед',
  description: 'Удаление родинок и новообразований лазером CO2 Bison в Казани. Консультация дерматолога-онколога, дерматоскопия, гистология. Без боли и шрамов. Звоните: +7 (843) 204-55-11.',
};

export default function Page() {
  return <MoleRemovalClient />;
}
