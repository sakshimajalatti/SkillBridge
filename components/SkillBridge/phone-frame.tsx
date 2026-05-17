"use client"

import { ReactNode } from "react"

interface PhoneFrameProps {
  children: ReactNode
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-background grid-bg">
      {/* Desktop: Show phone frame */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Phone frame */}
          <div className="relative w-[375px] h-[812px] bg-card rounded-[3rem] shadow-2xl border-4 border-border overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-background rounded-b-2xl z-50" />
            
            {/* Screen content */}
            <div className="h-full w-full overflow-hidden pt-8">
              <div className="h-full overflow-y-auto scrollbar-hide">
                {children}
              </div>
            </div>
            
            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/30 rounded-full" />
          </div>
          
          {/* Glow effect behind phone */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-full scale-110" />
          </div>
        </div>
      </div>
      
      {/* Mobile: Full screen */}
      <div className="md:hidden w-full h-screen overflow-y-auto scrollbar-hide">
        {children}
      </div>
    </div>
  )
}
