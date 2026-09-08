import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";
import "../globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const title =
  "Ιδιωτικές Μεταφορές, Ταξί και Υπηρεσία Σοφέρ στην Ελλάδα – Κλείστε Τώρα";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.descriptionEl,
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: `${siteConfig.url}/el/`,
    siteName: siteConfig.name,
    title,
    description: siteConfig.descriptionEl,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.descriptionEl,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.descriptionEl,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "el",
};

export default function GreekLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="el"
      className={`${dmSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-charcoal">
        <JsonLd id="organization-jsonld" data={organizationJsonLd} />
        <JsonLd id="website-jsonld" data={websiteJsonLd} />
        <SiteHeader locale="el" />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <SiteFooter locale="el" />
        <MobileStickyCta locale="el" />
        <FloatingWhatsApp locale="el" />
      </body>
    </html>
  );
}
