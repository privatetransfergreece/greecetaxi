import type { Locale } from "@/lib/i18n/config"
import type { HeroContent } from "@/components/location/hero"
import type { RelatedLinkItem } from "@/components/location/related-links"

export type DestinationSlug =
  | "destinationSantorini"
  | "destinationMykonos"
  | "destinationRhodes"
  | "destinationCorfu"
  | "destinationZakynthos"
  | "destinationKos"
  | "destinationNafplio"
  | "destinationMeteora"
  | "destinationAthensRiviera"
  | "destinationGlyfada"
  | "destinationVouliagmeni"
  | "athensDayTrips"
  | "destinationHalkidiki"
  | "destinationKassandra"
  | "destinationSithonia"
  | "destinationNeaMoudania"
  | "thessalonikiDayTrips"
  | "destinationElounda"
  | "destinationHersonissos"
  | "destinationMalia"
  | "destinationPlatanias"
  | "destinationGeorgioupolis"
  | "creteDayTrips"

export type LinkSection = { eyebrow: string; title: string; items: Omit<RelatedLinkItem, "icon">[] }
export type ProseSection = { eyebrow: string; title: string; paragraphs: string[] }

export type DestinationPageContent = {
  meta: { title: string; description: string }
  breadcrumbLabel: string
  hero: HeroContent
  intro: ProseSection
  gettingHere: LinkSection
  transferOptions: LinkSection
  faq: { eyebrow: string; title: string; items: { question: string; answer: string }[] }
  cta: { heading: string; description: string; primaryLabel: string; secondaryLabel: string }
}

export const destinationImages: Partial<Record<DestinationSlug, { src: string; alt: Record<Locale, string> }>> = {
  destinationSantorini: {
    src: "/destinations/santorini.webp",
    alt: {
      en: "Whitewashed clifftop village of Oia in Santorini at sunset, Greece",
      el: "Ασβεστωμένο χωριό της Οίας πάνω σε γκρεμό στη Σαντορίνη το ηλιοβασίλεμα, Ελλάδα",
    },
  },
  destinationMykonos: {
    src: "/destinations/mykonos.webp",
    alt: {
      en: "Little Venice waterfront houses in Mykonos Town at dusk, Greece",
      el: "Παραθαλάσσια σπίτια της Μικρής Βενετίας στη Χώρα Μυκόνου το σούρουπο, Ελλάδα",
    },
  },
  destinationRhodes: {
    src: "/destinations/rhodes.webp",
    alt: {
      en: "Coastal view of Rhodes Town and its beachfront, Greece",
      el: "Παραθαλάσσια θέα της πόλης της Ρόδου, Ελλάδα",
    },
  },
}

