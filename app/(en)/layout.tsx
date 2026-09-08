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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Greece Taxi & Private Transfers | Airport & City Transfers",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Greece Taxi & Private Transfers | Airport & City Transfers",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Greece Taxi & Private Transfers | Airport & City Transfers",
    description: siteConfig.description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "en",
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-charcoal">
        <JsonLd id="organization-jsonld" data={organizationJsonLd} />
        <JsonLd id="website-jsonld" data={websiteJsonLd} />
        <SiteHeader locale="en" />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <SiteFooter locale="en" />
        <MobileStickyCta locale="en" />
        <FloatingWhatsApp locale="en" />
      </body>
    </html>
  );
}
