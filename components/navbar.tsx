"use client"

import Link from "next/link"
import Image from "next/image"
import MobileNav from "@/components/mobile-nav"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-dashed border-emerald-600/30 bg-[#FFFBF5]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FFFBF5]/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12">
            <Image
              src="https://raw.githubusercontent.com/sanil18/biruwa/refs/heads/main/assets/Biruwa%20Logo%20(2).png"
              alt="Biruwa Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-handwriting text-xl sm:text-2xl font-bold text-emerald-700">Biruwa</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/think-tank" label="Think Tank" />
          <NavLink href="/#projects" label="Projects" />
          <NavLink href="/members" label="Members" />
          <NavLink href="/#podcast" label="Podcast" />
          <NavLink href="/contact" label="Contact" />
        </nav>

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="font-medium text-slate-800 hover:text-emerald-700 transition-colors relative group text-sm lg:text-base"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-yellow-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
    </Link>
  )
}
