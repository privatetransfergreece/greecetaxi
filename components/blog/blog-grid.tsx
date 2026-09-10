import { Newspaper } from "lucide-react"

import { Container } from "@/components/container"
import { BlogCard } from "@/components/blog/blog-card"
import type { BlogListItem } from "@/lib/blog/queries"
import type { Locale } from "@/lib/i18n/config"

function formatDate(iso: string | null, locale: Locale): string {
  if (!iso) return ""
  return new Date(iso).toLocaleDateString(locale === "el" ? "el-GR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function BlogGrid({
  posts,
  locale,
  hrefFor,
  readMoreLabel,
  emptyState,
}: {
  posts: BlogListItem[]
  locale: Locale
  hrefFor: (slug: string) => string
  readMoreLabel: string
  emptyState: { title: string; description: string }
}) {
  if (posts.length === 0) {
    return (
      <section className="bg-ivory py-20 sm:py-24">
        <Container className="flex flex-col items-center gap-4 rounded-2xl bg-white py-16 text-center ring-1 ring-border">
          <span className="flex size-14 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
            <Newspaper className="size-6" strokeWidth={2} />
          </span>
          <h2 className="font-heading text-2xl font-semibold text-charcoal">{emptyState.title}</h2>
          <p className="max-w-md text-base leading-relaxed text-slate">{emptyState.description}</p>
        </Container>
      </section>
    )
  }

  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
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
      </Container>
    </section>
  )
}

export { BlogGrid, formatDate }
