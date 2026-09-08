import {
  Briefcase,
  Car,
  Clock,
  Plane,
  Route,
  Ship,
  Users,
  type LucideIcon,
} from "lucide-react"

const iconByPageKey: Record<string, LucideIcon> = {
  airportTransfers: Plane,
  cityToCityTransfers: Route,
  privateTransfers: Car,
  hourlyHire: Clock,
  cruisePortTransfers: Ship,
  corporateTransfers: Briefcase,
  groupTransfers: Users,
}

export { iconByPageKey }
