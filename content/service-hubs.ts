import type { Locale } from "@/lib/i18n/config"
import type { PageKey } from "@/lib/i18n/routes"

export type ServiceSlug =
  | "cityToCityTransfers"
  | "privateTransfers"
  | "hourlyHire"
  | "cruisePortTransfers"
  | "corporateTransfers"
  | "groupTransfers"

export type IconTextItem = { title: string; description: string }
export type NumberedStep = { title: string; description: string }
export type EntitySection = {
  eyebrow: string
  title: string
  description: string
  items: string[]
  note: string
}
export type IconTextSection = { eyebrow: string; title: string; items: IconTextItem[] }
export type RelatedServiceEntry = { pageKey: PageKey; blurb: string }

export type ServiceHubContent = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    title: string
    description: string
    imageAlt: string
    primaryLabel: string
    secondaryLabel: string
  }
  overview: { eyebrow: string; title: string; paragraphs: string[] }
  features: IconTextSection
  audience: IconTextSection
  howItWorks: { eyebrow: string; title: string; steps: NumberedStep[] }
  entities?: EntitySection
  practicalInfo: IconTextSection
  whyChoose: IconTextSection
  related: { eyebrow: string; title: string; items: RelatedServiceEntry[] }
  faq: {
    eyebrow: string
    title: string
    items: { question: string; answer: string }[]
  }
  cta: {
    heading: string
    description: string
    primaryLabel: string
    secondaryLabel: string
  }
  breadcrumbLabel: string
}

export const serviceHubImages: Record<ServiceSlug, string> = {
  cityToCityTransfers: "/destinations/thessaloniki.webp",
  privateTransfers: "/homepage-herosection.jpg",
  hourlyHire: "/destinations/mykonos.webp",
  cruisePortTransfers: "/ports/piraeus.webp",
  corporateTransfers: "/airports/athens.webp",
  groupTransfers: "/destinations/rhodes.webp",
}

