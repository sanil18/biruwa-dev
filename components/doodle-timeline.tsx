"use client"

import { useEffect, useRef } from "react"
import { Leaf, Users, BookOpen, Award } from "lucide-react"

export default function DoodleTimeline() {
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
      {/* Doodle line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#78C2AD]/30 transform -translate-x-1/2 z-0">
        <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,0 Q2,25 -2,50 Q2,75 -2,100 Q2,125 -2,150 Q2,175 0,200"
            stroke="#78C2AD"
            strokeWidth="3"
            strokeDasharray="5 5"
            fill="none"
            className="w-full h-full"
          />
        </svg>
      </div>

      {/* Timeline items */}
      <div className="timeline-item opacity-0 translate-y-8 transition-all duration-700 ease-out mb-16 flex items-center odd:flex-row-reverse">
        <div className="w-1/2 pr-8 text-right">
          <div className="inline-block rotate-[-2deg] bg-[#FFCE67] px-3 py-1 mb-2 rounded-lg shadow-sm">
            <span className="font-hand text-sm">2020</span>
          </div>
          <h3 className="text-xl font-bold mb-2">The Beginning</h3>
          <p className="text-[#555]">
            Biruwa started as a small group of law students concerned about climate justice in Nepal.
          </p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full p-2 border-2 border-dashed border-[#78C2AD]">
          <div className="bg-[#78C2AD] rounded-full p-2">
            <Leaf className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>

      <div className="timeline-item opacity-0 translate-y-8 transition-all duration-700 ease-out mb-16 flex items-center">
        <div className="w-1/2 pl-8">
          <div className="inline-block rotate-[2deg] bg-[#F3969A] px-3 py-1 mb-2 rounded-lg shadow-sm">
            <span className="font-hand text-sm">2021</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Growing the Team</h3>
          <p className="text-[#555]">
            Expanded to 11 members from diverse backgrounds including law, environmental science, and policy.
          </p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full p-2 border-2 border-dashed border-[#F3969A]">
          <div className="bg-[#F3969A] rounded-full p-2">
            <Users className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>

      <div className="timeline-item opacity-0 translate-y-8 transition-all duration-700 ease-out mb-16 flex items-center odd:flex-row-reverse">
        <div className="w-1/2 pr-8 text-right">
          <div className="inline-block rotate-[-1deg] bg-[#78C2AD] px-3 py-1 mb-2 rounded-lg shadow-sm">
            <span className="font-hand text-sm">2022</span>
          </div>
          <h3 className="text-xl font-bold mb-2">First Major Publication</h3>
          <p className="text-[#555]">Released our first research paper on climate justice frameworks for South Asia.</p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full p-2 border-2 border-dashed border-[#78C2AD]">
          <div className="bg-[#78C2AD] rounded-full p-2">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>

      <div className="timeline-item opacity-0 translate-y-8 transition-all duration-700 ease-out flex items-center">
        <div className="w-1/2 pl-8">
          <div className="inline-block rotate-[1deg] bg-[#FFCE67] px-3 py-1 mb-2 rounded-lg shadow-sm">
            <span className="font-hand text-sm">2023</span>
          </div>
          <h3 className="text-xl font-bold mb-2">National Recognition</h3>
          <p className="text-[#555]">
            Received national award for youth-led environmental initiatives and launched our podcast.
          </p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full p-2 border-2 border-dashed border-[#FFCE67]">
          <div className="bg-[#FFCE67] rounded-full p-2">
            <Award className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  )
}
