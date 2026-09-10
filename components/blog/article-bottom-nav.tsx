import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

function ArticleBottomNav({
  allArticlesHref,
  allArticlesLabel,
  quoteHref,
  quoteLabel,
}: {
  allArticlesHref: string
  allArticlesLabel: string
  quoteHref: string
  quoteLabel: string
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
      <Link
        href={allArticlesHref}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-deep hover:text-coral"
      >
        <ArrowLeft className="size-4" />
        {allArticlesLabel}
      </Link>
      <Link
        href={quoteHref}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-deep hover:text-coral"
      >
        {quoteLabel}
        <ArrowRight className="size-4" />
      </Link>
    </div>
  )
}

export { ArticleBottomNav }
