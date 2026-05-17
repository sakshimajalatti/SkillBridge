"use client"

import { motion } from "framer-motion"

export function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.1,
          }}
          className="w-2 h-2 rounded-full bg-primary"
        />
      ))}
    </div>
  )
}
