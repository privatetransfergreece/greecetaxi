import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import type { BlogListItem } from "@/lib/blog/queries"

function BlogCard({
  post,
  href,
  dateLabel,
  readMoreLabel,
}: {
  post: BlogListItem
  href: string
  dateLabel: string
  readMoreLabel: string
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border transition-shadow hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden">
        {post.featured_image_url ? (
          <Image
            src={post.featured_image_url}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="size-full bg-sand" aria-hidden="true" />
        )}
        <span className="absolute top-4 left-4 rounded-full bg-coral px-3 py-1 text-xs font-semibold text-white">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-1.5 text-xs text-slate">
          <span>{dateLabel}</span>
          {post.read_time ? (
            <>
              <span aria-hidden="true">&middot;</span>
              <span>{post.read_time}</span>
            </>
          ) : null}
        </div>

        <h3 className="font-heading text-lg font-semibold text-charcoal transition-colors group-hover:text-teal-deep">
          {post.title}
        </h3>

        {post.excerpt ? <p className="line-clamp-3 text-sm leading-relaxed text-slate">{post.excerpt}</p> : null}

        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-teal">
          {readMoreLabel}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

export { BlogCard }
