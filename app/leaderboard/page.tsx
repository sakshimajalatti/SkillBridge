"use client"

import { motion } from "framer-motion"
import { 
  Trophy,
  Medal,
  Crown,
  TrendingUp,
  Users
} from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlassCard } from "@/components/SkillBridge/glass-card"
import { ScreenHeader } from "@/components/SkillBridge/screen-header"
import { BottomNav } from "@/components/SkillBridge/bottom-nav"
import { DemoChip } from "@/components/SkillBridge/demo-chip"
import { leaderboardData } from "@/lib/mock-data"

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1: return Crown
    case 2: return Medal
    case 3: return Trophy
    default: return null
  }
}

const getRankColor = (rank: number) => {
  switch (rank) {
    case 1: return "from-yellow-400 to-amber-600"
    case 2: return "from-gray-300 to-gray-500"
    case 3: return "from-orange-400 to-orange-600"
    default: return "from-muted to-muted"
  }
}

export default function LeaderboardPage() {
  const topThree = leaderboardData.slice(0, 3)
  const rest = leaderboardData.slice(3)

  return (
    <PhoneFrame>
      <div className="min-h-full pb-24">
        <ScreenHeader title="Campus Leaderboard" showBack showNotification />

        <div className="p-4 space-y-6">
          <DemoChip className="mb-2" />

          {/* Top 3 Podium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassCard>
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="w-5 h-5 text-warning" />
                <h3 className="font-mono font-semibold">Top Performers</h3>
              </div>
              
              <div className="flex items-end justify-center gap-4">
                {/* 2nd Place */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-white font-bold mb-2">
                    {topThree[1]?.avatar}
                  </div>
                  <p className="text-xs font-medium text-center truncate w-16">
                    {topThree[1]?.name.split(" ")[0]}
                  </p>
                  <p className="font-mono text-sm font-bold">{topThree[1]?.score}%</p>
                  <div className="w-16 h-20 bg-gradient-to-t from-gray-500/20 to-gray-300/20 rounded-t-lg mt-2 flex items-center justify-center">
                    <span className="font-mono text-2xl font-bold text-gray-400">2</span>
                  </div>
                </motion.div>

                {/* 1st Place */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-center"
                >
                  <Crown className="w-6 h-6 text-yellow-500 mb-1" />
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-white font-bold mb-2 ring-4 ring-yellow-500/30">
                    {topThree[0]?.avatar}
                  </div>
                  <p className="text-xs font-medium text-center truncate w-20">
                    {topThree[0]?.name.split(" ")[0]}
                  </p>
                  <p className="font-mono text-sm font-bold gradient-text">{topThree[0]?.score}%</p>
                  <div className="w-16 h-28 bg-gradient-to-t from-yellow-500/20 to-amber-300/20 rounded-t-lg mt-2 flex items-center justify-center">
                    <span className="font-mono text-3xl font-bold text-yellow-500">1</span>
                  </div>
                </motion.div>

                {/* 3rd Place */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold mb-2">
                    {topThree[2]?.avatar}
                  </div>
                  <p className="text-xs font-medium text-center truncate w-16">
                    {topThree[2]?.name.split(" ")[0]}
                  </p>
                  <p className="font-mono text-sm font-bold">{topThree[2]?.score}%</p>
                  <div className="w-16 h-16 bg-gradient-to-t from-orange-500/20 to-orange-300/20 rounded-t-lg mt-2 flex items-center justify-center">
                    <span className="font-mono text-2xl font-bold text-orange-500">3</span>
                  </div>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Your Rank */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard glow className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                  AS
                </div>
                <div>
                  <p className="font-medium text-sm">Your Rank</p>
                  <p className="text-xs text-muted-foreground">IIT Delhi</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-mono text-2xl font-bold">#4</p>
                <p className="text-xs text-success flex items-center gap-1 justify-end">
                  <TrendingUp className="w-3 h-3" />
                  +2 this week
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Full Rankings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-mono font-semibold mb-3 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Full Rankings
            </h3>
            <div className="space-y-2">
              {leaderboardData.map((user, i) => {
                const RankIcon = getRankIcon(user.rank)
                return (
                  <motion.div
                    key={user.rank}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                  >
                    <GlassCard 
                      className={`flex items-center gap-4 ${user.isUser ? "border-primary/50 bg-primary/5" : ""}`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        user.rank <= 3 
                          ? `bg-gradient-to-br ${getRankColor(user.rank)}` 
                          : "bg-secondary"
                      }`}>
                        {RankIcon ? (
                          <RankIcon className="w-4 h-4 text-white" />
                        ) : (
                          <span className="text-sm font-mono font-bold">{user.rank}</span>
                        )}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-medium text-sm">
                        {user.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">
                          {user.name}
                          {user.isUser && <span className="text-primary ml-2">(You)</span>}
                        </p>
                        <p className="text-xs text-muted-foreground">{user.university}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono font-bold text-sm">{user.score}%</p>
                      </div>
                    </GlassCard>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        <BottomNav />
      </div>
    </PhoneFrame>
  )
}
