import type { HeroContent } from "@/components/location/hero"
import type { RelatedLinkItem } from "@/components/location/related-links"
import type { IconTextSection } from "@/content/service-hubs"

export type RouteSlug =
  | "routeAthensDelphi"
  | "routeAthensNafplio"
  | "routeAthensMeteora"
  | "routeAthensThessaloniki"
  | "routeThessalonikiHalkidiki"
  | "routeHeraklionChania"
  | "routeAthensAirportPiraeus"
  | "routeAthensAirportRiviera"
  | "routeAthensCapeSounion"
  | "routeAthensCorinth"
  | "routeAthensAirportGlyfada"
  | "routeAthensAirportVouliagmeni"
  | "routeAthensAirportNafplio"
  | "routeAthensAirportCorinth"
  | "routeAthensAirportDelphi"
  | "routeAthensAirportLoutraki"
  | "routePiraeusNafplio"
  | "routeAthensAirportGrandeBretagne"
  | "routeAthensAirportKingGeorge"
  | "routeAthensAirportElectraPalace"
  | "routeAthensAirportNjvPlaza"
  | "routeAthensAirportGrandHyatt"
  | "routeAthensAirportAthenaeumIC"
  | "routeAthensAirportDivaniCaravel"
  | "routeThessalonikiAirportHalkidiki"
  | "routeThessalonikiAirportKassandra"
  | "routeThessalonikiAirportSithonia"
  | "routeThessalonikiAirportNeaMoudania"
  | "routeThessalonikiPortHalkidiki"
  | "routeThessalonikiAirportPort"
  | "routeThessalonikiMeteora"
  | "routeThessalonikiMountOlympus"
  | "routeThessalonikiVerginaPella"
  | "routeThessalonikiKavala"
  | "routeThessalonikiAirportSaniResort"
  | "routeThessalonikiAirportPortoCarras"
  | "routeThessalonikiStations"
  | "routeThessalonikiAirportElectraPalace"
  | "routeThessalonikiAirportMakedoniaPalace"
  | "routeThessalonikiAirportOnResidence"
  | "routeThessalonikiAirportMetHotel"
  | "routeThessalonikiAirportMediterraneanPalace"
  | "routeThessalonikiAirportDomotelOlympia"
  | "routeThessalonikiAirportHyattRegency"
  | "routeHeraklionAirportHersonissos"
  | "routeHeraklionAirportMalia"
  | "routeHeraklionAirportAgiosNikolaos"
  | "routeHeraklionAirportElounda"
  | "routeHeraklionAirportRethymno"
  | "routeHeraklionAirportChania"
  | "routeHeraklionAirportPort"
  | "routeChaniaAirportRethymno"
  | "routeChaniaAirportPlatanias"
  | "routeChaniaAirportGeorgioupolis"
  | "routeHeraklionKnossos"
  | "routeChaniaElafonissi"
  | "routeChaniaBalos"
  | "routeChaniaSamariaGorge"
  | "routeHeraklionAirportGdmMegaron"
  | "routeHeraklionAirportGalaxyIraklio"
  | "routeHeraklionAirportAquilaAtlantis"
  | "routeHeraklionAirportOliveGreen"
  | "routeHeraklionAirportLegacyGastroSuites"
  | "routeHeraklionAirportCretaMaris"
  | "routeHeraklionAirportNanaPrincess"
  | "routeHeraklionAirportAlexanderBeach"
  | "routeHeraklionAirportEloundaBayPalace"
  | "routeHeraklionAirportEloundaBeach"
  | "routeHeraklionAirportMinosBeachArt"

export type LinkSection = { eyebrow: string; title: string; items: Omit<RelatedLinkItem, "icon">[] }
export type ProseSection = { eyebrow: string; title: string; paragraphs: string[] }

export type RoutePageContent = {
  meta: { title: string; description: string }
  breadcrumbLabel: string
  hero: HeroContent
  overview: ProseSection
  journeyPlanning: IconTextSection
  whoItSuits: IconTextSection
  relatedLinks: LinkSection
  relatedRoutes?: LinkSection
  faq: { eyebrow: string; title: string; items: { question: string; answer: string }[] }
  cta: { heading: string; description: string; primaryLabel: string; secondaryLabel: string }
}

export const routeContent: Record<RouteSlug, Record<"en" | "el", RoutePageContent>> = {
  routeAthensDelphi: {
    en: {
      meta: {
        title: "Athens to Delphi Private Transfer – Book Your Ride",
        description:
          "Book a private transfer from Athens to Delphi. Comfortable door-to-door travel to the ancient site in the mountains of Phocis. Get a quote.",
      },
      breadcrumbLabel: "Athens to Delphi",
      hero: {
        eyebrow: "Athens → Delphi",
        title: "Athens to Delphi Private Transfer",
        description: "A private transfer for the mountain journey from Athens to the ancient site of Delphi, typically around 2.5–3 hours.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Athens to Delphi",
        paragraphs: [
          "Delphi lies in the mountains of Phocis, roughly 180–190 km from Athens by road. The drive typically takes around 2.5 to 3 hours, following the A1/E75 motorway before climbing into the mountains near Arachova on the EO48.",
          "Because the route includes a winding mountain road, many visitors prefer a private transfer over self-driving or coach tours, especially when travelling as a day trip that needs to fit a specific schedule.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 2.5–3 hours each way, depending on traffic and road conditions." },
          { title: "Route", description: "Via the A1/E75 motorway and the mountain road through Arachova (EO48)." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
          { title: "Day Trip or One-Way", description: "This route can be booked as a round trip or a one-way transfer, depending on your plans." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Day Trips from Athens", description: "Visit the ancient site of Delphi and return to Athens the same day." },
          { title: "Small Groups & Families", description: "A private vehicle keeps your group together for the full mountain journey." },
          { title: "Flexible Scheduling", description: "Depart and return at times that suit your itinerary rather than a fixed tour schedule." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Athens",
        items: [
          { label: "Athens City Transfers", href: "/athens/", description: "See our overview of private transportation around Athens." },
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "Combine your Delphi trip with an Athens Airport transfer." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Popular Routes from Athens",
        items: [
          { label: "Athens to Nafplio", href: "/route/athens-to-nafplio/", description: "A private transfer to the waterfront town of Nafplio in the Peloponnese." },
          { label: "Athens to Meteora", href: "/route/athens-to-meteora/", description: "A long-distance transfer to the rock-pillar monasteries of Meteora." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Athens to Delphi take?", answer: "Typically around 2.5 to 3 hours each way, depending on traffic and road conditions." },
          { question: "Can I book this as a round trip in one day?", answer: "Yes, many visitors book a round trip and return to Athens the same day — let us know your plans when requesting a quote." },
          { question: "Is the road to Delphi mountainous?", answer: "Yes, the route climbs into the mountains of Phocis near Arachova, which is one reason many travellers prefer a private transfer." },
          { question: "Can I be picked up from Athens Airport instead of central Athens?", answer: "Yes, mention your pickup location when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Athens to Delphi Transfer?",
        description: "Tell us your pickup time, return plans and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτική Μεταφορά Αθήνα – Δελφοί – Κλείστε το Ταξίδι σας",
        description:
          "Κλείστε ιδιωτική μεταφορά από την Αθήνα προς τους Δελφούς. Άνετη μεταφορά από πόρτα σε πόρτα στον αρχαιολογικό χώρο στα βουνά της Φωκίδας.",
      },
      breadcrumbLabel: "Αθήνα προς Δελφούς",
      hero: {
        eyebrow: "Αθήνα → Δελφοί",
        title: "Ιδιωτική Μεταφορά Αθήνα – Δελφοί",
        description: "Μια ιδιωτική μεταφορά για το ορεινό ταξίδι από την Αθήνα προς τον αρχαιολογικό χώρο των Δελφών, συνήθως περίπου 2,5–3 ώρες.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από την Αθήνα προς τους Δελφούς",
        paragraphs: [
          "Οι Δελφοί βρίσκονται στα βουνά της Φωκίδας, περίπου 180–190 χλμ από την Αθήνα οδικώς. Η διαδρομή διαρκεί συνήθως περίπου 2,5 έως 3 ώρες, ακολουθώντας τον αυτοκινητόδρομο Α1/Ε75 πριν ανηφορίσει στα βουνά κοντά στην Αράχωβα μέσω της ΕΟ48.",
          "Επειδή η διαδρομή περιλαμβάνει έναν ορεινό δρόμο με στροφές, πολλοί επισκέπτες προτιμούν μια ιδιωτική μεταφορά αντί για αυτοκίνηση ή οργανωμένη εκδρομή, ειδικά όταν ταξιδεύουν ως ημερήσια εκδρομή με συγκεκριμένο πρόγραμμα.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 2,5–3 ώρες κάθε φορά, ανάλογα με την κίνηση και τις συνθήκες του δρόμου." },
          { title: "Διαδρομή", description: "Μέσω του αυτοκινητόδρομου Α1/Ε75 και του ορεινού δρόμου μέσω Αράχωβας (ΕΟ48)." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
          { title: "Ημερήσια Εκδρομή ή Απλή Μετάβαση", description: "Αυτή η διαδρομή μπορεί να κλειστεί ως μετ' επιστροφής ή ως απλή μεταφορά, ανάλογα με τα σχέδιά σας." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Ημερήσιες Εκδρομές από την Αθήνα", description: "Επισκεφθείτε τον αρχαιολογικό χώρο των Δελφών και επιστρέψτε στην Αθήνα την ίδια μέρα." },
          { title: "Μικρές Ομάδες & Οικογένειες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα σας μαζί για ολόκληρο το ορεινό ταξίδι." },
          { title: "Ευέλικτος Προγραμματισμός", description: "Αναχωρήστε και επιστρέψτε σε ώρες που ταιριάζουν στο πρόγραμμά σας αντί για σταθερό πρόγραμμα εκδρομής." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε την Αθήνα",
        items: [
          { label: "Μεταφορές στην Αθήνα", href: "/el/athina/", description: "Δείτε τη γενική μας επισκόπηση ιδιωτικών μεταφορών στην Αθήνα." },
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Συνδυάστε το ταξίδι σας στους Δελφούς με μεταφορά από το Αεροδρόμιο Αθηνών." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Δημοφιλείς Διαδρομές από την Αθήνα",
        items: [
          { label: "Αθήνα προς Ναύπλιο", href: "/el/diadromi/athina-nafplio/", description: "Ιδιωτική μεταφορά προς την παραθαλάσσια πόλη του Ναυπλίου στην Πελοπόννησο." },
          { label: "Αθήνα προς Μετέωρα", href: "/el/diadromi/athina-meteora/", description: "Μεταφορά μεγάλης απόστασης προς τα μοναστήρια πάνω σε βράχους των Μετεώρων." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από την Αθήνα στους Δελφούς;", answer: "Συνήθως περίπου 2,5 έως 3 ώρες κάθε φορά, ανάλογα με την κίνηση και τις συνθήκες του δρόμου." },
          { question: "Μπορώ να κλείσω αυτή τη διαδρομή μετ' επιστροφής μέσα σε μία μέρα;", answer: "Ναι, πολλοί επισκέπτες κλείνουν μετ' επιστροφής και επιστρέφουν στην Αθήνα την ίδια μέρα — ενημερώστε μας για τα σχέδιά σας κατά την αίτηση προσφοράς." },
          { question: "Είναι ορεινός ο δρόμος προς τους Δελφούς;", answer: "Ναι, η διαδρομή ανηφορίζει στα βουνά της Φωκίδας κοντά στην Αράχωβα, κάτι που είναι ένας από τους λόγους που πολλοί ταξιδιώτες προτιμούν ιδιωτική μεταφορά." },
          { question: "Μπορώ να παραληφθώ από το Αεροδρόμιο Αθηνών αντί για το κέντρο της Αθήνας;", answer: "Ναι, αναφέρετε το σημείο παραλαβής σας κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αθήνα – Δελφοί;",
        description: "Πείτε μας την ώρα παραλαβής, τα σχέδια επιστροφής και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensNafplio: {
    en: {
      meta: {
        title: "Athens to Nafplio Private Transfer – Book Your Ride",
        description:
          "Book a private transfer from Athens to Nafplio via the Corinth Canal. Comfortable door-to-door travel to the Peloponnese. Get a quote.",
      },
      breadcrumbLabel: "Athens to Nafplio",
      hero: {
        eyebrow: "Athens → Nafplio",
        title: "Athens to Nafplio Private Transfer",
        description: "A private transfer from Athens to the waterfront town of Nafplio, typically around 1.5–2 hours via the Corinth Canal.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Athens to Nafplio",
        paragraphs: [
          "Nafplio is around 140 km from Athens by road, with the journey typically taking around 1.5 to 2 hours. The route crosses the Corinth Canal at the Isthmus before following the Saronic Gulf coastline into the Peloponnese.",
          "This is one of the more accessible day-trip routes from Athens, and it's also a common way to begin a longer stay in the Peloponnese.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 1.5–2 hours each way, depending on traffic and road conditions." },
          { title: "Route", description: "Via the Corinth Canal at the Isthmus, then along the Saronic Gulf coast." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
          { title: "Day Trip or One-Way", description: "This route can be booked as a round trip or a one-way transfer, depending on your plans." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Day Trips from Athens", description: "Visit Nafplio and the Corinth Canal and return to Athens the same day." },
          { title: "Starting a Peloponnese Trip", description: "Use this route to begin a longer stay exploring the Peloponnese." },
          { title: "Families & Small Groups", description: "A private vehicle keeps your group together for the whole journey." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Nafplio & the Peloponnese",
        items: [
          { label: "Nafplio", href: "/destination/nafplio/", description: "See our destination overview of Nafplio." },
          { label: "Peloponnese Region", href: "/region/peloponnese/", description: "See our regional overview of transportation across the Peloponnese." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Popular Routes from Athens",
        items: [
          { label: "Athens to Delphi", href: "/route/athens-to-delphi/", description: "A private transfer to the ancient site of Delphi in the mountains." },
          { label: "Athens to Meteora", href: "/route/athens-to-meteora/", description: "A long-distance transfer to the rock-pillar monasteries of Meteora." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Athens to Nafplio take?", answer: "Typically around 1.5 to 2 hours each way, depending on traffic and road conditions." },
          { question: "Does the route pass the Corinth Canal?", answer: "Yes, the route crosses the Corinth Canal at the Isthmus." },
          { question: "Can I book this as a one-way transfer to start a longer Peloponnese trip?", answer: "Yes, mention your plans when requesting a quote." },
          { question: "Can I be picked up from Athens Airport instead of central Athens?", answer: "Yes, mention your pickup location when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Athens to Nafplio Transfer?",
        description: "Tell us your pickup time, return plans and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτική Μεταφορά Αθήνα – Ναύπλιο – Κλείστε το Ταξίδι σας",
        description:
          "Κλείστε ιδιωτική μεταφορά από την Αθήνα προς το Ναύπλιο μέσω της Διώρυγας της Κορίνθου. Άνετη μεταφορά από πόρτα σε πόρτα στην Πελοπόννησο.",
      },
      breadcrumbLabel: "Αθήνα προς Ναύπλιο",
      hero: {
        eyebrow: "Αθήνα → Ναύπλιο",
        title: "Ιδιωτική Μεταφορά Αθήνα – Ναύπλιο",
        description: "Μια ιδιωτική μεταφορά από την Αθήνα προς την παραθαλάσσια πόλη του Ναυπλίου, συνήθως περίπου 1,5–2 ώρες μέσω της Διώρυγας της Κορίνθου.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από την Αθήνα προς το Ναύπλιο",
        paragraphs: [
          "Το Ναύπλιο βρίσκεται περίπου 140 χλμ από την Αθήνα οδικώς, με το ταξίδι να διαρκεί συνήθως περίπου 1,5 έως 2 ώρες. Η διαδρομή διασχίζει τη Διώρυγα της Κορίνθου στον Ισθμό πριν ακολουθήσει την ακτογραμμή του Σαρωνικού προς την Πελοπόννησο.",
          "Αυτή είναι μία από τις πιο προσβάσιμες διαδρομές ημερήσιας εκδρομής από την Αθήνα, και είναι επίσης ένας συνηθισμένος τρόπος για να ξεκινήσει κανείς μια μεγαλύτερη διαμονή στην Πελοπόννησο.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 1,5–2 ώρες κάθε φορά, ανάλογα με την κίνηση και τις συνθήκες του δρόμου." },
          { title: "Διαδρομή", description: "Μέσω της Διώρυγας της Κορίνθου στον Ισθμό, στη συνέχεια κατά μήκος της ακτής του Σαρωνικού." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
          { title: "Ημερήσια Εκδρομή ή Απλή Μετάβαση", description: "Αυτή η διαδρομή μπορεί να κλειστεί ως μετ' επιστροφής ή ως απλή μεταφορά, ανάλογα με τα σχέδιά σας." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Ημερήσιες Εκδρομές από την Αθήνα", description: "Επισκεφθείτε το Ναύπλιο και τη Διώρυγα της Κορίνθου και επιστρέψτε στην Αθήνα την ίδια μέρα." },
          { title: "Έναρξη Ταξιδιού στην Πελοπόννησο", description: "Χρησιμοποιήστε αυτή τη διαδρομή για να ξεκινήσετε μια μεγαλύτερη διαμονή εξερευνώντας την Πελοπόννησο." },
          { title: "Οικογένειες & Μικρές Ομάδες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα σας μαζί για ολόκληρο το ταξίδι." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε το Ναύπλιο & την Πελοπόννησο",
        items: [
          { label: "Ναύπλιο", href: "/el/proorismos/nafplio/", description: "Δείτε την επισκόπηση προορισμού μας για το Ναύπλιο." },
          { label: "Περιοχή Πελοποννήσου", href: "/el/periochi/peloponnisos/", description: "Δείτε τη γενική μας επισκόπηση μεταφορών σε όλη την Πελοπόννησο." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Δημοφιλείς Διαδρομές από την Αθήνα",
        items: [
          { label: "Αθήνα προς Δελφούς", href: "/el/diadromi/athina-delfoi/", description: "Ιδιωτική μεταφορά προς τον αρχαιολογικό χώρο των Δελφών στα βουνά." },
          { label: "Αθήνα προς Μετέωρα", href: "/el/diadromi/athina-meteora/", description: "Μεταφορά μεγάλης απόστασης προς τα μοναστήρια πάνω σε βράχους των Μετεώρων." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από την Αθήνα στο Ναύπλιο;", answer: "Συνήθως περίπου 1,5 έως 2 ώρες κάθε φορά, ανάλογα με την κίνηση και τις συνθήκες του δρόμου." },
          { question: "Περνάει η διαδρομή από τη Διώρυγα της Κορίνθου;", answer: "Ναι, η διαδρομή διασχίζει τη Διώρυγα της Κορίνθου στον Ισθμό." },
          { question: "Μπορώ να κλείσω αυτή τη διαδρομή ως απλή μεταφορά για να ξεκινήσω μεγαλύτερο ταξίδι στην Πελοπόννησο;", answer: "Ναι, ενημερώστε μας για τα σχέδιά σας κατά την αίτηση προσφοράς." },
          { question: "Μπορώ να παραληφθώ από το Αεροδρόμιο Αθηνών αντί για το κέντρο της Αθήνας;", answer: "Ναι, αναφέρετε το σημείο παραλαβής σας κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αθήνα – Ναύπλιο;",
        description: "Πείτε μας την ώρα παραλαβής, τα σχέδια επιστροφής και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensMeteora: {
    en: {
      meta: {
        title: "Athens to Meteora Private Transfer – Book Your Ride",
        description:
          "Book a private, long-distance transfer from Athens to Meteora. Comfortable door-to-door travel to the rock-pillar monasteries of Thessaly.",
      },
      breadcrumbLabel: "Athens to Meteora",
      hero: {
        eyebrow: "Athens → Meteora",
        title: "Athens to Meteora Private Transfer",
        description: "A private, long-distance transfer from Athens to the Meteora monasteries, typically around 3.5–4.5 hours.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Athens to Meteora",
        paragraphs: [
          "Meteora is around 350–360 km from Athens by road, near the town of Kalambaka in Thessaly. The journey typically takes around 3.5 to 4.5 hours via the A1/E75 motorway, passing Lamia, Larissa and Trikala.",
          "Given the distance, this route is usually planned as part of a multi-day itinerary rather than a same-day round trip, and many travellers combine it with an overnight stay near Meteora.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 3.5–4.5 hours each way, depending on traffic and road conditions." },
          { title: "Route", description: "Via the A1/E75 motorway through Lamia, Larissa and Trikala." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
          { title: "One-Way or Multi-Day", description: "Many travellers book this as a one-way transfer combined with an overnight stay near Meteora." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Multi-Day Itineraries", description: "Combine this route with an overnight stay near Meteora rather than a same-day return." },
          { title: "Families & Small Groups", description: "A private vehicle keeps your group comfortable for the longer journey north." },
          { title: "Flexible Scheduling", description: "Depart at a time that suits your itinerary rather than a fixed tour schedule." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Meteora & Athens",
        items: [
          { label: "Meteora", href: "/destination/meteora/", description: "See our destination overview of Meteora." },
          { label: "Athens City Transfers", href: "/athens/", description: "See our overview of private transportation around Athens." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Popular Routes from Athens",
        items: [
          { label: "Athens to Thessaloniki", href: "/route/athens-to-thessaloniki/", description: "A long-distance transfer between Greece's two largest cities." },
          { label: "Athens to Delphi", href: "/route/athens-to-delphi/", description: "A private transfer to the ancient site of Delphi in the mountains." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Athens to Meteora take?", answer: "Typically around 3.5 to 4.5 hours each way, depending on traffic and road conditions." },
          { question: "Is this a day trip or an overnight trip?", answer: "Given the distance, it's usually planned as part of a multi-day itinerary rather than a same-day round trip." },
          { question: "Can I book this as a one-way transfer?", answer: "Yes, mention your plans when requesting a quote." },
          { question: "Can I be picked up from Athens Airport instead of central Athens?", answer: "Yes, mention your pickup location when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Athens to Meteora Transfer?",
        description: "Tell us your pickup time, itinerary and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτική Μεταφορά Αθήνα – Μετέωρα – Κλείστε το Ταξίδι σας",
        description:
          "Κλείστε ιδιωτική μεταφορά μεγάλης απόστασης από την Αθήνα προς τα Μετέωρα. Άνετη μεταφορά από πόρτα σε πόρτα στα μοναστήρια πάνω σε βράχους της Θεσσαλίας.",
      },
      breadcrumbLabel: "Αθήνα προς Μετέωρα",
      hero: {
        eyebrow: "Αθήνα → Μετέωρα",
        title: "Ιδιωτική Μεταφορά Αθήνα – Μετέωρα",
        description: "Μια ιδιωτική μεταφορά μεγάλης απόστασης από την Αθήνα προς τα μοναστήρια των Μετεώρων, συνήθως περίπου 3,5–4,5 ώρες.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από την Αθήνα προς τα Μετέωρα",
        paragraphs: [
          "Τα Μετέωρα βρίσκονται περίπου 350–360 χλμ από την Αθήνα οδικώς, κοντά στην πόλη της Καλαμπάκας στη Θεσσαλία. Το ταξίδι διαρκεί συνήθως περίπου 3,5 έως 4,5 ώρες μέσω του αυτοκινητόδρομου Α1/Ε75, περνώντας από Λαμία, Λάρισα και Τρίκαλα.",
          "Λόγω της απόστασης, αυτή η διαδρομή συνήθως σχεδιάζεται στο πλαίσιο ενός πολυήμερου προγράμματος και όχι ως μετ' επιστροφής την ίδια μέρα, και πολλοί ταξιδιώτες τη συνδυάζουν με διανυκτέρευση κοντά στα Μετέωρα.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 3,5–4,5 ώρες κάθε φορά, ανάλογα με την κίνηση και τις συνθήκες του δρόμου." },
          { title: "Διαδρομή", description: "Μέσω του αυτοκινητόδρομου Α1/Ε75 μέσω Λαμίας, Λάρισας και Τρικάλων." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
          { title: "Απλή Μετάβαση ή Πολυήμερο", description: "Πολλοί ταξιδιώτες κλείνουν αυτή τη διαδρομή ως απλή μεταφορά σε συνδυασμό με διανυκτέρευση κοντά στα Μετέωρα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Πολυήμερα Προγράμματα", description: "Συνδυάστε αυτή τη διαδρομή με διανυκτέρευση κοντά στα Μετέωρα αντί για επιστροφή την ίδια μέρα." },
          { title: "Οικογένειες & Μικρές Ομάδες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα σας άνετη για το μεγαλύτερο ταξίδι προς τα βόρεια." },
          { title: "Ευέλικτος Προγραμματισμός", description: "Αναχωρήστε σε ώρα που ταιριάζει στο πρόγραμμά σας αντί για σταθερό πρόγραμμα εκδρομής." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τα Μετέωρα & την Αθήνα",
        items: [
          { label: "Μετέωρα", href: "/el/proorismos/meteora/", description: "Δείτε την επισκόπηση προορισμού μας για τα Μετέωρα." },
          { label: "Μεταφορές στην Αθήνα", href: "/el/athina/", description: "Δείτε τη γενική μας επισκόπηση ιδιωτικών μεταφορών στην Αθήνα." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Δημοφιλείς Διαδρομές από την Αθήνα",
        items: [
          { label: "Αθήνα προς Θεσσαλονίκη", href: "/el/diadromi/athina-thessaloniki/", description: "Μεταφορά μεγάλης απόστασης μεταξύ των δύο μεγαλύτερων πόλεων της Ελλάδας." },
          { label: "Αθήνα προς Δελφούς", href: "/el/diadromi/athina-delfoi/", description: "Ιδιωτική μεταφορά προς τον αρχαιολογικό χώρο των Δελφών στα βουνά." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από την Αθήνα στα Μετέωρα;", answer: "Συνήθως περίπου 3,5 έως 4,5 ώρες κάθε φορά, ανάλογα με την κίνηση και τις συνθήκες του δρόμου." },
          { question: "Είναι ημερήσια ή πολυήμερη εκδρομή;", answer: "Λόγω της απόστασης, συνήθως σχεδιάζεται στο πλαίσιο ενός πολυήμερου προγράμματος και όχι ως μετ' επιστροφής την ίδια μέρα." },
          { question: "Μπορώ να κλείσω αυτή τη διαδρομή ως απλή μεταφορά;", answer: "Ναι, ενημερώστε μας για τα σχέδιά σας κατά την αίτηση προσφοράς." },
          { question: "Μπορώ να παραληφθώ από το Αεροδρόμιο Αθηνών αντί για το κέντρο της Αθήνας;", answer: "Ναι, αναφέρετε το σημείο παραλαβής σας κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αθήνα – Μετέωρα;",
        description: "Πείτε μας την ώρα παραλαβής, το πρόγραμμά σας και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensThessaloniki: {
    en: {
      meta: {
        title: "Athens to Thessaloniki Private Transfer – Book Your Ride",
        description:
          "Book a private, long-distance transfer from Athens to Thessaloniki via the A1/E75 motorway. Comfortable door-to-door travel. Get a quote.",
      },
      breadcrumbLabel: "Athens to Thessaloniki",
      hero: {
        eyebrow: "Athens → Thessaloniki",
        title: "Athens to Thessaloniki Private Transfer",
        description: "A private, long-distance transfer between Greece's two largest cities, typically around 5–5.5 hours via the A1/E75 motorway.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Athens to Thessaloniki",
        paragraphs: [
          "Athens and Thessaloniki are around 500 km apart, connected by the A1/E75 motorway. The drive typically takes around 5 to 5.5 hours, passing Lamia, Larissa and the Vale of Tempe.",
          "As a long inter-city journey, this route is often used by business travellers and those preferring not to fly or take the train, with a private vehicle allowing stops and a flexible schedule along the way.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 5–5.5 hours each way, depending on traffic and road conditions." },
          { title: "Route", description: "Via the A1/E75 motorway through Lamia, Larissa and the Vale of Tempe." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
          { title: "Rest Stops", description: "As a long journey, stops along the way can be arranged if needed." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Business Travel", description: "A direct, private alternative to flying or the train between Athens and Thessaloniki." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Flexible Departure Times", description: "Depart at a time that suits your schedule rather than a fixed flight or train." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Both Cities",
        items: [
          { label: "Athens City Transfers", href: "/athens/", description: "See our overview of private transportation around Athens." },
          { label: "Thessaloniki City Transfers", href: "/city/thessaloniki/", description: "See our overview of private transportation around Thessaloniki." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki to Halkidiki", href: "/route/thessaloniki-to-halkidiki/", description: "Continue your journey from Thessaloniki to the Halkidiki peninsula." },
          { label: "Athens to Meteora", href: "/route/athens-to-meteora/", description: "A long-distance transfer to the rock-pillar monasteries of Meteora." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Athens to Thessaloniki take?", answer: "Typically around 5 to 5.5 hours each way, depending on traffic and road conditions." },
          { question: "Can I request a stop along the way?", answer: "Yes, mention any planned stops when requesting a quote." },
          { question: "Is this route suitable for business travel?", answer: "Yes, it's often used as a direct, private alternative to flying or the train." },
          { question: "Can I be picked up from Athens Airport instead of central Athens?", answer: "Yes, mention your pickup location when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Athens to Thessaloniki Transfer?",
        description: "Tell us your pickup time, any stops and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτική Μεταφορά Αθήνα – Θεσσαλονίκη – Κλείστε το Ταξίδι σας",
        description:
          "Κλείστε ιδιωτική μεταφορά μεγάλης απόστασης από την Αθήνα προς τη Θεσσαλονίκη μέσω του αυτοκινητόδρομου Α1/Ε75. Άνετη μεταφορά από πόρτα σε πόρτα.",
      },
      breadcrumbLabel: "Αθήνα προς Θεσσαλονίκη",
      hero: {
        eyebrow: "Αθήνα → Θεσσαλονίκη",
        title: "Ιδιωτική Μεταφορά Αθήνα – Θεσσαλονίκη",
        description: "Μια ιδιωτική μεταφορά μεγάλης απόστασης μεταξύ των δύο μεγαλύτερων πόλεων της Ελλάδας, συνήθως περίπου 5–5,5 ώρες μέσω του αυτοκινητόδρομου Α1/Ε75.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από την Αθήνα προς τη Θεσσαλονίκη",
        paragraphs: [
          "Η Αθήνα και η Θεσσαλονίκη απέχουν περίπου 500 χλμ, συνδεόμενες μέσω του αυτοκινητόδρομου Α1/Ε75. Η διαδρομή διαρκεί συνήθως περίπου 5 έως 5,5 ώρες, περνώντας από Λαμία, Λάρισα και την Κοιλάδα των Τεμπών.",
          "Ως μακρά διαπολιτειακή διαδρομή, αυτή η διαδρομή χρησιμοποιείται συχνά από επαγγελματίες ταξιδιώτες και όσους προτιμούν να μην πετάξουν ή να μην πάρουν το τρένο, με ένα ιδιωτικό όχημα να επιτρέπει στάσεις και ευέλικτο πρόγραμμα καθ' οδόν.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 5–5,5 ώρες κάθε φορά, ανάλογα με την κίνηση και τις συνθήκες του δρόμου." },
          { title: "Διαδρομή", description: "Μέσω του αυτοκινητόδρομου Α1/Ε75 μέσω Λαμίας, Λάρισας και της Κοιλάδας των Τεμπών." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
          { title: "Στάσεις Ανάπαυσης", description: "Ως μεγάλο ταξίδι, στάσεις καθ' οδόν μπορούν να οργανωθούν εφόσον χρειάζεται." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Επαγγελματικά Ταξίδια", description: "Μια άμεση, ιδιωτική εναλλακτική στην πτήση ή το τρένο μεταξύ Αθήνας και Θεσσαλονίκης." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Ευέλικτες Ώρες Αναχώρησης", description: "Αναχωρήστε σε ώρα που ταιριάζει στο πρόγραμμά σας αντί για σταθερή πτήση ή τρένο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε και τις Δύο Πόλεις",
        items: [
          { label: "Μεταφορές στην Αθήνα", href: "/el/athina/", description: "Δείτε τη γενική μας επισκόπηση ιδιωτικών μεταφορών στην Αθήνα." },
          { label: "Μεταφορές στη Θεσσαλονίκη", href: "/el/poli/thessaloniki/", description: "Δείτε τη γενική μας επισκόπηση ιδιωτικών μεταφορών στη Θεσσαλονίκη." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Θεσσαλονίκη προς Χαλκιδική", href: "/el/diadromi/thessaloniki-chalkidiki/", description: "Συνεχίστε το ταξίδι σας από τη Θεσσαλονίκη προς τη χερσόνησο της Χαλκιδικής." },
          { label: "Αθήνα προς Μετέωρα", href: "/el/diadromi/athina-meteora/", description: "Μεταφορά μεγάλης απόστασης προς τα μοναστήρια πάνω σε βράχους των Μετεώρων." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από την Αθήνα στη Θεσσαλονίκη;", answer: "Συνήθως περίπου 5 έως 5,5 ώρες κάθε φορά, ανάλογα με την κίνηση και τις συνθήκες του δρόμου." },
          { question: "Μπορώ να ζητήσω στάση καθ' οδόν;", answer: "Ναι, αναφέρετε τυχόν προγραμματισμένες στάσεις κατά την αίτηση προσφοράς." },
          { question: "Είναι κατάλληλη αυτή η διαδρομή για επαγγελματικό ταξίδι;", answer: "Ναι, χρησιμοποιείται συχνά ως άμεση, ιδιωτική εναλλακτική στην πτήση ή το τρένο." },
          { question: "Μπορώ να παραληφθώ από το Αεροδρόμιο Αθηνών αντί για το κέντρο της Αθήνας;", answer: "Ναι, αναφέρετε το σημείο παραλαβής σας κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αθήνα – Θεσσαλονίκη;",
        description: "Πείτε μας την ώρα παραλαβής, τυχόν στάσεις και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiHalkidiki: {
    en: {
      meta: {
        title: "Thessaloniki to Halkidiki Private Transfer – Book Your Ride",
        description:
          "Book a private transfer from Thessaloniki to the Halkidiki peninsula. Comfortable door-to-door travel, typically around 1–1.5 hours.",
      },
      breadcrumbLabel: "Thessaloniki to Halkidiki",
      hero: {
        eyebrow: "Thessaloniki → Halkidiki",
        title: "Thessaloniki to Halkidiki Private Transfer",
        description: "A private transfer from Thessaloniki to the Halkidiki peninsula, typically around 1–1.5 hours to the Kassandra area.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki to Halkidiki",
        paragraphs: [
          "Halkidiki is made up of three peninsulas — Kassandra, Sithonia and the Mount Athos peninsula — southeast of Thessaloniki. The most accessible part, Kassandra, is typically around 70–80 km and 1 to 1.5 hours from Thessaloniki, while Sithonia is a longer drive further along the coast.",
          "This route is popular with travellers arriving at Thessaloniki Airport who are heading straight to a resort on the peninsula, as well as those visiting Thessaloniki first before continuing to the coast.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 1–1.5 hours to Kassandra; longer for destinations further along Sithonia." },
          { title: "Distance", description: "Approximately 70–80 km to the Kassandra peninsula from Thessaloniki." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
          { title: "Airport Pickup Available", description: "This transfer can also be arranged directly from Thessaloniki Airport." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Beach Holiday Arrivals", description: "Travel directly from Thessaloniki or its airport to a resort on the Halkidiki coast." },
          { title: "Families & Groups", description: "A private vehicle keeps your group and luggage together for the coastal drive." },
          { title: "Flexible Pickup Points", description: "Be picked up from Thessaloniki city or Thessaloniki Airport, whichever suits your arrival." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Thessaloniki",
        items: [
          { label: "Thessaloniki City Transfers", href: "/city/thessaloniki/", description: "See our overview of private transportation around Thessaloniki." },
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "See our dedicated airport transfer information for Thessaloniki." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer to Halkidiki take?", answer: "Typically around 1 to 1.5 hours to the Kassandra peninsula, depending on your exact destination and traffic." },
          { question: "Can I be picked up directly from Thessaloniki Airport?", answer: "Yes, this transfer can be arranged directly from the airport." },
          { question: "Does this route cover Sithonia as well as Kassandra?", answer: "Yes, transfers to Sithonia can be arranged, though the drive is longer than to Kassandra." },
          { question: "Can you arrange a transfer for a group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Thessaloniki to Halkidiki Transfer?",
        description: "Tell us your pickup point, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτική Μεταφορά Θεσσαλονίκη – Χαλκιδική – Κλείστε το Ταξίδι σας",
        description:
          "Κλείστε ιδιωτική μεταφορά από τη Θεσσαλονίκη προς τη χερσόνησο της Χαλκιδικής. Άνετη μεταφορά από πόρτα σε πόρτα, συνήθως περίπου 1–1,5 ώρα.",
      },
      breadcrumbLabel: "Θεσσαλονίκη προς Χαλκιδική",
      hero: {
        eyebrow: "Θεσσαλονίκη → Χαλκιδική",
        title: "Ιδιωτική Μεταφορά Θεσσαλονίκη – Χαλκιδική",
        description: "Μια ιδιωτική μεταφορά από τη Θεσσαλονίκη προς τη χερσόνησο της Χαλκιδικής, συνήθως περίπου 1–1,5 ώρα προς την περιοχή της Κασσάνδρας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από τη Θεσσαλονίκη προς τη Χαλκιδική",
        paragraphs: [
          "Η Χαλκιδική αποτελείται από τρεις χερσονήσους — Κασσάνδρα, Σιθωνία και τη χερσόνησο του Αγίου Όρους — νοτιοανατολικά της Θεσσαλονίκης. Το πιο προσβάσιμο τμήμα, η Κασσάνδρα, απέχει συνήθως περίπου 70–80 χλμ και 1 έως 1,5 ώρα από τη Θεσσαλονίκη, ενώ η Σιθωνία είναι πιο μακρινή διαδρομή περαιτέρω στην ακτή.",
          "Αυτή η διαδρομή είναι δημοφιλής σε ταξιδιώτες που φτάνουν στο Αεροδρόμιο Θεσσαλονίκης και κατευθύνονται απευθείας σε θέρετρο της χερσονήσου, καθώς και σε όσους επισκέπτονται πρώτα τη Θεσσαλονίκη πριν συνεχίσουν προς την ακτή.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 1–1,5 ώρα προς την Κασσάνδρα· περισσότερο για προορισμούς πιο μακριά στη Σιθωνία." },
          { title: "Απόσταση", description: "Περίπου 70–80 χλμ προς τη χερσόνησο της Κασσάνδρας από τη Θεσσαλονίκη." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
          { title: "Διαθέσιμη Παραλαβή από Αεροδρόμιο", description: "Αυτή η μεταφορά μπορεί επίσης να οργανωθεί απευθείας από το Αεροδρόμιο Θεσσαλονίκης." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Αφίξεις για Παραθαλάσσιες Διακοπές", description: "Ταξιδέψτε απευθείας από τη Θεσσαλονίκη ή το αεροδρόμιό της προς θέρετρο στην ακτή της Χαλκιδικής." },
          { title: "Οικογένειες & Ομάδες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για την παράκτια διαδρομή." },
          { title: "Ευέλικτα Σημεία Παραλαβής", description: "Παραλάβετε από την πόλη της Θεσσαλονίκης ή το Αεροδρόμιο Θεσσαλονίκης, όποιο ταιριάζει στην άφιξή σας." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Θεσσαλονίκη",
        items: [
          { label: "Μεταφορές στη Θεσσαλονίκη", href: "/el/poli/thessaloniki/", description: "Δείτε τη γενική μας επισκόπηση ιδιωτικών μεταφορών στη Θεσσαλονίκη." },
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου για τη Θεσσαλονίκη." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά προς τη Χαλκιδική;", answer: "Συνήθως περίπου 1 έως 1,5 ώρα προς τη χερσόνησο της Κασσάνδρας, ανάλογα με τον ακριβή προορισμό σας και την κίνηση." },
          { question: "Μπορώ να παραληφθώ απευθείας από το Αεροδρόμιο Θεσσαλονίκης;", answer: "Ναι, αυτή η μεταφορά μπορεί να οργανωθεί απευθείας από το αεροδρόμιο." },
          { question: "Καλύπτει αυτή η διαδρομή και τη Σιθωνία εκτός από την Κασσάνδρα;", answer: "Ναι, μεταφορές προς τη Σιθωνία μπορούν να οργανωθούν, αν και η διαδρομή είναι μεγαλύτερη από ό,τι προς την Κασσάνδρα." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Θεσσαλονίκη – Χαλκιδική;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionChania: {
    en: {
      meta: {
        title: "Heraklion to Chania Private Transfer – Book Your Ride",
        description:
          "Book a private transfer from Heraklion to Chania via the Northern Highway of Crete. Comfortable door-to-door travel. Get a quote.",
      },
      breadcrumbLabel: "Heraklion to Chania",
      hero: {
        eyebrow: "Heraklion → Chania",
        title: "Heraklion to Chania Private Transfer",
        description: "A private transfer across northern Crete from Heraklion to Chania, typically around 2–2.5 hours via the Northern Highway.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion to Chania",
        paragraphs: [
          "Heraklion and Chania are around 140–150 km apart, connected by the Northern Highway of Crete (VOAK/A90). The drive typically takes around 2 to 2.5 hours, passing Rethymno roughly halfway along the route.",
          "This route is commonly used by travellers flying into one Cretan airport and needing to reach accommodation near the other city, or those combining both cities in a single Crete itinerary.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 2–2.5 hours each way, depending on traffic and road conditions." },
          { title: "Route", description: "Via the Northern Highway of Crete (VOAK/A90), passing Rethymno." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
          { title: "Airport Pickup Available", description: "This transfer can be arranged from either Heraklion Airport or Chania Airport." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Cross-Island Travel", description: "Fly into one Cretan airport and travel directly to accommodation near the other city." },
          { title: "Multi-Stop Crete Itineraries", description: "Combine Heraklion and Chania in a single trip around the island." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the coastal drive." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Crete",
        items: [
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information for Heraklion." },
          { label: "Chania Airport", href: "/airport/chania-airport/", description: "See our dedicated airport transfer information for Chania." },
          { label: "Crete Region", href: "/region/crete/", description: "See our regional overview of transportation across Crete." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Heraklion to Chania take?", answer: "Typically around 2 to 2.5 hours each way, depending on traffic and road conditions." },
          { question: "Does the route pass Rethymno?", answer: "Yes, Rethymno is roughly halfway along the route." },
          { question: "Can I be picked up from Heraklion or Chania Airport?", answer: "Yes, this transfer can be arranged from either airport." },
          { question: "Can you arrange a transfer for a group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Heraklion to Chania Transfer?",
        description: "Tell us your pickup point, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτική Μεταφορά Ηράκλειο – Χανιά – Κλείστε το Ταξίδι σας",
        description:
          "Κλείστε ιδιωτική μεταφορά από το Ηράκλειο προς τα Χανιά μέσω του Βόρειου Οδικού Άξονα Κρήτης. Άνετη μεταφορά από πόρτα σε πόρτα.",
      },
      breadcrumbLabel: "Ηράκλειο προς Χανιά",
      hero: {
        eyebrow: "Ηράκλειο → Χανιά",
        title: "Ιδιωτική Μεταφορά Ηράκλειο – Χανιά",
        description: "Μια ιδιωτική μεταφορά στη βόρεια Κρήτη από το Ηράκλειο προς τα Χανιά, συνήθως περίπου 2–2,5 ώρες μέσω του Βόρειου Οδικού Άξονα.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Ηράκλειο προς τα Χανιά",
        paragraphs: [
          "Το Ηράκλειο και τα Χανιά απέχουν περίπου 140–150 χλμ, συνδεόμενα μέσω του Βόρειου Οδικού Άξονα Κρήτης (ΒΟΑΚ/Α90). Η διαδρομή διαρκεί συνήθως περίπου 2 έως 2,5 ώρες, περνώντας από το Ρέθυμνο περίπου στα μισά της διαδρομής.",
          "Αυτή η διαδρομή χρησιμοποιείται συνήθως από ταξιδιώτες που πετούν σε ένα από τα δύο κρητικά αεροδρόμια και χρειάζεται να φτάσουν σε κατάλυμα κοντά στην άλλη πόλη, ή από όσους συνδυάζουν και τις δύο πόλεις σε ένα ενιαίο πρόγραμμα στην Κρήτη.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 2–2,5 ώρες κάθε φορά, ανάλογα με την κίνηση και τις συνθήκες του δρόμου." },
          { title: "Διαδρομή", description: "Μέσω του Βόρειου Οδικού Άξονα Κρήτης (ΒΟΑΚ/Α90), περνώντας από το Ρέθυμνο." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
          { title: "Διαθέσιμη Παραλαβή από Αεροδρόμιο", description: "Αυτή η μεταφορά μπορεί να οργανωθεί από το Αεροδρόμιο Ηρακλείου ή το Αεροδρόμιο Χανίων." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Ταξίδι Μεταξύ Πόλεων του Νησιού", description: "Πετάξτε σε ένα κρητικό αεροδρόμιο και ταξιδέψτε απευθείας σε κατάλυμα κοντά στην άλλη πόλη." },
          { title: "Προγράμματα με Πολλές Στάσεις στην Κρήτη", description: "Συνδυάστε Ηράκλειο και Χανιά σε ένα ενιαίο ταξίδι στο νησί." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για την παράκτια διαδρομή." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε την Κρήτη",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου για το Ηράκλειο." },
          { label: "Αεροδρόμιο Χανίων", href: "/el/aerodromio/chania/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου για τα Χανιά." },
          { label: "Περιοχή Κρήτης", href: "/el/periochi/kriti/", description: "Δείτε τη γενική μας επισκόπηση μεταφορών σε όλη την Κρήτη." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Ηράκλειο στα Χανιά;", answer: "Συνήθως περίπου 2 έως 2,5 ώρες κάθε φορά, ανάλογα με την κίνηση και τις συνθήκες του δρόμου." },
          { question: "Περνάει η διαδρομή από το Ρέθυμνο;", answer: "Ναι, το Ρέθυμνο βρίσκεται περίπου στα μισά της διαδρομής." },
          { question: "Μπορώ να παραληφθώ από το Αεροδρόμιο Ηρακλείου ή Χανίων;", answer: "Ναι, αυτή η μεταφορά μπορεί να οργανωθεί από οποιοδήποτε από τα δύο αεροδρόμια." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Ηράκλειο – Χανιά;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensAirportPiraeus: {
    en: {
      meta: {
        title: "Athens Airport to Piraeus Port Transfer – Private Car",
        description:
          "Book a private transfer between Athens Airport and Piraeus Port, timed around your flight or cruise/ferry sailing. Request a quote for your journey.",
      },
      breadcrumbLabel: "Athens Airport to Piraeus Port",
      hero: {
        eyebrow: "Athens Airport → Piraeus Port",
        title: "Athens Airport to Piraeus Port Transfer",
        description: "A private transfer between Athens Airport and Piraeus Port, typically around 45 minutes to an hour depending on traffic.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling Between Athens Airport and Piraeus Port",
        paragraphs: [
          "Athens Airport and Piraeus Port are around 45 km apart, connected by the Attiki Odos motorway. The journey typically takes around 45 minutes to an hour depending on traffic, and is one of the most common transfers for travellers connecting a flight with a cruise or ferry departure, or arriving by sea and continuing onward by air.",
          "Because this route is often timed against a flight or sailing schedule, a private transfer removes the uncertainty of public transport connections, particularly when travelling with luggage or on a tight connection.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 45 minutes to an hour, depending on traffic and time of day." },
          { title: "Route", description: "Via the Attiki Odos motorway, connecting the airport directly to the port." },
          { title: "Flight or Sailing Details", description: "Share your flight number or ferry/cruise sailing time so pickup can be planned accordingly." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Cruise & Ferry Connections", description: "Travelling directly from a flight to a cruise or ferry departure, or the reverse." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Tight Connections", description: "A pre-arranged private transfer removes the uncertainty of public transport when timing matters." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore the Airport & Port",
        items: [
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "See our dedicated airport transfer information for Athens." },
          { label: "Piraeus Port", href: "/port/piraeus/", description: "See our dedicated port transfer information for Piraeus." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Athens Airport to Athens Riviera", href: "/route/athens-airport-to-athens-riviera/", description: "A direct transfer from the airport to the Athens Riviera coast." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer between Athens Airport and Piraeus Port take?", answer: "Typically around 45 minutes to an hour, depending on traffic and time of day." },
          { question: "Can this transfer be timed around a cruise or ferry departure?", answer: "Yes, share your sailing details when requesting a quote so pickup can be planned accordingly." },
          { question: "Can this transfer be timed around my flight arrival?", answer: "Yes, share your flight number and arrival time when requesting a quote." },
          { question: "Can you arrange a transfer for a group with luggage?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Athens Airport to Piraeus Transfer?",
        description: "Tell us your flight or sailing details and passenger numbers, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Λιμάνι Πειραιά – Ιδιωτικό Όχημα",
        description:
          "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Αθηνών και Λιμανιού Πειραιά, προσαρμοσμένη στην πτήση ή τον απόπλου σας. Ζητήστε προσφορά για το ταξίδι σας.",
      },
      breadcrumbLabel: "Αεροδρόμιο Αθηνών προς Πειραιά",
      hero: {
        eyebrow: "Αεροδρόμιο Αθηνών → Πειραιάς",
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Λιμάνι Πειραιά",
        description: "Μια ιδιωτική μεταφορά μεταξύ του Αεροδρομίου Αθηνών και του Λιμανιού Πειραιά, συνήθως περίπου 45 λεπτά έως μία ώρα ανάλογα με την κίνηση.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι Μεταξύ Αεροδρομίου Αθηνών και Λιμανιού Πειραιά",
        paragraphs: [
          "Το Αεροδρόμιο Αθηνών και το Λιμάνι Πειραιά απέχουν περίπου 45 χλμ, συνδεόμενα μέσω της Αττικής Οδού. Το ταξίδι διαρκεί συνήθως περίπου 45 λεπτά έως μία ώρα ανάλογα με την κίνηση, και είναι μία από τις πιο συνηθισμένες μεταφορές για ταξιδιώτες που συνδέουν μια πτήση με αναχώρηση κρουαζιέρας ή ferry, ή που φτάνουν από θάλασσα και συνεχίζουν αεροπορικώς.",
          "Επειδή αυτή η διαδρομή συχνά χρονομετρείται με βάση πρόγραμμα πτήσης ή απόπλου, μια ιδιωτική μεταφορά αφαιρεί την αβεβαιότητα των συνδέσεων μέσων μαζικής μεταφοράς, ιδιαίτερα όταν ταξιδεύετε με αποσκευές ή με στενό περιθώριο σύνδεσης.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 45 λεπτά έως μία ώρα, ανάλογα με την κίνηση και την ώρα της ημέρας." },
          { title: "Διαδρομή", description: "Μέσω της Αττικής Οδού, συνδέοντας το αεροδρόμιο απευθείας με το λιμάνι." },
          { title: "Στοιχεία Πτήσης ή Απόπλου", description: "Ενημερώστε μας για τον αριθμό πτήσης ή την ώρα απόπλου του ferry/κρουαζιέρας ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Συνδέσεις Κρουαζιέρας & Ferry", description: "Ταξίδι απευθείας από πτήση προς αναχώρηση κρουαζιέρας ή ferry, ή αντίστροφα." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Στενές Συνδέσεις", description: "Μια προκαθορισμένη ιδιωτική μεταφορά αφαιρεί την αβεβαιότητα των μέσων μαζικής μεταφοράς όταν ο χρόνος έχει σημασία." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε το Αεροδρόμιο & το Λιμάνι",
        items: [
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου για την Αθήνα." },
          { label: "Λιμάνι Πειραιά", href: "/el/limani/peiraias/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς λιμανιού για τον Πειραιά." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Αθηνών προς Παραλιακή", href: "/el/diadromi/aerodromio-athinas-paralia/", description: "Απευθείας μεταφορά από το αεροδρόμιο προς την ακτή της Παραλιακής Αθήνας." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά μεταξύ Αεροδρομίου Αθηνών και Λιμανιού Πειραιά;", answer: "Συνήθως περίπου 45 λεπτά έως μία ώρα, ανάλογα με την κίνηση και την ώρα της ημέρας." },
          { question: "Μπορεί αυτή η μεταφορά να προγραμματιστεί γύρω από αναχώρηση κρουαζιέρας ή ferry;", answer: "Ναι, ενημερώστε μας για τα στοιχεία απόπλου σας κατά την αίτηση προσφοράς." },
          { question: "Μπορεί αυτή η μεταφορά να προγραμματιστεί γύρω από την άφιξη της πτήσης μου;", answer: "Ναι, ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα με αποσκευές;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Πειραιάς;",
        description: "Πείτε μας τα στοιχεία πτήσης ή απόπλου και τον αριθμό επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensAirportRiviera: {
    en: {
      meta: {
        title: "Athens Airport to Athens Riviera Transfer – Private Car",
        description:
          "Book a private transfer from Athens Airport to the Athens Riviera, covering Glyfada, Voula and Vouliagmeni. Request a quote for your journey.",
      },
      breadcrumbLabel: "Athens Airport to Athens Riviera",
      hero: {
        eyebrow: "Athens Airport → Athens Riviera",
        title: "Athens Airport to Athens Riviera Transfer",
        description: "A private transfer from Athens Airport to the Riviera coast, with journey time depending on exactly where you're headed.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling From Athens Airport to the Athens Riviera",
        paragraphs: [
          "The Athens Riviera stretches along the coast southeast of Athens, from Glyfada through Voula and Vouliagmeni toward Varkiza and beyond. Glyfada is the closest part of the Riviera to the airport, while destinations further along the coast take longer to reach.",
          "Many visitors head straight from the airport to a hotel on the Riviera without travelling into central Athens first, making this a common direct transfer for beach-focused stays.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Varies by exact destination along the coast — Glyfada is closest to the airport, with Vouliagmeni and beyond taking longer." },
          { title: "Route", description: "Via the Attiki Odos motorway and the coastal road along the Athens Riviera." },
          { title: "Flight Details", description: "Share your flight number and arrival time so your pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Beach Holiday Arrivals", description: "Travel directly from the airport to a hotel on the Athens Riviera without stopping in central Athens." },
          { title: "Families & Groups", description: "A private vehicle keeps your group and luggage together for the coastal drive." },
          { title: "Flexible Drop-Off", description: "Specify your exact hotel or address along the coast when requesting a quote." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore the Athens Riviera",
        items: [
          { label: "Athens Riviera", href: "/destination/athens-riviera/", description: "See our destination overview of the Athens Riviera." },
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Athens to Cape Sounion", href: "/route/athens-to-cape-sounion/", description: "Continue along the coast to the Temple of Poseidon at Cape Sounion." },
          { label: "Athens Airport to Piraeus Port", href: "/route/athens-airport-to-piraeus-port/", description: "A direct transfer between the airport and Piraeus Port." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Athens Airport to the Riviera take?", answer: "It depends on your exact destination — Glyfada is closest to the airport, while Vouliagmeni and further points take longer." },
          { question: "Can I be dropped off at a specific hotel on the Riviera?", answer: "Yes, specify your exact hotel or address when requesting a quote." },
          { question: "Can I continue on to Cape Sounion from the Riviera?", answer: "Yes, mention your plans when requesting a quote and this can be arranged." },
          { question: "Can you arrange a transfer for a group arriving on the same flight?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Riviera Transfer?",
        description: "Tell us your flight details, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Παραλιακή – Ιδιωτικό Όχημα",
        description:
          "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Αθηνών προς την Παραλιακή Αθήνας, με Γλυφάδα, Βούλα και Βουλιαγμένη. Ζητήστε προσφορά για το ταξίδι σας.",
      },
      breadcrumbLabel: "Αεροδρόμιο Αθηνών προς Παραλιακή",
      hero: {
        eyebrow: "Αεροδρόμιο Αθηνών → Παραλιακή",
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Παραλιακή Αθήνας",
        description: "Μια ιδιωτική μεταφορά από το Αεροδρόμιο Αθηνών προς την παραλιακή ακτή, με χρόνο διαδρομής που εξαρτάται από τον ακριβή προορισμό.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Αθηνών προς την Παραλιακή",
        paragraphs: [
          "Η Παραλιακή Αθήνας εκτείνεται κατά μήκος της ακτής νοτιοανατολικά της Αθήνας, από τη Γλυφάδα μέσω Βούλας και Βουλιαγμένης προς τη Βάρκιζα και πέρα. Η Γλυφάδα είναι το πλησιέστερο τμήμα της παραλιακής στο αεροδρόμιο, ενώ προορισμοί πιο μακριά στην ακτή απαιτούν περισσότερο χρόνο.",
          "Πολλοί επισκέπτες κατευθύνονται απευθείας από το αεροδρόμιο προς ξενοδοχείο στην παραλιακή χωρίς να περάσουν πρώτα από το κέντρο της Αθήνας, καθιστώντας αυτή μια συνηθισμένη απευθείας μεταφορά για διαμονές με επίκεντρο την παραλία.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Διαφέρει ανάλογα με τον ακριβή προορισμό στην ακτή — η Γλυφάδα είναι πλησιέστερα στο αεροδρόμιο, ενώ η Βουλιαγμένη και πέρα απαιτούν περισσότερο χρόνο." },
          { title: "Διαδρομή", description: "Μέσω της Αττικής Οδού και του παράκτιου δρόμου κατά μήκος της Παραλιακής Αθήνας." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή σας." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Αφίξεις για Παραθαλάσσιες Διακοπές", description: "Ταξιδέψτε απευθείας από το αεροδρόμιο προς ξενοδοχείο στην Παραλιακή Αθήνας χωρίς στάση στο κέντρο." },
          { title: "Οικογένειες & Ομάδες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για την παράκτια διαδρομή." },
          { title: "Ευέλικτη Παράδοση", description: "Καθορίστε το ακριβές ξενοδοχείο ή τη διεύθυνσή σας στην ακτή κατά την αίτηση προσφοράς." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε την Παραλιακή Αθήνας",
        items: [
          { label: "Παραλιακή Αθήνας", href: "/el/proorismos/paralia-athinas/", description: "Δείτε την επισκόπηση προορισμού μας για την Παραλιακή Αθήνας." },
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αθήνα προς Σούνιο", href: "/el/diadromi/athina-sounio/", description: "Συνεχίστε κατά μήκος της ακτής προς τον Ναό του Ποσειδώνα στο Σούνιο." },
          { label: "Αεροδρόμιο Αθηνών προς Πειραιά", href: "/el/diadromi/aerodromio-athinas-peiraias/", description: "Απευθείας μεταφορά μεταξύ αεροδρομίου και Λιμανιού Πειραιά." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Αθηνών προς την παραλιακή;", answer: "Εξαρτάται από τον ακριβή προορισμό σας — η Γλυφάδα είναι πλησιέστερα στο αεροδρόμιο, ενώ η Βουλιαγμένη και πιο μακρινά σημεία απαιτούν περισσότερο χρόνο." },
          { question: "Μπορώ να παραδοθώ σε συγκεκριμένο ξενοδοχείο στην παραλιακή;", answer: "Ναι, καθορίστε το ακριβές ξενοδοχείο ή τη διεύθυνσή σας κατά την αίτηση προσφοράς." },
          { question: "Μπορώ να συνεχίσω προς το Σούνιο από την παραλιακή;", answer: "Ναι, αναφέρετε τα σχέδιά σας κατά την αίτηση προσφοράς και αυτό μπορεί να οργανωθεί." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που φτάνει με την ίδια πτήση;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Παραλιακή;",
        description: "Πείτε μας τα στοιχεία πτήσης, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensCapeSounion: {
    en: {
      meta: {
        title: "Athens to Cape Sounion Private Transfer – Day Trip or One-Way",
        description:
          "Book a private transfer or day trip from Athens to Cape Sounion and the Temple of Poseidon. Round-trip and one-way options. Get a quote.",
      },
      breadcrumbLabel: "Athens to Cape Sounion",
      hero: {
        eyebrow: "Athens → Cape Sounion",
        title: "Athens to Cape Sounion Private Transfer",
        description: "A private transfer or day trip from Athens to the Temple of Poseidon at Cape Sounion, typically around 1 to 1.5 hours each way.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Athens to Cape Sounion",
        paragraphs: [
          "Cape Sounion sits at the southern tip of the Attica peninsula, around 70 km from Athens, and is best known for the Temple of Poseidon overlooking the Aegean. The drive typically takes around 1 to 1.5 hours, either along the coastal road through the Athens Riviera or via the inland route, and is popular as a half-day or sunset excursion.",
          "This journey works both as a one-way private transfer — for example if you're continuing elsewhere along the coast — and as a round-trip day trip from Athens with time to explore the site before returning. Let us know which applies when requesting a quote.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 1 to 1.5 hours each way, depending on the route and traffic." },
          { title: "Route", description: "Via the coastal road through the Athens Riviera, or the inland route through Markopoulo." },
          { title: "One-Way or Round Trip", description: "This route can be booked as a one-way transfer or a round-trip day trip with waiting time." },
          { title: "Sunset Timing", description: "Many visitors time their visit around sunset — mention this when requesting a quote." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Half-Day & Sunset Trips", description: "Visit the Temple of Poseidon and return to Athens the same day." },
          { title: "One-Way Coastal Transfers", description: "Continue on to or from a hotel elsewhere along the Athens Riviera." },
          { title: "Small Groups & Families", description: "A private vehicle keeps your group together for the coastal drive." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Athens & the Riviera",
        items: [
          { label: "Athens City Transfers", href: "/athens/", description: "See our overview of private transportation around Athens." },
          { label: "Athens Riviera", href: "/destination/athens-riviera/", description: "See our destination overview of the coastal strip toward Cape Sounion." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Popular Routes from Athens",
        items: [
          { label: "Athens Airport to Athens Riviera", href: "/route/athens-airport-to-athens-riviera/", description: "A direct transfer from the airport to the Riviera coast." },
          { label: "Athens to Corinth", href: "/route/athens-to-corinth/", description: "A private transfer to Corinth and the Corinth Canal." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Athens to Cape Sounion take?", answer: "Typically around 1 to 1.5 hours each way, depending on the route and traffic." },
          { question: "Can I book this as a day trip with time to explore?", answer: "Yes, mention that you'd like a round trip with waiting time when requesting a quote." },
          { question: "Can I book this as a one-way transfer instead?", answer: "Yes, this route can be booked one-way, for example if you're continuing to a hotel elsewhere on the coast." },
          { question: "Can I time my visit around sunset?", answer: "Yes, many visitors do — mention this when requesting a quote so pickup can be planned accordingly." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Athens to Cape Sounion Transfer?",
        description: "Tell us whether you'd like a one-way transfer or a round trip, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτική Μεταφορά Αθήνα – Σούνιο – Ημερήσια Εκδρομή ή Απλή Μετάβαση",
        description:
          "Κλείστε ιδιωτική μεταφορά ή ημερήσια εκδρομή από την Αθήνα προς το Σούνιο και τον Ναό του Ποσειδώνα. Επιλογές μετ' επιστροφής και απλής μετάβασης.",
      },
      breadcrumbLabel: "Αθήνα προς Σούνιο",
      hero: {
        eyebrow: "Αθήνα → Σούνιο",
        title: "Ιδιωτική Μεταφορά Αθήνα – Σούνιο",
        description: "Μια ιδιωτική μεταφορά ή εκδρομή από την Αθήνα προς τον Ναό του Ποσειδώνα στο Σούνιο, συνήθως περίπου 1 έως 1,5 ώρα κάθε φορά.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από την Αθήνα προς το Σούνιο",
        paragraphs: [
          "Το Σούνιο βρίσκεται στο νότιο άκρο της χερσονήσου της Αττικής, περίπου 70 χλμ από την Αθήνα, και είναι γνωστό για τον Ναό του Ποσειδώνα με θέα στο Αιγαίο. Η διαδρομή διαρκεί συνήθως περίπου 1 έως 1,5 ώρα, είτε μέσω του παράκτιου δρόμου κατά μήκος της Παραλιακής Αθήνας είτε μέσω της ενδοχώριας διαδρομής, και είναι δημοφιλής ως μισής ημέρας ή ηλιοβασιλέματος εκδρομή.",
          "Αυτό το ταξίδι λειτουργεί τόσο ως ιδιωτική μεταφορά απλής μετάβασης — για παράδειγμα αν συνεχίζετε αλλού κατά μήκος της ακτής — όσο και ως ημερήσια εκδρομή μετ' επιστροφής από την Αθήνα με χρόνο για να εξερευνήσετε τον χώρο πριν επιστρέψετε. Ενημερώστε μας ποιο ισχύει κατά την αίτηση προσφοράς.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 1 έως 1,5 ώρα κάθε φορά, ανάλογα με τη διαδρομή και την κίνηση." },
          { title: "Διαδρομή", description: "Μέσω του παράκτιου δρόμου κατά μήκος της Παραλιακής Αθήνας, ή της ενδοχώριας διαδρομής μέσω Μαρκόπουλου." },
          { title: "Απλή Μετάβαση ή Μετ' Επιστροφής", description: "Αυτή η διαδρομή μπορεί να κλειστεί ως απλή μεταφορά ή ως ημερήσια εκδρομή μετ' επιστροφής με χρόνο αναμονής." },
          { title: "Χρονισμός Ηλιοβασιλέματος", description: "Πολλοί επισκέπτες χρονομετρούν την επίσκεψή τους γύρω από το ηλιοβασίλεμα — αναφέρετέ το κατά την αίτηση προσφοράς." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Εκδρομές Μισής Ημέρας & Ηλιοβασιλέματος", description: "Επισκεφθείτε τον Ναό του Ποσειδώνα και επιστρέψτε στην Αθήνα την ίδια μέρα." },
          { title: "Παράκτιες Μεταφορές Απλής Μετάβασης", description: "Συνεχίστε προς ή από ξενοδοχείο αλλού κατά μήκος της Παραλιακής Αθήνας." },
          { title: "Μικρές Ομάδες & Οικογένειες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα σας μαζί για την παράκτια διαδρομή." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε την Αθήνα & την Παραλιακή",
        items: [
          { label: "Μεταφορές στην Αθήνα", href: "/el/athina/", description: "Δείτε τη γενική μας επισκόπηση ιδιωτικών μεταφορών στην Αθήνα." },
          { label: "Παραλιακή Αθήνας", href: "/el/proorismos/paralia-athinas/", description: "Δείτε την επισκόπηση προορισμού μας για την παράκτια ζώνη προς το Σούνιο." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Δημοφιλείς Διαδρομές από την Αθήνα",
        items: [
          { label: "Αεροδρόμιο Αθηνών προς Παραλιακή", href: "/el/diadromi/aerodromio-athinas-paralia/", description: "Απευθείας μεταφορά από το αεροδρόμιο προς την ακτή της Παραλιακής." },
          { label: "Αθήνα προς Κόρινθο", href: "/el/diadromi/athina-korinthos/", description: "Ιδιωτική μεταφορά προς την Κόρινθο και τη Διώρυγα της Κορίνθου." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από την Αθήνα στο Σούνιο;", answer: "Συνήθως περίπου 1 έως 1,5 ώρα κάθε φορά, ανάλογα με τη διαδρομή και την κίνηση." },
          { question: "Μπορώ να κλείσω αυτή τη διαδρομή ως ημερήσια εκδρομή με χρόνο εξερεύνησης;", answer: "Ναι, αναφέρετε ότι θέλετε μετ' επιστροφής με χρόνο αναμονής κατά την αίτηση προσφοράς." },
          { question: "Μπορώ να κλείσω αυτή τη διαδρομή ως απλή μετάβαση;", answer: "Ναι, αυτή η διαδρομή μπορεί να κλειστεί ως απλή μετάβαση, για παράδειγμα αν συνεχίζετε προς ξενοδοχείο αλλού στην ακτή." },
          { question: "Μπορώ να χρονίσω την επίσκεψή μου γύρω από το ηλιοβασίλεμα;", answer: "Ναι, πολλοί επισκέπτες το κάνουν — αναφέρετέ το κατά την αίτηση προσφοράς ώστε να προγραμματιστεί η παραλαβή." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αθήνα – Σούνιο;",
        description: "Πείτε μας αν θέλετε απλή μετάβαση ή μετ' επιστροφής, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensCorinth: {
    en: {
      meta: {
        title: "Athens to Corinth Private Transfer – Book Your Ride",
        description:
          "Book a private transfer from Athens to Corinth and the Corinth Canal, a common stop on the way to the Peloponnese. Get a quote for your journey.",
      },
      breadcrumbLabel: "Athens to Corinth",
      hero: {
        eyebrow: "Athens → Corinth",
        title: "Athens to Corinth Private Transfer",
        description: "A private transfer from Athens to Corinth and the Corinth Canal, typically around 1 to 1.5 hours.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Athens to Corinth",
        paragraphs: [
          "Corinth is around 80 km west of Athens, connected by the Athens–Corinth motorway, with the journey typically taking around 1 to 1.5 hours. The route crosses the Corinth Canal at the Isthmus, a popular stop in its own right, and Corinth itself serves as a common gateway to the wider Peloponnese.",
          "This route is often used either as a standalone transfer to Corinth or as the first leg of a longer journey toward destinations such as Nafplio, Mycenae or Epidaurus.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 1 to 1.5 hours, depending on traffic and road conditions." },
          { title: "Route", description: "Via the Athens–Corinth motorway, crossing the Corinth Canal at the Isthmus." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
          { title: "Onward Travel", description: "If you're continuing to the Peloponnese, mention your full itinerary when requesting a quote." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Corinth Canal Visits", description: "See the Corinth Canal and the town of Corinth as a half-day trip from Athens." },
          { title: "Starting a Peloponnese Trip", description: "Use this route as the first leg of a longer journey into the Peloponnese." },
          { title: "Families & Small Groups", description: "A private vehicle keeps your group together for the whole journey." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Athens & the Peloponnese",
        items: [
          { label: "Athens City Transfers", href: "/athens/", description: "See our overview of private transportation around Athens." },
          { label: "Peloponnese Region", href: "/region/peloponnese/", description: "See our regional overview of transportation across the Peloponnese." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Popular Routes from Athens",
        items: [
          { label: "Athens to Nafplio", href: "/route/athens-to-nafplio/", description: "A private transfer to the waterfront town of Nafplio, continuing past Corinth." },
          { label: "Athens to Cape Sounion", href: "/route/athens-to-cape-sounion/", description: "A private day trip or transfer to the Temple of Poseidon." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Athens to Corinth take?", answer: "Typically around 1 to 1.5 hours, depending on traffic and road conditions." },
          { question: "Does the route pass the Corinth Canal?", answer: "Yes, the route crosses the Corinth Canal at the Isthmus." },
          { question: "Can I continue on to the Peloponnese from Corinth?", answer: "Yes, mention your full itinerary when requesting a quote, for example if you're continuing to Nafplio." },
          { question: "Can I be picked up from Athens Airport instead of central Athens?", answer: "Yes, mention your pickup location when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Athens to Corinth Transfer?",
        description: "Tell us your pickup time, onward plans and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτική Μεταφορά Αθήνα – Κόρινθος – Κλείστε το Ταξίδι σας",
        description:
          "Κλείστε ιδιωτική μεταφορά από την Αθήνα προς την Κόρινθο και τη Διώρυγα της Κορίνθου, συνηθισμένη στάση προς την Πελοπόννησο.",
      },
      breadcrumbLabel: "Αθήνα προς Κόρινθο",
      hero: {
        eyebrow: "Αθήνα → Κόρινθος",
        title: "Ιδιωτική Μεταφορά Αθήνα – Κόρινθος",
        description: "Μια ιδιωτική μεταφορά από την Αθήνα προς την Κόρινθο και τη Διώρυγα της Κορίνθου, συνήθως περίπου 1 έως 1,5 ώρα.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από την Αθήνα προς την Κόρινθο",
        paragraphs: [
          "Η Κόρινθος βρίσκεται περίπου 80 χλμ δυτικά της Αθήνας, συνδεόμενη μέσω του αυτοκινητόδρομου Αθηνών–Κορίνθου, με το ταξίδι να διαρκεί συνήθως περίπου 1 έως 1,5 ώρα. Η διαδρομή διασχίζει τη Διώρυγα της Κορίνθου στον Ισθμό, μια δημοφιλή στάση από μόνη της, και η ίδια η Κόρινθος αποτελεί συνηθισμένη πύλη προς την ευρύτερη Πελοπόννησο.",
          "Αυτή η διαδρομή χρησιμοποιείται συχνά είτε ως αυτόνομη μεταφορά προς την Κόρινθο είτε ως το πρώτο σκέλος ενός μεγαλύτερου ταξιδιού προς προορισμούς όπως το Ναύπλιο, οι Μυκήνες ή η Επίδαυρος.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 1 έως 1,5 ώρα, ανάλογα με την κίνηση και τις συνθήκες του δρόμου." },
          { title: "Διαδρομή", description: "Μέσω του αυτοκινητόδρομου Αθηνών–Κορίνθου, διασχίζοντας τη Διώρυγα της Κορίνθου στον Ισθμό." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
          { title: "Συνέχεια Ταξιδιού", description: "Αν συνεχίζετε προς την Πελοπόννησο, αναφέρετε το πλήρες πρόγραμμά σας κατά την αίτηση προσφοράς." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Επισκέψεις στη Διώρυγα της Κορίνθου", description: "Δείτε τη Διώρυγα της Κορίνθου και την πόλη της Κορίνθου ως εκδρομή μισής ημέρας από την Αθήνα." },
          { title: "Έναρξη Ταξιδιού στην Πελοπόννησο", description: "Χρησιμοποιήστε αυτή τη διαδρομή ως πρώτο σκέλος ενός μεγαλύτερου ταξιδιού στην Πελοπόννησο." },
          { title: "Οικογένειες & Μικρές Ομάδες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα σας μαζί για ολόκληρο το ταξίδι." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε την Αθήνα & την Πελοπόννησο",
        items: [
          { label: "Μεταφορές στην Αθήνα", href: "/el/athina/", description: "Δείτε τη γενική μας επισκόπηση ιδιωτικών μεταφορών στην Αθήνα." },
          { label: "Περιοχή Πελοποννήσου", href: "/el/periochi/peloponnisos/", description: "Δείτε τη γενική μας επισκόπηση μεταφορών σε όλη την Πελοπόννησο." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Δημοφιλείς Διαδρομές από την Αθήνα",
        items: [
          { label: "Αθήνα προς Ναύπλιο", href: "/el/diadromi/athina-nafplio/", description: "Ιδιωτική μεταφορά προς την παραθαλάσσια πόλη του Ναυπλίου, περνώντας από την Κόρινθο." },
          { label: "Αθήνα προς Σούνιο", href: "/el/diadromi/athina-sounio/", description: "Ιδιωτική ημερήσια εκδρομή ή μεταφορά προς τον Ναό του Ποσειδώνα." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από την Αθήνα στην Κόρινθο;", answer: "Συνήθως περίπου 1 έως 1,5 ώρα, ανάλογα με την κίνηση και τις συνθήκες του δρόμου." },
          { question: "Περνάει η διαδρομή από τη Διώρυγα της Κορίνθου;", answer: "Ναι, η διαδρομή διασχίζει τη Διώρυγα της Κορίνθου στον Ισθμό." },
          { question: "Μπορώ να συνεχίσω προς την Πελοπόννησο από την Κόρινθο;", answer: "Ναι, αναφέρετε το πλήρες πρόγραμμά σας κατά την αίτηση προσφοράς, για παράδειγμα αν συνεχίζετε προς το Ναύπλιο." },
          { question: "Μπορώ να παραληφθώ από το Αεροδρόμιο Αθηνών αντί για το κέντρο της Αθήνας;", answer: "Ναι, αναφέρετε το σημείο παραλαβής σας κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αθήνα – Κόρινθος;",
        description: "Πείτε μας την ώρα παραλαβής, τα σχέδια συνέχειας και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensAirportGlyfada: {
    en: {
      meta: {
        title: "Athens Airport to Glyfada Transfer – Private Car",
        description: "Book a private transfer between Athens Airport and Glyfada, the closest Athens Riviera town to the airport. Get a quote for your journey.",
      },
      breadcrumbLabel: "Athens Airport to Glyfada",
      hero: {
        eyebrow: "Athens Airport → Glyfada",
        title: "Athens Airport to Glyfada Transfer",
        description: "A private transfer between Athens Airport and Glyfada, typically the shortest of the Athens Riviera routes at around 20 to 30 minutes.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling Between Athens Airport and Glyfada",
        paragraphs: [
          "Glyfada is around 15 to 20 km from Athens Airport, making it the closest part of the Athens Riviera to arrivals — the journey typically takes around 20 to 30 minutes via the Attiki Odos motorway, shorter than continuing into central Athens.",
          "Because Glyfada combines beach-club and marina tourism with a genuine business and shopping district around Metaxa Street, this route serves both leisure arrivals heading straight to the coast and business travellers based near the airport corridor.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 20 to 30 minutes, the shortest of the Riviera airport routes." },
          { title: "Route", description: "Via the Attiki Odos motorway directly to the coast." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Beach & Marina Stays", description: "Travel directly from the airport to a hotel near Glyfada's marina and beach clubs." },
          { title: "Business Travellers", description: "Glyfada's business district is a common base for airport-adjacent meetings." },
          { title: "Families & Groups", description: "A private vehicle keeps your group and luggage together for the short coastal drive." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Glyfada & the Riviera",
        items: [
          { label: "Glyfada", href: "/destination/glyfada/", description: "See our destination overview of Glyfada." },
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Athens Airport to Vouliagmeni", href: "/route/athens-airport-to-vouliagmeni/", description: "Continue further along the coast to Vouliagmeni." },
          { label: "Athens Airport to Athens Riviera", href: "/route/athens-airport-to-athens-riviera/", description: "See our wider Athens Riviera route overview." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Athens Airport to Glyfada take?", answer: "Typically around 20 to 30 minutes, the shortest of the Athens Riviera airport routes." },
          { question: "Is Glyfada closer to the airport than central Athens?", answer: "Glyfada and central Athens are broadly comparable in distance from the airport, but Glyfada avoids city-centre traffic." },
          { question: "Can I be dropped off at a specific hotel or address?", answer: "Yes, specify your exact hotel or address when requesting a quote." },
          { question: "Can you arrange a transfer for a group arriving on the same flight?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Glyfada Transfer?",
        description: "Tell us your flight details, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Γλυφάδα – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Αθηνών και Γλυφάδας, του πλησιέστερου σημείου της Παραλιακής στο αεροδρόμιο.",
      },
      breadcrumbLabel: "Αεροδρόμιο Αθηνών προς Γλυφάδα",
      hero: {
        eyebrow: "Αεροδρόμιο Αθηνών → Γλυφάδα",
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Γλυφάδα",
        description: "Μια ιδιωτική μεταφορά μεταξύ του Αεροδρομίου Αθηνών και της Γλυφάδας, συνήθως η συντομότερη από τις διαδρομές της Παραλιακής, περίπου 20 έως 30 λεπτά.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι Μεταξύ Αεροδρομίου Αθηνών και Γλυφάδας",
        paragraphs: [
          "Η Γλυφάδα απέχει περίπου 15 έως 20 χλμ από το Αεροδρόμιο Αθηνών, καθιστώντας την το πλησιέστερο σημείο της Παραλιακής Αθήνας στις αφίξεις — το ταξίδι διαρκεί συνήθως περίπου 20 έως 30 λεπτά μέσω της Αττικής Οδού, συντομότερο από τη συνέχεια προς το κέντρο της Αθήνας.",
          "Επειδή η Γλυφάδα συνδυάζει τουρισμό beach club και μαρίνας με μια πραγματική επαγγελματική και εμπορική περιοχή γύρω από την οδό Μεταξά, αυτή η διαδρομή εξυπηρετεί τόσο αφίξεις αναψυχής που κατευθύνονται απευθείας στην ακτή όσο και επαγγελματίες ταξιδιώτες με βάση κοντά στο αεροδρόμιο.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 20 έως 30 λεπτά, η συντομότερη από τις διαδρομές αεροδρομίου προς την Παραλιακή." },
          { title: "Διαδρομή", description: "Μέσω της Αττικής Οδού απευθείας προς την ακτή." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Διαμονή σε Παραλία & Μαρίνα", description: "Ταξιδέψτε απευθείας από το αεροδρόμιο προς ξενοδοχείο κοντά στη μαρίνα και τα beach clubs της Γλυφάδας." },
          { title: "Επαγγελματίες Ταξιδιώτες", description: "Η επιχειρηματική περιοχή της Γλυφάδας είναι συνηθισμένη βάση για συναντήσεις κοντά στο αεροδρόμιο." },
          { title: "Οικογένειες & Ομάδες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για τη σύντομη παράκτια διαδρομή." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Γλυφάδα & την Παραλιακή",
        items: [
          { label: "Γλυφάδα", href: "/el/proorismos/glyfada/", description: "Δείτε την επισκόπηση προορισμού μας για τη Γλυφάδα." },
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Αθηνών προς Βουλιαγμένη", href: "/el/diadromi/aerodromio-athinas-vouliagmeni/", description: "Συνεχίστε περαιτέρω κατά μήκος της ακτής προς τη Βουλιαγμένη." },
          { label: "Αεροδρόμιο Αθηνών προς Παραλιακή", href: "/el/diadromi/aerodromio-athinas-paralia/", description: "Δείτε τη γενική μας επισκόπηση διαδρομής προς την Παραλιακή Αθήνας." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Αθηνών στη Γλυφάδα;", answer: "Συνήθως περίπου 20 έως 30 λεπτά, η συντομότερη από τις διαδρομές αεροδρομίου προς την Παραλιακή." },
          { question: "Είναι η Γλυφάδα πιο κοντά στο αεροδρόμιο από το κέντρο της Αθήνας;", answer: "Η Γλυφάδα και το κέντρο της Αθήνας απέχουν γενικά παρόμοια απόσταση από το αεροδρόμιο, αλλά η Γλυφάδα αποφεύγει την κίνηση του κέντρου." },
          { question: "Μπορώ να παραδοθώ σε συγκεκριμένο ξενοδοχείο ή διεύθυνση;", answer: "Ναι, καθορίστε το ακριβές ξενοδοχείο ή τη διεύθυνσή σας κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που φτάνει με την ίδια πτήση;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Γλυφάδα;",
        description: "Πείτε μας τα στοιχεία πτήσης, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensAirportVouliagmeni: {
    en: {
      meta: {
        title: "Athens Airport to Vouliagmeni Transfer – Private Car",
        description: "Book a private transfer between Athens Airport and Vouliagmeni, known for its thermal lake and upscale resorts. Get a quote for your journey.",
      },
      breadcrumbLabel: "Athens Airport to Vouliagmeni",
      hero: {
        eyebrow: "Athens Airport → Vouliagmeni",
        title: "Athens Airport to Vouliagmeni Transfer",
        description: "A private transfer between Athens Airport and Vouliagmeni, typically around 30 to 40 minutes.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling Between Athens Airport and Vouliagmeni",
        paragraphs: [
          "Vouliagmeni is around 25 to 30 km from Athens Airport, slightly further than Glyfada along the same coastal corridor, with the journey typically taking around 30 to 40 minutes via the Attiki Odos motorway and the coastal road.",
          "Vouliagmeni's resorts and Lake Vouliagmeni draw a mix of leisure travellers and guests staying at the peninsula's upscale hotels, many of whom prefer a pre-arranged private transfer directly from the airport rather than connecting through central Athens.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 30 to 40 minutes, slightly longer than the Glyfada route." },
          { title: "Route", description: "Via the Attiki Odos motorway and the coastal road along the Riviera." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Resort Arrivals", description: "Travel directly from the airport to a resort near Lake Vouliagmeni or the peninsula's beach clubs." },
          { title: "Couples & Small Groups", description: "A private vehicle for a relaxed, direct journey to the coast." },
          { title: "Families with Luggage", description: "Keep your group and luggage together for the coastal drive." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Vouliagmeni & the Riviera",
        items: [
          { label: "Vouliagmeni", href: "/destination/vouliagmeni/", description: "See our destination overview of Vouliagmeni." },
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Athens Airport to Glyfada", href: "/route/athens-airport-to-glyfada/", description: "The nearer Riviera town, closer to the airport." },
          { label: "Athens to Cape Sounion", href: "/route/athens-to-cape-sounion/", description: "Continue further along the coast to Cape Sounion." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Athens Airport to Vouliagmeni take?", answer: "Typically around 30 to 40 minutes, depending on traffic." },
          { question: "Is Vouliagmeni further from the airport than Glyfada?", answer: "Yes, Vouliagmeni is a little further along the coast than Glyfada." },
          { question: "Can I be dropped off at a specific resort or address?", answer: "Yes, specify your exact hotel or address when requesting a quote." },
          { question: "Can you arrange a transfer for a group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Vouliagmeni Transfer?",
        description: "Tell us your flight details, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Βουλιαγμένη – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Αθηνών και Βουλιαγμένης, γνωστής για τη θερμή λίμνη και τα πολυτελή θέρετρά της.",
      },
      breadcrumbLabel: "Αεροδρόμιο Αθηνών προς Βουλιαγμένη",
      hero: {
        eyebrow: "Αεροδρόμιο Αθηνών → Βουλιαγμένη",
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Βουλιαγμένη",
        description: "Μια ιδιωτική μεταφορά μεταξύ του Αεροδρομίου Αθηνών και της Βουλιαγμένης, συνήθως περίπου 30 έως 40 λεπτά.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι Μεταξύ Αεροδρομίου Αθηνών και Βουλιαγμένης",
        paragraphs: [
          "Η Βουλιαγμένη απέχει περίπου 25 έως 30 χλμ από το Αεροδρόμιο Αθηνών, λίγο πιο μακριά από τη Γλυφάδα στον ίδιο παράκτιο άξονα, με το ταξίδι να διαρκεί συνήθως περίπου 30 έως 40 λεπτά μέσω της Αττικής Οδού και του παράκτιου δρόμου.",
          "Τα θέρετρα της Βουλιαγμένης και η Λίμνη Βουλιαγμένης προσελκύουν ένα μείγμα ταξιδιωτών αναψυχής και επισκεπτών που διαμένουν στα πολυτελή ξενοδοχεία της χερσονήσου, πολλοί από τους οποίους προτιμούν μια προκαθορισμένη ιδιωτική μεταφορά απευθείας από το αεροδρόμιο αντί να περάσουν από το κέντρο της Αθήνας.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 30 έως 40 λεπτά, λίγο περισσότερο από τη διαδρομή προς τη Γλυφάδα." },
          { title: "Διαδρομή", description: "Μέσω της Αττικής Οδού και του παράκτιου δρόμου κατά μήκος της Παραλιακής." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Αφίξεις σε Θέρετρα", description: "Ταξιδέψτε απευθείας από το αεροδρόμιο προς θέρετρο κοντά στη Λίμνη Βουλιαγμένης ή τα beach clubs της χερσονήσου." },
          { title: "Ζευγάρια & Μικρές Ομάδες", description: "Ένα ιδιωτικό όχημα για ένα χαλαρό, απευθείας ταξίδι προς την ακτή." },
          { title: "Οικογένειες με Αποσκευές", description: "Κρατήστε την ομάδα και τις αποσκευές σας μαζί για την παράκτια διαδρομή." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Βουλιαγμένη & την Παραλιακή",
        items: [
          { label: "Βουλιαγμένη", href: "/el/proorismos/vouliagmeni/", description: "Δείτε την επισκόπηση προορισμού μας για τη Βουλιαγμένη." },
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Αθηνών προς Γλυφάδα", href: "/el/diadromi/aerodromio-athinas-glyfada/", description: "Η πλησιέστερη πόλη της Παραλιακής στο αεροδρόμιο." },
          { label: "Αθήνα προς Σούνιο", href: "/el/diadromi/athina-sounio/", description: "Συνεχίστε περαιτέρω κατά μήκος της ακτής προς το Σούνιο." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Αθηνών στη Βουλιαγμένη;", answer: "Συνήθως περίπου 30 έως 40 λεπτά, ανάλογα με την κίνηση." },
          { question: "Απέχει η Βουλιαγμένη περισσότερο από το αεροδρόμιο σε σχέση με τη Γλυφάδα;", answer: "Ναι, η Βουλιαγμένη βρίσκεται λίγο πιο μακριά στην ακτή από τη Γλυφάδα." },
          { question: "Μπορώ να παραδοθώ σε συγκεκριμένο θέρετρο ή διεύθυνση;", answer: "Ναι, καθορίστε το ακριβές ξενοδοχείο ή τη διεύθυνσή σας κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Βουλιαγμένη;",
        description: "Πείτε μας τα στοιχεία πτήσης, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensAirportNafplio: {
    en: {
      meta: {
        title: "Athens Airport to Nafplio Transfer – Private Car",
        description: "Book a private transfer between Athens Airport and Nafplio, bypassing central Athens via the Attiki Odos and Corinth motorway.",
      },
      breadcrumbLabel: "Athens Airport to Nafplio",
      hero: {
        eyebrow: "Athens Airport → Nafplio",
        title: "Athens Airport to Nafplio Transfer",
        description: "A direct private transfer from Athens Airport to Nafplio, typically around 1.5 to 2 hours, bypassing central Athens.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Athens Airport to Nafplio",
        paragraphs: [
          "Nafplio is around 145 km from Athens Airport, and the journey typically takes around 1.5 to 2 hours via the Attiki Odos motorway and the Athens–Corinth motorway, crossing the Corinth Canal. Because the airport sits east of Athens, this route bypasses the city centre entirely rather than adding time driving through it.",
          "This is a common direct transfer for visitors who want to reach the Peloponnese without an overnight stop in Athens, especially when arriving on a morning flight with a full day still ahead.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 1.5 to 2 hours, depending on traffic." },
          { title: "Route", description: "Via the Attiki Odos and Athens–Corinth motorways, bypassing central Athens." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Direct Peloponnese Arrivals", description: "Skip a stop in Athens and head straight to Nafplio after landing." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Multi-Day Peloponnese Trips", description: "Use this route to begin a longer stay exploring the Peloponnese." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Nafplio",
        items: [
          { label: "Nafplio", href: "/destination/nafplio/", description: "See our destination overview of Nafplio." },
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Athens to Nafplio", href: "/route/athens-to-nafplio/", description: "The equivalent route starting from central Athens." },
          { label: "Athens Airport to Corinth", href: "/route/athens-airport-to-corinth/", description: "A shorter transfer to Corinth, on the way to Nafplio." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Athens Airport to Nafplio take?", answer: "Typically around 1.5 to 2 hours, depending on traffic." },
          { question: "Does this route pass through central Athens?", answer: "No, it bypasses central Athens via the Attiki Odos and Athens–Corinth motorways." },
          { question: "Can I stop in Corinth on the way?", answer: "Yes, mention this when requesting a quote." },
          { question: "Can you arrange a transfer for a group arriving on the same flight?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Nafplio Transfer?",
        description: "Tell us your flight details, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Ναύπλιο – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Αθηνών και Ναυπλίου, παρακάμπτοντας το κέντρο της Αθήνας μέσω Αττικής Οδού και Κορίνθου.",
      },
      breadcrumbLabel: "Αεροδρόμιο Αθηνών προς Ναύπλιο",
      hero: {
        eyebrow: "Αεροδρόμιο Αθηνών → Ναύπλιο",
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Ναύπλιο",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Αθηνών προς το Ναύπλιο, συνήθως περίπου 1,5 έως 2 ώρες, παρακάμπτοντας το κέντρο της Αθήνας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Αθηνών προς το Ναύπλιο",
        paragraphs: [
          "Το Ναύπλιο απέχει περίπου 145 χλμ από το Αεροδρόμιο Αθηνών, και το ταξίδι διαρκεί συνήθως περίπου 1,5 έως 2 ώρες μέσω της Αττικής Οδού και του αυτοκινητόδρομου Αθηνών–Κορίνθου, διασχίζοντας τη Διώρυγα της Κορίνθου. Επειδή το αεροδρόμιο βρίσκεται ανατολικά της Αθήνας, αυτή η διαδρομή παρακάμπτει εντελώς το κέντρο της πόλης αντί να προσθέτει χρόνο διέλευσης από αυτό.",
          "Αυτή είναι μια συνηθισμένη απευθείας μεταφορά για επισκέπτες που θέλουν να φτάσουν στην Πελοπόννησο χωρίς διανυκτέρευση στην Αθήνα, ειδικά όταν φτάνουν με πρωινή πτήση με ολόκληρη τη μέρα μπροστά τους.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 1,5 έως 2 ώρες, ανάλογα με την κίνηση." },
          { title: "Διαδρομή", description: "Μέσω της Αττικής Οδού και του αυτοκινητόδρομου Αθηνών–Κορίνθου, παρακάμπτοντας το κέντρο της Αθήνας." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Απευθείας Αφίξεις στην Πελοπόννησο", description: "Παραλείψτε τη στάση στην Αθήνα και κατευθυνθείτε απευθείας στο Ναύπλιο μετά την προσγείωση." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Πολυήμερα Ταξίδια στην Πελοπόννησο", description: "Χρησιμοποιήστε αυτή τη διαδρομή για να ξεκινήσετε μια μεγαλύτερη διαμονή στην Πελοπόννησο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε το Ναύπλιο",
        items: [
          { label: "Ναύπλιο", href: "/el/proorismos/nafplio/", description: "Δείτε την επισκόπηση προορισμού μας για το Ναύπλιο." },
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αθήνα προς Ναύπλιο", href: "/el/diadromi/athina-nafplio/", description: "Η αντίστοιχη διαδρομή με αφετηρία το κέντρο της Αθήνας." },
          { label: "Αεροδρόμιο Αθηνών προς Κόρινθο", href: "/el/diadromi/aerodromio-athinas-korinthos/", description: "Μια συντομότερη μεταφορά προς την Κόρινθο, στον δρόμο προς το Ναύπλιο." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Αθηνών στο Ναύπλιο;", answer: "Συνήθως περίπου 1,5 έως 2 ώρες, ανάλογα με την κίνηση." },
          { question: "Περνάει αυτή η διαδρομή από το κέντρο της Αθήνας;", answer: "Όχι, παρακάμπτει το κέντρο της Αθήνας μέσω της Αττικής Οδού και του αυτοκινητόδρομου Αθηνών–Κορίνθου." },
          { question: "Μπορώ να σταματήσω στην Κόρινθο στη διαδρομή;", answer: "Ναι, αναφέρετέ το κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που φτάνει με την ίδια πτήση;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Ναύπλιο;",
        description: "Πείτε μας τα στοιχεία πτήσης, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensAirportCorinth: {
    en: {
      meta: {
        title: "Athens Airport to Corinth Transfer – Private Car",
        description: "Book a private transfer between Athens Airport and Corinth, a common gateway to the Peloponnese. Get a quote for your journey.",
      },
      breadcrumbLabel: "Athens Airport to Corinth",
      hero: {
        eyebrow: "Athens Airport → Corinth",
        title: "Athens Airport to Corinth Transfer",
        description: "A direct private transfer from Athens Airport to Corinth, typically around 1 to 1.5 hours, bypassing central Athens.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Athens Airport to Corinth",
        paragraphs: [
          "Corinth is around 90 km from Athens Airport, connected via the Attiki Odos and Athens–Corinth motorways, with the journey typically taking around 1 to 1.5 hours. Like the Nafplio route, this bypasses central Athens rather than passing through it.",
          "This route works both as a standalone transfer to Corinth and the Corinth Canal, and as the first leg of a longer journey into the Peloponnese for arrivals who don't want to stop in Athens first.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 1 to 1.5 hours, depending on traffic." },
          { title: "Route", description: "Via the Attiki Odos and Athens–Corinth motorways, crossing the Corinth Canal at the Isthmus." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Onward Travel", description: "If you're continuing into the Peloponnese, mention your full itinerary when requesting a quote." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Direct Peloponnese Arrivals", description: "Skip a stop in Athens and head straight to Corinth after landing." },
          { title: "Corinth Canal Visits", description: "See the Corinth Canal without the added time of driving through central Athens first." },
          { title: "Families & Small Groups", description: "A private vehicle keeps your group together for the whole journey." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore the Airport & Peloponnese",
        items: [
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "See our dedicated airport transfer information." },
          { label: "Peloponnese Region", href: "/region/peloponnese/", description: "See our regional overview of transportation across the Peloponnese." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Athens to Corinth", href: "/route/athens-to-corinth/", description: "The equivalent route starting from central Athens." },
          { label: "Athens Airport to Nafplio", href: "/route/athens-airport-to-nafplio/", description: "Continue past Corinth to Nafplio." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Athens Airport to Corinth take?", answer: "Typically around 1 to 1.5 hours, depending on traffic." },
          { question: "Does the route pass the Corinth Canal?", answer: "Yes, the route crosses the Corinth Canal at the Isthmus." },
          { question: "Can I continue on to the wider Peloponnese from Corinth?", answer: "Yes, mention your full itinerary when requesting a quote." },
          { question: "Can you arrange a transfer for a group with luggage?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Corinth Transfer?",
        description: "Tell us your flight details, onward plans and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Κόρινθος – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Αθηνών και Κορίνθου, συνηθισμένης πύλης προς την Πελοπόννησο.",
      },
      breadcrumbLabel: "Αεροδρόμιο Αθηνών προς Κόρινθο",
      hero: {
        eyebrow: "Αεροδρόμιο Αθηνών → Κόρινθος",
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Κόρινθος",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Αθηνών προς την Κόρινθο, συνήθως περίπου 1 έως 1,5 ώρα, παρακάμπτοντας το κέντρο της Αθήνας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Αθηνών προς την Κόρινθο",
        paragraphs: [
          "Η Κόρινθος απέχει περίπου 90 χλμ από το Αεροδρόμιο Αθηνών, συνδεόμενη μέσω της Αττικής Οδού και του αυτοκινητόδρομου Αθηνών–Κορίνθου, με το ταξίδι να διαρκεί συνήθως περίπου 1 έως 1,5 ώρα. Όπως και η διαδρομή προς το Ναύπλιο, αυτή παρακάμπτει το κέντρο της Αθήνας αντί να περνά μέσα από αυτό.",
          "Αυτή η διαδρομή λειτουργεί τόσο ως αυτόνομη μεταφορά προς την Κόρινθο και τη Διώρυγα της Κορίνθου, όσο και ως πρώτο σκέλος ενός μεγαλύτερου ταξιδιού στην Πελοπόννησο για αφίξεις που δεν θέλουν να σταματήσουν πρώτα στην Αθήνα.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 1 έως 1,5 ώρα, ανάλογα με την κίνηση." },
          { title: "Διαδρομή", description: "Μέσω της Αττικής Οδού και του αυτοκινητόδρομου Αθηνών–Κορίνθου, διασχίζοντας τη Διώρυγα της Κορίνθου στον Ισθμό." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Συνέχεια Ταξιδιού", description: "Αν συνεχίζετε προς την Πελοπόννησο, αναφέρετε το πλήρες πρόγραμμά σας κατά την αίτηση προσφοράς." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Απευθείας Αφίξεις στην Πελοπόννησο", description: "Παραλείψτε τη στάση στην Αθήνα και κατευθυνθείτε απευθείας στην Κόρινθο μετά την προσγείωση." },
          { title: "Επισκέψεις στη Διώρυγα της Κορίνθου", description: "Δείτε τη Διώρυγα της Κορίνθου χωρίς τον επιπλέον χρόνο διέλευσης από το κέντρο της Αθήνας." },
          { title: "Οικογένειες & Μικρές Ομάδες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα σας μαζί για ολόκληρο το ταξίδι." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε το Αεροδρόμιο & την Πελοπόννησο",
        items: [
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
          { label: "Περιοχή Πελοποννήσου", href: "/el/periochi/peloponnisos/", description: "Δείτε τη γενική μας επισκόπηση μεταφορών σε όλη την Πελοπόννησο." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αθήνα προς Κόρινθο", href: "/el/diadromi/athina-korinthos/", description: "Η αντίστοιχη διαδρομή με αφετηρία το κέντρο της Αθήνας." },
          { label: "Αεροδρόμιο Αθηνών προς Ναύπλιο", href: "/el/diadromi/aerodromio-athinas-nafplio/", description: "Συνεχίστε πέρα από την Κόρινθο προς το Ναύπλιο." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Αθηνών στην Κόρινθο;", answer: "Συνήθως περίπου 1 έως 1,5 ώρα, ανάλογα με την κίνηση." },
          { question: "Περνάει η διαδρομή από τη Διώρυγα της Κορίνθου;", answer: "Ναι, η διαδρομή διασχίζει τη Διώρυγα της Κορίνθου στον Ισθμό." },
          { question: "Μπορώ να συνεχίσω προς την ευρύτερη Πελοπόννησο από την Κόρινθο;", answer: "Ναι, αναφέρετε το πλήρες πρόγραμμά σας κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα με αποσκευές;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Κόρινθος;",
        description: "Πείτε μας τα στοιχεία πτήσης, τα σχέδια συνέχειας και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensAirportDelphi: {
    en: {
      meta: {
        title: "Athens Airport to Delphi Transfer – Private Car",
        description: "Book a private transfer between Athens Airport and Delphi for visitors heading straight to the mountains of Phocis. Get a quote.",
      },
      breadcrumbLabel: "Athens Airport to Delphi",
      hero: {
        eyebrow: "Athens Airport → Delphi",
        title: "Athens Airport to Delphi Transfer",
        description: "A direct private transfer from Athens Airport to Delphi, typically around 2.5 to 3.5 hours — longer than from central Athens since the airport sits further east.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Athens Airport to Delphi",
        paragraphs: [
          "Delphi is around 210 km from Athens Airport, noticeably further than the roughly 180 km from central Athens, since the airport sits to the east of the city. The journey typically takes around 2.5 to 3.5 hours via the A1/E75 motorway and the mountain road through Arachova.",
          "This route is used by visitors who prefer to head straight to Delphi after landing rather than routing through central Athens first, usually as part of a multi-day itinerary given the length of the drive.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 2.5 to 3.5 hours, longer than the equivalent route from central Athens." },
          { title: "Route", description: "Via the A1/E75 motorway and the mountain road through Arachova." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Direct Onward Travel", description: "Skip a stop in Athens and head straight into central Greece after landing." },
          { title: "Multi-Day Itineraries", description: "Given the distance, this route is usually planned as part of a longer trip." },
          { title: "Families & Small Groups", description: "A private vehicle keeps your group comfortable for the longer journey." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore the Airport",
        items: [
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "See our dedicated airport transfer information." },
          { label: "Athens Day Trips", href: "/athens-day-trips/", description: "See our overview of private day trips from Athens, including Delphi." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Athens to Delphi", href: "/route/athens-to-delphi/", description: "The equivalent, shorter route starting from central Athens." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Athens Airport to Delphi take?", answer: "Typically around 2.5 to 3.5 hours, longer than from central Athens since the airport is further east." },
          { question: "Is this route longer than travelling from central Athens?", answer: "Yes, it's around 30 km further than the equivalent route from central Athens." },
          { question: "Should I plan this as a day trip or an overnight stay?", answer: "Given the distance, most visitors combine this with an overnight stay near Delphi rather than a same-day return." },
          { question: "Can you arrange a transfer for a group arriving on the same flight?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Delphi Transfer?",
        description: "Tell us your flight details, itinerary and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Δελφοί – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Αθηνών και Δελφών για επισκέπτες που κατευθύνονται απευθείας στα βουνά της Φωκίδας.",
      },
      breadcrumbLabel: "Αεροδρόμιο Αθηνών προς Δελφούς",
      hero: {
        eyebrow: "Αεροδρόμιο Αθηνών → Δελφοί",
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Δελφοί",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Αθηνών προς τους Δελφούς, συνήθως περίπου 2,5 έως 3,5 ώρες.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Αθηνών προς τους Δελφούς",
        paragraphs: [
          "Οι Δελφοί απέχουν περίπου 210 χλμ από το Αεροδρόμιο Αθηνών, αισθητά περισσότερο από τα περίπου 180 χλμ από το κέντρο της Αθήνας, καθώς το αεροδρόμιο βρίσκεται ανατολικά της πόλης. Το ταξίδι διαρκεί συνήθως περίπου 2,5 έως 3,5 ώρες μέσω του αυτοκινητόδρομου Α1/Ε75 και του ορεινού δρόμου μέσω Αράχωβας.",
          "Αυτή η διαδρομή χρησιμοποιείται από επισκέπτες που προτιμούν να κατευθυνθούν απευθείας στους Δελφούς μετά την προσγείωση αντί να περάσουν πρώτα από το κέντρο της Αθήνας, συνήθως στο πλαίσιο πολυήμερου προγράμματος λόγω της απόστασης.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 2,5 έως 3,5 ώρες, περισσότερο από την αντίστοιχη διαδρομή από το κέντρο της Αθήνας." },
          { title: "Διαδρομή", description: "Μέσω του αυτοκινητόδρομου Α1/Ε75 και του ορεινού δρόμου μέσω Αράχωβας." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Απευθείας Συνέχεια Ταξιδιού", description: "Παραλείψτε τη στάση στην Αθήνα και κατευθυνθείτε απευθείας στην κεντρική Ελλάδα μετά την προσγείωση." },
          { title: "Πολυήμερα Προγράμματα", description: "Λόγω της απόστασης, αυτή η διαδρομή συνήθως σχεδιάζεται στο πλαίσιο μεγαλύτερου ταξιδιού." },
          { title: "Οικογένειες & Μικρές Ομάδες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα σας άνετη για το μεγαλύτερο ταξίδι." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε το Αεροδρόμιο",
        items: [
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
          { label: "Ημερήσιες Εκδρομές από την Αθήνα", href: "/el/idiotikes-ekdromes-athina/", description: "Δείτε τη γενική μας επισκόπηση ιδιωτικών εκδρομών από την Αθήνα, συμπεριλαμβανομένων των Δελφών." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αθήνα προς Δελφούς", href: "/el/diadromi/athina-delfoi/", description: "Η αντίστοιχη, συντομότερη διαδρομή με αφετηρία το κέντρο της Αθήνας." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Αθηνών στους Δελφούς;", answer: "Συνήθως περίπου 2,5 έως 3,5 ώρες, περισσότερο από το κέντρο της Αθήνας καθώς το αεροδρόμιο είναι πιο ανατολικά." },
          { question: "Είναι αυτή η διαδρομή μεγαλύτερη από το ταξίδι από το κέντρο της Αθήνας;", answer: "Ναι, είναι περίπου 30 χλμ περισσότερο από την αντίστοιχη διαδρομή από το κέντρο της Αθήνας." },
          { question: "Να το σχεδιάσω ως ημερήσια εκδρομή ή διανυκτέρευση;", answer: "Λόγω της απόστασης, οι περισσότεροι επισκέπτες το συνδυάζουν με διανυκτέρευση κοντά στους Δελφούς αντί για επιστροφή την ίδια μέρα." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που φτάνει με την ίδια πτήση;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Δελφοί;",
        description: "Πείτε μας τα στοιχεία πτήσης, το πρόγραμμά σας και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensAirportLoutraki: {
    en: {
      meta: {
        title: "Athens Airport to Loutraki Transfer – Private Car",
        description: "Book a private transfer between Athens Airport and Loutraki, a spa town near Corinth. Get a quote for your journey.",
      },
      breadcrumbLabel: "Athens Airport to Loutraki",
      hero: {
        eyebrow: "Athens Airport → Loutraki",
        title: "Athens Airport to Loutraki Transfer",
        description: "A private transfer from Athens Airport to Loutraki, typically around 1 to 1.5 hours.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Athens Airport to Loutraki",
        paragraphs: [
          "Loutraki is a spa town on the Gulf of Corinth, just beyond Corinth itself, around 95 km from Athens Airport. The journey typically takes around 1 to 1.5 hours via the Attiki Odos and Athens–Corinth motorways, similar in length to the Corinth route with a short additional stretch along the coast.",
          "Loutraki is known for its thermal springs, casino and beachfront promenade, drawing both spa visitors and day-trippers from the wider Athens area.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 1 to 1.5 hours, depending on traffic." },
          { title: "Route", description: "Via the Attiki Odos and Athens–Corinth motorways, continuing along the Gulf of Corinth coast." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Spa & Wellness Stays", description: "Travel directly from the airport to Loutraki's thermal spa hotels." },
          { title: "Direct Peloponnese Arrivals", description: "Skip a stop in Athens and head straight to the Gulf of Corinth coast." },
          { title: "Families & Small Groups", description: "A private vehicle keeps your group together for the journey." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore the Airport & Corinth",
        items: [
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "See our dedicated airport transfer information." },
          { label: "Athens Airport to Corinth", href: "/route/athens-airport-to-corinth/", description: "See our route page for the neighbouring town of Corinth." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Athens Airport to Loutraki take?", answer: "Typically around 1 to 1.5 hours, depending on traffic." },
          { question: "Is Loutraki near Corinth?", answer: "Yes, Loutraki sits on the Gulf of Corinth just beyond Corinth itself." },
          { question: "Can I be dropped off at a specific hotel?", answer: "Yes, specify your exact hotel or address when requesting a quote." },
          { question: "Can you arrange a transfer for a group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Loutraki Transfer?",
        description: "Tell us your flight details, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Λουτράκι – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Αθηνών και Λουτρακίου, λουτρόπολης κοντά στην Κόρινθο.",
      },
      breadcrumbLabel: "Αεροδρόμιο Αθηνών προς Λουτράκι",
      hero: {
        eyebrow: "Αεροδρόμιο Αθηνών → Λουτράκι",
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Λουτράκι",
        description: "Μια ιδιωτική μεταφορά από το Αεροδρόμιο Αθηνών προς το Λουτράκι, συνήθως περίπου 1 έως 1,5 ώρα.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Αθηνών προς το Λουτράκι",
        paragraphs: [
          "Το Λουτράκι είναι μια λουτρόπολη στον Κορινθιακό Κόλπο, λίγο πέρα από την ίδια την Κόρινθο, περίπου 95 χλμ από το Αεροδρόμιο Αθηνών. Το ταξίδι διαρκεί συνήθως περίπου 1 έως 1,5 ώρα μέσω της Αττικής Οδού και του αυτοκινητόδρομου Αθηνών–Κορίνθου, παρόμοιο σε διάρκεια με τη διαδρομή προς την Κόρινθο με μια σύντομη επιπλέον διαδρομή κατά μήκος της ακτής.",
          "Το Λουτράκι είναι γνωστό για τις ιαματικές πηγές, το καζίνο και την παραλιακή προμενάδα του, προσελκύοντας τόσο επισκέπτες για σπα όσο και ημερήσιους εκδρομείς από την ευρύτερη περιοχή της Αθήνας.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 1 έως 1,5 ώρα, ανάλογα με την κίνηση." },
          { title: "Διαδρομή", description: "Μέσω της Αττικής Οδού και του αυτοκινητόδρομου Αθηνών–Κορίνθου, συνεχίζοντας κατά μήκος της ακτής του Κορινθιακού Κόλπου." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Διαμονή Σπα & Ευεξίας", description: "Ταξιδέψτε απευθείας από το αεροδρόμιο προς τα ξενοδοχεία ιαματικών λουτρών του Λουτρακίου." },
          { title: "Απευθείας Αφίξεις στην Πελοπόννησο", description: "Παραλείψτε τη στάση στην Αθήνα και κατευθυνθείτε απευθείας στην ακτή του Κορινθιακού Κόλπου." },
          { title: "Οικογένειες & Μικρές Ομάδες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα σας μαζί για το ταξίδι." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε το Αεροδρόμιο & την Κόρινθο",
        items: [
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
          { label: "Αεροδρόμιο Αθηνών προς Κόρινθο", href: "/el/diadromi/aerodromio-athinas-korinthos/", description: "Δείτε τη σελίδα διαδρομής μας για τη γειτονική Κόρινθο." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Αθηνών στο Λουτράκι;", answer: "Συνήθως περίπου 1 έως 1,5 ώρα, ανάλογα με την κίνηση." },
          { question: "Είναι το Λουτράκι κοντά στην Κόρινθο;", answer: "Ναι, το Λουτράκι βρίσκεται στον Κορινθιακό Κόλπο λίγο πέρα από την ίδια την Κόρινθο." },
          { question: "Μπορώ να παραδοθώ σε συγκεκριμένο ξενοδοχείο;", answer: "Ναι, καθορίστε το ακριβές ξενοδοχείο ή τη διεύθυνσή σας κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Λουτράκι;",
        description: "Πείτε μας τα στοιχεία πτήσης, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routePiraeusNafplio: {
    en: {
      meta: {
        title: "Piraeus Port to Nafplio Transfer – Private Car",
        description: "Book a private transfer between Piraeus Port and Nafplio for cruise and ferry passengers continuing to the Peloponnese.",
      },
      breadcrumbLabel: "Piraeus Port to Nafplio",
      hero: {
        eyebrow: "Piraeus Port → Nafplio",
        title: "Piraeus Port to Nafplio Transfer",
        description: "A private transfer from Piraeus Port to Nafplio, typically around 2 to 2.5 hours, for cruise and ferry passengers continuing to the Peloponnese.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Piraeus Port to Nafplio",
        paragraphs: [
          "Nafplio is around 150 km from Piraeus, with the journey typically taking around 2 to 2.5 hours via the Athens–Corinth motorway. This route is distinct from an airport or city transfer — it serves passengers disembarking a cruise or ferry at Piraeus who want to continue directly to the Peloponnese without a stop in Athens.",
          "Because cruise and ferry schedules vary, this transfer is usually timed around your specific disembarkation time rather than a fixed departure.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 2 to 2.5 hours, depending on traffic." },
          { title: "Route", description: "Via the Athens–Corinth motorway, crossing the Corinth Canal." },
          { title: "Sailing Details", description: "Share your cruise or ferry line and disembarkation time so pickup can be planned accordingly." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Cruise Passengers", description: "Continue directly to the Peloponnese after disembarking at Piraeus." },
          { title: "Ferry Connections", description: "Travel onward to Nafplio without routing through central Athens." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the journey." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Piraeus & Nafplio",
        items: [
          { label: "Piraeus Port", href: "/port/piraeus/", description: "See our dedicated port transfer information for Piraeus." },
          { label: "Nafplio", href: "/destination/nafplio/", description: "See our destination overview of Nafplio." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Athens to Nafplio", href: "/route/athens-to-nafplio/", description: "The equivalent route starting from central Athens." },
          { label: "Athens Airport to Piraeus Port", href: "/route/athens-airport-to-piraeus-port/", description: "Connect between the airport and Piraeus for cruise passengers." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Piraeus Port to Nafplio take?", answer: "Typically around 2 to 2.5 hours, depending on traffic." },
          { question: "Can this transfer be timed around my cruise or ferry disembarkation?", answer: "Yes, share your sailing details when requesting a quote so pickup can be planned accordingly." },
          { question: "Does this route pass through central Athens?", answer: "No, it uses the Athens–Corinth motorway rather than routing through the city centre." },
          { question: "Can you arrange a transfer for a group with luggage?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Piraeus to Nafplio Transfer?",
        description: "Tell us your sailing details, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Λιμάνι Πειραιά – Ναύπλιο – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Λιμανιού Πειραιά και Ναυπλίου για επιβάτες κρουαζιέρας και ferry που συνεχίζουν προς την Πελοπόννησο.",
      },
      breadcrumbLabel: "Λιμάνι Πειραιά προς Ναύπλιο",
      hero: {
        eyebrow: "Λιμάνι Πειραιά → Ναύπλιο",
        title: "Μεταφορά Λιμάνι Πειραιά – Ναύπλιο",
        description: "Μια ιδιωτική μεταφορά από το Λιμάνι Πειραιά προς το Ναύπλιο, συνήθως περίπου 2 έως 2,5 ώρες.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Λιμάνι Πειραιά προς το Ναύπλιο",
        paragraphs: [
          "Το Ναύπλιο απέχει περίπου 150 χλμ από τον Πειραιά, με το ταξίδι να διαρκεί συνήθως περίπου 2 έως 2,5 ώρες μέσω του αυτοκινητόδρομου Αθηνών–Κορίνθου. Αυτή η διαδρομή διαφέρει από μια μεταφορά αεροδρομίου ή πόλης — εξυπηρετεί επιβάτες που αποβιβάζονται από κρουαζιέρα ή ferry στον Πειραιά και θέλουν να συνεχίσουν απευθείας προς την Πελοπόννησο χωρίς στάση στην Αθήνα.",
          "Επειδή τα προγράμματα κρουαζιέρας και ferry διαφέρουν, αυτή η μεταφορά συνήθως χρονομετρείται γύρω από τη συγκεκριμένη ώρα αποβίβασής σας αντί για σταθερή αναχώρηση.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 2 έως 2,5 ώρες, ανάλογα με την κίνηση." },
          { title: "Διαδρομή", description: "Μέσω του αυτοκινητόδρομου Αθηνών–Κορίνθου, διασχίζοντας τη Διώρυγα της Κορίνθου." },
          { title: "Στοιχεία Απόπλου", description: "Ενημερώστε μας για την εταιρεία κρουαζιέρας ή ferry και την ώρα αποβίβασης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Επιβάτες Κρουαζιέρας", description: "Συνεχίστε απευθείας προς την Πελοπόννησο μετά την αποβίβαση στον Πειραιά." },
          { title: "Συνδέσεις Ferry", description: "Ταξιδέψτε προς το Ναύπλιο χωρίς να περάσετε από το κέντρο της Αθήνας." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για το ταξίδι." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τον Πειραιά & το Ναύπλιο",
        items: [
          { label: "Λιμάνι Πειραιά", href: "/el/limani/peiraias/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς λιμανιού για τον Πειραιά." },
          { label: "Ναύπλιο", href: "/el/proorismos/nafplio/", description: "Δείτε την επισκόπηση προορισμού μας για το Ναύπλιο." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αθήνα προς Ναύπλιο", href: "/el/diadromi/athina-nafplio/", description: "Η αντίστοιχη διαδρομή με αφετηρία το κέντρο της Αθήνας." },
          { label: "Αεροδρόμιο Αθηνών προς Πειραιά", href: "/el/diadromi/aerodromio-athinas-peiraias/", description: "Σύνδεση μεταξύ αεροδρομίου και Πειραιά για επιβάτες κρουαζιέρας." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Λιμάνι Πειραιά στο Ναύπλιο;", answer: "Συνήθως περίπου 2 έως 2,5 ώρες, ανάλογα με την κίνηση." },
          { question: "Μπορεί αυτή η μεταφορά να προγραμματιστεί γύρω από την αποβίβασή μου από κρουαζιέρα ή ferry;", answer: "Ναι, ενημερώστε μας για τα στοιχεία απόπλου σας κατά την αίτηση προσφοράς." },
          { question: "Περνάει αυτή η διαδρομή από το κέντρο της Αθήνας;", answer: "Όχι, χρησιμοποιεί τον αυτοκινητόδρομο Αθηνών–Κορίνθου αντί να περνά από το κέντρο της πόλης." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα με αποσκευές;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Πειραιάς – Ναύπλιο;",
        description: "Πείτε μας τα στοιχεία απόπλου, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensAirportGrandeBretagne: {
    en: {
      meta: {
        title: "Athens Airport to Hotel Grande Bretagne Transfer",
        description: "Book a private transfer between Athens Airport and Hotel Grande Bretagne on Syntagma Square. Get a quote for your journey.",
      },
      breadcrumbLabel: "Athens Airport to Hotel Grande Bretagne",
      hero: {
        eyebrow: "Athens Airport → Hotel Grande Bretagne",
        title: "Athens Airport to Hotel Grande Bretagne Transfer",
        description: "A private transfer between Athens Airport and Hotel Grande Bretagne on Syntagma Square, typically around 35 to 50 minutes.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling Between Athens Airport and Hotel Grande Bretagne",
        paragraphs: [
          "Hotel Grande Bretagne is a landmark hotel on Syntagma Square in the heart of central Athens, a short walk from the Greek Parliament and Ermou shopping street. The journey from Athens Airport typically takes around 35 to 50 minutes via the Attiki Odos motorway, depending on traffic.",
          "This route works in both directions — for arriving guests heading straight to the hotel, and for departing guests being collected for their return flight, with pickup timed around your flight either way.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 35 to 50 minutes, depending on traffic and time of day." },
          { title: "Route", description: "Via the Attiki Odos motorway directly into central Athens." },
          { title: "Flight Details", description: "Share your flight number and arrival or departure time so pickup can be planned around it." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Central Athens Stays", description: "A direct transfer to or from one of Athens' most central hotel locations." },
          { title: "Business & Leisure Travellers", description: "Suited to both business visitors near the Parliament and leisure travellers exploring Syntagma and Plaka." },
          { title: "Guests with Luggage", description: "A private vehicle avoids the hassle of luggage on public transport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Athens & the Airport",
        items: [
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "See our dedicated airport transfer information." },
          { label: "Athens City Transfers", href: "/athens/", description: "See our overview of private transportation around Athens." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Hotels",
        title: "Other Central Athens Hotel Transfers",
        items: [
          { label: "Athens Airport to King George Hotel", href: "/route/athens-airport-to-king-george-hotel/", description: "Also on Syntagma Square, a short walk away." },
          { label: "Athens Airport to NJV Athens Plaza", href: "/route/athens-airport-to-njv-athens-plaza/", description: "Another Syntagma Square hotel transfer." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer between Athens Airport and Hotel Grande Bretagne take?", answer: "Typically around 35 to 50 minutes, depending on traffic." },
          { question: "Can I book this transfer for my departure as well as my arrival?", answer: "Yes, this route can be booked in either direction." },
          { question: "Can this transfer be timed around my flight?", answer: "Yes, share your flight number and arrival or departure time when requesting a quote." },
          { question: "Can you arrange a transfer for a group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Hotel Grande Bretagne Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Ξενοδοχείο Μεγάλη Βρεταννία",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Αθηνών και του Ξενοδοχείου Μεγάλη Βρεταννία στην Πλατεία Συντάγματος.",
      },
      breadcrumbLabel: "Αεροδρόμιο Αθηνών προς Μεγάλη Βρεταννία",
      hero: {
        eyebrow: "Αεροδρόμιο Αθηνών → Μεγάλη Βρεταννία",
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Ξενοδοχείο Μεγάλη Βρεταννία",
        description: "Μια ιδιωτική μεταφορά μεταξύ του Αεροδρομίου Αθηνών και του Ξενοδοχείου Μεγάλη Βρεταννία στην Πλατεία Συντάγματος, συνήθως περίπου 35 έως 50 λεπτά.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι Μεταξύ Αεροδρομίου Αθηνών και Ξενοδοχείου Μεγάλη Βρεταννία",
        paragraphs: [
          "Το Ξενοδοχείο Μεγάλη Βρεταννία είναι ένα εμβληματικό ξενοδοχείο στην Πλατεία Συντάγματος στην καρδιά του κέντρου της Αθήνας, λίγα βήματα από τη Βουλή και την οδό Ερμού. Το ταξίδι από το Αεροδρόμιο Αθηνών διαρκεί συνήθως περίπου 35 έως 50 λεπτά μέσω της Αττικής Οδού, ανάλογα με την κίνηση.",
          "Αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις — για επισκέπτες που φτάνουν και κατευθύνονται απευθείας στο ξενοδοχείο, και για επισκέπτες που αναχωρούν και παραλαμβάνονται για την πτήση επιστροφής τους.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 35 έως 50 λεπτά, ανάλογα με την κίνηση και την ώρα της ημέρας." },
          { title: "Διαδρομή", description: "Μέσω της Αττικής Οδού απευθείας προς το κέντρο της Αθήνας." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ή αναχώρησης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί από αεροδρόμιο προς ξενοδοχείο ή αντίστροφα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Διαμονή στο Κέντρο της Αθήνας", description: "Μια απευθείας μεταφορά προς ή από μία από τις πιο κεντρικές τοποθεσίες ξενοδοχείων της Αθήνας." },
          { title: "Επαγγελματίες & Ταξιδιώτες Αναψυχής", description: "Κατάλληλο τόσο για επαγγελματίες κοντά στη Βουλή όσο και για ταξιδιώτες αναψυχής που εξερευνούν το Σύνταγμα και την Πλάκα." },
          { title: "Επισκέπτες με Αποσκευές", description: "Ένα ιδιωτικό όχημα αποφεύγει την ταλαιπωρία των αποσκευών στα μέσα μαζικής μεταφοράς." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε την Αθήνα & το Αεροδρόμιο",
        items: [
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
          { label: "Μεταφορές στην Αθήνα", href: "/el/athina/", description: "Δείτε τη γενική μας επισκόπηση ιδιωτικών μεταφορών στην Αθήνα." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλα Ξενοδοχεία",
        title: "Άλλες Μεταφορές Ξενοδοχείων στο Κέντρο της Αθήνας",
        items: [
          { label: "Αεροδρόμιο Αθηνών προς King George", href: "/el/diadromi/aerodromio-athinas-king-george/", description: "Επίσης στην Πλατεία Συντάγματος, λίγα βήματα μακριά." },
          { label: "Αεροδρόμιο Αθηνών προς NJV Athens Plaza", href: "/el/diadromi/aerodromio-athinas-njv-plaza/", description: "Άλλη μια μεταφορά ξενοδοχείου στην Πλατεία Συντάγματος." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά μεταξύ Αεροδρομίου Αθηνών και Μεγάλης Βρεταννίας;", answer: "Συνήθως περίπου 35 έως 50 λεπτά, ανάλογα με την κίνηση." },
          { question: "Μπορώ να κλείσω αυτή τη μεταφορά και για την αναχώρησή μου;", answer: "Ναι, αυτή η διαδρομή μπορεί να κλειστεί και προς τις δύο κατευθύνσεις." },
          { question: "Μπορεί αυτή η μεταφορά να προγραμματιστεί γύρω από την πτήση μου;", answer: "Ναι, ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ή αναχώρησης κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας προς τη Μεγάλη Βρεταννία;",
        description: "Πείτε μας τα στοιχεία πτήσης και επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensAirportKingGeorge: {
    en: {
      meta: {
        title: "Athens Airport to King George Hotel Transfer",
        description: "Book a private transfer between Athens Airport and the King George Hotel on Syntagma Square. Get a quote for your journey.",
      },
      breadcrumbLabel: "Athens Airport to King George Hotel",
      hero: {
        eyebrow: "Athens Airport → King George Hotel",
        title: "Athens Airport to King George Hotel Transfer",
        description: "A private transfer between Athens Airport and the King George Hotel on Syntagma Square, typically around 35 to 50 minutes.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling Between Athens Airport and the King George Hotel",
        paragraphs: [
          "The King George is a boutique luxury hotel on Syntagma Square, with rooms overlooking the Parliament and, from its upper floors, the Acropolis. The journey from Athens Airport typically takes around 35 to 50 minutes via the Attiki Odos motorway.",
          "As a smaller, more intimate property than some of its Syntagma neighbours, the King George particularly suits guests who value a quieter, personalised arrival experience — a private transfer extends that from the airport door to the hotel door.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 35 to 50 minutes, depending on traffic and time of day." },
          { title: "Route", description: "Via the Attiki Odos motorway directly into central Athens." },
          { title: "Flight Details", description: "Share your flight number and arrival or departure time so pickup can be planned around it." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Boutique Luxury Stays", description: "A direct, private arrival matching the hotel's intimate, personalised style." },
          { title: "Syntagma & Plaka Visitors", description: "Central positioning close to Athens' main square and the old town." },
          { title: "Guests with Luggage", description: "A private vehicle avoids the hassle of luggage on public transport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Athens & the Airport",
        items: [
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "See our dedicated airport transfer information." },
          { label: "Athens City Transfers", href: "/athens/", description: "See our overview of private transportation around Athens." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Hotels",
        title: "Other Central Athens Hotel Transfers",
        items: [
          { label: "Athens Airport to Hotel Grande Bretagne", href: "/route/athens-airport-to-hotel-grande-bretagne/", description: "Also on Syntagma Square, a short walk away." },
          { label: "Athens Airport to Electra Palace Athens", href: "/route/athens-airport-to-electra-palace-athens/", description: "A hotel transfer to nearby Plaka." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer between Athens Airport and the King George Hotel take?", answer: "Typically around 35 to 50 minutes, depending on traffic." },
          { question: "Can I book this transfer for my departure as well as my arrival?", answer: "Yes, this route can be booked in either direction." },
          { question: "Can this transfer be timed around my flight?", answer: "Yes, share your flight number and arrival or departure time when requesting a quote." },
          { question: "Can you arrange a transfer for a group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your King George Hotel Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Ξενοδοχείο King George",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Αθηνών και του Ξενοδοχείου King George στην Πλατεία Συντάγματος.",
      },
      breadcrumbLabel: "Αεροδρόμιο Αθηνών προς King George",
      hero: {
        eyebrow: "Αεροδρόμιο Αθηνών → King George",
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Ξενοδοχείο King George",
        description: "Μια ιδιωτική μεταφορά μεταξύ του Αεροδρομίου Αθηνών και του Ξενοδοχείου King George στην Πλατεία Συντάγματος, συνήθως περίπου 35 έως 50 λεπτά.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι Μεταξύ Αεροδρομίου Αθηνών και Ξενοδοχείου King George",
        paragraphs: [
          "Το King George είναι ένα boutique πολυτελές ξενοδοχείο στην Πλατεία Συντάγματος, με δωμάτια που βλέπουν στη Βουλή και, από τους ανώτερους ορόφους, στην Ακρόπολη. Το ταξίδι από το Αεροδρόμιο Αθηνών διαρκεί συνήθως περίπου 35 έως 50 λεπτά μέσω της Αττικής Οδού.",
          "Ως μικρότερο, πιο προσωπικό κατάλυμα σε σχέση με ορισμένους γείτονές του στο Σύνταγμα, το King George ταιριάζει ιδιαίτερα σε επισκέπτες που εκτιμούν μια πιο ήσυχη, εξατομικευμένη εμπειρία άφιξης.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 35 έως 50 λεπτά, ανάλογα με την κίνηση και την ώρα της ημέρας." },
          { title: "Διαδρομή", description: "Μέσω της Αττικής Οδού απευθείας προς το κέντρο της Αθήνας." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ή αναχώρησης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί από αεροδρόμιο προς ξενοδοχείο ή αντίστροφα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Boutique Πολυτελής Διαμονή", description: "Μια απευθείας, ιδιωτική άφιξη που ταιριάζει με το προσωπικό στιλ του ξενοδοχείου." },
          { title: "Επισκέπτες Συντάγματος & Πλάκας", description: "Κεντρική τοποθεσία κοντά στην κύρια πλατεία της Αθήνας και την παλιά πόλη." },
          { title: "Επισκέπτες με Αποσκευές", description: "Ένα ιδιωτικό όχημα αποφεύγει την ταλαιπωρία των αποσκευών στα μέσα μαζικής μεταφοράς." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε την Αθήνα & το Αεροδρόμιο",
        items: [
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
          { label: "Μεταφορές στην Αθήνα", href: "/el/athina/", description: "Δείτε τη γενική μας επισκόπηση ιδιωτικών μεταφορών στην Αθήνα." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλα Ξενοδοχεία",
        title: "Άλλες Μεταφορές Ξενοδοχείων στο Κέντρο της Αθήνας",
        items: [
          { label: "Αεροδρόμιο Αθηνών προς Μεγάλη Βρεταννία", href: "/el/diadromi/aerodromio-athinas-grande-bretagne/", description: "Επίσης στην Πλατεία Συντάγματος, λίγα βήματα μακριά." },
          { label: "Αεροδρόμιο Αθηνών προς Electra Palace", href: "/el/diadromi/aerodromio-athinas-electra-palace/", description: "Μια μεταφορά ξενοδοχείου προς την κοντινή Πλάκα." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά μεταξύ Αεροδρομίου Αθηνών και King George;", answer: "Συνήθως περίπου 35 έως 50 λεπτά, ανάλογα με την κίνηση." },
          { question: "Μπορώ να κλείσω αυτή τη μεταφορά και για την αναχώρησή μου;", answer: "Ναι, αυτή η διαδρομή μπορεί να κλειστεί και προς τις δύο κατευθύνσεις." },
          { question: "Μπορεί αυτή η μεταφορά να προγραμματιστεί γύρω από την πτήση μου;", answer: "Ναι, ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ή αναχώρησης κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας προς το King George;",
        description: "Πείτε μας τα στοιχεία πτήσης και επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensAirportElectraPalace: {
    en: {
      meta: {
        title: "Athens Airport to Electra Palace Athens Transfer",
        description: "Book a private transfer between Athens Airport and Electra Palace Athens in Plaka. Get a quote for your journey.",
      },
      breadcrumbLabel: "Athens Airport to Electra Palace Athens",
      hero: {
        eyebrow: "Athens Airport → Electra Palace Athens",
        title: "Athens Airport to Electra Palace Athens Transfer",
        description: "A private transfer between Athens Airport and Electra Palace Athens in the Plaka neighbourhood, typically around 35 to 50 minutes.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling Between Athens Airport and Electra Palace Athens",
        paragraphs: [
          "Electra Palace Athens sits on Nikodimou Street in Plaka, the old historic neighbourhood beneath the Acropolis, known for its narrow pedestrian streets and rooftop views. The journey from Athens Airport typically takes around 35 to 50 minutes via the Attiki Odos motorway.",
          "Because Plaka's pedestrianised streets aren't accessible by car right up to every hotel entrance, a private transfer to this address means your driver will confirm the closest practical drop-off point with you, saving you navigating with luggage yourself.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 35 to 50 minutes, depending on traffic and time of day." },
          { title: "Route", description: "Via the Attiki Odos motorway into central Athens, then the Plaka pedestrian district." },
          { title: "Flight Details", description: "Share your flight number and arrival or departure time so pickup can be planned around it." },
          { title: "Drop-Off Point", description: "Plaka's pedestrianised streets mean your exact drop-off point will be confirmed with your driver." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Old Town Stays", description: "A direct transfer to Athens' historic Plaka neighbourhood beneath the Acropolis." },
          { title: "Leisure Travellers", description: "Suited to visitors prioritising walkable access to the Acropolis, Ancient Agora and central sights." },
          { title: "Guests with Luggage", description: "A private vehicle avoids the hassle of luggage on public transport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Athens & the Airport",
        items: [
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "See our dedicated airport transfer information." },
          { label: "Athens City Transfers", href: "/athens/", description: "See our overview of private transportation around Athens." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Hotels",
        title: "Other Central Athens Hotel Transfers",
        items: [
          { label: "Athens Airport to King George Hotel", href: "/route/athens-airport-to-king-george-hotel/", description: "A hotel transfer to nearby Syntagma Square." },
          { label: "Athens Airport to Hotel Grande Bretagne", href: "/route/athens-airport-to-hotel-grande-bretagne/", description: "A hotel transfer to Syntagma Square, a short walk from Plaka." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer between Athens Airport and Electra Palace Athens take?", answer: "Typically around 35 to 50 minutes, depending on traffic." },
          { question: "Can the driver drop me right at the hotel entrance?", answer: "Plaka's streets are largely pedestrianised, so your driver will confirm the closest practical drop-off point with you." },
          { question: "Can this transfer be timed around my flight?", answer: "Yes, share your flight number and arrival or departure time when requesting a quote." },
          { question: "Can you arrange a transfer for a group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Electra Palace Athens Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Electra Palace Athens",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Αθηνών και του Electra Palace Athens στην Πλάκα.",
      },
      breadcrumbLabel: "Αεροδρόμιο Αθηνών προς Electra Palace",
      hero: {
        eyebrow: "Αεροδρόμιο Αθηνών → Electra Palace",
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Electra Palace Athens",
        description: "Μια ιδιωτική μεταφορά μεταξύ του Αεροδρομίου Αθηνών και του Electra Palace Athens στην Πλάκα, συνήθως περίπου 35 έως 50 λεπτά.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι Μεταξύ Αεροδρομίου Αθηνών και Electra Palace Athens",
        paragraphs: [
          "Το Electra Palace Athens βρίσκεται στην οδό Νικοδήμου στην Πλάκα, την ιστορική συνοικία κάτω από την Ακρόπολη, γνωστή για τα στενά πεζόδρομά της και τη θέα από τις ταράτσες. Το ταξίδι από το Αεροδρόμιο Αθηνών διαρκεί συνήθως περίπου 35 έως 50 λεπτά μέσω της Αττικής Οδού.",
          "Επειδή οι πεζοδρομημένοι δρόμοι της Πλάκας δεν είναι προσβάσιμοι με αυτοκίνητο μέχρι κάθε είσοδο ξενοδοχείου, ο οδηγός σας θα επιβεβαιώσει μαζί σας το πλησιέστερο πρακτικό σημείο αποβίβασης.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 35 έως 50 λεπτά, ανάλογα με την κίνηση και την ώρα της ημέρας." },
          { title: "Διαδρομή", description: "Μέσω της Αττικής Οδού προς το κέντρο της Αθήνας, στη συνέχεια η πεζοδρομημένη περιοχή της Πλάκας." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ή αναχώρησης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Σημείο Αποβίβασης", description: "Οι πεζοδρομημένοι δρόμοι της Πλάκας σημαίνουν ότι το ακριβές σημείο αποβίβασης θα επιβεβαιωθεί με τον οδηγό σας." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Διαμονή στην Παλιά Πόλη", description: "Μια απευθείας μεταφορά προς την ιστορική συνοικία Πλάκα κάτω από την Ακρόπολη." },
          { title: "Ταξιδιώτες Αναψυχής", description: "Κατάλληλο για επισκέπτες που δίνουν προτεραιότητα στην πρόσβαση με τα πόδια στην Ακρόπολη, την Αρχαία Αγορά και τα κεντρικά αξιοθέατα." },
          { title: "Επισκέπτες με Αποσκευές", description: "Ένα ιδιωτικό όχημα αποφεύγει την ταλαιπωρία των αποσκευών στα μέσα μαζικής μεταφοράς." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε την Αθήνα & το Αεροδρόμιο",
        items: [
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
          { label: "Μεταφορές στην Αθήνα", href: "/el/athina/", description: "Δείτε τη γενική μας επισκόπηση ιδιωτικών μεταφορών στην Αθήνα." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλα Ξενοδοχεία",
        title: "Άλλες Μεταφορές Ξενοδοχείων στο Κέντρο της Αθήνας",
        items: [
          { label: "Αεροδρόμιο Αθηνών προς King George", href: "/el/diadromi/aerodromio-athinas-king-george/", description: "Μια μεταφορά ξενοδοχείου προς την κοντινή Πλατεία Συντάγματος." },
          { label: "Αεροδρόμιο Αθηνών προς Μεγάλη Βρεταννία", href: "/el/diadromi/aerodromio-athinas-grande-bretagne/", description: "Μια μεταφορά ξενοδοχείου προς την Πλατεία Συντάγματος, κοντά στην Πλάκα." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά μεταξύ Αεροδρομίου Αθηνών και Electra Palace Athens;", answer: "Συνήθως περίπου 35 έως 50 λεπτά, ανάλογα με την κίνηση." },
          { question: "Μπορεί ο οδηγός να με αφήσει ακριβώς στην είσοδο του ξενοδοχείου;", answer: "Οι δρόμοι της Πλάκας είναι σε μεγάλο βαθμό πεζοδρομημένοι, οπότε ο οδηγός σας θα επιβεβαιώσει το πλησιέστερο πρακτικό σημείο αποβίβασης." },
          { question: "Μπορεί αυτή η μεταφορά να προγραμματιστεί γύρω από την πτήση μου;", answer: "Ναι, ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ή αναχώρησης κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας προς το Electra Palace;",
        description: "Πείτε μας τα στοιχεία πτήσης και επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensAirportNjvPlaza: {
    en: {
      meta: {
        title: "Athens Airport to NJV Athens Plaza Transfer",
        description: "Book a private transfer between Athens Airport and NJV Athens Plaza on Syntagma Square. Get a quote for your journey.",
      },
      breadcrumbLabel: "Athens Airport to NJV Athens Plaza",
      hero: {
        eyebrow: "Athens Airport → NJV Athens Plaza",
        title: "Athens Airport to NJV Athens Plaza Transfer",
        description: "A private transfer between Athens Airport and NJV Athens Plaza on Syntagma Square, typically around 35 to 50 minutes.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling Between Athens Airport and NJV Athens Plaza",
        paragraphs: [
          "NJV Athens Plaza sits directly on Syntagma Square, recently renovated with a mix of business and leisure amenities. The journey from Athens Airport typically takes around 35 to 50 minutes via the Attiki Odos motorway.",
          "Its position directly on the square puts guests within walking distance of Ermou shopping street, the Parliament and Plaka, making a direct private transfer a convenient way to start a trip focused on central Athens.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 35 to 50 minutes, depending on traffic and time of day." },
          { title: "Route", description: "Via the Attiki Odos motorway directly into central Athens." },
          { title: "Flight Details", description: "Share your flight number and arrival or departure time so pickup can be planned around it." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Syntagma Square Stays", description: "A direct transfer to one of Athens' most central squares." },
          { title: "Business & Leisure Travellers", description: "Suited to both business visitors and leisure travellers wanting a walkable central base." },
          { title: "Guests with Luggage", description: "A private vehicle avoids the hassle of luggage on public transport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Athens & the Airport",
        items: [
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "See our dedicated airport transfer information." },
          { label: "Athens City Transfers", href: "/athens/", description: "See our overview of private transportation around Athens." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Hotels",
        title: "Other Central Athens Hotel Transfers",
        items: [
          { label: "Athens Airport to Hotel Grande Bretagne", href: "/route/athens-airport-to-hotel-grande-bretagne/", description: "Also on Syntagma Square." },
          { label: "Athens Airport to King George Hotel", href: "/route/athens-airport-to-king-george-hotel/", description: "Also on Syntagma Square." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer between Athens Airport and NJV Athens Plaza take?", answer: "Typically around 35 to 50 minutes, depending on traffic." },
          { question: "Can I book this transfer for my departure as well as my arrival?", answer: "Yes, this route can be booked in either direction." },
          { question: "Can this transfer be timed around my flight?", answer: "Yes, share your flight number and arrival or departure time when requesting a quote." },
          { question: "Can you arrange a transfer for a group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your NJV Athens Plaza Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Αθηνών – NJV Athens Plaza",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Αθηνών και του NJV Athens Plaza στην Πλατεία Συντάγματος.",
      },
      breadcrumbLabel: "Αεροδρόμιο Αθηνών προς NJV Athens Plaza",
      hero: {
        eyebrow: "Αεροδρόμιο Αθηνών → NJV Athens Plaza",
        title: "Μεταφορά Αεροδρόμιο Αθηνών – NJV Athens Plaza",
        description: "Μια ιδιωτική μεταφορά μεταξύ του Αεροδρομίου Αθηνών και του NJV Athens Plaza στην Πλατεία Συντάγματος, συνήθως περίπου 35 έως 50 λεπτά.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι Μεταξύ Αεροδρομίου Αθηνών και NJV Athens Plaza",
        paragraphs: [
          "Το NJV Athens Plaza βρίσκεται απευθείας στην Πλατεία Συντάγματος, πρόσφατα ανακαινισμένο με συνδυασμό επαγγελματικών και ψυχαγωγικών παροχών. Το ταξίδι από το Αεροδρόμιο Αθηνών διαρκεί συνήθως περίπου 35 έως 50 λεπτά μέσω της Αττικής Οδού.",
          "Η θέση του απευθείας στην πλατεία φέρνει τους επισκέπτες σε απόσταση περπατήματος από την οδό Ερμού, τη Βουλή και την Πλάκα.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 35 έως 50 λεπτά, ανάλογα με την κίνηση και την ώρα της ημέρας." },
          { title: "Διαδρομή", description: "Μέσω της Αττικής Οδού απευθείας προς το κέντρο της Αθήνας." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ή αναχώρησης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί από αεροδρόμιο προς ξενοδοχείο ή αντίστροφα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Διαμονή στην Πλατεία Συντάγματος", description: "Μια απευθείας μεταφορά προς μία από τις πιο κεντρικές πλατείες της Αθήνας." },
          { title: "Επαγγελματίες & Ταξιδιώτες Αναψυχής", description: "Κατάλληλο τόσο για επαγγελματίες όσο και για ταξιδιώτες αναψυχής που θέλουν κεντρική βάση με πρόσβαση με τα πόδια." },
          { title: "Επισκέπτες με Αποσκευές", description: "Ένα ιδιωτικό όχημα αποφεύγει την ταλαιπωρία των αποσκευών στα μέσα μαζικής μεταφοράς." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε την Αθήνα & το Αεροδρόμιο",
        items: [
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
          { label: "Μεταφορές στην Αθήνα", href: "/el/athina/", description: "Δείτε τη γενική μας επισκόπηση ιδιωτικών μεταφορών στην Αθήνα." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλα Ξενοδοχεία",
        title: "Άλλες Μεταφορές Ξενοδοχείων στο Κέντρο της Αθήνας",
        items: [
          { label: "Αεροδρόμιο Αθηνών προς Μεγάλη Βρεταννία", href: "/el/diadromi/aerodromio-athinas-grande-bretagne/", description: "Επίσης στην Πλατεία Συντάγματος." },
          { label: "Αεροδρόμιο Αθηνών προς King George", href: "/el/diadromi/aerodromio-athinas-king-george/", description: "Επίσης στην Πλατεία Συντάγματος." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά μεταξύ Αεροδρομίου Αθηνών και NJV Athens Plaza;", answer: "Συνήθως περίπου 35 έως 50 λεπτά, ανάλογα με την κίνηση." },
          { question: "Μπορώ να κλείσω αυτή τη μεταφορά και για την αναχώρησή μου;", answer: "Ναι, αυτή η διαδρομή μπορεί να κλειστεί και προς τις δύο κατευθύνσεις." },
          { question: "Μπορεί αυτή η μεταφορά να προγραμματιστεί γύρω από την πτήση μου;", answer: "Ναι, ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ή αναχώρησης κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας προς το NJV Athens Plaza;",
        description: "Πείτε μας τα στοιχεία πτήσης και επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensAirportGrandHyatt: {
    en: {
      meta: {
        title: "Athens Airport to Grand Hyatt Athens Transfer",
        description: "Book a private transfer between Athens Airport and Grand Hyatt Athens on Syngrou Avenue. Get a quote for your journey.",
      },
      breadcrumbLabel: "Athens Airport to Grand Hyatt Athens",
      hero: {
        eyebrow: "Athens Airport → Grand Hyatt Athens",
        title: "Athens Airport to Grand Hyatt Athens Transfer",
        description: "A private transfer between Athens Airport and Grand Hyatt Athens on Syngrou Avenue, typically around 35 to 50 minutes.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling Between Athens Airport and Grand Hyatt Athens",
        paragraphs: [
          "Grand Hyatt Athens is located on Syngrou Avenue, one of the main roads connecting central Athens to the coast, next to the Onassis Cultural Centre and within reach of both Plaka and the Athens Riviera. The journey from Athens Airport typically takes around 35 to 50 minutes via the Attiki Odos motorway.",
          "Its Syngrou Avenue position makes it a practical base for guests splitting time between the old town and the coast, or attending events at the nearby cultural and conference venues.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 35 to 50 minutes, depending on traffic and time of day." },
          { title: "Route", description: "Via the Attiki Odos motorway to Syngrou Avenue." },
          { title: "Flight Details", description: "Share your flight number and arrival or departure time so pickup can be planned around it." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Syngrou Avenue Stays", description: "A direct transfer to one of Athens' main business and event corridors." },
          { title: "Conference & Event Attendees", description: "Convenient for guests attending events at the Onassis Cultural Centre or nearby venues." },
          { title: "Guests with Luggage", description: "A private vehicle avoids the hassle of luggage on public transport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Athens & the Airport",
        items: [
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "See our dedicated airport transfer information." },
          { label: "Athens City Transfers", href: "/athens/", description: "See our overview of private transportation around Athens." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Hotels",
        title: "Other Syngrou Avenue Hotel Transfers",
        items: [
          { label: "Athens Airport to Athenaeum InterContinental", href: "/route/athens-airport-to-athenaeum-intercontinental/", description: "Another Syngrou Avenue hotel transfer." },
          { label: "Athens Airport to Divani Caravel", href: "/route/athens-airport-to-divani-caravel/", description: "A hotel transfer near the Megaron and Hilton area." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer between Athens Airport and Grand Hyatt Athens take?", answer: "Typically around 35 to 50 minutes, depending on traffic." },
          { question: "Can I book this transfer for my departure as well as my arrival?", answer: "Yes, this route can be booked in either direction." },
          { question: "Can this transfer be timed around my flight?", answer: "Yes, share your flight number and arrival or departure time when requesting a quote." },
          { question: "Can you arrange a transfer for a group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Grand Hyatt Athens Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Grand Hyatt Athens",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Αθηνών και του Grand Hyatt Athens στη Λεωφόρο Συγγρού.",
      },
      breadcrumbLabel: "Αεροδρόμιο Αθηνών προς Grand Hyatt",
      hero: {
        eyebrow: "Αεροδρόμιο Αθηνών → Grand Hyatt Athens",
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Grand Hyatt Athens",
        description: "Μια ιδιωτική μεταφορά μεταξύ του Αεροδρομίου Αθηνών και του Grand Hyatt Athens στη Λεωφόρο Συγγρού, συνήθως περίπου 35 έως 50 λεπτά.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι Μεταξύ Αεροδρομίου Αθηνών και Grand Hyatt Athens",
        paragraphs: [
          "Το Grand Hyatt Athens βρίσκεται στη Λεωφόρο Συγγρού, έναν από τους κύριους δρόμους που συνδέουν το κέντρο της Αθήνας με την ακτή, δίπλα στο Κέντρο Πολιτισμού Ίδρυμα Ωνάση. Το ταξίδι από το Αεροδρόμιο Αθηνών διαρκεί συνήθως περίπου 35 έως 50 λεπτά μέσω της Αττικής Οδού.",
          "Η θέση του στη Λεωφόρο Συγγρού το καθιστά πρακτική βάση για επισκέπτες που μοιράζουν τον χρόνο τους μεταξύ της παλιάς πόλης και της ακτής, ή που παρακολουθούν εκδηλώσεις σε κοντινούς πολιτιστικούς χώρους.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 35 έως 50 λεπτά, ανάλογα με την κίνηση και την ώρα της ημέρας." },
          { title: "Διαδρομή", description: "Μέσω της Αττικής Οδού προς τη Λεωφόρο Συγγρού." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ή αναχώρησης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί από αεροδρόμιο προς ξενοδοχείο ή αντίστροφα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Διαμονή στη Λεωφόρο Συγγρού", description: "Μια απευθείας μεταφορά προς έναν από τους κύριους επαγγελματικούς άξονες της Αθήνας." },
          { title: "Συμμετέχοντες σε Συνέδρια & Εκδηλώσεις", description: "Βολικό για επισκέπτες που παρακολουθούν εκδηλώσεις στο Ίδρυμα Ωνάση ή κοντινούς χώρους." },
          { title: "Επισκέπτες με Αποσκευές", description: "Ένα ιδιωτικό όχημα αποφεύγει την ταλαιπωρία των αποσκευών στα μέσα μαζικής μεταφοράς." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε την Αθήνα & το Αεροδρόμιο",
        items: [
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
          { label: "Μεταφορές στην Αθήνα", href: "/el/athina/", description: "Δείτε τη γενική μας επισκόπηση ιδιωτικών μεταφορών στην Αθήνα." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλα Ξενοδοχεία",
        title: "Άλλες Μεταφορές Ξενοδοχείων στη Λεωφόρο Συγγρού",
        items: [
          { label: "Αεροδρόμιο Αθηνών προς Athenaeum InterContinental", href: "/el/diadromi/aerodromio-athinas-intercontinental/", description: "Άλλη μια μεταφορά ξενοδοχείου στη Λεωφόρο Συγγρού." },
          { label: "Αεροδρόμιο Αθηνών προς Divani Caravel", href: "/el/diadromi/aerodromio-athinas-divani-caravel/", description: "Μια μεταφορά ξενοδοχείου κοντά στο Μέγαρο και τον Χίλτον." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά μεταξύ Αεροδρομίου Αθηνών και Grand Hyatt Athens;", answer: "Συνήθως περίπου 35 έως 50 λεπτά, ανάλογα με την κίνηση." },
          { question: "Μπορώ να κλείσω αυτή τη μεταφορά και για την αναχώρησή μου;", answer: "Ναι, αυτή η διαδρομή μπορεί να κλειστεί και προς τις δύο κατευθύνσεις." },
          { question: "Μπορεί αυτή η μεταφορά να προγραμματιστεί γύρω από την πτήση μου;", answer: "Ναι, ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ή αναχώρησης κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας προς το Grand Hyatt Athens;",
        description: "Πείτε μας τα στοιχεία πτήσης και επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensAirportAthenaeumIC: {
    en: {
      meta: {
        title: "Athens Airport to Athenaeum InterContinental Transfer",
        description: "Book a private transfer between Athens Airport and Athenaeum InterContinental Athens on Syngrou Avenue. Get a quote.",
      },
      breadcrumbLabel: "Athens Airport to Athenaeum InterContinental",
      hero: {
        eyebrow: "Athens Airport → Athenaeum InterContinental",
        title: "Athens Airport to Athenaeum InterContinental Transfer",
        description: "A private transfer between Athens Airport and Athenaeum InterContinental Athens on Syngrou Avenue, typically around 35 to 50 minutes.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling Between Athens Airport and Athenaeum InterContinental",
        paragraphs: [
          "Athenaeum InterContinental Athens is a large conference and business hotel on Syngrou Avenue, known for its extensive meeting facilities. The journey from Athens Airport typically takes around 35 to 50 minutes via the Attiki Odos motorway.",
          "Given its scale and conference facilities, this route is frequently used by business and event travellers arriving for meetings, alongside leisure guests using Syngrou Avenue as a base between the old town and the coast.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 35 to 50 minutes, depending on traffic and time of day." },
          { title: "Route", description: "Via the Attiki Odos motorway to Syngrou Avenue." },
          { title: "Flight Details", description: "Share your flight number and arrival or departure time so pickup can be planned around it." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Conference Attendees", description: "A direct transfer suited to business travellers arriving for meetings or events at the hotel." },
          { title: "Syngrou Avenue Stays", description: "Convenient positioning between central Athens and the coast." },
          { title: "Guests with Luggage", description: "A private vehicle avoids the hassle of luggage on public transport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Athens & the Airport",
        items: [
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "See our dedicated airport transfer information." },
          { label: "Corporate Transfers", href: "/corporate-transfers/", description: "See our professional corporate transfer service for business travellers." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Hotels",
        title: "Other Syngrou Avenue Hotel Transfers",
        items: [
          { label: "Athens Airport to Grand Hyatt Athens", href: "/route/athens-airport-to-grand-hyatt-athens/", description: "Another Syngrou Avenue hotel transfer." },
          { label: "Athens Airport to Divani Caravel", href: "/route/athens-airport-to-divani-caravel/", description: "A hotel transfer near the Megaron and Hilton area." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer between Athens Airport and Athenaeum InterContinental take?", answer: "Typically around 35 to 50 minutes, depending on traffic." },
          { question: "Is this route suitable for business travel?", answer: "Yes, it's commonly used by guests attending conferences or meetings at the hotel." },
          { question: "Can this transfer be timed around my flight?", answer: "Yes, share your flight number and arrival or departure time when requesting a quote." },
          { question: "Can you arrange a transfer for a group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Athenaeum InterContinental Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Athenaeum InterContinental",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Αθηνών και του Athenaeum InterContinental Athens στη Λεωφόρο Συγγρού.",
      },
      breadcrumbLabel: "Αεροδρόμιο Αθηνών προς Athenaeum IC",
      hero: {
        eyebrow: "Αεροδρόμιο Αθηνών → Athenaeum IC",
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Athenaeum InterContinental",
        description: "Μια ιδιωτική μεταφορά μεταξύ του Αεροδρομίου Αθηνών και του Athenaeum InterContinental Athens στη Λεωφόρο Συγγρού, συνήθως περίπου 35 έως 50 λεπτά.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι Μεταξύ Αεροδρομίου Αθηνών και Athenaeum InterContinental",
        paragraphs: [
          "Το Athenaeum InterContinental Athens είναι ένα μεγάλο ξενοδοχείο συνεδρίων και επιχειρήσεων στη Λεωφόρο Συγγρού, γνωστό για τις εκτεταμένες εγκαταστάσεις συνεδριάσεών του. Το ταξίδι από το Αεροδρόμιο Αθηνών διαρκεί συνήθως περίπου 35 έως 50 λεπτά μέσω της Αττικής Οδού.",
          "Λόγω της κλίμακας και των εγκαταστάσεων συνεδρίων του, αυτή η διαδρομή χρησιμοποιείται συχνά από επαγγελματίες και ταξιδιώτες εκδηλώσεων που φτάνουν για συναντήσεις.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 35 έως 50 λεπτά, ανάλογα με την κίνηση και την ώρα της ημέρας." },
          { title: "Διαδρομή", description: "Μέσω της Αττικής Οδού προς τη Λεωφόρο Συγγρού." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ή αναχώρησης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί από αεροδρόμιο προς ξενοδοχείο ή αντίστροφα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Συμμετέχοντες σε Συνέδρια", description: "Μια απευθείας μεταφορά κατάλληλη για επαγγελματίες που φτάνουν για συναντήσεις ή εκδηλώσεις στο ξενοδοχείο." },
          { title: "Διαμονή στη Λεωφόρο Συγγρού", description: "Βολική τοποθεσία μεταξύ του κέντρου της Αθήνας και της ακτής." },
          { title: "Επισκέπτες με Αποσκευές", description: "Ένα ιδιωτικό όχημα αποφεύγει την ταλαιπωρία των αποσκευών στα μέσα μαζικής μεταφοράς." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε την Αθήνα & το Αεροδρόμιο",
        items: [
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
          { label: "Εταιρικές Μεταφορές", href: "/el/etairikes-metafores/", description: "Δείτε την επαγγελματική μας υπηρεσία εταιρικών μεταφορών." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλα Ξενοδοχεία",
        title: "Άλλες Μεταφορές Ξενοδοχείων στη Λεωφόρο Συγγρού",
        items: [
          { label: "Αεροδρόμιο Αθηνών προς Grand Hyatt", href: "/el/diadromi/aerodromio-athinas-grand-hyatt/", description: "Άλλη μια μεταφορά ξενοδοχείου στη Λεωφόρο Συγγρού." },
          { label: "Αεροδρόμιο Αθηνών προς Divani Caravel", href: "/el/diadromi/aerodromio-athinas-divani-caravel/", description: "Μια μεταφορά ξενοδοχείου κοντά στο Μέγαρο και τον Χίλτον." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά μεταξύ Αεροδρομίου Αθηνών και Athenaeum InterContinental;", answer: "Συνήθως περίπου 35 έως 50 λεπτά, ανάλογα με την κίνηση." },
          { question: "Είναι αυτή η διαδρομή κατάλληλη για επαγγελματικό ταξίδι;", answer: "Ναι, χρησιμοποιείται συχνά από επισκέπτες που παρακολουθούν συνέδρια ή συναντήσεις στο ξενοδοχείο." },
          { question: "Μπορεί αυτή η μεταφορά να προγραμματιστεί γύρω από την πτήση μου;", answer: "Ναι, ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ή αναχώρησης κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας προς το Athenaeum InterContinental;",
        description: "Πείτε μας τα στοιχεία πτήσης και επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeAthensAirportDivaniCaravel: {
    en: {
      meta: {
        title: "Athens Airport to Divani Caravel Transfer",
        description: "Book a private transfer between Athens Airport and Divani Caravel Hotel near the Megaron and Hilton area. Get a quote.",
      },
      breadcrumbLabel: "Athens Airport to Divani Caravel",
      hero: {
        eyebrow: "Athens Airport → Divani Caravel",
        title: "Athens Airport to Divani Caravel Transfer",
        description: "A private transfer between Athens Airport and Divani Caravel Hotel, typically around 35 to 50 minutes.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling Between Athens Airport and Divani Caravel",
        paragraphs: [
          "Divani Caravel Hotel is located on Vasileos Alexandrou Street, near the Athens Concert Hall (Megaron) and the Hilton Athens area, a business and cultural district somewhat removed from the busier Syntagma streets. The journey from Athens Airport typically takes around 35 to 50 minutes via the Attiki Odos motorway.",
          "This part of Athens suits guests attending events at the Megaron or nearby galleries and museums, as well as business travellers who prefer a slightly quieter setting than central Syntagma while remaining close to it.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 35 to 50 minutes, depending on traffic and time of day." },
          { title: "Route", description: "Via the Attiki Odos motorway to the Megaron and Hilton district." },
          { title: "Flight Details", description: "Share your flight number and arrival or departure time so pickup can be planned around it." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Megaron & Cultural Events", description: "A direct transfer for guests attending events at the Athens Concert Hall or nearby venues." },
          { title: "Business Travellers", description: "A quieter business district within reach of central Athens." },
          { title: "Guests with Luggage", description: "A private vehicle avoids the hassle of luggage on public transport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Athens & the Airport",
        items: [
          { label: "Athens Airport", href: "/airport/athens-airport/", description: "See our dedicated airport transfer information." },
          { label: "Athens City Transfers", href: "/athens/", description: "See our overview of private transportation around Athens." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Hotels",
        title: "Other Athens Hotel Transfers",
        items: [
          { label: "Athens Airport to Grand Hyatt Athens", href: "/route/athens-airport-to-grand-hyatt-athens/", description: "A hotel transfer on nearby Syngrou Avenue." },
          { label: "Athens Airport to Athenaeum InterContinental", href: "/route/athens-airport-to-athenaeum-intercontinental/", description: "A hotel transfer on nearby Syngrou Avenue." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer between Athens Airport and Divani Caravel take?", answer: "Typically around 35 to 50 minutes, depending on traffic." },
          { question: "Is Divani Caravel near the Megaron Concert Hall?", answer: "Yes, it's located near the Athens Concert Hall and the Hilton Athens area." },
          { question: "Can this transfer be timed around my flight?", answer: "Yes, share your flight number and arrival or departure time when requesting a quote." },
          { question: "Can you arrange a transfer for a group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Divani Caravel Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Divani Caravel",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Αθηνών και του Divani Caravel Hotel κοντά στο Μέγαρο και τον Χίλτον.",
      },
      breadcrumbLabel: "Αεροδρόμιο Αθηνών προς Divani Caravel",
      hero: {
        eyebrow: "Αεροδρόμιο Αθηνών → Divani Caravel",
        title: "Μεταφορά Αεροδρόμιο Αθηνών – Divani Caravel",
        description: "Μια ιδιωτική μεταφορά μεταξύ του Αεροδρομίου Αθηνών και του Divani Caravel Hotel, συνήθως περίπου 35 έως 50 λεπτά.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι Μεταξύ Αεροδρομίου Αθηνών και Divani Caravel",
        paragraphs: [
          "Το Divani Caravel Hotel βρίσκεται στην οδό Βασιλέως Αλεξάνδρου, κοντά στο Μέγαρο Μουσικής Αθηνών και την περιοχή του Χίλτον, μια επιχειρηματική και πολιτιστική περιοχή κάπως απομακρυσμένη από τους πιο πολυσύχναστους δρόμους του Συντάγματος. Το ταξίδι από το Αεροδρόμιο Αθηνών διαρκεί συνήθως περίπου 35 έως 50 λεπτά μέσω της Αττικής Οδού.",
          "Αυτό το τμήμα της Αθήνας ταιριάζει σε επισκέπτες που παρακολουθούν εκδηλώσεις στο Μέγαρο ή κοντινές γκαλερί και μουσεία, καθώς και σε επαγγελματίες ταξιδιώτες που προτιμούν ένα κάπως πιο ήσυχο περιβάλλον.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 35 έως 50 λεπτά, ανάλογα με την κίνηση και την ώρα της ημέρας." },
          { title: "Διαδρομή", description: "Μέσω της Αττικής Οδού προς την περιοχή του Μεγάρου και του Χίλτον." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ή αναχώρησης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί από αεροδρόμιο προς ξενοδοχείο ή αντίστροφα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Εκδηλώσεις στο Μέγαρο", description: "Μια απευθείας μεταφορά για επισκέπτες που παρακολουθούν εκδηλώσεις στο Μέγαρο Μουσικής." },
          { title: "Επαγγελματίες Ταξιδιώτες", description: "Μια πιο ήσυχη επιχειρηματική περιοχή σε απόσταση από το κέντρο της Αθήνας." },
          { title: "Επισκέπτες με Αποσκευές", description: "Ένα ιδιωτικό όχημα αποφεύγει την ταλαιπωρία των αποσκευών στα μέσα μαζικής μεταφοράς." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε την Αθήνα & το Αεροδρόμιο",
        items: [
          { label: "Αεροδρόμιο Αθηνών", href: "/el/aerodromio/athina/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
          { label: "Μεταφορές στην Αθήνα", href: "/el/athina/", description: "Δείτε τη γενική μας επισκόπηση ιδιωτικών μεταφορών στην Αθήνα." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλα Ξενοδοχεία",
        title: "Άλλες Μεταφορές Ξενοδοχείων στην Αθήνα",
        items: [
          { label: "Αεροδρόμιο Αθηνών προς Grand Hyatt", href: "/el/diadromi/aerodromio-athinas-grand-hyatt/", description: "Μια μεταφορά ξενοδοχείου στην κοντινή Λεωφόρο Συγγρού." },
          { label: "Αεροδρόμιο Αθηνών προς Athenaeum InterContinental", href: "/el/diadromi/aerodromio-athinas-intercontinental/", description: "Μια μεταφορά ξενοδοχείου στην κοντινή Λεωφόρο Συγγρού." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά μεταξύ Αεροδρομίου Αθηνών και Divani Caravel;", answer: "Συνήθως περίπου 35 έως 50 λεπτά, ανάλογα με την κίνηση." },
          { question: "Είναι το Divani Caravel κοντά στο Μέγαρο Μουσικής;", answer: "Ναι, βρίσκεται κοντά στο Μέγαρο Μουσικής Αθηνών και την περιοχή του Χίλτον." },
          { question: "Μπορεί αυτή η μεταφορά να προγραμματιστεί γύρω από την πτήση μου;", answer: "Ναι, ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ή αναχώρησης κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας προς το Divani Caravel;",
        description: "Πείτε μας τα στοιχεία πτήσης και επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiAirportHalkidiki: {
    en: {
      meta: {
        title: "Thessaloniki Airport to Halkidiki Transfer – Private Car",
        description: "Book a private transfer between Thessaloniki Airport and Halkidiki, direct to Kassandra, Sithonia or Nea Moudania without a stop in the city.",
      },
      breadcrumbLabel: "Thessaloniki Airport to Halkidiki",
      hero: {
        eyebrow: "Thessaloniki Airport → Halkidiki",
        title: "Thessaloniki Airport to Halkidiki Transfer",
        description: "A direct private transfer from Thessaloniki Airport to the Halkidiki peninsula, without routing through the city centre.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki Airport to Halkidiki",
        paragraphs: [
          "Thessaloniki Airport sits southeast of the city, on the same side as the road toward Halkidiki, so a direct transfer to the peninsula doesn't need to pass through central Thessaloniki. The route runs via Nea Moudania on the isthmus before continuing to either the Kassandra or Sithonia peninsula.",
          "Because Halkidiki covers a long stretch of coastline, journey time depends heavily on exactly where you're headed — the isthmus area is reached well before the tip of Kassandra or the villages of Sithonia. Share your exact resort or address when requesting a quote so the journey can be planned accurately.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Varies by destination — Nea Moudania is reached first, with Kassandra and Sithonia villages further on." },
          { title: "Route", description: "Bypasses central Thessaloniki, heading directly from the airport toward the Halkidiki isthmus." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Resort Details", description: "Let us know your exact hotel or resort when requesting a quote." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Beach Holiday Arrivals", description: "Head straight to your Halkidiki resort without a stop in Thessaloniki." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Resort Stays", description: "A common choice for visitors starting a resort-based holiday directly from the airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Halkidiki",
        items: [
          { label: "Halkidiki", href: "/destination/halkidiki/", description: "See our destination overview of Halkidiki." },
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki Airport to Kassandra", href: "/route/thessaloniki-airport-to-kassandra/", description: "A more specific route to the Kassandra peninsula." },
          { label: "Thessaloniki Airport to Sithonia", href: "/route/thessaloniki-airport-to-sithonia/", description: "A more specific route to the Sithonia peninsula." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Thessaloniki Airport to Halkidiki take?", answer: "It depends on exactly where in Halkidiki you're headed — journey time increases the further along the peninsula your destination is." },
          { question: "Does this route pass through central Thessaloniki?", answer: "No, it heads directly from the airport toward Halkidiki without a stop in the city centre." },
          { question: "Can you arrange a transfer for a group arriving on the same flight?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Halkidiki Transfer?",
        description: "Tell us your flight details, resort and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Χαλκιδική – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Θεσσαλονίκης και Χαλκιδικής, απευθείας προς Κασσάνδρα, Σιθωνία ή Νέα Μουδανιά χωρίς στάση στην πόλη.",
      },
      breadcrumbLabel: "Αεροδρόμιο Θεσσαλονίκης προς Χαλκιδική",
      hero: {
        eyebrow: "Αεροδρόμιο Θεσσαλονίκης → Χαλκιδική",
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Χαλκιδική",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς τη χερσόνησο της Χαλκιδικής, χωρίς διέλευση από το κέντρο της πόλης.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Θεσσαλονίκης προς τη Χαλκιδική",
        paragraphs: [
          "Το Αεροδρόμιο Θεσσαλονίκης βρίσκεται νοτιοανατολικά της πόλης, στην ίδια πλευρά με τον δρόμο προς τη Χαλκιδική, οπότε μια απευθείας μεταφορά προς τη χερσόνησο δεν χρειάζεται να περάσει από το κέντρο της Θεσσαλονίκης. Η διαδρομή περνά από τα Νέα Μουδανιά στον ισθμό πριν συνεχίσει προς την Κασσάνδρα ή τη Σιθωνία.",
          "Επειδή η Χαλκιδική καλύπτει μεγάλο τμήμα ακτογραμμής, ο χρόνος διαδρομής εξαρτάται σε μεγάλο βαθμό από τον ακριβή προορισμό σας — η περιοχή του ισθμού προσεγγίζεται πολύ πριν από την άκρη της Κασσάνδρας ή τα χωριά της Σιθωνίας. Αναφέρετε το ακριβές θέρετρο ή διεύθυνσή σας κατά την αίτηση προσφοράς.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Διαφέρει ανάλογα με τον προορισμό — τα Νέα Μουδανιά προσεγγίζονται πρώτα, με τα χωριά της Κασσάνδρας και της Σιθωνίας πιο μακριά." },
          { title: "Διαδρομή", description: "Παρακάμπτει το κέντρο της Θεσσαλονίκης, κατευθυνόμενη απευθείας από το αεροδρόμιο προς τον ισθμό της Χαλκιδικής." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Στοιχεία Θέρετρου", description: "Ενημερώστε μας για το ακριβές ξενοδοχείο ή θέρετρό σας κατά την αίτηση προσφοράς." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Αφίξεις για Παραθαλάσσιες Διακοπές", description: "Κατευθυνθείτε απευθείας στο θέρετρό σας στη Χαλκιδική χωρίς στάση στη Θεσσαλονίκη." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Διαμονή σε Θέρετρο", description: "Συνηθισμένη επιλογή για επισκέπτες που ξεκινούν διακοπές σε θέρετρο απευθείας από το αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Χαλκιδική",
        items: [
          { label: "Χαλκιδική", href: "/el/proorismos/chalkidiki/", description: "Δείτε την επισκόπηση προορισμού μας για τη Χαλκιδική." },
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Κασσάνδρα", href: "/el/diadromi/aerodromio-thessalonikis-kassandra/", description: "Μια πιο συγκεκριμένη διαδρομή προς την Κασσάνδρα." },
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Σιθωνία", href: "/el/diadromi/aerodromio-thessalonikis-sithonia/", description: "Μια πιο συγκεκριμένη διαδρομή προς τη Σιθωνία." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Θεσσαλονίκης στη Χαλκιδική;", answer: "Εξαρτάται από το ακριβές σημείο της Χαλκιδικής — ο χρόνος διαδρομής αυξάνεται όσο πιο μακριά στη χερσόνησο βρίσκεται ο προορισμός σας." },
          { question: "Περνάει αυτή η διαδρομή από το κέντρο της Θεσσαλονίκης;", answer: "Όχι, κατευθύνεται απευθείας από το αεροδρόμιο προς τη Χαλκιδική χωρίς στάση στο κέντρο της πόλης." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που φτάνει με την ίδια πτήση;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Χαλκιδική;",
        description: "Πείτε μας τα στοιχεία πτήσης, το θέρετρο και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiAirportKassandra: {
    en: {
      meta: {
        title: "Thessaloniki Airport to Kassandra Transfer – Private Car",
        description: "Book a private transfer between Thessaloniki Airport and the Kassandra peninsula, covering Kallithea, Polychrono, Hanioti, Pefkochori and Sani.",
      },
      breadcrumbLabel: "Thessaloniki Airport to Kassandra",
      hero: {
        eyebrow: "Thessaloniki Airport → Kassandra",
        title: "Thessaloniki Airport to Kassandra Transfer",
        description: "A direct private transfer from Thessaloniki Airport to the Kassandra peninsula, the closest of Halkidiki's resort areas.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki Airport to Kassandra",
        paragraphs: [
          "Kassandra is the closest of Halkidiki's peninsulas to Thessaloniki Airport, reached via Nea Moudania on the isthmus before continuing down the peninsula's coast. Because Kassandra covers a long stretch of coastline — from Kallithea near the isthmus to Pefkochori further south, and the Sani Resort enclave on the western shore — journey time depends on exactly which village or resort you're heading to.",
          "Most visitors to Kassandra arrange a direct transfer from the airport rather than a bus connection, particularly when travelling with beach-holiday luggage or as a family.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Varies by village — areas nearer the isthmus are reached sooner than those further down the peninsula." },
          { title: "Route", description: "Via Nea Moudania and the Kassandra coast road." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Resort Details", description: "Let us know your exact hotel or resort when requesting a quote." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Beach Holiday Arrivals", description: "Head straight to your Kassandra resort after landing." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Resort Stays", description: "Including the Sani Resort enclave on Kassandra's western coast." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Kassandra",
        items: [
          { label: "Kassandra", href: "/destination/kassandra/", description: "See our destination overview of Kassandra." },
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki Airport to Sani Resort", href: "/route/thessaloniki-airport-to-sani-resort/", description: "A dedicated route to the Sani Resort enclave." },
          { label: "Thessaloniki Airport to Sithonia", href: "/route/thessaloniki-airport-to-sithonia/", description: "The equivalent route to the neighbouring Sithonia peninsula." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Thessaloniki Airport to Kassandra take?", answer: "It varies by village — areas nearer the isthmus, such as Kallithea, are reached sooner than villages further south such as Pefkochori." },
          { question: "Can I be dropped directly at my resort in Kassandra?", answer: "Yes, mention your exact hotel or resort when requesting a quote." },
          { question: "Can you arrange a transfer for a family arriving on the same flight?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Kassandra Transfer?",
        description: "Tell us your flight details, resort and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Κασσάνδρα – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Θεσσαλονίκης και της χερσονήσου της Κασσάνδρας, με κάλυψη Καλλιθέας, Πολυχρόνου, Χανιώτη, Πευκοχωρίου και Sani.",
      },
      breadcrumbLabel: "Αεροδρόμιο Θεσσαλονίκης προς Κασσάνδρα",
      hero: {
        eyebrow: "Αεροδρόμιο Θεσσαλονίκης → Κασσάνδρα",
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Κασσάνδρα",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς τη χερσόνησο της Κασσάνδρας, την πλησιέστερη τουριστική περιοχή της Χαλκιδικής.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Θεσσαλονίκης προς την Κασσάνδρα",
        paragraphs: [
          "Η Κασσάνδρα είναι η πλησιέστερη στο Αεροδρόμιο Θεσσαλονίκης από τις χερσονήσους της Χαλκιδικής, προσβάσιμη μέσω των Νέων Μουδανιών στον ισθμό πριν συνεχίσει κατά μήκος της ακτής της χερσονήσου. Επειδή η Κασσάνδρα καλύπτει μεγάλο τμήμα ακτογραμμής — από την Καλλιθέα κοντά στον ισθμό έως το Πευκοχώρι πιο νότια, και τον θύλακα του Sani Resort στη δυτική ακτή — ο χρόνος διαδρομής εξαρτάται από το ακριβές χωριό ή θέρετρο.",
          "Οι περισσότεροι επισκέπτες της Κασσάνδρας οργανώνουν απευθείας μεταφορά από το αεροδρόμιο αντί για σύνδεση με λεωφορείο, ιδιαίτερα όταν ταξιδεύουν με αποσκευές για παραθαλάσσιες διακοπές ή ως οικογένεια.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Διαφέρει ανάλογα με το χωριό — οι περιοχές πιο κοντά στον ισθμό προσεγγίζονται νωρίτερα από εκείνες πιο νότια στη χερσόνησο." },
          { title: "Διαδρομή", description: "Μέσω των Νέων Μουδανιών και του παράκτιου δρόμου της Κασσάνδρας." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Στοιχεία Θέρετρου", description: "Ενημερώστε μας για το ακριβές ξενοδοχείο ή θέρετρό σας κατά την αίτηση προσφοράς." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Αφίξεις για Παραθαλάσσιες Διακοπές", description: "Κατευθυνθείτε απευθείας στο θέρετρό σας στην Κασσάνδρα μετά την προσγείωση." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Διαμονή σε Θέρετρο", description: "Συμπεριλαμβανομένου του θύλακα του Sani Resort στη δυτική ακτή της Κασσάνδρας." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε την Κασσάνδρα",
        items: [
          { label: "Κασσάνδρα", href: "/el/proorismos/kassandra/", description: "Δείτε την επισκόπηση προορισμού μας για την Κασσάνδρα." },
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Sani Resort", href: "/el/diadromi/aerodromio-thessalonikis-sani-resort/", description: "Ειδική διαδρομή προς τον θύλακα του Sani Resort." },
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Σιθωνία", href: "/el/diadromi/aerodromio-thessalonikis-sithonia/", description: "Η αντίστοιχη διαδρομή προς τη γειτονική χερσόνησο της Σιθωνίας." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Θεσσαλονίκης στην Κασσάνδρα;", answer: "Διαφέρει ανάλογα με το χωριό — περιοχές κοντά στον ισθμό, όπως η Καλλιθέα, προσεγγίζονται νωρίτερα από χωριά πιο νότια όπως το Πευκοχώρι." },
          { question: "Μπορώ να παραδοθώ απευθείας στο θέρετρό μου στην Κασσάνδρα;", answer: "Ναι, αναφέρετε το ακριβές ξενοδοχείο ή θέρετρό σας κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για οικογένεια που φτάνει με την ίδια πτήση;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Κασσάνδρα;",
        description: "Πείτε μας τα στοιχεία πτήσης, το θέρετρο και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiAirportSithonia: {
    en: {
      meta: {
        title: "Thessaloniki Airport to Sithonia Transfer – Private Car",
        description: "Book a private transfer between Thessaloniki Airport and Sithonia, Halkidiki's central peninsula, covering Nikiti and Neos Marmaras.",
      },
      breadcrumbLabel: "Thessaloniki Airport to Sithonia",
      hero: {
        eyebrow: "Thessaloniki Airport → Sithonia",
        title: "Thessaloniki Airport to Sithonia Transfer",
        description: "A direct private transfer from Thessaloniki Airport to Sithonia, further along the Halkidiki coast than Kassandra.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki Airport to Sithonia",
        paragraphs: [
          "Sithonia is the middle of Halkidiki's three peninsulas, reached from the airport via Nea Moudania and a longer stretch of coast road than the journey to Kassandra. Its main towns are Nikiti, near the peninsula's entrance, and Neos Marmaras further along the west coast.",
          "Because of the extra distance, most visitors to Sithonia arrange a direct private transfer from the airport rather than a bus or public transport connection, particularly when travelling with resort luggage.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Longer than the equivalent Kassandra route, given Sithonia's position further along the coast." },
          { title: "Route", description: "Via Nea Moudania and the Sithonia coast road." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Resort Details", description: "Let us know your exact hotel or resort when requesting a quote." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Beach Holiday Arrivals", description: "Head straight to your Sithonia resort after landing." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Resort Stays", description: "Including the Porto Carras Grand Resort near Neos Marmaras." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Sithonia",
        items: [
          { label: "Sithonia", href: "/destination/sithonia/", description: "See our destination overview of Sithonia." },
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki Airport to Porto Carras Grand Resort", href: "/route/thessaloniki-airport-to-porto-carras/", description: "A dedicated route to the Porto Carras resort." },
          { label: "Thessaloniki Airport to Kassandra", href: "/route/thessaloniki-airport-to-kassandra/", description: "A shorter transfer to the neighbouring Kassandra peninsula." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Thessaloniki Airport to Sithonia take?", answer: "It's generally longer than the equivalent Kassandra transfer, given Sithonia's position further along the coast — exact time depends on your destination village." },
          { question: "Can I be dropped directly at my resort in Sithonia?", answer: "Yes, mention your exact hotel or resort when requesting a quote." },
          { question: "Can you arrange a transfer for a group arriving on the same flight?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Sithonia Transfer?",
        description: "Tell us your flight details, resort and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Σιθωνία – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Θεσσαλονίκης και Σιθωνίας, της κεντρικής χερσονήσου της Χαλκιδικής, με κάλυψη Νικήτης και Νέων Μαρμαρών.",
      },
      breadcrumbLabel: "Αεροδρόμιο Θεσσαλονίκης προς Σιθωνία",
      hero: {
        eyebrow: "Αεροδρόμιο Θεσσαλονίκης → Σιθωνία",
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Σιθωνία",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς τη Σιθωνία, πιο μακριά στην ακτή της Χαλκιδικής από την Κασσάνδρα.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Θεσσαλονίκης προς τη Σιθωνία",
        paragraphs: [
          "Η Σιθωνία είναι η μεσαία από τις τρεις χερσονήσους της Χαλκιδικής, προσβάσιμη από το αεροδρόμιο μέσω των Νέων Μουδανιών και ενός μεγαλύτερου τμήματος παράκτιου δρόμου από τη διαδρομή προς την Κασσάνδρα. Οι κύριες πόλεις της είναι η Νικήτη, κοντά στην είσοδο της χερσονήσου, και οι Νέες Μαρμαράς πιο μακριά στη δυτική ακτή.",
          "Λόγω της επιπλέον απόστασης, οι περισσότεροι επισκέπτες της Σιθωνίας οργανώνουν απευθείας ιδιωτική μεταφορά από το αεροδρόμιο αντί για σύνδεση με λεωφορείο, ιδιαίτερα όταν ταξιδεύουν με αποσκευές για θέρετρο.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Μεγαλύτερη από την αντίστοιχη διαδρομή προς την Κασσάνδρα, δεδομένης της θέσης της Σιθωνίας πιο μακριά στην ακτή." },
          { title: "Διαδρομή", description: "Μέσω των Νέων Μουδανιών και του παράκτιου δρόμου της Σιθωνίας." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Στοιχεία Θέρετρου", description: "Ενημερώστε μας για το ακριβές ξενοδοχείο ή θέρετρό σας κατά την αίτηση προσφοράς." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Αφίξεις για Παραθαλάσσιες Διακοπές", description: "Κατευθυνθείτε απευθείας στο θέρετρό σας στη Σιθωνία μετά την προσγείωση." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Διαμονή σε Θέρετρο", description: "Συμπεριλαμβανομένου του θέρετρου Porto Carras Grand Resort κοντά στις Νέες Μαρμαράς." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Σιθωνία",
        items: [
          { label: "Σιθωνία", href: "/el/proorismos/sithonia/", description: "Δείτε την επισκόπηση προορισμού μας για τη Σιθωνία." },
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Porto Carras Grand Resort", href: "/el/diadromi/aerodromio-thessalonikis-porto-carras/", description: "Ειδική διαδρομή προς το θέρετρο Porto Carras." },
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Κασσάνδρα", href: "/el/diadromi/aerodromio-thessalonikis-kassandra/", description: "Μια συντομότερη μεταφορά προς τη γειτονική χερσόνησο της Κασσάνδρας." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Θεσσαλονίκης στη Σιθωνία;", answer: "Γενικά μεγαλύτερη από την αντίστοιχη μεταφορά προς την Κασσάνδρα, δεδομένης της θέσης της Σιθωνίας πιο μακριά στην ακτή — ο ακριβής χρόνος εξαρτάται από το χωριό προορισμού." },
          { question: "Μπορώ να παραδοθώ απευθείας στο θέρετρό μου στη Σιθωνία;", answer: "Ναι, αναφέρετε το ακριβές ξενοδοχείο ή θέρετρό σας κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που φτάνει με την ίδια πτήση;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Σιθωνία;",
        description: "Πείτε μας τα στοιχεία πτήσης, το θέρετρο και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiAirportNeaMoudania: {
    en: {
      meta: {
        title: "Thessaloniki Airport to Nea Moudania Transfer – Private Car",
        description: "Book a private transfer between Thessaloniki Airport and Nea Moudania, the closest Halkidiki gateway town to the airport.",
      },
      breadcrumbLabel: "Thessaloniki Airport to Nea Moudania",
      hero: {
        eyebrow: "Thessaloniki Airport → Nea Moudania",
        title: "Thessaloniki Airport to Nea Moudania Transfer",
        description: "A direct private transfer from Thessaloniki Airport to Nea Moudania, typically the shortest of the Halkidiki airport routes.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki Airport to Nea Moudania",
        paragraphs: [
          "Nea Moudania sits on the isthmus at the entrance to Halkidiki, making it the closest of the region's destinations to Thessaloniki Airport. The route runs from the airport, around the city, toward the isthmus without needing to continue further down the Kassandra or Sithonia peninsulas.",
          "This is a common direct transfer for visitors staying in or near Nea Moudania itself, or continuing onward into Halkidiki after a short stop.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically the shortest of the Halkidiki airport transfer routes, given Nea Moudania's position on the isthmus." },
          { title: "Route", description: "From the airport toward the Halkidiki isthmus, bypassing central Thessaloniki." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Direct Halkidiki Arrivals", description: "Reach Nea Moudania quickly after landing, without a long onward drive." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Onward Halkidiki Trips", description: "Use this route as the start of a longer stay elsewhere in Halkidiki." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Nea Moudania",
        items: [
          { label: "Nea Moudania", href: "/destination/nea-moudania/", description: "See our destination overview of Nea Moudania." },
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki Airport to Kassandra", href: "/route/thessaloniki-airport-to-kassandra/", description: "A longer transfer further down the Kassandra peninsula." },
          { label: "Thessaloniki Airport to Halkidiki", href: "/route/thessaloniki-airport-to-halkidiki/", description: "Our general Halkidiki airport transfer page." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Thessaloniki Airport to Nea Moudania take?", answer: "It's typically the shortest of the Halkidiki airport routes, given Nea Moudania's position on the isthmus close to the airport." },
          { question: "Is Nea Moudania a good base for exploring Halkidiki?", answer: "Its position at the entrance to the region makes it a practical base, though most beach resorts are further along the Kassandra or Sithonia peninsulas." },
          { question: "Can you arrange a transfer for a group arriving on the same flight?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Nea Moudania Transfer?",
        description: "Tell us your flight details, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Νέα Μουδανιά – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Θεσσαλονίκης και Νέων Μουδανιών, της πλησιέστερης πύλης της Χαλκιδικής στο αεροδρόμιο.",
      },
      breadcrumbLabel: "Αεροδρόμιο Θεσσαλονίκης προς Νέα Μουδανιά",
      hero: {
        eyebrow: "Αεροδρόμιο Θεσσαλονίκης → Νέα Μουδανιά",
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Νέα Μουδανιά",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς τα Νέα Μουδανιά, συνήθως η συντομότερη από τις διαδρομές προς τη Χαλκιδική.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Θεσσαλονίκης προς τα Νέα Μουδανιά",
        paragraphs: [
          "Τα Νέα Μουδανιά βρίσκονται στον ισθμό, στην είσοδο της Χαλκιδικής, καθιστώντας τα τον πλησιέστερο προορισμό της περιοχής στο Αεροδρόμιο Θεσσαλονίκης. Η διαδρομή ξεκινά από το αεροδρόμιο, γύρω από την πόλη, προς τον ισθμό, χωρίς να χρειάζεται να συνεχίσει περαιτέρω στις χερσονήσους της Κασσάνδρας ή της Σιθωνίας.",
          "Αυτή είναι μια συνηθισμένη απευθείας μεταφορά για επισκέπτες που μένουν στα ή κοντά στα Νέα Μουδανιά, ή συνεχίζουν προς τη Χαλκιδική μετά από σύντομη στάση.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως η συντομότερη από τις διαδρομές μεταφοράς αεροδρομίου προς τη Χαλκιδική, δεδομένης της θέσης των Νέων Μουδανιών στον ισθμό." },
          { title: "Διαδρομή", description: "Από το αεροδρόμιο προς τον ισθμό της Χαλκιδικής, παρακάμπτοντας το κέντρο της Θεσσαλονίκης." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Απευθείας Αφίξεις στη Χαλκιδική", description: "Φτάστε γρήγορα στα Νέα Μουδανιά μετά την προσγείωση, χωρίς μεγάλη περαιτέρω διαδρομή." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Συνέχεια Ταξιδιού στη Χαλκιδική", description: "Χρησιμοποιήστε αυτή τη διαδρομή ως αρχή για μεγαλύτερη διαμονή αλλού στη Χαλκιδική." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τα Νέα Μουδανιά",
        items: [
          { label: "Νέα Μουδανιά", href: "/el/proorismos/nea-moudania/", description: "Δείτε την επισκόπηση προορισμού μας για τα Νέα Μουδανιά." },
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Κασσάνδρα", href: "/el/diadromi/aerodromio-thessalonikis-kassandra/", description: "Μια μεγαλύτερη μεταφορά πιο μακριά στη χερσόνησο της Κασσάνδρας." },
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Χαλκιδική", href: "/el/diadromi/aerodromio-thessalonikis-chalkidiki/", description: "Η γενική μας σελίδα μεταφοράς αεροδρομίου προς τη Χαλκιδική." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Θεσσαλονίκης στα Νέα Μουδανιά;", answer: "Είναι συνήθως η συντομότερη από τις διαδρομές προς τη Χαλκιδική, δεδομένης της θέσης των Νέων Μουδανιών στον ισθμό, κοντά στο αεροδρόμιο." },
          { question: "Είναι τα Νέα Μουδανιά καλή βάση για εξερεύνηση της Χαλκιδικής;", answer: "Η θέση τους στην είσοδο της περιοχής τα καθιστά πρακτική βάση, αν και τα περισσότερα παραθαλάσσια θέρετρα βρίσκονται πιο μακριά στις χερσονήσους της Κασσάνδρας ή της Σιθωνίας." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που φτάνει με την ίδια πτήση;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Νέα Μουδανιά;",
        description: "Πείτε μας τα στοιχεία πτήσης, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiPortHalkidiki: {
    en: {
      meta: {
        title: "Thessaloniki Port to Halkidiki Transfer – Private Car",
        description: "Book a private transfer from Thessaloniki Port to Halkidiki, for cruise and ferry passengers continuing to Kassandra or Sithonia.",
      },
      breadcrumbLabel: "Thessaloniki Port to Halkidiki",
      hero: {
        eyebrow: "Thessaloniki Port → Halkidiki",
        title: "Thessaloniki Port to Halkidiki Transfer",
        description: "A direct private transfer from the Port of Thessaloniki to Halkidiki, for cruise and ferry passengers continuing their trip.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki Port to Halkidiki",
        paragraphs: [
          "Some visitors arrive in Thessaloniki by cruise or ferry and continue directly to a Halkidiki resort rather than staying in the city. A private transfer from the port avoids relying on public transport with luggage, and can be timed around your disembarkation.",
          "As with the airport route, journey time depends on exactly where in Halkidiki you're headed — share your resort or address, along with your sailing details, when requesting a quote.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Varies by destination within Halkidiki — mention your exact resort when requesting a quote." },
          { title: "Timing", description: "Pickup is planned around your actual disembarkation time." },
          { title: "Cruise or Ferry Details", description: "Share your line and sailing details when requesting your quote." },
          { title: "Luggage Space", description: "Let us know your luggage so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Cruise Passengers", description: "Continue directly to a Halkidiki resort after disembarking, without a stop in the city." },
          { title: "Ferry Passengers", description: "A private transfer for travellers connecting onward to Halkidiki." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Halkidiki",
        items: [
          { label: "Halkidiki", href: "/destination/halkidiki/", description: "See our destination overview of Halkidiki." },
          { label: "Thessaloniki Port", href: "/port/thessaloniki/", description: "See our dedicated port transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki Airport to Halkidiki", href: "/route/thessaloniki-airport-to-halkidiki/", description: "The equivalent route for air arrivals." },
          { label: "Thessaloniki Airport to Port", href: "/route/thessaloniki-airport-to-port/", description: "For travellers connecting between the airport and the port." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a transfer from the port directly to a Halkidiki resort?", answer: "Yes, mention your resort and sailing details when requesting a quote." },
          { question: "Can you time my transfer around my disembarkation?", answer: "Yes, share your cruise or ferry line and expected arrival time when requesting a quote." },
          { question: "How long does the transfer to Halkidiki take from the port?", answer: "It depends on your exact destination within Halkidiki — journey time is broadly similar to the equivalent airport route." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Port to Halkidiki Transfer?",
        description: "Tell us your sailing details, resort and passenger numbers, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Λιμάνι Θεσσαλονίκης – Χαλκιδική – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά από το Λιμάνι της Θεσσαλονίκης προς τη Χαλκιδική, για επιβάτες κρουαζιέρας και ferry που συνεχίζουν προς Κασσάνδρα ή Σιθωνία.",
      },
      breadcrumbLabel: "Λιμάνι Θεσσαλονίκης προς Χαλκιδική",
      hero: {
        eyebrow: "Λιμάνι Θεσσαλονίκης → Χαλκιδική",
        title: "Μεταφορά Λιμάνι Θεσσαλονίκης – Χαλκιδική",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Λιμάνι της Θεσσαλονίκης προς τη Χαλκιδική, για επιβάτες κρουαζιέρας και ferry που συνεχίζουν το ταξίδι τους.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Λιμάνι Θεσσαλονίκης προς τη Χαλκιδική",
        paragraphs: [
          "Ορισμένοι επισκέπτες φτάνουν στη Θεσσαλονίκη με κρουαζιέρα ή ferry και συνεχίζουν απευθείας προς θέρετρο στη Χαλκιδική αντί να μείνουν στην πόλη. Μια ιδιωτική μεταφορά από το λιμάνι αποφεύγει την εξάρτηση από μέσα μαζικής μεταφοράς με αποσκευές, και μπορεί να προσαρμοστεί στην αποβίβασή σας.",
          "Όπως και στη διαδρομή αεροδρομίου, ο χρόνος διαδρομής εξαρτάται από το ακριβές σημείο της Χαλκιδικής που κατευθύνεστε — αναφέρετε το θέρετρο ή τη διεύθυνσή σας, μαζί με τα στοιχεία απόπλου, κατά την αίτηση προσφοράς.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Διαφέρει ανάλογα με τον προορισμό εντός της Χαλκιδικής — αναφέρετε το ακριβές θέρετρό σας κατά την αίτηση προσφοράς." },
          { title: "Χρονισμός", description: "Η παραλαβή σχεδιάζεται σύμφωνα με την πραγματική ώρα αποβίβασής σας." },
          { title: "Στοιχεία Κρουαζιέρας ή Ferry", description: "Δώστε μας την εταιρεία και τα στοιχεία απόπλου κατά την αίτηση προσφοράς." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Επιβάτες Κρουαζιέρας", description: "Συνεχίστε απευθείας προς θέρετρο στη Χαλκιδική μετά την αποβίβαση, χωρίς στάση στην πόλη." },
          { title: "Επιβάτες Ferry", description: "Μια ιδιωτική μεταφορά για ταξιδιώτες που συνδέονται προς τη Χαλκιδική." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Χαλκιδική",
        items: [
          { label: "Χαλκιδική", href: "/el/proorismos/chalkidiki/", description: "Δείτε την επισκόπηση προορισμού μας για τη Χαλκιδική." },
          { label: "Λιμάνι Θεσσαλονίκης", href: "/el/limani/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς λιμανιού." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Χαλκιδική", href: "/el/diadromi/aerodromio-thessalonikis-chalkidiki/", description: "Η αντίστοιχη διαδρομή για αεροπορικές αφίξεις." },
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Λιμάνι", href: "/el/diadromi/aerodromio-thessalonikis-limani/", description: "Για ταξιδιώτες που συνδέονται μεταξύ αεροδρομίου και λιμανιού." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω μεταφορά από το λιμάνι απευθείας προς θέρετρο στη Χαλκιδική;", answer: "Ναι, αναφέρετε το θέρετρο και τα στοιχεία απόπλου σας κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να προσαρμόσετε τη μεταφορά μου στην αποβίβασή μου;", answer: "Ναι, δώστε μας την εταιρεία κρουαζιέρας ή ferry και την αναμενόμενη ώρα άφιξης κατά την αίτηση προσφοράς." },
          { question: "Πόσο διαρκεί η μεταφορά προς τη Χαλκιδική από το λιμάνι;", answer: "Εξαρτάται από τον ακριβή προορισμό σας εντός της Χαλκιδικής — ο χρόνος διαδρομής είναι γενικά παρόμοιος με την αντίστοιχη διαδρομή αεροδρομίου." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Λιμάνι – Χαλκιδική;",
        description: "Πείτε μας τα στοιχεία απόπλου, το θέρετρο και τον αριθμό επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiAirportPort: {
    en: {
      meta: {
        title: "Thessaloniki Airport to Port Transfer – Private Car",
        description: "Book a private transfer between Thessaloniki Airport and the Port of Thessaloniki, useful for cruise and ferry connections.",
      },
      breadcrumbLabel: "Thessaloniki Airport to Port",
      hero: {
        eyebrow: "Thessaloniki Airport → Port",
        title: "Thessaloniki Airport to Port Transfer",
        description: "A direct private transfer between Thessaloniki Airport and the city's port, for cruise and ferry connections.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki Airport to the Port",
        paragraphs: [
          "Thessaloniki Airport sits southeast of the city, while the Port of Thessaloniki is within the city itself, so this route runs into central Thessaloniki rather than bypassing it. It's a common connection for cruise passengers flying in before their sailing, or arriving by sea and continuing on a flight.",
          "Sharing your flight and cruise or ferry details when requesting a quote helps your pickup be planned around both ends of the journey.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "A city-adjacent transfer, generally shorter than the routes onward to Halkidiki." },
          { title: "Route", description: "From the airport into central Thessaloniki, to the port area." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Cruise or Ferry Details", description: "Share your sailing time so the transfer can be timed accordingly." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Cruise Embarkation", description: "Fly in and head directly to your ship, without a stop elsewhere in the city." },
          { title: "Cruise Disembarkation", description: "Head straight from the port to the airport for your onward flight." },
          { title: "Groups & Families", description: "A private vehicle keeps your group and luggage together for the whole journey." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Thessaloniki",
        items: [
          { label: "Thessaloniki Port", href: "/port/thessaloniki/", description: "See our dedicated port transfer information." },
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki Port to Halkidiki", href: "/route/thessaloniki-port-to-halkidiki/", description: "For cruise passengers continuing onward to Halkidiki." },
          { label: "Thessaloniki Airport to Halkidiki", href: "/route/thessaloniki-airport-to-halkidiki/", description: "For air arrivals continuing onward to Halkidiki." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a transfer from Thessaloniki Airport to the port for a cruise?", answer: "Yes, share your flight and cruise details when requesting a quote so your pickup can be timed accordingly." },
          { question: "Can I travel from the port to the airport after disembarking?", answer: "Yes, this transfer works in both directions — mention your onward flight when requesting a quote." },
          { question: "How long does the transfer between the airport and port take?", answer: "It's a city-adjacent journey, generally shorter than the routes onward to Halkidiki." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Port Transfer?",
        description: "Tell us your flight and sailing details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Λιμάνι – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Θεσσαλονίκης και του Λιμανιού της Θεσσαλονίκης, χρήσιμη για συνδέσεις κρουαζιέρας και ferry.",
      },
      breadcrumbLabel: "Αεροδρόμιο Θεσσαλονίκης προς Λιμάνι",
      hero: {
        eyebrow: "Αεροδρόμιο Θεσσαλονίκης → Λιμάνι",
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Λιμάνι",
        description: "Μια απευθείας ιδιωτική μεταφορά μεταξύ του Αεροδρομίου Θεσσαλονίκης και του λιμανιού της πόλης, για συνδέσεις κρουαζιέρας και ferry.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Θεσσαλονίκης προς το Λιμάνι",
        paragraphs: [
          "Το Αεροδρόμιο Θεσσαλονίκης βρίσκεται νοτιοανατολικά της πόλης, ενώ το Λιμάνι της Θεσσαλονίκης βρίσκεται μέσα στην ίδια την πόλη, οπότε αυτή η διαδρομή περνά από το κέντρο της Θεσσαλονίκης αντί να το παρακάμπτει. Είναι μια συνηθισμένη σύνδεση για επιβάτες κρουαζιέρας που πετούν πριν τον απόπλου τους, ή που φτάνουν από τη θάλασσα και συνεχίζουν με πτήση.",
          "Η αναφορά των στοιχείων πτήσης και κρουαζιέρας ή ferry σας κατά την αίτηση προσφοράς βοηθά η παραλαβή σας να σχεδιαστεί γύρω από και τις δύο πλευρές του ταξιδιού.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Μια μεταφορά κοντά στην πόλη, γενικά συντομότερη από τις διαδρομές προς τη Χαλκιδική." },
          { title: "Διαδρομή", description: "Από το αεροδρόμιο προς το κέντρο της Θεσσαλονίκης, στην περιοχή του λιμανιού." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Στοιχεία Κρουαζιέρας ή Ferry", description: "Δώστε μας την ώρα απόπλου σας ώστε η μεταφορά να προγραμματιστεί ανάλογα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Επιβίβαση σε Κρουαζιέρα", description: "Πετάξτε και κατευθυνθείτε απευθείας στο πλοίο σας, χωρίς στάση αλλού στην πόλη." },
          { title: "Αποβίβαση από Κρουαζιέρα", description: "Κατευθυνθείτε απευθείας από το λιμάνι στο αεροδρόμιο για την πτήση επιστροφής σας." },
          { title: "Ομάδες & Οικογένειες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Θεσσαλονίκη",
        items: [
          { label: "Λιμάνι Θεσσαλονίκης", href: "/el/limani/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς λιμανιού." },
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Λιμάνι Θεσσαλονίκης προς Χαλκιδική", href: "/el/diadromi/limani-thessalonikis-chalkidiki/", description: "Για επιβάτες κρουαζιέρας που συνεχίζουν προς τη Χαλκιδική." },
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Χαλκιδική", href: "/el/diadromi/aerodromio-thessalonikis-chalkidiki/", description: "Για αεροπορικές αφίξεις που συνεχίζουν προς τη Χαλκιδική." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το λιμάνι για κρουαζιέρα;", answer: "Ναι, δώστε μας τα στοιχεία πτήσης και κρουαζιέρας κατά την αίτηση προσφοράς ώστε η παραλαβή σας να προγραμματιστεί ανάλογα." },
          { question: "Μπορώ να ταξιδέψω από το λιμάνι προς το αεροδρόμιο μετά την αποβίβαση;", answer: "Ναι, αυτή η μεταφορά λειτουργεί και προς τις δύο κατευθύνσεις — αναφέρετε την πτήση επιστροφής σας κατά την αίτηση προσφοράς." },
          { question: "Πόσο διαρκεί η μεταφορά μεταξύ αεροδρομίου και λιμανιού;", answer: "Είναι ένα ταξίδι κοντά στην πόλη, γενικά συντομότερο από τις διαδρομές προς τη Χαλκιδική." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Λιμάνι;",
        description: "Πείτε μας τα στοιχεία πτήσης και απόπλου σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiStations: {
    en: {
      meta: {
        title: "Thessaloniki Railway Station & KTEL Bus Station Transfers",
        description: "Book a private transfer to or from Thessaloniki's railway station or the KTEL Macedonia intercity bus station. Request a quote for your journey.",
      },
      breadcrumbLabel: "Railway & Bus Station Transfers",
      hero: {
        eyebrow: "Thessaloniki Stations",
        title: "Thessaloniki Railway Station & KTEL Bus Station Transfers",
        description: "A private transfer to or from Thessaloniki's railway station or the KTEL Macedonia intercity bus station.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling To or From Thessaloniki's Stations",
        paragraphs: [
          "Travellers arriving in Thessaloniki by train or intercity bus can arrange a private pickup rather than relying on a taxi rank or local transport with luggage. This covers both the city's railway station and the KTEL Macedonia terminal, which serves intercity coach routes across northern Greece.",
          "A private transfer is arranged around your actual arrival or departure time, and can take you directly to your hotel, onward to Halkidiki, or to Thessaloniki Airport for a connecting flight.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "A short, city-based transfer to your hotel or onward destination." },
          { title: "Which Station", description: "Let us know whether you're arriving at the railway station or the KTEL bus station." },
          { title: "Arrival Details", description: "Share your train or bus arrival time so pickup can be planned around it." },
          { title: "Onward Plans", description: "Mention if you're continuing to Halkidiki, the airport, or elsewhere when requesting your quote." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Train Arrivals", description: "A direct pickup from Thessaloniki's railway station." },
          { title: "Intercity Bus Arrivals", description: "A direct pickup from the KTEL Macedonia terminal." },
          { title: "Onward Connections", description: "Continue directly to your hotel, Halkidiki, or the airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Thessaloniki",
        items: [
          { label: "Thessaloniki", href: "/city/thessaloniki/", description: "See our overview of transfers across Thessaloniki." },
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki Airport to Halkidiki", href: "/route/thessaloniki-airport-to-halkidiki/", description: "Continuing onward to Halkidiki." },
          { label: "Thessaloniki to Athens", href: "/route/athens-to-thessaloniki/", description: "A long-distance transfer connecting Greece's two largest cities." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a private pickup from Thessaloniki's railway station?", answer: "Yes, share your train arrival time when requesting a quote." },
          { question: "Do you cover the KTEL Macedonia bus station?", answer: "Yes, private pickups from the KTEL Macedonia intercity bus terminal can be arranged the same way." },
          { question: "Can I be taken directly to Halkidiki from the station?", answer: "Yes, mention your onward destination when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Station Transfer?",
        description: "Tell us your arrival details, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορές Σιδηροδρομικού Σταθμού & ΚΤΕΛ Μακεδονίας Θεσσαλονίκης",
        description: "Κλείστε ιδιωτική μεταφορά από ή προς τον σιδηροδρομικό σταθμό της Θεσσαλονίκης ή το ΚΤΕΛ Μακεδονίας. Ζητήστε προσφορά για το ταξίδι σας.",
      },
      breadcrumbLabel: "Μεταφορές Σταθμού & ΚΤΕΛ",
      hero: {
        eyebrow: "Σταθμοί Θεσσαλονίκης",
        title: "Μεταφορές Σιδηροδρομικού Σταθμού & ΚΤΕΛ Μακεδονίας",
        description: "Μια ιδιωτική μεταφορά από ή προς τον σιδηροδρομικό σταθμό της Θεσσαλονίκης ή το τερματικό ΚΤΕΛ Μακεδονίας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι Από ή Προς τους Σταθμούς της Θεσσαλονίκης",
        paragraphs: [
          "Ταξιδιώτες που φτάνουν στη Θεσσαλονίκη με τρένο ή υπεραστικό λεωφορείο μπορούν να οργανώσουν ιδιωτική παραλαβή αντί να βασιστούν σε πιάτσα ταξί ή τοπικά μέσα μεταφοράς με αποσκευές. Αυτό καλύπτει τόσο τον σιδηροδρομικό σταθμό της πόλης όσο και το τερματικό ΚΤΕΛ Μακεδονίας, που εξυπηρετεί υπεραστικές διαδρομές σε όλη τη βόρεια Ελλάδα.",
          "Μια ιδιωτική μεταφορά οργανώνεται σύμφωνα με την πραγματική ώρα άφιξης ή αναχώρησής σας, και μπορεί να σας μεταφέρει απευθείας στο ξενοδοχείο σας, προς τη Χαλκιδική, ή στο Αεροδρόμιο Θεσσαλονίκης για ανταπόκριση πτήσης.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Μια σύντομη μεταφορά εντός της πόλης προς το ξενοδοχείο σας ή περαιτέρω προορισμό." },
          { title: "Ποιος Σταθμός", description: "Ενημερώστε μας αν φτάνετε στον σιδηροδρομικό σταθμό ή στο ΚΤΕΛ." },
          { title: "Στοιχεία Άφιξης", description: "Δώστε μας την ώρα άφιξης του τρένου ή του λεωφορείου ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Επόμενα Σχέδια", description: "Αναφέρετε αν συνεχίζετε προς τη Χαλκιδική, το αεροδρόμιο, ή αλλού κατά την αίτηση προσφοράς." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Αφίξεις με Τρένο", description: "Απευθείας παραλαβή από τον σιδηροδρομικό σταθμό της Θεσσαλονίκης." },
          { title: "Αφίξεις με Υπεραστικό Λεωφορείο", description: "Απευθείας παραλαβή από το τερματικό ΚΤΕΛ Μακεδονίας." },
          { title: "Περαιτέρω Συνδέσεις", description: "Συνεχίστε απευθείας προς το ξενοδοχείο σας, τη Χαλκιδική, ή το αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Θεσσαλονίκη",
        items: [
          { label: "Θεσσαλονίκη", href: "/el/poli/thessaloniki/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλη τη Θεσσαλονίκη." },
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Χαλκιδική", href: "/el/diadromi/aerodromio-thessalonikis-chalkidiki/", description: "Συνέχεια προς τη Χαλκιδική." },
          { label: "Θεσσαλονίκη προς Αθήνα", href: "/el/diadromi/athina-thessaloniki/", description: "Μια μεταφορά μεγάλης απόστασης που συνδέει τις δύο μεγαλύτερες πόλεις της Ελλάδας." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω ιδιωτική παραλαβή από τον σιδηροδρομικό σταθμό της Θεσσαλονίκης;", answer: "Ναι, δώστε μας την ώρα άφιξης του τρένου σας κατά την αίτηση προσφοράς." },
          { question: "Καλύπτετε το ΚΤΕΛ Μακεδονίας;", answer: "Ναι, ιδιωτικές παραλαβές από το τερματικό ΚΤΕΛ Μακεδονίας μπορούν να οργανωθούν με τον ίδιο τρόπο." },
          { question: "Μπορώ να μεταφερθώ απευθείας στη Χαλκιδική από τον σταθμό;", answer: "Ναι, αναφέρετε τον περαιτέρω προορισμό σας κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας από τον Σταθμό;",
        description: "Πείτε μας τα στοιχεία άφιξης, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiMeteora: {
    en: {
      meta: {
        title: "Thessaloniki to Meteora Private Transfer – Book Your Ride",
        description: "Book a private transfer or day trip from Thessaloniki to the rock-pillar monasteries of Meteora. Comfortable door-to-door travel.",
      },
      breadcrumbLabel: "Thessaloniki to Meteora",
      hero: {
        eyebrow: "Thessaloniki → Meteora",
        title: "Thessaloniki to Meteora Private Transfer",
        description: "A private transfer from Thessaloniki to the rock-pillar monasteries of Meteora, near Kalambaka in Thessaly.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki to Meteora",
        paragraphs: [
          "Meteora is a long-distance destination from Thessaloniki, reached via the A2/E92 motorway west toward Kalambaka. It's generally considered a full-day trip or an overnight stay rather than a short excursion, given the distance involved.",
          "Because of the journey length, most visitors either arrange a one-way private transfer as part of a longer itinerary, or a full private day trip with time to explore the monasteries before returning. Mention which you'd prefer when requesting a quote."
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "A long-distance journey, generally planned as a full day given the distance from Thessaloniki." },
          { title: "Route", description: "Via the A2/E92 motorway west toward Kalambaka and the Meteora monasteries." },
          { title: "One-Way or Day Trip", description: "Let us know whether you need a one-way transfer or a return day trip when requesting a quote." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Multi-Stop Itineraries", description: "Use this transfer as part of a wider Greece trip, continuing on from Thessaloniki." },
          { title: "Day-Trip Visitors", description: "See the monasteries and return to Thessaloniki the same day, with the vehicle waiting." },
          { title: "Families & Groups", description: "A private vehicle keeps your group and luggage together for the long journey." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Meteora",
        items: [
          { label: "Meteora", href: "/destination/meteora/", description: "See our destination overview of Meteora." },
          { label: "Thessaloniki Day Trips", href: "/thessaloniki-day-trips/", description: "See our full range of private day trips from Thessaloniki." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki to Mount Olympus", href: "/route/thessaloniki-to-mount-olympus/", description: "A shorter day trip toward the coast en route south." },
          { label: "Athens to Meteora", href: "/route/athens-to-meteora/", description: "The equivalent route from Athens." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Thessaloniki to Meteora take?", answer: "It's a long-distance journey, generally planned as a full day given the distance involved." },
          { question: "Can I do Meteora as a day trip from Thessaloniki?", answer: "Yes, though given the distance many visitors prefer an overnight stay — mention your preference when requesting a quote." },
          { question: "Can you arrange a transfer for a group visiting Meteora?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Thessaloniki to Meteora Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτική Μεταφορά Θεσσαλονίκη – Μετέωρα – Κλείστε το Ταξίδι σας",
        description: "Κλείστε ιδιωτική μεταφορά ή εκδρομή από τη Θεσσαλονίκη προς τα μοναστήρια πάνω σε βράχους των Μετεώρων. Άνετη μεταφορά από πόρτα σε πόρτα.",
      },
      breadcrumbLabel: "Θεσσαλονίκη προς Μετέωρα",
      hero: {
        eyebrow: "Θεσσαλονίκη → Μετέωρα",
        title: "Ιδιωτική Μεταφορά Θεσσαλονίκη – Μετέωρα",
        description: "Μια ιδιωτική μεταφορά από τη Θεσσαλονίκη προς τα μοναστήρια πάνω σε βράχους των Μετεώρων, κοντά στην Καλαμπάκα στη Θεσσαλία.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από τη Θεσσαλονίκη προς τα Μετέωρα",
        paragraphs: [
          "Τα Μετέωρα είναι προορισμός μεγάλης απόστασης από τη Θεσσαλονίκη, προσβάσιμος μέσω του αυτοκινητόδρομου Α2/Ε92 προς δυσμάς και την Καλαμπάκα. Θεωρείται γενικά ολοήμερη εκδρομή ή διανυκτέρευση παρά σύντομη εξόρμηση, δεδομένης της απόστασης.",
          "Λόγω της διάρκειας του ταξιδιού, οι περισσότεροι επισκέπτες είτε οργανώνουν μονόδρομη ιδιωτική μεταφορά ως μέρος ενός μεγαλύτερου προγράμματος, είτε μια πλήρη ιδιωτική ημερήσια εκδρομή με χρόνο για εξερεύνηση των μοναστηριών πριν την επιστροφή. Αναφέρετε ποια προτιμάτε κατά την αίτηση προσφοράς.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Ένα ταξίδι μεγάλης απόστασης, που συνήθως σχεδιάζεται ως ολόκληρη ημέρα δεδομένης της απόστασης από τη Θεσσαλονίκη." },
          { title: "Διαδρομή", description: "Μέσω του αυτοκινητόδρομου Α2/Ε92 προς δυσμάς και την Καλαμπάκα και τα μοναστήρια των Μετεώρων." },
          { title: "Μονόδρομη ή Εκδρομή", description: "Ενημερώστε μας αν χρειάζεστε μονόδρομη μεταφορά ή εκδρομή με επιστροφή κατά την αίτηση προσφοράς." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Ταξίδια με Πολλαπλές Στάσεις", description: "Χρησιμοποιήστε αυτή τη μεταφορά ως μέρος ενός ευρύτερου ταξιδιού στην Ελλάδα, συνεχίζοντας από τη Θεσσαλονίκη." },
          { title: "Επισκέπτες Ημερήσιας Εκδρομής", description: "Δείτε τα μοναστήρια και επιστρέψτε στη Θεσσαλονίκη την ίδια μέρα, με το όχημα να περιμένει." },
          { title: "Οικογένειες & Ομάδες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για το μεγάλο ταξίδι." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τα Μετέωρα",
        items: [
          { label: "Μετέωρα", href: "/el/proorismos/meteora/", description: "Δείτε την επισκόπηση προορισμού μας για τα Μετέωρα." },
          { label: "Ημερήσιες Εκδρομές από τη Θεσσαλονίκη", href: "/el/idiotikes-ekdromes-thessaloniki/", description: "Δείτε το πλήρες φάσμα ιδιωτικών εκδρομών μας από τη Θεσσαλονίκη." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Θεσσαλονίκη προς Όλυμπο", href: "/el/diadromi/thessaloniki-olympos/", description: "Μια συντομότερη εκδρομή προς τα παράλια στη διαδρομή νότια." },
          { label: "Αθήνα προς Μετέωρα", href: "/el/diadromi/athina-meteora/", description: "Η αντίστοιχη διαδρομή από την Αθήνα." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από τη Θεσσαλονίκη στα Μετέωρα;", answer: "Είναι ταξίδι μεγάλης απόστασης, που συνήθως σχεδιάζεται ως ολόκληρη ημέρα δεδομένης της απόστασης." },
          { question: "Μπορώ να κάνω τα Μετέωρα ως ημερήσια εκδρομή από τη Θεσσαλονίκη;", answer: "Ναι, αν και δεδομένης της απόστασης πολλοί επισκέπτες προτιμούν διανυκτέρευση — αναφέρετε την προτίμησή σας κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που επισκέπτεται τα Μετέωρα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Θεσσαλονίκη – Μετέωρα;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiMountOlympus: {
    en: {
      meta: {
        title: "Thessaloniki to Mount Olympus Transfer – Book Your Day Trip",
        description: "Book a private transfer or day trip from Thessaloniki to Litochoro, the gateway town at the foot of Mount Olympus.",
      },
      breadcrumbLabel: "Thessaloniki to Mount Olympus",
      hero: {
        eyebrow: "Thessaloniki → Mount Olympus",
        title: "Thessaloniki to Mount Olympus Transfer",
        description: "A private transfer from Thessaloniki to Litochoro, the gateway town at the foot of Mount Olympus.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki to Mount Olympus",
        paragraphs: [
          "Mount Olympus, Greece's highest mountain, is reached from Thessaloniki via the A1 motorway south toward Litochoro, the town that serves as the main gateway for visitors. It's a popular day trip, whether for hiking the lower trails, visiting the town itself, or simply seeing the mountain up close.",
          "This transfer can be booked as a one-way journey — useful if you're continuing further south afterward — or as a return day trip with the vehicle waiting while you explore."
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Around an hour's drive from Thessaloniki via the A1 motorway, tolls apply." },
          { title: "Route", description: "South along the A1 motorway toward Litochoro." },
          { title: "One-Way or Day Trip", description: "Let us know whether you need a one-way transfer or a return day trip." },
          { title: "Hiking Plans", description: "Mention if you're planning to hike so pickup timing can be planned around it." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Day-Trip Visitors", description: "See Litochoro and the lower slopes of Mount Olympus and return to Thessaloniki the same day." },
          { title: "Hikers", description: "A private transfer to the trailhead area, with flexible timing around your hike." },
          { title: "Onward Travellers", description: "A one-way transfer for those continuing further south afterward." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Northern Greece",
        items: [
          { label: "Thessaloniki Day Trips", href: "/thessaloniki-day-trips/", description: "See our full range of private day trips from Thessaloniki." },
          { label: "Thessaloniki", href: "/city/thessaloniki/", description: "See our overview of transfers across Thessaloniki." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki to Meteora", href: "/route/thessaloniki-to-meteora/", description: "A longer day trip further west." },
          { label: "Thessaloniki to Vergina & Pella", href: "/route/thessaloniki-to-vergina-pella/", description: "A shorter historical day trip." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Thessaloniki to Mount Olympus take?", answer: "Around an hour's drive via the A1 motorway to Litochoro, depending on traffic." },
          { question: "Can this be booked as a day trip with a return journey?", answer: "Yes, mention that you'd like a return day trip when requesting a quote." },
          { question: "Can you wait while I hike?", answer: "Mention your hiking plans when requesting a quote so pickup timing can be arranged accordingly." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Thessaloniki to Mount Olympus Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Θεσσαλονίκη – Όλυμπος – Κλείστε την Εκδρομή σας",
        description: "Κλείστε ιδιωτική μεταφορά ή εκδρομή από τη Θεσσαλονίκη προς το Λιτόχωρο, την πύλη-πόλη στους πρόποδες του Ολύμπου.",
      },
      breadcrumbLabel: "Θεσσαλονίκη προς Όλυμπο",
      hero: {
        eyebrow: "Θεσσαλονίκη → Όλυμπος",
        title: "Μεταφορά Θεσσαλονίκη – Όλυμπος",
        description: "Μια ιδιωτική μεταφορά από τη Θεσσαλονίκη προς το Λιτόχωρο, την πύλη-πόλη στους πρόποδες του Ολύμπου.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από τη Θεσσαλονίκη προς τον Όλυμπο",
        paragraphs: [
          "Ο Όλυμπος, το ψηλότερο βουνό της Ελλάδας, προσεγγίζεται από τη Θεσσαλονίκη μέσω του αυτοκινητόδρομου Α1 προς νότο, προς το Λιτόχωρο, την πόλη που λειτουργεί ως κύρια πύλη για τους επισκέπτες. Είναι δημοφιλής ημερήσια εκδρομή, είτε για πεζοπορία στα χαμηλότερα μονοπάτια, είτε για επίσκεψη στην ίδια την πόλη, είτε απλά για να δείτε το βουνό από κοντά.",
          "Αυτή η μεταφορά μπορεί να κλειστεί ως μονόδρομο ταξίδι — χρήσιμο αν συνεχίζετε πιο νότια μετά — ή ως εκδρομή με επιστροφή, με το όχημα να περιμένει όσο εξερευνάτε.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Περίπου μία ώρα οδήγησης από τη Θεσσαλονίκη μέσω του αυτοκινητόδρομου Α1, με διόδια." },
          { title: "Διαδρομή", description: "Νότια κατά μήκος του αυτοκινητόδρομου Α1 προς το Λιτόχωρο." },
          { title: "Μονόδρομη ή Εκδρομή", description: "Ενημερώστε μας αν χρειάζεστε μονόδρομη μεταφορά ή εκδρομή με επιστροφή." },
          { title: "Σχέδια Πεζοπορίας", description: "Αναφέρετε αν σχεδιάζετε πεζοπορία ώστε ο χρονισμός παραλαβής να προγραμματιστεί ανάλογα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Επισκέπτες Ημερήσιας Εκδρομής", description: "Δείτε το Λιτόχωρο και τις χαμηλότερες πλαγιές του Ολύμπου και επιστρέψτε στη Θεσσαλονίκη την ίδια μέρα." },
          { title: "Πεζοπόροι", description: "Ιδιωτική μεταφορά προς την περιοχή εκκίνησης μονοπατιών, με ευέλικτο χρονισμό γύρω από την πεζοπορία σας." },
          { title: "Ταξιδιώτες σε Συνέχεια", description: "Μονόδρομη μεταφορά για όσους συνεχίζουν πιο νότια μετά." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Βόρεια Ελλάδα",
        items: [
          { label: "Ημερήσιες Εκδρομές από τη Θεσσαλονίκη", href: "/el/idiotikes-ekdromes-thessaloniki/", description: "Δείτε το πλήρες φάσμα ιδιωτικών εκδρομών μας από τη Θεσσαλονίκη." },
          { label: "Θεσσαλονίκη", href: "/el/poli/thessaloniki/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλη τη Θεσσαλονίκη." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Θεσσαλονίκη προς Μετέωρα", href: "/el/diadromi/thessaloniki-meteora/", description: "Μια μεγαλύτερη εκδρομή πιο δυτικά." },
          { label: "Θεσσαλονίκη προς Βεργίνα & Πέλλα", href: "/el/diadromi/thessaloniki-vergina-pella/", description: "Μια συντομότερη ιστορική εκδρομή." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από τη Θεσσαλονίκη στον Όλυμπο;", answer: "Περίπου μία ώρα οδήγησης μέσω του αυτοκινητόδρομου Α1 προς το Λιτόχωρο, ανάλογα με την κίνηση." },
          { question: "Μπορεί αυτό να κλειστεί ως εκδρομή με επιστροφή;", answer: "Ναι, αναφέρετε ότι θέλετε εκδρομή με επιστροφή κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να περιμένετε όσο κάνω πεζοπορία;", answer: "Αναφέρετε τα σχέδια πεζοπορίας σας κατά την αίτηση προσφοράς ώστε ο χρονισμός παραλαβής να οργανωθεί ανάλογα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Θεσσαλονίκη – Όλυμπος;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiVerginaPella: {
    en: {
      meta: {
        title: "Thessaloniki to Vergina & Pella Day Trip – Ancient Macedonia",
        description: "Book a private day trip from Thessaloniki to the ancient Macedonian sites of Vergina and Pella. Comfortable door-to-door travel.",
      },
      breadcrumbLabel: "Thessaloniki to Vergina & Pella",
      hero: {
        eyebrow: "Thessaloniki → Vergina & Pella",
        title: "Thessaloniki to Vergina & Pella Day Trip",
        description: "A private day trip from Thessaloniki to the ancient Macedonian sites of Vergina and Pella.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki to Vergina & Pella",
        paragraphs: [
          "Vergina, site of the royal tombs of ancient Macedonia, and Pella, birthplace of Alexander the Great and once the Macedonian capital, are both within reach of Thessaloniki and commonly visited together as a single history-focused day trip.",
          "Since the two sites are in different directions from central Thessaloniki, a private transfer lets you visit both in one day without relying on separate public transport connections, with the vehicle and driver available for the whole itinerary."
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Both sites are within a roughly 40 to 80 minute drive of Thessaloniki, depending on the route taken." },
          { title: "Itinerary", description: "Most visitors combine both sites into a single day, though either can be visited on its own." },
          { title: "Time at Each Site", description: "Let us know how much time you'd like at each location when requesting a quote." },
          { title: "Return Timing", description: "The vehicle waits or returns at an agreed time to bring you back to Thessaloniki." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "History & Archaeology Visitors", description: "See two of Macedonia's most significant ancient sites in a single day." },
          { title: "Flexible Itineraries", description: "Visit both sites, or focus on just one, depending on your interests and time." },
          { title: "Families & Groups", description: "A private vehicle keeps your group together for the whole day." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Northern Greece",
        items: [
          { label: "Thessaloniki Day Trips", href: "/thessaloniki-day-trips/", description: "See our full range of private day trips from Thessaloniki." },
          { label: "Thessaloniki", href: "/city/thessaloniki/", description: "See our overview of transfers across Thessaloniki." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki to Mount Olympus", href: "/route/thessaloniki-to-mount-olympus/", description: "Another popular day trip from Thessaloniki." },
          { label: "Thessaloniki to Kavala", href: "/route/thessaloniki-to-kavala/", description: "A longer intercity transfer further east." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I visit both Vergina and Pella in one day trip?", answer: "Yes, the two sites are commonly combined into a single day trip — mention this when requesting a quote." },
          { question: "Can I visit just one of the two sites?", answer: "Yes, mention your preference when requesting a quote and the itinerary can be adjusted." },
          { question: "How much time do I get at each site?", answer: "This depends on your preferences — mention how much time you'd like at each location when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Vergina & Pella Day Trip?",
        description: "Tell us your itinerary preferences and passenger details, and request your private day trip quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Εκδρομή Θεσσαλονίκη – Βεργίνα & Πέλλα – Αρχαία Μακεδονία",
        description: "Κλείστε ιδιωτική ημερήσια εκδρομή από τη Θεσσαλονίκη προς τους αρχαίους μακεδονικούς χώρους της Βεργίνας και της Πέλλας.",
      },
      breadcrumbLabel: "Θεσσαλονίκη προς Βεργίνα & Πέλλα",
      hero: {
        eyebrow: "Θεσσαλονίκη → Βεργίνα & Πέλλα",
        title: "Εκδρομή Θεσσαλονίκη – Βεργίνα & Πέλλα",
        description: "Μια ιδιωτική ημερήσια εκδρομή από τη Θεσσαλονίκη προς τους αρχαίους μακεδονικούς χώρους της Βεργίνας και της Πέλλας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από τη Θεσσαλονίκη προς τη Βεργίνα & την Πέλλα",
        paragraphs: [
          "Η Βεργίνα, χώρος των βασιλικών τάφων της αρχαίας Μακεδονίας, και η Πέλλα, γενέτειρα του Μεγάλου Αλεξάνδρου και πρώην μακεδονική πρωτεύουσα, βρίσκονται και οι δύο σε προσιτή απόσταση από τη Θεσσαλονίκη και συχνά επισκέπτονται μαζί ως μία ιστορική ημερήσια εκδρομή.",
          "Καθώς οι δύο χώροι βρίσκονται σε διαφορετικές κατευθύνσεις από το κέντρο της Θεσσαλονίκης, μια ιδιωτική μεταφορά σας επιτρέπει να επισκεφθείτε και τους δύο σε μία ημέρα χωρίς να βασιστείτε σε ξεχωριστές συνδέσεις δημόσιων μέσων, με το όχημα και τον οδηγό διαθέσιμα για ολόκληρο το πρόγραμμα.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Και οι δύο χώροι βρίσκονται σε περίπου 40 έως 80 λεπτά οδήγησης από τη Θεσσαλονίκη, ανάλογα με τη διαδρομή." },
          { title: "Πρόγραμμα", description: "Οι περισσότεροι επισκέπτες συνδυάζουν και τους δύο χώρους σε μία ημέρα, αν και ο καθένας μπορεί να επισκεφθεί ξεχωριστά." },
          { title: "Χρόνος σε Κάθε Χώρο", description: "Ενημερώστε μας πόσο χρόνο θα θέλατε σε κάθε τοποθεσία κατά την αίτηση προσφοράς." },
          { title: "Χρονισμός Επιστροφής", description: "Το όχημα περιμένει ή επιστρέφει σε συμφωνημένη ώρα για να σας φέρει πίσω στη Θεσσαλονίκη." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Επισκέπτες Ιστορίας & Αρχαιολογίας", description: "Δείτε δύο από τους σημαντικότερους αρχαίους χώρους της Μακεδονίας σε μία μέρα." },
          { title: "Ευέλικτο Πρόγραμμα", description: "Επισκεφθείτε και τους δύο χώρους, ή εστιάστε μόνο σε έναν, ανάλογα με τα ενδιαφέροντα και τον χρόνο σας." },
          { title: "Οικογένειες & Ομάδες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα σας μαζί για ολόκληρη την ημέρα." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Βόρεια Ελλάδα",
        items: [
          { label: "Ημερήσιες Εκδρομές από τη Θεσσαλονίκη", href: "/el/idiotikes-ekdromes-thessaloniki/", description: "Δείτε το πλήρες φάσμα ιδιωτικών εκδρομών μας από τη Θεσσαλονίκη." },
          { label: "Θεσσαλονίκη", href: "/el/poli/thessaloniki/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλη τη Θεσσαλονίκη." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Θεσσαλονίκη προς Όλυμπο", href: "/el/diadromi/thessaloniki-olympos/", description: "Μια άλλη δημοφιλής εκδρομή από τη Θεσσαλονίκη." },
          { label: "Θεσσαλονίκη προς Καβάλα", href: "/el/diadromi/thessaloniki-kavala/", description: "Μια μεγαλύτερη μεταφορά μεταξύ πόλεων πιο ανατολικά." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να επισκεφθώ και τη Βεργίνα και την Πέλλα σε μία εκδρομή;", answer: "Ναι, οι δύο χώροι συνήθως συνδυάζονται σε μία ημερήσια εκδρομή — αναφέρετέ το κατά την αίτηση προσφοράς." },
          { question: "Μπορώ να επισκεφθώ μόνο έναν από τους δύο χώρους;", answer: "Ναι, αναφέρετε την προτίμησή σας κατά την αίτηση προσφοράς και το πρόγραμμα μπορεί να προσαρμοστεί." },
          { question: "Πόσο χρόνο έχω σε κάθε χώρο;", answer: "Αυτό εξαρτάται από τις προτιμήσεις σας — αναφέρετε πόσο χρόνο θα θέλατε σε κάθε τοποθεσία κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε την Εκδρομή σας Βεργίνα & Πέλλα;",
        description: "Πείτε μας τις προτιμήσεις προγράμματος και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής εκδρομής σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiKavala: {
    en: {
      meta: {
        title: "Thessaloniki to Kavala Private Transfer – Book Your Ride",
        description: "Book a private long-distance transfer from Thessaloniki to the port city of Kavala. Comfortable door-to-door travel.",
      },
      breadcrumbLabel: "Thessaloniki to Kavala",
      hero: {
        eyebrow: "Thessaloniki → Kavala",
        title: "Thessaloniki to Kavala Private Transfer",
        description: "A private long-distance transfer from Thessaloniki to the port city of Kavala in eastern Macedonia.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki to Kavala",
        paragraphs: [
          "Kavala is a port city east of Thessaloniki, reached via the Egnatia Odos motorway. It's known for its old town and harbour, and also serves as a ferry gateway to the northeastern Aegean islands including Thasos.",
          "Given the distance, this is a long-distance private transfer rather than a short city hop — most travellers book it as part of a wider itinerary connecting Thessaloniki with destinations further east.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "A long-distance journey via the Egnatia Odos motorway, typically around an hour and a half to two hours depending on traffic." },
          { title: "Route", description: "East along the Egnatia Odos toward Kavala." },
          { title: "Onward Ferry Connections", description: "Mention if you're connecting to a ferry from Kavala when requesting a quote." },
          { title: "Luggage Space", description: "Let us know your luggage so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Ferry Connections", description: "Travellers continuing on to Thasos or other northeastern Aegean islands from Kavala." },
          { title: "Multi-Stop Itineraries", description: "Use this transfer as part of a wider trip across northern Greece." },
          { title: "Families & Groups", description: "A private vehicle keeps your group and luggage together for the long journey." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Northern Greece",
        items: [
          { label: "Thessaloniki Day Trips", href: "/thessaloniki-day-trips/", description: "See our full range of private day trips from Thessaloniki." },
          { label: "Thessaloniki", href: "/city/thessaloniki/", description: "See our overview of transfers across Thessaloniki." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki to Vergina & Pella", href: "/route/thessaloniki-to-vergina-pella/", description: "A shorter historical day trip." },
          { label: "Thessaloniki to Athens", href: "/route/athens-to-thessaloniki/", description: "A long-distance transfer connecting Greece's two largest cities." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Thessaloniki to Kavala take?", answer: "It's a long-distance journey via the Egnatia Odos motorway, typically around an hour and a half to two hours depending on traffic." },
          { question: "Can I be dropped at the ferry port in Kavala?", answer: "Yes, mention if you're connecting to a ferry when requesting a quote." },
          { question: "Can you arrange a transfer for a group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Thessaloniki to Kavala Transfer?",
        description: "Tell us your pickup, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτική Μεταφορά Θεσσαλονίκη – Καβάλα – Κλείστε το Ταξίδι σας",
        description: "Κλείστε ιδιωτική μεταφορά μεγάλης απόστασης από τη Θεσσαλονίκη προς τη λιμανιού πόλη της Καβάλας. Άνετη μεταφορά από πόρτα σε πόρτα.",
      },
      breadcrumbLabel: "Θεσσαλονίκη προς Καβάλα",
      hero: {
        eyebrow: "Θεσσαλονίκη → Καβάλα",
        title: "Ιδιωτική Μεταφορά Θεσσαλονίκη – Καβάλα",
        description: "Μια ιδιωτική μεταφορά μεγάλης απόστασης από τη Θεσσαλονίκη προς τη λιμανιού πόλη της Καβάλας στην ανατολική Μακεδονία.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από τη Θεσσαλονίκη προς την Καβάλα",
        paragraphs: [
          "Η Καβάλα είναι λιμανιού πόλη ανατολικά της Θεσσαλονίκης, προσβάσιμη μέσω της Εγνατίας Οδού. Είναι γνωστή για την παλιά πόλη και το λιμάνι της, και λειτουργεί επίσης ως πύλη ferry προς τα νησιά του βορειοανατολικού Αιγαίου, συμπεριλαμβανομένης της Θάσου.",
          "Δεδομένης της απόστασης, αυτή είναι ιδιωτική μεταφορά μεγάλης απόστασης παρά σύντομη μετακίνηση μεταξύ πόλεων — οι περισσότεροι ταξιδιώτες την κλείνουν ως μέρος ενός ευρύτερου προγράμματος που συνδέει τη Θεσσαλονίκη με προορισμούς πιο ανατολικά.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Ταξίδι μεγάλης απόστασης μέσω της Εγνατίας Οδού, συνήθως περίπου μιάμιση έως δύο ώρες ανάλογα με την κίνηση." },
          { title: "Διαδρομή", description: "Ανατολικά κατά μήκος της Εγνατίας Οδού προς την Καβάλα." },
          { title: "Σύνδεση με Ferry", description: "Αναφέρετε αν συνδέεστε με ferry από την Καβάλα κατά την αίτηση προσφοράς." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Συνδέσεις με Ferry", description: "Ταξιδιώτες που συνεχίζουν προς τη Θάσο ή άλλα νησιά του βορειοανατολικού Αιγαίου από την Καβάλα." },
          { title: "Ταξίδια με Πολλαπλές Στάσεις", description: "Χρησιμοποιήστε αυτή τη μεταφορά ως μέρος ενός ευρύτερου ταξιδιού στη βόρεια Ελλάδα." },
          { title: "Οικογένειες & Ομάδες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για το μεγάλο ταξίδι." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Βόρεια Ελλάδα",
        items: [
          { label: "Ημερήσιες Εκδρομές από τη Θεσσαλονίκη", href: "/el/idiotikes-ekdromes-thessaloniki/", description: "Δείτε το πλήρες φάσμα ιδιωτικών εκδρομών μας από τη Θεσσαλονίκη." },
          { label: "Θεσσαλονίκη", href: "/el/poli/thessaloniki/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλη τη Θεσσαλονίκη." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Θεσσαλονίκη προς Βεργίνα & Πέλλα", href: "/el/diadromi/thessaloniki-vergina-pella/", description: "Μια συντομότερη ιστορική εκδρομή." },
          { label: "Θεσσαλονίκη προς Αθήνα", href: "/el/diadromi/athina-thessaloniki/", description: "Μια μεταφορά μεγάλης απόστασης που συνδέει τις δύο μεγαλύτερες πόλεις της Ελλάδας." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από τη Θεσσαλονίκη στην Καβάλα;", answer: "Είναι ταξίδι μεγάλης απόστασης μέσω της Εγνατίας Οδού, συνήθως περίπου μιάμιση έως δύο ώρες ανάλογα με την κίνηση." },
          { question: "Μπορώ να παραδοθώ στο λιμάνι ferry στην Καβάλα;", answer: "Ναι, αναφέρετε αν συνδέεστε με ferry κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Θεσσαλονίκη – Καβάλα;",
        description: "Πείτε μας το σημείο παραλαβής, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiAirportSaniResort: {
    en: {
      meta: {
        title: "Thessaloniki Airport to Sani Resort Transfer – Private Car",
        description: "Book a private transfer between Thessaloniki Airport and Sani Resort on the Kassandra coast, home to Sani Beach, Porto Sani and Sani Dunes.",
      },
      breadcrumbLabel: "Thessaloniki Airport to Sani Resort",
      hero: {
        eyebrow: "Thessaloniki Airport → Sani Resort",
        title: "Thessaloniki Airport to Sani Resort Transfer",
        description: "A direct private transfer from Thessaloniki Airport to Sani Resort, a large resort complex on Kassandra's western coast.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki Airport to Sani Resort",
        paragraphs: [
          "Sani Resort is a large beachfront complex on the western coast of the Kassandra peninsula, made up of several hotels — including Sani Beach, Porto Sani, Sani Club, Sani Dunes and Sani Asterias — set around a marina and pine-forested grounds. It's a common direct-transfer destination for visitors flying into Thessaloniki for a resort-based holiday.",
          "Because it sits on Kassandra's western side, the route to Sani Resort follows the same isthmus road as other Kassandra transfers before branching toward the coast. Let us know which of the resort's hotels you're staying at so your drop-off can be planned accordingly.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Broadly similar to other transfers along the Kassandra coast — mention your exact hotel within the resort when requesting a quote." },
          { title: "Route", description: "Via Nea Moudania and the Kassandra coast road toward the resort's western shore." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Which Sani Hotel", description: "Sani Resort includes several separate hotels — let us know which one you're staying at." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Resort Holiday Arrivals", description: "Head straight to Sani Resort after landing, without a stop elsewhere." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-resort or resort-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Kassandra",
        items: [
          { label: "Kassandra", href: "/destination/kassandra/", description: "See our destination overview of Kassandra." },
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki Airport to Kassandra", href: "/route/thessaloniki-airport-to-kassandra/", description: "Our general transfer route to the Kassandra peninsula." },
          { label: "Thessaloniki Airport to Porto Carras Grand Resort", href: "/route/thessaloniki-airport-to-porto-carras/", description: "The equivalent transfer to Sithonia's major resort." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Thessaloniki Airport to Sani Resort?", answer: "Book a direct private transfer — let us know which of the resort's hotels you're staying at when requesting a quote." },
          { question: "Does Sani Resort have more than one hotel?", answer: "Yes, it's a complex of several separate hotels around a shared marina — mention your specific hotel so your drop-off can be planned accurately." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — resort to airport as well as airport to resort." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Sani Resort Transfer?",
        description: "Tell us your flight details, hotel within the resort and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Sani Resort – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Θεσσαλονίκης και του Sani Resort στην ακτή της Κασσάνδρας, με Sani Beach, Porto Sani και Sani Dunes.",
      },
      breadcrumbLabel: "Αεροδρόμιο Θεσσαλονίκης προς Sani Resort",
      hero: {
        eyebrow: "Αεροδρόμιο Θεσσαλονίκης → Sani Resort",
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Sani Resort",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το Sani Resort, ένα μεγάλο θέρετρο στη δυτική ακτή της Κασσάνδρας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Θεσσαλονίκης προς το Sani Resort",
        paragraphs: [
          "Το Sani Resort είναι ένα μεγάλο παραθαλάσσιο συγκρότημα στη δυτική ακτή της χερσονήσου της Κασσάνδρας, αποτελούμενο από πολλά ξενοδοχεία — μεταξύ αυτών τα Sani Beach, Porto Sani, Sani Club, Sani Dunes και Sani Asterias — γύρω από μια μαρίνα και δασωμένη έκταση. Είναι συνηθισμένος προορισμός απευθείας μεταφοράς για επισκέπτες που πετούν προς τη Θεσσαλονίκη για διακοπές σε θέρετρο.",
          "Καθώς βρίσκεται στη δυτική πλευρά της Κασσάνδρας, η διαδρομή προς το Sani Resort ακολουθεί τον ίδιο δρόμο του ισθμού με άλλες μεταφορές προς την Κασσάνδρα πριν στραφεί προς την ακτή. Ενημερώστε μας σε ποιο από τα ξενοδοχεία του θέρετρου μένετε ώστε να σχεδιαστεί ανάλογα η παράδοσή σας.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Γενικά παρόμοια με άλλες μεταφορές κατά μήκος της ακτής της Κασσάνδρας — αναφέρετε το ακριβές ξενοδοχείο εντός του θέρετρου κατά την αίτηση προσφοράς." },
          { title: "Διαδρομή", description: "Μέσω των Νέων Μουδανιών και του παράκτιου δρόμου της Κασσάνδρας προς τη δυτική ακτή του θέρετρου." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Ποιο Ξενοδοχείο Sani", description: "Το Sani Resort περιλαμβάνει πολλά ξεχωριστά ξενοδοχεία — ενημερώστε μας σε ποιο μένετε." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Αφίξεις για Διακοπές σε Θέρετρο", description: "Κατευθυνθείτε απευθείας στο Sani Resort μετά την προσγείωση, χωρίς στάση αλλού." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς θέρετρο ή θέρετρο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε την Κασσάνδρα",
        items: [
          { label: "Κασσάνδρα", href: "/el/proorismos/kassandra/", description: "Δείτε την επισκόπηση προορισμού μας για την Κασσάνδρα." },
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Κασσάνδρα", href: "/el/diadromi/aerodromio-thessalonikis-kassandra/", description: "Η γενική μας διαδρομή μεταφοράς προς τη χερσόνησο της Κασσάνδρας." },
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Porto Carras Grand Resort", href: "/el/diadromi/aerodromio-thessalonikis-porto-carras/", description: "Η αντίστοιχη μεταφορά προς το μεγάλο θέρετρο της Σιθωνίας." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Θεσσαλονίκης στο Sani Resort;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — ενημερώστε μας σε ποιο από τα ξενοδοχεία του θέρετρου μένετε κατά την αίτηση προσφοράς." },
          { question: "Έχει το Sani Resort περισσότερα από ένα ξενοδοχεία;", answer: "Ναι, είναι ένα συγκρότημα πολλών ξεχωριστών ξενοδοχείων γύρω από κοινή μαρίνα — αναφέρετε το συγκεκριμένο ξενοδοχείο σας ώστε η παράδοσή σας να σχεδιαστεί με ακρίβεια." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις — θέρετρο προς αεροδρόμιο καθώς και αεροδρόμιο προς θέρετρο." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Sani Resort;",
        description: "Πείτε μας τα στοιχεία πτήσης, το ξενοδοχείο εντός του θέρετρου και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiAirportPortoCarras: {
    en: {
      meta: {
        title: "Thessaloniki Airport to Porto Carras Grand Resort Transfer",
        description: "Book a private transfer between Thessaloniki Airport and Porto Carras Grand Resort near Neos Marmaras on the Sithonia peninsula.",
      },
      breadcrumbLabel: "Thessaloniki Airport to Porto Carras",
      hero: {
        eyebrow: "Thessaloniki Airport → Porto Carras",
        title: "Thessaloniki Airport to Porto Carras Grand Resort Transfer",
        description: "A direct private transfer from Thessaloniki Airport to Porto Carras Grand Resort, near Neos Marmaras on Sithonia's west coast.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki Airport to Porto Carras",
        paragraphs: [
          "Porto Carras Grand Resort is a large integrated resort on Sithonia's western coast, near the town of Neos Marmaras, with its own marina and grounds. As with other Sithonia destinations, it's further from the airport than Kassandra, so most visitors arrange a direct private transfer rather than relying on public transport with resort luggage.",
          "The route follows the same road toward Sithonia as other transfers to the peninsula, continuing to the resort's location near Neos Marmaras on the west coast.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Broadly similar to other transfers to the Neos Marmaras area of Sithonia." },
          { title: "Route", description: "Via Nea Moudania and the Sithonia coast road toward Neos Marmaras." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Resort Holiday Arrivals", description: "Head straight to Porto Carras after landing, without a stop elsewhere." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-resort or resort-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Sithonia",
        items: [
          { label: "Sithonia", href: "/destination/sithonia/", description: "See our destination overview of Sithonia." },
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki Airport to Sithonia", href: "/route/thessaloniki-airport-to-sithonia/", description: "Our general transfer route to the Sithonia peninsula." },
          { label: "Thessaloniki Airport to Sani Resort", href: "/route/thessaloniki-airport-to-sani-resort/", description: "The equivalent transfer to Kassandra's major resort." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Thessaloniki Airport to Porto Carras Grand Resort?", answer: "Book a direct private transfer — see this page for journey details." },
          { question: "Is Porto Carras near Neos Marmaras?", answer: "Yes, the resort sits on Sithonia's west coast near the town of Neos Marmaras." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — resort to airport as well as airport to resort." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Porto Carras Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Porto Carras Grand Resort",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Θεσσαλονίκης και του Porto Carras Grand Resort κοντά στις Νέες Μαρμαράς στη χερσόνησο της Σιθωνίας.",
      },
      breadcrumbLabel: "Αεροδρόμιο Θεσσαλονίκης προς Porto Carras",
      hero: {
        eyebrow: "Αεροδρόμιο Θεσσαλονίκης → Porto Carras",
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Porto Carras Grand Resort",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το Porto Carras Grand Resort, κοντά στις Νέες Μαρμαράς στη δυτική ακτή της Σιθωνίας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Θεσσαλονίκης προς το Porto Carras",
        paragraphs: [
          "Το Porto Carras Grand Resort είναι ένα μεγάλο ολοκληρωμένο θέρετρο στη δυτική ακτή της Σιθωνίας, κοντά στην πόλη των Νέων Μαρμαρών, με δική του μαρίνα και έκταση. Όπως και με άλλους προορισμούς της Σιθωνίας, βρίσκεται πιο μακριά από το αεροδρόμιο σε σχέση με την Κασσάνδρα, οπότε οι περισσότεροι επισκέπτες οργανώνουν απευθείας ιδιωτική μεταφορά αντί να βασιστούν σε δημόσια μέσα με αποσκευές θέρετρου.",
          "Η διαδρομή ακολουθεί τον ίδιο δρόμο προς τη Σιθωνία με άλλες μεταφορές προς τη χερσόνησο, συνεχίζοντας προς τη θέση του θέρετρου κοντά στις Νέες Μαρμαράς στη δυτική ακτή.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Γενικά παρόμοια με άλλες μεταφορές προς την περιοχή των Νέων Μαρμαρών στη Σιθωνία." },
          { title: "Διαδρομή", description: "Μέσω των Νέων Μουδανιών και του παράκτιου δρόμου της Σιθωνίας προς τις Νέες Μαρμαράς." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Αφίξεις για Διακοπές σε Θέρετρο", description: "Κατευθυνθείτε απευθείας στο Porto Carras μετά την προσγείωση, χωρίς στάση αλλού." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς θέρετρο ή θέρετρο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Σιθωνία",
        items: [
          { label: "Σιθωνία", href: "/el/proorismos/sithonia/", description: "Δείτε την επισκόπηση προορισμού μας για τη Σιθωνία." },
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Σιθωνία", href: "/el/diadromi/aerodromio-thessalonikis-sithonia/", description: "Η γενική μας διαδρομή μεταφοράς προς τη χερσόνησο της Σιθωνίας." },
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Sani Resort", href: "/el/diadromi/aerodromio-thessalonikis-sani-resort/", description: "Η αντίστοιχη μεταφορά προς το μεγάλο θέρετρο της Κασσάνδρας." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Θεσσαλονίκης στο Porto Carras Grand Resort;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — δείτε αυτή τη σελίδα για λεπτομέρειες ταξιδιού." },
          { question: "Είναι το Porto Carras κοντά στις Νέες Μαρμαράς;", answer: "Ναι, το θέρετρο βρίσκεται στη δυτική ακτή της Σιθωνίας κοντά στην πόλη των Νέων Μαρμαρών." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις — θέρετρο προς αεροδρόμιο καθώς και αεροδρόμιο προς θέρετρο." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Porto Carras;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiAirportElectraPalace: {
    en: {
      meta: {
        title: "Thessaloniki Airport to Electra Palace Transfer – Private Car",
        description: "Book a private transfer from Thessaloniki Airport to Electra Palace Thessaloniki, on Aristotelous Square in the city centre.",
      },
      breadcrumbLabel: "Thessaloniki Airport to Electra Palace",
      hero: {
        eyebrow: "Thessaloniki Airport → Electra Palace",
        title: "Thessaloniki Airport to Electra Palace Transfer",
        description: "A direct private transfer from Thessaloniki Airport to Electra Palace, on Aristotelous Square in the heart of the city.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki Airport to Electra Palace",
        paragraphs: [
          "Electra Palace sits directly on Aristotelous Square, Thessaloniki's central waterfront square, within walking distance of the Church of Agia Sophia and the White Tower. It's one of the most central hotel addresses in the city, making it a common choice for visitors who want to be within easy reach of the main sights on foot.",
          "A private transfer from the airport takes you directly to the hotel's entrance on the square, avoiding the need to navigate the city centre with luggage after your flight.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "A city-centre transfer from the airport into central Thessoniki — share your flight details for accurate planning." },
          { title: "Drop-Off", description: "Directly at the hotel's entrance on Aristotelous Square." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "City-Centre Stays", description: "For visitors who want to explore Thessoniki's main sights on foot." },
          { title: "Business & Leisure Travellers", description: "A comfortable, direct transfer to one of the city's most central addresses." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Thessaloniki",
        items: [
          { label: "Thessaloniki", href: "/city/thessaloniki/", description: "See our overview of transfers across Thessaloniki." },
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki Airport to Mediterranean Palace", href: "/route/thessaloniki-airport-to-mediterranean-palace/", description: "Another central Thessaloniki hotel transfer." },
          { label: "Thessaloniki Airport to Makedonia Palace", href: "/route/thessaloniki-airport-to-makedonia-palace/", description: "A waterfront hotel transfer further east." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Thessaloniki Airport to Electra Palace?", answer: "Book a direct private transfer — see this page for journey details." },
          { question: "Is Electra Palace within walking distance of the main sights?", answer: "Yes, it sits directly on Aristotelous Square, within walking distance of the Church of Agia Sophia and the White Tower." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — hotel to airport as well as airport to hotel." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Electra Palace Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Electra Palace – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το Electra Palace, στην Πλατεία Αριστοτέλους στο κέντρο της πόλης.",
      },
      breadcrumbLabel: "Αεροδρόμιο Θεσσαλονίκης προς Electra Palace",
      hero: {
        eyebrow: "Αεροδρόμιο Θεσσαλονίκης → Electra Palace",
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Electra Palace",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το Electra Palace, στην Πλατεία Αριστοτέλους στην καρδιά της πόλης.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Θεσσαλονίκης προς το Electra Palace",
        paragraphs: [
          "Το Electra Palace βρίσκεται απευθείας στην Πλατεία Αριστοτέλους, την κεντρική παραθαλάσσια πλατεία της Θεσσαλονίκης, σε απόσταση βαδίσματος από τον Ιερό Ναό της Αγίας Σοφίας και τον Λευκό Πύργο. Είναι μία από τις πιο κεντρικές διευθύνσεις ξενοδοχείων στην πόλη.",
          "Μια ιδιωτική μεταφορά από το αεροδρόμιο σας μεταφέρει απευθείας στην είσοδο του ξενοδοχείου στην πλατεία, αποφεύγοντας την ανάγκη πλοήγησης στο κέντρο της πόλης με αποσκευές μετά την πτήση σας.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Μια μεταφορά από το αεροδρόμιο προς το κέντρο της Θεσσαλονίκης — αναφέρετε τα στοιχεία πτήσης σας για ακριβή προγραμματισμό." },
          { title: "Παράδοση", description: "Απευθείας στην είσοδο του ξενοδοχείου στην Πλατεία Αριστοτέλους." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Διαμονή στο Κέντρο", description: "Για επισκέπτες που θέλουν να εξερευνήσουν τα κύρια αξιοθέατα της Θεσσαλονίκης με τα πόδια." },
          { title: "Επαγγελματικοί & Ψυχαγωγικοί Ταξιδιώτες", description: "Μια άνετη, απευθείας μεταφορά προς μία από τις πιο κεντρικές διευθύνσεις της πόλης." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς ξενοδοχείο ή ξενοδοχείο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Θεσσαλονίκη",
        items: [
          { label: "Θεσσαλονίκη", href: "/el/poli/thessaloniki/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλη τη Θεσσαλονίκη." },
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Mediterranean Palace", href: "/el/diadromi/aerodromio-thessalonikis-mediterranean-palace/", description: "Άλλη κεντρική μεταφορά ξενοδοχείου της Θεσσαλονίκης." },
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Makedonia Palace", href: "/el/diadromi/aerodromio-thessalonikis-makedonia-palace/", description: "Μια παραθαλάσσια μεταφορά ξενοδοχείου πιο ανατολικά." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Θεσσαλονίκης στο Electra Palace;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — δείτε αυτή τη σελίδα για λεπτομέρειες ταξιδιού." },
          { question: "Είναι το Electra Palace σε απόσταση βαδίσματος από τα κύρια αξιοθέατα;", answer: "Ναι, βρίσκεται απευθείας στην Πλατεία Αριστοτέλους, σε απόσταση βαδίσματος από την Αγία Σοφία και τον Λευκό Πύργο." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Electra Palace;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiAirportMakedoniaPalace: {
    en: {
      meta: {
        title: "Thessaloniki Airport to Makedonia Palace Transfer",
        description: "Book a private transfer from Thessaloniki Airport to Makedonia Palace, on the eastern waterfront overlooking the Thermaic Gulf.",
      },
      breadcrumbLabel: "Thessaloniki Airport to Makedonia Palace",
      hero: {
        eyebrow: "Thessaloniki Airport → Makedonia Palace",
        title: "Thessaloniki Airport to Makedonia Palace Transfer",
        description: "A direct private transfer from Thessaloniki Airport to Makedonia Palace, on the eastern waterfront of the city.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki Airport to Makedonia Palace",
        paragraphs: [
          "Makedonia Palace sits on Megalou Alexandrou Avenue on Thessaloniki's eastern waterfront, with a full frontage onto the Thermaic Gulf. It's a longer-established landmark hotel, set apart from the Aristotelous Square hotel cluster by its waterfront position further along the coast.",
          "A private transfer from the airport takes you directly to the hotel, a straightforward route given the airport's own position southeast of the city along the same coastline.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "A direct transfer along the coast from the airport to the eastern waterfront." },
          { title: "Drop-Off", description: "Directly at the hotel on Megalou Alexandrou Avenue." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Waterfront Stays", description: "For visitors who want a Thermaic Gulf-facing hotel rather than a square-based address." },
          { title: "Business & Leisure Travellers", description: "A comfortable, direct transfer to a long-established landmark hotel." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Thessaloniki",
        items: [
          { label: "Thessaloniki", href: "/city/thessaloniki/", description: "See our overview of transfers across Thessaloniki." },
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki Airport to ON Residence", href: "/route/thessaloniki-airport-to-on-residence/", description: "Another waterfront hotel transfer." },
          { label: "Thessaloniki Airport to Electra Palace", href: "/route/thessaloniki-airport-to-electra-palace/", description: "A central square hotel transfer." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Thessaloniki Airport to Makedonia Palace?", answer: "Book a direct private transfer — see this page for journey details." },
          { question: "Is Makedonia Palace on the waterfront?", answer: "Yes, it sits on Megalou Alexandrou Avenue with a frontage onto the Thermaic Gulf." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — hotel to airport as well as airport to hotel." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Makedonia Palace Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Makedonia Palace",
        description: "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το Makedonia Palace, στην ανατολική παραλιακή με θέα στον Θερμαϊκό Κόλπο.",
      },
      breadcrumbLabel: "Αεροδρόμιο Θεσσαλονίκης προς Makedonia Palace",
      hero: {
        eyebrow: "Αεροδρόμιο Θεσσαλονίκης → Makedonia Palace",
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Makedonia Palace",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το Makedonia Palace, στην ανατολική παραλιακή της πόλης.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Θεσσαλονίκης προς το Makedonia Palace",
        paragraphs: [
          "Το Makedonia Palace βρίσκεται στη Λεωφόρο Μεγάλου Αλεξάνδρου, στην ανατολική παραλιακή της Θεσσαλονίκης, με πλήρη θέα στον Θερμαϊκό Κόλπο. Είναι ένα ξενοδοχείο-ορόσημο μεγαλύτερης παράδοσης, ξεχωριστό από το σύμπλεγμα ξενοδοχείων της Πλατείας Αριστοτέλους λόγω της παραλιακής του θέσης πιο μακριά στην ακτή.",
          "Μια ιδιωτική μεταφορά από το αεροδρόμιο σας μεταφέρει απευθείας στο ξενοδοχείο, μια απλή διαδρομή δεδομένης της θέσης του ίδιου του αεροδρομίου νοτιοανατολικά της πόλης κατά μήκος της ίδιας ακτογραμμής.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Μια απευθείας μεταφορά κατά μήκος της ακτής από το αεροδρόμιο προς την ανατολική παραλιακή." },
          { title: "Παράδοση", description: "Απευθείας στο ξενοδοχείο στη Λεωφόρο Μεγάλου Αλεξάνδρου." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Παραλιακή Διαμονή", description: "Για επισκέπτες που θέλουν ξενοδοχείο με θέα στον Θερμαϊκό αντί για διεύθυνση σε πλατεία." },
          { title: "Επαγγελματικοί & Ψυχαγωγικοί Ταξιδιώτες", description: "Μια άνετη, απευθείας μεταφορά προς ένα ξενοδοχείο-ορόσημο μεγάλης παράδοσης." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς ξενοδοχείο ή ξενοδοχείο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Θεσσαλονίκη",
        items: [
          { label: "Θεσσαλονίκη", href: "/el/poli/thessaloniki/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλη τη Θεσσαλονίκη." },
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς ON Residence", href: "/el/diadromi/aerodromio-thessalonikis-on-residence/", description: "Άλλη παραλιακή μεταφορά ξενοδοχείου." },
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Electra Palace", href: "/el/diadromi/aerodromio-thessalonikis-electra-palace/", description: "Μια κεντρική μεταφορά ξενοδοχείου στην πλατεία." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Θεσσαλονίκης στο Makedonia Palace;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — δείτε αυτή τη σελίδα για λεπτομέρειες ταξιδιού." },
          { question: "Είναι το Makedonia Palace στην παραλιακή;", answer: "Ναι, βρίσκεται στη Λεωφόρο Μεγάλου Αλεξάνδρου με θέα στον Θερμαϊκό Κόλπο." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Makedonia Palace;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiAirportOnResidence: {
    en: {
      meta: {
        title: "Thessaloniki Airport to ON Residence Transfer – Private Car",
        description: "Book a private transfer from Thessaloniki Airport to ON Residence, set in a restored 1920s mansion on the Nikis Avenue waterfront.",
      },
      breadcrumbLabel: "Thessaloniki Airport to ON Residence",
      hero: {
        eyebrow: "Thessaloniki Airport → ON Residence",
        title: "Thessaloniki Airport to ON Residence Transfer",
        description: "A direct private transfer from Thessaloniki Airport to ON Residence, on the Nikis Avenue waterfront.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki Airport to ON Residence",
        paragraphs: [
          "ON Residence occupies a restored 1920s mansion on Leoforos Nikis, Thessaloniki's waterfront promenade, giving it a character distinct from the city's larger hotel towers. Its location puts it within walking distance of the White Tower and the wider waterfront.",
          "A private transfer from the airport takes you directly to the hotel's entrance, avoiding the need to navigate the city centre with luggage.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "A direct transfer from the airport to the Nikis Avenue waterfront." },
          { title: "Drop-Off", description: "Directly at the hotel on Leoforos Nikis." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Boutique Hotel Stays", description: "For visitors who prefer a smaller, character property over a larger hotel." },
          { title: "Waterfront Access", description: "Within walking distance of the White Tower and the promenade." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Thessaloniki",
        items: [
          { label: "Thessaloniki", href: "/city/thessaloniki/", description: "See our overview of transfers across Thessaloniki." },
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki Airport to Makedonia Palace", href: "/route/thessaloniki-airport-to-makedonia-palace/", description: "Another eastern waterfront hotel transfer." },
          { label: "Thessaloniki Airport to The Met Hotel", href: "/route/thessaloniki-airport-to-met-hotel/", description: "A boutique-design hotel near the New Harbor." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Thessaloniki Airport to ON Residence?", answer: "Book a direct private transfer — see this page for journey details." },
          { question: "Is ON Residence within walking distance of the White Tower?", answer: "Yes, it sits on the Nikis Avenue waterfront within walking distance of the White Tower." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — hotel to airport as well as airport to hotel." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to ON Residence Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – ON Residence – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το ON Residence, σε ανακαινισμένο αρχοντικό του 1920 στην παραλιακή Νίκης.",
      },
      breadcrumbLabel: "Αεροδρόμιο Θεσσαλονίκης προς ON Residence",
      hero: {
        eyebrow: "Αεροδρόμιο Θεσσαλονίκης → ON Residence",
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – ON Residence",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το ON Residence, στην παραλιακή λεωφόρο Νίκης.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Θεσσαλονίκης προς το ON Residence",
        paragraphs: [
          "Το ON Residence στεγάζεται σε ανακαινισμένο αρχοντικό του 1920 στη Λεωφόρο Νίκης, την παραλιακή προμενάδα της Θεσσαλονίκης, δίνοντάς του χαρακτήρα διαφορετικό από τους μεγαλύτερους ξενοδοχειακούς πύργους της πόλης. Η θέση του το φέρνει σε απόσταση βαδίσματος από τον Λευκό Πύργο και την ευρύτερη παραλιακή.",
          "Μια ιδιωτική μεταφορά από το αεροδρόμιο σας μεταφέρει απευθείας στην είσοδο του ξενοδοχείου, αποφεύγοντας την ανάγκη πλοήγησης στο κέντρο της πόλης με αποσκευές.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Μια απευθείας μεταφορά από το αεροδρόμιο προς την παραλιακή λεωφόρο Νίκης." },
          { title: "Παράδοση", description: "Απευθείας στο ξενοδοχείο στη Λεωφόρο Νίκης." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Διαμονή σε Boutique Ξενοδοχείο", description: "Για επισκέπτες που προτιμούν μικρότερο κατάλυμα με χαρακτήρα αντί για μεγάλο ξενοδοχείο." },
          { title: "Πρόσβαση στην Παραλιακή", description: "Σε απόσταση βαδίσματος από τον Λευκό Πύργο και την προμενάδα." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς ξενοδοχείο ή ξενοδοχείο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Θεσσαλονίκη",
        items: [
          { label: "Θεσσαλονίκη", href: "/el/poli/thessaloniki/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλη τη Θεσσαλονίκη." },
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Makedonia Palace", href: "/el/diadromi/aerodromio-thessalonikis-makedonia-palace/", description: "Άλλη ανατολική παραλιακή μεταφορά ξενοδοχείου." },
          { label: "Αεροδρόμιο Θεσσαλονίκης προς The Met Hotel", href: "/el/diadromi/aerodromio-thessalonikis-met-hotel/", description: "Ένα boutique-design ξενοδοχείο κοντά στο Νέο Λιμάνι." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Θεσσαλονίκης στο ON Residence;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — δείτε αυτή τη σελίδα για λεπτομέρειες ταξιδιού." },
          { question: "Είναι το ON Residence σε απόσταση βαδίσματος από τον Λευκό Πύργο;", answer: "Ναι, βρίσκεται στην παραλιακή λεωφόρο Νίκης σε απόσταση βαδίσματος από τον Λευκό Πύργο." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – ON Residence;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiAirportMetHotel: {
    en: {
      meta: {
        title: "Thessaloniki Airport to The Met Hotel Transfer – Private Car",
        description: "Book a private transfer from Thessaloniki Airport to The Met Hotel, a Design Hotels member near the city's New Harbor.",
      },
      breadcrumbLabel: "Thessaloniki Airport to The Met Hotel",
      hero: {
        eyebrow: "Thessaloniki Airport → The Met Hotel",
        title: "Thessaloniki Airport to The Met Hotel Transfer",
        description: "A direct private transfer from Thessaloniki Airport to The Met Hotel, near the city's New Harbor.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki Airport to The Met Hotel",
        paragraphs: [
          "The Met Hotel sits near Thessaloniki's New Harbor (26is Oktovriou area), a Design Hotels member known for its contemporary, design-led positioning rather than a historic-building angle. It's slightly outside the immediate Aristotelous Square cluster, closer to the port district.",
          "A private transfer from the airport takes you directly to the hotel, avoiding the need to navigate the city centre with luggage after your flight.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "A direct transfer from the airport into the New Harbor area of the city." },
          { title: "Drop-Off", description: "Directly at the hotel entrance." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Design-Focused Stays", description: "For visitors who prefer a contemporary, design-led hotel." },
          { title: "Port-Area Access", description: "Convenient for the New Harbor and nearby port district." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Thessaloniki",
        items: [
          { label: "Thessaloniki Port", href: "/port/thessaloniki/", description: "See our dedicated port transfer information." },
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki Airport to ON Residence", href: "/route/thessaloniki-airport-to-on-residence/", description: "A waterfront boutique hotel transfer." },
          { label: "Thessaloniki Airport to Mediterranean Palace", href: "/route/thessaloniki-airport-to-mediterranean-palace/", description: "A central hotel near the Ladadika district." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Thessaloniki Airport to The Met Hotel?", answer: "Book a direct private transfer — see this page for journey details." },
          { question: "Where is The Met Hotel located?", answer: "It sits near Thessaloniki's New Harbor, close to the 26is Oktovriou area and the port district." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — hotel to airport as well as airport to hotel." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to The Met Hotel Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – The Met Hotel – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το The Met Hotel, μέλος των Design Hotels κοντά στο Νέο Λιμάνι της πόλης.",
      },
      breadcrumbLabel: "Αεροδρόμιο Θεσσαλονίκης προς The Met Hotel",
      hero: {
        eyebrow: "Αεροδρόμιο Θεσσαλονίκης → The Met Hotel",
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – The Met Hotel",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το The Met Hotel, κοντά στο Νέο Λιμάνι της πόλης.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Θεσσαλονίκης προς το The Met Hotel",
        paragraphs: [
          "Το The Met Hotel βρίσκεται κοντά στο Νέο Λιμάνι της Θεσσαλονίκης (περιοχή 26ης Οκτωβρίου), μέλος των Design Hotels γνωστό για τη σύγχρονη, design-led τοποθέτησή του αντί για ιστορικό κτίριο. Βρίσκεται ελαφρώς έξω από το άμεσο σύμπλεγμα της Πλατείας Αριστοτέλους, πιο κοντά στην περιοχή του λιμανιού.",
          "Μια ιδιωτική μεταφορά από το αεροδρόμιο σας μεταφέρει απευθείας στο ξενοδοχείο, αποφεύγοντας την ανάγκη πλοήγησης στο κέντρο της πόλης με αποσκευές μετά την πτήση σας.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Μια απευθείας μεταφορά από το αεροδρόμιο προς την περιοχή του Νέου Λιμανιού της πόλης." },
          { title: "Παράδοση", description: "Απευθείας στην είσοδο του ξενοδοχείου." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Διαμονή με Έμφαση στο Design", description: "Για επισκέπτες που προτιμούν σύγχρονο, design-led ξενοδοχείο." },
          { title: "Πρόσβαση στην Περιοχή Λιμανιού", description: "Βολικό για το Νέο Λιμάνι και τη γειτονική περιοχή λιμανιού." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς ξενοδοχείο ή ξενοδοχείο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Θεσσαλονίκη",
        items: [
          { label: "Λιμάνι Θεσσαλονίκης", href: "/el/limani/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς λιμανιού." },
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς ON Residence", href: "/el/diadromi/aerodromio-thessalonikis-on-residence/", description: "Μια παραλιακή boutique μεταφορά ξενοδοχείου." },
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Mediterranean Palace", href: "/el/diadromi/aerodromio-thessalonikis-mediterranean-palace/", description: "Ένα κεντρικό ξενοδοχείο κοντά στα Λαδάδικα." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Θεσσαλονίκης στο The Met Hotel;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — δείτε αυτή τη σελίδα για λεπτομέρειες ταξιδιού." },
          { question: "Πού βρίσκεται το The Met Hotel;", answer: "Βρίσκεται κοντά στο Νέο Λιμάνι της Θεσσαλονίκης, κοντά στην περιοχή της 26ης Οκτωβρίου και το λιμάνι." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – The Met Hotel;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiAirportMediterraneanPalace: {
    en: {
      meta: {
        title: "Thessaloniki Airport to Mediterranean Palace Transfer",
        description: "Book a private transfer from Thessaloniki Airport to Mediterranean Palace, next to the historic Ladadika district.",
      },
      breadcrumbLabel: "Thessaloniki Airport to Mediterranean Palace",
      hero: {
        eyebrow: "Thessaloniki Airport → Mediterranean Palace",
        title: "Thessaloniki Airport to Mediterranean Palace Transfer",
        description: "A direct private transfer from Thessaloniki Airport to Mediterranean Palace, adjacent to the Ladadika district.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki Airport to Mediterranean Palace",
        paragraphs: [
          "Mediterranean Palace sits adjacent to Ladadika, Thessaloniki's historic warehouse district turned nightlife and dining quarter, with views over the Thermaic Gulf. It offers a different character from the Aristotelous Square hotels, closer to the port and the old commercial centre.",
          "A private transfer from the airport takes you directly to the hotel, avoiding the need to navigate the city centre with luggage after your flight.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "A direct transfer from the airport into central Thessaloniki, near Ladadika." },
          { title: "Drop-Off", description: "Directly at the hotel entrance." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Ladadika Nightlife & Dining", description: "For visitors who want easy access to Thessaloniki's historic dining and nightlife district." },
          { title: "Gulf Views", description: "A hotel with views over the Thermaic Gulf." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Thessaloniki",
        items: [
          { label: "Thessaloniki", href: "/city/thessaloniki/", description: "See our overview of transfers across Thessaloniki." },
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki Airport to Electra Palace", href: "/route/thessaloniki-airport-to-electra-palace/", description: "A central square hotel transfer." },
          { label: "Thessaloniki Airport to Domotel Olympia", href: "/route/thessaloniki-airport-to-domotel-olympia/", description: "A hotel near the Roman Agora archaeological site." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Thessaloniki Airport to Mediterranean Palace?", answer: "Book a direct private transfer — see this page for journey details." },
          { question: "Is Mediterranean Palace near Ladadika?", answer: "Yes, it sits adjacent to the historic Ladadika district, with views over the Thermaic Gulf." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — hotel to airport as well as airport to hotel." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Mediterranean Palace Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Mediterranean Palace",
        description: "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το Mediterranean Palace, δίπλα στην ιστορική συνοικία των Λαδάδικων.",
      },
      breadcrumbLabel: "Αεροδρόμιο Θεσσαλονίκης προς Mediterranean Palace",
      hero: {
        eyebrow: "Αεροδρόμιο Θεσσαλονίκης → Mediterranean Palace",
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Mediterranean Palace",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το Mediterranean Palace, δίπλα στη συνοικία των Λαδάδικων.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Θεσσαλονίκης προς το Mediterranean Palace",
        paragraphs: [
          "Το Mediterranean Palace βρίσκεται δίπλα στα Λαδάδικα, την ιστορική συνοικία αποθηκών της Θεσσαλονίκης που έχει μετατραπεί σε συνοικία διασκέδασης και εστίασης, με θέα στον Θερμαϊκό Κόλπο. Προσφέρει διαφορετικό χαρακτήρα από τα ξενοδοχεία της Πλατείας Αριστοτέλους, πιο κοντά στο λιμάνι και το παλιό εμπορικό κέντρο.",
          "Μια ιδιωτική μεταφορά από το αεροδρόμιο σας μεταφέρει απευθείας στο ξενοδοχείο, αποφεύγοντας την ανάγκη πλοήγησης στο κέντρο της πόλης με αποσκευές μετά την πτήση σας.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Μια απευθείας μεταφορά από το αεροδρόμιο προς το κέντρο της Θεσσαλονίκης, κοντά στα Λαδάδικα." },
          { title: "Παράδοση", description: "Απευθείας στην είσοδο του ξενοδοχείου." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Διασκέδαση & Εστίαση στα Λαδάδικα", description: "Για επισκέπτες που θέλουν εύκολη πρόσβαση στην ιστορική συνοικία εστίασης και διασκέδασης της Θεσσαλονίκης." },
          { title: "Θέα στον Κόλπο", description: "Ένα ξενοδοχείο με θέα στον Θερμαϊκό Κόλπο." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς ξενοδοχείο ή ξενοδοχείο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Θεσσαλονίκη",
        items: [
          { label: "Θεσσαλονίκη", href: "/el/poli/thessaloniki/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλη τη Θεσσαλονίκη." },
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Electra Palace", href: "/el/diadromi/aerodromio-thessalonikis-electra-palace/", description: "Μια κεντρική μεταφορά ξενοδοχείου στην πλατεία." },
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Domotel Olympia", href: "/el/diadromi/aerodromio-thessalonikis-domotel-olympia/", description: "Ένα ξενοδοχείο κοντά στη Ρωμαϊκή Αγορά." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Θεσσαλονίκης στο Mediterranean Palace;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — δείτε αυτή τη σελίδα για λεπτομέρειες ταξιδιού." },
          { question: "Είναι το Mediterranean Palace κοντά στα Λαδάδικα;", answer: "Ναι, βρίσκεται δίπλα στην ιστορική συνοικία των Λαδάδικων, με θέα στον Θερμαϊκό Κόλπο." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Mediterranean Palace;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiAirportDomotelOlympia: {
    en: {
      meta: {
        title: "Thessaloniki Airport to Domotel Olympia Transfer",
        description: "Book a private transfer from Thessaloniki Airport to Domotel Olympia, adjacent to the Roman Agora in the historic centre.",
      },
      breadcrumbLabel: "Thessaloniki Airport to Domotel Olympia",
      hero: {
        eyebrow: "Thessaloniki Airport → Domotel Olympia",
        title: "Thessaloniki Airport to Domotel Olympia Transfer",
        description: "A direct private transfer from Thessaloniki Airport to Domotel Olympia, next to the Roman Agora archaeological site.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki Airport to Domotel Olympia",
        paragraphs: [
          "Domotel Olympia sits on Olympou Street in Thessaloniki's historic centre, directly adjacent to the Roman Agora archaeological site. It's a genuinely different location from the waterfront hotel cluster, appealing to visitors who want to be close to the city's ancient and Byzantine landmarks.",
          "A private transfer from the airport takes you directly to the hotel, avoiding the need to navigate the historic centre's narrower streets with luggage.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "A direct transfer from the airport into Thessaloniki's historic centre." },
          { title: "Drop-Off", description: "Directly at the hotel on Olympou Street, next to the Roman Agora." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "History & Archaeology Visitors", description: "For visitors who want to be close to the Roman Agora and the historic centre's landmarks." },
          { title: "Historic Centre Stays", description: "A different character from the waterfront hotel area." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Thessaloniki",
        items: [
          { label: "Thessaloniki", href: "/city/thessaloniki/", description: "See our overview of transfers across Thessaloniki." },
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki Airport to Mediterranean Palace", href: "/route/thessaloniki-airport-to-mediterranean-palace/", description: "A hotel near Ladadika, closer to the port." },
          { label: "Thessaloniki Airport to Electra Palace", href: "/route/thessaloniki-airport-to-electra-palace/", description: "A central square hotel transfer." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Thessaloniki Airport to Domotel Olympia?", answer: "Book a direct private transfer — see this page for journey details." },
          { question: "Is Domotel Olympia near the Roman Agora?", answer: "Yes, it sits directly adjacent to the Roman Agora archaeological site in the historic centre." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — hotel to airport as well as airport to hotel." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Domotel Olympia Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Domotel Olympia",
        description: "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το Domotel Olympia, δίπλα στη Ρωμαϊκή Αγορά στο ιστορικό κέντρο.",
      },
      breadcrumbLabel: "Αεροδρόμιο Θεσσαλονίκης προς Domotel Olympia",
      hero: {
        eyebrow: "Αεροδρόμιο Θεσσαλονίκης → Domotel Olympia",
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Domotel Olympia",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το Domotel Olympia, δίπλα στη Ρωμαϊκή Αγορά.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Θεσσαλονίκης προς το Domotel Olympia",
        paragraphs: [
          "Το Domotel Olympia βρίσκεται στην οδό Ολύμπου, στο ιστορικό κέντρο της Θεσσαλονίκης, ακριβώς δίπλα στον αρχαιολογικό χώρο της Ρωμαϊκής Αγοράς. Είναι μια πραγματικά διαφορετική τοποθεσία από το σύμπλεγμα παραλιακών ξενοδοχείων, ελκυστική για επισκέπτες που θέλουν να είναι κοντά στα αρχαία και βυζαντινά μνημεία της πόλης.",
          "Μια ιδιωτική μεταφορά από το αεροδρόμιο σας μεταφέρει απευθείας στο ξενοδοχείο, αποφεύγοντας την ανάγκη πλοήγησης στους στενότερους δρόμους του ιστορικού κέντρου με αποσκευές.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Μια απευθείας μεταφορά από το αεροδρόμιο προς το ιστορικό κέντρο της Θεσσαλονίκης." },
          { title: "Παράδοση", description: "Απευθείας στο ξενοδοχείο στην οδό Ολύμπου, δίπλα στη Ρωμαϊκή Αγορά." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Επισκέπτες Ιστορίας & Αρχαιολογίας", description: "Για επισκέπτες που θέλουν να είναι κοντά στη Ρωμαϊκή Αγορά και τα μνημεία του ιστορικού κέντρου." },
          { title: "Διαμονή στο Ιστορικό Κέντρο", description: "Διαφορετικός χαρακτήρας από την παραλιακή περιοχή ξενοδοχείων." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς ξενοδοχείο ή ξενοδοχείο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Θεσσαλονίκη",
        items: [
          { label: "Θεσσαλονίκη", href: "/el/poli/thessaloniki/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλη τη Θεσσαλονίκη." },
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Mediterranean Palace", href: "/el/diadromi/aerodromio-thessalonikis-mediterranean-palace/", description: "Ένα ξενοδοχείο κοντά στα Λαδάδικα, πιο κοντά στο λιμάνι." },
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Electra Palace", href: "/el/diadromi/aerodromio-thessalonikis-electra-palace/", description: "Μια κεντρική μεταφορά ξενοδοχείου στην πλατεία." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Θεσσαλονίκης στο Domotel Olympia;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — δείτε αυτή τη σελίδα για λεπτομέρειες ταξιδιού." },
          { question: "Είναι το Domotel Olympia κοντά στη Ρωμαϊκή Αγορά;", answer: "Ναι, βρίσκεται ακριβώς δίπλα στον αρχαιολογικό χώρο της Ρωμαϊκής Αγοράς στο ιστορικό κέντρο." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Domotel Olympia;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeThessalonikiAirportHyattRegency: {
    en: {
      meta: {
        title: "Thessaloniki Airport to Hyatt Regency Transfer – Private Car",
        description: "Book a private transfer from Thessaloniki Airport to Hyatt Regency Thessaloniki, in Thermi near the airport itself.",
      },
      breadcrumbLabel: "Thessaloniki Airport to Hyatt Regency",
      hero: {
        eyebrow: "Thessaloniki Airport → Hyatt Regency",
        title: "Thessaloniki Airport to Hyatt Regency Transfer",
        description: "A short private transfer from Thessaloniki Airport to Hyatt Regency Thessaloniki, one of the closest 5-star hotels to the airport.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Thessaloniki Airport to Hyatt Regency",
        paragraphs: [
          "Hyatt Regency Thessaloniki is located in Thermi, close to the airport itself rather than in the city centre — a genuinely different story from the other hotels on our list. It suits visitors attending events at the hotel's own convention centre, or anyone who prefers to stay near the airport rather than travelling into Thessaloniki.",
          "Because of the short distance involved, this is one of the quickest transfers on our Thessaloniki network, though a private vehicle is still the most comfortable way to cover it with luggage.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "One of the shortest hotel transfers from the airport, given the hotel's proximity in Thermi." },
          { title: "Route", description: "A short, direct transfer without entering central Thessaloniki." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Event or Conference Details", description: "Mention if you're attending an event at the hotel's convention centre." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Conference & Event Attendees", description: "For visitors attending events at the hotel's own convention centre." },
          { title: "Short Layovers", description: "A quick, comfortable transfer for those who prefer to stay near the airport." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Thessaloniki",
        items: [
          { label: "Thessaloniki Airport", href: "/airport/thessaloniki-airport/", description: "See our dedicated airport transfer information." },
          { label: "Thessaloniki", href: "/city/thessaloniki/", description: "See our overview of transfers into the city centre." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Thessaloniki Airport to Electra Palace", href: "/route/thessaloniki-airport-to-electra-palace/", description: "For visitors heading into the city centre instead." },
          { label: "Thessaloniki Airport to Makedonia Palace", href: "/route/thessaloniki-airport-to-makedonia-palace/", description: "A waterfront hotel further into the city." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Is Hyatt Regency Thessaloniki close to the airport?", answer: "Yes, it's located in Thermi, close to the airport rather than in the city centre." },
          { question: "How long does the transfer take?", answer: "It's one of the shortest hotel transfers on our Thessaloniki network, given the short distance involved." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — hotel to airport as well as airport to hotel." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Hyatt Regency Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Hyatt Regency – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το Hyatt Regency Θεσσαλονίκης, στη Θέρμη κοντά στο ίδιο το αεροδρόμιο.",
      },
      breadcrumbLabel: "Αεροδρόμιο Θεσσαλονίκης προς Hyatt Regency",
      hero: {
        eyebrow: "Αεροδρόμιο Θεσσαλονίκης → Hyatt Regency",
        title: "Μεταφορά Αεροδρόμιο Θεσσαλονίκης – Hyatt Regency",
        description: "Μια σύντομη ιδιωτική μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το Hyatt Regency, ένα από τα πλησιέστερα 5-star ξενοδοχεία στο αεροδρόμιο.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Θεσσαλονίκης προς το Hyatt Regency",
        paragraphs: [
          "Το Hyatt Regency Θεσσαλονίκης βρίσκεται στη Θέρμη, κοντά στο ίδιο το αεροδρόμιο και όχι στο κέντρο της πόλης — μια πραγματικά διαφορετική περίπτωση από τα υπόλοιπα ξενοδοχεία της λίστας μας. Ταιριάζει σε επισκέπτες που παρακολουθούν εκδηλώσεις στο δικό του συνεδριακό κέντρο, ή σε όποιον προτιμά να μείνει κοντά στο αεροδρόμιο αντί να ταξιδέψει προς τη Θεσσαλονίκη.",
          "Λόγω της μικρής απόστασης, αυτή είναι μία από τις ταχύτερες μεταφορές στο δίκτυό μας στη Θεσσαλονίκη, αν και ένα ιδιωτικό όχημα παραμένει ο πιο άνετος τρόπος να την καλύψετε με αποσκευές.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Μία από τις συντομότερες μεταφορές ξενοδοχείου από το αεροδρόμιο, δεδομένης της εγγύτητας του ξενοδοχείου στη Θέρμη." },
          { title: "Διαδρομή", description: "Μια σύντομη, απευθείας μεταφορά χωρίς είσοδο στο κέντρο της Θεσσαλονίκης." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Στοιχεία Εκδήλωσης ή Συνεδρίου", description: "Αναφέρετε αν παρακολουθείτε εκδήλωση στο συνεδριακό κέντρο του ξενοδοχείου." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Συμμετέχοντες σε Συνέδρια & Εκδηλώσεις", description: "Για επισκέπτες που παρακολουθούν εκδηλώσεις στο συνεδριακό κέντρο του ξενοδοχείου." },
          { title: "Σύντομες Στάσεις", description: "Μια γρήγορη, άνετη μεταφορά για όσους προτιμούν να μείνουν κοντά στο αεροδρόμιο." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς ξενοδοχείο ή ξενοδοχείο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Θεσσαλονίκη",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης", href: "/el/aerodromio/thessaloniki/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
          { label: "Θεσσαλονίκη", href: "/el/poli/thessaloniki/", description: "Δείτε την επισκόπησή μας για μεταφορές προς το κέντρο της πόλης." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Electra Palace", href: "/el/diadromi/aerodromio-thessalonikis-electra-palace/", description: "Για επισκέπτες που κατευθύνονται προς το κέντρο της πόλης." },
          { label: "Αεροδρόμιο Θεσσαλονίκης προς Makedonia Palace", href: "/el/diadromi/aerodromio-thessalonikis-makedonia-palace/", description: "Ένα παραλιακό ξενοδοχείο πιο μέσα στην πόλη." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Είναι το Hyatt Regency Θεσσαλονίκης κοντά στο αεροδρόμιο;", answer: "Ναι, βρίσκεται στη Θέρμη, κοντά στο αεροδρόμιο και όχι στο κέντρο της πόλης." },
          { question: "Πόσο διαρκεί η μεταφορά;", answer: "Είναι μία από τις συντομότερες μεταφορές ξενοδοχείου στο δίκτυό μας στη Θεσσαλονίκη, δεδομένης της μικρής απόστασης." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Hyatt Regency;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionAirportHersonissos: {
    en: {
      meta: {
        title: "Heraklion Airport to Hersonissos Transfer – Private Car",
        description: "Book a private transfer between Heraklion Airport and Hersonissos, one of Crete's largest resort areas, roughly 25 minutes away.",
      },
      breadcrumbLabel: "Heraklion Airport to Hersonissos",
      hero: {
        eyebrow: "Heraklion Airport → Hersonissos",
        title: "Heraklion Airport to Hersonissos Transfer",
        description: "A direct private transfer from Heraklion Airport to Hersonissos, one of Crete's largest and longest-established resort areas.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion Airport to Hersonissos",
        paragraphs: [
          "Hersonissos sits east of Heraklion, roughly 25 minutes from the airport along the coastal road. It's one of the largest resort areas on Crete, with a long stretch of hotels, restaurants and beach clubs, and forms the western end of a near-continuous strip that runs through Stalis and into Malia.",
          "A private transfer avoids relying on public transport with resort luggage, and can be timed around your actual flight arrival rather than a fixed schedule.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 25 minutes, depending on traffic." },
          { title: "Route", description: "East from the airport along Crete's north coast road." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Hotel Details", description: "Let us know your exact hotel when requesting a quote." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Beach Holiday Arrivals", description: "Head straight to your Hersonissos hotel after landing." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Hersonissos",
        items: [
          { label: "Hersonissos", href: "/destination/hersonissos/", description: "See our destination overview of Hersonissos." },
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion Airport to Malia", href: "/route/heraklion-airport-to-malia/", description: "A slightly longer transfer further along the coast." },
          { label: "Heraklion Airport to Creta Maris Resort", href: "/route/heraklion-airport-to-creta-maris/", description: "A dedicated transfer to this Hersonissos resort." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Heraklion Airport to Hersonissos take?", answer: "Typically around 25 minutes, depending on traffic." },
          { question: "Can I be dropped directly at my hotel in Hersonissos?", answer: "Yes, mention your exact hotel when requesting a quote." },
          { question: "Can you arrange a transfer for a family arriving on the same flight?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Hersonissos Transfer?",
        description: "Tell us your flight details, hotel and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Χερσόνησος – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Ηρακλείου και Χερσονήσου, μίας από τις μεγαλύτερες περιοχές θερέτρων της Κρήτης, περίπου 25 λεπτά μακριά.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου προς Χερσόνησο",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου → Χερσόνησος",
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Χερσόνησος",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς τον Χερσόνησο, μία από τις μεγαλύτερες και πιο μακροχρόνιες περιοχές θερέτρων της Κρήτης.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Ηρακλείου προς τον Χερσόνησο",
        paragraphs: [
          "Ο Χερσόνησος βρίσκεται ανατολικά του Ηρακλείου, περίπου 25 λεπτά από το αεροδρόμιο κατά μήκος του παράκτιου δρόμου. Είναι μία από τις μεγαλύτερες περιοχές θερέτρων της Κρήτης, με μια μεγάλη σειρά ξενοδοχείων, εστιατορίων και beach clubs, και σχηματίζει το δυτικό άκρο μιας σχεδόν συνεχούς ζώνης που περνά από τον Σταλίδα και καταλήγει στα Μάλια.",
          "Μια ιδιωτική μεταφορά αποφεύγει την εξάρτηση από δημόσια μέσα με αποσκευές θέρετρου, και μπορεί να προγραμματιστεί σύμφωνα με την πραγματική άφιξη της πτήσης σας αντί για σταθερό ωράριο.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 25 λεπτά, ανάλογα με την κίνηση." },
          { title: "Διαδρομή", description: "Ανατολικά από το αεροδρόμιο κατά μήκος του βόρειου παράκτιου δρόμου της Κρήτης." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Στοιχεία Ξενοδοχείου", description: "Ενημερώστε μας για το ακριβές ξενοδοχείο σας κατά την αίτηση προσφοράς." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Αφίξεις για Παραθαλάσσιες Διακοπές", description: "Κατευθυνθείτε απευθείας στο ξενοδοχείο σας στον Χερσόνησο μετά την προσγείωση." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς ξενοδοχείο ή ξενοδοχείο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τον Χερσόνησο",
        items: [
          { label: "Χερσόνησος", href: "/el/proorismos/chersonisos/", description: "Δείτε την επισκόπηση προορισμού μας για τον Χερσόνησο." },
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Μάλια", href: "/el/diadromi/aerodromio-irakleiou-malia/", description: "Μια λίγο μεγαλύτερη μεταφορά πιο μακριά στην ακτή." },
          { label: "Αεροδρόμιο Ηρακλείου προς Creta Maris Resort", href: "/el/diadromi/aerodromio-irakleiou-creta-maris/", description: "Ειδική μεταφορά προς αυτό το θέρετρο του Χερσονήσου." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Ηρακλείου στον Χερσόνησο;", answer: "Συνήθως περίπου 25 λεπτά, ανάλογα με την κίνηση." },
          { question: "Μπορώ να παραδοθώ απευθείας στο ξενοδοχείο μου στον Χερσόνησο;", answer: "Ναι, αναφέρετε το ακριβές ξενοδοχείο σας κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για οικογένεια που φτάνει με την ίδια πτήση;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Χερσόνησος;",
        description: "Πείτε μας τα στοιχεία πτήσης, το ξενοδοχείο και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionAirportMalia: {
    en: {
      meta: {
        title: "Heraklion Airport to Malia Transfer – Private Car",
        description: "Book a private transfer between Heraklion Airport and Malia, one of Crete's best-known resort strips.",
      },
      breadcrumbLabel: "Heraklion Airport to Malia",
      hero: {
        eyebrow: "Heraklion Airport → Malia",
        title: "Heraklion Airport to Malia Transfer",
        description: "A direct private transfer from Heraklion Airport to Malia, further along the coast from Hersonissos.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion Airport to Malia",
        paragraphs: [
          "Malia sits east of Heraklion, adjoining Stalis and Hersonissos as part of a near-continuous resort strip, typically around 30–35 minutes from the airport. It's also close to the Malia Palace, one of Crete's Minoan archaeological sites.",
          "A private transfer takes you directly to your hotel in Malia, avoiding the need to change vehicles or rely on public transport with resort luggage.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 30–35 minutes, depending on traffic." },
          { title: "Route", description: "East from the airport along Crete's north coast road, past Hersonissos." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Hotel Details", description: "Let us know your exact hotel when requesting a quote." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Beach Holiday Arrivals", description: "Head straight to your Malia hotel after landing." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Malia",
        items: [
          { label: "Malia", href: "/destination/malia/", description: "See our destination overview of Malia." },
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion Airport to Hersonissos", href: "/route/heraklion-airport-to-hersonissos/", description: "A slightly shorter transfer along the same coast." },
          { label: "Heraklion Airport to Alexander Beach Hotel & Village Resort", href: "/route/heraklion-airport-to-alexander-beach/", description: "A dedicated transfer near Stalis and Malia." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Heraklion Airport to Malia take?", answer: "Typically around 30–35 minutes, depending on traffic." },
          { question: "Can I be dropped directly at my hotel in Malia?", answer: "Yes, mention your exact hotel when requesting a quote." },
          { question: "Can you arrange a transfer for a family arriving on the same flight?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Malia Transfer?",
        description: "Tell us your flight details, hotel and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Μάλια – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Ηρακλείου και Μαλίων, μίας από τις πιο γνωστές τουριστικές ζώνες της Κρήτης.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου προς Μάλια",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου → Μάλια",
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Μάλια",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς τα Μάλια, πιο μακριά στην ακτή από τον Χερσόνησο.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Ηρακλείου προς τα Μάλια",
        paragraphs: [
          "Τα Μάλια βρίσκονται ανατολικά του Ηρακλείου, γειτονικά με τον Σταλίδα και τον Χερσόνησο ως μέρος μιας σχεδόν συνεχούς τουριστικής ζώνης, συνήθως περίπου 30-35 λεπτά από το αεροδρόμιο. Βρίσκονται επίσης κοντά στο Ανάκτορο της Μαλίας, έναν από τους μινωικούς αρχαιολογικούς χώρους της Κρήτης.",
          "Μια ιδιωτική μεταφορά σας μεταφέρει απευθείας στο ξενοδοχείο σας στα Μάλια, αποφεύγοντας την ανάγκη αλλαγής οχήματος ή εξάρτησης από δημόσια μέσα με αποσκευές θέρετρου.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 30-35 λεπτά, ανάλογα με την κίνηση." },
          { title: "Διαδρομή", description: "Ανατολικά από το αεροδρόμιο κατά μήκος του βόρειου παράκτιου δρόμου της Κρήτης, περνώντας τον Χερσόνησο." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Στοιχεία Ξενοδοχείου", description: "Ενημερώστε μας για το ακριβές ξενοδοχείο σας κατά την αίτηση προσφοράς." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Αφίξεις για Παραθαλάσσιες Διακοπές", description: "Κατευθυνθείτε απευθείας στο ξενοδοχείο σας στα Μάλια μετά την προσγείωση." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς ξενοδοχείο ή ξενοδοχείο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τα Μάλια",
        items: [
          { label: "Μάλια", href: "/el/proorismos/malia/", description: "Δείτε την επισκόπηση προορισμού μας για τα Μάλια." },
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Χερσόνησο", href: "/el/diadromi/aerodromio-irakleiou-chersonisos/", description: "Μια λίγο συντομότερη μεταφορά στην ίδια ακτή." },
          { label: "Αεροδρόμιο Ηρακλείου προς Alexander Beach Hotel & Village Resort", href: "/el/diadromi/aerodromio-irakleiou-alexander-beach/", description: "Ειδική μεταφορά κοντά στον Σταλίδα και τα Μάλια." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Ηρακλείου στα Μάλια;", answer: "Συνήθως περίπου 30-35 λεπτά, ανάλογα με την κίνηση." },
          { question: "Μπορώ να παραδοθώ απευθείας στο ξενοδοχείο μου στα Μάλια;", answer: "Ναι, αναφέρετε το ακριβές ξενοδοχείο σας κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για οικογένεια που φτάνει με την ίδια πτήση;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Μάλια;",
        description: "Πείτε μας τα στοιχεία πτήσης, το ξενοδοχείο και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionAirportAgiosNikolaos: {
    en: {
      meta: {
        title: "Heraklion Airport to Agios Nikolaos Transfer – Private Car",
        description: "Book a private transfer between Heraklion Airport and Agios Nikolaos, the main town of eastern Crete.",
      },
      breadcrumbLabel: "Heraklion Airport to Agios Nikolaos",
      hero: {
        eyebrow: "Heraklion Airport → Agios Nikolaos",
        title: "Heraklion Airport to Agios Nikolaos Transfer",
        description: "A direct private transfer from Heraklion Airport to Agios Nikolaos, the main town of eastern Crete.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion Airport to Agios Nikolaos",
        paragraphs: [
          "Agios Nikolaos is roughly 60–70 minutes from Heraklion Airport, built around Voulismeni Lake on Mirabello Bay in eastern Crete. It's the largest town in the Lasithi region and a common base for exploring eastern Crete.",
          "A private transfer takes you directly to your hotel or address in Agios Nikolaos, avoiding the need for a bus connection with luggage after your flight.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 60–70 minutes, depending on traffic and your exact destination." },
          { title: "Route", description: "East from the airport along Crete's north coast road, past Hersonissos and Malia." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Eastern Crete Arrivals", description: "Head directly to Agios Nikolaos without a stop in Heraklion." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-town or town-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Agios Nikolaos",
        items: [
          { label: "Agios Nikolaos", href: "/city/agios-nikolaos/", description: "See our overview of transfers across Agios Nikolaos." },
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion Airport to Elounda", href: "/route/heraklion-airport-to-elounda/", description: "A slightly longer transfer to the nearby luxury resort area." },
          { label: "Heraklion Airport to Minos Beach Art Hotel", href: "/route/heraklion-airport-to-minos-beach-art/", description: "A dedicated transfer to this Agios Nikolaos hotel." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Heraklion Airport to Agios Nikolaos take?", answer: "Typically around 60–70 minutes, depending on traffic and your exact destination." },
          { question: "Is Agios Nikolaos close to Elounda?", answer: "Yes, Elounda is a short drive north of Agios Nikolaos town." },
          { question: "Can you arrange a transfer for a group arriving on the same flight?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Agios Nikolaos Transfer?",
        description: "Tell us your flight details, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Άγιος Νικόλαος – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Ηρακλείου και Αγίου Νικολάου, της κύριας πόλης της ανατολικής Κρήτης.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου προς Άγιο Νικόλαο",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου → Άγιος Νικόλαος",
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Άγιος Νικόλαος",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς τον Άγιο Νικόλαο, την κύρια πόλη της ανατολικής Κρήτης.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Ηρακλείου προς τον Άγιο Νικόλαο",
        paragraphs: [
          "Ο Άγιος Νικόλαος απέχει περίπου 60-70 λεπτά από το Αεροδρόμιο Ηρακλείου, χτισμένος γύρω από τη λίμνη Βουλισμένη στον κόλπο του Μιραμπέλλου στην ανατολική Κρήτη. Είναι η μεγαλύτερη πόλη του νομού Λασιθίου και συνηθισμένη βάση για εξερεύνηση της ανατολικής Κρήτης.",
          "Μια ιδιωτική μεταφορά σας μεταφέρει απευθείας στο ξενοδοχείο ή τη διεύθυνσή σας στον Άγιο Νικόλαο, αποφεύγοντας την ανάγκη σύνδεσης με λεωφορείο με αποσκευές μετά την πτήση σας.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 60-70 λεπτά, ανάλογα με την κίνηση και τον ακριβή προορισμό σας." },
          { title: "Διαδρομή", description: "Ανατολικά από το αεροδρόμιο κατά μήκος του βόρειου παράκτιου δρόμου της Κρήτης, περνώντας τον Χερσόνησο και τα Μάλια." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Αφίξεις στην Ανατολική Κρήτη", description: "Κατευθυνθείτε απευθείας στον Άγιο Νικόλαο χωρίς στάση στο Ηράκλειο." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς πόλη ή πόλη προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τον Άγιο Νικόλαο",
        items: [
          { label: "Άγιος Νικόλαος", href: "/el/poli/agios-nikolaos/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλο τον Άγιο Νικόλαο." },
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Ελούντα", href: "/el/diadromi/aerodromio-irakleiou-elounda/", description: "Μια λίγο μεγαλύτερη μεταφορά προς την κοντινή περιοχή πολυτελών θερέτρων." },
          { label: "Αεροδρόμιο Ηρακλείου προς Minos Beach Art Hotel", href: "/el/diadromi/aerodromio-irakleiou-minos-beach-art/", description: "Ειδική μεταφορά προς αυτό το ξενοδοχείο του Αγίου Νικολάου." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Ηρακλείου στον Άγιο Νικόλαο;", answer: "Συνήθως περίπου 60-70 λεπτά, ανάλογα με την κίνηση και τον ακριβή προορισμό σας." },
          { question: "Είναι ο Άγιος Νικόλαος κοντά στην Ελούντα;", answer: "Ναι, η Ελούντα βρίσκεται λίγα λεπτά βόρεια της πόλης του Αγίου Νικολάου." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που φτάνει με την ίδια πτήση;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Άγιος Νικόλαος;",
        description: "Πείτε μας τα στοιχεία πτήσης, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionAirportElounda: {
    en: {
      meta: {
        title: "Heraklion Airport to Elounda Transfer – Private Car",
        description: "Book a private transfer between Heraklion Airport and Elounda, Crete's luxury resort enclave in the east.",
      },
      breadcrumbLabel: "Heraklion Airport to Elounda",
      hero: {
        eyebrow: "Heraklion Airport → Elounda",
        title: "Heraklion Airport to Elounda Transfer",
        description: "A direct private transfer from Heraklion Airport to Elounda, roughly an hour to an hour and a quarter away.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion Airport to Elounda",
        paragraphs: [
          "Elounda is a luxury resort village on Mirabello Bay, a short distance north of Agios Nikolaos, typically reached in around an hour to an hour and a quarter from Heraklion Airport. It's known for a cluster of long-established luxury hotels along its waterfront.",
          "Given the resort's profile, most visitors arrange a direct private transfer from the airport rather than a shared or public transport connection, particularly when travelling with resort luggage.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around an hour to an hour and a quarter, depending on traffic." },
          { title: "Route", description: "East from the airport along Crete's north coast road, via Agios Nikolaos." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Resort Details", description: "Let us know your exact hotel when requesting a quote." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Luxury Resort Arrivals", description: "Head directly to your Elounda resort after landing." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-resort or resort-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Elounda",
        items: [
          { label: "Elounda", href: "/destination/elounda/", description: "See our destination overview of Elounda." },
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion Airport to Elounda Bay Palace", href: "/route/heraklion-airport-to-elounda-bay-palace/", description: "A dedicated transfer to this Elounda resort." },
          { label: "Heraklion Airport to Agios Nikolaos", href: "/route/heraklion-airport-to-agios-nikolaos/", description: "A slightly shorter transfer to the nearby town." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Heraklion Airport to Elounda take?", answer: "Typically around an hour to an hour and a quarter, depending on traffic." },
          { question: "Can I be dropped directly at my resort in Elounda?", answer: "Yes, mention your exact hotel when requesting a quote." },
          { question: "Can you arrange a transfer for a family arriving on the same flight?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Elounda Transfer?",
        description: "Tell us your flight details, resort and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Ελούντα – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Ηρακλείου και Ελούντας, του θύλακα πολυτελών θερέτρων της Κρήτης στα ανατολικά.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου προς Ελούντα",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου → Ελούντα",
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Ελούντα",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς την Ελούντα, περίπου μία ώρα έως μία ώρα και τέταρτο μακριά.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Ηρακλείου προς την Ελούντα",
        paragraphs: [
          "Η Ελούντα είναι ένα χωριό πολυτελών θερέτρων στον κόλπο του Μιραμπέλλου, σε μικρή απόσταση βόρεια του Αγίου Νικολάου, που συνήθως προσεγγίζεται σε περίπου μία ώρα έως μία ώρα και τέταρτο από το Αεροδρόμιο Ηρακλείου. Είναι γνωστή για μια ομάδα μακροχρόνιων πολυτελών ξενοδοχείων κατά μήκος της παραλιακής της.",
          "Δεδομένου του προφίλ του θέρετρου, οι περισσότεροι επισκέπτες οργανώνουν απευθείας ιδιωτική μεταφορά από το αεροδρόμιο αντί για κοινή ή δημόσια σύνδεση, ιδιαίτερα όταν ταξιδεύουν με αποσκευές θέρετρου.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου μία ώρα έως μία ώρα και τέταρτο, ανάλογα με την κίνηση." },
          { title: "Διαδρομή", description: "Ανατολικά από το αεροδρόμιο κατά μήκος του βόρειου παράκτιου δρόμου της Κρήτης, μέσω Αγίου Νικολάου." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Στοιχεία Θέρετρου", description: "Ενημερώστε μας για το ακριβές ξενοδοχείο σας κατά την αίτηση προσφοράς." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Αφίξεις σε Πολυτελές Θέρετρο", description: "Κατευθυνθείτε απευθείας στο θέρετρό σας στην Ελούντα μετά την προσγείωση." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς θέρετρο ή θέρετρο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε την Ελούντα",
        items: [
          { label: "Ελούντα", href: "/el/proorismos/elounda/", description: "Δείτε την επισκόπηση προορισμού μας για την Ελούντα." },
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Elounda Bay Palace", href: "/el/diadromi/aerodromio-irakleiou-elounda-bay-palace/", description: "Ειδική μεταφορά προς αυτό το θέρετρο της Ελούντας." },
          { label: "Αεροδρόμιο Ηρακλείου προς Άγιο Νικόλαο", href: "/el/diadromi/aerodromio-irakleiou-agios-nikolaos/", description: "Μια λίγο συντομότερη μεταφορά προς την κοντινή πόλη." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Ηρακλείου στην Ελούντα;", answer: "Συνήθως περίπου μία ώρα έως μία ώρα και τέταρτο, ανάλογα με την κίνηση." },
          { question: "Μπορώ να παραδοθώ απευθείας στο θέρετρό μου στην Ελούντα;", answer: "Ναι, αναφέρετε το ακριβές ξενοδοχείο σας κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για οικογένεια που φτάνει με την ίδια πτήση;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Ελούντα;",
        description: "Πείτε μας τα στοιχεία πτήσης, το θέρετρο και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionAirportRethymno: {
    en: {
      meta: {
        title: "Heraklion Airport to Rethymno Transfer – Private Car",
        description: "Book a private transfer between Heraklion Airport and Rethymno, roughly midway to Chania on Crete's north coast.",
      },
      breadcrumbLabel: "Heraklion Airport to Rethymno",
      hero: {
        eyebrow: "Heraklion Airport → Rethymno",
        title: "Heraklion Airport to Rethymno Transfer",
        description: "A direct private transfer from Heraklion Airport to Rethymno, Crete's third-largest town.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion Airport to Rethymno",
        paragraphs: [
          "Rethymno sits roughly midway between Heraklion and Chania on Crete's north coast, typically around 80–90 km and 66–90 minutes from Heraklion Airport depending on traffic. It doesn't have its own airport, so most visitors arrive by private transfer from either Cretan airport.",
          "A private transfer takes you directly to your hotel or address in Rethymno's old town or nearby resort areas, without a change of vehicle.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 66–90 minutes, depending on traffic." },
          { title: "Route", description: "West from the airport along Crete's north coast highway (VOAK/A90)." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Rethymno-Based Stays", description: "Head directly to Rethymno without a stop in Heraklion city." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-town or town-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Rethymno",
        items: [
          { label: "Rethymno", href: "/city/rethymno/", description: "See our overview of transfers across Rethymno." },
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Chania Airport to Rethymno", href: "/route/chania-airport-to-rethymno/", description: "The equivalent route from Crete's western airport." },
          { label: "Heraklion Airport to Chania", href: "/route/heraklion-airport-to-chania/", description: "Continue further west to Chania." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Heraklion Airport to Rethymno take?", answer: "Typically around 66–90 minutes, depending on traffic." },
          { question: "Is Heraklion or Chania Airport closer to Rethymno?", answer: "Both airports are broadly similar distances from Rethymno, since it sits roughly midway between them." },
          { question: "Can you arrange a transfer for a group arriving on the same flight?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Rethymno Transfer?",
        description: "Tell us your flight details, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Ρέθυμνο – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Ηρακλείου και Ρεθύμνου, περίπου στη μέση της διαδρομής προς τα Χανιά.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου προς Ρέθυμνο",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου → Ρέθυμνο",
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Ρέθυμνο",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Ρέθυμνο, την τρίτη μεγαλύτερη πόλη της Κρήτης.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Ηρακλείου προς το Ρέθυμνο",
        paragraphs: [
          "Το Ρέθυμνο βρίσκεται περίπου στη μέση της διαδρομής μεταξύ Ηρακλείου και Χανίων στη βόρεια ακτή της Κρήτης, συνήθως περίπου 80-90 χλμ και 66-90 λεπτά από το Αεροδρόμιο Ηρακλείου ανάλογα με την κίνηση. Δεν διαθέτει δικό του αεροδρόμιο, οπότε οι περισσότεροι επισκέπτες φτάνουν με ιδιωτική μεταφορά από οποιοδήποτε από τα δύο αεροδρόμια της Κρήτης.",
          "Μια ιδιωτική μεταφορά σας μεταφέρει απευθείας στο ξενοδοχείο ή τη διεύθυνσή σας στην παλιά πόλη του Ρεθύμνου ή σε κοντινές περιοχές θερέτρων, χωρίς αλλαγή οχήματος.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 66-90 λεπτά, ανάλογα με την κίνηση." },
          { title: "Διαδρομή", description: "Δυτικά από το αεροδρόμιο κατά μήκος του βόρειου οδικού άξονα της Κρήτης (ΒΟΑΚ/Α90)." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Διαμονή στο Ρέθυμνο", description: "Κατευθυνθείτε απευθείας στο Ρέθυμνο χωρίς στάση στην πόλη του Ηρακλείου." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς πόλη ή πόλη προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε το Ρέθυμνο",
        items: [
          { label: "Ρέθυμνο", href: "/el/poli/rethymno/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλο το Ρέθυμνο." },
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Χανίων προς Ρέθυμνο", href: "/el/diadromi/aerodromio-chanion-rethymno/", description: "Η αντίστοιχη διαδρομή από το δυτικό αεροδρόμιο της Κρήτης." },
          { label: "Αεροδρόμιο Ηρακλείου προς Χανιά", href: "/el/diadromi/aerodromio-irakleiou-chania/", description: "Συνεχίστε περαιτέρω δυτικά προς τα Χανιά." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Ηρακλείου στο Ρέθυμνο;", answer: "Συνήθως περίπου 66-90 λεπτά, ανάλογα με την κίνηση." },
          { question: "Ποιο αεροδρόμιο είναι πιο κοντά στο Ρέθυμνο, το Ηράκλειο ή τα Χανιά;", answer: "Και τα δύο αεροδρόμια βρίσκονται σε γενικά παρόμοια απόσταση από το Ρέθυμνο, καθώς βρίσκεται περίπου στη μέση μεταξύ τους." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που φτάνει με την ίδια πτήση;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Ρέθυμνο;",
        description: "Πείτε μας τα στοιχεία πτήσης, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionAirportChania: {
    en: {
      meta: {
        title: "Heraklion Airport to Chania Transfer – Private Car",
        description: "Book a private transfer between Heraklion Airport and Chania, along Crete's north coast highway.",
      },
      breadcrumbLabel: "Heraklion Airport to Chania",
      hero: {
        eyebrow: "Heraklion Airport → Chania",
        title: "Heraklion Airport to Chania Transfer",
        description: "A direct private transfer from Heraklion Airport to Chania, bypassing central Heraklion.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion Airport to Chania",
        paragraphs: [
          "Heraklion Airport and Chania are roughly 140–150 km apart, connected by the Northern Highway of Crete (VOAK/A90), typically around 2 to 2.5 hours by road. Since the airport sits east of Heraklion city, this route doesn't need to pass through the city centre.",
          "This is a common choice for visitors flying into Heraklion but staying in or near Chania, avoiding the need to change airports or add an extra leg through the city.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 2 to 2.5 hours, depending on traffic and road conditions." },
          { title: "Route", description: "Via the Northern Highway of Crete (VOAK/A90), passing Rethymno roughly halfway." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Cross-Island Travel", description: "Fly into Heraklion and travel directly to accommodation near Chania." },
          { title: "Multi-Stop Crete Itineraries", description: "Combine both halves of the island in a single trip." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the long drive." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Crete",
        items: [
          { label: "Chania", href: "/city/chania/", description: "See our overview of transfers across Chania." },
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion to Chania", href: "/route/heraklion-to-chania/", description: "The equivalent route starting from central Heraklion." },
          { label: "Heraklion Airport to Rethymno", href: "/route/heraklion-airport-to-rethymno/", description: "A shorter transfer roughly halfway to Chania." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Heraklion Airport to Chania take?", answer: "Typically around 2 to 2.5 hours, depending on traffic and road conditions." },
          { question: "Does this route pass through central Heraklion?", answer: "No, it heads directly from the airport along the north coast highway toward Chania." },
          { question: "Can you arrange a transfer for a group arriving on the same flight?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Chania Transfer?",
        description: "Tell us your flight details, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Χανιά – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Ηρακλείου και Χανίων, κατά μήκος του βόρειου οδικού άξονα της Κρήτης.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου προς Χανιά",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου → Χανιά",
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Χανιά",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς τα Χανιά, παρακάμπτοντας το κέντρο του Ηρακλείου.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Ηρακλείου προς τα Χανιά",
        paragraphs: [
          "Το Αεροδρόμιο Ηρακλείου και τα Χανιά απέχουν περίπου 140-150 χλμ, συνδεδεμένα μέσω του Βόρειου Οδικού Άξονα της Κρήτης (ΒΟΑΚ/Α90), συνήθως περίπου 2 έως 2,5 ώρες οδικώς. Καθώς το αεροδρόμιο βρίσκεται ανατολικά της πόλης του Ηρακλείου, αυτή η διαδρομή δεν χρειάζεται να περάσει από το κέντρο της πόλης.",
          "Αυτή είναι συνηθισμένη επιλογή για επισκέπτες που πετούν προς το Ηράκλειο αλλά μένουν στα ή κοντά στα Χανιά, αποφεύγοντας την ανάγκη αλλαγής αεροδρομίου ή προσθήκης επιπλέον διαδρομής μέσω της πόλης.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 2 έως 2,5 ώρες, ανάλογα με την κίνηση και τις συνθήκες του δρόμου." },
          { title: "Διαδρομή", description: "Μέσω του Βόρειου Οδικού Άξονα της Κρήτης (ΒΟΑΚ/Α90), περνώντας το Ρέθυμνο περίπου στη μέση." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Ταξίδι σε Όλο το Νησί", description: "Πετάξτε προς το Ηράκλειο και ταξιδέψτε απευθείας προς κατάλυμα κοντά στα Χανιά." },
          { title: "Ταξίδια με Πολλαπλές Στάσεις στην Κρήτη", description: "Συνδυάστε και τα δύο μισά του νησιού σε ένα ταξίδι." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για τη μεγάλη διαδρομή." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε την Κρήτη",
        items: [
          { label: "Χανιά", href: "/el/poli/chania/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλα τα Χανιά." },
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Ηράκλειο προς Χανιά", href: "/el/diadromi/irakleio-chania/", description: "Η αντίστοιχη διαδρομή με αφετηρία το κέντρο του Ηρακλείου." },
          { label: "Αεροδρόμιο Ηρακλείου προς Ρέθυμνο", href: "/el/diadromi/aerodromio-irakleiou-rethymno/", description: "Μια συντομότερη μεταφορά περίπου στη μέση της διαδρομής προς τα Χανιά." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Ηρακλείου στα Χανιά;", answer: "Συνήθως περίπου 2 έως 2,5 ώρες, ανάλογα με την κίνηση και τις συνθήκες του δρόμου." },
          { question: "Περνάει αυτή η διαδρομή από το κέντρο του Ηρακλείου;", answer: "Όχι, κατευθύνεται απευθείας από το αεροδρόμιο κατά μήκος του βόρειου οδικού άξονα προς τα Χανιά." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που φτάνει με την ίδια πτήση;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Χανιά;",
        description: "Πείτε μας τα στοιχεία πτήσης, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionAirportPort: {
    en: {
      meta: {
        title: "Heraklion Airport to Port Transfer – Private Car",
        description: "Book a private transfer between Heraklion Airport and Heraklion Port, useful for cruise and ferry connections.",
      },
      breadcrumbLabel: "Heraklion Airport to Port",
      hero: {
        eyebrow: "Heraklion Airport → Port",
        title: "Heraklion Airport to Port Transfer",
        description: "A short private transfer between Heraklion Airport and Heraklion Port, for cruise and ferry connections.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion Airport to the Port",
        paragraphs: [
          "Heraklion Airport and Heraklion Port sit close together on the same side of the city, making this one of the shorter transfers on our Crete network. It's a common connection for travellers flying in before a ferry to Piraeus, or disembarking and continuing on a flight.",
          "Sharing your flight and ferry or cruise details when requesting a quote helps your pickup be planned around both ends of the journey.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "A short, direct transfer given the port and airport's close proximity." },
          { title: "Route", description: "Within Heraklion, between the airport and the port area." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Ferry or Cruise Details", description: "Share your sailing time so the transfer can be timed accordingly." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Ferry Embarkation", description: "Fly in and head directly to the port for your ferry to Piraeus." },
          { title: "Ferry Disembarkation", description: "Head straight from the port to the airport for your onward flight." },
          { title: "Groups & Families", description: "A private vehicle keeps your group and luggage together for the whole journey." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Heraklion",
        items: [
          { label: "Heraklion Port", href: "/port/heraklion/", description: "See our dedicated port transfer information." },
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion to Chania", href: "/route/heraklion-to-chania/", description: "For onward travel across the island." },
          { label: "Heraklion Airport to Hersonissos", href: "/route/heraklion-airport-to-hersonissos/", description: "For onward travel to a nearby resort area." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can I book a transfer from Heraklion Airport to the port for a ferry?", answer: "Yes, share your flight and ferry details when requesting a quote so your pickup can be timed accordingly." },
          { question: "Can I travel from the port to the airport after disembarking?", answer: "Yes, this transfer works in both directions — mention your onward flight when requesting a quote." },
          { question: "How long does the transfer between the airport and port take?", answer: "It's a short, direct journey given how close the two are to each other." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Port Transfer?",
        description: "Tell us your flight and sailing details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Λιμάνι – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Ηρακλείου και Λιμανιού Ηρακλείου, χρήσιμη για συνδέσεις κρουαζιέρας και ferry.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου προς Λιμάνι",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου → Λιμάνι",
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Λιμάνι",
        description: "Μια σύντομη ιδιωτική μεταφορά μεταξύ του Αεροδρομίου Ηρακλείου και του Λιμανιού Ηρακλείου, για συνδέσεις κρουαζιέρας και ferry.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Ηρακλείου προς το Λιμάνι",
        paragraphs: [
          "Το Αεροδρόμιο Ηρακλείου και το Λιμάνι Ηρακλείου βρίσκονται κοντά, στην ίδια πλευρά της πόλης, καθιστώντας αυτή μία από τις συντομότερες μεταφορές στο δίκτυό μας στην Κρήτη. Είναι συνηθισμένη σύνδεση για ταξιδιώτες που πετούν πριν από ferry προς τον Πειραιά, ή αποβιβάζονται και συνεχίζουν με πτήση.",
          "Η αναφορά των στοιχείων πτήσης και ferry ή κρουαζιέρας σας κατά την αίτηση προσφοράς βοηθά η παραλαβή σας να σχεδιαστεί γύρω από και τις δύο πλευρές του ταξιδιού.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Μια σύντομη, απευθείας μεταφορά δεδομένης της κοντινής απόστασης μεταξύ λιμανιού και αεροδρομίου." },
          { title: "Διαδρομή", description: "Εντός του Ηρακλείου, μεταξύ του αεροδρομίου και της περιοχής του λιμανιού." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Στοιχεία Ferry ή Κρουαζιέρας", description: "Δώστε μας την ώρα απόπλου σας ώστε η μεταφορά να προγραμματιστεί ανάλογα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Επιβίβαση σε Ferry", description: "Πετάξτε και κατευθυνθείτε απευθείας στο λιμάνι για το ferry σας προς τον Πειραιά." },
          { title: "Αποβίβαση από Ferry", description: "Κατευθυνθείτε απευθείας από το λιμάνι στο αεροδρόμιο για την πτήση επιστροφής σας." },
          { title: "Ομάδες & Οικογένειες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε το Ηράκλειο",
        items: [
          { label: "Λιμάνι Ηρακλείου", href: "/el/limani/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς λιμανιού." },
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Ηράκλειο προς Χανιά", href: "/el/diadromi/irakleio-chania/", description: "Για περαιτέρω ταξίδι σε όλο το νησί." },
          { label: "Αεροδρόμιο Ηρακλείου προς Χερσόνησο", href: "/el/diadromi/aerodromio-irakleiou-chersonisos/", description: "Για περαιτέρω ταξίδι προς κοντινή περιοχή θερέτρου." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορώ να κλείσω μεταφορά από το Αεροδρόμιο Ηρακλείου προς το λιμάνι για ferry;", answer: "Ναι, δώστε μας τα στοιχεία πτήσης και ferry κατά την αίτηση προσφοράς ώστε η παραλαβή σας να προγραμματιστεί ανάλογα." },
          { question: "Μπορώ να ταξιδέψω από το λιμάνι προς το αεροδρόμιο μετά την αποβίβαση;", answer: "Ναι, αυτή η μεταφορά λειτουργεί και προς τις δύο κατευθύνσεις — αναφέρετε την πτήση επιστροφής σας κατά την αίτηση προσφοράς." },
          { question: "Πόσο διαρκεί η μεταφορά μεταξύ αεροδρομίου και λιμανιού;", answer: "Είναι σύντομο, απευθείας ταξίδι δεδομένης της κοντινής απόστασης μεταξύ τους." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Λιμάνι;",
        description: "Πείτε μας τα στοιχεία πτήσης και απόπλου σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeChaniaAirportRethymno: {
    en: {
      meta: {
        title: "Chania Airport to Rethymno Transfer – Private Car",
        description: "Book a private transfer between Chania Airport and Rethymno, roughly 66-68 km east along Crete's north coast.",
      },
      breadcrumbLabel: "Chania Airport to Rethymno",
      hero: {
        eyebrow: "Chania Airport → Rethymno",
        title: "Chania Airport to Rethymno Transfer",
        description: "A direct private transfer from Chania Airport to Rethymno, typically around an hour along the north coast.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Chania Airport to Rethymno",
        paragraphs: [
          "Rethymno sits roughly 66–68 km east of Chania Airport, typically around an hour to an hour and ten minutes by road. It's Crete's third-largest town, known for its Venetian old town and fortress.",
          "A private transfer takes you directly to your hotel or address in Rethymno, without needing to change vehicles after your flight.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around an hour to an hour and ten minutes, depending on traffic." },
          { title: "Route", description: "East from the airport along Crete's north coast road toward Rethymno." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Rethymno-Based Stays", description: "Head directly to Rethymno after landing at Chania Airport." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-town or town-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Rethymno",
        items: [
          { label: "Rethymno", href: "/city/rethymno/", description: "See our overview of transfers across Rethymno." },
          { label: "Chania Airport", href: "/airport/chania-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion Airport to Rethymno", href: "/route/heraklion-airport-to-rethymno/", description: "The equivalent route from Crete's eastern airport." },
          { label: "Chania Airport to Georgioupolis", href: "/route/chania-airport-to-georgioupolis/", description: "A shorter transfer roughly halfway to Rethymno." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Chania Airport to Rethymno take?", answer: "Typically around an hour to an hour and ten minutes, depending on traffic." },
          { question: "Is Chania or Heraklion Airport closer to Rethymno?", answer: "Both airports are broadly similar distances from Rethymno, since it sits roughly midway between them." },
          { question: "Can you arrange a transfer for a group arriving on the same flight?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Rethymno Transfer?",
        description: "Tell us your flight details, destination and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Χανίων – Ρέθυμνο – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Χανίων και Ρεθύμνου, περίπου 66-68 χλμ ανατολικά κατά μήκος της βόρειας ακτής της Κρήτης.",
      },
      breadcrumbLabel: "Αεροδρόμιο Χανίων προς Ρέθυμνο",
      hero: {
        eyebrow: "Αεροδρόμιο Χανίων → Ρέθυμνο",
        title: "Μεταφορά Αεροδρόμιο Χανίων – Ρέθυμνο",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Χανίων προς το Ρέθυμνο, συνήθως περίπου μία ώρα κατά μήκος της βόρειας ακτής.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Χανίων προς το Ρέθυμνο",
        paragraphs: [
          "Το Ρέθυμνο βρίσκεται περίπου 66-68 χλμ ανατολικά του Αεροδρομίου Χανίων, συνήθως περίπου μία ώρα έως μία ώρα και δέκα λεπτά οδικώς. Είναι η τρίτη μεγαλύτερη πόλη της Κρήτης, γνωστή για την Ενετική παλιά πόλη και το φρούριό της.",
          "Μια ιδιωτική μεταφορά σας μεταφέρει απευθείας στο ξενοδοχείο ή τη διεύθυνσή σας στο Ρέθυμνο, χωρίς να χρειάζεται αλλαγή οχήματος μετά την πτήση σας.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου μία ώρα έως μία ώρα και δέκα λεπτά, ανάλογα με την κίνηση." },
          { title: "Διαδρομή", description: "Ανατολικά από το αεροδρόμιο κατά μήκος του βόρειου παράκτιου δρόμου της Κρήτης προς το Ρέθυμνο." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Διαμονή στο Ρέθυμνο", description: "Κατευθυνθείτε απευθείας στο Ρέθυμνο μετά την προσγείωση στο Αεροδρόμιο Χανίων." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς πόλη ή πόλη προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε το Ρέθυμνο",
        items: [
          { label: "Ρέθυμνο", href: "/el/poli/rethymno/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλο το Ρέθυμνο." },
          { label: "Αεροδρόμιο Χανίων", href: "/el/aerodromio/chania/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Ρέθυμνο", href: "/el/diadromi/aerodromio-irakleiou-rethymno/", description: "Η αντίστοιχη διαδρομή από το ανατολικό αεροδρόμιο της Κρήτης." },
          { label: "Αεροδρόμιο Χανίων προς Γεωργιούπολη", href: "/el/diadromi/aerodromio-chanion-georgioupolis/", description: "Μια συντομότερη μεταφορά περίπου στη μέση της διαδρομής προς το Ρέθυμνο." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Χανίων στο Ρέθυμνο;", answer: "Συνήθως περίπου μία ώρα έως μία ώρα και δέκα λεπτά, ανάλογα με την κίνηση." },
          { question: "Ποιο αεροδρόμιο είναι πιο κοντά στο Ρέθυμνο, τα Χανιά ή το Ηράκλειο;", answer: "Και τα δύο αεροδρόμια βρίσκονται σε γενικά παρόμοια απόσταση από το Ρέθυμνο, καθώς βρίσκεται περίπου στη μέση μεταξύ τους." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που φτάνει με την ίδια πτήση;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Ρέθυμνο;",
        description: "Πείτε μας τα στοιχεία πτήσης, τον προορισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeChaniaAirportPlatanias: {
    en: {
      meta: {
        title: "Chania Airport to Platanias Transfer – Private Car",
        description: "Book a private transfer between Chania Airport and Platanias, the resort strip west of Chania town.",
      },
      breadcrumbLabel: "Chania Airport to Platanias",
      hero: {
        eyebrow: "Chania Airport → Platanias",
        title: "Chania Airport to Platanias Transfer",
        description: "A direct private transfer from Chania Airport to Platanias, roughly 25-30 minutes away.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Chania Airport to Platanias",
        paragraphs: [
          "Platanias sits around 26 km from Chania Airport, typically around 25–30 minutes by road via Chania town. It's part of a resort strip west of Chania with several neighbouring beach villages along the same stretch of coast.",
          "A private transfer takes you directly to your hotel in Platanias, avoiding the need to arrange local transport with resort luggage.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 25–30 minutes, depending on traffic." },
          { title: "Route", description: "From the airport via Chania town, then west along the coast." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Hotel Details", description: "Let us know your exact hotel when requesting a quote." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Beach Holiday Arrivals", description: "Head straight to your Platanias hotel after landing." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Platanias",
        items: [
          { label: "Platanias", href: "/destination/platanias/", description: "See our destination overview of Platanias." },
          { label: "Chania Airport", href: "/airport/chania-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Chania Airport to Georgioupolis", href: "/route/chania-airport-to-georgioupolis/", description: "A longer transfer further east along the coast." },
          { label: "Chania to Elafonissi", href: "/route/chania-to-elafonissi/", description: "A day trip further along the western coastline." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Chania Airport to Platanias take?", answer: "Typically around 25–30 minutes, depending on traffic." },
          { question: "Is Platanias close to Chania's old town?", answer: "Yes, Platanias is around 11 km from Chania town itself." },
          { question: "Can you arrange a transfer for a family arriving on the same flight?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Platanias Transfer?",
        description: "Tell us your flight details, hotel and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Χανίων – Πλατανιάς – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Χανίων και Πλατανιά, της τουριστικής ζώνης δυτικά της πόλης των Χανίων.",
      },
      breadcrumbLabel: "Αεροδρόμιο Χανίων προς Πλατανιά",
      hero: {
        eyebrow: "Αεροδρόμιο Χανίων → Πλατανιάς",
        title: "Μεταφορά Αεροδρόμιο Χανίων – Πλατανιάς",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Χανίων προς τον Πλατανιά, περίπου 25-30 λεπτά μακριά.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Χανίων προς τον Πλατανιά",
        paragraphs: [
          "Ο Πλατανιάς βρίσκεται περίπου 26 χλμ από το Αεροδρόμιο Χανίων, συνήθως περίπου 25-30 λεπτά οδικώς μέσω της πόλης των Χανίων. Είναι μέρος μιας τουριστικής ζώνης δυτικά των Χανίων με αρκετά γειτονικά παραθαλάσσια χωριά κατά μήκος της ίδιας ακτής.",
          "Μια ιδιωτική μεταφορά σας μεταφέρει απευθείας στο ξενοδοχείο σας στον Πλατανιά, αποφεύγοντας την ανάγκη οργάνωσης τοπικής μεταφοράς με αποσκευές θέρετρου.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 25-30 λεπτά, ανάλογα με την κίνηση." },
          { title: "Διαδρομή", description: "Από το αεροδρόμιο μέσω της πόλης των Χανίων, στη συνέχεια δυτικά κατά μήκος της ακτής." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Στοιχεία Ξενοδοχείου", description: "Ενημερώστε μας για το ακριβές ξενοδοχείο σας κατά την αίτηση προσφοράς." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Αφίξεις για Παραθαλάσσιες Διακοπές", description: "Κατευθυνθείτε απευθείας στο ξενοδοχείο σας στον Πλατανιά μετά την προσγείωση." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς ξενοδοχείο ή ξενοδοχείο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τον Πλατανιά",
        items: [
          { label: "Πλατανιάς", href: "/el/proorismos/platanias/", description: "Δείτε την επισκόπηση προορισμού μας για τον Πλατανιά." },
          { label: "Αεροδρόμιο Χανίων", href: "/el/aerodromio/chania/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Χανίων προς Γεωργιούπολη", href: "/el/diadromi/aerodromio-chanion-georgioupolis/", description: "Μια μεγαλύτερη μεταφορά πιο ανατολικά κατά μήκος της ακτής." },
          { label: "Χανιά προς Ελαφονήσι", href: "/el/diadromi/chania-elafonisi/", description: "Μια εκδρομή πιο μακριά κατά μήκος της δυτικής ακτογραμμής." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Χανίων στον Πλατανιά;", answer: "Συνήθως περίπου 25-30 λεπτά, ανάλογα με την κίνηση." },
          { question: "Είναι ο Πλατανιάς κοντά στην παλιά πόλη των Χανίων;", answer: "Ναι, ο Πλατανιάς απέχει περίπου 11 χλμ από την ίδια την πόλη των Χανίων." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για οικογένεια που φτάνει με την ίδια πτήση;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Πλατανιάς;",
        description: "Πείτε μας τα στοιχεία πτήσης, το ξενοδοχείο και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeChaniaAirportGeorgioupolis: {
    en: {
      meta: {
        title: "Chania Airport to Georgioupolis Transfer – Private Car",
        description: "Book a private transfer between Chania Airport and Georgioupolis, a coastal resort town toward Rethymno.",
      },
      breadcrumbLabel: "Chania Airport to Georgioupolis",
      hero: {
        eyebrow: "Chania Airport → Georgioupolis",
        title: "Chania Airport to Georgioupolis Transfer",
        description: "A direct private transfer from Chania Airport to Georgioupolis, roughly 50 minutes away.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Chania Airport to Georgioupolis",
        paragraphs: [
          "Georgioupolis sits around 47 km from Chania Airport, typically around 50 minutes by road, roughly midway between Chania and Rethymno. It's known for a long sandy beach and a eucalyptus-lined town square.",
          "A private transfer takes you directly to your hotel in Georgioupolis, a straightforward journey along the north coast road.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 50 minutes, depending on traffic." },
          { title: "Route", description: "East from the airport via Chania town, along the north coast road." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Hotel Details", description: "Let us know your exact hotel when requesting a quote." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Beach Holiday Arrivals", description: "Head straight to your Georgioupolis hotel after landing." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Georgioupolis",
        items: [
          { label: "Georgioupolis", href: "/destination/georgioupolis/", description: "See our destination overview of Georgioupolis." },
          { label: "Chania Airport", href: "/airport/chania-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Chania Airport to Rethymno", href: "/route/chania-airport-to-rethymno/", description: "Continue further east to Rethymno." },
          { label: "Chania Airport to Platanias", href: "/route/chania-airport-to-platanias/", description: "A shorter transfer in the opposite direction." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Chania Airport to Georgioupolis take?", answer: "Typically around 50 minutes, depending on traffic." },
          { question: "Can I reach Georgioupolis from Heraklion Airport instead?", answer: "Yes, mention this when requesting a quote — Chania Airport is generally the closer option." },
          { question: "Can you arrange a transfer for a family arriving on the same flight?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Georgioupolis Transfer?",
        description: "Tell us your flight details, hotel and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Χανίων – Γεωργιούπολη – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά μεταξύ Αεροδρομίου Χανίων και Γεωργιούπολης, μιας παράκτιας πόλης θερέτρου προς το Ρέθυμνο.",
      },
      breadcrumbLabel: "Αεροδρόμιο Χανίων προς Γεωργιούπολη",
      hero: {
        eyebrow: "Αεροδρόμιο Χανίων → Γεωργιούπολη",
        title: "Μεταφορά Αεροδρόμιο Χανίων – Γεωργιούπολη",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Χανίων προς τη Γεωργιούπολη, περίπου 50 λεπτά μακριά.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Χανίων προς τη Γεωργιούπολη",
        paragraphs: [
          "Η Γεωργιούπολη βρίσκεται περίπου 47 χλμ από το Αεροδρόμιο Χανίων, συνήθως περίπου 50 λεπτά οδικώς, περίπου στη μέση της διαδρομής μεταξύ Χανίων και Ρεθύμνου. Είναι γνωστή για μια μακριά αμμώδη παραλία και μια πλατεία με ευκαλύπτους.",
          "Μια ιδιωτική μεταφορά σας μεταφέρει απευθείας στο ξενοδοχείο σας στη Γεωργιούπολη, ένα απλό ταξίδι κατά μήκος του βόρειου παράκτιου δρόμου.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 50 λεπτά, ανάλογα με την κίνηση." },
          { title: "Διαδρομή", description: "Ανατολικά από το αεροδρόμιο μέσω της πόλης των Χανίων, κατά μήκος του βόρειου παράκτιου δρόμου." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Στοιχεία Ξενοδοχείου", description: "Ενημερώστε μας για το ακριβές ξενοδοχείο σας κατά την αίτηση προσφοράς." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Αφίξεις για Παραθαλάσσιες Διακοπές", description: "Κατευθυνθείτε απευθείας στο ξενοδοχείο σας στη Γεωργιούπολη μετά την προσγείωση." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς ξενοδοχείο ή ξενοδοχείο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Γεωργιούπολη",
        items: [
          { label: "Γεωργιούπολη", href: "/el/proorismos/georgioupolis/", description: "Δείτε την επισκόπηση προορισμού μας για τη Γεωργιούπολη." },
          { label: "Αεροδρόμιο Χανίων", href: "/el/aerodromio/chania/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Χανίων προς Ρέθυμνο", href: "/el/diadromi/aerodromio-chanion-rethymno/", description: "Συνεχίστε περαιτέρω ανατολικά προς το Ρέθυμνο." },
          { label: "Αεροδρόμιο Χανίων προς Πλατανιά", href: "/el/diadromi/aerodromio-chanion-platanias/", description: "Μια συντομότερη μεταφορά προς την αντίθετη κατεύθυνση." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Αεροδρόμιο Χανίων στη Γεωργιούπολη;", answer: "Συνήθως περίπου 50 λεπτά, ανάλογα με την κίνηση." },
          { question: "Μπορώ να φτάσω στη Γεωργιούπολη από το Αεροδρόμιο Ηρακλείου αντί;", answer: "Ναι, αναφέρετέ το κατά την αίτηση προσφοράς — το Αεροδρόμιο Χανίων είναι γενικά η πλησιέστερη επιλογή." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για οικογένεια που φτάνει με την ίδια πτήση;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Γεωργιούπολη;",
        description: "Πείτε μας τα στοιχεία πτήσης, το ξενοδοχείο και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionKnossos: {
    en: {
      meta: {
        title: "Heraklion to Knossos Private Transfer & Day Trip",
        description: "Book a private transfer or day trip from Heraklion to the Minoan palace site of Knossos, Crete's most visited archaeological attraction.",
      },
      breadcrumbLabel: "Heraklion to Knossos",
      hero: {
        eyebrow: "Heraklion → Knossos",
        title: "Heraklion to Knossos Private Transfer",
        description: "A private transfer from Heraklion to Knossos, the Minoan palace site around 6–7 km southeast of the city.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion to Knossos",
        paragraphs: [
          "Knossos is around 6–7 km southeast of Heraklion, typically reached in 15–20 minutes by road — one of the shortest and simplest transfers on our Crete network. It's Crete's most visited archaeological site, associated with the Minoan civilisation.",
          "This can be booked as a straightforward one-way transfer, or as a day trip with the vehicle and driver waiting while you explore the site before returning to Heraklion or continuing elsewhere.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 15–20 minutes, one of the shortest routes we cover." },
          { title: "Route", description: "A short drive southeast from Heraklion." },
          { title: "One-Way or Day Trip", description: "Let us know whether you need a one-way transfer or a return day trip." },
          { title: "Pickup Point", description: "Share your hotel or address in Heraklion when requesting a quote." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Half-Day Visitors", description: "See Knossos and return to Heraklion the same morning or afternoon." },
          { title: "Cruise & Port Stopovers", description: "A short, well-timed visit for travellers with limited time in Heraklion." },
          { title: "Families & Groups", description: "A private vehicle keeps your group together for the visit." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Heraklion",
        items: [
          { label: "Heraklion", href: "/city/heraklion/", description: "See our overview of transfers across Heraklion." },
          { label: "Crete Day Trips", href: "/crete-day-trips/", description: "See our full range of private day trips across Crete." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion Airport to Port", href: "/route/heraklion-airport-to-port/", description: "For travellers connecting between the airport and the ferry port." },
          { label: "Heraklion to Chania", href: "/route/heraklion-to-chania/", description: "For onward travel across the island." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Heraklion to Knossos take?", answer: "Typically around 15–20 minutes, one of the shortest routes on our Crete network." },
          { question: "Can this be booked as a day trip with a return journey?", answer: "Yes, mention that you'd like a return day trip when requesting a quote." },
          { question: "Can you arrange a transfer for a group visiting Knossos?", answer: "Yes, mention your total passenger numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Heraklion to Knossos Transfer?",
        description: "Tell us your pickup point, timing and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτική Μεταφορά & Εκδρομή Ηράκλειο – Κνωσός",
        description: "Κλείστε ιδιωτική μεταφορά ή εκδρομή από το Ηράκλειο προς τον μινωικό αρχαιολογικό χώρο της Κνωσού, το πιο επισκέψιμο αξιοθέατο της Κρήτης.",
      },
      breadcrumbLabel: "Ηράκλειο προς Κνωσό",
      hero: {
        eyebrow: "Ηράκλειο → Κνωσός",
        title: "Ιδιωτική Μεταφορά Ηράκλειο – Κνωσός",
        description: "Μια ιδιωτική μεταφορά από το Ηράκλειο προς την Κνωσό, τον μινωικό αρχαιολογικό χώρο περίπου 6-7 χλμ νοτιοανατολικά της πόλης.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Ηράκλειο προς την Κνωσό",
        paragraphs: [
          "Η Κνωσός βρίσκεται περίπου 6-7 χλμ νοτιοανατολικά του Ηρακλείου, συνήθως προσεγγίζεται σε 15-20 λεπτά οδικώς — μία από τις συντομότερες και απλούστερες μεταφορές στο δίκτυό μας στην Κρήτη. Είναι ο πιο επισκέψιμος αρχαιολογικός χώρος της Κρήτης, συνδεδεμένος με τον μινωικό πολιτισμό.",
          "Αυτή μπορεί να κλειστεί ως απλή μονόδρομη μεταφορά, ή ως εκδρομή με το όχημα και τον οδηγό να περιμένουν όσο εξερευνάτε τον χώρο πριν την επιστροφή στο Ηράκλειο ή τη συνέχεια αλλού.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 15-20 λεπτά, μία από τις συντομότερες διαδρομές που καλύπτουμε." },
          { title: "Διαδρομή", description: "Μια σύντομη διαδρομή νοτιοανατολικά από το Ηράκλειο." },
          { title: "Μονόδρομη ή Εκδρομή", description: "Ενημερώστε μας αν χρειάζεστε μονόδρομη μεταφορά ή εκδρομή με επιστροφή." },
          { title: "Σημείο Παραλαβής", description: "Αναφέρετε το ξενοδοχείο ή τη διεύθυνσή σας στο Ηράκλειο κατά την αίτηση προσφοράς." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Επισκέπτες Μισής Ημέρας", description: "Δείτε την Κνωσό και επιστρέψτε στο Ηράκλειο το ίδιο πρωί ή απόγευμα." },
          { title: "Στάσεις Κρουαζιέρας & Λιμανιού", description: "Μια σύντομη, καλά χρονομετρημένη επίσκεψη για ταξιδιώτες με περιορισμένο χρόνο στο Ηράκλειο." },
          { title: "Οικογένειες & Ομάδες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα σας μαζί για την επίσκεψη." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε το Ηράκλειο",
        items: [
          { label: "Ηράκλειο", href: "/el/poli/irakleio/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλο το Ηράκλειο." },
          { label: "Ιδιωτικές Εκδρομές στην Κρήτη", href: "/el/idiotikes-ekdromes-kriti/", description: "Δείτε το πλήρες φάσμα ιδιωτικών εκδρομών μας σε όλη την Κρήτη." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Λιμάνι", href: "/el/diadromi/aerodromio-irakleiou-limani/", description: "Για ταξιδιώτες που συνδέονται μεταξύ αεροδρομίου και λιμανιού ferry." },
          { label: "Ηράκλειο προς Χανιά", href: "/el/diadromi/irakleio-chania/", description: "Για περαιτέρω ταξίδι σε όλο το νησί." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από το Ηράκλειο στην Κνωσό;", answer: "Συνήθως περίπου 15-20 λεπτά, μία από τις συντομότερες διαδρομές στο δίκτυό μας στην Κρήτη." },
          { question: "Μπορεί αυτό να κλειστεί ως εκδρομή με επιστροφή;", answer: "Ναι, αναφέρετε ότι θέλετε εκδρομή με επιστροφή κατά την αίτηση προσφοράς." },
          { question: "Μπορείτε να οργανώσετε μεταφορά για ομάδα που επισκέπτεται την Κνωσό;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Ηράκλειο – Κνωσός;",
        description: "Πείτε μας το σημείο παραλαβής, τον χρονισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeChaniaElafonissi: {
    en: {
      meta: {
        title: "Chania to Elafonissi Private Day Trip Transfer",
        description: "Book a private day-trip transfer from Chania to Elafonissi beach, one of Crete's best-known beaches, around 75 km away.",
      },
      breadcrumbLabel: "Chania to Elafonissi",
      hero: {
        eyebrow: "Chania → Elafonissi",
        title: "Chania to Elafonissi Private Transfer",
        description: "A private day-trip transfer from Chania to Elafonissi, around 75 km away on Crete's southwestern coast.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Chania to Elafonissi",
        paragraphs: [
          "Elafonissi is around 75 km from Chania, typically 1.5–2 hours by road via winding mountain routes including the Topolia Gorge. It's one of Crete's best-known beaches, reachable entirely by road, unlike some of the island's other well-known beaches.",
          "Given the distance, most visitors book this as a full day trip, with the vehicle and driver either waiting at the beach or returning at an agreed time.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 1.5–2 hours each way, via winding mountain roads." },
          { title: "Route", description: "Southwest from Chania via the Topolia Gorge area." },
          { title: "Day-Trip Timing", description: "Let us know how much time you'd like at the beach when requesting a quote." },
          { title: "Return Timing", description: "The vehicle waits or returns at an agreed time to bring you back to Chania." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Beach Day Trips", description: "A full day at one of Crete's most photographed beaches." },
          { title: "Families & Groups", description: "A private vehicle keeps your group together for the whole day." },
          { title: "Flexible Itineraries", description: "Choose your own timing at the beach rather than a fixed tour schedule." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Western Crete",
        items: [
          { label: "Chania", href: "/city/chania/", description: "See our overview of transfers across Chania." },
          { label: "Crete Day Trips", href: "/crete-day-trips/", description: "See our full range of private day trips across Crete." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Chania to Balos", href: "/route/chania-to-balos/", description: "Another well-known beach, requiring a 4x4 or boat for the final approach." },
          { label: "Chania to Samaria Gorge", href: "/route/chania-to-samaria-gorge/", description: "A hiking day trip further into the White Mountains." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How long does the transfer from Chania to Elafonissi take?", answer: "Typically around 1.5–2 hours each way, via winding mountain roads." },
          { question: "Can I get to Elafonissi entirely by road?", answer: "Yes, unlike some of Crete's other well-known beaches, Elafonissi is reachable entirely by car." },
          { question: "Can you arrange this for a group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Chania to Elafonissi Day Trip?",
        description: "Tell us your preferred timing and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτική Εκδρομή Χανιά – Ελαφονήσι",
        description: "Κλείστε ιδιωτική μεταφορά εκδρομής από τα Χανιά προς την παραλία Ελαφονήσι, μία από τις πιο γνωστές παραλίες της Κρήτης, περίπου 75 χλμ μακριά.",
      },
      breadcrumbLabel: "Χανιά προς Ελαφονήσι",
      hero: {
        eyebrow: "Χανιά → Ελαφονήσι",
        title: "Ιδιωτική Μεταφορά Χανιά – Ελαφονήσι",
        description: "Μια ιδιωτική μεταφορά εκδρομής από τα Χανιά προς το Ελαφονήσι, περίπου 75 χλμ μακριά στη νοτιοδυτική ακτή της Κρήτης.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από τα Χανιά προς το Ελαφονήσι",
        paragraphs: [
          "Το Ελαφονήσι βρίσκεται περίπου 75 χλμ από τα Χανιά, συνήθως 1,5-2 ώρες οδικώς μέσω ελικοειδών ορεινών διαδρομών, συμπεριλαμβανομένου του Φαραγγίου της Τοπόλιας. Είναι μία από τις πιο γνωστές παραλίες της Κρήτης, προσβάσιμη εξ ολοκλήρου οδικώς, σε αντίθεση με ορισμένες άλλες γνωστές παραλίες του νησιού.",
          "Δεδομένης της απόστασης, οι περισσότεροι επισκέπτες κλείνουν αυτό ως ολοήμερη εκδρομή, με το όχημα και τον οδηγό είτε να περιμένουν στην παραλία είτε να επιστρέφουν σε συμφωνημένη ώρα.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 1,5-2 ώρες κάθε διαδρομή, μέσω ελικοειδών ορεινών δρόμων." },
          { title: "Διαδρομή", description: "Νοτιοδυτικά από τα Χανιά μέσω της περιοχής του Φαραγγίου της Τοπόλιας." },
          { title: "Χρονισμός Εκδρομής", description: "Ενημερώστε μας πόσο χρόνο θα θέλατε στην παραλία κατά την αίτηση προσφοράς." },
          { title: "Χρονισμός Επιστροφής", description: "Το όχημα περιμένει ή επιστρέφει σε συμφωνημένη ώρα για να σας φέρει πίσω στα Χανιά." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Ημερήσιες Εκδρομές σε Παραλία", description: "Μια ολόκληρη μέρα σε μία από τις πιο φωτογραφημένες παραλίες της Κρήτης." },
          { title: "Οικογένειες & Ομάδες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα σας μαζί για ολόκληρη τη μέρα." },
          { title: "Ευέλικτο Πρόγραμμα", description: "Επιλέξτε τον δικό σας χρονισμό στην παραλία αντί για σταθερό πρόγραμμα εκδρομής." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Δυτική Κρήτη",
        items: [
          { label: "Χανιά", href: "/el/poli/chania/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλα τα Χανιά." },
          { label: "Ιδιωτικές Εκδρομές στην Κρήτη", href: "/el/idiotikes-ekdromes-kriti/", description: "Δείτε το πλήρες φάσμα ιδιωτικών εκδρομών μας σε όλη την Κρήτη." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Χανιά προς Μπάλο", href: "/el/diadromi/chania-balos/", description: "Μια άλλη γνωστή παραλία, που απαιτεί 4x4 ή βάρκα για την τελική προσέγγιση." },
          { label: "Χανιά προς Φαράγγι Σαμαριάς", href: "/el/diadromi/chania-farangi-samarias/", description: "Μια εκδρομή πεζοπορίας πιο μέσα στα Λευκά Όρη." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πόσο διαρκεί η μεταφορά από τα Χανιά στο Ελαφονήσι;", answer: "Συνήθως περίπου 1,5-2 ώρες κάθε διαδρομή, μέσω ελικοειδών ορεινών δρόμων." },
          { question: "Μπορώ να φτάσω στο Ελαφονήσι εξ ολοκλήρου οδικώς;", answer: "Ναι, σε αντίθεση με ορισμένες άλλες γνωστές παραλίες της Κρήτης, το Ελαφονήσι είναι προσβάσιμο εξ ολοκλήρου με αυτοκίνητο." },
          { question: "Μπορείτε να το οργανώσετε για ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε την Εκδρομή σας Χανιά – Ελαφονήσι;",
        description: "Πείτε μας τον προτιμώμενο χρονισμό και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeChaniaBalos: {
    en: {
      meta: {
        title: "Chania to Balos Private Transfer – Book Your Day Trip",
        description: "Book a private transfer from Chania toward the Balos lagoon, with a 4x4 track or boat needed for the final approach.",
      },
      breadcrumbLabel: "Chania to Balos",
      hero: {
        eyebrow: "Chania → Balos",
        title: "Chania to Balos Private Transfer",
        description: "A private day-trip transfer from Chania toward Balos, one of Crete's most photographed lagoons.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Chania to Balos",
        paragraphs: [
          "Balos is a lagoon on Crete's northwestern tip, near Kissamos, that isn't reachable by a standard car all the way to the water. The final approach requires either a 4x4 track from the village of Kaliviani followed by a walk down to the lagoon, or a boat tour departing from Kastelli Kissamos, Chania's Old Port, or Kolymbari.",
          "We can arrange your private transfer to the relevant starting point for whichever option you choose — mention your preference when requesting a quote so we can describe exactly what's involved.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "The drive to Kaliviani or a boat departure point takes roughly an hour to an hour and a half from Chania." },
          { title: "Final Approach", description: "A 4x4 track and walk from Kaliviani, or a boat tour — a standard car cannot reach the lagoon itself." },
          { title: "Which Option", description: "Let us know whether you're planning the 4x4/walking route or a boat tour when requesting a quote." },
          { title: "Day-Trip Timing", description: "Mention how much time you'd like at Balos when requesting a quote." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Beach Day Trips", description: "For visitors planning ahead for the extra logistics Balos involves." },
          { title: "Active Travellers", description: "Suited to those comfortable with a walk down to the lagoon on the 4x4 route." },
          { title: "Families & Groups", description: "A private vehicle keeps your group together for the drive to the starting point." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Western Crete",
        items: [
          { label: "Chania", href: "/city/chania/", description: "See our overview of transfers across Chania." },
          { label: "Crete Day Trips", href: "/crete-day-trips/", description: "See our full range of private day trips across Crete." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Chania to Elafonissi", href: "/route/chania-to-elafonissi/", description: "A beach reachable entirely by road, without the extra logistics." },
          { label: "Chania to Samaria Gorge", href: "/route/chania-to-samaria-gorge/", description: "Another day trip with its own specific logistics." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Can you take me all the way to the Balos lagoon?", answer: "The final approach requires a 4x4 track and a walk, or a boat tour — a standard car cannot reach the lagoon itself. We can arrange your transfer to the relevant starting point." },
          { question: "Is a boat tour or the 4x4 route better?", answer: "This depends on your preference — mention which you'd like when requesting a quote and we can describe what's involved." },
          { question: "How long should I plan for this day trip?", answer: "Allow for a full day given the driving and the additional 4x4 or boat leg." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Chania to Balos Transfer?",
        description: "Tell us which option you're planning and your passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτική Μεταφορά Χανιά – Μπάλος – Κλείστε την Εκδρομή σας",
        description: "Κλείστε ιδιωτική μεταφορά από τα Χανιά προς τη λιμνοθάλασσα του Μπάλου, με χωμάτινο δρόμο 4x4 ή βάρκα απαραίτητα για την τελική προσέγγιση.",
      },
      breadcrumbLabel: "Χανιά προς Μπάλο",
      hero: {
        eyebrow: "Χανιά → Μπάλος",
        title: "Ιδιωτική Μεταφορά Χανιά – Μπάλος",
        description: "Μια ιδιωτική μεταφορά εκδρομής από τα Χανιά προς τον Μπάλο, μία από τις πιο φωτογραφημένες λιμνοθάλασσες της Κρήτης.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από τα Χανιά προς τον Μπάλο",
        paragraphs: [
          "Ο Μπάλος είναι μια λιμνοθάλασσα στο βορειοδυτικό άκρο της Κρήτης, κοντά στην Καστέλι Κισσάμου, που δεν είναι προσβάσιμη με κανονικό αυτοκίνητο μέχρι το νερό. Η τελική προσέγγιση απαιτεί είτε χωμάτινο δρόμο με 4x4 από το χωριό Καλυβιανή και στη συνέχεια πεζοπορία μέχρι τη λιμνοθάλασσα, είτε βαρκάδα από την Καστέλι Κισσάμου, το Παλιό Λιμάνι των Χανίων, ή το Κολυμπάρι.",
          "Μπορούμε να οργανώσουμε την ιδιωτική σας μεταφορά προς το σχετικό σημείο εκκίνησης για όποια επιλογή διαλέξετε — αναφέρετε την προτίμησή σας κατά την αίτηση προσφοράς ώστε να σας εξηγήσουμε ακριβώς τι περιλαμβάνει.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Η διαδρομή προς την Καλυβιανή ή σημείο αναχώρησης βάρκας διαρκεί περίπου μία ώρα έως μία ώρα και μισή από τα Χανιά." },
          { title: "Τελική Προσέγγιση", description: "Χωμάτινος δρόμος 4x4 και πεζοπορία από την Καλυβιανή, ή βαρκάδα — ένα κανονικό αυτοκίνητο δεν μπορεί να φτάσει στην ίδια τη λιμνοθάλασσα." },
          { title: "Ποια Επιλογή", description: "Ενημερώστε μας αν σχεδιάζετε τη διαδρομή 4x4/πεζοπορίας ή βαρκάδα κατά την αίτηση προσφοράς." },
          { title: "Χρονισμός Εκδρομής", description: "Αναφέρετε πόσο χρόνο θα θέλατε στον Μπάλο κατά την αίτηση προσφοράς." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Ημερήσιες Εκδρομές σε Παραλία", description: "Για επισκέπτες που σχεδιάζουν εκ των προτέρων για τα επιπλέον λογιστικά που περιλαμβάνει ο Μπάλος." },
          { title: "Ενεργοί Ταξιδιώτες", description: "Κατάλληλο για όσους αισθάνονται άνετα με πεζοπορία μέχρι τη λιμνοθάλασσα στη διαδρομή 4x4." },
          { title: "Οικογένειες & Ομάδες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα σας μαζί για τη διαδρομή προς το σημείο εκκίνησης." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Δυτική Κρήτη",
        items: [
          { label: "Χανιά", href: "/el/poli/chania/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλα τα Χανιά." },
          { label: "Ιδιωτικές Εκδρομές στην Κρήτη", href: "/el/idiotikes-ekdromes-kriti/", description: "Δείτε το πλήρες φάσμα ιδιωτικών εκδρομών μας σε όλη την Κρήτη." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Χανιά προς Ελαφονήσι", href: "/el/diadromi/chania-elafonisi/", description: "Μια παραλία προσβάσιμη εξ ολοκλήρου οδικώς, χωρίς τα επιπλέον λογιστικά." },
          { label: "Χανιά προς Φαράγγι Σαμαριάς", href: "/el/diadromi/chania-farangi-samarias/", description: "Μια άλλη εκδρομή με τα δικά της ειδικά λογιστικά." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Μπορείτε να με πάτε μέχρι τη λιμνοθάλασσα του Μπάλου;", answer: "Η τελική προσέγγιση απαιτεί χωμάτινο δρόμο με 4x4 και πεζοπορία, ή βαρκάδα — ένα κανονικό αυτοκίνητο δεν μπορεί να φτάσει στην ίδια τη λιμνοθάλασσα. Μπορούμε να οργανώσουμε τη μεταφορά σας προς το σχετικό σημείο εκκίνησης." },
          { question: "Είναι καλύτερη η βαρκάδα ή η διαδρομή 4x4;", answer: "Αυτό εξαρτάται από την προτίμησή σας — αναφέρετε ποια θα θέλατε κατά την αίτηση προσφοράς και θα σας εξηγήσουμε τι περιλαμβάνει." },
          { question: "Πόσο χρόνο πρέπει να προγραμματίσω για αυτή την εκδρομή;", answer: "Προγραμματίστε ολόκληρη μέρα δεδομένης της οδήγησης και του επιπλέον σκέλους με 4x4 ή βάρκα." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Χανιά – Μπάλος;",
        description: "Πείτε μας ποια επιλογή σχεδιάζετε και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeChaniaSamariaGorge: {
    en: {
      meta: {
        title: "Chania to Samaria Gorge Private Transfer",
        description: "Book a private transfer from Chania to the start of the Samaria Gorge hiking trail. A one-way hike ending at a different village.",
      },
      breadcrumbLabel: "Chania to Samaria Gorge",
      hero: {
        eyebrow: "Chania → Samaria Gorge",
        title: "Chania to Samaria Gorge Private Transfer",
        description: "A private transfer from Chania to Xyloskalo near Omalos, the start of Crete's most famous hiking trail.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Chania to the Samaria Gorge",
        paragraphs: [
          "The Samaria Gorge is a one-way hike of around 16 km, typically taking 5–7 hours, starting at Xyloskalo near Omalos — reachable by road from Chania — and ending at Agia Roumeli on the south coast, a village with no road access at all. Most hikers continue from Agia Roumeli by ferry to Sougia or Chora Sfakion, then by bus back to Chania.",
          "Because this isn't a simple there-and-back trip, we arrange a private transfer to the trailhead at the start, and can also arrange a pickup back in Chania once you've completed the ferry-and-bus leg. Describe your plans when requesting a quote so we can plan accordingly.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time to Trailhead", description: "Roughly an hour from Chania to Xyloskalo/Omalos." },
          { title: "The Hike Itself", description: "A one-way trail of around 16 km, typically 5–7 hours, ending at Agia Roumeli." },
          { title: "Getting Back", description: "Most hikers take a ferry from Agia Roumeli to Sougia or Chora Sfakion, then a bus back to Chania." },
          { title: "Timing", description: "Share your planned start time so your drop-off can be arranged accordingly." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Serious Hikers", description: "For visitors planning a full-day hike through one of Europe's longest gorges." },
          { title: "Early Starts", description: "A private transfer to the trailhead at whatever time you need to begin." },
          { title: "Groups", description: "A private vehicle keeps your group together for the drive to the start." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Western Crete",
        items: [
          { label: "Chania", href: "/city/chania/", description: "See our overview of transfers across Chania." },
          { label: "Crete Day Trips", href: "/crete-day-trips/", description: "See our full range of private day trips across Crete." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Chania to Elafonissi", href: "/route/chania-to-elafonissi/", description: "A beach day trip reachable entirely by road." },
          { label: "Chania to Balos", href: "/route/chania-to-balos/", description: "Another day trip with its own specific logistics." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "Does the Samaria Gorge trip bring me back to the same place?", answer: "No, the gorge is a one-way hike ending at Agia Roumeli, a village with no road access — most hikers return by ferry and bus." },
          { question: "Can you pick me up after I finish the hike?", answer: "Yes, describe your plans when requesting a quote — we can arrange a pickup in Chania once you've completed the ferry-and-bus leg back." },
          { question: "How long does the hike itself take?", answer: "Typically around 5–7 hours for the roughly 16 km trail, depending on your pace." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Chania to Samaria Gorge Transfer?",
        description: "Tell us your planned start time and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Ιδιωτική Μεταφορά Χανιά – Φαράγγι Σαμαριάς",
        description: "Κλείστε ιδιωτική μεταφορά από τα Χανιά προς την αρχή του μονοπατιού του Φαραγγίου της Σαμαριάς. Μονόδρομη πεζοπορία που καταλήγει σε διαφορετικό χωριό.",
      },
      breadcrumbLabel: "Χανιά προς Φαράγγι Σαμαριάς",
      hero: {
        eyebrow: "Χανιά → Φαράγγι Σαμαριάς",
        title: "Ιδιωτική Μεταφορά Χανιά – Φαράγγι Σαμαριάς",
        description: "Μια ιδιωτική μεταφορά από τα Χανιά προς το Ξυλόσκαλο κοντά στον Ομαλό, την αρχή του πιο γνωστού μονοπατιού πεζοπορίας της Κρήτης.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από τα Χανιά προς το Φαράγγι της Σαμαριάς",
        paragraphs: [
          "Το Φαράγγι της Σαμαριάς είναι μονόδρομη πεζοπορία περίπου 16 χλμ, που συνήθως διαρκεί 5-7 ώρες, ξεκινώντας από το Ξυλόσκαλο κοντά στον Ομαλό — προσβάσιμο οδικώς από τα Χανιά — και καταλήγοντας στην Αγία Ρουμέλη στη νότια ακτή, ένα χωριό χωρίς καθόλου οδική πρόσβαση. Οι περισσότεροι πεζοπόροι συνεχίζουν από την Αγία Ρουμέλη με ferry προς τη Σούγια ή τη Χώρα Σφακίων, και στη συνέχεια με λεωφορείο πίσω στα Χανιά.",
          "Επειδή αυτό δεν είναι απλό ταξίδι με επιστροφή στο ίδιο σημείο, οργανώνουμε ιδιωτική μεταφορά προς την αρχή του μονοπατιού, και μπορούμε επίσης να οργανώσουμε παραλαβή πίσω στα Χανιά μόλις ολοκληρώσετε το σκέλος με ferry και λεωφορείο. Περιγράψτε τα σχέδιά σας κατά την αίτηση προσφοράς ώστε να σχεδιάσουμε ανάλογα.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού προς την Αρχή", description: "Περίπου μία ώρα από τα Χανιά προς το Ξυλόσκαλο/Ομαλό." },
          { title: "Η Ίδια η Πεζοπορία", description: "Μονόδρομο μονοπάτι περίπου 16 χλμ, συνήθως 5-7 ώρες, που καταλήγει στην Αγία Ρουμέλη." },
          { title: "Επιστροφή", description: "Οι περισσότεροι πεζοπόροι παίρνουν ferry από την Αγία Ρουμέλη προς τη Σούγια ή τη Χώρα Σφακίων, και στη συνέχεια λεωφορείο πίσω στα Χανιά." },
          { title: "Χρονισμός", description: "Δώστε μας την προγραμματισμένη ώρα εκκίνησής σας ώστε να οργανωθεί ανάλογα η παράδοσή σας." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Σοβαροί Πεζοπόροι", description: "Για επισκέπτες που σχεδιάζουν ολοήμερη πεζοπορία σε ένα από τα μεγαλύτερα φαράγγια της Ευρώπης." },
          { title: "Πρωινή Εκκίνηση", description: "Ιδιωτική μεταφορά προς την αρχή του μονοπατιού όποια ώρα χρειάζεστε να ξεκινήσετε." },
          { title: "Ομάδες", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα σας μαζί για τη διαδρομή προς την αρχή." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τη Δυτική Κρήτη",
        items: [
          { label: "Χανιά", href: "/el/poli/chania/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλα τα Χανιά." },
          { label: "Ιδιωτικές Εκδρομές στην Κρήτη", href: "/el/idiotikes-ekdromes-kriti/", description: "Δείτε το πλήρες φάσμα ιδιωτικών εκδρομών μας σε όλη την Κρήτη." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Χανιά προς Ελαφονήσι", href: "/el/diadromi/chania-elafonisi/", description: "Μια ημερήσια εκδρομή σε παραλία προσβάσιμη εξ ολοκλήρου οδικώς." },
          { label: "Χανιά προς Μπάλο", href: "/el/diadromi/chania-balos/", description: "Μια άλλη εκδρομή με τα δικά της ειδικά λογιστικά." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Η εκδρομή στο Φαράγγι της Σαμαριάς με φέρνει πίσω στο ίδιο σημείο;", answer: "Όχι, το φαράγγι είναι μονόδρομη πεζοπορία που καταλήγει στην Αγία Ρουμέλη, ένα χωριό χωρίς οδική πρόσβαση — οι περισσότεροι πεζοπόροι επιστρέφουν με ferry και λεωφορείο." },
          { question: "Μπορείτε να με παραλάβετε μετά την πεζοπορία;", answer: "Ναι, περιγράψτε τα σχέδιά σας κατά την αίτηση προσφοράς — μπορούμε να οργανώσουμε παραλαβή στα Χανιά μόλις ολοκληρώσετε το σκέλος με ferry και λεωφορείο." },
          { question: "Πόσο διαρκεί η ίδια η πεζοπορία;", answer: "Συνήθως περίπου 5-7 ώρες για το μονοπάτι των περίπου 16 χλμ, ανάλογα με τον ρυθμό σας." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Χανιά – Φαράγγι Σαμαριάς;",
        description: "Πείτε μας την προγραμματισμένη ώρα εκκίνησης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionAirportGdmMegaron: {
    en: {
      meta: {
        title: "Heraklion Airport to GDM Megaron Transfer – Private Car",
        description: "Book a private transfer from Heraklion Airport to GDM Megaron, a historic hotel overlooking the Venetian port.",
      },
      breadcrumbLabel: "Heraklion Airport to GDM Megaron",
      hero: {
        eyebrow: "Heraklion Airport → GDM Megaron",
        title: "Heraklion Airport to GDM Megaron Transfer",
        description: "A direct private transfer from Heraklion Airport to GDM Megaron, in a historic building overlooking the Venetian port.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion Airport to GDM Megaron",
        paragraphs: [
          "GDM Megaron occupies a 1925 building classified as a historical monument, overlooking Heraklion's Venetian port in the heart of the city. It's a genuinely different character from the resort hotels further along the coast, appealing to visitors who want a central, heritage-building stay.",
          "A private transfer from the airport takes you directly to the hotel, a short journey given Heraklion's compact size.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "A short, direct transfer from the airport into central Heraklion." },
          { title: "Drop-Off", description: "Directly at the hotel, overlooking the Venetian port." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Heritage-Building Stays", description: "For visitors who want a historic building in the city centre rather than a resort." },
          { title: "Venetian Port Views", description: "A hotel overlooking one of Heraklion's most recognisable landmarks." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Heraklion",
        items: [
          { label: "Heraklion", href: "/city/heraklion/", description: "See our overview of transfers across Heraklion." },
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion Airport to Aquila Atlantis Hotel", href: "/route/heraklion-airport-to-aquila-atlantis/", description: "Another central Heraklion hotel transfer." },
          { label: "Heraklion Airport to Olive Green Hotel", href: "/route/heraklion-airport-to-olive-green/", description: "A boutique eco-focused hotel transfer." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Heraklion Airport to GDM Megaron?", answer: "Book a direct private transfer — see this page for journey details." },
          { question: "Is GDM Megaron in a historic building?", answer: "Yes, it occupies a 1925 building classified as a historical monument, overlooking the Venetian port." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — hotel to airport as well as airport to hotel." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to GDM Megaron Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – GDM Megaron – Ιδιωτικό Όχημα",
        description: "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το GDM Megaron, ένα ιστορικό ξενοδοχείο με θέα στο Ενετικό λιμάνι.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου προς GDM Megaron",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου → GDM Megaron",
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – GDM Megaron",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το GDM Megaron, σε ιστορικό κτίριο με θέα στο Ενετικό λιμάνι.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Ηρακλείου προς το GDM Megaron",
        paragraphs: [
          "Το GDM Megaron στεγάζεται σε κτίριο του 1925 χαρακτηρισμένο ως ιστορικό μνημείο, με θέα στο Ενετικό λιμάνι του Ηρακλείου στην καρδιά της πόλης. Είναι πραγματικά διαφορετικός χαρακτήρας από τα ξενοδοχεία θερέτρων πιο μακριά στην ακτή, ελκυστικό για επισκέπτες που θέλουν κεντρική διαμονή σε ιστορικό κτίριο.",
          "Μια ιδιωτική μεταφορά από το αεροδρόμιο σας μεταφέρει απευθείας στο ξενοδοχείο, ένα σύντομο ταξίδι δεδομένου του συμπαγούς μεγέθους του Ηρακλείου.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Μια σύντομη, απευθείας μεταφορά από το αεροδρόμιο προς το κέντρο του Ηρακλείου." },
          { title: "Παράδοση", description: "Απευθείας στο ξενοδοχείο, με θέα στο Ενετικό λιμάνι." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Διαμονή σε Ιστορικό Κτίριο", description: "Για επισκέπτες που θέλουν ιστορικό κτίριο στο κέντρο της πόλης αντί για θέρετρο." },
          { title: "Θέα στο Ενετικό Λιμάνι", description: "Ένα ξενοδοχείο με θέα σε ένα από τα πιο αναγνωρίσιμα αξιοθέατα του Ηρακλείου." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς ξενοδοχείο ή ξενοδοχείο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε το Ηράκλειο",
        items: [
          { label: "Ηράκλειο", href: "/el/poli/irakleio/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλο το Ηράκλειο." },
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Aquila Atlantis Hotel", href: "/el/diadromi/aerodromio-irakleiou-aquila-atlantis/", description: "Άλλη κεντρική μεταφορά ξενοδοχείου του Ηρακλείου." },
          { label: "Αεροδρόμιο Ηρακλείου προς Olive Green Hotel", href: "/el/diadromi/aerodromio-irakleiou-olive-green/", description: "Μια boutique οικολογική μεταφορά ξενοδοχείου." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Ηρακλείου στο GDM Megaron;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — δείτε αυτή τη σελίδα για λεπτομέρειες ταξιδιού." },
          { question: "Είναι το GDM Megaron σε ιστορικό κτίριο;", answer: "Ναι, στεγάζεται σε κτίριο του 1925 χαρακτηρισμένο ως ιστορικό μνημείο, με θέα στο Ενετικό λιμάνι." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – GDM Megaron;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionAirportGalaxyIraklio: {
    en: {
      meta: {
        title: "Heraklion Airport to Galaxy Iraklio Hotel Transfer",
        description: "Book a private transfer from Heraklion Airport to Galaxy Iraklio Hotel, just outside central Heraklion.",
      },
      breadcrumbLabel: "Heraklion Airport to Galaxy Iraklio",
      hero: {
        eyebrow: "Heraklion Airport → Galaxy Iraklio",
        title: "Heraklion Airport to Galaxy Iraklio Hotel Transfer",
        description: "A direct private transfer from Heraklion Airport to Galaxy Iraklio Hotel, just outside the city centre.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion Airport to Galaxy Iraklio Hotel",
        paragraphs: [
          "Galaxy Iraklio Hotel sits just outside Heraklion's immediate city centre, around a 10-minute walk in, and is known for a large freshwater pool and its own 24-hour wellness club. It suits visitors who want a slightly quieter setting without being far from the centre.",
          "A private transfer from the airport takes you directly to the hotel, avoiding the need to navigate the city with luggage.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "A direct transfer from the airport, similar in length to the central Heraklion hotel transfers." },
          { title: "Drop-Off", description: "Directly at the hotel entrance." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Wellness-Focused Stays", description: "For visitors who want a hotel with its own wellness club and large pool." },
          { title: "Quieter Surroundings", description: "Slightly removed from the busiest part of central Heraklion." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Heraklion",
        items: [
          { label: "Heraklion", href: "/city/heraklion/", description: "See our overview of transfers across Heraklion." },
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion Airport to GDM Megaron", href: "/route/heraklion-airport-to-gdm-megaron/", description: "A historic-building hotel in the city centre." },
          { label: "Heraklion Airport to Legacy Gastro Suites", href: "/route/heraklion-airport-to-legacy-gastro-suites/", description: "A gastronomy-themed boutique hotel." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Heraklion Airport to Galaxy Iraklio Hotel?", answer: "Book a direct private transfer — see this page for journey details." },
          { question: "Is Galaxy Iraklio Hotel in central Heraklion?", answer: "It sits just outside the immediate centre, around a 10-minute walk in." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — hotel to airport as well as airport to hotel." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Galaxy Iraklio Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Galaxy Iraklio Hotel",
        description: "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Galaxy Iraklio Hotel, λίγο έξω από το κέντρο του Ηρακλείου.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου προς Galaxy Iraklio",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου → Galaxy Iraklio",
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Galaxy Iraklio Hotel",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Galaxy Iraklio Hotel, λίγο έξω από το κέντρο της πόλης.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Ηρακλείου προς το Galaxy Iraklio Hotel",
        paragraphs: [
          "Το Galaxy Iraklio Hotel βρίσκεται λίγο έξω από το άμεσο κέντρο του Ηρακλείου, περίπου 10 λεπτά με τα πόδια, και είναι γνωστό για τη μεγάλη πισίνα γλυκού νερού και το δικό του wellness club 24 ωρών. Ταιριάζει σε επισκέπτες που θέλουν λίγο πιο ήσυχο περιβάλλον χωρίς να είναι μακριά από το κέντρο.",
          "Μια ιδιωτική μεταφορά από το αεροδρόμιο σας μεταφέρει απευθείας στο ξενοδοχείο, αποφεύγοντας την ανάγκη πλοήγησης στην πόλη με αποσκευές.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Μια απευθείας μεταφορά από το αεροδρόμιο, παρόμοιας διάρκειας με τις κεντρικές μεταφορές ξενοδοχείων του Ηρακλείου." },
          { title: "Παράδοση", description: "Απευθείας στην είσοδο του ξενοδοχείου." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Διαμονή με Έμφαση στην Ευεξία", description: "Για επισκέπτες που θέλουν ξενοδοχείο με δικό του wellness club και μεγάλη πισίνα." },
          { title: "Πιο Ήσυχο Περιβάλλον", description: "Λίγο απομακρυσμένο από το πιο πολυσύχναστο τμήμα του κέντρου του Ηρακλείου." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς ξενοδοχείο ή ξενοδοχείο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε το Ηράκλειο",
        items: [
          { label: "Ηράκλειο", href: "/el/poli/irakleio/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλο το Ηράκλειο." },
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς GDM Megaron", href: "/el/diadromi/aerodromio-irakleiou-gdm-megaron/", description: "Ένα ξενοδοχείο σε ιστορικό κτίριο στο κέντρο της πόλης." },
          { label: "Αεροδρόμιο Ηρακλείου προς Legacy Gastro Suites", href: "/el/diadromi/aerodromio-irakleiou-legacy-gastro-suites/", description: "Ένα boutique ξενοδοχείο με γαστρονομικό θέμα." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Ηρακλείου στο Galaxy Iraklio Hotel;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — δείτε αυτή τη σελίδα για λεπτομέρειες ταξιδιού." },
          { question: "Είναι το Galaxy Iraklio Hotel στο κέντρο του Ηρακλείου;", answer: "Βρίσκεται λίγο έξω από το άμεσο κέντρο, περίπου 10 λεπτά με τα πόδια." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Galaxy Iraklio;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionAirportAquilaAtlantis: {
    en: {
      meta: {
        title: "Heraklion Airport to Aquila Atlantis Hotel Transfer",
        description: "Book a private transfer from Heraklion Airport to Aquila Atlantis Hotel, near the Archaeological Museum in central Heraklion.",
      },
      breadcrumbLabel: "Heraklion Airport to Aquila Atlantis",
      hero: {
        eyebrow: "Heraklion Airport → Aquila Atlantis",
        title: "Heraklion Airport to Aquila Atlantis Hotel Transfer",
        description: "A direct private transfer from Heraklion Airport to Aquila Atlantis Hotel, near the Archaeological Museum.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion Airport to Aquila Atlantis Hotel",
        paragraphs: [
          "Aquila Atlantis Hotel sits in central Heraklion, a short walk from the Archaeological Museum and the Venetian Walls, with substantial conference and event capacity that gives it a stronger business-hotel character than some of the city's other central properties.",
          "A private transfer from the airport takes you directly to the hotel, avoiding the need to navigate the city centre with luggage after your flight.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "A direct transfer from the airport into central Heraklion." },
          { title: "Drop-Off", description: "Directly at the hotel, near the Archaeological Museum." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Business & Conference Travellers", description: "For visitors attending events at the hotel's own conference spaces." },
          { title: "Museum & Culture Visitors", description: "A short walk from the Archaeological Museum and Venetian Walls." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Heraklion",
        items: [
          { label: "Heraklion", href: "/city/heraklion/", description: "See our overview of transfers across Heraklion." },
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion Airport to GDM Megaron", href: "/route/heraklion-airport-to-gdm-megaron/", description: "A historic-building hotel near the Venetian port." },
          { label: "Heraklion Airport to Olive Green Hotel", href: "/route/heraklion-airport-to-olive-green/", description: "A boutique eco-focused hotel transfer." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Heraklion Airport to Aquila Atlantis Hotel?", answer: "Book a direct private transfer — see this page for journey details." },
          { question: "Is Aquila Atlantis Hotel suitable for business travel?", answer: "Yes, it has substantial conference and event capacity, giving it a stronger business-hotel character than some other central Heraklion properties." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — hotel to airport as well as airport to hotel." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Aquila Atlantis Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Aquila Atlantis Hotel",
        description: "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Aquila Atlantis Hotel, κοντά στο Αρχαιολογικό Μουσείο στο κέντρο του Ηρακλείου.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου προς Aquila Atlantis",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου → Aquila Atlantis",
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Aquila Atlantis Hotel",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Aquila Atlantis Hotel, κοντά στο Αρχαιολογικό Μουσείο.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Ηρακλείου προς το Aquila Atlantis Hotel",
        paragraphs: [
          "Το Aquila Atlantis Hotel βρίσκεται στο κέντρο του Ηρακλείου, σε μικρή απόσταση με τα πόδια από το Αρχαιολογικό Μουσείο και τα Ενετικά Τείχη, με σημαντική χωρητικότητα συνεδρίων και εκδηλώσεων που του δίνει πιο επαγγελματικό χαρακτήρα από άλλα κεντρικά ξενοδοχεία της πόλης.",
          "Μια ιδιωτική μεταφορά από το αεροδρόμιο σας μεταφέρει απευθείας στο ξενοδοχείο, αποφεύγοντας την ανάγκη πλοήγησης στο κέντρο της πόλης με αποσκευές μετά την πτήση σας.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Μια απευθείας μεταφορά από το αεροδρόμιο προς το κέντρο του Ηρακλείου." },
          { title: "Παράδοση", description: "Απευθείας στο ξενοδοχείο, κοντά στο Αρχαιολογικό Μουσείο." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Επαγγελματικοί & Συνεδριακοί Ταξιδιώτες", description: "Για επισκέπτες που παρακολουθούν εκδηλώσεις στους δικούς του συνεδριακούς χώρους." },
          { title: "Επισκέπτες Μουσείων & Πολιτισμού", description: "Σε μικρή απόσταση με τα πόδια από το Αρχαιολογικό Μουσείο και τα Ενετικά Τείχη." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς ξενοδοχείο ή ξενοδοχείο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε το Ηράκλειο",
        items: [
          { label: "Ηράκλειο", href: "/el/poli/irakleio/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλο το Ηράκλειο." },
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς GDM Megaron", href: "/el/diadromi/aerodromio-irakleiou-gdm-megaron/", description: "Ένα ξενοδοχείο σε ιστορικό κτίριο κοντά στο Ενετικό λιμάνι." },
          { label: "Αεροδρόμιο Ηρακλείου προς Olive Green Hotel", href: "/el/diadromi/aerodromio-irakleiou-olive-green/", description: "Μια boutique οικολογική μεταφορά ξενοδοχείου." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Ηρακλείου στο Aquila Atlantis Hotel;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — δείτε αυτή τη σελίδα για λεπτομέρειες ταξιδιού." },
          { question: "Είναι το Aquila Atlantis Hotel κατάλληλο για επαγγελματικά ταξίδια;", answer: "Ναι, διαθέτει σημαντική χωρητικότητα συνεδρίων και εκδηλώσεων, δίνοντάς του πιο επαγγελματικό χαρακτήρα από άλλα κεντρικά ξενοδοχεία του Ηρακλείου." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Aquila Atlantis;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionAirportOliveGreen: {
    en: {
      meta: {
        title: "Heraklion Airport to Olive Green Hotel Transfer",
        description: "Book a private transfer from Heraklion Airport to Olive Green Hotel, an eco-focused boutique hotel near Eleftherias Square.",
      },
      breadcrumbLabel: "Heraklion Airport to Olive Green",
      hero: {
        eyebrow: "Heraklion Airport → Olive Green",
        title: "Heraklion Airport to Olive Green Hotel Transfer",
        description: "A direct private transfer from Heraklion Airport to Olive Green Hotel, near Eleftherias Square.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion Airport to Olive Green Hotel",
        paragraphs: [
          "Olive Green Hotel sits in central Heraklion near Eleftherias Square and the Morosini Fountain, marketed explicitly as an eco-friendly, smart-technology boutique hotel — a genuinely different positioning from the city's more traditional properties.",
          "A private transfer from the airport takes you directly to the hotel, avoiding the need to navigate the city centre with luggage after your flight.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "A direct transfer from the airport into central Heraklion." },
          { title: "Drop-Off", description: "Directly at the hotel, near Eleftherias Square." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Eco-Conscious Stays", description: "For visitors who prefer an eco-friendly, smart-technology hotel concept." },
          { title: "Central Heraklion Access", description: "Near Eleftherias Square and the Morosini Fountain." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Heraklion",
        items: [
          { label: "Heraklion", href: "/city/heraklion/", description: "See our overview of transfers across Heraklion." },
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion Airport to Legacy Gastro Suites", href: "/route/heraklion-airport-to-legacy-gastro-suites/", description: "Another boutique hotel on Eleftherias Square." },
          { label: "Heraklion Airport to GDM Megaron", href: "/route/heraklion-airport-to-gdm-megaron/", description: "A historic-building hotel near the Venetian port." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Heraklion Airport to Olive Green Hotel?", answer: "Book a direct private transfer — see this page for journey details." },
          { question: "What makes Olive Green Hotel different from other Heraklion hotels?", answer: "It's marketed explicitly as an eco-friendly, smart-technology boutique hotel." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — hotel to airport as well as airport to hotel." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Olive Green Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Olive Green Hotel",
        description: "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Olive Green Hotel, ένα οικολογικό boutique ξενοδοχείο κοντά στην Πλατεία Ελευθερίας.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου προς Olive Green",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου → Olive Green",
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Olive Green Hotel",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Olive Green Hotel, κοντά στην Πλατεία Ελευθερίας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Ηρακλείου προς το Olive Green Hotel",
        paragraphs: [
          "Το Olive Green Hotel βρίσκεται στο κέντρο του Ηρακλείου κοντά στην Πλατεία Ελευθερίας και το Σιντριβάνι Μοροζίνι, διαφημιζόμενο ρητά ως οικολογικό boutique ξενοδοχείο έξυπνης τεχνολογίας — μια πραγματικά διαφορετική τοποθέτηση από τα πιο παραδοσιακά ξενοδοχεία της πόλης.",
          "Μια ιδιωτική μεταφορά από το αεροδρόμιο σας μεταφέρει απευθείας στο ξενοδοχείο, αποφεύγοντας την ανάγκη πλοήγησης στο κέντρο της πόλης με αποσκευές μετά την πτήση σας.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Μια απευθείας μεταφορά από το αεροδρόμιο προς το κέντρο του Ηρακλείου." },
          { title: "Παράδοση", description: "Απευθείας στο ξενοδοχείο, κοντά στην Πλατεία Ελευθερίας." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Οικολογική Διαμονή", description: "Για επισκέπτες που προτιμούν οικολογική ξενοδοχειακή αντίληψη με έξυπνη τεχνολογία." },
          { title: "Πρόσβαση στο Κέντρο του Ηρακλείου", description: "Κοντά στην Πλατεία Ελευθερίας και το Σιντριβάνι Μοροζίνι." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς ξενοδοχείο ή ξενοδοχείο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε το Ηράκλειο",
        items: [
          { label: "Ηράκλειο", href: "/el/poli/irakleio/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλο το Ηράκλειο." },
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Legacy Gastro Suites", href: "/el/diadromi/aerodromio-irakleiou-legacy-gastro-suites/", description: "Άλλο boutique ξενοδοχείο στην Πλατεία Ελευθερίας." },
          { label: "Αεροδρόμιο Ηρακλείου προς GDM Megaron", href: "/el/diadromi/aerodromio-irakleiou-gdm-megaron/", description: "Ένα ξενοδοχείο σε ιστορικό κτίριο κοντά στο Ενετικό λιμάνι." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Ηρακλείου στο Olive Green Hotel;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — δείτε αυτή τη σελίδα για λεπτομέρειες ταξιδιού." },
          { question: "Τι κάνει το Olive Green Hotel διαφορετικό από άλλα ξενοδοχεία του Ηρακλείου;", answer: "Διαφημίζεται ρητά ως οικολογικό boutique ξενοδοχείο έξυπνης τεχνολογίας." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Olive Green;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionAirportLegacyGastroSuites: {
    en: {
      meta: {
        title: "Heraklion Airport to Legacy Gastro Suites Transfer",
        description: "Book a private transfer from Heraklion Airport to Legacy Gastro Suites, a gastronomy-themed hotel on Eleftherias Square.",
      },
      breadcrumbLabel: "Heraklion Airport to Legacy Gastro Suites",
      hero: {
        eyebrow: "Heraklion Airport → Legacy Gastro Suites",
        title: "Heraklion Airport to Legacy Gastro Suites Transfer",
        description: "A direct private transfer from Heraklion Airport to Legacy Gastro Suites, on Eleftherias Square.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion Airport to Legacy Gastro Suites",
        paragraphs: [
          "Legacy Gastro Suites is a newly opened hotel in a renovated 1950s building on Eleftherias Square, built around a gastronomy theme — each of its suites is themed after a Cretan artist, with a food and wine station in-room, a genuinely distinctive concept in central Heraklion.",
          "A private transfer from the airport takes you directly to the hotel, avoiding the need to navigate the city centre with luggage after your flight.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "A direct transfer from the airport into central Heraklion." },
          { title: "Drop-Off", description: "Directly at the hotel, on Eleftherias Square." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Food & Wine Enthusiasts", description: "For visitors drawn to the hotel's gastronomy-themed suites." },
          { title: "Central Heraklion Access", description: "On Eleftherias Square, in the heart of the city." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Heraklion",
        items: [
          { label: "Heraklion", href: "/city/heraklion/", description: "See our overview of transfers across Heraklion." },
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion Airport to Olive Green Hotel", href: "/route/heraklion-airport-to-olive-green/", description: "Another boutique hotel near Eleftherias Square." },
          { label: "Heraklion Airport to GDM Megaron", href: "/route/heraklion-airport-to-gdm-megaron/", description: "A historic-building hotel near the Venetian port." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Heraklion Airport to Legacy Gastro Suites?", answer: "Book a direct private transfer — see this page for journey details." },
          { question: "What is the gastronomy theme at Legacy Gastro Suites?", answer: "Each suite is themed after a Cretan artist, with a food and wine station in-room." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — hotel to airport as well as airport to hotel." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Legacy Gastro Suites Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Legacy Gastro Suites",
        description: "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Legacy Gastro Suites, ένα ξενοδοχείο με γαστρονομικό θέμα στην Πλατεία Ελευθερίας.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου προς Legacy Gastro Suites",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου → Legacy Gastro Suites",
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Legacy Gastro Suites",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Legacy Gastro Suites, στην Πλατεία Ελευθερίας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Ηρακλείου προς το Legacy Gastro Suites",
        paragraphs: [
          "Το Legacy Gastro Suites είναι ένα νεοανοιγμένο ξενοδοχείο σε ανακαινισμένο κτίριο της δεκαετίας του 1950 στην Πλατεία Ελευθερίας, χτισμένο γύρω από γαστρονομικό θέμα — κάθε σουίτα έχει θέμα έναν κρητικό καλλιτέχνη, με σταθμό φαγητού και κρασιού μέσα στο δωμάτιο, μια πραγματικά διαφορετική αντίληψη στο κέντρο του Ηρακλείου.",
          "Μια ιδιωτική μεταφορά από το αεροδρόμιο σας μεταφέρει απευθείας στο ξενοδοχείο, αποφεύγοντας την ανάγκη πλοήγησης στο κέντρο της πόλης με αποσκευές μετά την πτήση σας.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Μια απευθείας μεταφορά από το αεροδρόμιο προς το κέντρο του Ηρακλείου." },
          { title: "Παράδοση", description: "Απευθείας στο ξενοδοχείο, στην Πλατεία Ελευθερίας." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Λάτρεις Φαγητού & Κρασιού", description: "Για επισκέπτες που ελκύονται από τις γαστρονομικές σουίτες του ξενοδοχείου." },
          { title: "Πρόσβαση στο Κέντρο του Ηρακλείου", description: "Στην Πλατεία Ελευθερίας, στην καρδιά της πόλης." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς ξενοδοχείο ή ξενοδοχείο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε το Ηράκλειο",
        items: [
          { label: "Ηράκλειο", href: "/el/poli/irakleio/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλο το Ηράκλειο." },
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Olive Green Hotel", href: "/el/diadromi/aerodromio-irakleiou-olive-green/", description: "Άλλο boutique ξενοδοχείο κοντά στην Πλατεία Ελευθερίας." },
          { label: "Αεροδρόμιο Ηρακλείου προς GDM Megaron", href: "/el/diadromi/aerodromio-irakleiou-gdm-megaron/", description: "Ένα ξενοδοχείο σε ιστορικό κτίριο κοντά στο Ενετικό λιμάνι." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Ηρακλείου στο Legacy Gastro Suites;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — δείτε αυτή τη σελίδα για λεπτομέρειες ταξιδιού." },
          { question: "Ποιο είναι το γαστρονομικό θέμα στο Legacy Gastro Suites;", answer: "Κάθε σουίτα έχει θέμα έναν κρητικό καλλιτέχνη, με σταθμό φαγητού και κρασιού μέσα στο δωμάτιο." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Legacy Gastro Suites;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionAirportCretaMaris: {
    en: {
      meta: {
        title: "Heraklion Airport to Creta Maris Resort Transfer",
        description: "Book a private transfer from Heraklion Airport to Creta Maris Resort, a large all-inclusive resort in Hersonissos.",
      },
      breadcrumbLabel: "Heraklion Airport to Creta Maris",
      hero: {
        eyebrow: "Heraklion Airport → Creta Maris",
        title: "Heraklion Airport to Creta Maris Resort Transfer",
        description: "A direct private transfer from Heraklion Airport to Creta Maris Resort in Hersonissos.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion Airport to Creta Maris Resort",
        paragraphs: [
          "Creta Maris Resort is a large all-inclusive complex in Hersonissos, around 25 minutes from Heraklion Airport, with extensive grounds including multiple pools and a waterpark. It's a common choice for families and groups on a resort-based holiday.",
          "A private transfer takes you directly to the resort entrance, avoiding the need for a shared shuttle or public transport with luggage.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 25 minutes, similar to other Hersonissos transfers." },
          { title: "Drop-Off", description: "Directly at the resort entrance in Hersonissos." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Family All-Inclusive Stays", description: "For visitors heading to a large family-oriented resort." },
          { title: "Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-resort or resort-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Hersonissos",
        items: [
          { label: "Hersonissos", href: "/destination/hersonissos/", description: "See our destination overview of Hersonissos." },
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion Airport to Nana Princess", href: "/route/heraklion-airport-to-nana-princess/", description: "An adults-only alternative in the same area." },
          { label: "Heraklion Airport to Hersonissos", href: "/route/heraklion-airport-to-hersonissos/", description: "Our general transfer route to the Hersonissos area." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Heraklion Airport to Creta Maris Resort?", answer: "Book a direct private transfer — see this page for journey details." },
          { question: "Is Creta Maris Resort family-friendly?", answer: "Yes, it's a large all-inclusive complex with extensive grounds including multiple pools and a waterpark." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — resort to airport as well as airport to resort." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Creta Maris Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Creta Maris Resort",
        description: "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Creta Maris Resort, ένα μεγάλο all-inclusive θέρετρο στον Χερσόνησο.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου προς Creta Maris",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου → Creta Maris",
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Creta Maris Resort",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Creta Maris Resort στον Χερσόνησο.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Ηρακλείου προς το Creta Maris Resort",
        paragraphs: [
          "Το Creta Maris Resort είναι ένα μεγάλο all-inclusive συγκρότημα στον Χερσόνησο, περίπου 25 λεπτά από το Αεροδρόμιο Ηρακλείου, με εκτεταμένους χώρους που περιλαμβάνουν πολλαπλές πισίνες και υδάτινο πάρκο. Είναι συνηθισμένη επιλογή για οικογένειες και ομάδες σε διακοπές θέρετρου.",
          "Μια ιδιωτική μεταφορά σας μεταφέρει απευθείας στην είσοδο του θέρετρου, αποφεύγοντας την ανάγκη κοινού shuttle ή δημόσιων μέσων με αποσκευές.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 25 λεπτά, παρόμοια με άλλες μεταφορές προς τον Χερσόνησο." },
          { title: "Παράδοση", description: "Απευθείας στην είσοδο του θέρετρου στον Χερσόνησο." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Οικογενειακή Διαμονή All-Inclusive", description: "Για επισκέπτες που κατευθύνονται σε μεγάλο θέρετρο προσανατολισμένο σε οικογένειες." },
          { title: "Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς θέρετρο ή θέρετρο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τον Χερσόνησο",
        items: [
          { label: "Χερσόνησος", href: "/el/proorismos/chersonisos/", description: "Δείτε την επισκόπηση προορισμού μας για τον Χερσόνησο." },
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Nana Princess", href: "/el/diadromi/aerodromio-irakleiou-nana-princess/", description: "Μια εναλλακτική μόνο για ενήλικες στην ίδια περιοχή." },
          { label: "Αεροδρόμιο Ηρακλείου προς Χερσόνησο", href: "/el/diadromi/aerodromio-irakleiou-chersonisos/", description: "Η γενική μας διαδρομή μεταφοράς προς την περιοχή του Χερσονήσου." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Ηρακλείου στο Creta Maris Resort;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — δείτε αυτή τη σελίδα για λεπτομέρειες ταξιδιού." },
          { question: "Είναι το Creta Maris Resort φιλικό για οικογένειες;", answer: "Ναι, είναι μεγάλο all-inclusive συγκρότημα με εκτεταμένους χώρους που περιλαμβάνουν πολλαπλές πισίνες και υδάτινο πάρκο." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Creta Maris;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionAirportNanaPrincess: {
    en: {
      meta: {
        title: "Heraklion Airport to Nana Princess Transfer",
        description: "Book a private transfer from Heraklion Airport to Nana Princess, an adults-only luxury resort in Hersonissos.",
      },
      breadcrumbLabel: "Heraklion Airport to Nana Princess",
      hero: {
        eyebrow: "Heraklion Airport → Nana Princess",
        title: "Heraklion Airport to Nana Princess Transfer",
        description: "A direct private transfer from Heraklion Airport to Nana Princess, an adults-only resort in Hersonissos.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion Airport to Nana Princess",
        paragraphs: [
          "Nana Princess is an adults-only luxury resort in Hersonissos, built around suites and villas with private pools, a different concept from the larger family all-inclusive resorts nearby. It's typically around 25–30 minutes from Heraklion Airport.",
          "A private transfer takes you directly to the resort, avoiding the need for a shared shuttle with luggage.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 25–30 minutes, similar to other Hersonissos transfers." },
          { title: "Drop-Off", description: "Directly at the resort entrance." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Adults-Only & Couples Stays", description: "For visitors heading to a resort designed for couples and adults." },
          { title: "Private Pool Suites", description: "Suites and villas with their own private pools." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-resort or resort-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Hersonissos",
        items: [
          { label: "Hersonissos", href: "/destination/hersonissos/", description: "See our destination overview of Hersonissos." },
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion Airport to Creta Maris Resort", href: "/route/heraklion-airport-to-creta-maris/", description: "A larger family all-inclusive alternative in the same area." },
          { label: "Heraklion Airport to Malia", href: "/route/heraklion-airport-to-malia/", description: "Continue further along the coast." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Heraklion Airport to Nana Princess?", answer: "Book a direct private transfer — see this page for journey details." },
          { question: "Is Nana Princess suitable for families with children?", answer: "It's positioned as an adults-only resort — check directly with the resort for their current policy." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — resort to airport as well as airport to resort." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Nana Princess Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Nana Princess",
        description: "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Nana Princess, ένα πολυτελές θέρετρο μόνο για ενήλικες στον Χερσόνησο.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου προς Nana Princess",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου → Nana Princess",
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Nana Princess",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Nana Princess, ένα θέρετρο μόνο για ενήλικες στον Χερσόνησο.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Ηρακλείου προς το Nana Princess",
        paragraphs: [
          "Το Nana Princess είναι ένα πολυτελές θέρετρο μόνο για ενήλικες στον Χερσόνησο, χτισμένο γύρω από σουίτες και βίλες με ιδιωτικές πισίνες, μια διαφορετική αντίληψη από τα μεγαλύτερα οικογενειακά all-inclusive θέρετρα εκεί κοντά. Βρίσκεται συνήθως περίπου 25-30 λεπτά από το Αεροδρόμιο Ηρακλείου.",
          "Μια ιδιωτική μεταφορά σας μεταφέρει απευθείας στο θέρετρο, αποφεύγοντας την ανάγκη κοινού shuttle με αποσκευές.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 25-30 λεπτά, παρόμοια με άλλες μεταφορές προς τον Χερσόνησο." },
          { title: "Παράδοση", description: "Απευθείας στην είσοδο του θέρετρου." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Διαμονή Μόνο για Ενήλικες & Ζευγάρια", description: "Για επισκέπτες που κατευθύνονται σε θέρετρο σχεδιασμένο για ζευγάρια και ενήλικες." },
          { title: "Σουίτες με Ιδιωτική Πισίνα", description: "Σουίτες και βίλες με δικές τους ιδιωτικές πισίνες." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς θέρετρο ή θέρετρο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τον Χερσόνησο",
        items: [
          { label: "Χερσόνησος", href: "/el/proorismos/chersonisos/", description: "Δείτε την επισκόπηση προορισμού μας για τον Χερσόνησο." },
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Creta Maris Resort", href: "/el/diadromi/aerodromio-irakleiou-creta-maris/", description: "Μια μεγαλύτερη οικογενειακή εναλλακτική στην ίδια περιοχή." },
          { label: "Αεροδρόμιο Ηρακλείου προς Μάλια", href: "/el/diadromi/aerodromio-irakleiou-malia/", description: "Συνεχίστε περαιτέρω κατά μήκος της ακτής." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Ηρακλείου στο Nana Princess;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — δείτε αυτή τη σελίδα για λεπτομέρειες ταξιδιού." },
          { question: "Είναι το Nana Princess κατάλληλο για οικογένειες με παιδιά;", answer: "Είναι τοποθετημένο ως θέρετρο μόνο για ενήλικες — επιβεβαιώστε απευθείας με το θέρετρο την τρέχουσα πολιτική τους." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Nana Princess;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionAirportAlexanderBeach: {
    en: {
      meta: {
        title: "Heraklion Airport to Alexander Beach Hotel & Village Resort",
        description: "Book a private transfer from Heraklion Airport to Alexander Beach Hotel & Village Resort, near Stalis and Malia.",
      },
      breadcrumbLabel: "Heraklion Airport to Alexander Beach",
      hero: {
        eyebrow: "Heraklion Airport → Alexander Beach",
        title: "Heraklion Airport to Alexander Beach Hotel & Village Resort",
        description: "A direct private transfer from Heraklion Airport to Alexander Beach Hotel & Village Resort, near the Stalis and Malia border.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion Airport to Alexander Beach Hotel & Village Resort",
        paragraphs: [
          "Alexander Beach Hotel & Village Resort sits near the border of Stalis and Malia, designed with a traditional Cretan village styling that gives it a different character from the larger modern resort blocks nearby. It's typically around 30–35 minutes from Heraklion Airport.",
          "A private transfer takes you directly to the resort, avoiding the need for a shared shuttle with luggage.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 30–35 minutes, similar to other Malia-area transfers." },
          { title: "Drop-Off", description: "Directly at the resort entrance near Stalis and Malia." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Traditional-Style Resort Stays", description: "For visitors who prefer a Cretan village-styled resort." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-resort or resort-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Malia",
        items: [
          { label: "Malia", href: "/destination/malia/", description: "See our destination overview of Malia." },
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion Airport to Malia", href: "/route/heraklion-airport-to-malia/", description: "Our general transfer route to Malia." },
          { label: "Heraklion Airport to Hersonissos", href: "/route/heraklion-airport-to-hersonissos/", description: "A shorter transfer closer to the airport." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Heraklion Airport to Alexander Beach Hotel & Village Resort?", answer: "Book a direct private transfer — see this page for journey details." },
          { question: "What makes this resort different from others in the area?", answer: "It's designed with a traditional Cretan village styling, distinct from the larger modern resort blocks nearby." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — resort to airport as well as airport to resort." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Alexander Beach Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Alexander Beach Hotel & Village Resort",
        description: "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Alexander Beach Hotel & Village Resort, κοντά στον Σταλίδα και τα Μάλια.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου προς Alexander Beach",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου → Alexander Beach",
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Alexander Beach Hotel & Village Resort",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Alexander Beach Hotel & Village Resort, κοντά στα σύνορα Σταλίδα και Μαλίων.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Ηρακλείου προς το Alexander Beach Hotel & Village Resort",
        paragraphs: [
          "Το Alexander Beach Hotel & Village Resort βρίσκεται κοντά στα σύνορα του Σταλίδα και των Μαλίων, σχεδιασμένο σε παραδοσιακό κρητικό χωριό στυλ που του δίνει διαφορετικό χαρακτήρα από τα μεγαλύτερα σύγχρονα συγκροτήματα θερέτρων εκεί κοντά. Βρίσκεται συνήθως περίπου 30-35 λεπτά από το Αεροδρόμιο Ηρακλείου.",
          "Μια ιδιωτική μεταφορά σας μεταφέρει απευθείας στο θέρετρο, αποφεύγοντας την ανάγκη κοινού shuttle με αποσκευές.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 30-35 λεπτά, παρόμοια με άλλες μεταφορές στην περιοχή των Μαλίων." },
          { title: "Παράδοση", description: "Απευθείας στην είσοδο του θέρετρου κοντά στον Σταλίδα και τα Μάλια." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Διαμονή σε Παραδοσιακό Στυλ", description: "Για επισκέπτες που προτιμούν θέρετρο σε κρητικό χωριό στυλ." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς θέρετρο ή θέρετρο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τα Μάλια",
        items: [
          { label: "Μάλια", href: "/el/proorismos/malia/", description: "Δείτε την επισκόπηση προορισμού μας για τα Μάλια." },
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Μάλια", href: "/el/diadromi/aerodromio-irakleiou-malia/", description: "Η γενική μας διαδρομή μεταφοράς προς τα Μάλια." },
          { label: "Αεροδρόμιο Ηρακλείου προς Χερσόνησο", href: "/el/diadromi/aerodromio-irakleiou-chersonisos/", description: "Μια συντομότερη μεταφορά πιο κοντά στο αεροδρόμιο." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Ηρακλείου στο Alexander Beach Hotel & Village Resort;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — δείτε αυτή τη σελίδα για λεπτομέρειες ταξιδιού." },
          { question: "Τι κάνει αυτό το θέρετρο διαφορετικό από άλλα στην περιοχή;", answer: "Είναι σχεδιασμένο σε παραδοσιακό κρητικό χωριό στυλ, διαφορετικό από τα μεγαλύτερα σύγχρονα συγκροτήματα θερέτρων εκεί κοντά." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Alexander Beach;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionAirportEloundaBayPalace: {
    en: {
      meta: {
        title: "Heraklion Airport to Elounda Bay Palace Transfer",
        description: "Book a private transfer from Heraklion Airport to Elounda Bay Palace, a luxury resort on Mirabello Bay.",
      },
      breadcrumbLabel: "Heraklion Airport to Elounda Bay Palace",
      hero: {
        eyebrow: "Heraklion Airport → Elounda Bay Palace",
        title: "Heraklion Airport to Elounda Bay Palace Transfer",
        description: "A direct private transfer from Heraklion Airport to Elounda Bay Palace, on Mirabello Bay near Elounda.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion Airport to Elounda Bay Palace",
        paragraphs: [
          "Elounda Bay Palace sits around 2 km from Elounda village and 7 km from Agios Nikolaos, set across 20 acres of landscaped grounds with two private beaches on Mirabello Bay. It's typically around an hour to an hour and a quarter from Heraklion Airport.",
          "Given the resort's profile, most visitors arrange a direct private transfer rather than a shared or public transport connection, particularly when travelling with resort luggage.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around an hour to an hour and a quarter, depending on traffic." },
          { title: "Drop-Off", description: "Directly at the resort entrance near Elounda." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Luxury Resort Arrivals", description: "Head directly to Elounda Bay Palace after landing." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-resort or resort-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Elounda",
        items: [
          { label: "Elounda", href: "/destination/elounda/", description: "See our destination overview of Elounda." },
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion Airport to Elounda Beach Hotel & Villas", href: "/route/heraklion-airport-to-elounda-beach/", description: "Another long-established Elounda luxury resort." },
          { label: "Heraklion Airport to Minos Beach Art Hotel", href: "/route/heraklion-airport-to-minos-beach-art/", description: "A design-focused hotel in nearby Agios Nikolaos." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Heraklion Airport to Elounda Bay Palace?", answer: "Book a direct private transfer — see this page for journey details." },
          { question: "Does Elounda Bay Palace have its own beach?", answer: "Yes, it has two private beaches within its grounds on Mirabello Bay." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — resort to airport as well as airport to resort." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Elounda Bay Palace Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Elounda Bay Palace",
        description: "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Elounda Bay Palace, ένα πολυτελές θέρετρο στον κόλπο του Μιραμπέλλου.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου προς Elounda Bay Palace",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου → Elounda Bay Palace",
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Elounda Bay Palace",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Elounda Bay Palace, στον κόλπο του Μιραμπέλλου κοντά στην Ελούντα.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Ηρακλείου προς το Elounda Bay Palace",
        paragraphs: [
          "Το Elounda Bay Palace βρίσκεται περίπου 2 χλμ από το χωριό της Ελούντας και 7 χλμ από τον Άγιο Νικόλαο, σε έκταση 20 στρεμμάτων διαμορφωμένων κήπων με δύο ιδιωτικές παραλίες στον κόλπο του Μιραμπέλλου. Βρίσκεται συνήθως περίπου μία ώρα έως μία ώρα και τέταρτο από το Αεροδρόμιο Ηρακλείου.",
          "Δεδομένου του προφίλ του θέρετρου, οι περισσότεροι επισκέπτες οργανώνουν απευθείας ιδιωτική μεταφορά αντί για κοινή ή δημόσια σύνδεση, ιδιαίτερα όταν ταξιδεύουν με αποσκευές θέρετρου.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου μία ώρα έως μία ώρα και τέταρτο, ανάλογα με την κίνηση." },
          { title: "Παράδοση", description: "Απευθείας στην είσοδο του θέρετρου κοντά στην Ελούντα." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Αφίξεις σε Πολυτελές Θέρετρο", description: "Κατευθυνθείτε απευθείας στο Elounda Bay Palace μετά την προσγείωση." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς θέρετρο ή θέρετρο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε την Ελούντα",
        items: [
          { label: "Ελούντα", href: "/el/proorismos/elounda/", description: "Δείτε την επισκόπηση προορισμού μας για την Ελούντα." },
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Elounda Beach Hotel & Villas", href: "/el/diadromi/aerodromio-irakleiou-elounda-beach/", description: "Άλλο μακρόχρονο πολυτελές θέρετρο της Ελούντας." },
          { label: "Αεροδρόμιο Ηρακλείου προς Minos Beach Art Hotel", href: "/el/diadromi/aerodromio-irakleiou-minos-beach-art/", description: "Ένα ξενοδοχείο design στον κοντινό Άγιο Νικόλαο." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Ηρακλείου στο Elounda Bay Palace;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — δείτε αυτή τη σελίδα για λεπτομέρειες ταξιδιού." },
          { question: "Έχει το Elounda Bay Palace δική του παραλία;", answer: "Ναι, διαθέτει δύο ιδιωτικές παραλίες εντός των χώρων του στον κόλπο του Μιραμπέλλου." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Elounda Bay Palace;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionAirportEloundaBeach: {
    en: {
      meta: {
        title: "Heraklion Airport to Elounda Beach Hotel & Villas Transfer",
        description: "Book a private transfer from Heraklion Airport to Elounda Beach Hotel & Villas, one of Elounda's original luxury resorts.",
      },
      breadcrumbLabel: "Heraklion Airport to Elounda Beach",
      hero: {
        eyebrow: "Heraklion Airport → Elounda Beach",
        title: "Heraklion Airport to Elounda Beach Hotel & Villas Transfer",
        description: "A direct private transfer from Heraklion Airport to Elounda Beach Hotel & Villas, in Elounda village itself.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion Airport to Elounda Beach Hotel & Villas",
        paragraphs: [
          "Elounda Beach Hotel & Villas sits within Elounda village itself, one of the original luxury pioneers of the area, set across 40 acres on Mirabello Bay. Spinalonga island is visible from much of the resort, with boats departing nearby at Plaka.",
          "Given the resort's profile, most visitors arrange a direct private transfer rather than a shared or public transport connection, typically around an hour to an hour and a quarter from Heraklion Airport.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around an hour to an hour and a quarter, depending on traffic." },
          { title: "Drop-Off", description: "Directly at the resort entrance in Elounda village." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Luxury Resort Arrivals", description: "Head directly to Elounda Beach Hotel & Villas after landing." },
          { title: "Families & Groups with Luggage", description: "A private vehicle keeps your group and luggage together for the whole journey." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-resort or resort-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Elounda",
        items: [
          { label: "Elounda", href: "/destination/elounda/", description: "See our destination overview of Elounda." },
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion Airport to Elounda Bay Palace", href: "/route/heraklion-airport-to-elounda-bay-palace/", description: "Another luxury resort near Elounda." },
          { label: "Heraklion Airport to Agios Nikolaos", href: "/route/heraklion-airport-to-agios-nikolaos/", description: "A slightly shorter transfer to the nearby town." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Heraklion Airport to Elounda Beach Hotel & Villas?", answer: "Book a direct private transfer — see this page for journey details." },
          { question: "Can I see Spinalonga from Elounda Beach Hotel & Villas?", answer: "Yes, the island is visible from much of the resort, with boats departing nearby at Plaka." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — resort to airport as well as airport to resort." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Elounda Beach Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Elounda Beach Hotel & Villas",
        description: "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Elounda Beach Hotel & Villas, ένα από τα πρώτα πολυτελή θέρετρα της Ελούντας.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου προς Elounda Beach",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου → Elounda Beach",
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Elounda Beach Hotel & Villas",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Elounda Beach Hotel & Villas, στο ίδιο το χωριό της Ελούντας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Ηρακλείου προς το Elounda Beach Hotel & Villas",
        paragraphs: [
          "Το Elounda Beach Hotel & Villas βρίσκεται μέσα στο ίδιο το χωριό της Ελούντας, ένα από τα πρώτα πολυτελή θέρετρα-πρωτοπόρους της περιοχής, σε έκταση 40 στρεμμάτων στον κόλπο του Μιραμπέλλου. Το νησί της Σπιναλόγκας είναι ορατό από μεγάλο μέρος του θέρετρου, με βάρκες που αναχωρούν εκεί κοντά στην Πλάκα.",
          "Δεδομένου του προφίλ του θέρετρου, οι περισσότεροι επισκέπτες οργανώνουν απευθείας ιδιωτική μεταφορά αντί για κοινή ή δημόσια σύνδεση, συνήθως περίπου μία ώρα έως μία ώρα και τέταρτο από το Αεροδρόμιο Ηρακλείου.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου μία ώρα έως μία ώρα και τέταρτο, ανάλογα με την κίνηση." },
          { title: "Παράδοση", description: "Απευθείας στην είσοδο του θέρετρου στο χωριό της Ελούντας." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Αφίξεις σε Πολυτελές Θέρετρο", description: "Κατευθυνθείτε απευθείας στο Elounda Beach Hotel & Villas μετά την προσγείωση." },
          { title: "Οικογένειες & Ομάδες με Αποσκευές", description: "Ένα ιδιωτικό όχημα κρατά την ομάδα και τις αποσκευές σας μαζί για ολόκληρο το ταξίδι." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς θέρετρο ή θέρετρο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε την Ελούντα",
        items: [
          { label: "Ελούντα", href: "/el/proorismos/elounda/", description: "Δείτε την επισκόπηση προορισμού μας για την Ελούντα." },
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Elounda Bay Palace", href: "/el/diadromi/aerodromio-irakleiou-elounda-bay-palace/", description: "Άλλο πολυτελές θέρετρο κοντά στην Ελούντα." },
          { label: "Αεροδρόμιο Ηρακλείου προς Άγιο Νικόλαο", href: "/el/diadromi/aerodromio-irakleiou-agios-nikolaos/", description: "Μια λίγο συντομότερη μεταφορά προς την κοντινή πόλη." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Ηρακλείου στο Elounda Beach Hotel & Villas;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — δείτε αυτή τη σελίδα για λεπτομέρειες ταξιδιού." },
          { question: "Μπορώ να δω τη Σπιναλόγκα από το Elounda Beach Hotel & Villas;", answer: "Ναι, το νησί είναι ορατό από μεγάλο μέρος του θέρετρου, με βάρκες που αναχωρούν εκεί κοντά στην Πλάκα." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Elounda Beach;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },

  routeHeraklionAirportMinosBeachArt: {
    en: {
      meta: {
        title: "Heraklion Airport to Minos Beach Art Hotel Transfer",
        description: "Book a private transfer from Heraklion Airport to Minos Beach Art Hotel, a design-focused waterfront hotel in Agios Nikolaos.",
      },
      breadcrumbLabel: "Heraklion Airport to Minos Beach Art Hotel",
      hero: {
        eyebrow: "Heraklion Airport → Minos Beach Art Hotel",
        title: "Heraklion Airport to Minos Beach Art Hotel Transfer",
        description: "A direct private transfer from Heraklion Airport to Minos Beach Art Hotel, in Agios Nikolaos town itself.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
      overview: {
        eyebrow: "Route Overview",
        title: "Travelling from Heraklion Airport to Minos Beach Art Hotel",
        paragraphs: [
          "Minos Beach Art Hotel sits in Agios Nikolaos town itself, around half a mile from the centre, with a design-hotel and art-focused concept and bungalow-style waterfront rooms — a genuinely different character from the larger resorts further north in Elounda.",
          "A private transfer from the airport takes you directly to the hotel, typically around 60–70 minutes depending on traffic.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Journey Planning",
        title: "What to Expect on This Route",
        items: [
          { title: "Journey Time", description: "Typically around 60–70 minutes, similar to other Agios Nikolaos transfers." },
          { title: "Drop-Off", description: "Directly at the hotel in Agios Nikolaos town." },
          { title: "Flight Details", description: "Share your flight number and arrival time so pickup can be planned around it." },
          { title: "Luggage Space", description: "Let us know your luggage when requesting a quote so a suitably sized vehicle can be arranged." },
        ],
      },
      whoItSuits: {
        eyebrow: "Who This Route Suits",
        title: "Ideal for These Journeys",
        items: [
          { title: "Design-Focused Stays", description: "For visitors who want a design and art-focused hotel concept." },
          { title: "Town-Centre Access", description: "In Agios Nikolaos town itself, rather than further out in Elounda." },
          { title: "Both Directions", description: "This transfer can be booked airport-to-hotel or hotel-to-airport." },
        ],
      },
      relatedLinks: {
        eyebrow: "Related Pages",
        title: "Explore Agios Nikolaos",
        items: [
          { label: "Agios Nikolaos", href: "/city/agios-nikolaos/", description: "See our overview of transfers across Agios Nikolaos." },
          { label: "Heraklion Airport", href: "/airport/heraklion-airport/", description: "See our dedicated airport transfer information." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Other Routes",
        title: "Other Routes You Might Consider",
        items: [
          { label: "Heraklion Airport to Elounda Bay Palace", href: "/route/heraklion-airport-to-elounda-bay-palace/", description: "A luxury resort a short drive north in Elounda." },
          { label: "Heraklion Airport to Agios Nikolaos", href: "/route/heraklion-airport-to-agios-nikolaos/", description: "Our general transfer route to Agios Nikolaos." },
        ],
      },
      faq: {
        eyebrow: "Questions & Answers",
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I get from Heraklion Airport to Minos Beach Art Hotel?", answer: "Book a direct private transfer — see this page for journey details." },
          { question: "Is Minos Beach Art Hotel in Elounda or Agios Nikolaos?", answer: "It's in Agios Nikolaos town itself, distinct from the Elounda resort area a few kilometres north." },
          { question: "Can this transfer also be booked for the return journey?", answer: "Yes, this route works in both directions — hotel to airport as well as airport to hotel." },
        ],
      },
      cta: {
        heading: "Ready to Book Your Airport to Minos Beach Art Hotel Transfer?",
        description: "Tell us your flight details and passenger details, and request your private transfer quote.",
        primaryLabel: "Book This Route",
        secondaryLabel: "Get a Free Quote",
      },
    },
    el: {
      meta: {
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Minos Beach Art Hotel",
        description: "Κλείστε ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Minos Beach Art Hotel, ένα παραθαλάσσιο ξενοδοχείο design στον Άγιο Νικόλαο.",
      },
      breadcrumbLabel: "Αεροδρόμιο Ηρακλείου προς Minos Beach Art Hotel",
      hero: {
        eyebrow: "Αεροδρόμιο Ηρακλείου → Minos Beach Art Hotel",
        title: "Μεταφορά Αεροδρόμιο Ηρακλείου – Minos Beach Art Hotel",
        description: "Μια απευθείας ιδιωτική μεταφορά από το Αεροδρόμιο Ηρακλείου προς το Minos Beach Art Hotel, στην ίδια την πόλη του Αγίου Νικολάου.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
      overview: {
        eyebrow: "Επισκόπηση Διαδρομής",
        title: "Ταξίδι από το Αεροδρόμιο Ηρακλείου προς το Minos Beach Art Hotel",
        paragraphs: [
          "Το Minos Beach Art Hotel βρίσκεται στην ίδια την πόλη του Αγίου Νικολάου, περίπου μισό μίλι από το κέντρο, με αντίληψη design ξενοδοχείου με έμφαση στην τέχνη και δωμάτια waterfront σε στυλ bungalow — πραγματικά διαφορετικός χαρακτήρας από τα μεγαλύτερα θέρετρα πιο βόρεια στην Ελούντα.",
          "Μια ιδιωτική μεταφορά από το αεροδρόμιο σας μεταφέρει απευθείας στο ξενοδοχείο, συνήθως περίπου 60-70 λεπτά ανάλογα με την κίνηση.",
        ],
      },
      journeyPlanning: {
        eyebrow: "Σχεδιασμός Ταξιδιού",
        title: "Τι να Περιμένετε σε Αυτή τη Διαδρομή",
        items: [
          { title: "Διάρκεια Ταξιδιού", description: "Συνήθως περίπου 60-70 λεπτά, παρόμοια με άλλες μεταφορές προς τον Άγιο Νικόλαο." },
          { title: "Παράδοση", description: "Απευθείας στο ξενοδοχείο στην πόλη του Αγίου Νικολάου." },
          { title: "Στοιχεία Πτήσης", description: "Ενημερώστε μας για τον αριθμό πτήσης και την ώρα άφιξης ώστε να προγραμματιστεί η παραλαβή." },
          { title: "Χώρος Αποσκευών", description: "Ενημερώστε μας για τις αποσκευές σας κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
        ],
      },
      whoItSuits: {
        eyebrow: "Σε Ποιους Ταιριάζει",
        title: "Ιδανικό για Αυτά τα Ταξίδια",
        items: [
          { title: "Διαμονή με Έμφαση στο Design", description: "Για επισκέπτες που θέλουν αντίληψη ξενοδοχείου design με έμφαση στην τέχνη." },
          { title: "Πρόσβαση στο Κέντρο της Πόλης", description: "Στην ίδια την πόλη του Αγίου Νικολάου, αντί για πιο έξω στην Ελούντα." },
          { title: "Και οι Δύο Κατευθύνσεις", description: "Αυτή η μεταφορά μπορεί να κλειστεί αεροδρόμιο προς ξενοδοχείο ή ξενοδοχείο προς αεροδρόμιο." },
        ],
      },
      relatedLinks: {
        eyebrow: "Σχετικές Σελίδες",
        title: "Εξερευνήστε τον Άγιο Νικόλαο",
        items: [
          { label: "Άγιος Νικόλαος", href: "/el/poli/agios-nikolaos/", description: "Δείτε την επισκόπησή μας για μεταφορές σε όλο τον Άγιο Νικόλαο." },
          { label: "Αεροδρόμιο Ηρακλείου", href: "/el/aerodromio/irakleio/", description: "Δείτε τις ειδικές πληροφορίες μεταφοράς αεροδρομίου." },
        ],
      },
      relatedRoutes: {
        eyebrow: "Άλλες Διαδρομές",
        title: "Άλλες Διαδρομές που Μπορεί να Εξετάσετε",
        items: [
          { label: "Αεροδρόμιο Ηρακλείου προς Elounda Bay Palace", href: "/el/diadromi/aerodromio-irakleiou-elounda-bay-palace/", description: "Ένα πολυτελές θέρετρο λίγα λεπτά βόρεια στην Ελούντα." },
          { label: "Αεροδρόμιο Ηρακλείου προς Άγιο Νικόλαο", href: "/el/diadromi/aerodromio-irakleiou-agios-nikolaos/", description: "Η γενική μας διαδρομή μεταφοράς προς τον Άγιο Νικόλαο." },
        ],
      },
      faq: {
        eyebrow: "Ερωτήσεις & Απαντήσεις",
        title: "Συχνές Ερωτήσεις",
        items: [
          { question: "Πώς φτάνω από το Αεροδρόμιο Ηρακλείου στο Minos Beach Art Hotel;", answer: "Κλείστε απευθείας ιδιωτική μεταφορά — δείτε αυτή τη σελίδα για λεπτομέρειες ταξιδιού." },
          { question: "Είναι το Minos Beach Art Hotel στην Ελούντα ή στον Άγιο Νικόλαο;", answer: "Βρίσκεται στην ίδια την πόλη του Αγίου Νικολάου, διαφορετικό από την περιοχή θερέτρων της Ελούντας λίγα χιλιόμετρα βόρεια." },
          { question: "Μπορεί αυτή η μεταφορά να κλειστεί και για την επιστροφή;", answer: "Ναι, αυτή η διαδρομή λειτουργεί και προς τις δύο κατευθύνσεις." },
        ],
      },
      cta: {
        heading: "Έτοιμοι να Κλείσετε τη Μεταφορά σας Αεροδρόμιο – Minos Beach Art Hotel;",
        description: "Πείτε μας τα στοιχεία πτήσης και τα στοιχεία επιβατών σας, και ζητήστε την προσφορά ιδιωτικής μεταφοράς σας.",
        primaryLabel: "Κλείστε αυτή τη Διαδρομή",
        secondaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      },
    },
  },
}
