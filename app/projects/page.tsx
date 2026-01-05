"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import ProjectCard from "@/components/project-card"
import { projectDb } from "@/lib/db"
import { ScrollReveal } from "@/components/scroll-reveal"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Projects() {
  const projects = projectDb.getAll()

  return (
    <div className="wrapper min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-8 pb-12 sm:pt-10 sm:pb-20 relative">
        <div className="container px-4 sm:px-6">

          <ScrollReveal className="text-center mb-8 sm:mb-12" delay={100}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-display relative inline-block">
              Our Projects
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
            </h1>
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto px-4">
              Explore our initiatives for climate justice and environmental governance
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <ScrollReveal key={project.id} delay={200 + index * 100}>
                  <ProjectCard
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
              <div className="col-span-full text-center py-12">
                <p className="text-slate-500">No projects available at the moment.</p>
              </div>
            )}
          </div>

          {/* Back to Home Button at Bottom */}
          <div className="flex justify-center mt-12 sm:mt-16">
            <Button
              asChild
              variant="outline"
              className="flex items-center text-emerald-700 border-emerald-600 hover:bg-emerald-50 rounded-full px-6 py-4 transition-all duration-300 shadow-sm"
            >
              <Link href="/" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
