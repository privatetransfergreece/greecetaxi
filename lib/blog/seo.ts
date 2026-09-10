import { absoluteUrl, pathFor } from "@/lib/i18n/routes"
import type { Locale } from "@/lib/i18n/config"

/** `/blog/{slug}/` or `/el/blog/{slug}/`, respecting the site's trailing-slash convention. */
export function blogPostPath(locale: Locale, slug: string): string {
  return `${pathFor("blog", locale)}${slug}/`
}

/**
 * Canonical + hreflang for one article. Only includes a language entry
 * when that language's copy actually exists and is published — per rule,
 * never emit an hreflang URL that might 404. `x-default` follows the
 * site-wide convention of pointing at English when an English copy
 * exists, falling back to the current locale's own URL otherwise.
 */
export function blogPostAlternates({
  locale,
  slug,
  translationSlug,
}: {
  locale: Locale
  slug: string
  /** The other locale's slug for this post, or null if no published sibling exists. */
  translationSlug: string | null
}) {
  const otherLocale: Locale = locale === "en" ? "el" : "en"
  const currentUrl = absoluteUrl(blogPostPath(locale, slug))

  const languages: Partial<Record<Locale | "x-default", string>> = {
    [locale]: currentUrl,
  }

  if (translationSlug) {
    languages[otherLocale] = absoluteUrl(blogPostPath(otherLocale, translationSlug))
  }

  languages["x-default"] = languages.en ?? currentUrl

  return {
    canonical: currentUrl,
    languages,
  }
}

/** seo_title falls back to the article title; seo_description to the excerpt. */
export function resolveSeoTitle(seoTitle: string | null, title: string): string {
  return seoTitle?.trim() || title
}

export function resolveSeoDescription(seoDescription: string | null, excerpt: string | null): string {
  return seoDescription?.trim() || excerpt?.trim() || ""
}
