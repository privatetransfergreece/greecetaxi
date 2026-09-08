import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Container } from "@/components/container"

type Crumb = { label: string; href?: string }

function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border/70 bg-white">
      <Container className="py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate">
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li key={item.label} className="flex items-center gap-1.5">
                {index > 0 ? (
                  <ChevronRight className="size-3.5 text-slate/50" aria-hidden="true" />
                ) : null}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-teal-deep"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={isLast ? "font-medium text-charcoal" : undefined}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </Container>
    </nav>
  )
}

export { Breadcrumbs }
export type { Crumb }
