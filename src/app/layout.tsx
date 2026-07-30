import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamza M. — UX/UI Designer",
  description:
    "AI-driven UX/UI Designer at Procter & Gamble. Crafting intuitive digital experiences through research, prototyping, and data-informed design.",
  keywords: [
    "UX Designer",
    "UI Designer",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
