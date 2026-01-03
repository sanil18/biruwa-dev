import Image from "next/image"
import type { ReactNode } from "react"

interface MemberCardProps {
  name: string
  role: string
  bio: string
  color: string
  icon?: ReactNode
  imageUrl?: string
}

export default function MemberCard({ name, role, bio, color, icon, imageUrl }: MemberCardProps) {
  const getBgColor = () => {
    switch (color) {
      case "green":
        return "bg-emerald-50"
      case "yellow":
        return "bg-amber-50"
      case "blue":
        return "bg-sky-50"
      case "purple":
        return "bg-purple-50"
      case "pink":
        return "bg-pink-50"
      default:
        return "bg-emerald-50"
    }
  }

  const getBorderColor = () => {
    switch (color) {
      case "green":
        return "border-emerald-200 group-hover:border-emerald-400"
      case "yellow":
        return "border-amber-200 group-hover:border-amber-400"
      case "blue":
        return "border-sky-200 group-hover:border-sky-400"
      case "purple":
        return "border-purple-200 group-hover:border-purple-400"
      case "pink":
        return "border-pink-200 group-hover:border-pink-400"
      default:
        return "border-emerald-200 group-hover:border-emerald-400"
    }
  }

  const getTextColor = () => {
    switch (color) {
      case "green":
        return "text-emerald-700"
      case "yellow":
        return "text-amber-700"
      case "blue":
        return "text-sky-700"
      case "purple":
        return "text-purple-700"
      case "pink":
        return "text-pink-700"
      default:
        return "text-emerald-700"
    }
  }

  // Default image based on gender-neutral professional photos
  const defaultImage = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"

  return (
    <div className="group transition-all duration-300 hover:-translate-y-1">
      <div
        className={`rounded-xl p-5 ${getBgColor()} border-2 border-dashed ${getBorderColor()} transition-all duration-300 shadow-sm hover:shadow-md`}
      >
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <div
              className={`absolute inset-0 rounded-full border-2 border-dashed ${getBorderColor()} transition-all duration-300`}
            ></div>
            <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-white">
              <Image src={imageUrl || defaultImage} alt={name} fill className="object-cover" />
            </div>
          </div>

          <div className="flex items-center gap-1 mb-1">
            {icon && <span className="text-lg">{icon}</span>}
            <h3 className="font-bold font-display text-lg">{name}</h3>
          </div>
          <p className={`text-sm font-medium ${getTextColor()} mb-2`}>{role}</p>
          <p className="text-sm text-slate-600 italic">&ldquo;{bio}&rdquo;</p>
        </div>
      </div>
    </div>
  )
}
