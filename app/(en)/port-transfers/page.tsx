import type { Metadata } from "next";
import {
  Anchor,
  Building2,
  ClipboardCheck,
  Clock,
  Hotel,
  Luggage,
  PlaneLanding,
  PlaneTakeoff,
  Ship,
  Users,
} from "lucide-react";

import { ServiceHubPage } from "@/components/service-hub/service-hub-page";
import { ServiceOverview } from "@/components/service-hub/overview";
import { ServiceFeatures } from "@/components/service-hub/features";
import { ServiceHowItWorks } from "@/components/service-hub/how-it-works";
import { ServiceEntityBadges } from "@/components/service-hub/entity-badges";
import { RelatedServices } from "@/components/service-hub/related-services";
import { ServiceFaq } from "@/components/service-hub/faq";
import { serviceHubs } from "@/content/service-hubs";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";

const content = serviceHubs.cruisePortTransfers.en;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("cruisePortTransfers", "en"),
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: absoluteUrl(pathFor("cruisePortTransfers", "en")),
  },
  twitter: { title: meta.title, description: meta.description },
};

export default function PortTransfersPage() {
  return (
    <ServiceHubPage slug="cruisePortTransfers" locale="en">
      <ServiceOverview content={content.overview} />
      <ServiceFeatures content={content.features} icons={[Ship, PlaneTakeoff, Building2, Anchor]} />
      <ServiceFeatures
        content={content.audience}
        icons={[PlaneLanding, PlaneTakeoff, Hotel, Building2, Building2]}
      />
      <ServiceHowItWorks content={content.howItWorks} />
      {content.entities ? <ServiceEntityBadges content={content.entities} /> : null}
      <ServiceFeatures content={content.practicalInfo} icons={[Ship, Luggage, Clock, PlaneTakeoff]} />
      <ServiceFeatures content={content.whyChoose} icons={[Clock, Anchor, ClipboardCheck, Users]} />
      <RelatedServices locale="en" content={content.related} />
      <ServiceFaq content={content.faq} />
    </ServiceHubPage>
  );
}
