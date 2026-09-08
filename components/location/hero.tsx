import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/container"
import { SectionEyebrow } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

type HeroContent = {
  eyebrow: string
  title: string
  description: string
  primaryLabel: string
  secondaryLabel: string
}

function LocationPhotoHero({
  content,
  imageSrc,
  imageAlt,
  quoteHref,
}: {
  content: HeroContent
  imageSrc: string
  imageAlt: string
  quoteHref: string
}) {
  return (
    <section className="relative isolate overflow-hidden bg-teal-deep py-20 sm:py-24">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-teal-deep/75" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-teal-deep/90 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex flex-col items-center gap-6 text-center">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-ivory/10 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-sand uppercase ring-1 ring-ivory/15">
          {content.eyebrow}
        </span>

        <h1 className="max-w-3xl font-heading text-3xl leading-tight font-semibold text-ivory sm:text-4xl lg:text-5xl">
          {content.title}
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-ivory/80 sm:text-lg">
          {content.description}
        </p>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button
            className="h-11 bg-coral px-6 text-base text-white hover:bg-coral/90"
            nativeButton={false}
            render={<Link href={quoteHref} />}
          >
            {content.primaryLabel}
            <ArrowRight data-icon="inline-end" className="size-4" />
          </Button>
          <Button
            variant="outline"
            className="h-11 border-ivory/30 bg-transparent px-6 text-base text-ivory hover:bg-ivory/10 hover:text-ivory"
            nativeButton={false}
            render={<Link href={quoteHref} />}
          >
            {content.secondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  )
}

function LocationBandHero({ content }: { content: HeroContent }) {
  return (
    <section className="border-b border-border/70 bg-ivory py-14 sm:py-16">
      <Container className="flex max-w-2xl flex-col gap-3">
        <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
        <h1 className="font-heading text-3xl leading-tight font-semibold text-charcoal sm:text-4xl">
          {content.title}
        </h1>
        <p className="text-base leading-relaxed text-slate sm:text-lg">
          {content.description}
        </p>
      </Container>
    </section>
  )
}

export { LocationPhotoHero, LocationBandHero }
export type { HeroContent }
