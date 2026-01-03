"use client"

import { useState, useEffect } from "react"

export function useMobileOptimized() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLowPerformance, setIsLowPerformance] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent)
      const isSmallScreen = window.innerWidth < 768

      setIsMobile(isMobileDevice || isSmallScreen)

      // Check for low-performance indicators
      const isLowPerf = isMobileDevice || navigator.hardwareConcurrency <= 4 || navigator.deviceMemory <= 4
      setIsLowPerformance(isLowPerf)
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  return { isMobile, isLowPerformance }
}
