"use client"

import type React from "react"

import { BookOpen, Users, Scale } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  icon: string
  color: string
  imageUrl?: string
  onLearnMore?: () => void
}

export default function ProjectCard({ title, description, icon, color, imageUrl, onLearnMore }: ProjectCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "book":
        return <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      case "users":
        return <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      case "scale":
        return <Scale className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      default:
        return <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
    }
  }

  const getBgColor = () => {
    switch (color) {
      case "emerald":
        return "bg-emerald-600"
      case "amber":
        return "bg-amber-500"
      case "red":
        return "bg-red-500"
      case "sky":
        return "bg-sky-500"
      default:
        return "bg-emerald-600"
    }
  }

  const getBorderColor = () => {
    switch (color) {
      case "emerald":
        return "border-emerald-600"
      case "amber":
        return "border-amber-500"
      case "red":
        return "border-red-500"
      case "sky":
        return "border-sky-500"
      default:
        return "border-emerald-600"
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

  const handleLearnMore = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onLearnMore) {
      onLearnMore()
    }
  }

  return (
    <div className="group relative">
      <div
        className={`absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-dashed transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 sm:group-hover:translate-x-2 sm:group-hover:translate-y-2 ${getBorderColor()}`}
      ></div>
      <div
        className={`relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-dashed transition-all duration-300 hover:shadow-lg ${getBorderColor()}`}
      >
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <div className={`rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${getBgColor()}`}>
            {getIcon()}
          </div>

          <div className="w-12 h-12 sm:w-16 sm:h-16 relative">
            <Image
              src={imageUrl || getDefaultImage()}
              alt={`${title} thumbnail`}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 640px) 48px, 64px"
            />
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold mb-2 font-display">{title}</h3>
        <p className="text-slate-700 mb-3 sm:mb-4 text-sm sm:text-base">{description}</p>

        <button
          onClick={handleLearnMore}
          className={`inline-flex items-center font-medium transition-colors text-sm sm:text-base ${getTextColor()} cursor-pointer hover:opacity-80`}
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
            className="ml-1 h-3 w-3 sm:h-4 sm:w-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
