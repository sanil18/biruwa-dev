"use client"

import { useEffect, useRef } from "react"

export default function BiruwaPlant() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create continuous grass field
    const grassField = createGrassField()
    container.appendChild(grassField)

    // Animate the grass field
    animateGrassField(grassField)

    return () => {
      if (container.contains(grassField)) {
        container.removeChild(grassField)
      }
    }
  }, [])

  function createGrassField() {
    const grassField = document.createElement("div")
    grassField.className = "absolute pointer-events-none grass-field"
    grassField.style.left = "0%"
    grassField.style.bottom = "0px"
    grassField.style.width = "100%"
    grassField.style.height = "35px"
    grassField.style.opacity = "0.5"
    grassField.style.zIndex = "-1"
    grassField.style.transformOrigin = "bottom center"

    // Create thin grass field with small delicate curves
    grassField.innerHTML = `
      <svg width="100%" height="35" viewBox="0 0 1920 35" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grassGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" style="stop-color:#1b5e20;stop-opacity:1" />
            <stop offset="60%" style="stop-color:#388e3c;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#66bb6a;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="grassGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" style="stop-color:#2e7d32;stop-opacity:1" />
            <stop offset="70%" style="stop-color:#43a047;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#81c784;stop-opacity:1" />
          </linearGradient>
          <filter id="grassBlur">
            <feGaussianBlur stdDeviation="0.2"/>
          </filter>
        </defs>
        <g filter="url(#grassBlur)">
          <!-- Back layer - thin grass with small curves -->
          <path d="M0,35 Q40,32 80,33 T160,31 T240,32 T320,30 T400,31 T480,29 T560,30 T640,28 T720,29 T800,27 T880,28 T960,26 T1040,27 T1120,25 T1200,26 T1280,24 T1360,25 T1440,23 T1520,24 T1600,22 T1680,23 T1760,21 T1840,22 T1920,35" 
                fill="url(#grassGradient1)" 
                opacity="0.8"/>
          
          <!-- Front layer - slightly taller thin grass -->
          <path d="M0,35 Q35,28 70,29 T140,27 T210,28 T280,26 T350,27 T420,25 T490,26 T560,24 T630,25 T700,23 T770,24 T840,22 T910,23 T980,21 T1050,22 T1120,20 T1190,21 T1260,19 T1330,20 T1400,18 T1470,19 T1540,17 T1610,18 T1680,16 T1750,17 T1820,15 T1890,16 T1920,35" 
                fill="url(#grassGradient2)" 
                opacity="0.7"/>
        </g>
      </svg>
    `
    return grassField
  }

  function animateGrassField(element: HTMLElement) {
    let time = 0

    function update() {
      time += 0.02
      
      // Unified field movement like anime grass
      const gentleWave = Math.sin(time * 0.8) * 2
      const mediumWave = Math.sin(time * 1.3) * 1.5
      const quickWave = Math.sin(time * 3) * 0.5
      const windShift = Math.sin(time * 0.4) * 1
      
      // Combine for natural field movement
      const totalMovement = gentleWave + mediumWave + quickWave + windShift
      
      // Apply unified sway to entire field
      element.style.transform = `skewX(${totalMovement}deg) translateY(${-Math.abs(totalMovement) * 0.3}px)`
      
      requestAnimationFrame(update)
    }

    update()
  }

  return <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none" />
}
