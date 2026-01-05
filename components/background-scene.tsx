"use client"

import { useEffect, useRef } from "react"

export default function BackgroundScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create just 3-4 clouds with better cloud shapes
    const elements = [
      createRealisticCloud(15, 10, 0.5),
      createRealisticCloud(45, 5, 0.6),
      createRealisticCloud(75, 12, 0.55),
      createRealisticCloud(30, 18, 0.45),
    ]

    // Add elements to container
    elements.forEach((el) => container.appendChild(el))

    // Animate elements
    elements.forEach((el) => {
      animateCloud(el)
    })

    return () => {
      elements.forEach((el) => {
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
    cloud.style.opacity = "0.4"
    cloud.style.zIndex = "-1"

    // Create a more realistic cloud shape
    cloud.innerHTML = `
      <svg width="240" height="120" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="cloud-filter-${xPos}" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>
        <g filter="url(#cloud-filter-${xPos})">
          <!-- Main cloud body -->
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
                fill="#FFFFFF" />
        </g>
      </svg>
    `
    return cloud
  }

  function animateCloud(element: HTMLElement) {
    let xPos = Number.parseFloat(element.style.left)
    // Vary the speed slightly for each cloud
    const speed = 0.002 + Math.random() * 0.002 // Gentle movement

    // Add a very subtle vertical drift
    const yPos = Number.parseFloat(element.style.top)
    const ySpeed = Math.random() * 0.0002 * (Math.random() > 0.5 ? 1 : -1)
    let yDirection = 1
    let yDrift = 0
    const maxYDrift = 0.2 // Very small vertical drift

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
      requestAnimationFrame(update)
    }

    update()
  }

  return <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none" />
}
