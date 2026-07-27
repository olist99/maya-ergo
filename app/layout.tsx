import type { Metadata, Viewport } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalProvider from "@/components/CalProvider";
import { CookieConsentProvider } from "@/components/CookieConsentProvider";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { business } from "@/lib/business";

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

const siteUrl = "https://sikkerhavnergoterapi.dk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sikker Havn Ergoterapi - Autisme, sanseforstyrrelser og belastningsreaktioner",
    template: "%s - Sikker Havn Ergoterapi",
  },
  description:
    "Ergoterapeutisk hjælp til børn, unge og voksne med neurodivergens, sanseforstyrrelser og belastningsreaktioner. Psykoedukation, mestringsforløb og samtaleterapi.",
  openGraph: {
    title: "Sikker Havn Ergoterapi",
    description: "Autisme, sanseforstyrrelser, belastningsreaktioner, psykoedukation og samtaleterapi.",
    url: siteUrl,
    siteName: business.practiceName,
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sikker Havn Ergoterapi",
    description: "Autisme, sanseforstyrrelser, belastningsreaktioner, psykoedukation og samtaleterapi.",
  },
};

export const viewport: Viewport = {
  themeColor: "#465438",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: business.practiceName,
  description:
    "Ergoterapeutisk praksis med fokus på neurodivergens, sanseforstyrrelser, belastningsreaktioner, psykoedukation og samtaleterapi.",
  url: siteUrl,
  telephone: business.phoneHref.replace("tel:", ""),
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address,
    postalCode: business.postalCode,
    addressLocality: business.city,
    addressCountry: "DK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="da">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className={`${newsreader.variable} ${publicSans.variable} antialiased`}>
        <CookieConsentProvider>
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
          <CookieConsentBanner />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
