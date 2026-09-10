// Seeds a handful of realistic bilingual blog posts. Run with:
//   node --env-file=.env scripts/seed-blog.mjs
//
// Requires SUPABASE_SERVICE_ROLE_KEY (bypasses RLS for the write — the
// public site never writes to these tables) and BLOG_AUTHOR_ID, a real
// Supabase Auth user UUID created via Authentication > Users > Add user
// (see supabase/migrations/README.md). Safe to re-run: posts upsert on
// `slug`, the author upserts on `id`.

import { createClient } from "@supabase/supabase-js";
import { cta, related } from "./lib/blog-html.mjs";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const AUTHOR_ID = process.env.BLOG_AUTHOR_ID;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.\n" +
      "Run with: node --env-file=.env scripts/seed-blog.mjs"
  );
  process.exit(1);
}

if (!AUTHOR_ID) {
  console.error(
    "Missing BLOG_AUTHOR_ID.\n\n" +
      "public.bloggers.id references a real auth.users(id) — create one first:\n" +
      "  Supabase Dashboard > Authentication > Users > Add user\n" +
      "then copy its UUID into BLOG_AUTHOR_ID in .env and re-run this script.\n" +
      "(This is the same one-time step already used for the admin login —\n" +
      "see supabase/migrations/README.md.)"
  );
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const author = {
  id: AUTHOR_ID,
  full_name: "Private Transfer Greece Team",
  email: "privatetransfergreece@gmail.com",
  bio:
    "The team behind Private Transfer Greece, writing from day-to-day experience arranging private airport, port and intercity transfers across Greece.",
  is_active: true,
};

const now = new Date().toISOString();

const posts = [
  {
    title: "Athens Airport Transfer Guide: What Travelers Need to Know",
    slug: "athens-airport-transfer-guide",
    language: "en",
    translation_of: null,
    category: "Airport Transfers",
    tags: ["Athens", "Athens Airport"],
    read_time: "6 min read",
    seo_title: "Athens Airport Transfer Guide: What Travelers Need to Know",
    seo_description:
      "How private transfers from Athens International Airport work: meeting your driver, flight tracking, luggage space and journey times into the city.",
    focus_keyword: "athens airport transfer",
    featured_image_url: "/airports/athens.webp",
    excerpt:
      "Everything you need to know about arranging a private transfer from Athens International Airport, from meeting your driver to planning around traffic and luggage.",
    content: `
<p>Athens International Airport "Eleftherios Venizelos" (ATH) sits well outside the city centre, in Spata to the east of Athens. That distance is the first thing worth planning around: unlike some European capitals where the airport sits at the edge of downtown, getting from ATH into central Athens is a real drive, and how you handle that first leg shapes the rest of your trip.</p>

<h2 id="how-a-private-airport-transfer-works">How a Private Airport Transfer Works</h2>
<p>A private transfer is booked in advance for your specific flight, rather than found on arrival. You share your flight number, arrival time, and destination when you request a quote, and a driver is arranged to meet you after you clear passport control and collect your luggage — no queuing for a taxi rank or working out a bus timetable with jet lag.</p>
<p>The vehicle is yours alone for the journey. It isn't shared with other passengers making different stops, which matters if you're travelling with young children, a lot of luggage, or simply want a predictable, direct route to your hotel.</p>

<h2 id="meeting-your-driver-and-flight-tracking">Meeting Your Driver and Flight Tracking</h2>
<p>Because pickups are timed around your actual flight rather than a fixed schedule, it's worth sharing your flight number when you book. That way, if your flight is delayed, your pickup can be adjusted rather than leaving you stranded or paying for a missed transfer.</p>
<p>Meeting point details — arrivals hall, a specific exit, or a designated pickup area — are confirmed as part of your booking rather than published generally, since terminal layouts and pickup zones can change.</p>

${cta({
  heading: "Book Your Athens Airport Transfer",
  description: "Share your flight details and destination, and we'll arrange a private vehicle to meet you.",
  label: "Get a Free Quote",
  href: "/get-quote/",
})}

<h2 id="luggage-and-vehicle-size">Luggage and Vehicle Size</h2>
<p>If you're travelling with more than a couple of suitcases, or with golf clubs, car seats, or other bulky items, it's worth mentioning this when you request your quote. Vehicles are matched to your group size and luggage rather than assuming a standard sedan will fit everything — this is far easier to sort out in advance than at the curb.</p>

<h3 id="faq-1">How early should I book an Athens Airport transfer?</h3>
<p>As soon as your flight details are confirmed. Booking ahead means your pickup can be planned around your actual arrival time rather than arranged last minute.</p>

<h3 id="faq-2">What happens if my flight is delayed?</h3>
<p>Since your flight number is shared at booking, delays can typically be accommodated — mention any known delay as early as possible so your pickup time can be adjusted.</p>

<h3 id="faq-3">Can I book a return transfer to the airport at the same time?</h3>
<p>Yes, many travelers arrange both the arrival and departure transfer together when requesting their quote.</p>

<h2 id="traffic-and-journey-time-into-athens">Traffic and Journey Time into Athens</h2>
<p>The drive from the airport into central Athens generally runs via the Attiki Odos motorway, and journey times vary with time of day and traffic. Leaving some buffer on either side of your flight — especially for an early departure — is sensible in a city where traffic patterns can shift quickly.</p>
<p>If your trip continues beyond central Athens, a direct transfer can also save you a stop in the city. See our <a href="/airport/athens-airport/">Athens Airport transfer page</a> for onward routes to the port of Piraeus, the Athens Riviera, and destinations further afield.</p>

${related({
  title: "Related Pages",
  links: [
    { href: "/airport/athens-airport/", label: "Athens Airport Transfers", description: "Full airport transfer details and onward routes." },
    { href: "/route/athens-airport-to-piraeus-port/", label: "Athens Airport to Piraeus Port", description: "For travelers connecting to a cruise or ferry." },
    { href: "/athens/", label: "Private Transfers in Athens", description: "City-wide transfer coverage across Athens." },
  ],
})}
`,
  },
  {
    title: "Οδηγός Μεταφοράς από το Αεροδρόμιο Αθηνών: Τι Πρέπει να Γνωρίζουν οι Ταξιδιώτες",
    slug: "odigos-metaforas-aerodromio-athinas",
    language: "el",
    translation_of: "athens-airport-transfer-guide",
    category: "Airport Transfers",
    tags: ["Αθήνα", "Αεροδρόμιο Αθηνών"],
    read_time: "6 λεπτά ανάγνωσης",
    seo_title: "Οδηγός Μεταφοράς από το Αεροδρόμιο Αθηνών",
    seo_description:
      "Πώς λειτουργούν οι ιδιωτικές μεταφορές από το Διεθνές Αεροδρόμιο Αθηνών: παραλαβή, παρακολούθηση πτήσης, χώρος αποσκευών και χρόνοι διαδρομής προς την πόλη.",
    focus_keyword: "μεταφορα αεροδρομιο αθηνας",
    featured_image_url: "/airports/athens.webp",
    excerpt:
      "Όσα πρέπει να γνωρίζετε για την οργάνωση ιδιωτικής μεταφοράς από το Διεθνές Αεροδρόμιο Αθηνών, από την παραλαβή έως τον σχεδιασμό γύρω από κίνηση και αποσκευές.",
    content: `
<p>Το Διεθνές Αεροδρόμιο Αθηνών «Ελευθέριος Βενιζέλος» (ATH) βρίσκεται αρκετά έξω από το κέντρο της πόλης, στα Σπάτα, ανατολικά της Αθήνας. Αυτή η απόσταση είναι το πρώτο πράγμα που αξίζει να σχεδιάσετε από πριν: η μετάβαση από το ATH στο κέντρο της Αθήνας είναι μια πραγματική διαδρομή, και ο τρόπος που θα την οργανώσετε καθορίζει το υπόλοιπο του ταξιδιού σας.</p>

<h2 id="pos-leitourgei-idiotiki-metafora-aerodromiou">Πώς Λειτουργεί μια Ιδιωτική Μεταφορά Αεροδρομίου</h2>
<p>Μια ιδιωτική μεταφορά κλείνεται εκ των προτέρων για τη συγκεκριμένη πτήση σας, αντί να αναζητηθεί κατά την άφιξη. Μοιράζεστε τον αριθμό πτήσης, την ώρα άφιξης και τον προορισμό σας κατά την αίτηση προσφοράς, και ένας οδηγός οργανώνεται να σας παραλάβει μετά τον έλεγχο διαβατηρίων και την παραλαβή αποσκευών — χωρίς ουρά σε πιάτσα ταξί ή προσπάθεια κατανόησης δρομολογίων λεωφορείου με το jet lag.</p>
<p>Το όχημα είναι αποκλειστικά δικό σας για τη διαδρομή. Δεν είναι κοινό με άλλους επιβάτες που κάνουν διαφορετικές στάσεις, κάτι που έχει σημασία αν ταξιδεύετε με μικρά παιδιά, πολλές αποσκευές, ή απλά θέλετε μια προβλέψιμη, απευθείας διαδρομή προς το ξενοδοχείο σας.</p>

<h2 id="paralabi-kai-parakolouthisi-ptisis">Παραλαβή και Παρακολούθηση Πτήσης</h2>
<p>Επειδή οι παραλαβές προγραμματίζονται σύμφωνα με την πραγματική πτήση σας και όχι με σταθερό ωράριο, αξίζει να αναφέρετε τον αριθμό πτήσης σας κατά την κράτηση. Έτσι, αν η πτήση σας έχει καθυστέρηση, η παραλαβή σας μπορεί να προσαρμοστεί αντί να μείνετε χωρίς μεταφορά ή να πληρώσετε για χαμένη μεταφορά.</p>
<p>Οι λεπτομέρειες του σημείου συνάντησης — αίθουσα αφίξεων, συγκεκριμένη έξοδος, ή καθορισμένη ζώνη παραλαβής — επιβεβαιώνονται ως μέρος της κράτησής σας, καθώς η διαρρύθμιση του τερματικού και οι ζώνες παραλαβής μπορούν να αλλάξουν.</p>

${cta({
  heading: "Κλείστε τη Μεταφορά σας από το Αεροδρόμιο Αθηνών",
  description: "Μοιραστείτε τα στοιχεία της πτήσης και τον προορισμό σας, και θα οργανώσουμε ιδιωτικό όχημα να σας παραλάβει.",
  label: "Ζητήστε Δωρεάν Προσφορά",
  href: "/el/zitisi-prosforas/",
})}

<h2 id="aposkeues-kai-megethos-ochimatos">Αποσκευές και Μέγεθος Οχήματος</h2>
<p>Αν ταξιδεύετε με περισσότερες από δύο βαλίτσες, ή με μπαστούνια γκολφ, καθίσματα αυτοκινήτου για παιδιά, ή άλλα ασυνήθιστα αντικείμενα, αξίζει να το αναφέρετε κατά την αίτηση προσφοράς. Τα οχήματα προσαρμόζονται στο μέγεθος της ομάδας και τις αποσκευές σας, αντί να θεωρείται δεδομένο ότι ένα κανονικό sedan θα χωρέσει τα πάντα.</p>

<h3 id="faq-1">Πόσο νωρίς πρέπει να κλείσω μεταφορά από το Αεροδρόμιο Αθηνών;</h3>
<p>Μόλις επιβεβαιωθούν τα στοιχεία της πτήσης σας. Η έγκαιρη κράτηση σημαίνει ότι η παραλαβή σας μπορεί να σχεδιαστεί σύμφωνα με την πραγματική ώρα άφιξής σας.</p>

<h3 id="faq-2">Τι γίνεται αν η πτήση μου έχει καθυστέρηση;</h3>
<p>Καθώς ο αριθμός πτήσης σας μοιράζεται κατά την κράτηση, οι καθυστερήσεις συνήθως μπορούν να αντιμετωπιστούν — αναφέρετε οποιαδήποτε γνωστή καθυστέρηση όσο το δυνατόν πιο σύντομα.</p>

<h3 id="faq-3">Μπορώ να κλείσω και τη μεταφορά επιστροφής προς το αεροδρόμιο ταυτόχρονα;</h3>
<p>Ναι, πολλοί ταξιδιώτες οργανώνουν τόσο τη μεταφορά άφιξης όσο και αναχώρησης μαζί κατά την αίτηση προσφοράς.</p>

<h2 id="kinisi-kai-diarkeia-diadromis-pros-athina">Κίνηση και Διάρκεια Διαδρομής προς την Αθήνα</h2>
<p>Η διαδρομή από το αεροδρόμιο προς το κέντρο της Αθήνας γίνεται συνήθως μέσω της Αττικής Οδού, και οι χρόνοι διαδρομής ποικίλλουν ανάλογα με την ώρα και την κίνηση. Είναι λογικό να αφήνετε κάποιο περιθώριο πριν από μια πτήση αναχώρησης, ειδικά πρωινή, σε μια πόλη όπου η κίνηση μπορεί να αλλάξει γρήγορα.</p>
<p>Αν το ταξίδι σας συνεχίζει πέρα από το κέντρο της Αθήνας, μια απευθείας μεταφορά μπορεί επίσης να σας γλιτώσει μια στάση στην πόλη. Δείτε τη <a href="/el/aerodromio/athina/">σελίδα μεταφοράς του Αεροδρομίου Αθηνών</a> για διαδρομές προς το λιμάνι του Πειραιά, την Παραλιακή Αθήνας, και προορισμούς πιο μακριά.</p>

${related({
  title: "Σχετικές Σελίδες",
  links: [
    { href: "/el/aerodromio/athina/", label: "Μεταφορές Αεροδρομίου Αθηνών", description: "Πλήρεις λεπτομέρειες μεταφοράς και διαδρομές." },
    { href: "/el/diadromi/aerodromio-athinas-peiraias/", label: "Αεροδρόμιο Αθηνών προς Πειραιά", description: "Για επιβάτες κρουαζιέρας ή ferry." },
    { href: "/el/athina/", label: "Ιδιωτικές Μεταφορές στην Αθήνα", description: "Κάλυψη μεταφορών σε όλη την Αθήνα." },
  ],
})}
`,
  },
  {
    title: "How to Get from Athens Airport to Piraeus Cruise Port",
    slug: "athens-airport-to-piraeus-port-guide",
    language: "en",
    translation_of: null,
    category: "Port Transfers",
    tags: ["Athens", "Piraeus", "Cruise"],
    read_time: "5 min read",
    seo_title: null,
    seo_description: null,
    focus_keyword: "athens airport to piraeus port",
    featured_image_url: "/ports/piraeus.webp",
    excerpt:
      "Landing at Athens Airport before a cruise from Piraeus? Here's how the connection works, what to plan for, and when it's worth going straight to the port.",
    content: `
<p>Piraeus is Greece's largest passenger port and one of the busiest in the Mediterranean, and for many travelers it's the start of a cruise rather than a stop on a city visit. If you're landing at Athens Airport with a ship to catch, the connection between the two is worth planning properly rather than figuring out on the day.</p>

<h2 id="why-go-straight-to-piraeus">Why Go Straight to Piraeus</h2>
<p>Athens Airport and Piraeus sit on opposite sides of the city, so routing through central Athens first — even just to change transport — adds time you may not want to spend with a ship to catch. A direct transfer from the terminal to the port skips that detour entirely.</p>
<p>This matters most on embarkation day, when cruise lines have a boarding cutoff and you don't want traffic or a missed connection to put that at risk.</p>

<h2 id="what-to-share-when-booking">What to Share When Booking</h2>
<p>Beyond your flight number and arrival time, it helps to mention your cruise line and boarding time when requesting a quote. Piraeus is a large port with multiple gates and terminals serving different cruise lines, and knowing which one you need helps your pickup be planned accordingly.</p>

${cta({
  heading: "Book Your Airport-to-Port Transfer",
  description: "Share your flight and cruise details, and we'll arrange a direct transfer from the airport to your gate at Piraeus.",
  label: "Get a Free Quote",
  href: "/get-quote/",
})}

<h2 id="luggage-for-a-cruise-departure">Luggage for a Cruise Departure</h2>
<p>Cruise passengers often travel with more luggage than a typical city visit — mention this when booking so a suitably sized vehicle is arranged. It's a small detail, but one that's much easier to sort out in advance than at the curb with a ship waiting.</p>

<h3 id="faq-1">How long does the transfer from Athens Airport to Piraeus take?</h3>
<p>It depends on traffic and the specific route, but a direct transfer avoids the extra time of routing through central Athens first.</p>

<h3 id="faq-2">Can I be dropped at a specific cruise terminal or gate?</h3>
<p>Yes — share your cruise line and boarding details when requesting your quote so the drop-off can be planned for the right terminal.</p>

<h3 id="faq-3">What if I want to spend a day in Athens before my cruise?</h3>
<p>That's a common plan too — mention it when booking and a transfer can be arranged from the airport to central Athens instead, with a separate transfer to Piraeus later.</p>

<p>For the full route breakdown, see our dedicated <a href="/route/athens-airport-to-piraeus-port/">Athens Airport to Piraeus Port</a> page, or our <a href="/port/piraeus/">Piraeus Port transfer overview</a> for information on arriving by ferry or disembarking from a cruise.</p>

${related({
  title: "Related Pages",
  links: [
    { href: "/route/athens-airport-to-piraeus-port/", label: "Athens Airport to Piraeus Port", description: "The dedicated route page for this transfer." },
    { href: "/port/piraeus/", label: "Piraeus Port Transfers", description: "Full port transfer coverage, including ferry connections." },
    { href: "/airport/athens-airport/", label: "Athens Airport Transfers", description: "General airport transfer information." },
  ],
})}
`,
  },
];

async function seed() {
  console.log(`Upserting author ${author.full_name} (${author.id})...`);
  const { error: authorError } = await supabase.from("bloggers").upsert(author, { onConflict: "id" });

  if (authorError) {
    console.error("Failed to upsert author:", authorError.message);
    console.error(
      "If this is a foreign key violation, BLOG_AUTHOR_ID does not match a real auth.users row — " +
        "create one via Authentication > Users > Add user first."
    );
    process.exit(1);
  }

  for (const post of posts) {
    const row = {
      ...post,
      author_id: author.id,
      status: "published",
      published_at: now,
    };

    const { error } = await supabase.from("blogs").upsert(row, { onConflict: "slug" });

    if (error) {
      console.error(`Failed to upsert "${post.slug}":`, error.message);
      process.exit(1);
    }

    console.log(`  ✓ ${post.language}/${post.slug}`);
  }

  console.log(`\nSeeded ${posts.length} posts.`);
}

seed();
