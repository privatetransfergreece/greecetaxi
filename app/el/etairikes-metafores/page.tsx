import type { Metadata } from "next";
import {
  Briefcase,
  CalendarClock,
  Clock,
  MessageCircle,
  Repeat,
  ShieldCheck,
  UserCheck,
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

const content = serviceHubs.corporateTransfers.el;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("corporateTransfers", "el"),
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: absoluteUrl(pathFor("corporateTransfers", "el")),
  },
  twitter: { title: meta.title, description: meta.description },
};

export default function CorporateTransfersPageEl() {
  return (
    <ServiceHubPage slug="corporateTransfers" locale="el">
      <ServiceOverview content={content.overview} />
      <ServiceFeatures content={content.features} icons={[Clock, UserCheck, Briefcase, Users]} />
      <ServiceFeatures
        content={content.audience}
        icons={[UserCheck, Users, Briefcase, Clock]}
      />
      <ServiceHowItWorks content={content.howItWorks} />
      <ServiceFeatures content={content.practicalInfo} icons={[UserCheck, Users, CalendarClock, ShieldCheck]} />
      <ServiceFeatures content={content.whyChoose} icons={[Clock, ShieldCheck, MessageCircle, Repeat]} />
      <RelatedServices locale="el" content={content.related} />
      <ServiceFaq content={content.faq} />
    </ServiceHubPage>
  );
}
