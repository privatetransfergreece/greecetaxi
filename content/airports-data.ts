import type { Locale } from "@/lib/i18n/config"
import type { HeroContent } from "@/components/location/hero"
import type { IconTextSection } from "@/content/service-hubs"
import type { RelatedLinkItem } from "@/components/location/related-links"

export type AirportSlug =
  | "athensAirport"
  | "thessalonikiAirport"
  | "heraklionAirport"
  | "chaniaAirport"
  | "rhodesAirport"
  | "corfuAirport"
  | "santoriniAirport"
  | "mykonosAirport"

export type LinkSection = { eyebrow: string; title: string; items: Omit<RelatedLinkItem, "icon">[] }
export type StepsSection = { eyebrow: string; title: string; steps: { title: string; description: string }[] }
export type ProseSection = { eyebrow: string; title: string; paragraphs: string[] }

export type AirportPageContent = {
  meta: { title: string; description: string }
  breadcrumbLabel: string
  hero: HeroContent
  officialName: string
  iataCode: string
  overview: ProseSection
  transferService: IconTextSection
  destinations: LinkSection
  connections: LinkSection
  hotelTransfers?: LinkSection
  howPickupWorks: StepsSection
  travelPlanning: IconTextSection
  vehicleConsiderations: IconTextSection
  relatedServices: LinkSection
  faq: { eyebrow: string; title: string; items: { question: string; answer: string }[] }
  cta: { heading: string; description: string; primaryLabel: string; secondaryLabel: string }
}

export const airportImages: Record<AirportSlug, { src: string; alt: Record<Locale, string> }> = {
  athensAirport: {
    src: "/airports/athens.webp",
    alt: {
      en: "Terminal building at Athens International Airport, Greece",
      el: "Κτίριο τερματικού σταθμού στο Διεθνές Αεροδρόμιο Αθηνών, Ελλάδα",
    },
  },
  thessalonikiAirport: {
    src: "/airports/thessaloniki.webp",
    alt: {
      en: "Terminal entrance at Thessaloniki Airport Makedonia, Greece",
      el: "Είσοδος τερματικού σταθμού στο Αεροδρόμιο Μακεδονία Θεσσαλονίκης, Ελλάδα",
    },
  },
  heraklionAirport: {
    src: "/airports/heraklion.webp",
    alt: {
      en: "Aircraft on the tarmac at Heraklion Airport, Crete, Greece",
      el: "Αεροσκάφος στον διάδρομο του Αεροδρομίου Ηρακλείου, Κρήτη, Ελλάδα",
    },
  },
  chaniaAirport: {
    src: "/airports/chania.webp",
    alt: {
      en: "Chania Airport terminal at dusk, Crete, Greece",
      el: "Τερματικός σταθμός του Αεροδρομίου Χανίων το σούρουπο, Κρήτη, Ελλάδα",
    },
  },
  rhodesAirport: {
    src: "/airports/rhodes.webp",
    alt: {
      en: "Rhodes International Airport Diagoras terminal building, Greece",
      el: "Κτίριο τερματικού σταθμού του Διεθνούς Αεροδρομίου Διαγόρας Ρόδου, Ελλάδα",
    },
  },
  corfuAirport: {
    src: "/airports/corfu.webp",
    alt: {
      en: "Aircraft approaching Corfu Airport over the Ionian Sea, Greece",
      el: "Αεροσκάφος πλησιάζει στο Αεροδρόμιο Κέρκυρας πάνω από το Ιόνιο Πέλαγος, Ελλάδα",
    },
  },
  santoriniAirport: {
    src: "/airports/santorini.webp",
    alt: {
      en: "Aircraft departing Santorini Airport along the island coastline, Greece",
      el: "Αεροσκάφος απογειώνεται από το Αεροδρόμιο Σαντορίνης κατά μήκος της ακτογραμμής του νησιού, Ελλάδα",
    },
  },
  mykonosAirport: {
    src: "/airports/mykonos.webp",
    alt: {
      en: "Terminal entrance at Mykonos Airport, Greece",
      el: "Είσοδος τερματικού σταθμού στο Αεροδρόμιο Μυκόνου, Ελλάδα",
    },
  },
}

const sharedHowItWorksEn = {
  eyebrow: "How Pickup Works",
  title: "How Airport Pickup Works",
  steps: [
    { title: "Share Your Flight Details", description: "Tell us your flight number and arrival time when requesting your quote." },
    { title: "Confirm Your Transfer", description: "We confirm a vehicle suited to your passenger numbers and luggage." },
    { title: "Meet Your Driver", description: "Your driver meets you at an agreed point in or near the arrivals area." },
    { title: "Travel Directly", description: "Head straight to your destination without queuing for a taxi or public transport." },
  ],
}
const sharedHowItWorksEl = {
  eyebrow: "Πώς Λειτουργεί η Παραλαβή",
  title: "Πώς Λειτουργεί η Παραλαβή από το Αεροδρόμιο",
  steps: [
    { title: "Στείλτε τα Στοιχεία της Πτήσης σας", description: "Πείτε μας τον αριθμό πτήσης και την ώρα άφιξης κατά την αίτηση προσφοράς." },
    { title: "Επιβεβαιώστε τη Μεταφορά σας", description: "Επιβεβαιώνουμε όχημα κατάλληλο για τον αριθμό επιβατών και τις αποσκευές σας." },
    { title: "Συναντήστε τον Οδηγό σας", description: "Ο οδηγός σας θα σας συναντήσει σε συμφωνημένο σημείο μέσα ή κοντά στην περιοχή αφίξεων." },
    { title: "Ταξιδέψτε Απευθείας", description: "Κατευθυνθείτε απευθείας στον προορισμό σας χωρίς ουρά για ταξί ή μέσα μαζικής μεταφοράς." },
  ],
}

const sharedVehicleEn: IconTextSection = {
  eyebrow: "Vehicles & Passengers",
  title: "Vehicle & Passenger Considerations",
  items: [
    { title: "Matched to Your Group", description: "Vehicle selection depends on your passenger numbers and the amount of luggage you're travelling with." },
    { title: "Families & Groups", description: "Larger parties can be accommodated — mention your total numbers when requesting a quote." },
    { title: "Luggage", description: "Let us know your approximate luggage count so a suitably sized vehicle can be arranged." },
    { title: "Flight Delays", description: "If your flight is delayed, let us know as soon as you're aware so pickup can be adjusted where possible." },
  ],
}
const sharedVehicleEl: IconTextSection = {
  eyebrow: "Οχήματα & Επιβάτες",
  title: "Θέματα Οχήματος & Επιβατών",
  items: [
    { title: "Προσαρμοσμένο στην Ομάδα σας", description: "Η επιλογή οχήματος εξαρτάται από τον αριθμό επιβατών και τις αποσκευές με τις οποίες ταξιδεύετε." },
    { title: "Οικογένειες & Ομάδες", description: "Μπορούν να εξυπηρετηθούν μεγαλύτερες παρέες — αναφέρετε τον συνολικό αριθμό σας κατά την αίτηση προσφοράς." },
    { title: "Αποσκευές", description: "Ενημερώστε μας για τον κατά προσέγγιση αριθμό αποσκευών ώστε να οριστεί κατάλληλο όχημα." },
    { title: "Καθυστέρηση Πτήσης", description: "Αν η πτήση σας καθυστερήσει, ενημερώστε μας μόλις το μάθετε ώστε η παραλαβή να προσαρμοστεί όπου είναι δυνατόν." },
  ],
}

