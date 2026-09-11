import type { RelatedLinkItem } from "@/components/location/related-links"

export type LinkSection = { eyebrow: string; title: string; items: Omit<RelatedLinkItem, "icon">[] }
export type ProseSection = { eyebrow: string; title: string; paragraphs: string[] }

export type DestinationsHubContent = {
  meta: { title: string; description: string }
  hero: { eyebrow: string; title: string; description: string; primaryLabel: string; secondaryLabel: string }
  intro: ProseSection
  cities: LinkSection
  destinations: LinkSection
  regions: LinkSection
  airports: LinkSection
  ports: LinkSection
  routes: LinkSection
  services: LinkSection
  faq: { eyebrow: string; title: string; items: { question: string; answer: string }[] }
  cta: { heading: string; description: string; primaryLabel: string; secondaryLabel: string }
}

export const destinationsHubContent: Record<"en" | "el", DestinationsHubContent> = {
  en: {
    meta: {
      title: "Destinations in Greece – Airports, Ports, Cities & Islands",
      description:
        "Explore private transfer coverage across Greece: airports, ports, cities, islands and popular routes. Find your destination and get a quote.",
    },
    hero: {
      eyebrow: "Explore Greece",
      title: "Destinations We Cover Across Greece",
      description: "Browse airports, ports, cities, islands, regions and popular routes to find private transfer information for your trip.",
      primaryLabel: "Get a Free Quote",
      secondaryLabel: "View All Services",
    },
    intro: {
      eyebrow: "About This Page",
      title: "Find Your Destination",
      paragraphs: [
        "This page brings together every destination we currently cover with dedicated private transfer information: airports, sea ports, cities, islands, mainland destinations, and popular point-to-point routes.",
        "Each destination page includes practical details for planning your transfer, along with links to nearby airports, ports, cities and routes so you can plan a full itinerary.",
      ],
    },
    cities: {
      eyebrow: "Cities",
      title: "Popular Cities",
      items: [
        { label: "Athens", href: "/athens/", description: "Greece's capital, the starting point for most transfers across the country." },
        { label: "Thessaloniki", href: "/city/thessaloniki/", description: "Greece's second-largest city, in the north of the country." },
        { label: "Kalamata", href: "/city/kalamata/", description: "The capital of Messenia, in the southwestern Peloponnese." },
      ],
    },
    destinations: {
      eyebrow: "Islands & Destinations",
      title: "Popular Islands & Destinations",
      items: [
        { label: "Santorini", href: "/destination/santorini/", description: "The volcanic island known for Fira and Oia." },
        { label: "Mykonos", href: "/destination/mykonos/", description: "A popular Cycladic island known for Mykonos Town." },
        { label: "Rhodes", href: "/destination/rhodes/", description: "The largest of the Dodecanese islands." },
        { label: "Corfu", href: "/destination/corfu/", description: "A large Ionian island known for Corfu Town." },
        { label: "Zakynthos", href: "/destination/zakynthos/", description: "An Ionian island reached via its own airport." },
        { label: "Kos", href: "/destination/kos/", description: "A Dodecanese island reached via its own airport." },
        { label: "Nafplio", href: "/destination/nafplio/", description: "A waterfront town in the Peloponnese, reached by road." },
        { label: "Meteora", href: "/destination/meteora/", description: "The rock-pillar monasteries of Thessaly." },
        { label: "Athens Riviera", href: "/destination/athens-riviera/", description: "The coastal strip southeast of Athens, including Glyfada, Vouliagmeni and Cape Sounion." },
        { label: "Glyfada", href: "/destination/glyfada/", description: "The closest Athens Riviera town to the airport, known for its marina and beach clubs." },
        { label: "Vouliagmeni", href: "/destination/vouliagmeni/", description: "Further along the Athens Riviera, known for its thermal lake and upscale resorts." },
        { label: "Halkidiki", href: "/destination/halkidiki/", description: "The three-peninsula coastal region east of Thessaloniki, including Kassandra and Sithonia." },
        { label: "Kassandra", href: "/destination/kassandra/", description: "The closest and most accessible Halkidiki peninsula to Thessaloniki." },
        { label: "Sithonia", href: "/destination/sithonia/", description: "Halkidiki's more forested central peninsula, further along the coast." },
        { label: "Nea Moudania", href: "/destination/nea-moudania/", description: "The gateway town on the isthmus, closest to Thessaloniki Airport." },
      ],
    },
    regions: {
      eyebrow: "Regions",
      title: "Explore by Region",
      items: [
        { label: "Crete", href: "/region/crete/", description: "Greece's largest island, covering Heraklion and Chania." },
        { label: "Peloponnese", href: "/region/peloponnese/", description: "The southern peninsula, connected via the Corinth Canal." },
      ],
    },
    airports: {
      eyebrow: "Airports",
      title: "Popular Airports",
      items: [
        { label: "Athens Airport", href: "/airport/athens-airport/", description: "Greece's main international gateway." },
        { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "The main airport of northern Greece." },
        { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "Crete's busiest airport." },
        { label: "Chania Airport", href: "/airport/chania-airport/", description: "Serving western Crete." },
        { label: "Rhodes Airport", href: "/airport/rhodes-airport/", description: "Serving the island of Rhodes." },
        { label: "Corfu Airport", href: "/airport/corfu-airport/", description: "Serving the island of Corfu." },
        { label: "Santorini Airport", href: "/airport/santorini-airport/", description: "Serving the island of Santorini." },
        { label: "Mykonos Airport", href: "/airport/mykonos-airport/", description: "Serving the island of Mykonos." },
      ],
    },
    ports: {
      eyebrow: "Ports",
      title: "Popular Ports",
      items: [
        { label: "Piraeus Port", href: "/port/piraeus/", description: "Greece's largest passenger port, near Athens." },
        { label: "Rafina Port", href: "/port/rafina/", description: "A Cycladic ferry alternative near Athens Airport." },
        { label: "Lavrio Port", href: "/port/lavrio/", description: "A ferry port serving select Cycladic routes." },
        { label: "Thessaloniki Port", href: "/port/thessaloniki/", description: "The main port of northern Greece." },
        { label: "Heraklion Port", href: "/port/heraklion/", description: "Crete's main ferry port." },
        { label: "Patras Port", href: "/port/patras/", description: "Greece's main international ferry gateway to Italy." },
      ],
    },
    routes: {
      eyebrow: "Routes",
      title: "Popular Transfer Routes",
      items: [
        { label: "Athens Airport to Piraeus Port", href: "/route/athens-airport-to-piraeus-port/", description: "A direct transfer between the airport and Greece's main cruise and ferry port." },
        { label: "Athens to Cape Sounion", href: "/route/athens-to-cape-sounion/", description: "A private day trip or one-way transfer to the Temple of Poseidon." },
        { label: "Athens to Delphi", href: "/route/athens-to-delphi/", description: "A mountain-road day trip from Athens." },
        { label: "Athens to Nafplio", href: "/route/athens-to-nafplio/", description: "A short journey via the Corinth Canal." },
        { label: "Athens to Corinth", href: "/route/athens-to-corinth/", description: "A transfer to Corinth and the Corinth Canal." },
        { label: "Athens to Meteora", href: "/route/athens-to-meteora/", description: "A long-distance transfer to the Meteora monasteries." },
        { label: "Athens to Thessaloniki", href: "/route/athens-to-thessaloniki/", description: "A long-distance transfer between Greece's two largest cities." },
        { label: "Thessaloniki to Halkidiki", href: "/route/thessaloniki-to-halkidiki/", description: "A short coastal transfer to the Halkidiki peninsula." },
        { label: "Heraklion to Chania", href: "/route/heraklion-to-chania/", description: "A cross-island transfer in Crete." },
        { label: "Athens Airport to Nafplio", href: "/route/athens-airport-to-nafplio/", description: "A direct transfer bypassing central Athens." },
        { label: "Athens Airport to Corinth", href: "/route/athens-airport-to-corinth/", description: "A direct transfer from the airport to Corinth." },
        { label: "Piraeus Port to Nafplio", href: "/route/piraeus-port-to-nafplio/", description: "A direct transfer for cruise and ferry passengers continuing to the Peloponnese." },
        { label: "Thessaloniki Airport to Halkidiki", href: "/route/thessaloniki-airport-to-halkidiki/", description: "A direct transfer from the airport to the Halkidiki peninsula." },
        { label: "Thessaloniki Airport to Kassandra", href: "/route/thessaloniki-airport-to-kassandra/", description: "A direct transfer to Halkidiki's closest peninsula." },
        { label: "Thessaloniki Airport to Sithonia", href: "/route/thessaloniki-airport-to-sithonia/", description: "A direct transfer to Halkidiki's central peninsula." },
        { label: "Thessaloniki Port to Halkidiki", href: "/route/thessaloniki-port-to-halkidiki/", description: "A direct transfer for cruise and ferry passengers continuing to Halkidiki." },
        { label: "Thessaloniki to Meteora", href: "/route/thessaloniki-to-meteora/", description: "A long-distance transfer to the Meteora monasteries." },
        { label: "Thessaloniki to Kavala", href: "/route/thessaloniki-to-kavala/", description: "A long-distance transfer to the port city of Kavala." },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Our Transfer Services",
      items: [
        { label: "Airport Transfers", href: "/airport-transfers/", description: "Private transfers to and from airports across Greece." },
        { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey." },
        { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups." },
        { label: "Athens Day Trips", href: "/athens-day-trips/", description: "Private day trips from Athens with a flexible itinerary and return journey included." },
        { label: "Thessaloniki Day Trips", href: "/thessaloniki-day-trips/", description: "Private day trips from Thessaloniki with a flexible itinerary and return journey included." },
        { label: "All Services", href: "/services/", description: "See the full list of transfer services we offer." },
      ],
    },
    faq: {
      eyebrow: "Questions & Answers",
      title: "Frequently Asked Questions",
      items: [
        { question: "How do I find transfer information for my destination?", answer: "Browse the airports, ports, cities, islands, regions and routes listed on this page to find the one relevant to your trip." },
        { question: "Can I book a transfer between two destinations listed here?", answer: "Yes, describe your pickup and destination when requesting a quote, even if it's not one of the specific routes listed." },
        { question: "What if my destination isn't listed?", answer: "Get in touch through the quote form with your pickup and destination details, and we'll do our best to help." },
      ],
    },
    cta: {
      heading: "Ready to Book Your Transfer?",
      description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
      primaryLabel: "Get a Free Quote",
      secondaryLabel: "View All Services",
    },
  },
  el: {
    meta: {
      title: "Προορισμοί στην Ελλάδα – Αεροδρόμια, Λιμάνια, Πόλεις & Νησιά",
      description:
        "Εξερευνήστε την κάλυψη ιδιωτικών μεταφορών σε όλη την Ελλάδα: αεροδρόμια, λιμάνια, πόλεις, νησιά και δημοφιλείς διαδρομές. Βρείτε τον προορισμό σας.",
    },
    hero: {
      eyebrow: "Εξερευνήστε την Ελλάδα",
      title: "Προορισμοί που Καλύπτουμε σε Όλη την Ελλάδα",
      description: "Περιηγηθείτε σε αεροδρόμια, λιμάνια, πόλεις, νησιά, περιοχές και δημοφιλείς διαδρομές για να βρείτε πληροφορίες ιδιωτικής μεταφοράς για το ταξίδι σας.",
      primaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      secondaryLabel: "Δείτε Όλες τις Υπηρεσίες",
    },
    intro: {
      eyebrow: "Σχετικά με Αυτή τη Σελίδα",
      title: "Βρείτε τον Προορισμό σας",
      paragraphs: [
        "Αυτή η σελίδα συγκεντρώνει κάθε προορισμό που καλύπτουμε αυτή τη στιγμή με ειδικές πληροφορίες ιδιωτικής μεταφοράς: αεροδρόμια, θαλάσσια λιμάνια, πόλεις, νησιά, ηπειρωτικούς προορισμούς και δημοφιλείς διαδρομές από σημείο σε σημείο.",
        "Κάθε σελίδα προορισμού περιλαμβάνει πρακτικές λεπτομέρειες για τον σχεδιασμό της μεταφοράς σας, μαζί με συνδέσμους προς κοντινά αεροδρόμια, λιμάνια, πόλεις και διαδρομές ώστε να σχεδιάσετε ένα πλήρες πρόγραμμα.",
      ],
    },
    cities: {
      eyebrow: "Πόλεις",
      title: "Δημοφιλείς Πόλεις",
      items: [
        { label: "Αθήνα", href: "/el/athina/", description: "Η πρωτεύουσα της Ελλάδας, το σημείο εκκίνησης για τις περισσότερες μεταφορές στη χώρα." },
        { label: "Θεσσαλονίκη", href: "/el/poli/thessaloniki/", description: "Η δεύτερη μεγαλύτερη πόλη της Ελλάδας, στα βόρεια της χώρας." },
        { label: "Καλαμάτα", href: "/el/poli/kalamata/", description: "Η πρωτεύουσα της Μεσσηνίας, στη νοτιοδυτική Πελοπόννησο." },
      ],
    },
    destinations: {
      eyebrow: "Νησιά & Προορισμοί",
      title: "Δημοφιλή Νησιά & Προορισμοί",
      items: [
        { label: "Σαντορίνη", href: "/el/proorismos/santorini/", description: "Το ηφαιστειακό νησί γνωστό για τη Φηρά και την Οία." },
        { label: "Μύκονος", href: "/el/proorismos/mykonos/", description: "Ένα δημοφιλές νησί των Κυκλάδων γνωστό για τη Χώρα Μυκόνου." },
        { label: "Ρόδος", href: "/el/proorismos/rodos/", description: "Το μεγαλύτερο νησί των Δωδεκανήσων." },
        { label: "Κέρκυρα", href: "/el/proorismos/kerkyra/", description: "Ένα μεγάλο νησί του Ιονίου γνωστό για την πόλη της Κέρκυρας." },
        { label: "Ζάκυνθος", href: "/el/proorismos/zakynthos/", description: "Ένα νησί του Ιονίου με δικό του αεροδρόμιο." },
        { label: "Κως", href: "/el/proorismos/kos/", description: "Ένα νησί των Δωδεκανήσων με δικό του αεροδρόμιο." },
        { label: "Ναύπλιο", href: "/el/proorismos/nafplio/", description: "Μια παραθαλάσσια πόλη στην Πελοπόννησο, προσβάσιμη οδικώς." },
        { label: "Μετέωρα", href: "/el/proorismos/meteora/", description: "Τα μοναστήρια πάνω σε βράχους της Θεσσαλίας." },
        { label: "Παραλιακή Αθήνας", href: "/el/proorismos/paralia-athinas/", description: "Η παράκτια ζώνη νοτιοανατολικά της Αθήνας, με τη Γλυφάδα, τη Βουλιαγμένη και το Σούνιο." },
        { label: "Γλυφάδα", href: "/el/proorismos/glyfada/", description: "Το πλησιέστερο σημείο της Παραλιακής Αθήνας στο αεροδρόμιο, γνωστό για τη μαρίνα και τα beach clubs του." },
        { label: "Βουλιαγμένη", href: "/el/proorismos/vouliagmeni/", description: "Πιο μακριά στην Παραλιακή Αθήνας, γνωστή για τη λίμνη της και τα πολυτελή θέρετρα." },
        { label: "Χαλκιδική", href: "/el/proorismos/chalkidiki/", description: "Η τρίπτυχη παράκτια περιοχή ανατολικά της Θεσσαλονίκης, με Κασσάνδρα και Σιθωνία." },
        { label: "Κασσάνδρα", href: "/el/proorismos/kassandra/", description: "Η πλησιέστερη και πιο προσβάσιμη χερσόνησος της Χαλκιδικής στη Θεσσαλονίκη." },
        { label: "Σιθωνία", href: "/el/proorismos/sithonia/", description: "Η πιο δασώδης κεντρική χερσόνησος της Χαλκιδικής, πιο μακριά στην ακτή." },
        { label: "Νέα Μουδανιά", href: "/el/proorismos/nea-moudania/", description: "Η πύλη-πόλη στον ισθμό, η πλησιέστερη στο Αεροδρόμιο Θεσσαλονίκης." },
      ],
    },
    regions: {
      eyebrow: "Περιοχές",
      title: "Εξερευνήστε ανά Περιοχή",
      items: [
        { label: "Κρήτη", href: "/el/periochi/kriti/", description: "Το μεγαλύτερο νησί της Ελλάδας, καλύπτοντας Ηράκλειο και Χανιά." },
        { label: "Πελοπόννησος", href: "/el/periochi/peloponnisos/", description: "Η νότια χερσόνησος, συνδεδεμένη μέσω της Διώρυγας της Κορίνθου." },
      ],
    },
    airports: {
      eyebrow: "Αεροδρόμια",
      title: "Δημοφιλή Αεροδρόμια",
      items: [
        { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Η κύρια διεθνής πύλη της Ελλάδας." },
        { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Το κύριο αεροδρόμιο της βόρειας Ελλάδας." },
        { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Το πιο πολυσύχναστο αεροδρόμιο της Κρήτης." },
        { label: "Αεροδρόμιο Χανίων", href: "/el/aerodromio/chania/", description: "Εξυπηρετεί τη δυτική Κρήτη." },
        { label: "Αεροδρόμιο Ρόδου", href: "/el/aerodromio/rodos/", description: "Εξυπηρετεί το νησί της Ρόδου." },
        { label: "Αεροδρόμιο Κέρκυρας", href: "/el/aerodromio/kerkyra/", description: "Εξυπηρετεί το νησί της Κέρκυρας." },
        { label: "Αεροδρόμιο Σαντορίνης", href: "/el/aerodromio/santorini/", description: "Εξυπηρετεί το νησί της Σαντορίνης." },
        { label: "Αεροδρόμιο Μυκόνου", href: "/el/aerodromio/mykonos/", description: "Εξυπηρετεί το νησί της Μυκόνου." },
      ],
    },
    ports: {
      eyebrow: "Λιμάνια",
      title: "Δημοφιλή Λιμάνια",
      items: [
        { label: "Λιμάνι Πειραιά", href: "/el/limani/peiraias/", description: "Το μεγαλύτερο λιμάνι επιβατών της Ελλάδας, κοντά στην Αθήνα." },
        { label: "Λιμάνι Ραφήνας", href: "/el/limani/rafina/", description: "Μια εναλλακτική επιλογή ferry για τις Κυκλάδες κοντά στο Αεροδρόμιο Αθηνών." },
        { label: "Λιμάνι Λαυρίου", href: "/el/limani/lavrio/", description: "Ένα λιμάνι ferry που εξυπηρετεί επιλεγμένες διαδρομές των Κυκλάδων." },
        { label: "Λιμάνι Θεσσαλονίκης", href: "/el/limani/thessaloniki/", description: "Το κύριο λιμάνι της βόρειας Ελλάδας." },
        { label: "Λιμάνι Ηρακλείου", href: "/el/limani/irakleio/", description: "Το κύριο λιμάνι ferry της Κρήτης." },
        { label: "Λιμάνι Πάτρας", href: "/el/limani/patra/", description: "Η κύρια διεθνής πύλη ferry της Ελλάδας προς την Ιταλία." },
      ],
    },
    routes: {
      eyebrow: "Διαδρομές",
      title: "Δημοφιλείς Διαδρομές Μεταφοράς",
      items: [
        { label: "Αεροδρόμιο Αθηνών προς Πειραιά", href: "/el/diadromi/aerodromio-athinas-peiraias/", description: "Απευθείας μεταφορά μεταξύ του αεροδρομίου και του κύριου λιμανιού κρουαζιέρας και ferry της Ελλάδας." },
        { label: "Αθήνα προς Σούνιο", href: "/el/diadromi/athina-sounio/", description: "Ιδιωτική ημερήσια εκδρομή ή μεταφορά προς τον Ναό του Ποσειδώνα." },
        { label: "Αθήνα προς Δελφούς", href: "/el/diadromi/athina-delfoi/", description: "Μια ορεινή ημερήσια εκδρομή από την Αθήνα." },
        { label: "Αθήνα προς Ναύπλιο", href: "/el/diadromi/athina-nafplio/", description: "Ένα σύντομο ταξίδι μέσω της Διώρυγας της Κορίνθου." },
        { label: "Αθήνα προς Κόρινθο", href: "/el/diadromi/athina-korinthos/", description: "Μια μεταφορά προς την Κόρινθο και τη Διώρυγα της Κορίνθου." },
        { label: "Αθήνα προς Μετέωρα", href: "/el/diadromi/athina-meteora/", description: "Μια μεταφορά μεγάλης απόστασης προς τα μοναστήρια των Μετεώρων." },
        { label: "Αθήνα προς Θεσσαλονίκη", href: "/el/diadromi/athina-thessaloniki/", description: "Μια μεταφορά μεγάλης απόστασης μεταξύ των δύο μεγαλύτερων πόλεων της Ελλάδας." },
        { label: "Θεσσαλονίκη προς Χαλκιδική", href: "/el/diadromi/thessaloniki-chalkidiki/", description: "Μια σύντομη παράκτια μεταφορά προς τη χερσόνησο της Χαλκιδικής." },
        { label: "Ηράκλειο προς Χανιά", href: "/el/diadromi/irakleio-chania/", description: "Μια μεταφορά μεταξύ πόλεων στην Κρήτη." },
        { label: "Αεροδρόμιο Αθηνών προς Ναύπλιο", href: "/el/diadromi/aerodromio-athinas-nafplio/", description: "Απευθείας μεταφορά παρακάμπτοντας το κέντρο της Αθήνας." },
        { label: "Αεροδρόμιο Αθηνών προς Κόρινθο", href: "/el/diadromi/aerodromio-athinas-korinthos/", description: "Απευθείας μεταφορά από το αεροδρόμιο προς την Κόρινθο." },
        { label: "Πειραιάς προς Ναύπλιο", href: "/el/diadromi/peiraias-nafplio/", description: "Απευθείας μεταφορά για επιβάτες κρουαζιέρας και ferry που συνεχίζουν προς την Πελοπόννησο." },
        { label: "Αεροδρόμιο Θεσσαλονίκης προς Χαλκιδική", href: "/el/diadromi/aerodromio-thessalonikis-chalkidiki/", description: "Απευθείας μεταφορά από το αεροδρόμιο προς τη χερσόνησο της Χαλκιδικής." },
        { label: "Αεροδρόμιο Θεσσαλονίκης προς Κασσάνδρα", href: "/el/diadromi/aerodromio-thessalonikis-kassandra/", description: "Απευθείας μεταφορά προς την πλησιέστερη χερσόνησο της Χαλκιδικής." },
        { label: "Αεροδρόμιο Θεσσαλονίκης προς Σιθωνία", href: "/el/diadromi/aerodromio-thessalonikis-sithonia/", description: "Απευθείας μεταφορά προς την κεντρική χερσόνησο της Χαλκιδικής." },
        { label: "Λιμάνι Θεσσαλονίκης προς Χαλκιδική", href: "/el/diadromi/limani-thessalonikis-chalkidiki/", description: "Απευθείας μεταφορά για επιβάτες κρουαζιέρας και ferry που συνεχίζουν προς τη Χαλκιδική." },
        { label: "Θεσσαλονίκη προς Μετέωρα", href: "/el/diadromi/thessaloniki-meteora/", description: "Μια μεταφορά μεγάλης απόστασης προς τα μοναστήρια των Μετεώρων." },
        { label: "Θεσσαλονίκη προς Καβάλα", href: "/el/diadromi/thessaloniki-kavala/", description: "Μια μεταφορά μεγάλης απόστασης προς τη λιμανιού πόλη της Καβάλας." },
      ],
    },
    services: {
      eyebrow: "Υπηρεσίες",
      title: "Οι Υπηρεσίες Μεταφοράς μας",
      items: [
        { label: "Μεταφορές Αεροδρομίου", href: "/el/metafores-aerodromiou/", description: "Ιδιωτικές μεταφορές από και προς αεροδρόμια σε όλη την Ελλάδα." },
        { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή." },
        { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες." },
        { label: "Ιδιωτικές Ημερήσιες Εκδρομές από την Αθήνα", href: "/el/idiotikes-ekdromes-athina/", description: "Ιδιωτικές ημερήσιες εκδρομές από την Αθήνα με ευέλικτο πρόγραμμα και την επιστροφή σας συμπεριλαμβανόμενη." },
        { label: "Ιδιωτικές Ημερήσιες Εκδρομές από τη Θεσσαλονίκη", href: "/el/idiotikes-ekdromes-thessaloniki/", description: "Ιδιωτικές ημερήσιες εκδρομές από τη Θεσσαλονίκη με ευέλικτο πρόγραμμα και την επιστροφή σας συμπεριλαμβανόμενη." },
        { label: "Όλες οι Υπηρεσίες", href: "/el/ypiresies/", description: "Δείτε την πλήρη λίστα υπηρεσιών μεταφοράς που προσφέρουμε." },
      ],
    },
    faq: {
      eyebrow: "Ερωτήσεις & Απαντήσεις",
      title: "Συχνές Ερωτήσεις",
      items: [
        { question: "Πώς βρίσκω πληροφορίες μεταφοράς για τον προορισμό μου;", answer: "Περιηγηθείτε στα αεροδρόμια, λιμάνια, πόλεις, νησιά, περιοχές και διαδρομές που αναφέρονται σε αυτή τη σελίδα για να βρείτε αυτόν που αφορά το ταξίδι σας." },
        { question: "Μπορώ να κλείσω μεταφορά μεταξύ δύο προορισμών που αναφέρονται εδώ;", answer: "Ναι, περιγράψτε το σημείο παραλαβής και τον προορισμό σας κατά την αίτηση προσφοράς, ακόμα κι αν δεν είναι μία από τις συγκεκριμένες διαδρομές που αναφέρονται." },
        { question: "Τι γίνεται αν ο προορισμός μου δεν αναφέρεται;", answer: "Επικοινωνήστε μέσω της φόρμας προσφοράς με τα στοιχεία παραλαβής και προορισμού σας, και θα κάνουμε ό,τι μπορούμε για να βοηθήσουμε." },
      ],
    },
    cta: {
      heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας;",
      description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
      primaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      secondaryLabel: "Δείτε Όλες τις Υπηρεσίες",
    },
  },
}
