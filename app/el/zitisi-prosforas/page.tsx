import type { Metadata } from "next";

import { QuotePage } from "@/components/quote/quote-page";
import { quoteContent } from "@/content/quote";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";

const { meta } = quoteContent.el;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("getQuote", "el"),
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: absoluteUrl(pathFor("getQuote", "el")),
  },
  twitter: { title: meta.title, description: meta.description },
};

export default function GetQuotePageEl() {
  return <QuotePage locale="el" />;
}
