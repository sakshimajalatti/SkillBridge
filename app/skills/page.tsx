"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Target,
  AlertTriangle,
  Clock,
  TrendingUp,
  Zap,
  ChevronRight
} from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlassCard } from "@/components/SkillBridge/glass-card"
import { ScreenHeader } from "@/components/SkillBridge/screen-header"
import { BottomNav } from "@/components/SkillBridge/bottom-nav"
import { DemoChip } from "@/components/SkillBridge/demo-chip"
import { skillsData, skillGaps } from "@/lib/mock-data"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts"

const radarData = [
  { skill: "DSA", value: skillsData.dsa.level, fullMark: 100 },
  { skill: "Web Dev", value: skillsData.webDev.level, fullMark: 100 },
  { skill: "AI/ML", value: skillsData.aiml.level, fullMark: 100 },
  { skill: "Cloud", value: skillsData.cloud.level, fullMark: 100 },
  { skill: "DevOps", value: skillsData.devops.level, fullMark: 100 },
  { skill: "System Design", value: skillsData.systemDesign.level, fullMark: 100 },
  { skill: "Communication", value: skillsData.communication.level, fullMark: 100 },
  { skill: "Aptitude", value: skillsData.aptitude.level, fullMark: 100 },
]

const getUrgencyColor = (urgency: string) => {
  switch (urgency.toLowerCase()) {
    case "critical": return "bg-destructive/20 text-destructive border-destructive/30"
    case "high": return "bg-orange-500/20 text-orange-500 border-orange-500/30"
    case "medium": return "bg-warning/20 text-warning border-warning/30"
    default: return "bg-success/20 text-success border-success/30"
  }
}

const getSkillColor = (level: number) => {
  if (level >= 70) return "bg-success"
  if (level >= 50) return "bg-warning"
  return "bg-destructive"
}

export default function SkillsPage() {
  const [selectedGap, setSelectedGap] = useState<number | null>(null)

  return (
    <PhoneFrame>
      <div className="min-h-full pb-24">
        <ScreenHeader title="Skill Gap Analysis" showBack showNotification />

        <div className="p-4 space-y-6">
          <DemoChip className="mb-2" />

          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassCard>
              <h3 className="font-mono font-semibold mb-4">Skills Radar</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="oklch(0.25 0.04 270)" />
                    <PolarAngleAxis 
                      dataKey="skill" 
                      tick={{ fill: "oklch(0.65 0.02 270)", fontSize: 10 }}
                    />
                    <PolarRadiusAxis 
                      angle={30} 
                      domain={[0, 100]}
                      tick={{ fill: "oklch(0.65 0.02 270)", fontSize: 8 }}
                    />
                    <Radar
                      name="Skills"
                      dataKey="value"
                      stroke="oklch(0.65 0.25 265)"
                      fill="oklch(0.65 0.25 265)"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>
          </motion.div>

          {/* Skill Heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard>
              <h3 className="font-mono font-semibold mb-4">Skill Levels</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(skillsData).map(([key, data], i) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {data.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${data.level}%` }}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                        className={`h-full rounded-full ${getSkillColor(data.level)}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <span className="text-muted-foreground">Weak</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full bg-warning" />
                  <span className="text-muted-foreground">Moderate</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <span className="text-muted-foreground">Strong</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Skill Gap Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-mono font-semibold mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              AI Gap Analysis
            </h3>
            <div className="space-y-3">
              {skillGaps.map((gap, i) => (
                <motion.div
                  key={gap.skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <GlassCard 
                    onClick={() => setSelectedGap(selectedGap === i ? null : i)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-warning" />
                          <h4 className="font-medium text-sm">{gap.skill}</h4>
                        </div>
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-xs border ${getUrgencyColor(gap.urgency)}`}>
                          {gap.urgency} Priority
                        </span>
                      </div>
                      <ChevronRight 
                        className={`w-5 h-5 text-muted-foreground transition-transform ${selectedGap === i ? "rotate-90" : ""}`}
                      />
                    </div>
                    
                    {selectedGap === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-border space-y-3"
                      >
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Learning Time:</span>
                          <span className="font-medium">{gap.learningTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <TrendingUp className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Impact:</span>
                          <span className="font-medium text-success">{gap.impact}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Zap className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Difficulty:</span>
                          <span className="font-medium">{gap.difficulty}</span>
                        </div>
                      </motion.div>
                    )}
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
