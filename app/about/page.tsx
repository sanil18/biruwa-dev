"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import StickyNote from "@/components/sticky-note"
import BackgroundScene from "@/components/background_scene"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function About() {
  return (
    <div className="wrapper min-h-screen flex flex-col">
      <BackgroundScene />
      <Navbar />

      <main className="flex-grow py-12 sm:py-20 relative px-4 sm:px-6">
        <div className="container max-w-4xl">
          <Button
            asChild
            variant="ghost"
            className="mb-6 sm:mb-8 flex items-center text-[#78C2AD] hover:text-[#78C2AD]/80"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 relative inline-block">
              About Biruwa
              <svg className="absolute -bottom-2 left-0 w-full animate-float-line" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path
                  d="M0,5 Q40,0 80,5 T160,5 T240,5"
                  fill="none"
                  stroke="#F3969A"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </h1>
          </div>

          {/* Our Story Section */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-dashed border-[#78C2AD] relative shadow-lg">
              <div className="absolute -top-3 sm:-top-5 left-4 sm:left-8">
                <StickyNote color="green" rotate="-rotate-2">
                  <span className="font-hand text-base sm:text-lg">About Biruwa</span>
                </StickyNote>
              </div>

              <div className="mt-4 sm:mt-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">What is Biruwa?</h2>
                <div className="prose prose-sm sm:prose-lg max-w-none">
                  <p className="mb-4">
                    Biruwa is an initiative founded by young women legal professionals that is dedicated to cultivating
                    critical thinking and empowering communities to address climate injustice and governance challenges
                    in Nepal. Through its Think Tank model, Biruwa engages motivated individuals from marginalized
                    backgrounds in self-directed research, educational resource development, and public awareness
                    programs.
                  </p>
                  <p className="mb-4">
                    By simplifying complex climate issues and amplifying grassroots voices, Biruwa fosters a culture of
                    inquiry and accountability. Our scalable, resource-efficient approach rooted in community leadership
                    makes it a sustainable model for driving systemic change from the ground up.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Vision & Mission Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-dashed border-[#6C63FF] relative shadow-lg">
              <div className="absolute -top-3 sm:-top-5 left-4 sm:left-8">
                <StickyNote color="purple" rotate="rotate-1">
                  <span className="font-hand text-base sm:text-lg">Vision</span>
                </StickyNote>
              </div>
              <div className="mt-4 sm:mt-6">
                <p className="text-lg sm:text-xl font-handwriting text-slate-700 leading-relaxed italic">
                  "We envision a society where every person regardless of age, background, or place understands their
                  environmental rights, questions injustice, and feels empowered to shape decisions that affect their
                  future."
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-dashed border-[#F3969A] relative shadow-lg">
              <div className="absolute -top-3 sm:-top-5 left-4 sm:left-8">
                <StickyNote color="red" rotate="-rotate-1">
                  <span className="font-hand text-base sm:text-lg">Mission</span>
                </StickyNote>
              </div>
              <div className="mt-4 sm:mt-6">
                <p className="text-lg sm:text-xl font-handwriting text-slate-700 leading-relaxed italic">
                  "At Biruwa, our mission is to plant seeds of curiosity, courage, and critical thinking in
                  individuals facing realities of climate injustice."
                </p>
              </div>
            </div>
          </section>

          {/* Vision, Mission, Objectives */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-white rounded-2xl p-4 sm:p-6 border-2 border-dashed border-[#FFCE67] relative shadow-md">
              <div className="absolute -top-3 sm:-top-5 left-3 sm:left-4">
                <StickyNote color="yellow" rotate="rotate-2">
                  <span className="font-hand text-base sm:text-lg">Objectives</span>
                </StickyNote>
              </div>
              <div className="mt-4 sm:mt-6">
                <ul className="text-[#555] space-y-2 list-disc pl-5 text-sm sm:text-base">
                  <li>Empower Think Tank as a functioning mechanism to hold dialogues of accountability</li>
                  <li>Foster critical thinking and questioning in local communities</li>
                  <li>Bridge gaps between stakeholders and locals by informing them of their rights</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 border-2 border-dashed border-[#F3969A] relative shadow-md">
              <div className="absolute -top-3 sm:-top-5 left-3 sm:left-4">
                <StickyNote color="red" rotate="-rotate-1">
                  <span className="font-hand text-base sm:text-lg">Our Focus</span>
                </StickyNote>
              </div>
              <div className="mt-4 sm:mt-6">
                <ul className="text-[#555] space-y-2 list-disc pl-5 text-sm sm:text-base">
                  <li>White Paper Development</li>
                  <li>Educational Materials</li>
                  <li>Awareness-Raising Programs</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 border-2 border-dashed border-[#78C2AD] relative shadow-md">
              <div className="absolute -top-3 sm:-top-5 left-3 sm:left-4">
                <StickyNote color="green" rotate="rotate-1">
                  <span className="font-hand text-base sm:text-lg">Approach</span>
                </StickyNote>
              </div>
              <div className="mt-4 sm:mt-6">
                <p className="text-[#555] text-sm sm:text-base">
                  A holistic approach that fosters meaningful dialogue and enhances questioning abilities related to
                  climate justice and governance through research, expert guidance, and community engagement.
                </p>
              </div>
            </div>
          </section>

          {/* Our Approach */}
          <section className="mb-0">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-dashed border-[#6C63FF] relative shadow-lg">
              <div className="absolute -top-3 sm:-top-5 left-4 sm:left-8">
                <StickyNote color="purple" rotate="-rotate-1">
                  <span className="font-hand text-base sm:text-lg">Working Mechanism</span>
                </StickyNote>
              </div>

              <div className="mt-4 sm:mt-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">How We Work</h2>
                <div className="prose prose-sm sm:prose-lg max-w-none">
                  <p className="mb-4">
                    Biruwa operates as a dynamic think tank that combines research, dialogue, and community engagement
                    to create lasting impact. Our core approach centers on empowering communities through knowledge,
                    critical thinking, and actionable solutions to climate and governance challenges.
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Our Three Main Objectives:</h3>

                  <h4 className="text-base sm:text-lg font-bold mb-2">
                    1. Empower Think Tank as a Mechanism for Accountability
                  </h4>
                  <p className="mb-4">
                    We establish the Think Tank as a functioning platform where communities can engage in meaningful
                    dialogue and hold stakeholders accountable. By bringing together diverse voices, we create spaces
                    where questions are encouraged and evidence-based solutions are developed.
                  </p>

                  <h4 className="text-base sm:text-lg font-bold mb-2">
                    2. Foster Critical Thinking in Local Communities
                  </h4>
                  <p className="mb-4">
                    Through our educational programs and research initiatives, we nurture the questioning abilities of
                    individuals facing climate injustice and governance issues. We believe that informed citizens are the
                    foundation for meaningful change.
                  </p>

                  <h4 className="text-base sm:text-lg font-bold mb-2">
                    3. Bridge Gaps Between Stakeholders and Communities
                  </h4>
                  <p className="mb-4">
                    We work to inform communities of their rights and create dialogue between those in power and those
                    affected by climate and governance decisions. Knowledge is power, and we equip communities with
                    both.
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Our Three Focus Areas:</h3>

                  <h4 className="text-base sm:text-lg font-bold mb-2">White Paper Development</h4>
                  <p className="mb-4">
                    We produce research-backed white papers that dive deep into climate justice and governance issues.
                    These papers serve as comprehensive resources for policymakers, activists, and informed citizens
                    seeking to understand complex issues.
                  </p>

                  <h4 className="text-base sm:text-lg font-bold mb-2">Educational Materials</h4>
                  <p className="mb-4">
                    We create accessible, engaging educational resources—from brochures and handbooks to infographics
                    and digital content—that make complex climate and governance topics understandable for all age
                    groups and educational backgrounds.
                  </p>

                  <h4 className="text-base sm:text-lg font-bold mb-2">Awareness-Raising Programs</h4>
                  <p className="mb-4">
                    We conduct educational sessions, workshops, and community events that raise awareness about climate
                    injustices and governance challenges. These programs empower people with knowledge and encourage
                    them to become agents of change in their communities.
                  </p>

                  <p>
                    By combining these approaches, Biruwa creates a comprehensive ecosystem where questioning leads to
                    understanding, understanding leads to engagement, and engagement drives real change in how
                    communities approach climate and governance challenges.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
