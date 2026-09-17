import type { Locale } from "@/lib/i18n/config"
import type { HeroContent } from "@/components/location/hero"
import type { IconTextSection } from "@/content/service-hubs"
import type { RelatedLinkItem } from "@/components/location/related-links"

export type CitySlug =
  | "cityAthens"
  | "cityThessaloniki"
  | "cityKalamata"
  | "cityHeraklion"
  | "cityChania"
  | "cityRethymno"
  | "cityAgiosNikolaos"

export type LinkSection = { eyebrow: string; title: string; items: Omit<RelatedLinkItem, "icon">[] }
export type ProseSection = { eyebrow: string; title: string; paragraphs: string[] }

export type CityPageContent = {
  meta: { title: string; description: string }
  breadcrumbLabel: string
  hero: HeroContent
  intro: ProseSection
  gettingHere: LinkSection
  transferOptions: IconTextSection
  portConnections?: LinkSection
  popularRoutes: LinkSection
  nearbyDestinations: LinkSection
  faq: { eyebrow: string; title: string; items: { question: string; answer: string }[] }
  cta: { heading: string; description: string; primaryLabel: string; secondaryLabel: string }
}

export const cityImages: Partial<Record<CitySlug, { src: string; alt: Record<Locale, string> }>> = {
  cityAthens: {
    src: "/destinations/athens.webp",
    alt: {
      en: "The Acropolis of Athens illuminated at night, Greece",
      el: "Η Ακρόπολη της Αθήνας φωτισμένη τη νύχτα, Ελλάδα",
    },
  },
  cityThessaloniki: {
    src: "/destinations/thessaloniki.webp",
    alt: {
      en: "The White Tower and waterfront promenade in Thessaloniki, Greece",
      el: "Ο Λευκός Πύργος και η παραλιακή προμενάδα της Θεσσαλονίκης, Ελλάδα",
    },
  },
  cityHeraklion: {
    src: "/destinations/heraklion.webp",
    alt: {
      en: "Harbourfront of Heraklion illuminated at night, Crete's largest city, Greece",
      el: "Το λιμάνι του Ηρακλείου φωτισμένο τη νύχτα, η μεγαλύτερη πόλη της Κρήτης, Ελλάδα",
    },
  },
}

