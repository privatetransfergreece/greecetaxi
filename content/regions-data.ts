import type { Locale } from "@/lib/i18n/config"
import type { HeroContent } from "@/components/location/hero"
import type { RelatedLinkItem } from "@/components/location/related-links"

export type RegionSlug = "regionCrete" | "regionPeloponnese"

export type LinkSection = { eyebrow: string; title: string; description?: string; items: Omit<RelatedLinkItem, "icon">[] }
export type ProseSection = { eyebrow: string; title: string; paragraphs: string[] }
export type StepsSection = { eyebrow: string; title: string; steps: { title: string; description: string }[] }

export type RegionPageContent = {
  meta: { title: string; description: string }
  breadcrumbLabel: string
  hero: HeroContent
  intro: ProseSection
  airports: LinkSection
  ports: LinkSection
  cities: LinkSection
  routes: LinkSection
  hotelTransfers?: LinkSection
  services: LinkSection
  howItWorks?: StepsSection
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
          "Crete is the largest island in Greece, with two main airports — Heraklion in the centre-north and Chania in the west — serving different parts of the island. Heraklion also has Crete's main ferry port, connecting the island with Piraeus, while Chania is served by the port of Souda a short distance away.",
          "Because Crete is long and its main towns and resorts are spread along the north coast, private transportation typically falls into a few categories: airport transfers on arrival, transfers between Heraklion and Chania along the north coast highway, local transfers to resort areas such as Hersonissos, Malia and Elounda in the east or Platanias and Georgioupolis in the west, and private day trips to sites such as Knossos, Elafonissi and Samaria Gorge.",
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
        title: "Crete's Main Ports",
        items: [
          { label: "Heraklion Port", href: "/port/heraklion/", description: "Crete's main ferry connection to Piraeus, also receiving cruise calls." },
          { label: "Souda Port", href: "/port/souda/", description: "The port serving Chania and western Crete, a short distance from Chania town." },
        ],
      },
      cities: {
        eyebrow: "Getting Around",
        title: "Travelling Between Crete's Main Towns",
        items: [
          { label: "Heraklion", href: "/city/heraklion/", description: "Crete's largest city and the island's main commercial hub." },
          { label: "Chania", href: "/city/chania/", description: "The main town of western Crete, with its own airport and port." },
          { label: "Rethymno", href: "/city/rethymno/", description: "A town roughly midway between Heraklion and Chania." },
          { label: "Agios Nikolaos", href: "/city/agios-nikolaos/", description: "The main town of eastern Crete, close to Elounda." },
        ],
      },
      routes: {
        eyebrow: "Popular Routes",
        title: "Popular Transfers Within Crete",
        items: [
          { label: "Heraklion to Chania", href: "/route/heraklion-to-chania/", description: "The main cross-island route, connecting Crete's two airports and main towns." },
          { label: "Heraklion Airport to Hersonissos", href: "/route/heraklion-airport-to-hersonissos/", description: "A direct transfer to one of Crete's largest resort areas." },
          { label: "Heraklion Airport to Elounda", href: "/route/heraklion-airport-to-elounda/", description: "A direct transfer to the luxury resort area of Elounda." },
          { label: "Chania Airport to Platanias", href: "/route/chania-airport-to-platanias/", description: "A direct transfer to the resort strip west of Chania town." },
          { label: "Crete Day Trips", href: "/crete-day-trips/", description: "See our full range of private day trips across Crete." },
        ],
      },
      hotelTransfers: {
        eyebrow: "Hotel & Resort Transfers",
        title: "Hotel and Resort Transfers in Crete",
        description: "Beyond airport and city transfers, we cover direct routes to individual hotels across the island, from central heritage properties to coastal resorts.",
        items: [
          { label: "GDM Megaron, Heraklion", href: "/route/heraklion-airport-to-gdm-megaron/", description: "A historic building overlooking Heraklion's Venetian port, in the city centre itself." },
          { label: "Creta Maris, Hersonissos", href: "/route/heraklion-airport-to-creta-maris/", description: "A large all-inclusive resort around 25 minutes from Heraklion Airport." },
          { label: "Elounda Bay Palace, Elounda", href: "/route/heraklion-airport-to-elounda-bay-palace/", description: "A luxury resort on Mirabello Bay near Elounda village." },
          { label: "Minos Beach Art Hotel, Agios Nikolaos", href: "/route/heraklion-airport-to-minos-beach-art/", description: "A design-focused waterfront hotel in Agios Nikolaos town." },
        ],
      },
      services: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        description: "For families and larger groups, we arrange a vehicle sized to your passenger and luggage numbers rather than a shared or fixed-capacity shuttle — mention your group size when requesting a quote.",
        items: [
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey on Crete." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups exploring Crete." },
        ],
      },
      howItWorks: {
        eyebrow: "How It Works",
        title: "How Your Crete Transfer Works",
        steps: [
          { title: "Request a Quote", description: "Tell us your pickup point, destination, date and passenger numbers." },
          { title: "Receive Your Pricing", description: "We confirm availability and a price based on your journey details." },
          { title: "Booking Confirmed", description: "Once confirmed, your vehicle and driver are arranged for your travel date." },
          { title: "Meet Your Driver", description: "Your driver meets you at the agreed pickup point, ready to travel directly to your destination." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Which airports serve Crete?", answer: "Crete has two main airports: Heraklion in the centre-north, and Chania in the west." },
          { question: "Can I book a private transfer from Heraklion to Chania?", answer: "Yes, this is one of our most requested cross-island routes, travelling along the north coast highway." },
          { question: "Does Crete have a ferry connection to Athens?", answer: "Yes, Heraklion Port connects Crete with Piraeus by ferry, and Souda Port near Chania offers an alternative connection." },
          { question: "Can I book a transfer directly to a resort area like Hersonissos or Elounda?", answer: "Yes, we cover direct airport transfers to Crete's main resort areas — see our airport pages for the full list of routes." },
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
          "Η Κρήτη είναι το μεγαλύτερο νησί της Ελλάδας, με δύο κύρια αεροδρόμια — το Ηράκλειο στο κέντρο-βορρά και τα Χανιά στα δυτικά — που εξυπηρετούν διαφορετικά μέρη του νησιού. Το Ηράκλειο διαθέτει επίσης το κύριο λιμάνι ferry της Κρήτης, που συνδέει το νησί με τον Πειραιά, ενώ τα Χανιά εξυπηρετούνται από το λιμάνι της Σούδας σε μικρή απόσταση.",
          "Επειδή η Κρήτη είναι επιμήκης και οι κύριες πόλεις και τα θέρετρά της απλώνονται κατά μήκος της βόρειας ακτής, η ιδιωτική μεταφορά εντάσσεται συνήθως σε λίγες κατηγορίες: μεταφορές αεροδρομίου κατά την άφιξη, μεταφορές μεταξύ Ηρακλείου και Χανίων κατά μήκος του βόρειου οδικού άξονα, τοπικές μεταφορές προς θέρετρα όπως ο Χερσόνησος, τα Μάλια και η Ελούντα στα ανατολικά ή ο Πλατανιάς και η Γεωργιούπολη στα δυτικά, και ιδιωτικές εκδρομές προς χώρους όπως η Κνωσός, το Ελαφονήσι και το Φαράγγι της Σαμαριάς.",
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
        title: "Τα Κύρια Λιμάνια της Κρήτης",
        items: [
          { label: "Λιμάνι Ηρακλείου", href: "/el/limani/irakleio/", description: "Η κύρια σύνδεση ferry της Κρήτης προς τον Πειραιά, με υποδοχή και κρουαζιερόπλοιων." },
          { label: "Λιμάνι Σούδας", href: "/el/limani/souda/", description: "Το λιμάνι που εξυπηρετεί τα Χανιά και τη δυτική Κρήτη, σε μικρή απόσταση από την πόλη των Χανίων." },
        ],
      },
      cities: {
        eyebrow: "Μετακινήσεις",
        title: "Ταξίδι Μεταξύ των Κύριων Πόλεων της Κρήτης",
        items: [
          { label: "Ηράκλειο", href: "/el/poli/irakleio/", description: "Η μεγαλύτερη πόλη της Κρήτης και το κύριο εμπορικό κέντρο του νησιού." },
          { label: "Χανιά", href: "/el/poli/chania/", description: "Η κύρια πόλη της δυτικής Κρήτης, με δικό της αεροδρόμιο και λιμάνι." },
          { label: "Ρέθυμνο", href: "/el/poli/rethymno/", description: "Μια πόλη περίπου στη μέση της διαδρομής μεταξύ Ηρακλείου και Χανίων." },
          { label: "Άγιος Νικόλαος", href: "/el/poli/agios-nikolaos/", description: "Η κύρια πόλη της ανατολικής Κρήτης, κοντά στην Ελούντα." },
        ],
      },
      routes: {
        eyebrow: "Δημοφιλείς Διαδρομές",
        title: "Δημοφιλείς Μεταφορές εντός της Κρήτης",
        items: [
          { label: "Ηράκλειο προς Χανιά", href: "/el/diadromi/irakleio-chania/", description: "Η κύρια διαδρομή του νησιού, που συνδέει τα δύο αεροδρόμια και τις κύριες πόλεις της Κρήτης." },
          { label: "Αεροδρόμιο Ηρακλείου προς Χερσόνησο", href: "/el/diadromi/aerodromio-irakleiou-chersonisos/", description: "Απευθείας μεταφορά προς μία από τις μεγαλύτερες τουριστικές περιοχές της Κρήτης." },
          { label: "Αεροδρόμιο Ηρακλείου προς Ελούντα", href: "/el/diadromi/aerodromio-irakleiou-elounda/", description: "Απευθείας μεταφορά προς την πολυτελή περιοχή θερέτρων της Ελούντας." },
          { label: "Αεροδρόμιο Χανίων προς Πλατανιά", href: "/el/diadromi/aerodromio-chanion-platanias/", description: "Απευθείας μεταφορά προς τη τουριστική περιοχή δυτικά της πόλης των Χανίων." },
          { label: "Ιδιωτικές Εκδρομές στην Κρήτη", href: "/el/idiotikes-ekdromes-kriti/", description: "Δείτε το πλήρες φάσμα ιδιωτικών εκδρομών μας σε όλη την Κρήτη." },
        ],
      },
      hotelTransfers: {
        eyebrow: "Μεταφορές σε Ξενοδοχεία & Θέρετρα",
        title: "Μεταφορές σε Ξενοδοχεία και Θέρετρα στην Κρήτη",
        description: "Πέρα από τις μεταφορές αεροδρομίου και πόλης, καλύπτουμε απευθείας διαδρομές προς μεμονωμένα ξενοδοχεία σε όλο το νησί, από κεντρικά ιστορικά κτίρια έως παραθαλάσσια θέρετρα.",
        items: [
          { label: "GDM Megaron, Ηράκλειο", href: "/el/diadromi/aerodromio-irakleiou-gdm-megaron/", description: "Ιστορικό κτίριο με θέα στο Ενετικό λιμάνι του Ηρακλείου, στο κέντρο της πόλης." },
          { label: "Creta Maris, Χερσόνησος", href: "/el/diadromi/aerodromio-irakleiou-creta-maris/", description: "Μεγάλο all-inclusive θέρετρο περίπου 25 λεπτά από το Αεροδρόμιο Ηρακλείου." },
          { label: "Elounda Bay Palace, Ελούντα", href: "/el/diadromi/aerodromio-irakleiou-elounda-bay-palace/", description: "Πολυτελές θέρετρο στον κόλπο του Μιραμπέλλου, κοντά στην Ελούντα." },
          { label: "Minos Beach Art Hotel, Άγιος Νικόλαος", href: "/el/diadromi/aerodromio-irakleiou-minos-beach-art/", description: "Παραθαλάσσιο ξενοδοχείο design στην πόλη του Αγίου Νικολάου." },
        ],
      },
      services: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        description: "Για οικογένειες και μεγαλύτερες ομάδες, οργανώνουμε όχημα ανάλογο με τον αριθμό επιβατών και αποσκευών σας αντί για σταθερής χωρητικότητας shuttle — αναφέρετε το μέγεθος της ομάδας σας κατά την αίτηση προσφοράς.",
        items: [
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στην Κρήτη." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες που εξερευνούν την Κρήτη." },
        ],
      },
      howItWorks: {
        eyebrow: "Πώς Λειτουργεί",
        title: "Πώς Λειτουργεί η Μεταφορά σας στην Κρήτη",
        steps: [
          { title: "Ζητήστε Προσφορά", description: "Πείτε μας το σημείο παραλαβής, τον προορισμό, την ημερομηνία και τον αριθμό επιβατών." },
          { title: "Λάβετε την Τιμή σας", description: "Επιβεβαιώνουμε διαθεσιμότητα και τιμή βάσει των στοιχείων της διαδρομής σας." },
          { title: "Επιβεβαίωση Κράτησης", description: "Μετά την επιβεβαίωση, οργανώνονται το όχημα και ο οδηγός για την ημερομηνία ταξιδιού σας." },
          { title: "Συναντήστε τον Οδηγό σας", description: "Ο οδηγός σας συναντά στο συμφωνημένο σημείο παραλαβής, έτοιμος να σας μεταφέρει απευθείας στον προορισμό σας." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Ποια αεροδρόμια εξυπηρετούν την Κρήτη;", answer: "Η Κρήτη διαθέτει δύο κύρια αεροδρόμια: το Ηράκλειο στο κέντρο-βορρά, και τα Χανιά στα δυτικά." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το Ηράκλειο προς τα Χανιά;", answer: "Ναι, είναι μία από τις πιο ζητημένες διαδρομές μας εντός του νησιού, κατά μήκος του βόρειου οδικού άξονα." },
          { question: "Έχει η Κρήτη σύνδεση ferry με την Αθήνα;", answer: "Ναι, το Λιμάνι Ηρακλείου συνδέει την Κρήτη με τον Πειραιά μέσω ferry, ενώ το Λιμάνι Σούδας κοντά στα Χανιά προσφέρει εναλλακτική σύνδεση." },
          { question: "Μπορώ να κλείσω μεταφορά απευθείας προς θέρετρο όπως ο Χερσόνησος ή η Ελούντα;", answer: "Ναι, καλύπτουμε απευθείας μεταφορές αεροδρομίου προς τις κύριες περιοχές θερέτρων της Κρήτης — δείτε τις σελίδες αεροδρομίων μας για την πλήρη λίστα διαδρομών." },
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
          { label: "Athens to Corinth", href: "/route/athens-to-corinth/", description: "A private transfer to Corinth and the Corinth Canal, the main gateway into the Peloponnese." },
          { label: "Athens Airport to Nafplio", href: "/route/athens-airport-to-nafplio/", description: "A direct transfer bypassing central Athens, for arrivals heading straight to the Peloponnese." },
          { label: "Piraeus Port to Nafplio", href: "/route/piraeus-port-to-nafplio/", description: "A direct transfer for cruise and ferry passengers continuing to the Peloponnese." },
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
          { label: "Αθήνα προς Κόρινθο", href: "/el/diadromi/athina-korinthos/", description: "Ιδιωτική μεταφορά προς την Κόρινθο και τη Διώρυγα της Κορίνθου, την κύρια πύλη προς την Πελοπόννησο." },
          { label: "Αεροδρόμιο Αθηνών προς Ναύπλιο", href: "/el/diadromi/aerodromio-athinas-nafplio/", description: "Απευθείας μεταφορά παρακάμπτοντας το κέντρο της Αθήνας, για όσους κατευθύνονται απευθείας στην Πελοπόννησο." },
          { label: "Πειραιάς προς Ναύπλιο", href: "/el/diadromi/peiraias-nafplio/", description: "Απευθείας μεταφορά για επιβάτες κρουαζιέρας και ferry που συνεχίζουν προς την Πελοπόννησο." },
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
