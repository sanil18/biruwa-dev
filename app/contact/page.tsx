"use client"

import type React from "react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import StickyNote from "@/components/sticky-note"
import { ArrowRight, Instagram, Linkedin } from "lucide-react"
import Footer from "@/components/footer"

type SubmitStatus = { type: "success" | "error"; message: string } | null
interface ContactFormData {
  name: string
  email: string
  reason: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    reason: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const formDataToSend = new FormData()
    formDataToSend.append("access_key", "0f075c1e-147d-4344-a03c-0a251a55da0b")
    formDataToSend.append("name", formData.name)
    formDataToSend.append("email", formData.email)
    formDataToSend.append("message", formData.reason)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus({ type: "success", message: "Thank you! Your message has been sent successfully." })
        setFormData({ name: "", email: "", reason: "" })
      } else {
        setSubmitStatus({ type: "error", message: data.message || "Failed to send message. Please try again." })
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "An error occurred. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="wrapper">
      {/* Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-10 sm:py-16 md:py-20 overflow-hidden">
          <div className="container relative px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-4 sm:mb-6">
                <StickyNote color="green" rotate="rotate-2">
                  <span className="font-handwriting text-sm sm:text-lg text-slate-800">Get in Touch</span>
                </StickyNote>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight relative font-display">
                <span className="relative inline-block">
                  Let's Work Together
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
                Have a question or want to collaborate? We'd love to hear from you. Reach out and let's discuss how we
                can create positive change together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-10 sm:py-12 relative bg-gradient-to-br from-emerald-50/30 via-amber-50/20 to-blue-50/30">
          <div className="container px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Form Card */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-dashed border-emerald-600 shadow-lg relative">
                  <div className="absolute -top-3 sm:-top-5 left-6 sm:left-10">
                    <StickyNote color="blue" rotate="-rotate-2">
                      <span className="font-handwriting text-sm sm:text-lg">Contact Us</span>
                    </StickyNote>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5 mt-4">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-800 mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 transition-colors"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-2">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 transition-colors"
                      />
                    </div>

                    {/* Reason Field */}
                    <div>
                      <label htmlFor="reason" className="block text-sm font-semibold text-slate-800 mb-2">
                        Message / Reason for Contacting
                      </label>
                      <Textarea
                        id="reason"
                        name="reason"
                        placeholder="Tell us why you're reaching out..."
                        value={formData.reason}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 transition-colors min-h-32 resize-none"
                      />
                    </div>

                    {/* Status Messages */}
                    {submitStatus && (
                      <div
                        className={`p-4 rounded-lg text-sm font-medium ${submitStatus.type === "success" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                          }`}
                      >
                        {submitStatus.message}
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 py-4 font-medium shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Info Card */}
              <div>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-dashed border-emerald-600 shadow-md">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">Other Ways to Connect</h3>
                  <div className="space-y-3">
                    <p className="text-sm text-slate-700">
                      <strong>Email:</strong>{" "}
                      <a href="mailto:campaignbiruwa@gmail.com" className="text-emerald-600 hover:text-emerald-700">
                        campaignbiruwa@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-slate-700 flex items-center gap-2">
                      <div className="w-5 h-5 flex items-center justify-center bg-emerald-100 rounded-full">
                        <Instagram className="w-3 h-3 text-emerald-600" />
                      </div>
                      <strong>Instagram:</strong>{" "}
                      <a
                        href="https://www.instagram.com/biruwa/?igsh=bzBnNHRrcmI0dTAz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 font-medium"
                      >
                        @biruwa
                      </a>
                    </p>
                    <p className="text-sm text-slate-700 flex items-center gap-2">
                      <div className="w-5 h-5 flex items-center justify-center bg-emerald-100 rounded-full">
                        <Linkedin className="w-3 h-3 text-emerald-600" />
                      </div>
                      <strong>LinkedIn:</strong>{" "}
                      <a
                        href="https://www.linkedin.com/company/biruwa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 font-medium"
                      >
                        Biruwa
                      </a>
                    </p>
                    <p className="text-sm text-slate-700 flex items-center gap-2">
                      <div className="w-5 h-5 flex items-center justify-center bg-emerald-100 rounded-full">
                        <svg
                          viewBox="0 0 24 24"
                          width="12"
                          height="12"
                          fill="currentColor"
                          className="text-emerald-600"
                        >
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V18c0 1.94-.66 3.82-1.88 5.32-1.22 1.5-2.95 2.58-4.87 3.03-1.92.45-3.95.28-5.76-.48-1.81-.76-3.32-2.12-4.26-3.84-.94-1.72-1.29-3.71-.98-5.64.31-1.93 1.25-3.72 2.67-5.07 1.42-1.35 3.25-2.22 5.2-2.46 1.95-.24 3.94.13 5.67 1.05V10c-1.45-1.04-3.32-1.41-5.04-1.01-1.72.4-3.21 1.48-4.11 2.99-.9 1.51-1.16 3.32-.71 5.04.45 1.72 1.58 3.21 3.12 4.11 1.54.9 3.42 1.11 5.12.59 1.7-.52 3.1-1.79 3.86-3.46.26-.59.4-1.22.41-1.86.02-2.73 0-5.46.01-8.19-.01-1.13-.01-2.26 0-3.39z" />
                        </svg>
                      </div>
                      <strong>TikTok:</strong>{" "}
                      <a
                        href="https://www.tiktok.com/@biruwafoundation?_r=1&_t=ZS-92oNVpKhXmS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 font-medium"
                      >
                        @biruwafoundation
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
