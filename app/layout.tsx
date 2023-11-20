import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  variable: "--font-montserrat",
});

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
      <body
        className={` ${montserrat.variable} font-sans flex items-center flex-col `}
      >
        {children}
      </body>
    </html>
  );
}
