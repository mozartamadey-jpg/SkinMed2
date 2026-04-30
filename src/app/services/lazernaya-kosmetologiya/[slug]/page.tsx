import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import LaserServiceTemplate from './LaserServiceTemplate';
import { notFound } from 'next/navigation';

// 1. GENERATE STATIC PARAMS FOR ALL 14 PAGES
export async function generateStaticParams() {
  const dataPath = path.join(process.cwd(), 'src/data/laser-services.json');
  const services = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  return services.map((s: any) => ({
    slug: s.slug,
  }));
}

// 2. DYNAMIC SEO METADATA
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const dataPath = path.join(process.cwd(), 'src/data/laser-services.json');
  const services = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const service = services.find((s: any) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Услуга не найдена | СкинМед',
    };
  }

  return {
    title: `${service.title} в Казани | ${service.device} | СкинМед`,
    description: service.description,
    openGraph: {
      title: `${service.title} - Лучшая цена`,
      description: service.description,
      images: [{ url: service.heroImage }],
    },
  };
}

// 3. SERVER COMPONENT WRAPPER
export default function DynamicLaserServicePage({ params }: { params: { slug: string } }) {
  const dataPath = path.join(process.cwd(), 'src/data/laser-services.json');
  const services = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const serviceData = services.find((s: any) => s.slug === params.slug);

  if (!serviceData) {
    notFound();
  }

  // Passing pure JSON data to the client component Template
  return <LaserServiceTemplate data={serviceData} />;
}
