export type LeadStatus = "pending" | "quoted" | "confirmed" | "completed" | "cancelled"
export type DriverStatus = "active" | "inactive"
export type PaymentStatus = "unpaid" | "paid" | "refunded"

export type Lead = {
  id: string
  status: LeadStatus
  locale: "en" | "el"
  full_name: string
  email: string
  phone: string | null
  country: string | null
  transfer_type: string
  pickup_location: string
  dropoff_location: string
  travel_date: string
  pickup_time: string
  return_transfer: boolean
  return_pickup_location: string | null
  return_dropoff_location: string | null
  return_date: string | null
  return_time: string | null
  adults: number
  children: number
  infants: number
  luggage: number
  flight_number: string | null
  ferry_info: string | null
  hotel_name: string | null
  special_requests: string | null
  quoted_amount: number | null
  quoted_currency: string
  admin_notes: string | null
  ip: string | null
  source: string
  created_at: string
  updated_at: string
}

export type LeadInsert = Omit<
  Lead,
  | "id"
  | "status"
  | "quoted_amount"
  | "quoted_currency"
  | "admin_notes"
  | "created_at"
  | "updated_at"
> &
  Partial<Pick<Lead, "status" | "quoted_currency">>

export type LeadUpdate = Partial<Omit<Lead, "id" | "created_at">>

export type LeadActivity = {
  id: string
  lead_id: string
  action: string
  detail: Record<string, unknown> | null
  created_at: string
}

export type EmailLogEntry = {
  id: string
  lead_id: string | null
  type: string
  recipient: string
  subject: string
  success: boolean
  error: string | null
  created_at: string
}

export type Driver = {
  id: string
  name: string
  whatsapp_number: string
  vehicle_type: string | null
  vehicle_model: string | null
  passenger_capacity: number | null
  luggage_capacity: number | null
  coverage_area: string | null
  status: DriverStatus
  notes: string | null
  created_at: string
  updated_at: string
}

export type DriverInsert = Omit<Driver, "id" | "created_at" | "updated_at">
export type DriverUpdate = Partial<DriverInsert>

export type DispatchLogEntry = {
  id: string
  lead_id: string
  driver_id: string | null
  action_type: string
  contacted_at: string
  notes: string | null
}

export type InvoiceLineItem = {
  description: string
  amount: number
}

export type Invoice = {
  id: string
  invoice_number: string
  lead_id: string | null
  customer_name: string
  customer_email: string
  line_items: InvoiceLineItem[]
  amount: number
  currency: string
  payment_method: string | null
  payment_status: PaymentStatus
  notes: string | null
  access_token: string
  created_at: string
  updated_at: string
}

export type InvoiceInsert = Omit<Invoice, "id" | "created_at" | "updated_at" | "payment_status"> &
  Partial<Pick<Invoice, "payment_status">>

export type InvoiceUpdate = Partial<Omit<Invoice, "id" | "invoice_number" | "access_token" | "created_at">>

export type Database = {
  public: {
    Tables: {
      leads: { Row: Lead; Insert: LeadInsert; Update: LeadUpdate; Relationships: [] }
      lead_activity: {
        Row: LeadActivity
        Insert: Omit<LeadActivity, "id" | "created_at">
        Update: Partial<Omit<LeadActivity, "id">>
        Relationships: []
      }
      email_log: {
        Row: EmailLogEntry
        Insert: Omit<EmailLogEntry, "id" | "created_at">
        Update: Partial<Omit<EmailLogEntry, "id">>
        Relationships: []
      }
      drivers: { Row: Driver; Insert: DriverInsert; Update: DriverUpdate; Relationships: [] }
      dispatch_log: {
        Row: DispatchLogEntry
        Insert: Omit<DispatchLogEntry, "id" | "contacted_at">
        Update: Partial<Omit<DispatchLogEntry, "id">>
        Relationships: [
          {
            foreignKeyName: "dispatch_log_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: { Row: Invoice; Insert: InvoiceInsert; Update: InvoiceUpdate; Relationships: [] }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
  }
}
