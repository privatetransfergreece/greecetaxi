"use server"

import { revalidatePath } from "next/cache"

import { verifyAdminSession } from "@/lib/auth/dal"
import { createAdminClient } from "@/lib/supabase/admin-client"
import type { DriverInsert, DriverUpdate } from "@/lib/supabase/types"
import { formatTravelDate, formatTravelTime, formatTransferType } from "@/lib/email/format"
import { referenceFromId } from "@/lib/reference"
import { siteConfig } from "@/lib/site-config"
import type { ActionResult } from "@/app/actions/leads"

function driverFromFormData(formData: FormData): DriverInsert {
  const toIntOrNull = (value: FormDataEntryValue | null) => {
    const parsed = Number.parseInt(String(value ?? ""), 10)
    return Number.isFinite(parsed) ? parsed : null
  }

  return {
    name: String(formData.get("name") ?? "").trim(),
    whatsapp_number: String(formData.get("whatsapp_number") ?? "").replace(/[^\d]/g, ""),
    vehicle_type: String(formData.get("vehicle_type") ?? "").trim() || null,
    vehicle_model: String(formData.get("vehicle_model") ?? "").trim() || null,
    passenger_capacity: toIntOrNull(formData.get("passenger_capacity")),
    luggage_capacity: toIntOrNull(formData.get("luggage_capacity")),
    coverage_area: String(formData.get("coverage_area") ?? "").trim() || null,
    status: formData.get("status") === "inactive" ? "inactive" : "active",
    notes: String(formData.get("notes") ?? "").trim() || null,
  }
}

export async function createDriver(formData: FormData): Promise<ActionResult> {
  await verifyAdminSession()
  const driver = driverFromFormData(formData)

  if (!driver.name || !driver.whatsapp_number) {
    return { success: false, message: "Name and WhatsApp number are required." }
  }

  const supabase = createAdminClient()
  const { error } = await supabase.from("drivers").insert(driver)
  if (error) {
    console.error("[drivers] createDriver failed:", error)
    return { success: false, message: "Could not add driver." }
  }

  revalidatePath("/admin/drivers")
  return { success: true, message: "Driver added." }
}

export async function updateDriver(driverId: string, formData: FormData): Promise<ActionResult> {
  await verifyAdminSession()
  const update: DriverUpdate = driverFromFormData(formData)

  if (!update.name || !update.whatsapp_number) {
    return { success: false, message: "Name and WhatsApp number are required." }
  }

  const supabase = createAdminClient()
  const { error } = await supabase.from("drivers").update(update).eq("id", driverId)
  if (error) {
    console.error("[drivers] updateDriver failed:", error)
    return { success: false, message: "Could not save driver." }
  }

  revalidatePath("/admin/drivers")
  return { success: true, message: "Driver updated." }
}

export async function setDriverStatus(driverId: string, status: "active" | "inactive"): Promise<ActionResult> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const { error } = await supabase.from("drivers").update({ status }).eq("id", driverId)
  if (error) {
    console.error("[drivers] setDriverStatus failed:", error)
    return { success: false, message: "Could not update driver status." }
  }

  revalidatePath("/admin/drivers")
  return { success: true, message: status === "active" ? "Driver marked active." : "Driver marked inactive." }
}

export async function deleteDriver(driverId: string): Promise<ActionResult> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const { error } = await supabase.from("drivers").delete().eq("id", driverId)
  if (error) {
    console.error("[drivers] deleteDriver failed:", error)
    return { success: false, message: "Could not remove driver." }
  }

  revalidatePath("/admin/drivers")
  return { success: true, message: "Driver removed." }
}

/**
 * Builds the Greece-specific WhatsApp deep link for a lead and logs the
 * dispatch attempt. A simple wa.me click-to-chat link — no WhatsApp
 * Business API — matching the actual Greece Taxi dispatch workflow.
 */
export async function dispatchDriver(leadId: string, driverId: string): Promise<ActionResult & { whatsappUrl?: string }> {
  await verifyAdminSession()
  const supabase = createAdminClient()

  const [{ data: lead }, { data: driver }] = await Promise.all([
    supabase.from("leads").select("*").eq("id", leadId).maybeSingle(),
    supabase.from("drivers").select("*").eq("id", driverId).maybeSingle(),
  ])

  if (!lead) return { success: false, message: "Lead not found." }
  if (!driver) return { success: false, message: "Driver not found." }

  const ref = referenceFromId(lead.id)
  const lines = [
    `${siteConfig.name} — new transfer (${ref})`,
    `${formatTransferType(lead.transfer_type, "en")}`,
    `Pickup: ${lead.pickup_location}`,
    `Drop-off: ${lead.dropoff_location}`,
    `Date: ${formatTravelDate(lead.travel_date, "en")}`,
    `Time: ${formatTravelTime(lead.pickup_time)}`,
    `Passengers: ${lead.adults} adults${lead.children ? `, ${lead.children} children` : ""}${lead.infants ? `, ${lead.infants} infants` : ""}`,
    `Luggage: ${lead.luggage}`,
  ]
  if (lead.flight_number) lines.push(`Flight: ${lead.flight_number}`)
  if (lead.hotel_name) lines.push(`Hotel: ${lead.hotel_name}`)
  if (lead.quoted_amount != null) lines.push(`Quoted: €${lead.quoted_amount.toFixed(2)}`)
  lines.push(`Customer: ${lead.full_name}${lead.phone ? ` (${lead.phone})` : ""}`)

  const message = encodeURIComponent(lines.join("\n"))
  const whatsappUrl = `https://wa.me/${driver.whatsapp_number}?text=${message}`

  const { error } = await supabase.from("dispatch_log").insert({
    lead_id: leadId,
    driver_id: driverId,
    action_type: "whatsapp",
    notes: null,
  })

  if (error) {
    console.error("[drivers] Failed to log dispatch:", error)
  }

  revalidatePath(`/admin/leads/${leadId}`)

  return { success: true, message: `Dispatch logged for ${driver.name}.`, whatsappUrl }
}
