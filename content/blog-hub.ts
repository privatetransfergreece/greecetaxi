export type BlogHubContent = {
  meta: { title: string; description: string }
  breadcrumbLabel: string
  hero: { eyebrow: string; title: string; description: string }
  emptyState: { title: string; description: string }
  faq: { eyebrow: string; title: string; items: { question: string; answer: string }[] }
}

export const blogHubContent: Record<"en" | "el", BlogHubContent> = {
  en: {
    meta: {
      title: "Greece Travel Blog – Airport, Port & Transfer Guides",
      description:
        "Practical guides for travelling in Greece: airport and port transfers, hotel logistics, day trips and destination tips from Private Transfer Greece.",
    },
    breadcrumbLabel: "Blog",
    hero: {
      eyebrow: "Greece Travel Blog",
      title: "Guides for Getting Around Greece",
      description: "Practical airport, port and destination transfer guides to help you plan your trip.",
    },
    emptyState: {
      title: "New guides are on the way",
      description:
        "We're preparing more Greece travel and transfer guides. Check back soon, or get in touch if you have a question about your trip.",
    },
    faq: {
      eyebrow: "About This Blog",
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What topics does this blog cover?",
          answer:
            "Practical, transfer-focused travel information: airport and port logistics, hotel pickup considerations, day-trip planning and destination guides across Greece.",
        },
        {
          question: "Do you publish Athens Airport transfer information?",
          answer:
            "Yes, along with guides for other Greek airports and ports as we add them. Look for the Airport Transfers and Port Transfers categories.",
        },
        {
          question: "Which Greek destinations are covered?",
          answer:
            "We're starting with Athens, Piraeus and the Attica region, and expanding to other Greek cities and islands over time.",
        },
        {
          question: "How often is the blog updated?",
          answer: "We add and update guides as new routes and destinations are covered on the site.",
        },
        {
          question: "Who writes these guides?",
          answer:
            "Articles are written by the Private Transfer Greece team, drawing on our day-to-day experience arranging transfers across Greece.",
        },
      ],
    },
  },
  el: {
    meta: {
      title: "Ταξιδιωτικό Blog για την Ελλάδα – Οδηγοί Αεροδρομίου, Λιμανιού & Μεταφορών",
      description:
        "Πρακτικοί οδηγοί για ταξίδια στην Ελλάδα: μεταφορές αεροδρομίου και λιμανιού, μετακινήσεις σε ξενοδοχεία, ημερήσιες εκδρομές και συμβουλές προορισμών.",
    },
    breadcrumbLabel: "Blog",
    hero: {
      eyebrow: "Ταξιδιωτικό Blog",
      title: "Οδηγοί για τις Μετακινήσεις σας στην Ελλάδα",
      description: "Πρακτικοί οδηγοί μεταφοράς για αεροδρόμια, λιμάνια και προορισμούς, για να σχεδιάσετε το ταξίδι σας.",
    },
    emptyState: {
      title: "Νέοι οδηγοί έρχονται σύντομα",
      description:
        "Ετοιμάζουμε περισσότερους ταξιδιωτικούς οδηγούς για την Ελλάδα. Επισκεφθείτε μας ξανά σύντομα, ή επικοινωνήστε μαζί μας αν έχετε ερώτηση για το ταξίδι σας.",
    },
    faq: {
      eyebrow: "Σχετικά με το Blog",
      title: "Συχνές Ερωτήσεις",
      items: [
        {
          question: "Ποια θέματα καλύπτει αυτό το blog;",
          answer:
            "Πρακτικές πληροφορίες ταξιδιού με έμφαση στις μεταφορές: διαδικασίες αεροδρομίου και λιμανιού, παραλαβή από ξενοδοχεία, σχεδιασμό ημερήσιων εκδρομών και οδηγούς προορισμών στην Ελλάδα.",
        },
        {
          question: "Δημοσιεύετε πληροφορίες για μεταφορές στο Αεροδρόμιο Αθηνών;",
          answer:
            "Ναι, μαζί με οδηγούς για άλλα ελληνικά αεροδρόμια και λιμάνια όσο τους προσθέτουμε. Δείτε τις κατηγορίες Μεταφορές Αεροδρομίου και Μεταφορές Λιμανιού.",
        },
        {
          question: "Ποιους ελληνικούς προορισμούς καλύπτετε;",
          answer:
            "Ξεκινάμε από την Αθήνα, τον Πειραιά και την Αττική, και επεκτεινόμαστε σε άλλες ελληνικές πόλεις και νησιά με τον καιρό.",
        },
        {
          question: "Πόσο συχνά ενημερώνεται το blog;",
          answer: "Προσθέτουμε και ενημερώνουμε οδηγούς όσο καλύπτουμε νέες διαδρομές και προορισμούς στον ιστότοπο.",
        },
        {
          question: "Ποιος γράφει αυτούς τους οδηγούς;",
          answer:
            "Τα άρθρα γράφονται από την ομάδα της Private Transfer Greece, με βάση την καθημερινή εμπειρία μας στην οργάνωση μεταφορών σε όλη την Ελλάδα.",
        },
      ],
    },
  },
}
