import type { Locale } from "@/lib/i18n/config"

export const heroContent = {
  en: {
    eyebrow: "Private Taxi & Transfers in Greece",
    title: "Private Taxi and Transfers across Greece",
    description:
      "Comfortable door-to-door transfers for airports, cities, ports, hotels and destinations throughout Greece. Tell us your pickup and drop-off locations and receive a transfer quote for your journey.",
    imageAlt: "Illuminated taxi sign on a car roof at night in the city",
    trustLine: "Committed to five-star private transfers across Greece",
  },
  el: {
    eyebrow: "Ιδιωτικό Ταξί & Μεταφορές στην Ελλάδα",
    title: "Ιδιωτικές Μεταφορές και Ταξί σε Όλη την Ελλάδα",
    description:
      "Άνετες μεταφορές από πόρτα σε πόρτα για αεροδρόμια, πόλεις, λιμάνια, ξενοδοχεία και προορισμούς σε όλη την Ελλάδα. Πείτε μας το σημείο παραλαβής και τον προορισμό σας και λάβετε προσφορά για τη διαδρομή σας.",
    imageAlt: "Φωτισμένη πινακίδα ταξί πάνω σε αυτοκίνητο τη νύχτα στην πόλη",
    trustLine: "Δεσμευμένοι σε ιδιωτικές μεταφορές πέντε αστέρων σε όλη την Ελλάδα",
  },
} satisfies Record<Locale, Record<string, string>>

export const heroQuoteBarContent = {
  en: {
    from: "From",
    to: "To",
    date: "Date",
    time: "Time",
    passengers: "Passengers",
    pickupPlaceholder: "Pickup location",
    dropoffPlaceholder: "Destination",
    passengerOptions: [
      "1 Passenger",
      "2 Passengers",
      "3 Passengers",
      "4 Passengers",
      "5+ Passengers",
    ],
    submit: "Get Quote",
    successTitle: "Request received",
    successDescription:
      "Thanks for the journey details. We'll be in touch shortly with your private transfer quote.",
  },
  el: {
    from: "Παραλαβή",
    to: "Προορισμός",
    date: "Ημερομηνία",
    time: "Ώρα",
    passengers: "Επιβάτες",
    pickupPlaceholder: "Σημείο παραλαβής",
    dropoffPlaceholder: "Προορισμός",
    passengerOptions: [
      "1 επιβάτης",
      "2 επιβάτες",
      "3 επιβάτες",
      "4 επιβάτες",
      "5+ επιβάτες",
    ],
    submit: "Ζητήστε Προσφορά",
    successTitle: "Το αίτημα ελήφθη",
    successDescription:
      "Ευχαριστούμε για τα στοιχεία της διαδρομής σας. Θα επικοινωνήσουμε σύντομα μαζί σας με την προσφορά για την ιδιωτική σας μεταφορά.",
  },
} satisfies Record<
  Locale,
  {
    from: string
    to: string
    date: string
    time: string
    passengers: string
    pickupPlaceholder: string
    dropoffPlaceholder: string
    passengerOptions: string[]
    submit: string
    successTitle: string
    successDescription: string
  }
>

export const trustStripContent = {
  en: {
    items: [
      "Private Transfers",
      "Door-to-Door",
      "Major Airports & Ports",
      "Fast Quote Request",
    ],
  },
  el: {
    items: [
      "Ιδιωτικές Μεταφορές",
      "Από Πόρτα σε Πόρτα",
      "Κύρια Αεροδρόμια & Λιμάνια",
      "Γρήγορη Προσφορά",
    ],
  },
} satisfies Record<Locale, { items: string[] }>

