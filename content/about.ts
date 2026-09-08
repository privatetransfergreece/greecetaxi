import type { Locale } from "@/lib/i18n/config"

export const aboutMeta = {
  en: {
    title: "About Us – Private Taxi & Transfer Services Across Greece",
    description:
      "Learn about our private taxi and transfer service across Greece, providing reliable airport, hotel, port, city-to-city and destination transfers nationwide.",
  },
  el: {
    title: "Σχετικά με Εμάς – Υπηρεσίες Ιδιωτικού Ταξί & Μεταφορών στην Ελλάδα",
    description:
      "Μάθετε για την υπηρεσία ιδιωτικού ταξί και μεταφορών μας σε όλη την Ελλάδα, με αξιόπιστες μεταφορές αεροδρομίου, ξενοδοχείου, λιμανιού και μεταξύ πόλεων σε όλη τη χώρα.",
  },
} satisfies Record<Locale, { title: string; description: string }>

export const aboutHeroContent = {
  en: {
    eyebrow: "About Us",
    title: "About Our Private Transfer & Taxi Service in Greece",
    description:
      "We provide reliable private transportation across Greece, connecting travelers with comfortable, pre-booked transfers between airports, hotels, ports, cities and popular destinations nationwide.",
    imageAlt: "Private transfer vehicle beside the White Tower in Thessaloniki",
    primaryLabel: "Book a Transfer",
    secondaryLabel: "Get a Free Quote",
  },
  el: {
    eyebrow: "Σχετικά με Εμάς",
    title: "Σχετικά με την Υπηρεσία Ιδιωτικών Μεταφορών & Ταξί μας στην Ελλάδα",
    description:
      "Παρέχουμε αξιόπιστη ιδιωτική μεταφορά σε όλη την Ελλάδα, συνδέοντας τους ταξιδιώτες με άνετες μεταφορές, με προκράτηση, μεταξύ αεροδρομίων, ξενοδοχείων, λιμανιών, πόλεων και δημοφιλών προορισμών σε όλη τη χώρα.",
    imageAlt: "Όχημα ιδιωτικής μεταφοράς δίπλα στον Λευκό Πύργο στη Θεσσαλονίκη",
    primaryLabel: "Κλείστε Μεταφορά",
    secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
  },
} satisfies Record<Locale, Record<string, string>>

export const whoWeAreContent = {
  en: {
    eyebrow: "Who We Are",
    title: "Private Transportation Built Around Your Journey",
    paragraphs: [
      "Our service is built for travelers who need dependable transport in Greece without waiting for a taxi, navigating public transport or arranging a rental car. Whether you're arriving on a flight, stepping off a cruise, or planning a journey between cities and islands, we help arrange a private vehicle for your route.",
      "We specialize in airport transfers, hotel transfers, port and cruise transfers, city-to-city journeys and transfers to popular destinations throughout Greece. Every trip is arranged as a private, pre-booked transfer with a professional driver, so you can travel directly to where you need to be.",
    ],
  },
  el: {
    eyebrow: "Ποιοι Είμαστε",
    title: "Ιδιωτική Μεταφορά Σχεδιασμένη Γύρω από το Ταξίδι σας",
    paragraphs: [
      "Η υπηρεσία μας απευθύνεται σε ταξιδιώτες που χρειάζονται αξιόπιστη μεταφορά στην Ελλάδα, χωρίς να περιμένουν ταξί, να εξαρτώνται από τα μέσα μαζικής μεταφοράς ή να νοικιάζουν αυτοκίνητο. Είτε φτάνετε με πτήση, αποβιβάζεστε από κρουαζιερόπλοιο, είτε σχεδιάζετε ένα ταξίδι μεταξύ πόλεων και νησιών, σας βοηθάμε να οργανώσετε ένα ιδιωτικό όχημα για τη διαδρομή σας.",
      "Ειδικευόμαστε σε μεταφορές αεροδρομίου, μεταφορές ξενοδοχείου, μεταφορές λιμανιού και κρουαζιέρας, διαδρομές μεταξύ πόλεων και μεταφορές προς δημοφιλείς προορισμούς σε όλη την Ελλάδα. Κάθε διαδρομή οργανώνεται ως ιδιωτική μεταφορά, με προκράτηση και επαγγελματία οδηγό, ώστε να ταξιδεύετε απευθείας εκεί όπου χρειάζεται να βρεθείτε.",
    ],
  },
} satisfies Record<Locale, { eyebrow: string; title: string; paragraphs: string[] }>

