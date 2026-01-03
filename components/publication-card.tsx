import Link from "next/link"
import Image from "next/image"

interface PublicationCardProps {
  title: string
  description: string
  date: string
  type: string
  color: string
  imageUrl?: string
}

export default function PublicationCard({ title, description, date, type, color, imageUrl }: PublicationCardProps) {
  const getBgColor = () => {
    switch (color) {
      case "emerald":
        return "bg-emerald-600/20"
      case "amber":
        return "bg-amber-500/20"
      case "red":
        return "bg-red-500/20"
      case "sky":
        return "bg-sky-500/20"
      default:
        return "bg-emerald-600/20"
    }
  }

  const getTextColor = () => {
    switch (color) {
      case "emerald":
        return "text-emerald-700"
      case "amber":
        return "text-amber-600"
      case "red":
        return "text-red-600"
      case "sky":
        return "text-sky-600"
      default:
        return "text-emerald-700"
    }
  }

  const getBorderColor = () => {
    switch (color) {
      case "emerald":
        return "border-emerald-600/30"
      case "amber":
        return "border-amber-500/30"
      case "red":
        return "border-red-500/30"
      case "sky":
        return "border-sky-500/30"
      default:
        return "border-emerald-600/30"
    }
  }

  // Default images based on publication type
  const getDefaultImage = () => {
    switch (type) {
      case "Research Paper":
        return "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=1770&auto=format&fit=crop"
      case "Toolkit":
        return "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1770&auto=format&fit=crop"
      case "Legal Analysis":
        return "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1770&auto=format&fit=crop"
      default:
        return "https://images.unsplash.com/photo-1497005367839-6e852de72767?q=80&w=1767&auto=format&fit=crop"
    }
  }

  return (
    <div className="group relative">
      <div
        className={`absolute inset-0 rounded-2xl rotate-[-1deg] transition-all duration-300 group-hover:rotate-[1deg] ${getBgColor()}`}
      ></div>
      <div
        className={`relative bg-white rounded-2xl p-6 border border-dashed transition-all duration-300 hover:shadow-lg ${getBorderColor()}`}
      >
        <div className="flex justify-between items-start mb-4">
          <div className={`inline-block px-3 py-1 rounded-full text-sm ${getBgColor()} ${getTextColor()}`}>{type}</div>

          <div className="w-16 h-20 relative">
            <Image
              src={imageUrl || getDefaultImage()}
              alt={`${title} cover`}
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 font-display">{title}</h3>
        <p className="text-slate-700 mb-4">{description}</p>

        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-500 font-handwriting">{date}</span>
          <Link href="#" className={`inline-flex items-center font-medium transition-colors ${getTextColor()}`}>
            Read Paper
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 h-4 w-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
