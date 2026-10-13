import type { Metadata } from "next";
import { Arimo, Press_Start_2P } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  variable: "--font-family",
  subsets: ["latin", "cyrillic"], 
});

const pressStart2P = Press_Start_2P({
  variable: "--second-family",
  subsets: ["latin"],
  weight: "400",
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
    <html lang="uk" className={`${arimo.variable} ${pressStart2P.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}