"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Code2,
  Layers,
  Brain,
  Shield,
  Server,
  CheckCircle,
  XCircle,
  ChevronRight
} from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlassCard } from "@/components/SkillBridge/glass-card"
import { ScreenHeader } from "@/components/SkillBridge/screen-header"
import { BottomNav } from "@/components/SkillBridge/bottom-nav"
import { ScoreRing } from "@/components/SkillBridge/score-ring"
import { DemoChip } from "@/components/SkillBridge/demo-chip"
import { roleRequirements, studentProfile } from "@/lib/mock-data"

const roleIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Frontend Developer": Code2,
  "Full Stack Developer": Layers,
  "AI/ML Engineer": Brain,
  "DevOps Engineer": Server,
  "Cybersecurity Analyst": Shield,
}

const roleColors: Record<string, string> = {
  "Frontend Developer": "from-blue-500 to-cyan-500",
  "Full Stack Developer": "from-purple-500 to-pink-500",
  "AI/ML Engineer": "from-green-500 to-emerald-500",
  "DevOps Engineer": "from-orange-500 to-amber-500",
  "Cybersecurity Analyst": "from-red-500 to-rose-500",
}

export default function RolesPage() {
  const [selectedRole, setSelectedRole] = useState(studentProfile.targetRole)

  const roleData = roleRequirements[selectedRole as keyof typeof roleRequirements]

  return (
    <PhoneFrame>
      <div className="min-h-full pb-24">
        <ScreenHeader title="Role-Specific Analysis" showBack showNotification />

        <div className="p-4 space-y-6">
          <DemoChip className="mb-2" />

          {/* Role Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="font-mono font-semibold mb-3">Select Target Role</h3>
            <div className="flex flex-wrap gap-2">
              {Object.keys(roleRequirements).map((role) => {
                const Icon = roleIcons[role] || Code2
                const isSelected = role === selectedRole
                return (
                  <motion.button
                    key={role}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedRole(role)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all ${
                      isSelected 
                        ? "bg-primary text-primary-foreground" 
                        : "glass-card hover:border-primary/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {role}
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

          {/* Role Readiness Score */}
          <motion.div
            key={selectedRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard glow className="flex flex-col items-center py-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${roleColors[selectedRole]} flex items-center justify-center mb-4`}>
                {(() => {
                  const Icon = roleIcons[selectedRole] || Code2
                  return <Icon className="w-8 h-8 text-white" />
                })()}
              </div>
              <h3 className="font-mono font-semibold text-lg mb-4">{selectedRole}</h3>
              <ScoreRing 
                score={roleData.readiness} 
                size="md"
                label="Role Readiness"
              />
            </GlassCard>
          </motion.div>

          {/* Required Skills */}
          <motion.div
            key={`skills-${selectedRole}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard>
              <h3 className="font-mono font-semibold mb-4">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {roleData.skills.map((skill, i) => {
                  const isMissing = roleData.missingSkills.some(s => 
                    skill.toLowerCase().includes(s.toLowerCase().split(" ")[0])
                  )
                  return (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium ${
                        isMissing 
                          ? "bg-destructive/20 text-destructive border border-destructive/30" 
                          : "bg-success/20 text-success border border-success/30"
                      }`}
                    >
                      {isMissing ? (
                        <XCircle className="w-3 h-3" />
                      ) : (
                        <CheckCircle className="w-3 h-3" />
                      )}
                      {skill}
                    </motion.span>
                  )
                })}
              </div>
            </GlassCard>
          </motion.div>

          {/* Missing Skills */}
          <motion.div
            key={`missing-${selectedRole}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard>
              <h3 className="font-mono font-semibold mb-4">Skills to Acquire</h3>
              <div className="space-y-3">
                {roleData.missingSkills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-destructive/10 border border-destructive/20"
                  >
                    <div className="flex items-center gap-3">
                      <XCircle className="w-4 h-4 text-destructive" />
                      <span className="text-sm">{skill}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Comparison Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard className="bg-primary/5 border-primary/20">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-primary">Tip:</span> Changing your role dynamically updates your readiness score, required skills, and personalized roadmap recommendations.
              </p>
            </GlassCard>
          </motion.div>
        </div>

        <BottomNav />
      </div>
    </PhoneFrame>
  )
}
