"use client"

import { useEffect, useRef } from "react"

export default function OrganicElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create decorative elements
    const elements = [
      createDecorativeElement("leaf", 30, 30, "top-[10%] left-[5%]", "float"),
      createDecorativeElement("leaf", 25, 25, "top-[30%] right-[8%]", "float-reverse"),
      createDecorativeElement("leaf", 20, 20, "bottom-[15%] left-[12%]", "float"),
      createDecorativeElement("leaf", 35, 35, "bottom-[25%] right-[15%]", "float-reverse"),
      createDecorativeElement("doodle-circle", 40, 40, "top-[45%] left-[20%]", "float-reverse"),
      createDecorativeElement("doodle-circle", 30, 30, "top-[60%] right-[10%]", "float"),
      createDecorativeElement("doodle-star", 25, 25, "top-[80%] left-[15%]", "float-reverse"),
      createDecorativeElement("doodle-star", 35, 35, "top-[20%] left-[80%]", "float"),
      createDecorativeElement("doodle-spiral", 45, 45, "bottom-[10%] left-[40%]", "float"),
      createDecorativeElement("doodle-spiral", 35, 35, "top-[5%] right-[25%]", "float-reverse"),
    ]

    // Add elements to container
    elements.forEach((el) => container.appendChild(el))

    return () => {
      elements.forEach((el) => {
        if (container.contains(el)) {
          container.removeChild(el)
        }
      })
    }
  }, [])

  function createDecorativeElement(type: string, width: number, height: number, position: string, animation: string) {
    const element = document.createElement("div")
    element.className = `absolute opacity-[0.08] pointer-events-none ${position} ${animation}`
    element.style.width = `${width}px`
    element.style.height = `${height}px`

    let svg = ""

    switch (type) {
      case "leaf":
        svg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 3C3 3 1 5 1 8C1 11 3 13 6 13C9 13 11 11 11 8C11 5 9 3 6 3Z" fill="#10B981"/>
          <path d="M6 13C6 13 6 21 12 21C18 21 23 16 23 10C23 4 18 2 18 2C18 2 18 10 12 10C6 10 6 2 6 2" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>`
        break
      case "doodle-circle":
        svg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
        </svg>`
        break
      case "doodle-star":
        svg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>`
        break
      case "doodle-spiral":
        svg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2"/>
          <path d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2"/>
          <path d="M12 14C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11C9 10.2044 9.31607 9.44129 9.87868 8.87868C10.4413 8.31607 11.2044 8 12 8" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2"/>
        </svg>`
        break
    }

    element.innerHTML = svg
    return element
  }

  return <div ref={containerRef} className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none" />
}
