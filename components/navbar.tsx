"use client"

import Link from "next/link"
import Image from "next/image"
import MobileNav from "@/components/mobile-nav"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-dashed border-emerald-600/30 bg-[#FFFBF5]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FFFBF5]/60">
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center group">
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0 transition-transform duration-300 group-hover:rotate-6">
            <Image
              src="https://github.com/sanil18/biruwa/blob/main/assets/new-logo%20(1).png?raw=true"
              alt="Biruwa Logo"
              width={96}
              height={96}
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/think-tank" label="Think Tank" />
          <NavLink href="/#projects" label="Projects" />
          <NavLink href="/members" label="Members" />
          <NavLink href="/blogs" label="Blogs" />
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
