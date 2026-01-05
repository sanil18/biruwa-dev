import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Headphones, Radio, MessageCircle } from "lucide-react"
import StickyNote from "./sticky-note"

export default function PodcastSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Doodle elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-10 left-10 w-20 h-20 text-purple-500/10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="currentColor" />
          <path
            d="M19 10v2a7 7 0 0 1-14 0v-2M12 18.5V22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="9" y="22" width="6" height="2" rx="1" fill="currentColor" />
        </svg>

        <svg
          className="absolute bottom-10 right-10 w-24 h-24 text-purple-500/10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" fill="currentColor" />
          <path
            d="M13.73 21a2 2 0 0 1-3.46 0"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          className="absolute top-1/2 right-1/4 w-16 h-16 text-purple-500/10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 12h-4l-3 9L9 3l-3 9H2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="container">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 border-2 border-dashed border-purple-500 relative shadow-lg">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
            <StickyNote color="purple" rotate="rotate-2">
              <span className="font-handwriting text-lg text-slate-800 flex items-center">
                <Headphones className="h-4 w-4 mr-2 text-purple-500" /> Our Podcast
              </span>
            </StickyNote>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
            <div>
              <h2 className="text-3xl font-bold mb-4 font-display">Guffai ta Ho Ni</h2>
              <p className="text-slate-700 mb-6">
                Join our thought-provoking conversations on climate justice, environmental law, and youth activism in
                Nepal. New episodes every week!
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex gap-4 p-3 rounded-lg bg-purple-50 border border-dashed border-purple-200">
                  <div className="bg-purple-500 rounded-full p-2 h-10 w-10 flex items-center justify-center shrink-0">
                    <Radio className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">Beyond the Bag: Plastic, Culture, and the Environment</h3>
                    <p className="text-sm text-slate-600">
                      Exploring the intersection of cultural practices and environmental impact
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-3 rounded-lg bg-purple-50 border border-dashed border-purple-200">
                  <div className="bg-purple-500 rounded-full p-2 h-10 w-10 flex items-center justify-center shrink-0">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">Climate Justice in South Asia</h3>
                    <p className="text-sm text-slate-600">Exploring regional cooperation for climate action</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  asChild
                  className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-6 font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Link
                    href="https://creators.spotify.com/pod/profile/biruwa/episodes/Beyond-the-Bag-Plastic--Culture--and-the-Environment-e2ol74n"
                    target="_blank"
                  >
                    <Headphones className="mr-2 h-4 w-4" /> Listen Now
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-purple-500 text-purple-600 hover:bg-purple-50 rounded-full px-6 font-medium"
                >
                  <Link href="#">All Episodes</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-purple-100 rounded-2xl rotate-3"></div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border-2 border-dashed border-purple-300">
                <Image
                  src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop"
                  alt="Podcast recording session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="bg-white/90 rounded-full p-4 shadow-lg">
                    <Radio className="h-10 w-10 text-purple-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
