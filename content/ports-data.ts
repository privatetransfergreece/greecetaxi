import type { Locale } from "@/lib/i18n/config"
import type { HeroContent } from "@/components/location/hero"
import type { IconTextSection } from "@/content/service-hubs"
import type { RelatedLinkItem } from "@/components/location/related-links"

export type PortSlug =
  | "portPiraeus"
  | "portRafina"
  | "portLavrio"
  | "portThessaloniki"
  | "portHeraklion"
  | "portPatras"

export type LinkSection = { eyebrow: string; title: string; items: Omit<RelatedLinkItem, "icon">[] }
export type ProseSection = { eyebrow: string; title: string; paragraphs: string[] }

export type PortPageContent = {
  meta: { title: string; description: string }
  breadcrumbLabel: string
  hero: HeroContent
  overview: ProseSection
  transferService: IconTextSection
  connections: LinkSection
  cruiseFerryContext: ProseSection
  popularDestinations: LinkSection
  bookingInfo: IconTextSection
  faq: { eyebrow: string; title: string; items: { question: string; answer: string }[] }
  cta: { heading: string; description: string; primaryLabel: string; secondaryLabel: string }
}

export const portImages: Partial<Record<PortSlug, { src: string; alt: Record<Locale, string> }>> = {
  portPiraeus: {
    src: "/ports/piraeus.webp",
    alt: {
      en: "Ferries and cruise ships docked at the Port of Piraeus at sunset, Greece",
      el: "Ferry και κρουαζιερόπλοια αγκυροβολημένα στο λιμάνι του Πειραιά το ηλιοβασίλεμα, Ελλάδα",
    },
  },
  portLavrio: {
    src: "/ports/lavrio.webp",
    alt: {
      en: "Ferries docked at the Port of Lavrio at sunset, Greece",
      el: "Ferry αγκυροβολημένα στο λιμάνι του Λαυρίου το ηλιοβασίλεμα, Ελλάδα",
    },
  },
}

const bookingInfoEn: IconTextSection = {
  eyebrow: "Booking Information",
  title: "What to Provide When Booking",
  items: [
    { title: "Sailing Details", description: "Share your ferry or cruise line and embarkation or disembarkation time." },
    { title: "Onward Destination", description: "Let us know whether you're heading to the airport, a hotel or another city." },
    { title: "Passengers & Luggage", description: "Mention your passenger and luggage numbers so a suitable vehicle can be arranged." },
    { title: "Meeting Point", description: "Exact meeting point details are confirmed with your booking, since these vary by terminal." },
  ],
}
const bookingInfoEl: IconTextSection = {
  eyebrow: "Πληροφορίες Κράτησης",
  title: "Τι να Δώσετε κατά την Κράτηση",
  items: [
    { title: "Στοιχεία Απόπλου", description: "Πείτε μας την εταιρεία ferry ή κρουαζιέρας και την ώρα επιβίβασης ή αποβίβασης." },
    { title: "Επόμενος Προορισμός", description: "Ενημερώστε μας αν κατευθύνεστε προς το αεροδρόμιο, ένα ξενοδοχείο ή άλλη πόλη." },
    { title: "Επιβάτες & Αποσκευές", description: "Αναφέρετε τον αριθμό επιβατών και αποσκευών ώστε να οριστεί κατάλληλο όχημα." },
    { title: "Σημείο Συνάντησης", description: "Οι ακριβείς λεπτομέρειες σημείου συνάντησης επιβεβαιώνονται με την κράτησή σας, καθώς διαφέρουν ανά τερματικό." },
  ],
}

