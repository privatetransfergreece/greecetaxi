import type { Locale } from "@/lib/i18n/config"
import type { PageKey } from "@/lib/i18n/routes"

export type QuoteMeta = { title: string; description: string }

export type SelectOption = { value: string; label: string }

export type QuotePageContent = {
  meta: QuoteMeta
  breadcrumbLabel: string
  hero: {
    eyebrow: string
    title: string
    description: string
  }
  form: {
    sectionCustomer: string
    sectionJourney: string
    sectionPassengers: string
    sectionAdditional: string
    fullName: { label: string; placeholder: string; required: string; tooLong: string }
    email: { label: string; placeholder: string; required: string; invalid: string }
    phone: { label: string; placeholder: string }
    country: { label: string; placeholder: string }
    transferType: { label: string; placeholder: string; required: string; options: SelectOption[] }
    pickupLocation: { label: string; placeholder: string; required: string }
    dropoffLocation: { label: string; placeholder: string; required: string }
    travelDate: { label: string; required: string }
    pickupTime: { label: string; required: string; helper: string }
    returnQuestion: { label: string; yes: string; no: string }
    returnPickupLocation: { label: string; placeholder: string }
    returnDropoffLocation: { label: string; placeholder: string }
    returnDate: { label: string; required: string }
    returnTime: { label: string; required: string }
    adults: { label: string }
    children: { label: string }
    infants: { label: string }
    luggage: { label: string }
    flightNumber: { label: string; placeholder: string; helper: string }
    ferryInfo: { label: string; placeholder: string }
    hotelName: { label: string; placeholder: string }
    specialRequests: { label: string; placeholder: string; helper: string }
    consentLabel: string
    consentLinkText: string
    consentRequired: string
    submit: string
    submitting: string
  }
  success: {
    title: string
    description: string
    backHome: string
    newRequest: string
  }
  error: {
    title: string
    description: string
  }
  howItWorks: {
    eyebrow: string
    title: string
    steps: { title: string; description: string }[]
  }
  whyQuote: {
    eyebrow: string
    title: string
    items: { title: string; description: string }[]
  }
  helpfulInfo: {
    eyebrow: string
    title: string
    description: string
    items: string[]
  }
  related: {
    eyebrow: string
    title: string
    items: { pageKey: PageKey; blurb: string }[]
  }
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
}

