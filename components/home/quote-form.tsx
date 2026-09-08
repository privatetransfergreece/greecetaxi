"use client"

import { useId, useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const passengerOptions = ["1", "2", "3", "4", "5", "6", "7+"]
const luggageOptions = ["0", "1", "2", "3", "4", "5+"]

function QuoteForm({ className }: { className?: string }) {
  const formId = useId()
  const [tripType, setTripType] = useState<"one-way" | "round-trip">(
    "one-way"
  )
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div
        className={cn(
          "flex flex-col items-center gap-3 rounded-2xl bg-white p-8 text-center ring-1 ring-foreground/10",
          className
        )}
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-teal/10 text-teal">
          <CheckCircle2 className="size-6" />
        </span>
        <h3 className="font-heading text-lg font-semibold text-charcoal">
          Request received
        </h3>
        <p className="text-sm text-slate">
          Thanks for the journey details. We&apos;ll be in touch shortly with
          your private transfer quote.
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
        "flex flex-col gap-4 rounded-2xl bg-white p-5 ring-1 ring-foreground/10 sm:p-6",
        className
      )}
    >
      <div className="grid grid-cols-2 gap-1 rounded-lg bg-muted p-1">
        {(
          [
            { value: "one-way", label: "One Way" },
            { value: "round-trip", label: "Round Trip" },
          ] as const
        ).map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setTripType(option.value)}
            aria-pressed={tripType === option.value}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
              tripType === option.value
                ? "bg-teal-deep text-ivory shadow-sm"
                : "text-slate hover:text-charcoal"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor={`${formId}-pickup`}>Pickup location</Label>
          <Input
            id={`${formId}-pickup`}
            name="pickup"
            required
            placeholder="Athens International Airport"
            className="h-10"
          />
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor={`${formId}-dropoff`}>Drop-off location</Label>
          <Input
            id={`${formId}-dropoff`}
            name="dropoff"
            required
            placeholder="Hotel, address or destination"
            className="h-10"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${formId}-date`}>Date</Label>
          <Input
            id={`${formId}-date`}
            name="date"
            type="date"
            required
            className="h-10"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${formId}-time`}>Time</Label>
          <Input
            id={`${formId}-time`}
            name="time"
            type="time"
            required
            className="h-10"
          />
        </div>

        {tripType === "round-trip" ? (
          <>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor={`${formId}-return-date`}>Return date</Label>
              <Input
                id={`${formId}-return-date`}
                name="returnDate"
                type="date"
                required
                className="h-10"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor={`${formId}-return-time`}>Return time</Label>
              <Input
                id={`${formId}-return-time`}
                name="returnTime"
                type="time"
                required
                className="h-10"
              />
            </div>
          </>
        ) : null}

        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${formId}-passengers`}>Passengers</Label>
          <Select name="passengers" defaultValue="1">
            <SelectTrigger id={`${formId}-passengers`} className="h-10 w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {passengerOptions.map((value) => (
                <SelectItem key={value} value={value}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${formId}-luggage`}>Luggage</Label>
          <Select name="luggage" defaultValue="1">
            <SelectTrigger id={`${formId}-luggage`} className="h-10 w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {luggageOptions.map((value) => (
                <SelectItem key={value} value={value}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        type="submit"
        className="mt-1 h-11 w-full bg-coral text-base text-white hover:bg-coral/90"
      >
        Get My Quote
        <ArrowRight data-icon="inline-end" className="size-4" />
      </Button>
    </form>
  )
}

export { QuoteForm }
