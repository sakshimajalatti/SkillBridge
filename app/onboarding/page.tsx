"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, Github, BarChart3, Target, TrendingUp, Map, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlowButton } from "@/components/SkillBridge/glow-button"
import { onboardingSlides } from "@/lib/mock-data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Github,
  BarChart3,
  Target,
  TrendingUp,
  Map,
}

export default function OnboardingPage() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    if (currentSlide < onboardingSlides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      router.push("/dashboard")
    }
  }

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const slide = onboardingSlides[currentSlide]
  const Icon = iconMap[slide.icon] || FileText

  return (
    <PhoneFrame>
      <div className="relative min-h-full flex flex-col p-6">
        {/* Skip button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => router.push("/dashboard")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Skip
          </button>
        </div>

        {/* Slide content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative mb-8"
              >
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30">
                  <Icon className="w-16 h-16 text-primary" />
                </div>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-3xl bg-primary/20 blur-2xl"
                />
              </motion.div>

              {/* Title */}
              <h2 className="font-mono text-2xl font-bold mb-4 gradient-text">
                {slide.title}
              </h2>

              {/* Description */}
              <p className="text-muted-foreground text-base max-w-xs leading-relaxed">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {onboardingSlides.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                width: index === currentSlide ? 24 : 8,
                backgroundColor: index === currentSlide 
                  ? "oklch(0.65 0.25 265)" 
                  : "oklch(0.25 0.04 270)",
              }}
              className="h-2 rounded-full"
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center gap-3">
          {currentSlide > 0 && (
            <GlowButton
              variant="secondary"
              onClick={handlePrev}
              className="w-12 h-12 p-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </GlowButton>
          )}
          
          <GlowButton
            fullWidth
            onClick={handleNext}
          >
            {currentSlide === onboardingSlides.length - 1 ? (
              <>
                Get Started
                <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <>
                Next
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </GlowButton>
        </div>
      </div>
    </PhoneFrame>
  )
}
