"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Map,
  CheckCircle,
  Circle,
  ChevronRight,
  Sparkles,
  Calendar,
  Flag
} from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlassCard } from "@/components/SkillBridge/glass-card"
import { ScreenHeader } from "@/components/SkillBridge/screen-header"
import { BottomNav } from "@/components/SkillBridge/bottom-nav"
import { DemoChip } from "@/components/SkillBridge/demo-chip"
import { roadmapData } from "@/lib/mock-data"

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "critical": return "border-destructive bg-destructive/10 text-destructive"
    case "high": return "border-orange-500 bg-orange-500/10 text-orange-500"
    case "medium": return "border-warning bg-warning/10 text-warning"
    default: return "border-muted bg-muted text-muted-foreground"
  }
}

export default function RoadmapPage() {
  const [expandedMonth, setExpandedMonth] = useState<number | null>(0)

  return (
    <PhoneFrame>
      <div className="min-h-full pb-24">
        <ScreenHeader title="AI Career Roadmap" showBack showNotification />

        <div className="p-4 space-y-6">
          <DemoChip className="mb-2" />

          {/* Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassCard className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-mono font-semibold mb-1">Personalized for You</h3>
                  <p className="text-sm text-muted-foreground">
                    AI-generated roadmap based on your skill gaps, target role, and market trends.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-4">
              {roadmapData.map((month, monthIndex) => (
                <motion.div
                  key={month.month}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + monthIndex * 0.1 }}
                >
                  <GlassCard
                    onClick={() => setExpandedMonth(expandedMonth === monthIndex ? null : monthIndex)}
                    className="relative ml-8 cursor-pointer"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-10 top-4 w-4 h-4 rounded-full bg-primary glow-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                          <h4 className="font-mono font-semibold text-sm">Month {month.month}</h4>
                          <p className="text-xs text-muted-foreground">{month.title}</p>
                        </div>
                      </div>
                      <ChevronRight 
                        className={`w-5 h-5 text-muted-foreground transition-transform ${
                          expandedMonth === monthIndex ? "rotate-90" : ""
                        }`}
                      />
                    </div>

                    {expandedMonth === monthIndex && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="pt-3 border-t border-border space-y-3"
                      >
                        {month.tasks.map((task, taskIndex) => (
                          <motion.div
                            key={taskIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: taskIndex * 0.05 }}
                            className="flex items-start gap-3"
                          >
                            {task.completed ? (
                              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                            ) : (
                              <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                            )}
                            <div className="flex-1">
                              <p className={`text-sm ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                                {task.task}
                              </p>
                              <span className={`inline-flex mt-1 px-2 py-0.5 rounded-full text-xs border ${getPriorityColor(task.priority)}`}>
                                {task.priority}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </GlassCard>
                </motion.div>
              ))}

              {/* Goal indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative ml-8"
              >
                <div className="absolute -left-10 top-4 w-4 h-4 rounded-full bg-success glow-primary flex items-center justify-center">
                  <Flag className="w-2.5 h-2.5 text-success-foreground" />
                </div>
                <GlassCard className="bg-success/10 border-success/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
                      <Flag className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <h4 className="font-mono font-semibold text-sm text-success">Placement Ready</h4>
                      <p className="text-xs text-muted-foreground">Target: Month 4</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>

          {/* Progress Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <GlassCard>
              <h3 className="font-mono font-semibold mb-4">Roadmap Progress</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tasks Completed</span>
                  <span className="font-mono font-bold">0 / 9</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "0%" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Complete tasks to track your progress towards placement readiness.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <BottomNav />
      </div>
    </PhoneFrame>
  )
}
