import {
  Car,
  Clock,
  DoorOpen,
  Headset,
  Receipt,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { whyChooseUsContent } from "@/content/about"
import type { Locale } from "@/lib/i18n/config"

const icons: LucideIcon[] = [ShieldCheck, Car, Clock, Receipt, Headset, DoorOpen]

function WhyChooseUs({ locale }: { locale: Locale }) {
  const t = whyChooseUsContent[locale]

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading align="center" eyebrow={t.eyebrow} title={t.title} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map(({ title, description }, index) => {
            const Icon = icons[index]
            return (
              <div
                key={title}
                className="flex flex-col items-start gap-3 rounded-2xl bg-ivory p-6 ring-1 ring-border"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-teal-deep/10 text-teal-deep">
                  <Icon className="size-5" strokeWidth={2} />
                </span>
                <h3 className="font-heading text-base font-semibold text-charcoal">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate">
                  {description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export { WhyChooseUs }
