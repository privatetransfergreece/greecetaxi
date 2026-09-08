import type { Metadata } from "next";
import {
  Briefcase,
  ClipboardCheck,
  GraduationCap,
  Luggage,
  PartyPopper,
  Ship,
  Users,
} from "lucide-react";

import { ServiceHubPage } from "@/components/service-hub/service-hub-page";
import { ServiceOverview } from "@/components/service-hub/overview";
import { ServiceFeatures } from "@/components/service-hub/features";
import { ServiceHowItWorks } from "@/components/service-hub/how-it-works";
import { RelatedServices } from "@/components/service-hub/related-services";
import { ServiceFaq } from "@/components/service-hub/faq";
import { serviceHubs } from "@/content/service-hubs";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";

const content = serviceHubs.groupTransfers.el;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("groupTransfers", "el"),
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: absoluteUrl(pathFor("groupTransfers", "el")),
  },
  twitter: { title: meta.title, description: meta.description },
};

export default function GroupTransfersPageEl() {
  return (
    <ServiceHubPage slug="groupTransfers" locale="el">
      <ServiceOverview content={content.overview} />
      <ServiceFeatures content={content.features} icons={[Users, Users, PartyPopper, ClipboardCheck]} />
      <ServiceFeatures
        content={content.audience}
        icons={[Users, PartyPopper, Users, Briefcase, Ship, GraduationCap]}
      />
      <ServiceHowItWorks content={content.howItWorks} />
      <ServiceFeatures content={content.practicalInfo} icons={[Users, Luggage, Users, Users]} />
      <ServiceFeatures content={content.whyChoose} icons={[ClipboardCheck, Users, Ship, PartyPopper]} />
      <RelatedServices locale="el" content={content.related} />
      <ServiceFaq content={content.faq} />
    </ServiceHubPage>
  );
}
