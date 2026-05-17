"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlowButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  disabled?: boolean
  fullWidth?: boolean
}

export function GlowButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className,
  disabled = false,
  fullWidth = false,
}: GlowButtonProps) {
  const baseStyles = "relative font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-accent text-primary-foreground glow-primary hover:scale-[1.02]",
    secondary: "glass-card text-foreground hover:border-primary/50",
    outline: "border border-primary/50 text-primary hover:bg-primary/10",
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </motion.button>
  )
}
