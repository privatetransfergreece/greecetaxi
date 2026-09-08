import {
  Car,
  Compass,
  Hotel,
  Plane,
  Route,
  Ship,
  UserCheck,
  type LucideIcon,
} from "lucide-react"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { aboutServicesContent } from "@/content/about"
import type { Locale } from "@/lib/i18n/config"

const icons: LucideIcon[] = [Plane, Car, UserCheck, Hotel, Ship, Route, Compass]

function ServicesGrid({ locale }: { locale: Locale }) {
  const t = aboutServicesContent[locale]

  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map(({ title, description }, index) => {
            const Icon = icons[index]
            return (
              <Card key={title} className="ring-1 ring-border">
                <CardHeader>
                  <span className="mb-3 flex size-11 items-center justify-center rounded-xl bg-teal-deep text-ivory">
                    <Icon className="size-5" strokeWidth={2} />
                  </span>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export { ServicesGrid }
