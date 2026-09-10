import { SectionHeading } from "@/components/section-heading"
import { BlogCard } from "@/components/blog/blog-card"
import { formatDate } from "@/components/blog/blog-grid"
import type { BlogListItem } from "@/lib/blog/queries"
import type { Locale } from "@/lib/i18n/config"

function RelatedPosts({
  posts,
  locale,
  hrefFor,
  eyebrow,
  title,
  readMoreLabel,
}: {
  posts: BlogListItem[]
  locale: Locale
  hrefFor: (slug: string) => string
  eyebrow: string
  title: string
  readMoreLabel: string
}) {
  if (posts.length === 0) return null

  return (
    <section className="flex flex-col gap-8">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            href={hrefFor(post.slug)}
            dateLabel={formatDate(post.published_at, locale)}
            readMoreLabel={readMoreLabel}
          />
        ))}
      </div>
    </section>
  )
}

export { RelatedPosts }
