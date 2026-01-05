"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload, CheckCircle } from "lucide-react"
import StickyNote from "@/components/sticky-note"

export default function DonationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Here you would typically handle the form submission
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-dashed border-green-500 relative shadow-lg text-center">
        <div className="absolute -top-3 sm:-top-5 left-1/2 transform -translate-x-1/2">
          <StickyNote color="green" rotate="rotate-1">
            <span className="font-handwriting text-base sm:text-lg">Thank You!</span>
          </StickyNote>
        </div>

        <div className="mt-4 sm:mt-6">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 font-display text-green-700">Donation Received!</h3>
          <p className="text-slate-700">
            Thank you for your generous contribution. We'll send you a confirmation email shortly.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-dashed border-amber-500 relative shadow-lg">
      <div className="absolute -top-3 sm:-top-5 left-4 sm:left-8">
        <StickyNote color="yellow" rotate="rotate-2">
          <span className="font-handwriting text-base sm:text-lg">Donation Details</span>
        </StickyNote>
      </div>

      <div className="mt-4 sm:mt-6">
        <h3 className="text-lg sm:text-xl font-bold mb-4 font-display">Confirm Your Donation</h3>
        <p className="text-sm text-slate-600 mb-6">
          Please fill out this form after making your donation to help us track and acknowledge your contribution.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Donation Amount *</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500">NPR</span>
                <input
                  type="number"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Payment Method *</label>
            <select
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="">Select payment method</option>
              <option value="esewa">eSewa</option>
              <option value="khalti">Khalti</option>
              <option value="ime-pay">IME Pay</option>
              <option value="fonepay">Fonepay</option>
              <option value="bank-transfer">Bank Transfer</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Transaction ID/Reference Number</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Enter transaction ID or reference number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Upload Payment Screenshot (Optional)
            </label>
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-amber-400 transition-colors cursor-pointer">
              <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm text-slate-600 mb-2">Click to upload or drag and drop</p>
              <p className="text-xs text-slate-500">PNG, JPG, PDF up to 5MB</p>
              <input type="file" className="hidden" accept="image/*,.pdf" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
            <textarea
              rows={3}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Leave a message or specify how you'd like your donation to be used..."
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="newsletter"
              className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-slate-300 rounded"
            />
            <label htmlFor="newsletter" className="text-sm text-slate-700">
              I would like to receive updates about Biruwa's work and impact via email
            </label>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="anonymous"
              className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-slate-300 rounded"
            />
            <label htmlFor="anonymous" className="text-sm text-slate-700">
              I prefer to remain anonymous in public acknowledgments
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full py-3 font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            Submit Donation Details
          </Button>

          <p className="text-xs text-slate-500 text-center">
            By submitting this form, you confirm that the donation details are accurate and agree to our terms of
            service.
          </p>
        </form>
      </div>
    </div>
  )
}
