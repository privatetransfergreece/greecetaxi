import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

function LeadCta({
  heading = "Planning a Trip in Greece? Get Your Transfer Quote.",
  description = "Send us your journey details and we'll help arrange a private transfer for your route.",
  primaryLabel = "Get a Transfer Quote",
  primaryHref = siteConfig.quoteHref,
  secondaryLabel = "Contact Us",
  secondaryHref = siteConfig.contactHref,
}: {
  heading?: React.ReactNode
  description?: React.ReactNode
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}) {
  return (
    <section className="relative overflow-hidden bg-teal-deep py-20 sm:py-24">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(252,250,245,0.9) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />
      <Container className="relative z-10 flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-heading text-3xl leading-tight font-semibold text-balance text-ivory sm:text-4xl lg:text-[2.75rem]">
          {heading}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">
          {description}
        </p>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button
            className="h-11 bg-coral px-6 text-base text-white hover:bg-coral/90"
            nativeButton={false}
            render={<Link href={primaryHref} />}
          >
            {primaryLabel}
            <ArrowRight data-icon="inline-end" className="size-4" />
          </Button>
          <Button
            variant="outline"
            className="h-11 border-ivory/30 bg-transparent px-6 text-base text-ivory hover:bg-ivory/10 hover:text-ivory"
            nativeButton={false}
            render={<Link href={secondaryHref} />}
          >
            {secondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  )
}

export { LeadCta }
