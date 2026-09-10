import type { MetadataRoute } from "next";

import { pageRoutes, absoluteUrl, type PageKey } from "@/lib/i18n/routes";
import { locales } from "@/lib/i18n/config";
import { getPublishedPosts, getTranslationSlug } from "@/lib/blog/queries";
import { blogPostPath } from "@/lib/blog/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  // Published blog posts — draft posts are never queried, let alone listed.
  for (const locale of locales) {
    const posts = await getPublishedPosts(locale);

    for (const post of posts) {
      const otherLocale = locale === "en" ? "el" : "en";
      const translationSlug = await getTranslationSlug(post.slug, locale, otherLocale);

      const languages: Record<string, string> = {
        [locale]: absoluteUrl(blogPostPath(locale, post.slug)),
      };
      if (translationSlug) {
        languages[otherLocale] = absoluteUrl(blogPostPath(otherLocale, translationSlug));
      }

      pages.push({
        url: absoluteUrl(blogPostPath(locale, post.slug)),
        lastModified: post.published_at ? new Date(post.published_at) : now,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages },
      });
    }
  }

  return pages;
}