export const destinationContent: Record<DestinationSlug, Record<Locale, DestinationPageContent>> = {
  destinationSantorini: {
    en: {
      meta: {
        title: "Private Transfers in Santorini – Airport & Island Travel",
        description:
          "Book a private transfer in Santorini between the airport, Fira, Oia and hotels around the island. Comfortable door-to-door travel. Get a quote.",
      },
      breadcrumbLabel: "Santorini",
      hero: {
        eyebrow: "Santorini, Cyclades",
        title: "Private Transfers in Santorini",
        description: "Book a private transfer between Santorini Airport, Fira, Oia and hotels around the island.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Santorini",
        title: "Getting Around Santorini",
        paragraphs: [
          "Santorini is a volcanic island in the Cyclades, known for the clifftop villages of Fira and Oia overlooking its caldera. The island is served by Santorini Airport on its eastern side, with roads that are often narrow and busy in peak season, especially around the caldera villages.",
          "Because of this, most visitors arrange private transportation in advance rather than relying on options found on arrival, whether for an airport transfer, travel between villages, or a transfer for a special occasion such as watching the sunset in Oia.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Santorini",
        title: "Arriving in Santorini",
        items: [
          { label: "Santorini Airport", href: "/airport/santorini-airport/", description: "See our dedicated airport transfer information for Santorini." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey on Santorini." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups exploring the island." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Santorini Airport to my hotel?", answer: "A private transfer takes you directly from the airport to your hotel — see our Santorini Airport page for details." },
          { question: "Can I book a private transfer between Fira and Oia?", answer: "Yes, transfers between villages on Santorini can be requested through the quote form." },
          { question: "Are Santorini's roads busy in summer?", answer: "Yes, roads around the caldera villages can be busy during peak season, which is one reason many travellers pre-arrange private transportation." },
          { question: "Can you arrange a transfer for a group on Santorini?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Santorini Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στη Σαντορίνη – Αεροδρόμιο & Νησί",
        description:
          "Κλείστε ιδιωτική μεταφορά στη Σαντορίνη μεταξύ αεροδρομίου, Φηράς, Οίας και ξενοδοχείων του νησιού. Άνετη μεταφορά από πόρτα σε πόρτα.",
      },
      breadcrumbLabel: "Σαντορίνη",
      hero: {
        eyebrow: "Σαντορίνη, Κυκλάδες",
        title: "Ιδιωτικές Μεταφορές στη Σαντορίνη",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ του Αεροδρομίου Σαντορίνης, της Φηράς, της Οίας και ξενοδοχείων του νησιού.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τη Σαντορίνη",
        title: "Μετακινήσεις στη Σαντορίνη",
        paragraphs: [
          "Η Σαντορίνη είναι ένα ηφαιστειακό νησί των Κυκλάδων, γνωστό για τα χωριά της Φηράς και της Οίας πάνω σε γκρεμούς με θέα στην καλντέρα. Το νησί εξυπηρετείται από το Αεροδρόμιο Σαντορίνης στην ανατολική πλευρά του, με δρόμους που είναι συχνά στενοί και πολυσύχναστοι την περίοδο αιχμής, ειδικά γύρω από τα χωριά της καλντέρας.",
          "Γι' αυτό, οι περισσότεροι επισκέπτες οργανώνουν την ιδιωτική τους μεταφορά εκ των προτέρων αντί να βασίζονται σε επιλογές που βρίσκουν κατά την άφιξη, είτε για μεταφορά αεροδρομίου, είτε για μετακίνηση μεταξύ χωριών, είτε για μια ειδική περίσταση όπως η παρακολούθηση του ηλιοβασιλέματος στην Οία.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στη Σαντορίνη",
        title: "Άφιξη στη Σαντορίνη",
        items: [
          { label: "Αεροδρόμιο Σαντορίνης", href: "/el/aerodromio/santorini/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου για τη Σαντορίνη." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στη Σαντορίνη." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες που εξερευνούν το νησί." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς πηγαίνω από το Αεροδρόμιο Σαντορίνης στο ξενοδοχείο μου;", answer: "Μια ιδιωτική μεταφορά σας πηγαίνει απευθείας από το αεροδρόμιο στο ξενοδοχείο σας — δείτε τη σελίδα μας για το Αεροδρόμιο Σαντορίνης." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά μεταξύ Φηράς και Οίας;", answer: "Ναι, οι μεταφορές μεταξύ χωριών στη Σαντορίνη μπορούν να ζητηθούν μέσω της φόρμας προσφοράς." },
          { question: "Είναι φορτωμένοι οι δρόμοι της Σαντορίνης το καλοκαίρι;", answer: "Ναι, οι δρόμοι γύρω από τα χωριά της καλντέρας μπορεί να είναι φορτωμένοι κατά την περίοδο αιχμής, κάτι που είναι ένας από τους λόγους που πολλοί ταξιδιώτες οργανώνουν εκ των προτέρων ιδιωτική μεταφορά." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα στη Σαντορίνη;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στη Σαντορίνη;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationMykonos: {
    en: {
      meta: {
        title: "Private Transfers in Mykonos – Airport & Island Travel",
        description:
          "Book a private transfer in Mykonos between the airport, Mykonos Town and hotels around the island. Comfortable door-to-door travel. Get a quote.",
      },
      breadcrumbLabel: "Mykonos",
      hero: {
        eyebrow: "Mykonos, Cyclades",
        title: "Private Transfers in Mykonos",
        description: "Book a private transfer between Mykonos Airport, Mykonos Town and hotels around the island.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Mykonos",
        title: "Getting Around Mykonos",
        paragraphs: [
          "Mykonos is one of the most visited islands in the Cyclades, known for Mykonos Town (Chora) and its beach resort areas. The island is served by Mykonos Airport, southeast of the town, and also receives ferry passengers connecting from Piraeus and Rafina.",
          "A private transfer connects the airport or port directly with your hotel, wherever it is on the island, without relying on public transport after arrival.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Mykonos",
        title: "Arriving in Mykonos",
        items: [
          { label: "Mykonos Airport", href: "/airport/mykonos-airport/", description: "See our dedicated airport transfer information for Mykonos." },
          { label: "Piraeus Port", href: "/port/piraeus/", description: "Mykonos is a popular ferry destination from Piraeus." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey on Mykonos." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups exploring the island." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Mykonos Airport to my hotel?", answer: "A private transfer takes you directly from the airport to your hotel — see our Mykonos Airport page for details." },
          { question: "Can I book a transfer from the ferry port to my hotel?", answer: "Yes, port-to-hotel transfers can be arranged around your ferry's arrival time." },
          { question: "Can I book a private transfer between beaches or resort areas on Mykonos?", answer: "Yes, transfers around the island can be requested through the quote form." },
          { question: "Can you arrange a transfer for a group on Mykonos?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Mykonos Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στη Μύκονο – Αεροδρόμιο & Νησί",
        description:
          "Κλείστε ιδιωτική μεταφορά στη Μύκονο μεταξύ αεροδρομίου, Χώρας Μυκόνου και ξενοδοχείων του νησιού. Άνετη μεταφορά από πόρτα σε πόρτα.",
      },
      breadcrumbLabel: "Μύκονος",
      hero: {
        eyebrow: "Μύκονος, Κυκλάδες",
        title: "Ιδιωτικές Μεταφορές στη Μύκονο",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ του Αεροδρομίου Μυκόνου, της Χώρας Μυκόνου και ξενοδοχείων του νησιού.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τη Μύκονο",
        title: "Μετακινήσεις στη Μύκονο",
        paragraphs: [
          "Η Μύκονος είναι ένα από τα πιο δημοφιλή νησιά των Κυκλάδων, γνωστό για τη Χώρα Μυκόνου και τις παραλιακές περιοχές θερέτρων της. Το νησί εξυπηρετείται από το Αεροδρόμιο Μυκόνου, νοτιοανατολικά της Χώρας, και δέχεται επίσης επιβάτες ferry που συνδέονται από τον Πειραιά και τη Ραφήνα.",
          "Μια ιδιωτική μεταφορά συνδέει το αεροδρόμιο ή το λιμάνι απευθείας με το ξενοδοχείο σας, όπου κι αν βρίσκεται στο νησί, χωρίς να εξαρτάστε από τα μέσα μαζικής μεταφοράς μετά την άφιξη.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στη Μύκονο",
        title: "Άφιξη στη Μύκονο",
        items: [
          { label: "Αεροδρόμιο Μυκόνου", href: "/el/aerodromio/mykonos/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου για τη Μύκονο." },
          { label: "Λιμάνι Πειραιά", href: "/el/limani/peiraias/", description: "Η Μύκονος είναι δημοφιλής προορισμός ferry από τον Πειραιά." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στη Μύκονο." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες που εξερευνούν το νησί." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς πηγαίνω από το Αεροδρόμιο Μυκόνου στο ξενοδοχείο μου;", answer: "Μια ιδιωτική μεταφορά σας πηγαίνει απευθείας από το αεροδρόμιο στο ξενοδοχείο σας — δείτε τη σελίδα μας για το Αεροδρόμιο Μυκόνου." },
          { question: "Μπορώ να κλείσω μεταφορά από το λιμάνι ferry προς το ξενοδοχείο μου;", answer: "Ναι, οι μεταφορές λιμανιού προς ξενοδοχείο μπορούν να οργανωθούν σύμφωνα με την ώρα άφιξης του ferry σας." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά μεταξύ παραλιών ή περιοχών θερέτρων στη Μύκονο;", answer: "Ναι, οι μεταφορές σε όλο το νησί μπορούν να ζητηθούν μέσω της φόρμας προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα στη Μύκονο;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στη Μύκονο;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationRhodes: {
    en: {
      meta: {
        title: "Private Transfers in Rhodes – Airport & Island Travel",
        description:
          "Book a private transfer in Rhodes between the airport, Rhodes Town and resort areas around the island. Comfortable door-to-door travel.",
      },
      breadcrumbLabel: "Rhodes",
      hero: {
        eyebrow: "Rhodes, Dodecanese",
        title: "Private Transfers in Rhodes",
        description: "Book a private transfer between Rhodes Airport, Rhodes Town and resort areas around the island.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Rhodes",
        title: "Getting Around Rhodes",
        paragraphs: [
          "Rhodes is the largest of the Dodecanese islands, known for Rhodes Town and its medieval old town, as well as resort areas around the coast. The island is served by Rhodes International Airport, southwest of Rhodes Town.",
          "A private transfer connects the airport directly with your hotel, whether in Rhodes Town or one of the island's resort areas further afield.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Rhodes",
        title: "Arriving in Rhodes",
        items: [
          { label: "Rhodes Airport", href: "/airport/rhodes-airport/", description: "See our dedicated airport transfer information for Rhodes." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey on Rhodes." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups exploring the island." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Rhodes Airport to my hotel?", answer: "A private transfer takes you directly from the airport to your hotel — see our Rhodes Airport page for details." },
          { question: "Can I book a private transfer to a resort outside Rhodes Town?", answer: "Yes, transfers to resort areas around the island can be requested through the quote form." },
          { question: "Can you arrange a transfer for a group on Rhodes?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Rhodes Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στη Ρόδο – Αεροδρόμιο & Νησί",
        description:
          "Κλείστε ιδιωτική μεταφορά στη Ρόδο μεταξύ αεροδρομίου, πόλης της Ρόδου και θερέτρων του νησιού. Άνετη μεταφορά από πόρτα σε πόρτα.",
      },
      breadcrumbLabel: "Ρόδος",
      hero: {
        eyebrow: "Ρόδος, Δωδεκάνησα",
        title: "Ιδιωτικές Μεταφορές στη Ρόδο",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ του Αεροδρομίου Ρόδου, της πόλης της Ρόδου και θερέτρων του νησιού.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τη Ρόδο",
        title: "Μετακινήσεις στη Ρόδο",
        paragraphs: [
          "Η Ρόδος είναι το μεγαλύτερο νησί των Δωδεκανήσων, γνωστό για την πόλη της Ρόδου και τη μεσαιωνική παλιά της πόλη, καθώς και για τις παράκτιες περιοχές θερέτρων της. Το νησί εξυπηρετείται από το Διεθνές Αεροδρόμιο Ρόδου, νοτιοδυτικά της πόλης της Ρόδου.",
          "Μια ιδιωτική μεταφορά συνδέει το αεροδρόμιο απευθείας με το ξενοδοχείο σας, είτε στην πόλη της Ρόδου είτε σε ένα από τα θέρετρα του νησιού πιο μακριά.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στη Ρόδο",
        title: "Άφιξη στη Ρόδο",
        items: [
          { label: "Αεροδρόμιο Ρόδου", href: "/el/aerodromio/rodos/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου για τη Ρόδο." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στη Ρόδο." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες που εξερευνούν το νησί." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς πηγαίνω από το Αεροδρόμιο Ρόδου στο ξενοδοχείο μου;", answer: "Μια ιδιωτική μεταφορά σας πηγαίνει απευθείας από το αεροδρόμιο στο ξενοδοχείο σας — δείτε τη σελίδα μας για το Αεροδρόμιο Ρόδου." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά προς θέρετρο εκτός της πόλης της Ρόδου;", answer: "Ναι, οι μεταφορές προς θέρετρα του νησιού μπορούν να ζητηθούν μέσω της φόρμας προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα στη Ρόδο;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στη Ρόδο;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationCorfu: {
    en: {
      meta: {
        title: "Private Transfers in Corfu – Airport & Island Travel",
        description:
          "Book a private transfer in Corfu between the airport, Corfu Town and resort areas around the island. Comfortable door-to-door travel.",
      },
      breadcrumbLabel: "Corfu",
      hero: {
        eyebrow: "Corfu, Ionian Islands",
        title: "Private Transfers in Corfu",
        description: "Book a private transfer between Corfu Airport, Corfu Town and resort areas around the island.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Corfu",
        title: "Getting Around Corfu",
        paragraphs: [
          "Corfu is one of the largest islands in the Ionian Sea, known for Corfu Town's old town and a coastline of resort areas. The island is served by Corfu International Airport, located just south of Corfu Town.",
          "Because the airport is close to the town, transfers to central Corfu are relatively short, while resort areas further around the island take longer. A private transfer connects the airport directly with your accommodation.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Corfu",
        title: "Arriving in Corfu",
        items: [
          { label: "Corfu Airport", href: "/airport/corfu-airport/", description: "See our dedicated airport transfer information for Corfu." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey on Corfu." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups exploring the island." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Corfu Airport to my hotel?", answer: "A private transfer takes you directly from the airport to your hotel — see our Corfu Airport page for details." },
          { question: "Is the airport close to Corfu Town?", answer: "Yes, Corfu Airport is just south of Corfu Town, making transfers to the town relatively short." },
          { question: "Can I book a private transfer to a resort elsewhere on the island?", answer: "Yes, transfers around Corfu can be requested through the quote form." },
          { question: "Can you arrange a transfer for a group on Corfu?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Corfu Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στην Κέρκυρα – Αεροδρόμιο & Νησί",
        description:
          "Κλείστε ιδιωτική μεταφορά στην Κέρκυρα μεταξύ αεροδρομίου, πόλης της Κέρκυρας και θερέτρων του νησιού. Άνετη μεταφορά από πόρτα σε πόρτα.",
      },
      breadcrumbLabel: "Κέρκυρα",
      hero: {
        eyebrow: "Κέρκυρα, Ιόνια Νησιά",
        title: "Ιδιωτικές Μεταφορές στην Κέρκυρα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ του Αεροδρομίου Κέρκυρας, της πόλης της Κέρκυρας και θερέτρων του νησιού.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με την Κέρκυρα",
        title: "Μετακινήσεις στην Κέρκυρα",
        paragraphs: [
          "Η Κέρκυρα είναι ένα από τα μεγαλύτερα νησιά του Ιονίου Πελάγους, γνωστό για την παλιά πόλη της Κέρκυρας και μια ακτογραμμή γεμάτη θέρετρα. Το νησί εξυπηρετείται από το Διεθνές Αεροδρόμιο Κέρκυρας, που βρίσκεται αμέσως νότια της πόλης.",
          "Επειδή το αεροδρόμιο είναι κοντά στην πόλη, οι μεταφορές προς το κέντρο της Κέρκυρας είναι σχετικά σύντομες, ενώ οι περιοχές θερέτρων πιο μακριά στο νησί απαιτούν περισσότερο χρόνο. Μια ιδιωτική μεταφορά συνδέει το αεροδρόμιο απευθείας με το κατάλυμά σας.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στην Κέρκυρα",
        title: "Άφιξη στην Κέρκυρα",
        items: [
          { label: "Αεροδρόμιο Κέρκυρας", href: "/el/aerodromio/kerkyra/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου για την Κέρκυρα." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στην Κέρκυρα." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες που εξερευνούν το νησί." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς πηγαίνω από το Αεροδρόμιο Κέρκυρας στο ξενοδοχείο μου;", answer: "Μια ιδιωτική μεταφορά σας πηγαίνει απευθείας από το αεροδρόμιο στο ξενοδοχείο σας — δείτε τη σελίδα μας για το Αεροδρόμιο Κέρκυρας." },
          { question: "Είναι το αεροδρόμιο κοντά στην πόλη της Κέρκυρας;", answer: "Ναι, το Αεροδρόμιο Κέρκυρας βρίσκεται αμέσως νότια της πόλης, καθιστώντας τις μεταφορές προς την πόλη σχετικά σύντομες." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά προς θέρετρο αλλού στο νησί;", answer: "Ναι, οι μεταφορές σε όλη την Κέρκυρα μπορούν να ζητηθούν μέσω της φόρμας προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα στην Κέρκυρα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στην Κέρκυρα;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationZakynthos: {
    en: {
      meta: {
        title: "Private Transfers in Zakynthos – Book Your Island Ride",
        description:
          "Book a private transfer in Zakynthos between the airport, Zakynthos Town and hotels around the island. Comfortable door-to-door travel.",
      },
      breadcrumbLabel: "Zakynthos",
      hero: {
        eyebrow: "Zakynthos, Ionian Islands",
        title: "Private Transfers in Zakynthos",
        description: "Book a private transfer between the airport, Zakynthos Town and hotels around the island.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Zakynthos",
        title: "Getting Around Zakynthos",
        paragraphs: [
          "Zakynthos is an island in the Ionian Sea, served by Zakynthos International Airport near the island's main town. Private transportation covers transfers from the airport to hotels and resort areas around the island.",
          "As with other islands, a pre-arranged private transfer means your pickup is organised around your flight before you travel, rather than relying on options found on arrival.",
        ],
      },
      gettingHere: {
        eyebrow: "Related Services",
        title: "How We Can Help",
        items: [
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey on Zakynthos, including airport transfers." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups exploring the island." },
          { label: "Airport Transfers", href: "/airport-transfers/", description: "See our general airport transfer service covering airports across Greece." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a private transfer from Zakynthos Airport to my hotel?", answer: "Yes, describe your flight and accommodation details when requesting a quote through our private transfer service." },
          { question: "Can I book a transfer to a resort elsewhere on the island?", answer: "Yes, transfers around Zakynthos can be requested through the quote form." },
          { question: "Can you arrange a transfer for a group on Zakynthos?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Zakynthos Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στη Ζάκυνθο – Κλείστε το Ταξίδι σας",
        description:
          "Κλείστε ιδιωτική μεταφορά στη Ζάκυνθο μεταξύ αεροδρομίου, πόλης της Ζακύνθου και ξενοδοχείων του νησιού. Άνετη μεταφορά από πόρτα σε πόρτα.",
      },
      breadcrumbLabel: "Ζάκυνθος",
      hero: {
        eyebrow: "Ζάκυνθος, Ιόνια Νησιά",
        title: "Ιδιωτικές Μεταφορές στη Ζάκυνθο",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ αεροδρομίου, πόλης της Ζακύνθου και ξενοδοχείων του νησιού.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τη Ζάκυνθο",
        title: "Μετακινήσεις στη Ζάκυνθο",
        paragraphs: [
          "Η Ζάκυνθος είναι ένα νησί του Ιονίου Πελάγους, που εξυπηρετείται από το Διεθνές Αεροδρόμιο Ζακύνθου κοντά στην κύρια πόλη του νησιού. Η ιδιωτική μεταφορά καλύπτει μεταφορές από το αεροδρόμιο προς ξενοδοχεία και περιοχές θερέτρων σε όλο το νησί.",
          "Όπως και σε άλλα νησιά, μια προκαθορισμένη ιδιωτική μεταφορά σημαίνει ότι η παραλαβή σας οργανώνεται σύμφωνα με την πτήση σας πριν ταξιδέψετε, αντί να βασίζεστε σε επιλογές που βρίσκετε κατά την άφιξη.",
        ],
      },
      gettingHere: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Πώς Μπορούμε να Βοηθήσουμε",
        items: [
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στη Ζάκυνθο, συμπεριλαμβανομένων μεταφορών αεροδρομίου." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες που εξερευνούν το νησί." },
          { label: "Μεταφορές Αεροδρομίου", href: "/el/metafores-aerodromiou/", description: "Δείτε τη γενική μας υπηρεσία μεταφοράς αεροδρομίου που καλύπτει αεροδρόμια σε όλη την Ελλάδα." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το Αεροδρόμιο Ζακύνθου προς το ξενοδοχείο μου;", answer: "Ναι, περιγράψτε τα στοιχεία της πτήσης και του καταλύματός σας κατά την αίτηση προσφοράς μέσω της υπηρεσίας ιδιωτικών μεταφορών μας." },
          { question: "Μπορώ να κλείσω μεταφορά προς θέρετρο αλλού στο νησί;", answer: "Ναι, οι μεταφορές σε όλη τη Ζάκυνθο μπορούν να ζητηθούν μέσω της φόρμας προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα στη Ζάκυνθο;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στη Ζάκυνθο;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationKos: {
    en: {
      meta: {
        title: "Private Transfers in Kos – Book Your Island Ride",
        description:
          "Book a private transfer in Kos between the airport, Kos Town and hotels around the island. Comfortable door-to-door travel. Get a quote today.",
      },
      breadcrumbLabel: "Kos",
      hero: {
        eyebrow: "Kos, Dodecanese",
        title: "Private Transfers in Kos",
        description: "Book a private transfer between the airport, Kos Town and hotels around the island.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Kos",
        title: "Getting Around Kos",
        paragraphs: [
          "Kos is an island in the Dodecanese, served by Kos Island International Airport “Hippocrates”. Private transportation covers transfers from the airport to Kos Town and resort areas around the island.",
          "A pre-arranged private transfer means your pickup is organised around your flight before you travel, rather than relying on options found on arrival.",
        ],
      },
      gettingHere: {
        eyebrow: "Related Services",
        title: "How We Can Help",
        items: [
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey on Kos, including airport transfers." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups exploring the island." },
          { label: "Airport Transfers", href: "/airport-transfers/", description: "See our general airport transfer service covering airports across Greece." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a private transfer from Kos Airport to my hotel?", answer: "Yes, describe your flight and accommodation details when requesting a quote through our private transfer service." },
          { question: "Can I book a transfer to a resort elsewhere on the island?", answer: "Yes, transfers around Kos can be requested through the quote form." },
          { question: "Can you arrange a transfer for a group on Kos?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Kos Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στην Κω – Κλείστε το Ταξίδι σας",
        description:
          "Κλείστε ιδιωτική μεταφορά στην Κω μεταξύ αεροδρομίου, πόλης της Κω και ξενοδοχείων του νησιού. Άνετη μεταφορά από πόρτα σε πόρτα.",
      },
      breadcrumbLabel: "Κως",
      hero: {
        eyebrow: "Κως, Δωδεκάνησα",
        title: "Ιδιωτικές Μεταφορές στην Κω",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ αεροδρομίου, πόλης της Κω και ξενοδοχείων του νησιού.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με την Κω",
        title: "Μετακινήσεις στην Κω",
        paragraphs: [
          "Η Κως είναι ένα νησί των Δωδεκανήσων, που εξυπηρετείται από το Διεθνές Αεροδρόμιο Κω «Ιπποκράτης». Η ιδιωτική μεταφορά καλύπτει μεταφορές από το αεροδρόμιο προς την πόλη της Κω και περιοχές θερέτρων του νησιού.",
          "Μια προκαθορισμένη ιδιωτική μεταφορά σημαίνει ότι η παραλαβή σας οργανώνεται σύμφωνα με την πτήση σας πριν ταξιδέψετε, αντί να βασίζεστε σε επιλογές που βρίσκετε κατά την άφιξη.",
        ],
      },
      gettingHere: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Πώς Μπορούμε να Βοηθήσουμε",
        items: [
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στην Κω, συμπεριλαμβανομένων μεταφορών αεροδρομίου." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες που εξερευνούν το νησί." },
          { label: "Μεταφορές Αεροδρομίου", href: "/el/metafores-aerodromiou/", description: "Δείτε τη γενική μας υπηρεσία μεταφοράς αεροδρομίου που καλύπτει αεροδρόμια σε όλη την Ελλάδα." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το Αεροδρόμιο της Κω προς το ξενοδοχείο μου;", answer: "Ναι, περιγράψτε τα στοιχεία της πτήσης και του καταλύματός σας κατά την αίτηση προσφοράς μέσω της υπηρεσίας ιδιωτικών μεταφορών μας." },
          { question: "Μπορώ να κλείσω μεταφορά προς θέρετρο αλλού στο νησί;", answer: "Ναι, οι μεταφορές σε όλη την Κω μπορούν να ζητηθούν μέσω της φόρμας προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα στην Κω;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στην Κω;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationNafplio: {
    en: {
      meta: {
        title: "Private Transfers to Nafplio – Book Your Ride",
        description:
          "Book a private transfer to Nafplio from Athens or Athens Airport. Comfortable door-to-door travel to the Peloponnese's waterfront town.",
      },
      breadcrumbLabel: "Nafplio",
      hero: {
        eyebrow: "Nafplio, Peloponnese",
        title: "Private Transfers to Nafplio",
        description: "Book a private transfer to Nafplio from Athens, Athens Airport, or elsewhere in the Peloponnese.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Nafplio",
        title: "Nafplio in the Peloponnese",
        paragraphs: [
          "Nafplio is a waterfront town in the Argolis area of the Peloponnese, reached by road from Athens rather than by its own airport. It's a popular day-trip and short-stay destination, often combined with a wider Peloponnese itinerary.",
          "Most visitors travel to Nafplio by private transfer from Athens or Athens Airport, making it a straightforward addition to an Athens-based trip.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Nafplio",
        title: "Travelling to Nafplio",
        items: [
          { label: "Athens to Nafplio", href: "/route/athens-to-nafplio/", description: "See our dedicated route page for private transfers between Athens and Nafplio." },
          { label: "Athens Airport to Nafplio", href: "/route/athens-airport-to-nafplio/", description: "A direct transfer from the airport, bypassing central Athens." },
          { label: "Piraeus Port to Nafplio", href: "/route/piraeus-port-to-nafplio/", description: "A direct transfer for cruise and ferry passengers continuing to Nafplio." },
          { label: "Athens to Corinth", href: "/route/athens-to-corinth/", description: "Corinth and the Corinth Canal are a common waypoint on the way to Nafplio." },
          { label: "Explore the Peloponnese", href: "/region/peloponnese/", description: "See our regional overview of transportation across the Peloponnese." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey to or from Nafplio." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a private transfer from Athens to Nafplio?", answer: "Yes, see our dedicated Athens to Nafplio route page for details." },
          { question: "Can I travel from Athens Airport directly to Nafplio?", answer: "Yes, an airport-to-Nafplio transfer can be requested through the quote form." },
          { question: "Can you arrange a transfer for a group visiting Nafplio?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Nafplio Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές προς το Ναύπλιο – Κλείστε το Ταξίδι σας",
        description:
          "Κλείστε ιδιωτική μεταφορά προς το Ναύπλιο από την Αθήνα ή το Αεροδρόμιο Αθηνών. Άνετη μεταφορά από πόρτα σε πόρτα στην παραθαλάσσια πόλη της Πελοποννήσου.",
      },
      breadcrumbLabel: "Ναύπλιο",
      hero: {
        eyebrow: "Ναύπλιο, Πελοπόννησος",
        title: "Ιδιωτικές Μεταφορές προς το Ναύπλιο",
        description: "Κλείστε ιδιωτική μεταφορά προς το Ναύπλιο από την Αθήνα, το Αεροδρόμιο Αθηνών, ή αλλού στην Πελοπόννησο.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με το Ναύπλιο",
        title: "Το Ναύπλιο στην Πελοπόννησο",
        paragraphs: [
          "Το Ναύπλιο είναι μια παραθαλάσσια πόλη στην περιοχή της Αργολίδας στην Πελοπόννησο, προσβάσιμη οδικώς από την Αθήνα και όχι μέσω δικού της αεροδρομίου. Είναι δημοφιλής προορισμός για ημερήσιες εκδρομές και σύντομες διαμονές, συχνά σε συνδυασμό με ένα ευρύτερο πρόγραμμα στην Πελοπόννησο.",
          "Οι περισσότεροι επισκέπτες ταξιδεύουν στο Ναύπλιο με ιδιωτική μεταφορά από την Αθήνα ή το Αεροδρόμιο Αθηνών, καθιστώντας το μια απλή προσθήκη σε ένα ταξίδι με βάση την Αθήνα.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στο Ναύπλιο",
        title: "Ταξίδι προς το Ναύπλιο",
        items: [
          { label: "Αθήνα προς Ναύπλιο", href: "/el/diadromi/athina-nafplio/", description: "Δείτε την ειδική μας σελίδα διαδρομής για ιδιωτικές μεταφορές μεταξύ Αθήνας και Ναυπλίου." },
          { label: "Αεροδρόμιο Αθηνών προς Ναύπλιο", href: "/el/diadromi/aerodromio-athinas-nafplio/", description: "Απευθείας μεταφορά από το αεροδρόμιο, παρακάμπτοντας το κέντρο της Αθήνας." },
          { label: "Πειραιάς προς Ναύπλιο", href: "/el/diadromi/peiraias-nafplio/", description: "Απευθείας μεταφορά για επιβάτες κρουαζιέρας και ferry που συνεχίζουν προς το Ναύπλιο." },
          { label: "Αθήνα προς Κόρινθο", href: "/el/diadromi/athina-korinthos/", description: "Η Κόρινθος και η Διώρυγα της Κορίνθου είναι συνηθισμένη στάση στον δρόμο προς το Ναύπλιο." },
          { label: "Εξερευνήστε την Πελοπόννησο", href: "/el/periochi/peloponnisos/", description: "Δείτε τη γενική μας επισκόπηση μεταφορών σε όλη την Πελοπόννησο." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή προς ή από το Ναύπλιο." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από την Αθήνα προς το Ναύπλιο;", answer: "Ναι, δείτε την ειδική μας σελίδα διαδρομής Αθήνα προς Ναύπλιο για λεπτομέρειες." },
          { question: "Μπορώ να ταξιδέψω από το Αεροδρόμιο Αθηνών απευθείας προς το Ναύπλιο;", answer: "Ναι, μια μεταφορά αεροδρομίου προς Ναύπλιο μπορεί να ζητηθεί μέσω της φόρμας προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που επισκέπτεται το Ναύπλιο;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στο Ναύπλιο;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationMeteora: {
    en: {
      meta: {
        title: "Private Transfers to Meteora – Book Your Ride",
        description:
          "Book a private transfer to Meteora from Athens or Thessaloniki. Comfortable door-to-door travel to the rock-pillar monasteries of Thessaly.",
      },
      breadcrumbLabel: "Meteora",
      hero: {
        eyebrow: "Meteora, Thessaly",
        title: "Private Transfers to Meteora",
        description: "Book a private transfer to Meteora from Athens, Thessaloniki, or elsewhere in Greece.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Meteora",
        title: "Meteora in Thessaly",
        paragraphs: [
          "Meteora is a site in Thessaly known for its monasteries built on top of natural rock pillars, near the town of Kalambaka. It's a long-distance destination from Athens, typically visited as part of a multi-day itinerary rather than a short day trip.",
          "Most visitors reach Meteora by private transfer from Athens, though it can also be reached from Thessaloniki given its position in central-northern Greece.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Meteora",
        title: "Travelling to Meteora",
        items: [
          { label: "Athens to Meteora", href: "/route/athens-to-meteora/", description: "See our dedicated route page for private transfers between Athens and Meteora." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "City-to-City Transfers", href: "/city-transfers/", description: "See our general city-to-city transfer service covering long-distance routes across Greece." },
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey to or from Meteora." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a private transfer from Athens to Meteora?", answer: "Yes, see our dedicated Athens to Meteora route page for details." },
          { question: "Is Meteora a long journey from Athens?", answer: "Yes, it's a long-distance journey, typically planned as part of a multi-day itinerary rather than a short day trip." },
          { question: "Can you arrange a transfer for a group visiting Meteora?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Meteora Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές προς τα Μετέωρα – Κλείστε το Ταξίδι σας",
        description:
          "Κλείστε ιδιωτική μεταφορά προς τα Μετέωρα από την Αθήνα ή τη Θεσσαλονίκη. Άνετη μεταφορά από πόρτα σε πόρτα στα μοναστήρια πάνω σε βράχους της Θεσσαλίας.",
      },
      breadcrumbLabel: "Μετέωρα",
      hero: {
        eyebrow: "Μετέωρα, Θεσσαλία",
        title: "Ιδιωτικές Μεταφορές προς τα Μετέωρα",
        description: "Κλείστε ιδιωτική μεταφορά προς τα Μετέωρα από την Αθήνα, τη Θεσσαλονίκη, ή αλλού στην Ελλάδα.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τα Μετέωρα",
        title: "Τα Μετέωρα στη Θεσσαλία",
        paragraphs: [
          "Τα Μετέωρα είναι μια περιοχή στη Θεσσαλία γνωστή για τα μοναστήρια της χτισμένα πάνω σε φυσικούς βράχους, κοντά στην πόλη της Καλαμπάκας. Είναι προορισμός μεγάλης απόστασης από την Αθήνα, που συνήθως επισκέπτεται στο πλαίσιο ενός πολυήμερου προγράμματος και όχι μιας σύντομης ημερήσιας εκδρομής.",
          "Οι περισσότεροι επισκέπτες φτάνουν στα Μετέωρα με ιδιωτική μεταφορά από την Αθήνα, αν και μπορούν επίσης να προσεγγιστούν από τη Θεσσαλονίκη λόγω της θέσης τους στην κεντροβόρεια Ελλάδα.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στα Μετέωρα",
        title: "Ταξίδι προς τα Μετέωρα",
        items: [
          { label: "Αθήνα προς Μετέωρα", href: "/el/diadromi/athina-meteora/", description: "Δείτε την ειδική μας σελίδα διαδρομής για ιδιωτικές μεταφορές μεταξύ Αθήνας και Μετεώρων." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Μεταφορές Μεταξύ Πόλεων", href: "/el/metafores-metaxy-poleon/", description: "Δείτε τη γενική μας υπηρεσία μεταφοράς μεταξύ πόλεων που καλύπτει διαδρομές μεγάλων αποστάσεων σε όλη την Ελλάδα." },
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή προς ή από τα Μετέωρα." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από την Αθήνα προς τα Μετέωρα;", answer: "Ναι, δείτε την ειδική μας σελίδα διαδρομής Αθήνα προς Μετέωρα για λεπτομέρειες." },
          { question: "Είναι τα Μετέωρα μακρινό ταξίδι από την Αθήνα;", answer: "Ναι, είναι ταξίδι μεγάλης απόστασης, που συνήθως σχεδιάζεται στο πλαίσιο ενός πολυήμερου προγράμματος και όχι μιας σύντομης ημερήσιας εκδρομής." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που επισκέπτεται τα Μετέωρα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στα Μετέωρα;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationAthensRiviera: {
    en: {
      meta: {
        title: "Athens Riviera Private Transfers – Glyfada, Vouliagmeni & Sounion",
        description:
          "Book a private transfer to the Athens Riviera, covering Glyfada, Voula, Vouliagmeni and the coast toward Cape Sounion. Airport and port pickup available.",
      },
      breadcrumbLabel: "Athens Riviera",
      hero: {
        eyebrow: "Athens Riviera, Attica",
        title: "Private Transfers to the Athens Riviera",
        description: "Book a private transfer to the coastal strip southeast of Athens, from Glyfada to Vouliagmeni and on toward Cape Sounion.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About the Athens Riviera",
        title: "The Coast Southeast of Athens",
        paragraphs: [
          "The Athens Riviera is the coastal stretch running southeast from central Athens along the Saronic Gulf, taking in Glyfada, Voula, Vouliagmeni, Varkiza, Lagonisi, Saronida and Anavyssos before reaching Cape Sounion at the tip of Attica. It's home to beach clubs, marinas and hotels, and is a popular base for visitors who want to combine central Athens with time by the sea.",
          "Because the Riviera stretches over a long section of coastline, journey times vary considerably depending on exactly where you're headed — Glyfada is close to both central Athens and the airport, while Vouliagmeni and the coast toward Sounion are considerably further. Most visitors arrange a private transfer directly from the airport or port rather than travelling into central Athens first.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To the Athens Riviera",
        title: "Arriving on the Athens Riviera",
        items: [
          { label: "Athens Airport to Athens Riviera", href: "/route/athens-airport-to-athens-riviera/", description: "A direct private transfer from the airport to the Riviera coast." },
          { label: "Piraeus Port", href: "/port/piraeus/", description: "Continue along the coast from Piraeus if you're arriving by cruise or ferry." },
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Glyfada", href: "/destination/glyfada/", description: "The closest Riviera town to the airport, known for its marina and beach clubs." },
          { label: "Vouliagmeni", href: "/destination/vouliagmeni/", description: "Further along the coast, known for its thermal lake and upscale resorts." },
          { label: "Athens to Cape Sounion", href: "/route/athens-to-cape-sounion/", description: "Continue along the coast to the Temple of Poseidon at Cape Sounion." },
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey along the Riviera." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "What towns are included in the Athens Riviera?", answer: "The coastal strip generally covers Glyfada, Voula, Vouliagmeni, Varkiza, Lagonisi, Saronida and Anavyssos, extending toward Cape Sounion." },
          { question: "Can I book a private transfer from Athens Airport directly to the Riviera?", answer: "Yes, see our dedicated Athens Airport to Athens Riviera route page for details." },
          { question: "Does journey time vary along the Riviera?", answer: "Yes, Glyfada is closer to both central Athens and the airport, while Vouliagmeni and the coast toward Sounion take longer to reach." },
          { question: "Can I combine a Riviera transfer with a visit to Cape Sounion?", answer: "Yes, mention your plans when requesting a quote and this can be arranged as part of your journey." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Athens Riviera Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στην Παραλιακή Αθήνας – Γλυφάδα, Βουλιαγμένη & Σούνιο",
        description:
          "Κλείστε ιδιωτική μεταφορά προς την παραλιακή ζώνη της Αθήνας, με Γλυφάδα, Βούλα, Βουλιαγμένη και την ακτή προς το Σούνιο. Παραλαβή από αεροδρόμιο και λιμάνι.",
      },
      breadcrumbLabel: "Παραλιακή Αθήνας",
      hero: {
        eyebrow: "Παραλιακή Αθήνας, Αττική",
        title: "Ιδιωτικές Μεταφορές στην Παραλιακή Αθήνας",
        description: "Κλείστε ιδιωτική μεταφορά προς την παράκτια ζώνη νοτιοανατολικά της Αθήνας, από τη Γλυφάδα έως τη Βουλιαγμένη και προς το Σούνιο.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με την Παραλιακή Αθήνας",
        title: "Η Ακτή Νοτιοανατολικά της Αθήνας",
        paragraphs: [
          "Η Παραλιακή Αθήνας είναι η παράκτια ζώνη που εκτείνεται νοτιοανατολικά από το κέντρο της Αθήνας κατά μήκος του Σαρωνικού Κόλπου, περιλαμβάνοντας τη Γλυφάδα, τη Βούλα, τη Βουλιαγμένη, τη Βάρκιζα, το Λαγονήσι, τη Σαρωνίδα και την Ανάβυσσο, πριν φτάσει στο Σούνιο στο άκρο της Αττικής. Φιλοξενεί beach clubs, μαρίνες και ξενοδοχεία, και είναι δημοφιλής βάση για επισκέπτες που θέλουν να συνδυάσουν το κέντρο της Αθήνας με χρόνο δίπλα στη θάλασσα.",
          "Επειδή η παραλιακή ζώνη εκτείνεται σε μεγάλο τμήμα ακτογραμμής, οι χρόνοι διαδρομής διαφέρουν σημαντικά ανάλογα με τον ακριβή προορισμό σας — η Γλυφάδα είναι κοντά τόσο στο κέντρο της Αθήνας όσο και στο αεροδρόμιο, ενώ η Βουλιαγμένη και η ακτή προς το Σούνιο απέχουν αρκετά περισσότερο. Οι περισσότεροι επισκέπτες οργανώνουν ιδιωτική μεταφορά απευθείας από το αεροδρόμιο ή το λιμάνι αντί να περάσουν πρώτα από το κέντρο της Αθήνας.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στην Παραλιακή Αθήνας",
        title: "Άφιξη στην Παραλιακή Αθήνας",
        items: [
          { label: "Αεροδρόμιο Αθηνών προς Παραλιακή", href: "/el/diadromi/aerodromio-athinas-paralia/", description: "Απευθείας ιδιωτική μεταφορά από το αεροδρόμιο προς την παραλιακή ακτή." },
          { label: "Λιμάνι Πειραιά", href: "/el/limani/peiraias/", description: "Συνεχίστε κατά μήκος της ακτής από τον Πειραιά αν φτάνετε με κρουαζιέρα ή ferry." },
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Γλυφάδα", href: "/el/proorismos/glyfada/", description: "Το πλησιέστερο σημείο της Παραλιακής στο αεροδρόμιο, γνωστό για τη μαρίνα και τα beach clubs του." },
          { label: "Βουλιαγμένη", href: "/el/proorismos/vouliagmeni/", description: "Πιο μακριά στην ακτή, γνωστή για τη λίμνη της και τα πολυτελή θέρετρα." },
          { label: "Αθήνα προς Σούνιο", href: "/el/diadromi/athina-sounio/", description: "Συνεχίστε κατά μήκος της ακτής προς τον Ναό του Ποσειδώνα στο Σούνιο." },
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στην παραλιακή ζώνη." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Ποιες περιοχές περιλαμβάνει η Παραλιακή Αθήνας;", answer: "Η παράκτια ζώνη περιλαμβάνει γενικά τη Γλυφάδα, τη Βούλα, τη Βουλιαγμένη, τη Βάρκιζα, το Λαγονήσι, τη Σαρωνίδα και την Ανάβυσσο, επεκτεινόμενη προς το Σούνιο." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το Αεροδρόμιο Αθηνών απευθείας προς την παραλιακή;", answer: "Ναι, δείτε την ειδική μας σελίδα διαδρομής Αεροδρόμιο Αθηνών προς Παραλιακή για λεπτομέρειες." },
          { question: "Διαφέρει ο χρόνος διαδρομής κατά μήκος της παραλιακής;", answer: "Ναι, η Γλυφάδα είναι πιο κοντά τόσο στο κέντρο της Αθήνας όσο και στο αεροδρόμιο, ενώ η Βουλιαγμένη και η ακτή προς το Σούνιο απαιτούν περισσότερο χρόνο." },
          { question: "Μπορώ να συνδυάσω μεταφορά στην παραλιακή με επίσκεψη στο Σούνιο;", answer: "Ναι, αναφέρετε τα σχέδιά σας κατά την αίτηση προσφοράς και αυτό μπορεί να οργανωθεί ως μέρος του ταξιδιού σας." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στην Παραλιακή Αθήνας;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationGlyfada: {
    en: {
      meta: {
        title: "Private Transfers to Glyfada – Athens Riviera",
        description:
          "Book a private transfer to Glyfada, the closest Athens Riviera town to the airport, known for its marina, beach clubs and shopping street.",
      },
      breadcrumbLabel: "Glyfada",
      hero: {
        eyebrow: "Glyfada, Athens Riviera",
        title: "Private Transfers to Glyfada",
        description: "Book a private transfer to Glyfada, the closest part of the Athens Riviera to both the airport and central Athens.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Glyfada",
        title: "Glyfada on the Athens Riviera",
        paragraphs: [
          "Glyfada is an affluent coastal suburb southeast of central Athens, generally considered the entry point to the Athens Riviera. It's known for its marina, beach clubs, and Metaxa Street, a well-known shopping and dining strip, and is a popular base for both leisure and business visitors.",
          "Glyfada is the closest Riviera destination to Athens Airport, making it a common direct transfer for arriving visitors who want to reach the coast without stopping in central Athens first.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Glyfada",
        title: "Arriving in Glyfada",
        items: [
          { label: "Athens Airport to Glyfada", href: "/route/athens-airport-to-glyfada/", description: "A direct private transfer from the airport, the shortest of the Riviera routes." },
          { label: "Athens Riviera", href: "/destination/athens-riviera/", description: "See our overview of the wider Athens Riviera coastline." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Vouliagmeni", href: "/destination/vouliagmeni/", description: "Continue further along the coast to Vouliagmeni." },
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey in Glyfada." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How far is Glyfada from Athens Airport?", answer: "Glyfada is the closest Athens Riviera destination to the airport — see our dedicated Athens Airport to Glyfada route page for journey details." },
          { question: "Can I book a private transfer from central Athens to Glyfada?", answer: "Yes, mention your pickup location when requesting a quote." },
          { question: "Can I continue to Vouliagmeni or Cape Sounion from Glyfada?", answer: "Yes, mention your full itinerary when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Glyfada Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στη Γλυφάδα – Παραλιακή Αθήνας",
        description:
          "Κλείστε ιδιωτική μεταφορά προς τη Γλυφάδα, το πλησιέστερο σημείο της Παραλιακής Αθήνας στο αεροδρόμιο, γνωστό για τη μαρίνα και τα beach clubs της.",
      },
      breadcrumbLabel: "Γλυφάδα",
      hero: {
        eyebrow: "Γλυφάδα, Παραλιακή Αθήνας",
        title: "Ιδιωτικές Μεταφορές στη Γλυφάδα",
        description: "Κλείστε ιδιωτική μεταφορά προς τη Γλυφάδα, το πλησιέστερο σημείο της Παραλιακής τόσο στο αεροδρόμιο όσο και στο κέντρο της Αθήνας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τη Γλυφάδα",
        title: "Η Γλυφάδα στην Παραλιακή Αθήνας",
        paragraphs: [
          "Η Γλυφάδα είναι ένα εύπορο παράκτιο προάστιο νοτιοανατολικά του κέντρου της Αθήνας, που θεωρείται γενικά η είσοδος στην Παραλιακή Αθήνας. Είναι γνωστή για τη μαρίνα της, τα beach clubs και την οδό Μεταξά, μια γνωστή εμπορική και γαστρονομική οδό, και αποτελεί δημοφιλή βάση τόσο για αναψυχή όσο και για επαγγελματικούς επισκέπτες.",
          "Η Γλυφάδα είναι ο πλησιέστερος προορισμός της Παραλιακής στο Αεροδρόμιο Αθηνών, καθιστώντας την συνηθισμένη απευθείας μεταφορά για επισκέπτες που φτάνουν και θέλουν να φτάσουν στην ακτή χωρίς να περάσουν πρώτα από το κέντρο.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στη Γλυφάδα",
        title: "Άφιξη στη Γλυφάδα",
        items: [
          { label: "Αεροδρόμιο Αθηνών προς Γλυφάδα", href: "/el/diadromi/aerodromio-athinas-glyfada/", description: "Απευθείας ιδιωτική μεταφορά από το αεροδρόμιο, η συντομότερη διαδρομή προς την Παραλιακή." },
          { label: "Παραλιακή Αθήνας", href: "/el/proorismos/paralia-athinas/", description: "Δείτε την επισκόπησή μας για την ευρύτερη ακτή της Παραλιακής Αθήνας." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Βουλιαγμένη", href: "/el/proorismos/vouliagmeni/", description: "Συνεχίστε περαιτέρω κατά μήκος της ακτής προς τη Βουλιαγμένη." },
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στη Γλυφάδα." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο απέχει η Γλυφάδα από το Αεροδρόμιο Αθηνών;", answer: "Η Γλυφάδα είναι ο πλησιέστερος προορισμός της Παραλιακής στο αεροδρόμιο — δείτε την ειδική μας σελίδα διαδρομής Αεροδρόμιο Αθηνών προς Γλυφάδα για λεπτομέρειες." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το κέντρο της Αθήνας προς τη Γλυφάδα;", answer: "Ναι, αναφέρετε το σημείο παραλαβής σας κατά την αίτηση προσφοράς." },
          { question: "Μπορώ να συνεχίσω προς τη Βουλιαγμένη ή το Σούνιο από τη Γλυφάδα;", answer: "Ναι, αναφέρετε το πλήρες πρόγραμμά σας κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στη Γλυφάδα;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationVouliagmeni: {
    en: {
      meta: {
        title: "Private Transfers to Vouliagmeni – Athens Riviera",
        description:
          "Book a private transfer to Vouliagmeni, known for its thermal lake and upscale resorts on the Athens Riviera. Airport and city pickup available.",
      },
      breadcrumbLabel: "Vouliagmeni",
      hero: {
        eyebrow: "Vouliagmeni, Athens Riviera",
        title: "Private Transfers to Vouliagmeni",
        description: "Book a private transfer to Vouliagmeni, further along the Athens Riviera coast beyond Glyfada.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Vouliagmeni",
        title: "Vouliagmeni on the Athens Riviera",
        paragraphs: [
          "Vouliagmeni lies further along the Athens Riviera coast beyond Glyfada and Voula, known for Lake Vouliagmeni, a natural thermal lake, and a stretch of upscale resorts and beach clubs. It sits on a small peninsula with views across the Saronic Gulf.",
          "Because it's further from the airport and central Athens than Glyfada, most visitors arrange a private transfer directly rather than connecting through the city first, particularly when arriving with luggage for a resort stay.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Vouliagmeni",
        title: "Arriving in Vouliagmeni",
        items: [
          { label: "Athens Airport to Vouliagmeni", href: "/route/athens-airport-to-vouliagmeni/", description: "A direct private transfer from the airport to Vouliagmeni." },
          { label: "Athens Riviera", href: "/destination/athens-riviera/", description: "See our overview of the wider Athens Riviera coastline." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Glyfada", href: "/destination/glyfada/", description: "Explore Glyfada, closer to the airport along the same coast." },
          { label: "Athens to Cape Sounion", href: "/route/athens-to-cape-sounion/", description: "Continue further along the coast to Cape Sounion." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Athens Airport to Vouliagmeni?", answer: "See our dedicated Athens Airport to Vouliagmeni route page for journey details." },
          { question: "Is Vouliagmeni further from the airport than Glyfada?", answer: "Yes, Vouliagmeni is further along the Riviera coast than Glyfada, so the journey takes a little longer." },
          { question: "Can I continue on to Cape Sounion from Vouliagmeni?", answer: "Yes, mention your plans when requesting a quote and this can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Vouliagmeni Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στη Βουλιαγμένη – Παραλιακή Αθήνας",
        description:
          "Κλείστε ιδιωτική μεταφορά προς τη Βουλιαγμένη, γνωστή για τη λίμνη της και τα πολυτελή θέρετρα στην Παραλιακή Αθήνας. Παραλαβή από αεροδρόμιο και πόλη.",
      },
      breadcrumbLabel: "Βουλιαγμένη",
      hero: {
        eyebrow: "Βουλιαγμένη, Παραλιακή Αθήνας",
        title: "Ιδιωτικές Μεταφορές στη Βουλιαγμένη",
        description: "Κλείστε ιδιωτική μεταφορά προς τη Βουλιαγμένη, πιο μακριά στην ακτή της Παραλιακής Αθήνας πέρα από τη Γλυφάδα.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τη Βουλιαγμένη",
        title: "Η Βουλιαγμένη στην Παραλιακή Αθήνας",
        paragraphs: [
          "Η Βουλιαγμένη βρίσκεται πιο μακριά στην ακτή της Παραλιακής Αθήνας πέρα από τη Γλυφάδα και τη Βούλα, γνωστή για τη Λίμνη Βουλιαγμένης, μια φυσική θερμή λίμνη, και μια σειρά από πολυτελή θέρετρα και beach clubs. Βρίσκεται σε μια μικρή χερσόνησο με θέα στον Σαρωνικό Κόλπο.",
          "Επειδή απέχει περισσότερο από το αεροδρόμιο και το κέντρο της Αθήνας σε σχέση με τη Γλυφάδα, οι περισσότεροι επισκέπτες οργανώνουν ιδιωτική μεταφορά απευθείας αντί να περάσουν πρώτα από την πόλη, ιδιαίτερα όταν φτάνουν με αποσκευές για διαμονή σε θέρετρο.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στη Βουλιαγμένη",
        title: "Άφιξη στη Βουλιαγμένη",
        items: [
          { label: "Αεροδρόμιο Αθηνών προς Βουλιαγμένη", href: "/el/diadromi/aerodromio-athinas-vouliagmeni/", description: "Απευθείας ιδιωτική μεταφορά από το αεροδρόμιο προς τη Βουλιαγμένη." },
          { label: "Παραλιακή Αθήνας", href: "/el/proorismos/paralia-athinas/", description: "Δείτε την επισκόπησή μας για την ευρύτερη ακτή της Παραλιακής Αθήνας." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Γλυφάδα", href: "/el/proorismos/glyfada/", description: "Εξερευνήστε τη Γλυφάδα, πιο κοντά στο αεροδρόμιο στην ίδια ακτή." },
          { label: "Αθήνα προς Σούνιο", href: "/el/diadromi/athina-sounio/", description: "Συνεχίστε περαιτέρω κατά μήκος της ακτής προς το Σούνιο." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς πηγαίνω από το Αεροδρόμιο Αθηνών στη Βουλιαγμένη;", answer: "Δείτε την ειδική μας σελίδα διαδρομής Αεροδρόμιο Αθηνών προς Βουλιαγμένη για λεπτομέρειες." },
          { question: "Απέχει η Βουλιαγμένη περισσότερο από το αεροδρόμιο σε σχέση με τη Γλυφάδα;", answer: "Ναι, η Βουλιαγμένη βρίσκεται πιο μακριά στην ακτή της Παραλιακής από τη Γλυφάδα, οπότε το ταξίδι διαρκεί λίγο περισσότερο." },
          { question: "Μπορώ να συνεχίσω προς το Σούνιο από τη Βουλιαγμένη;", answer: "Ναι, αναφέρετε τα σχέδιά σας κατά την αίτηση προσφοράς και αυτό μπορεί να οργανωθεί." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στη Βουλιαγμένη;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  athensDayTrips: {
    en: {
      meta: {
        title: "Private Day Trips from Athens – Book Your Excursion",
        description:
          "Explore private day trips from Athens to Cape Sounion, Delphi, Nafplio, Corinth and Meteora. Private vehicle, flexible itinerary. Get a quote.",
      },
      breadcrumbLabel: "Day Trips",
      hero: {
        eyebrow: "Private Day Trips",
        title: "Private Day Trips from Athens",
        description: "A private vehicle and driver for a day trip from Athens, with a flexible itinerary and return journey included.",
        primaryLabel: "Book Your Day Trip",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Our Day Trips",
        title: "How a Private Day Trip Works",
        paragraphs: [
          "A private day trip is different from a one-way transfer: it includes your pickup in Athens, private transportation to the destination, time to explore, and the return journey, typically with the same vehicle and driver waiting or returning at an agreed time. This gives you a flexible, unhurried itinerary compared to a fixed-schedule group tour.",
          "The most popular day trips from Athens cover the Attica coast, the mountains of central Greece, and the nearby Peloponnese — each with a different character and journey length, so it's worth choosing based on how much time you have and what interests you most.",
        ],
      },
      gettingHere: {
        eyebrow: "Popular Day Trips",
        title: "Choose Your Day Trip",
        items: [
          { label: "Athens to Cape Sounion", href: "/route/athens-to-cape-sounion/", description: "A half-day or sunset trip to the Temple of Poseidon, the shortest of these excursions." },
          { label: "Athens to Delphi", href: "/route/athens-to-delphi/", description: "A full-day mountain-road trip to the archaeological site of Delphi." },
          { label: "Athens to Nafplio", href: "/route/athens-to-nafplio/", description: "A day trip to the Peloponnese, often combined with Mycenae and Epidaurus along the way." },
          { label: "Athens to Corinth", href: "/route/athens-to-corinth/", description: "A shorter trip to the Corinth Canal, sometimes combined with a longer Peloponnese itinerary." },
          { label: "Athens to Meteora", href: "/route/athens-to-meteora/", description: "A long full-day (or overnight) trip to the rock-pillar monasteries of Meteora." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey, including day trips." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups on a day trip." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "What's the difference between a day trip and a one-way transfer?", answer: "A day trip includes your return journey and time at the destination, with the vehicle waiting or returning for you, rather than a single one-way journey." },
          { question: "Can I visit Mycenae and Epidaurus as part of a Nafplio day trip?", answer: "Yes, mention this when requesting a quote so it can be included in your itinerary." },
          { question: "How much time do I get at the destination?", answer: "This depends on the destination and your preferences — mention how much time you'd like when requesting a quote." },
          { question: "Can you arrange a day trip for a group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Athens Day Trip?",
        description: "Tell us which destination interests you and your passenger details, and request your private day trip quote.",
        primaryLabel: "Book Your Day Trip",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Ημερήσιες Εκδρομές από την Αθήνα – Κλείστε Τώρα",
        description:
          "Εξερευνήστε ιδιωτικές ημερήσιες εκδρομές από την Αθήνα προς Σούνιο, Δελφούς, Ναύπλιο, Κόρινθο και Μετέωρα. Ιδιωτικό όχημα, ευέλικτο πρόγραμμα.",
      },
      breadcrumbLabel: "Ημερήσιες Εκδρομές",
      hero: {
        eyebrow: "Ιδιωτικές Εκδρομές",
        title: "Ιδιωτικές Ημερήσιες Εκδρομές από την Αθήνα",
        description: "Ένα ιδιωτικό όχημα και οδηγός για μια ημερήσια εκδρομή από την Αθήνα, με ευέλικτο πρόγραμμα και την επιστροφή σας συμπεριλαμβανόμενη.",
        primaryLabel: "Κλείστε την Εκδρομή σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τις Εκδρομές μας",
        title: "Πώς Λειτουργεί μια Ιδιωτική Ημερήσια Εκδρομή",
        paragraphs: [
          "Μια ιδιωτική ημερήσια εκδρομή διαφέρει από μια απλή μεταφορά: περιλαμβάνει την παραλαβή σας στην Αθήνα, ιδιωτική μεταφορά προς τον προορισμό, χρόνο για εξερεύνηση, και την επιστροφή σας, συνήθως με το ίδιο όχημα και οδηγό που περιμένει ή επιστρέφει σε συμφωνημένη ώρα. Αυτό σας δίνει ένα ευέλικτο, χωρίς βιασύνη πρόγραμμα σε σύγκριση με μια οργανωμένη εκδρομή με σταθερό πρόγραμμα.",
          "Οι πιο δημοφιλείς ημερήσιες εκδρομές από την Αθήνα καλύπτουν την ακτή της Αττικής, τα βουνά της κεντρικής Ελλάδας και την κοντινή Πελοπόννησο — καθεμία με διαφορετικό χαρακτήρα και διάρκεια ταξιδιού, οπότε αξίζει να επιλέξετε ανάλογα με τον διαθέσιμο χρόνο σας και τα ενδιαφέροντά σας.",
        ],
      },
      gettingHere: {
        eyebrow: "Δημοφιλείς Εκδρομές",
        title: "Επιλέξτε την Εκδρομή σας",
        items: [
          { label: "Αθήνα προς Σούνιο", href: "/el/diadromi/athina-sounio/", description: "Μια εκδρομή μισής ημέρας ή ηλιοβασιλέματος στον Ναό του Ποσειδώνα, η συντομότερη από αυτές τις εκδρομές." },
          { label: "Αθήνα προς Δελφούς", href: "/el/diadromi/athina-delfoi/", description: "Μια ολοήμερη ορεινή εκδρομή προς τον αρχαιολογικό χώρο των Δελφών." },
          { label: "Αθήνα προς Ναύπλιο", href: "/el/diadromi/athina-nafplio/", description: "Μια εκδρομή προς την Πελοπόννησο, συχνά σε συνδυασμό με τις Μυκήνες και την Επίδαυρο στη διαδρομή." },
          { label: "Αθήνα προς Κόρινθο", href: "/el/diadromi/athina-korinthos/", description: "Μια συντομότερη εκδρομή προς τη Διώρυγα της Κορίνθου, μερικές φορές σε συνδυασμό με μεγαλύτερο πρόγραμμα στην Πελοπόννησο." },
          { label: "Αθήνα προς Μετέωρα", href: "/el/diadromi/athina-meteora/", description: "Μια μεγάλη ολοήμερη (ή με διανυκτέρευση) εκδρομή προς τα μοναστήρια πάνω σε βράχους των Μετεώρων." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή, συμπεριλαμβανομένων εκδρομών." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες σε ημερήσια εκδρομή." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Ποια είναι η διαφορά μεταξύ ημερήσιας εκδρομής και απλής μεταφοράς;", answer: "Μια ημερήσια εκδρομή περιλαμβάνει την επιστροφή σας και χρόνο στον προορισμό, με το όχημα να περιμένει ή να επιστρέφει για εσάς, αντί για ένα απλό μονόδρομο ταξίδι." },
          { question: "Μπορώ να επισκεφθώ τις Μυκήνες και την Επίδαυρο ως μέρος εκδρομής στο Ναύπλιο;", answer: "Ναι, αναφέρετέ το κατά την αίτηση προσφοράς ώστε να συμπεριληφθεί στο πρόγραμμά σας." },
          { question: "Πόσο χρόνο έχω στον προορισμό;", answer: "Αυτό εξαρτάται από τον προορισμό και τις προτιμήσεις σας — αναφέρετε πόσο χρόνο θα θέλατε κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε εκδρομή για ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε την Εκδρομή σας από την Αθήνα;",
        description: "Πείτε μας ποιος προορισμός σας ενδιαφέρει και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής εκδρομής σας.",
        primaryLabel: "Κλείστε την Εκδρομή σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationHalkidiki: {
    en: {
      meta: {
        title: "Private Transfers to Halkidiki – Kassandra, Sithonia & Beyond",
        description:
          "Book a private transfer to Halkidiki from Thessaloniki Airport or the Port of Thessaloniki, covering Kassandra, Sithonia and Nea Moudania. Get a quote.",
      },
      breadcrumbLabel: "Halkidiki",
      hero: {
        eyebrow: "Halkidiki, Central Macedonia",
        title: "Private Transfers to Halkidiki",
        description: "Book a private transfer to the Halkidiki peninsula from Thessaloniki Airport or the Port of Thessaloniki.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Halkidiki",
        title: "The Three Peninsulas of Halkidiki",
        paragraphs: [
          "Halkidiki is a peninsula region southeast of Thessaloniki that splits into three smaller peninsulas: Kassandra, the closest and most developed for tourism; Sithonia, further along the coast with a more forested, laid-back character; and the Athos peninsula, home to the monastic community of Mount Athos, reached via the gateway town of Ouranoupoli. Most visitors arriving from abroad land at Thessaloniki Airport and continue directly to their resort.",
          "The road into Halkidiki passes through Nea Moudania, a town on the isthmus where the peninsula meets the mainland, before the route splits toward Kassandra or continues further to Sithonia. Journey times vary considerably depending on which part of Halkidiki you're headed to, so it's worth checking your specific destination rather than assuming a single fixed transfer time for the whole region.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Halkidiki",
        title: "Arriving in Halkidiki",
        items: [
          { label: "Thessaloniki Airport to Halkidiki", href: "/route/thessaloniki-airport-to-halkidiki/", description: "A direct private transfer from the airport, the most common way visitors arrive." },
          { label: "Thessaloniki Port to Halkidiki", href: "/route/thessaloniki-port-to-halkidiki/", description: "For cruise and ferry passengers continuing on to Halkidiki." },
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "See our main airport transfer information." },
        ],
      },
      transferOptions: {
        eyebrow: "Explore Halkidiki",
        title: "Halkidiki's Sub-Destinations",
        items: [
          { label: "Kassandra", href: "/destination/kassandra/", description: "The closest and most accessible peninsula, with a long stretch of resort towns." },
          { label: "Sithonia", href: "/destination/sithonia/", description: "A quieter, more forested peninsula further along the coast." },
          { label: "Nea Moudania", href: "/destination/nea-moudania/", description: "The gateway town on the isthmus, where the road into Halkidiki begins." },
          { label: "Thessaloniki Day Trips", href: "/thessaloniki-day-trips/", description: "See our full range of private day trips from Thessaloniki." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "What are the three peninsulas of Halkidiki?", answer: "Kassandra, Sithonia, and the Athos peninsula, home to the monastic community of Mount Athos. Kassandra and Sithonia are the two peninsulas open to general tourism." },
          { question: "Can I book a private transfer from Thessaloniki Airport directly to Halkidiki?", answer: "Yes, see our dedicated Thessaloniki Airport to Halkidiki route page for details." },
          { question: "Does journey time vary depending on where in Halkidiki I'm staying?", answer: "Yes, Kassandra is generally closer to Thessaloniki than Sithonia, and journey times within each peninsula vary by exact village or resort." },
          { question: "Can I visit Mount Athos as part of a Halkidiki trip?", answer: "Mount Athos itself is a monastic community with restricted, permit-based access. Ouranoupoli, the gateway town on the Athos peninsula, is open to visitors." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Halkidiki Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στη Χαλκιδική – Κασσάνδρα, Σιθωνία & Πέρα",
        description:
          "Κλείστε ιδιωτική μεταφορά προς τη Χαλκιδική από το Αεροδρόμιο ή το Λιμάνι Θεσσαλονίκης, με κάλυψη Κασσάνδρας, Σιθωνίας και Νέων Μουδανιών.",
      },
      breadcrumbLabel: "Χαλκιδική",
      hero: {
        eyebrow: "Χαλκιδική, Κεντρική Μακεδονία",
        title: "Ιδιωτικές Μεταφορές στη Χαλκιδική",
        description: "Κλείστε ιδιωτική μεταφορά προς τη χερσόνησο της Χαλκιδικής από το Αεροδρόμιο ή το Λιμάνι Θεσσαλονίκης.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τη Χαλκιδική",
        title: "Οι Τρεις Χερσόνησοι της Χαλκιδικής",
        paragraphs: [
          "Η Χαλκιδική είναι μια περιοχή νοτιοανατολικά της Θεσσαλονίκης που χωρίζεται σε τρεις μικρότερες χερσονήσους: την Κασσάνδρα, την πλησιέστερη και πιο αναπτυγμένη τουριστικά· τη Σιθωνία, πιο μακριά στην ακτή με πιο δασώδη, ήρεμο χαρακτήρα· και τη χερσόνησο του Άθω, έδρα της μοναστικής κοινότητας του Αγίου Όρους, προσβάσιμη μέσω της πύλης της Ουρανούπολης. Οι περισσότεροι επισκέπτες από το εξωτερικό φτάνουν στο Αεροδρόμιο Θεσσαλονίκης και συνεχίζουν απευθείας προς το θέρετρό τους.",
          "Ο δρόμος προς τη Χαλκιδική περνά από τα Νέα Μουδανιά, μια πόλη στον ισθμό όπου η χερσόνησος συναντά την ηπειρωτική χώρα, πριν η διαδρομή χωριστεί προς την Κασσάνδρα ή συνεχίσει προς τη Σιθωνία. Οι χρόνοι διαδρομής διαφέρουν σημαντικά ανάλογα με το ακριβές τμήμα της Χαλκιδικής που κατευθύνεστε, οπότε αξίζει να ελέγξετε τον συγκεκριμένο προορισμό σας αντί να υποθέσετε έναν ενιαίο σταθερό χρόνο μεταφοράς για ολόκληρη την περιοχή.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στη Χαλκιδική",
        title: "Άφιξη στη Χαλκιδική",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Χαλκιδική", href: "/el/diadromi/aerodromio-thessalonikis-chalkidiki/", description: "Απευθείας ιδιωτική μεταφορά από το αεροδρόμιο, ο πιο συνηθισμένος τρόπος άφιξης." },
          { label: "Λιμάνι Θεσσαλονίκης προς Χαλκιδική", href: "/el/diadromi/limani-thessalonikis-chalkidiki/", description: "Για επιβάτες κρουαζιέρας και ferry που συνεχίζουν προς τη Χαλκιδική." },
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Δείτε τις κύριες πληροφορίες μεταφοράς αεροδρομίου μας." },
        ],
      },
      transferOptions: {
        eyebrow: "Εξερευνήστε τη Χαλκιδική",
        title: "Υπο-Προορισμοί της Χαλκιδικής",
        items: [
          { label: "Κασσάνδρα", href: "/el/proorismos/kassandra/", description: "Η πλησιέστερη και πιο προσβάσιμη χερσόνησος, με μεγάλη σειρά τουριστικών θέρετρων." },
          { label: "Σιθωνία", href: "/el/proorismos/sithonia/", description: "Μια πιο ήρεμη, δασώδης χερσόνησος πιο μακριά στην ακτή." },
          { label: "Νέα Μουδανιά", href: "/el/proorismos/nea-moudania/", description: "Η πύλη-πόλη στον ισθμό, όπου ξεκινά ο δρόμος προς τη Χαλκιδική." },
          { label: "Ημερήσιες Εκδρομές από τη Θεσσαλονίκη", href: "/el/idiotikes-ekdromes-thessaloniki/", description: "Δείτε το πλήρες φάσμα ιδιωτικών εκδρομών μας από τη Θεσσαλονίκη." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Ποιες είναι οι τρεις χερσόνησοι της Χαλκιδικής;", answer: "Η Κασσάνδρα, η Σιθωνία, και η χερσόνησος του Άθω, έδρα της μοναστικής κοινότητας του Αγίου Όρους. Η Κασσάνδρα και η Σιθωνία είναι οι δύο χερσόνησοι ανοιχτές στον γενικό τουρισμό." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης απευθείας προς τη Χαλκιδική;", answer: "Ναι, δείτε την ειδική μας σελίδα διαδρομής Αεροδρόμιο Θεσσαλονίκης προς Χαλκιδική για λεπτομέρειες." },
          { question: "Διαφέρει ο χρόνος διαδρομής ανάλογα με το πού μένω στη Χαλκιδική;", answer: "Ναι, η Κασσάνδρα είναι γενικά πιο κοντά στη Θεσσαλονίκη από τη Σιθωνία, και οι χρόνοι διαδρομής εντός κάθε χερσονήσου διαφέρουν ανάλογα με το ακριβές χωριό ή θέρετρο." },
          { question: "Μπορώ να επισκεφθώ το Άγιο Όρος ως μέρος ταξιδιού στη Χαλκιδική;", answer: "Το Άγιο Όρος είναι μοναστική κοινότητα με περιορισμένη πρόσβαση μέσω άδειας. Η Ουρανούπολη, η πύλη-πόλη στη χερσόνησο του Άθω, είναι ανοιχτή σε επισκέπτες." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στη Χαλκιδική;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationKassandra: {
    en: {
      meta: {
        title: "Private Transfers to Kassandra – Halkidiki",
        description:
          "Book a private transfer to Kassandra, the closest Halkidiki peninsula to Thessaloniki, covering Kallithea, Pefkochori, Hanioti and Sani.",
      },
      breadcrumbLabel: "Kassandra",
      hero: {
        eyebrow: "Kassandra, Halkidiki",
        title: "Private Transfers to Kassandra",
        description: "Book a private transfer to Kassandra, the westernmost and most accessible of Halkidiki's three peninsulas.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Kassandra",
        title: "Kassandra on the Halkidiki Coast",
        paragraphs: [
          "Kassandra is the closest of Halkidiki's peninsulas to Thessaloniki, reached via Nea Moudania on the isthmus. It has the longest-established tourism infrastructure in the region, with a string of resort towns along its coastline including Kallithea, Polychrono, Hanioti and Pefkochori, as well as the Sani Resort enclave on its western shore.",
          "Because Kassandra covers a fairly long stretch of coast, journey times from Thessaloniki Airport vary depending on which part of the peninsula you're travelling to — villages nearer the isthmus are reached sooner than those further south.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Kassandra",
        title: "Arriving in Kassandra",
        items: [
          { label: "Thessaloniki Airport to Kassandra", href: "/route/thessaloniki-airport-to-kassandra/", description: "A direct private transfer from the airport." },
          { label: "Halkidiki", href: "/destination/halkidiki/", description: "See our overview of the wider Halkidiki region." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Sithonia", href: "/destination/sithonia/", description: "Continue further along the coast to the neighbouring Sithonia peninsula." },
          { label: "Thessaloniki Airport to Sani Resort", href: "/route/thessaloniki-airport-to-sani-resort/", description: "A dedicated transfer to the Sani Resort enclave on Kassandra's western coast." },
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey in Kassandra." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Thessaloniki Airport to Kassandra?", answer: "See our dedicated Thessaloniki Airport to Kassandra route page for journey details." },
          { question: "What towns are on the Kassandra peninsula?", answer: "Kassandra includes towns such as Nea Moudania at its entrance, and resort areas including Kallithea, Polychrono, Hanioti and Pefkochori further along the coast, as well as the Sani Resort enclave." },
          { question: "Is Kassandra closer to Thessaloniki than Sithonia?", answer: "Yes, Kassandra is generally the closer of the two main Halkidiki peninsulas to Thessaloniki." },
          { question: "Can I be dropped directly at my resort in Kassandra?", answer: "Yes, mention your exact hotel or resort when requesting a quote so the drop-off can be planned accordingly." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Kassandra Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στην Κασσάνδρα – Χαλκιδική",
        description:
          "Κλείστε ιδιωτική μεταφορά προς την Κασσάνδρα, την πλησιέστερη χερσόνησο της Χαλκιδικής στη Θεσσαλονίκη, με κάλυψη Καλλιθέας, Πευκοχωρίου, Χανιώτη και Sani.",
      },
      breadcrumbLabel: "Κασσάνδρα",
      hero: {
        eyebrow: "Κασσάνδρα, Χαλκιδική",
        title: "Ιδιωτικές Μεταφορές στην Κασσάνδρα",
        description: "Κλείστε ιδιωτική μεταφορά προς την Κασσάνδρα, τη δυτικότερη και πιο προσβάσιμη από τις τρεις χερσονήσους της Χαλκιδικής.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με την Κασσάνδρα",
        title: "Η Κασσάνδρα στην Ακτή της Χαλκιδικής",
        paragraphs: [
          "Η Κασσάνδρα είναι η πλησιέστερη στη Θεσσαλονίκη από τις χερσονήσους της Χαλκιδικής, προσβάσιμη μέσω των Νέων Μουδανιών στον ισθμό. Διαθέτει τη μακροβιότερη τουριστική υποδομή της περιοχής, με μια σειρά θέρετρων κατά μήκος της ακτής της, όπως η Καλλιθέα, το Πολύχρονο, ο Χανιώτης και το Πευκοχώρι, καθώς και τον θύλακα του Sani Resort στη δυτική της ακτή.",
          "Επειδή η Κασσάνδρα καλύπτει ένα αρκετά μεγάλο τμήμα ακτής, οι χρόνοι διαδρομής από το Αεροδρόμιο Θεσσαλονίκης διαφέρουν ανάλογα με το τμήμα της χερσονήσου προς το οποίο ταξιδεύετε — τα χωριά πιο κοντά στον ισθμό προσεγγίζονται νωρίτερα από εκείνα πιο νότια.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στην Κασσάνδρα",
        title: "Άφιξη στην Κασσάνδρα",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Κασσάνδρα", href: "/el/diadromi/aerodromio-thessalonikis-kassandra/", description: "Απευθείας ιδιωτική μεταφορά από το αεροδρόμιο." },
          { label: "Χαλκιδική", href: "/el/proorismos/chalkidiki/", description: "Δείτε την επισκόπησή μας για την ευρύτερη περιοχή της Χαλκιδικής." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Σιθωνία", href: "/el/proorismos/sithonia/", description: "Συνεχίστε περαιτέρω κατά μήκος της ακτής προς τη γειτονική χερσόνησο της Σιθωνίας." },
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Sani Resort", href: "/el/diadromi/aerodromio-thessalonikis-sani-resort/", description: "Ειδική μεταφορά προς τον θύλακα του Sani Resort στη δυτική ακτή της Κασσάνδρας." },
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στην Κασσάνδρα." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Θεσσαλονίκης στην Κασσάνδρα;", answer: "Δείτε την ειδική μας σελίδα διαδρομής Αεροδρόμιο Θεσσαλονίκης προς Κασσάνδρα για λεπτομέρειες ταξιδιού." },
          { question: "Ποια χωριά βρίσκονται στη χερσόνησο της Κασσάνδρας;", answer: "Η Κασσάνδρα περιλαμβάνει τα Νέα Μουδανιά στην είσοδό της, και τουριστικές περιοχές όπως η Καλλιθέα, το Πολύχρονο, ο Χανιώτης και το Πευκοχώρι πιο μακριά στην ακτή, καθώς και τον θύλακα του Sani Resort." },
          { question: "Είναι η Κασσάνδρα πιο κοντά στη Θεσσαλονίκη από τη Σιθωνία;", answer: "Ναι, η Κασσάνδρα είναι γενικά η πλησιέστερη από τις δύο κύριες χερσονήσους της Χαλκιδικής στη Θεσσαλονίκη." },
          { question: "Μπορώ να παραδοθώ απευθείας στο θέρετρό μου στην Κασσάνδρα;", answer: "Ναι, αναφέρετε το ακριβές ξενοδοχείο ή θέρετρό σας κατά την αίτηση προσφοράς ώστε να σχεδιαστεί ανάλογα η παράδοση." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στην Κασσάνδρα;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationSithonia: {
    en: {
      meta: {
        title: "Private Transfers to Sithonia – Halkidiki",
        description:
          "Book a private transfer to Sithonia, Halkidiki's more forested central peninsula, covering Neos Marmaras, Nikiti and Porto Carras.",
      },
      breadcrumbLabel: "Sithonia",
      hero: {
        eyebrow: "Sithonia, Halkidiki",
        title: "Private Transfers to Sithonia",
        description: "Book a private transfer to Sithonia, Halkidiki's central peninsula, further along the coast than Kassandra.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Sithonia",
        title: "Sithonia on the Halkidiki Coast",
        paragraphs: [
          "Sithonia is the middle of Halkidiki's three peninsulas, known for its pine forests and a generally quieter, less built-up character than Kassandra. Its main towns are Nikiti, near the peninsula's entrance, and Neos Marmaras further along the west coast, home to the large Porto Carras Grand Resort.",
          "Because Sithonia sits further from Thessaloniki than Kassandra, journey times are longer — most visitors arrange a direct private transfer from the airport rather than a bus or public transport connection, particularly when travelling with resort luggage.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Sithonia",
        title: "Arriving in Sithonia",
        items: [
          { label: "Thessaloniki Airport to Sithonia", href: "/route/thessaloniki-airport-to-sithonia/", description: "A direct private transfer from the airport." },
          { label: "Halkidiki", href: "/destination/halkidiki/", description: "See our overview of the wider Halkidiki region." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Kassandra", href: "/destination/kassandra/", description: "Explore Kassandra, closer to the airport along the same region." },
          { label: "Thessaloniki Airport to Porto Carras Grand Resort", href: "/route/thessaloniki-airport-to-porto-carras/", description: "A dedicated transfer to the Porto Carras resort near Neos Marmaras." },
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey in Sithonia." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Thessaloniki Airport to Sithonia?", answer: "See our dedicated Thessaloniki Airport to Sithonia route page for journey details." },
          { question: "What are the main towns in Sithonia?", answer: "Nikiti, near the entrance to the peninsula, and Neos Marmaras further along the coast, home to the Porto Carras Grand Resort." },
          { question: "Is Sithonia further from the airport than Kassandra?", answer: "Yes, Sithonia is generally further along the coast than Kassandra, so the journey takes longer." },
          { question: "Can I continue to Kassandra from Sithonia?", answer: "Yes, mention your plans when requesting a quote and this can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Sithonia Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στη Σιθωνία – Χαλκιδική",
        description:
          "Κλείστε ιδιωτική μεταφορά προς τη Σιθωνία, την πιο δασώδη κεντρική χερσόνησο της Χαλκιδικής, με κάλυψη Νέων Μαρμαρών, Νικήτης και Porto Carras.",
      },
      breadcrumbLabel: "Σιθωνία",
      hero: {
        eyebrow: "Σιθωνία, Χαλκιδική",
        title: "Ιδιωτικές Μεταφορές στη Σιθωνία",
        description: "Κλείστε ιδιωτική μεταφορά προς τη Σιθωνία, την κεντρική χερσόνησο της Χαλκιδικής, πιο μακριά στην ακτή από την Κασσάνδρα.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τη Σιθωνία",
        title: "Η Σιθωνία στην Ακτή της Χαλκιδικής",
        paragraphs: [
          "Η Σιθωνία είναι η μεσαία από τις τρεις χερσονήσους της Χαλκιδικής, γνωστή για τα πευκοδάση της και έναν γενικά πιο ήρεμο, λιγότερο δομημένο χαρακτήρα από την Κασσάνδρα. Οι κύριες πόλεις της είναι η Νικήτη, κοντά στην είσοδο της χερσονήσου, και οι Νέες Μαρμαράς πιο μακριά στη δυτική ακτή, όπου βρίσκεται το μεγάλο θέρετρο Porto Carras Grand Resort.",
          "Επειδή η Σιθωνία βρίσκεται πιο μακριά από τη Θεσσαλονίκη σε σχέση με την Κασσάνδρα, οι χρόνοι διαδρομής είναι μεγαλύτεροι — οι περισσότεροι επισκέπτες οργανώνουν απευθείας ιδιωτική μεταφορά από το αεροδρόμιο αντί για σύνδεση με λεωφορείο ή μέσα μαζικής μεταφοράς, ιδιαίτερα όταν ταξιδεύουν με αποσκευές για θέρετρο.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στη Σιθωνία",
        title: "Άφιξη στη Σιθωνία",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Σιθωνία", href: "/el/diadromi/aerodromio-thessalonikis-sithonia/", description: "Απευθείας ιδιωτική μεταφορά από το αεροδρόμιο." },
          { label: "Χαλκιδική", href: "/el/proorismos/chalkidiki/", description: "Δείτε την επισκόπησή μας για την ευρύτερη περιοχή της Χαλκιδικής." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Κασσάνδρα", href: "/el/proorismos/kassandra/", description: "Εξερευνήστε την Κασσάνδρα, πιο κοντά στο αεροδρόμιο στην ίδια περιοχή." },
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Porto Carras Grand Resort", href: "/el/diadromi/aerodromio-thessalonikis-porto-carras/", description: "Ειδική μεταφορά προς το θέρετρο Porto Carras κοντά στις Νέες Μαρμαράς." },
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στη Σιθωνία." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Θεσσαλονίκης στη Σιθωνία;", answer: "Δείτε την ειδική μας σελίδα διαδρομής Αεροδρόμιο Θεσσαλονίκης προς Σιθωνία για λεπτομέρειες ταξιδιού." },
          { question: "Ποιες είναι οι κύριες πόλεις της Σιθωνίας;", answer: "Η Νικήτη, κοντά στην είσοδο της χερσονήσου, και οι Νέες Μαρμαράς πιο μακριά στην ακτή, όπου βρίσκεται το θέρετρο Porto Carras Grand Resort." },
          { question: "Είναι η Σιθωνία πιο μακριά από το αεροδρόμιο σε σχέση με την Κασσάνδρα;", answer: "Ναι, η Σιθωνία βρίσκεται γενικά πιο μακριά στην ακτή από την Κασσάνδρα, οπότε το ταξίδι διαρκεί περισσότερο." },
          { question: "Μπορώ να συνεχίσω προς την Κασσάνδρα από τη Σιθωνία;", answer: "Ναι, αναφέρετε τα σχέδιά σας κατά την αίτηση προσφοράς και αυτό μπορεί να οργανωθεί." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στη Σιθωνία;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationNeaMoudania: {
    en: {
      meta: {
        title: "Private Transfers to Nea Moudania – Halkidiki Gateway",
        description:
          "Book a private transfer to Nea Moudania, the gateway town on the isthmus where the road into Halkidiki's Kassandra and Sithonia peninsulas begins.",
      },
      breadcrumbLabel: "Nea Moudania",
      hero: {
        eyebrow: "Nea Moudania, Halkidiki",
        title: "Private Transfers to Nea Moudania",
        description: "Book a private transfer to Nea Moudania, the commercial hub on the isthmus and the entry point to Halkidiki.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Nea Moudania",
        title: "Nea Moudania on the Halkidiki Isthmus",
        paragraphs: [
          "Nea Moudania sits on the isthmus at the northern neck of Halkidiki, where the mainland road splits toward the Kassandra and Sithonia peninsulas. It's the region's commercial hub, and for many visitors it's the first town reached after leaving Thessaloniki, making it the closest of Halkidiki's destinations to the airport.",
          "Because of its position, Nea Moudania is also a practical base for visitors who want easy access to Halkidiki without travelling all the way to the tip of Kassandra or Sithonia.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Nea Moudania",
        title: "Arriving in Nea Moudania",
        items: [
          { label: "Thessaloniki Airport to Nea Moudania", href: "/route/thessaloniki-airport-to-nea-moudania/", description: "The shortest of the Halkidiki airport transfer routes." },
          { label: "Halkidiki", href: "/destination/halkidiki/", description: "See our overview of the wider Halkidiki region." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Kassandra", href: "/destination/kassandra/", description: "Continue further along the Kassandra peninsula." },
          { label: "Sithonia", href: "/destination/sithonia/", description: "Continue further along the coast to Sithonia." },
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey in Nea Moudania." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How far is Nea Moudania from Thessaloniki Airport?", answer: "Nea Moudania is the closest Halkidiki destination to the airport — see our dedicated Thessaloniki Airport to Nea Moudania route page for journey details." },
          { question: "Is Nea Moudania part of Kassandra or Sithonia?", answer: "Nea Moudania sits on the isthmus at the entrance to Halkidiki, before the road splits toward either the Kassandra or Sithonia peninsulas." },
          { question: "Can I continue to Kassandra or Sithonia from Nea Moudania?", answer: "Yes, mention your full itinerary when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Nea Moudania Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στα Νέα Μουδανιά – Πύλη της Χαλκιδικής",
        description:
          "Κλείστε ιδιωτική μεταφορά προς τα Νέα Μουδανιά, την πύλη-πόλη στον ισθμό όπου ξεκινά ο δρόμος προς τις χερσονήσους Κασσάνδρα και Σιθωνία.",
      },
      breadcrumbLabel: "Νέα Μουδανιά",
      hero: {
        eyebrow: "Νέα Μουδανιά, Χαλκιδική",
        title: "Ιδιωτικές Μεταφορές στα Νέα Μουδανιά",
        description: "Κλείστε ιδιωτική μεταφορά προς τα Νέα Μουδανιά, το εμπορικό κέντρο του ισθμού και την πύλη εισόδου στη Χαλκιδική.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τα Νέα Μουδανιά",
        title: "Τα Νέα Μουδανιά στον Ισθμό της Χαλκιδικής",
        paragraphs: [
          "Τα Νέα Μουδανιά βρίσκονται στον ισθμό, στον βόρειο λαιμό της Χαλκιδικής, όπου ο ηπειρωτικός δρόμος χωρίζεται προς τις χερσονήσους Κασσάνδρα και Σιθωνία. Είναι το εμπορικό κέντρο της περιοχής, και για πολλούς επισκέπτες είναι η πρώτη πόλη που συναντούν μετά τη Θεσσαλονίκη, καθιστώντας τα τον πλησιέστερο προορισμό της Χαλκιδικής στο αεροδρόμιο.",
          "Λόγω της θέσης τους, τα Νέα Μουδανιά αποτελούν επίσης πρακτική βάση για επισκέπτες που θέλουν εύκολη πρόσβαση στη Χαλκιδική χωρίς να ταξιδέψουν μέχρι την άκρη της Κασσάνδρας ή της Σιθωνίας.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στα Νέα Μουδανιά",
        title: "Άφιξη στα Νέα Μουδανιά",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Νέα Μουδανιά", href: "/el/diadromi/aerodromio-thessalonikis-nea-moudania/", description: "Η συντομότερη από τις διαδρομές μεταφοράς αεροδρομίου προς τη Χαλκιδική." },
          { label: "Χαλκιδική", href: "/el/proorismos/chalkidiki/", description: "Δείτε την επισκόπησή μας για την ευρύτερη περιοχή της Χαλκιδικής." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Κασσάνδρα", href: "/el/proorismos/kassandra/", description: "Συνεχίστε περαιτέρω κατά μήκος της χερσονήσου της Κασσάνδρας." },
          { label: "Σιθωνία", href: "/el/proorismos/sithonia/", description: "Συνεχίστε περαιτέρω κατά μήκος της ακτής προς τη Σιθωνία." },
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στα Νέα Μουδανιά." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο απέχουν τα Νέα Μουδανιά από το Αεροδρόμιο Θεσσαλονίκης;", answer: "Τα Νέα Μουδανιά είναι ο πλησιέστερος προορισμός της Χαλκιδικής στο αεροδρόμιο — δείτε την ειδική μας σελίδα διαδρομής για λεπτομέρειες." },
          { question: "Ανήκουν τα Νέα Μουδανιά στην Κασσάνδρα ή στη Σιθωνία;", answer: "Τα Νέα Μουδανιά βρίσκονται στον ισθμό, στην είσοδο της Χαλκιδικής, πριν ο δρόμος χωριστεί προς την Κασσάνδρα ή τη Σιθωνία." },
          { question: "Μπορώ να συνεχίσω προς την Κασσάνδρα ή τη Σιθωνία από τα Νέα Μουδανιά;", answer: "Ναι, αναφέρετε το πλήρες πρόγραμμά σας κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στα Νέα Μουδανιά;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  thessalonikiDayTrips: {
    en: {
      meta: {
        title: "Private Day Trips from Thessaloniki – Book Your Excursion",
        description:
          "Explore private day trips from Thessaloniki to Meteora, Mount Olympus, Vergina, Pella and Kavala. Private vehicle, flexible itinerary. Get a quote.",
      },
      breadcrumbLabel: "Day Trips",
      hero: {
        eyebrow: "Private Day Trips",
        title: "Private Day Trips from Thessaloniki",
        description: "A private vehicle and driver for a day trip from Thessaloniki, with a flexible itinerary and return journey included.",
        primaryLabel: "Book Your Day Trip",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Our Day Trips",
        title: "How a Private Day Trip Works",
        paragraphs: [
          "A private day trip is different from a one-way transfer: it includes your pickup in Thessaloniki, private transportation to the destination, time to explore, and the return journey, typically with the same vehicle and driver waiting or returning at an agreed time.",
          "Northern Greece offers a wide range of day-trip destinations from Thessaloniki, from the rock-pillar monasteries of Meteora to the ancient Macedonian sites of Vergina and Pella and the peak of Mount Olympus — each with a different character and journey length, so it's worth choosing based on how much time you have.",
        ],
      },
      gettingHere: {
        eyebrow: "Popular Day Trips",
        title: "Choose Your Day Trip",
        items: [
          { label: "Thessaloniki to Meteora", href: "/route/thessaloniki-to-meteora/", description: "A long full-day (or overnight) trip to the rock-pillar monasteries of Meteora." },
          { label: "Thessaloniki to Mount Olympus", href: "/route/thessaloniki-to-mount-olympus/", description: "A day trip to Litochoro, the gateway town at the foot of Mount Olympus." },
          { label: "Thessaloniki to Vergina & Pella", href: "/route/thessaloniki-to-vergina-pella/", description: "A day trip to the ancient Macedonian sites of Vergina and Pella." },
          { label: "Thessaloniki to Kavala", href: "/route/thessaloniki-to-kavala/", description: "A longer intercity transfer to the port city of Kavala." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Halkidiki", href: "/destination/halkidiki/", description: "See our overview of transfers to the Halkidiki peninsula." },
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey, including day trips." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups on a day trip." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "What's the difference between a day trip and a one-way transfer?", answer: "A day trip includes your return journey and time at the destination, with the vehicle waiting or returning for you, rather than a single one-way journey." },
          { question: "Can I visit both Vergina and Pella in one day trip?", answer: "Yes, the two sites are commonly combined into a single day trip — mention this when requesting a quote." },
          { question: "How much time do I get at the destination?", answer: "This depends on the destination and your preferences — mention how much time you'd like when requesting a quote." },
          { question: "Can you arrange a day trip for a group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Thessaloniki Day Trip?",
        description: "Tell us which destination interests you and your passenger details, and request your private day trip quote.",
        primaryLabel: "Book Your Day Trip",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Ημερήσιες Εκδρομές από τη Θεσσαλονίκη – Κλείστε Τώρα",
        description:
          "Εξερευνήστε ιδιωτικές ημερήσιες εκδρομές από τη Θεσσαλονίκη προς Μετέωρα, Όλυμπο, Βεργίνα, Πέλλα και Καβάλα. Ιδιωτικό όχημα, ευέλικτο πρόγραμμα.",
      },
      breadcrumbLabel: "Ημερήσιες Εκδρομές",
      hero: {
        eyebrow: "Ιδιωτικές Εκδρομές",
        title: "Ιδιωτικές Ημερήσιες Εκδρομές από τη Θεσσαλονίκη",
        description: "Ένα ιδιωτικό όχημα και οδηγός για μια ημερήσια εκδρομή από τη Θεσσαλονίκη, με ευέλικτο πρόγραμμα και την επιστροφή σας συμπεριλαμβανόμενη.",
        primaryLabel: "Κλείστε την Εκδρομή σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τις Εκδρομές μας",
        title: "Πώς Λειτουργεί μια Ιδιωτική Ημερήσια Εκδρομή",
        paragraphs: [
          "Μια ιδιωτική ημερήσια εκδρομή διαφέρει από μια απλή μεταφορά: περιλαμβάνει την παραλαβή σας στη Θεσσαλονίκη, ιδιωτική μεταφορά προς τον προορισμό, χρόνο για εξερεύνηση, και την επιστροφή σας, συνήθως με το ίδιο όχημα και οδηγό που περιμένει ή επιστρέφει σε συμφωνημένη ώρα.",
          "Η βόρεια Ελλάδα προσφέρει ένα ευρύ φάσμα προορισμών ημερήσιας εκδρομής από τη Θεσσαλονίκη, από τα μοναστήρια πάνω σε βράχους των Μετεώρων έως τους αρχαίους μακεδονικούς χώρους της Βεργίνας και της Πέλλας και την κορυφή του Ολύμπου — καθεμία με διαφορετικό χαρακτήρα και διάρκεια ταξιδιού.",
        ],
      },
      gettingHere: {
        eyebrow: "Δημοφιλείς Εκδρομές",
        title: "Επιλέξτε την Εκδρομή σας",
        items: [
          { label: "Θεσσαλονίκη προς Μετέωρα", href: "/el/diadromi/thessaloniki-meteora/", description: "Μια μεγάλη ολοήμερη (ή με διανυκτέρευση) εκδρομή προς τα μοναστήρια πάνω σε βράχους των Μετεώρων." },
          { label: "Θεσσαλονίκη προς Όλυμπο", href: "/el/diadromi/thessaloniki-olympos/", description: "Μια εκδρομή προς το Λιτόχωρο, την πύλη-πόλη στους πρόποδες του Ολύμπου." },
          { label: "Θεσσαλονίκη προς Βεργίνα & Πέλλα", href: "/el/diadromi/thessaloniki-vergina-pella/", description: "Μια εκδρομή προς τους αρχαίους μακεδονικούς χώρους της Βεργίνας και της Πέλλας." },
          { label: "Θεσσαλονίκη προς Καβάλα", href: "/el/diadromi/thessaloniki-kavala/", description: "Μια μεγαλύτερη μεταφορά μεταξύ πόλεων προς τη λιμανιού πόλη της Καβάλας." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Χαλκιδική", href: "/el/proorismos/chalkidiki/", description: "Δείτε την επισκόπησή μας για μεταφορές προς τη χερσόνησο της Χαλκιδικής." },
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή, συμπεριλαμβανομένων εκδρομών." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες σε ημερήσια εκδρομή." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Ποια είναι η διαφορά μεταξύ ημερήσιας εκδρομής και απλής μεταφοράς;", answer: "Μια ημερήσια εκδρομή περιλαμβάνει την επιστροφή σας και χρόνο στον προορισμό, με το όχημα να περιμένει ή να επιστρέφει για εσάς, αντί για ένα απλό μονόδρομο ταξίδι." },
          { question: "Μπορώ να επισκεφθώ και τη Βεργίνα και την Πέλλα σε μία εκδρομή;", answer: "Ναι, οι δύο χώροι συνήθως συνδυάζονται σε μία ημερήσια εκδρομή — αναφέρετέ το κατά την αίτηση προσφοράς." },
          { question: "Πόσο χρόνο έχω στον προορισμό;", answer: "Αυτό εξαρτάται από τον προορισμό και τις προτιμήσεις σας — αναφέρετε πόσο χρόνο θα θέλατε κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε εκδρομή για ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε την Εκδρομή σας από τη Θεσσαλονίκη;",
        description: "Πείτε μας ποιος προορισμός σας ενδιαφέρει και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής εκδρομής σας.",
        primaryLabel: "Κλείστε την Εκδρομή σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationHersonissos: {
    en: {
      meta: {
        title: "Private Transfers to Hersonissos – Crete",
        description:
          "Book a private transfer to Hersonissos, one of Crete's largest resort areas, from Heraklion Airport. Comfortable door-to-door travel.",
      },
      breadcrumbLabel: "Hersonissos",
      hero: {
        eyebrow: "Hersonissos, Crete",
        title: "Private Transfers to Hersonissos",
        description: "Book a private transfer to Hersonissos, one of Crete's largest and longest-established resort areas.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Hersonissos",
        title: "Hersonissos on Crete's North Coast",
        paragraphs: [
          "Hersonissos is one of Crete's largest resort areas, east of Heraklion, with a long stretch of hotels, restaurants and beach clubs along the coast. It sits at the western end of a near-continuous strip of resort development that runs through Stalis and into neighbouring Malia.",
          "Most visitors arrive by private transfer from Heraklion Airport, roughly 25 minutes away — a straightforward journey that avoids relying on public transport with resort luggage.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Hersonissos",
        title: "Arriving in Hersonissos",
        items: [
          { label: "Heraklion Airport to Hersonissos", href: "/route/heraklion-airport-to-hersonissos/", description: "A direct private transfer from the airport." },
          { label: "Explore Crete", href: "/region/crete/", description: "See our regional overview of transportation across Crete." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Malia", href: "/destination/malia/", description: "Continue further along the coast to the neighbouring resort strip of Malia." },
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey in Hersonissos." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Heraklion Airport to Hersonissos?", answer: "See our dedicated Heraklion Airport to Hersonissos route page for journey details." },
          { question: "Is Hersonissos close to Malia and Stalis?", answer: "Yes, Hersonissos, Stalis and Malia form a near-continuous stretch of resort development along the coast." },
          { question: "Can I be dropped directly at my hotel in Hersonissos?", answer: "Yes, mention your exact hotel when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Hersonissos Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στον Χερσόνησο – Κρήτη",
        description:
          "Κλείστε ιδιωτική μεταφορά προς τον Χερσόνησο, μία από τις μεγαλύτερες περιοχές θερέτρων της Κρήτης, από το Αεροδρόμιο Ηρακλείου.",
      },
      breadcrumbLabel: "Χερσόνησος",
      hero: {
        eyebrow: "Χερσόνησος, Κρήτη",
        title: "Ιδιωτικές Μεταφορές στον Χερσόνησο",
        description: "Κλείστε ιδιωτική μεταφορά προς τον Χερσόνησο, μία από τις μεγαλύτερες και πιο μακροχρόνιες περιοχές θερέτρων της Κρήτης.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τον Χερσόνησο",
        title: "Ο Χερσόνησος στη Βόρεια Ακτή της Κρήτης",
        paragraphs: [
          "Ο Χερσόνησος είναι μία από τις μεγαλύτερες περιοχές θερέτρων της Κρήτης, ανατολικά του Ηρακλείου, με μια μεγάλη σειρά ξενοδοχείων, εστιατορίων και beach clubs κατά μήκος της ακτής. Βρίσκεται στο δυτικό άκρο μιας σχεδόν συνεχούς ζώνης τουριστικής ανάπτυξης που περνά από τον Σταλίδα και καταλήγει στα γειτονικά Μάλια.",
          "Οι περισσότεροι επισκέπτες φτάνουν με ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου, περίπου 25 λεπτά μακριά — ένα απλό ταξίδι που αποφεύγει την εξάρτηση από δημόσια μέσα με αποσκευές θέρετρου.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στον Χερσόνησο",
        title: "Άφιξη στον Χερσόνησο",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Χερσόνησο", href: "/el/diadromi/aerodromio-irakleiou-chersonisos/", description: "Απευθείας ιδιωτική μεταφορά από το αεροδρόμιο." },
          { label: "Εξερευνήστε την Κρήτη", href: "/el/periochi/kriti/", description: "Δείτε την γενική μας επισκόπηση μεταφορών σε όλη την Κρήτη." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Μάλια", href: "/el/proorismos/malia/", description: "Συνεχίστε περαιτέρω κατά μήκος της ακτής προς τη γειτονική τουριστική ζώνη των Μαλίων." },
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στον Χερσόνησο." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Ηρακλείου στον Χερσόνησο;", answer: "Δείτε την ειδική μας σελίδα διαδρομής Αεροδρόμιο Ηρακλείου προς Χερσόνησο για λεπτομέρειες." },
          { question: "Είναι ο Χερσόνησος κοντά στον Σταλίδα και τα Μάλια;", answer: "Ναι, ο Χερσόνησος, ο Σταλίδα και τα Μάλια σχηματίζουν μια σχεδόν συνεχή ζώνη τουριστικής ανάπτυξης κατά μήκος της ακτής." },
          { question: "Μπορώ να παραδοθώ απευθείας στο ξενοδοχείο μου στον Χερσόνησο;", answer: "Ναι, αναφέρετε το ακριβές ξενοδοχείο σας κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στον Χερσόνησο;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationMalia: {
    en: {
      meta: {
        title: "Private Transfers to Malia – Crete",
        description:
          "Book a private transfer to Malia from Heraklion Airport. Comfortable door-to-door travel to one of Crete's best-known resort strips.",
      },
      breadcrumbLabel: "Malia",
      hero: {
        eyebrow: "Malia, Crete",
        title: "Private Transfers to Malia",
        description: "Book a private transfer to Malia, further along the coast from Hersonissos.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Malia",
        title: "Malia on Crete's North Coast",
        paragraphs: [
          "Malia is a resort town east of Heraklion, adjoining Stalis and Hersonissos as part of a near-continuous coastal resort strip. It's also close to the Malia Palace, one of Crete's Minoan archaeological sites, a short distance from the modern resort itself.",
          "A private transfer from Heraklion Airport takes you directly to your hotel in Malia, typically a little longer than the journey to Hersonissos given its position slightly further east.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Malia",
        title: "Arriving in Malia",
        items: [
          { label: "Heraklion Airport to Malia", href: "/route/heraklion-airport-to-malia/", description: "A direct private transfer from the airport." },
          { label: "Explore Crete", href: "/region/crete/", description: "See our regional overview of transportation across Crete." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Hersonissos", href: "/destination/hersonissos/", description: "Explore Hersonissos, closer to the airport along the same coast." },
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey in Malia." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Heraklion Airport to Malia?", answer: "See our dedicated Heraklion Airport to Malia route page for journey details." },
          { question: "Is Malia further from the airport than Hersonissos?", answer: "Yes, Malia sits a little further east along the coast than Hersonissos, so the journey takes slightly longer." },
          { question: "Can I be dropped directly at my hotel in Malia?", answer: "Yes, mention your exact hotel when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Malia Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στα Μάλια – Κρήτη",
        description:
          "Κλείστε ιδιωτική μεταφορά προς τα Μάλια από το Αεροδρόμιο Ηρακλείου. Άνετη μεταφορά από πόρτα σε πόρτα προς μία από τις πιο γνωστές τουριστικές ζώνες της Κρήτης.",
      },
      breadcrumbLabel: "Μάλια",
      hero: {
        eyebrow: "Μάλια, Κρήτη",
        title: "Ιδιωτικές Μεταφορές στα Μάλια",
        description: "Κλείστε ιδιωτική μεταφορά προς τα Μάλια, πιο μακριά στην ακτή από τον Χερσόνησο.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τα Μάλια",
        title: "Τα Μάλια στη Βόρεια Ακτή της Κρήτης",
        paragraphs: [
          "Τα Μάλια είναι μια πόλη θερέτρου ανατολικά του Ηρακλείου, γειτονική με τον Σταλίδα και τον Χερσόνησο ως μέρος μιας σχεδόν συνεχούς παράκτιας τουριστικής ζώνης. Βρίσκονται επίσης κοντά στο Ανάκτορο της Μαλίας, έναν από τους μινωικούς αρχαιολογικούς χώρους της Κρήτης, σε μικρή απόσταση από το σύγχρονο θέρετρο.",
          "Μια ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου σας μεταφέρει απευθείας στο ξενοδοχείο σας στα Μάλια, συνήθως λίγο πιο μακρόχρονη από το ταξίδι προς τον Χερσόνησο δεδομένης της θέσης τους λίγο πιο ανατολικά.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στα Μάλια",
        title: "Άφιξη στα Μάλια",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Μάλια", href: "/el/diadromi/aerodromio-irakleiou-malia/", description: "Απευθείας ιδιωτική μεταφορά από το αεροδρόμιο." },
          { label: "Εξερευνήστε την Κρήτη", href: "/el/periochi/kriti/", description: "Δείτε την γενική μας επισκόπηση μεταφορών σε όλη την Κρήτη." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Χερσόνησος", href: "/el/proorismos/chersonisos/", description: "Εξερευνήστε τον Χερσόνησο, πιο κοντά στο αεροδρόμιο στην ίδια ακτή." },
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στα Μάλια." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Ηρακλείου στα Μάλια;", answer: "Δείτε την ειδική μας σελίδα διαδρομής Αεροδρόμιο Ηρακλείου προς Μάλια για λεπτομέρειες." },
          { question: "Είναι τα Μάλια πιο μακριά από το αεροδρόμιο σε σχέση με τον Χερσόνησο;", answer: "Ναι, τα Μάλια βρίσκονται λίγο πιο ανατολικά στην ακτή από τον Χερσόνησο, οπότε το ταξίδι διαρκεί λίγο περισσότερο." },
          { question: "Μπορώ να παραδοθώ απευθείας στο ξενοδοχείο μου στα Μάλια;", answer: "Ναι, αναφέρετε το ακριβές ξενοδοχείο σας κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στα Μάλια;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationElounda: {
    en: {
      meta: {
        title: "Private Transfers to Elounda – Crete's Luxury Resort Area",
        description:
          "Book a private transfer to Elounda from Heraklion Airport. Comfortable door-to-door travel to Crete's luxury resort enclave in the east.",
      },
      breadcrumbLabel: "Elounda",
      hero: {
        eyebrow: "Elounda, Crete",
        title: "Private Transfers to Elounda",
        description: "Book a private transfer to Elounda, a luxury resort area on Mirabello Bay in eastern Crete.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Elounda",
        title: "Elounda on Mirabello Bay",
        paragraphs: [
          "Elounda is a resort village on Mirabello Bay in eastern Crete, a short distance north of Agios Nikolaos, known for a cluster of long-established luxury hotels along its waterfront. It's also the usual departure point for boat trips to the nearby island of Spinalonga, visible from much of the town and reached by a short crossing rather than a road — boats run from Elounda itself and from the smaller landing at Plaka nearby.",
          "Because it's a well-known luxury destination, most visitors arrange a direct private transfer from Heraklion Airport, roughly an hour to an hour and a quarter away, rather than a shared or public transport connection.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Elounda",
        title: "Arriving in Elounda",
        items: [
          { label: "Heraklion Airport to Elounda", href: "/route/heraklion-airport-to-elounda/", description: "A direct private transfer from Crete's main airport." },
          { label: "Agios Nikolaos", href: "/city/agios-nikolaos/", description: "The nearby main town of eastern Crete." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Heraklion Airport to Elounda Bay Palace", href: "/route/heraklion-airport-to-elounda-bay-palace/", description: "A dedicated transfer to this Elounda resort." },
          { label: "Heraklion Airport to Elounda Beach Hotel & Villas", href: "/route/heraklion-airport-to-elounda-beach/", description: "A dedicated transfer to this Elounda resort." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Heraklion Airport to Elounda?", answer: "See our dedicated Heraklion Airport to Elounda route page for journey details." },
          { question: "Can I visit Spinalonga from Elounda?", answer: "Yes, Spinalonga is a short boat crossing from Elounda or the nearby landing at Plaka — it has no road access, so this is a boat trip rather than a road transfer." },
          { question: "Can I be dropped directly at my resort in Elounda?", answer: "Yes, mention your exact hotel when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Elounda Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στην Ελούντα – Πολυτελή Θέρετρα της Κρήτης",
        description:
          "Κλείστε ιδιωτική μεταφορά προς την Ελούντα από το Αεροδρόμιο Ηρακλείου. Άνετη μεταφορά από πόρτα σε πόρτα προς τον θύλακα πολυτελών θερέτρων της Κρήτης.",
      },
      breadcrumbLabel: "Ελούντα",
      hero: {
        eyebrow: "Ελούντα, Κρήτη",
        title: "Ιδιωτικές Μεταφορές στην Ελούντα",
        description: "Κλείστε ιδιωτική μεταφορά προς την Ελούντα, μια περιοχή πολυτελών θερέτρων στον κόλπο του Μιραμπέλλου στην ανατολική Κρήτη.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με την Ελούντα",
        title: "Η Ελούντα στον Κόλπο του Μιραμπέλλου",
        paragraphs: [
          "Η Ελούντα είναι ένα χωριό θερέτρου στον κόλπο του Μιραμπέλλου στην ανατολική Κρήτη, σε μικρή απόσταση βόρεια του Αγίου Νικολάου, γνωστό για μια ομάδα μακροχρόνιων πολυτελών ξενοδοχείων κατά μήκος της παραλιακής του. Είναι επίσης το συνήθες σημείο αναχώρησης για βαρκάδες προς το κοντινό νησί της Σπιναλόγκας, ορατό από μεγάλο μέρος της πόλης και προσβάσιμο με μια σύντομη διαδρομή με βάρκα και όχι με δρόμο — οι βάρκες αναχωρούν από την ίδια την Ελούντα και από τον μικρότερο σκάλο στην κοντινή Πλάκα.",
          "Επειδή είναι γνωστός προορισμός πολυτέλειας, οι περισσότεροι επισκέπτες οργανώνουν απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου, περίπου μία ώρα έως μία ώρα και τέταρτο μακριά, αντί για κοινή ή δημόσια σύνδεση.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στην Ελούντα",
        title: "Άφιξη στην Ελούντα",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Ελούντα", href: "/el/diadromi/aerodromio-irakleiou-elounda/", description: "Απευθείας ιδιωτική μεταφορά από το κύριο αεροδρόμιο της Κρήτης." },
          { label: "Άγιος Νικόλαος", href: "/el/poli/agios-nikolaos/", description: "Η κοντινή κύρια πόλη της ανατολικής Κρήτης." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Elounda Bay Palace", href: "/el/diadromi/aerodromio-irakleiou-elounda-bay-palace/", description: "Ειδική μεταφορά προς αυτό το θέρετρο της Ελούντας." },
          { label: "Αεροδρόμιο Ηρακλείου προς Elounda Beach Hotel & Villas", href: "/el/diadromi/aerodromio-irakleiou-elounda-beach/", description: "Ειδική μεταφορά προς αυτό το θέρετρο της Ελούντας." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Ηρακλείου στην Ελούντα;", answer: "Δείτε την ειδική μας σελίδα διαδρομής Αεροδρόμιο Ηρακλείου προς Ελούντα για λεπτομέρειες." },
          { question: "Μπορώ να επισκεφθώ τη Σπιναλόγκα από την Ελούντα;", answer: "Ναι, η Σπιναλόγκα απέχει μια σύντομη διαδρομή με βάρκα από την Ελούντα ή τον κοντινό σκάλο στην Πλάκα — δεν έχει οδική πρόσβαση, οπότε πρόκειται για βαρκάδα και όχι για οδική μεταφορά." },
          { question: "Μπορώ να παραδοθώ απευθείας στο θέρετρό μου στην Ελούντα;", answer: "Ναι, αναφέρετε το ακριβές ξενοδοχείο σας κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στην Ελούντα;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationPlatanias: {
    en: {
      meta: {
        title: "Private Transfers to Platanias – Chania, Crete",
        description:
          "Book a private transfer to Platanias from Chania Airport. Comfortable door-to-door travel to the resort strip west of Chania.",
      },
      breadcrumbLabel: "Platanias",
      hero: {
        eyebrow: "Platanias, Crete",
        title: "Private Transfers to Platanias",
        description: "Book a private transfer to Platanias, the resort strip west of Chania town.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Platanias",
        title: "Platanias West of Chania",
        paragraphs: [
          "Platanias is a coastal village around 11 km west of Chania town, part of a resort strip that includes several neighbouring beach villages along the same stretch of coast. It's a popular base for visitors who want beach-resort surroundings within easy reach of Chania's old town.",
          "A private transfer from Chania Airport takes you directly to your hotel in Platanias, a short journey given the airport's position on the Akrotiri peninsula northeast of Chania.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Platanias",
        title: "Arriving in Platanias",
        items: [
          { label: "Chania Airport to Platanias", href: "/route/chania-airport-to-platanias/", description: "A direct private transfer from the airport." },
          { label: "Chania", href: "/city/chania/", description: "See our overview of transfers across Chania." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey in Platanias." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Chania Airport to Platanias?", answer: "See our dedicated Chania Airport to Platanias route page for journey details." },
          { question: "Is Platanias close to Chania's old town?", answer: "Yes, Platanias is around 11 km from Chania town, a short private transfer away." },
          { question: "Can I be dropped directly at my hotel in Platanias?", answer: "Yes, mention your exact hotel when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Platanias Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στον Πλατανιά – Χανιά, Κρήτη",
        description:
          "Κλείστε ιδιωτική μεταφορά προς τον Πλατανιά από το Αεροδρόμιο Χανίων. Άνετη μεταφορά από πόρτα σε πόρτα προς τη τουριστική ζώνη δυτικά των Χανίων.",
      },
      breadcrumbLabel: "Πλατανιάς",
      hero: {
        eyebrow: "Πλατανιάς, Κρήτη",
        title: "Ιδιωτικές Μεταφορές στον Πλατανιά",
        description: "Κλείστε ιδιωτική μεταφορά προς τον Πλατανιά, τη τουριστική ζώνη δυτικά της πόλης των Χανίων.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τον Πλατανιά",
        title: "Ο Πλατανιάς Δυτικά των Χανίων",
        paragraphs: [
          "Ο Πλατανιάς είναι ένα παράκτιο χωριό περίπου 11 χλμ δυτικά της πόλης των Χανίων, μέρος μιας τουριστικής ζώνης που περιλαμβάνει αρκετά γειτονικά παραθαλάσσια χωριά κατά μήκος της ίδιας ακτής. Είναι δημοφιλής βάση για επισκέπτες που θέλουν περιβάλλον παραθαλάσσιου θερέτρου σε εύκολη απόσταση από την παλιά πόλη των Χανίων.",
          "Μια ιδιωτική μεταφορά από το Αεροδρόμιο Χανίων σας μεταφέρει απευθείας στο ξενοδοχείο σας στον Πλατανιά, ένα σύντομο ταξίδι δεδομένης της θέσης του αεροδρομίου στη χερσόνησο του Ακρωτηρίου βορειοανατολικά των Χανίων.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στον Πλατανιά",
        title: "Άφιξη στον Πλατανιά",
        items: [
          { label: "Αεροδρόμιο Χανίων προς Πλατανιά", href: "/el/diadromi/aerodromio-chanion-platanias/", description: "Απευθείας ιδιωτική μεταφορά από το αεροδρόμιο." },
          { label: "Χανιά", href: "/el/poli/chania/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλα τα Χανιά." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στον Πλατανιά." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Χανίων στον Πλατανιά;", answer: "Δείτε την ειδική μας σελίδα διαδρομής Αεροδρόμιο Χανίων προς Πλατανιά για λεπτομέρειες." },
          { question: "Είναι ο Πλατανιάς κοντά στην παλιά πόλη των Χανίων;", answer: "Ναι, ο Πλατανιάς απέχει περίπου 11 χλμ από την πόλη των Χανίων, μια σύντομη ιδιωτική μεταφορά." },
          { question: "Μπορώ να παραδοθώ απευθείας στο ξενοδοχείο μου στον Πλατανιά;", answer: "Ναι, αναφέρετε το ακριβές ξενοδοχείο σας κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στον Πλατανιά;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  destinationGeorgioupolis: {
    en: {
      meta: {
        title: "Private Transfers to Georgioupolis – Crete",
        description:
          "Book a private transfer to Georgioupolis from either Chania or Heraklion Airport. Comfortable door-to-door travel between Chania and Rethymno.",
      },
      breadcrumbLabel: "Georgioupolis",
      hero: {
        eyebrow: "Georgioupolis, Crete",
        title: "Private Transfers to Georgioupolis",
        description: "Book a private transfer to Georgioupolis, a coastal resort town between Chania and Rethymno.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Georgioupolis",
        title: "Georgioupolis Between Chania and Rethymno",
        paragraphs: [
          "Georgioupolis is a coastal resort town on Crete's north coast, roughly midway between Chania and Rethymno, known for a long sandy beach and a eucalyptus-lined town square. Its position makes it reachable from either of the two western airports.",
          "Most visitors arrange a direct private transfer from Chania Airport, the closer of the two, though a transfer from Heraklion Airport can also be arranged for those arriving from the east.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Georgioupolis",
        title: "Arriving in Georgioupolis",
        items: [
          { label: "Chania Airport to Georgioupolis", href: "/route/chania-airport-to-georgioupolis/", description: "A direct private transfer from the closer of Crete's two western airports." },
          { label: "Chania", href: "/city/chania/", description: "See our overview of transfers across Chania." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Rethymno", href: "/city/rethymno/", description: "Continue east toward Rethymno, the other nearby town." },
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey in Georgioupolis." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Chania Airport to Georgioupolis?", answer: "See our dedicated Chania Airport to Georgioupolis route page for journey details." },
          { question: "Can I reach Georgioupolis from Heraklion Airport instead?", answer: "Yes, mention this when requesting a quote — Georgioupolis is reachable from either airport, though Chania is generally closer." },
          { question: "Can I be dropped directly at my hotel in Georgioupolis?", answer: "Yes, mention your exact hotel when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Georgioupolis Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στη Γεωργιούπολη – Κρήτη",
        description:
          "Κλείστε ιδιωτική μεταφορά προς τη Γεωργιούπολη από το Αεροδρόμιο Χανίων ή Ηρακλείου. Άνετη μεταφορά από πόρτα σε πόρτα μεταξύ Χανίων και Ρεθύμνου.",
      },
      breadcrumbLabel: "Γεωργιούπολη",
      hero: {
        eyebrow: "Γεωργιούπολη, Κρήτη",
        title: "Ιδιωτικές Μεταφορές στη Γεωργιούπολη",
        description: "Κλείστε ιδιωτική μεταφορά προς τη Γεωργιούπολη, μια παράκτια πόλη θερέτρου μεταξύ Χανίων και Ρεθύμνου.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τη Γεωργιούπολη",
        title: "Η Γεωργιούπολη Μεταξύ Χανίων και Ρεθύμνου",
        paragraphs: [
          "Η Γεωργιούπολη είναι μια παράκτια πόλη θερέτρου στη βόρεια ακτή της Κρήτης, περίπου στη μέση της διαδρομής μεταξύ Χανίων και Ρεθύμνου, γνωστή για μια μακριά αμμώδη παραλία και μια πλατεία με ευκαλύπτους. Η θέση της την καθιστά προσβάσιμη από οποιοδήποτε από τα δύο δυτικά αεροδρόμια.",
          "Οι περισσότεροι επισκέπτες οργανώνουν απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Χανίων, το πλησιέστερο από τα δύο, αν και μεταφορά από το Αεροδρόμιο Ηρακλείου μπορεί επίσης να οργανωθεί για όσους φτάνουν από τα ανατολικά.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στη Γεωργιούπολη",
        title: "Άφιξη στη Γεωργιούπολη",
        items: [
          { label: "Αεροδρόμιο Χανίων προς Γεωργιούπολη", href: "/el/diadromi/aerodromio-chanion-georgioupolis/", description: "Απευθείας ιδιωτική μεταφορά από το πλησιέστερο από τα δύο δυτικά αεροδρόμια της Κρήτης." },
          { label: "Χανιά", href: "/el/poli/chania/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλα τα Χανιά." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Ρέθυμνο", href: "/el/poli/rethymno/", description: "Συνεχίστε ανατολικά προς το Ρέθυμνο, την άλλη κοντινή πόλη." },
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στη Γεωργιούπολη." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Χανίων στη Γεωργιούπολη;", answer: "Δείτε την ειδική μας σελίδα διαδρομής Αεροδρόμιο Χανίων προς Γεωργιούπολη για λεπτομέρειες." },
          { question: "Μπορώ να φτάσω στη Γεωργιούπολη από το Αεροδρόμιο Ηρακλείου αντί;", answer: "Ναι, αναφέρετέ το κατά την αίτηση προσφοράς — η Γεωργιούπολη είναι προσβάσιμη από οποιοδήποτε αεροδρόμιο, αν και τα Χανιά είναι γενικά πιο κοντά." },
          { question: "Μπορώ να παραδοθώ απευθείας στο ξενοδοχείο μου στη Γεωργιούπολη;", answer: "Ναι, αναφέρετε το ακριβές ξενοδοχείο σας κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στη Γεωργιούπολη;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  creteDayTrips: {
    en: {
      meta: {
        title: "Private Day Trips in Crete – Book Your Excursion",
        description:
          "Explore private day trips across Crete to Knossos, Elafonissi, Balos and Samaria Gorge. Private vehicle, flexible itinerary. Get a quote.",
      },
      breadcrumbLabel: "Day Trips",
      hero: {
        eyebrow: "Private Day Trips",
        title: "Private Day Trips Across Crete",
        description: "A private vehicle and driver for a day trip across Crete, with a flexible itinerary and return journey included where relevant.",
        primaryLabel: "Book Your Day Trip",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Our Day Trips",
        title: "How a Private Day Trip Works",
        paragraphs: [
          "A private day trip is different from a one-way transfer: it includes your pickup, private transportation to the destination, and — where the destination allows it — a return journey, typically with the same vehicle and driver waiting or returning at an agreed time.",
          "Crete's day-trip destinations vary considerably in character: Knossos near Heraklion is a short, simple drive; Elafonissi is a longer coastal drive from Chania; and both Balos and the Samaria Gorge involve additional logistics — a 4x4 or boat for the final approach to Balos, and a one-way hike ending at a different village for Samaria — so it's worth understanding what each trip actually involves before booking.",
        ],
      },
      gettingHere: {
        eyebrow: "Popular Day Trips",
        title: "Choose Your Day Trip",
        items: [
          { label: "Heraklion to Knossos", href: "/route/heraklion-to-knossos/", description: "A short transfer to the Minoan palace site, Crete's most visited archaeological attraction." },
          { label: "Chania to Elafonissi", href: "/route/chania-to-elafonissi/", description: "A longer day trip to one of Crete's best-known beaches." },
          { label: "Chania to Balos", href: "/route/chania-to-balos/", description: "A day trip toward the Balos lagoon, with a 4x4 or boat needed for the final approach." },
          { label: "Chania to Samaria Gorge", href: "/route/chania-to-samaria-gorge/", description: "A transfer to the start of Crete's most famous hiking trail." },
        ],
      },
      transferOptions: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey, including day trips." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups on a day trip." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "What's the difference between a day trip and a one-way transfer?", answer: "A day trip includes time at the destination and a return journey where relevant, with the vehicle waiting or returning for you, rather than a single one-way journey." },
          { question: "Can you take me all the way to the Balos lagoon?", answer: "The final approach to Balos requires a 4x4 track or a boat — we can arrange the transfer to the relevant starting point, but mention this when requesting a quote so we can describe exactly what's involved." },
          { question: "Does the Samaria Gorge trip bring me back to the same place?", answer: "No, the gorge is a one-way hike ending at Agia Roumeli, a village with no road access — most hikers return by ferry and bus. Describe your plans when requesting a quote." },
          { question: "Can you arrange a day trip for a group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Crete Day Trip?",
        description: "Tell us which destination interests you and your passenger details, and request your private day trip quote.",
        primaryLabel: "Book Your Day Trip",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Ημερήσιες Εκδρομές στην Κρήτη – Κλείστε Τώρα",
        description:
          "Εξερευνήστε ιδιωτικές ημερήσιες εκδρομές στην Κρήτη προς Κνωσό, Ελαφονήσι, Μπάλο και Φαράγγι Σαμαριάς. Ιδιωτικό όχημα, ευέλικτο πρόγραμμα.",
      },
      breadcrumbLabel: "Ημερήσιες Εκδρομές",
      hero: {
        eyebrow: "Ιδιωτικές Εκδρομές",
        title: "Ιδιωτικές Ημερήσιες Εκδρομές σε Όλη την Κρήτη",
        description: "Ένα ιδιωτικό όχημα και οδηγός για μια ημερήσια εκδρομή στην Κρήτη, με ευέλικτο πρόγραμμα και την επιστροφή σας συμπεριλαμβανόμενη όπου ισχύει.",
        primaryLabel: "Κλείστε την Εκδρομή σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τις Εκδρομές μας",
        title: "Πώς Λειτουργεί μια Ιδιωτική Ημερήσια Εκδρομή",
        paragraphs: [
          "Μια ιδιωτική ημερήσια εκδρομή διαφέρει από μια απλή μεταφορά: περιλαμβάνει την παραλαβή σας, ιδιωτική μεταφορά προς τον προορισμό, και — όπου το επιτρέπει ο προορισμός — την επιστροφή σας, συνήθως με το ίδιο όχημα και οδηγό που περιμένει ή επιστρέφει σε συμφωνημένη ώρα.",
          "Οι προορισμοί ημερήσιων εκδρομών της Κρήτης διαφέρουν σημαντικά ως χαρακτήρα: η Κνωσός κοντά στο Ηράκλειο είναι μια σύντομη, απλή διαδρομή· το Ελαφονήσι είναι μια μεγαλύτερη παράκτια διαδρομή από τα Χανιά· και τόσο ο Μπάλος όσο και το Φαράγγι της Σαμαριάς περιλαμβάνουν επιπλέον λογιστικά ζητήματα — 4x4 ή βάρκα για την τελική προσέγγιση στον Μπάλο, και μονόδρομη πεζοπορία που καταλήγει σε διαφορετικό χωριό για τη Σαμαριά — οπότε αξίζει να κατανοήσετε τι περιλαμβάνει ακριβώς κάθε εκδρομή πριν την κράτηση.",
        ],
      },
      gettingHere: {
        eyebrow: "Δημοφιλείς Εκδρομές",
        title: "Επιλέξτε την Εκδρομή σας",
        items: [
          { label: "Ηράκλειο προς Κνωσό", href: "/el/diadromi/irakleio-knosos/", description: "Μια σύντομη μεταφορά προς τον μινωικό αρχαιολογικό χώρο, το πιο επισκέψιμο αξιοθέατο της Κρήτης." },
          { label: "Χανιά προς Ελαφονήσι", href: "/el/diadromi/chania-elafonisi/", description: "Μια μεγαλύτερη ημερήσια εκδρομή προς μία από τις πιο γνωστές παραλίες της Κρήτης." },
          { label: "Χανιά προς Μπάλο", href: "/el/diadromi/chania-balos/", description: "Μια εκδρομή προς τη λιμνοθάλασσα του Μπάλου, με 4x4 ή βάρκα απαραίτητα για την τελική προσέγγιση." },
          { label: "Χανιά προς Φαράγγι Σαμαριάς", href: "/el/diadromi/chania-farangi-samarias/", description: "Μια μεταφορά προς την αρχή του πιο γνωστού μονοπατιού πεζοπορίας της Κρήτης." },
        ],
      },
      transferOptions: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή, συμπεριλαμβανομένων εκδρομών." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες σε ημερήσια εκδρομή." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Ποια είναι η διαφορά μεταξύ ημερήσιας εκδρομής και απλής μεταφοράς;", answer: "Μια ημερήσια εκδρομή περιλαμβάνει χρόνο στον προορισμό και επιστροφή όπου ισχύει, με το όχημα να περιμένει ή να επιστρέφει για εσάς, αντί για ένα απλό μονόδρομο ταξίδι." },
          { question: "Μπορείτε να με πάτε μέχρι τη λιμνοθάλασσα του Μπάλου;", answer: "Η τελική προσέγγιση στον Μπάλο απαιτεί χωμάτινο δρόμο με 4x4 ή βάρκα — μπορούμε να οργανώσουμε τη μεταφορά προς το σχετικό σημείο εκκίνησης, αλλά αναφέρετέ το κατά την αίτηση προσφοράς ώστε να σας εξηγήσουμε ακριβώς τι περιλαμβάνει." },
          { question: "Η εκδρομή στο Φαράγγι της Σαμαριάς με φέρνει πίσω στο ίδιο σημείο;", answer: "Όχι, το φαράγγι είναι μονόδρομη πεζοπορία που καταλήγει στην Αγία Ρουμέλη, ένα χωριό χωρίς οδική πρόσβαση — οι περισσότεροι πεζοπόροι επιστρέφουν με ferry και λεωφορείο. Περιγράψτε τα σχέδιά σας κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε εκδρομή για ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε την Εκδρομή σας στην Κρήτη;",
        description: "Πείτε μας ποιος προορισμός σας ενδιαφέρει και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής εκδρομής σας.",
        primaryLabel: "Κλείστε την Εκδρομή σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },
}
