import type { Metadata } from "next";

import { LegalPageLayout, LegalNote } from "@/components/legal/legal-page-layout";
import { localizedAlternates } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";

const title = `Terms and Conditions | ${siteConfig.name} Greece Private Transfers`;
const description = `Read the Terms and Conditions governing use of this website and the booking of private taxi and transfer services with ${siteConfig.name} in Greece.`;
const lastUpdated = "[Effective Date]";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: localizedAlternates("terms", "en"),
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/terms-and-conditions/`,
  },
  twitter: {
    title,
    description,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Terms and Conditions"
      lastUpdated={lastUpdated}
      sections={[
        {
          id: "introduction",
          title: "1. Introduction",
          body: (
            <p>
              These Terms and Conditions (&quot;Terms&quot;) govern your use
              of this website and the booking of private transfer, taxi and
              related transportation services offered by {siteConfig.name}
              (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;) across
              Greece. By using this website or requesting a service, you
              agree to be bound by these Terms. If you do not agree with
              these Terms, please do not use this website or our services.
            </p>
          ),
        },
        {
          id: "our-services",
          title: "2. Our Services",
          body: (
            <>
              <p>
                Depending on location and availability, our services may
                include:
              </p>
              <ul>
                <li>Private car transfers</li>
                <li>Airport transfers</li>
                <li>Private taxi services</li>
                <li>Chauffeur services</li>
                <li>Hotel transfers</li>
                <li>Port and cruise transfers</li>
                <li>City-to-city (intercity) transfers</li>
                <li>Private tours and day trips, where available</li>
              </ul>
              <p>
                Availability of specific services may vary depending on
                location, vehicle availability and other factors.
              </p>
            </>
          ),
        },
        {
          id: "booking-requests-and-confirmations",
          title: "3. Booking Requests and Confirmations",
          body: (
            <>
              <p>
                Submitting a request through this website, by phone, or by
                email is a request for service and does not guarantee
                availability. A quote provided in response to your request
                reflects estimated pricing based on the details you have
                provided and does not, by itself, constitute a confirmed
                booking.
              </p>
              <p>
                A booking is only confirmed once you have received explicit
                confirmation from us. We reserve the right to decline, or to
                be unable to accommodate, a request due to availability or
                other reasonable factors.
              </p>
            </>
          ),
        },
        {
          id: "customer-responsibilities",
          title: "4. Customer Responsibilities",
          body: (
            <>
              <p>When requesting or booking a service, you agree to:</p>
              <ul>
                <li>
                  Provide accurate and complete booking details, including
                  contact information
                </li>
                <li>Provide correct pickup and drop-off information</li>
                <li>Be ready at the agreed pickup time and location</li>
                <li>
                  Provide accurate passenger numbers and luggage information
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "pricing-and-payments",
          title: "5. Pricing and Payments",
          body: (
            <>
              <p>
                Prices for our services depend on factors such as route,
                distance, vehicle type, timing and other journey details,
                and will be communicated to you during the quote or booking
                process. Please review the pricing and payment details
                provided to you before confirming a booking.
              </p>
              <LegalNote>
                This section should be completed with the business&apos;s
                actual accepted payment methods, any deposit requirements,
                and applicable VAT treatment before publishing.
              </LegalNote>
            </>
          ),
        },
        {
          id: "changes-to-bookings",
          title: "6. Changes to Bookings",
          body: (
            <p>
              If you need to change any details of a confirmed booking, such
              as pickup time, location or passenger numbers, please contact
              us as soon as possible. Changes are subject to availability
              and applicable terms, and may not always be possible,
              particularly for requests made with limited notice.
            </p>
          ),
        },
        {
          id: "cancellations-and-refunds",
          title: "7. Cancellations and Refunds",
          body: (
            <>
              <p>
                We understand that travel plans can change. If you need to
                cancel a booking, please contact us as soon as possible.
              </p>
              <p>
                [Cancellation and refund terms will depend on the confirmed
                booking and applicable booking policy.]
              </p>
              <LegalNote>
                This section should be completed with the business&apos;s
                specific cancellation deadlines and refund terms before
                publishing.
              </LegalNote>
            </>
          ),
        },
        {
          id: "delays-and-unforeseen-circumstances",
          title: "8. Delays and Unforeseen Circumstances",
          body: (
            <p>
              Transfer times are estimates and may be affected by
              circumstances beyond our reasonable control, including but not
              limited to severe weather, road closures, traffic conditions,
              strikes, or other unforeseen events. While we and our drivers
              take reasonable steps to minimize delays and keep you
              informed, we cannot guarantee exact arrival or departure times
              in all circumstances.
            </p>
          ),
        },
        {
          id: "passenger-conduct",
          title: "9. Passenger Conduct",
          body: (
            <p>
              Passengers are expected to behave in a safe and respectful
              manner towards drivers and other passengers, and to follow
              reasonable safety instructions given by the driver. We reserve
              the right to refuse or discontinue a service if passenger
              conduct poses a safety risk or is abusive towards the driver.
            </p>
          ),
        },
        {
          id: "luggage",
          title: "10. Luggage",
          body: (
            <p>
              Please provide accurate information about the number of
              passengers and items of luggage when requesting a quote or
              booking. Luggage capacity depends on the vehicle confirmed for
              your journey, and we cannot guarantee that additional or
              oversized luggage not declared at the time of booking can be
              accommodated.
            </p>
          ),
        },
        {
          id: "third-party-service-providers",
          title: "11. Third-Party Service Providers",
          body: (
            <p>
              Transportation services may be provided directly by us or
              coordinated through independent drivers or transportation
              partners. Where a service is fulfilled by an independent
              driver or partner, that provider is responsible for the safe
              and professional delivery of the transportation service in
              accordance with applicable law. Nothing in these Terms should
              be interpreted as creating an employment relationship between
              {" "}{siteConfig.name} and any independent driver or transportation
              partner, except where expressly stated.
            </p>
          ),
        },
        {
          id: "website-use",
          title: "12. Website Use",
          body: (
            <p>
              You agree to use this website only for lawful purposes and in
              a manner that does not infringe the rights of, or restrict or
              inhibit the use of the website by, any third party. All
              content on this website, including text, graphics, logos and
              images, is the property of {siteConfig.name} or its licensors and
              is protected by applicable intellectual property law, unless
              otherwise stated. You agree not to misuse this website,
              including by attempting to gain unauthorized access to it,
              interfering with its normal operation, or submitting false or
              misleading information through any form on this website.
            </p>
          ),
        },
        {
          id: "limitation-of-liability",
          title: "13. Limitation of Liability",
          body: (
            <>
              <p>
                To the extent permitted by applicable law, {siteConfig.name}
                {" "}shall not be liable for indirect, incidental or consequential
                losses arising from your use of this website or our
                services. Nothing in these Terms is intended to exclude or
                limit liability for death or personal injury caused by
                negligence, fraud, or any other liability that cannot be
                excluded or limited under applicable law.
              </p>
              <LegalNote>
                This section outlines general limitation of liability
                language and should be reviewed by a qualified legal
                professional to ensure it accurately reflects the
                business&apos;s operations and complies with applicable
                Greek and EU consumer protection law before publishing.
              </LegalNote>
            </>
          ),
        },
        {
          id: "changes-to-terms",
          title: "14. Changes to Terms",
          body: (
            <p>
              We may update these Terms and Conditions from time to time.
              The updated version will be published on this page, and the
              &quot;Last Updated&quot; date at the top of this page will
              reflect the most recent revision. Continued use of this
              website or our services after changes are published
              constitutes acceptance of the updated Terms.
            </p>
          ),
        },
        {
          id: "contact-information",
          title: "15. Contact Information",
          body: (
            <>
              <p>
                If you have any questions about these Terms and Conditions,
                please contact us:
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
