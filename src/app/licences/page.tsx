import type { Metadata } from "next";
import LicencesClient from "./LicencesClient";

export const metadata: Metadata = {
  title: "Лицензии и сертификаты | Клиника СкинМед Казань",
  description: "Лицензии и сертификаты клиники косметологии СкинМед в Казани. Все документы подтверждают право на осуществление медицинской деятельности.",
};

export default function LicencesPage() {
  return <LicencesClient />;
}
