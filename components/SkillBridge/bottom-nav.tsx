"use client"

import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { LayoutDashboard, Target, MessageCircle, Map, User } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Target, label: "Skills", href: "/skills" },
  { icon: MessageCircle, label: "Mentor", href: "/mentor" },
  { icon: Map, label: "Roadmap", href: "/roadmap" },
  { icon: User, label: "Profile", href: "/profile" },
]

export function BottomNav() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="fixed bottom-0 left-0 right-0 md:bottom-4 md:left-1/2 md:-translate-x-1/2 md:w-[375px] z-50">
      <div className="glass border-t border-border/50 md:rounded-2xl md:mx-4 md:mb-4">
        <nav className="flex items-center justify-around py-2 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            
            return (
              <button
                key={item.href}
                onClick={() => router.push(item.href)}
                className={cn(
                  "relative flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-primary/10 rounded-xl"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <Icon className={cn("w-5 h-5 relative z-10", isActive && "glow-text")} />
                <span className="text-xs font-medium relative z-10">{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
