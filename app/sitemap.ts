import type { MetadataRoute } from "next";

import { pageRoutes, absoluteUrl, type PageKey } from "@/lib/i18n/routes";
import { locales } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [];

  (Object.keys(pageRoutes) as PageKey[]).forEach((page) => {
    const routes = pageRoutes[page];

    locales.forEach((locale) => {
      pages.push({
        url: absoluteUrl(routes[locale]),
        lastModified: now,
        changeFrequency: page === "home" ? "weekly" : "monthly",
        priority: page === "home" ? 1 : 0.7,
        alternates: {
          languages: {
            en: absoluteUrl(routes.en),
            el: absoluteUrl(routes.el),
          },
        },
      });
    });
  });

  return pages;
}
