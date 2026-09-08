import type { Locale } from "@/lib/i18n/config"
import type { HeroContent } from "@/components/location/hero"
import type { RelatedLinkItem } from "@/components/location/related-links"

export type RegionSlug = "regionCrete" | "regionPeloponnese"

export type LinkSection = { eyebrow: string; title: string; items: Omit<RelatedLinkItem, "icon">[] }
export type ProseSection = { eyebrow: string; title: string; paragraphs: string[] }

export type RegionPageContent = {
  meta: { title: string; description: string }
  breadcrumbLabel: string
  hero: HeroContent
  intro: ProseSection
  airports: LinkSection
  ports: LinkSection
  cities: LinkSection
  routes: LinkSection
  services: LinkSection
  faq: { eyebrow: string; title: string; items: { question: string; answer: string }[] }
  cta: { heading: string; description: string; primaryLabel: string; secondaryLabel: string }
}

export const regionImages: Partial<Record<RegionSlug, { src: string; alt: Record<Locale, string> }>> = {
  regionCrete: {
    src: "/destinations/heraklion.webp",
    alt: {
      en: "Harbourfront of Heraklion illuminated at night, Crete's largest city, Greece",
      el: "Το λιμάνι του Ηρακλείου φωτισμένο τη νύχτα, η μεγαλύτερη πόλη της Κρήτης, Ελλάδα",
    },
  },
}