export const aboutServicesContent = {
  en: {
    eyebrow: "What We Offer",
    title: "Our Services",
    description: "A private transfer option for every type of journey across Greece.",
    items: [
      {
        title: "Airport Transfers",
        description:
          "Pre-booked pickup and drop-off at major Greek airports, with your driver ready when you land.",
      },
      {
        title: "Private Taxi Transfers",
        description:
          "On-demand private taxi journeys for short trips, appointments and everyday travel around the city.",
      },
      {
        title: "Chauffeur Services",
        description:
          "Professional chauffeur-driven transportation for business travel, events and special occasions.",
      },
      {
        title: "Hotel Transfers",
        description:
          "Direct transportation between your hotel and the airport, port, city centre or next destination.",
      },
      {
        title: "Port & Cruise Transfers",
        description:
          "Private transfers to and from Greece's cruise terminals and ferry ports, timed around your sailing.",
      },
      {
        title: "City-to-City Transfers",
        description:
          "Comfortable long-distance transfers between cities and regions across mainland Greece.",
      },
      {
        title: "Private Tours & Day Trips",
        description:
          "Private vehicles for day trips and guided routes to nearby attractions and historic sites.",
      },
    ],
  },
  el: {
    eyebrow: "Τι Προσφέρουμε",
    title: "Οι Υπηρεσίες μας",
    description: "Μια επιλογή ιδιωτικής μεταφοράς για κάθε τύπο διαδρομής στην Ελλάδα.",
    items: [
      {
        title: "Μεταφορές Αεροδρομίου",
        description:
          "Παραλαβή και μεταφορά με προκράτηση στα κύρια αεροδρόμια της Ελλάδας, με τον οδηγό σας έτοιμο μόλις προσγειωθείτε.",
      },
      {
        title: "Ιδιωτικές Μεταφορές με Ταξί",
        description:
          "Ιδιωτικές διαδρομές με ταξί κατά παραγγελία για σύντομα ταξίδια, ραντεβού και καθημερινές μετακινήσεις στην πόλη.",
      },
      {
        title: "Υπηρεσίες Σοφέρ",
        description:
          "Επαγγελματική μεταφορά με σοφέρ για επαγγελματικά ταξίδια, εκδηλώσεις και ειδικές περιστάσεις.",
      },
      {
        title: "Μεταφορές Ξενοδοχείου",
        description:
          "Απευθείας μεταφορά μεταξύ του ξενοδοχείου σας και του αεροδρομίου, του λιμανιού, του κέντρου της πόλης ή του επόμενου προορισμού σας.",
      },
      {
        title: "Μεταφορές Λιμανιού & Κρουαζιέρας",
        description:
          "Ιδιωτικές μεταφορές από και προς τα τερματικά κρουαζιέρας και τα λιμάνια ferry της Ελλάδας, προσαρμοσμένες στο ωράριο του πλου σας.",
      },
      {
        title: "Μεταφορές Μεταξύ Πόλεων",
        description:
          "Άνετες μεταφορές μεγάλων αποστάσεων μεταξύ πόλεων και περιοχών σε όλη την ηπειρωτική Ελλάδα.",
      },
      {
        title: "Ιδιωτικές Εκδρομές & Ημερήσιες Εξορμήσεις",
        description:
          "Ιδιωτικά οχήματα για ημερήσιες εκδρομές και ξεναγήσεις σε κοντινά αξιοθέατα και ιστορικούς χώρους.",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string
    title: string
    description: string
    items: { title: string; description: string }[]
  }
>

export const whyChooseUsContent = {
  en: {
    eyebrow: "Why Choose Us",
    title: "What Makes Us a Reliable Choice",
    items: [
      {
        title: "Professional Drivers",
        description:
          "Experienced, professional drivers focused on a safe and comfortable journey.",
      },
      {
        title: "Comfortable Private Vehicles",
        description:
          "Well-maintained private vehicles suited to your group size and luggage.",
      },
      {
        title: "Reliable Pickup Service",
        description:
          "Your pickup is arranged in advance and coordinated around your schedule.",
      },
      {
        title: "Transparent Pricing",
        description:
          "Clear pricing agreed before your journey, with no hidden surprises.",
      },
      {
        title: "24/7 Booking Support",
        description:
          "Support available to help you arrange transfers at any time of day.",
      },
      {
        title: "Door-to-Door Transfers",
        description:
          "Direct transportation between your exact pickup point and destination.",
      },
    ],
  },
  el: {
    eyebrow: "Γιατί Εμάς",
    title: "Γιατί Είμαστε μια Αξιόπιστη Επιλογή",
    items: [
      {
        title: "Επαγγελματίες Οδηγοί",
        description:
          "Έμπειροι, επαγγελματίες οδηγοί εστιασμένοι σε ένα ασφαλές και άνετο ταξίδι.",
      },
      {
        title: "Άνετα Ιδιωτικά Οχήματα",
        description:
          "Καλά συντηρημένα ιδιωτικά οχήματα, προσαρμοσμένα στο μέγεθος της ομάδας και τις αποσκευές σας.",
      },
      {
        title: "Αξιόπιστη Υπηρεσία Παραλαβής",
        description:
          "Η παραλαβή σας οργανώνεται εκ των προτέρων και συντονίζεται σύμφωνα με το πρόγραμμά σας.",
      },
      {
        title: "Διαφανείς Τιμές",
        description:
          "Σαφής τιμή συμφωνημένη πριν από το ταξίδι σας, χωρίς κρυφές εκπλήξεις.",
      },
      {
        title: "Υποστήριξη Κρατήσεων 24/7",
        description:
          "Διαθέσιμη υποστήριξη για να σας βοηθήσει να οργανώσετε μεταφορές οποιαδήποτε ώρα της ημέρας.",
      },
      {
        title: "Μεταφορές Από Πόρτα σε Πόρτα",
        description:
          "Απευθείας μεταφορά μεταξύ του ακριβούς σημείου παραλαβής και του προορισμού σας.",
      },
    ],
  },
} satisfies Record<
  Locale,
  { eyebrow: string; title: string; items: { title: string; description: string }[] }
>

export const aboutCoverageContent = {
  en: {
    eyebrow: "Greece-Wide Coverage",
    title: "Serving Travelers Across Greece",
    description:
      "Our private transfer network extends across mainland Greece and the islands, covering major airports, ports, hotels, resorts and popular tourist destinations. Whether you're arriving in Athens, exploring the islands or travelling between historic sites on the mainland, private transportation can be arranged for your route.",
    cta: "Explore All Destinations",
    places: [
      "Athens",
      "Thessaloniki",
      "Santorini",
      "Mykonos",
      "Crete",
      "Rhodes",
      "Corfu",
      "Zakynthos",
      "Kos",
      "Kalamata",
      "Nafplio",
      "Meteora",
      "Peloponnese",
    ],
  },
  el: {
    eyebrow: "Κάλυψη σε Όλη την Ελλάδα",
    title: "Στην Υπηρεσία Ταξιδιωτών σε Όλη την Ελλάδα",
    description:
      "Το δίκτυο ιδιωτικών μεταφορών μας εκτείνεται σε όλη την ηπειρωτική Ελλάδα και τα νησιά, καλύπτοντας κύρια αεροδρόμια, λιμάνια, ξενοδοχεία, θέρετρα και δημοφιλείς τουριστικούς προορισμούς. Είτε φτάνετε στην Αθήνα, εξερευνάτε τα νησιά ή ταξιδεύετε μεταξύ ιστορικών τόπων στην ηπειρωτική χώρα, μπορεί να οργανωθεί ιδιωτική μεταφορά για τη διαδρομή σας.",
    cta: "Δείτε Όλους τους Προορισμούς",
    places: [
      "Αθήνα",
      "Θεσσαλονίκη",
      "Σαντορίνη",
      "Μύκονος",
      "Κρήτη",
      "Ρόδος",
      "Κέρκυρα",
      "Ζάκυνθος",
      "Κως",
      "Καλαμάτα",
      "Ναύπλιο",
      "Μετέωρα",
      "Πελοπόννησος",
    ],
  },
} satisfies Record<
  Locale,
  { eyebrow: string; title: string; description: string; cta: string; places: string[] }
>

export const commitmentContent = {
  en: {
    eyebrow: "Our Commitment",
    title: "What You Can Expect From Us",
    description:
      "Every transfer we arrange is guided by the same principles, whatever your route across Greece.",
    items: [
      "Punctual pickups arranged around your schedule",
      "Comfortable, clean private vehicles for every journey",
      "Professional, courteous communication throughout your booking",
      "A convenient, straightforward booking process",
      "Customer-focused service from request to drop-off",
    ],
  },
  el: {
    eyebrow: "Η Δέσμευσή μας",
    title: "Τι Μπορείτε να Περιμένετε από Εμάς",
    description:
      "Κάθε μεταφορά που οργανώνουμε διέπεται από τις ίδιες αρχές, όποια κι αν είναι η διαδρομή σας στην Ελλάδα.",
    items: [
      "Έγκαιρες παραλαβές οργανωμένες σύμφωνα με το πρόγραμμά σας",
      "Άνετα, καθαρά ιδιωτικά οχήματα για κάθε διαδρομή",
      "Επαγγελματική, ευγενική επικοινωνία σε όλη τη διάρκεια της κράτησής σας",
      "Μια βολική, απλή διαδικασία κράτησης",
      "Υπηρεσία εστιασμένη στον πελάτη, από το αίτημα έως την άφιξη",
    ],
  },
} satisfies Record<
  Locale,
  { eyebrow: string; title: string; description: string; items: string[] }
>

export const aboutCtaContent = {
  en: {
    heading: "Ready to Travel Across Greece?",
    description:
      "Book your private transfer or request a free quote, and we'll help arrange comfortable transportation for your journey.",
    primaryLabel: "Book Your Transfer",
    secondaryLabel: "Request a Free Quote",
  },
  el: {
    heading: "Έτοιμοι να Ταξιδέψετε στην Ελλάδα;",
    description:
      "Κλείστε την ιδιωτική σας μεταφορά ή ζητήστε δωρεάν προσφορά, και θα σας βοηθήσουμε να οργανώσετε μια άνετη μεταφορά για το ταξίδι σας.",
    primaryLabel: "Κλείστε τη Μεταφορά σας",
    secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
  },
} satisfies Record<Locale, Record<string, string>>
