import type { Metadata } from "next";
import {
  Briefcase,
  Clock,
  Hotel,
  MapPin,
  Repeat,
  ShoppingBag,
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

const content = serviceHubs.hourlyHire.el;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("hourlyHire", "el"),
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: absoluteUrl(pathFor("hourlyHire", "el")),
  },
  twitter: { title: meta.title, description: meta.description },
};

export default function HourlyHirePageEl() {
  return (
    <ServiceHubPage slug="hourlyHire" locale="el">
      <ServiceOverview content={content.overview} />
      <ServiceFeatures content={content.features} icons={[Repeat, MapPin, UserCheck, Clock]} />
      <ServiceFeatures
        content={content.audience}
        icons={[MapPin, Briefcase, Users, Hotel, ShoppingBag, Briefcase]}
      />
      <ServiceHowItWorks content={content.howItWorks} />
      <ServiceFeatures content={content.practicalInfo} icons={[Clock, MapPin, Users, Repeat]} />
      <ServiceFeatures content={content.whyChoose} icons={[Repeat, UserCheck, Clock, MapPin]} />
      <RelatedServices locale="el" content={content.related} />
      <ServiceFaq content={content.faq} />
    </ServiceHubPage>
  );
}
