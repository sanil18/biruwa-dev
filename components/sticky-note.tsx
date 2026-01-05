import type React from "react"

interface StickyNoteProps {
  children: React.ReactNode
  color: string
  rotate?: string
}

export default function StickyNote({ children, color, rotate = "rotate-0" }: StickyNoteProps) {
  const getColor = () => {
    switch (color) {
      case "green":
        return "bg-emerald-100"
      case "yellow":
        return "bg-amber-100"
      case "red":
        return "bg-red-100"
      case "blue":
        return "bg-sky-100"
      case "purple":
        return "bg-purple-100"
      default:
        return "bg-amber-100"
    }
  }

  return (
    <div
      className={`inline-block ${getColor()} ${rotate} px-3 py-2 sm:px-4 sm:py-2 shadow-sm transform transition-transform duration-300 hover:scale-105 text-xs sm:text-sm`}
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 95% 75%, 95% 100%, 85% 75%, 0% 75%)",
      }}
    >
      {children}
    </div>
  )
}
