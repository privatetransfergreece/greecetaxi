import { cache } from "react"

import { createPublicClient } from "@/lib/supabase/public-client"
import type { BlogLanguage } from "@/lib/supabase/types"

export type BlogListItem = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  featured_image_url: string | null
  category: string
  published_at: string | null
  read_time: string | null
}

export type BlogPostAuthor = {
  id: string
  full_name: string
  email: string
  avatar_url: string | null
  bio: string | null
}

export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  featured_image_url: string | null
  category: string
  tags: string[]
  status: "draft" | "published"
  read_time: string | null
  seo_title: string | null
  seo_description: string | null
  focus_keyword: string | null
  language: BlogLanguage
  translation_of: string | null
  created_at: string
  updated_at: string
  published_at: string | null
  author: BlogPostAuthor | null
}

const LIST_COLUMNS =
  "id, title, slug, excerpt, featured_image_url, category, published_at, read_time"

const POST_COLUMNS = `
  id,
  title,
  slug,
  excerpt,
  content,
  featured_image_url,
  category,
  tags,
  status,
  read_time,
  seo_title,
  seo_description,
  focus_keyword,
  language,
  translation_of,
  created_at,
  updated_at,
  published_at,
  author:bloggers(
    id,
    full_name,
    email,
    avatar_url,
    bio
  )
`

/** Listing-page query. Deliberately excludes `content` — cards never need it. */
export async function getPublishedPosts(language: BlogLanguage): Promise<BlogListItem[]> {
  const supabase = createPublicClient()

  const { data, error } = await supabase
    .from("blogs")
    .select(LIST_COLUMNS)
    .eq("status", "published")
    .eq("language", language)
    .order("published_at", { ascending: false })

  if (error) {
    console.error("getPublishedPosts failed:", error.message)
    return []
  }

  return data ?? []
}

/** For generateStaticParams — slugs only, nothing else. */
export async function getAllPublishedSlugs(language: BlogLanguage): Promise<string[]> {
  const supabase = createPublicClient()

  const { data, error } = await supabase
    .from("blogs")
    .select("slug")
    .eq("status", "published")
    .eq("language", language)

  if (error) {
    console.error("getAllPublishedSlugs failed:", error.message)
    return []
  }

  return (data ?? []).map((row) => row.slug)
}

/**
 * Shared between generateMetadata() and the page body via React cache() so
 * a single request only hits Supabase once per (slug, language).
 */
export const getBlogPost = cache(async (slug: string, language: BlogLanguage): Promise<BlogPost | null> => {
  const supabase = createPublicClient()

  const { data, error } = await supabase
    .from("blogs")
    .select(POST_COLUMNS)
    .eq("slug", slug)
    .eq("language", language)
    .eq("status", "published")
    .maybeSingle()

  if (error) {
    console.error("getBlogPost failed:", error.message)
    return null
  }

  if (!data) return null

  // Supabase infers the FK join as an array in its generated types unless a
  // generated schema pins it to one-to-one; normalize to a single object.
  const author = Array.isArray(data.author) ? data.author[0] ?? null : data.author

  return { ...data, author } as BlogPost
})

/**
 * Looks up the published sibling of `slug` in `targetLanguage`, following
 * `translation_of` in whichever direction applies. Returns null (never a
 * guess) when no published sibling exists — callers must not emit an
 * hreflang/alternate link for a slug this returns null for.
 */
export const getTranslationSlug = cache(
  async (slug: string, language: BlogLanguage, targetLanguage: BlogLanguage): Promise<string | null> => {
    const supabase = createPublicClient()

    // Case 1: `slug` is the original and the sibling points back at it.
    const bySibling = await supabase
      .from("blogs")
      .select("slug")
      .eq("translation_of", slug)
      .eq("language", targetLanguage)
      .eq("status", "published")
      .maybeSingle()

    if (bySibling.data) return bySibling.data.slug

    // Case 2: `slug` is itself a translation — look up what it points to,
    // then confirm that original is published in the target language.
    const current = await supabase
      .from("blogs")
      .select("translation_of")
      .eq("slug", slug)
      .eq("language", language)
      .maybeSingle()

    const originalSlug = current.data?.translation_of
    if (!originalSlug) return null

    const original = await supabase
      .from("blogs")
      .select("slug")
      .eq("slug", originalSlug)
      .eq("language", targetLanguage)
      .eq("status", "published")
      .maybeSingle()

    return original.data?.slug ?? null
  }
)

/**
 * Up to `limit` other published posts in the same language, prioritizing
 * category matches (recency as the tiebreaker/fallback) over just the
 * latest posts regardless of topic.
 */
export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  language: BlogLanguage,
  limit = 3
): Promise<BlogListItem[]> {
  const supabase = createPublicClient()

  const { data: sameCategory, error: sameCategoryError } = await supabase
    .from("blogs")
    .select(LIST_COLUMNS)
    .eq("status", "published")
    .eq("language", language)
    .eq("category", category)
    .neq("slug", currentSlug)
    .order("published_at", { ascending: false })
    .limit(limit)

  if (sameCategoryError) {
    console.error("getRelatedPosts failed:", sameCategoryError.message)
    return []
  }

  const results = [...(sameCategory ?? [])]
  if (results.length >= limit) return results

  const { data: fallback, error: fallbackError } = await supabase
    .from("blogs")
    .select(LIST_COLUMNS)
    .eq("status", "published")
    .eq("language", language)
    .neq("slug", currentSlug)
    .not("category", "eq", category)
    .order("published_at", { ascending: false })
    .limit(limit - results.length)

  if (fallbackError) {
    console.error("getRelatedPosts fallback failed:", fallbackError.message)
    return results
  }

  return [...results, ...(fallback ?? [])]
}
