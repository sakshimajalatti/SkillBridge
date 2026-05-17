"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  AlertCircle,
  Info,
  Sparkles,
  ArrowRight,
  X
} from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlassCard } from "@/components/SkillBridge/glass-card"
import { GlowButton } from "@/components/SkillBridge/glow-button"
import { ScreenHeader } from "@/components/SkillBridge/screen-header"
import { BottomNav } from "@/components/SkillBridge/bottom-nav"
import { ScoreRing } from "@/components/SkillBridge/score-ring"
import { DemoChip } from "@/components/SkillBridge/demo-chip"
import { resumeAnalysis } from "@/lib/mock-data"

const scanSteps = [
  "Uploading resume...",
  "Extracting text with OCR...",
  "Parsing ATS format...",
  "Detecting skills...",
  "Analyzing projects...",
  "Generating insights...",
]

export default function ScannerPage() {
  const router = useRouter()
  const [isScanning, setIsScanning] = useState(false)
  const [scanComplete, setScanComplete] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [detectedSkills, setDetectedSkills] = useState<typeof resumeAnalysis.detectedSkills>([])

  const startScan = () => {
    setIsScanning(true)
    setCurrentStep(0)
    setDetectedSkills([])
    setScanComplete(false)
  }

  useEffect(() => {
    if (!isScanning) return;

    if (currentStep < scanSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1)
        // Add skills progressively
        if (currentStep >= 3 && detectedSkills.length < resumeAnalysis.detectedSkills.length) {
          setDetectedSkills(prev => [
            ...prev, 
            resumeAnalysis.detectedSkills[prev.length]
          ])
        }
      }, 800)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setIsScanning(false)
        setScanComplete(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isScanning, currentStep, detectedSkills.length])

  const getIssueIcon = (type: string) => {
    switch (type) {
      case "error": return AlertCircle
      case "warning": return AlertTriangle
      default: return Info
    }
  }

  const getIssueColor = (type: string) => {
    switch (type) {
      case "error": return "text-destructive bg-destructive/20"
      case "warning": return "text-warning bg-warning/20"
      default: return "text-primary bg-primary/20"
    }
  }

  return (
    <PhoneFrame>
      <div className="min-h-full pb-24">
        <ScreenHeader title="AI Resume Scanner" showBack showNotification />

        <div className="p-4 space-y-6">
          <DemoChip className="mb-2" />

          {/* Upload Area or Scanning Animation */}
          <AnimatePresence mode="wait">
            {!isScanning && !scanComplete && (
              <motion.div
                key="upload"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <GlassCard className="flex flex-col items-center py-12">
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mb-6"
                  >
                    <Upload className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3 className="font-mono font-semibold text-lg mb-2">Upload Your Resume</h3>
                  <p className="text-sm text-muted-foreground text-center mb-6 max-w-xs">
                    Drop your PDF here or tap to select. AI will analyze it instantly.
                  </p>
                  <GlowButton onClick={startScan}>
                    <FileText className="w-4 h-4" />
                    Select Resume PDF
                  </GlowButton>
                </GlassCard>
              </motion.div>
            )}

            {isScanning && (
              <motion.div
                key="scanning"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <GlassCard className="relative overflow-hidden">
                  {/* Scan line effect */}
                  <motion.div
                    animate={{
                      y: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                  />
                  
                  <div className="p-6 flex flex-col items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary mb-6"
                    />
                    <h3 className="font-mono font-semibold text-lg mb-4">Scanning Resume...</h3>
                    
                    {/* Progress steps */}
                    <div className="w-full space-y-2">
                      {scanSteps.map((step, i) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ 
                            opacity: i <= currentStep ? 1 : 0.3,
                            x: 0
                          }}
                          className="flex items-center gap-3"
                        >
                          {i < currentStep ? (
                            <CheckCircle className="w-4 h-4 text-success" />
                          ) : i === currentStep ? (
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.5, repeat: Infinity }}
                              className="w-4 h-4 rounded-full bg-primary"
                            />
                          ) : (
                            <div className="w-4 h-4 rounded-full bg-muted" />
                          )}
                          <span className={`text-sm ${i <= currentStep ? "text-foreground" : "text-muted-foreground"}`}>
                            {step}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </GlassCard>

                {/* Live skill detection */}
                {detectedSkills.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4"
                  >
                    <GlassCard>
                      <h4 className="font-medium text-sm mb-3">Skills Detected</h4>
                      <div className="flex flex-wrap gap-2">
                        {detectedSkills.map((skill, i) => (
                          <motion.span
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="px-3 py-1 rounded-full text-xs bg-success/20 text-success flex items-center gap-1"
                          >
                            <CheckCircle className="w-3 h-3" />
                            {skill.name}
                          </motion.span>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>
                )}
              </motion.div>
            )}

            {scanComplete && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                {/* Score Cards */}
                <div className="grid grid-cols-3 gap-3">
                  <GlassCard className="flex flex-col items-center py-4">
                    <ScoreRing score={resumeAnalysis.atsScore} size="sm" />
                    <p className="text-xs text-muted-foreground mt-2">ATS Score</p>
                  </GlassCard>
                  <GlassCard className="flex flex-col items-center py-4">
                    <ScoreRing score={resumeAnalysis.qualityScore} size="sm" />
                    <p className="text-xs text-muted-foreground mt-2">Quality</p>
                  </GlassCard>
                  <GlassCard className="flex flex-col items-center py-4">
                    <ScoreRing score={resumeAnalysis.technicalStrength} size="sm" />
                    <p className="text-xs text-muted-foreground mt-2">Technical</p>
                  </GlassCard>
                </div>

                {/* Detected Skills */}
                <GlassCard>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-sm">Detected Skills</h3>
                    <span className="text-xs text-muted-foreground">
                      {resumeAnalysis.detectedSkills.length} found
                    </span>
                  </div>
                  <div className="space-y-2">
                    {resumeAnalysis.detectedSkills.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="flex-1 text-sm">{skill.name}</span>
                        <div className="w-20 bg-muted rounded-full h-1.5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.confidence}%` }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="h-full rounded-full bg-primary"
                          />
                        </div>
                        <span className="text-xs text-muted-foreground w-10">{skill.confidence}%</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Projects Identified */}
                <GlassCard>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">Projects Identified</span>
                  </div>
                  <p className="text-2xl font-mono font-bold gradient-text">
                    {resumeAnalysis.projectsIdentified}
                  </p>
                </GlassCard>

                {/* Issues Found */}
                <GlassCard>
                  <h3 className="font-medium text-sm mb-3">Issues Found</h3>
                  <div className="space-y-2">
                    {resumeAnalysis.issues.map((issue, i) => {
                      const Icon = getIssueIcon(issue.type)
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${getIssueColor(issue.type)}`}>
                            <Icon className="w-3 h-3" />
                          </div>
                          <span className="flex-1 text-sm">{issue.message}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </GlassCard>

                {/* CTA */}
                <GlowButton fullWidth onClick={() => router.push("/skills")}>
                  Generate Employability Analysis
                  <ArrowRight className="w-4 h-4" />
                </GlowButton>

                <GlowButton 
                  variant="secondary" 
                  fullWidth 
                  onClick={() => {
                    setScanComplete(false)
                    setIsScanning(false)
                  }}
                >
                  <X className="w-4 h-4" />
                  Scan Another Resume
                </GlowButton>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <BottomNav />
      </div>
    </PhoneFrame>
  )
}