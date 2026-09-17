export type ContactContent = {
  meta: { title: string; description: string }
  hero: { eyebrow: string; title: string; description: string; primaryLabel: string; secondaryLabel: string }
  intro: { eyebrow: string; title: string; paragraphs: string[] }
  requestDetails: { eyebrow: string; title: string; items: { title: string; description: string }[] }
  howItWorks: { eyebrow: string; title: string; steps: { title: string; description: string }[] }
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
      title: "Request a Private Transfer",
      paragraphs: [
        "The quickest way to arrange a private transfer is to submit our quote form with your journey details. We'll review your request and respond with availability and pricing.",
        "For general questions, feedback, or anything not related to booking a specific transfer, you can reach us using the contact details below.",
      ],
    },
    requestDetails: {
      eyebrow: "What to Include",
      title: "What to Provide When Requesting a Quote",
      items: [
        { title: "Pickup Location", description: "Your airport, port, hotel or address of departure." },
        { title: "Destination", description: "Where you're travelling to, including the hotel or address if known." },
        { title: "Date & Time", description: "Your travel date and pickup time, or your flight/ferry arrival time." },
        { title: "Passengers & Luggage", description: "The number of passengers and items of luggage, so a suitable vehicle can be arranged." },
      ],
    },
    howItWorks: {
      eyebrow: "How It Works",
      title: "How the Booking Request Works",
      steps: [
        { title: "Submit Your Request", description: "Send your journey details through our quote form, by email or by phone." },
        { title: "We Review Your Journey", description: "Our team checks your route, timing and vehicle requirements." },
        { title: "Receive Your Quote", description: "We respond with availability and pricing based on your request." },
        { title: "Booking Confirmed", description: "Your transfer is confirmed once you accept the quote and provide any remaining details." },
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
        { question: "How can I request a private transfer?", answer: "Submit our quote form with your pickup, destination, date and passenger details, and we'll respond with pricing and availability." },
        { question: "What information should I provide when contacting you?", answer: "Your pickup location, destination, travel date and time, number of passengers and luggage, and your flight or ferry details if relevant." },
        { question: "Can I contact you about an existing booking?", answer: "Yes, use the contact details on this page and include your name and travel date so we can find your booking." },
        { question: "Can I arrange an airport or port transfer?", answer: "Yes, airport and port transfers are among our most common requests — share your flight or ferry details when requesting a quote." },
        { question: "Can I request a transfer for a group?", answer: "Yes, mention your total passenger and luggage numbers when requesting a quote so a suitable vehicle can be arranged." },
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
      title: "Ζητήστε Ιδιωτική Μεταφορά",
      paragraphs: [
        "Ο ταχύτερος τρόπος να οργανώσετε ιδιωτική μεταφορά είναι να υποβάλετε τη φόρμα προσφοράς μας με τα στοιχεία του ταξιδιού σας. Θα εξετάσουμε το αίτημά σας και θα απαντήσουμε με διαθεσιμότητα και τιμή.",
        "Για γενικές ερωτήσεις, σχόλια, ή οτιδήποτε δεν σχετίζεται με το κλείσιμο συγκεκριμένης μεταφοράς, μπορείτε να επικοινωνήσετε μαζί μας με τα παρακάτω στοιχεία.",
      ],
    },
    requestDetails: {
      eyebrow: "Τι να Συμπεριλάβετε",
      title: "Τι να Δηλώσετε Κατά την Αίτηση Προσφοράς",
      items: [
        { title: "Σημείο Παραλαβής", description: "Το αεροδρόμιο, λιμάνι, ξενοδοχείο ή διεύθυνση αναχώρησής σας." },
        { title: "Προορισμός", description: "Πού ταξιδεύετε, συμπεριλαμβανομένου του ξενοδοχείου ή της διεύθυνσης αν είναι γνωστή." },
        { title: "Ημερομηνία & Ώρα", description: "Την ημερομηνία ταξιδιού και την ώρα παραλαβής, ή την ώρα άφιξης της πτήσης/ferry σας." },
        { title: "Επιβάτες & Αποσκευές", description: "Τον αριθμό επιβατών και αντικειμένων αποσκευών, ώστε να οριστεί κατάλληλο όχημα." },
      ],
    },
    howItWorks: {
      eyebrow: "Πώς Λειτουργεί",
      title: "Πώς Λειτουργεί το Αίτημα Κράτησης",
      steps: [
        { title: "Υποβάλετε το Αίτημά σας", description: "Στείλτε τα στοιχεία του ταξιδιού σας μέσω της φόρμας προσφοράς, email ή τηλεφωνικά." },
        { title: "Εξετάζουμε το Ταξίδι σας", description: "Η ομάδα μας ελέγχει τη διαδρομή, τον χρόνο και τις ανάγκες οχήματος." },
        { title: "Λαμβάνετε την Προσφορά σας", description: "Απαντάμε με διαθεσιμότητα και τιμή βάσει του αιτήματός σας." },
        { title: "Επιβεβαίωση Κράτησης", description: "Η μεταφορά σας επιβεβαιώνεται μόλις αποδεχτείτε την προσφορά και παρέχετε τυχόν υπόλοιπα στοιχεία." },
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
        { question: "Πώς μπορώ να ζητήσω ιδιωτική μεταφορά;", answer: "Υποβάλετε τη φόρμα προσφοράς μας με τα στοιχεία παραλαβής, προορισμού, ημερομηνίας και επιβατών σας, και θα σας απαντήσουμε με τιμή και διαθεσιμότητα." },
        { question: "Ποια στοιχεία πρέπει να δώσω κατά την επικοινωνία;", answer: "Το σημείο παραλαβής, τον προορισμό, την ημερομηνία και ώρα ταξιδιού, τον αριθμό επιβατών και αποσκευών, και τα στοιχεία πτήσης ή ferry αν ισχύουν." },
        { question: "Μπορώ να επικοινωνήσω για μια υπάρχουσα κράτηση;", answer: "Ναι, χρησιμοποιήστε τα στοιχεία επικοινωνίας σε αυτή τη σελίδα και αναφέρετε το όνομα και την ημερομηνία ταξιδιού σας ώστε να εντοπίσουμε την κράτησή σας." },
        { question: "Μπορώ να οργανώσω μεταφορά αεροδρομίου ή λιμανιού;", answer: "Ναι, οι μεταφορές αεροδρομίου και λιμανιού είναι από τα πιο συχνά αιτήματά μας — αναφέρετε τα στοιχεία πτήσης ή ferry σας κατά την αίτηση προσφοράς." },
        { question: "Μπορώ να ζητήσω μεταφορά για ομάδα;", answer: "Ναι, αναφέρετε τον συνολικό αριθμό επιβατών και αποσκευών κατά την αίτηση προσφοράς ώστε να οριστεί κατάλληλο όχημα." },
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
