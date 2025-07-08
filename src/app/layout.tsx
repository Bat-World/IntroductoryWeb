import type { Metadata } from "next";
import "./globals.css"; 
import { Anton } from 'next/font/google';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

export const metadata: Metadata = {
  title: "Evt Ers LLC",
  description: "ТӨМӨР БЕТОН ЭДЛЭЛИЙН ҮЙЛДВЭР‌",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
