import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 py-8 sm:py-12">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-6 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8 flex-shrink-0">
                <Image
                  src="https://raw.githubusercontent.com/sanil18/biruwa/refs/heads/main/assets/Biruwa%20Logo%20(2).png"
                  alt="Biruwa Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg font-display">Biruwa</h3>
            </div>
            <p className="text-sm text-slate-400">
              Youth-led climate justice collective working towards environmental sustainability in Nepal.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/think-tank" className="hover:text-emerald-400 transition-colors">
                  Think Tank
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-emerald-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/members" className="hover:text-emerald-400 transition-colors">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/#podcast" className="hover:text-emerald-400 transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/biruwa/?igsh=bzBnNHRrcmI0dTAz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                >
                  Instagram
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/biruwa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                >
                  LinkedIn
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; 2025 Biruwa. All rights reserved.</p>
          <div className="flex gap-5 mt-3 sm:mt-0">
            <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-emerald-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-emerald-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
