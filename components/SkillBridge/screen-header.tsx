"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronLeft, Bell } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScreenHeaderProps {
  title: string
  showBack?: boolean
  showNotification?: boolean
  rightElement?: React.ReactNode
  className?: string
}

export function ScreenHeader({
  title,
  showBack = false,
  showNotification = false,
  rightElement,
  className,
}: ScreenHeaderProps) {
  const router = useRouter()

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "sticky top-0 z-40 glass px-4 py-3 flex items-center justify-between",
        className
      )}
    >
      <div className="flex items-center gap-3">
        {showBack && (
          <button
            onClick={() => router.back()}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        <h1 className="font-mono font-semibold text-lg">{title}</h1>
      </div>
      
      <div className="flex items-center gap-2">
        {rightElement}
        {showNotification && (
          <button
            onClick={() => router.push("/notifications")}
            className="relative w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </button>
        )}
      </div>
    </motion.header>
  )
}