export const cityContent: Record<CitySlug, Record<Locale, CityPageContent>> = {
  cityAthens: {
    en: {
      meta: {
        title: "Private Transfers in Athens – Taxi & Chauffeur Service",
        description:
          "Book a private transfer in Athens for airport, port and city-to-city journeys. Comfortable door-to-door travel across the Greek capital. Get a quote.",
      },
      breadcrumbLabel: "Athens",
      hero: {
        eyebrow: "Athens, Attica",
        title: "Private Transfers in Athens",
        description: "Book a private transfer for airport, port and city-to-city journeys across the Greek capital.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Athens",
        title: "Athens as a Transportation Hub",
        paragraphs: [
          "Athens, the capital of Greece, sits at the centre of the country's transportation network. It's typically the first stop for international visitors, whether arriving by air through Athens International Airport, by sea through Piraeus, Rafina or Lavrio, or connecting onward from other Greek cities.",
          "Because of this central role, private transportation in Athens usually falls into a few clear categories: airport transfers, port transfers, transfers within the city between hotels and attractions, and long-distance transfers connecting Athens to destinations such as Delphi, Nafplio, Meteora and Thessaloniki.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To and From Athens",
        title: "Airport and Port Connections",
        items: [
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "Private transfers between Athens International Airport and the city." },
          { label: "Piraeus Port", href: "/port/piraeus/", description: "Connect between central Athens and Greece's main cruise and ferry port." },
          { label: "Rafina Port", href: "/port/rafina/", description: "A transfer option for travellers connecting to Cycladic ferries from Rafina." },
        ],
      },
      transferOptions: {
        eyebrow: "Transfer Options",
        title: "Private Transportation in Athens",
        items: [
          { title: "Airport Transfers", description: "Direct transfers between Athens Airport and your hotel or address." },
          { title: "Private Transfers", description: "A door-to-door vehicle for any journey within the city or beyond." },
          { title: "City-to-City Transfers", description: "Long-distance transfers connecting Athens with other Greek cities and destinations." },
          { title: "Group Transfers", description: "Larger vehicles for families and groups travelling together." },
        ],
      },
      popularRoutes: {
        eyebrow: "Popular Routes",
        title: "Private Day Trips & City-to-City Transfers From Athens",
        items: [
          { label: "Athens to Cape Sounion", href: "/route/athens-to-cape-sounion/", description: "A private day trip or one-way transfer to the Temple of Poseidon on the southern tip of Attica." },
          { label: "Athens to Delphi", href: "/route/athens-to-delphi/", description: "A private transfer to the archaeological site of Delphi in central Greece." },
          { label: "Athens to Nafplio", href: "/route/athens-to-nafplio/", description: "A private transfer to the Peloponnese's popular waterfront town." },
          { label: "Athens to Corinth", href: "/route/athens-to-corinth/", description: "A private transfer to Corinth and the Corinth Canal, a common stop en route to the Peloponnese." },
          { label: "Athens to Meteora", href: "/route/athens-to-meteora/", description: "A long-distance private transfer to the rock-pillar monasteries of Meteora." },
          { label: "Athens to Thessaloniki", href: "/route/athens-to-thessaloniki/", description: "A long-distance private transfer connecting Greece's two largest cities." },
        ],
      },
      nearbyDestinations: {
        eyebrow: "Nearby Destinations",
        title: "Destinations Reachable From Athens",
        items: [
          { label: "Athens Riviera", href: "/destination/athens-riviera/", description: "The coastal strip southeast of Athens, including Glyfada, Vouliagmeni and Cape Sounion." },
          { label: "Nafplio", href: "/destination/nafplio/", description: "A popular Peloponnese waterfront town, reachable by private transfer from Athens." },
          { label: "Meteora", href: "/destination/meteora/", description: "The rock-pillar monasteries of Thessaly, reachable by long-distance transfer." },
          { label: "Athens Day Trips", href: "/athens-day-trips/", description: "Browse our full range of private day trips from Athens, including Cape Sounion, Delphi and Nafplio." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a private transfer from Athens Airport to my hotel?", answer: "Yes, airport-to-hotel transfers in Athens are one of our most common requests." },
          { question: "Can I travel from Athens to Piraeus Port for a cruise?", answer: "Yes, private transfers between central Athens and Piraeus can be timed around your embarkation." },
          { question: "Can I book a long-distance transfer from Athens to another city?", answer: "Yes, private city-to-city transfers from Athens to destinations such as Delphi, Nafplio, Meteora and Thessaloniki can be requested through the quote form." },
          { question: "Can you arrange a transfer for a group visiting Athens?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
          { question: "What information do I need to provide when booking a transfer in Athens?", answer: "Your pickup location, destination, travel date and time, and passenger and luggage numbers." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Athens Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στην Αθήνα – Ταξί & Σοφέρ",
        description:
          "Κλείστε ιδιωτική μεταφορά στην Αθήνα για αεροδρόμιο, λιμάνι και μεταφορές μεταξύ πόλεων. Άνετη μεταφορά από πόρτα σε πόρτα στην ελληνική πρωτεύουσα.",
      },
      breadcrumbLabel: "Αθήνα",
      hero: {
        eyebrow: "Αθήνα, Αττική",
        title: "Ιδιωτικές Μεταφορές στην Αθήνα",
        description: "Κλείστε ιδιωτική μεταφορά για αεροδρόμιο, λιμάνι και μεταφορές μεταξύ πόλεων στην ελληνική πρωτεύουσα.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με την Αθήνα",
        title: "Η Αθήνα ως Κόμβος Μεταφορών",
        paragraphs: [
          "Η Αθήνα, πρωτεύουσα της Ελλάδας, βρίσκεται στο κέντρο του δικτύου μεταφορών της χώρας. Συνήθως αποτελεί την πρώτη στάση για διεθνείς επισκέπτες, είτε φτάνουν αεροπορικώς μέσω του Διεθνούς Αεροδρομίου Αθηνών, είτε μέσω θαλάσσης από τον Πειραιά, τη Ραφήνα ή το Λαύριο, είτε συνδέονται από άλλες ελληνικές πόλεις.",
          "Λόγω αυτού του κεντρικού ρόλου, η ιδιωτική μεταφορά στην Αθήνα εντάσσεται συνήθως σε λίγες σαφείς κατηγορίες: μεταφορές αεροδρομίου, μεταφορές λιμανιού, μεταφορές εντός της πόλης μεταξύ ξενοδοχείων και αξιοθέατων, και μεταφορές μεγάλων αποστάσεων που συνδέουν την Αθήνα με προορισμούς όπως οι Δελφοί, το Ναύπλιο, τα Μετέωρα και η Θεσσαλονίκη.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στην Αθήνα",
        title: "Συνδέσεις με Αεροδρόμιο και Λιμάνια",
        items: [
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Ιδιωτικές μεταφορές μεταξύ του Διεθνούς Αεροδρομίου Αθηνών και της πόλης." },
          { label: "Λιμάνι Πειραιά", href: "/el/limani/peiraias/", description: "Σύνδεση μεταξύ του κέντρου της Αθήνας και του κύριου λιμανιού κρουαζιέρας και ferry της Ελλάδας." },
          { label: "Λιμάνι Ραφήνας", href: "/el/limani/rafina/", description: "Μια επιλογή μεταφοράς για ταξιδιώτες που συνδέονται με ferry προς τις Κυκλάδες από τη Ραφήνα." },
        ],
      },
      transferOptions: {
        eyebrow: "Επιλογές Μεταφοράς",
        title: "Ιδιωτική Μεταφορά στην Αθήνα",
        items: [
          { title: "Μεταφορές Αεροδρομίου", description: "Απευθείας μεταφορές μεταξύ του Αεροδρομίου Αθηνών και του ξενοδοχείου ή της διεύθυνσής σας." },
          { title: "Ιδιωτικές Μεταφορές", description: "Ένα όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή εντός ή εκτός της πόλης." },
          { title: "Μεταφορές Μεταξύ Πόλεων", description: "Μεταφορές μεγάλων αποστάσεων που συνδέουν την Αθήνα με άλλες ελληνικές πόλεις και προορισμούς." },
          { title: "Ομαδικές Μεταφορές", description: "Μεγαλύτερα οχήματα για οικογένειες και ομάδες που ταξιδεύουν μαζί." },
        ],
      },
      popularRoutes: {
        eyebrow: "Δημοφιλείς Διαδρομές",
        title: "Ιδιωτικές Εκδρομές & Μεταφορές Μεταξύ Πόλεων από την Αθήνα",
        items: [
          { label: "Αθήνα προς Σούνιο", href: "/el/diadromi/athina-sounio/", description: "Ιδιωτική ημερήσια εκδρομή ή μεταφορά προς τον Ναό του Ποσειδώνα στο νότιο άκρο της Αττικής." },
          { label: "Αθήνα προς Δελφούς", href: "/el/diadromi/athina-delfoi/", description: "Ιδιωτική μεταφορά προς τον αρχαιολογικό χώρο των Δελφών στην κεντρική Ελλάδα." },
          { label: "Αθήνα προς Ναύπλιο", href: "/el/diadromi/athina-nafplio/", description: "Ιδιωτική μεταφορά προς τη δημοφιλή παραθαλάσσια πόλη της Πελοποννήσου." },
          { label: "Αθήνα προς Κόρινθο", href: "/el/diadromi/athina-korinthos/", description: "Ιδιωτική μεταφορά προς την Κόρινθο και τη Διώρυγα της Κορίνθου, συνηθισμένη στάση προς την Πελοπόννησο." },
          { label: "Αθήνα προς Μετέωρα", href: "/el/diadromi/athina-meteora/", description: "Ιδιωτική μεταφορά μεγάλης απόστασης προς τα μοναστήρια πάνω σε βράχους των Μετεώρων." },
          { label: "Αθήνα προς Θεσσαλονίκη", href: "/el/diadromi/athina-thessaloniki/", description: "Ιδιωτική μεταφορά μεγάλης απόστασης που συνδέει τις δύο μεγαλύτερες πόλεις της Ελλάδας." },
        ],
      },
      nearbyDestinations: {
        eyebrow: "Κοντινοί Προορισμοί",
        title: "Προορισμοί Προσβάσιμοι από την Αθήνα",
        items: [
          { label: "Παραλιακή Αθήνας", href: "/el/proorismos/paralia-athinas/", description: "Η παράκτια ζώνη νοτιοανατολικά της Αθήνας, με τη Γλυφάδα, τη Βουλιαγμένη και το Σούνιο." },
          { label: "Ναύπλιο", href: "/el/proorismos/nafplio/", description: "Μια δημοφιλής παραθαλάσσια πόλη της Πελοποννήσου, προσβάσιμη με ιδιωτική μεταφορά από την Αθήνα." },
          { label: "Μετέωρα", href: "/el/proorismos/meteora/", description: "Τα μοναστήρια πάνω σε βράχους της Θεσσαλίας, προσβάσιμα με μεταφορά μεγάλης απόστασης." },
          { label: "Ημερήσιες Εκδρομές από την Αθήνα", href: "/el/idiotikes-ekdromes-athina/", description: "Δείτε όλες τις ιδιωτικές ημερήσιες εκδρομές μας από την Αθήνα, με Σούνιο, Δελφούς και Ναύπλιο." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το Αεροδρόμιο Αθηνών προς το ξενοδοχείο μου;", answer: "Ναι, οι μεταφορές από το αεροδρόμιο προς το ξενοδοχείο στην Αθήνα είναι από τα πιο συνηθισμένα αιτήματά μας." },
          { question: "Μπορώ να ταξιδέψω από την Αθήνα προς το Λιμάνι του Πειραιά για κρουαζιέρα;", answer: "Ναι, οι ιδιωτικές μεταφορές μεταξύ κέντρου Αθήνας και Πειραιά μπορούν να προσαρμοστούν στην επιβίβασή σας." },
          { question: "Μπορώ να κλείσω μεταφορά μεγάλης απόστασης από την Αθήνα προς άλλη πόλη;", answer: "Ναι, ιδιωτικές μεταφορές μεταξύ πόλεων από την Αθήνα προς προορισμούς όπως οι Δελφοί, το Ναύπλιο, τα Μετέωρα και η Θεσσαλονίκη μπορούν να ζητηθούν μέσω της φόρμας προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που επισκέπτεται την Αθήνα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
          { question: "Ποιες πληροφορίες χρειάζεται να δώσω για μια μεταφορά στην Αθήνα;", answer: "Το σημείο παραλαβής, τον προορισμό, την ημερομηνία και ώρα ταξιδιού, και τον αριθμό επιβατών και αποσκευών." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στην Αθήνα;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  cityThessaloniki: {
    en: {
      meta: {
        title: "Private Transfers in Thessaloniki – Taxi & Chauffeur",
        description:
          "Book a private transfer in Thessaloniki for airport, port and onward journeys to Halkidiki or Athens. Comfortable door-to-door travel. Get a quote.",
      },
      breadcrumbLabel: "Thessaloniki",
      hero: {
        eyebrow: "Thessaloniki, Central Macedonia",
        title: "Private Transfers in Thessaloniki",
        description: "Book a private transfer for airport, port and onward journeys to Halkidiki or Athens.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Thessaloniki",
        title: "Thessaloniki as a Transportation Hub",
        paragraphs: [
          "Thessaloniki, Greece's second-largest city, is the main gateway to Central Macedonia and northern Greece. Visitors typically arrive through Thessaloniki Airport or the city's port, and many continue onward to the Halkidiki peninsula, a popular coastal region to the east.",
          "Private transportation in Thessaloniki generally covers airport transfers, port transfers, transfers within the city, and long-distance transfers connecting Thessaloniki with Halkidiki or with Athens to the south.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To and From Thessaloniki",
        title: "Airport and Port Connections",
        items: [
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "Private transfers between Thessaloniki Airport and the city." },
          { label: "Port of Thessaloniki", href: "/port/thessaloniki/", description: "Connect between the city and its port for cruise or ferry travel." },
        ],
      },
      transferOptions: {
        eyebrow: "Transfer Options",
        title: "Private Transportation in Thessaloniki",
        items: [
          { title: "Airport Transfers", description: "Direct transfers between Thessaloniki Airport and your hotel or address." },
          { title: "Private Transfers", description: "A door-to-door vehicle for any journey within the city or beyond." },
          { title: "City-to-City Transfers", description: "Long-distance transfers connecting Thessaloniki with Athens and other destinations." },
          { title: "Group Transfers", description: "Larger vehicles for families and groups travelling together." },
        ],
      },
      popularRoutes: {
        eyebrow: "Popular Routes",
        title: "Popular Transfers From Thessaloniki",
        items: [
          { label: "Thessaloniki to Halkidiki", href: "/route/thessaloniki-to-halkidiki/", description: "A private transfer to the beaches of the Halkidiki peninsula." },
          { label: "Athens to Thessaloniki", href: "/route/athens-to-thessaloniki/", description: "A long-distance private transfer connecting Greece's two largest cities." },
          { label: "Thessaloniki to Meteora", href: "/route/thessaloniki-to-meteora/", description: "A long-distance transfer to the rock-pillar monasteries of Meteora." },
          { label: "Thessaloniki to Mount Olympus", href: "/route/thessaloniki-to-mount-olympus/", description: "A day trip to Litochoro, the gateway town at the foot of Mount Olympus." },
          { label: "Thessaloniki to Vergina & Pella", href: "/route/thessaloniki-to-vergina-pella/", description: "A day trip to the ancient Macedonian sites of Vergina and Pella." },
          { label: "Thessaloniki to Kavala", href: "/route/thessaloniki-to-kavala/", description: "A long-distance transfer to the port city of Kavala." },
        ],
      },
      nearbyDestinations: {
        eyebrow: "Nearby Destinations",
        title: "Destinations Reachable From Thessaloniki",
        items: [
          { label: "Halkidiki", href: "/destination/halkidiki/", description: "The three-peninsula coastal region east of Thessaloniki, including Kassandra and Sithonia." },
          { label: "Thessaloniki Day Trips", href: "/thessaloniki-day-trips/", description: "See our full range of private day trips from Thessaloniki." },
          { label: "Explore All Destinations", href: "/destinations/", description: "See our full directory of destinations, airports, ports and routes across Greece." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a private transfer from Thessaloniki Airport to my hotel?", answer: "Yes, airport-to-hotel transfers in Thessaloniki are one of our most common requests." },
          { question: "Can I travel from Thessaloniki directly to Halkidiki?", answer: "Yes, private transfers from Thessaloniki to Halkidiki can be requested through the quote form." },
          { question: "Can I book a long-distance transfer from Thessaloniki to Athens?", answer: "Yes, this long-distance private transfer can be arranged — describe your journey when requesting a quote." },
          { question: "Do you offer day trips from Thessaloniki?", answer: "Yes, see our Thessaloniki day trips page for private excursions to Meteora, Mount Olympus, Vergina, Pella and Kavala." },
          { question: "Can you arrange a transfer for a group visiting Thessaloniki?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
          { question: "What information do I need to provide when booking a transfer in Thessaloniki?", answer: "Your pickup location, destination, travel date and time, and passenger and luggage numbers." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Thessaloniki Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στη Θεσσαλονίκη – Ταξί & Σοφέρ",
        description:
          "Κλείστε ιδιωτική μεταφορά στη Θεσσαλονίκη για αεροδρόμιο, λιμάνι και ταξίδια προς τη Χαλκιδική ή την Αθήνα. Άνετη μεταφορά από πόρτα σε πόρτα.",
      },
      breadcrumbLabel: "Θεσσαλονίκη",
      hero: {
        eyebrow: "Θεσσαλονίκη, Κεντρική Μακεδονία",
        title: "Ιδιωτικές Μεταφορές στη Θεσσαλονίκη",
        description: "Κλείστε ιδιωτική μεταφορά για αεροδρόμιο, λιμάνι και ταξίδια προς τη Χαλκιδική ή την Αθήνα.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τη Θεσσαλονίκη",
        title: "Η Θεσσαλονίκη ως Κόμβος Μεταφορών",
        paragraphs: [
          "Η Θεσσαλονίκη, η δεύτερη μεγαλύτερη πόλη της Ελλάδας, είναι η κύρια πύλη προς την Κεντρική Μακεδονία και τη βόρεια Ελλάδα. Οι επισκέπτες συνήθως φτάνουν μέσω του Αεροδρομίου Θεσσαλονίκης ή του λιμανιού της πόλης, και πολλοί συνεχίζουν προς τη χερσόνησο της Χαλκιδικής, μια δημοφιλή παράκτια περιοχή ανατολικά.",
          "Η ιδιωτική μεταφορά στη Θεσσαλονίκη καλύπτει γενικά μεταφορές αεροδρομίου, μεταφορές λιμανιού, μεταφορές εντός της πόλης, και μεταφορές μεγάλων αποστάσεων που συνδέουν τη Θεσσαλονίκη με τη Χαλκιδική ή με την Αθήνα προς τα νότια.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στη Θεσσαλονίκη",
        title: "Συνδέσεις με Αεροδρόμιο και Λιμάνι",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Ιδιωτικές μεταφορές μεταξύ του Αεροδρομίου Θεσσαλονίκης και της πόλης." },
          { label: "Λιμάνι Θεσσαλονίκης", href: "/el/limani/thessaloniki/", description: "Σύνδεση μεταξύ της πόλης και του λιμανιού της για ταξίδι με κρουαζιέρα ή ferry." },
        ],
      },
      transferOptions: {
        eyebrow: "Επιλογές Μεταφοράς",
        title: "Ιδιωτική Μεταφορά στη Θεσσαλονίκη",
        items: [
          { title: "Μεταφορές Αεροδρομίου", description: "Απευθείας μεταφορές μεταξύ του Αεροδρομίου Θεσσαλονίκης και του ξενοδοχείου ή της διεύθυνσής σας." },
          { title: "Ιδιωτικές Μεταφορές", description: "Ένα όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή εντός ή εκτός της πόλης." },
          { title: "Μεταφορές Μεταξύ Πόλεων", description: "Μεταφορές μεγάλων αποστάσεων που συνδέουν τη Θεσσαλονίκη με την Αθήνα και άλλους προορισμούς." },
          { title: "Ομαδικές Μεταφορές", description: "Μεγαλύτερα οχήματα για οικογένειες και ομάδες που ταξιδεύουν μαζί." },
        ],
      },
      popularRoutes: {
        eyebrow: "Δημοφιλείς Διαδρομές",
        title: "Δημοφιλείς Μεταφορές από τη Θεσσαλονίκη",
        items: [
          { label: "Θεσσαλονίκη προς Χαλκιδική", href: "/el/diadromi/thessaloniki-chalkidiki/", description: "Ιδιωτική μεταφορά προς τις παραλίες της χερσονήσου της Χαλκιδικής." },
          { label: "Αθήνα προς Θεσσαλονίκη", href: "/el/diadromi/athina-thessaloniki/", description: "Ιδιωτική μεταφορά μεγάλης απόστασης που συνδέει τις δύο μεγαλύτερες πόλεις της Ελλάδας." },
          { label: "Θεσσαλονίκη προς Μετέωρα", href: "/el/diadromi/thessaloniki-meteora/", description: "Μια μεταφορά μεγάλης απόστασης προς τα μοναστήρια πάνω σε βράχους των Μετεώρων." },
          { label: "Θεσσαλονίκη προς Όλυμπο", href: "/el/diadromi/thessaloniki-olympos/", description: "Μια εκδρομή προς το Λιτόχωρο, την πύλη-πόλη στους πρόποδες του Ολύμπου." },
          { label: "Θεσσαλονίκη προς Βεργίνα & Πέλλα", href: "/el/diadromi/thessaloniki-vergina-pella/", description: "Μια εκδρομή προς τους αρχαίους μακεδονικούς χώρους της Βεργίνας και της Πέλλας." },
          { label: "Θεσσαλονίκη προς Καβάλα", href: "/el/diadromi/thessaloniki-kavala/", description: "Μια μεταφορά μεγάλης απόστασης προς τη λιμανιού πόλη της Καβάλας." },
        ],
      },
      nearbyDestinations: {
        eyebrow: "Κοντινοί Προορισμοί",
        title: "Προορισμοί Προσβάσιμοι από τη Θεσσαλονίκη",
        items: [
          { label: "Χαλκιδική", href: "/el/proorismos/chalkidiki/", description: "Η τρίπτυχη παράκτια περιοχή ανατολικά της Θεσσαλονίκης, με Κασσάνδρα και Σιθωνία." },
          { label: "Ημερήσιες Εκδρομές από τη Θεσσαλονίκη", href: "/el/idiotikes-ekdromes-thessaloniki/", description: "Δείτε το πλήρες φάσμα ιδιωτικών εκδρομών μας από τη Θεσσαλονίκη." },
          { label: "Δείτε Όλους τους Προορισμούς", href: "/el/proorismoi/", description: "Δείτε τον πλήρη κατάλογο προορισμών, αεροδρομίων, λιμανιών και διαδρομών σε όλη την Ελλάδα." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το ξενοδοχείο μου;", answer: "Ναι, οι μεταφορές από το αεροδρόμιο προς το ξενοδοχείο στη Θεσσαλονίκη είναι από τα πιο συνηθισμένα αιτήματά μας." },
          { question: "Μπορώ να ταξιδέψω από τη Θεσσαλονίκη απευθείας προς τη Χαλκιδική;", answer: "Ναι, ιδιωτικές μεταφορές από τη Θεσσαλονίκη προς τη Χαλκιδική μπορούν να ζητηθούν μέσω της φόρμας προσφοράς." },
          { question: "Μπορώ να κλείσω μεταφορά μεγάλης απόστασης από τη Θεσσαλονίκη προς την Αθήνα;", answer: "Ναι, αυτή η μεταφορά μεγάλης απόστασης μπορεί να οργανωθεί — περιγράψτε το ταξίδι σας κατά την αίτηση προσφοράς." },
          { question: "Προσφέρετε ημερήσιες εκδρομές από τη Θεσσαλονίκη;", answer: "Ναι, δείτε τη σελίδα ημερήσιων εκδρομών μας από τη Θεσσαλονίκη για ιδιωτικές εκδρομές προς Μετέωρα, Όλυμπο, Βεργίνα, Πέλλα και Καβάλα." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που επισκέπτεται τη Θεσσαλονίκη;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
          { question: "Ποιες πληροφορίες χρειάζεται να δώσω για μια μεταφορά στη Θεσσαλονίκη;", answer: "Το σημείο παραλαβής, τον προορισμό, την ημερομηνία και ώρα ταξιδιού, και τον αριθμό επιβατών και αποσκευών." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στη Θεσσαλονίκη;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  cityKalamata: {
    en: {
      meta: {
        title: "Private Transfers in Kalamata – Taxi & Chauffeur Service",
        description:
          "Book a private transfer in Kalamata and across the Peloponnese. Comfortable door-to-door travel for airport, city and regional journeys. Get a quote.",
      },
      breadcrumbLabel: "Kalamata",
      hero: {
        eyebrow: "Kalamata, Peloponnese",
        title: "Private Transfers in Kalamata",
        description: "Book a private transfer in Kalamata and across the Peloponnese region.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Kalamata",
        title: "Kalamata in the Peloponnese",
        paragraphs: [
          "Kalamata is the capital of the Messenia regional unit, in the southwestern Peloponnese, situated on the Messenian Gulf. It serves as a regional hub for southern Peloponnese travel, with its own airport handling seasonal and domestic flights.",
          "Private transportation in Kalamata typically covers local transfers, transfers to and from Kalamata's airport, and longer journeys connecting the city with other parts of the Peloponnese.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To and From Kalamata",
        title: "Regional Connections",
        items: [
          { label: "Explore the Peloponnese", href: "/region/peloponnese/", description: "See our regional overview of transportation across the Peloponnese." },
        ],
      },
      transferOptions: {
        eyebrow: "Transfer Options",
        title: "Private Transportation in Kalamata",
        items: [
          { title: "Private Transfers", description: "A door-to-door vehicle for any journey in and around Kalamata." },
          { title: "City-to-City Transfers", description: "Transfers connecting Kalamata with other cities and destinations in the Peloponnese." },
          { title: "Group Transfers", description: "Larger vehicles for families and groups travelling together." },
          { title: "Hourly Hire", description: "A private driver for flexible plans involving multiple stops around the region." },
        ],
      },
      popularRoutes: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey in the Peloponnese." },
          { label: "City-to-City Transfers", href: "/city-transfers/", description: "Direct private transfers between cities and destinations across Greece." },
        ],
      },
      nearbyDestinations: {
        eyebrow: "Nearby Destinations",
        title: "Destinations in the Peloponnese",
        items: [
          { label: "Nafplio", href: "/destination/nafplio/", description: "A popular waterfront town elsewhere in the Peloponnese." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a private transfer in Kalamata?", answer: "Yes, private transfers within Kalamata and across the Peloponnese can be requested through the quote form." },
          { question: "Can you arrange a transfer between Kalamata and other Peloponnese destinations?", answer: "Yes, describe your route when requesting a quote and we'll confirm what can be arranged." },
          { question: "Can you arrange a transfer for a family or group in Kalamata?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
          { question: "What information do I need to provide when booking a transfer in Kalamata?", answer: "Your pickup location, destination, travel date and time, and passenger and luggage numbers." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Kalamata Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στην Καλαμάτα – Ταξί & Σοφέρ",
        description:
          "Κλείστε ιδιωτική μεταφορά στην Καλαμάτα και σε όλη την Πελοπόννησο. Άνετη μεταφορά από πόρτα σε πόρτα για αεροδρόμιο, πόλη και περιφέρεια.",
      },
      breadcrumbLabel: "Καλαμάτα",
      hero: {
        eyebrow: "Καλαμάτα, Πελοπόννησος",
        title: "Ιδιωτικές Μεταφορές στην Καλαμάτα",
        description: "Κλείστε ιδιωτική μεταφορά στην Καλαμάτα και σε όλη την περιφέρεια της Πελοποννήσου.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με την Καλαμάτα",
        title: "Η Καλαμάτα στην Πελοπόννησο",
        paragraphs: [
          "Η Καλαμάτα είναι η πρωτεύουσα της περιφερειακής ενότητας Μεσσηνίας, στη νοτιοδυτική Πελοπόννησο, στον Μεσσηνιακό Κόλπο. Λειτουργεί ως περιφερειακός κόμβος για ταξίδια στη νότια Πελοπόννησο, με δικό της αεροδρόμιο που εξυπηρετεί εποχιακές και εσωτερικές πτήσεις.",
          "Η ιδιωτική μεταφορά στην Καλαμάτα καλύπτει συνήθως τοπικές μεταφορές, μεταφορές από και προς το αεροδρόμιο της Καλαμάτας, και μεγαλύτερα ταξίδια που συνδέουν την πόλη με άλλα μέρη της Πελοποννήσου.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στην Καλαμάτα",
        title: "Περιφερειακές Συνδέσεις",
        items: [
          { label: "Εξερευνήστε την Πελοπόννησο", href: "/el/periochi/peloponnisos/", description: "Δείτε τη γενική μας επισκόπηση μεταφορών σε όλη την Πελοπόννησο." },
        ],
      },
      transferOptions: {
        eyebrow: "Επιλογές Μεταφοράς",
        title: "Ιδιωτική Μεταφορά στην Καλαμάτα",
        items: [
          { title: "Ιδιωτικές Μεταφορές", description: "Ένα όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή γύρω από την Καλαμάτα." },
          { title: "Μεταφορές Μεταξύ Πόλεων", description: "Μεταφορές που συνδέουν την Καλαμάτα με άλλες πόλεις και προορισμούς της Πελοποννήσου." },
          { title: "Ομαδικές Μεταφορές", description: "Μεγαλύτερα οχήματα για οικογένειες και ομάδες που ταξιδεύουν μαζί." },
          { title: "Ενοικίαση με Ώρα", description: "Ιδιωτικός οδηγός για ευέλικτα σχέδια με πολλές στάσεις στην περιφέρεια." },
        ],
      },
      popularRoutes: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στην Πελοπόννησο." },
          { label: "Μεταφορές Μεταξύ Πόλεων", href: "/el/metafores-metaxy-poleon/", description: "Απευθείας ιδιωτικές μεταφορές μεταξύ πόλεων και προορισμών σε όλη την Ελλάδα." },
        ],
      },
      nearbyDestinations: {
        eyebrow: "Κοντινοί Προορισμοί",
        title: "Προορισμοί στην Πελοπόννησο",
        items: [
          { label: "Ναύπλιο", href: "/el/proorismos/nafplio/", description: "Μια δημοφιλής παραθαλάσσια πόλη αλλού στην Πελοπόννησο." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά στην Καλαμάτα;", answer: "Ναι, ιδιωτικές μεταφορές εντός της Καλαμάτας και σε όλη την Πελοπόννησο μπορούν να ζητηθούν μέσω της φόρμας προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά μεταξύ Καλαμάτας και άλλων προορισμών της Πελοποννήσου;", answer: "Ναι, περιγράψτε τη διαδρομή σας κατά την αίτηση προσφοράς και θα σας επιβεβαιώσουμε τι μπορεί να οργανωθεί." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για οικογένεια ή ομάδα στην Καλαμάτα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
          { question: "Ποιες πληροφορίες χρειάζεται να δώσω για μια μεταφορά στην Καλαμάτα;", answer: "Το σημείο παραλαβής, τον προορισμό, την ημερομηνία και ώρα ταξιδιού, και τον αριθμό επιβατών και αποσκευών." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στην Καλαμάτα;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  cityHeraklion: {
    en: {
      meta: {
        title: "Private Transfers in Heraklion – Crete Taxi & Chauffeur",
        description:
          "Book a private transfer in Heraklion for airport, port and resort journeys across Crete. Comfortable door-to-door travel. Get a quote.",
      },
      breadcrumbLabel: "Heraklion",
      hero: {
        eyebrow: "Heraklion, Crete",
        title: "Private Transfers in Heraklion",
        description: "Book a private transfer for airport, port and resort journeys across Crete's largest city and main gateway.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Heraklion",
        title: "Heraklion as Crete's Main Hub",
        paragraphs: [
          "Heraklion is Crete's largest city and main commercial centre, home to the island's busiest airport and its principal ferry port. Most visitors arriving on Crete from abroad land here, whether they're staying in the city itself or continuing to a resort area further along the coast.",
          "Private transportation in Heraklion generally covers airport transfers, port transfers, transfers within the city, and onward journeys to resort areas such as Hersonissos, Malia and Elounda, as well as to Rethymno and Chania further west.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To and From Heraklion",
        title: "Airport and Port Connections",
        items: [
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "Private transfers between Heraklion Airport and the city." },
          { label: "Heraklion Port", href: "/port/heraklion/", description: "Connect between the city and Crete's main ferry port for travel to Piraeus." },
        ],
      },
      transferOptions: {
        eyebrow: "Transfer Options",
        title: "Private Transportation in Heraklion",
        items: [
          { title: "Airport Transfers", description: "Direct transfers between Heraklion Airport and your hotel or address." },
          { title: "Private Transfers", description: "A door-to-door vehicle for any journey within the city or beyond." },
          { title: "Resort & Intercity Transfers", description: "Long-distance transfers connecting Heraklion with resort areas and other Cretan towns." },
          { title: "Group Transfers", description: "Larger vehicles for families and groups travelling together." },
        ],
      },
      popularRoutes: {
        eyebrow: "Popular Routes",
        title: "Popular Transfers From Heraklion",
        items: [
          { label: "Heraklion to Chania", href: "/route/heraklion-to-chania/", description: "A private transfer along Crete's north coast highway." },
          { label: "Heraklion to Knossos", href: "/route/heraklion-to-knossos/", description: "A short transfer to the Minoan palace site of Knossos." },
        ],
      },
      nearbyDestinations: {
        eyebrow: "Nearby Destinations",
        title: "Destinations Reachable From Heraklion",
        items: [
          { label: "Hersonissos", href: "/destination/hersonissos/", description: "One of Crete's largest resort areas, east of Heraklion." },
          { label: "Elounda", href: "/destination/elounda/", description: "A luxury resort area near Agios Nikolaos in eastern Crete." },
          { label: "Crete Day Trips", href: "/crete-day-trips/", description: "See our full range of private day trips across Crete." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a private transfer from Heraklion Airport to my hotel?", answer: "Yes, airport-to-hotel transfers in Heraklion are one of our most common requests." },
          { question: "Can I travel from Heraklion directly to Chania?", answer: "Yes, this is one of our most requested cross-island routes, along the north coast highway." },
          { question: "Can I book a transfer from Heraklion to a resort area like Hersonissos or Elounda?", answer: "Yes, direct transfers to Crete's main resort areas can be arranged — describe your journey when requesting a quote." },
          { question: "Can you arrange a transfer for a group visiting Heraklion?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
          { question: "What information do I need to provide when booking a transfer in Heraklion?", answer: "Your pickup location, destination, travel date and time, and passenger and luggage numbers." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Heraklion Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στο Ηράκλειο – Ταξί & Σοφέρ στην Κρήτη",
        description:
          "Κλείστε ιδιωτική μεταφορά στο Ηράκλειο για αεροδρόμιο, λιμάνι και ταξίδια προς θέρετρα σε όλη την Κρήτη. Άνετη μεταφορά από πόρτα σε πόρτα.",
      },
      breadcrumbLabel: "Ηράκλειο",
      hero: {
        eyebrow: "Ηράκλειο, Κρήτη",
        title: "Ιδιωτικές Μεταφορές στο Ηράκλειο",
        description: "Κλείστε ιδιωτική μεταφορά για αεροδρόμιο, λιμάνι και ταξίδια προς θέρετρα σε όλη την Κρήτη από τη μεγαλύτερη πόλη της.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με το Ηράκλειο",
        title: "Το Ηράκλειο ως Κύριος Κόμβος της Κρήτης",
        paragraphs: [
          "Το Ηράκλειο είναι η μεγαλύτερη πόλη της Κρήτης και το κύριο εμπορικό κέντρο του νησιού, όπου βρίσκεται το πολυσύχναστο αεροδρόμιο και το κύριο λιμάνι ferry του νησιού. Οι περισσότεροι επισκέπτες που φτάνουν στην Κρήτη από το εξωτερικό προσγειώνονται εδώ, είτε μένουν στην ίδια την πόλη είτε συνεχίζουν προς θέρετρο πιο μακριά στην ακτή.",
          "Η ιδιωτική μεταφορά στο Ηράκλειο καλύπτει γενικά μεταφορές αεροδρομίου, μεταφορές λιμανιού, μεταφορές εντός της πόλης, και ταξίδια συνέχειας προς περιοχές θερέτρων όπως ο Χερσόνησος, τα Μάλια και η Ελούντα, καθώς και προς το Ρέθυμνο και τα Χανιά πιο δυτικά.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στο Ηράκλειο",
        title: "Συνδέσεις με Αεροδρόμιο και Λιμάνι",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Ιδιωτικές μεταφορές μεταξύ του Αεροδρομίου Ηρακλείου και της πόλης." },
          { label: "Λιμάνι Ηρακλείου", href: "/el/limani/irakleio/", description: "Σύνδεση μεταξύ της πόλης και του κύριου λιμανιού ferry της Κρήτης για ταξίδι προς τον Πειραιά." },
        ],
      },
      transferOptions: {
        eyebrow: "Επιλογές Μεταφοράς",
        title: "Ιδιωτική Μεταφορά στο Ηράκλειο",
        items: [
          { title: "Μεταφορές Αεροδρομίου", description: "Απευθείας μεταφορές μεταξύ του Αεροδρομίου Ηρακλείου και του ξενοδοχείου ή της διεύθυνσής σας." },
          { title: "Ιδιωτικές Μεταφορές", description: "Ένα όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή εντός ή εκτός της πόλης." },
          { title: "Μεταφορές σε Θέρετρα & Μεταξύ Πόλεων", description: "Μεταφορές μεγάλων αποστάσεων που συνδέουν το Ηράκλειο με περιοχές θερέτρων και άλλες πόλεις της Κρήτης." },
          { title: "Ομαδικές Μεταφορές", description: "Μεγαλύτερα οχήματα για οικογένειες και ομάδες που ταξιδεύουν μαζί." },
        ],
      },
      popularRoutes: {
        eyebrow: "Δημοφιλείς Διαδρομές",
        title: "Δημοφιλείς Μεταφορές από το Ηράκλειο",
        items: [
          { label: "Ηράκλειο προς Χανιά", href: "/el/diadromi/irakleio-chania/", description: "Ιδιωτική μεταφορά κατά μήκος του βόρειου οδικού άξονα της Κρήτης." },
          { label: "Ηράκλειο προς Κνωσό", href: "/el/diadromi/irakleio-knosos/", description: "Μια σύντομη μεταφορά προς τον μινωικό αρχαιολογικό χώρο της Κνωσού." },
        ],
      },
      nearbyDestinations: {
        eyebrow: "Κοντινοί Προορισμοί",
        title: "Προορισμοί Προσβάσιμοι από το Ηράκλειο",
        items: [
          { label: "Χερσόνησος", href: "/el/proorismos/chersonisos/", description: "Μία από τις μεγαλύτερες περιοχές θερέτρων της Κρήτης, ανατολικά του Ηρακλείου." },
          { label: "Ελούντα", href: "/el/proorismos/elounda/", description: "Μια περιοχή πολυτελών θερέτρων κοντά στον Άγιο Νικόλαο στην ανατολική Κρήτη." },
          { label: "Ιδιωτικές Εκδρομές στην Κρήτη", href: "/el/idiotikes-ekdromes-kriti/", description: "Δείτε το πλήρες φάσμα ιδιωτικών εκδρομών μας σε όλη την Κρήτη." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το ξενοδοχείο μου;", answer: "Ναι, οι μεταφορές από το αεροδρόμιο προς το ξενοδοχείο στο Ηράκλειο είναι από τα πιο συνηθισμένα αιτήματά μας." },
          { question: "Μπορώ να ταξιδέψω από το Ηράκλειο απευθείας προς τα Χανιά;", answer: "Ναι, είναι μία από τις πιο ζητημένες διαδρομές μας εντός του νησιού, κατά μήκος του βόρειου οδικού άξονα." },
          { question: "Μπορώ να κλείσω μεταφορά από το Ηράκλειο προς θέρετρο όπως ο Χερσόνησος ή η Ελούντα;", answer: "Ναι, μπορούν να οργανωθούν απευθείας μεταφορές προς τις κύριες περιοχές θερέτρων της Κρήτης — περιγράψτε το ταξίδι σας κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που επισκέπτεται το Ηράκλειο;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
          { question: "Ποιες πληροφορίες χρειάζεται να δώσω για μια μεταφορά στο Ηράκλειο;", answer: "Το σημείο παραλαβής, τον προορισμό, την ημερομηνία και ώρα ταξιδιού, και τον αριθμό επιβατών και αποσκευών." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στο Ηράκλειο;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  cityChania: {
    en: {
      meta: {
        title: "Private Transfers in Chania – Western Crete Taxi & Chauffeur",
        description:
          "Book a private transfer in Chania for airport, port and resort journeys across western Crete. Comfortable door-to-door travel. Get a quote.",
      },
      breadcrumbLabel: "Chania",
      hero: {
        eyebrow: "Chania, Crete",
        title: "Private Transfers in Chania",
        description: "Book a private transfer for airport, port and resort journeys across western Crete.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Chania",
        title: "Chania as Western Crete's Main Hub",
        paragraphs: [
          "Chania is the main town of western Crete, known for its Venetian harbour and old town, with its own international airport and the nearby port of Souda. It's a common base for visitors exploring western and southwestern Crete, including the resort strip toward Platanias and beaches such as Elafonissi and Balos.",
          "Private transportation in Chania generally covers airport transfers, port transfers, transfers within the town, and onward journeys to resort areas and day-trip destinations across western Crete.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To and From Chania",
        title: "Airport and Port Connections",
        items: [
          { label: "Chania Airport", href: "/airport/chania-airport/", description: "Private transfers between Chania Airport and the town." },
          { label: "Souda Port", href: "/port/souda/", description: "Connect between Chania and the port serving western Crete." },
        ],
      },
      transferOptions: {
        eyebrow: "Transfer Options",
        title: "Private Transportation in Chania",
        items: [
          { title: "Airport Transfers", description: "Direct transfers between Chania Airport and your hotel or address." },
          { title: "Private Transfers", description: "A door-to-door vehicle for any journey within the town or beyond." },
          { title: "Resort & Day-Trip Transfers", description: "Transfers connecting Chania with nearby resorts and day-trip destinations." },
          { title: "Group Transfers", description: "Larger vehicles for families and groups travelling together." },
        ],
      },
      popularRoutes: {
        eyebrow: "Popular Routes",
        title: "Popular Transfers From Chania",
        items: [
          { label: "Chania to Elafonissi", href: "/route/chania-to-elafonissi/", description: "A private day-trip transfer to one of Crete's best-known beaches." },
          { label: "Chania to Samaria Gorge", href: "/route/chania-to-samaria-gorge/", description: "A transfer to the start of Crete's most famous hiking trail." },
        ],
      },
      nearbyDestinations: {
        eyebrow: "Nearby Destinations",
        title: "Destinations Reachable From Chania",
        items: [
          { label: "Platanias", href: "/destination/platanias/", description: "The resort strip west of Chania town." },
          { label: "Georgioupolis", href: "/destination/georgioupolis/", description: "A coastal resort town between Chania and Rethymno." },
          { label: "Crete Day Trips", href: "/crete-day-trips/", description: "See our full range of private day trips across Crete." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a private transfer from Chania Airport to my hotel?", answer: "Yes, airport-to-hotel transfers in Chania are one of our most common requests." },
          { question: "Can I book a day trip to Elafonissi or Balos from Chania?", answer: "Yes, private transfers to both beaches can be arranged — see our dedicated route pages for details." },
          { question: "Can I book a transfer to the Samaria Gorge from Chania?", answer: "Yes, describe your plans when requesting a quote, including whether you need a one-way drop-off." },
          { question: "Can you arrange a transfer for a group visiting Chania?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
          { question: "What information do I need to provide when booking a transfer in Chania?", answer: "Your pickup location, destination, travel date and time, and passenger and luggage numbers." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Chania Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στα Χανιά – Ταξί & Σοφέρ στη Δυτική Κρήτη",
        description:
          "Κλείστε ιδιωτική μεταφορά στα Χανιά για αεροδρόμιο, λιμάνι και ταξίδια προς θέρετρα στη δυτική Κρήτη. Άνετη μεταφορά από πόρτα σε πόρτα.",
      },
      breadcrumbLabel: "Χανιά",
      hero: {
        eyebrow: "Χανιά, Κρήτη",
        title: "Ιδιωτικές Μεταφορές στα Χανιά",
        description: "Κλείστε ιδιωτική μεταφορά για αεροδρόμιο, λιμάνι και ταξίδια προς θέρετρα σε όλη τη δυτική Κρήτη.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τα Χανιά",
        title: "Τα Χανιά ως Κύριος Κόμβος της Δυτικής Κρήτης",
        paragraphs: [
          "Τα Χανιά είναι η κύρια πόλη της δυτικής Κρήτης, γνωστή για το Ενετικό λιμάνι και την παλιά πόλη της, με δικό της διεθνές αεροδρόμιο και το κοντινό λιμάνι της Σούδας. Αποτελούν συνηθισμένη βάση για επισκέπτες που εξερευνούν τη δυτική και νοτιοδυτική Κρήτη, συμπεριλαμβανομένης της τουριστικής ζώνης προς τον Πλατανιά και παραλιών όπως το Ελαφονήσι και ο Μπάλος.",
          "Η ιδιωτική μεταφορά στα Χανιά καλύπτει γενικά μεταφορές αεροδρομίου, μεταφορές λιμανιού, μεταφορές εντός της πόλης, και ταξίδια συνέχειας προς περιοχές θερέτρων και προορισμούς εκδρομών σε όλη τη δυτική Κρήτη.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στα Χανιά",
        title: "Συνδέσεις με Αεροδρόμιο και Λιμάνι",
        items: [
          { label: "Αεροδρόμιο Χανίων", href: "/el/aerodromio/chania/", description: "Ιδιωτικές μεταφορές μεταξύ του Αεροδρομίου Χανίων και της πόλης." },
          { label: "Λιμάνι Σούδας", href: "/el/limani/souda/", description: "Σύνδεση μεταξύ των Χανίων και του λιμανιού που εξυπηρετεί τη δυτική Κρήτη." },
        ],
      },
      transferOptions: {
        eyebrow: "Επιλογές Μεταφοράς",
        title: "Ιδιωτική Μεταφορά στα Χανιά",
        items: [
          { title: "Μεταφορές Αεροδρομίου", description: "Απευθείας μεταφορές μεταξύ του Αεροδρομίου Χανίων και του ξενοδοχείου ή της διεύθυνσής σας." },
          { title: "Ιδιωτικές Μεταφορές", description: "Ένα όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή εντός ή εκτός της πόλης." },
          { title: "Μεταφορές σε Θέρετρα & Εκδρομές", description: "Μεταφορές που συνδέουν τα Χανιά με κοντινά θέρετρα και προορισμούς εκδρομών." },
          { title: "Ομαδικές Μεταφορές", description: "Μεγαλύτερα οχήματα για οικογένειες και ομάδες που ταξιδεύουν μαζί." },
        ],
      },
      popularRoutes: {
        eyebrow: "Δημοφιλείς Διαδρομές",
        title: "Δημοφιλείς Μεταφορές από τα Χανιά",
        items: [
          { label: "Χανιά προς Ελαφονήσι", href: "/el/diadromi/chania-elafonisi/", description: "Μια ιδιωτική μεταφορά εκδρομής προς μία από τις πιο γνωστές παραλίες της Κρήτης." },
          { label: "Χανιά προς Φαράγγι Σαμαριάς", href: "/el/diadromi/chania-farangi-samarias/", description: "Μια μεταφορά προς την αρχή του πιο γνωστού μονοπατιού πεζοπορίας της Κρήτης." },
        ],
      },
      nearbyDestinations: {
        eyebrow: "Κοντινοί Προορισμοί",
        title: "Προορισμοί Προσβάσιμοι από τα Χανιά",
        items: [
          { label: "Πλατανιάς", href: "/el/proorismos/platanias/", description: "Η τουριστική ζώνη δυτικά της πόλης των Χανίων." },
          { label: "Γεωργιούπολη", href: "/el/proorismos/georgioupolis/", description: "Μια παράκτια πόλη θερέτρου μεταξύ Χανίων και Ρεθύμνου." },
          { label: "Ιδιωτικές Εκδρομές στην Κρήτη", href: "/el/idiotikes-ekdromes-kriti/", description: "Δείτε το πλήρες φάσμα ιδιωτικών εκδρομών μας σε όλη την Κρήτη." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το Αεροδρόμιο Χανίων προς το ξενοδοχείο μου;", answer: "Ναι, οι μεταφορές από το αεροδρόμιο προς το ξενοδοχείο στα Χανιά είναι από τα πιο συνηθισμένα αιτήματά μας." },
          { question: "Μπορώ να κλείσω εκδρομή προς το Ελαφονήσι ή τον Μπάλο από τα Χανιά;", answer: "Ναι, ιδιωτικές μεταφορές προς και τις δύο παραλίες μπορούν να οργανωθούν — δείτε τις ειδικές μας σελίδες διαδρομής για λεπτομέρειες." },
          { question: "Μπορώ να κλείσω μεταφορά προς το Φαράγγι της Σαμαριάς από τα Χανιά;", answer: "Ναι, περιγράψτε τα σχέδιά σας κατά την αίτηση προσφοράς, συμπεριλαμβανομένου αν χρειάζεστε μονόδρομη παράδοση." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που επισκέπτεται τα Χανιά;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
          { question: "Ποιες πληροφορίες χρειάζεται να δώσω για μια μεταφορά στα Χανιά;", answer: "Το σημείο παραλαβής, τον προορισμό, την ημερομηνία και ώρα ταξιδιού, και τον αριθμό επιβατών και αποσκευών." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στα Χανιά;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  cityRethymno: {
    en: {
      meta: {
        title: "Private Transfers in Rethymno – Crete Taxi & Chauffeur",
        description:
          "Book a private transfer in Rethymno from either of Crete's airports. Comfortable door-to-door travel to Crete's third-largest town.",
      },
      breadcrumbLabel: "Rethymno",
      hero: {
        eyebrow: "Rethymno, Crete",
        title: "Private Transfers in Rethymno",
        description: "Book a private transfer to or from Rethymno, roughly midway between Heraklion and Chania on Crete's north coast.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Rethymno",
        title: "Rethymno on Crete's North Coast",
        paragraphs: [
          "Rethymno is Crete's third-largest town, known for its Venetian old town and fortress, sitting roughly midway between Heraklion and Chania. It doesn't have its own airport, so visitors typically arrive via a private transfer from either Heraklion Airport or Chania Airport.",
          "Because Rethymno sits between the island's two main gateways, it's a practical base for visitors who want reasonable access to both halves of the island without committing to a resort area further east or west.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Rethymno",
        title: "Airport Connections",
        items: [
          { label: "Heraklion Airport to Rethymno", href: "/route/heraklion-airport-to-rethymno/", description: "A direct transfer from Crete's busier eastern airport." },
          { label: "Chania Airport to Rethymno", href: "/route/chania-airport-to-rethymno/", description: "A direct transfer from Crete's western airport." },
        ],
      },
      transferOptions: {
        eyebrow: "Transfer Options",
        title: "Private Transportation in Rethymno",
        items: [
          { title: "Airport Transfers", description: "Direct transfers from either Heraklion or Chania Airport to your hotel or address." },
          { title: "Private Transfers", description: "A door-to-door vehicle for any journey within Rethymno or beyond." },
          { title: "Intercity Transfers", description: "Onward transfers to Heraklion, Chania and other parts of Crete." },
          { title: "Group Transfers", description: "Larger vehicles for families and groups travelling together." },
        ],
      },
      popularRoutes: {
        eyebrow: "Popular Routes",
        title: "Popular Transfers To and From Rethymno",
        items: [
          { label: "Heraklion Airport to Rethymno", href: "/route/heraklion-airport-to-rethymno/", description: "A direct transfer from the eastern airport." },
          { label: "Chania Airport to Rethymno", href: "/route/chania-airport-to-rethymno/", description: "A direct transfer from the western airport." },
        ],
      },
      nearbyDestinations: {
        eyebrow: "Nearby Destinations",
        title: "Destinations Reachable From Rethymno",
        items: [
          { label: "Georgioupolis", href: "/destination/georgioupolis/", description: "A coastal resort town between Rethymno and Chania." },
          { label: "Crete Day Trips", href: "/crete-day-trips/", description: "See our full range of private day trips across Crete." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Does Rethymno have its own airport?", answer: "No, Rethymno is reached by private transfer from either Heraklion Airport or Chania Airport." },
          { question: "Which airport is closer to Rethymno?", answer: "Both airports are broadly similar distances from Rethymno, since it sits roughly midway between Heraklion and Chania." },
          { question: "Can I book a transfer from Rethymno onward to Chania or Heraklion?", answer: "Yes, describe your journey when requesting a quote." },
          { question: "Can you arrange a transfer for a group visiting Rethymno?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Rethymno Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στο Ρέθυμνο – Ταξί & Σοφέρ στην Κρήτη",
        description:
          "Κλείστε ιδιωτική μεταφορά στο Ρέθυμνο από οποιοδήποτε από τα δύο αεροδρόμια της Κρήτης. Άνετη μεταφορά από πόρτα σε πόρτα.",
      },
      breadcrumbLabel: "Ρέθυμνο",
      hero: {
        eyebrow: "Ρέθυμνο, Κρήτη",
        title: "Ιδιωτικές Μεταφορές στο Ρέθυμνο",
        description: "Κλείστε ιδιωτική μεταφορά από ή προς το Ρέθυμνο, περίπου στη μέση της διαδρομής μεταξύ Ηρακλείου και Χανίων στη βόρεια ακτή της Κρήτης.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με το Ρέθυμνο",
        title: "Το Ρέθυμνο στη Βόρεια Ακτή της Κρήτης",
        paragraphs: [
          "Το Ρέθυμνο είναι η τρίτη μεγαλύτερη πόλη της Κρήτης, γνωστή για την Ενετική παλιά πόλη και το φρούριό της, βρίσκεται περίπου στη μέση της διαδρομής μεταξύ Ηρακλείου και Χανίων. Δεν διαθέτει δικό του αεροδρόμιο, οπότε οι επισκέπτες συνήθως φτάνουν με ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου ή το Αεροδρόμιο Χανίων.",
          "Επειδή το Ρέθυμνο βρίσκεται μεταξύ των δύο κύριων πυλών του νησιού, αποτελεί πρακτική βάση για επισκέπτες που θέλουν λογική πρόσβαση και στα δύο μισά του νησιού χωρίς να δεσμευτούν σε περιοχή θερέτρου πιο ανατολικά ή δυτικά.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στο Ρέθυμνο",
        title: "Συνδέσεις με Αεροδρόμια",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Ρέθυμνο", href: "/el/diadromi/aerodromio-irakleiou-rethymno/", description: "Απευθείας μεταφορά από το πολυσύχναστο ανατολικό αεροδρόμιο της Κρήτης." },
          { label: "Αεροδρόμιο Χανίων προς Ρέθυμνο", href: "/el/diadromi/aerodromio-chanion-rethymno/", description: "Απευθείας μεταφορά από το δυτικό αεροδρόμιο της Κρήτης." },
        ],
      },
      transferOptions: {
        eyebrow: "Επιλογές Μεταφοράς",
        title: "Ιδιωτική Μεταφορά στο Ρέθυμνο",
        items: [
          { title: "Μεταφορές Αεροδρομίου", description: "Απευθείας μεταφορές από το Αεροδρόμιο Ηρακλείου ή Χανίων προς το ξενοδοχείο ή τη διεύθυνσή σας." },
          { title: "Ιδιωτικές Μεταφορές", description: "Ένα όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή εντός ή εκτός του Ρεθύμνου." },
          { title: "Μεταφορές Μεταξύ Πόλεων", description: "Μεταφορές συνέχειας προς το Ηράκλειο, τα Χανιά και άλλα μέρη της Κρήτης." },
          { title: "Ομαδικές Μεταφορές", description: "Μεγαλύτερα οχήματα για οικογένειες και ομάδες που ταξιδεύουν μαζί." },
        ],
      },
      popularRoutes: {
        eyebrow: "Δημοφιλείς Διαδρομές",
        title: "Δημοφιλείς Μεταφορές Από και Προς το Ρέθυμνο",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Ρέθυμνο", href: "/el/diadromi/aerodromio-irakleiou-rethymno/", description: "Απευθείας μεταφορά από το ανατολικό αεροδρόμιο." },
          { label: "Αεροδρόμιο Χανίων προς Ρέθυμνο", href: "/el/diadromi/aerodromio-chanion-rethymno/", description: "Απευθείας μεταφορά από το δυτικό αεροδρόμιο." },
        ],
      },
      nearbyDestinations: {
        eyebrow: "Κοντινοί Προορισμοί",
        title: "Προορισμοί Προσβάσιμοι από το Ρέθυμνο",
        items: [
          { label: "Γεωργιούπολη", href: "/el/proorismos/georgioupolis/", description: "Μια παράκτια πόλη θερέτρου μεταξύ Ρεθύμνου και Χανίων." },
          { label: "Ιδιωτικές Εκδρομές στην Κρήτη", href: "/el/idiotikes-ekdromes-kriti/", description: "Δείτε το πλήρες φάσμα ιδιωτικών εκδρομών μας σε όλη την Κρήτη." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Έχει το Ρέθυμνο δικό του αεροδρόμιο;", answer: "Όχι, το Ρέθυμνο προσεγγίζεται με ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου ή το Αεροδρόμιο Χανίων." },
          { question: "Ποιο αεροδρόμιο είναι πιο κοντά στο Ρέθυμνο;", answer: "Και τα δύο αεροδρόμια βρίσκονται σε γενικά παρόμοια απόσταση από το Ρέθυμνο, καθώς βρίσκεται περίπου στη μέση μεταξύ Ηρακλείου και Χανίων." },
          { question: "Μπορώ να κλείσω μεταφορά από το Ρέθυμνο προς τα Χανιά ή το Ηράκλειο;", answer: "Ναι, περιγράψτε το ταξίδι σας κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που επισκέπτεται το Ρέθυμνο;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στο Ρέθυμνο;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  cityAgiosNikolaos: {
    en: {
      meta: {
        title: "Private Transfers in Agios Nikolaos – Crete Taxi & Chauffeur",
        description:
          "Book a private transfer in Agios Nikolaos from Heraklion Airport. Comfortable door-to-door travel to eastern Crete's main town.",
      },
      breadcrumbLabel: "Agios Nikolaos",
      hero: {
        eyebrow: "Agios Nikolaos, Crete",
        title: "Private Transfers in Agios Nikolaos",
        description: "Book a private transfer to or from Agios Nikolaos, the main town of eastern Crete, built around Voulismeni Lake.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      intro: {
        eyebrow: "About Agios Nikolaos",
        title: "Agios Nikolaos in Eastern Crete",
        paragraphs: [
          "Agios Nikolaos is the main town of eastern Crete and the capital of the Lasithi region, built around Voulismeni Lake on Mirabello Bay. It's a common base for visitors exploring eastern Crete, and sits close to the luxury resort area of Elounda a short drive north.",
          "Most visitors reach Agios Nikolaos by private transfer from Heraklion Airport, the closest airport to eastern Crete.",
        ],
      },
      gettingHere: {
        eyebrow: "Getting To Agios Nikolaos",
        title: "Airport Connections",
        items: [
          { label: "Heraklion Airport to Agios Nikolaos", href: "/route/heraklion-airport-to-agios-nikolaos/", description: "A direct transfer from Crete's main airport." },
        ],
      },
      transferOptions: {
        eyebrow: "Transfer Options",
        title: "Private Transportation in Agios Nikolaos",
        items: [
          { title: "Airport Transfers", description: "Direct transfers from Heraklion Airport to your hotel or address." },
          { title: "Private Transfers", description: "A door-to-door vehicle for any journey within Agios Nikolaos or beyond." },
          { title: "Resort Transfers", description: "Onward transfers to Elounda and other nearby resort areas." },
          { title: "Group Transfers", description: "Larger vehicles for families and groups travelling together." },
        ],
      },
      popularRoutes: {
        eyebrow: "Popular Routes",
        title: "Popular Transfers To and From Agios Nikolaos",
        items: [
          { label: "Heraklion Airport to Agios Nikolaos", href: "/route/heraklion-airport-to-agios-nikolaos/", description: "A direct transfer from Heraklion Airport." },
        ],
      },
      nearbyDestinations: {
        eyebrow: "Nearby Destinations",
        title: "Destinations Reachable From Agios Nikolaos",
        items: [
          { label: "Elounda", href: "/destination/elounda/", description: "A luxury resort area a short drive north of Agios Nikolaos." },
          { label: "Crete Day Trips", href: "/crete-day-trips/", description: "See our full range of private day trips across Crete." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Which airport serves Agios Nikolaos?", answer: "Heraklion Airport is the closest airport to Agios Nikolaos, reached by a direct private transfer." },
          { question: "Is Agios Nikolaos close to Elounda?", answer: "Yes, Elounda is a short drive north of Agios Nikolaos town." },
          { question: "Can you arrange a transfer for a group visiting Agios Nikolaos?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Agios Nikolaos Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στον Άγιο Νικόλαο – Ταξί & Σοφέρ στην Κρήτη",
        description:
          "Κλείστε ιδιωτική μεταφορά στον Άγιο Νικόλαο από το Αεροδρόμιο Ηρακλείου. Άνετη μεταφορά από πόρτα σε πόρτα στην κύρια πόλη της ανατολικής Κρήτης.",
      },
      breadcrumbLabel: "Άγιος Νικόλαος",
      hero: {
        eyebrow: "Άγιος Νικόλαος, Κρήτη",
        title: "Ιδιωτικές Μεταφορές στον Άγιο Νικόλαο",
        description: "Κλείστε ιδιωτική μεταφορά από ή προς τον Άγιο Νικόλαο, την κύρια πόλη της ανατολικής Κρήτης, χτισμένη γύρω από τη λίμνη Βουλισμένη.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      intro: {
        eyebrow: "Σχετικά με τον Άγιο Νικόλαο",
        title: "Ο Άγιος Νικόλαος στην Ανατολική Κρήτη",
        paragraphs: [
          "Ο Άγιος Νικόλαος είναι η κύρια πόλη της ανατολικής Κρήτης και πρωτεύουσα του νομού Λασιθίου, χτισμένη γύρω από τη λίμνη Βουλισμένη στον κόλπο του Μιραμπέλλου. Αποτελεί συνηθισμένη βάση για επισκέπτες που εξερευνούν την ανατολική Κρήτη, και βρίσκεται κοντά στην περιοχή πολυτελών θερέτρων της Ελούντας, λίγα λεπτά βόρεια.",
          "Οι περισσότεροι επισκέπτες φτάνουν στον Άγιο Νικόλαο με ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου, το πλησιέστερο αεροδρόμιο στην ανατολική Κρήτη.",
        ],
      },
      gettingHere: {
        eyebrow: "Πρόσβαση στον Άγιο Νικόλαο",
        title: "Συνδέσεις με Αεροδρόμιο",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Άγιο Νικόλαο", href: "/el/diadromi/aerodromio-irakleiou-agios-nikolaos/", description: "Απευθείας μεταφορά από το κύριο αεροδρόμιο της Κρήτης." },
        ],
      },
      transferOptions: {
        eyebrow: "Επιλογές Μεταφοράς",
        title: "Ιδιωτική Μεταφορά στον Άγιο Νικόλαο",
        items: [
          { title: "Μεταφορές Αεροδρομίου", description: "Απευθείας μεταφορές από το Αεροδρόμιο Ηρακλείου προς το ξενοδοχείο ή τη διεύθυνσή σας." },
          { title: "Ιδιωτικές Μεταφορές", description: "Ένα όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή εντός ή εκτός του Αγίου Νικολάου." },
          { title: "Μεταφορές σε Θέρετρα", description: "Μεταφορές συνέχειας προς την Ελούντα και άλλες κοντινές περιοχές θερέτρων." },
          { title: "Ομαδικές Μεταφορές", description: "Μεγαλύτερα οχήματα για οικογένειες και ομάδες που ταξιδεύουν μαζί." },
        ],
      },
      popularRoutes: {
        eyebrow: "Δημοφιλείς Διαδρομές",
        title: "Δημοφιλείς Μεταφορές Από και Προς τον Άγιο Νικόλαο",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Άγιο Νικόλαο", href: "/el/diadromi/aerodromio-irakleiou-agios-nikolaos/", description: "Απευθείας μεταφορά από το Αεροδρόμιο Ηρακλείου." },
        ],
      },
      nearbyDestinations: {
        eyebrow: "Κοντινοί Προορισμοί",
        title: "Προορισμοί Προσβάσιμοι από τον Άγιο Νικόλαο",
        items: [
          { label: "Ελούντα", href: "/el/proorismos/elounda/", description: "Μια περιοχή πολυτελών θερέτρων λίγα λεπτά βόρεια του Αγίου Νικολάου." },
          { label: "Ιδιωτικές Εκδρομές στην Κρήτη", href: "/el/idiotikes-ekdromes-kriti/", description: "Δείτε το πλήρες φάσμα ιδιωτικών εκδρομών μας σε όλη την Κρήτη." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Ποιο αεροδρόμιο εξυπηρετεί τον Άγιο Νικόλαο;", answer: "Το Αεροδρόμιο Ηρακλείου είναι το πλησιέστερο αεροδρόμιο στον Άγιο Νικόλαο, προσβάσιμο με απευθείας ιδιωτική μεταφορά." },
          { question: "Είναι ο Άγιος Νικόλαος κοντά στην Ελούντα;", answer: "Ναι, η Ελούντα βρίσκεται λίγα λεπτά βόρεια της πόλης του Αγίου Νικολάου." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που επισκέπτεται τον Άγιο Νικόλαο;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στον Άγιο Νικόλαο;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },
}
