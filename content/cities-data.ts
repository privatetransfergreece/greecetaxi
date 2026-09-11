import type { Locale } from "@/lib/i18n/config"
import type { HeroContent } from "@/components/location/hero"
import type { IconTextSection } from "@/content/service-hubs"
import type { RelatedLinkItem } from "@/components/location/related-links"

export type CitySlug = "cityAthens" | "cityThessaloniki" | "cityKalamata"

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
}
