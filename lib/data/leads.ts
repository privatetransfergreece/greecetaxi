import "server-only"

import { verifyAdminSession } from "@/lib/auth/dal"
import { createAdminClient } from "@/lib/supabase/admin-client"
import type { Lead, LeadActivity, EmailLogEntry, LeadStatus } from "@/lib/supabase/types"

export type LeadFilters = {
  status?: LeadStatus | "all"
  search?: string
  from?: string
  to?: string
}

/** Every read below requires a verified admin session — no data leaves the DAL unauthenticated. */
export async function listLeads(filters: LeadFilters = {}): Promise<Lead[]> {
  await verifyAdminSession()
  const supabase = createAdminClient()

  let query = supabase.from("leads").select("*").order("created_at", { ascending: false })

  if (filters.status && filters.status !== "all") {
    query = query.eq("status", filters.status)
  }
  if (filters.from) query = query.gte("travel_date", filters.from)
  if (filters.to) query = query.lte("travel_date", filters.to)
  if (filters.search) {
    const term = filters.search.trim()
    if (term) {
      query = query.or(
        `full_name.ilike.%${term}%,email.ilike.%${term}%,phone.ilike.%${term}%,pickup_location.ilike.%${term}%,dropoff_location.ilike.%${term}%`
      )
    }
  }

  const { data, error } = await query
  if (error) {
    console.error("[leads] Failed to list leads:", error)
    return []
  }
  return data ?? []
}

export async function getLeadById(id: string): Promise<Lead | null> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const { data, error } = await supabase.from("leads").select("*").eq("id", id).maybeSingle()
  if (error) {
    console.error("[leads] Failed to fetch lead:", error)
    return null
  }
  return data
}

export async function getLeadActivity(leadId: string): Promise<LeadActivity[]> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from("lead_activity")
    .select("*")
    .eq("lead_id", leadId)
    .order("created_at", { ascending: false })
  if (error) {
    console.error("[leads] Failed to fetch activity:", error)
    return []
  }
  return data ?? []
}

export async function getLeadEmailLog(leadId: string): Promise<EmailLogEntry[]> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from("email_log")
    .select("*")
    .eq("lead_id", leadId)
    .order("created_at", { ascending: false })
  if (error) {
    console.error("[leads] Failed to fetch email log:", error)
    return []
  }
  return data ?? []
}

export type DashboardStats = {
  total: number
  pending: number
  quoted: number
  confirmed: number
  upcoming: number
  completed: number
  lost: number
}

/**
 * "Upcoming" and "Completed" are derived from a confirmed booking's travel
 * date, not stored separately — a confirmed transfer becomes "Completed"
 * automatically once its date has passed, no background job required.
 * "Lost" maps to the cancelled status.
 */
export async function getDashboardStats(): Promise<DashboardStats> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const { data, error } = await supabase.from("leads").select("status, travel_date")

  if (error || !data) {
    console.error("[leads] Failed to compute dashboard stats:", error)
    return { total: 0, pending: 0, quoted: 0, confirmed: 0, upcoming: 0, completed: 0, lost: 0 }
  }

  const today = new Date().toISOString().slice(0, 10)
  const stats: DashboardStats = { total: data.length, pending: 0, quoted: 0, confirmed: 0, upcoming: 0, completed: 0, lost: 0 }

  for (const row of data) {
    if (row.status === "pending") stats.pending++
    else if (row.status === "quoted") stats.quoted++
    else if (row.status === "cancelled") stats.lost++
    else if (row.status === "confirmed") {
      stats.confirmed++
      if (row.travel_date < today) stats.completed++
      else stats.upcoming++
    }
  }

  return stats
}

export async function listRecentLeads(limit = 8): Promise<Lead[]> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit)
  if (error) {
    console.error("[leads] Failed to list recent leads:", error)
    return []
  }
  return data ?? []
}

/** Confirmed bookings with a travel date today or later, soonest first. */
export async function listUpcomingTransfers(limit?: number): Promise<Lead[]> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const today = new Date().toISOString().slice(0, 10)
  let query = supabase
    .from("leads")
    .select("*")
    .eq("status", "confirmed")
    .gte("travel_date", today)
    .order("travel_date", { ascending: true })
  if (limit) query = query.limit(limit)
  const { data, error } = await query
  if (error) {
    console.error("[leads] Failed to list upcoming transfers:", error)
    return []
  }
  return data ?? []
}
