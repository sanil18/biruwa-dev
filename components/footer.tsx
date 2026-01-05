import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 py-8 sm:py-12">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-6 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-20 w-20 flex-shrink-0">
                <Image
                  src="https://github.com/sanil18/biruwa/blob/main/assets/new-logo%20(1).png?raw=true"
                  alt="Biruwa Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
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
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/biruwa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@biruwafoundation?_r=1&_t=ZS-92oNVpKhXmS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V18c0 1.94-.66 3.82-1.88 5.32-1.22 1.5-2.95 2.58-4.87 3.03-1.92.45-3.95.28-5.76-.48-1.81-.76-3.32-2.12-4.26-3.84-.94-1.72-1.29-3.71-.98-5.64.31-1.93 1.25-3.72 2.67-5.07 1.42-1.35 3.25-2.22 5.2-2.46 1.95-.24 3.94.13 5.67 1.05V10c-1.45-1.04-3.32-1.41-5.04-1.01-1.72.4-3.21 1.48-4.11 2.99-.9 1.51-1.16 3.32-.71 5.04.45 1.72 1.58 3.21 3.12 4.11 1.54.9 3.42 1.11 5.12.59 1.7-.52 3.1-1.79 3.86-3.46.26-.59.4-1.22.41-1.86.02-2.73 0-5.46.01-8.19-.01-1.13-.01-2.26 0-3.39z" />
                  </svg>
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; 2026 Biruwa. All rights reserved.</p>
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
