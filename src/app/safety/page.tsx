import SafetyClient from './SafetyClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | SkinMed',
  description: 'Политика в отношении обработки персональных данных посетителей веб-сайта skinmedclinic.ru',
};

export default function SafetyPage() {
  return <SafetyClient />;
}