export const regionContent: Record<RegionSlug, Record<Locale, RegionPageContent>> = {
  regionCrete: {
    en: {
      meta: {
        title: "Private Transfers in Crete – Airport, Port & Island Travel",
        description:
          "Book a private transfer across Crete, covering Heraklion, Chania, and connections between the island's airports and ports. Request a quote today.",
      },
      breadcrumbLabel: "Crete",
      hero: {
        eyebrow: "Crete",
        title: "Private Transfers Across Crete",
        description: "Book a private transfer across Crete, covering airport, port and city-to-city journeys on Greece's largest island.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Crete",
        title: "Transportation Across Crete",
        paragraphs: [
          "Crete is the largest island in Greece, with two main airports — Heraklion in the centre-north and Chania in the west — serving different parts of the island. Heraklion also has Crete's main ferry port, connecting the island with Piraeus.",
          "Because Crete is long and its main towns are spread along the north coast, private transportation typically falls into a few categories: airport transfers on arrival, transfers between Heraklion and Chania along the north coast highway, and local transfers to hotels and resorts.",
        ],
      },
      airports: {
        eyebrow: "Airports",
        title: "Crete's Airports",
        items: [
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "Serves central and eastern Crete, close to Heraklion city." },
          { label: "Chania Airport", href: "/airport/chania-airport/", description: "Serves western Crete, close to Chania town." },
        ],
      },
      ports: {
        eyebrow: "Ports",
        title: "Crete's Main Port",
        items: [
          { label: "Heraklion Port", href: "/port/heraklion/", description: "Crete's main ferry connection to Piraeus, also receiving cruise calls." },
        ],
      },
      cities: {
        eyebrow: "Getting Around",
        title: "Travelling Between Crete's Main Towns",
        items: [
          { label: "Heraklion to Chania", href: "/route/heraklion-to-chania/", description: "A private transfer along Crete's north coast highway between the island's two largest towns." },
        ],
      },
      routes: {
        eyebrow: "Popular Routes",
        title: "Popular Transfers Within Crete",
        items: [
          { label: "Heraklion to Chania", href: "/route/heraklion-to-chania/", description: "The main cross-island route, connecting Crete's two airports and main towns." },
        ],
      },
      services: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey on Crete." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups exploring Crete." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Which airports serve Crete?", answer: "Crete has two main airports: Heraklion in the centre-north, and Chania in the west." },
          { question: "Can I book a private transfer from Heraklion to Chania?", answer: "Yes, this is one of our most requested cross-island routes, travelling along the north coast highway." },
          { question: "Does Crete have a ferry connection to Athens?", answer: "Yes, Heraklion Port connects Crete with Piraeus by ferry." },
          { question: "Can you arrange a transfer for a family or group visiting Crete?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Crete Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στην Κρήτη – Αεροδρόμιο, Λιμάνι & Νησί",
        description:
          "Κλείστε ιδιωτική μεταφορά σε όλη την Κρήτη, με κάλυψη Ηρακλείου, Χανίων και συνδέσεις μεταξύ αεροδρομίων και λιμανιών του νησιού. Ζητήστε προσφορά.",
      },
      breadcrumbLabel: "Κρήτη",
      hero: {
        eyebrow: "Κρήτη",
        title: "Ιδιωτικές Μεταφορές σε Όλη την Κρήτη",
        description: "Κλείστε ιδιωτική μεταφορά σε όλη την Κρήτη, με κάλυψη αεροδρομίου, λιμανιού και μεταφορών μεταξύ πόλεων στο μεγαλύτερο νησί της Ελλάδας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με την Κρήτη",
        title: "Μεταφορές σε Όλη την Κρήτη",
        paragraphs: [
          "Η Κρήτη είναι το μεγαλύτερο νησί της Ελλάδας, με δύο κύρια αεροδρόμια — το Ηράκλειο στο κέντρο-βορρά και τα Χανιά στα δυτικά — που εξυπηρετούν διαφορετικά μέρη του νησιού. Το Ηράκλειο διαθέτει επίσης το κύριο λιμάνι ferry της Κρήτης, που συνδέει το νησί με τον Πειραιά.",
          "Επειδή η Κρήτη είναι επιμήκης και οι κύριες πόλεις της απλώνονται κατά μήκος της βόρειας ακτής, η ιδιωτική μεταφορά εντάσσεται συνήθως σε λίγες κατηγορίες: μεταφορές αεροδρομίου κατά την άφιξη, μεταφορές μεταξύ Ηρακλείου και Χανίων κατά μήκος του βόρειου οδικού άξονα, και τοπικές μεταφορές προς ξενοδοχεία και θέρετρα.",
        ],
      },
      airports: {
        eyebrow: "Αεροδρόμια",
        title: "Τα Αεροδρόμια της Κρήτης",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Εξυπηρετεί την κεντρική και ανατολική Κρήτη, κοντά στην πόλη του Ηρακλείου." },
          { label: "Αεροδρόμιο Χανίων", href: "/el/aerodromio/chania/", description: "Εξυπηρετεί τη δυτική Κρήτη, κοντά στην πόλη των Χανίων." },
        ],
      },
      ports: {
        eyebrow: "Λιμάνια",
        title: "Το Κύριο Λιμάνι της Κρήτης",
        items: [
          { label: "Λιμάνι Ηρακλείου", href: "/el/limani/irakleio/", description: "Η κύρια σύνδεση ferry της Κρήτης προς τον Πειραιά, με υποδοχή και κρουαζιερόπλοιων." },
        ],
      },
      cities: {
        eyebrow: "Μετακινήσεις",
        title: "Ταξίδι Μεταξύ των Κύριων Πόλεων της Κρήτης",
        items: [
          { label: "Ηράκλειο προς Χανιά", href: "/el/diadromi/irakleio-chania/", description: "Ιδιωτική μεταφορά κατά μήκος του βόρειου οδικού άξονα της Κρήτης μεταξύ των δύο μεγαλύτερων πόλεων του νησιού." },
        ],
      },
      routes: {
        eyebrow: "Δημοφιλείς Διαδρομές",
        title: "Δημοφιλείς Μεταφορές εντός της Κρήτης",
        items: [
          { label: "Ηράκλειο προς Χανιά", href: "/el/diadromi/irakleio-chania/", description: "Η κύρια διαδρομή του νησιού, που συνδέει τα δύο αεροδρόμια και τις κύριες πόλεις της Κρήτης." },
        ],
      },
      services: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στην Κρήτη." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες που εξερευνούν την Κρήτη." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Ποια αεροδρόμια εξυπηρετούν την Κρήτη;", answer: "Η Κρήτη διαθέτει δύο κύρια αεροδρόμια: το Ηράκλειο στο κέντρο-βορρά, και τα Χανιά στα δυτικά." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το Ηράκλειο προς τα Χανιά;", answer: "Ναι, είναι μία από τις πιο ζητημένες διαδρομές μας εντός του νησιού, κατά μήκος του βόρειου οδικού άξονα." },
          { question: "Έχει η Κρήτη σύνδεση ferry με την Αθήνα;", answer: "Ναι, το Λιμάνι Ηρακλείου συνδέει την Κρήτη με τον Πειραιά μέσω ferry." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για οικογένεια ή ομάδα που επισκέπτεται την Κρήτη;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στην Κρήτη;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  regionPeloponnese: {
    en: {
      meta: {
        title: "Private Transfers in the Peloponnese – Book Your Ride",
        description:
          "Book a private transfer across the Peloponnese, covering Kalamata, Nafplio, Patras and connections to Athens. Request a quote for your journey.",
      },
      breadcrumbLabel: "Peloponnese",
      hero: {
        eyebrow: "Peloponnese",
        title: "Private Transfers Across the Peloponnese",
        description: "Book a private transfer across the Peloponnese, connecting Athens with Kalamata, Nafplio, Patras and beyond.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About the Peloponnese",
        title: "Transportation Across the Peloponnese",
        paragraphs: [
          "The Peloponnese is a large peninsula in southern mainland Greece, connected to the rest of the country by the Corinth Canal crossing. It's home to destinations such as Nafplio, the port city of Patras, and Kalamata in the south, and is commonly reached by private transfer from Athens.",
          "Private transportation across the Peloponnese typically covers transfers from Athens or Athens Airport, travel between towns within the region, and connections to the port of Patras for onward ferry travel to Italy.",
        ],
      },
      airports: {
        eyebrow: "Airport Access",
        title: "Reaching the Peloponnese by Air",
        items: [
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "Most visitors reach the Peloponnese by private transfer from Athens International Airport." },
        ],
      },
      ports: {
        eyebrow: "Ports",
        title: "The Peloponnese's Main Port",
        items: [
          { label: "Patras Port", href: "/port/patras/", description: "Greece's main ferry gateway to Italy, located in the northern Peloponnese." },
        ],
      },
      cities: {
        eyebrow: "Cities & Towns",
        title: "Destinations in the Peloponnese",
        items: [
          { label: "Kalamata", href: "/city/kalamata/", description: "The regional hub for the southern Peloponnese, in Messenia." },
          { label: "Nafplio", href: "/destination/nafplio/", description: "A popular waterfront town in the Argolis area of the Peloponnese." },
        ],
      },
      routes: {
        eyebrow: "Popular Routes",
        title: "Popular Transfers to the Peloponnese",
        items: [
          { label: "Athens to Nafplio", href: "/route/athens-to-nafplio/", description: "A private transfer connecting Athens with the Peloponnese's popular waterfront town." },
        ],
      },
      services: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey in the Peloponnese." },
          { label: "City-to-City Transfers", href: "/city-transfers/", description: "Direct private transfers between the Peloponnese and other Greek destinations." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do most visitors reach the Peloponnese?", answer: "Most visitors arrive by private transfer from Athens or Athens Airport, since the Peloponnese is connected to the mainland by road." },
          { question: "Can I book a private transfer from Athens to Nafplio?", answer: "Yes, this is one of our popular routes to the Peloponnese." },
          { question: "Does the Peloponnese have a ferry connection to Italy?", answer: "Yes, the Port of Patras in the northern Peloponnese is Greece's main international ferry gateway to Italy." },
          { question: "Can you arrange transfers between towns within the Peloponnese?", answer: "Yes, describe your route when requesting a quote and we'll confirm what can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Peloponnese Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στην Πελοπόννησο – Κλείστε Τώρα",
        description:
          "Κλείστε ιδιωτική μεταφορά σε όλη την Πελοπόννησο, με κάλυψη Καλαμάτας, Ναυπλίου, Πάτρας και σύνδεση με την Αθήνα. Ζητήστε προσφορά για το ταξίδι σας.",
      },
      breadcrumbLabel: "Πελοπόννησος",
      hero: {
        eyebrow: "Πελοπόννησος",
        title: "Ιδιωτικές Μεταφορές σε Όλη την Πελοπόννησο",
        description: "Κλείστε ιδιωτική μεταφορά σε όλη την Πελοπόννησο, με σύνδεση Αθήνας με Καλαμάτα, Ναύπλιο, Πάτρα και αλλού.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με την Πελοπόννησο",
        title: "Μεταφορές σε Όλη την Πελοπόννησο",
        paragraphs: [
          "Η Πελοπόννησος είναι μια μεγάλη χερσόνησος στη νότια ηπειρωτική Ελλάδα, συνδεδεμένη με την υπόλοιπη χώρα μέσω της διάβασης της Διώρυγας της Κορίνθου. Φιλοξενεί προορισμούς όπως το Ναύπλιο, τη λιμανιού πόλη της Πάτρας, και την Καλαμάτα στα νότια, και συνήθως προσεγγίζεται με ιδιωτική μεταφορά από την Αθήνα.",
          "Η ιδιωτική μεταφορά σε όλη την Πελοπόννησο καλύπτει συνήθως μεταφορές από την Αθήνα ή το Αεροδρόμιο Αθηνών, μετακινήσεις μεταξύ πόλεων εντός της περιφέρειας, και συνδέσεις με το λιμάνι της Πάτρας για συνέχεια του ταξιδιού με ferry προς την Ιταλία.",
        ],
      },
      airports: {
        eyebrow: "Πρόσβαση με Αεροπλάνο",
        title: "Πρόσβαση στην Πελοπόννησο Αεροπορικώς",
        items: [
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Οι περισσότεροι επισκέπτες φτάνουν στην Πελοπόννησο με ιδιωτική μεταφορά από το Διεθνές Αεροδρόμιο Αθηνών." },
        ],
      },
      ports: {
        eyebrow: "Λιμάνια",
        title: "Το Κύριο Λιμάνι της Πελοποννήσου",
        items: [
          { label: "Λιμάνι Πάτρας", href: "/el/limani/patra/", description: "Η κύρια πύλη ferry της Ελλάδας προς την Ιταλία, στη βόρεια Πελοπόννησο." },
        ],
      },
      cities: {
        eyebrow: "Πόλεις & Κωμοπόλεις",
        title: "Προορισμοί στην Πελοπόννησο",
        items: [
          { label: "Καλαμάτα", href: "/el/poli/kalamata/", description: "Ο περιφερειακός κόμβος για τη νότια Πελοπόννησο, στη Μεσσηνία." },
          { label: "Ναύπλιο", href: "/el/proorismos/nafplio/", description: "Μια δημοφιλής παραθαλάσσια πόλη στην περιοχή της Αργολίδας στην Πελοπόννησο." },
        ],
      },
      routes: {
        eyebrow: "Δημοφιλείς Διαδρομές",
        title: "Δημοφιλείς Μεταφορές προς την Πελοπόννησο",
        items: [
          { label: "Αθήνα προς Ναύπλιο", href: "/el/diadromi/athina-nafplio/", description: "Ιδιωτική μεταφορά που συνδέει την Αθήνα με τη δημοφιλή παραθαλάσσια πόλη της Πελοποννήσου." },
        ],
      },
      services: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στην Πελοπόννησο." },
          { label: "Μεταφορές Μεταξύ Πόλεων", href: "/el/metafores-metaxy-poleon/", description: "Απευθείας ιδιωτικές μεταφορές μεταξύ της Πελοποννήσου και άλλων ελληνικών προορισμών." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνουν οι περισσότεροι επισκέπτες στην Πελοπόννησο;", answer: "Οι περισσότεροι επισκέπτες φτάνουν με ιδιωτική μεταφορά από την Αθήνα ή το Αεροδρόμιο Αθηνών, καθώς η Πελοπόννησος συνδέεται οδικώς με την ηπειρωτική χώρα." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από την Αθήνα προς το Ναύπλιο;", answer: "Ναι, είναι μία από τις δημοφιλείς διαδρομές μας προς την Πελοπόννησο." },
          { question: "Έχει η Πελοπόννησος σύνδεση ferry με την Ιταλία;", answer: "Ναι, το Λιμάνι της Πάτρας στη βόρεια Πελοπόννησο είναι η κύρια διεθνής πύλη ferry της Ελλάδας προς την Ιταλία." },
          { question: "Μπορείτε να οργανώσετε μεταφορές μεταξύ πόλεων εντός της Πελοποννήσου;", answer: "Ναι, περιγράψτε τη διαδρομή σας κατά την αίτηση προσφοράς και θα σας επιβεβαιώσουμε τι μπορεί να οργανωθεί." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στην Πελοπόννησο;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },
}
