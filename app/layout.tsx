import type { Metadata } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalProvider from "@/components/CalProvider";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal"],
  weight: ["500", "600", "700"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ergoterapi - Autoriseret ergoterapeut",
  description:
    "Styrk din hverdag med skræddersyet ergoterapi. Hjemmebesøg, ergonomi, genoptræning og rådgivning om hjælpemidler.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="da">
      <body className={`${newsreader.variable} ${publicSans.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--color-sage-dark)] focus:px-4 focus:py-2 focus:text-white"
        >
          Spring til indhold
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <CalProvider />
      </body>
    </html>
  );
}
