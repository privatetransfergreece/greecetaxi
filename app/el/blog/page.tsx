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

const content = blogHubContent.el;

export const metadata: Metadata = {
  title: { absolute: content.meta.title },
  description: content.meta.description,
  alternates: localizedAlternates("blog", "el"),
  openGraph: { title: content.meta.title, description: content.meta.description, url: absoluteUrl(pathFor("blog", "el")) },
  twitter: { title: content.meta.title, description: content.meta.description },
};

export default async function BlogHubPageEl() {
  const posts = await getPublishedPosts("el");

  return (
    <LocationPage
      pageKey="blog"
      locale="el"
      title={content.meta.title}
      description={content.meta.description}
      breadcrumbItems={[{ label: "Αρχική", href: "/el/" }, { label: content.breadcrumbLabel }]}
      hero={<BlogHubHero eyebrow={content.hero.eyebrow} title={content.hero.title} description={content.hero.description} />}
      faq={content.faq}
      cta={{
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Ζητήστε Δωρεάν Προσφορά",
        secondaryLabel: "Επικοινωνήστε Μαζί μας",
        secondaryHref: pathFor("contact", "el"),
      }}
    >
      <BlogGrid
        posts={posts}
        locale="el"
        hrefFor={(slug) => blogPostPath("el", slug)}
        readMoreLabel="Διαβάστε Περισσότερα"
        emptyState={content.emptyState}
      />
      <BlogFaqAccordion items={content.faq.items} eyebrow={content.faq.eyebrow} title={content.faq.title} />
    </LocationPage>
  );
}
