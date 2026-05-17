"use client"

import { motion } from "framer-motion"
import { 
  TrendingUp,
  CheckCircle,
  XCircle,
  BarChart3,
  Briefcase
} from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlassCard } from "@/components/SkillBridge/glass-card"
import { ScreenHeader } from "@/components/SkillBridge/screen-header"
import { BottomNav } from "@/components/SkillBridge/bottom-nav"
import { ScoreRing } from "@/components/SkillBridge/score-ring"
import { DemoChip } from "@/components/SkillBridge/demo-chip"
import { marketDemand } from "@/lib/mock-data"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Area,
  AreaChart,
} from "recharts"

export default function MarketPage() {
  return (
    <PhoneFrame>
      <div className="min-h-full pb-24">
        <ScreenHeader title="Market Demand Sync" showBack showNotification />

        <div className="p-4 space-y-6">
          <DemoChip className="mb-2" />

          {/* Market Alignment Score */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassCard glow className="flex flex-col items-center py-6">
              <ScoreRing 
                score={marketDemand.alignmentScore} 
                size="md"
                label="Market Alignment"
              />
              <p className="text-sm text-muted-foreground mt-4 text-center max-w-xs">
                Your profile matches <span className="text-primary font-semibold">{marketDemand.alignmentScore}%</span> of current hiring demand
              </p>
            </GlassCard>
          </motion.div>

          {/* Key Insight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="bg-primary/5 border-primary/20">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                <p className="text-sm">
                  <span className="font-medium">React + Docker + AWS</span> appear in <span className="text-primary font-semibold">73%</span> of current product-company job openings.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Hiring Trends Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono font-semibold">Hiring Trends</h3>
                <span className="text-xs text-success flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +54% this quarter
                </span>
              </div>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={marketDemand.hiringTrends}>
                    <defs>
                      <linearGradient id="colorOpenings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="oklch(0.65 0.25 265)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="oklch(0.65 0.25 265)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "oklch(0.65 0.02 270)", fontSize: 10 }}
                    />
                    <YAxis 
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
                      labelStyle={{ color: "oklch(0.95 0.01 270)" }}
                    />
                    <Area
                      type="monotone"
                      dataKey="openings"
                      stroke="oklch(0.65 0.25 265)"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorOpenings)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>
          </motion.div>

          {/* Skill Demand Match */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard>
              <h3 className="font-mono font-semibold mb-4">Skills vs Market Demand</h3>
              <div className="space-y-4">
                {marketDemand.topDemandSkills.map((skill, i) => (
                  <motion.div
                    key={skill.skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {skill.match ? (
                          <CheckCircle className="w-4 h-4 text-success" />
                        ) : (
                          <XCircle className="w-4 h-4 text-destructive" />
                        )}
                        <span className="text-sm font-medium">{skill.skill}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {skill.demandPercentage}% demand
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                          <span>Your Level</span>
                          <span>{skill.userLevel}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-1.5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.userLevel}%` }}
                            transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                            className={`h-full rounded-full ${skill.match ? "bg-success" : "bg-destructive"}`}
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                          <span>Market Need</span>
                          <span>{skill.demandPercentage}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-1.5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.demandPercentage}%` }}
                            transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                            className="h-full rounded-full bg-primary"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Coverage Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Market Coverage</p>
                  <p className="font-mono text-2xl font-bold">4/6 Skills Matched</p>
                  <p className="text-xs text-muted-foreground">
                    Learn Docker & AWS to increase to 6/6
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
