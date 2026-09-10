import { List } from "lucide-react"

import type { TocHeading } from "@/lib/blog/toc"

function TableOfContents({ headings, title }: { headings: TocHeading[]; title: string }) {
  if (headings.length < 2) return null

  return (
    <details open className="rounded-2xl bg-white p-6 ring-1 ring-border">
      <summary className="flex cursor-pointer list-none items-center gap-2 font-heading text-base font-semibold text-charcoal">
        <List className="size-4.5 text-teal-deep" strokeWidth={2} aria-hidden="true" />
        {title}
      </summary>
      <nav aria-label={title} className="mt-4">
        <ol className="flex flex-col gap-2 text-sm">
          {headings.map((heading) => (
            <li key={heading.id} className={heading.level === 3 ? "pl-4" : undefined}>
              <a href={`#${heading.id}`} className="text-slate transition-colors hover:text-teal-deep">
                {heading.text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </details>
  )
}

export { TableOfContents }