export const portContent: Record<PortSlug, Record<Locale, PortPageContent>> = {
  portPiraeus: {
    en: {
      meta: {
        title: "Piraeus Port Transfers – Private Taxi & Chauffeur Service",
        description:
          "Book a private transfer to or from the Port of Piraeus, timed around your cruise or ferry. Connect with Athens, the airport, and onward destinations.",
      },
      breadcrumbLabel: "Piraeus",
      hero: {
        eyebrow: "Port of Piraeus",
        title: "Private Transfers to Piraeus Port",
        description: "Book a private transfer to or from the Port of Piraeus, timed around your cruise or ferry sailing.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "About the Port of Piraeus",
        paragraphs: [
          "Piraeus is Greece's largest passenger port and one of the busiest in Europe, located immediately southwest of central Athens. It serves as the main departure point for ferries to the Cyclades, Crete, the Dodecanese and the Saronic Gulf islands, and is also a major stop for Mediterranean cruise ships.",
          "Because Piraeus handles such high passenger volumes, especially during summer, a pre-arranged private transfer avoids relying on public transport or taxi ranks at a busy terminal. Transfers can be timed around your embarkation or disembarkation and connect directly with Athens, Athens Airport, or onward destinations.",
        ],
      },
      transferService: {
        eyebrow: "What's Included",
        title: "Private Piraeus Port Transfer",
        items: [
          { title: "Embarkation & Disembarkation", description: "Transfers can be arranged for your arrival at or departure from the port." },
          { title: "Timed Around Your Sailing", description: "Pickup is planned around your actual embarkation or disembarkation time." },
          { title: "Door-to-Door Service", description: "Direct transfers between the port and your exact hotel, address or destination." },
          { title: "Private, Not Shared", description: "Your vehicle is booked exclusively for you and your group." },
        ],
      },
      connections: {
        eyebrow: "Airport & City Connections",
        title: "Airport and City Connections",
        items: [
          { label: "Athens Airport to Piraeus Port", href: "/route/athens-airport-to-piraeus-port/", description: "A dedicated route page covering direct transfers between the airport and Piraeus, useful for cruise connections." },
          { label: "Central Athens", href: "/athens/", description: "Continue your journey directly to a hotel or address in central Athens." },
          { label: "Athens Riviera", href: "/destination/athens-riviera/", description: "Continue from Piraeus to the coastal strip southeast of Athens, including Glyfada and Vouliagmeni." },
          { label: "Piraeus Port to Nafplio", href: "/route/piraeus-port-to-nafplio/", description: "Continue directly from the port to Nafplio in the Peloponnese, without routing through Athens." },
        ],
      },
      cruiseFerryContext: {
        eyebrow: "Cruise & Ferry Travel",
        title: "Cruise and Ferry Passengers",
        paragraphs: [
          "Piraeus handles both international cruise calls and domestic ferry departures to the islands, often from different parts of the same port complex. Whichever applies to your journey, share your line and sailing time when requesting a quote so your pickup can be planned accordingly.",
          "Exact terminal and meeting point details vary depending on which gate or pier your ship or ferry uses, and are confirmed as part of your booking rather than published generally.",
        ],
      },
      popularDestinations: {
        eyebrow: "Ferry Destinations",
        title: "Popular Ferry Destinations From Piraeus",
        items: [
          { label: "Santorini", href: "/destination/santorini/", description: "One of the most popular Cycladic ferry routes from Piraeus." },
          { label: "Mykonos", href: "/destination/mykonos/", description: "A well-served ferry connection from Piraeus to the Cyclades." },
          { label: "Rhodes", href: "/destination/rhodes/", description: "Ferries from Piraeus also connect to the Dodecanese, including Rhodes." },
        ],
      },
      bookingInfo: bookingInfoEn,
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a transfer from Athens Airport to Piraeus Port?", answer: "Yes, airport-to-port transfers are one of our most common requests for Piraeus, especially for cruise connections." },
          { question: "Can you time my transfer around my cruise departure?", answer: "Yes, share your embarkation or disembarkation time when requesting a quote." },
          { question: "Can I arrange a transfer from Piraeus to my hotel in Athens?", answer: "Yes, port-to-hotel transfers can be arranged around your disembarkation time." },
          { question: "What information should I provide for a port transfer?", answer: "Your cruise or ferry line, sailing time, onward destination, and passenger and luggage numbers." },
          { question: "Where exactly will my driver meet me at the port?", answer: "Exact meeting points vary by terminal and gate, and are confirmed with your booking rather than published generally." },
          { question: "Can you arrange transfers for a cruise or tour group?", answer: "Yes, mention your group size and sailing details and we'll coordinate a suitable pickup." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Piraeus Port Transfer?",
        description: "Tell us your sailing details, destination and passenger numbers, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορές στο Λιμάνι του Πειραιά – Ιδιωτικό Ταξί & Σοφέρ",
        description:
          "Κλείστε ιδιωτική μεταφορά από ή προς το Λιμάνι του Πειραιά, προσαρμοσμένη στην κρουαζιέρα ή το ferry σας. Σύνδεση με Αθήνα, αεροδρόμιο και προορισμούς.",
      },
      breadcrumbLabel: "Πειραιάς",
      hero: {
        eyebrow: "Λιμάνι Πειραιά",
        title: "Ιδιωτικές Μεταφορές στο Λιμάνι του Πειραιά",
        description: "Κλείστε ιδιωτική μεταφορά από ή προς το Λιμάνι του Πειραιά, προσαρμοσμένη στο ωράριο της κρουαζιέρας ή του ferry σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Σχετικά με το Λιμάνι του Πειραιά",
        paragraphs: [
          "Ο Πειραιάς είναι το μεγαλύτερο λιμάνι επιβατών της Ελλάδας και ένα από τα πολυσύχναστα της Ευρώπης, βρίσκεται αμέσως νοτιοδυτικά του κέντρου της Αθήνας. Λειτουργεί ως το κύριο σημείο αναχώρησης για ferry προς τις Κυκλάδες, την Κρήτη, τα Δωδεκάνησα και τα νησιά του Σαρωνικού, ενώ αποτελεί επίσης σημαντικό σταθμό για κρουαζιερόπλοια της Μεσογείου.",
          "Επειδή ο Πειραιάς εξυπηρετεί τόσο μεγάλο όγκο επιβατών, ιδίως το καλοκαίρι, μια προκαθορισμένη ιδιωτική μεταφορά αποφεύγει την εξάρτηση από μέσα μαζικής μεταφοράς ή πιάτσες ταξί σε ένα πολυσύχναστο τερματικό. Οι μεταφορές μπορούν να προσαρμοστούν στην επιβίβαση ή αποβίβασή σας και να συνδεθούν απευθείας με την Αθήνα, το Αεροδρόμιο Αθηνών, ή άλλους προορισμούς.",
        ],
      },
      transferService: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Ιδιωτική Μεταφορά στο Λιμάνι του Πειραιά",
        items: [
          { title: "Επιβίβαση & Αποβίβαση", description: "Οι μεταφορές μπορούν να οργανωθούν τόσο για την άφιξή σας όσο και για την αναχώρησή σας από το λιμάνι." },
          { title: "Προσαρμοσμένο στον Απόπλου σας", description: "Η παραλαβή σχεδιάζεται σύμφωνα με την πραγματική ώρα επιβίβασης ή αποβίβασής σας." },
          { title: "Υπηρεσία Από Πόρτα σε Πόρτα", description: "Απευθείας μεταφορές μεταξύ του λιμανιού και του ακριβούς ξενοδοχείου, διεύθυνσης ή προορισμού σας." },
          { title: "Ιδιωτικό, Όχι Κοινόχρηστο", description: "Το όχημά σας κλείνεται αποκλειστικά για εσάς και την ομάδα σας." },
        ],
      },
      connections: {
        eyebrow: "Συνδέσεις Αεροδρομίου & Πόλης",
        title: "Συνδέσεις με Αεροδρόμιο και Πόλη",
        items: [
          { label: "Αεροδρόμιο Αθηνών προς Πειραιά", href: "/el/diadromi/aerodromio-athinas-peiraias/", description: "Ειδική σελίδα διαδρομής για απευθείας μεταφορές μεταξύ αεροδρομίου και Πειραιά, χρήσιμες για συνδέσεις κρουαζιέρας." },
          { label: "Κέντρο Αθήνας", href: "/el/athina/", description: "Συνεχίστε το ταξίδι σας απευθείας προς ξενοδοχείο ή διεύθυνση στο κέντρο της Αθήνας." },
          { label: "Παραλιακή Αθήνας", href: "/el/proorismos/paralia-athinas/", description: "Συνεχίστε από τον Πειραιά προς την παράκτια ζώνη νοτιοανατολικά της Αθήνας, με τη Γλυφάδα και τη Βουλιαγμένη." },
          { label: "Πειραιάς προς Ναύπλιο", href: "/el/diadromi/peiraias-nafplio/", description: "Συνεχίστε απευθείας από το λιμάνι προς το Ναύπλιο στην Πελοπόννησο, χωρίς διέλευση από την Αθήνα." },
        ],
      },
      cruiseFerryContext: {
        eyebrow: "Ταξίδι με Κρουαζιέρα & Ferry",
        title: "Επιβάτες Κρουαζιέρας και Ferry",
        paragraphs: [
          "Ο Πειραιάς εξυπηρετεί τόσο διεθνείς κρουαζιέρες όσο και εγχώριες αναχωρήσεις ferry προς τα νησιά, συχνά από διαφορετικά σημεία του ίδιου λιμενικού συγκροτήματος. Όποιο κι αν ισχύει για το ταξίδι σας, δώστε μας την εταιρεία και την ώρα απόπλου κατά την αίτηση προσφοράς ώστε η παραλαβή σας να σχεδιαστεί αναλόγως.",
          "Οι ακριβείς λεπτομέρειες τερματικού και σημείου συνάντησης διαφέρουν ανάλογα με την πύλη ή την προβλήτα που χρησιμοποιεί το πλοίο ή το ferry σας, και επιβεβαιώνονται ως μέρος της κράτησής σας αντί να δημοσιεύονται γενικά.",
        ],
      },
      popularDestinations: {
        eyebrow: "Προορισμοί Ferry",
        title: "Δημοφιλείς Προορισμοί Ferry από τον Πειραιά",
        items: [
          { label: "Σαντορίνη", href: "/el/proorismos/santorini/", description: "Μία από τις πιο δημοφιλείς διαδρομές ferry προς τις Κυκλάδες από τον Πειραιά." },
          { label: "Μύκονος", href: "/el/proorismos/mykonos/", description: "Μια καλά εξυπηρετούμενη σύνδεση ferry από τον Πειραιά προς τις Κυκλάδες." },
          { label: "Ρόδος", href: "/el/proorismos/rodos/", description: "Τα ferry από τον Πειραιά συνδέονται επίσης με τα Δωδεκάνησα, συμπεριλαμβανομένης της Ρόδου." },
        ],
      },
      bookingInfo: bookingInfoEl,
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω μεταφορά από το Αεροδρόμιο Αθηνών προς τον Πειραιά;", answer: "Ναι, οι μεταφορές αεροδρομίου προς λιμάνι είναι από τα πιο συνηθισμένα αιτήματά μας για τον Πειραιά, ειδικά για συνδέσεις κρουαζιέρας." },
          { question: "Μπορείτε να προσαρμόσετε τη μεταφορά μου στην αναχώρηση της κρουαζιέρας μου;", answer: "Ναι, δώστε μας την ώρα επιβίβασης ή αποβίβασής σας κατά την αίτηση προσφοράς." },
          { question: "Μπορώ να οργανώσω μεταφορά από τον Πειραιά προς το ξενοδοχείο μου στην Αθήνα;", answer: "Ναι, οι μεταφορές λιμανιού προς ξενοδοχείο μπορούν να οργανωθούν σύμφωνα με την ώρα αποβίβασής σας." },
          { question: "Ποιες πληροφορίες πρέπει να δώσω για μεταφορά σε λιμάνι;", answer: "Την εταιρεία κρουαζιέρας ή ferry, την ώρα απόπλου, τον επόμενο προορισμό, και τον αριθμό επιβατών και αποσκευών." },
          { question: "Πού ακριβώς θα με συναντήσει ο οδηγός μου στο λιμάνι;", answer: "Τα ακριβή σημεία συνάντησης διαφέρουν ανά τερματικό και πύλη, και επιβεβαιώνονται με την κράτησή σας αντί να δημοσιεύονται γενικά." },
          { question: "Μπορείτε να οργανώσετε μεταφορές για ομάδα κρουαζιέρας ή τουρ;", answer: "Ναι, αναφέρετε το μέγεθος της ομάδας και τα στοιχεία του απόπλου και θα συντονίσουμε κατάλληλη παραλαβή." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στο Λιμάνι του Πειραιά;",
        description: "Πείτε μας τα στοιχεία απόπλου, τον προορισμό και τον αριθμό επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  portRafina: {
    en: {
      meta: {
        title: "Rafina Port Transfers – Private Taxi & Chauffeur Service",
        description:
          "Book a private transfer to or from the Port of Rafina for Cycladic ferry connections. Connect with Athens Airport and the city. Request a quote.",
      },
      breadcrumbLabel: "Rafina",
      hero: {
        eyebrow: "Port of Rafina",
        title: "Private Transfers to Rafina Port",
        description: "Book a private transfer to or from the Port of Rafina, timed around your ferry to the Cyclades or Evia.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "About the Port of Rafina",
        paragraphs: [
          "Rafina is the second-largest passenger port in Attica, located on the region's east coast. It serves ferry connections to several Cycladic islands, including Mykonos, Andros and Tinos, as well as to Evia, and is a practical alternative to Piraeus depending on your route.",
          "Rafina is closer to Athens Airport than Piraeus, which makes it a convenient option for travellers connecting between a flight and a ferry. A private transfer covers the journey between the airport, Athens, and the port directly.",
        ],
      },
      transferService: {
        eyebrow: "What's Included",
        title: "Private Rafina Port Transfer",
        items: [
          { title: "Embarkation & Disembarkation", description: "Transfers can be arranged for your arrival at or departure from the port." },
          { title: "Timed Around Your Sailing", description: "Pickup is planned around your actual embarkation or disembarkation time." },
          { title: "Door-to-Door Service", description: "Direct transfers between the port and your exact hotel, address or destination." },
          { title: "Private, Not Shared", description: "Your vehicle is booked exclusively for you and your group." },
        ],
      },
      connections: {
        eyebrow: "Airport & City Connections",
        title: "Airport and City Connections",
        items: [
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "A relatively short transfer connects Rafina with Athens International Airport." },
          { label: "Central Athens", href: "/athens/", description: "Continue your journey directly to a hotel or address in central Athens." },
        ],
      },
      cruiseFerryContext: {
        eyebrow: "Ferry Travel",
        title: "Ferry Passengers",
        paragraphs: [
          "Rafina primarily serves domestic ferry routes rather than international cruise calls. Share your ferry line and sailing time when requesting a quote so your pickup can be planned around it.",
          "Exact meeting point details are confirmed as part of your booking rather than published generally.",
        ],
      },
      popularDestinations: {
        eyebrow: "Ferry Destinations",
        title: "Popular Ferry Destinations From Rafina",
        items: [
          { label: "Mykonos", href: "/destination/mykonos/", description: "Rafina offers a regular ferry connection to Mykonos in the Cyclades." },
        ],
      },
      bookingInfo: bookingInfoEn,
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a transfer from Athens Airport to Rafina Port?", answer: "Yes, this is a relatively short and common transfer, useful for flight-to-ferry connections." },
          { question: "Can you time my transfer around my ferry departure?", answer: "Yes, share your sailing time when requesting a quote." },
          { question: "Is Rafina closer to the airport than Piraeus?", answer: "Yes, Rafina is generally closer to Athens Airport, which is why it's a popular choice for onward Cycladic ferry connections." },
          { question: "What information should I provide for a port transfer?", answer: "Your ferry line, sailing time, onward destination, and passenger and luggage numbers." },
          { question: "Can I arrange a transfer from Rafina to my hotel in Athens?", answer: "Yes, port-to-hotel transfers can be arranged around your arrival time." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Rafina Port Transfer?",
        description: "Tell us your sailing details, destination and passenger numbers, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορές στο Λιμάνι της Ραφήνας – Ιδιωτικό Ταξί & Σοφέρ",
        description:
          "Κλείστε ιδιωτική μεταφορά από ή προς το Λιμάνι της Ραφήνας για συνδέσεις ferry με τις Κυκλάδες. Σύνδεση με το Αεροδρόμιο Αθηνών. Ζητήστε προσφορά.",
      },
      breadcrumbLabel: "Ραφήνα",
      hero: {
        eyebrow: "Λιμάνι Ραφήνας",
        title: "Ιδιωτικές Μεταφορές στο Λιμάνι της Ραφήνας",
        description: "Κλείστε ιδιωτική μεταφορά από ή προς το Λιμάνι της Ραφήνας, προσαρμοσμένη στο ferry σας προς τις Κυκλάδες ή την Εύβοια.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Σχετικά με το Λιμάνι της Ραφήνας",
        paragraphs: [
          "Η Ραφήνα είναι το δεύτερο μεγαλύτερο λιμάνι επιβατών της Αττικής, βρίσκεται στην ανατολική ακτή της περιφέρειας. Εξυπηρετεί συνδέσεις ferry προς αρκετά νησιά των Κυκλάδων, όπως η Μύκονος, η Άνδρος και η Τήνος, καθώς και προς την Εύβοια, και αποτελεί μια πρακτική εναλλακτική στον Πειραιά ανάλογα με τη διαδρομή σας.",
          "Η Ραφήνα βρίσκεται πιο κοντά στο Αεροδρόμιο Αθηνών σε σχέση με τον Πειραιά, γεγονός που την καθιστά βολική επιλογή για ταξιδιώτες που συνδέουν μια πτήση με ένα ferry. Μια ιδιωτική μεταφορά καλύπτει απευθείας τη διαδρομή μεταξύ αεροδρομίου, Αθήνας και λιμανιού.",
        ],
      },
      transferService: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Ιδιωτική Μεταφορά στο Λιμάνι της Ραφήνας",
        items: [
          { title: "Επιβίβαση & Αποβίβαση", description: "Οι μεταφορές μπορούν να οργανωθούν τόσο για την άφιξή σας όσο και για την αναχώρησή σας από το λιμάνι." },
          { title: "Προσαρμοσμένο στον Απόπλου σας", description: "Η παραλαβή σχεδιάζεται σύμφωνα με την πραγματική ώρα επιβίβασης ή αποβίβασής σας." },
          { title: "Υπηρεσία Από Πόρτα σε Πόρτα", description: "Απευθείας μεταφορές μεταξύ του λιμανιού και του ακριβούς ξενοδοχείου, διεύθυνσης ή προορισμού σας." },
          { title: "Ιδιωτικό, Όχι Κοινόχρηστο", description: "Το όχημά σας κλείνεται αποκλειστικά για εσάς και την ομάδα σας." },
        ],
      },
      connections: {
        eyebrow: "Συνδέσεις Αεροδρομίου & Πόλης",
        title: "Συνδέσεις με Αεροδρόμιο και Πόλη",
        items: [
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Μια σχετικά σύντομη μεταφορά συνδέει τη Ραφήνα με το Διεθνές Αεροδρόμιο Αθηνών." },
          { label: "Κέντρο Αθήνας", href: "/el/athina/", description: "Συνεχίστε το ταξίδι σας απευθείας προς ξενοδοχείο ή διεύθυνση στο κέντρο της Αθήνας." },
        ],
      },
      cruiseFerryContext: {
        eyebrow: "Ταξίδι με Ferry",
        title: "Επιβάτες Ferry",
        paragraphs: [
          "Η Ραφήνα εξυπηρετεί κυρίως εγχώριες διαδρομές ferry και όχι διεθνείς κρουαζιέρες. Δώστε μας την εταιρεία ferry και την ώρα απόπλου κατά την αίτηση προσφοράς ώστε η παραλαβή σας να σχεδιαστεί αναλόγως.",
          "Οι ακριβείς λεπτομέρειες σημείου συνάντησης επιβεβαιώνονται ως μέρος της κράτησής σας αντί να δημοσιεύονται γενικά.",
        ],
      },
      popularDestinations: {
        eyebrow: "Προορισμοί Ferry",
        title: "Δημοφιλείς Προορισμοί Ferry από τη Ραφήνα",
        items: [
          { label: "Μύκονος", href: "/el/proorismos/mykonos/", description: "Η Ραφήνα προσφέρει τακτική σύνδεση ferry προς τη Μύκονο στις Κυκλάδες." },
        ],
      },
      bookingInfo: bookingInfoEl,
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω μεταφορά από το Αεροδρόμιο Αθηνών προς το Λιμάνι της Ραφήνας;", answer: "Ναι, πρόκειται για μια σχετικά σύντομη και συνηθισμένη μεταφορά, χρήσιμη για συνδέσεις πτήσης-ferry." },
          { question: "Μπορείτε να προσαρμόσετε τη μεταφορά μου στην αναχώρηση του ferry μου;", answer: "Ναι, δώστε μας την ώρα απόπλου κατά την αίτηση προσφοράς." },
          { question: "Είναι η Ραφήνα πιο κοντά στο αεροδρόμιο από τον Πειραιά;", answer: "Ναι, η Ραφήνα βρίσκεται γενικά πιο κοντά στο Αεροδρόμιο Αθηνών, γι' αυτό είναι δημοφιλής επιλογή για συνδέσεις με ferry προς τις Κυκλάδες." },
          { question: "Ποιες πληροφορίες πρέπει να δώσω για μεταφορά σε λιμάνι;", answer: "Την εταιρεία ferry, την ώρα απόπλου, τον επόμενο προορισμό, και τον αριθμό επιβατών και αποσκευών." },
          { question: "Μπορώ να οργανώσω μεταφορά από τη Ραφήνα προς το ξενοδοχείο μου στην Αθήνα;", answer: "Ναι, οι μεταφορές λιμανιού προς ξενοδοχείο μπορούν να οργανωθούν σύμφωνα με την ώρα άφιξής σας." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στο Λιμάνι της Ραφήνας;",
        description: "Πείτε μας τα στοιχεία απόπλου, τον προορισμό και τον αριθμό επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  portLavrio: {
    en: {
      meta: {
        title: "Lavrio Port Transfers – Private Taxi & Chauffeur Service",
        description:
          "Book a private transfer to or from the Port of Lavrio for ferry connections to the Cyclades. Connect with Athens and the airport. Request a quote.",
      },
      breadcrumbLabel: "Lavrio",
      hero: {
        eyebrow: "Port of Lavrio",
        title: "Private Transfers to Lavrio Port",
        description: "Book a private transfer to or from the Port of Lavrio in southeast Attica, timed around your ferry.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "About the Port of Lavrio",
        paragraphs: [
          "Lavrio is a port in southeastern Attica, serving ferry connections to islands such as Kea and Kythnos, and offering an alternative departure point to Piraeus and Rafina for parts of the Cyclades.",
          "A private transfer connects Lavrio directly with Athens, Athens Airport, or your accommodation, avoiding the need to arrange local transport after a ferry arrival.",
        ],
      },
      transferService: {
        eyebrow: "What's Included",
        title: "Private Lavrio Port Transfer",
        items: [
          { title: "Embarkation & Disembarkation", description: "Transfers can be arranged for your arrival at or departure from the port." },
          { title: "Timed Around Your Sailing", description: "Pickup is planned around your actual embarkation or disembarkation time." },
          { title: "Door-to-Door Service", description: "Direct transfers between the port and your exact hotel, address or destination." },
          { title: "Private, Not Shared", description: "Your vehicle is booked exclusively for you and your group." },
        ],
      },
      connections: {
        eyebrow: "Airport & City Connections",
        title: "Airport and City Connections",
        items: [
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "Private transfers connect Lavrio with Athens International Airport." },
          { label: "Central Athens", href: "/athens/", description: "Continue your journey directly to a hotel or address in central Athens." },
        ],
      },
      cruiseFerryContext: {
        eyebrow: "Ferry Travel",
        title: "Ferry Passengers",
        paragraphs: [
          "Lavrio mainly serves domestic ferry routes to nearby Cycladic islands. Share your ferry line and sailing time when requesting a quote so your pickup can be planned around it.",
          "Exact meeting point details are confirmed as part of your booking rather than published generally.",
        ],
      },
      popularDestinations: {
        eyebrow: "Nearby Travel",
        title: "Planning Your Journey From Lavrio",
        items: [
          { label: "Central Athens", href: "/athens/", description: "Most onward journeys from Lavrio connect through central Athens." },
        ],
      },
      bookingInfo: bookingInfoEn,
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a transfer from Athens Airport to Lavrio Port?", answer: "Yes, transfers between the airport and Lavrio can be arranged around your sailing time." },
          { question: "Can you time my transfer around my ferry departure?", answer: "Yes, share your sailing time when requesting a quote." },
          { question: "What information should I provide for a port transfer?", answer: "Your ferry line, sailing time, onward destination, and passenger and luggage numbers." },
          { question: "Can I arrange a transfer from Lavrio to my hotel in Athens?", answer: "Yes, port-to-hotel transfers can be arranged around your arrival time." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Lavrio Port Transfer?",
        description: "Tell us your sailing details, destination and passenger numbers, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορές στο Λιμάνι του Λαυρίου – Ιδιωτικό Ταξί & Σοφέρ",
        description:
          "Κλείστε ιδιωτική μεταφορά από ή προς το Λιμάνι του Λαυρίου για συνδέσεις ferry με τις Κυκλάδες. Σύνδεση με Αθήνα και αεροδρόμιο. Ζητήστε προσφορά.",
      },
      breadcrumbLabel: "Λαύριο",
      hero: {
        eyebrow: "Λιμάνι Λαυρίου",
        title: "Ιδιωτικές Μεταφορές στο Λιμάνι του Λαυρίου",
        description: "Κλείστε ιδιωτική μεταφορά από ή προς το Λιμάνι του Λαυρίου στη νοτιοανατολική Αττική, προσαρμοσμένη στο ferry σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Σχετικά με το Λιμάνι του Λαυρίου",
        paragraphs: [
          "Το Λαύριο είναι λιμάνι στη νοτιοανατολική Αττική, εξυπηρετεί συνδέσεις ferry προς νησιά όπως η Κέα και η Κύθνος, προσφέροντας μια εναλλακτική αφετηρία στον Πειραιά και τη Ραφήνα για ορισμένα μέρη των Κυκλάδων.",
          "Μια ιδιωτική μεταφορά συνδέει το Λαύριο απευθείας με την Αθήνα, το Αεροδρόμιο Αθηνών, ή το κατάλυμά σας, χωρίς να χρειάζεται να οργανώσετε τοπική μεταφορά μετά την άφιξη του ferry.",
        ],
      },
      transferService: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Ιδιωτική Μεταφορά στο Λιμάνι του Λαυρίου",
        items: [
          { title: "Επιβίβαση & Αποβίβαση", description: "Οι μεταφορές μπορούν να οργανωθούν τόσο για την άφιξή σας όσο και για την αναχώρησή σας από το λιμάνι." },
          { title: "Προσαρμοσμένο στον Απόπλου σας", description: "Η παραλαβή σχεδιάζεται σύμφωνα με την πραγματική ώρα επιβίβασης ή αποβίβασής σας." },
          { title: "Υπηρεσία Από Πόρτα σε Πόρτα", description: "Απευθείας μεταφορές μεταξύ του λιμανιού και του ακριβούς ξενοδοχείου, διεύθυνσης ή προορισμού σας." },
          { title: "Ιδιωτικό, Όχι Κοινόχρηστο", description: "Το όχημά σας κλείνεται αποκλειστικά για εσάς και την ομάδα σας." },
        ],
      },
      connections: {
        eyebrow: "Συνδέσεις Αεροδρομίου & Πόλης",
        title: "Συνδέσεις με Αεροδρόμιο και Πόλη",
        items: [
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Ιδιωτικές μεταφορές συνδέουν το Λαύριο με το Διεθνές Αεροδρόμιο Αθηνών." },
          { label: "Κέντρο Αθήνας", href: "/el/athina/", description: "Συνεχίστε το ταξίδι σας απευθείας προς ξενοδοχείο ή διεύθυνση στο κέντρο της Αθήνας." },
        ],
      },
      cruiseFerryContext: {
        eyebrow: "Ταξίδι με Ferry",
        title: "Επιβάτες Ferry",
        paragraphs: [
          "Το Λαύριο εξυπηρετεί κυρίως εγχώριες διαδρομές ferry προς κοντινά νησιά των Κυκλάδων. Δώστε μας την εταιρεία ferry και την ώρα απόπλου κατά την αίτηση προσφοράς ώστε η παραλαβή σας να σχεδιαστεί αναλόγως.",
          "Οι ακριβείς λεπτομέρειες σημείου συνάντησης επιβεβαιώνονται ως μέρος της κράτησής σας αντί να δημοσιεύονται γενικά.",
        ],
      },
      popularDestinations: {
        eyebrow: "Κοντινές Μετακινήσεις",
        title: "Σχεδιάστε το Ταξίδι σας από το Λαύριο",
        items: [
          { label: "Κέντρο Αθήνας", href: "/el/athina/", description: "Οι περισσότερες μετακινήσεις από το Λαύριο συνδέονται μέσω του κέντρου της Αθήνας." },
        ],
      },
      bookingInfo: bookingInfoEl,
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω μεταφορά από το Αεροδρόμιο Αθηνών προς το Λιμάνι του Λαυρίου;", answer: "Ναι, οι μεταφορές μεταξύ αεροδρομίου και Λαυρίου μπορούν να οργανωθούν σύμφωνα με την ώρα απόπλου σας." },
          { question: "Μπορείτε να προσαρμόσετε τη μεταφορά μου στην αναχώρηση του ferry μου;", answer: "Ναι, δώστε μας την ώρα απόπλου κατά την αίτηση προσφοράς." },
          { question: "Ποιες πληροφορίες πρέπει να δώσω για μεταφορά σε λιμάνι;", answer: "Την εταιρεία ferry, την ώρα απόπλου, τον επόμενο προορισμό, και τον αριθμό επιβατών και αποσκευών." },
          { question: "Μπορώ να οργανώσω μεταφορά από το Λαύριο προς το ξενοδοχείο μου στην Αθήνα;", answer: "Ναι, οι μεταφορές λιμανιού προς ξενοδοχείο μπορούν να οργανωθούν σύμφωνα με την ώρα άφιξής σας." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στο Λιμάνι του Λαυρίου;",
        description: "Πείτε μας τα στοιχεία απόπλου, τον προορισμό και τον αριθμό επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  portThessaloniki: {
    en: {
      meta: {
        title: "Thessaloniki Port Transfers – Private Taxi & Chauffeur",
        description:
          "Book a private transfer to or from the Port of Thessaloniki, connecting with the city and airport. Request a quote for your journey.",
      },
      breadcrumbLabel: "Thessaloniki Port",
      hero: {
        eyebrow: "Port of Thessaloniki",
        title: "Private Transfers to Thessaloniki Port",
        description: "Book a private transfer to or from the Port of Thessaloniki, connecting with the city centre and the airport.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "About the Port of Thessaloniki",
        paragraphs: [
          "The Port of Thessaloniki is the main port serving northern Greece, located within the city itself. It handles cruise calls and some ferry and cargo traffic, and sits close to Thessaloniki's city centre.",
          "A private transfer connects the port directly with your hotel, the city centre, or Thessaloniki Airport, without relying on public transport after disembarking.",
        ],
      },
      transferService: {
        eyebrow: "What's Included",
        title: "Private Thessaloniki Port Transfer",
        items: [
          { title: "Embarkation & Disembarkation", description: "Transfers can be arranged for your arrival at or departure from the port." },
          { title: "Timed Around Your Sailing", description: "Pickup is planned around your actual embarkation or disembarkation time." },
          { title: "Door-to-Door Service", description: "Direct transfers between the port and your exact hotel, address or destination." },
          { title: "Private, Not Shared", description: "Your vehicle is booked exclusively for you and your group." },
        ],
      },
      connections: {
        eyebrow: "Airport & City Connections",
        title: "Airport and City Connections",
        items: [
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "Direct transfers between the port and Thessaloniki Airport." },
          { label: "Thessaloniki City", href: "/city/thessaloniki/", description: "Continue your journey directly to a hotel or address in the city." },
        ],
      },
      cruiseFerryContext: {
        eyebrow: "Cruise Travel",
        title: "Cruise Passengers",
        paragraphs: [
          "Thessaloniki receives cruise calls as part of eastern Mediterranean itineraries. Share your cruise line and sailing time when requesting a quote so your pickup can be planned around it.",
          "Exact meeting point details are confirmed as part of your booking rather than published generally.",
        ],
      },
      popularDestinations: {
        eyebrow: "Onward Travel",
        title: "Continue Your Journey From Thessaloniki",
        items: [
          { label: "Halkidiki", href: "/route/thessaloniki-to-halkidiki/", description: "A popular onward route from Thessaloniki to the beaches of Halkidiki." },
        ],
      },
      bookingInfo: bookingInfoEn,
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a transfer from Thessaloniki Airport to the port?", answer: "Yes, airport-to-port transfers can be arranged around your sailing time." },
          { question: "Can you time my transfer around my cruise departure?", answer: "Yes, share your embarkation or disembarkation time when requesting a quote." },
          { question: "Can I arrange a transfer from the port to my hotel in Thessaloniki?", answer: "Yes, port-to-hotel transfers can be arranged around your arrival time." },
          { question: "What information should I provide for a port transfer?", answer: "Your cruise line, sailing time, onward destination, and passenger and luggage numbers." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Thessaloniki Port Transfer?",
        description: "Tell us your sailing details, destination and passenger numbers, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορές στο Λιμάνι της Θεσσαλονίκης – Ιδιωτικό Ταξί & Σοφέρ",
        description:
          "Κλείστε ιδιωτική μεταφορά από ή προς το Λιμάνι της Θεσσαλονίκης, με σύνδεση προς την πόλη και το αεροδρόμιο. Ζητήστε προσφορά για το ταξίδι σας.",
      },
      breadcrumbLabel: "Λιμάνι Θεσσαλονίκης",
      hero: {
        eyebrow: "Λιμάνι Θεσσαλονίκης",
        title: "Ιδιωτικές Μεταφορές στο Λιμάνι της Θεσσαλονίκης",
        description: "Κλείστε ιδιωτική μεταφορά από ή προς το Λιμάνι της Θεσσαλονίκης, με σύνδεση προς το κέντρο της πόλης και το αεροδρόμιο.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Σχετικά με το Λιμάνι της Θεσσαλονίκης",
        paragraphs: [
          "Το Λιμάνι της Θεσσαλονίκης είναι το κύριο λιμάνι που εξυπηρετεί τη βόρεια Ελλάδα, βρίσκεται μέσα στην ίδια την πόλη. Δέχεται κρουαζιέρες και κάποια κίνηση ferry και εμπορευμάτων, και βρίσκεται κοντά στο κέντρο της Θεσσαλονίκης.",
          "Μια ιδιωτική μεταφορά συνδέει το λιμάνι απευθείας με το ξενοδοχείο σας, το κέντρο της πόλης, ή το Αεροδρόμιο Θεσσαλονίκης, χωρίς να εξαρτάστε από τα μέσα μαζικής μεταφοράς μετά την αποβίβαση.",
        ],
      },
      transferService: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Ιδιωτική Μεταφορά στο Λιμάνι της Θεσσαλονίκης",
        items: [
          { title: "Επιβίβαση & Αποβίβαση", description: "Οι μεταφορές μπορούν να οργανωθούν τόσο για την άφιξή σας όσο και για την αναχώρησή σας από το λιμάνι." },
          { title: "Προσαρμοσμένο στον Απόπλου σας", description: "Η παραλαβή σχεδιάζεται σύμφωνα με την πραγματική ώρα επιβίβασης ή αποβίβασής σας." },
          { title: "Υπηρεσία Από Πόρτα σε Πόρτα", description: "Απευθείας μεταφορές μεταξύ του λιμανιού και του ακριβούς ξενοδοχείου, διεύθυνσης ή προορισμού σας." },
          { title: "Ιδιωτικό, Όχι Κοινόχρηστο", description: "Το όχημά σας κλείνεται αποκλειστικά για εσάς και την ομάδα σας." },
        ],
      },
      connections: {
        eyebrow: "Συνδέσεις Αεροδρομίου & Πόλης",
        title: "Συνδέσεις με Αεροδρόμιο και Πόλη",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Απευθείας μεταφορές μεταξύ του λιμανιού και του Αεροδρομίου Θεσσαλονίκης." },
          { label: "Πόλη Θεσσαλονίκης", href: "/el/poli/thessaloniki/", description: "Συνεχίστε το ταξίδι σας απευθείας προς ξενοδοχείο ή διεύθυνση στην πόλη." },
        ],
      },
      cruiseFerryContext: {
        eyebrow: "Ταξίδι με Κρουαζιέρα",
        title: "Επιβάτες Κρουαζιέρας",
        paragraphs: [
          "Η Θεσσαλονίκη δέχεται κρουαζιέρες στο πλαίσιο δρομολογίων της ανατολικής Μεσογείου. Δώστε μας την εταιρεία κρουαζιέρας και την ώρα απόπλου κατά την αίτηση προσφοράς ώστε η παραλαβή σας να σχεδιαστεί αναλόγως.",
          "Οι ακριβείς λεπτομέρειες σημείου συνάντησης επιβεβαιώνονται ως μέρος της κράτησής σας αντί να δημοσιεύονται γενικά.",
        ],
      },
      popularDestinations: {
        eyebrow: "Συνέχεια Ταξιδιού",
        title: "Συνεχίστε το Ταξίδι σας από τη Θεσσαλονίκη",
        items: [
          { label: "Χαλκιδική", href: "/el/diadromi/thessaloniki-chalkidiki/", description: "Μια δημοφιλής διαδρομή συνέχειας από τη Θεσσαλονίκη προς τις παραλίες της Χαλκιδικής." },
        ],
      },
      bookingInfo: bookingInfoEl,
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το λιμάνι;", answer: "Ναι, οι μεταφορές αεροδρομίου προς λιμάνι μπορούν να οργανωθούν σύμφωνα με την ώρα απόπλου σας." },
          { question: "Μπορείτε να προσαρμόσετε τη μεταφορά μου στην αναχώρηση της κρουαζιέρας μου;", answer: "Ναι, δώστε μας την ώρα επιβίβασης ή αποβίβασής σας κατά την αίτηση προσφοράς." },
          { question: "Μπορώ να οργανώσω μεταφορά από το λιμάνι προς το ξενοδοχείο μου στη Θεσσαλονίκη;", answer: "Ναι, οι μεταφορές λιμανιού προς ξενοδοχείο μπορούν να οργανωθούν σύμφωνα με την ώρα άφιξής σας." },
          { question: "Ποιες πληροφορίες πρέπει να δώσω για μεταφορά σε λιμάνι;", answer: "Την εταιρεία κρουαζιέρας, την ώρα απόπλου, τον επόμενο προορισμό, και τον αριθμό επιβατών και αποσκευών." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στο Λιμάνι της Θεσσαλονίκης;",
        description: "Πείτε μας τα στοιχεία απόπλου, τον προορισμό και τον αριθμό επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  portHeraklion: {
    en: {
      meta: {
        title: "Heraklion Port Transfers – Private Taxi & Chauffeur Service",
        description:
          "Book a private transfer to or from the Port of Heraklion, connecting with the city, the airport and ferries to Piraeus. Request a quote.",
      },
      breadcrumbLabel: "Heraklion Port",
      hero: {
        eyebrow: "Port of Heraklion",
        title: "Private Transfers to Heraklion Port",
        description: "Book a private transfer to or from the Port of Heraklion, Crete's main ferry connection to Piraeus.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "About the Port of Heraklion",
        paragraphs: [
          "The Port of Heraklion is Crete's main ferry port, located within Heraklion city on the island's north coast. It provides the principal ferry connection between Crete and Piraeus, and also receives cruise calls.",
          "A private transfer connects the port directly with Heraklion city, Heraklion Airport nearby, or your accommodation elsewhere on the island.",
        ],
      },
      transferService: {
        eyebrow: "What's Included",
        title: "Private Heraklion Port Transfer",
        items: [
          { title: "Embarkation & Disembarkation", description: "Transfers can be arranged for your arrival at or departure from the port." },
          { title: "Timed Around Your Sailing", description: "Pickup is planned around your actual embarkation or disembarkation time." },
          { title: "Door-to-Door Service", description: "Direct transfers between the port and your exact hotel, address or destination." },
          { title: "Private, Not Shared", description: "Your vehicle is booked exclusively for you and your group." },
        ],
      },
      connections: {
        eyebrow: "Airport & Region Connections",
        title: "Airport and Region Connections",
        items: [
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "The port sits close to Heraklion Airport, useful for flight-to-ferry connections." },
          { label: "Explore Crete", href: "/region/crete/", description: "See our regional overview of transportation across Crete." },
        ],
      },
      cruiseFerryContext: {
        eyebrow: "Cruise & Ferry Travel",
        title: "Cruise and Ferry Passengers",
        paragraphs: [
          "Heraklion's port handles both the domestic ferry route to and from Piraeus and occasional cruise calls. Share your line and sailing time when requesting a quote so your pickup can be planned around it.",
          "Exact meeting point details are confirmed as part of your booking rather than published generally.",
        ],
      },
      popularDestinations: {
        eyebrow: "Onward Travel",
        title: "Continue Your Journey From Heraklion",
        items: [
          { label: "Chania", href: "/route/heraklion-to-chania/", description: "A private transfer along Crete's north coast to Chania." },
        ],
      },
      bookingInfo: bookingInfoEn,
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a transfer from Heraklion Airport to the port?", answer: "Yes, the port and airport are close together, and this short transfer can be arranged around your sailing time." },
          { question: "Can you time my transfer around my ferry to or from Piraeus?", answer: "Yes, share your embarkation or disembarkation time when requesting a quote." },
          { question: "Can I arrange a transfer from the port to my hotel in Crete?", answer: "Yes, port-to-hotel transfers can be arranged around your arrival time." },
          { question: "What information should I provide for a port transfer?", answer: "Your ferry or cruise line, sailing time, onward destination, and passenger and luggage numbers." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Heraklion Port Transfer?",
        description: "Tell us your sailing details, destination and passenger numbers, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορές στο Λιμάνι του Ηρακλείου – Ιδιωτικό Ταξί & Σοφέρ",
        description:
          "Κλείστε ιδιωτική μεταφορά από ή προς το Λιμάνι του Ηρακλείου, με σύνδεση προς την πόλη, το αεροδρόμιο και τα ferry προς τον Πειραιά. Ζητήστε προσφορά.",
      },
      breadcrumbLabel: "Λιμάνι Ηρακλείου",
      hero: {
        eyebrow: "Λιμάνι Ηρακλείου",
        title: "Ιδιωτικές Μεταφορές στο Λιμάνι του Ηρακλείου",
        description: "Κλείστε ιδιωτική μεταφορά από ή προς το Λιμάνι του Ηρακλείου, την κύρια σύνδεση ferry της Κρήτης προς τον Πειραιά.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Σχετικά με το Λιμάνι του Ηρακλείου",
        paragraphs: [
          "Το Λιμάνι του Ηρακλείου είναι το κύριο λιμάνι ferry της Κρήτης, βρίσκεται μέσα στην πόλη του Ηρακλείου, στη βόρεια ακτή του νησιού. Παρέχει την κύρια σύνδεση ferry μεταξύ Κρήτης και Πειραιά, ενώ δέχεται και κρουαζιέρες.",
          "Μια ιδιωτική μεταφορά συνδέει το λιμάνι απευθείας με την πόλη του Ηρακλείου, το κοντινό Αεροδρόμιο Ηρακλείου, ή το κατάλυμά σας αλλού στο νησί.",
        ],
      },
      transferService: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Ιδιωτική Μεταφορά στο Λιμάνι του Ηρακλείου",
        items: [
          { title: "Επιβίβαση & Αποβίβαση", description: "Οι μεταφορές μπορούν να οργανωθούν τόσο για την άφιξή σας όσο και για την αναχώρησή σας από το λιμάνι." },
          { title: "Προσαρμοσμένο στον Απόπλου σας", description: "Η παραλαβή σχεδιάζεται σύμφωνα με την πραγματική ώρα επιβίβασης ή αποβίβασής σας." },
          { title: "Υπηρεσία Από Πόρτα σε Πόρτα", description: "Απευθείας μεταφορές μεταξύ του λιμανιού και του ακριβούς ξενοδοχείου, διεύθυνσης ή προορισμού σας." },
          { title: "Ιδιωτικό, Όχι Κοινόχρηστο", description: "Το όχημά σας κλείνεται αποκλειστικά για εσάς και την ομάδα σας." },
        ],
      },
      connections: {
        eyebrow: "Συνδέσεις Αεροδρομίου & Περιοχής",
        title: "Συνδέσεις με Αεροδρόμιο και Περιοχή",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Το λιμάνι βρίσκεται κοντά στο Αεροδρόμιο Ηρακλείου, χρήσιμο για συνδέσεις πτήσης-ferry." },
          { label: "Εξερευνήστε την Κρήτη", href: "/el/periochi/kriti/", description: "Δείτε τη γενική μας επισκόπηση μεταφορών σε όλη την Κρήτη." },
        ],
      },
      cruiseFerryContext: {
        eyebrow: "Ταξίδι με Κρουαζιέρα & Ferry",
        title: "Επιβάτες Κρουαζιέρας και Ferry",
        paragraphs: [
          "Το λιμάνι του Ηρακλείου εξυπηρετεί τόσο την εγχώρια διαδρομή ferry προς και από τον Πειραιά όσο και περιστασιακές κρουαζιέρες. Δώστε μας την εταιρεία και την ώρα απόπλου κατά την αίτηση προσφοράς ώστε η παραλαβή σας να σχεδιαστεί αναλόγως.",
          "Οι ακριβείς λεπτομέρειες σημείου συνάντησης επιβεβαιώνονται ως μέρος της κράτησής σας αντί να δημοσιεύονται γενικά.",
        ],
      },
      popularDestinations: {
        eyebrow: "Συνέχεια Ταξιδιού",
        title: "Συνεχίστε το Ταξίδι σας από το Ηράκλειο",
        items: [
          { label: "Χανιά", href: "/el/diadromi/irakleio-chania/", description: "Ιδιωτική μεταφορά κατά μήκος της βόρειας ακτής της Κρήτης προς τα Χανιά." },
        ],
      },
      bookingInfo: bookingInfoEl,
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω μεταφορά από το Αεροδρόμιο Ηρακλείου προς το λιμάνι;", answer: "Ναι, το λιμάνι και το αεροδρόμιο βρίσκονται κοντά, και αυτή η σύντομη μεταφορά μπορεί να οργανωθεί σύμφωνα με την ώρα απόπλου σας." },
          { question: "Μπορείτε να προσαρμόσετε τη μεταφορά μου στο ferry μου προς ή από τον Πειραιά;", answer: "Ναι, δώστε μας την ώρα επιβίβασης ή αποβίβασής σας κατά την αίτηση προσφοράς." },
          { question: "Μπορώ να οργανώσω μεταφορά από το λιμάνι προς το ξενοδοχείο μου στην Κρήτη;", answer: "Ναι, οι μεταφορές λιμανιού προς ξενοδοχείο μπορούν να οργανωθούν σύμφωνα με την ώρα άφιξής σας." },
          { question: "Ποιες πληροφορίες πρέπει να δώσω για μεταφορά σε λιμάνι;", answer: "Την εταιρεία ferry ή κρουαζιέρας, την ώρα απόπλου, τον επόμενο προορισμό, και τον αριθμό επιβατών και αποσκευών." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στο Λιμάνι του Ηρακλείου;",
        description: "Πείτε μας τα στοιχεία απόπλου, τον προορισμό και τον αριθμό επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  portPatras: {
    en: {
      meta: {
        title: "Patras Port Transfers – Private Taxi & Chauffeur Service",
        description:
          "Book a private transfer to or from the Port of Patras, Greece's main ferry gateway to Italy. Connect with the Peloponnese. Request a quote.",
      },
      breadcrumbLabel: "Patras",
      hero: {
        eyebrow: "Port of Patras",
        title: "Private Transfers to Patras Port",
        description: "Book a private transfer to or from the Port of Patras, Greece's main ferry gateway to Italy.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Overview",
        title: "About the Port of Patras",
        paragraphs: [
          "Patras, in the Peloponnese region, is Greece's principal international ferry port, with routes connecting to Italian ports including Ancona, Bari and Brindisi. It also handles some domestic connections and is a gateway between mainland Greece and the Peloponnese.",
          "A private transfer connects Patras directly with your onward destination, whether that's elsewhere in the Peloponnese or further afield, without relying on public transport after disembarking.",
        ],
      },
      transferService: {
        eyebrow: "What's Included",
        title: "Private Patras Port Transfer",
        items: [
          { title: "Embarkation & Disembarkation", description: "Transfers can be arranged for your arrival at or departure from the port." },
          { title: "Timed Around Your Sailing", description: "Pickup is planned around your actual embarkation or disembarkation time." },
          { title: "Door-to-Door Service", description: "Direct transfers between the port and your exact hotel, address or destination." },
          { title: "Private, Not Shared", description: "Your vehicle is booked exclusively for you and your group." },
        ],
      },
      connections: {
        eyebrow: "Regional Connections",
        title: "Regional Connections",
        items: [
          { label: "Explore the Peloponnese", href: "/region/peloponnese/", description: "See our regional overview of transportation across the Peloponnese." },
        ],
      },
      cruiseFerryContext: {
        eyebrow: "Ferry Travel",
        title: "International Ferry Passengers",
        paragraphs: [
          "Patras is the main departure point for ferries to Italy, used by both foot passengers and those travelling with vehicles. Share your ferry line and sailing time when requesting a quote so your pickup can be planned around it.",
          "Exact meeting point details are confirmed as part of your booking rather than published generally.",
        ],
      },
      popularDestinations: {
        eyebrow: "Onward Travel",
        title: "Continue Your Journey From Patras",
        items: [
          { label: "Nafplio", href: "/destination/nafplio/", description: "A private transfer onward to the Peloponnese's popular waterfront town." },
        ],
      },
      bookingInfo: bookingInfoEn,
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Does Patras connect to Italy by ferry?", answer: "Yes, Patras is Greece's main international ferry port, with routes to Italian ports including Ancona, Bari and Brindisi." },
          { question: "Can you time my transfer around my ferry arrival or departure?", answer: "Yes, share your sailing time when requesting a quote." },
          { question: "Can I arrange a transfer from Patras to elsewhere in the Peloponnese?", answer: "Yes, private transfers from Patras across the Peloponnese can be requested through the quote form." },
          { question: "What information should I provide for a port transfer?", answer: "Your ferry line, sailing time, onward destination, and passenger and luggage numbers." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Patras Port Transfer?",
        description: "Tell us your sailing details, destination and passenger numbers, and request your private transfer quote.",
        primaryLabel: "Book Your Transfer",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορές στο Λιμάνι της Πάτρας – Ιδιωτικό Ταξί & Σοφέρ",
        description:
          "Κλείστε ιδιωτική μεταφορά από ή προς το Λιμάνι της Πάτρας, την κύρια πύλη ferry της Ελλάδας προς την Ιταλία. Σύνδεση με την Πελοπόννησο. Ζητήστε προσφορά.",
      },
      breadcrumbLabel: "Πάτρα",
      hero: {
        eyebrow: "Λιμάνι Πάτρας",
        title: "Ιδιωτικές Μεταφορές στο Λιμάνι της Πάτρας",
        description: "Κλείστε ιδιωτική μεταφορά από ή προς το Λιμάνι της Πάτρας, την κύρια πύλη ferry της Ελλάδας προς την Ιταλία.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση",
        title: "Σχετικά με το Λιμάνι της Πάτρας",
        paragraphs: [
          "Η Πάτρα, στην περιφέρεια της Πελοποννήσου, είναι το κύριο διεθνές λιμάνι ferry της Ελλάδας, με δρομολόγια προς ιταλικά λιμάνια όπως η Ανκόνα, το Μπάρι και το Μπρίντιζι. Εξυπηρετεί επίσης κάποιες εγχώριες συνδέσεις και αποτελεί πύλη μεταξύ της ηπειρωτικής Ελλάδας και της Πελοποννήσου.",
          "Μια ιδιωτική μεταφορά συνδέει την Πάτρα απευθείας με τον επόμενο προορισμό σας, είτε αυτός βρίσκεται αλλού στην Πελοπόννησο είτε πιο μακριά, χωρίς να εξαρτάστε από τα μέσα μαζικής μεταφοράς μετά την αποβίβαση.",
        ],
      },
      transferService: {
        eyebrow: "Τι Περιλαμβάνει",
        title: "Ιδιωτική Μεταφορά στο Λιμάνι της Πάτρας",
        items: [
          { title: "Επιβίβαση & Αποβίβαση", description: "Οι μεταφορές μπορούν να οργανωθούν τόσο για την άφιξή σας όσο και για την αναχώρησή σας από το λιμάνι." },
          { title: "Προσαρμοσμένο στον Απόπλου σας", description: "Η παραλαβή σχεδιάζεται σύμφωνα με την πραγματική ώρα επιβίβασης ή αποβίβασής σας." },
          { title: "Υπηρεσία Από Πόρτα σε Πόρτα", description: "Απευθείας μεταφορές μεταξύ του λιμανιού και του ακριβούς ξενοδοχείου, διεύθυνσης ή προορισμού σας." },
          { title: "Ιδιωτικό, Όχι Κοινόχρηστο", description: "Το όχημά σας κλείνεται αποκλειστικά για εσάς και την ομάδα σας." },
        ],
      },
      connections: {
        eyebrow: "Περιφερειακές Συνδέσεις",
        title: "Περιφερειακές Συνδέσεις",
        items: [
          { label: "Εξερευνήστε την Πελοπόννησο", href: "/el/periochi/peloponnisos/", description: "Δείτε τη γενική μας επισκόπηση μεταφορών σε όλη την Πελοπόννησο." },
        ],
      },
      cruiseFerryContext: {
        eyebrow: "Ταξίδι με Ferry",
        title: "Επιβάτες Διεθνούς Ferry",
        paragraphs: [
          "Η Πάτρα είναι το κύριο σημείο αναχώρησης για ferry προς την Ιταλία, που χρησιμοποιείται τόσο από πεζούς επιβάτες όσο και από όσους ταξιδεύουν με όχημα. Δώστε μας την εταιρεία ferry και την ώρα απόπλου κατά την αίτηση προσφοράς ώστε η παραλαβή σας να σχεδιαστεί αναλόγως.",
          "Οι ακριβείς λεπτομέρειες σημείου συνάντησης επιβεβαιώνονται ως μέρος της κράτησής σας αντί να δημοσιεύονται γενικά.",
        ],
      },
      popularDestinations: {
        eyebrow: "Συνέχεια Ταξιδιού",
        title: "Συνεχίστε το Ταξίδι σας από την Πάτρα",
        items: [
          { label: "Ναύπλιο", href: "/el/proorismos/nafplio/", description: "Ιδιωτική μεταφορά προς τη δημοφιλή παραθαλάσσια πόλη της Πελοποννήσου." },
        ],
      },
      bookingInfo: bookingInfoEl,
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Συνδέεται η Πάτρα με την Ιταλία μέσω ferry;", answer: "Ναι, η Πάτρα είναι το κύριο διεθνές λιμάνι ferry της Ελλάδας, με δρομολόγια προς ιταλικά λιμάνια όπως η Ανκόνα, το Μπάρι και το Μπρίντιζι." },
          { question: "Μπορείτε να προσαρμόσετε τη μεταφορά μου στην άφιξη ή αναχώρηση του ferry μου;", answer: "Ναι, δώστε μας την ώρα απόπλου κατά την αίτηση προσφοράς." },
          { question: "Μπορώ να οργανώσω μεταφορά από την Πάτρα προς αλλού στην Πελοπόννησο;", answer: "Ναι, ιδιωτικές μεταφορές από την Πάτρα σε όλη την Πελοπόννησο μπορούν να ζητηθούν μέσω της φόρμας προσφοράς." },
          { question: "Ποιες πληροφορίες πρέπει να δώσω για μεταφορά σε λιμάνι;", answer: "Την εταιρεία ferry, την ώρα απόπλου, τον επόμενο προορισμό, και τον αριθμό επιβατών και αποσκευών." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας στο Λιμάνι της Πάτρας;",
        description: "Πείτε μας τα στοιχεία απόπλου, τον προορισμό και τον αριθμό επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε τη Μεταφορά σας",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },
}
