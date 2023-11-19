import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@fontsource-variable/montserrat";
import "./globals.css";
const montserrat = Montserrat({ subsets: ["latin"] });

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
        className={` ${montserrat.style.fontFamily} flex items-center flex-col `}
      >
        {children}
      </body>
    </html>
  );
}
