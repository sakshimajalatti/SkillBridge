"use client"

import { motion } from "framer-motion"
import { 
  Bell,
  TrendingUp,
  Lightbulb,
  AlertCircle,
  CheckCircle
} from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlassCard } from "@/components/SkillBridge/glass-card"
import { ScreenHeader } from "@/components/SkillBridge/screen-header"
import { BottomNav } from "@/components/SkillBridge/bottom-nav"
import { DemoChip } from "@/components/SkillBridge/demo-chip"
import { notifications } from "@/lib/mock-data"

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "insight": return TrendingUp
    case "recommendation": return Lightbulb
    case "alert": return AlertCircle
    default: return Bell
  }
}

const getNotificationColor = (type: string) => {
  switch (type) {
    case "insight": return "from-green-500 to-emerald-600"
    case "recommendation": return "from-blue-500 to-cyan-600"
    case "alert": return "from-orange-500 to-amber-600"
    default: return "from-primary to-accent"
  }
}

export default function NotificationsPage() {
  return (
    <PhoneFrame>
      <div className="min-h-full pb-24">
        <ScreenHeader title="Smart Insights" showBack />

        <div className="p-4 space-y-6">
          <DemoChip className="mb-2" />

          {/* Unread indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassCard className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">AI-Generated Insights</p>
                  <p className="text-xs text-muted-foreground">
                    {notifications.filter(n => !n.read).length} unread notifications
                  </p>
                </div>
              </div>
              <button className="text-xs text-primary">Mark all read</button>
            </GlassCard>
          </motion.div>

          {/* Notifications List */}
          <div className="space-y-3">
            {notifications.map((notification, i) => {
              const Icon = getNotificationIcon(notification.type)
              return (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <GlassCard className={`relative ${!notification.read ? "border-primary/30" : ""}`}>
                    {!notification.read && (
                      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary" />
                    )}
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getNotificationColor(notification.type)} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 pr-4">
                        <h4 className="font-medium text-sm mb-1">{notification.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                          {notification.message}
                        </p>
                        <span className="text-xs text-muted-foreground/70">
                          {notification.time}
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>

          {/* AI Tip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard className="bg-primary/5 border-primary/20">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm mb-1">Pro Tip</p>
                  <p className="text-xs text-muted-foreground">
                    Students who check their insights daily improve their readiness scores 40% faster than those who don&apos;t.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <BottomNav />
      </div>
    </PhoneFrame>
  )
}
