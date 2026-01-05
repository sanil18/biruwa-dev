"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    console.log('Menu toggled, current state:', isOpen)
    setIsOpen(!isOpen)
  }
  const closeMenu = () => {
    console.log('Menu closed')
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden z-[60] relative"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          {/* Test overlay - bright color to ensure visibility */}
          <div
            className="fixed inset-0 bg-red-500/30 z-[60] md:hidden"
            onClick={closeMenu}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          />
          <div
            className="fixed top-16 left-0 right-0 bg-[#FFFBF5] border-b-2 border-dashed border-emerald-600/30 z-[70] md:hidden shadow-xl"
            style={{ position: 'fixed', top: '64px', left: 0, right: 0, backgroundColor: '#FFFBF5' }}
          >
            <nav className="container py-6 px-4">
              <div className="flex flex-col gap-4">
                <div className="text-emerald-700 font-bold mb-2">Navigation Menu:</div>
                <Link
                  href="/"
                  className="font-medium text-slate-800 hover:text-emerald-700 transition-colors py-3 px-4 rounded-lg hover:bg-emerald-50 border border-transparent hover:border-emerald-200 block"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="font-medium text-slate-800 hover:text-emerald-700 transition-colors py-3 px-4 rounded-lg hover:bg-emerald-50 border border-transparent hover:border-emerald-200 block"
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  href="/think-tank"
                  className="font-medium text-slate-800 hover:text-emerald-700 transition-colors py-3 px-4 rounded-lg hover:bg-emerald-50 border border-transparent hover:border-emerald-200 block"
                  onClick={closeMenu}
                >
                  Think Tank
                </Link>
                <Link
                  href="/#projects"
                  className="font-medium text-slate-800 hover:text-emerald-700 transition-colors py-3 px-4 rounded-lg hover:bg-emerald-50 border border-transparent hover:border-emerald-200 block"
                  onClick={closeMenu}
                >
                  Projects
                </Link>
                <Link
                  href="/members"
                  className="font-medium text-slate-800 hover:text-emerald-700 transition-colors py-3 px-4 rounded-lg hover:bg-emerald-50 border border-transparent hover:border-emerald-200 block"
                  onClick={closeMenu}
                >
                  Members
                </Link>
                <Link
                  href="/blogs"
                  className="font-medium text-slate-800 hover:text-emerald-700 transition-colors py-3 px-4 rounded-lg hover:bg-emerald-50 border border-transparent hover:border-emerald-200 block"
                  onClick={closeMenu}
                >
                  Blogs
                </Link>
                <Link
                  href="/#podcast"
                  className="font-medium text-slate-800 hover:text-emerald-700 transition-colors py-3 px-4 rounded-lg hover:bg-emerald-50 border border-transparent hover:border-emerald-200 block"
                  onClick={closeMenu}
                >
                  Podcast
                </Link>
                <Link
                  href="/contact"
                  className="font-medium text-slate-800 hover:text-emerald-700 transition-colors py-3 px-4 rounded-lg hover:bg-emerald-50 border border-transparent hover:border-emerald-200 block"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}
