"use client"

import { useEffect, useRef } from "react"

export default function BackgroundScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create just 3-4 clouds with better cloud shapes
    const clouds = [
      createRealisticCloud(15, 10, 0.9),
      createRealisticCloud(45, 5, 1.0),
      createRealisticCloud(75, 12, 0.95),
      createRealisticCloud(30, 18, 0.85),
    ]

    // Add elements to container
    clouds.forEach((el) => container.appendChild(el))

    // Check if mobile and adjust animation accordingly
    const isMobile = window.innerWidth <= 768
    
    // Animate elements
    clouds.forEach((el) => {
      animateCloud(el, isMobile)
    })

    return () => {
      clouds.forEach((el) => {
        if (container.contains(el)) {
          container.removeChild(el)
        }
      })
    }
  }, [])

  function createRealisticCloud(xPos: number, yPos: number, scale: number) {
    const cloud = document.createElement("div")
    cloud.className = "absolute pointer-events-none cloud"
    cloud.style.left = `${xPos}%`
    cloud.style.top = `${yPos}%`
    cloud.style.transform = `scale(${scale})`
    cloud.style.opacity = "0.65"
    cloud.style.zIndex = "-1"

    // Original design: Simple path-based cloud
    cloud.innerHTML = `
      <svg width="240" height="120" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="cloud-filter-${xPos}" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2" />
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.15"/>
          </filter>
        </defs>
        <g filter="url(#cloud-filter-${xPos})">
          <path d="M60,80 
                  C40,80 25,70 25,55 
                  C25,40 40,30 55,30 
                  C55,15 70,5 90,5 
                  C115,5 135,20 140,40 
                  C160,35 180,45 180,65 
                  C180,80 165,90 145,90 
                  C140,100 125,105 110,105 
                  C95,105 85,100 80,90 
                  C70,95 60,90 60,80" 
                fill="#FFFFFF" 
                stroke="rgba(0,0,0,0.08)" 
                stroke-width="1" />
        </g>
      </svg>`
    return cloud
  }

  function animateCloud(element: HTMLElement, isMobile: boolean = false) {
    let xPos = Number.parseFloat(element.style.left)
    // Vary the speed slightly for each cloud - reduced for mobile performance
    const baseSpeed = isMobile ? 0.003 : 0.008
    const speed = baseSpeed + Math.random() * (isMobile ? 0.002 : 0.004)

    // Add a gentle vertical drift for wind effect - reduced on mobile
    const yPos = Number.parseFloat(element.style.top)
    const ySpeed = Math.random() * (isMobile ? 0.0003 : 0.0008) * (Math.random() > 0.5 ? 1 : -1)
    let yDirection = 1
    let yDrift = 0
    const maxYDrift = isMobile ? 0.2 : 0.4 // Less vertical movement on mobile

    function update() {
      // Horizontal movement
      xPos += speed

      // Loop clouds back to the left when they go off-screen
      if (xPos > 100) {
        xPos = -20
      }

      // Subtle vertical drift
      yDrift += ySpeed * yDirection
      if (Math.abs(yDrift) > maxYDrift) {
        yDirection *= -1
      }

      element.style.left = `${xPos}%`
      element.style.top = `${yPos + yDrift}%`
      
      // Use slower animation on mobile to save battery
      const delay = isMobile ? 32 : 16 // ~30fps on mobile vs 60fps on desktop
      setTimeout(() => requestAnimationFrame(update), delay)
    }

    update()
  }

  return <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none" />
}
