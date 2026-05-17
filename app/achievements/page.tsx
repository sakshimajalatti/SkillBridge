"use client"

import { motion } from "framer-motion"
import { 
  Trophy,
  Award,
  Flame,
  Medal,
  Calendar,
  Star,
  Zap
} from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlassCard } from "@/components/SkillBridge/glass-card"
import { ScreenHeader } from "@/components/SkillBridge/screen-header"
import { BottomNav } from "@/components/SkillBridge/bottom-nav"
import { DemoChip } from "@/components/SkillBridge/demo-chip"
import { achievements, githubStats } from "@/lib/mock-data"

const getBadgeColor = (badge: string) => {
  switch (badge) {
    case "gold": return "from-yellow-400 to-amber-600"
    case "silver": return "from-gray-300 to-gray-500"
    case "bronze": return "from-orange-400 to-orange-700"
    default: return "from-primary to-accent"
  }
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case "hackathon": return Trophy
    case "certification": return Award
    case "streak": return Flame
    default: return Medal
  }
}

export default function AchievementsPage() {
  const totalXP = 2450

  return (
    <PhoneFrame>
      <div className="min-h-full pb-24">
        <ScreenHeader title="Achievements" showBack showNotification />

        <div className="p-4 space-y-6">
          <DemoChip className="mb-2" />

          {/* XP Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassCard glow className="text-center py-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-6 h-6 text-warning" />
                <span className="font-mono text-4xl font-bold gradient-text">{totalXP}</span>
                <span className="text-muted-foreground">XP</span>
              </div>
              <p className="text-sm text-muted-foreground">Total Experience Points</p>
              <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border">
                <div className="text-center">
                  <p className="font-mono text-xl font-bold text-yellow-500">2</p>
                  <p className="text-xs text-muted-foreground">Hackathons</p>
                </div>
                <div className="text-center">
                  <p className="font-mono text-xl font-bold text-gray-400">1</p>
                  <p className="text-xs text-muted-foreground">Certifications</p>
                </div>
                <div className="text-center">
                  <p className="font-mono text-xl font-bold text-orange-500">1</p>
                  <p className="text-xs text-muted-foreground">Streaks</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Coding Streak Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/30">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current Streak</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-bold text-orange-500">
                      {githubStats.streak}
                    </span>
                    <span className="text-sm text-muted-foreground">days</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Best: {githubStats.longestStreak} days
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Achievements List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-mono font-semibold mb-3">Your Achievements</h3>
            <div className="space-y-3">
              {achievements.map((achievement, i) => {
                const Icon = getTypeIcon(achievement.type)
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <GlassCard className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getBadgeColor(achievement.badge)} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium text-sm">{achievement.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {achievement.description}
                            </p>
                          </div>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${getBadgeColor(achievement.badge)} text-white`}>
                            {achievement.badge}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {achievement.date}
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Locked Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="font-mono font-semibold mb-3">Locked Achievements</h3>
            <div className="space-y-3">
              {[
                { title: "100-Day Streak", description: "Maintain 100 consecutive days of coding", icon: Flame },
                { title: "AWS Certified", description: "Complete AWS Cloud Practitioner certification", icon: Award },
                { title: "Open Source Hero", description: "Get 50+ stars on a project", icon: Star },
              ].map((locked, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <GlassCard className="flex items-center gap-4 opacity-50">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                      <locked.icon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{locked.title}</h4>
                      <p className="text-xs text-muted-foreground">{locked.description}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <BottomNav />
      </div>
    </PhoneFrame>
  )
}
