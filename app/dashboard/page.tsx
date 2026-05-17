"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { 
  FileSearch, 
  Github, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Eye, 
  Map, 
  MessageCircle,
  Trophy,
  Medal,
  Bell,
  Cpu,
  Users,
  Clock,
  ChevronRight,
  Plus,
  Minus
} from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlassCard } from "@/components/SkillBridge/glass-card"
import { ScoreRing } from "@/components/SkillBridge/score-ring"
import { BottomNav } from "@/components/SkillBridge/bottom-nav"
import { DemoChip } from "@/components/SkillBridge/demo-chip"
import { 
  studentProfile, 
  industryReadinessScore, 
  scoreBreakdown,
  placementProbability
} from "@/lib/mock-data"

const quickAccessItems = [
  { icon: FileSearch, label: "Resume Scanner", href: "/scanner", color: "from-blue-500 to-cyan-500" },
  { icon: Github, label: "GitHub Analyzer", href: "/github", color: "from-gray-600 to-gray-800" },
  { icon: Target, label: "Skill Gaps", href: "/skills", color: "from-red-500 to-orange-500" },
  { icon: TrendingUp, label: "Placement", href: "/placement", color: "from-green-500 to-emerald-500" },
  { icon: BarChart3, label: "Market Sync", href: "/market", color: "from-purple-500 to-pink-500" },
  { icon: Eye, label: "Recruiter View", href: "/recruiter", color: "from-amber-500 to-yellow-500" },
  { icon: Map, label: "Roadmap", href: "/roadmap", color: "from-indigo-500 to-violet-500" },
  { icon: MessageCircle, label: "AI Mentor", href: "/mentor", color: "from-teal-500 to-cyan-500" },
  { icon: Trophy, label: "Achievements", href: "/achievements", color: "from-yellow-500 to-orange-500" },
  { icon: Medal, label: "Leaderboard", href: "/leaderboard", color: "from-rose-500 to-pink-500" },
  { icon: Bell, label: "Insights", href: "/notifications", color: "from-sky-500 to-blue-500" },
  { icon: Cpu, label: "Architecture", href: "/architecture", color: "from-slate-500 to-zinc-600" },
]

export default function DashboardPage() {
  const router = useRouter()

  return (
    <PhoneFrame>
      <div className="min-h-full pb-24">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass sticky top-0 z-40 px-4 py-3"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Welcome back,</p>
              <h1 className="font-mono font-semibold text-lg">{studentProfile.name.split(" ")[0]}</h1>
            </div>
            <div className="flex items-center gap-2">
              <DemoChip />
              <button
                onClick={() => router.push("/notifications")}
                className="relative w-10 h-10 rounded-xl bg-secondary flex items-center justify-center"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
              </button>
            </div>
          </div>
        </motion.header>

        <div className="p-4 space-y-6">
          {/* Main Score Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard glow className="flex flex-col items-center py-6">
              <ScoreRing 
                score={industryReadinessScore.overall} 
                size="lg"
                label="Industry Readiness"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-sm text-muted-foreground mt-4 text-center"
              >
                You are ahead of <span className="text-primary font-semibold">{industryReadinessScore.percentile}%</span> of 2nd-year CS students
              </motion.p>
              <div className="flex items-center gap-4 mt-4">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Trend</p>
                  <p className="text-sm font-medium text-success">{industryReadinessScore.trend}</p>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Confidence</p>
                  <p className="text-sm font-medium">{industryReadinessScore.confidence}%</p>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Updated</p>
                  <p className="text-sm font-medium">{industryReadinessScore.lastUpdated}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Why This Score */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-mono font-semibold">Why This Score?</h2>
              <button 
                onClick={() => router.push("/skills")}
                className="text-xs text-primary flex items-center gap-1"
              >
                View Details <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            <GlassCard>
              <p className="text-xs text-muted-foreground mb-3 italic">
                Evidence-Based Scoring reduces self-assessment bias
              </p>
              <div className="space-y-2">
                {scoreBreakdown.positive.slice(0, 3).map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-lg bg-success/20 flex items-center justify-center">
                      <Plus className="w-3 h-3 text-success" />
                    </div>
                    <span className="flex-1 text-sm">{item.factor}</span>
                    <span className="text-sm font-mono text-success">+{item.impact}</span>
                  </motion.div>
                ))}
                {scoreBreakdown.negative.slice(0, 3).map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-lg bg-destructive/20 flex items-center justify-center">
                      <Minus className="w-3 h-3 text-destructive" />
                    </div>
                    <span className="flex-1 text-sm">{item.factor}</span>
                    <span className="text-sm font-mono text-destructive">{item.impact}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Placement Probability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-mono font-semibold">Placement Probability</h2>
              <button 
                onClick={() => router.push("/placement")}
                className="text-xs text-primary flex items-center gap-1"
              >
                View All <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(placementProbability).map(([key, data], i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <GlassCard className="text-center">
                    <p className="text-xs text-muted-foreground capitalize mb-1">
                      {key === "faang" ? "FAANG-Level" : `${key} Companies`}
                    </p>
                    <p className="font-mono text-2xl font-bold gradient-text">
                      {data.probability}%
                    </p>
                    <div className="w-full bg-muted rounded-full h-1.5 mt-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${data.probability}%` }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Access Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="font-mono font-semibold mb-3">Quick Access</h2>
            <div className="grid grid-cols-4 gap-3">
              {quickAccessItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.03 }}
                  onClick={() => router.push(item.href)}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl glass-card hover:border-primary/50 transition-all"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-center text-muted-foreground line-clamp-1">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Role Quick Switch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard 
              onClick={() => router.push("/roles")}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Target Role: {studentProfile.targetRole}</p>
                  <p className="text-xs text-muted-foreground">Tap to change or see role-specific analysis</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </GlassCard>
          </motion.div>

          {/* Progress Timeline Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <GlassCard
              onClick={() => router.push("/progress")}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-sm">Your Progress Timeline</p>
                  <p className="text-xs text-muted-foreground">48% → 74% in 8 weeks</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </GlassCard>
          </motion.div>
        </div>

        <BottomNav />
      </div>
    </PhoneFrame>
  )
}
