"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Github, Mail, Chrome, ArrowLeft, Code2, Database, Cloud, Cpu, Layers, Terminal } from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlassCard } from "@/components/SkillBridge/glass-card"
import { GlowButton } from "@/components/SkillBridge/glow-button"

const floatingIcons = [
  { Icon: Code2, x: "10%", y: "15%", delay: 0 },
  { Icon: Database, x: "80%", y: "10%", delay: 0.2 },
  { Icon: Cloud, x: "85%", y: "40%", delay: 0.4 },
  { Icon: Cpu, x: "15%", y: "50%", delay: 0.6 },
  { Icon: Layers, x: "75%", y: "70%", delay: 0.8 },
  { Icon: Terminal, x: "20%", y: "80%", delay: 1 },
]

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")

  return (
    <PhoneFrame>
      <div className="relative min-h-full p-6 overflow-hidden">
        {/* Floating tech icons */}
        {floatingIcons.map(({ Icon, x, y, delay }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ delay, duration: 0.5 }}
            style={{ left: x, top: y }}
            className="absolute"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon className="w-8 h-8 text-primary/30" />
            </motion.div>
          </motion.div>
        ))}

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-8"
        >
          <h1 className="font-mono text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground text-sm">
            Sign in to continue your journey
          </p>
        </motion.div>

        {/* Social login buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3 mb-6"
        >
          <GlassCard
            onClick={() => router.push("/onboarding")}
            className="flex items-center gap-4 cursor-pointer hover:border-primary/50 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-foreground/10 flex items-center justify-center">
              <Chrome className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm">Continue with Google</p>
              <p className="text-xs text-muted-foreground">Quick & secure sign in</p>
            </div>
          </GlassCard>

          <GlassCard
            onClick={() => router.push("/onboarding")}
            className="flex items-center gap-4 cursor-pointer hover:border-primary/50 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-foreground/10 flex items-center justify-center">
              <Github className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm">Continue with GitHub</p>
              <p className="text-xs text-muted-foreground">Import your coding data</p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* Email login */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="email"
              placeholder="student@university.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          <GlowButton
            fullWidth
            onClick={() => router.push("/onboarding")}
          >
            Continue with Email
          </GlowButton>
        </motion.div>

        {/* Terms */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-muted-foreground mt-8"
        >
          By continuing, you agree to our{" "}
          <span className="text-primary">Terms of Service</span> and{" "}
          <span className="text-primary">Privacy Policy</span>
        </motion.p>

        {/* Demo notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <GlassCard className="text-center">
            <p className="text-xs text-muted-foreground">
              Empowering Careers Through Skills and Smart Resumes.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </PhoneFrame>
  )
}
