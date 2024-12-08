// Import de tout ce qui sera dans toutes les pages de l'app 

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-caption",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Charlène Oget . Développeuse Web",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(GeistSans.variable, playfair, "font-sans h-full bg-background text-foreground")}
      >
        {children}
      </body>
    </html>
  );
}
