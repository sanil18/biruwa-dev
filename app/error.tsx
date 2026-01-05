"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, Home } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
      <div className="text-center px-4 max-w-md mx-auto">
        {/* Error Illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
            <div className="text-4xl">⚠️</div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong!</h1>
        <p className="text-gray-600 mb-8">
          We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="bg-red-600 hover:bg-red-700 flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>
          <Button variant="outline" asChild className="flex items-center gap-2">
            <Link href="/">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </Button>
        </div>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === "development" && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
              Error Details (Development Only)
            </summary>
            <pre className="mt-2 p-4 bg-gray-100 rounded text-xs overflow-auto">{error.message}</pre>
          </details>
        )}
      </div>
    </div>
  )
}
