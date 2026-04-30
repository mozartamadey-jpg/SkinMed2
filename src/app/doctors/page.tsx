import { Metadata } from "next";
import DoctorsClient from "./DoctorsClient";

export const metadata: Metadata = {
  title: "Врачи клиники SkinMed | Косметологи, дерматологи, трихологи Казань",
  description: "Команда экспертов клиники SkinMed в Казане. Кандидаты медицинских наук, врачи с опытом 8-22 года. Дерматологи, косметологи, трихологи, неврологи и онкологи. Запишитесь на консультацию.",
  keywords: ["врачи косметологи Казань", "дерматологи Казань", "трихологи", "неврологи", "клиника SkinMed"],
};

export default function DoctorsPage() {
  return <DoctorsClient />;
}