export const servicesContent = {
  en: {
    eyebrow: "What We Offer",
    title: "Private Transfers for Every Journey",
    description:
      "Pick the transfer type that matches your trip — every option is a pre-booked, private, door-to-door service.",
    items: [
      {
        title: "Airport Transfers",
        description:
          "Private pickup and drop-off from Greece's major airports.",
        cta: "Explore Airport Transfers",
      },
      {
        title: "City Transfers",
        description:
          "Comfortable private transportation between cities and destinations.",
        cta: "Explore City Transfers",
      },
      {
        title: "Port & Cruise Transfers",
        description:
          "Travel between airports, hotels, cities and Greece's major ports.",
        cta: "Explore Port Transfers",
      },
      {
        title: "Hourly Hire",
        description:
          "A private driver and vehicle booked by the hour for flexible, multi-stop plans.",
        cta: "Explore Hourly Hire",
      },
      {
        title: "Corporate Transfers",
        description:
          "Professional, punctual transportation for business travel and meetings.",
        cta: "Explore Corporate Transfers",
      },
      {
        title: "Group Transfers",
        description:
          "Private transportation for families, groups and events, with vehicles matched to your numbers.",
        cta: "Explore Group Transfers",
      },
    ],
  },
  el: {
    eyebrow: "Τι Προσφέρουμε",
    title: "Ιδιωτικές Μεταφορές για Κάθε Διαδρομή",
    description:
      "Επιλέξτε τον τύπο μεταφοράς που ταιριάζει στο ταξίδι σας — κάθε επιλογή είναι μια ιδιωτική υπηρεσία από πόρτα σε πόρτα, με προκράτηση.",
    items: [
      {
        title: "Μεταφορές Αεροδρομίου",
        description:
          "Ιδιωτική παραλαβή και μεταφορά από τα κύρια αεροδρόμια της Ελλάδας.",
        cta: "Δείτε τις Μεταφορές Αεροδρομίου",
      },
      {
        title: "Μεταφορές Πόλης",
        description:
          "Άνετες ιδιωτικές μεταφορές μεταξύ πόλεων και προορισμών.",
        cta: "Δείτε τις Μεταφορές Πόλης",
      },
      {
        title: "Μεταφορές Λιμανιού & Κρουαζιέρας",
        description:
          "Ταξιδέψτε μεταξύ αεροδρομίων, ξενοδοχείων, πόλεων και των κύριων λιμανιών της Ελλάδας.",
        cta: "Δείτε τις Μεταφορές Λιμανιού",
      },
      {
        title: "Ενοικίαση με Ώρα",
        description:
          "Ιδιωτικός οδηγός και όχημα με προκράτηση ανά ώρα, για ευέλικτα προγράμματα με πολλές στάσεις.",
        cta: "Δείτε την Ενοικίαση με Ώρα",
      },
      {
        title: "Εταιρικές Μεταφορές",
        description:
          "Επαγγελματική και ακριβής μεταφορά για επαγγελματικά ταξίδια και συναντήσεις.",
        cta: "Δείτε τις Εταιρικές Μεταφορές",
      },
      {
        title: "Ομαδικές Μεταφορές",
        description:
          "Ιδιωτική μεταφορά για οικογένειες, ομάδες και εκδηλώσεις, με όχημα ανάλογο του αριθμού σας.",
        cta: "Δείτε τις Ομαδικές Μεταφορές",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string
    title: string
    description: string
    items: { title: string; description: string; cta: string }[]
  }
>

export const coverageContent = {
  en: {
    eyebrow: "Greece-Wide Coverage",
    title: "Explore Taxi Transfers Across Greece",
    description:
      "From Athens and Thessaloniki to popular islands, coastal resorts, airports and ports, arrange private transportation for journeys throughout Greece.",
    regions: [
      "Athens & Attica",
      "Central Greece",
      "Northern Greece",
      "Peloponnese",
      "Thessaly",
      "Epirus",
      "Western Greece",
      "Macedonia",
      "Crete",
      "Aegean Islands",
      "Ionian Islands",
    ],
    cta: "Explore All Greece Transfers",
    imageAlt: "Private transfer vehicle beside the White Tower in Thessaloniki",
    imageCaption:
      "Private transfers arranged throughout mainland Greece and the islands",
  },
  el: {
    eyebrow: "Κάλυψη σε Όλη την Ελλάδα",
    title: "Μεταφορές με Ταξί σε Όλη την Ελλάδα",
    description:
      "Από την Αθήνα και τη Θεσσαλονίκη έως δημοφιλή νησιά, παραθαλάσσια θέρετρα, αεροδρόμια και λιμάνια, οργανώστε την ιδιωτική σας μεταφορά για διαδρομές σε όλη την Ελλάδα.",
    regions: [
      "Αθήνα & Αττική",
      "Στερεά Ελλάδα",
      "Βόρεια Ελλάδα",
      "Πελοπόννησος",
      "Θεσσαλία",
      "Ήπειρος",
      "Δυτική Ελλάδα",
      "Μακεδονία",
      "Κρήτη",
      "Νησιά Αιγαίου",
      "Ιόνια Νησιά",
    ],
    cta: "Δείτε Όλες τις Μεταφορές στην Ελλάδα",
    imageAlt: "Όχημα ιδιωτικής μεταφοράς δίπλα στον Λευκό Πύργο στη Θεσσαλονίκη",
    imageCaption:
      "Ιδιωτικές μεταφορές σε όλη την ηπειρωτική Ελλάδα και τα νησιά",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string
    title: string
    description: string
    regions: string[]
    cta: string
    imageAlt: string
    imageCaption: string
  }
>

export const airportsContent = {
  en: {
    eyebrow: "Airport Transfers",
    title: "Greece Airport Transfer Services",
    description:
      "Pre-book a private airport transfer with pickup arranged around your flight arrival or departure. Travel directly to your hotel, port, city or destination without waiting for a taxi at the airport.",
    cta: "View All Greece Airports",
    items: [
      {
        name: "Athens Airport",
        description:
          "Transfers to central Athens, Piraeus and the Attica coast.",
        imageAlt: "Terminal building at Athens International Airport, Greece",
      },
      {
        name: "Thessaloniki Airport",
        description: "Private transfers to the city centre and Halkidiki.",
        imageAlt: "Terminal entrance at Thessaloniki Airport Makedonia, Greece",
      },
      {
        name: "Heraklion Airport",
        description: "Airport transfers across Crete's north coast resorts.",
        imageAlt: "Aircraft on the tarmac at Heraklion Airport, Crete, Greece",
      },
      {
        name: "Chania Airport",
        description: "Private pickup for western Crete hotels and towns.",
        imageAlt: "Chania Airport terminal at dusk, Crete, Greece",
      },
      {
        name: "Rhodes Airport",
        description: "Transfers to Rhodes Town and island resort areas.",
        imageAlt: "Rhodes International Airport Diagoras terminal building, Greece",
      },
      {
        name: "Corfu Airport",
        description: "Door-to-door transfers around the island of Corfu.",
        imageAlt: "Aircraft approaching Corfu Airport over the Ionian Sea, Greece",
      },
      {
        name: "Santorini Airport",
        description:
          "Private transfers to Fira, Oia and the caldera villages.",
        imageAlt:
          "Aircraft departing Santorini Airport along the island coastline, Greece",
      },
      {
        name: "Mykonos Airport",
        description: "Transfers to Mykonos Town, the port and beach resorts.",
        imageAlt: "Terminal entrance at Mykonos Airport, Greece",
      },
    ],
  },
  el: {
    eyebrow: "Μεταφορές Αεροδρομίου",
    title: "Υπηρεσίες Μεταφοράς σε Αεροδρόμια της Ελλάδας",
    description:
      "Κλείστε εκ των προτέρων μια ιδιωτική μεταφορά αεροδρομίου, με την παραλαβή προσαρμοσμένη στην ώρα άφιξης ή αναχώρησης της πτήσης σας. Ταξιδέψτε απευθείας στο ξενοδοχείο, το λιμάνι, την πόλη ή τον προορισμό σας χωρίς να περιμένετε ταξί στο αεροδρόμιο.",
    cta: "Δείτε Όλα τα Αεροδρόμια της Ελλάδας",
    items: [
      {
        name: "Αεροδρόμιο Αθηνών",
        description:
          "Μεταφορές στο κέντρο της Αθήνας, τον Πειραιά και την ακτή της Αττικής.",
        imageAlt: "Κτίριο τερματικού σταθμού στο Διεθνές Αεροδρόμιο Αθηνών, Ελλάδα",
      },
      {
        name: "Αεροδρόμιο Θεσσαλονίκης",
        description: "Ιδιωτικές μεταφορές στο κέντρο της πόλης και στη Χαλκιδική.",
        imageAlt: "Είσοδος τερματικού σταθμού στο Αεροδρόμιο Μακεδονία Θεσσαλονίκης, Ελλάδα",
      },
      {
        name: "Αεροδρόμιο Ηρακλείου",
        description: "Μεταφορές αεροδρομίου στα θέρετρα της βόρειας ακτής της Κρήτης.",
        imageAlt: "Αεροσκάφος στον διάδρομο του Αεροδρομίου Ηρακλείου, Κρήτη, Ελλάδα",
      },
      {
        name: "Αεροδρόμιο Χανίων",
        description: "Ιδιωτική παραλαβή για ξενοδοχεία και κωμοπόλεις της δυτικής Κρήτης.",
        imageAlt: "Τερματικός σταθμός του Αεροδρομίου Χανίων το σούρουπο, Κρήτη, Ελλάδα",
      },
      {
        name: "Αεροδρόμιο Ρόδου",
        description: "Μεταφορές στην πόλη της Ρόδου και τις τουριστικές περιοχές του νησιού.",
        imageAlt: "Κτίριο τερματικού σταθμού του Διεθνούς Αεροδρομίου Διαγόρας Ρόδου, Ελλάδα",
      },
      {
        name: "Αεροδρόμιο Κέρκυρας",
        description: "Μεταφορές από πόρτα σε πόρτα σε όλο το νησί της Κέρκυρας.",
        imageAlt: "Αεροσκάφος πλησιάζει στο Αεροδρόμιο Κέρκυρας πάνω από το Ιόνιο Πέλαγος, Ελλάδα",
      },
      {
        name: "Αεροδρόμιο Σαντορίνης",
        description:
          "Ιδιωτικές μεταφορές στη Φηρά, την Οία και τα χωριά της καλντέρας.",
        imageAlt:
          "Αεροσκάφος απογειώνεται από το Αεροδρόμιο Σαντορίνης κατά μήκος της ακτογραμμής του νησιού, Ελλάδα",
      },
      {
        name: "Αεροδρόμιο Μυκόνου",
        description: "Μεταφορές στη Χώρα Μυκόνου, το λιμάνι και τα παραθαλάσσια θέρετρα.",
        imageAlt: "Είσοδος τερματικού σταθμού στο Αεροδρόμιο Μυκόνου, Ελλάδα",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string
    title: string
    description: string
    cta: string
    items: { name: string; description: string; imageAlt: string }[]
  }
>

export const destinationsContent = {
  en: {
    eyebrow: "Where We Go",
    title: "Popular Greece Transfer Destinations",
    cta: "Explore All Destinations",
    exploreLabel: "Explore Transfers",
    items: [
      {
        name: "Athens",
        description:
          "Airport transfers, city transfers and private transportation.",
        imageAlt: "The Acropolis of Athens illuminated at night, Greece",
      },
      {
        name: "Santorini",
        description: "Airport, port, hotel and island transfers.",
        imageAlt:
          "Whitewashed clifftop village of Oia in Santorini at sunset, Greece",
      },
      {
        name: "Mykonos",
        description: "Airport, port and private destination transfers.",
        imageAlt: "Little Venice waterfront houses in Mykonos Town at dusk, Greece",
      },
      {
        name: "Thessaloniki",
        description: "Airport and city-to-city transfers.",
        imageAlt:
          "The White Tower and waterfront promenade in Thessaloniki, Greece",
      },
      {
        name: "Heraklion",
        description: "Airport, hotel and destination transfers.",
        imageAlt: "Harbourfront of Heraklion illuminated at night, Crete, Greece",
      },
      {
        name: "Rhodes",
        description: "Airport, hotel and resort transfers.",
        imageAlt: "Coastal view of Rhodes Town and its beachfront, Greece",
      },
    ],
  },
  el: {
    eyebrow: "Πού Ταξιδεύουμε",
    title: "Δημοφιλείς Προορισμοί Μεταφοράς στην Ελλάδα",
    cta: "Δείτε Όλους τους Προορισμούς",
    exploreLabel: "Δείτε τις Μεταφορές",
    items: [
      {
        name: "Αθήνα",
        description:
          "Μεταφορές αεροδρομίου, μεταφορές εντός πόλης και ιδιωτική μεταφορά.",
        imageAlt: "Η Ακρόπολη της Αθήνας φωτισμένη τη νύχτα, Ελλάδα",
      },
      {
        name: "Σαντορίνη",
        description: "Μεταφορές αεροδρομίου, λιμανιού, ξενοδοχείου και εντός νησιού.",
        imageAlt:
          "Ασβεστωμένο χωριό της Οίας πάνω σε γκρεμό στη Σαντορίνη το ηλιοβασίλεμα, Ελλάδα",
      },
      {
        name: "Μύκονος",
        description: "Μεταφορές αεροδρομίου, λιμανιού και ιδιωτικές μεταφορές προορισμού.",
        imageAlt: "Παραθαλάσσια σπίτια της Μικρής Βενετίας στη Χώρα Μυκόνου το σούρουπο, Ελλάδα",
      },
      {
        name: "Θεσσαλονίκη",
        description: "Μεταφορές αεροδρομίου και μεταξύ πόλεων.",
        imageAlt:
          "Ο Λευκός Πύργος και η παραλιακή προμενάδα της Θεσσαλονίκης, Ελλάδα",
      },
      {
        name: "Ηράκλειο",
        description: "Μεταφορές αεροδρομίου, ξενοδοχείου και προορισμού.",
        imageAlt: "Το λιμάνι του Ηρακλείου φωτισμένο τη νύχτα, Κρήτη, Ελλάδα",
      },
      {
        name: "Ρόδος",
        description: "Μεταφορές αεροδρομίου, ξενοδοχείου και θερέτρων.",
        imageAlt: "Παραθαλάσσια θέα της πόλης της Ρόδου, Ελλάδα",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string
    title: string
    cta: string
    exploreLabel: string
    items: { name: string; description: string; imageAlt: string }[]
  }
>

export const routesContent = {
  en: {
    eyebrow: "City-to-City",
    title: "Private City-to-City Transfers in Greece",
    description:
      "Travel between Greek cities and destinations with a pre-booked private transfer. Enjoy direct door-to-door transportation without changing vehicles or relying on local public transport.",
    viewRoute: "View Route",
    cta: "Explore City-to-City Transfers",
    items: [
      { from: "Athens", to: "Delphi" },
      { from: "Athens", to: "Nafplio" },
      { from: "Athens", to: "Meteora" },
      { from: "Athens", to: "Thessaloniki" },
      { from: "Thessaloniki", to: "Halkidiki" },
      { from: "Heraklion", to: "Chania" },
    ],
  },
  el: {
    eyebrow: "Μεταξύ Πόλεων",
    title: "Ιδιωτικές Μεταφορές Μεταξύ Πόλεων στην Ελλάδα",
    description:
      "Ταξιδέψτε μεταξύ ελληνικών πόλεων και προορισμών με ιδιωτική μεταφορά με προκράτηση. Απολαύστε απευθείας μεταφορά από πόρτα σε πόρτα, χωρίς αλλαγή οχήματος ή εξάρτηση από τα τοπικά μέσα μεταφοράς.",
    viewRoute: "Δείτε τη Διαδρομή",
    cta: "Δείτε τις Μεταφορές Μεταξύ Πόλεων",
    items: [
      { from: "Αθήνα", to: "Δελφοί" },
      { from: "Αθήνα", to: "Ναύπλιο" },
      { from: "Αθήνα", to: "Μετέωρα" },
      { from: "Αθήνα", to: "Θεσσαλονίκη" },
      { from: "Θεσσαλονίκη", to: "Χαλκιδική" },
      { from: "Ηράκλειο", to: "Χανιά" },
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string
    title: string
    description: string
    viewRoute: string
    cta: string
    items: { from: string; to: string }[]
  }
>

export const portsContent = {
  en: {
    eyebrow: "Ports & Cruise Terminals",
    title: "Private Port & Cruise Transfers",
    description:
      "Arrange private transportation between airports, hotels, cities and Greece's major cruise and ferry ports. Your driver can meet you at the agreed pickup point and take you directly to your destination.",
    cta: "Explore Port Transfers",
    ports: [
      "Piraeus Port",
      "Rafina Port",
      "Lavrio Port",
      "Thessaloniki Port",
      "Heraklion Port",
      "Patras Port",
    ],
    piraeusImageAlt:
      "Ferries and cruise ships docked at the Port of Piraeus at sunset, Greece",
    lavrioImageAlt: "Ferries docked at the Port of Lavrio at sunset, Greece",
  },
  el: {
    eyebrow: "Λιμάνια & Τερματικοί Σταθμοί Κρουαζιέρας",
    title: "Ιδιωτικές Μεταφορές σε Λιμάνια & Κρουαζιέρες",
    description:
      "Οργανώστε την ιδιωτική σας μεταφορά μεταξύ αεροδρομίων, ξενοδοχείων, πόλεων και των κύριων λιμανιών κρουαζιέρας και ferry της Ελλάδας. Ο οδηγός σας μπορεί να σας παραλάβει στο συμφωνημένο σημείο και να σας μεταφέρει απευθείας στον προορισμό σας.",
    cta: "Δείτε τις Μεταφορές σε Λιμάνια",
    ports: [
      "Λιμάνι Πειραιά",
      "Λιμάνι Ραφήνας",
      "Λιμάνι Λαυρίου",
      "Λιμάνι Θεσσαλονίκης",
      "Λιμάνι Ηρακλείου",
      "Λιμάνι Πατρών",
    ],
    piraeusImageAlt:
      "Ferry και κρουαζιερόπλοια αγκυροβολημένα στο λιμάνι του Πειραιά το ηλιοβασίλεμα, Ελλάδα",
    lavrioImageAlt: "Ferry αγκυροβολημένα στο λιμάνι του Λαυρίου το ηλιοβασίλεμα, Ελλάδα",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string
    title: string
    description: string
    cta: string
    ports: string[]
    piraeusImageAlt: string
    lavrioImageAlt: string
  }
>

export const whyUsContent = {
  en: {
    eyebrow: "Why Choose Us",
    title: "Why Book a Private Transfer in Greece?",
    items: [
      {
        title: "Reliable Pickup",
        description:
          "Your transfer is arranged in advance around your requested pickup time.",
      },
      {
        title: "Door-to-Door Service",
        description:
          "Travel directly between your pickup and destination without unnecessary stops.",
      },
      {
        title: "Local Transfer Coverage",
        description:
          "Access private transfer options across major Greek cities, airports, ports and destinations.",
      },
      {
        title: "Simple Quote Process",
        description:
          "Send your journey details and receive a transfer quote before booking.",
      },
    ],
  },
  el: {
    eyebrow: "Γιατί Εμάς",
    title: "Γιατί να Κλείσετε Ιδιωτική Μεταφορά στην Ελλάδα;",
    items: [
      {
        title: "Αξιόπιστη Παραλαβή",
        description:
          "Η μεταφορά σας οργανώνεται εκ των προτέρων σύμφωνα με την ώρα παραλαβής που ζητήσατε.",
      },
      {
        title: "Υπηρεσία Από Πόρτα σε Πόρτα",
        description:
          "Ταξιδέψτε απευθείας από το σημείο παραλαβής στον προορισμό σας, χωρίς περιττές στάσεις.",
      },
      {
        title: "Τοπική Κάλυψη Μεταφορών",
        description:
          "Αποκτήστε πρόσβαση σε επιλογές ιδιωτικής μεταφοράς στις κύριες ελληνικές πόλεις, αεροδρόμια, λιμάνια και προορισμούς.",
      },
      {
        title: "Απλή Διαδικασία Προσφοράς",
        description:
          "Στείλτε τα στοιχεία της διαδρομής σας και λάβετε προσφορά πριν την κράτηση.",
      },
    ],
  },
} satisfies Record<
  Locale,
  { eyebrow: string; title: string; items: { title: string; description: string }[] }
>

export const howItWorksContent = {
  en: {
    eyebrow: "The Process",
    title: "How Your Greece Transfer Works",
    cta: "Request a Transfer Quote",
    steps: [
      {
        title: "Tell Us Your Journey",
        description:
          "Enter your pickup, destination, date, time and passenger details.",
      },
      {
        title: "Receive Your Quote",
        description:
          "We review your journey and arrange a suitable private transfer option.",
      },
      {
        title: "Travel Comfortably",
        description:
          "Meet your driver at the agreed pickup location and travel directly to your destination.",
      },
    ],
  },
  el: {
    eyebrow: "Η Διαδικασία",
    title: "Πώς Λειτουργεί η Μεταφορά σας στην Ελλάδα",
    cta: "Ζητήστε Προσφορά Μεταφοράς",
    steps: [
      {
        title: "Πείτε μας τη Διαδρομή σας",
        description:
          "Εισαγάγετε το σημείο παραλαβής, τον προορισμό, την ημερομηνία, την ώρα και τον αριθμό επιβατών.",
      },
      {
        title: "Λάβετε την Προσφορά σας",
        description:
          "Εξετάζουμε τη διαδρομή σας και οργανώνουμε την κατάλληλη επιλογή ιδιωτικής μεταφοράς.",
      },
      {
        title: "Ταξιδέψτε Άνετα",
        description:
          "Συναντήστε τον οδηγό σας στο συμφωνημένο σημείο παραλαβής και ταξιδέψτε απευθείας στον προορισμό σας.",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string
    title: string
    cta: string
    steps: { title: string; description: string }[]
  }
>

export const leadCtaContent = {
  en: {
    heading: "Planning a Trip in Greece? Get Your Transfer Quote.",
    description:
      "Send us your journey details and we'll help arrange a private transfer for your route.",
    primaryLabel: "Get a Transfer Quote",
    secondaryLabel: "Contact Us",
  },
  el: {
    heading: "Σχεδιάζετε Ταξίδι στην Ελλάδα; Ζητήστε την Προσφορά σας.",
    description:
      "Στείλτε μας τα στοιχεία της διαδρομής σας και θα σας βοηθήσουμε να οργανώσετε μια ιδιωτική μεταφορά για το δρομολόγιό σας.",
    primaryLabel: "Ζητήστε Προσφορά Μεταφοράς",
    secondaryLabel: "Επικοινωνήστε Μαζί Μας",
  },
} satisfies Record<Locale, Record<string, string>>

export const faqContent = {
  en: {
    eyebrow: "Questions & Answers",
    title: "Frequently Asked Questions",
    description:
      "Everything you need to know about booking a private transfer in Greece.",
    items: [
      {
        question: "Do you provide private taxi transfers throughout Greece?",
        answer:
          "Yes. Transfer services can be arranged for journeys between airports, cities, ports, hotels and destinations throughout Greece, subject to availability.",
      },
      {
        question: "Can I book an airport transfer in Greece?",
        answer:
          "Yes. You can request private airport pickup or drop-off for major Greek airports and surrounding destinations.",
      },
      {
        question: "Do you provide transfers between Greek cities?",
        answer:
          "Yes. Private city-to-city transfers can be requested for routes across mainland Greece and selected island destinations.",
      },
      {
        question: "Can I book a transfer from a Greek airport to a hotel?",
        answer:
          "Yes. Airport-to-hotel transfers are one of the main services offered.",
      },
      {
        question: "Can you arrange transfers to cruise and ferry ports?",
        answer:
          "Yes. Private transfers can be requested between airports, hotels, cities and major Greek ports.",
      },
      {
        question: "How far in advance should I book my transfer?",
        answer:
          "Advance booking is recommended, particularly during Greece's busy summer travel period.",
      },
      {
        question: "How do I request a transfer quote?",
        answer:
          "Use the quote form and provide your pickup, destination, date, time, passengers and luggage details.",
      },
      {
        question: "Can I request a custom transfer route?",
        answer:
          "Yes. If your route is not listed, submit the journey through the quote form and provide the complete pickup and destination details.",
      },
    ],
  },
  el: {
    eyebrow: "Ερωτήσεις & Απαντήσεις",
    title: "Συχνές Ερωτήσεις",
    description:
      "Όλα όσα χρειάζεται να γνωρίζετε για την κράτηση μιας ιδιωτικής μεταφοράς στην Ελλάδα.",
    items: [
      {
        question: "Προσφέρετε ιδιωτικές μεταφορές με ταξί σε όλη την Ελλάδα;",
        answer:
          "Ναι. Μπορούν να οργανωθούν υπηρεσίες μεταφοράς για διαδρομές μεταξύ αεροδρομίων, πόλεων, λιμανιών, ξενοδοχείων και προορισμών σε όλη την Ελλάδα, ανάλογα με τη διαθεσιμότητα.",
      },
      {
        question: "Μπορώ να κλείσω μεταφορά αεροδρομίου στην Ελλάδα;",
        answer:
          "Ναι. Μπορείτε να ζητήσετε ιδιωτική παραλαβή ή μεταφορά από τα κύρια ελληνικά αεροδρόμια και τους γύρω προορισμούς.",
      },
      {
        question: "Προσφέρετε μεταφορές μεταξύ ελληνικών πόλεων;",
        answer:
          "Ναι. Μπορείτε να ζητήσετε ιδιωτικές μεταφορές μεταξύ πόλεων για διαδρομές σε όλη την ηπειρωτική Ελλάδα και επιλεγμένους νησιωτικούς προορισμούς.",
      },
      {
        question: "Μπορώ να κλείσω μεταφορά από ελληνικό αεροδρόμιο προς ξενοδοχείο;",
        answer:
          "Ναι. Οι μεταφορές από το αεροδρόμιο στο ξενοδοχείο είναι μία από τις βασικές υπηρεσίες που προσφέρουμε.",
      },
      {
        question: "Μπορείτε να οργανώσετε μεταφορές σε λιμάνια κρουαζιέρας και ferry;",
        answer:
          "Ναι. Μπορείτε να ζητήσετε ιδιωτικές μεταφορές μεταξύ αεροδρομίων, ξενοδοχείων, πόλεων και των κύριων λιμανιών της Ελλάδας.",
      },
      {
        question: "Πόσο νωρίτερα πρέπει να κλείσω τη μεταφορά μου;",
        answer:
          "Συνιστάται η έγκαιρη κράτηση, ιδίως κατά τη διάρκεια της πολυάσχολης καλοκαιρινής περιόδου στην Ελλάδα.",
      },
      {
        question: "Πώς μπορώ να ζητήσω προσφορά για μια μεταφορά;",
        answer:
          "Χρησιμοποιήστε τη φόρμα προσφοράς και δώστε τα στοιχεία παραλαβής, προορισμού, ημερομηνίας, ώρας, επιβατών και αποσκευών.",
      },
      {
        question: "Μπορώ να ζητήσω μια προσαρμοσμένη διαδρομή μεταφοράς;",
        answer:
          "Ναι. Αν η διαδρομή σας δεν αναφέρεται, υποβάλετε τη διαδρομή μέσω της φόρμας προσφοράς με τα πλήρη στοιχεία παραλαβής και προορισμού.",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string
    title: string
    description: string
    items: { question: string; answer: string }[]
  }
>

export const finalCtaContent = {
  en: {
    heading: "Ready to Arrange Your Greece Transfer?",
    primaryLabel: "Get My Quote",
    secondaryLabel: "Contact Us",
  },
  el: {
    heading: "Έτοιμοι να Οργανώσετε τη Μεταφορά σας στην Ελλάδα;",
    primaryLabel: "Ζητήστε την Προσφορά μου",
    secondaryLabel: "Επικοινωνήστε Μαζί Μας",
  },
} satisfies Record<Locale, Record<string, string>>
