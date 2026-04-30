import { Metadata } from 'next';
import MensCosmetologyClient from './MensCosmetologyClient';

export const metadata: Metadata = {
  title: 'Мужская косметология в Казани — уход за кожей для мужчин | СкинМед',
  description: 'Косметология для мужчин в Казани. Коррекция морщин, лечение акне, удаление пигментации, лазерная шлифовка. Профессиональные врачи клиники СкинМед.',
  openGraph: {
    title: 'Мужская косметология | СкинМед Казань',
    description: 'Премиальные косметологические процедуры для мужчин — от коррекции морщин до лечения алопеции.',
    url: 'https://skinmedclinic.ru/services/mens-cosmetology',
    siteName: 'Клиника SkinMed', locale: 'ru_RU', type: 'website',
  },
};

export default function MensCosmetologyPage() {
  return <MensCosmetologyClient />;
}
