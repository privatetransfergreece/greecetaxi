import type { Locale } from "@/lib/i18n/config"

/**
 * Formats a "YYYY-MM-DD" date string for display. Deliberately avoids the
 * `Date` object's timezone handling — the customer's travel date/time is a
 * local wall-clock value with no timezone attached (see the form and
 * database schema), so it must never be shifted by server/browser timezone
 * conversion. Parsing the parts directly and formatting them as UTC noon
 * keeps the calendar date exactly as entered.
 */
export function formatTravelDate(isoDate: string, locale: Locale): string {
  const [year, month, day] = isoDate.split("-").map(Number)
  if (!year || !month || !day) return isoDate
  const date = new Date(Date.UTC(year, month - 1, day, 12))
  return new Intl.DateTimeFormat(locale === "el" ? "el-GR" : "en-GB", {
    timeZone: "UTC",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date)
}

/** Times are stored and displayed as the plain "HH:MM" the customer entered. */
export function formatTravelTime(time: string): string {
  return time.slice(0, 5)
}

const TRANSFER_TYPE_LABELS: Record<string, { en: string; el: string }> = {
  airport: { en: "Airport Transfer", el: "Μεταφορά Αεροδρομίου" },
  private: { en: "Private Transfer", el: "Ιδιωτική Μεταφορά" },
  "city-to-city": { en: "City-to-City Transfer", el: "Μεταφορά Μεταξύ Πόλεων" },
  "port-cruise": { en: "Port / Cruise Transfer", el: "Μεταφορά Λιμανιού / Κρουαζιέρας" },
  corporate: { en: "Corporate Transfer", el: "Εταιρική Μεταφορά" },
  group: { en: "Group Transfer", el: "Ομαδική Μεταφορά" },
  hourly: { en: "Hourly Hire", el: "Ενοικίαση με Ώρα" },
  other: { en: "Other", el: "Άλλο" },
}

export function formatTransferType(value: string, locale: Locale): string {
  return TRANSFER_TYPE_LABELS[value]?.[locale] ?? value
}
