"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BackgroundScene from "@/components/background_scene"
import StickyNote from "@/components/sticky-note"
import { ScrollReveal } from "@/components/scroll-reveal"
import { BookOpen, GraduationCap, Megaphone, Lightbulb } from "lucide-react"

export default function ThinkTankPage() {
  return (
    <div className="wrapper min-h-screen flex flex-col">
      <BackgroundScene />
      <Navbar />

      <main className="flex-grow py-12 sm:py-20 relative px-4 sm:px-6">
        <div className="container max-w-5xl">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-block mb-6">
              <StickyNote color="purple" rotate="-rotate-1">
                <span className="font-handwriting text-lg text-slate-800">Knowledge Hub</span>
              </StickyNote>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 font-display relative inline-block">
              Biruwa Think Tank
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path
                  d="M0,5 Q40,0 80,5 T160,5 T240,5"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed mt-4">
              A youth-led research and action platform empowering motivated individuals to explore climate justice and
              governance through critical thinking and community engagement.
            </p>
          </ScrollReveal>

          {/* Core Concept */}
          <section className="grid md:grid-cols-2 gap-12 mb-24 items-center">
            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-dashed border-purple-200 relative">
                <div className="absolute -top-4 -right-4">
                  <Lightbulb className="w-12 h-12 text-yellow-500 animate-pulse" />
                </div>
                <h2 className="text-2xl font-bold mb-4 font-display text-purple-700">What is Biruwa’s Think Tank?</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Biruwa’s Think Tank is an initiative developed by the four founders who wanted more people to talk
                  about the current issues of climate justice and governance—and not just talk, but{" "}
                  <span className="font-bold text-purple-700 italic">think</span>.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  We wanted people to come together and think meaningfully with a purpose: to not just understand
                  yourself but also create outcomes that make targeted groups think about issues they never thought
                  existed. Our thinkers are the roots of our Biruwa, working together in a non-hierarchical manner.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <div className="bg-red-100 p-6 rounded-2xl border-l-4 border-red-600">
                  <h3 className="font-bold text-red-900 mb-2">Thinkers 2024/25</h3>
                  <p className="text-red-800">
                    The pioneers of Biruwa's Think Tank were 19 motivated individuals from various parts of Nepal.
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-500">
                  <h3 className="font-bold text-amber-800 mb-2">Thinkers 2025/26</h3>
                  <p className="text-amber-700">
                    The second cohort consists of three lead thinkers spearheading our three thematic areas.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Thematic Areas */}
          <section className="mb-24">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display">Our Thematic Areas</h2>
              <div className="h-1 w-24 bg-purple-500 mx-auto mt-4 rounded-full" />
            </ScrollReveal>

            <div className="grid sm:grid-cols-3 gap-8">
              <ThematicCard
                icon={<BookOpen className="w-8 h-8" />}
                title="White Paper"
                color="blue"
                content="In-depth research on climate and governance issues, covering subjects from human rights violations to financial aspects, specifically tailored for Nepal."
                details="Offers comprehensive insights for those interested in critical dimensions of climate justice and governance."
              />
              <ThematicCard
                icon={<GraduationCap className="w-8 h-8" />}
                title="Educational Materials"
                color="red"
                content="Concise, visually engaging content designed for schools and colleges, making complex topics accessible to primary and secondary students."
                details="Distributed to partner institutions and available publicly on our website."
              />
              <ThematicCard
                icon={<Megaphone className="w-8 h-8" />}
                title="Awareness Campaigns"
                color="amber"
                content="Facilitating public sessions to spark dialogue and accountability, based on the principle that 'ignorance of the law is no excuse'."
                details="Tailored programs based on demographics to meet the specific needs of diverse populations."
              />
            </div>
          </section>

          {/* Detailed Content from Attachment */}
          <section className="space-y-12">
            <ScrollReveal delay={100} className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-6 text-sky-700 flex items-center gap-3">
                <BookOpen className="w-6 h-6" />
                White Paper
              </h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                The White Paper covers a range of topics related to climate justice and governance, encompassing
                subjects from human rights violations to the financial aspects connected to these issues. It is
                specifically tailored for individuals seeking to learn more about climate change, with a focus on Nepal.
                The content is designed to provide in-depth insights into various dimensions of climate justice and
                governance, offering a comprehensive resource for those interested in these critical matters.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-6 text-emerald-700 flex items-center gap-3">
                <GraduationCap className="w-6 h-6" />
                Educational Material
              </h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                The educational materials, on the other hand, are designed to be concise and visually engaging, making
                them accessible to a broader audience, particularly those in their early educational stages, such as
                primary, secondary, and higher secondary students. These materials will be distributed to schools and
                colleges that the thinkers have partnered with and will also be made publicly available on our website.
              </p>
            </ScrollReveal>

            <ScrollReveal
              delay={300}
              className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-100 mb-20"
            >
              <h3 className="text-2xl font-bold mb-6 text-amber-700 flex items-center gap-3">
                <Megaphone className="w-6 h-6" />
                Awareness Raising
              </h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                The awareness-raising initiatives focus on the principle that "ignorance of the law is no excuse" while
                protecting and promoting the rights of those who may not have ignored the law, but simply lack access to
                the necessary tools, resources, or information. These programs, conducted by the thinkers, are carefully
                designed based on age groups, educational backgrounds, and other relevant demographics to create
                materials that are specifically tailored to meet the needs of each population.
              </p>
            </ScrollReveal>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function ThematicCard({ icon, title, content, details, color }: any) {
  const colorMap: any = {
    blue: "bg-sky-50 text-sky-700 border-sky-100",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    amber: "bg-amber-50 text-amber-700 border-amber-100",
    red: "bg-red-50 text-red-700 border-red-100",
    teal: "bg-teal-100 text-teal-800 border-teal-200",
  }

  return (
    <div
      className={`p-8 rounded-3xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${colorMap[color]}`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-700 text-sm leading-relaxed mb-4">{content}</p>
      <p className="text-slate-500 text-xs italic">{details}</p>
    </div>
  )
}
