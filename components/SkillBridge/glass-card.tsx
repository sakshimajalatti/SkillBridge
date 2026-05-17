"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
  glow?: boolean
  onClick?: () => void
}

export function GlassCard({ children, className, glow = false, onClick }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={cn(
        "glass-card rounded-xl p-4",
        glow && "glow-primary",
        onClick && "cursor-pointer hover:border-primary/50 transition-colors",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
