import { Car, DoorOpen, Landmark, Zap } from "lucide-react"

import { Container } from "@/components/container"
import { trustStripContent } from "@/content/home"
import type { Locale } from "@/lib/i18n/config"

const icons = [Car, DoorOpen, Landmark, Zap]

function TrustStrip({ locale }: { locale: Locale }) {
  const items = trustStripContent[locale].items

  return (
    <div className="border-b border-border/70 bg-white">
      <Container className="grid grid-cols-2 gap-6 py-6 sm:grid-cols-4 sm:gap-4">
        {items.map((label, index) => {
          const Icon = icons[index]
          return (
            <div key={label} className="flex items-center gap-2.5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sand text-teal-deep">
                <Icon className="size-4" strokeWidth={2} />
              </span>
              <span className="text-sm font-medium text-charcoal">{label}</span>
            </div>
          )
        })}
      </Container>
    </div>
  )
}

export { TrustStrip }
