import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-family",
  subsets: ["latin", "cyrillic"],
});

const bitcountInk = localFont({
  src: "../public/fonts/BitcountInk.ttf",
  variable: "--second-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Applovis | Digital Agency",
  description: "Web, Mobile & Software Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${oswald.variable} ${bitcountInk.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}