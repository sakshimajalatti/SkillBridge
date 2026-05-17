"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { 
  User,
  Mail,
  Building2,
  GraduationCap,
  Github,
  Linkedin,
  Target,
  ChevronRight,
  Settings,
  HelpCircle,
  LogOut,
  FileText,
  BarChart3,
  Clock,
  Users,
  Cpu,
  Shield
} from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlassCard } from "@/components/SkillBridge/glass-card"
import { ScreenHeader } from "@/components/SkillBridge/screen-header"
import { BottomNav } from "@/components/SkillBridge/bottom-nav"
import { ScoreRing } from "@/components/SkillBridge/score-ring"
import { DemoChip } from "@/components/SkillBridge/demo-chip"
import { studentProfile, industryReadinessScore } from "@/lib/mock-data"

const quickLinks = [
  { icon: FileText, label: "Resume Scanner", href: "/scanner" },
  { icon: Github, label: "GitHub Analyzer", href: "/github" },
  { icon: Target, label: "Role Analysis", href: "/roles" },
  { icon: Clock, label: "Progress Timeline", href: "/progress" },
  { icon: Users, label: "Leaderboard", href: "/leaderboard" },
  { icon: Cpu, label: "Architecture", href: "/architecture" },
]

const settingsLinks = [
  { icon: Settings, label: "App Settings", href: "#" },
  { icon: HelpCircle, label: "Help & Support", href: "#" },
  { icon: Shield, label: "Privacy Policy", href: "#" },
]

export default function ProfilePage() {
  const router = useRouter()

  return (
    <PhoneFrame>
      <div className="min-h-full pb-24">
        <ScreenHeader title="Profile" showNotification />

        <div className="p-4 space-y-6">
          <DemoChip className="mb-2" />

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassCard className="flex flex-col items-center py-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-2xl font-bold mb-4">
                {studentProfile.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h2 className="font-mono font-semibold text-lg">{studentProfile.name}</h2>
              <p className="text-sm text-muted-foreground mb-4">{studentProfile.email}</p>
              
              <div className="flex items-center gap-6 py-4 border-t border-b border-border w-full justify-center">
                <div className="text-center">
                  <p className="font-mono text-xl font-bold gradient-text">
                    {industryReadinessScore.overall}%
                  </p>
                  <p className="text-xs text-muted-foreground">Readiness</p>
                </div>
                <div className="text-center">
                  <p className="font-mono text-xl font-bold">
                    {industryReadinessScore.percentile}%
                  </p>
                  <p className="text-xs text-muted-foreground">Percentile</p>
                </div>
                <div className="text-center">
                  <p className="font-mono text-xl font-bold text-success">
                    {industryReadinessScore.trend}
                  </p>
                  <p className="text-xs text-muted-foreground">Growth</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Profile Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard>
              <h3 className="font-mono font-semibold mb-4">Profile Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">University</p>
                    <p className="text-sm font-medium">KLS GOGTE INTITUTE OF TECHNOLOGY</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Branch & Year</p>
                    <p className="text-sm font-medium">{studentProfile.branch} - {studentProfile.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">CGPA</p>
                    <p className="text-sm font-medium">{studentProfile.cgpa} / 10</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <Target className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Target Role</p>
                    <p className="text-sm font-medium">{studentProfile.targetRole}</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Connected Accounts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard>
              <h3 className="font-mono font-semibold mb-4">Connected Accounts</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5" />
                    <span className="text-sm">{studentProfile.githubUsername}</span>
                  </div>
                  <span className="text-xs text-success">Connected</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">{studentProfile.linkedIn}</span>
                  </div>
                  <span className="text-xs text-success">Connected</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-mono font-semibold mb-3">Quick Access</h3>
            <div className="grid grid-cols-3 gap-3">
              {quickLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  onClick={() => router.push(link.href)}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl glass-card hover:border-primary/50 transition-colors"
                >
                  <link.icon className="w-5 h-5 text-primary" />
                  <span className="text-xs text-muted-foreground text-center">{link.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard>
              <div className="space-y-1">
                {settingsLinks.map((link, i) => (
                  <button
                    key={link.label}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <link.icon className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">{link.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                ))}
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-destructive/10 transition-colors text-destructive">
                  <LogOut className="w-5 h-5" />
                  <span className="text-sm">Sign Out</span>
                </button>
              </div>
            </GlassCard>
          </motion.div>

          {/* Demo Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-center text-xs text-muted-foreground">
              SkillBridge AI Demo v1.0 | Frontend Prototype
            </p>
          </motion.div>
        </div>

        <BottomNav />
      </div>
    </PhoneFrame>
  )
}