export const airportContent: Record<AirportSlug, Record<Locale, AirportPageContent>> = {
  athensAirport: {
    en: {
      meta: {
        title: "Private Athens Airport Transfers – Taxi & Chauffeur Service",
        description:
          "Book a private transfer from Athens International Airport to central Athens, Piraeus or onward destinations across Greece. Request a quote for your journey.",
      },
      breadcrumbLabel: "Athens Airport",
      officialName: "Athens International Airport “Eleftherios Venizelos”",
      iataCode: "ATH",
      hero: {
        eyebrow: "Athens Airport (ATH)",
        title: "Private Athens Airport Transfers",
        description:
          "Book a private transfer from Athens International Airport to your hotel, the city centre, Piraeus or destinations across mainland Greece.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "About Athens International Airport",
        paragraphs: [
          "Athens International Airport “Eleftherios Venizelos” (ATH) is Greece's main international gateway, located in Spata in the Attica region, to the east of central Athens. It is the busiest airport in the country and the typical arrival point for travellers connecting onward to the Greek islands, the Peloponnese and other mainland destinations.",
          "Because of its location outside the city centre, most visitors arrange transportation in advance rather than relying on options found on arrival. A private transfer connects the airport directly with central Athens, the port of Piraeus, and cities and destinations further afield.",
        ],
      },
      transferService: {
        eyebrow: "What's Included",
        title: "Private Athens Airport Transfer",
        items: [
          { title: "Door-to-Door Service", description: "Travel directly from the airport to your exact hotel, address or destination." },
          { title: "Pre-Arranged Pickup", description: "Your pickup is organised in advance around your flight details." },
          { title: "One Way or Round Trip", description: "Book a single airport transfer or arrange your return journey together." },
          { title: "Private, Not Shared", description: "Your vehicle is booked exclusively for you and your group." },
        ],
      },
      destinations: {
        eyebrow: "Onward Travel",
        title: "Popular Destinations From Athens Airport",
        items: [
          { label: "Athens Riviera", href: "/destination/athens-riviera/", description: "Continue directly from the airport to the coastal strip southeast of Athens, including Glyfada and Vouliagmeni." },
          { label: "Cape Sounion", href: "/route/athens-to-cape-sounion/", description: "Travel from the airport to the Temple of Poseidon on the southern tip of Attica." },
          { label: "Nafplio", href: "/route/athens-airport-to-nafplio/", description: "A private transfer to the Peloponnese's popular waterfront town, bypassing central Athens." },
          { label: "Corinth", href: "/route/athens-airport-to-corinth/", description: "A shorter transfer to Corinth and the Corinth Canal, direct from the airport." },
          { label: "Delphi", href: "/route/athens-airport-to-delphi/", description: "Continue directly from the airport to the archaeological site of Delphi in central Greece." },
          { label: "Loutraki", href: "/route/athens-airport-to-loutraki/", description: "A transfer to the spa and casino town of Loutraki, near Corinth." },
          { label: "Meteora", href: "/destination/meteora/", description: "Travel from the airport to the rock-pillar monasteries of Meteora in Thessaly." },
        ],
      },
      connections: {
        eyebrow: "City & Port Connections",
        title: "Airport, City and Port Connections",
        items: [
          { label: "Central Athens", href: "/athens/", description: "Direct transfers between the airport and hotels or addresses across the city." },
          { label: "Athens Airport to Piraeus Port", href: "/route/athens-airport-to-piraeus-port/", description: "A dedicated route page for cruise and ferry connections between the airport and Piraeus." },
          { label: "Rafina Port", href: "/port/rafina/", description: "A transfer option for travellers connecting to Cycladic ferries departing from Rafina." },
        ],
      },
      hotelTransfers: {
        eyebrow: "Hotel Transfers",
        title: "Popular Athens Hotel Transfers",
        items: [
          { label: "Hotel Grande Bretagne", href: "/route/athens-airport-to-hotel-grande-bretagne/", description: "Syntagma Square, central Athens." },
          { label: "King George Hotel", href: "/route/athens-airport-to-king-george-hotel/", description: "Syntagma Square, central Athens." },
          { label: "Electra Palace Athens", href: "/route/athens-airport-to-electra-palace-athens/", description: "Plaka, beneath the Acropolis." },
          { label: "NJV Athens Plaza", href: "/route/athens-airport-to-njv-athens-plaza/", description: "Syntagma Square, central Athens." },
          { label: "Grand Hyatt Athens", href: "/route/athens-airport-to-grand-hyatt-athens/", description: "Syngrou Avenue." },
          { label: "Athenaeum InterContinental Athens", href: "/route/athens-airport-to-athenaeum-intercontinental/", description: "Syngrou Avenue." },
          { label: "Divani Caravel", href: "/route/athens-airport-to-divani-caravel/", description: "Near the Megaron and Hilton area." },
        ],
      },
      howPickupWorks: sharedHowItWorksEn,
      travelPlanning: {
        eyebrow: "Travel Planning",
        title: "Planning Your Airport Transfer",
        items: [
          { title: "Advance Booking", description: "Booking ahead is recommended, particularly during the busy summer travel season." },
          { title: "Flight Number", description: "Share your flight number so your pickup can be planned around your actual arrival time." },
          { title: "Meeting Point", description: "Exact meeting point instructions are confirmed with your booking rather than published generally." },
          { title: "Onward Connections", description: "If you're connecting to a flight, ferry or another city, mention this when requesting your quote." },
        ],
      },
      vehicleConsiderations: sharedVehicleEn,
      relatedServices: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Airport Transfers", href: "/airport-transfers/", description: "See our general airport transfer service covering airports across Greece." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Travelling as a larger family or group from the airport? See our group transfer service." },
          { label: "Corporate Transfers", href: "/corporate-transfers/", description: "Arriving ahead of a business meeting? See our professional corporate transfer service." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Where is Athens Airport located?", answer: "Athens International Airport is located in Spata, in the Attica region, east of central Athens." },
          { question: "Can I book a private transfer from Athens Airport to my hotel?", answer: "Yes, airport-to-hotel transfers are one of our most common requests for Athens Airport." },
          { question: "Can I travel from Athens Airport directly to Piraeus Port?", answer: "Yes, direct transfers between the airport and Piraeus can be arranged, useful for cruise connections." },
          { question: "Can I book a long-distance transfer from the airport, such as to Delphi or Nafplio?", answer: "Yes, private long-distance transfers from Athens Airport to destinations such as Delphi, Nafplio or Meteora can be requested through the quote form." },
          { question: "What information do I need to provide when booking?", answer: "Your flight number, arrival time, destination, and passenger and luggage numbers." },
          { question: "What happens if my flight is delayed?", answer: "Let us know as soon as you're aware of a delay so pickup arrangements can be adjusted where possible." },
          { question: "Can you arrange a transfer for a group arriving on the same flight?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Athens Airport Transfer?",
        description: "Tell us your flight details, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές Αεροδρομίου Αθηνών – Ταξί & Σοφέρ",
        description:
          "Κλείστε ιδιωτική μεταφορά από το Διεθνές Αεροδρόμιο Αθηνών προς το κέντρο, τον Πειραιά ή προορισμούς σε όλη την Ελλάδα. Ζητήστε προσφορά για το ταξίδι σας.",
      },
      breadcrumbLabel: "Αεροδρόμιο Αθηνών",
      officialName: "Διεθνές Αεροδρόμιο Αθηνών «Ελευθέριος Βενιζέλος»",
      iataCode: "ATH",
      hero: {
        eyebrow: "Αεροδρόμιο Αθηνών (ATH)",
        title: "Ιδιωτικές Μεταφορές Αεροδρομίου Αθηνών",
        description:
          "Κλείστε ιδιωτική μεταφορά από το Διεθνές Αεροδρόμιο Αθηνών προς το ξενοδοχείο σας, το κέντρο της πόλης, τον Πειραιά ή προορισμούς σε όλη την ηπειρωτική Ελλάδα.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Σχετικά με το Διεθνές Αεροδρόμιο Αθηνών",
        paragraphs: [
          "Το Διεθνές Αεροδρόμιο Αθηνών «Ελευθέριος Βενιζέλος» (ATH) είναι η κύρια διεθνής πύλη εισόδου της Ελλάδας, βρίσκεται στα Σπάτα, στην περιφέρεια Αττικής, ανατολικά του κέντρου της Αθήνας. Είναι το πολυσύχναστο αεροδρόμιο της χώρας και το συνηθισμένο σημείο άφιξης για ταξιδιώτες που συνδέονται με τα ελληνικά νησιά, την Πελοπόννησο και άλλους προορισμούς της ηπειρωτικής χώρας.",
          "Λόγω της τοποθεσίας του εκτός του κέντρου της πόλης, οι περισσότεροι επισκέπτες οργανώνουν τη μεταφορά τους εκ των προτέρων αντί να βασίζονται σε επιλογές που βρίσκουν κατά την άφιξη. Μια ιδιωτική μεταφορά συνδέει το αεροδρόμιο απευθείας με το κέντρο της Αθήνας, το λιμάνι του Πειραιά, και πόλεις και προορισμούς πιο μακριά.",
        ],
      },
      transferService: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Ιδιωτική Μεταφορά Αεροδρομίου Αθηνών",
        items: [
          { title: "Υπηρεσία Από Πόρτα σε Πόρτα", description: "Ταξιδέψτε απευθείας από το αεροδρόμιο στο ακριβές ξενοδοχείο, τη διεύθυνση ή τον προορισμό σας." },
          { title: "Προκαθορισμένη Παραλαβή", description: "Η παραλαβή σας οργανώνεται εκ των προτέρων σύμφωνα με τα στοιχεία της πτήσης σας." },
          { title: "Μονή Διαδρομή ή Μετ' Επιστροφής", description: "Κλείστε μία μόνο μεταφορά αεροδρομίου ή οργανώστε μαζί και την επιστροφή σας." },
          { title: "Ιδιωτικό, Όχι Κοινόχρηστο", description: "Το όχημά σας κλείνεται αποκλειστικά για εσάς και την ομάδα σας." },
        ],
      },
      destinations: {
        eyebrow: "Συνέχεια Ταξιδιού",
        title: "Δημοφιλείς Προορισμοί από το Αεροδρόμιο Αθηνών",
        items: [
          { label: "Παραλιακή Αθήνας", href: "/el/proorismos/paralia-athinas/", description: "Συνεχίστε απευθείας από το αεροδρόμιο προς την παράκτια ζώνη νοτιοανατολικά της Αθήνας, με τη Γλυφάδα και τη Βουλιαγμένη." },
          { label: "Σούνιο", href: "/el/diadromi/athina-sounio/", description: "Ταξιδέψτε από το αεροδρόμιο προς τον Ναό του Ποσειδώνα στο νότιο άκρο της Αττικής." },
          { label: "Ναύπλιο", href: "/el/diadromi/aerodromio-athinas-nafplio/", description: "Ιδιωτική μεταφορά προς τη δημοφιλή παραθαλάσσια πόλη της Πελοποννήσου, παρακάμπτοντας το κέντρο της Αθήνας." },
          { label: "Κόρινθος", href: "/el/diadromi/aerodromio-athinas-korinthos/", description: "Μια συντομότερη μεταφορά προς την Κόρινθο και τη Διώρυγα, απευθείας από το αεροδρόμιο." },
          { label: "Δελφοί", href: "/el/diadromi/aerodromio-athinas-delfoi/", description: "Συνεχίστε απευθείας από το αεροδρόμιο προς τον αρχαιολογικό χώρο των Δελφών στην κεντρική Ελλάδα." },
          { label: "Λουτράκι", href: "/el/diadromi/aerodromio-athinas-loutraki/", description: "Μεταφορά προς την πόλη ιαματικών λουτρών και καζίνο του Λουτρακίου, κοντά στην Κόρινθο." },
          { label: "Μετέωρα", href: "/el/proorismos/meteora/", description: "Ταξιδέψτε από το αεροδρόμιο προς τα μοναστήρια πάνω σε βράχους των Μετεώρων στη Θεσσαλία." },
        ],
      },
      connections: {
        eyebrow: "Συνδέσεις Πόλης & Λιμανιού",
        title: "Συνδέσεις με Πόλη και Λιμάνια",
        items: [
          { label: "Κέντρο Αθήνας", href: "/el/athina/", description: "Απευθείας μεταφορές μεταξύ του αεροδρομίου και ξενοδοχείων ή διευθύνσεων σε όλη την πόλη." },
          { label: "Αεροδρόμιο Αθηνών προς Πειραιά", href: "/el/diadromi/aerodromio-athinas-peiraias/", description: "Ειδική σελίδα διαδρομής για συνδέσεις κρουαζιέρας και ferry μεταξύ αεροδρομίου και Πειραιά." },
          { label: "Λιμάνι Ραφήνας", href: "/el/limani/rafina/", description: "Μια επιλογή μεταφοράς για ταξιδιώτες που συνδέονται με ferry προς τις Κυκλάδες από τη Ραφήνα." },
        ],
      },
      hotelTransfers: {
        eyebrow: "Μεταφορές σε Ξενοδοχεία",
        title: "Δημοφιλείς Μεταφορές σε Ξενοδοχεία της Αθήνας",
        items: [
          { label: "Hotel Grande Bretagne", href: "/el/diadromi/aerodromio-athinas-grande-bretagne/", description: "Πλατεία Συντάγματος, κέντρο Αθήνας." },
          { label: "King George Hotel", href: "/el/diadromi/aerodromio-athinas-king-george/", description: "Πλατεία Συντάγματος, κέντρο Αθήνας." },
          { label: "Electra Palace Athens", href: "/el/diadromi/aerodromio-athinas-electra-palace/", description: "Πλάκα, στους πρόποδες της Ακρόπολης." },
          { label: "NJV Athens Plaza", href: "/el/diadromi/aerodromio-athinas-njv-plaza/", description: "Πλατεία Συντάγματος, κέντρο Αθήνας." },
          { label: "Grand Hyatt Athens", href: "/el/diadromi/aerodromio-athinas-grand-hyatt/", description: "Λεωφόρος Συγγρού." },
          { label: "Athenaeum InterContinental Athens", href: "/el/diadromi/aerodromio-athinas-intercontinental/", description: "Λεωφόρος Συγγρού." },
          { label: "Divani Caravel", href: "/el/diadromi/aerodromio-athinas-divani-caravel/", description: "Κοντά στο Μέγαρο Μουσικής και το Hilton." },
        ],
      },
      howPickupWorks: sharedHowItWorksEl,
      travelPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Σχεδιάστε τη Μεταφορά σας από το Αεροδρόμιο",
        items: [
          { title: "Έγκαιρη Κράτηση", description: "Συνιστάται η έγκαιρη κράτηση, ιδίως κατά τη διάρκεια της πολυάσχολης καλοκαιρινής περιόδου." },
          { title: "Αριθμός Πτήσης", description: "Δώστε μας τον αριθμό πτήσης σας ώστε η παραλαβή να σχεδιαστεί σύμφωνα με την πραγματική ώρα άφιξής σας." },
          { title: "Σημείο Συνάντησης", description: "Οι ακριβείς οδηγίες σημείου συνάντησης επιβεβαιώνονται με την κράτησή σας αντί να δημοσιεύονται γενικά." },
          { title: "Επόμενες Συνδέσεις", description: "Αν συνδέεστε με πτήση, ferry ή άλλη πόλη, αναφέρετέ το κατά την αίτηση προσφοράς." },
        ],
      },
      vehicleConsiderations: sharedVehicleEl,
      relatedServices: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Μεταφορές Αεροδρομίου", href: "/el/metafores-aerodromiou/", description: "Δείτε τη γενική μας υπηρεσία μεταφοράς αεροδρομίου που καλύπτει αεροδρόμια σε όλη την Ελλάδα." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ταξιδεύετε ως μεγαλύτερη οικογένεια ή ομάδα από το αεροδρόμιο; Δείτε την υπηρεσία ομαδικών μεταφορών μας." },
          { label: "Εταιρικές Μεταφορές", href: "/el/etairikes-metafores/", description: "Φτάνετε πριν από μια επαγγελματική συνάντηση; Δείτε την επαγγελματική μας υπηρεσία εταιρικών μεταφορών." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πού βρίσκεται το Αεροδρόμιο Αθηνών;", answer: "Το Διεθνές Αεροδρόμιο Αθηνών βρίσκεται στα Σπάτα, στην περιφέρεια Αττικής, ανατολικά του κέντρου της Αθήνας." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το Αεροδρόμιο Αθηνών προς το ξενοδοχείο μου;", answer: "Ναι, οι μεταφορές από το αεροδρόμιο προς το ξενοδοχείο είναι από τα πιο συνηθισμένα αιτήματά μας για το Αεροδρόμιο Αθηνών." },
          { question: "Μπορώ να ταξιδέψω από το Αεροδρόμιο Αθηνών απευθείας στο Λιμάνι του Πειραιά;", answer: "Ναι, μπορούν να οργανωθούν απευθείας μεταφορές μεταξύ του αεροδρομίου και του Πειραιά, χρήσιμες για συνδέσεις κρουαζιέρας." },
          { question: "Μπορώ να κλείσω μεταφορά μεγάλης απόστασης από το αεροδρόμιο, όπως προς τους Δελφούς ή το Ναύπλιο;", answer: "Ναι, ιδιωτικές μεταφορές μεγάλων αποστάσεων από το Αεροδρόμιο Αθηνών προς προορισμούς όπως οι Δελφοί, το Ναύπλιο ή τα Μετέωρα μπορούν να ζητηθούν μέσω της φόρμας προσφοράς." },
          { question: "Ποιες πληροφορίες χρειάζεται να δώσω κατά την κράτηση;", answer: "Τον αριθμό πτήσης, την ώρα άφιξης, τον προορισμό, και τον αριθμό επιβατών και αποσκευών." },
          { question: "Τι γίνεται αν η πτήση μου καθυστερήσει;", answer: "Ενημερώστε μας μόλις μάθετε για την καθυστέρηση ώστε η παραλαβή να προσαρμοστεί όπου είναι δυνατόν." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που φτάνει με την ίδια πτήση;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας από το Αεροδρόμιο Αθηνών;",
        description: "Πείτε μας τα στοιχεία της πτήσης, τον προορισμό και τον αριθμό επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  thessalonikiAirport: {
    en: {
      meta: {
        title: "Thessaloniki Airport Transfers – Private Taxi & Chauffeur",
        description:
          "Book a private transfer from Thessaloniki Airport Makedonia to the city centre or onward to Halkidiki. Request a quote for comfortable, direct travel.",
      },
      breadcrumbLabel: "Thessaloniki Airport",
      officialName: "Thessaloniki Airport “Makedonia”",
      iataCode: "SKG",
      hero: {
        eyebrow: "Thessaloniki Airport (SKG)",
        title: "Private Thessaloniki Airport Transfers",
        description:
          "Book a private transfer from Thessaloniki Airport Makedonia to your hotel, the city centre, or onward to Halkidiki.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "About Thessaloniki Airport",
        paragraphs: [
          "Thessaloniki Airport “Makedonia” (SKG) serves Greece's second-largest city and the wider Central Macedonia region. It sits on the coast southeast of the city centre, making it the main air gateway for northern Greece.",
          "The airport is also a common starting point for visitors heading onward to the Halkidiki peninsula, a popular coastal region east of Thessaloniki. A private transfer avoids relying on public transport connections after landing, especially useful with luggage or when travelling as a family or group.",
        ],
      },
      transferService: {
        eyebrow: "What's Included",
        title: "Private Thessaloniki Airport Transfer",
        items: [
          { title: "Door-to-Door Service", description: "Direct transfers between the airport and your hotel, address or destination." },
          { title: "Pre-Arranged Pickup", description: "Your pickup is organised around your flight details before you travel." },
          { title: "City or Onward Travel", description: "Transfers can be arranged into the city centre or onward to Halkidiki." },
          { title: "Private, Not Shared", description: "Your vehicle is booked exclusively for you and your group." },
        ],
      },
      destinations: {
        eyebrow: "Onward Travel",
        title: "Popular Destinations From Thessaloniki Airport",
        items: [
          { label: "Halkidiki", href: "/route/thessaloniki-to-halkidiki/", description: "Continue directly from the airport to the beaches of the Halkidiki peninsula." },
          { label: "Athens", href: "/route/athens-to-thessaloniki/", description: "A long-distance private transfer connecting Thessaloniki with the capital." },
        ],
      },
      connections: {
        eyebrow: "City & Port Connections",
        title: "Airport, City and Port Connections",
        items: [
          { label: "Thessaloniki City Centre", href: "/city/thessaloniki/", description: "Direct transfers between the airport and hotels or addresses across the city." },
          { label: "Port of Thessaloniki", href: "/port/thessaloniki/", description: "Connect between the airport and the city's port for cruise or ferry travel." },
        ],
      },
      howPickupWorks: sharedHowItWorksEn,
      travelPlanning: {
        eyebrow: "Travel Planning",
        title: "Planning Your Airport Transfer",
        items: [
          { title: "Advance Booking", description: "Booking ahead is recommended, particularly during the busy summer season." },
          { title: "Flight Number", description: "Share your flight number so pickup can be planned around your actual arrival." },
          { title: "Meeting Point", description: "Exact meeting point instructions are confirmed with your booking." },
          { title: "Onward Plans", description: "Mention if you're continuing to Halkidiki or another destination when requesting your quote." },
        ],
      },
      vehicleConsiderations: sharedVehicleEn,
      relatedServices: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Airport Transfers", href: "/airport-transfers/", description: "See our general airport transfer service covering airports across Greece." },
          { label: "City-to-City Transfers", href: "/city-transfers/", description: "Travelling onward to another Greek city? See our city-to-city transfer service." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Travelling as a larger group from the airport? See our group transfer service." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Where is Thessaloniki Airport located?", answer: "Thessaloniki Airport “Makedonia” is located on the coast southeast of the Thessaloniki city centre." },
          { question: "Can I book a private transfer from the airport to my hotel in Thessaloniki?", answer: "Yes, airport-to-hotel transfers are one of our most common requests for Thessaloniki Airport." },
          { question: "Can I travel from the airport directly to Halkidiki?", answer: "Yes, private transfers from the airport to Halkidiki can be requested through the quote form." },
          { question: "Can I book a long-distance transfer from Thessaloniki Airport to Athens?", answer: "Yes, this is a long-distance private transfer that can be arranged — describe your journey when requesting a quote." },
          { question: "What information do I need to provide when booking?", answer: "Your flight number, arrival time, destination, and passenger and luggage numbers." },
          { question: "Can you arrange a transfer for a family or group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Thessaloniki Airport Transfer?",
        description: "Tell us your flight details, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορές Αεροδρομίου Θεσσαλονίκης – Ιδιωτικό Ταξί & Σοφέρ",
        description:
          "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Μακεδονία Θεσσαλονίκης προς το κέντρο ή τη Χαλκιδική. Ζητήστε προσφορά για άνετο, απευθείας ταξίδι.",
      },
      breadcrumbLabel: "Αεροδρόμιο Θεσσαλονίκης",
      officialName: "Αεροδρόμιο Θεσσαλονίκης «Μακεδονία»",
      iataCode: "SKG",
      hero: {
        eyebrow: "Αεροδρόμιο Θεσσαλονίκης (SKG)",
        title: "Ιδιωτικές Μεταφορές Αεροδρομίου Θεσσαλονίκης",
        description:
          "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Μακεδονία Θεσσαλονίκης προς το ξενοδοχείο σας, το κέντρο της πόλης, ή τη Χαλκιδική.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Σχετικά με το Αεροδρόμιο Θεσσαλονίκης",
        paragraphs: [
          "Το Αεροδρόμιο Θεσσαλονίκης «Μακεδονία» (SKG) εξυπηρετεί τη δεύτερη μεγαλύτερη πόλη της Ελλάδας και την ευρύτερη περιφέρεια Κεντρικής Μακεδονίας. Βρίσκεται στην ακτή, νοτιοανατολικά του κέντρου της πόλης, καθιστώντας το κύρια αεροπορική πύλη για τη βόρεια Ελλάδα.",
          "Το αεροδρόμιο αποτελεί επίσης συνηθισμένο σημείο εκκίνησης για επισκέπτες που κατευθύνονται προς τη χερσόνησο της Χαλκιδικής, μια δημοφιλή παράκτια περιοχή ανατολικά της Θεσσαλονίκης. Μια ιδιωτική μεταφορά αποφεύγει την εξάρτηση από συνδέσεις μέσων μαζικής μεταφοράς μετά την προσγείωση, ιδιαίτερα χρήσιμη με αποσκευές ή όταν ταξιδεύετε ως οικογένεια ή ομάδα.",
        ],
      },
      transferService: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Ιδιωτική Μεταφορά Αεροδρομίου Θεσσαλονίκης",
        items: [
          { title: "Υπηρεσία Από Πόρτα σε Πόρτα", description: "Απευθείας μεταφορές μεταξύ του αεροδρομίου και του ξενοδοχείου, της διεύθυνσης ή του προορισμού σας." },
          { title: "Προκαθορισμένη Παραλαβή", description: "Η παραλαβή σας οργανώνεται σύμφωνα με τα στοιχεία της πτήσης σας πριν ταξιδέψετε." },
          { title: "Πόλη ή Συνέχεια Ταξιδιού", description: "Οι μεταφορές μπορούν να οργανωθούν προς το κέντρο της πόλης ή προς τη Χαλκιδική." },
          { title: "Ιδιωτικό, Όχι Κοινόχρηστο", description: "Το όχημά σας κλείνεται αποκλειστικά για εσάς και την ομάδα σας." },
        ],
      },
      destinations: {
        eyebrow: "Συνέχεια Ταξιδιού",
        title: "Δημοφιλείς Προορισμοί από το Αεροδρόμιο Θεσσαλονίκης",
        items: [
          { label: "Χαλκιδική", href: "/el/diadromi/thessaloniki-chalkidiki/", description: "Συνεχίστε απευθείας από το αεροδρόμιο προς τις παραλίες της χερσονήσου της Χαλκιδικής." },
          { label: "Αθήνα", href: "/el/diadromi/athina-thessaloniki/", description: "Μια ιδιωτική μεταφορά μεγάλης απόστασης που συνδέει τη Θεσσαλονίκη με την πρωτεύουσα." },
        ],
      },
      connections: {
        eyebrow: "Συνδέσεις Πόλης & Λιμανιού",
        title: "Συνδέσεις με Πόλη και Λιμάνι",
        items: [
          { label: "Κέντρο Θεσσαλονίκης", href: "/el/poli/thessaloniki/", description: "Απευθείας μεταφορές μεταξύ του αεροδρομίου και ξενοδοχείων ή διευθύνσεων σε όλη την πόλη." },
          { label: "Λιμάνι Θεσσαλονίκης", href: "/el/limani/thessaloniki/", description: "Συνδεθείτε μεταξύ του αεροδρομίου και του λιμανιού της πόλης για ταξίδι με κρουαζιέρα ή ferry." },
        ],
      },
      howPickupWorks: sharedHowItWorksEl,
      travelPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Σχεδιάστε τη Μεταφορά σας από το Αεροδρόμιο",
        items: [
          { title: "Έγκαιρη Κράτηση", description: "Συνιστάται η έγκαιρη κράτηση, ιδίως κατά τη διάρκεια της πολυάσχολης καλοκαιρινής περιόδου." },
          { title: "Αριθμός Πτήσης", description: "Δώστε μας τον αριθμό πτήσης σας ώστε η παραλαβή να σχεδιαστεί σύμφωνα με την πραγματική άφιξή σας." },
          { title: "Σημείο Συνάντησης", description: "Οι ακριβείς οδηγίες σημείου συνάντησης επιβεβαιώνονται με την κράτησή σας." },
          { title: "Επόμενα Σχέδια", description: "Αναφέρετε αν συνεχίζετε προς τη Χαλκιδική ή άλλο προορισμό κατά την αίτηση προσφοράς." },
        ],
      },
      vehicleConsiderations: sharedVehicleEl,
      relatedServices: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Μεταφορές Αεροδρομίου", href: "/el/metafores-aerodromiou/", description: "Δείτε τη γενική μας υπηρεσία μεταφοράς αεροδρομίου που καλύπτει αεροδρόμια σε όλη την Ελλάδα." },
          { label: "Μεταφορές Μεταξύ Πόλεων", href: "/el/metafores-metaxy-poleon/", description: "Συνεχίζετε προς άλλη ελληνική πόλη; Δείτε την υπηρεσία μεταφοράς μεταξύ πόλεων μας." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ταξιδεύετε ως μεγαλύτερη ομάδα από το αεροδρόμιο; Δείτε την υπηρεσία ομαδικών μεταφορών μας." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πού βρίσκεται το Αεροδρόμιο Θεσσαλονίκης;", answer: "Το Αεροδρόμιο Θεσσαλονίκης «Μακεδονία» βρίσκεται στην ακτή, νοτιοανατολικά του κέντρου της Θεσσαλονίκης." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το αεροδρόμιο προς το ξενοδοχείο μου στη Θεσσαλονίκη;", answer: "Ναι, οι μεταφορές από το αεροδρόμιο προς το ξενοδοχείο είναι από τα πιο συνηθισμένα αιτήματά μας για το Αεροδρόμιο Θεσσαλονίκης." },
          { question: "Μπορώ να ταξιδέψω από το αεροδρόμιο απευθείας προς τη Χαλκιδική;", answer: "Ναι, ιδιωτικές μεταφορές από το αεροδρόμιο προς τη Χαλκιδική μπορούν να ζητηθούν μέσω της φόρμας προσφοράς." },
          { question: "Μπορώ να κλείσω μεταφορά μεγάλης απόστασης από το Αεροδρόμιο Θεσσαλονίκης προς την Αθήνα;", answer: "Ναι, πρόκειται για ιδιωτική μεταφορά μεγάλης απόστασης που μπορεί να οργανωθεί — περιγράψτε το ταξίδι σας κατά την αίτηση προσφοράς." },
          { question: "Ποιες πληροφορίες χρειάζεται να δώσω κατά την κράτηση;", answer: "Τον αριθμό πτήσης, την ώρα άφιξης, τον προορισμό, και τον αριθμό επιβατών και αποσκευών." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για οικογένεια ή ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας από το Αεροδρόμιο Θεσσαλονίκης;",
        description: "Πείτε μας τα στοιχεία της πτήσης, τον προορισμό και τον αριθμό επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  heraklionAirport: {
    en: {
      meta: {
        title: "Heraklion Airport Transfers – Private Crete Taxi Service",
        description:
          "Book a private transfer from Heraklion International Airport to your hotel in Crete or onward to Chania. Request a quote for direct, comfortable travel.",
      },
      breadcrumbLabel: "Heraklion Airport",
      officialName: "Heraklion International Airport “Nikos Kazantzakis”",
      iataCode: "HER",
      hero: {
        eyebrow: "Heraklion Airport (HER)",
        title: "Private Heraklion Airport Transfers",
        description:
          "Book a private transfer from Heraklion International Airport to your hotel on Crete's north coast, or onward to Chania.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "About Heraklion International Airport",
        paragraphs: [
          "Heraklion International Airport “Nikos Kazantzakis” (HER) is Crete's main air gateway, located a short distance east of Heraklion city on the island's north coast. It handles both international and domestic flights, serving visitors heading to Heraklion itself and to resort areas along the north coast.",
          "The airport sits close to Heraklion's port, which connects the island with Piraeus by ferry, and within driving distance of Chania to the west. A private transfer connects the airport directly with your accommodation without relying on public transport connections after landing.",
        ],
      },
      transferService: {
        eyebrow: "What's Included",
        title: "Private Heraklion Airport Transfer",
        items: [
          { title: "Door-to-Door Service", description: "Direct transfers from the airport to your hotel or address on Crete." },
          { title: "Pre-Arranged Pickup", description: "Your pickup is organised around your flight details before you travel." },
          { title: "North Coast Coverage", description: "Transfers can be arranged to resort areas along Crete's north coast." },
          { title: "Private, Not Shared", description: "Your vehicle is booked exclusively for you and your group." },
        ],
      },
      destinations: {
        eyebrow: "Onward Travel",
        title: "Popular Destinations From Heraklion Airport",
        items: [
          { label: "Chania", href: "/route/heraklion-to-chania/", description: "A private transfer along Crete's north coast to the city of Chania." },
          { label: "Explore Crete", href: "/region/crete/", description: "See our regional overview of transportation across Crete." },
        ],
      },
      connections: {
        eyebrow: "City & Port Connections",
        title: "Airport and Port Connections",
        items: [
          { label: "Heraklion Port", href: "/port/heraklion/", description: "Connect between the airport and Heraklion's port for ferry travel to Piraeus." },
          { label: "Chania Airport", href: "/airport/chania-airport/", description: "An alternative airport serving western Crete, connected by the north coast highway." },
        ],
      },
      howPickupWorks: sharedHowItWorksEn,
      travelPlanning: {
        eyebrow: "Travel Planning",
        title: "Planning Your Airport Transfer",
        items: [
          { title: "Advance Booking", description: "Booking ahead is recommended, particularly during the busy summer season." },
          { title: "Flight Number", description: "Share your flight number so pickup can be planned around your actual arrival." },
          { title: "Meeting Point", description: "Exact meeting point instructions are confirmed with your booking." },
          { title: "Onward Plans", description: "Mention if you're continuing to Chania or another part of Crete when requesting your quote." },
        ],
      },
      vehicleConsiderations: sharedVehicleEn,
      relatedServices: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Airport Transfers", href: "/airport-transfers/", description: "See our general airport transfer service covering airports across Greece." },
          { label: "Private Transfers", href: "/private-transfers/", description: "Need a custom route on Crete? Our private transfer service covers any destination." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Travelling as a larger group from the airport? See our group transfer service." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Where is Heraklion Airport located?", answer: "Heraklion International Airport is located a short distance east of Heraklion city, on Crete's north coast." },
          { question: "Can I book a private transfer from the airport to my hotel in Crete?", answer: "Yes, airport-to-hotel transfers are one of our most common requests for Heraklion Airport." },
          { question: "Can I travel from Heraklion Airport directly to Chania?", answer: "Yes, this route runs along Crete's north coast — describe your journey when requesting a quote." },
          { question: "Can I arrange a transfer from the airport to Heraklion Port?", answer: "Yes, airport-to-port transfers can be arranged, useful for ferry connections to Piraeus." },
          { question: "What information do I need to provide when booking?", answer: "Your flight number, arrival time, destination, and passenger and luggage numbers." },
          { question: "Can you arrange a transfer for a family or group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Heraklion Airport Transfer?",
        description: "Tell us your flight details, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορές Αεροδρομίου Ηρακλείου – Ιδιωτικό Ταξί στην Κρήτη",
        description:
          "Κλείστε ιδιωτική μεταφορά από το Διεθνές Αεροδρόμιο Ηρακλείου προς το ξενοδοχείο σας στην Κρήτη ή προς τα Χανιά. Ζητήστε προσφορά για απευθείας ταξίδι.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου",
      officialName: "Διεθνές Αεροδρόμιο Ηρακλείου «Νίκος Καζαντζάκης»",
      iataCode: "HER",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου (HER)",
        title: "Ιδιωτικές Μεταφορές Αεροδρομίου Ηρακλείου",
        description:
          "Κλείστε ιδιωτική μεταφορά από το Διεθνές Αεροδρόμιο Ηρακλείου προς το ξενοδοχείο σας στη βόρεια ακτή της Κρήτης, ή προς τα Χανιά.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Σχετικά με το Διεθνές Αεροδρόμιο Ηρακλείου",
        paragraphs: [
          "Το Διεθνές Αεροδρόμιο Ηρακλείου «Νίκος Καζαντζάκης» (HER) είναι η κύρια αεροπορική πύλη της Κρήτης, βρίσκεται σε μικρή απόσταση ανατολικά της πόλης του Ηρακλείου, στη βόρεια ακτή του νησιού. Εξυπηρετεί τόσο διεθνείς όσο και εσωτερικές πτήσεις, καλύπτοντας επισκέπτες που κατευθύνονται προς το Ηράκλειο και προς περιοχές θερέτρων κατά μήκος της βόρειας ακτής.",
          "Το αεροδρόμιο βρίσκεται κοντά στο λιμάνι του Ηρακλείου, το οποίο συνδέει το νησί με τον Πειραιά μέσω ferry, και σε οδική απόσταση από τα Χανιά προς τα δυτικά. Μια ιδιωτική μεταφορά συνδέει το αεροδρόμιο απευθείας με το κατάλυμά σας χωρίς να εξαρτάστε από συνδέσεις μέσων μαζικής μεταφοράς μετά την προσγείωση.",
        ],
      },
      transferService: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Ιδιωτική Μεταφορά Αεροδρομίου Ηρακλείου",
        items: [
          { title: "Υπηρεσία Από Πόρτα σε Πόρτα", description: "Απευθείας μεταφορές από το αεροδρόμιο προς το ξενοδοχείο ή τη διεύθυνσή σας στην Κρήτη." },
          { title: "Προκαθορισμένη Παραλαβή", description: "Η παραλαβή σας οργανώνεται σύμφωνα με τα στοιχεία της πτήσης σας πριν ταξιδέψετε." },
          { title: "Κάλυψη Βόρειας Ακτής", description: "Οι μεταφορές μπορούν να οργανωθούν προς περιοχές θερέτρων κατά μήκος της βόρειας ακτής της Κρήτης." },
          { title: "Ιδιωτικό, Όχι Κοινόχρηστο", description: "Το όχημά σας κλείνεται αποκλειστικά για εσάς και την ομάδα σας." },
        ],
      },
      destinations: {
        eyebrow: "Συνέχεια Ταξιδιού",
        title: "Δημοφιλείς Προορισμοί από το Αεροδρόμιο Ηρακλείου",
        items: [
          { label: "Χανιά", href: "/el/diadromi/irakleio-chania/", description: "Ιδιωτική μεταφορά κατά μήκος της βόρειας ακτής της Κρήτης προς την πόλη των Χανίων." },
          { label: "Εξερευνήστε την Κρήτη", href: "/el/periochi/kriti/", description: "Δείτε τη γενική μας επισκόπηση μεταφορών σε όλη την Κρήτη." },
        ],
      },
      connections: {
        eyebrow: "Συνδέσεις Πόλης & Λιμανιού",
        title: "Συνδέσεις με Λιμάνι και Αεροδρόμιο",
        items: [
          { label: "Λιμάνι Ηρακλείου", href: "/el/limani/irakleio/", description: "Συνδεθείτε μεταξύ του αεροδρομίου και του λιμανιού του Ηρακλείου για ταξίδι με ferry προς τον Πειραιά." },
          { label: "Αεροδρόμιο Χανίων", href: "/el/aerodromio/chania/", description: "Ένα εναλλακτικό αεροδρόμιο που εξυπηρετεί τη δυτική Κρήτη, συνδεδεμένο μέσω του βόρειου οδικού άξονα." },
        ],
      },
      howPickupWorks: sharedHowItWorksEl,
      travelPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Σχεδιάστε τη Μεταφορά σας από το Αεροδρόμιο",
        items: [
          { title: "Έγκαιρη Κράτηση", description: "Συνιστάται η έγκαιρη κράτηση, ιδίως κατά τη διάρκεια της πολυάσχολης καλοκαιρινής περιόδου." },
          { title: "Αριθμός Πτήσης", description: "Δώστε μας τον αριθμό πτήσης σας ώστε η παραλαβή να σχεδιαστεί σύμφωνα με την πραγματική άφιξή σας." },
          { title: "Σημείο Συνάντησης", description: "Οι ακριβείς οδηγίες σημείου συνάντησης επιβεβαιώνονται με την κράτησή σας." },
          { title: "Επόμενα Σχέδια", description: "Αναφέρετε αν συνεχίζετε προς τα Χανιά ή άλλο μέρος της Κρήτης κατά την αίτηση προσφοράς." },
        ],
      },
      vehicleConsiderations: sharedVehicleEl,
      relatedServices: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Μεταφορές Αεροδρομίου", href: "/el/metafores-aerodromiou/", description: "Δείτε τη γενική μας υπηρεσία μεταφοράς αεροδρομίου που καλύπτει αεροδρόμια σε όλη την Ελλάδα." },
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Χρειάζεστε προσαρμοσμένη διαδρομή στην Κρήτη; Η υπηρεσία ιδιωτικών μεταφορών μας καλύπτει οποιονδήποτε προορισμό." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ταξιδεύετε ως μεγαλύτερη ομάδα από το αεροδρόμιο; Δείτε την υπηρεσία ομαδικών μεταφορών μας." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πού βρίσκεται το Αεροδρόμιο Ηρακλείου;", answer: "Το Διεθνές Αεροδρόμιο Ηρακλείου βρίσκεται σε μικρή απόσταση ανατολικά της πόλης του Ηρακλείου, στη βόρεια ακτή της Κρήτης." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το αεροδρόμιο προς το ξενοδοχείο μου στην Κρήτη;", answer: "Ναι, οι μεταφορές από το αεροδρόμιο προς το ξενοδοχείο είναι από τα πιο συνηθισμένα αιτήματά μας για το Αεροδρόμιο Ηρακλείου." },
          { question: "Μπορώ να ταξιδέψω από το Αεροδρόμιο Ηρακλείου απευθείας προς τα Χανιά;", answer: "Ναι, αυτή η διαδρομή διέρχεται από τη βόρεια ακτή της Κρήτης — περιγράψτε το ταξίδι σας κατά την αίτηση προσφοράς." },
          { question: "Μπορώ να οργανώσω μεταφορά από το αεροδρόμιο προς το Λιμάνι Ηρακλείου;", answer: "Ναι, μπορούν να οργανωθούν μεταφορές αεροδρομίου προς λιμάνι, χρήσιμες για συνδέσεις ferry προς τον Πειραιά." },
          { question: "Ποιες πληροφορίες χρειάζεται να δώσω κατά την κράτηση;", answer: "Τον αριθμό πτήσης, την ώρα άφιξης, τον προορισμό, και τον αριθμό επιβατών και αποσκευών." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για οικογένεια ή ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας από το Αεροδρόμιο Ηρακλείου;",
        description: "Πείτε μας τα στοιχεία της πτήσης, τον προορισμό και τον αριθμό επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  chaniaAirport: {
    en: {
      meta: {
        title: "Chania Airport Transfers – Private Taxi in Western Crete",
        description:
          "Book a private transfer from Chania International Airport to your hotel in western Crete or onward to Heraklion. Request a quote for your journey.",
      },
      breadcrumbLabel: "Chania Airport",
      officialName: "Chania International Airport “Ioannis Daskalogiannis”",
      iataCode: "CHQ",
      hero: {
        eyebrow: "Chania Airport (CHQ)",
        title: "Private Chania Airport Transfers",
        description:
          "Book a private transfer from Chania International Airport to your hotel in western Crete, or onward to Heraklion.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "About Chania International Airport",
        paragraphs: [
          "Chania International Airport “Ioannis Daskalogiannis” (CHQ) is located on the Akrotiri peninsula, northeast of Chania town, and serves western Crete. It's the arrival point for visitors heading to Chania itself and to towns and resorts along the island's western and southwestern coasts.",
          "Chania is connected to Heraklion in the east by Crete's north coast highway, making the two airports practical alternatives depending on where on the island you're staying. A private transfer from Chania Airport takes you directly to your accommodation without relying on public transport after landing.",
        ],
      },
      transferService: {
        eyebrow: "What's Included",
        title: "Private Chania Airport Transfer",
        items: [
          { title: "Door-to-Door Service", description: "Direct transfers from the airport to your hotel or address in western Crete." },
          { title: "Pre-Arranged Pickup", description: "Your pickup is organised around your flight details before you travel." },
          { title: "Western Crete Coverage", description: "Transfers can be arranged to Chania town and resort areas nearby." },
          { title: "Private, Not Shared", description: "Your vehicle is booked exclusively for you and your group." },
        ],
      },
      destinations: {
        eyebrow: "Onward Travel",
        title: "Popular Destinations From Chania Airport",
        items: [
          { label: "Heraklion", href: "/route/heraklion-to-chania/", description: "A private transfer along Crete's north coast to Heraklion." },
          { label: "Explore Crete", href: "/region/crete/", description: "See our regional overview of transportation across Crete." },
        ],
      },
      connections: {
        eyebrow: "Airport & Port Connections",
        title: "Airport and Port Connections",
        items: [
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "An alternative airport serving eastern and central Crete." },
          { label: "Heraklion Port", href: "/port/heraklion/", description: "Crete's main ferry connection to Piraeus, reachable via the north coast highway." },
        ],
      },
      howPickupWorks: sharedHowItWorksEn,
      travelPlanning: {
        eyebrow: "Travel Planning",
        title: "Planning Your Airport Transfer",
        items: [
          { title: "Advance Booking", description: "Booking ahead is recommended, particularly during the busy summer season." },
          { title: "Flight Number", description: "Share your flight number so pickup can be planned around your actual arrival." },
          { title: "Meeting Point", description: "Exact meeting point instructions are confirmed with your booking." },
          { title: "Onward Plans", description: "Mention if you're continuing to Heraklion or elsewhere on Crete when requesting your quote." },
        ],
      },
      vehicleConsiderations: sharedVehicleEn,
      relatedServices: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Airport Transfers", href: "/airport-transfers/", description: "See our general airport transfer service covering airports across Greece." },
          { label: "Private Transfers", href: "/private-transfers/", description: "Need a custom route in western Crete? Our private transfer service covers any destination." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Travelling as a larger group from the airport? See our group transfer service." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Where is Chania Airport located?", answer: "Chania International Airport is located on the Akrotiri peninsula, northeast of Chania town." },
          { question: "Can I book a private transfer from the airport to my hotel in Chania?", answer: "Yes, airport-to-hotel transfers are one of our most common requests for Chania Airport." },
          { question: "Can I travel from Chania Airport directly to Heraklion?", answer: "Yes, this route runs along Crete's north coast highway — describe your journey when requesting a quote." },
          { question: "Is Chania Airport a good choice if I'm staying in western Crete?", answer: "Yes, Chania Airport is generally the more convenient arrival point for western and southwestern Crete." },
          { question: "What information do I need to provide when booking?", answer: "Your flight number, arrival time, destination, and passenger and luggage numbers." },
          { question: "Can you arrange a transfer for a family or group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Chania Airport Transfer?",
        description: "Tell us your flight details, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορές Αεροδρομίου Χανίων – Ιδιωτικό Ταξί στη Δυτική Κρήτη",
        description:
          "Κλείστε ιδιωτική μεταφορά από το Διεθνές Αεροδρόμιο Χανίων προς το ξενοδοχείο σας στη δυτική Κρήτη ή προς το Ηράκλειο. Ζητήστε προσφορά.",
      },
      breadcrumbLabel: "Αεροδρόμιο Χανίων",
      officialName: "Διεθνές Αεροδρόμιο Χανίων «Ιωάννης Δασκαλογιάννης»",
      iataCode: "CHQ",
      hero: {
        eyebrow: "Αεροδρόμιο Χανίων (CHQ)",
        title: "Ιδιωτικές Μεταφορές Αεροδρομίου Χανίων",
        description:
          "Κλείστε ιδιωτική μεταφορά από το Διεθνές Αεροδρόμιο Χανίων προς το ξενοδοχείο σας στη δυτική Κρήτη, ή προς το Ηράκλειο.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Σχετικά με το Διεθνές Αεροδρόμιο Χανίων",
        paragraphs: [
          "Το Διεθνές Αεροδρόμιο Χανίων «Ιωάννης Δασκαλογιάννης» (CHQ) βρίσκεται στη χερσόνησο του Ακρωτηρίου, βορειοανατολικά της πόλης των Χανίων, και εξυπηρετεί τη δυτική Κρήτη. Είναι το σημείο άφιξης για επισκέπτες που κατευθύνονται προς τα Χανιά και προς πόλεις και θέρετρα κατά μήκος των δυτικών και νοτιοδυτικών ακτών του νησιού.",
          "Τα Χανιά συνδέονται με το Ηράκλειο στα ανατολικά μέσω του βόρειου οδικού άξονα της Κρήτης, καθιστώντας τα δύο αεροδρόμια πρακτικές εναλλακτικές ανάλογα με το πού διαμένετε στο νησί. Μια ιδιωτική μεταφορά από το Αεροδρόμιο Χανίων σας μεταφέρει απευθείας στο κατάλυμά σας χωρίς να εξαρτάστε από τα μέσα μαζικής μεταφοράς μετά την προσγείωση.",
        ],
      },
      transferService: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Ιδιωτική Μεταφορά Αεροδρομίου Χανίων",
        items: [
          { title: "Υπηρεσία Από Πόρτα σε Πόρτα", description: "Απευθείας μεταφορές από το αεροδρόμιο προς το ξενοδοχείο ή τη διεύθυνσή σας στη δυτική Κρήτη." },
          { title: "Προκαθορισμένη Παραλαβή", description: "Η παραλαβή σας οργανώνεται σύμφωνα με τα στοιχεία της πτήσης σας πριν ταξιδέψετε." },
          { title: "Κάλυψη Δυτικής Κρήτης", description: "Οι μεταφορές μπορούν να οργανωθούν προς την πόλη των Χανίων και κοντινές περιοχές θερέτρων." },
          { title: "Ιδιωτικό, Όχι Κοινόχρηστο", description: "Το όχημά σας κλείνεται αποκλειστικά για εσάς και την ομάδα σας." },
        ],
      },
      destinations: {
        eyebrow: "Συνέχεια Ταξιδιού",
        title: "Δημοφιλείς Προορισμοί από το Αεροδρόμιο Χανίων",
        items: [
          { label: "Ηράκλειο", href: "/el/diadromi/irakleio-chania/", description: "Ιδιωτική μεταφορά κατά μήκος της βόρειας ακτής της Κρήτης προς το Ηράκλειο." },
          { label: "Εξερευνήστε την Κρήτη", href: "/el/periochi/kriti/", description: "Δείτε τη γενική μας επισκόπηση μεταφορών σε όλη την Κρήτη." },
        ],
      },
      connections: {
        eyebrow: "Συνδέσεις Αεροδρομίου & Λιμανιού",
        title: "Συνδέσεις με Αεροδρόμιο και Λιμάνι",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Ένα εναλλακτικό αεροδρόμιο που εξυπηρετεί την ανατολική και κεντρική Κρήτη." },
          { label: "Λιμάνι Ηρακλείου", href: "/el/limani/irakleio/", description: "Η κύρια σύνδεση ferry της Κρήτης προς τον Πειραιά, προσβάσιμη μέσω του βόρειου οδικού άξονα." },
        ],
      },
      howPickupWorks: sharedHowItWorksEl,
      travelPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Σχεδιάστε τη Μεταφορά σας από το Αεροδρόμιο",
        items: [
          { title: "Έγκαιρη Κράτηση", description: "Συνιστάται η έγκαιρη κράτηση, ιδίως κατά τη διάρκεια της πολυάσχολης καλοκαιρινής περιόδου." },
          { title: "Αριθμός Πτήσης", description: "Δώστε μας τον αριθμό πτήσης σας ώστε η παραλαβή να σχεδιαστεί σύμφωνα με την πραγματική άφιξή σας." },
          { title: "Σημείο Συνάντησης", description: "Οι ακριβείς οδηγίες σημείου συνάντησης επιβεβαιώνονται με την κράτησή σας." },
          { title: "Επόμενα Σχέδια", description: "Αναφέρετε αν συνεχίζετε προς το Ηράκλειο ή αλλού στην Κρήτη κατά την αίτηση προσφοράς." },
        ],
      },
      vehicleConsiderations: sharedVehicleEl,
      relatedServices: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Μεταφορές Αεροδρομίου", href: "/el/metafores-aerodromiou/", description: "Δείτε τη γενική μας υπηρεσία μεταφοράς αεροδρομίου που καλύπτει αεροδρόμια σε όλη την Ελλάδα." },
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Χρειάζεστε προσαρμοσμένη διαδρομή στη δυτική Κρήτη; Η υπηρεσία ιδιωτικών μεταφορών μας καλύπτει οποιονδήποτε προορισμό." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ταξιδεύετε ως μεγαλύτερη ομάδα από το αεροδρόμιο; Δείτε την υπηρεσία ομαδικών μεταφορών μας." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πού βρίσκεται το Αεροδρόμιο Χανίων;", answer: "Το Διεθνές Αεροδρόμιο Χανίων βρίσκεται στη χερσόνησο του Ακρωτηρίου, βορειοανατολικά της πόλης των Χανίων." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το αεροδρόμιο προς το ξενοδοχείο μου στα Χανιά;", answer: "Ναι, οι μεταφορές από το αεροδρόμιο προς το ξενοδοχείο είναι από τα πιο συνηθισμένα αιτήματά μας για το Αεροδρόμιο Χανίων." },
          { question: "Μπορώ να ταξιδέψω από το Αεροδρόμιο Χανίων απευθείας προς το Ηράκλειο;", answer: "Ναι, αυτή η διαδρομή διέρχεται από τον βόρειο οδικό άξονα της Κρήτης — περιγράψτε το ταξίδι σας κατά την αίτηση προσφοράς." },
          { question: "Είναι το Αεροδρόμιο Χανίων καλή επιλογή αν μένω στη δυτική Κρήτη;", answer: "Ναι, το Αεροδρόμιο Χανίων είναι γενικά το πιο βολικό σημείο άφιξης για τη δυτική και νοτιοδυτική Κρήτη." },
          { question: "Ποιες πληροφορίες χρειάζεται να δώσω κατά την κράτηση;", answer: "Τον αριθμό πτήσης, την ώρα άφιξης, τον προορισμό, και τον αριθμό επιβατών και αποσκευών." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για οικογένεια ή ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας από το Αεροδρόμιο Χανίων;",
        description: "Πείτε μας τα στοιχεία της πτήσης, τον προορισμό και τον αριθμό επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  rhodesAirport: {
    en: {
      meta: {
        title: "Rhodes Airport Transfers – Private Taxi & Chauffeur Service",
        description:
          "Book a private transfer from Rhodes International Airport Diagoras to your hotel in Rhodes Town or the island's resort areas. Request a quote today.",
      },
      breadcrumbLabel: "Rhodes Airport",
      officialName: "Rhodes International Airport “Diagoras”",
      iataCode: "RHO",
      hero: {
        eyebrow: "Rhodes Airport (RHO)",
        title: "Private Rhodes Airport Transfers",
        description:
          "Book a private transfer from Rhodes International Airport Diagoras to your hotel in Rhodes Town or elsewhere on the island.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "About Rhodes International Airport",
        paragraphs: [
          "Rhodes International Airport “Diagoras” (RHO) is located near Paradisi, on the west coast of Rhodes, southwest of Rhodes Town. It's the island's only airport and the main arrival point for visitors to Rhodes, part of the Dodecanese island group.",
          "A private transfer from Rhodes Airport takes you directly to your hotel or accommodation, whether in Rhodes Town, the old town area, or resort areas elsewhere on the island, without relying on public transport connections after landing.",
        ],
      },
      transferService: {
        eyebrow: "What's Included",
        title: "Private Rhodes Airport Transfer",
        items: [
          { title: "Door-to-Door Service", description: "Direct transfers from the airport to your hotel or address on Rhodes." },
          { title: "Pre-Arranged Pickup", description: "Your pickup is organised around your flight details before you travel." },
          { title: "Island-Wide Coverage", description: "Transfers can be arranged to Rhodes Town and resort areas around the island." },
          { title: "Private, Not Shared", description: "Your vehicle is booked exclusively for you and your group." },
        ],
      },
      destinations: {
        eyebrow: "Onward Travel",
        title: "Explore Rhodes",
        items: [
          { label: "Rhodes", href: "/destination/rhodes/", description: "See our destination guide to Rhodes, covering transportation across the island." },
        ],
      },
      connections: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Private Transfers", href: "/private-transfers/", description: "Need a custom route on Rhodes? Our private transfer service covers any destination on the island." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Travelling as a larger group from the airport? See our group transfer service." },
        ],
      },
      howPickupWorks: sharedHowItWorksEn,
      travelPlanning: {
        eyebrow: "Travel Planning",
        title: "Planning Your Airport Transfer",
        items: [
          { title: "Advance Booking", description: "Booking ahead is recommended, particularly during the busy summer season." },
          { title: "Flight Number", description: "Share your flight number so pickup can be planned around your actual arrival." },
          { title: "Meeting Point", description: "Exact meeting point instructions are confirmed with your booking." },
          { title: "Accommodation Details", description: "Share your hotel name or address so your drop-off can be planned accurately." },
        ],
      },
      vehicleConsiderations: sharedVehicleEn,
      relatedServices: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Airport Transfers", href: "/airport-transfers/", description: "See our general airport transfer service covering airports across Greece." },
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey on Rhodes." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Where is Rhodes Airport located?", answer: "Rhodes International Airport is located near Paradisi, on the west coast of Rhodes, southwest of Rhodes Town." },
          { question: "Can I book a private transfer from the airport to Rhodes Town?", answer: "Yes, airport-to-hotel transfers to Rhodes Town and the old town area are one of our most common requests." },
          { question: "Can you arrange a transfer to a resort elsewhere on the island?", answer: "Yes, transfers can be arranged to resort areas around Rhodes — share your hotel or address when requesting a quote." },
          { question: "What information do I need to provide when booking?", answer: "Your flight number, arrival time, accommodation details, and passenger and luggage numbers." },
          { question: "What happens if my flight is delayed?", answer: "Let us know as soon as you're aware of a delay so pickup arrangements can be adjusted where possible." },
          { question: "Can you arrange a transfer for a family or group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Rhodes Airport Transfer?",
        description: "Tell us your flight details, accommodation and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορές Αεροδρομίου Ρόδου – Ιδιωτικό Ταξί & Σοφέρ",
        description:
          "Κλείστε ιδιωτική μεταφορά από το Διεθνές Αεροδρόμιο Διαγόρας Ρόδου προς το ξενοδοχείο σας στην πόλη της Ρόδου ή σε θέρετρα του νησιού. Ζητήστε προσφορά.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ρόδου",
      officialName: "Διεθνές Αεροδρόμιο Ρόδου «Διαγόρας»",
      iataCode: "RHO",
      hero: {
        eyebrow: "Αεροδρόμιο Ρόδου (RHO)",
        title: "Ιδιωτικές Μεταφορές Αεροδρομίου Ρόδου",
        description:
          "Κλείστε ιδιωτική μεταφορά από το Διεθνές Αεροδρόμιο Διαγόρας Ρόδου προς το ξενοδοχείο σας στην πόλη της Ρόδου ή αλλού στο νησί.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Σχετικά με το Διεθνές Αεροδρόμιο Ρόδου",
        paragraphs: [
          "Το Διεθνές Αεροδρόμιο Ρόδου «Διαγόρας» (RHO) βρίσκεται κοντά στο Παραδείσι, στη δυτική ακτή της Ρόδου, νοτιοδυτικά της πόλης της Ρόδου. Είναι το μοναδικό αεροδρόμιο του νησιού και το κύριο σημείο άφιξης για επισκέπτες στη Ρόδο, μέρος του συμπλέγματος των Δωδεκανήσων.",
          "Μια ιδιωτική μεταφορά από το Αεροδρόμιο Ρόδου σας μεταφέρει απευθείας στο ξενοδοχείο ή το κατάλυμά σας, είτε στην πόλη της Ρόδου, στην περιοχή της παλιάς πόλης, είτε σε θέρετρα αλλού στο νησί, χωρίς να εξαρτάστε από τα μέσα μαζικής μεταφοράς μετά την προσγείωση.",
        ],
      },
      transferService: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Ιδιωτική Μεταφορά Αεροδρομίου Ρόδου",
        items: [
          { title: "Υπηρεσία Από Πόρτα σε Πόρτα", description: "Απευθείας μεταφορές από το αεροδρόμιο προς το ξενοδοχείο ή τη διεύθυνσή σας στη Ρόδο." },
          { title: "Προκαθορισμένη Παραλαβή", description: "Η παραλαβή σας οργανώνεται σύμφωνα με τα στοιχεία της πτήσης σας πριν ταξιδέψετε." },
          { title: "Κάλυψη Όλου του Νησιού", description: "Οι μεταφορές μπορούν να οργανωθούν προς την πόλη της Ρόδου και θέρετρα σε όλο το νησί." },
          { title: "Ιδιωτικό, Όχι Κοινόχρηστο", description: "Το όχημά σας κλείνεται αποκλειστικά για εσάς και την ομάδα σας." },
        ],
      },
      destinations: {
        eyebrow: "Συνέχεια Ταξιδιού",
        title: "Εξερευνήστε τη Ρόδο",
        items: [
          { label: "Ρόδος", href: "/el/proorismos/rodos/", description: "Δείτε τον οδηγό προορισμού μας για τη Ρόδο, με πληροφορίες μεταφοράς σε όλο το νησί." },
        ],
      },
      connections: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Χρειάζεστε προσαρμοσμένη διαδρομή στη Ρόδο; Η υπηρεσία ιδιωτικών μεταφορών μας καλύπτει οποιονδήποτε προορισμό στο νησί." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ταξιδεύετε ως μεγαλύτερη ομάδα από το αεροδρόμιο; Δείτε την υπηρεσία ομαδικών μεταφορών μας." },
        ],
      },
      howPickupWorks: sharedHowItWorksEl,
      travelPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Σχεδιάστε τη Μεταφορά σας από το Αεροδρόμιο",
        items: [
          { title: "Έγκαιρη Κράτηση", description: "Συνιστάται η έγκαιρη κράτηση, ιδίως κατά τη διάρκεια της πολυάσχολης καλοκαιρινής περιόδου." },
          { title: "Αριθμός Πτήσης", description: "Δώστε μας τον αριθμό πτήσης σας ώστε η παραλαβή να σχεδιαστεί σύμφωνα με την πραγματική άφιξή σας." },
          { title: "Σημείο Συνάντησης", description: "Οι ακριβείς οδηγίες σημείου συνάντησης επιβεβαιώνονται με την κράτησή σας." },
          { title: "Στοιχεία Καταλύματος", description: "Δώστε μας το όνομα ή τη διεύθυνση του ξενοδοχείου σας ώστε ο προορισμός σας να σχεδιαστεί με ακρίβεια." },
        ],
      },
      vehicleConsiderations: sharedVehicleEl,
      relatedServices: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Μεταφορές Αεροδρομίου", href: "/el/metafores-aerodromiou/", description: "Δείτε τη γενική μας υπηρεσία μεταφοράς αεροδρομίου που καλύπτει αεροδρόμια σε όλη την Ελλάδα." },
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στη Ρόδο." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πού βρίσκεται το Αεροδρόμιο Ρόδου;", answer: "Το Διεθνές Αεροδρόμιο Ρόδου βρίσκεται κοντά στο Παραδείσι, στη δυτική ακτή της Ρόδου, νοτιοδυτικά της πόλης της Ρόδου." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το αεροδρόμιο προς την πόλη της Ρόδου;", answer: "Ναι, οι μεταφορές από το αεροδρόμιο προς ξενοδοχεία στην πόλη της Ρόδου και την παλιά πόλη είναι από τα πιο συνηθισμένα αιτήματά μας." },
          { question: "Μπορείτε να οργανώσετε μεταφορά προς θέρετρο αλλού στο νησί;", answer: "Ναι, οι μεταφορές μπορούν να οργανωθούν προς θέρετρα σε όλη τη Ρόδο — δώστε μας το ξενοδοχείο ή τη διεύθυνσή σας κατά την αίτηση προσφοράς." },
          { question: "Ποιες πληροφορίες χρειάζεται να δώσω κατά την κράτηση;", answer: "Τον αριθμό πτήσης, την ώρα άφιξης, τα στοιχεία του καταλύματός σας, και τον αριθμό επιβατών και αποσκευών." },
          { question: "Τι γίνεται αν η πτήση μου καθυστερήσει;", answer: "Ενημερώστε μας μόλις μάθετε για την καθυστέρηση ώστε η παραλαβή να προσαρμοστεί όπου είναι δυνατόν." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για οικογένεια ή ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας από το Αεροδρόμιο Ρόδου;",
        description: "Πείτε μας τα στοιχεία της πτήσης, το κατάλυμα και τον αριθμό επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  corfuAirport: {
    en: {
      meta: {
        title: "Corfu Airport Transfers – Private Taxi & Chauffeur Service",
        description:
          "Book a private transfer from Corfu International Airport to your hotel in Corfu Town or elsewhere on the island. Request a quote for your journey.",
      },
      breadcrumbLabel: "Corfu Airport",
      officialName: "Corfu International Airport “Ioannis Kapodistrias”",
      iataCode: "CFU",
      hero: {
        eyebrow: "Corfu Airport (CFU)",
        title: "Private Corfu Airport Transfers",
        description:
          "Book a private transfer from Corfu International Airport to your hotel in Corfu Town or elsewhere on the island.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "About Corfu International Airport",
        paragraphs: [
          "Corfu International Airport “Ioannis Kapodistrias” (CFU) sits unusually close to Corfu Town, just south of the city on the island's east coast. It's the main air gateway to Corfu, one of the largest islands in the Ionian Sea.",
          "Because of its proximity to Corfu Town, transfer times to the old town and nearby areas are relatively short, while resort areas further around the island take longer. A private transfer takes you directly from the airport to your accommodation without relying on public transport after landing.",
        ],
      },
      transferService: {
        eyebrow: "What's Included",
        title: "Private Corfu Airport Transfer",
        items: [
          { title: "Door-to-Door Service", description: "Direct transfers from the airport to your hotel or address on Corfu." },
          { title: "Pre-Arranged Pickup", description: "Your pickup is organised around your flight details before you travel." },
          { title: "Island-Wide Coverage", description: "Transfers can be arranged to Corfu Town and resort areas around the island." },
          { title: "Private, Not Shared", description: "Your vehicle is booked exclusively for you and your group." },
        ],
      },
      destinations: {
        eyebrow: "Onward Travel",
        title: "Explore Corfu",
        items: [
          { label: "Corfu", href: "/destination/corfu/", description: "See our destination guide to Corfu, covering transportation across the island." },
        ],
      },
      connections: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Private Transfers", href: "/private-transfers/", description: "Need a custom route on Corfu? Our private transfer service covers any destination on the island." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Travelling as a larger group from the airport? See our group transfer service." },
        ],
      },
      howPickupWorks: sharedHowItWorksEn,
      travelPlanning: {
        eyebrow: "Travel Planning",
        title: "Planning Your Airport Transfer",
        items: [
          { title: "Advance Booking", description: "Booking ahead is recommended, particularly during the busy summer season." },
          { title: "Flight Number", description: "Share your flight number so pickup can be planned around your actual arrival." },
          { title: "Meeting Point", description: "Exact meeting point instructions are confirmed with your booking." },
          { title: "Accommodation Details", description: "Share your hotel name or address so your drop-off can be planned accurately." },
        ],
      },
      vehicleConsiderations: sharedVehicleEn,
      relatedServices: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Airport Transfers", href: "/airport-transfers/", description: "See our general airport transfer service covering airports across Greece." },
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey on Corfu." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Where is Corfu Airport located?", answer: "Corfu International Airport is located just south of Corfu Town, on the island's east coast." },
          { question: "Can I book a private transfer from the airport to Corfu Town?", answer: "Yes, airport-to-hotel transfers to Corfu Town are one of our most common requests, and the journey is relatively short." },
          { question: "Can you arrange a transfer to a resort elsewhere on the island?", answer: "Yes, transfers can be arranged around Corfu — share your hotel or address when requesting a quote." },
          { question: "What information do I need to provide when booking?", answer: "Your flight number, arrival time, accommodation details, and passenger and luggage numbers." },
          { question: "What happens if my flight is delayed?", answer: "Let us know as soon as you're aware of a delay so pickup arrangements can be adjusted where possible." },
          { question: "Can you arrange a transfer for a family or group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Corfu Airport Transfer?",
        description: "Tell us your flight details, accommodation and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορές Αεροδρομίου Κέρκυρας – Ιδιωτικό Ταξί & Σοφέρ",
        description:
          "Κλείστε ιδιωτική μεταφορά από το Διεθνές Αεροδρόμιο Κέρκυρας προς το ξενοδοχείο σας στην πόλη της Κέρκυρας ή αλλού στο νησί. Ζητήστε προσφορά.",
      },
      breadcrumbLabel: "Αεροδρόμιο Κέρκυρας",
      officialName: "Διεθνές Αεροδρόμιο Κέρκυρας «Ιωάννης Καποδίστριας»",
      iataCode: "CFU",
      hero: {
        eyebrow: "Αεροδρόμιο Κέρκυρας (CFU)",
        title: "Ιδιωτικές Μεταφορές Αεροδρομίου Κέρκυρας",
        description:
          "Κλείστε ιδιωτική μεταφορά από το Διεθνές Αεροδρόμιο Κέρκυρας προς το ξενοδοχείο σας στην πόλη της Κέρκυρας ή αλλού στο νησί.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Σχετικά με το Διεθνές Αεροδρόμιο Κέρκυρας",
        paragraphs: [
          "Το Διεθνές Αεροδρόμιο Κέρκυρας «Ιωάννης Καποδίστριας» (CFU) βρίσκεται ασυνήθιστα κοντά στην πόλη της Κέρκυρας, αμέσως νότια της πόλης στην ανατολική ακτή του νησιού. Είναι η κύρια αεροπορική πύλη προς την Κέρκυρα, ένα από τα μεγαλύτερα νησιά του Ιονίου Πελάγους.",
          "Λόγω της εγγύτητάς του με την πόλη της Κέρκυρας, οι χρόνοι μεταφοράς προς την παλιά πόλη και τις κοντινές περιοχές είναι σχετικά σύντομοι, ενώ οι περιοχές θερέτρων πιο μακριά στο νησί απαιτούν περισσότερο χρόνο. Μια ιδιωτική μεταφορά σας μεταφέρει απευθείας από το αεροδρόμιο στο κατάλυμά σας χωρίς να εξαρτάστε από τα μέσα μαζικής μεταφοράς μετά την προσγείωση.",
        ],
      },
      transferService: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Ιδιωτική Μεταφορά Αεροδρομίου Κέρκυρας",
        items: [
          { title: "Υπηρεσία Από Πόρτα σε Πόρτα", description: "Απευθείας μεταφορές από το αεροδρόμιο προς το ξενοδοχείο ή τη διεύθυνσή σας στην Κέρκυρα." },
          { title: "Προκαθορισμένη Παραλαβή", description: "Η παραλαβή σας οργανώνεται σύμφωνα με τα στοιχεία της πτήσης σας πριν ταξιδέψετε." },
          { title: "Κάλυψη Όλου του Νησιού", description: "Οι μεταφορές μπορούν να οργανωθούν προς την πόλη της Κέρκυρας και θέρετρα σε όλο το νησί." },
          { title: "Ιδιωτικό, Όχι Κοινόχρηστο", description: "Το όχημά σας κλείνεται αποκλειστικά για εσάς και την ομάδα σας." },
        ],
      },
      destinations: {
        eyebrow: "Συνέχεια Ταξιδιού",
        title: "Εξερευνήστε την Κέρκυρα",
        items: [
          { label: "Κέρκυρα", href: "/el/proorismos/kerkyra/", description: "Δείτε τον οδηγό προορισμού μας για την Κέρκυρα, με πληροφορίες μεταφοράς σε όλο το νησί." },
        ],
      },
      connections: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Χρειάζεστε προσαρμοσμένη διαδρομή στην Κέρκυρα; Η υπηρεσία ιδιωτικών μεταφορών μας καλύπτει οποιονδήποτε προορισμό στο νησί." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ταξιδεύετε ως μεγαλύτερη ομάδα από το αεροδρόμιο; Δείτε την υπηρεσία ομαδικών μεταφορών μας." },
        ],
      },
      howPickupWorks: sharedHowItWorksEl,
      travelPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Σχεδιάστε τη Μεταφορά σας από το Αεροδρόμιο",
        items: [
          { title: "Έγκαιρη Κράτηση", description: "Συνιστάται η έγκαιρη κράτηση, ιδίως κατά τη διάρκεια της πολυάσχολης καλοκαιρινής περιόδου." },
          { title: "Αριθμός Πτήσης", description: "Δώστε μας τον αριθμό πτήσης σας ώστε η παραλαβή να σχεδιαστεί σύμφωνα με την πραγματική άφιξή σας." },
          { title: "Σημείο Συνάντησης", description: "Οι ακριβείς οδηγίες σημείου συνάντησης επιβεβαιώνονται με την κράτησή σας." },
          { title: "Στοιχεία Καταλύματος", description: "Δώστε μας το όνομα ή τη διεύθυνση του ξενοδοχείου σας ώστε ο προορισμός σας να σχεδιαστεί με ακρίβεια." },
        ],
      },
      vehicleConsiderations: sharedVehicleEl,
      relatedServices: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Μεταφορές Αεροδρομίου", href: "/el/metafores-aerodromiou/", description: "Δείτε τη γενική μας υπηρεσία μεταφοράς αεροδρομίου που καλύπτει αεροδρόμια σε όλη την Ελλάδα." },
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στην Κέρκυρα." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πού βρίσκεται το Αεροδρόμιο Κέρκυρας;", answer: "Το Διεθνές Αεροδρόμιο Κέρκυρας βρίσκεται αμέσως νότια της πόλης της Κέρκυρας, στην ανατολική ακτή του νησιού." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το αεροδρόμιο προς την πόλη της Κέρκυρας;", answer: "Ναι, οι μεταφορές από το αεροδρόμιο προς την πόλη της Κέρκυρας είναι από τα πιο συνηθισμένα αιτήματά μας, και η διαδρομή είναι σχετικά σύντομη." },
          { question: "Μπορείτε να οργανώσετε μεταφορά προς θέρετρο αλλού στο νησί;", answer: "Ναι, οι μεταφορές μπορούν να οργανωθούν σε όλη την Κέρκυρα — δώστε μας το ξενοδοχείο ή τη διεύθυνσή σας κατά την αίτηση προσφοράς." },
          { question: "Ποιες πληροφορίες χρειάζεται να δώσω κατά την κράτηση;", answer: "Τον αριθμό πτήσης, την ώρα άφιξης, τα στοιχεία του καταλύματός σας, και τον αριθμό επιβατών και αποσκευών." },
          { question: "Τι γίνεται αν η πτήση μου καθυστερήσει;", answer: "Ενημερώστε μας μόλις μάθετε για την καθυστέρηση ώστε η παραλαβή να προσαρμοστεί όπου είναι δυνατόν." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για οικογένεια ή ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας από το Αεροδρόμιο Κέρκυρας;",
        description: "Πείτε μας τα στοιχεία της πτήσης, το κατάλυμα και τον αριθμό επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  santoriniAirport: {
    en: {
      meta: {
        title: "Santorini Airport Transfers – Private Taxi & Chauffeur",
        description:
          "Book a private transfer from Santorini Airport to your hotel in Fira, Oia or elsewhere on the island. Request a quote for direct, comfortable travel.",
      },
      breadcrumbLabel: "Santorini Airport",
      officialName: "Santorini (Thira) National Airport",
      iataCode: "JTR",
      hero: {
        eyebrow: "Santorini Airport (JTR)",
        title: "Private Santorini Airport Transfers",
        description:
          "Book a private transfer from Santorini Airport to your hotel in Fira, Oia, or elsewhere on the island.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "About Santorini Airport",
        paragraphs: [
          "Santorini (Thira) National Airport (JTR) is located on the eastern side of the island, near Kamari and Monolithos, several kilometres from Fira, the island's capital, and further still from Oia in the north.",
          "Santorini's roads are often narrow and busy during peak season, especially around the caldera villages, so a pre-arranged private transfer avoids uncertainty on arrival. A private transfer takes you directly from the airport to your accommodation, wherever it is on the island.",
        ],
      },
      transferService: {
        eyebrow: "What's Included",
        title: "Private Santorini Airport Transfer",
        items: [
          { title: "Door-to-Door Service", description: "Direct transfers from the airport to your hotel or address on Santorini." },
          { title: "Pre-Arranged Pickup", description: "Your pickup is organised around your flight details before you travel." },
          { title: "Island-Wide Coverage", description: "Transfers can be arranged to Fira, Oia and other villages around the island." },
          { title: "Private, Not Shared", description: "Your vehicle is booked exclusively for you and your group." },
        ],
      },
      destinations: {
        eyebrow: "Onward Travel",
        title: "Explore Santorini",
        items: [
          { label: "Santorini", href: "/destination/santorini/", description: "See our destination guide to Santorini, covering transportation across the island." },
        ],
      },
      connections: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Private Transfers", href: "/private-transfers/", description: "Need a custom route on Santorini? Our private transfer service covers any destination on the island." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Travelling as a larger group from the airport? See our group transfer service." },
        ],
      },
      howPickupWorks: sharedHowItWorksEn,
      travelPlanning: {
        eyebrow: "Travel Planning",
        title: "Planning Your Airport Transfer",
        items: [
          { title: "Advance Booking", description: "Booking ahead is recommended, particularly during the busy summer season when island roads are at their busiest." },
          { title: "Flight Number", description: "Share your flight number so pickup can be planned around your actual arrival." },
          { title: "Meeting Point", description: "Exact meeting point instructions are confirmed with your booking." },
          { title: "Accommodation Details", description: "Share your hotel name or area (Fira, Oia, or elsewhere) so your drop-off can be planned accurately." },
        ],
      },
      vehicleConsiderations: sharedVehicleEn,
      relatedServices: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Airport Transfers", href: "/airport-transfers/", description: "See our general airport transfer service covering airports across Greece." },
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey on Santorini." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Where is Santorini Airport located?", answer: "Santorini Airport is located on the eastern side of the island, near Kamari and Monolithos, some distance from Fira and Oia." },
          { question: "Can I book a private transfer from the airport to Oia?", answer: "Yes, transfers to Oia and other villages around the island can be arranged — share your accommodation details when requesting a quote." },
          { question: "How busy are Santorini's roads during summer?", answer: "Roads around the caldera villages can be busy during peak season, which is one reason many travellers pre-arrange a private transfer rather than relying on options found on arrival." },
          { question: "What information do I need to provide when booking?", answer: "Your flight number, arrival time, accommodation details, and passenger and luggage numbers." },
          { question: "What happens if my flight is delayed?", answer: "Let us know as soon as you're aware of a delay so pickup arrangements can be adjusted where possible." },
          { question: "Can you arrange a transfer for a family or group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Santorini Airport Transfer?",
        description: "Tell us your flight details, accommodation and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορές Αεροδρομίου Σαντορίνης – Ιδιωτικό Ταξί & Σοφέρ",
        description:
          "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Σαντορίνης προς το ξενοδοχείο σας στη Φηρά, την Οία ή αλλού στο νησί. Ζητήστε προσφορά.",
      },
      breadcrumbLabel: "Αεροδρόμιο Σαντορίνης",
      officialName: "Εθνικό Αεροδρόμιο Σαντορίνης (Θήρα)",
      iataCode: "JTR",
      hero: {
        eyebrow: "Αεροδρόμιο Σαντορίνης (JTR)",
        title: "Ιδιωτικές Μεταφορές Αεροδρομίου Σαντορίνης",
        description:
          "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Σαντορίνης προς το ξενοδοχείο σας στη Φηρά, την Οία, ή αλλού στο νησί.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Σχετικά με το Αεροδρόμιο Σαντορίνης",
        paragraphs: [
          "Το Εθνικό Αεροδρόμιο Σαντορίνης (Θήρα) (JTR) βρίσκεται στην ανατολική πλευρά του νησιού, κοντά στο Καμάρι και το Μονόλιθο, αρκετά χιλιόμετρα από τη Φηρά, την πρωτεύουσα του νησιού, και ακόμη πιο μακριά από την Οία στα βόρεια.",
          "Οι δρόμοι της Σαντορίνης είναι συχνά στενοί και πολυσύχναστοι κατά την περίοδο αιχμής, ειδικά γύρω από τα χωριά της καλντέρας, γι' αυτό μια προκαθορισμένη ιδιωτική μεταφορά αποφεύγει την αβεβαιότητα κατά την άφιξη. Μια ιδιωτική μεταφορά σας μεταφέρει απευθείας από το αεροδρόμιο στο κατάλυμά σας, όπου κι αν βρίσκεται στο νησί.",
        ],
      },
      transferService: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Ιδιωτική Μεταφορά Αεροδρομίου Σαντορίνης",
        items: [
          { title: "Υπηρεσία Από Πόρτα σε Πόρτα", description: "Απευθείας μεταφορές από το αεροδρόμιο προς το ξενοδοχείο ή τη διεύθυνσή σας στη Σαντορίνη." },
          { title: "Προκαθορισμένη Παραλαβή", description: "Η παραλαβή σας οργανώνεται σύμφωνα με τα στοιχεία της πτήσης σας πριν ταξιδέψετε." },
          { title: "Κάλυψη Όλου του Νησιού", description: "Οι μεταφορές μπορούν να οργανωθούν προς τη Φηρά, την Οία και άλλα χωριά του νησιού." },
          { title: "Ιδιωτικό, Όχι Κοινόχρηστο", description: "Το όχημά σας κλείνεται αποκλειστικά για εσάς και την ομάδα σας." },
        ],
      },
      destinations: {
        eyebrow: "Συνέχεια Ταξιδιού",
        title: "Εξερευνήστε τη Σαντορίνη",
        items: [
          { label: "Σαντορίνη", href: "/el/proorismos/santorini/", description: "Δείτε τον οδηγό προορισμού μας για τη Σαντορίνη, με πληροφορίες μεταφοράς σε όλο το νησί." },
        ],
      },
      connections: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Χρειάζεστε προσαρμοσμένη διαδρομή στη Σαντορίνη; Η υπηρεσία ιδιωτικών μεταφορών μας καλύπτει οποιονδήποτε προορισμό στο νησί." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ταξιδεύετε ως μεγαλύτερη ομάδα από το αεροδρόμιο; Δείτε την υπηρεσία ομαδικών μεταφορών μας." },
        ],
      },
      howPickupWorks: sharedHowItWorksEl,
      travelPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Σχεδιάστε τη Μεταφορά σας από το Αεροδρόμιο",
        items: [
          { title: "Έγκαιρη Κράτηση", description: "Συνιστάται η έγκαιρη κράτηση, ιδίως κατά τη διάρκεια της πολυάσχολης καλοκαιρινής περιόδου, όταν οι δρόμοι του νησιού είναι πιο φορτωμένοι." },
          { title: "Αριθμός Πτήσης", description: "Δώστε μας τον αριθμό πτήσης σας ώστε η παραλαβή να σχεδιαστεί σύμφωνα με την πραγματική άφιξή σας." },
          { title: "Σημείο Συνάντησης", description: "Οι ακριβείς οδηγίες σημείου συνάντησης επιβεβαιώνονται με την κράτησή σας." },
          { title: "Στοιχεία Καταλύματος", description: "Δώστε μας το όνομα του ξενοδοχείου ή την περιοχή σας (Φηρά, Οία, ή αλλού) ώστε ο προορισμός σας να σχεδιαστεί με ακρίβεια." },
        ],
      },
      vehicleConsiderations: sharedVehicleEl,
      relatedServices: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Μεταφορές Αεροδρομίου", href: "/el/metafores-aerodromiou/", description: "Δείτε τη γενική μας υπηρεσία μεταφοράς αεροδρομίου που καλύπτει αεροδρόμια σε όλη την Ελλάδα." },
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στη Σαντορίνη." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πού βρίσκεται το Αεροδρόμιο Σαντορίνης;", answer: "Το Αεροδρόμιο Σαντορίνης βρίσκεται στην ανατολική πλευρά του νησιού, κοντά στο Καμάρι και το Μονόλιθο, σε κάποια απόσταση από τη Φηρά και την Οία." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το αεροδρόμιο προς την Οία;", answer: "Ναι, μπορούν να οργανωθούν μεταφορές προς την Οία και άλλα χωριά του νησιού — δώστε μας τα στοιχεία του καταλύματός σας κατά την αίτηση προσφοράς." },
          { question: "Πόσο φορτωμένοι είναι οι δρόμοι της Σαντορίνης το καλοκαίρι;", answer: "Οι δρόμοι γύρω από τα χωριά της καλντέρας μπορεί να είναι φορτωμένοι κατά την περίοδο αιχμής, κάτι που είναι ένας από τους λόγους που πολλοί ταξιδιώτες προτιμούν να οργανώνουν εκ των προτέρων ιδιωτική μεταφορά." },
          { question: "Ποιες πληροφορίες χρειάζεται να δώσω κατά την κράτηση;", answer: "Τον αριθμό πτήσης, την ώρα άφιξης, τα στοιχεία του καταλύματός σας, και τον αριθμό επιβατών και αποσκευών." },
          { question: "Τι γίνεται αν η πτήση μου καθυστερήσει;", answer: "Ενημερώστε μας μόλις μάθετε για την καθυστέρηση ώστε η παραλαβή να προσαρμοστεί όπου είναι δυνατόν." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για οικογένεια ή ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας από το Αεροδρόμιο Σαντορίνης;",
        description: "Πείτε μας τα στοιχεία της πτήσης, το κατάλυμα και τον αριθμό επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  mykonosAirport: {
    en: {
      meta: {
        title: "Mykonos Airport Transfers – Private Taxi & Chauffeur",
        description:
          "Book a private transfer from Mykonos Airport to your hotel in Mykonos Town or elsewhere on the island. Request a quote for comfortable, direct travel.",
      },
      breadcrumbLabel: "Mykonos Airport",
      officialName: "Mykonos Island National Airport",
      iataCode: "JMK",
      hero: {
        eyebrow: "Mykonos Airport (JMK)",
        title: "Private Mykonos Airport Transfers",
        description:
          "Book a private transfer from Mykonos Airport to your hotel in Mykonos Town or elsewhere on the island.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "About Mykonos Airport",
        paragraphs: [
          "Mykonos Island National Airport (JMK) is located a short distance southeast of Mykonos Town, on the island's east side. It serves as the main air gateway to Mykonos, one of the most visited islands in the Cyclades.",
          "A private transfer from Mykonos Airport takes you directly to your hotel, whether in Mykonos Town, Chora, or one of the island's beach resort areas, without relying on public transport connections after landing.",
        ],
      },
      transferService: {
        eyebrow: "What's Included",
        title: "Private Mykonos Airport Transfer",
        items: [
          { title: "Door-to-Door Service", description: "Direct transfers from the airport to your hotel or address on Mykonos." },
          { title: "Pre-Arranged Pickup", description: "Your pickup is organised around your flight details before you travel." },
          { title: "Island-Wide Coverage", description: "Transfers can be arranged to Mykonos Town and resort areas around the island." },
          { title: "Private, Not Shared", description: "Your vehicle is booked exclusively for you and your group." },
        ],
      },
      destinations: {
        eyebrow: "Onward Travel",
        title: "Explore Mykonos",
        items: [
          { label: "Mykonos", href: "/destination/mykonos/", description: "See our destination guide to Mykonos, covering transportation across the island." },
        ],
      },
      connections: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Private Transfers", href: "/private-transfers/", description: "Need a custom route on Mykonos? Our private transfer service covers any destination on the island." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Travelling as a larger group from the airport? See our group transfer service." },
        ],
      },
      howPickupWorks: sharedHowItWorksEn,
      travelPlanning: {
        eyebrow: "Travel Planning",
        title: "Planning Your Airport Transfer",
        items: [
          { title: "Advance Booking", description: "Booking ahead is recommended, particularly during the busy summer season." },
          { title: "Flight Number", description: "Share your flight number so pickup can be planned around your actual arrival." },
          { title: "Meeting Point", description: "Exact meeting point instructions are confirmed with your booking." },
          { title: "Accommodation Details", description: "Share your hotel name or area so your drop-off can be planned accurately." },
        ],
      },
      vehicleConsiderations: sharedVehicleEn,
      relatedServices: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { label: "Airport Transfers", href: "/airport-transfers/", description: "See our general airport transfer service covering airports across Greece." },
          { label: "Private Transfers", href: "/private-transfers/", description: "A private, door-to-door vehicle for any journey on Mykonos." },
          { label: "Group Transfers", href: "/group-transfers/", description: "Private transportation for families and larger groups." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Where is Mykonos Airport located?", answer: "Mykonos Island National Airport is located a short distance southeast of Mykonos Town." },
          { question: "Can I book a private transfer from the airport to Mykonos Town?", answer: "Yes, airport-to-hotel transfers to Mykonos Town are one of our most common requests." },
          { question: "Can you arrange a transfer to a beach resort elsewhere on the island?", answer: "Yes, transfers can be arranged around Mykonos — share your hotel or address when requesting a quote." },
          { question: "What information do I need to provide when booking?", answer: "Your flight number, arrival time, accommodation details, and passenger and luggage numbers." },
          { question: "What happens if my flight is delayed?", answer: "Let us know as soon as you're aware of a delay so pickup arrangements can be adjusted where possible." },
          { question: "Can you arrange a transfer for a family or group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Mykonos Airport Transfer?",
        description: "Tell us your flight details, accommodation and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορές Αεροδρομίου Μυκόνου – Ιδιωτικό Ταξί & Σοφέρ",
        description:
          "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Μυκόνου προς το ξενοδοχείο σας στη Χώρα ή αλλού στο νησί. Ζητήστε προσφορά για άνετο ταξίδι.",
      },
      breadcrumbLabel: "Αεροδρόμιο Μυκόνου",
      officialName: "Εθνικό Αεροδρόμιο Μυκόνου",
      iataCode: "JMK",
      hero: {
        eyebrow: "Αεροδρόμιο Μυκόνου (JMK)",
        title: "Ιδιωτικές Μεταφορές Αεροδρομίου Μυκόνου",
        description:
          "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Μυκόνου προς το ξενοδοχείο σας στη Χώρα ή αλλού στο νησί.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Σχετικά με το Αεροδρόμιο Μυκόνου",
        paragraphs: [
          "Το Εθνικό Αεροδρόμιο Μυκόνου (JMK) βρίσκεται σε μικρή απόσταση νοτιοανατολικά της Χώρας Μυκόνου, στην ανατολική πλευρά του νησιού. Λειτουργεί ως η κύρια αεροπορική πύλη προς τη Μύκονο, ένα από τα πιο δημοφιλή νησιά των Κυκλάδων.",
          "Μια ιδιωτική μεταφορά από το Αεροδρόμιο Μυκόνου σας μεταφέρει απευθείας στο ξενοδοχείο σας, είτε στη Χώρα Μυκόνου είτε σε μία από τις παραλιακές περιοχές θερέτρων του νησιού, χωρίς να εξαρτάστε από τα μέσα μαζικής μεταφοράς μετά την προσγείωση.",
        ],
      },
      transferService: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Ιδιωτική Μεταφορά Αεροδρομίου Μυκόνου",
        items: [
          { title: "Υπηρεσία Από Πόρτα σε Πόρτα", description: "Απευθείας μεταφορές από το αεροδρόμιο προς το ξενοδοχείο ή τη διεύθυνσή σας στη Μύκονο." },
          { title: "Προκαθορισμένη Παραλαβή", description: "Η παραλαβή σας οργανώνεται σύμφωνα με τα στοιχεία της πτήσης σας πριν ταξιδέψετε." },
          { title: "Κάλυψη Όλου του Νησιού", description: "Οι μεταφορές μπορούν να οργανωθούν προς τη Χώρα Μυκόνου και θέρετρα σε όλο το νησί." },
          { title: "Ιδιωτικό, Όχι Κοινόχρηστο", description: "Το όχημά σας κλείνεται αποκλειστικά για εσάς και την ομάδα σας." },
        ],
      },
      destinations: {
        eyebrow: "Συνέχεια Ταξιδιού",
        title: "Εξερευνήστε τη Μύκονο",
        items: [
          { label: "Μύκονος", href: "/el/proorismos/mykonos/", description: "Δείτε τον οδηγό προορισμού μας για τη Μύκονο, με πληροφορίες μεταφοράς σε όλο το νησί." },
        ],
      },
      connections: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Χρειάζεστε προσαρμοσμένη διαδρομή στη Μύκονο; Η υπηρεσία ιδιωτικών μεταφορών μας καλύπτει οποιονδήποτε προορισμό στο νησί." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ταξιδεύετε ως μεγαλύτερη ομάδα από το αεροδρόμιο; Δείτε την υπηρεσία ομαδικών μεταφορών μας." },
        ],
      },
      howPickupWorks: sharedHowItWorksEl,
      travelPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Σχεδιάστε τη Μεταφορά σας από το Αεροδρόμιο",
        items: [
          { title: "Έγκαιρη Κράτηση", description: "Συνιστάται η έγκαιρη κράτηση, ιδίως κατά τη διάρκεια της πολυάσχολης καλοκαιρινής περιόδου." },
          { title: "Αριθμός Πτήσης", description: "Δώστε μας τον αριθμό πτήσης σας ώστε η παραλαβή να σχεδιαστεί σύμφωνα με την πραγματική άφιξή σας." },
          { title: "Σημείο Συνάντησης", description: "Οι ακριβείς οδηγίες σημείου συνάντησης επιβεβαιώνονται με την κράτησή σας." },
          { title: "Στοιχεία Καταλύματος", description: "Δώστε μας το όνομα του ξενοδοχείου ή την περιοχή σας ώστε ο προορισμός σας να σχεδιαστεί με ακρίβεια." },
        ],
      },
      vehicleConsiderations: sharedVehicleEl,
      relatedServices: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { label: "Μεταφορές Αεροδρομίου", href: "/el/metafores-aerodromiou/", description: "Δείτε τη γενική μας υπηρεσία μεταφοράς αεροδρομίου που καλύπτει αεροδρόμια σε όλη την Ελλάδα." },
          { label: "Ιδιωτικές Μεταφορές", href: "/el/idiotikes-metafores/", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στη Μύκονο." },
          { label: "Ομαδικές Μεταφορές", href: "/el/omadikes-metafores/", description: "Ιδιωτική μεταφορά για οικογένειες και μεγαλύτερες ομάδες." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πού βρίσκεται το Αεροδρόμιο Μυκόνου;", answer: "Το Εθνικό Αεροδρόμιο Μυκόνου βρίσκεται σε μικρή απόσταση νοτιοανατολικά της Χώρας Μυκόνου." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά από το αεροδρόμιο προς τη Χώρα Μυκόνου;", answer: "Ναι, οι μεταφορές από το αεροδρόμιο προς τη Χώρα Μυκόνου είναι από τα πιο συνηθισμένα αιτήματά μας." },
          { question: "Μπορείτε να οργανώσετε μεταφορά προς παραλιακό θέρετρο αλλού στο νησί;", answer: "Ναι, οι μεταφορές μπορούν να οργανωθούν σε όλη τη Μύκονο — δώστε μας το ξενοδοχείο ή τη διεύθυνσή σας κατά την αίτηση προσφοράς." },
          { question: "Ποιες πληροφορίες χρειάζεται να δώσω κατά την κράτηση;", answer: "Τον αριθμό πτήσης, την ώρα άφιξης, τα στοιχεία του καταλύματός σας, και τον αριθμό επιβατών και αποσκευών." },
          { question: "Τι γίνεται αν η πτήση μου καθυστερήσει;", answer: "Ενημερώστε μας μόλις μάθετε για την καθυστέρηση ώστε η παραλαβή να προσαρμοστεί όπου είναι δυνατόν." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για οικογένεια ή ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας από το Αεροδρόμιο Μυκόνου;",
        description: "Πείτε μας τα στοιχεία της πτήσης, το κατάλυμα και τον αριθμό επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },
}
