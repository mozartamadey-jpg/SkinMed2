import GiftCertificateClient from './GiftCertificateClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Подарочные сертификаты | SkinMed',
  description: 'Подарите возможность стать еще прекраснее. Подарочный сертификат на процедуры в клинику современной косметологии SkinMed — это проявление истинного внимания и заботы.',
  openGraph: {
    title: 'Подарочные сертификаты | SkinMed',
    description: 'Подарите возможность стать еще прекраснее. Подарочный сертификат на процедуры в клинику SkinMed.',
    url: 'https://skinmedclinic.ru/podarok_lubimoy',
    siteName: 'SkinMed Clinic',
    images: [
      {
        url: '/images/gifts/hero.png',
        width: 1200,
        height: 630,
        alt: 'Подарочные сертификаты SkinMed',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function GiftCertificatePage() {
  return <GiftCertificateClient />;
}
