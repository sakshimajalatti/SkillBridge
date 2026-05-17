"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Send,
  Bot,
  User,
  Sparkles
} from "lucide-react"
import { PhoneFrame } from "@/components/SkillBridge/phone-frame"
import { GlassCard } from "@/components/SkillBridge/glass-card"
import { ScreenHeader } from "@/components/SkillBridge/screen-header"
import { BottomNav } from "@/components/SkillBridge/bottom-nav"
import { TypingDots } from "@/components/SkillBridge/typing-dots"
import { DemoChip } from "@/components/SkillBridge/demo-chip"
import { chatMessages as initialMessages, suggestedPrompts, studentProfile } from "@/lib/mock-data"

interface Message {
  role: "user" | "assistant"
  content: string
}

const aiResponses: Record<string, string> = {
  "How do I improve my FAANG chances?": `Based on your profile analysis, here are the key areas to focus on for FAANG-level companies:

1. **DSA Mastery** (Critical)
   - Your current DSA score is 45%. FAANG typically requires 80%+
   - Solve 200+ LeetCode problems focusing on Arrays, Trees, Graphs, and DP
   
2. **System Design**
   - Start with basics: Load balancers, caching, databases
   - Practice designing systems like URL shortener, chat app
   
3. **Projects**
   - Build at least one scalable project deployed on AWS/GCP
   - Add monitoring, CI/CD, and proper documentation

Estimated time to FAANG readiness: 4-6 months of dedicated preparation.`,

  "What project should I build next?": `Based on your skill gaps and market demand, I recommend building a **Real-time Collaboration Tool**. Here's why:

**Why this project?**
- Addresses your weak areas: Backend, WebSockets, Deployment
- High market demand: 67% of job postings mention real-time features
- Great for interviews: Complex enough to discuss at length

**Tech Stack Suggestion:**
- Frontend: React + TypeScript (leverage your strengths)
- Backend: Node.js with Socket.io
- Database: PostgreSQL + Redis for caching
- Deployment: AWS or Vercel

**Features to include:**
1. Real-time document editing
2. User authentication
3. Presence indicators
4. Conflict resolution

This project could increase your product company eligibility by ~18%.`,

  "Why is my readiness score low?": `Let me break down your Industry Readiness Score of 74%:

**Positive Factors (+41 points):**
- Strong GitHub consistency (+12)
- High-quality frontend projects (+10)
- Hackathon participation (+8)
- Active open source contributions (+6)
- Strong React/TypeScript skills (+5)

**Negative Factors (-36 points):**
- Weak DSA performance (-15)
- No deployment experience (-9)
- Poor ATS optimization (-5)
- Limited backend exposure (-4)
- No cloud certifications (-3)

**Quick Wins to Improve:**
1. Deploy one existing project → +9 points
2. Improve resume ATS score → +5 points
3. Get AWS Cloud Practitioner → +3 points

These changes alone could push your score to 85%+.`,

  "Which skill should I prioritize?": `Based on your target role (${studentProfile.targetRole}) and current gaps, here's my priority recommendation:

**#1 Priority: Data Structures & Algorithms**
- Impact: +24% FAANG eligibility
- Your level: 45% (needs improvement)
- Time needed: 8-12 weeks
- This is critical for technical interviews at any good company

**#2 Priority: Deployment & DevOps**
- Impact: +12% overall probability
- Your level: 25%
- Time needed: 2-3 weeks
- Quick win with high ROI

**#3 Priority: Backend Development**
- Impact: +8% full-stack roles
- Your level: Limited exposure
- Time needed: 3-4 weeks
- Essential for your target role

I recommend spending 60% of your time on DSA, 25% on deployment, and 15% on backend basics for the next month.`,
}

export default function MentorPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (text?: string) => {
    const messageText = text || input
    if (!messageText.trim()) return

    // Add user message
    setMessages(prev => [...prev, { role: "user", content: messageText }])
    setInput("")
    setIsTyping(true)

    // Simulate AI thinking
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Get AI response
    const response = aiResponses[messageText] || 
      `That's a great question! Based on your profile, I'd recommend focusing on your current skill gaps. Your Industry Readiness Score is 74%, and improving your DSA skills and getting deployment experience would have the biggest impact on your placement prospects.

Would you like me to elaborate on any specific area?`

    setIsTyping(false)
    setMessages(prev => [...prev, { role: "assistant", content: response }])
  }

  return (
    <PhoneFrame>
      <div className="flex flex-col h-full">
        <ScreenHeader title="AI Mentor" showBack showNotification />

        <div className="flex-1 overflow-y-auto p-4 pb-32 space-y-4">
          <DemoChip className="mb-2" />

          {/* Messages */}
          <AnimatePresence>
            {messages.map((message, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  message.role === "assistant" 
                    ? "bg-gradient-to-br from-primary to-accent" 
                    : "bg-secondary"
                }`}>
                  {message.role === "assistant" ? (
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                </div>
                <div className={`max-w-[80%] ${message.role === "user" ? "text-right" : ""}`}>
                  <GlassCard className={`inline-block ${
                    message.role === "user" 
                      ? "bg-primary/20 border-primary/30" 
                      : ""
                  }`}>
                    <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <GlassCard className="inline-block">
                <TypingDots />
              </GlassCard>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompts */}
        {messages.length <= 1 && (
          <div className="px-4 pb-4">
            <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Suggested questions
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  className="px-3 py-1.5 rounded-full text-xs bg-secondary hover:bg-secondary/80 transition-colors border border-border"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="fixed bottom-20 left-0 right-0 md:bottom-24 md:left-1/2 md:-translate-x-1/2 md:w-[375px] p-4 glass border-t border-border">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed glow-primary"
            >
              <Send className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
        </div>

        <BottomNav />
      </div>
    </PhoneFrame>
  )
}
