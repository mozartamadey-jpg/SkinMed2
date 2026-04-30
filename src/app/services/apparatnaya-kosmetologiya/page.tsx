import { Metadata } from 'next';
import HardwareCosmetologyClient from './HardwareCosmetologyClient';

export const metadata: Metadata = {
  title: 'Аппаратная косметология в Казани — экспертная клиника СкинМед',
  description: 'Клиника СкинМед — эксперт в аппаратной и лазерной косметологии. SMAS-лифтинг, Oligio, PicoCare, термолифтинг, лазерное омоложение, фотоомоложение IPL, RF-лифтинг, ультразвуковая чистка. Решаем возрастные и эстетические задачи. Запишитесь онлайн!',
};

export default function Page() {
  return <HardwareCosmetologyClient />;
}
