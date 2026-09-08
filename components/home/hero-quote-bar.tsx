"use client"

import { useId, useState } from "react"
import { CalendarDays, CheckCircle2, Clock, MapPin, Navigation, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { heroQuoteBarContent } from "@/content/home"
import type { Locale } from "@/lib/i18n/config"
import { cn } from "@/lib/utils"

function FieldLabel({
  icon: Icon,
  children,
  htmlFor,
}: {
  icon: typeof MapPin
  children: React.ReactNode
  htmlFor: string
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.1em] text-sand uppercase"
    >
      <Icon className="size-3.5" />
      {children}
    </label>
  )
}

const fieldClassName =
  "h-11 border-ivory/20 bg-ivory/5 text-ivory placeholder:text-ivory/40 focus-visible:border-coral focus-visible:ring-coral/30"

function HeroQuoteBar({
  locale,
  className,
}: {
  locale: Locale
  className?: string
}) {
  const t = heroQuoteBarContent[locale]
  const formId = useId()
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div
        className={cn(
          "flex flex-col items-center gap-2 rounded-2xl border border-ivory/15 bg-charcoal/60 p-8 text-center backdrop-blur-md",
          className
        )}
      >
        <span className="flex size-11 items-center justify-center rounded-full bg-teal/20 text-sand">
          <CheckCircle2 className="size-5" />
        </span>
        <h3 className="font-heading text-lg font-semibold text-ivory">
          {t.successTitle}
        </h3>
        <p className="max-w-sm text-sm text-ivory/70">
          {t.successDescription}
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-ivory/15 bg-charcoal/55 p-5 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-6",
        className
      )}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col">
          <FieldLabel icon={MapPin} htmlFor={`${formId}-pickup`}>
            {t.from}
          </FieldLabel>
          <Input
            id={`${formId}-pickup`}
            name="pickup"
            required
            placeholder={t.pickupPlaceholder}
            className={fieldClassName}
          />
        </div>

        <div className="flex flex-col">
          <FieldLabel icon={Navigation} htmlFor={`${formId}-dropoff`}>
            {t.to}
          </FieldLabel>
          <Input
            id={`${formId}-dropoff`}
            name="dropoff"
            required
            placeholder={t.dropoffPlaceholder}
            className={fieldClassName}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.4fr]">
        <div className="flex flex-col">
          <FieldLabel icon={CalendarDays} htmlFor={`${formId}-date`}>
            {t.date}
          </FieldLabel>
          <Input
            id={`${formId}-date`}
            name="date"
            type="date"
            required
            className={fieldClassName}
          />
        </div>

        <div className="flex flex-col">
          <FieldLabel icon={Clock} htmlFor={`${formId}-time`}>
            {t.time}
          </FieldLabel>
          <Input
            id={`${formId}-time`}
            name="time"
            type="time"
            required
            className={fieldClassName}
          />
        </div>

        <div className="flex flex-col">
          <FieldLabel icon={Users} htmlFor={`${formId}-passengers`}>
            {t.passengers}
          </FieldLabel>
          <Select name="passengers" defaultValue={t.passengerOptions[0]}>
            <SelectTrigger
              id={`${formId}-passengers`}
              className={cn(fieldClassName, "w-full")}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {t.passengerOptions.map((value) => (
                <SelectItem key={value} value={value}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col justify-end">
          <Button
            type="submit"
            className="h-11 w-full bg-coral text-sm font-semibold tracking-[0.08em] text-white uppercase hover:bg-coral/90"
          >
            {t.submit}
          </Button>
        </div>
      </div>
    </form>
  )
}

export { HeroQuoteBar }
