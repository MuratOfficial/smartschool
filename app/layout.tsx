import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "./Montserrat-Medium.ttf" });

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
        className={` ${myFont.style.fontFamily} flex items-center flex-col `}
      >
        {children}
      </body>
    </html>
  );
}
