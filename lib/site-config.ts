export const siteConfig = {
  name: "Private Transfer Greece",
  shortName: "Private Transfer Greece",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://privatetransfergreece.com",
  description:
    "Book private taxi transfers in Greece for airports, cities, ports, hotels and popular destinations. Get a fast quote for comfortable door-to-door transfers.",
  descriptionEl:
    "Κλείστε ιδιωτικές μεταφορές με ταξί στην Ελλάδα για αεροδρόμια, πόλεις, λιμάνια, ξενοδοχεία και δημοφιλείς προορισμούς. Ζητήστε γρήγορη προσφορά για άνετες μεταφορές από πόρτα σε πόρτα.",
  quoteHref: "/get-quote/",
  contactHref: "/contact/",
  contactEmail: "privatetransfergreece@gmail.com",
  /** E.164 digits only (no leading +), used for the wa.me floating chat link. */
  whatsappNumber: "923148932631",
}
