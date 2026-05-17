"use client"

import { motion } from "framer-motion"
import { 
  Cpu,
  FileText,
  Github,
  Award,
  Code2,
  Brain,
  BarChart3,
  Map,
  ArrowDown,
  Database,
  Cog,
  LineChart,
  Lightbulb,
  Target
} from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlassCard } from "@/components/SkillBridge/glass-card"
import { ScreenHeader } from "@/components/SkillBridge/screen-header"
import { BottomNav } from "@/components/SkillBridge/bottom-nav"
import { DemoChip } from "@/components/SkillBridge/demo-chip"

const inputLayers = [
  { icon: FileText, label: "Resume PDF", color: "from-blue-500 to-cyan-500" },
  { icon: Github, label: "GitHub", color: "from-gray-600 to-gray-800" },
  { icon: Award, label: "Certifications", color: "from-yellow-500 to-amber-600" },
  { icon: Code2, label: "Projects", color: "from-green-500 to-emerald-600" },
]

const processingLayers = [
  { icon: FileText, label: "OCR Parser", description: "Text extraction & parsing" },
  { icon: BarChart3, label: "GitHub Analytics", description: "Activity & contribution analysis" },
  { icon: Lightbulb, label: "Recommendation Engine", description: "Personalized suggestions" },
  { icon: Brain, label: "Skill Intelligence", description: "NLP skill extraction" },
]

const outputLayers = [
  { icon: Target, label: "Readiness Score", color: "text-primary" },
  { icon: LineChart, label: "Placement Probability", color: "text-success" },
  { icon: BarChart3, label: "Skill Gap Analysis", color: "text-warning" },
  { icon: Map, label: "Career Roadmap", color: "text-accent" },
]

export default function ArchitecturePage() {
  return (
    <PhoneFrame>
      <div className="min-h-full pb-24">
        <ScreenHeader title="Technical Architecture" showBack showNotification />

        <div className="p-4 space-y-6">
          <DemoChip className="mb-2" />

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassCard className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Cpu className="w-5 h-5 text-primary" />
                <h3 className="font-mono font-semibold">Weighted Scoring Engine</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Evidence-Based Employability Intelligence Pipeline
              </p>
            </GlassCard>
          </motion.div>

          {/* Input Layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
              Input Layer
            </h4>
            <GlassCard>
              <div className="grid grid-cols-4 gap-3">
                {inputLayers.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-2`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-center text-muted-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="flex flex-col items-center">
              <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
              <span className="text-xs text-muted-foreground mt-1">Data Flow</span>
            </div>
          </motion.div>

          {/* Processing Layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
              Processing Layer
            </h4>
            <GlassCard>
              <div className="space-y-3">
                {processingLayers.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <div className="flex flex-col items-center">
              <Cog className="w-6 h-6 text-accent animate-spin" style={{ animationDuration: "3s" }} />
              <span className="text-xs text-muted-foreground mt-1">AI Processing</span>
            </div>
          </motion.div>

          {/* Core Engine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <GlassCard glow className="text-center py-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-mono font-semibold mb-1">Weighted Scoring Engine</h4>
              <p className="text-xs text-muted-foreground">
                Multi-factor analysis with role-specific weighting
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <div className="text-center">
                  <p className="font-mono text-lg font-bold text-primary">12+</p>
                  <p className="text-xs text-muted-foreground">Factors</p>
                </div>
                <div className="text-center">
                  <p className="font-mono text-lg font-bold text-accent">5</p>
                  <p className="text-xs text-muted-foreground">Roles</p>
                </div>
                <div className="text-center">
                  <p className="font-mono text-lg font-bold text-success">87%</p>
                  <p className="text-xs text-muted-foreground">Accuracy</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center"
          >
            <div className="flex flex-col items-center">
              <ArrowDown className="w-6 h-6 text-success animate-bounce" />
              <span className="text-xs text-muted-foreground mt-1">Output</span>
            </div>
          </motion.div>

          {/* Output Layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h4 className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
              Output Layer
            </h4>
            <GlassCard>
              <div className="grid grid-cols-2 gap-3">
                {outputLayers.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="text-xs font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <GlassCard className="bg-muted/30">
              <h4 className="font-mono font-semibold mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Framer Motion", "Recharts", "TailwindCSS", "React"].map((tech) => (
                  <span key={tech} className="px-2 py-1 rounded-full text-xs bg-secondary border border-border">
                    {tech}
                  </span>
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
