"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react"

import { Form } from "@/components/ui/form"
import { Field, FieldLabel, FieldDescription, FieldError, FieldControl } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { QuotePageContent } from "@/content/quote"
import type { Locale } from "@/lib/i18n/config"
import { pathFor } from "@/lib/i18n/routes"
import { cn } from "@/lib/utils"

const numberOptions = (max: number, from = 0) =>
  Array.from({ length: max - from + 1 }, (_, i) => String(from + i))

const adultsOptions = numberOptions(8, 1)
const childrenOptions = numberOptions(6, 0)
const infantsOptions = numberOptions(4, 0)
const luggageOptions = numberOptions(10, 0)

type Status = "idle" | "submitting" | "success" | "error"

function QuoteRequestForm({
  content,
  locale,
}: {
  content: QuotePageContent
  locale: Locale
}) {
  const t = content.form
  const formId = React.useId()
  const [status, setStatus] = React.useState<Status>("idle")
  const [returnTransfer, setReturnTransfer] = React.useState(false)
  const [serverErrors, setServerErrors] = React.useState<Record<string, string>>({})
  const [formInstance, setFormInstance] = React.useState(0)

  function mapServerErrors(codes: Record<string, string>): Record<string, string> {
    const fallback =
      locale === "el"
        ? "Παρακαλώ ελέγξτε αυτό το πεδίο."
        : "Please check this field."
    const fieldMessages: Record<string, Record<string, string>> = {
      fullName: { required: t.fullName.required, tooLong: t.fullName.tooLong },
      email: { required: t.email.required, invalid: t.email.invalid },
      transferType: { required: t.transferType.required },
      pickupLocation: { required: t.pickupLocation.required },
      dropoffLocation: { required: t.dropoffLocation.required },
      travelDate: { required: t.travelDate.required },
      pickupTime: { required: t.pickupTime.required },
      returnDate: { required: t.returnDate.required },
      returnTime: { required: t.returnTime.required },
      consent: { required: t.consentRequired },
    }
    const mapped: Record<string, string> = {}
    for (const [field, code] of Object.entries(codes)) {
      mapped[field] = fieldMessages[field]?.[code] ?? fallback
    }
    return mapped
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center ring-1 ring-border sm:p-12">
        <span className="flex size-14 items-center justify-center rounded-full bg-teal/10 text-teal-deep">
          <CheckCircle2 className="size-7" />
        </span>
        <h2 className="font-heading text-2xl font-semibold text-charcoal">
          {content.success.title}
        </h2>
        <p className="max-w-md text-base leading-relaxed text-slate">
          {content.success.description}
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button
            className="h-11 bg-coral px-6 text-base text-white hover:bg-coral/90"
            nativeButton={false}
            render={<Link href={locale === "en" ? "/" : "/el/"} />}
          >
            {content.success.backHome}
          </Button>
          <Button
            variant="outline"
            className="h-11 px-6 text-base"
            onClick={() => {
              setStatus("idle")
              setReturnTransfer(false)
              setServerErrors({})
              setFormInstance((n) => n + 1)
            }}
          >
            {content.success.newRequest}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Form
      key={formInstance}
      errors={serverErrors}
      className="flex flex-col gap-8 rounded-2xl bg-white p-5 ring-1 ring-border sm:p-8"
      onFormSubmit={async (values) => {
        setStatus("submitting")
        setServerErrors({})
        try {
          const response = await fetch("/api/quote/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...values, returnTransfer, locale }),
          })
          const data = await response.json().catch(() => null)

          if (!response.ok || !data?.ok) {
            setServerErrors(mapServerErrors(data?.errors ?? {}))
            setStatus("error")
            return
          }

          setStatus("success")
        } catch {
          setServerErrors({})
          setStatus("error")
        }
      }}
    >
      {/* Honeypot — hidden from real visitors, only bots fill this in. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" ? (
        <div className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-charcoal">
          <XCircle className="mt-0.5 size-5 shrink-0 text-destructive" />
          <div className="flex flex-col gap-0.5">
            <p className="font-semibold text-destructive">{content.error.title}</p>
            <p className="text-slate">{content.error.description}</p>
          </div>
        </div>
      ) : null}

      {/* Section 1 — Customer details */}
      <div className="flex flex-col gap-5">
        <h2 className="font-heading text-lg font-semibold text-charcoal">
          {t.sectionCustomer}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field name="fullName" className="sm:col-span-2">
            <FieldLabel required htmlFor={`${formId}-fullName`}>
              {t.fullName.label}
            </FieldLabel>
            <Input
              id={`${formId}-fullName`}
              name="fullName"
              required
              maxLength={200}
              placeholder={t.fullName.placeholder}
              autoComplete="name"
            />
            <FieldError match="valueMissing">{t.fullName.required}</FieldError>
          </Field>

          <Field name="email">
            <FieldLabel required htmlFor={`${formId}-email`}>
              {t.email.label}
            </FieldLabel>
            <Input
              id={`${formId}-email`}
              name="email"
              type="email"
              required
              placeholder={t.email.placeholder}
              autoComplete="email"
            />
            <FieldError match="valueMissing">{t.email.required}</FieldError>
            <FieldError match="typeMismatch">{t.email.invalid}</FieldError>
          </Field>

          <Field name="phone">
            <FieldLabel htmlFor={`${formId}-phone`}>{t.phone.label}</FieldLabel>
            <Input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              placeholder={t.phone.placeholder}
              autoComplete="tel"
            />
          </Field>

          <Field name="country" className="sm:col-span-2">
            <FieldLabel htmlFor={`${formId}-country`}>{t.country.label}</FieldLabel>
            <Input
              id={`${formId}-country`}
              name="country"
              placeholder={t.country.placeholder}
              autoComplete="country-name"
            />
          </Field>
        </div>
      </div>

      {/* Section 2 — Journey details */}
      <div className="flex flex-col gap-5 border-t border-border/70 pt-8">
        <h2 className="font-heading text-lg font-semibold text-charcoal">
          {t.sectionJourney}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field name="transferType" className="sm:col-span-2">
            <FieldLabel required htmlFor={`${formId}-transferType`}>
              {t.transferType.label}
            </FieldLabel>
            <Select name="transferType" required>
              <SelectTrigger id={`${formId}-transferType`} className="h-10 w-full">
                <SelectValue placeholder={t.transferType.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {t.transferType.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError match="valueMissing">{t.transferType.required}</FieldError>
          </Field>

          <Field name="pickupLocation" className="sm:col-span-2">
            <FieldLabel required htmlFor={`${formId}-pickupLocation`}>
              {t.pickupLocation.label}
            </FieldLabel>
            <Input
              id={`${formId}-pickupLocation`}
              name="pickupLocation"
              required
              maxLength={200}
              placeholder={t.pickupLocation.placeholder}
            />
            <FieldError match="valueMissing">{t.pickupLocation.required}</FieldError>
          </Field>

          <Field name="dropoffLocation" className="sm:col-span-2">
            <FieldLabel required htmlFor={`${formId}-dropoffLocation`}>
              {t.dropoffLocation.label}
            </FieldLabel>
            <Input
              id={`${formId}-dropoffLocation`}
              name="dropoffLocation"
              required
              maxLength={200}
              placeholder={t.dropoffLocation.placeholder}
            />
            <FieldError match="valueMissing">{t.dropoffLocation.required}</FieldError>
          </Field>

          <Field name="travelDate">
            <FieldLabel required htmlFor={`${formId}-travelDate`}>
              {t.travelDate.label}
            </FieldLabel>
            <Input id={`${formId}-travelDate`} name="travelDate" type="date" required />
            <FieldError match="valueMissing">{t.travelDate.required}</FieldError>
          </Field>

          <Field name="pickupTime">
            <FieldLabel required htmlFor={`${formId}-pickupTime`}>
              {t.pickupTime.label}
            </FieldLabel>
            <Input id={`${formId}-pickupTime`} name="pickupTime" type="time" required />
            <FieldDescription>{t.pickupTime.helper}</FieldDescription>
            <FieldError match="valueMissing">{t.pickupTime.required}</FieldError>
          </Field>
        </div>

        <div className="flex flex-col gap-3 rounded-xl border border-border bg-ivory p-4">
          <span className="text-sm font-medium text-charcoal">
            {t.returnQuestion.label}
          </span>
          <div className="grid grid-cols-2 gap-1 rounded-lg bg-white p-1 ring-1 ring-border sm:w-64">
            {(
              [
                { value: false, label: t.returnQuestion.no },
                { value: true, label: t.returnQuestion.yes },
              ] as const
            ).map((option) => (
              <button
                key={String(option.value)}
                type="button"
                onClick={() => setReturnTransfer(option.value)}
                aria-pressed={returnTransfer === option.value}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  returnTransfer === option.value
                    ? "bg-teal-deep text-ivory shadow-sm"
                    : "text-slate hover:text-charcoal"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>

          {returnTransfer ? (
            <div className="grid gap-5 pt-2 sm:grid-cols-2">
              <Field name="returnPickupLocation">
                <FieldLabel htmlFor={`${formId}-returnPickupLocation`}>
                  {t.returnPickupLocation.label}
                </FieldLabel>
                <Input
                  id={`${formId}-returnPickupLocation`}
                  name="returnPickupLocation"
                  maxLength={200}
                  placeholder={t.returnPickupLocation.placeholder}
                />
              </Field>

              <Field name="returnDropoffLocation">
                <FieldLabel htmlFor={`${formId}-returnDropoffLocation`}>
                  {t.returnDropoffLocation.label}
                </FieldLabel>
                <Input
                  id={`${formId}-returnDropoffLocation`}
                  name="returnDropoffLocation"
                  maxLength={200}
                  placeholder={t.returnDropoffLocation.placeholder}
                />
              </Field>

              <Field name="returnDate">
                <FieldLabel required htmlFor={`${formId}-returnDate`}>
                  {t.returnDate.label}
                </FieldLabel>
                <Input
                  id={`${formId}-returnDate`}
                  name="returnDate"
                  type="date"
                  required={returnTransfer}
                />
                <FieldError match="valueMissing">{t.returnDate.required}</FieldError>
              </Field>

              <Field name="returnTime">
                <FieldLabel required htmlFor={`${formId}-returnTime`}>
                  {t.returnTime.label}
                </FieldLabel>
                <Input
                  id={`${formId}-returnTime`}
                  name="returnTime"
                  type="time"
                  required={returnTransfer}
                />
                <FieldError match="valueMissing">{t.returnTime.required}</FieldError>
              </Field>
            </div>
          ) : null}
        </div>
      </div>

      {/* Section 3 — Passengers & luggage */}
      <div className="flex flex-col gap-5 border-t border-border/70 pt-8">
        <h2 className="font-heading text-lg font-semibold text-charcoal">
          {t.sectionPassengers}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Field name="adults">
            <FieldLabel htmlFor={`${formId}-adults`}>{t.adults.label}</FieldLabel>
            <Select name="adults" defaultValue="1">
              <SelectTrigger id={`${formId}-adults`} className="h-10 w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {adultsOptions.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field name="children">
            <FieldLabel htmlFor={`${formId}-children`}>{t.children.label}</FieldLabel>
            <Select name="children" defaultValue="0">
              <SelectTrigger id={`${formId}-children`} className="h-10 w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {childrenOptions.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field name="infants">
            <FieldLabel htmlFor={`${formId}-infants`}>{t.infants.label}</FieldLabel>
            <Select name="infants" defaultValue="0">
              <SelectTrigger id={`${formId}-infants`} className="h-10 w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {infantsOptions.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field name="luggage">
            <FieldLabel htmlFor={`${formId}-luggage`}>{t.luggage.label}</FieldLabel>
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
          </Field>
        </div>
      </div>

      {/* Section 4 — Additional information */}
      <div className="flex flex-col gap-5 border-t border-border/70 pt-8">
        <h2 className="font-heading text-lg font-semibold text-charcoal">
          {t.sectionAdditional}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field name="flightNumber">
            <FieldLabel htmlFor={`${formId}-flightNumber`}>
              {t.flightNumber.label}
            </FieldLabel>
            <Input
              id={`${formId}-flightNumber`}
              name="flightNumber"
              maxLength={200}
              placeholder={t.flightNumber.placeholder}
            />
            <FieldDescription>{t.flightNumber.helper}</FieldDescription>
          </Field>

          <Field name="ferryInfo">
            <FieldLabel htmlFor={`${formId}-ferryInfo`}>{t.ferryInfo.label}</FieldLabel>
            <Input
              id={`${formId}-ferryInfo`}
              name="ferryInfo"
              maxLength={200}
              placeholder={t.ferryInfo.placeholder}
            />
          </Field>

          <Field name="hotelName" className="sm:col-span-2">
            <FieldLabel htmlFor={`${formId}-hotelName`}>{t.hotelName.label}</FieldLabel>
            <Input
              id={`${formId}-hotelName`}
              name="hotelName"
              maxLength={200}
              placeholder={t.hotelName.placeholder}
            />
          </Field>

          <Field name="specialRequests" className="sm:col-span-2">
            <FieldLabel htmlFor={`${formId}-specialRequests`}>
              {t.specialRequests.label}
            </FieldLabel>
            <FieldControl
              render={<Textarea rows={4} maxLength={2000} />}
              id={`${formId}-specialRequests`}
              name="specialRequests"
              placeholder={t.specialRequests.placeholder}
            />
            <FieldDescription>{t.specialRequests.helper}</FieldDescription>
          </Field>
        </div>
      </div>

      {/* Consent + submit */}
      <div className="flex flex-col gap-5 border-t border-border/70 pt-8">
        <Field name="consent" className="flex-row items-start gap-2.5">
          <Checkbox id={`${formId}-consent`} name="consent" required className="mt-0.5" />
          <FieldLabel htmlFor={`${formId}-consent`} className="text-sm font-normal text-charcoal">
            {t.consentLabel}{" "}
            <Link
              href={pathFor("privacy", locale)}
              target="_blank"
              className="font-medium text-teal-deep underline underline-offset-2 hover:text-coral"
            >
              {t.consentLinkText}
            </Link>
            .
          </FieldLabel>
          <FieldError match="valueMissing" className="basis-full">
            {t.consentRequired}
          </FieldError>
        </Field>

        <Button
          type="submit"
          disabled={status === "submitting"}
          focusableWhenDisabled
          className="h-12 w-full bg-coral text-base font-semibold text-white hover:bg-coral/90 disabled:opacity-70"
        >
          {status === "submitting" ? t.submitting : t.submit}
          {status !== "submitting" ? (
            <ArrowRight data-icon="inline-end" className="size-4" />
          ) : null}
        </Button>
      </div>
    </Form>
  )
}

export { QuoteRequestForm }
