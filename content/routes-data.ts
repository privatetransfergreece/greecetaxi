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
          { label: "Athens City Transfers", href: "/city/athens/", description: "See our overview of private transportation around Athens." },
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
          { label: "Μεταφορές στην Αθήνα", href: "/el/poli/athina/", description: "Δείτε τη γενική μας επισκόπηση ιδιωτικών μεταφορών στην Αθήνα." },
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
          { label: "Athens City Transfers", href: "/city/athens/", description: "See our overview of private transportation around Athens." },
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
          { label: "Μεταφορές στην Αθήνα", href: "/el/poli/athina/", description: "Δείτε τη γενική μας επισκόπηση ιδιωτικών μεταφορών στην Αθήνα." },
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
          { label: "Athens City Transfers", href: "/city/athens/", description: "See our overview of private transportation around Athens." },
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
          { label: "Μεταφορές στην Αθήνα", href: "/el/poli/athina/", description: "Δείτε τη γενική μας επισκόπηση ιδιωτικών μεταφορών στην Αθήνα." },
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
}
