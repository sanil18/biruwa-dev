import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b-2 border-dashed border-emerald-600/30 bg-[#FFFBF5]/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
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
        </div>
      </header>

      <main className="flex-grow container px-4 sm:px-6 py-12 sm:py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-slate-700">
          <p className="text-sm text-slate-500 mb-8">Last Updated: December 8, 2025</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">1. Introduction</h2>
          <p>
            Biruwa ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and otherwise process personal information on our website and
            through our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">2. Information We Collect</h2>
          <h3 className="text-lg font-semibold mt-6 mb-3 text-slate-800">Information You Provide Directly</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Contact information (name, email address, phone number) when you reach out to us</li>
            <li>Communications and feedback you send to us</li>
            <li>Any other information you voluntarily provide</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-slate-800">Information Collected Automatically</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Device information (browser type, operating system, device identifiers)</li>
            <li>Usage information (pages visited, time spent, referring URL)</li>
            <li>Location information (IP address)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">3. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and improve our services and website</li>
            <li>Respond to your inquiries and communications</li>
            <li>Send newsletters and promotional materials (with your consent)</li>
            <li>Analyze usage patterns and optimize user experience</li>
            <li>Protect against fraud and maintain security</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">4. Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share information with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Service providers who assist in operating our website and conducting our business</li>
            <li>Law enforcement when required by law</li>
            <li>Other parties with your consent</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information against unauthorized
            access, alteration, disclosure, and destruction. However, no method of transmission over the Internet is
            100% secure.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Data portability where applicable</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">7. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to enhance your experience. You can control cookie preferences
            through your browser settings. Disabling cookies may affect website functionality.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for their privacy practices.
            We encourage you to review their privacy policies.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">9. Children's Privacy</h2>
          <p>
            Our services are not directed to children under 13. We do not knowingly collect information from children
            under 13. If we become aware of such collection, we will take immediate action.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">10. International Data Transfers</h2>
          <p>
            If you are located outside Nepal, your information may be transferred to and processed in Nepal or other
            jurisdictions. By using our services, you consent to such transfers.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">11. Changes to Privacy Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last
            Updated" date. Continued use of our services constitutes acceptance of changes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">12. Contact Us</h2>
          <p>If you have privacy concerns or questions, please contact us at:</p>
          <ul className="list-none pl-0 mb-4">
            <li>Email: contact@biruwa.org</li>
            <li>Website: www.biruwa.org</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
