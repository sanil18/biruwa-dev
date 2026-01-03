"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })

    // Backup scroll in case the first one doesn't work
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    }, 0)

    return () => clearTimeout(timeoutId)
  }, [pathname])

  return null
}
