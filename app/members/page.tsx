"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BackgroundScene from "@/components/background_scene"
import StickyNote from "@/components/sticky-note"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"

const FOUNDERS = [
  {
    name: "Aashika Ojha",
    image: "https://github.com/sanil18/biruwa/blob/main/assets/Aashika.jpg?raw=true",
    role: "Founder",
    bio: "Meet Aashika, a law student and research enthusiast at Nepal Law Campus. She celebrates nature, loves traveling and swimming, and cares deeply about human rights and climate justice.",
  },
  {
    name: "Babita Tamang",
    image: "https://github.com/sanil18/biruwa/blob/main/assets/Babita.jpg?raw=true",
    role: "Founder",
    bio: "Meet Babita, a law graduate and intersectional youth activist. She enjoys critical discussions, books, and writing, often seen at MUNs and forums—and when off-duty, doting on cats, trees, and flowers.",
  },
  {
    name: "Garima Bista",
    image: "https://github.com/sanil18/biruwa/blob/main/assets/Garima.jpg?raw=true",
    role: "Founder",
    bio: "Meet Garima, a lawyer with 3+ years in human rights. She loves tea, books, and her dog Luna, and brings a circular-economy lens to inspire sustainable habits and a greener society.",
  },
  {
    name: "Jeena Yadav",
    image: "https://github.com/sanil18/biruwa/blob/main/assets/Jeena%20.jpg?raw=true",
    role: "Founder",
    bio: "Meet Jeena, a 2nd-year law student advocating eco-friendly development, climate justice, and environmental rights through informed legal action.",
  },
  {
    name: "Shistata Bhattarai",
    image: "https://github.com/sanil18/biruwa/blob/main/assets/shistata.jpg?raw=true",
    role: "Founder",
    bio: "Meet Shistata, an ACCA student with a BBS who applies financial skills to climate justice and sustainability—focusing on accountability and transparent fund management.",
  },
].sort((a, b) => a.name.localeCompare(b.name))

const MEMBERS = [
  {
    name: "Anisha Tamang",
    role: "Legal Enthusiast",
    bio: "Meet Anisha, a law student who writes to inform, inspire, and spark change. She explores how policies shape justice, society, and the environment.",
    image: "https://github.com/sanil18/biruwa/blob/main/assets/anisha.jpg?raw=true",
  },
  {
    name: "Anush Nepal",
    role: "Engineering Student",
    bio: "Meet Anush, an Electrical Engineering graduate passionate about community engagement and social impact. He is active in student leadership and advocacy.",
    image: "https://github.com/sanil18/biruwa/blob/main/assets/anush.jpg?raw=true",
  },
  {
    name: "Anushka Devkota",
    role: "Law Student & SEO Writer",
    bio: "Meet Anushka, a B.A.LL.B. student and SEO writer who enjoys research-driven content. She is passionate about youth engagement and social impact.",
    image: "https://github.com/sanil18/biruwa/blob/main/assets/anushka.jpeg?raw=true",
  },
  {
    name: "Biplab Poudel",
    role: "Business Studies & Digital Marketing",
    bio: "Meet Biplab, a Business Studies graduate with hands-on digital marketing experience. He focuses on social media strategy, website optimization, and basic SEO to grow Biruwa's visibility.",
    image: "https://github.com/sanil18/biruwa/blob/main/assets/biplab.JPG?raw=true",
  },
  {
    name: "Pragyan Bhattarai",
    role: "Backend Developer & Scout",
    bio: "Meet Pragyan, an engineering undergraduate focused on backend development and emergency AI. He believes in using technology for community impact.",
    image: "https://github.com/sanil18/biruwa/blob/main/assets/pragyan.jpg?raw=true",
  },
  {
    name: "Sanil Dulal",
    role: "Cybersecurity Enthusiast",
    bio: "Meet Sanil, a self-taught cybersecurity enthusiast with experience in DevOps, offensive security, and hands-on coding. He loves reading books, spending time in nature, and learning from the world around him.",
    image: "https://github.com/sanil18/biruwa/blob/main/assets/sanil.jpg?raw=true",
  },
].sort((a, b) => a.name.localeCompare(b.name))

export default function MembersPage() {
  return (
    <div className="wrapper min-h-screen flex flex-col">
      <BackgroundScene />
      <Navbar />

      <main className="flex-grow py-12 sm:py-20 relative px-4 sm:px-6">
        <div className="container max-w-6xl">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-block mb-6">
              <StickyNote color="green" rotate="rotate-1">
                <span className="font-handwriting text-lg text-slate-800">Our Community</span>
              </StickyNote>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 font-display relative inline-block">
              Passionate Individuals
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path
                  d="M0,5 Q40,0 80,5 T160,5 T240,5"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </h1>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed mt-4">
              Meet the diverse collective of thinkers, builders, and activists driving environmental governance and
              climate justice in Nepal.
            </p>
          </ScrollReveal>

          {/* Founders Section */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-emerald-700 font-display">Founders</h2>
              <div className="h-px flex-grow bg-dashed border-b border-emerald-600/30" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {FOUNDERS.map((founder, i) => (
                <ScrollReveal key={founder.name} delay={i * 100}>
                  <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-emerald-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-emerald-200">
                    <div className="aspect-[4/4.5] relative overflow-hidden bg-emerald-50">
                      <Image
                        src={founder.image || "/placeholder.svg"}
                        alt={founder.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-8 relative">
                      <div className="absolute -top-10 right-8 bg-white p-3 rounded-full shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <div className="bg-emerald-100 p-2 rounded-full">
                          <svg
                            className="w-6 h-6 text-emerald-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-1">{founder.name}</h4>
                      <p className="text-emerald-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                        {founder.role}
                      </p>
                      <div className="h-1 w-12 bg-amber-400 mb-6 transition-all duration-500 group-hover:w-full rounded-full" />
                      <p className="text-slate-600 text-sm leading-relaxed">{founder.bio}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Core Members Section */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-emerald-700 font-display">Core Members</h2>
              <div className="h-px flex-grow bg-dashed border-b border-emerald-600/30" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {MEMBERS.map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 100}>
                  <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-emerald-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-emerald-200">
                    <div className="aspect-[4/4.5] relative overflow-hidden bg-emerald-50">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-8 relative">
                      <div className="absolute -top-10 right-8 bg-white p-3 rounded-full shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <div className="bg-emerald-100 p-2 rounded-full">
                          <svg
                            className="w-6 h-6 text-emerald-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h4>
                      <p className="text-emerald-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                        {member.role}
                      </p>
                      <div className="h-1 w-12 bg-amber-400 mb-6 transition-all duration-500 group-hover:w-full rounded-full" />
                      <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
