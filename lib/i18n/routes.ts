import { siteConfig } from "@/lib/site-config"
import type { Locale } from "./config"

/**
 * Central registry mapping every real page to its URL in each locale.
 *
 * To add a future page (airport, city, route, service, blog...), add one
 * entry here. Everything else — the language switcher, hreflang alternates,
 * canonical URLs, and the sitemap — is derived from this single source.
 */
export const pageRoutes = {
  home: { en: "/", el: "/el/" },
  about: { en: "/about-us/", el: "/el/schetika-me-emas/" },
  privacy: { en: "/privacy-policy/", el: "/el/politiki-aporritou/" },
  terms: {
    en: "/terms-and-conditions/",
    el: "/el/oroi-chrisis/",
  },
  airportTransfers: {
    en: "/airport-transfers/",
    el: "/el/metafores-aerodromiou/",
  },
  services: {
    en: "/services/",
    el: "/el/ypiresies/",
  },
  cityToCityTransfers: {
    en: "/city-transfers/",
    el: "/el/metafores-metaxy-poleon/",
  },
  privateTransfers: {
    en: "/private-transfers/",
    el: "/el/idiotikes-metafores/",
  },
  hourlyHire: {
    en: "/hourly-hire/",
    el: "/el/enoikiasi-me-ora/",
  },
  cruisePortTransfers: {
    en: "/port-transfers/",
    el: "/el/metafores-se-limania/",
  },
  corporateTransfers: {
    en: "/corporate-transfers/",
    el: "/el/etairikes-metafores/",
  },
  groupTransfers: {
    en: "/group-transfers/",
    el: "/el/omadikes-metafores/",
  },
  getQuote: {
    en: "/get-quote/",
    el: "/el/zitisi-prosforas/",
  },
  destinationsHub: { en: "/destinations/", el: "/el/proorismoi/" },
  contact: { en: "/contact/", el: "/el/epikoinonia/" },
  blog: { en: "/blog/", el: "/el/blog/" },

  // Airports
  athensAirport: { en: "/airport/athens-airport/", el: "/el/aerodromio/athina/" },
  thessalonikiAirport: { en: "/airport/thessaloniki-airport/", el: "/el/aerodromio/thessaloniki/" },
  heraklionAirport: { en: "/airport/heraklion-airport/", el: "/el/aerodromio/irakleio/" },
  chaniaAirport: { en: "/airport/chania-airport/", el: "/el/aerodromio/chania/" },
  rhodesAirport: { en: "/airport/rhodes-airport/", el: "/el/aerodromio/rodos/" },
  corfuAirport: { en: "/airport/corfu-airport/", el: "/el/aerodromio/kerkyra/" },
  santoriniAirport: { en: "/airport/santorini-airport/", el: "/el/aerodromio/santorini/" },
  mykonosAirport: { en: "/airport/mykonos-airport/", el: "/el/aerodromio/mykonos/" },

  // Cities
  cityAthens: { en: "/athens/", el: "/el/athina/" },
  cityThessaloniki: { en: "/city/thessaloniki/", el: "/el/poli/thessaloniki/" },
  cityKalamata: { en: "/city/kalamata/", el: "/el/poli/kalamata/" },

  // Regions
  regionCrete: { en: "/region/crete/", el: "/el/periochi/kriti/" },
  regionPeloponnese: { en: "/region/peloponnese/", el: "/el/periochi/peloponnisos/" },

  // Islands / destinations
  destinationSantorini: { en: "/destination/santorini/", el: "/el/proorismos/santorini/" },
  destinationMykonos: { en: "/destination/mykonos/", el: "/el/proorismos/mykonos/" },
  destinationRhodes: { en: "/destination/rhodes/", el: "/el/proorismos/rodos/" },
  destinationCorfu: { en: "/destination/corfu/", el: "/el/proorismos/kerkyra/" },
  destinationZakynthos: { en: "/destination/zakynthos/", el: "/el/proorismos/zakynthos/" },
  destinationKos: { en: "/destination/kos/", el: "/el/proorismos/kos/" },
  destinationNafplio: { en: "/destination/nafplio/", el: "/el/proorismos/nafplio/" },
  destinationMeteora: { en: "/destination/meteora/", el: "/el/proorismos/meteora/" },
  destinationAthensRiviera: { en: "/destination/athens-riviera/", el: "/el/proorismos/paralia-athinas/" },
  destinationGlyfada: { en: "/destination/glyfada/", el: "/el/proorismos/glyfada/" },
  destinationVouliagmeni: { en: "/destination/vouliagmeni/", el: "/el/proorismos/vouliagmeni/" },
  athensDayTrips: { en: "/athens-day-trips/", el: "/el/idiotikes-ekdromes-athina/" },
  destinationHalkidiki: { en: "/destination/halkidiki/", el: "/el/proorismos/chalkidiki/" },
  destinationKassandra: { en: "/destination/kassandra/", el: "/el/proorismos/kassandra/" },
  destinationSithonia: { en: "/destination/sithonia/", el: "/el/proorismos/sithonia/" },
  destinationNeaMoudania: { en: "/destination/nea-moudania/", el: "/el/proorismos/nea-moudania/" },
  thessalonikiDayTrips: { en: "/thessaloniki-day-trips/", el: "/el/idiotikes-ekdromes-thessaloniki/" },

  // Ports
  portPiraeus: { en: "/port/piraeus/", el: "/el/limani/peiraias/" },
  portRafina: { en: "/port/rafina/", el: "/el/limani/rafina/" },
  portLavrio: { en: "/port/lavrio/", el: "/el/limani/lavrio/" },
  portThessaloniki: { en: "/port/thessaloniki/", el: "/el/limani/thessaloniki/" },
  portHeraklion: { en: "/port/heraklion/", el: "/el/limani/irakleio/" },
  portPatras: { en: "/port/patras/", el: "/el/limani/patra/" },

  // Routes
  routeAthensDelphi: { en: "/route/athens-to-delphi/", el: "/el/diadromi/athina-delfoi/" },
  routeAthensNafplio: { en: "/route/athens-to-nafplio/", el: "/el/diadromi/athina-nafplio/" },
  routeAthensMeteora: { en: "/route/athens-to-meteora/", el: "/el/diadromi/athina-meteora/" },
  routeAthensThessaloniki: { en: "/route/athens-to-thessaloniki/", el: "/el/diadromi/athina-thessaloniki/" },
  routeThessalonikiHalkidiki: { en: "/route/thessaloniki-to-halkidiki/", el: "/el/diadromi/thessaloniki-chalkidiki/" },
  routeHeraklionChania: { en: "/route/heraklion-to-chania/", el: "/el/diadromi/irakleio-chania/" },
  routeAthensAirportPiraeus: { en: "/route/athens-airport-to-piraeus-port/", el: "/el/diadromi/aerodromio-athinas-peiraias/" },
  routeAthensAirportRiviera: { en: "/route/athens-airport-to-athens-riviera/", el: "/el/diadromi/aerodromio-athinas-paralia/" },
  routeAthensCapeSounion: { en: "/route/athens-to-cape-sounion/", el: "/el/diadromi/athina-sounio/" },
  routeAthensCorinth: { en: "/route/athens-to-corinth/", el: "/el/diadromi/athina-korinthos/" },
  routeAthensAirportGlyfada: { en: "/route/athens-airport-to-glyfada/", el: "/el/diadromi/aerodromio-athinas-glyfada/" },
  routeAthensAirportVouliagmeni: { en: "/route/athens-airport-to-vouliagmeni/", el: "/el/diadromi/aerodromio-athinas-vouliagmeni/" },
  routeAthensAirportNafplio: { en: "/route/athens-airport-to-nafplio/", el: "/el/diadromi/aerodromio-athinas-nafplio/" },
  routeAthensAirportCorinth: { en: "/route/athens-airport-to-corinth/", el: "/el/diadromi/aerodromio-athinas-korinthos/" },
  routeAthensAirportDelphi: { en: "/route/athens-airport-to-delphi/", el: "/el/diadromi/aerodromio-athinas-delfoi/" },
  routeAthensAirportLoutraki: { en: "/route/athens-airport-to-loutraki/", el: "/el/diadromi/aerodromio-athinas-loutraki/" },
  routePiraeusNafplio: { en: "/route/piraeus-port-to-nafplio/", el: "/el/diadromi/peiraias-nafplio/" },
  routeAthensAirportGrandeBretagne: { en: "/route/athens-airport-to-hotel-grande-bretagne/", el: "/el/diadromi/aerodromio-athinas-grande-bretagne/" },
  routeAthensAirportKingGeorge: { en: "/route/athens-airport-to-king-george-hotel/", el: "/el/diadromi/aerodromio-athinas-king-george/" },
  routeAthensAirportElectraPalace: { en: "/route/athens-airport-to-electra-palace-athens/", el: "/el/diadromi/aerodromio-athinas-electra-palace/" },
  routeAthensAirportNjvPlaza: { en: "/route/athens-airport-to-njv-athens-plaza/", el: "/el/diadromi/aerodromio-athinas-njv-plaza/" },
  routeAthensAirportGrandHyatt: { en: "/route/athens-airport-to-grand-hyatt-athens/", el: "/el/diadromi/aerodromio-athinas-grand-hyatt/" },
  routeAthensAirportAthenaeumIC: { en: "/route/athens-airport-to-athenaeum-intercontinental/", el: "/el/diadromi/aerodromio-athinas-intercontinental/" },
  routeAthensAirportDivaniCaravel: { en: "/route/athens-airport-to-divani-caravel/", el: "/el/diadromi/aerodromio-athinas-divani-caravel/" },

  // Thessaloniki cluster
  routeThessalonikiAirportHalkidiki: { en: "/route/thessaloniki-airport-to-halkidiki/", el: "/el/diadromi/aerodromio-thessalonikis-chalkidiki/" },
  routeThessalonikiAirportKassandra: { en: "/route/thessaloniki-airport-to-kassandra/", el: "/el/diadromi/aerodromio-thessalonikis-kassandra/" },
  routeThessalonikiAirportSithonia: { en: "/route/thessaloniki-airport-to-sithonia/", el: "/el/diadromi/aerodromio-thessalonikis-sithonia/" },
  routeThessalonikiAirportNeaMoudania: { en: "/route/thessaloniki-airport-to-nea-moudania/", el: "/el/diadromi/aerodromio-thessalonikis-nea-moudania/" },
  routeThessalonikiPortHalkidiki: { en: "/route/thessaloniki-port-to-halkidiki/", el: "/el/diadromi/limani-thessalonikis-chalkidiki/" },
  routeThessalonikiAirportPort: { en: "/route/thessaloniki-airport-to-port/", el: "/el/diadromi/aerodromio-thessalonikis-limani/" },
  routeThessalonikiMeteora: { en: "/route/thessaloniki-to-meteora/", el: "/el/diadromi/thessaloniki-meteora/" },
  routeThessalonikiMountOlympus: { en: "/route/thessaloniki-to-mount-olympus/", el: "/el/diadromi/thessaloniki-olympos/" },
  routeThessalonikiVerginaPella: { en: "/route/thessaloniki-to-vergina-pella/", el: "/el/diadromi/thessaloniki-vergina-pella/" },
  routeThessalonikiKavala: { en: "/route/thessaloniki-to-kavala/", el: "/el/diadromi/thessaloniki-kavala/" },
  routeThessalonikiAirportSaniResort: { en: "/route/thessaloniki-airport-to-sani-resort/", el: "/el/diadromi/aerodromio-thessalonikis-sani-resort/" },
  routeThessalonikiAirportPortoCarras: { en: "/route/thessaloniki-airport-to-porto-carras/", el: "/el/diadromi/aerodromio-thessalonikis-porto-carras/" },
  routeThessalonikiStations: { en: "/route/thessaloniki-train-bus-station-transfers/", el: "/el/diadromi/thessaloniki-stathmos-ktel/" },
  routeThessalonikiAirportElectraPalace: { en: "/route/thessaloniki-airport-to-electra-palace/", el: "/el/diadromi/aerodromio-thessalonikis-electra-palace/" },
  routeThessalonikiAirportMakedoniaPalace: { en: "/route/thessaloniki-airport-to-makedonia-palace/", el: "/el/diadromi/aerodromio-thessalonikis-makedonia-palace/" },
  routeThessalonikiAirportOnResidence: { en: "/route/thessaloniki-airport-to-on-residence/", el: "/el/diadromi/aerodromio-thessalonikis-on-residence/" },
  routeThessalonikiAirportMetHotel: { en: "/route/thessaloniki-airport-to-met-hotel/", el: "/el/diadromi/aerodromio-thessalonikis-met-hotel/" },
  routeThessalonikiAirportMediterraneanPalace: { en: "/route/thessaloniki-airport-to-mediterranean-palace/", el: "/el/diadromi/aerodromio-thessalonikis-mediterranean-palace/" },
  routeThessalonikiAirportDomotelOlympia: { en: "/route/thessaloniki-airport-to-domotel-olympia/", el: "/el/diadromi/aerodromio-thessalonikis-domotel-olympia/" },
  routeThessalonikiAirportHyattRegency: { en: "/route/thessaloniki-airport-to-hyatt-regency/", el: "/el/diadromi/aerodromio-thessalonikis-hyatt-regency/" },
} as const

