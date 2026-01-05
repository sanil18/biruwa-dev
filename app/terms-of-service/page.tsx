import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b-2 border-dashed border-emerald-600/30 bg-[#FFFBF5]/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center group">
            <div className="relative h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 transition-transform duration-300 group-hover:rotate-6">
              <Image
                src="https://github.com/sanil18/biruwa/blob/main/assets/new-logo%20(1).png?raw=true"
                alt="Biruwa Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>
      </header>

      <main className="flex-grow container px-4 sm:px-6 py-12 sm:py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900">Terms of Service</h1>
        <div className="prose prose-lg max-w-none text-slate-700">
          <p className="text-sm text-slate-500 mb-8">Last Updated: January 5, 2026</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this
            agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on
            Biruwa's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a
            transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">3. Disclaimer</h2>
          <p>
            The materials on Biruwa's website are provided on an 'as is' basis. Biruwa makes no warranties, expressed or
            implied, and hereby disclaims and negates all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">4. Limitations</h2>
          <p>
            In no event shall Biruwa or its suppliers be liable for any damages (including, without limitation, damages
            for loss of data or profit, or due to business interruption) arising out of the use or inability to use the
            materials on Biruwa's website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">5. Accuracy of Materials</h2>
          <p>
            The materials appearing on Biruwa's website could include technical, typographical, or photographic errors.
            Biruwa does not warrant that any of the materials on its website are accurate, complete, or current. Biruwa
            may make changes to the materials contained on its website at any time without notice.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">6. Links</h2>
          <p>
            Biruwa has not reviewed all of the sites linked to its website and is not responsible for the contents of
            any such linked site. The inclusion of any link does not imply endorsement by Biruwa of the site. Use of any
            such linked website is at the user's own risk.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">7. Modifications</h2>
          <p>
            Biruwa may revise these terms of service for its website at any time without notice. By using this website,
            you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Nepal, and you
            irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">9. User Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
            <li>Post or transmit obscene, offensive, or unlawful material</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Transmit viruses or any other malicious code</li>
            <li>Harass, abuse, or threaten other users</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">10. Intellectual Property Rights</h2>
          <p>
            All content on this website, including text, graphics, logos, images, and software, is the property of
            Biruwa or its content suppliers and is protected by international copyright laws. You may not reproduce,
            distribute, transmit, or commercially exploit any content without our prior written permission.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">11. Limitation of Liability</h2>
          <p>
            In no event shall Biruwa be liable for any indirect, incidental, special, or consequential damages arising
            out of or in connection with your use of this website or the materials contained thereon.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">12. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Biruwa and its officers, directors, employees, and agents from any
            claim or demand arising out of your use of the website or materials contained thereon.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">13. Severability</h2>
          <p>
            If any provision of these terms of service is found to be invalid or unenforceable, that provision shall be
            severed, and the remaining provisions shall continue in full force and effect.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">14. Contact Information</h2>
          <p>If you have questions about these Terms of Service, please contact us at:</p>
          <ul className="list-none pl-0 mb-4">
            <li>Email: campaignbiruwa@gmail.com</li>
            <li>Website: www.biruwa.org</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
