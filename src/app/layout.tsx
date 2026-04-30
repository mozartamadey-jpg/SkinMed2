import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import BookingModal from "@/components/BookingModal";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["200", "300", "400"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-heading", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "СкинМед | Премиальная косметология",
  description: "Умная косметология. Доказательная медицина.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${outfit.variable} ${playfair.variable} font-sans bg-[#e4eaf0] text-slate-800 font-extralight selection:bg-[#60c2ff] selection:text-white relative overflow-x-hidden min-h-screen antialiased`}>
        <SmoothScrollProvider>
          {children}
          <BookingModal />
          <CookieBanner />
        </SmoothScrollProvider>
      </body>

    </html>
  );
}
