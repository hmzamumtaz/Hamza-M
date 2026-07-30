import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Hamza M. — UX/UI Designer",
  description:
    "AI-driven UX/UI Designer at Procter & Gamble. Crafting intuitive digital experiences through research, prototyping, and data-informed design.",
  keywords: [
    "UX Designer",
    "UI Designer",
    "Hamza Mumtaz",
    "Portfolio",
    "Figma",
    "Procter & Gamble",
    "Google UX",
    "AI Design",
  ],
  openGraph: {
    title: "Hamza M. — UX/UI Designer",
    description:
      "AI-driven UX/UI Designer at Procter & Gamble. Crafting intuitive digital experiences through research, prototyping, and data-informed design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
