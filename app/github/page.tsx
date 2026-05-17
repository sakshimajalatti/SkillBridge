"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Github, 
  Search, 
  Star, 
  GitFork,
  Flame,
  Code2,
  Users,
  Activity,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlassCard } from "@/components/SkillBridge/glass-card"
import { GlowButton } from "@/components/SkillBridge/glow-button"
import { ScreenHeader } from "@/components/SkillBridge/screen-header"
import { BottomNav } from "@/components/SkillBridge/bottom-nav"
import { ScoreRing } from "@/components/SkillBridge/score-ring"
import { DemoChip } from "@/components/SkillBridge/demo-chip"
import { githubStats, studentProfile } from "@/lib/mock-data"

export default function GitHubPage() {
  const [username, setUsername] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const startAnalysis = () => {
    if (!username.trim()) {
      setUsername(studentProfile.githubUsername)
    }
    setIsAnalyzing(true)
  }

  useEffect(() => {
    if (isAnalyzing) {
      const timer = setTimeout(() => {
        setIsAnalyzing(false)
        setShowResults(true)
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [isAnalyzing])

  // Generate contribution heatmap
  const renderContributionHeatmap = () => {
    const weeks = 15
    const days = 7
    
    return (
      <div className="flex gap-1 overflow-x-auto pb-2">
        {Array.from({ length: weeks }).map((_, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {Array.from({ length: days }).map((_, dayIndex) => {
              const count = Math.floor(Math.random() * 8)
              const opacity = count === 0 ? 0.1 : 0.2 + (count / 8) * 0.8
              return (
                <motion.div
                  key={dayIndex}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (weekIndex * 7 + dayIndex) * 0.01 }}
                  className="w-3 h-3 rounded-sm"
                  style={{
                    backgroundColor: `oklch(0.65 0.25 145 / ${opacity})`,
                  }}
                />
              )
            })}
          </div>
        ))}
      </div>
    )
  }

  return (
    <PhoneFrame>
      <div className="min-h-full pb-24">
        <ScreenHeader title="GitHub Analyzer" showBack showNotification />

        <div className="p-4 space-y-6">
          <DemoChip className="mb-2" />

          {/* Evidence-based message */}
          <GlassCard className="bg-primary/5 border-primary/20">
            <p className="text-xs text-center text-primary italic">
              Evidence-Based Scoring reduces self-assessment bias
            </p>
          </GlassCard>

          <AnimatePresence mode="wait">
            {!showResults && !isAnalyzing && (
              <motion.div
                key="input"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <GlassCard className="flex flex-col items-center py-8">
                  <div className="w-16 h-16 rounded-2xl bg-foreground/10 flex items-center justify-center mb-4">
                    <Github className="w-8 h-8" />
                  </div>
                  <h3 className="font-mono font-semibold text-lg mb-2">Connect GitHub</h3>
                  <p className="text-sm text-muted-foreground text-center mb-6 max-w-xs">
                    Enter your GitHub username to analyze your coding activity and contributions.
                  </p>
                  
                  <div className="w-full relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder={studentProfile.githubUsername}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>

                  <GlowButton fullWidth onClick={startAnalysis}>
                    Analyze Profile
                    <ArrowRight className="w-4 h-4" />
                  </GlowButton>
                </GlassCard>
              </motion.div>
            )}

            {isAnalyzing && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <GlassCard className="flex flex-col items-center py-12">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary mb-6"
                  />
                  <h3 className="font-mono font-semibold text-lg mb-2">Analyzing GitHub...</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Fetching repositories...
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      Analyzing contributions...
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      Calculating scores...
                    </motion.p>
                  </div>
                </GlassCard>
              </motion.div>
            )}

            {showResults && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                {/* Score Summary */}
                <div className="grid grid-cols-3 gap-3">
                  <GlassCard className="flex flex-col items-center py-4">
                    <ScoreRing score={githubStats.codingMaturityScore} size="sm" />
                    <p className="text-xs text-muted-foreground mt-2 text-center">Coding Maturity</p>
                  </GlassCard>
                  <GlassCard className="flex flex-col items-center py-4">
                    <ScoreRing score={githubStats.collaborationIndex} size="sm" />
                    <p className="text-xs text-muted-foreground mt-2 text-center">Collaboration</p>
                  </GlassCard>
                  <GlassCard className="flex flex-col items-center py-4">
                    <ScoreRing score={githubStats.practicalExposure} size="sm" />
                    <p className="text-xs text-muted-foreground mt-2 text-center">Practical</p>
                  </GlassCard>
                </div>

                {/* Quick Stats */}
                <GlassCard>
                  <h3 className="font-medium text-sm mb-4">Profile Overview</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-mono text-lg font-bold">{githubStats.totalRepos}</p>
                        <p className="text-xs text-muted-foreground">Repositories</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-warning/20 flex items-center justify-center">
                        <Star className="w-5 h-5 text-warning" />
                      </div>
                      <div>
                        <p className="font-mono text-lg font-bold">{githubStats.totalStars}</p>
                        <p className="text-xs text-muted-foreground">Stars</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                        <GitFork className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-mono text-lg font-bold">{githubStats.totalForks}</p>
                        <p className="text-xs text-muted-foreground">Forks</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
                        <Activity className="w-5 h-5 text-success" />
                      </div>
                      <div>
                        <p className="font-mono text-lg font-bold">{githubStats.contributions}</p>
                        <p className="text-xs text-muted-foreground">Contributions</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                {/* Coding Streaks */}
                <GlassCard>
                  <div className="flex items-center gap-2 mb-4">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <h3 className="font-medium text-sm">Coding Streaks</h3>
                  </div>
                  <div className="flex gap-6">
                    <div>
                      <p className="font-mono text-2xl font-bold text-orange-500">
                        {githubStats.streak}
                      </p>
                      <p className="text-xs text-muted-foreground">Current Streak</p>
                    </div>
                    <div>
                      <p className="font-mono text-2xl font-bold gradient-text">
                        {githubStats.longestStreak}
                      </p>
                      <p className="text-xs text-muted-foreground">Longest Streak</p>
                    </div>
                  </div>
                </GlassCard>

                {/* Contribution Heatmap */}
                <GlassCard>
                  <h3 className="font-medium text-sm mb-4">Contribution Activity</h3>
                  {renderContributionHeatmap()}
                  <div className="flex items-center justify-end gap-1 mt-2 text-xs text-muted-foreground">
                    <span>Less</span>
                    {[0.1, 0.3, 0.5, 0.7, 1].map((opacity, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-sm"
                        style={{
                          backgroundColor: `oklch(0.65 0.25 145 / ${opacity})`,
                        }}
                      />
                    ))}
                    <span>More</span>
                  </div>
                </GlassCard>

                {/* Language Distribution */}
                <GlassCard>
                  <h3 className="font-medium text-sm mb-4">Language Distribution</h3>
                  <div className="space-y-3">
                    {githubStats.languages.map((lang, i) => (
                      <div key={lang.name} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center gap-2">
                            <span
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: lang.color }}
                            />
                            {lang.name}
                          </span>
                          <span className="text-muted-foreground">{lang.percentage}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-1.5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${lang.percentage}%` }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: lang.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* New Scan Button */}
                <GlowButton 
                  variant="secondary" 
                  fullWidth 
                  onClick={() => {
                    setShowResults(false)
                    setUsername("")
                  }}
                >
                  Analyze Another Profile
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
