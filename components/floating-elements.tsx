"use client"

import { useEffect, useRef } from "react"

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create floating elements
    const elements = [
      createFloatingElement("leaf", "#78C2AD", 30, 30),
      createFloatingElement("cloud", "#F3969A", 40, 25),
      createFloatingElement("scale", "#FFCE67", 35, 35),
      createFloatingElement("star", "#78C2AD", 20, 20),
      createFloatingElement("circle", "#F3969A", 15, 15),
      createFloatingElement("leaf", "#FFCE67", 25, 25),
      createFloatingElement("cloud", "#78C2AD", 35, 20),
      createFloatingElement("star", "#F3969A", 18, 18),
    ]

    // Add elements to container
    elements.forEach((el) => container.appendChild(el))

    // Animate elements
    elements.forEach((el) => {
      const speed = 0.5 + Math.random() * 1.5
      const xPos = Math.random() * 100
      const yPos = Math.random() * 100
      const rotation = Math.random() * 360

      el.style.left = `${xPos}%`
      el.style.top = `${yPos}%`
      el.style.transform = `rotate(${rotation}deg)`

      animateElement(el, speed)
    })

    return () => {
      elements.forEach((el) => {
        if (container.contains(el)) {
          container.removeChild(el)
        }
      })
    }
  }, [])

  function createFloatingElement(type: string, color: string, width: number, height: number) {
    const element = document.createElement("div")
    element.className = "absolute opacity-10 pointer-events-none"
    element.style.width = `${width}px`
    element.style.height = `${height}px`

    let svg = ""

    switch (type) {
      case "leaf":
        svg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 3C3 3 1 5 1 8C1 11 3 13 6 13C9 13 11 11 11 8C11 5 9 3 6 3Z" fill="${color}"/>
          <path d="M6 13C6 13 6 21 12 21C18 21 23 16 23 10C23 4 18 2 18 2C18 2 18 10 12 10C6 10 6 2 6 2" stroke="${color}" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>`
        break
      case "cloud":
        svg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5 19H9C6.79086 19 5 17.2091 5 15C5 12.7909 6.79086 11 9 11C9 8.23858 11.2386 6 14 6C16.7614 6 19 8.23858 19 11C21.2091 11 23 12.7909 23 15C23 17.2091 21.2091 19 19 19" stroke="${color}" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>`
        break
      case "scale":
        svg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3V21M12 3L19 7M12 3L5 7M5 7V12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12V7" stroke="${color}" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>`
        break
      case "star":
        svg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="${color}"/>
        </svg>`
        break
      case "circle":
        svg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="${color}"/>
        </svg>`
        break
    }

    element.innerHTML = svg
    return element
  }

  function animateElement(element: HTMLElement, speed: number) {
    let xPos = Number.parseFloat(element.style.left)
    let yPos = Number.parseFloat(element.style.top)
    let rotation = Number.parseFloat(element.style.transform.replace(/[^\d.]/g, "")) || 0

    let xDirection = Math.random() > 0.5 ? 1 : -1
    let yDirection = Math.random() > 0.5 ? 1 : -1

    function update() {
      xPos += 0.01 * speed * xDirection
      yPos += 0.005 * speed * yDirection
      rotation += 0.02 * speed

      // Reverse direction at edges
      if (xPos > 95 || xPos < 5) xDirection *= -1
      if (yPos > 95 || yPos < 5) yDirection *= -1

      element.style.left = `${xPos}%`
      element.style.top = `${yPos}%`
      element.style.transform = `rotate(${rotation}deg)`

      requestAnimationFrame(update)
    }

    update()
  }

  return <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none" />
}
