import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: "400",
  variable: "--font-roboto",
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
        className={` ${montserrat.variable} ${roboto.variable} font-sans flex items-center flex-col `}
      >
        {children}
      </body>
    </html>
  );
}
