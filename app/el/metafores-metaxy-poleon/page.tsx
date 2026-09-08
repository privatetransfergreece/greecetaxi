import type { Metadata } from "next";
import {
  CalendarClock,
  CarFront,
  ClipboardCheck,
  Clock,
  Landmark,
  Luggage,
  MessageCircle,
  Route,
  Signpost,
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

const content = serviceHubs.cityToCityTransfers.el;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("cityToCityTransfers", "el"),
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: absoluteUrl(pathFor("cityToCityTransfers", "el")),
  },
  twitter: { title: meta.title, description: meta.description },
};

export default function CityToCityTransfersPageEl() {
  return (
    <ServiceHubPage slug="cityToCityTransfers" locale="el">
      <ServiceOverview content={content.overview} />
      <ServiceFeatures content={content.features} icons={[Route, Clock, CarFront, Luggage]} />
      <ServiceFeatures content={content.audience} icons={[Signpost, Users, Landmark, Users]} />
      <ServiceHowItWorks content={content.howItWorks} />
      {content.entities ? <ServiceEntityBadges content={content.entities} /> : null}
      <ServiceFeatures content={content.practicalInfo} icons={[Luggage, Signpost, CalendarClock, Route]} />
      <ServiceFeatures content={content.whyChoose} icons={[ClipboardCheck, MessageCircle, CarFront, Route]} />
      <RelatedServices locale="el" content={content.related} />
      <ServiceFaq content={content.faq} />
    </ServiceHubPage>
  );
}
