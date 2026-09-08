import type { Metadata } from "next";
import {
  Anchor,
  Building2,
  CarFront,
  ClipboardCheck,
  Hotel,
  MessageCircle,
  PlaneLanding,
  PlaneTakeoff,
  Route,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import { ServiceHubPage } from "@/components/service-hub/service-hub-page";
import { ServiceOverview } from "@/components/service-hub/overview";
import { ServiceFeatures } from "@/components/service-hub/features";
import { ServiceHowItWorks } from "@/components/service-hub/how-it-works";
import { RelatedServices } from "@/components/service-hub/related-services";
import { ServiceFaq } from "@/components/service-hub/faq";
import { serviceHubs } from "@/content/service-hubs";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";

const content = serviceHubs.privateTransfers.en;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("privateTransfers", "en"),
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: absoluteUrl(pathFor("privateTransfers", "en")),
  },
  twitter: { title: meta.title, description: meta.description },
};

export default function PrivateTransfersPage() {
  return (
    <ServiceHubPage slug="privateTransfers" locale="en">
      <ServiceOverview content={content.overview} />
      <ServiceFeatures content={content.features} icons={[CarFront, Route, ShieldCheck, UserCheck]} />
      <ServiceFeatures
        content={content.audience}
        icons={[PlaneLanding, PlaneTakeoff, Anchor, Building2, Hotel, UserCheck]}
      />
      <ServiceHowItWorks content={content.howItWorks} />
      <ServiceFeatures content={content.practicalInfo} icons={[Route, PlaneTakeoff, UserCheck, Route]} />
      <ServiceFeatures content={content.whyChoose} icons={[ClipboardCheck, ShieldCheck, MessageCircle, UserCheck]} />
      <RelatedServices locale="en" content={content.related} />
      <ServiceFaq content={content.faq} />
    </ServiceHubPage>
  );
}
