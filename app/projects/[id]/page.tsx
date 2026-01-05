"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin, Users, Tag } from "lucide-react"
import { projectDb } from "@/lib/db"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id as string

  const project = projectDb.getById(projectId)

  if (!project) {
    return (
      <div className="wrapper min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 sm:py-20 relative px-4 sm:px-6">
          <div className="container max-w-4xl text-center">
            <Button
              asChild
              variant="ghost"
              className="mb-6 sm:mb-8 flex items-center text-[#78C2AD] hover:text-[#78C2AD]/80"
            >
              <Link href="/projects" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            <div className="text-red-500 py-12">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">Project Not Found</h1>
              <p className="text-base mb-4">
                The project you're looking for doesn't exist or has been removed.
              </p>
              <Button onClick={() => router.push("/projects")}>
                Back to Projects
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-8 pb-12 sm:pt-10 sm:pb-20 relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
          {/* Project Content */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 border-2 border-dashed border-emerald-600 shadow-lg mb-8 max-w-6xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 font-display">
              {project.title}
            </h1>

            {/* Project Meta Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {project.date && (
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm text-slate-600">Date: {project.date}</span>
                </div>
              )}

              {project.venue && (
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm text-slate-600">Venue: {project.venue}</span>
                </div>
              )}

              {project.participants && (
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm text-slate-600">Participants: {project.participants}</span>
                </div>
              )}

              {project.sessionLedBy && (
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm text-slate-600">Led by: {project.sessionLedBy}</span>
                </div>
              )}

              {project.collaboration && (
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm text-slate-600">Collaboration: {project.collaboration}</span>
                </div>
              )}
            </div>

            {/* Project Description */}
            <div className="prose prose-sm sm:prose-lg max-w-5xl mx-auto mb-6">
              <div className="text-sm sm:text-base text-slate-700 whitespace-pre-wrap">
                {project.description.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Single Featured Image */}
            <div className="relative w-full h-64 sm:h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg mb-8">
              <Image
                src={project.images && project.images.length > 1 ? project.images[1] : (project.images?.[0] || "https://raw.githubusercontent.com/sanil18/biruwa/refs/heads/main/assets/breathinggroup.JPG")}
                alt={`${project.title} featured image`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 90vw"
                priority
              />
            </div>

            {/* Detailed Content */}
            {project.detailedContent && (
              <div className="mt-8 space-y-8">
                {/* If content field exists, display as continuous text */}
                {project.detailedContent.content ? (
                  <div className="prose prose-sm sm:prose-lg max-w-none">
                    <div className="text-sm sm:text-base text-slate-700 whitespace-pre-wrap leading-relaxed">
                      {project.detailedContent.content.split('\n').map((paragraph: string, index: number) => (
                        paragraph.trim() && <p key={index} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Introduction */}
                    {project.detailedContent.introduction && (
                      <div className="bg-emerald-50 rounded-xl p-4 sm:p-6 border border-emerald-200">
                        <h3 className="text-lg sm:text-xl font-bold mb-3 text-emerald-800 font-display">Introduction & Issue Identification</h3>
                        <p className="text-sm sm:text-base text-slate-700">{project.detailedContent.introduction}</p>
                      </div>
                    )}

                    {/* Role Play Sessions */}
                    {project.detailedContent.rolePlay && (
                      <div className="space-y-6">
                        <h3 className="text-lg sm:text-xl font-bold text-emerald-800 font-display">Role-Play & Group Discussions</h3>

                        {/* Local Community */}
                        {project.detailedContent.rolePlay.localCommunity && (
                          <div className="bg-blue-50 rounded-xl p-4 sm:p-6 border border-blue-200">
                            <h4 className="text-base sm:text-lg font-semibold mb-3 text-blue-800">{project.detailedContent.rolePlay.localCommunity.title}</h4>
                            <ul className="space-y-2">
                              {project.detailedContent.rolePlay.localCommunity.issues.map((issue, index) => (
                                <li key={index} className="text-sm sm:text-base text-slate-700 flex items-start">
                                  <span className="text-blue-600 mr-2 mt-1">•</span>
                                  <span>{issue}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Community Leaders */}
                        {project.detailedContent.rolePlay.communityLeaders && (
                          <div className="bg-amber-50 rounded-xl p-4 sm:p-6 border border-amber-200">
                            <h4 className="text-base sm:text-lg font-semibold mb-3 text-amber-800">{project.detailedContent.rolePlay.communityLeaders.title}</h4>
                            <ul className="space-y-2">
                              {project.detailedContent.rolePlay.communityLeaders.recommendations.map((recommendation, index) => (
                                <li key={index} className="text-sm sm:text-base text-slate-700 flex items-start">
                                  <span className="text-amber-600 mr-2 mt-1">•</span>
                                  <span>{recommendation}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* City Planners */}
                        {project.detailedContent.rolePlay.cityPlanners && (
                          <div className="bg-purple-50 rounded-xl p-4 sm:p-6 border border-purple-200">
                            <h4 className="text-base sm:text-lg font-semibold mb-3 text-purple-800">{project.detailedContent.rolePlay.cityPlanners.title}</h4>
                            <ul className="space-y-2">
                              {project.detailedContent.rolePlay.cityPlanners.implementationPlans.map((plan, index) => (
                                <li key={index} className="text-sm sm:text-base text-slate-700 flex items-start">
                                  <span className="text-purple-600 mr-2 mt-1">•</span>
                                  <span>{plan}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Conclusion */}
                    {project.detailedContent.conclusion && (
                      <div className="bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-200">
                        <h3 className="text-lg sm:text-xl font-bold mb-3 text-slate-800 font-display">Recommendations & Reflections</h3>
                        <p className="text-sm sm:text-base text-slate-700">{project.detailedContent.conclusion}</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>


          {/* Back to Projects Button at Bottom */}
          <div className="flex justify-center mt-8 sm:mt-12">
            <Button
              asChild
              variant="outline"
              className="flex items-center text-emerald-700 border-emerald-600 hover:bg-emerald-50 rounded-full px-6 py-4 transition-all duration-300"
            >
              <Link href="/projects" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Projects
              </Link>
            </Button>
          </div>
        </div>
      </main >

      <Footer />

    </div >
  )
}
