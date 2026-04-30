import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import LaserCosmetologyCatalogClient from "./LaserCosmetologyCatalogClient";

type LaserService = {
  title: string;
  slug: string;
  category: string;
  priceFrom: string;
  device: string;
  heroImage?: string;
  subtitle?: string;
  description?: string;
};

export const metadata: Metadata = {
  title: "Лазерная косметология в Казани — премиальные процедуры SkinMed",
  description:
    "Лазерная косметология в клинике SkinMed: омоложение, шлифовка, работа с пигментом, сосудами и новообразованиями. Современные лазерные системы и персональный подбор протокола.",
};

export default function Page() {
  const dataPath = path.join(process.cwd(), "src/data/laser-services.json");
  const services = JSON.parse(fs.readFileSync(dataPath, "utf8")) as LaserService[];

  return <LaserCosmetologyCatalogClient services={services} />;
}