export type PageKey = keyof typeof pageRoutes

export function pathFor(page: PageKey, locale: Locale): string {
  return pageRoutes[page][locale]
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString()
}

/**
 * Builds the `alternates` block (canonical + hreflang, including
 * x-default) for a registered page in a given locale.
 */
export function localizedAlternates(page: PageKey, locale: Locale) {
  return {
    canonical: absoluteUrl(pathFor(page, locale)),
    languages: {
      en: absoluteUrl(pageRoutes[page].en),
      el: absoluteUrl(pageRoutes[page].el),
      "x-default": absoluteUrl(pageRoutes[page].en),
    },
  }
}

/**
 * Prefixes (or strips) "/el" on a path that has no registered translation
 * yet — used for taxonomy pages (services, destinations, etc.) that don't
 * have real routes in either language yet, so Greek content still links
 * to a Greek-prefixed URL rather than an English one.
 */
export function withLocalePrefix(path: string, locale: Locale): string {
  if (locale === "en") {
    if (path === "/el" || path === "/el/") return "/"
    return path.startsWith("/el/") ? path.slice(3) || "/" : path
  }

  if (path.startsWith("/el/") || path === "/el") return path
  return path === "/" ? "/el/" : `/el${path}`
}

/**
 * Given the current pathname, returns the equivalent path in the target
 * locale — used by the language switcher. Falls back to `withLocalePrefix`
 * for pages not yet registered (e.g. future taxonomy pages).
 */
export function getAlternatePath(pathname: string, targetLocale: Locale): string {
  for (const routes of Object.values(pageRoutes)) {
    if (routes.en === pathname || routes.el === pathname) {
      return routes[targetLocale]
    }
  }

  return withLocalePrefix(pathname, targetLocale)
}
