import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource-variable/montserrat";
import "./globals.css";
import Favicon from "@/public/favicon.ico";
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "IELTS Smart School - Центр подготовки к экзамену IELTS в Алматы",
  description:
    " Групповые и индивидуальные занятия по подготовке к IELTS по всему Казахстану ✅ Оффлайн и Онлайн ➡️ Записывайтесь уже сегодня!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="flex items-center flex-col ">{children}</body>
    </html>
  );
}
