import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const tones = {
  teal: "from-teal-deep via-teal to-[#0d2c31]",
  coral: "from-[#8a3a29] via-coral to-[#123c43]",
  sand: "from-teal-deep via-[#1a4b53] to-teal",
} as const

function PhotoPlaceholder({
  icon: Icon,
  tone = "teal",
  label,
  className,
}: {
  icon: LucideIcon
  tone?: keyof typeof tones
  label?: string
  className?: string
}) {
  return (
    <div
      role="img"
      aria-hidden={label ? undefined : true}
      className={cn(
        "relative isolate flex items-end overflow-hidden bg-gradient-to-br",
        tones[tone],
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(252,250,245,0.9) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <svg
        className="absolute inset-x-0 bottom-0 h-2/5 w-full text-[#F3E7D3]/10"
        viewBox="0 0 400 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,60 C80,110 160,10 240,50 C300,80 340,40 400,60 L400,120 L0,120 Z" />
      </svg>
      <Icon
        className="absolute top-1/2 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2 text-ivory/25 sm:size-20"
        strokeWidth={1.25}
      />
      {label ? (
        <span className="relative z-10 px-4 pb-4 font-heading text-sm font-medium text-ivory/90 sm:px-5 sm:pb-5">
          {label}
        </span>
      ) : null}
    </div>
  )
}

export { PhotoPlaceholder }
