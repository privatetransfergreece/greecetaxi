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
}
