import type { Metadata } from "next";

import { LocationPage } from "@/components/location/location-page";
import { BlogHubHero } from "@/components/blog/blog-hero";
import { BlogGrid } from "@/components/blog/blog-grid";
import { BlogFaqAccordion } from "@/components/blog/faq-accordion";
import { blogHubContent } from "@/content/blog-hub";
import { getPublishedPosts } from "@/lib/blog/queries";
import { blogPostPath } from "@/lib/blog/seo";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";

export const revalidate = 3600;

const content = blogHubContent.en;

export const metadata: Metadata = {
  title: { absolute: content.meta.title },
  description: content.meta.description,
  alternates: localizedAlternates("blog", "en"),
  openGraph: { title: content.meta.title, description: content.meta.description, url: absoluteUrl(pathFor("blog", "en")) },
  twitter: { title: content.meta.title, description: content.meta.description },
};

export default async function BlogHubPage() {
  const posts = await getPublishedPosts("en");

  return (
    <LocationPage
      pageKey="blog"
      locale="en"
      title={content.meta.title}
      description={content.meta.description}
      breadcrumbItems={[{ label: "Home", href: "/" }, { label: content.breadcrumbLabel }]}
      hero={<BlogHubHero eyebrow={content.hero.eyebrow} title={content.hero.title} description={content.hero.description} />}
      faq={content.faq}
      cta={{
        heading: "Ready to Book Your Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Get a Free Quote",
        secondaryLabel: "Contact Us",
        secondaryHref: pathFor("contact", "en"),
      }}
    >
      <BlogGrid
        posts={posts}
        locale="en"
        hrefFor={(slug) => blogPostPath("en", slug)}
        readMoreLabel="Read More"
        emptyState={content.emptyState}
      />
      <BlogFaqAccordion items={content.faq.items} eyebrow={content.faq.eyebrow} title={content.faq.title} />
    </LocationPage>
  );
}
