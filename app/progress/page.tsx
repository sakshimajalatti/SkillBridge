"use client"

import { motion } from "framer-motion"
import { 
  TrendingUp,
  Clock,
  Target,
  Sparkles
} from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlassCard } from "@/components/SkillBridge/glass-card"
import { ScreenHeader } from "@/components/SkillBridge/screen-header"
import { BottomNav } from "@/components/SkillBridge/bottom-nav"
import { DemoChip } from "@/components/SkillBridge/demo-chip"
import { progressTimeline } from "@/lib/mock-data"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  ReferenceLine,
} from "recharts"

export default function ProgressPage() {
  const startScore = progressTimeline[0].score
  const currentScore = progressTimeline[progressTimeline.length - 1].score
  const improvement = currentScore - startScore

  return (
    <PhoneFrame>
      <div className="min-h-full pb-24">
        <ScreenHeader title="Progress Timeline" showBack showNotification />

        <div className="p-4 space-y-6">
          <DemoChip className="mb-2" />

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassCard glow>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <h3 className="font-mono font-semibold">Your Growth</h3>
                </div>
                <span className="text-xs text-muted-foreground">Last 8 weeks</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">Started</p>
                  <p className="font-mono text-2xl font-bold">{startScore}%</p>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 100 }}
                  className="flex-1 mx-4 h-1 bg-muted rounded-full relative"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-primary to-success rounded-full"
                  />
                </motion.div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">Current</p>
                  <p className="font-mono text-2xl font-bold gradient-text">{currentScore}%</p>
                </div>
              </div>
              <div className="text-center mt-4 pt-4 border-t border-border">
                <span className="text-success font-mono font-bold text-lg">+{improvement}%</span>
                <span className="text-muted-foreground text-sm ml-2">improvement</span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Timeline Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard>
              <h3 className="font-mono font-semibold mb-4">Readiness Evolution</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={progressTimeline}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="oklch(0.65 0.25 265)" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="oklch(0.65 0.25 265)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="week" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "oklch(0.65 0.02 270)", fontSize: 10 }}
                      tickFormatter={(value) => `W${value}`}
                    />
                    <YAxis 
                      domain={[40, 80]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "oklch(0.65 0.02 270)", fontSize: 10 }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "oklch(0.12 0.02 270)",
                        border: "1px solid oklch(0.25 0.04 270)",
                        borderRadius: "8px",
                      }}
                      labelFormatter={(value) => `Week ${value}`}
                      formatter={(value: number) => [`${value}%`, "Score"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="score"
                      stroke="oklch(0.65 0.25 265)"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorScore)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>
          </motion.div>

          {/* Milestones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-mono font-semibold mb-3">Milestones</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-4">
                {progressTimeline.filter(p => p.milestone).map((item, i) => (
                  <motion.div
                    key={item.week}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="relative pl-10"
                  >
                    <div className={`absolute left-2 w-4 h-4 rounded-full flex items-center justify-center ${
                      item.milestone === "Current" 
                        ? "bg-primary glow-primary" 
                        : "bg-success"
                    }`}>
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    </div>
                    <GlassCard className={item.milestone === "Current" ? "border-primary/50" : ""}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">{item.milestone}</p>
                          <p className="text-xs text-muted-foreground">Week {item.week}</p>
                        </div>
                        <p className="font-mono font-bold text-lg">
                          {item.score}%
                        </p>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">AI Projection</h4>
                  <p className="text-xs text-muted-foreground">
                    At your current pace, you&apos;ll reach <span className="text-primary font-semibold">85% readiness</span> in 4 more weeks. Keep up the momentum!
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
