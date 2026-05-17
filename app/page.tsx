"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Sparkles, ArrowRight, Play } from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlowButton } from "@/components/SkillBridge/glow-button"
import { NeuralNetworkBackground } from "@/components/SkillBridge/particle-background"

export default function SplashScreen() {
  const router = useRouter()
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <PhoneFrame>
      <div className="relative min-h-full flex flex-col items-center justify-center p-6 overflow-hidden">
        <NeuralNetworkBackground />
        
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Logo */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="relative mb-8"
              >
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
                  <Brain className="w-12 h-12 text-primary-foreground" />
                </div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-accent blur-xl opacity-50"
                />
              </motion.div>

              {/* App Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-mono text-4xl font-bold mb-2"
              >
                <span className="gradient-text">SkillBridge</span>
                <span className="text-foreground"> AI</span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-muted-foreground text-base max-w-xs mb-12 leading-relaxed"
              >
                Know your placement readiness before companies do.
              </motion.p>

              {/* Feature highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap justify-center gap-2 mb-12"
              >
                {["Evidence-Based", "AI-Powered", "Real-Time"].map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    <Sparkles className="w-3 h-3 inline mr-1" />
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="w-full space-y-3"
              >
                <GlowButton
                  fullWidth
                  onClick={() => router.push("/login")}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </GlowButton>
                
                <GlowButton
                  variant="secondary"
                  fullWidth
                  onClick={() => router.push("/dashboard")}
                >
                  <Play className="w-4 h-4" />
                  Explore Demo
                </GlowButton>
              </motion.div>

              {/* Bottom text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-8 text-xs text-muted-foreground"
              >
                Trusted by 10,000+ engineering students
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PhoneFrame>
  )
}
