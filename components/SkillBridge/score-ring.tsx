"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScoreRingProps {
  score: number
  size?: "sm" | "md" | "lg"
  label?: string
  sublabel?: string
  className?: string
}

export function ScoreRing({ score, size = "md", label, sublabel, className }: ScoreRingProps) {
  const sizes = {
    sm: { container: "w-24 h-24", stroke: 6, text: "text-xl", sublabelText: "text-xs" },
    md: { container: "w-40 h-40", stroke: 8, text: "text-4xl", sublabelText: "text-sm" },
    lg: { container: "w-56 h-56", stroke: 10, text: "text-5xl", sublabelText: "text-base" },
  }
  
  const config = sizes[size]
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (score / 100) * circumference

  // Color based on score
  const getColor = () => {
    if (score >= 80) return "oklch(0.65 0.20 145)" // green
    if (score >= 60) return "oklch(0.65 0.25 265)" // blue
    if (score >= 40) return "oklch(0.75 0.18 85)" // yellow
    return "oklch(0.55 0.22 25)" // red
  }

  return (
    <div className={cn("relative flex items-center justify-center", config.container, className)}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={config.stroke}
          className="text-muted/30"
        />
        {/* Progress circle */}
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={getColor()}
          strokeWidth={config.stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            filter: `drop-shadow(0 0 8px ${getColor()})`,
          }}
        />
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className={cn("font-mono font-bold gradient-text", config.text)}
        >
          {score}%
        </motion.span>
        {label && (
          <span className={cn("text-muted-foreground mt-1", config.sublabelText)}>
            {label}
          </span>
        )}
        {sublabel && (
          <span className={cn("text-muted-foreground/70", config.sublabelText)}>
            {sublabel}
          </span>
        )}
      </div>
      
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-full blur-xl opacity-20"
        style={{ background: `radial-gradient(circle, ${getColor()}, transparent 70%)` }}
      />
    </div>
  )
}
