import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { LocationPage } from "@/components/location/location-page";
import { Container } from "@/components/container";
import { BlogArticleHero } from "@/components/blog/blog-hero";
import { ExcerptLead } from "@/components/blog/excerpt-lead";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { BlogContent } from "@/components/blog/blog-content";
import { BlogFaqAccordion } from "@/components/blog/faq-accordion";
import { AuthorCard } from "@/components/blog/author-card";
import { ArticleBottomNav } from "@/components/blog/article-bottom-nav";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { RelatedPosts } from "@/components/blog/related-posts";
import { formatDate } from "@/components/blog/blog-grid";
import { extractFaqItems } from "@/lib/blog/faq";
import { extractHeadings } from "@/lib/blog/toc";
import {
  getAllPublishedSlugs,
  getBlogPost,
  getRelatedPosts,
  getTranslationSlug,
} from "@/lib/blog/queries";
import { blogPostAlternates, blogPostPath, resolveSeoDescription, resolveSeoTitle } from "@/lib/blog/seo";
import { absoluteUrl, pathFor } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllPublishedSlugs("en");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug, "en");
  if (!post) return {};

  const title = resolveSeoTitle(post.seo_title, post.title);
  const description = resolveSeoDescription(post.seo_description, post.excerpt);
  const translationSlug = await getTranslationSlug(slug, "en", "el");
  const alternates = blogPostAlternates({ locale: "en", slug, translationSlug });

  return {
    title: { absolute: title },
    description,
    alternates,
    openGraph: {
      type: "article",
      title,
      description,
      url: alternates.canonical,
      images: post.featured_image_url ? [{ url: absoluteUrl(post.featured_image_url) }] : undefined,
      publishedTime: post.published_at ?? undefined,
      modifiedTime: post.updated_at,
    },
    twitter: { title, description },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug, "en");
  if (!post) notFound();

  const faqItems = extractFaqItems(post.content);
  const headings = extractHeadings(post.content);
  const relatedPosts = await getRelatedPosts(post.slug, post.category, "en", 3);
  const url = absoluteUrl(blogPostPath("en", post.slug));
  const quoteHref = pathFor("getQuote", "en");
  const blogHref = pathFor("blog", "en");

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: resolveSeoDescription(post.seo_description, post.excerpt),
    image: post.featured_image_url ? absoluteUrl(post.featured_image_url) : undefined,
    datePublished: post.published_at ?? post.created_at,
    dateModified: post.updated_at,
    mainEntityOfPage: url,
    url,
    author: post.author
      ? { "@type": "Person", name: post.author.full_name }
      : { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <LocationPage
      pageKey={`blogPost-${post.slug}`}
      url={url}
      locale="en"
      title={resolveSeoTitle(post.seo_title, post.title)}
      description={resolveSeoDescription(post.seo_description, post.excerpt)}
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Blog", href: blogHref },
        { label: post.title },
      ]}
      hero={
        <BlogArticleHero
          category={post.category}
          title={post.title}
          dateLabel={formatDate(post.published_at, "en")}
          readTime={post.read_time}
          authorName={post.author?.full_name ?? null}
        />
      }
      faq={faqItems.length > 0 ? { eyebrow: "FAQ", title: "Frequently Asked Questions", items: faqItems } : undefined}
      extraSchema={[blogPostingJsonLd]}
      cta={{
        heading: "Planning a Trip in Greece? Get Your Transfer Quote.",
        description: "Send us your journey details and we'll help arrange a private transfer for your route.",
        primaryLabel: "Get a Transfer Quote",
        secondaryLabel: "Contact Us",
        secondaryHref: pathFor("contact", "en"),
      }}
    >
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <article className="flex flex-col gap-10 lg:col-span-8">
            {post.excerpt ? <ExcerptLead excerpt={post.excerpt} /> : null}

            <TableOfContents headings={headings} title="Table of Contents" />

            {post.featured_image_url ? (
              <div className="relative aspect-16/9 overflow-hidden rounded-2xl">
                <Image src={post.featured_image_url} alt={post.title} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
              </div>
            ) : null}

            <BlogContent html={post.content} />

            <BlogFaqAccordion items={faqItems} eyebrow="FAQ" title="Frequently Asked Questions" />

            {post.author ? <AuthorCard author={post.author} writtenByLabel="Written By" /> : null}

            <ArticleBottomNav
              allArticlesHref={blogHref}
              allArticlesLabel="All Articles"
              quoteHref={quoteHref}
              quoteLabel="Get a Quote"
            />
          </article>

          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <BlogSidebar locale="en" />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <RelatedPosts
            posts={relatedPosts}
            locale="en"
            hrefFor={(relatedSlug) => blogPostPath("en", relatedSlug)}
            eyebrow="Keep Reading"
            title="Related Articles"
            readMoreLabel="Read More"
          />
        </div>
      </Container>
    </LocationPage>
  );
}
