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
  const slugs = await getAllPublishedSlugs("el");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug, "el");
  if (!post) return {};

  const title = resolveSeoTitle(post.seo_title, post.title);
  const description = resolveSeoDescription(post.seo_description, post.excerpt);
  const translationSlug = await getTranslationSlug(slug, "el", "en");
  const alternates = blogPostAlternates({ locale: "el", slug, translationSlug });

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

export default async function BlogPostPageEl({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug, "el");
  if (!post) notFound();

  const faqItems = extractFaqItems(post.content);
  const headings = extractHeadings(post.content);
  const relatedPosts = await getRelatedPosts(post.slug, post.category, "el", 3);
  const url = absoluteUrl(blogPostPath("el", post.slug));
  const quoteHref = pathFor("getQuote", "el");
  const blogHref = pathFor("blog", "el");

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
      locale="el"
      title={resolveSeoTitle(post.seo_title, post.title)}
      description={resolveSeoDescription(post.seo_description, post.excerpt)}
      breadcrumbItems={[
        { label: "Αρχική", href: "/el/" },
        { label: "Blog", href: blogHref },
        { label: post.title },
      ]}
      hero={
        <BlogArticleHero
          category={post.category}
          title={post.title}
          dateLabel={formatDate(post.published_at, "el")}
          readTime={post.read_time}
          authorName={post.author?.full_name ?? null}
        />
      }
      faq={faqItems.length > 0 ? { eyebrow: "Συχνές Ερωτήσεις", title: "Συχνές Ερωτήσεις", items: faqItems } : undefined}
      extraSchema={[blogPostingJsonLd]}
      cta={{
        heading: "Σχεδιάζετε Ταξίδι στην Ελλάδα; Ζητήστε την Προσφορά σας.",
        description: "Στείλτε μας τα στοιχεία του ταξιδιού σας και θα σας βοηθήσουμε να οργανώσετε μια ιδιωτική μεταφορά για τη διαδρομή σας.",
        primaryLabel: "Ζητήστε Προσφορά Μεταφοράς",
        secondaryLabel: "Επικοινωνήστε Μαζί μας",
        secondaryHref: pathFor("contact", "el"),
      }}
    >
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <article className="flex flex-col gap-10 lg:col-span-8">
            {post.excerpt ? <ExcerptLead excerpt={post.excerpt} /> : null}

            <TableOfContents headings={headings} title="Πίνακας Περιεχομένων" />

            {post.featured_image_url ? (
              <div className="relative aspect-16/9 overflow-hidden rounded-2xl">
                <Image src={post.featured_image_url} alt={post.title} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
              </div>
            ) : null}

            <BlogContent html={post.content} />

            <BlogFaqAccordion items={faqItems} eyebrow="Συχνές Ερωτήσεις" title="Συχνές Ερωτήσεις" />

            {post.author ? <AuthorCard author={post.author} writtenByLabel="Συγγραφέας" /> : null}

            <ArticleBottomNav
              allArticlesHref={blogHref}
              allArticlesLabel="Όλα τα Άρθρα"
              quoteHref={quoteHref}
              quoteLabel="Ζητήστε Προσφορά"
            />
          </article>

          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <BlogSidebar locale="el" />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <RelatedPosts
            posts={relatedPosts}
            locale="el"
            hrefFor={(relatedSlug) => blogPostPath("el", relatedSlug)}
            eyebrow="Συνεχίστε την Ανάγνωση"
            title="Σχετικά Άρθρα"
            readMoreLabel="Διαβάστε Περισσότερα"
          />
        </div>
      </Container>
    </LocationPage>
  );
}