export const serviceHubs: Record<ServiceSlug, Record<Locale, ServiceHubContent>> = {
  // ==========================================================================
  // CITY-TO-CITY TRANSFERS
  // ==========================================================================
  cityToCityTransfers: {
    en: {
      meta: {
        title: "Private City-to-City Transfers in Greece – Book Your Ride",
        description:
          "Book a private, door-to-door transfer between Greek cities and destinations. Skip bus and train connections and travel directly with a professional driver.",
      },
      hero: {
        eyebrow: "City-to-City Transfers",
        title: "Private City-to-City Transfers Across Greece",
        description:
          "Travel directly between Greek cities and destinations with a private, pre-booked transfer. Skip the bus station and public transport connections and go straight from one city to the next in comfort.",
        imageAlt: "Waterfront promenade and White Tower in Thessaloniki, Greece",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "Direct Travel Between Greek Cities and Destinations",
        paragraphs: [
          "A city-to-city transfer is a private vehicle booked to take you directly from one Greek city or town to another, with no changes, connections or shared stops along the way. It's arranged around your travel date rather than a fixed timetable.",
          "Mainland Greece and the islands are connected by a mix of highways, coastal roads and mountain routes, and public transport doesn't always run direct or convenient services between smaller cities and destinations. A private transfer covers that gap with a single vehicle for your entire journey.",
          "Whether you're travelling between Athens and Thessaloniki, heading to a historic site such as Delphi or Meteora, or connecting to a smaller town, your transfer is arranged as a private, pre-booked vehicle with a professional driver.",
        ],
      },
      features: {
        eyebrow: "What's Included",
        title: "What's Included",
        items: [
          { title: "Direct, Point-to-Point Travel", description: "Travel straight from your starting city to your destination without changing vehicles." },
          { title: "Flexible Departure Times", description: "Your pickup time is arranged around your schedule rather than a fixed timetable." },
          { title: "Comfortable Long-Distance Vehicles", description: "Vehicles suited to longer journeys and matched to your passenger numbers and luggage." },
          { title: "Stops Along the Way", description: "Let us know if you'd like to include a stop en route when requesting your quote." },
        ],
      },
      audience: {
        eyebrow: "Who It's For",
        title: "Who Books a City-to-City Transfer",
        items: [
          { title: "Travellers Without a Direct Connection", description: "Routes where the train or bus doesn't run directly, or only at inconvenient times." },
          { title: "Families and Couples", description: "One direct journey instead of managing luggage across multiple public transport changes." },
          { title: "Visitors Combining a City Stay With a Historic Site", description: "Reaching destinations such as Delphi or Meteora as part of a wider itinerary." },
          { title: "Small Groups Travelling Together", description: "One vehicle for the whole party instead of splitting across separate tickets." },
        ],
      },
      howItWorks: {
        eyebrow: "How It Works",
        title: "How to Book Your City-to-City Transfer",
        steps: [
          { title: "Share Your Route", description: "Tell us your starting city, destination, travel date and preferred departure time." },
          { title: "Receive Your Quote", description: "We confirm a vehicle suited to your passenger numbers and luggage." },
          { title: "Confirm Your Booking", description: "Review the details and confirm to lock in your driver and vehicle." },
          { title: "Travel Direct", description: "Your driver meets you at the agreed pickup point and takes you straight to your destination." },
        ],
      },
      entities: {
        eyebrow: "Popular Journeys",
        title: "Popular City-to-City Transfers",
        description: "Examples of the routes we regularly arrange for travellers moving between mainland destinations.",
        items: [
          "Athens – Delphi",
          "Athens – Nafplio",
          "Athens – Meteora",
          "Athens – Thessaloniki",
          "Thessaloniki – Halkidiki",
          "Heraklion – Chania",
        ],
        note: "These are examples of routes we regularly arrange, not a complete list. If your journey isn't shown here, describe your route when requesting a quote and we'll confirm availability.",
      },
      practicalInfo: {
        eyebrow: "Practical Information",
        title: "Planning Your Journey",
        items: [
          { title: "Luggage", description: "Mention your approximate bag count when booking so a suitably sized vehicle can be arranged." },
          { title: "Stops En Route", description: "Let us know in advance if you'd like to stop at a site or town along the way." },
          { title: "Booking Lead Time", description: "Booking ahead is recommended for longer routes and during the busy summer season." },
          { title: "One-Way or Return", description: "Journeys can be booked in either direction independently of each other." },
        ],
      },
      whyChoose: {
        eyebrow: "Why Choose This Service",
        title: "What to Expect",
        items: [
          { title: "Transparent Planning", description: "Your route, any stop requests and vehicle needs are confirmed with you before booking." },
          { title: "Direct Communication", description: "Share special requests directly when requesting your quote, not through a call centre." },
          { title: "Vehicle Matched to Your Journey", description: "Sized to your passenger count and luggage for a comfortable long-distance trip." },
          { title: "One Driver, One Vehicle", description: "No changing vehicles or waiting for connections partway through your route." },
        ],
      },
      related: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { pageKey: "privateTransfers", blurb: "Need a custom point-to-point route that isn't a straightforward city-to-city journey? Our private transfer service covers any origin and destination." },
          { pageKey: "groupTransfers", blurb: "Travelling as a larger family or group between cities? Group transfers use a vehicle matched to your total numbers." },
          { pageKey: "airportTransfers", blurb: "Starting or ending your city-to-city journey at the airport? See our dedicated airport transfer service." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a private transfer between two Greek cities?", answer: "Yes. Tell us your starting city and destination when requesting a quote and we'll confirm a private, direct transfer." },
          { question: "Can I book a one-way city-to-city transfer?", answer: "Yes, transfers can be arranged one-way or round-trip depending on your travel plans." },
          { question: "Can I request a stop along the route?", answer: "Yes, mention any planned stops when requesting your quote so they can be taken into account." },
          { question: "How much luggage can I bring?", answer: "Let us know your approximate luggage when booking so we can confirm a vehicle with enough space." },
          { question: "How far in advance should I book?", answer: "Advance booking is recommended, particularly for longer routes and during the busy summer season." },
          { question: "Do you cover routes to islands connected by road or ferry?", answer: "Some island destinations are reachable by road via bridges or causeways; for others, transfers connect with the relevant ferry port. Let us know your destination and we'll confirm what's possible." },
          { question: "Can I combine a city-to-city transfer with an airport pickup?", answer: "Yes, tell us if your journey starts or ends at an airport and we'll arrange the connection as part of your quote." },
          { question: "What kind of vehicle will I get for a long-distance journey?", answer: "Vehicles are matched to your passenger and luggage numbers and chosen with longer journeys in mind — this is confirmed with your quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your City-to-City Transfer?",
        description: "Tell us your route, travel date and passenger details and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      breadcrumbLabel: "City-to-City Transfers",
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές Μεταξύ Πόλεων στην Ελλάδα – Κλείστε Τώρα",
        description:
          "Κλείστε ιδιωτική μεταφορά από πόρτα σε πόρτα μεταξύ πόλεων και προορισμών της Ελλάδας. Αποφύγετε τις συνδέσεις λεωφορείου ή τρένου και ταξιδέψτε απευθείας με επαγγελματία οδηγό.",
      },
      hero: {
        eyebrow: "Μεταφορές Μεταξύ Πόλεων",
        title: "Ιδιωτικές Μεταφορές Μεταξύ Πόλεων στην Ελλάδα",
        description:
          "Ταξιδέψτε απευθείας μεταξύ ελληνικών πόλεων και προορισμών με ιδιωτική μεταφορά, με προκράτηση. Αποφύγετε τους σταθμούς λεωφορείων και τις συνδέσεις μέσων μαζικής μεταφοράς, και πηγαίνετε απευθείας από τη μία πόλη στην άλλη με άνεση.",
        imageAlt: "Παραλιακή προμενάδα και Λευκός Πύργος στη Θεσσαλονίκη, Ελλάδα",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Απευθείας Ταξίδι Μεταξύ Ελληνικών Πόλεων και Προορισμών",
        paragraphs: [
          "Μια μεταφορά μεταξύ πόλεων είναι ένα ιδιωτικό όχημα με το οποίο ταξιδεύετε απευθείας από μία ελληνική πόλη ή κωμόπολη σε μια άλλη, χωρίς αλλαγές, συνδέσεις ή κοινές στάσεις στη διαδρομή. Οργανώνεται σύμφωνα με την ημερομηνία ταξιδιού σας, όχι με σταθερό δρομολόγιο.",
          "Η ηπειρωτική Ελλάδα και τα νησιά συνδέονται με έναν συνδυασμό αυτοκινητοδρόμων, παράκτιων δρόμων και ορεινών διαδρομών, και τα μέσα μαζικής μεταφοράς δεν προσφέρουν πάντα απευθείας ή βολικές συνδέσεις μεταξύ μικρότερων πόλεων και προορισμών. Μια ιδιωτική μεταφορά καλύπτει αυτό το κενό με ένα μόνο όχημα για όλο το ταξίδι σας.",
          "Είτε ταξιδεύετε μεταξύ Αθήνας και Θεσσαλονίκης, κατευθύνεστε προς έναν ιστορικό χώρο όπως οι Δελφοί ή τα Μετέωρα, είτε συνδέεστε με μια μικρότερη κωμόπολη, η μεταφορά σας οργανώνεται ως ιδιωτικό όχημα, με προκράτηση και επαγγελματία οδηγό.",
        ],
      },
      features: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Τι Περιλαμβάνει",
        items: [
          { title: "Απευθείας Ταξίδι, Σημείο προς Σημείο", description: "Ταξιδέψτε απευθείας από την πόλη εκκίνησης στον προορισμό σας χωρίς αλλαγή οχήματος." },
          { title: "Ευέλικτες Ώρες Αναχώρησης", description: "Η ώρα παραλαβής σας οργανώνεται σύμφωνα με το πρόγραμμά σας, όχι με σταθερό ωράριο." },
          { title: "Άνετα Οχήματα για Μεγάλες Αποστάσεις", description: "Οχήματα κατάλληλα για μεγαλύτερα ταξίδια, προσαρμοσμένα στον αριθμό επιβατών και τις αποσκευές σας." },
          { title: "Στάσεις στη Διαδρομή", description: "Ενημερώστε μας αν θέλετε να συμπεριλάβετε μια στάση στη διαδρομή κατά την αίτηση προσφοράς." },
        ],
      },
      audience: {
        eyebrow: "Για Ποιους Είναι",
        title: "Ποιοι Κλείνουν Μεταφορά Μεταξύ Πόλεων",
        items: [
          { title: "Ταξιδιώτες Χωρίς Απευθείας Σύνδεση", description: "Διαδρομές όπου το τρένο ή το λεωφορείο δεν κυκλοφορεί απευθείας, ή μόνο σε ασύμφορα ωράρια." },
          { title: "Οικογένειες και Ζευγάρια", description: "Ένα απευθείας ταξίδι αντί για διαχείριση αποσκευών σε πολλαπλές αλλαγές μέσων μαζικής μεταφοράς." },
          { title: "Επισκέπτες που Συνδυάζουν μια Πόλη με Ιστορικό Χώρο", description: "Φτάνοντας σε προορισμούς όπως οι Δελφοί ή τα Μετέωρα ως μέρος ενός ευρύτερου προγράμματος." },
          { title: "Μικρές Ομάδες που Ταξιδεύουν Μαζί", description: "Ένα όχημα για όλη την παρέα αντί να χωρίζεστε σε ξεχωριστά εισιτήρια." },
        ],
      },
      howItWorks: {
        eyebrow: "Πώς Λειτουργεί",
        title: "Πώς να Κλείσετε τη Μεταφορά σας Μεταξύ Πόλεων",
        steps: [
          { title: "Πείτε μας τη Διαδρομή σας", description: "Δώστε μας την πόλη εκκίνησης, τον προορισμό, την ημερομηνία ταξιδιού και την προτιμώμενη ώρα αναχώρησης." },
          { title: "Λάβετε την Προσφορά σας", description: "Επιβεβαιώνουμε ένα όχημα κατάλληλο για τον αριθμό επιβατών και τις αποσκευές σας." },
          { title: "Επιβεβαιώστε την Κράτησή σας", description: "Ελέγξτε τα στοιχεία και επιβεβαιώστε για να εξασφαλίσετε τον οδηγό και το όχημά σας." },
          { title: "Ταξιδέψτε Απευθείας", description: "Ο οδηγός σας θα σας συναντήσει στο συμφωνημένο σημείο παραλαβής και θα σας μεταφέρει απευθείας στον προορισμό σας." },
        ],
      },
      entities: {
        eyebrow: "Δημοφιλείς Διαδρομές",
        title: "Δημοφιλείς Μεταφορές Μεταξύ Πόλεων",
        description: "Παραδείγματα διαδρομών που οργανώνουμε τακτικά για ταξιδιώτες που μετακινούνται μεταξύ προορισμών της ηπειρωτικής Ελλάδας.",
        items: [
          "Αθήνα – Δελφοί",
          "Αθήνα – Ναύπλιο",
          "Αθήνα – Μετέωρα",
          "Αθήνα – Θεσσαλονίκη",
          "Θεσσαλονίκη – Χαλκιδική",
          "Ηράκλειο – Χανιά",
        ],
        note: "Αυτά είναι παραδείγματα διαδρομών που οργανώνουμε τακτικά, όχι πλήρης κατάλογος. Αν η διαδρομή σας δεν αναφέρεται εδώ, περιγράψτε την κατά την αίτηση προσφοράς και θα σας επιβεβαιώσουμε τη διαθεσιμότητα.",
      },
      practicalInfo: {
        eyebrow: "Πρακτικές Πληροφορίες",
        title: "Σχεδιάστε το Ταξίδι σας",
        items: [
          { title: "Αποσκευές", description: "Αναφέρετε τον κατά προσέγγιση αριθμό αποσκευών κατά την κράτηση, ώστε να οριστεί όχημα με επαρκή χώρο." },
          { title: "Στάσεις στη Διαδρομή", description: "Ενημερώστε μας εκ των προτέρων αν θέλετε να σταματήσετε σε κάποιο σημείο ή κωμόπολη στη διαδρομή." },
          { title: "Χρόνος Κράτησης", description: "Συνιστάται η έγκαιρη κράτηση για μεγάλες διαδρομές και κατά τη διάρκεια της καλοκαιρινής περιόδου." },
          { title: "Μονή Διαδρομή ή Μετ' Επιστροφής", description: "Οι διαδρομές μπορούν να κλειστούν προς οποιαδήποτε κατεύθυνση ανεξάρτητα." },
        ],
      },
      whyChoose: {
        eyebrow: "Γιατί Αυτή η Υπηρεσία",
        title: "Τι Μπορείτε να Περιμένετε",
        items: [
          { title: "Διαφανής Σχεδιασμός", description: "Η διαδρομή σας, τυχόν στάσεις και οι ανάγκες οχήματος επιβεβαιώνονται μαζί σας πριν την κράτηση." },
          { title: "Άμεση Επικοινωνία", description: "Αναφέρετε ειδικά αιτήματα απευθείας κατά την αίτηση προσφοράς, χωρίς τηλεφωνικό κέντρο." },
          { title: "Όχημα Προσαρμοσμένο στο Ταξίδι σας", description: "Προσαρμοσμένο στον αριθμό επιβατών και τις αποσκευές για ένα άνετο μεγάλο ταξίδι." },
          { title: "Ένας Οδηγός, Ένα Όχημα", description: "Χωρίς αλλαγές οχήματος ή αναμονή για σύνδεση στη μέση της διαδρομής." },
        ],
      },
      related: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { pageKey: "privateTransfers", blurb: "Χρειάζεστε μια προσαρμοσμένη διαδρομή που δεν είναι απλή μεταφορά μεταξύ πόλεων; Η υπηρεσία ιδιωτικών μεταφορών μας καλύπτει οποιαδήποτε αφετηρία και προορισμό." },
          { pageKey: "groupTransfers", blurb: "Ταξιδεύετε ως μεγαλύτερη οικογένεια ή ομάδα μεταξύ πόλεων; Οι ομαδικές μεταφορές χρησιμοποιούν όχημα προσαρμοσμένο στον συνολικό σας αριθμό." },
          { pageKey: "airportTransfers", blurb: "Το ταξίδι σας μεταξύ πόλεων ξεκινά ή τελειώνει στο αεροδρόμιο; Δείτε την ειδική μας υπηρεσία μεταφοράς αεροδρομίου." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά μεταξύ δύο ελληνικών πόλεων;", answer: "Ναι. Πείτε μας την πόλη εκκίνησης και τον προορισμό σας κατά την αίτηση προσφοράς και θα σας επιβεβαιώσουμε μια ιδιωτική, απευθείας μεταφορά." },
          { question: "Μπορώ να κλείσω μεταφορά μεταξύ πόλεων μόνο προς μία κατεύθυνση;", answer: "Ναι, οι μεταφορές μπορούν να οργανωθούν μόνο προς μία κατεύθυνση ή με επιστροφή, ανάλογα με τα σχέδια ταξιδιού σας." },
          { question: "Μπορώ να ζητήσω στάση κατά τη διαδρομή;", answer: "Ναι, αναφέρετε τυχόν προγραμματισμένες στάσεις κατά την αίτηση προσφοράς ώστε να ληφθούν υπόψη." },
          { question: "Πόσες αποσκευές μπορώ να πάρω;", answer: "Ενημερώστε μας για τις κατά προσέγγιση αποσκευές σας κατά την κράτηση, ώστε να επιβεβαιώσουμε όχημα με επαρκή χώρο." },
          { question: "Πόσο νωρίτερα πρέπει να κλείσω;", answer: "Συνιστάται η έγκαιρη κράτηση, ιδίως για μεγαλύτερες διαδρομές και κατά τη διάρκεια της πολυάσχολης καλοκαιρινής περιόδου." },
          { question: "Καλύπτετε διαδρομές προς νησιά που συνδέονται οδικώς ή με ferry;", answer: "Ορισμένοι νησιωτικοί προορισμοί προσεγγίζονται οδικώς μέσω γεφυρών· σε άλλες περιπτώσεις, οι μεταφορές συνδέονται με το αντίστοιχο λιμάνι ferry. Πείτε μας τον προορισμό σας και θα σας επιβεβαιώσουμε τις διαθέσιμες επιλογές." },
          { question: "Μπορώ να συνδυάσω μια μεταφορά μεταξύ πόλεων με παραλαβή από το αεροδρόμιο;", answer: "Ναι, πείτε μας αν το ταξίδι σας ξεκινά ή τελειώνει σε αεροδρόμιο και θα οργανώσουμε τη σύνδεση ως μέρος της προσφοράς σας." },
          { question: "Τι όχημα θα έχω για ένα μεγάλο ταξίδι;", answer: "Τα οχήματα προσαρμόζονται στον αριθμό επιβατών και τις αποσκευές, και επιλέγονται με γνώμονα τα μεγάλα ταξίδια — αυτό επιβεβαιώνεται με την προσφορά σας." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Μεταξύ Πόλεων;",
        description: "Πείτε μας τη διαδρομή, την ημερομηνία ταξιδιού και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      breadcrumbLabel: "Μεταφορές Μεταξύ Πόλεων",
    },
  },

  // ==========================================================================
  // PRIVATE TRANSFERS
  // ==========================================================================
  privateTransfers: {
    en: {
      meta: {
        title: "Private Car Transfers in Greece – Reliable Door-to-Door Service",
        description:
          "Book a private, door-to-door vehicle for any journey in Greece. Airports, hotels, ports and cities, with a professional driver and a vehicle matched to your group.",
      },
      hero: {
        eyebrow: "Private Transfers",
        title: "Private Car Transfers Across Greece",
        description:
          "Book a private, door-to-door vehicle for any journey in Greece — between airports, hotels, ports, cities and destinations — with a professional driver and a vehicle matched to your group.",
        imageAlt: "Illuminated taxi sign on a car roof at night in the city",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "One Private Vehicle for Your Entire Journey",
        paragraphs: [
          "A private transfer is a vehicle booked exclusively for you and your group, with a route and pickup time arranged around your journey rather than a shared schedule. Unlike a shared shuttle or public taxi rank, no other passengers are added to your route, and unlike a rental car, you're not the one driving or navigating.",
          "It's the underlying model behind every transfer we arrange, whatever the starting point or destination — this page covers the general private transfer service, while our airport, city-to-city, port and group transfer pages go into more detail for those specific journey types.",
          "If your journey doesn't fit neatly into one of those categories — perhaps a hotel-to-hotel transfer, a private villa pickup, or a route combining several stops — a private transfer request lets you describe exactly what you need, and we'll arrange a suitable vehicle and driver.",
        ],
      },
      features: {
        eyebrow: "What's Included",
        title: "What's Included",
        items: [
          { title: "Any Origin, Any Destination", description: "From airports and hotels to villas, ports and cities — describe your route when requesting a quote." },
          { title: "One Way or Round Trip", description: "Book a single journey or a return transfer, whichever suits your plans." },
          { title: "Private, Not Shared", description: "Your vehicle is booked exclusively for you and your group, with no other passengers." },
          { title: "Matched to Your Group", description: "Vehicle selection depends on your passenger numbers and luggage." },
        ],
      },
      audience: {
        eyebrow: "Common Scenarios",
        title: "When People Book a Private Transfer",
        items: [
          { title: "Airport to Hotel", description: "Direct pickup after landing, taking you straight to your accommodation." },
          { title: "Hotel to Airport", description: "A timed pickup from your hotel ahead of your departure flight." },
          { title: "Port and Ferry Connections", description: "Journeys between a Greek port and your onward destination — see our port transfers page for more detail." },
          { title: "City-to-City Journeys", description: "Direct travel between mainland cities and destinations — see our city-to-city page for popular routes." },
          { title: "Private Villa or Holiday Home Transfers", description: "Pickup and drop-off at a private address rather than a hotel." },
          { title: "Couples and Business Travellers", description: "A single private vehicle for two, or for a business trip needing a professional standard of travel." },
        ],
      },
      howItWorks: {
        eyebrow: "How It Works",
        title: "How to Book Your Private Transfer",
        steps: [
          { title: "Describe Your Route", description: "Tell us your pickup point, destination and travel date." },
          { title: "Share Your Details", description: "Flight or ferry number if relevant, plus your passenger and luggage count." },
          { title: "Receive Your Quote", description: "We confirm a vehicle suited to your journey and group." },
          { title: "Travel Privately", description: "Your driver meets you at the agreed point for a direct, private journey." },
        ],
      },
      practicalInfo: {
        eyebrow: "Practical Information",
        title: "What to Provide When Booking",
        items: [
          { title: "Pickup and Drop-Off Address", description: "The more specific the address, the easier it is to confirm your route." },
          { title: "Flight or Ferry Details", description: "If your transfer connects with a flight or sailing, share the number so timing can be planned around it." },
          { title: "Passenger and Luggage Count", description: "Used to match a vehicle with enough space and seating." },
          { title: "One-Way or Round Trip", description: "Let us know if you need both legs of your journey arranged." },
        ],
      },
      whyChoose: {
        eyebrow: "Why Choose This Service",
        title: "What to Expect",
        items: [
          { title: "Transparent Quote Process", description: "Pricing depends on your specific route and vehicle, and is confirmed with your quote." },
          { title: "Private and Exclusive", description: "The vehicle is booked only for you and your group, with no shared stops." },
          { title: "Any Custom Route", description: "If your journey isn't a standard airport, city or port transfer, describe it and we'll confirm what's possible." },
          { title: "Professional Drivers", description: "Drivers focused on a comfortable, direct journey to your destination." },
        ],
      },
      related: {
        eyebrow: "Related Services",
        title: "Explore Our Other Transfer Types",
        items: [
          { pageKey: "airportTransfers", blurb: "Landing in Greece or heading to catch a flight? See airport-specific transfer information." },
          { pageKey: "cityToCityTransfers", blurb: "Travelling between mainland cities or destinations? Our city-to-city page covers popular routes." },
          { pageKey: "cruisePortTransfers", blurb: "Arriving or departing by cruise or ferry? See our dedicated port transfer service." },
          { pageKey: "groupTransfers", blurb: "Travelling with a larger party? Group transfers use a vehicle matched to your total numbers." },
          { pageKey: "hourlyHire", blurb: "Need a vehicle for several stops rather than a single journey? Consider hourly hire instead." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "What counts as a private transfer?", answer: "Any journey booked exclusively for you and your group, with a vehicle and driver arranged around your route and schedule, rather than a shared timetable." },
          { question: "How is this different from a regular taxi?", answer: "A private transfer is pre-booked and confirmed in advance, with your pickup point, route and vehicle agreed before you travel, rather than hailed on arrival." },
          { question: "Can I book a custom route that isn't listed elsewhere on the site?", answer: "Yes. Describe your pickup and destination when requesting a quote and we'll confirm whether it can be arranged." },
          { question: "Is a private transfer more expensive than a shared shuttle?", answer: "Pricing depends on your specific route and vehicle, and will be confirmed with your quote. A private transfer means the vehicle is exclusively yours, with no shared stops." },
          { question: "Can I book a private transfer between two hotels?", answer: "Yes, hotel-to-hotel and other custom point-to-point transfers can be requested through the quote form." },
          { question: "Can you pick me up from a private villa or holiday home?", answer: "Yes, provide the address when requesting your quote and we'll confirm the pickup." },
          { question: "Do I need to book a round trip, or can I book one-way?", answer: "Both are available — let us know whether you need one direction or a return journey." },
          { question: "What if my flight or ferry is delayed?", answer: "Share your flight or ferry number when booking so your pickup can be planned around your actual arrival time." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Private Transfer?",
        description: "Tell us your pickup, destination, travel date and passenger details and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      breadcrumbLabel: "Private Transfers",
    },
    el: {
      meta: {
        title: "Ιδιωτικές Μεταφορές στην Ελλάδα – Άνετη Υπηρεσία Από Πόρτα σε Πόρτα",
        description:
          "Κλείστε ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στην Ελλάδα. Αεροδρόμια, ξενοδοχεία, λιμάνια και πόλεις, με επαγγελματία οδηγό και όχημα προσαρμοσμένο στην ομάδα σας.",
      },
      hero: {
        eyebrow: "Ιδιωτικές Μεταφορές",
        title: "Ιδιωτικές Μεταφορές με Αυτοκίνητο σε Όλη την Ελλάδα",
        description:
          "Κλείστε ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στην Ελλάδα — μεταξύ αεροδρομίων, ξενοδοχείων, λιμανιών, πόλεων και προορισμών — με επαγγελματία οδηγό και όχημα προσαρμοσμένο στην ομάδα σας.",
        imageAlt: "Φωτισμένη πινακίδα ταξί πάνω σε αυτοκίνητο τη νύχτα στην πόλη",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Ένα Ιδιωτικό Όχημα για Όλο το Ταξίδι σας",
        paragraphs: [
          "Μια ιδιωτική μεταφορά είναι ένα όχημα που κλείνεται αποκλειστικά για εσάς και την ομάδα σας, με διαδρομή και ώρα παραλαβής οργανωμένες σύμφωνα με το ταξίδι σας, αντί για κοινό δρομολόγιο. Σε αντίθεση με ένα κοινόχρηστο shuttle ή μια δημόσια πιάτσα ταξί, δεν προστίθενται άλλοι επιβάτες στη διαδρομή σας, και σε αντίθεση με ένα ενοικιαζόμενο αυτοκίνητο, δεν οδηγείτε ούτε χρειάζεται να πλοηγηθείτε εσείς.",
          "Είναι το μοντέλο πίσω από κάθε μεταφορά που οργανώνουμε, όποια κι αν είναι η αφετηρία ή ο προορισμός — αυτή η σελίδα καλύπτει τη γενική υπηρεσία ιδιωτικής μεταφοράς, ενώ οι σελίδες μας για αεροδρόμιο, μεταξύ πόλεων, λιμάνια και ομαδικές μεταφορές εξετάζουν αναλυτικότερα αυτούς τους συγκεκριμένους τύπους ταξιδιού.",
          "Αν το ταξίδι σας δεν εντάσσεται καθαρά σε κάποια από αυτές τις κατηγορίες —για παράδειγμα, μια μεταφορά από ξενοδοχείο σε ξενοδοχείο, μια παραλαβή από ιδιωτική βίλα ή μια διαδρομή με πολλές στάσεις— ένα αίτημα ιδιωτικής μεταφοράς σάς επιτρέπει να περιγράψετε ακριβώς τι χρειάζεστε, και θα οργανώσουμε κατάλληλο όχημα και οδηγό.",
        ],
      },
      features: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Τι Περιλαμβάνει",
        items: [
          { title: "Οποιαδήποτε Αφετηρία, Οποιοσδήποτε Προορισμός", description: "Από αεροδρόμια και ξενοδοχεία έως βίλες, λιμάνια και πόλεις — περιγράψτε τη διαδρομή σας κατά την αίτηση προσφοράς." },
          { title: "Μονή Διαδρομή ή Μετ' Επιστροφής", description: "Κλείστε ένα μόνο ταξίδι ή μια μεταφορά μετ' επιστροφής, ανάλογα με τα σχέδιά σας." },
          { title: "Ιδιωτικό, Όχι Κοινόχρηστο", description: "Το όχημά σας κλείνεται αποκλειστικά για εσάς και την ομάδα σας, χωρίς άλλους επιβάτες." },
          { title: "Προσαρμοσμένο στην Ομάδα σας", description: "Η επιλογή οχήματος εξαρτάται από τον αριθμό επιβατών και τις αποσκευές σας." },
        ],
      },
      audience: {
        eyebrow: "Συνήθεις Περιπτώσεις",
        title: "Πότε Κλείνεται μια Ιδιωτική Μεταφορά",
        items: [
          { title: "Αεροδρόμιο προς Ξενοδοχείο", description: "Απευθείας παραλαβή μετά την προσγείωση, με μεταφορά κατευθείαν στο κατάλυμά σας." },
          { title: "Ξενοδοχείο προς Αεροδρόμιο", description: "Προγραμματισμένη παραλαβή από το ξενοδοχείο σας πριν την πτήση αναχώρησής σας." },
          { title: "Συνδέσεις με Λιμάνια και Ferry", description: "Διαδρομές μεταξύ ελληνικού λιμανιού και του επόμενου προορισμού σας· δείτε τη σελίδα μας για μεταφορές σε λιμάνια για περισσότερες λεπτομέρειες." },
          { title: "Ταξίδια Μεταξύ Πόλεων", description: "Απευθείας ταξίδια μεταξύ πόλεων και προορισμών της ηπειρωτικής Ελλάδας· δείτε τη σελίδα μας για μεταφορές μεταξύ πόλεων για δημοφιλείς διαδρομές." },
          { title: "Μεταφορές σε Βίλες ή Εξοχικές Κατοικίες", description: "Παραλαβή και προορισμός σε ιδιωτική διεύθυνση αντί για ξενοδοχείο." },
          { title: "Ζευγάρια και Επαγγελματίες Ταξιδιώτες", description: "Ένα μόνο ιδιωτικό όχημα για δύο άτομα, ή για ένα επαγγελματικό ταξίδι που απαιτεί επαγγελματικό επίπεδο εξυπηρέτησης." },
        ],
      },
      howItWorks: {
        eyebrow: "Πώς Λειτουργεί",
        title: "Πώς να Κλείσετε την Ιδιωτική σας Μεταφορά",
        steps: [
          { title: "Περιγράψτε τη Διαδρομή σας", description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και την ημερομηνία ταξιδιού σας." },
          { title: "Δώστε τα Στοιχεία σας", description: "Αριθμό πτήσης ή ferry αν ισχύει, καθώς και τον αριθμό επιβατών και αποσκευών." },
          { title: "Λάβετε την Προσφορά σας", description: "Επιβεβαιώνουμε όχημα κατάλληλο για το ταξίδι και την ομάδα σας." },
          { title: "Ταξιδέψτε Ιδιωτικά", description: "Ο οδηγός σας θα σας συναντήσει στο συμφωνημένο σημείο για ένα απευθείας, ιδιωτικό ταξίδι." },
        ],
      },
      practicalInfo: {
        eyebrow: "Πρακτικές Πληροφορίες",
        title: "Τι να Αναφέρετε κατά την Κράτηση",
        items: [
          { title: "Διεύθυνση Παραλαβής και Προορισμού", description: "Όσο πιο συγκεκριμένη είναι η διεύθυνση, τόσο πιο εύκολο είναι να επιβεβαιωθεί η διαδρομή σας." },
          { title: "Στοιχεία Πτήσης ή Ferry", description: "Αν η μεταφορά σας συνδέεται με πτήση ή αναχώρηση ferry, δώστε μας τον αριθμό για να σχεδιάσουμε το ωράριο αναλόγως." },
          { title: "Αριθμός Επιβατών και Αποσκευών", description: "Χρησιμοποιείται για να οριστεί όχημα με επαρκή χώρο και θέσεις." },
          { title: "Μονή Διαδρομή ή Μετ' Επιστροφής", description: "Πείτε μας αν χρειάζεστε να οργανώσουμε και τις δύο διαδρομές του ταξιδιού σας." },
        ],
      },
      whyChoose: {
        eyebrow: "Γιατί Αυτή η Υπηρεσία",
        title: "Τι Μπορείτε να Περιμένετε",
        items: [
          { title: "Διαφανής Διαδικασία Προσφοράς", description: "Η τιμή εξαρτάται από τη συγκεκριμένη διαδρομή και όχημα, και επιβεβαιώνεται με την προσφορά σας." },
          { title: "Ιδιωτικό και Αποκλειστικό", description: "Το όχημα κλείνεται μόνο για εσάς και την ομάδα σας, χωρίς κοινές στάσεις." },
          { title: "Οποιαδήποτε Προσαρμοσμένη Διαδρομή", description: "Αν το ταξίδι σας δεν είναι τυπική μεταφορά αεροδρομίου, πόλης ή λιμανιού, περιγράψτε το και θα σας επιβεβαιώσουμε τι μπορεί να οργανωθεί." },
          { title: "Επαγγελματίες Οδηγοί", description: "Οδηγοί εστιασμένοι σε ένα άνετο και απευθείας ταξίδι μέχρι τον προορισμό σας." },
        ],
      },
      related: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Ανακαλύψτε τους Άλλους Τύπους Μεταφοράς μας",
        items: [
          { pageKey: "airportTransfers", blurb: "Προσγειώνεστε στην Ελλάδα ή πρέπει να πάρετε πτήση; Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
          { pageKey: "cityToCityTransfers", blurb: "Ταξιδεύετε μεταξύ πόλεων ή προορισμών της ηπειρωτικής Ελλάδας; Η σελίδα μας για μεταφορές μεταξύ πόλεων καλύπτει τις πιο δημοφιλείς διαδρομές." },
          { pageKey: "cruisePortTransfers", blurb: "Φτάνετε ή αναχωρείτε με κρουαζιέρα ή ferry; Δείτε την ειδική μας υπηρεσία μεταφοράς σε λιμάνια." },
          { pageKey: "groupTransfers", blurb: "Ταξιδεύετε σε μεγάλη ομάδα; Οι ομαδικές μεταφορές χρησιμοποιούν όχημα προσαρμοσμένο στον συνολικό σας αριθμό." },
          { pageKey: "hourlyHire", blurb: "Χρειάζεστε όχημα για πολλές στάσεις αντί για ένα μόνο ταξίδι; Εξετάστε την ενοικίασή μας με ώρα." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Τι θεωρείται ιδιωτική μεταφορά;", answer: "Οποιαδήποτε διαδρομή κλείνεται αποκλειστικά για εσάς και την ομάδα σας, με όχημα και οδηγό οργανωμένα σύμφωνα με τη διαδρομή και το πρόγραμμά σας, αντί για κοινό δρομολόγιο." },
          { question: "Πώς διαφέρει από ένα κανονικό ταξί;", answer: "Μια ιδιωτική μεταφορά κλείνεται και επιβεβαιώνεται εκ των προτέρων, με το σημείο παραλαβής, τη διαδρομή και το όχημα συμφωνημένα πριν ταξιδέψετε, αντί να σταματήσετε ταξί κατά την άφιξη." },
          { question: "Μπορώ να κλείσω μια προσαρμοσμένη διαδρομή που δεν αναφέρεται αλλού στον ιστότοπο;", answer: "Ναι. Περιγράψτε το σημείο παραλαβής και τον προορισμό σας κατά την αίτηση προσφοράς και θα σας επιβεβαιώσουμε αν μπορεί να οργανωθεί." },
          { question: "Είναι μια ιδιωτική μεταφορά πιο ακριβή από ένα κοινόχρηστο shuttle;", answer: "Η τιμή εξαρτάται από τη συγκεκριμένη διαδρομή και όχημα, και θα επιβεβαιωθεί με την προσφορά σας. Μια ιδιωτική μεταφορά σημαίνει ότι το όχημα είναι αποκλειστικά δικό σας, χωρίς κοινές στάσεις." },
          { question: "Μπορώ να κλείσω ιδιωτική μεταφορά μεταξύ δύο ξενοδοχείων;", answer: "Ναι, μεταφορές από ξενοδοχείο σε ξενοδοχείο και άλλες προσαρμοσμένες διαδρομές σημείο προς σημείο μπορούν να ζητηθούν μέσω της φόρμας προσφοράς." },
          { question: "Μπορείτε να με παραλάβετε από ιδιωτική βίλα ή εξοχική κατοικία;", answer: "Ναι, δώστε τη διεύθυνση κατά την αίτηση προσφοράς και θα επιβεβαιώσουμε την παραλαβή." },
          { question: "Πρέπει να κλείσω μετ' επιστροφής, ή μπορώ να κλείσω μόνο μονή διαδρομή;", answer: "Και οι δύο επιλογές είναι διαθέσιμες — πείτε μας αν χρειάζεστε μία κατεύθυνση ή ταξίδι μετ' επιστροφής." },
          { question: "Τι γίνεται αν η πτήση ή το ferry μου καθυστερήσει;", answer: "Δώστε μας τον αριθμό πτήσης ή ferry κατά την κράτηση, ώστε η παραλαβή σας να σχεδιαστεί σύμφωνα με την πραγματική ώρα άφιξής σας." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε την Ιδιωτική σας Μεταφορά;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό, την ημερομηνία ταξιδιού και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      breadcrumbLabel: "Ιδιωτικές Μεταφορές",
    },
  },

  // ==========================================================================
  // HOURLY HIRE
  // ==========================================================================
  hourlyHire: {
    en: {
      meta: {
        title: "Private Car & Chauffeur Hourly Hire in Greece – Book Now",
        description:
          "Hire a private vehicle and driver by the hour in Greece, for sightseeing, meetings or multi-stop itineraries. Request a quote for your dates and plans.",
      },
      hero: {
        eyebrow: "Hourly Hire",
        title: "Private Car & Chauffeur Hourly Hire in Greece",
        description:
          "Book a private vehicle and driver for a set number of hours, ideal for multiple stops, flexible itineraries or a day exploring at your own pace.",
        imageAlt: "Little Venice waterfront houses in Mykonos Town at dusk, Greece",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "A Private Driver at Your Disposal",
        paragraphs: [
          "Hourly hire means booking a vehicle and driver for a block of time — rather than a single point-to-point journey — so the same car stays with you as you move between several stops.",
          "Some journeys don't fit a simple transfer. If you need to make several stops, visit a destination over a few hours, or want the flexibility to adjust your plans as you go, hiring a vehicle and driver for a set duration can be more practical than booking multiple separate transfers.",
          "Let us know how many hours you'd like the vehicle for and a rough idea of your plans when requesting a quote, and we'll confirm whether hourly hire suits your itinerary.",
        ],
      },
      features: {
        eyebrow: "What's Included",
        title: "What's Included",
        items: [
          { title: "Flexible Itinerary", description: "Adjust your stops and timing as your day unfolds, within the hours booked." },
          { title: "Multiple Stops", description: "Suited to visiting several places without booking a separate transfer for each one." },
          { title: "Private Vehicle & Driver", description: "The same vehicle and driver stay with you for the duration of your booking." },
          { title: "Confirmed in Advance", description: "The number of hours and general plan are agreed before your booking is confirmed." },
        ],
      },
      audience: {
        eyebrow: "Common Scenarios",
        title: "When Hourly Hire Makes Sense",
        items: [
          { title: "Sightseeing With Multiple Stops", description: "Visit several sites or neighbourhoods across a city or destination in one booking." },
          { title: "Business Meetings", description: "A driver waiting between appointments rather than arranging separate transfers." },
          { title: "Weddings and Events", description: "Transportation held for the duration of a ceremony, reception or celebration." },
          { title: "Hotel-to-Hotel Travel With Stops", description: "Combine a transfer with sightseeing or errands along the way." },
          { title: "Shopping or Personal Errands", description: "A vehicle on standby while you visit multiple locations." },
          { title: "Conferences and Corporate Days", description: "Coordinated transportation across a single day of meetings or events." },
        ],
      },
      howItWorks: {
        eyebrow: "How It Works",
        title: "How to Book Hourly Hire",
        steps: [
          { title: "Tell Us Your Plans", description: "Share your date, starting point and a rough idea of your itinerary." },
          { title: "Confirm Hours and Route", description: "We discuss the number of hours and general plan needed for your day." },
          { title: "Receive Your Quote", description: "Pricing is confirmed based on your duration, itinerary and vehicle requirements." },
          { title: "Your Driver Stays With You", description: "The same vehicle and driver accompany you for the booked hours." },
        ],
      },
      practicalInfo: {
        eyebrow: "Practical Information",
        title: "What to Provide When Booking",
        items: [
          { title: "Number of Hours", description: "Give us your best estimate — we can help confirm what's realistic for your plans." },
          { title: "Rough Itinerary", description: "A general idea of your stops helps us plan pickup timing and vehicle choice." },
          { title: "Passenger and Luggage Count", description: "Used to match a suitable vehicle for your group." },
          { title: "Pricing and Duration", description: "We don't publish fixed hourly rates or minimum booking lengths — pricing depends on the date, duration, itinerary and vehicle requested, and is confirmed with your quote." },
        ],
      },
      whyChoose: {
        eyebrow: "Why Choose This Service",
        title: "What to Expect",
        items: [
          { title: "Genuine Flexibility", description: "Adjust minor details of your plan as your day develops, within your booked hours." },
          { title: "One Driver for the Day", description: "The same professional driver and vehicle throughout your booking." },
          { title: "Transparent Quote Process", description: "Your duration and itinerary are confirmed with you before booking." },
          { title: "Suited to Complex Days", description: "A practical alternative to booking several separate transfers." },
        ],
      },
      related: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { pageKey: "corporateTransfers", blurb: "Need transportation across a full day of business meetings? See our corporate transfer service." },
          { pageKey: "privateTransfers", blurb: "Only need a single point-to-point journey? A standard private transfer may be simpler." },
          { pageKey: "groupTransfers", blurb: "Hiring a vehicle for a larger group's day out? Group transfers cover higher passenger numbers." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "What is hourly hire best suited for?", answer: "It suits itineraries with multiple stops or flexible timing, such as sightseeing over several hours, rather than a single point-to-point journey." },
          { question: "How many hours can I book?", answer: "Let us know the number of hours you have in mind when requesting a quote and we'll confirm availability." },
          { question: "Is there a minimum number of hours?", answer: "We don't publish a fixed minimum — availability and suitability depend on your date and plans, and will be confirmed with your quote." },
          { question: "How much does hourly hire cost?", answer: "Pricing depends on the date, duration, itinerary and vehicle requested, and is confirmed as part of your quote rather than a published rate." },
          { question: "Can I change my plans during the booking?", answer: "Minor adjustments can usually be accommodated within your booked hours — let your driver know as your plans develop." },
          { question: "Is hourly hire available outside major cities?", answer: "Availability can vary by area — mention your planned route when requesting a quote and we'll confirm." },
          { question: "Can hourly hire start or end with an airport transfer?", answer: "Yes, describe your full plan including any airport connection when requesting your quote." },
          { question: "What information should I provide if I don't have a fixed itinerary yet?", answer: "A general idea of the area and type of stops you're planning is enough for us to confirm hours and pricing — details can be refined closer to your date." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Private Driver?",
        description: "Tell us how many hours you need, your rough itinerary and passenger details, and request your quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      breadcrumbLabel: "Hourly Hire",
    },
    el: {
      meta: {
        title: "Ενοικίαση Οχήματος με Σοφέρ ανά Ώρα στην Ελλάδα – Κλείστε Τώρα",
        description:
          "Ενοικιάστε ιδιωτικό όχημα με οδηγό ανά ώρα στην Ελλάδα, για ξεναγήσεις, συναντήσεις ή προγράμματα με πολλές στάσεις. Ζητήστε προσφορά για τις ημερομηνίες σας.",
      },
      hero: {
        eyebrow: "Ενοικίαση με Ώρα",
        title: "Ενοικίαση Οχήματος με Σοφέρ ανά Ώρα στην Ελλάδα",
        description:
          "Κλείστε ιδιωτικό όχημα με οδηγό για συγκεκριμένο αριθμό ωρών, ιδανικό για πολλές στάσεις, ευέλικτα προγράμματα ή μια ημέρα εξερεύνησης με τον δικό σας ρυθμό.",
        imageAlt: "Παραθαλάσσια σπίτια της Μικρής Βενετίας στη Χώρα Μυκόνου το σούρουπο, Ελλάδα",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Ένας Ιδιωτικός Οδηγός στη Διάθεσή σας",
        paragraphs: [
          "Η ενοικίαση με ώρα σημαίνει ότι κλείνετε όχημα και οδηγό για ένα χρονικό διάστημα — αντί για ένα μόνο ταξίδι σημείο προς σημείο — έτσι ώστε το ίδιο αυτοκίνητο να σας συνοδεύει καθώς μετακινείστε μεταξύ πολλών στάσεων.",
          "Ορισμένα σχέδια δεν ταιριάζουν σε μια απλή μεταφορά. Αν χρειάζεται να κάνετε πολλές στάσεις, να επισκεφθείτε έναν προορισμό για αρκετές ώρες, ή θέλετε την ευελιξία να προσαρμόσετε τα σχέδιά σας στην πορεία, η ενοικίαση οχήματος με οδηγό για ορισμένη διάρκεια μπορεί να είναι πιο πρακτική από την κράτηση πολλών ξεχωριστών μεταφορών.",
          "Πείτε μας πόσες ώρες θέλετε το όχημα και μια γενική ιδέα των σχεδίων σας κατά την αίτηση προσφοράς, και θα σας επιβεβαιώσουμε αν η ενοικίαση με ώρα ταιριάζει στο πρόγραμμά σας.",
        ],
      },
      features: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Τι Περιλαμβάνει",
        items: [
          { title: "Ευέλικτο Πρόγραμμα", description: "Προσαρμόστε τις στάσεις και το ωράριό σας καθώς εξελίσσεται η ημέρα σας, εντός των κλεισμένων ωρών." },
          { title: "Πολλές Στάσεις", description: "Κατάλληλο για επίσκεψη σε πολλά σημεία χωρίς να κλείσετε ξεχωριστή μεταφορά για το καθένα." },
          { title: "Ιδιωτικό Όχημα & Οδηγός", description: "Το ίδιο όχημα και οδηγός σας συνοδεύουν καθ' όλη τη διάρκεια της κράτησής σας." },
          { title: "Επιβεβαιωμένο Εκ των Προτέρων", description: "Ο αριθμός ωρών και το γενικό πλάνο συμφωνούνται πριν επιβεβαιωθεί η κράτησή σας." },
        ],
      },
      audience: {
        eyebrow: "Συνήθεις Περιπτώσεις",
        title: "Πότε Έχει Νόημα η Ενοικίαση με Ώρα",
        items: [
          { title: "Ξενάγηση με Πολλές Στάσεις", description: "Επισκεφθείτε πολλά αξιοθέατα ή γειτονιές μιας πόλης ή προορισμού σε μία κράτηση." },
          { title: "Επαγγελματικές Συναντήσεις", description: "Ένας οδηγός που περιμένει μεταξύ ραντεβού αντί να οργανώνετε ξεχωριστές μεταφορές." },
          { title: "Γάμοι και Εκδηλώσεις", description: "Μεταφορά κλεισμένη για όλη τη διάρκεια μιας τελετής, δεξίωσης ή γιορτής." },
          { title: "Μεταφορές Ξενοδοχείου με Στάσεις", description: "Συνδυάστε μια μεταφορά με ξενάγηση ή δουλειές στη διαδρομή." },
          { title: "Ψώνια ή Προσωπικές Δουλειές", description: "Ένα όχημα σε ετοιμότητα ενώ επισκέπτεστε πολλά σημεία." },
          { title: "Συνέδρια και Εταιρικές Ημέρες", description: "Συντονισμένη μεταφορά σε όλη τη διάρκεια μιας ημέρας συναντήσεων ή εκδηλώσεων." },
        ],
      },
      howItWorks: {
        eyebrow: "Πώς Λειτουργεί",
        title: "Πώς να Κλείσετε την Ενοικίαση με Ώρα",
        steps: [
          { title: "Πείτε μας τα Σχέδιά σας", description: "Δώστε την ημερομηνία, το σημείο εκκίνησης και μια γενική ιδέα του προγράμματός σας." },
          { title: "Επιβεβαιώστε Ώρες και Διαδρομή", description: "Συζητάμε τον αριθμό ωρών και το γενικό πλάνο που χρειάζεστε για την ημέρα σας." },
          { title: "Λάβετε την Προσφορά σας", description: "Η τιμή επιβεβαιώνεται με βάση τη διάρκεια, το πρόγραμμα και το ζητούμενο όχημα." },
          { title: "Ο Οδηγός σας Μένει Μαζί σας", description: "Το ίδιο όχημα και οδηγός σας συνοδεύουν για τις κλεισμένες ώρες." },
        ],
      },
      practicalInfo: {
        eyebrow: "Πρακτικές Πληροφορίες",
        title: "Τι να Δώσετε κατά την Κράτηση",
        items: [
          { title: "Αριθμός Ωρών", description: "Δώστε μας την καλύτερη εκτίμησή σας — μπορούμε να σας βοηθήσουμε να επιβεβαιώσετε τι είναι ρεαλιστικό για τα σχέδιά σας." },
          { title: "Γενικό Πρόγραμμα", description: "Μια γενική ιδέα των στάσεών σας μάς βοηθά να σχεδιάσουμε την ώρα παραλαβής και την επιλογή οχήματος." },
          { title: "Αριθμός Επιβατών και Αποσκευών", description: "Χρησιμοποιείται για να οριστεί κατάλληλο όχημα για την ομάδα σας." },
          { title: "Τιμή και Διάρκεια", description: "Δεν δημοσιεύουμε σταθερές ωριαίες τιμές ή ελάχιστες διάρκειες κράτησης — η τιμή εξαρτάται από την ημερομηνία, τη διάρκεια, το πρόγραμμα και το ζητούμενο όχημα, και επιβεβαιώνεται με την προσφορά σας." },
        ],
      },
      whyChoose: {
        eyebrow: "Γιατί Αυτή η Υπηρεσία",
        title: "Τι Μπορείτε να Περιμένετε",
        items: [
          { title: "Πραγματική Ευελιξία", description: "Προσαρμόστε μικρές λεπτομέρειες του πλάνου σας καθώς εξελίσσεται η ημέρα, εντός των κλεισμένων ωρών." },
          { title: "Ένας Οδηγός για Όλη την Ημέρα", description: "Ο ίδιος επαγγελματίας οδηγός και όχημα καθ' όλη τη διάρκεια της κράτησής σας." },
          { title: "Διαφανής Διαδικασία Προσφοράς", description: "Η διάρκεια και το πρόγραμμά σας επιβεβαιώνονται μαζί σας πριν την κράτηση." },
          { title: "Ιδανικό για Σύνθετες Ημέρες", description: "Μια πρακτική εναλλακτική αντί για κράτηση πολλών ξεχωριστών μεταφορών." },
        ],
      },
      related: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { pageKey: "corporateTransfers", blurb: "Χρειάζεστε μεταφορά για μια ολόκληρη ημέρα επαγγελματικών συναντήσεων; Δείτε την υπηρεσία εταιρικών μεταφορών μας." },
          { pageKey: "privateTransfers", blurb: "Χρειάζεστε μόνο ένα ταξίδι σημείο προς σημείο; Μια τυπική ιδιωτική μεταφορά μπορεί να είναι πιο απλή." },
          { pageKey: "groupTransfers", blurb: "Ενοικιάζετε όχημα για την ημερήσια εξόρμηση μιας μεγάλης ομάδας; Οι ομαδικές μεταφορές καλύπτουν μεγαλύτερο αριθμό επιβατών." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Για τι είναι κατάλληλη η ενοικίαση με ώρα;", answer: "Είναι κατάλληλη για προγράμματα με πολλές στάσεις ή ευέλικτο ωράριο, όπως ξενάγηση διάρκειας αρκετών ωρών, αντί για ένα μόνο ταξίδι σημείο προς σημείο." },
          { question: "Πόσες ώρες μπορώ να κλείσω;", answer: "Πείτε μας τον αριθμό ωρών που έχετε κατά νου κατά την αίτηση προσφοράς και θα σας επιβεβαιώσουμε τη διαθεσιμότητα." },
          { question: "Υπάρχει ελάχιστος αριθμός ωρών;", answer: "Δεν δημοσιεύουμε σταθερό ελάχιστο — η διαθεσιμότητα και η καταλληλότητα εξαρτώνται από την ημερομηνία και τα σχέδιά σας, και θα επιβεβαιωθούν με την προσφορά σας." },
          { question: "Πόσο κοστίζει η ενοικίαση με ώρα;", answer: "Η τιμή εξαρτάται από την ημερομηνία, τη διάρκεια, το πρόγραμμα και το ζητούμενο όχημα, και επιβεβαιώνεται ως μέρος της προσφοράς σας αντί για δημοσιευμένη τιμή." },
          { question: "Μπορώ να αλλάξω τα σχέδιά μου κατά τη διάρκεια της κράτησης;", answer: "Συνήθως μπορούν να γίνουν μικρές προσαρμογές εντός των κλεισμένων ωρών — ενημερώστε τον οδηγό σας καθώς εξελίσσονται τα σχέδιά σας." },
          { question: "Είναι διαθέσιμη η ενοικίαση με ώρα εκτός μεγάλων πόλεων;", answer: "Η διαθεσιμότητα μπορεί να διαφέρει ανάλογα με την περιοχή — αναφέρετε την προγραμματισμένη διαδρομή σας κατά την αίτηση προσφοράς και θα σας το επιβεβαιώσουμε." },
          { question: "Μπορεί η ενοικίαση με ώρα να ξεκινήσει ή να τελειώσει με μεταφορά αεροδρομίου;", answer: "Ναι, περιγράψτε το πλήρες σχέδιό σας, συμπεριλαμβανομένης τυχόν σύνδεσης με το αεροδρόμιο, κατά την αίτηση προσφοράς." },
          { question: "Τι πληροφορίες πρέπει να δώσω αν δεν έχω ακόμα σταθερό πρόγραμμα;", answer: "Μια γενική ιδέα της περιοχής και του τύπου στάσεων που σχεδιάζετε είναι αρκετή για να επιβεβαιώσουμε ώρες και τιμή — οι λεπτομέρειες μπορούν να οριστικοποιηθούν πιο κοντά στην ημερομηνία σας." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τον Ιδιωτικό σας Οδηγό;",
        description: "Πείτε μας πόσες ώρες χρειάζεστε, το γενικό σας πρόγραμμα και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      breadcrumbLabel: "Ενοικίαση με Ώρα",
    },
  },

  // ==========================================================================
  // CRUISE PORT TRANSFERS
  // ==========================================================================
  cruisePortTransfers: {
    en: {
      meta: {
        title: "Port Transfer, Taxi & Chauffeur Service in Greece – Book Now",
        description:
          "Book a private transfer to or from a Greek cruise or ferry port, timed around your sailing. Covers Piraeus, Rafina, Lavrio, Thessaloniki, Heraklion and Patras.",
      },
      hero: {
        eyebrow: "Cruise & Ferry Port Transfers",
        title: "Port Transfer, Taxi & Chauffeur Service in Greece",
        description:
          "Book a private transfer timed around your cruise or ferry, between the port and airports, hotels or cities across Greece.",
        imageAlt: "Ferries and cruise ships docked at the Port of Piraeus at sunset, Greece",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "Transfers Timed Around Your Sailing",
        paragraphs: [
          "A port transfer is a private vehicle booked to connect a Greek cruise or ferry port with your onward destination, timed around your embarkation or disembarkation rather than a queue for a taxi rank.",
          "Greece's ports handle everything from major international cruise ships to regional ferries connecting the islands. Piraeus alone serves both roles — one of the busiest passenger ports in Europe — alongside other ports such as Rafina, Lavrio, Thessaloniki, Heraklion and Patras.",
          "Journeys can be arranged between a port and the airport, your hotel, or another city, so you're not relying on public transport or an unpre-booked taxi at a busy terminal.",
        ],
      },
      features: {
        eyebrow: "What's Included",
        title: "What's Included",
        items: [
          { title: "Embarkation & Disembarkation", description: "Transfers can be arranged for either your arrival at or departure from the port." },
          { title: "Port to Airport", description: "Direct transfers between a Greek port and the relevant airport." },
          { title: "Port to City or Hotel", description: "Continue your journey directly to a city centre or your hotel." },
          { title: "Major Greek Ports Covered", description: "Including Piraeus, Rafina, Lavrio, Thessaloniki, Heraklion and Patras." },
        ],
      },
      audience: {
        eyebrow: "Common Transfer Scenarios",
        title: "Common Port Transfer Journeys",
        items: [
          { title: "Airport to Port", description: "Landing before a cruise or ferry departure and heading straight to the terminal — see our airport transfer service for the arrival side." },
          { title: "Port to Airport", description: "Disembarking and connecting directly to a departing flight." },
          { title: "Hotel to Port", description: "A timed pickup from your hotel ahead of your sailing." },
          { title: "Port to Hotel", description: "Heading to your accommodation after disembarking." },
          { title: "City to Port", description: "Connecting from a mainland city to your port of departure." },
        ],
      },
      howItWorks: {
        eyebrow: "How It Works",
        title: "How to Book Your Port Transfer",
        steps: [
          { title: "Share Your Sailing Details", description: "Tell us your port, cruise or ferry line, and embarkation or disembarkation time." },
          { title: "Confirm Your Route", description: "Let us know your onward destination — airport, hotel or another city." },
          { title: "Receive Your Quote", description: "We confirm a vehicle suited to your passenger numbers and luggage." },
          { title: "Meet Your Driver", description: "Pickup details are confirmed with your booking, timed around your sailing." },
        ],
      },
      entities: {
        eyebrow: "Ports We Cover",
        title: "Popular Greek Ports",
        description: "Transfers can be arranged to and from these major cruise and ferry ports.",
        items: ["Piraeus", "Rafina", "Lavrio", "Thessaloniki", "Heraklion", "Patras"],
        note: "These are examples of the ports we regularly serve, not a complete list. If your port isn't shown here, let us know when requesting a quote.",
      },
      practicalInfo: {
        eyebrow: "Practical Information",
        title: "Planning Your Port Transfer",
        items: [
          { title: "Cruise and Ferry Passengers", description: "Both cruise and ferry connections can be arranged — let us know which applies to your journey." },
          { title: "Luggage", description: "Mention your approximate bag count so a suitably sized vehicle can be arranged." },
          { title: "Pickup Timing", description: "Timing is planned around your sailing time and typical disembarkation or check-in windows." },
          { title: "Connecting Flights or Hotels", description: "Share any onward flight or hotel details so your full journey can be coordinated." },
        ],
      },
      whyChoose: {
        eyebrow: "Why Choose This Service",
        title: "What to Expect",
        items: [
          { title: "Timed Around Your Sailing", description: "Your pickup or drop-off is planned around your actual embarkation or disembarkation time." },
          { title: "One Direct Journey", description: "No queuing for a taxi rank or navigating unfamiliar public transport at the terminal." },
          { title: "Confirmed Pickup Details", description: "Exact pickup points and meeting instructions are confirmed with your booking, since these vary by port and terminal." },
          { title: "Vehicle Matched to Your Group", description: "Sized to your passenger numbers and luggage, including cruise groups." },
        ],
      },
      related: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { pageKey: "airportTransfers", blurb: "Connecting your cruise or ferry with a flight? See our dedicated airport transfer service." },
          { pageKey: "privateTransfers", blurb: "Need a custom route not covered here, such as a private villa near the coast? Our private transfer service covers any destination." },
          { pageKey: "groupTransfers", blurb: "Travelling as a larger cruise or family group? Group transfers use a vehicle matched to your total numbers." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can you time my transfer around my cruise departure?", answer: "Yes, let us know your embarkation or disembarkation time when requesting a quote." },
          { question: "Which Greek ports do you cover?", answer: "Transfers can be arranged to and from major ports including Piraeus, Rafina, Lavrio, Thessaloniki, Heraklion and Patras, among others." },
          { question: "Can I book a transfer from the airport straight to the port?", answer: "Yes, airport-to-port transfers are one of our most common port transfer requests." },
          { question: "Can you arrange a transfer from the cruise port to my hotel?", answer: "Yes, port-to-hotel transfers can be arranged around your disembarkation time." },
          { question: "Can I arrange a ferry port pickup, not just cruise?", answer: "Yes, both cruise and ferry connections are covered — let us know which applies when requesting your quote." },
          { question: "What information should I provide for a port transfer?", answer: "Your port, sailing line, embarkation or disembarkation time, onward destination, and passenger and luggage numbers." },
          { question: "What if my cruise arrival time changes?", answer: "Let us know as soon as you're aware of any change so pickup arrangements can be adjusted where possible." },
          { question: "Where exactly will my driver meet me at the port?", answer: "Exact meeting points vary by port and terminal and are confirmed with your booking rather than published generally." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Port Transfer?",
        description: "Tell us your port, sailing time, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      breadcrumbLabel: "Cruise Port Transfers",
    },
    el: {
      meta: {
        title: "Μεταφορές σε Λιμάνια στην Ελλάδα – Ταξί και Υπηρεσία Σοφέρ",
        description:
          "Κλείστε ιδιωτική μεταφορά από ή προς ελληνικό λιμάνι κρουαζιέρας ή ferry, προσαρμοσμένη στο ωράριό σας. Καλύπτουμε Πειραιά, Ραφήνα, Λαύριο, Θεσσαλονίκη, Ηράκλειο και Πάτρα.",
      },
      hero: {
        eyebrow: "Μεταφορές σε Λιμάνια Κρουαζιέρας και Ferry",
        title: "Μεταφορές σε Λιμάνια, Ταξί και Υπηρεσία Σοφέρ στην Ελλάδα",
        description:
          "Κλείστε ιδιωτική μεταφορά προσαρμοσμένη στο ωράριο της κρουαζιέρας ή του ferry σας, μεταξύ του λιμανιού και αεροδρομίων, ξενοδοχείων ή πόλεων σε όλη την Ελλάδα.",
        imageAlt: "Ferry και κρουαζιερόπλοια αγκυροβολημένα στο λιμάνι του Πειραιά το ηλιοβασίλεμα, Ελλάδα",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Μεταφορές Προσαρμοσμένες στο Ωράριο του Πλου σας",
        paragraphs: [
          "Μια μεταφορά λιμανιού είναι ένα ιδιωτικό όχημα που κλείνεται για να συνδέσει ένα ελληνικό λιμάνι κρουαζιέρας ή ferry με τον επόμενο προορισμό σας, προσαρμοσμένο στην ώρα επιβίβασης ή αποβίβασής σας αντί για αναμονή σε πιάτσα ταξί.",
          "Τα λιμάνια της Ελλάδας εξυπηρετούν από μεγάλα διεθνή κρουαζιερόπλοια έως περιφερειακά ferry που συνδέουν τα νησιά. Ο Πειραιάς από μόνος του καλύπτει και τους δύο ρόλους —ένα από τα πιο πολυσύχναστα λιμάνια επιβατών στην Ευρώπη— μαζί με άλλα λιμάνια όπως η Ραφήνα, το Λαύριο, η Θεσσαλονίκη, το Ηράκλειο και η Πάτρα.",
          "Οι διαδρομές μπορούν να οργανωθούν μεταξύ ενός λιμανιού και του αεροδρομίου, του ξενοδοχείου σας ή μιας άλλης πόλης, ώστε να μην εξαρτάστε από τα μέσα μαζικής μεταφοράς ή από ένα μη προκρατημένο ταξί σε ένα πολυσύχναστο τερματικό.",
        ],
      },
      features: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Τι Περιλαμβάνει",
        items: [
          { title: "Επιβίβαση & Αποβίβαση", description: "Οι μεταφορές μπορούν να οργανωθούν τόσο για την άφιξή σας όσο και για την αναχώρησή σας από το λιμάνι." },
          { title: "Λιμάνι προς Αεροδρόμιο", description: "Απευθείας μεταφορές μεταξύ ελληνικού λιμανιού και του αντίστοιχου αεροδρομίου." },
          { title: "Λιμάνι προς Πόλη ή Ξενοδοχείο", description: "Συνεχίστε το ταξίδι σας απευθείας στο κέντρο της πόλης ή στο ξενοδοχείο σας." },
          { title: "Κύρια Λιμάνια της Ελλάδας", description: "Συμπεριλαμβανομένων του Πειραιά, της Ραφήνας, του Λαυρίου, της Θεσσαλονίκης, του Ηρακλείου και της Πάτρας." },
        ],
      },
      audience: {
        eyebrow: "Συνήθεις Περιπτώσεις",
        title: "Συνήθεις Διαδρομές Μεταφοράς σε Λιμάνι",
        items: [
          { title: "Αεροδρόμιο προς Λιμάνι", description: "Προσγείωση πριν την αναχώρηση κρουαζιέρας ή ferry και απευθείας μετάβαση στο τερματικό· δείτε την υπηρεσία μεταφοράς αεροδρομίου μας για την άφιξη." },
          { title: "Λιμάνι προς Αεροδρόμιο", description: "Αποβίβαση και απευθείας σύνδεση με πτήση αναχώρησης." },
          { title: "Ξενοδοχείο προς Λιμάνι", description: "Προγραμματισμένη παραλαβή από το ξενοδοχείο σας πριν την αναχώρησή σας." },
          { title: "Λιμάνι προς Ξενοδοχείο", description: "Μετάβαση στο κατάλυμά σας μετά την αποβίβαση." },
          { title: "Πόλη προς Λιμάνι", description: "Σύνδεση από πόλη της ηπειρωτικής Ελλάδας μέχρι το λιμάνι αναχώρησής σας." },
        ],
      },
      howItWorks: {
        eyebrow: "Πώς Λειτουργεί",
        title: "Πώς να Κλείσετε τη Μεταφορά σας σε Λιμάνι",
        steps: [
          { title: "Πείτε μας το Ωράριο του Πλου σας", description: "Πείτε μας το λιμάνι, την εταιρεία κρουαζιέρας ή ferry, και την ώρα επιβίβασης ή αποβίβασης." },
          { title: "Επιβεβαιώστε τη Διαδρομή σας", description: "Πείτε μας τον επόμενο προορισμό σας — αεροδρόμιο, ξενοδοχείο ή άλλη πόλη." },
          { title: "Λάβετε την Προσφορά σας", description: "Επιβεβαιώνουμε όχημα κατάλληλο για τον αριθμό επιβατών και τις αποσκευές σας." },
          { title: "Συναντήστε τον Οδηγό σας", description: "Οι λεπτομέρειες παραλαβής επιβεβαιώνονται με την κράτησή σας, προσαρμοσμένες στο ωράριο αναχώρησής σας." },
        ],
      },
      entities: {
        eyebrow: "Λιμάνια που Καλύπτουμε",
        title: "Δημοφιλή Λιμάνια της Ελλάδας",
        description: "Οι μεταφορές μπορούν να οργανωθούν από και προς αυτά τα κύρια λιμάνια κρουαζιέρας και ferry.",
        items: ["Πειραιάς", "Ραφήνα", "Λαύριο", "Θεσσαλονίκη", "Ηράκλειο", "Πάτρα"],
        note: "Αυτά είναι παραδείγματα λιμανιών που καλύπτουμε τακτικά, όχι πλήρης κατάλογος. Αν το λιμάνι σας δεν αναφέρεται εδώ, ενημερώστε μας κατά την αίτηση προσφοράς.",
      },
      practicalInfo: {
        eyebrow: "Πρακτικές Πληροφορίες",
        title: "Σχεδιάστε τη Μεταφορά σας σε Λιμάνι",
        items: [
          { title: "Επιβάτες Κρουαζιέρας και Ferry", description: "Μπορούν να οργανωθούν συνδέσεις τόσο κρουαζιέρας όσο και ferry — πείτε μας ποια αφορά το ταξίδι σας." },
          { title: "Αποσκευές", description: "Αναφέρετε τον κατά προσέγγιση αριθμό αποσκευών ώστε να οριστεί όχημα με επαρκή χώρο." },
          { title: "Ωράριο Παραλαβής", description: "Το ωράριο σχεδιάζεται σύμφωνα με την ώρα αναχώρησής σας και τα συνήθη χρονικά περιθώρια αποβίβασης ή check-in." },
          { title: "Πτήσεις ή Ξενοδοχεία Σύνδεσης", description: "Δώστε μας τυχόν επόμενη πτήση ή ξενοδοχείο για να συντονίσουμε όλο το ταξίδι σας." },
        ],
      },
      whyChoose: {
        eyebrow: "Γιατί Αυτή η Υπηρεσία",
        title: "Τι Μπορείτε να Περιμένετε",
        items: [
          { title: "Προσαρμοσμένο στο Ωράριο του Πλου σας", description: "Η παραλαβή ή η παράδοσή σας σχεδιάζεται σύμφωνα με την πραγματική ώρα επιβίβασης ή αποβίβασής σας." },
          { title: "Ένα Απευθείας Ταξίδι", description: "Χωρίς ουρές σε πιάτσα ταξί ή προσπάθεια να βρείτε άγνωστα μέσα μαζικής μεταφοράς στο τερματικό." },
          { title: "Επιβεβαιωμένες Λεπτομέρειες Παραλαβής", description: "Τα ακριβή σημεία παραλαβής και οι οδηγίες συνάντησης επιβεβαιώνονται με την κράτησή σας, καθώς διαφέρουν ανά λιμάνι και τερματικό." },
          { title: "Όχημα Προσαρμοσμένο στην Ομάδα σας", description: "Προσαρμοσμένο στον αριθμό επιβατών και αποσκευών, συμπεριλαμβανομένων ομάδων κρουαζιέρας." },
        ],
      },
      related: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { pageKey: "airportTransfers", blurb: "Συνδέετε την κρουαζιέρα ή το ferry σας με πτήση; Δείτε την ειδική μας υπηρεσία μεταφοράς αεροδρομίου." },
          { pageKey: "privateTransfers", blurb: "Χρειάζεστε προσαρμοσμένη διαδρομή που δεν καλύπτεται εδώ, όπως μια ιδιωτική βίλα κοντά στην ακτή; Η υπηρεσία ιδιωτικών μεταφορών μας καλύπτει οποιονδήποτε προορισμό." },
          { pageKey: "groupTransfers", blurb: "Ταξιδεύετε ως μεγάλη ομάδα κρουαζιέρας ή οικογένεια; Οι ομαδικές μεταφορές χρησιμοποιούν όχημα προσαρμοσμένο στον συνολικό σας αριθμό." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορείτε να προσαρμόσετε τη μεταφορά μου στην ώρα αναχώρησης της κρουαζιέρας μου;", answer: "Ναι, πείτε μας την ώρα επιβίβασης ή αποβίβασής σας κατά την αίτηση προσφοράς." },
          { question: "Ποια ελληνικά λιμάνια καλύπτετε;", answer: "Οι μεταφορές μπορούν να οργανωθούν από και προς τα κύρια λιμάνια, συμπεριλαμβανομένων του Πειραιά, της Ραφήνας, του Λαυρίου, της Θεσσαλονίκης, του Ηρακλείου και της Πάτρας, μεταξύ άλλων." },
          { question: "Μπορώ να κλείσω απευθείας μεταφορά από το αεροδρόμιο στο λιμάνι;", answer: "Ναι, οι μεταφορές αεροδρομίου προς λιμάνι είναι ένα από τα πιο συνηθισμένα αιτήματά μας." },
          { question: "Μπορείτε να οργανώσετε μεταφορά από το λιμάνι κρουαζιέρας στο ξενοδοχείο μου;", answer: "Ναι, οι μεταφορές λιμανιού προς ξενοδοχείο μπορούν να οργανωθούν σύμφωνα με την ώρα αποβίβασής σας." },
          { question: "Μπορώ να οργανώσω παραλαβή από λιμάνι ferry, όχι μόνο κρουαζιέρας;", answer: "Ναι, καλύπτουμε τόσο συνδέσεις κρουαζιέρας όσο και ferry — πείτε μας ποια ισχύει κατά την αίτηση προσφοράς." },
          { question: "Ποιες πληροφορίες πρέπει να δώσω για μεταφορά σε λιμάνι;", answer: "Το λιμάνι σας, την εταιρεία, την ώρα επιβίβασης ή αποβίβασης, τον επόμενο προορισμό, και τον αριθμό επιβατών και αποσκευών." },
          { question: "Τι γίνεται αν αλλάξει η ώρα άφιξης της κρουαζιέρας μου;", answer: "Ενημερώστε μας μόλις το μάθετε, ώστε η παραλαβή να προσαρμοστεί όπου είναι δυνατόν." },
          { question: "Πού ακριβώς θα με συναντήσει ο οδηγός μου στο λιμάνι;", answer: "Τα ακριβή σημεία συνάντησης διαφέρουν ανά λιμάνι και τερματικό και επιβεβαιώνονται με την κράτησή σας αντί να δημοσιεύονται γενικά." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στο Λιμάνι;",
        description: "Πείτε μας το λιμάνι, την ώρα αναχώρησης, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      breadcrumbLabel: "Μεταφορές σε Λιμάνια",
    },
  },

  // ==========================================================================
  // CORPORATE TRANSFERS
  // ==========================================================================
  corporateTransfers: {
    en: {
      meta: {
        title: "Corporate Transfers & Chauffeur Service in Greece – Get a Quote",
        description:
          "Book reliable corporate transfers in Greece for business travel, meetings and events. Professional drivers, punctual pickups and coordinated group travel.",
      },
      hero: {
        eyebrow: "Corporate Transfers",
        title: "Corporate Transfers & Chauffeur Service in Greece",
        description:
          "Reliable private transportation for business travel, meetings and corporate events across Greece, with professional drivers and punctual pickups.",
        imageAlt: "Terminal building at Athens International Airport, Greece",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "Professional Transportation for Business Travel",
        paragraphs: [
          "Business travel comes with its own priorities — punctuality, a professional standard of service, and transportation that can be relied on without last-minute uncertainty. Corporate transfers follow the same private, pre-booked model as our other services, arranged around your schedule.",
          "Whether you need an airport pickup ahead of a meeting, transportation between offices or venues, or transfers for visiting colleagues and clients, requests can be arranged individually or coordinated for a group.",
          "This page covers business-travel scenarios specifically. For a general private transfer or a full-day itinerary with several stops, our private transfer and hourly hire services may also be relevant.",
        ],
      },
      features: {
        eyebrow: "What's Included",
        title: "What's Included",
        items: [
          { title: "Punctual, Pre-Arranged Pickup", description: "Pickup times are arranged in advance around your schedule." },
          { title: "Professional Drivers", description: "Experienced drivers focused on a discreet, professional journey." },
          { title: "Airport & Meeting Transfers", description: "Transfers between airports, offices, venues and hotels." },
          { title: "Coordinated Group Travel", description: "Transfers can be coordinated for colleagues or clients travelling together." },
        ],
      },
      audience: {
        eyebrow: "Common Scenarios",
        title: "Business Travel We Support",
        items: [
          { title: "Executives and Business Travellers", description: "Airport or hotel pickups ahead of meetings, arranged with punctuality in mind." },
          { title: "Conferences and Corporate Events", description: "Transportation coordinated around event schedules and venue locations." },
          { title: "Client and Colleague Visits", description: "Arranging transfers on behalf of visiting colleagues or clients." },
          { title: "Multi-Stop Business Itineraries", description: "Several meetings or venues across a single day — see our hourly hire service for this specifically." },
        ],
      },
      howItWorks: {
        eyebrow: "How It Works",
        title: "How to Book a Corporate Transfer",
        steps: [
          { title: "Share Traveller and Schedule Details", description: "Tell us who is travelling, their pickup point and timing." },
          { title: "Confirm the Itinerary", description: "Include any meetings, venues or onward destinations relevant to the transfer." },
          { title: "Receive Your Quote", description: "We confirm a vehicle and driver suited to your requirements." },
          { title: "Travel on Schedule", description: "Your driver arrives at the agreed time and location." },
        ],
      },
      practicalInfo: {
        eyebrow: "Practical Information",
        title: "Planning a Corporate Booking",
        items: [
          { title: "Booking on Behalf of Someone Else", description: "Provide the traveller's details when requesting the quote." },
          { title: "Multiple Travellers Arriving Separately", description: "Let us know each traveller's details and we'll coordinate accordingly." },
          { title: "Itinerary Changes", description: "Share updates as early as possible if meeting times or venues change." },
          { title: "Pricing", description: "Corporate transfer pricing depends on the same factors as any private transfer — route, distance and vehicle type — confirmed with your quote." },
        ],
      },
      whyChoose: {
        eyebrow: "Why Choose This Service",
        title: "What to Expect",
        items: [
          { title: "Punctuality", description: "Pickup times are arranged and confirmed in advance around your schedule." },
          { title: "Professional Standard", description: "Drivers focused on a discreet, professional journey suited to business travel." },
          { title: "Clear Communication", description: "Itinerary and traveller details are confirmed directly with you before booking." },
          { title: "Coordinated for Groups", description: "Transfers for multiple colleagues or clients can be arranged together." },
        ],
      },
      related: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { pageKey: "airportTransfers", blurb: "Picking up a colleague or client from the airport? See our airport transfer service." },
          { pageKey: "hourlyHire", blurb: "Need transportation across a full day of meetings? Hourly hire keeps the same driver with you throughout." },
          { pageKey: "groupTransfers", blurb: "Coordinating transport for a larger team or event? Group transfers use a vehicle matched to your numbers." },
          { pageKey: "cityToCityTransfers", blurb: "Business travel between mainland cities? See our city-to-city transfer page." },
          { pageKey: "privateTransfers", blurb: "Need a general private transfer outside these business scenarios? Our private transfer service covers any route." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can you arrange transfers for multiple colleagues arriving separately?", answer: "Yes, let us know each traveller's details when requesting a quote and we'll coordinate accordingly." },
          { question: "Can I book a recurring corporate transfer arrangement?", answer: "Get in touch with your requirements and we'll confirm whether a recurring arrangement can be accommodated." },
          { question: "Is corporate transfer pricing different from standard transfers?", answer: "Pricing depends on the same factors as any private transfer — route, distance and vehicle type — and will be confirmed with your quote." },
          { question: "Can transfers be booked on behalf of someone else?", answer: "Yes, provide the traveller's details when requesting the quote." },
          { question: "Can you arrange a pickup timed closely around a flight landing?", answer: "Yes, share the flight number when booking so pickup timing accounts for the actual arrival." },
          { question: "Can we book transport for a full day of meetings at different venues?", answer: "Yes — for a single day with several stops, our hourly hire service is usually the better fit, keeping one driver with you throughout." },
          { question: "Can you coordinate transfers for an entire conference delegation?", answer: "Yes, share the group's details and schedule and we'll confirm how transfers can be coordinated." },
          { question: "What happens if a meeting runs over and my pickup time needs to change?", answer: "Let your driver or our team know as soon as possible so the pickup can be adjusted where feasible." },
        ],
      },
      cta: {
        heading: "Ready to Book a Corporate Transfer?",
        description: "Tell us your travellers, schedule and destinations, and request your corporate transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      breadcrumbLabel: "Corporate Transfers",
    },
    el: {
      meta: {
        title: "Εταιρικές Μεταφορές & Υπηρεσία Σοφέρ στην Ελλάδα – Ζητήστε Προσφορά",
        description:
          "Κλείστε αξιόπιστες εταιρικές μεταφορές στην Ελλάδα για επαγγελματικά ταξίδια, συναντήσεις και εκδηλώσεις. Επαγγελματίες οδηγοί, ακριβείς παραλαβές και συντονισμένες ομάδες.",
      },
      hero: {
        eyebrow: "Εταιρικές Μεταφορές",
        title: "Εταιρικές Μεταφορές & Υπηρεσία Σοφέρ στην Ελλάδα",
        description:
          "Αξιόπιστη ιδιωτική μεταφορά για επαγγελματικά ταξίδια, συναντήσεις και εταιρικές εκδηλώσεις σε όλη την Ελλάδα, με επαγγελματίες οδηγούς και ακριβείς παραλαβές.",
        imageAlt: "Κτίριο τερματικού σταθμού στο Διεθνές Αεροδρόμιο Αθηνών, Ελλάδα",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Επαγγελματική Μεταφορά για Επαγγελματικά Ταξίδια",
        paragraphs: [
          "Τα επαγγελματικά ταξίδια έχουν τις δικές τους προτεραιότητες — ακρίβεια, επαγγελματικό επίπεδο εξυπηρέτησης, και μεταφορά στην οποία μπορείτε να βασιστείτε χωρίς αβεβαιότητα της τελευταίας στιγμής. Οι εταιρικές μεταφορές ακολουθούν το ίδιο ιδιωτικό μοντέλο με προκράτηση όπως και οι υπόλοιπες υπηρεσίες μας, οργανωμένο σύμφωνα με το πρόγραμμά σας.",
          "Είτε χρειάζεστε παραλαβή από το αεροδρόμιο πριν από μια συνάντηση, μεταφορά μεταξύ γραφείων ή χώρων εκδηλώσεων, είτε μεταφορές για συναδέλφους και πελάτες που σας επισκέπτονται, τα αιτήματα μπορούν να οργανωθούν μεμονωμένα ή συντονισμένα για μια ομάδα.",
          "Αυτή η σελίδα καλύπτει ειδικά σενάρια επαγγελματικού ταξιδιού. Για μια γενική ιδιωτική μεταφορά ή ένα πρόγραμμα ολόκληρης ημέρας με πολλές στάσεις, μπορεί επίσης να σας φανούν χρήσιμες οι υπηρεσίες ιδιωτικών μεταφορών και ενοικίασης με ώρα.",
        ],
      },
      features: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Τι Περιλαμβάνει",
        items: [
          { title: "Ακριβής, Προγραμματισμένη Παραλαβή", description: "Οι ώρες παραλαβής οργανώνονται εκ των προτέρων σύμφωνα με το πρόγραμμά σας." },
          { title: "Επαγγελματίες Οδηγοί", description: "Έμπειροι οδηγοί εστιασμένοι σε ένα διακριτικό και επαγγελματικό ταξίδι." },
          { title: "Μεταφορές Αεροδρομίου & Συναντήσεων", description: "Μεταφορές μεταξύ αεροδρομίων, γραφείων, χώρων εκδηλώσεων και ξενοδοχείων." },
          { title: "Συντονισμένα Ομαδικά Ταξίδια", description: "Οι μεταφορές μπορούν να συντονιστούν για συναδέλφους ή πελάτες που ταξιδεύουν μαζί." },
        ],
      },
      audience: {
        eyebrow: "Συνήθεις Περιπτώσεις",
        title: "Επαγγελματικά Ταξίδια που Καλύπτουμε",
        items: [
          { title: "Στελέχη και Επαγγελματίες Ταξιδιώτες", description: "Παραλαβές από αεροδρόμιο ή ξενοδοχείο πριν από συναντήσεις, οργανωμένες με προτεραιότητα την ακρίβεια." },
          { title: "Συνέδρια και Εταιρικές Εκδηλώσεις", description: "Μεταφορά συντονισμένη σύμφωνα με το πρόγραμμα της εκδήλωσης και την τοποθεσία του χώρου." },
          { title: "Επισκέψεις Πελατών και Συναδέλφων", description: "Οργάνωση μεταφορών εκ μέρους συναδέλφων ή πελατών που επισκέπτονται την εταιρεία." },
          { title: "Επαγγελματικά Προγράμματα με Πολλές Στάσεις", description: "Πολλές συναντήσεις ή χώροι σε μία ημέρα· δείτε ειδικά την υπηρεσία ενοικίασης με ώρα μας." },
        ],
      },
      howItWorks: {
        eyebrow: "Πώς Λειτουργεί",
        title: "Πώς να Κλείσετε μια Εταιρική Μεταφορά",
        steps: [
          { title: "Δώστε Στοιχεία Ταξιδιώτη και Προγράμματος", description: "Πείτε μας ποιος ταξιδεύει, το σημείο παραλαβής και το ωράριο." },
          { title: "Επιβεβαιώστε το Πρόγραμμα", description: "Συμπεριλάβετε τυχόν συναντήσεις, χώρους ή επόμενους προορισμούς σχετικούς με τη μεταφορά." },
          { title: "Λάβετε την Προσφορά σας", description: "Επιβεβαιώνουμε όχημα και οδηγό κατάλληλα για τις ανάγκες σας." },
          { title: "Ταξιδέψτε Σύμφωνα με το Πρόγραμμα", description: "Ο οδηγός σας φτάνει στην ώρα και το σημείο που έχουν συμφωνηθεί." },
        ],
      },
      practicalInfo: {
        eyebrow: "Πρακτικές Πληροφορίες",
        title: "Σχεδιάστε μια Εταιρική Κράτηση",
        items: [
          { title: "Κράτηση εκ Μέρους Άλλου Ατόμου", description: "Δώστε τα στοιχεία του ταξιδιώτη κατά την αίτηση προσφοράς." },
          { title: "Πολλοί Ταξιδιώτες που Φτάνουν Ξεχωριστά", description: "Πείτε μας τα στοιχεία κάθε ταξιδιώτη και θα συντονίσουμε τις μεταφορές αναλόγως." },
          { title: "Αλλαγές Προγράμματος", description: "Ενημερώστε μας το συντομότερο δυνατόν αν αλλάξουν τα ωράρια ή οι χώροι των συναντήσεων." },
          { title: "Τιμή", description: "Η τιμή των εταιρικών μεταφορών εξαρτάται από τους ίδιους παράγοντες με κάθε ιδιωτική μεταφορά — διαδρομή, απόσταση και τύπο οχήματος — επιβεβαιωμένη με την προσφορά σας." },
        ],
      },
      whyChoose: {
        eyebrow: "Γιατί Αυτή η Υπηρεσία",
        title: "Τι Μπορείτε να Περιμένετε",
        items: [
          { title: "Ακρίβεια", description: "Οι ώρες παραλαβής οργανώνονται και επιβεβαιώνονται εκ των προτέρων σύμφωνα με το πρόγραμμά σας." },
          { title: "Επαγγελματικό Επίπεδο", description: "Οδηγοί εστιασμένοι σε ένα διακριτικό και επαγγελματικό ταξίδι, κατάλληλο για επαγγελματικά ταξίδια." },
          { title: "Σαφής Επικοινωνία", description: "Το πρόγραμμα και τα στοιχεία του ταξιδιώτη επιβεβαιώνονται απευθείας μαζί σας πριν την κράτηση." },
          { title: "Συντονισμένο για Ομάδες", description: "Οι μεταφορές για πολλούς συναδέλφους ή πελάτες μπορούν να οργανωθούν από κοινού." },
        ],
      },
      related: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { pageKey: "airportTransfers", blurb: "Παραλαμβάνετε συνάδελφο ή πελάτη από το αεροδρόμιο; Δείτε την υπηρεσία μεταφοράς αεροδρομίου μας." },
          { pageKey: "hourlyHire", blurb: "Χρειάζεστε μεταφορά για μια ολόκληρη ημέρα συναντήσεων; Η ενοικίαση με ώρα κρατά τον ίδιο οδηγό μαζί σας όλη την ημέρα." },
          { pageKey: "groupTransfers", blurb: "Συντονίζετε μεταφορά για μεγάλη ομάδα ή εκδήλωση; Οι ομαδικές μεταφορές χρησιμοποιούν όχημα προσαρμοσμένο στον αριθμό σας." },
          { pageKey: "cityToCityTransfers", blurb: "Επαγγελματικά ταξίδια μεταξύ πόλεων της ηπειρωτικής Ελλάδας; Δείτε τη σελίδα μας για μεταφορές μεταξύ πόλεων." },
          { pageKey: "privateTransfers", blurb: "Χρειάζεστε γενική ιδιωτική μεταφορά εκτός αυτών των επαγγελματικών περιπτώσεων; Η υπηρεσία ιδιωτικών μεταφορών μας καλύπτει οποιαδήποτε διαδρομή." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορείτε να οργανώσετε μεταφορές για πολλούς συναδέλφους που φτάνουν ξεχωριστά;", answer: "Ναι, πείτε μας τα στοιχεία κάθε ταξιδιώτη κατά την αίτηση προσφοράς και θα συντονίσουμε τις μεταφορές αναλόγως." },
          { question: "Μπορώ να κλείσω μια επαναλαμβανόμενη εταιρική συμφωνία μεταφοράς;", answer: "Επικοινωνήστε μαζί μας αναφέροντας τις ανάγκες σας και θα σας επιβεβαιώσουμε αν μπορεί να οργανωθεί μια επαναλαμβανόμενη συμφωνία." },
          { question: "Η τιμή των εταιρικών μεταφορών διαφέρει από τις τυπικές μεταφορές;", answer: "Η τιμή εξαρτάται από τους ίδιους παράγοντες με κάθε ιδιωτική μεταφορά — διαδρομή, απόσταση και τύπο οχήματος — και θα επιβεβαιωθεί με την προσφορά σας." },
          { question: "Μπορούν να κλειστούν μεταφορές εκ μέρους άλλου ατόμου;", answer: "Ναι, δώστε τα στοιχεία του ταξιδιώτη κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε παραλαβή προσαρμοσμένη στην ώρα προσγείωσης μιας πτήσης;", answer: "Ναι, δώστε μας τον αριθμό πτήσης κατά την κράτηση, ώστε η παραλαβή να λαμβάνει υπόψη την πραγματική ώρα άφιξης." },
          { question: "Μπορούμε να κλείσουμε μεταφορά για μια ολόκληρη ημέρα συναντήσεων σε διαφορετικούς χώρους;", answer: "Ναι· για μία ημέρα με πολλές στάσεις, η υπηρεσία ενοικίασης με ώρα μας είναι συνήθως η καλύτερη επιλογή, κρατώντας τον ίδιο οδηγό μαζί σας συνεχώς." },
          { question: "Μπορείτε να συντονίσετε μεταφορές για ολόκληρη αντιπροσωπεία ενός συνεδρίου;", answer: "Ναι, δώστε μας τα στοιχεία και το πρόγραμμα της ομάδας και θα σας επιβεβαιώσουμε πώς μπορούν να συντονιστούν οι μεταφορές." },
          { question: "Τι γίνεται αν μια συνάντηση παραταθεί και χρειαστεί να αλλάξω την ώρα παραλαβής;", answer: "Ενημερώστε τον οδηγό σας ή την ομάδα μας το συντομότερο δυνατόν, ώστε η παραλαβή να προσαρμοστεί όπου είναι εφικτό." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε μια Εταιρική Μεταφορά;",
        description: "Πείτε μας τους ταξιδιώτες, το πρόγραμμα και τους προορισμούς σας, και ζητήστε την προσφορά εταιρικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      breadcrumbLabel: "Εταιρικές Μεταφορές",
    },
  },

  // ==========================================================================
  // GROUP TRANSFERS
  // ==========================================================================
  groupTransfers: {
    en: {
      meta: {
        title: "Group Transfers in Greece – Private Minibus & Coach Service",
        description:
          "Book private group transfers in Greece for families, weddings, tours and events. Vehicles matched to your passenger and luggage numbers — request a quote.",
      },
      hero: {
        eyebrow: "Group Transfers",
        title: "Private Group Transfers Across Greece",
        description:
          "Private transportation for families, groups and events across Greece, with vehicles matched to your group size and luggage.",
        imageAlt: "Coastal view of Rhodes Town and its beachfront, Greece",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "Private Transportation for Larger Groups",
        paragraphs: [
          "Travelling as a family, group of friends, or for an occasion such as a wedding often means more passengers and luggage than a standard transfer vehicle can accommodate. Group transfers follow the same private, pre-booked model as our other services, with a vehicle — or, where needed, multiple vehicles — matched to your numbers.",
          "Let us know your total passenger count and luggage when requesting a quote, and we'll confirm a suitable vehicle for your journey — whether that's an airport pickup, a transfer to your accommodation, a port connection, or transportation for an event.",
        ],
      },
      features: {
        eyebrow: "What's Included",
        title: "What's Included",
        items: [
          { title: "Vehicles for Larger Groups", description: "Vehicle size is matched to your total passenger and luggage count." },
          { title: "Families & Friends Travelling Together", description: "Keep everyone together in one vehicle rather than splitting across taxis." },
          { title: "Events & Occasions", description: "Transfers can be arranged for weddings and other group occasions." },
          { title: "One Booking for the Whole Group", description: "Coordinate pickup and drop-off for everyone through a single request." },
        ],
      },
      audience: {
        eyebrow: "Common Scenarios",
        title: "Groups We Arrange Transfers For",
        items: [
          { title: "Families", description: "Extended families travelling together with shared luggage and mixed ages." },
          { title: "Wedding Parties", description: "Coordinated transport for a wedding party or guests between venues." },
          { title: "Tour Groups", description: "Groups travelling as part of an organised itinerary." },
          { title: "Corporate Groups", description: "Larger teams or delegations — see our corporate transfers page for business-specific detail." },
          { title: "Cruise Groups", description: "Passengers disembarking together and needing coordinated onward transport." },
          { title: "Sports and School Groups", description: "Teams or educational groups travelling with equipment or shared luggage." },
        ],
      },
      howItWorks: {
        eyebrow: "How It Works",
        title: "How to Book a Group Transfer",
        steps: [
          { title: "Share Your Group Size", description: "Total passenger count and approximate luggage, including any bulky items." },
          { title: "Describe Your Journey", description: "Tell us your pickup point, destination and travel date." },
          { title: "Receive Your Quote", description: "We confirm whether one larger vehicle or multiple vehicles suits your numbers." },
          { title: "Travel Together", description: "Your driver or drivers meet the group at the agreed pickup point." },
        ],
      },
      practicalInfo: {
        eyebrow: "Vehicle & Passenger Considerations",
        title: "Planning Your Group's Transport",
        items: [
          { title: "Passenger Numbers", description: "Give us your total count, including children, so seating can be confirmed." },
          { title: "Luggage Capacity", description: "Mention bulky items such as sports equipment or extra suitcases in advance." },
          { title: "Vehicle Selection", description: "Vehicle size and number depend on availability and your total numbers, confirmed with your quote." },
          { title: "Multiple Vehicles Where Required", description: "Larger groups may need more than one vehicle, coordinated to depart and arrive together." },
        ],
      },
      whyChoose: {
        eyebrow: "Why Choose This Service",
        title: "What to Expect",
        items: [
          { title: "One Coordinated Booking", description: "A single request covers pickup and drop-off for your entire group." },
          { title: "Transparent Vehicle Planning", description: "Vehicle size and numbers are confirmed with you before booking, based on your group." },
          { title: "Airport, Port and City Group Travel", description: "Group transfers can connect with airports, ports and cities across Greece." },
          { title: "Suited to Occasions", description: "From weddings to sports teams, transport arranged around your event." },
        ],
      },
      related: {
        eyebrow: "Related Services",
        title: "Other Ways to Travel With Us",
        items: [
          { pageKey: "airportTransfers", blurb: "Bringing a group through the airport? See our airport transfer service for arrival and departure details." },
          { pageKey: "cruisePortTransfers", blurb: "Coordinating a cruise group's onward transport? See our dedicated port transfer service." },
          { pageKey: "cityToCityTransfers", blurb: "Moving your group between mainland cities? Our city-to-city page covers popular routes." },
          { pageKey: "corporateTransfers", blurb: "Travelling as a business delegation rather than a family or social group? See our corporate transfer service." },
          { pageKey: "privateTransfers", blurb: "Smaller party or a custom route? Our general private transfer service may suit your journey." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How many passengers can a group transfer accommodate?", answer: "Vehicle capacity depends on availability — let us know your total passenger and luggage count when requesting a quote." },
          { question: "How do I provide passenger and luggage numbers?", answer: "Include your total headcount and an approximate luggage count, including any bulky items, when requesting your quote." },
          { question: "Can groups travel from airports to hotels?", answer: "Yes, group airport-to-hotel transfers are one of our most common requests." },
          { question: "Can multiple vehicles be arranged for a larger group?", answer: "Yes, if your numbers require it, we'll confirm whether one larger vehicle or several coordinated vehicles is the better fit." },
          { question: "Can you arrange transfers for a wedding party?", answer: "Yes, describe your requirements when requesting a quote and we'll confirm what can be arranged." },
          { question: "Do larger groups need to be split across multiple vehicles?", answer: "It depends on group size — we'll confirm whether one larger vehicle or multiple vehicles suits your numbers when you request a quote." },
          { question: "Can we make multiple stops as a group?", answer: "Mention any planned stops when requesting your quote so they can be taken into account." },
          { question: "Can a cruise or tour group be picked up together from a port?", answer: "Yes, let us know your group size and sailing details and we'll coordinate a suitable pickup." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Group Transfer?",
        description: "Tell us your total passengers, luggage and destination, and request your group transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      breadcrumbLabel: "Group Transfers",
    },
    el: {
      meta: {
        title: "Ομαδικές Μεταφορές στην Ελλάδα – Ιδιωτικό Λεωφορείο & Πούλμαν",
        description:
          "Κλείστε ιδιωτικές ομαδικές μεταφορές στην Ελλάδα για οικογένειες, γάμους, τουρ και εκδηλώσεις. Οχήματα προσαρμοσμένα στον αριθμό επιβατών και αποσκευών σας — ζητήστε προσφορά.",
      },
      hero: {
        eyebrow: "Ομαδικές Μεταφορές",
        title: "Ιδιωτικές Ομαδικές Μεταφορές σε Όλη την Ελλάδα",
        description:
          "Ιδιωτική μεταφορά για οικογένειες, ομάδες και εκδηλώσεις σε όλη την Ελλάδα, με οχήματα προσαρμοσμένα στο μέγεθος της ομάδας και τις αποσκευές σας.",
        imageAlt: "Παραθαλάσσια θέα της πόλης της Ρόδου, Ελλάδα",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Ιδιωτική Μεταφορά για Μεγαλύτερες Ομάδες",
        paragraphs: [
          "Το ταξίδι ως οικογένεια, παρέα φίλων, ή για μια περίσταση όπως ένας γάμος, συχνά σημαίνει περισσότερους επιβάτες και αποσκευές από όσους μπορεί να χωρέσει ένα τυπικό όχημα μεταφοράς. Οι ομαδικές μεταφορές ακολουθούν το ίδιο ιδιωτικό μοντέλο με προκράτηση, με ένα όχημα —ή, όπου χρειάζεται, περισσότερα οχήματα— προσαρμοσμένο στον αριθμό σας.",
          "Πείτε μας τον συνολικό αριθμό επιβατών και τις αποσκευές σας κατά την αίτηση προσφοράς, και θα επιβεβαιώσουμε κατάλληλο όχημα για το ταξίδι σας — είτε πρόκειται για παραλαβή από το αεροδρόμιο, μεταφορά στο κατάλυμά σας, σύνδεση με λιμάνι ή μεταφορά για μια εκδήλωση.",
        ],
      },
      features: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Τι Περιλαμβάνει",
        items: [
          { title: "Οχήματα για Μεγαλύτερες Ομάδες", description: "Το μέγεθος του οχήματος προσαρμόζεται στον συνολικό αριθμό επιβατών και αποσκευών." },
          { title: "Οικογένειες και Φίλοι που Ταξιδεύουν Μαζί", description: "Κρατήστε όλη την παρέα μαζί σε ένα όχημα αντί να χωριστείτε σε πολλά ταξί." },
          { title: "Εκδηλώσεις και Περιστάσεις", description: "Οι μεταφορές μπορούν να οργανωθούν για γάμους και άλλες ομαδικές περιστάσεις." },
          { title: "Μία Κράτηση για Όλη την Ομάδα", description: "Συντονίστε την παραλαβή και τον προορισμό όλης της ομάδας μέσω ενός μόνο αιτήματος." },
        ],
      },
      audience: {
        eyebrow: "Συνήθεις Περιπτώσεις",
        title: "Ομάδες για τις Οποίες Οργανώνουμε Μεταφορές",
        items: [
          { title: "Οικογένειες", description: "Μεγάλες οικογένειες που ταξιδεύουν μαζί με κοινές αποσκευές και διαφορετικές ηλικίες." },
          { title: "Γαμήλιες Παρέες", description: "Συντονισμένη μεταφορά για τη γαμήλια παρέα ή τους καλεσμένους μεταξύ διαφορετικών χώρων." },
          { title: "Ομάδες Τουρ", description: "Ομάδες που ταξιδεύουν στο πλαίσιο ενός οργανωμένου προγράμματος." },
          { title: "Εταιρικές Ομάδες", description: "Μεγαλύτερες ομάδες ή αντιπροσωπείες· δείτε τη σελίδα μας για εταιρικές μεταφορές για περισσότερες επαγγελματικές λεπτομέρειες." },
          { title: "Ομάδες Κρουαζιέρας", description: "Επιβάτες που αποβιβάζονται μαζί και χρειάζονται συντονισμένη μεταφορά στη συνέχεια." },
          { title: "Αθλητικές και Σχολικές Ομάδες", description: "Ομάδες ή εκπαιδευτικά γκρουπ που ταξιδεύουν με εξοπλισμό ή κοινές αποσκευές." },
        ],
      },
      howItWorks: {
        eyebrow: "Πώς Λειτουργεί",
        title: "Πώς να Κλείσετε μια Ομαδική Μεταφορά",
        steps: [
          { title: "Πείτε μας το Μέγεθος της Ομάδας σας", description: "Συνολικός αριθμός επιβατών και κατά προσέγγιση αποσκευές, συμπεριλαμβανομένων ογκωδών αντικειμένων." },
          { title: "Περιγράψτε το Ταξίδι σας", description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και την ημερομηνία ταξιδιού σας." },
          { title: "Λάβετε την Προσφορά σας", description: "Επιβεβαιώνουμε αν ταιριάζει ένα μεγαλύτερο όχημα ή περισσότερα οχήματα ανάλογα με τον αριθμό σας." },
          { title: "Ταξιδέψτε Μαζί", description: "Ο οδηγός ή οι οδηγοί σας περιμένουν την ομάδα στο συμφωνημένο σημείο παραλαβής." },
        ],
      },
      practicalInfo: {
        eyebrow: "Θέματα Οχήματος & Επιβατών",
        title: "Σχεδιάστε τη Μεταφορά της Ομάδας σας",
        items: [
          { title: "Αριθμός Επιβατών", description: "Πείτε μας τον συνολικό αριθμό, συμπεριλαμβανομένων των παιδιών, ώστε να επιβεβαιωθούν οι θέσεις." },
          { title: "Χωρητικότητα Αποσκευών", description: "Αναφέρετε εκ των προτέρων ογκώδη αντικείμενα όπως αθλητικό εξοπλισμό ή επιπλέον βαλίτσες." },
          { title: "Επιλογή Οχήματος", description: "Το μέγεθος και ο αριθμός των οχημάτων εξαρτώνται από τη διαθεσιμότητα και τον συνολικό σας αριθμό, επιβεβαιωμένα με την προσφορά." },
          { title: "Περισσότερα Οχήματα Όπου Χρειάζεται", description: "Οι μεγαλύτερες ομάδες μπορεί να χρειάζονται περισσότερα από ένα οχήματα, συντονισμένα ώστε να αναχωρούν και να φτάνουν μαζί." },
        ],
      },
      whyChoose: {
        eyebrow: "Γιατί Αυτή η Υπηρεσία",
        title: "Τι Μπορείτε να Περιμένετε",
        items: [
          { title: "Μία Συντονισμένη Κράτηση", description: "Ένα μόνο αίτημα καλύπτει την παραλαβή και τον προορισμό όλης της ομάδας σας." },
          { title: "Διαφανής Σχεδιασμός Οχήματος", description: "Το μέγεθος και ο αριθμός των οχημάτων επιβεβαιώνονται μαζί σας πριν την κράτηση, με βάση την ομάδα σας." },
          { title: "Ομαδικά Ταξίδια προς Αεροδρόμια, Λιμάνια και Πόλεις", description: "Οι ομαδικές μεταφορές μπορούν να συνδεθούν με αεροδρόμια, λιμάνια και πόλεις σε όλη την Ελλάδα." },
          { title: "Προσαρμοσμένο σε Ειδικές Περιστάσεις", description: "Από γάμους έως αθλητικές ομάδες, μεταφορά οργανωμένη σύμφωνα με την εκδήλωσή σας." },
        ],
      },
      related: {
        eyebrow: "Σχετικές Υπηρεσίες",
        title: "Άλλοι Τρόποι να Ταξιδέψετε Μαζί μας",
        items: [
          { pageKey: "airportTransfers", blurb: "Μεταφέρετε μια ομάδα μέσω αεροδρομίου; Δείτε την υπηρεσία μεταφοράς αεροδρομίου μας για αφίξεις και αναχωρήσεις." },
          { pageKey: "cruisePortTransfers", blurb: "Συντονίζετε τη μεταφορά μιας ομάδας κρουαζιέρας στη συνέχεια; Δείτε την ειδική μας υπηρεσία μεταφοράς σε λιμάνια." },
          { pageKey: "cityToCityTransfers", blurb: "Μετακινείτε την ομάδα σας μεταξύ πόλεων της ηπειρωτικής Ελλάδας; Η σελίδα μας για μεταφορές μεταξύ πόλεων καλύπτει τις πιο δημοφιλείς διαδρομές." },
          { pageKey: "corporateTransfers", blurb: "Ταξιδεύετε ως εταιρική αντιπροσωπεία αντί για οικογενειακή ή κοινωνική ομάδα; Δείτε την υπηρεσία εταιρικών μεταφορών μας." },
          { pageKey: "privateTransfers", blurb: "Μικρότερη παρέα ή προσαρμοσμένη διαδρομή; Η γενική υπηρεσία ιδιωτικών μεταφορών μας μπορεί να ταιριάζει στο ταξίδι σας." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσους επιβάτες μπορεί να χωρέσει μια ομαδική μεταφορά;", answer: "Η χωρητικότητα του οχήματος εξαρτάται από τη διαθεσιμότητα — πείτε μας τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
          { question: "Πώς αναφέρω τον αριθμό επιβατών και αποσκευών;", answer: "Συμπεριλάβετε τον συνολικό αριθμό ατόμων και μια εκτίμηση των αποσκευών, συμπεριλαμβανομένων ογκωδών αντικειμένων, κατά την αίτηση προσφοράς." },
          { question: "Μπορούν οι ομάδες να ταξιδέψουν από το αεροδρόμιο στα ξενοδοχεία;", answer: "Ναι, οι ομαδικές μεταφορές από αεροδρόμιο σε ξενοδοχείο είναι ένα από τα πιο συνηθισμένα αιτήματά μας." },
          { question: "Μπορούν να οργανωθούν πολλά οχήματα για μεγάλη ομάδα;", answer: "Ναι, αν ο αριθμός σας το απαιτεί, θα επιβεβαιώσουμε αν ταιριάζει ένα μεγαλύτερο όχημα ή περισσότερα συντονισμένα οχήματα." },
          { question: "Μπορείτε να οργανώσετε μεταφορές για γαμήλια παρέα;", answer: "Ναι, περιγράψτε τις ανάγκες σας κατά την αίτηση προσφοράς και θα σας επιβεβαιώσουμε τι μπορούμε να οργανώσουμε." },
          { question: "Πρέπει οι μεγάλες ομάδες να χωριστούν σε πολλά οχήματα;", answer: "Εξαρτάται από το μέγεθος της ομάδας — θα σας επιβεβαιώσουμε αν ταιριάζει ένα μεγαλύτερο όχημα ή περισσότερα οχήματα ανάλογα με τον αριθμό σας κατά την αίτηση προσφοράς." },
          { question: "Μπορούμε να κάνουμε πολλές στάσεις ως ομάδα;", answer: "Αναφέρετε τυχόν προγραμματισμένες στάσεις κατά την αίτηση προσφοράς ώστε να ληφθούν υπόψη." },
          { question: "Μπορεί να γίνει παραλαβή μαζί με ομάδα κρουαζιέρας ή τουρ στο λιμάνι;", answer: "Ναι, πείτε μας το μέγεθος της ομάδας και τα στοιχεία της αναχώρησης και θα συντονίσουμε κατάλληλη παραλαβή." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε την Ομαδική σας Μεταφορά;",
        description: "Πείτε μας τον συνολικό αριθμό επιβατών, τις αποσκευές και τον προορισμό, και ζητήστε την προσφορά ομαδικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      breadcrumbLabel: "Ομαδικές Μεταφορές",
    },
  },
}

export const servicesIndexContent = {
  en: {
    meta: {
      title: "Private Transfer Services in Greece | Greece Taxi Transfers",
      description:
        "Explore our private transfer services across Greece — airport, city-to-city, port, corporate and group transfers. Select a service to request a quote.",
    },
    eyebrow: "Our Services",
    title: "Private Transfer Services in Greece",
    description:
      "Explore our private transportation services across Greece, from airport transfers to group and corporate travel. Select a service below to learn more and request a quote.",
    breadcrumbLabel: "Services",
    exploreLabel: "Learn More",
  },
  el: {
    meta: {
      title: "Υπηρεσίες Ιδιωτικής Μεταφοράς στην Ελλάδα | Greece Taxi Transfers",
      description:
        "Ανακαλύψτε τις υπηρεσίες ιδιωτικής μεταφοράς μας στην Ελλάδα: αεροδρόμιο, μεταξύ πόλεων, λιμάνια, εταιρικές και ομαδικές μεταφορές. Ζητήστε προσφορά.",
    },
    eyebrow: "Οι Υπηρεσίες μας",
    title: "Υπηρεσίες Ιδιωτικής Μεταφοράς στην Ελλάδα",
    description:
      "Ανακαλύψτε τις υπηρεσίες ιδιωτικής μεταφοράς μας σε όλη την Ελλάδα, από μεταφορές αεροδρομίου έως ομαδικά και επαγγελματικά ταξίδια. Επιλέξτε μια υπηρεσία παρακάτω για περισσότερες πληροφορίες και για να ζητήσετε προσφορά.",
    breadcrumbLabel: "Υπηρεσίες",
    exploreLabel: "Περισσότερα",
  },
} satisfies Record<
  Locale,
  {
    meta: { title: string; description: string }
    eyebrow: string
    title: string
    description: string
    breadcrumbLabel: string
    exploreLabel: string
  }
>

export type ServicesIndexItem = { pageKey: PageKey; name: string; description: string }

export const servicesIndexItems: Record<Locale, ServicesIndexItem[]> = {
  en: [
    { pageKey: "airportTransfers", name: "Airport Transfers", description: "Private pickup and drop-off from Greece's major airports." },
    { pageKey: "cityToCityTransfers", name: "City-to-City Transfers", description: "Direct private transfers between Greek cities and destinations." },
    { pageKey: "privateTransfers", name: "Private Transfers", description: "A private, door-to-door vehicle for any journey in Greece." },
    { pageKey: "hourlyHire", name: "Hourly Hire", description: "A private driver and vehicle booked by the hour for flexible plans." },
    { pageKey: "cruisePortTransfers", name: "Cruise Port Transfers", description: "Transfers timed around your cruise or ferry at major Greek ports." },
    { pageKey: "corporateTransfers", name: "Corporate Transfers", description: "Professional transportation for business travel and meetings." },
    { pageKey: "groupTransfers", name: "Group Transfers", description: "Private transportation for families, groups and events." },
  ],
  el: [
    { pageKey: "airportTransfers", name: "Μεταφορές Αεροδρομίου", description: "Ιδιωτική παραλαβή και μεταφορά από τα κύρια αεροδρόμια της Ελλάδας." },
    { pageKey: "cityToCityTransfers", name: "Μεταφορές Μεταξύ Πόλεων", description: "Απευθείας ιδιωτικές μεταφορές μεταξύ ελληνικών πόλεων και προορισμών." },
    { pageKey: "privateTransfers", name: "Ιδιωτικές Μεταφορές", description: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στην Ελλάδα." },
    { pageKey: "hourlyHire", name: "Ενοικίαση με Ώρα", description: "Ιδιωτικός οδηγός και όχημα με προκράτηση ανά ώρα για ευέλικτα σχέδια." },
    { pageKey: "cruisePortTransfers", name: "Μεταφορές σε Λιμάνια", description: "Μεταφορές προσαρμοσμένες στο ωράριο της κρουαζιέρας ή του ferry σας στα κύρια λιμάνια της Ελλάδας." },
    { pageKey: "corporateTransfers", name: "Εταιρικές Μεταφορές", description: "Επαγγελματική μεταφορά για επαγγελματικά ταξίδια και συναντήσεις." },
    { pageKey: "groupTransfers", name: "Ομαδικές Μεταφορές", description: "Ιδιωτική μεταφορά για οικογένειες, ομάδες και εκδηλώσεις." },
  ],
}
