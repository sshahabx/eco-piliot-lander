import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Legal - EcoPilot',
  description: 'Legal information and policies for EcoPilot carbon management platform.',
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-[1000px] px-6 py-16">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Legal
        </h1>

        {/* Introduction */}
        <p className="text-base text-gray-800 leading-relaxed mt-3">
          This page contains legal information regarding the use of EcoPilot&apos;s carbon management platform. 
          For specific legal inquiries or questions, please contact our legal team at{' '}
          <a 
            href="mailto:legal@ecopilot.app" 
            className="text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2ecc71]"
            aria-label="Email legal team"
          >
            legal@ecopilot.app
          </a>.
        </p>

        {/* Terms of Service Reference */}
        <section>
          <h2 className="text-lg font-semibold mt-6 text-gray-900">
            Terms of Service (Reference)
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            By using EcoPilot&apos;s platform, you agree to our Terms of Service. 
            Please review our{' '}
            <Link 
              href="/terms" 
              className="text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2ecc71]"
              aria-label="View Terms of Service"
            >
              full Terms of Service page
            </Link>{' '}
            for detailed information on account usage, acceptable use policies, and service limitations.
          </p>
        </section>

        {/* Data Processing & GDPR */}
        <section>
          <h2 className="text-lg font-semibold mt-6 text-gray-900">
            Data Processing &amp; GDPR
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            EcoPilot is committed to GDPR compliance and responsible data processing. 
            We act as both a data controller and processor, ensuring your data is handled with the highest standards of security and privacy.
          </p>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            For detailed information on how we collect, process, and protect your data, please visit our{' '}
            <Link 
              href="/privacy" 
              className="text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2ecc71]"
              aria-label="View Privacy Policy"
            >
              Privacy Policy
            </Link>.
          </p>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-lg font-semibold mt-6 text-gray-900">
            Intellectual Property
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            All content, features, and functionality on the EcoPilot platform, including but not limited to text, graphics, 
            logos, icons, images, and software, are the exclusive property of EcoPilot and are protected by international 
            copyright, trademark, and other intellectual property laws.
          </p>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            Unauthorized reproduction, distribution, or use of any materials from the platform is strictly prohibited 
            without prior written consent from EcoPilot.
          </p>
        </section>

        {/* Contact Legal */}
        <section>
          <h2 className="text-lg font-semibold mt-6 text-gray-900">
            Contact Legal
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            For legal questions, compliance inquiries, or to request our Data Processing Agreement (DPA), please reach out to 
            our legal team. We typically respond to legal inquiries within 2-3 business days.
          </p>
          <div className="mt-4">
            <p className="text-base text-gray-800">
              <strong>Email:</strong>{' '}
              <a 
                href="mailto:legal@ecopilot.app" 
                className="text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2ecc71]"
                aria-label="Email legal team"
              >
                legal@ecopilot.app
              </a>
            </p>
            <p className="text-base text-gray-800 mt-2">
              <strong>Address:</strong> [Legal team will provide registered business address]
            </p>
          </div>
        </section>

        {/* Back to Home Link */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <Link 
            href="/" 
            className="text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2ecc71] inline-flex items-center gap-2"
            aria-label="Back to home page"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}

