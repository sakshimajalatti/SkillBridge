"use client"

import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

interface DemoChipProps {
  className?: string
}

export function DemoChip({ className }: DemoChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium",
        "bg-accent/20 text-accent border border-accent/30",
        className
      )}
    >
      <Sparkles className="w-3 h-3" />
      Demo Data
    </span>
  )
}
