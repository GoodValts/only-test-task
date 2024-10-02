import { PT_Sans } from "next/font/google";

import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Only. test task",
  description: "History events page",
};

const ptSans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ptSans.className}>
      <body>{children}</body>
    </html>
  );
}
