export type ContactContent = {
  meta: { title: string; description: string }
  hero: { eyebrow: string; title: string; description: string; primaryLabel: string; secondaryLabel: string }
  intro: { eyebrow: string; title: string; paragraphs: string[] }
  details: { title: string; companyLabel: string }
  faq: { eyebrow: string; title: string; items: { question: string; answer: string }[] }
  cta: { heading: string; description: string; primaryLabel: string; secondaryLabel: string }
}

export const contactContent: Record<"en" | "el", ContactContent> = {
  en: {
    meta: {
      title: "Contact Us – Private Transfer Greece",
      description:
        "Get in touch with us, or request a fast quote for your private transfer in Greece. Contact details and answers to common questions.",
    },
    hero: {
      eyebrow: "Get in Touch",
      title: "Contact Us",
      description: "The fastest way to arrange your transfer is our quote form. For anything else, reach us using the details below.",
      primaryLabel: "Get a Free Quote",
      secondaryLabel: "View All Services",
    },
    intro: {
      eyebrow: "Booking a Transfer?",
      title: "Use Our Quote Form to Book",
      paragraphs: [
        "If you'd like to book a private transfer, the quickest way is to submit our quote form with your pickup, destination, date and passenger details. We'll respond with pricing and availability.",
        "For general questions, feedback, or anything not related to booking a specific transfer, you can reach us using the contact details below.",
      ],
    },
    details: {
      title: "Contact Details",
      companyLabel: "Private Transfer Greece",
    },
    faq: {
      eyebrow: "Questions & Answers",
      title: "Frequently Asked Questions",
      items: [
        { question: "What is the fastest way to book a transfer?", answer: "Submit our quote form with your pickup, destination, date and passenger details, and we'll respond with pricing and availability." },
        { question: "Can I contact you for a question that isn't about booking?", answer: "Yes, use the contact details on this page for general questions or feedback." },
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
      title: "Επικοινωνία – Private Transfer Greece",
      description:
        "Επικοινωνήστε μαζί μας, ή ζητήστε γρήγορη προσφορά για την ιδιωτική σας μεταφορά στην Ελλάδα. Στοιχεία επικοινωνίας και απαντήσεις σε συχνές ερωτήσεις.",
    },
    hero: {
      eyebrow: "Επικοινωνήστε Μαζί μας",
      title: "Επικοινωνία",
      description: "Ο ταχύτερος τρόπος να οργανώσετε τη μεταφορά σας είναι η φόρμα προσφοράς μας. Για οτιδήποτε άλλο, επικοινωνήστε μαζί μας με τα παρακάτω στοιχεία.",
      primaryLabel: "Ζητήστε Δωρεάν Προσφορά",
      secondaryLabel: "Δείτε Όλες τις Υπηρεσίες",
    },
    intro: {
      eyebrow: "Θέλετε να Κλείσετε Μεταφορά;",
      title: "Χρησιμοποιήστε τη Φόρμα Προσφοράς μας",
      paragraphs: [
        "Αν θέλετε να κλείσετε ιδιωτική μεταφορά, ο ταχύτερος τρόπος είναι να υποβάλετε τη φόρμα προσφοράς μας με τα στοιχεία παραλαβής, προορισμού, ημερομηνίας και επιβατών σας. Θα σας απαντήσουμε με τιμή και διαθεσιμότητα.",
        "Για γενικές ερωτήσεις, σχόλια, ή οτιδήποτε δεν σχετίζεται με το κλείσιμο συγκεκριμένης μεταφοράς, μπορείτε να επικοινωνήσετε μαζί μας με τα παρακάτω στοιχεία.",
      ],
    },
    details: {
      title: "Στοιχεία Επικοινωνίας",
      companyLabel: "Private Transfer Greece",
    },
    faq: {
      eyebrow: "Ερωτήσεις & Απαντήσεις",
      title: "Συχνές Ερωτήσεις",
      items: [
        { question: "Ποιος είναι ο ταχύτερος τρόπος να κλείσω μεταφορά;", answer: "Υποβάλετε τη φόρμα προσφοράς μας με τα στοιχεία παραλαβής, προορισμού, ημερομηνίας και επιβατών σας, και θα σας απαντήσουμε με τιμή και διαθεσιμότητα." },
        { question: "Μπορώ να επικοινωνήσω για κάτι που δεν αφορά κράτηση;", answer: "Ναι, χρησιμοποιήστε τα στοιχεία επικοινωνίας σε αυτή τη σελίδα για γενικές ερωτήσεις ή σχόλια." },
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
