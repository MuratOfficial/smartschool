import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource-variable/montserrat";
import "./globals.css";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "SmartSchool",
  description: "Центр по подготовке к международному экзамену IELTS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="flex items-center flex-col overflow-x-hidden ">
        {children}
      </body>
    </html>
  );
}
