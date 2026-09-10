import Image from "next/image"
import { UserRound } from "lucide-react"

import type { BlogPostAuthor } from "@/lib/blog/queries"

function AuthorCard({ author, writtenByLabel }: { author: BlogPostAuthor; writtenByLabel: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-ivory p-6 ring-1 ring-border">
      {author.avatar_url ? (
        <Image
          src={author.avatar_url}
          alt={author.full_name}
          width={48}
          height={48}
          className="size-12 shrink-0 rounded-full object-cover"
        />
      ) : (
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
          <UserRound className="size-5" strokeWidth={2} />
        </span>
      )}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold tracking-[0.1em] text-slate uppercase">{writtenByLabel}</span>
        <span className="font-heading text-base font-semibold text-charcoal">{author.full_name}</span>
        {author.bio ? <p className="text-sm leading-relaxed text-slate">{author.bio}</p> : null}
      </div>
    </div>
  )
}

export { AuthorCard }
