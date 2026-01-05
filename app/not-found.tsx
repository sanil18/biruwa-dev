"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="text-center px-4 max-w-md mx-auto">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-green-600 mb-4">404</div>
          <div className="w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <div className="text-4xl">🌱</div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for seems to have wandered off like a leaf in the wind. Let's get you back to growing
          positive change!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Or explore these sections:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/about" className="text-green-600 hover:text-green-700 hover:underline">
              About Us
            </Link>
            <Link href="/think-tank" className="text-green-600 hover:text-green-700 hover:underline">
              Think Tank
            </Link>
            <Link href="/members" className="text-green-600 hover:text-green-700 hover:underline">
              Members
            </Link>
            <Link href="/#projects" className="text-green-600 hover:text-green-700 hover:underline">
              Our Projects
            </Link>
            <Link href="/#podcast" className="text-green-600 hover:text-green-700 hover:underline">
              Podcast
            </Link>
            <Link href="/contact" className="text-green-600 hover:text-green-700 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
