import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { layoutContent } from "@/content/layout"
import type { Locale } from "@/lib/i18n/config"
import { pathFor } from "@/lib/i18n/routes"

function MobileStickyCta({ locale }: { locale: Locale }) {
  const t = layoutContent[locale]
  const quoteHref = pathFor("getQuote", locale)

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border/70 bg-ivory/95 p-3 backdrop-blur-md lg:hidden">
      <Button
        className="h-11 w-full bg-coral text-base text-white hover:bg-coral/90"
        nativeButton={false}
        render={<Link href={quoteHref} />}
      >
        {t.getQuote}
        <ArrowRight data-icon="inline-end" className="size-4" />
      </Button>
    </div>
  )
}

export { MobileStickyCta }
