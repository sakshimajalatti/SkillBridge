"use client"

import { motion } from "framer-motion"
import { 
  TrendingUp,
  Building2,
  Rocket,
  Briefcase,
  Crown,
  Info,
  AlertCircle
} from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlassCard } from "@/components/SkillBridge/glass-card"
import { ScreenHeader } from "@/components/SkillBridge/screen-header"
import { BottomNav } from "@/components/SkillBridge/bottom-nav"
import { DemoChip } from "@/components/SkillBridge/demo-chip"
import { placementProbability } from "@/lib/mock-data"

const companyTypes = [
  { 
    key: "startup", 
    label: "Startup Roles", 
    icon: Rocket, 
    color: "from-emerald-500 to-green-600",
    description: "Early-stage companies, high growth potential"
  },
  { 
    key: "service", 
    label: "Service Companies", 
    icon: Building2, 
    color: "from-blue-500 to-cyan-600",
    description: "TCS, Infosys, Wipro, Cognizant, etc."
  },
  { 
    key: "product", 
    label: "Product Companies", 
    icon: Briefcase, 
    color: "from-purple-500 to-pink-600",
    description: "Microsoft, Adobe, Atlassian, etc."
  },
  { 
    key: "faang", 
    label: "FAANG-Level", 
    icon: Crown, 
    color: "from-amber-500 to-orange-600",
    description: "Google, Meta, Amazon, Apple, Netflix"
  },
]

export default function PlacementPage() {
  return (
    <PhoneFrame>
      <div className="min-h-full pb-24">
        <ScreenHeader title="Placement Predictor" showBack showNotification />

        <div className="p-4 space-y-6">
          <DemoChip className="mb-2" />

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassCard className="bg-primary/5 border-primary/20">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-primary mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Predictions are based on your resume quality, GitHub activity, certifications, and skill alignment with typical hiring requirements.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Probability Cards */}
          <div className="space-y-4">
            {companyTypes.map((type, i) => {
              const data = placementProbability[type.key as keyof typeof placementProbability]
              const Icon = type.icon
              
              return (
                <motion.div
                  key={type.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <GlassCard>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium">{type.label}</h3>
                          <span className="font-mono text-2xl font-bold gradient-text">
                            {data.probability}%
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3">
                          {type.description}
                        </p>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${data.probability}%` }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                            className={`h-full rounded-full bg-gradient-to-r ${type.color}`}
                          />
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-muted-foreground">
                            Confidence: {data.confidence}%
                          </span>
                          <span className={`text-xs flex items-center gap-1 ${
                            data.trend === "up" ? "text-success" : "text-muted-foreground"
                          }`}>
                            <TrendingUp className="w-3 h-3" />
                            {data.trend === "up" ? "Improving" : "Stable"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>

          {/* AI Confidence Meter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard>
              <h3 className="font-mono font-semibold mb-4">AI Confidence Meter</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Overall Prediction Confidence</span>
                  <span className="font-mono font-bold text-primary">86%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "86%" }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent glow-primary"
                  />
                </div>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-warning/10 border border-warning/20">
                  <AlertCircle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    Prediction confidence reduced due to insufficient GitHub activity in the last 30 days. Maintain consistent coding to improve accuracy.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Improvement Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <GlassCard>
              <h3 className="font-mono font-semibold mb-4">Quick Wins to Improve</h3>
              <div className="space-y-3">
                {[
                  { action: "Complete 50 LeetCode problems", impact: "+15% FAANG probability" },
                  { action: "Deploy a project to production", impact: "+12% Product companies" },
                  { action: "Get AWS Cloud Practitioner", impact: "+8% All categories" },
                ].map((tip, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                    <span className="text-sm">{tip.action}</span>
                    <span className="text-xs text-success font-medium">{tip.impact}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <BottomNav />
      </div>
    </PhoneFrame>
  )
}
