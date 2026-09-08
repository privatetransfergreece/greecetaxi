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
}
