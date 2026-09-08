import type { Metadata } from "next";

import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { localizedAlternates } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";

const title = `Privacy Policy | ${siteConfig.name} Greece Private Transfers`;
const description = `Read our Privacy Policy to learn how ${siteConfig.name} collects, uses and protects your personal information when you request a quote or book a transfer.`;
const lastUpdated = "[Effective Date]";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: localizedAlternates("privacy", "en"),
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/privacy-policy/`,
  },
  twitter: {
    title,
    description,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated={lastUpdated}
      sections={[
        {
          id: "introduction",
          title: "1. Introduction",
          body: (
            <>
              <p>
                This Privacy Policy explains how {siteConfig.name}
                (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;) collects,
                uses and protects personal information when you visit this
                website, request a quote, or book a private transfer, taxi
                or related transportation service in Greece. We are
                committed to handling your personal information responsibly
                and in accordance with applicable data protection law,
                including the EU General Data Protection Regulation (GDPR)
                where it applies to our processing activities.
              </p>
              <p>
                By using this website or our services, you agree to the
                collection and use of information as described in this
                Privacy Policy.
              </p>
            </>
          ),
        },
        {
          id: "information-we-collect",
          title: "2. Information We Collect",
          body: (
            <>
              <p>
                We may collect personal information when you request a
                quote, make a booking, contact us, or otherwise browse this
                website. This may include:
              </p>
              <ul>
                <li>Your name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Pickup and drop-off locations</li>
                <li>Travel dates and times</li>
                <li>Passenger numbers and luggage details</li>
                <li>
                  Flight, ferry or other booking reference information you
                  choose to provide
                </li>
                <li>
                  Any other information you include when requesting a quote,
                  making a booking, or contacting us
                </li>
              </ul>
              <p>
                We do not collect or store payment card details through this
                website.
              </p>
              <p>
                We may also automatically collect certain technical
                information when you browse the website, such as your IP
                address, browser type, device information, and pages
                visited, including through cookies or similar technologies
                where used. See the &quot;Cookies and Similar
                Technologies&quot; section below for more information.
              </p>
            </>
          ),
        },
        {
          id: "how-we-use-your-information",
          title: "3. How We Use Your Information",
          body: (
            <>
              <p>We may use the information we collect to:</p>
              <ul>
                <li>Process and manage your transfer requests or bookings</li>
                <li>Communicate with you about your request or booking</li>
                <li>Provide quotes for the services you have requested</li>
                <li>
                  Coordinate transportation with drivers or service partners
                </li>
                <li>Improve this website and our services</li>
                <li>
                  Meet applicable legal, regulatory or security obligations
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "sharing-of-information",
          title: "4. Sharing of Information",
          body: (
            <>
              <p>
                To fulfil a requested transfer or taxi service, relevant
                booking information — such as pickup and drop-off details,
                travel dates and times, and passenger information — may need
                to be shared with the driver, transportation provider, or
                service partner assigned to carry out your journey.
              </p>
              <p>
                We do not sell your personal information to third parties.
                We may share information with third parties where required
                by law, to protect our legal rights, or with your consent.
              </p>
            </>
          ),
        },
        {
          id: "cookies-and-analytics",
          title: "5. Cookies and Similar Technologies",
          body: (
            <p>
              This website may use cookies or similar technologies to help
              it function correctly and to understand how visitors interact
              with the site. Cookies are small text files stored on your
              device by your browser. You can usually adjust your browser
              settings to refuse, block or delete cookies; please note that
              some parts of the website may not function as intended if
              cookies are disabled.
            </p>
          ),
        },
        {
          id: "data-security",
          title: "6. Data Security",
          body: (
            <p>
              We use reasonable administrative and technical measures
              intended to protect personal information from unauthorized
              access, loss, misuse or alteration. However, no method of
              transmission over the internet or method of electronic storage
              is completely secure, and we cannot guarantee the absolute
              security of your information.
            </p>
          ),
        },
        {
          id: "data-retention",
          title: "7. Data Retention",
          body: (
            <p>
              We retain personal information only for as long as reasonably
              necessary to fulfil the purposes described in this Privacy
              Policy, including for legitimate business, legal, accounting
              or operational purposes, after which it will be securely
              deleted or anonymized.
            </p>
          ),
        },
        {
          id: "your-privacy-rights",
          title: "8. Your Privacy Rights",
          body: (
            <>
              <p>
                Depending on applicable law, you may have rights in relation
                to your personal information, which may include the right
                to request access to, correction of, or deletion of your
                personal data, and other rights available to you under
                applicable data protection law.
              </p>
              <p>
                To exercise any of these rights, please contact us using the
                details in the &quot;Contact Us&quot; section below. We will
                respond to legitimate requests in accordance with applicable
                law.
              </p>
            </>
          ),
        },
        {
          id: "third-party-links",
          title: "9. Third-Party Links",
          body: (
            <p>
              This website may contain links to third-party websites. We are
              not responsible for the content or privacy practices of
              third-party websites, and their use of your information is
              governed by their own privacy policies.
            </p>
          ),
        },
        {
          id: "changes-to-this-privacy-policy",
          title: "10. Changes to This Privacy Policy",
          body: (
            <p>
              We may update this Privacy Policy from time to time. Any
              changes will be published on this page, and the &quot;Last
              Updated&quot; date at the top of this page will reflect the
              most recent revision.
            </p>
          ),
        },
        {
          id: "contact-us",
          title: "11. Contact Us",
          body: (
            <>
              <p>
                If you have any questions about this Privacy Policy or how
                your personal information is handled, please contact us:
              </p>
              <p>
                {siteConfig.name}
                <br />
                {siteConfig.contactEmail}
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
