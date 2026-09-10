import { pageRoutes } from "@/lib/i18n/routes"
import { servicesIndexItems } from "@/content/service-hubs"
import type { Locale } from "@/lib/i18n/config"

type NavItem = { label: string; href: string }
type NavDropdown = { label: string; href: string; items: NavItem[]; viewAllLabel: string }
type NavEntry = NavItem | NavDropdown

function isNavDropdown(entry: NavEntry): entry is NavDropdown {
  return "items" in entry
}

type LayoutContent = {
  getQuote: string
  openMenu: string
  nav: NavEntry[]
  footer: {
    tagline: string
    servicesTitle: string
    locationsTitle: string
    infoTitle: string
    services: NavItem[]
    destinations: NavItem[]
    information: NavItem[]
    bottomNote: string
    rightsReserved: string
  }
}

/**
 * Shared header/footer/nav copy per locale. The "Services" and
 * "Destinations" nav entries, and the footer's location links, all resolve
 * through `pageRoutes` in `lib/i18n/routes.ts` so they only ever point to
 * real pages.
 */
export const layoutContent: Record<Locale, LayoutContent> = {
  en: {
    getQuote: "Get a Quote",
    openMenu: "Open menu",
    nav: [
      {
        label: "Services",
        href: pageRoutes.services.en,
        items: servicesIndexItems.en.map((item) => ({
          label: item.name,
          href: pageRoutes[item.pageKey].en,
        })),
        viewAllLabel: "View All Services",
      },
      { label: "Destinations", href: pageRoutes.destinationsHub.en },
      { label: "Blog", href: pageRoutes.blog.en },
      { label: "About", href: pageRoutes.about.en },
    ],
    footer: {
      tagline:
        "Private taxi transfers for airports, cities, ports, hotels and destinations throughout Greece.",
      servicesTitle: "Services",
      locationsTitle: "Popular Locations",
      infoTitle: "Information",
      services: servicesIndexItems.en.map((item) => ({
        label: item.name,
        href: pageRoutes[item.pageKey].en,
      })),
      destinations: [
        { label: "Athens", href: pageRoutes.cityAthens.en },
        { label: "Thessaloniki", href: pageRoutes.cityThessaloniki.en },
        { label: "Crete", href: pageRoutes.regionCrete.en },
        { label: "Santorini", href: pageRoutes.destinationSantorini.en },
        { label: "Mykonos", href: pageRoutes.destinationMykonos.en },
        { label: "Rhodes", href: pageRoutes.destinationRhodes.en },
      ],
      information: [
        { label: "About", href: pageRoutes.about.en },
        { label: "Blog", href: pageRoutes.blog.en },
        { label: "FAQ", href: "/#faq" },
        { label: "Contact", href: pageRoutes.contact.en },
        { label: "Terms & Conditions", href: pageRoutes.terms.en },
        { label: "Privacy Policy", href: pageRoutes.privacy.en },
      ],
      bottomNote: "Private transfers arranged throughout Greece.",
      rightsReserved: "All rights reserved.",
    },
  },
  el: {
    getQuote: "Ζητήστε Προσφορά",
    openMenu: "Άνοιγμα μενού",
    nav: [
      {
        label: "Υπηρεσίες",
        href: pageRoutes.services.el,
        items: servicesIndexItems.el.map((item) => ({
          label: item.name,
          href: pageRoutes[item.pageKey].el,
        })),
        viewAllLabel: "Όλες οι Υπηρεσίες",
      },
      { label: "Προορισμοί", href: pageRoutes.destinationsHub.el },
      { label: "Blog", href: pageRoutes.blog.el },
      { label: "Σχετικά με Εμάς", href: pageRoutes.about.el },
    ],
    footer: {
      tagline:
        "Ιδιωτικές μεταφορές με ταξί για αεροδρόμια, πόλεις, λιμάνια, ξενοδοχεία και προορισμούς σε όλη την Ελλάδα.",
      servicesTitle: "Υπηρεσίες",
      locationsTitle: "Δημοφιλείς Προορισμοί",
      infoTitle: "Πληροφορίες",
      services: servicesIndexItems.el.map((item) => ({
        label: item.name,
        href: pageRoutes[item.pageKey].el,
      })),
      destinations: [
        { label: "Αθήνα", href: pageRoutes.cityAthens.el },
        { label: "Θεσσαλονίκη", href: pageRoutes.cityThessaloniki.el },
        { label: "Κρήτη", href: pageRoutes.regionCrete.el },
        { label: "Σαντορίνη", href: pageRoutes.destinationSantorini.el },
        { label: "Μύκονος", href: pageRoutes.destinationMykonos.el },
        { label: "Ρόδος", href: pageRoutes.destinationRhodes.el },
      ],
      information: [
        { label: "Σχετικά με Εμάς", href: pageRoutes.about.el },
        { label: "Blog", href: pageRoutes.blog.el },
        { label: "Συχνές Ερωτήσεις", href: "/el/#faq" },
        { label: "Επικοινωνία", href: pageRoutes.contact.el },
        { label: "Όροι Χρήσης", href: pageRoutes.terms.el },
        { label: "Πολιτική Απορρήτου", href: pageRoutes.privacy.el },
      ],
      bottomNote: "Ιδιωτικές μεταφορές σε όλη την Ελλάδα.",
      rightsReserved: "Με επιφύλαξη παντός δικαιώματος.",
    },
  },
}

export { isNavDropdown }
export type { NavEntry, NavDropdown, NavItem }
