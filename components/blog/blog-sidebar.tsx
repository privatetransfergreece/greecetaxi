import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n/config"
import { pathFor, type PageKey } from "@/lib/i18n/routes"

type SidebarCopy = {
  conversionHeading: string
  conversionDescription: string
  conversionBullets: string[]
  primaryLabel: string
  secondaryLabel: string
  servicesTitle: string
  coverageTitle: string
}

const sidebarCopy: Record<Locale, SidebarCopy> = {
  en: {
    conversionHeading: "Plan Your Transfer",
    conversionDescription: "Tell us your route and we'll send a transparent, no-obligation quote.",
    conversionBullets: ["Private, door-to-door vehicle", "Fixed quote, no surprises", "Flight and ferry times tracked"],
    primaryLabel: "Get a Free Quote",
    secondaryLabel: "Contact Us",
    servicesTitle: "Our Services",
    coverageTitle: "Coverage Areas",
  },
  el: {
    conversionHeading: "Σχεδιάστε τη Μεταφορά σας",
    conversionDescription: "Πείτε μας τη διαδρομή σας και θα σας στείλουμε μια σαφή προσφορά χωρίς δέσμευση.",
    conversionBullets: ["Ιδιωτικό όχημα, από πόρτα σε πόρτα", "Σταθερή προσφορά, χωρίς εκπλήξεις", "Παρακολούθηση πτήσεων και ferry"],
    primaryLabel: "Ζητήστε Δωρεάν Προσφορά",
    secondaryLabel: "Επικοινωνήστε Μαζί μας",
    servicesTitle: "Οι Υπηρεσίες μας",
    coverageTitle: "Περιοχές Κάλυψης",
  },
}

const serviceLinks: { pageKey: PageKey; labelEn: string; labelEl: string }[] = [
  { pageKey: "airportTransfers", labelEn: "Airport Transfers", labelEl: "Μεταφορές Αεροδρομίου" },
  { pageKey: "cruisePortTransfers", labelEn: "Port Transfers", labelEl: "Μεταφορές Λιμανιού" },
  { pageKey: "privateTransfers", labelEn: "Private Transfers", labelEl: "Ιδιωτικές Μεταφορές" },
  { pageKey: "athensDayTrips", labelEn: "Day Trips", labelEl: "Ημερήσιες Εκδρομές" },
  { pageKey: "cityToCityTransfers", labelEn: "Intercity Transfers", labelEl: "Μεταφορές Μεταξύ Πόλεων" },
]

const coverageLinks: { pageKey: PageKey; labelEn: string; labelEl: string }[] = [
  { pageKey: "cityAthens", labelEn: "Athens", labelEl: "Αθήνα" },
  { pageKey: "athensAirport", labelEn: "Athens Airport", labelEl: "Αεροδρόμιο Αθηνών" },
  { pageKey: "portPiraeus", labelEn: "Piraeus Port", labelEl: "Λιμάνι Πειραιά" },
  { pageKey: "destinationAthensRiviera", labelEn: "Athens Riviera", labelEl: "Παραλιακή Αθήνας" },
  { pageKey: "cityThessaloniki", labelEn: "Thessaloniki", labelEl: "Θεσσαλονίκη" },
]

function BlogSidebar({ locale }: { locale: Locale }) {
  const t = sidebarCopy[locale]
  const quoteHref = pathFor("getQuote", locale)
  const contactHref = pathFor("contact", locale)

  return (
    <aside className="flex flex-col gap-6">
      <div className="rounded-2xl bg-teal-deep p-6 text-ivory">
        <h2 className="font-heading text-lg font-semibold">{t.conversionHeading}</h2>
        <p className="mt-2 text-sm leading-relaxed text-ivory/75">{t.conversionDescription}</p>
        <ul className="mt-4 flex flex-col gap-2">
          {t.conversionBullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-sm text-ivory/85">
              <Check className="mt-0.5 size-4 shrink-0 text-sand" strokeWidth={2.5} />
              {bullet}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-col gap-2.5">
          <Button
            className="h-10 w-full bg-coral text-white hover:bg-coral/90"
            nativeButton={false}
            render={<Link href={quoteHref} />}
          >
            {t.primaryLabel}
            <ArrowRight data-icon="inline-end" className="size-4" />
          </Button>
          <Button
            variant="outline"
            className="h-10 w-full border-ivory/30 bg-transparent text-ivory hover:bg-ivory/10 hover:text-ivory"
            nativeButton={false}
            render={<Link href={contactHref} />}
          >
            {t.secondaryLabel}
          </Button>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 ring-1 ring-border">
        <h2 className="font-heading text-base font-semibold text-charcoal">{t.servicesTitle}</h2>
        <ul className="mt-3 flex flex-col gap-2">
          {serviceLinks.map((item) => (
            <li key={item.pageKey}>
              <Link
                href={pathFor(item.pageKey, locale)}
                className="text-sm text-slate transition-colors hover:text-teal-deep"
              >
                {locale === "en" ? item.labelEn : item.labelEl}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl bg-white p-6 ring-1 ring-border">
        <h2 className="font-heading text-base font-semibold text-charcoal">{t.coverageTitle}</h2>
        <ul className="mt-3 flex flex-col gap-2">
          {coverageLinks.map((item) => (
            <li key={item.pageKey}>
              <Link
                href={pathFor(item.pageKey, locale)}
                className="text-sm text-slate transition-colors hover:text-teal-deep"
              >
                {locale === "en" ? item.labelEn : item.labelEl}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export { BlogSidebar }
