"use client"

import type React from "react"
import { BookOpen, Users, Scale, Calendar, RefreshCw, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface ProjectCardProps {
  title: string
  description: string
  icon: string
  color: string
  date?: string
  imageUrl?: string
  images?: string[]
  onLearnMore?: () => void
  projectId?: string
}

export default function ProjectCard({ title, description, icon, color, date, imageUrl, images, onLearnMore, projectId }: ProjectCardProps) {
  const router = useRouter()

  const getIcon = () => {
    switch (icon) {
      case "book":
        return <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      case "users":
        return <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      case "scale":
        return <Scale className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      case "refresh-cw":
        return <RefreshCw className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      case "shopping-bag":
        return <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      default:
        return <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
    }
  }

  const getBgColor = () => {
    switch (color) {
      case "emerald":
        return "bg-emerald-600"
      case "green":
        return "bg-green-600"
      case "amber":
        return "bg-amber-500"
      case "red":
        return "bg-red-500"
      case "sky":
        return "bg-sky-500"
      case "blue":
        return "bg-blue-600"
      default:
        return "bg-emerald-600"
    }
  }

  const getBorderColor = () => {
    switch (color) {
      case "emerald":
        return "border-emerald-600"
      case "green":
        return "border-green-600"
      case "amber":
        return "border-amber-500"
      case "red":
        return "border-red-500"
      case "sky":
        return "border-sky-500"
      case "blue":
        return "border-blue-600"
      default:
        return "border-emerald-600"
    }
  }

  const getTextColor = () => {
    switch (color) {
      case "emerald":
        return "text-emerald-700"
      case "green":
        return "text-green-700"
      case "amber":
        return "text-amber-600"
      case "red":
        return "text-red-600"
      case "sky":
        return "text-sky-600"
      case "blue":
        return "text-blue-700"
      default:
        return "text-emerald-700"
    }
  }

  // Default images based on project type
  const getDefaultImage = () => {
    switch (icon) {
      case "book":
        return "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=1770&auto=format&fit=crop"
      case "users":
        return "https://images.unsplash.com/photo-1559223607-a43f990c43d5?q=80&w=1770&auto=format&fit=crop"
      case "scale":
        return "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1770&auto=format&fit=crop"
      default:
        return "https://images.unsplash.com/photo-1497005367839-6e852de72767?q=80&w=1767&auto=format&fit=crop"
    }
  }

  // Get the image URL: use imageUrl first, then first image from images array, then default
  const getImageUrl = () => {
    if (imageUrl) return imageUrl;
    if (images && images.length > 0) return images[0];
    return getDefaultImage();
  }

  const handleLearnMore = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onLearnMore) {
      onLearnMore()
    }
    if (projectId) {
      router.push(`/projects/${projectId}`)
    }
  }

  return (
    <div className="group relative h-full">
      <div
        className={`absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-dashed transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 sm:group-hover:translate-x-2 sm:group-hover:translate-y-2 ${getBorderColor()}`}
      ></div>
      <div
        className={`relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-dashed transition-all duration-300 hover:shadow-lg ${getBorderColor()} h-full flex flex-col`}
      >
        {/* Project Image Preview */}
        <div className="relative w-full h-40 sm:h-48 mb-4 rounded-lg overflow-hidden">
          <Image
            src={getImageUrl()}
            alt={`${title} preview`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="flex items-start mb-3 sm:mb-4">
          <div className={`rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${getBgColor()}`}>
            {getIcon()}
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold mb-2 font-display">{title}</h3>
        <p className="text-slate-700 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-3">{description}</p>

        <div className="mt-auto pt-2 flex items-center justify-between">
          <button
            onClick={handleLearnMore}
            className={`inline-flex items-center font-medium transition-colors text-sm sm:text-base ${getTextColor()} cursor-pointer hover:opacity-80 group-hover:underline`}
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>

          {/* Date Display */}
          {date && (
            <div className="flex items-center gap-1.5 text-slate-500">
              <Calendar className="h-3.5 w-3.5" />
              <span className="text-xs sm:text-sm">{date}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
