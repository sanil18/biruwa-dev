"use client"

import { useEffect, useRef } from "react"
import { Leaf, Users, BookOpen, Award } from "lucide-react"
import StickyNote from "./sticky-note"

export default function NotebookTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.2 },
    )

    const items = timelineRef.current?.querySelectorAll(".timeline-item")
    items?.forEach((item) => observer.observe(item))

    return () => {
      items?.forEach((item) => observer.unobserve(item))
    }
  }, [])

  return (
    <div ref={timelineRef} className="relative max-w-3xl mx-auto">
      {/* Notebook line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-emerald-600/30 transform -translate-x-1/2 z-0">
        <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,0 Q2,25 -2,50 Q2,75 -2,100 Q2,125 -2,150 Q2,175 0,200"
            stroke="#10B981"
            strokeWidth="3"
            strokeDasharray="5 5"
            fill="none"
            className="w-full h-full"
          />
        </svg>
      </div>

      {/* Timeline items */}
      <div className="timeline-item timeline-item-left opacity-0 translate-y-8 transition-all duration-700 ease-out mb-16 flex items-center">
        <div className="w-1/2 pr-8 text-right md:block hidden">
          <StickyNote color="amber" rotate="-rotate-2">
            <span className="font-handwriting text-sm">2020</span>
          </StickyNote>
          <h3 className="text-xl font-bold mb-2 font-display">The Beginning</h3>
          <p className="text-slate-700">
            Biruwa started as a small group of law students concerned about climate justice in Nepal.
          </p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full p-2 border-2 border-dashed border-emerald-600">
          <div className="bg-emerald-600 rounded-full p-2">
            <Leaf className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="w-1/2 pl-8 md:hidden block">
          <StickyNote color="amber" rotate="-rotate-2">
            <span className="font-handwriting text-sm">2020</span>
          </StickyNote>
          <h3 className="text-xl font-bold mb-2 font-display">The Beginning</h3>
          <p className="text-slate-700">
            Biruwa started as a small group of law students concerned about climate justice in Nepal.
          </p>
        </div>
      </div>

      <div className="timeline-item timeline-item-right opacity-0 translate-y-8 transition-all duration-700 ease-out mb-16 flex items-center">
        <div className="w-1/2 pl-8">
          <StickyNote color="red" rotate="rotate-2">
            <span className="font-handwriting text-sm">2021</span>
          </StickyNote>
          <h3 className="text-xl font-bold mb-2 font-display">Growing the Team</h3>
          <p className="text-slate-700">
            Expanded to 11 members from diverse backgrounds including law, environmental science, and policy.
          </p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full p-2 border-2 border-dashed border-red-500">
          <div className="bg-red-500 rounded-full p-2">
            <Users className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>

      <div className="timeline-item timeline-item-left opacity-0 translate-y-8 transition-all duration-700 ease-out mb-16 flex items-center">
        <div className="w-1/2 pr-8 text-right md:block hidden">
          <StickyNote color="emerald" rotate="-rotate-1">
            <span className="font-handwriting text-sm">2022</span>
          </StickyNote>
          <h3 className="text-xl font-bold mb-2 font-display">First Major Publication</h3>
          <p className="text-slate-700">
            Released our first research paper on climate justice frameworks for South Asia.
          </p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full p-2 border-2 border-dashed border-emerald-600">
          <div className="bg-emerald-600 rounded-full p-2">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="w-1/2 pl-8 md:hidden block">
          <StickyNote color="emerald" rotate="-rotate-1">
            <span className="font-handwriting text-sm">2022</span>
          </StickyNote>
          <h3 className="text-xl font-bold mb-2 font-display">First Major Publication</h3>
          <p className="text-slate-700">
            Released our first research paper on climate justice frameworks for South Asia.
          </p>
        </div>
      </div>

      <div className="timeline-item timeline-item-right opacity-0 translate-y-8 transition-all duration-700 ease-out flex items-center">
        <div className="w-1/2 pl-8">
          <StickyNote color="amber" rotate="rotate-1">
            <span className="font-handwriting text-sm">2023</span>
          </StickyNote>
          <h3 className="text-xl font-bold mb-2 font-display">National Recognition</h3>
          <p className="text-slate-700">
            Received national award for youth-led environmental initiatives and launched our podcast.
          </p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full p-2 border-2 border-dashed border-amber-500">
          <div className="bg-amber-500 rounded-full p-2">
            <Award className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  )
}
