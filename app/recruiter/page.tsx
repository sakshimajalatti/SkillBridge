"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Eye,
  AlertTriangle,
  CheckCircle,
  Shield,
  MessageSquare,
  Brain,
  Target,
  ThumbsUp,
  ThumbsDown,
  ToggleLeft,
  ToggleRight
} from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlassCard } from "@/components/SkillBridge/glass-card"
import { ScreenHeader } from "@/components/SkillBridge/screen-header"
import { BottomNav } from "@/components/SkillBridge/bottom-nav"
import { ScoreRing } from "@/components/SkillBridge/score-ring"
import { DemoChip } from "@/components/SkillBridge/demo-chip"
import { recruiterPerspective } from "@/lib/mock-data"

const interviewReadinessConfig = {
  technicalCommunication: { label: "Technical Communication", icon: MessageSquare },
  problemSolving: { label: "Problem Solving", icon: Brain },
  projectExplanation: { label: "Project Explanation", icon: Target },
  confidence: { label: "Overall Confidence", icon: Shield },
}

const getLevelColor = (level: string) => {
  switch (level.toLowerCase()) {
    case "strong": return "text-success bg-success/20"
    case "moderate": 
    case "medium": return "text-warning bg-warning/20"
    case "weak": return "text-destructive bg-destructive/20"
    default: return "text-muted-foreground bg-muted"
  }
}

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "high": return "border-destructive/30 bg-destructive/10"
    case "medium": return "border-warning/30 bg-warning/10"
    default: return "border-muted bg-muted/50"
  }
}

export default function RecruiterPage() {
  const [recruiterMode, setRecruiterMode] = useState(false)

  return (
    <PhoneFrame>
      <div className="min-h-full pb-24">
        <ScreenHeader title="Recruiter Perspective" showBack showNotification />

        <div className="p-4 space-y-6">
          <DemoChip className="mb-2" />

          {/* Toggle Recruiter View */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassCard 
              onClick={() => setRecruiterMode(!recruiterMode)}
              className={`cursor-pointer transition-all ${recruiterMode ? "border-primary glow-primary" : ""}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    recruiterMode ? "bg-primary text-primary-foreground" : "bg-secondary"
                  }`}>
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">View Profile as Recruiter</p>
                    <p className="text-xs text-muted-foreground">
                      {recruiterMode ? "Recruiter mode active" : "Toggle to see recruiter perspective"}
                    </p>
                  </div>
                </div>
                {recruiterMode ? (
                  <ToggleRight className="w-8 h-8 text-primary" />
                ) : (
                  <ToggleLeft className="w-8 h-8 text-muted-foreground" />
                )}
              </div>
            </GlassCard>
          </motion.div>

          {/* Recruiter Risk Index */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="flex flex-col items-center py-6">
              <ScoreRing 
                score={100 - recruiterPerspective.riskIndex} 
                size="md"
                label="Recruiter Appeal"
              />
              <div className="flex items-center gap-2 mt-4">
                <Shield className={`w-4 h-4 ${recruiterPerspective.riskIndex < 30 ? "text-success" : recruiterPerspective.riskIndex < 50 ? "text-warning" : "text-destructive"}`} />
                <span className="text-sm text-muted-foreground">
                  Risk Index: <span className="font-mono font-bold">{recruiterPerspective.riskIndex}%</span>
                </span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard>
              <div className="flex items-center gap-2 mb-4">
                <ThumbsUp className="w-4 h-4 text-success" />
                <h3 className="font-mono font-semibold">Profile Strengths</h3>
              </div>
              <div className="space-y-2">
                {recruiterPerspective.strengths.map((strength, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-sm">{strength}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Concerns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard>
              <div className="flex items-center gap-2 mb-4">
                <ThumbsDown className="w-4 h-4 text-destructive" />
                <h3 className="font-mono font-semibold">Recruiter Concerns</h3>
              </div>
              <div className="space-y-3">
                {recruiterPerspective.concerns.map((concern, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className={`flex items-start gap-3 p-3 rounded-lg border ${getSeverityColor(concern.severity)}`}
                  >
                    <AlertTriangle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      concern.severity === "high" ? "text-destructive" : "text-warning"
                    }`} />
                    <div>
                      <span className="text-sm">{concern.issue}</span>
                      <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                        concern.severity === "high" 
                          ? "bg-destructive/20 text-destructive" 
                          : "bg-warning/20 text-warning"
                      }`}>
                        {concern.severity} severity
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Interview Readiness */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard>
              <h3 className="font-mono font-semibold mb-4">Interview Readiness Snapshot</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(recruiterPerspective.interviewReadiness).map(([key, value], i) => {
                  const config = interviewReadinessConfig[key as keyof typeof interviewReadinessConfig]
                  if (!config) return null
                  const Icon = config.icon
                  
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="p-3 rounded-lg bg-secondary"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{config.label}</span>
                      </div>
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(value)}`}>
                        {value}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </GlassCard>
          </motion.div>

          {/* Pro Tip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard className="bg-accent/5 border-accent/20">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-accent">Pro Tip:</span> Adding deployment links to your projects and improving README documentation can reduce your risk index by up to 15 points.
              </p>
            </GlassCard>
          </motion.div>
        </div>

        <BottomNav />
      </div>
    </PhoneFrame>
  )
}
