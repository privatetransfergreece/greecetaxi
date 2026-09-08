import Link from "next/link"
import { MapPinned } from "lucide-react"

import { Container } from "@/components/container"
import { layoutContent } from "@/content/layout"
import type { Locale } from "@/lib/i18n/config"
import { withLocalePrefix } from "@/lib/i18n/routes"
import { siteConfig } from "@/lib/site-config"

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xs font-semibold tracking-[0.14em] text-ivory/60 uppercase">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-ivory/85 transition-colors hover:text-coral"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SiteFooter({ locale }: { locale: Locale }) {
  const t = layoutContent[locale].footer

  return (
    <footer className="bg-teal-deep text-ivory">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4 pr-4">
          <Link
            href={withLocalePrefix("/", locale)}
            className="flex items-center gap-2 font-heading text-lg font-semibold text-ivory"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-ivory/10 text-ivory">
              <MapPinned className="size-4.5" strokeWidth={2} />
            </span>
            {siteConfig.shortName}
            <span className="text-coral">.</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-ivory/70">
            {t.tagline}
          </p>
        </div>

        <FooterColumn title={t.servicesTitle} links={t.services} />
        <FooterColumn title={t.locationsTitle} links={t.destinations} />
        <FooterColumn title={t.infoTitle} links={t.information} />
      </Container>

      <div className="border-t border-ivory/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}.{" "}
            {t.rightsReserved}
          </p>
          <p>{t.bottomNote}</p>
        </Container>
      </div>
    </footer>
  )
}

export { SiteFooter }
