"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import NotebookTimeline from "@/components/notebook-timeline"
import ProjectCard from "@/components/project-card"
import PodcastSection from "@/components/podcast-section"
import StickyNote from "@/components/sticky-note"
import OptimizedBackground from "@/components/optimized-background"
import Navbar from "@/components/navbar"
import { useState, useEffect } from "react"
import { projectDb } from "@/lib/db"
import type { Project } from "@/lib/db"
import { ScrollReveal } from "@/components/scroll-reveal"
import Footer from "@/components/footer"

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const allProjects = projectDb
      .getAll()
      .filter((project) => project.published && project.title !== "Biruwa Think Tank")
      .slice(0, 3)
    setProjects(allProjects)
  }, [])

  return (
    <div className="wrapper">
      <OptimizedBackground />

      <Navbar />

      <main className="flex-grow">
        {/* Hero Section - Mobile Optimized */}
        <section id="home" className="relative py-12 sm:py-20 md:py-32 overflow-hidden">
          <div className="container relative px-4 sm:px-6">
            <ScrollReveal className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-4 sm:mb-6">
                <StickyNote color="green" rotate="rotate-2">
                  <span className="font-handwriting text-sm sm:text-lg text-slate-800">
                    Youth-led climate justice collective
                  </span>
                </StickyNote>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight relative font-display">
                <span className="relative inline-block">
                  Turning simple talks into meaningful conversations
                  <svg
                    className="absolute -bottom-3 sm:-bottom-4 left-0 w-full animate-float-line"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,5 Q40,0 80,5 T160,5 T240,5"
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-slate-700 max-w-2xl mx-auto px-4">
                We're passionate individuals creating a sustainable future through climate justice, research, and
                community action in Nepal.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button
                  asChild
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 font-medium shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                >
                  <a href="#about">
                    Learn About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-full px-6 sm:px-8 py-4 sm:py-6 font-medium text-sm sm:text-base bg-transparent"
                >
                  <a href="#projects">See Our Projects</a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* About Section - Mobile Optimized */}
        <section id="about" className="py-12 sm:py-16 relative">
          <div className="container px-4 sm:px-6">
            <ScrollReveal className="text-center mb-8 sm:mb-12" delay={100}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 inline-block relative font-display">
                About Us
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full animate-float-line"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q20,0 40,5 T80,5 T120,5"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </h2>
              <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto px-4">
                Learn about our mission, vision, and the story behind Biruwa
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white rounded-2xl p-4 sm:p-8 border-2 border-dashed border-emerald-600 relative shadow-lg max-w-4xl mx-auto">
                <div className="absolute -top-3 sm:-top-5 left-4 sm:left-8">
                  <StickyNote color="green" rotate="-rotate-2">
                    <span className="font-handwriting text-sm sm:text-lg">Our Story</span>
                  </StickyNote>
                </div>

                <div className="mt-4 sm:mt-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-display">
                    The Seed That Became Biruwa
                  </h3>
                  <div className="prose prose-sm sm:prose-lg max-w-none text-sm sm:text-base">
                    <p className="mb-4">
                      Biruwa began as a conversation, one that took root under the open sky, between four law students
                      with a shared frustration and a deeper hope. We were studying the laws meant to protect people and
                      the planet, yet we couldn’t ignore the gap between what was written on paper and what people
                      actually experienced.
                    </p>
                    <p>
                      Named after the Nepali word for a "seedling," Biruwa is a symbol of growth, curiosity, and the
                      seed that is planted inside a rational mind and grows into the questioning ability. Our journey
                      started with a single question: How do we cultivate awareness and critical thinking around climate
                      justice and environmental governance in our communities?
                    </p>
                  </div>
                </div>

                <div className="flex justify-center mt-4 sm:mt-6">
                  <Button
                    asChild
                    className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-4 sm:px-6 py-3 sm:py-4 font-medium shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                  >
                    <Link href="/about">
                      Read Our Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Timeline Section - Mobile Optimized */}
        <section className="py-12 sm:py-16 relative">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 inline-block relative font-display">
                Our Journey
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full animate-float-line"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q20,0 40,5 T80,5 T120,5"
                    fill="none"
                    stroke="#0EA5E9"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </h2>
              <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto px-4">
                From a small idea to a growing movement for climate justice in Nepal
              </p>
            </div>

            <NotebookTimeline />
          </div>
        </section>

        {/* Projects Preview - Mobile Optimized */}
        <section id="projects" className="py-12 sm:py-16 relative">
          <div className="container px-4 sm:px-6">
            <ScrollReveal className="text-center mb-8 sm:mb-12" delay={100}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-display relative inline-block">
                Our Projects
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full animate-float-line"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q20,0 40,5 T80,5 T120,5"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </h2>
              <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto px-4">
                Explore our initiatives for climate justice and environmental governance
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <ScrollReveal key={project.id} delay={200 + index * 100}>
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      description={project.description}
                      icon={project.icon || "book"}
                      color={project.color || "emerald"}
                      date={project.date}
                      imageUrl={project.imageUrl}
                      images={project.images}
                      projectId={project.id}
                    />
                  </ScrollReveal>
                ))
              ) : (
                <>
                  <ScrollReveal delay={300}>
                    <ProjectCard
                      title="Community Outreach"
                      description="Educational workshops and community engagement programs"
                      icon="users"
                      color="amber"
                      imageUrl="https://images.unsplash.com/photo-1559223607-a43f990c43d5?q=80&w=1770&auto=format&fit=crop"
                    />
                  </ScrollReveal>
                  <ScrollReveal delay={400}>
                    <ProjectCard
                      title="Legal Advocacy"
                      description="Advocacy and awareness campaigns for environmental protection"
                      icon="scale"
                      color="sky"
                      imageUrl="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1770&auto=format&fit=crop"
                    />
                  </ScrollReveal>
                </>
              )}
            </div>

            <ScrollReveal className="text-center mt-8 sm:mt-10" delay={500}>
              <Button
                asChild
                variant="outline"
                className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-full px-4 sm:px-6 py-3 sm:py-4 font-medium text-sm sm:text-base bg-transparent"
              >
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>

        {/* Podcast Section - Mobile Optimized */}
        <section id="podcast" className="py-12 sm:py-16 relative">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-display relative inline-block">
                Our Podcast
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full animate-float-line"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q20,0 40,5 T80,5 T120,5"
                    fill="none"
                    stroke="#F3969A"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </h2>
              <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto px-4">
                Conversations on climate justice, activism, and change-making
              </p>
            </div>

            <PodcastSection />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
