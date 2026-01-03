"use client"

import { useMobileOptimized } from "@/hooks/use-mobile-optimized"
import BackgroundScene from "@/components/background_scene"
import OrganicElements from "@/components/organic-elements"
import PaperTexture from "@/components/paper-texture"

export default function OptimizedBackground() {
  const { isMobile, isLowPerformance } = useMobileOptimized()

  return (
    <>
      <PaperTexture />
      {/* Only show complex animations on desktop/high-performance devices */}
      {!isLowPerformance && <BackgroundScene />}
      {!isMobile && <OrganicElements />}
    </>
  )
}
