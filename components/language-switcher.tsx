"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { locales, localeNames, type Locale } from "@/lib/i18n/config"
import { getAlternatePath } from "@/lib/i18n/routes"
import { cn } from "@/lib/utils"

function LanguageSwitcher({
  locale,
  className,
}: {
  locale: Locale
  className?: string
}) {
  const pathname = usePathname()

  return (
    <nav aria-label="Language" className={cn("flex items-center gap-1", className)}>
      {locales.map((loc, index) => {
        const isActive = loc === locale

        return (
          <span key={loc} className="flex items-center gap-1">
            {index > 0 ? (
              <span className="text-charcoal/30" aria-hidden="true">
                /
              </span>
            ) : null}
            {isActive ? (
              <span
                aria-current="true"
                className="rounded-md px-1.5 py-1 text-sm font-semibold text-teal-deep"
              >
                {localeNames[loc]}
              </span>
            ) : (
              <Link
                href={getAlternatePath(pathname, loc)}
                className="rounded-md px-1.5 py-1 text-sm font-medium text-charcoal/70 transition-colors hover:text-teal-deep focus-visible:text-teal-deep focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                {localeNames[loc]}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}

export { LanguageSwitcher }