export const quoteContent: Record<Locale, QuotePageContent> = {
  en: {
    meta: {
      title: "Get a Quote for Private Transfers in Greece – Book Your Ride",
      description:
        "Request a private transfer quote in Greece. Share your route, travel date, passengers and luggage, and we'll get back to you with your options.",
    },
    breadcrumbLabel: "Get a Quote",
    hero: {
      eyebrow: "Private Transfer Quote",
      title: "Get a Quote for Your Private Transfer in Greece",
      description:
        "Tell us where and when you need to travel, and we'll use your journey details to prepare a private transfer quote.",
    },
    form: {
      sectionCustomer: "Your Details",
      sectionJourney: "Journey Details",
      sectionPassengers: "Passengers & Luggage",
      sectionAdditional: "Additional Information",
      fullName: {
        label: "Full Name",
        placeholder: "Your full name",
        required: "Please enter your full name.",
        tooLong: "Please shorten this to under 200 characters.",
      },
      email: {
        label: "Email Address",
        placeholder: "you@example.com",
        required: "Please enter your email address.",
        invalid: "Please enter a valid email address.",
      },
      phone: { label: "Phone / WhatsApp Number", placeholder: "+30 690 000 0000" },
      country: { label: "Country", placeholder: "e.g. United Kingdom" },
      transferType: {
        label: "Transfer Type",
        placeholder: "Select a transfer type",
        required: "Please select a transfer type.",
        options: [
          { value: "airport", label: "Airport Transfer" },
          { value: "private", label: "Private Transfer" },
          { value: "city-to-city", label: "City-to-City Transfer" },
          { value: "port-cruise", label: "Port / Cruise Transfer" },
          { value: "corporate", label: "Corporate Transfer" },
          { value: "group", label: "Group Transfer" },
          { value: "hourly", label: "Hourly Hire" },
          { value: "other", label: "Other" },
        ],
      },
      pickupLocation: {
        label: "Pickup Location",
        placeholder: "Airport, hotel, address or location",
        required: "Pickup location is required.",
      },
      dropoffLocation: {
        label: "Drop-off Location",
        placeholder: "Airport, hotel, address or location",
        required: "Drop-off location is required.",
      },
      travelDate: { label: "Date", required: "Please select your travel date." },
      pickupTime: {
        label: "Pickup Time",
        required: "Please select a pickup time.",
        helper: "Times refer to local time in Greece.",
      },
      returnQuestion: {
        label: "Do you also need a return transfer?",
        yes: "Yes",
        no: "No",
      },
      returnPickupLocation: { label: "Return Pickup Location", placeholder: "Airport, hotel, address or location" },
      returnDropoffLocation: { label: "Return Drop-off Location", placeholder: "Airport, hotel, address or location" },
      returnDate: { label: "Return Date", required: "Please select your return date." },
      returnTime: { label: "Return Time", required: "Please select a return time." },
      adults: { label: "Adults" },
      children: { label: "Children" },
      infants: { label: "Infants" },
      luggage: { label: "Luggage Items" },
      flightNumber: {
        label: "Flight Number",
        placeholder: "e.g. BA123",
        helper: "If you are arriving by air, your flight number helps us understand your journey details.",
      },
      ferryInfo: { label: "Ferry / Cruise Information", placeholder: "Ferry company, cruise line or sailing details" },
      hotelName: { label: "Hotel / Accommodation Name", placeholder: "Name of your hotel or accommodation" },
      specialRequests: {
        label: "Special Requests or Additional Information",
        placeholder: "Child seat, extra luggage, mobility requirements, multiple stops, meeting instructions…",
        helper: "We'll do our best to accommodate specific requests, though we can't guarantee every request in advance.",
      },
      consentLabel: "I have read and agree to the",
      consentLinkText: "Privacy Policy",
      consentRequired: "Please confirm you agree to the Privacy Policy.",
      submit: "Request My Quote",
      submitting: "Sending your request…",
    },
    success: {
      title: "Thank You — Your Quote Request Has Been Received",
      description:
        "We've received your transfer details. We'll review your request and get back to you with the available options and quote.",
      backHome: "Return to Homepage",
      newRequest: "Make Another Request",
    },
    error: {
      title: "We couldn't submit your request",
      description: "Please check your details and try again.",
    },
    howItWorks: {
      eyebrow: "How It Works",
      title: "How It Works",
      steps: [
        { title: "Send Your Details", description: "Complete the form with your route, travel date and passenger details." },
        { title: "We Review Your Journey", description: "We check your route, timing and any special requirements you've mentioned." },
        { title: "Receive Your Quote", description: "We get back to you with the available options and pricing for your journey." },
        { title: "Confirm Your Transfer", description: "Once you're happy with the quote, confirm your booking and you're all set." },
      ],
    },
    whyQuote: {
      eyebrow: "Why Request a Quote",
      title: "Plan Your Journey With the Right Transfer",
      items: [
        { title: "Route-Specific Pricing", description: "Pricing depends on your exact route, distance and vehicle needs, confirmed for your journey specifically." },
        { title: "Matched to Your Group", description: "Vehicle selection accounts for your passenger numbers and luggage." },
        { title: "The Right Transfer Type", description: "Airport, private, city-to-city, port, corporate, group or hourly hire — we confirm what suits your plans." },
        { title: "Airport, City and Port Connections", description: "Whether you're landing, sailing or travelling between destinations, your journey can be planned end to end." },
        { title: "Room for Special Requirements", description: "Mention any specific needs and we'll confirm what can be arranged." },
      ],
    },
    helpfulInfo: {
      eyebrow: "Booking Guidance",
      title: "What Information Should I Include?",
      description:
        "The more complete your request, the easier it is for us to prepare an accurate quote. Where relevant, try to include:",
      items: [
        "Your pickup location",
        "Your destination",
        "Your travel date",
        "Your pickup time",
        "Passenger count",
        "Luggage count",
        "Flight or ferry details, where relevant",
        "Any special requests",
      ],
    },
    related: {
      eyebrow: "Need a Different Type of Transfer?",
      title: "Explore Our Transfer Services",
      items: [
        { pageKey: "airportTransfers", blurb: "Private pickup and drop-off from Greece's major airports." },
        { pageKey: "privateTransfers", blurb: "A private, door-to-door vehicle for any journey in Greece." },
        { pageKey: "cityToCityTransfers", blurb: "Direct private transfers between Greek cities and destinations." },
        { pageKey: "cruisePortTransfers", blurb: "Transfers timed around your cruise or ferry at major Greek ports." },
        { pageKey: "corporateTransfers", blurb: "Professional transportation for business travel and meetings." },
        { pageKey: "groupTransfers", blurb: "Private transportation for families, groups and events." },
        { pageKey: "hourlyHire", blurb: "A private driver and vehicle booked by the hour for flexible plans." },
      ],
    },
    faq: {
      eyebrow: "Questions & Answers",
      title: "Frequently Asked Questions",
      items: [
        { question: "How do I request a private transfer quote in Greece?", answer: "Complete the form above with your route, travel date, passenger details and any special requests, and submit it. We'll review your journey and get back to you." },
        { question: "What information do I need to provide?", answer: "At minimum, your pickup location, destination, travel date, pickup time and contact details. Flight or ferry information, passenger and luggage numbers help us prepare a more accurate quote." },
        { question: "Can I request an airport transfer?", answer: "Yes, select \"Airport Transfer\" as your transfer type and let us know your flight details where relevant." },
        { question: "Can I request a transfer between two Greek cities?", answer: "Yes, select \"City-to-City Transfer\" and tell us your starting point and destination." },
        { question: "Can I request a port or cruise transfer?", answer: "Yes, select \"Port / Cruise Transfer\" and share your sailing details so your pickup can be planned around your embarkation or disembarkation." },
        { question: "Can I book a transfer for a group?", answer: "Yes, select \"Group Transfer\" and let us know your total passenger and luggage numbers so a suitable vehicle can be arranged." },
        { question: "Can I include special requests?", answer: "Yes, use the \"Special Requests\" field to mention anything relevant, such as a child seat, extra luggage or mobility requirements. We'll confirm what can be accommodated." },
        { question: "How will I receive my quote?", answer: "We'll contact you using the email address or phone number you provide, with your available options and pricing." },
      ],
    },
    cta: {
      heading: "Ready to Plan Your Transfer?",
      description: "Complete the form above and we'll get back to you with your private transfer quote.",
      primaryLabel: "Go to the Quote Form",
      secondaryLabel: "Browse Our Services",
    },
  },
  el: {
    meta: {
      title: "Ζητήστε Προσφορά για Ιδιωτική Μεταφορά στην Ελλάδα",
      description:
        "Ζητήστε προσφορά για ιδιωτική μεταφορά στην Ελλάδα. Πείτε μας τη διαδρομή, την ημερομηνία, τους επιβάτες και τις αποσκευές σας για να ετοιμάσουμε την προσφορά σας.",
    },
    breadcrumbLabel: "Αίτηση Προσφοράς",
    hero: {
      eyebrow: "Αίτηση Προσφοράς",
      title: "Ζητήστε Προσφορά για την Ιδιωτική Μεταφορά σας στην Ελλάδα",
      description:
        "Πείτε μας πού και πότε χρειάζεται να ταξιδέψετε, και θα χρησιμοποιήσουμε τα στοιχεία της διαδρομής σας για να ετοιμάσουμε την προσφορά της ιδιωτικής σας μεταφοράς.",
    },
    form: {
      sectionCustomer: "Τα Στοιχεία σας",
      sectionJourney: "Στοιχεία Διαδρομής",
      sectionPassengers: "Επιβάτες & Αποσκευές",
      sectionAdditional: "Επιπλέον Πληροφορίες",
      fullName: {
        label: "Ονοματεπώνυμο",
        placeholder: "Το ονοματεπώνυμό σας",
        required: "Παρακαλώ εισαγάγετε το ονοματεπώνυμό σας.",
        tooLong: "Παρακαλώ συντομεύστε σε λιγότερους από 200 χαρακτήρες.",
      },
      email: {
        label: "Διεύθυνση Email",
        placeholder: "you@example.com",
        required: "Παρακαλώ εισαγάγετε τη διεύθυνση email σας.",
        invalid: "Παρακαλώ εισαγάγετε μια έγκυρη διεύθυνση email.",
      },
      phone: { label: "Τηλέφωνο / WhatsApp", placeholder: "+30 690 000 0000" },
      country: { label: "Χώρα", placeholder: "π.χ. Ηνωμένο Βασίλειο" },
      transferType: {
        label: "Τύπος Μεταφοράς",
        placeholder: "Επιλέξτε τύπο μεταφοράς",
        required: "Παρακαλώ επιλέξτε τύπο μεταφοράς.",
        options: [
          { value: "airport", label: "Μεταφορά από/προς Αεροδρόμιο" },
          { value: "private", label: "Ιδιωτική Μεταφορά" },
          { value: "city-to-city", label: "Μεταφορά μεταξύ Πόλεων" },
          { value: "port-cruise", label: "Μεταφορά από/προς Λιμάνι ή Κρουαζιέρα" },
          { value: "corporate", label: "Εταιρική Μεταφορά" },
          { value: "group", label: "Μεταφορά για Ομάδες" },
          { value: "hourly", label: "Ενοικίαση Οχήματος με Οδηγό ανά Ώρα" },
          { value: "other", label: "Άλλο" },
        ],
      },
      pickupLocation: {
        label: "Σημείο Παραλαβής",
        placeholder: "Αεροδρόμιο, ξενοδοχείο, διεύθυνση ή τοποθεσία",
        required: "Το σημείο παραλαβής είναι υποχρεωτικό.",
      },
      dropoffLocation: {
        label: "Προορισμός",
        placeholder: "Αεροδρόμιο, ξενοδοχείο, διεύθυνση ή τοποθεσία",
        required: "Ο προορισμός είναι υποχρεωτικός.",
      },
      travelDate: { label: "Ημερομηνία Ταξιδιού", required: "Παρακαλώ επιλέξτε την ημερομηνία ταξιδιού σας." },
      pickupTime: {
        label: "Ώρα Παραλαβής",
        required: "Παρακαλώ επιλέξτε ώρα παραλαβής.",
        helper: "Οι ώρες αναφέρονται στην τοπική ώρα Ελλάδας.",
      },
      returnQuestion: {
        label: "Χρειάζεστε και μεταφορά επιστροφής;",
        yes: "Ναι",
        no: "Όχι",
      },
      returnPickupLocation: { label: "Σημείο Παραλαβής Επιστροφής", placeholder: "Αεροδρόμιο, ξενοδοχείο, διεύθυνση ή τοποθεσία" },
      returnDropoffLocation: { label: "Προορισμός Επιστροφής", placeholder: "Αεροδρόμιο, ξενοδοχείο, διεύθυνση ή τοποθεσία" },
      returnDate: { label: "Ημερομηνία Επιστροφής", required: "Παρακαλώ επιλέξτε την ημερομηνία επιστροφής σας." },
      returnTime: { label: "Ώρα Επιστροφής", required: "Παρακαλώ επιλέξτε ώρα επιστροφής." },
      adults: { label: "Ενήλικες" },
      children: { label: "Παιδιά" },
      infants: { label: "Βρέφη" },
      luggage: { label: "Αποσκευές" },
      flightNumber: {
        label: "Αριθμός Πτήσης",
        placeholder: "π.χ. BA123",
        helper: "Αν φτάνετε αεροπορικώς, ο αριθμός πτήσης μάς βοηθά να κατανοήσουμε τα στοιχεία του ταξιδιού σας.",
      },
      ferryInfo: { label: "Στοιχεία Ferry / Κρουαζιέρας", placeholder: "Εταιρεία ferry, ναυτιλιακή γραμμή ή στοιχεία απόπλου" },
      hotelName: { label: "Όνομα Ξενοδοχείου / Καταλύματος", placeholder: "Το όνομα του ξενοδοχείου ή καταλύματός σας" },
      specialRequests: {
        label: "Ειδικά Αιτήματα ή Επιπλέον Πληροφορίες",
        placeholder: "Παιδικό κάθισμα, επιπλέον αποσκευές, ανάγκες προσβασιμότητας, πολλαπλές στάσεις, οδηγίες συνάντησης…",
        helper: "Θα κάνουμε ό,τι είναι δυνατόν για συγκεκριμένα αιτήματα, αν και δεν μπορούμε να τα εγγυηθούμε εκ των προτέρων.",
      },
      consentLabel: "Έχω διαβάσει και αποδέχομαι την",
      consentLinkText: "Πολιτική Απορρήτου",
      consentRequired: "Παρακαλώ επιβεβαιώστε ότι αποδέχεστε την Πολιτική Απορρήτου.",
      submit: "Ζητήστε Προσφορά",
      submitting: "Αποστολή αιτήματος…",
    },
    success: {
      title: "Ευχαριστούμε — Το Αίτημά σας για Προσφορά Ελήφθη",
      description:
        "Λάβαμε τα στοιχεία της μεταφοράς σας. Θα εξετάσουμε το αίτημά σας και θα επικοινωνήσουμε μαζί σας με τις διαθέσιμες επιλογές και την προσφορά.",
      backHome: "Επιστροφή στην Αρχική",
      newRequest: "Νέο Αίτημα",
    },
    error: {
      title: "Δεν ήταν δυνατή η αποστολή του αιτήματός σας",
      description: "Παρακαλώ ελέγξτε τα στοιχεία σας και δοκιμάστε ξανά.",
    },
    howItWorks: {
      eyebrow: "Πώς Λειτουργεί",
      title: "Πώς Λειτουργεί",
      steps: [
        { title: "Στείλτε τα Στοιχεία σας", description: "Συμπληρώστε τη φόρμα με τη διαδρομή, την ημερομηνία ταξιδιού και τα στοιχεία επιβατών σας." },
        { title: "Εξετάζουμε το Ταξίδι σας", description: "Ελέγχουμε τη διαδρομή, το ωράριο και τυχόν ειδικές απαιτήσεις που έχετε αναφέρει." },
        { title: "Λαμβάνετε την Προσφορά σας", description: "Επικοινωνούμε μαζί σας με τις διαθέσιμες επιλογές και την τιμή για το ταξίδι σας." },
        { title: "Επιβεβαιώνετε τη Μεταφορά", description: "Μόλις είστε ικανοποιημένοι με την προσφορά, επιβεβαιώνετε την κράτησή σας και όλα είναι έτοιμα." },
      ],
    },
    whyQuote: {
      eyebrow: "Γιατί να Ζητήσετε Προσφορά",
      title: "Σχεδιάστε το Ταξίδι σας με τη Σωστή Μεταφορά",
      items: [
        { title: "Τιμολόγηση Ανάλογα με τη Διαδρομή", description: "Η τιμή εξαρτάται από την ακριβή διαδρομή, την απόσταση και τις ανάγκες οχήματος, και επιβεβαιώνεται ειδικά για το ταξίδι σας." },
        { title: "Προσαρμοσμένη στην Ομάδα σας", description: "Η επιλογή οχήματος λαμβάνει υπόψη τον αριθμό επιβατών και τις αποσκευές σας." },
        { title: "Ο Σωστός Τύπος Μεταφοράς", description: "Αεροδρόμιο, ιδιωτική, μεταξύ πόλεων, λιμάνι, εταιρική, ομαδική ή ενοικίαση με ώρα — επιβεβαιώνουμε τι ταιριάζει στα σχέδιά σας." },
        { title: "Συνδέσεις Αεροδρομίου, Πόλης και Λιμανιού", description: "Είτε προσγειώνεστε, αποπλέετε ή ταξιδεύετε μεταξύ προορισμών, το ταξίδι σας μπορεί να σχεδιαστεί από την αρχή έως το τέλος." },
        { title: "Χώρος για Ειδικές Ανάγκες", description: "Αναφέρετε τυχόν συγκεκριμένες ανάγκες και θα σας επιβεβαιώσουμε τι μπορεί να οργανωθεί." },
      ],
    },
    helpfulInfo: {
      eyebrow: "Οδηγός Κράτησης",
      title: "Ποιες Πληροφορίες Πρέπει να Συμπεριλάβω;",
      description:
        "Όσο πιο πλήρες είναι το αίτημά σας, τόσο πιο εύκολο είναι να ετοιμάσουμε μια ακριβή προσφορά. Όπου ισχύει, προσπαθήστε να συμπεριλάβετε:",
      items: [
        "Το σημείο παραλαβής σας",
        "Τον προορισμό σας",
        "Την ημερομηνία ταξιδιού σας",
        "Την ώρα παραλαβής σας",
        "Τον αριθμό επιβατών",
        "Τον αριθμό αποσκευών",
        "Στοιχεία πτήσης ή ferry, όπου ισχύει",
        "Τυχόν ειδικά αιτήματα",
      ],
    },
    related: {
      eyebrow: "Χρειάζεστε Διαφορετικό Τύπο Μεταφοράς;",
      title: "Δείτε τις Υπηρεσίες Μεταφοράς μας",
      items: [
        { pageKey: "airportTransfers", blurb: "Ιδιωτική παραλαβή και μεταφορά από τα κύρια αεροδρόμια της Ελλάδας." },
        { pageKey: "privateTransfers", blurb: "Ένα ιδιωτικό όχημα από πόρτα σε πόρτα για οποιαδήποτε διαδρομή στην Ελλάδα." },
        { pageKey: "cityToCityTransfers", blurb: "Απευθείας ιδιωτικές μεταφορές μεταξύ ελληνικών πόλεων και προορισμών." },
        { pageKey: "cruisePortTransfers", blurb: "Μεταφορές προσαρμοσμένες στο ωράριο της κρουαζιέρας ή του ferry σας στα κύρια λιμάνια της Ελλάδας." },
        { pageKey: "corporateTransfers", blurb: "Επαγγελματική μεταφορά για επαγγελματικά ταξίδια και συναντήσεις." },
        { pageKey: "groupTransfers", blurb: "Ιδιωτική μεταφορά για οικογένειες, ομάδες και εκδηλώσεις." },
        { pageKey: "hourlyHire", blurb: "Ιδιωτικός οδηγός και όχημα με προκράτηση ανά ώρα για ευέλικτα σχέδια." },
      ],
    },
    faq: {
      eyebrow: "Ερωτήσεις & Απαντήσεις",
      title: "Συχνές Ερωτήσεις",
      items: [
        { question: "Πώς μπορώ να ζητήσω προσφορά για ιδιωτική μεταφορά στην Ελλάδα;", answer: "Συμπληρώστε την παραπάνω φόρμα με τη διαδρομή, την ημερομηνία ταξιδιού, τα στοιχεία επιβατών και τυχόν ειδικά αιτήματα, και υποβάλετέ την. Θα εξετάσουμε το ταξίδι σας και θα επικοινωνήσουμε μαζί σας." },
        { question: "Ποιες πληροφορίες χρειάζεται να δώσω;", answer: "Τουλάχιστον το σημείο παραλαβής, τον προορισμό, την ημερομηνία ταξιδιού, την ώρα παραλαβής και τα στοιχεία επικοινωνίας σας. Στοιχεία πτήσης ή ferry, καθώς και ο αριθμός επιβατών και αποσκευών, μας βοηθούν να ετοιμάσουμε μια πιο ακριβή προσφορά." },
        { question: "Μπορώ να ζητήσω μεταφορά αεροδρομίου;", answer: "Ναι, επιλέξτε «Μεταφορά από/προς Αεροδρόμιο» ως τύπο μεταφοράς και ενημερώστε μας για τα στοιχεία της πτήσης σας όπου ισχύει." },
        { question: "Μπορώ να ζητήσω μεταφορά μεταξύ δύο ελληνικών πόλεων;", answer: "Ναι, επιλέξτε «Μεταφορά μεταξύ Πόλεων» και πείτε μας το σημείο εκκίνησης και τον προορισμό σας." },
        { question: "Μπορώ να ζητήσω μεταφορά προς λιμάνι ή κρουαζιέρα;", answer: "Ναι, επιλέξτε «Μεταφορά από/προς Λιμάνι ή Κρουαζιέρα» και μοιραστείτε τα στοιχεία του πλου σας, ώστε η παραλαβή σας να προγραμματιστεί σύμφωνα με το επιβίβαση ή την αποβίβασή σας." },
        { question: "Μπορώ να κλείσω μεταφορά για ομάδα;", answer: "Ναι, επιλέξτε «Μεταφορά για Ομάδες» και ενημερώστε μας για τον συνολικό αριθμό επιβατών και αποσκευών, ώστε να οργανωθεί κατάλληλο όχημα." },
        { question: "Μπορώ να συμπεριλάβω ειδικά αιτήματα;", answer: "Ναι, χρησιμοποιήστε το πεδίο «Ειδικά Αιτήματα» για να αναφέρετε οτιδήποτε σχετικό, όπως παιδικό κάθισμα, επιπλέον αποσκευές ή ανάγκες προσβασιμότητας. Θα σας επιβεβαιώσουμε τι μπορεί να εξυπηρετηθεί." },
        { question: "Πώς θα λάβω την προσφορά μου;", answer: "Θα επικοινωνήσουμε μαζί σας στο email ή το τηλέφωνο που θα μας δώσετε, με τις διαθέσιμες επιλογές και την τιμή." },
      ],
    },
    cta: {
      heading: "Έτοιμοι να Σχεδιάσετε τη Μεταφορά σας;",
      description: "Συμπληρώστε την παραπάνω φόρμα και θα επικοινωνήσουμε μαζί σας με την προσφορά της ιδιωτικής σας μεταφοράς.",
      primaryLabel: "Μετάβαση στη Φόρμα",
      secondaryLabel: "Δείτε τις Υπηρεσίες μας",
    },
  },
}
