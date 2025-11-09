import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - EcoPilot',
  description: 'Learn how EcoPilot collects, uses, and protects your personal data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-[1000px] px-6 py-16">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Privacy Policy
        </h1>

        {/* Introduction */}
        <p className="text-base text-gray-800 leading-relaxed mt-3">
          At EcoPilot, we take your privacy seriously. This Privacy Policy explains how we collect, use, store, 
          and protect your personal information when you use our carbon management platform. We are committed to 
          transparency and giving you control over your data.
        </p>
        <p className="text-base text-gray-800 leading-relaxed mt-3">
          By using EcoPilot, you agree to the practices described in this policy. If you have any questions, 
          please contact us at{' '}
          <a 
            href="mailto:privacy@ecopilot.app" 
            className="text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2ecc71]"
            aria-label="Email privacy team"
          >
            privacy@ecopilot.app
          </a>.
        </p>

        {/* Information We Collect */}
        <section>
          <h2 className="text-lg font-semibold mt-6 text-gray-900">
            Information We Collect
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            We collect information you provide directly to us, such as when you create an account, use our platform, 
            or contact our support team. This may include your name, email address, company information, and carbon 
            footprint data you input into the system.
          </p>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            We also automatically collect certain technical information, including IP addresses, browser type, 
            device information, and usage patterns to improve our service and ensure security.
          </p>
        </section>

        {/* How We Use Data */}
        <section>
          <h2 className="text-lg font-semibold mt-6 text-gray-900">
            How We Use Data
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            Your data is used to provide, maintain, and improve EcoPilot&apos;s carbon management services. 
            We use your information to generate emissions reports, provide insights, ensure platform security, 
            and communicate important updates about your account or our services.
          </p>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            We do not sell your personal information to third parties. Data may be shared with trusted service 
            providers who assist us in operating our platform, but only under strict confidentiality agreements.
          </p>
        </section>

        {/* Data Retention */}
        <section>
          <h2 className="text-lg font-semibold mt-6 text-gray-900">
            Data Retention
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            We retain your personal data for as long as your account is active or as needed to provide you services. 
            If you choose to close your account, we will delete or anonymize your personal information within 90 days, 
            unless we are required by law to retain certain information.
          </p>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            Aggregated and anonymized data that cannot be used to identify you may be retained for analytical purposes 
            and platform improvement.
          </p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-lg font-semibold mt-6 text-gray-900">
            Your Rights
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            Under GDPR and other privacy regulations, you have the right to access, correct, delete, or export your 
            personal data. You can also object to certain data processing activities or request that we restrict 
            processing of your information.
          </p>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            To exercise these rights, please contact our privacy team. We will respond to your request within 30 days. 
            You also have the right to lodge a complaint with your local data protection authority.
          </p>
        </section>

        {/* Cookies & Tracking */}
        <section>
          <h2 className="text-lg font-semibold mt-6 text-gray-900">
            Cookies &amp; Tracking
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            EcoPilot uses cookies and similar tracking technologies to enhance your experience, analyze platform usage, 
            and deliver personalized content. You can manage your cookie preferences through your browser settings.
          </p>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            For more detailed information about the cookies we use, please visit our{' '}
            <span 
              className="text-black underline cursor-not-allowed opacity-60"
              aria-label="Cookie settings (coming soon)"
              title="Cookie Settings - Feature coming soon"
            >
              Cookie Settings
            </span>{' '}
            (feature coming soon).
          </p>
        </section>

        {/* Contact Privacy */}
        <section>
          <h2 className="text-lg font-semibold mt-6 text-gray-900">
            Contact Privacy
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            If you have questions about this Privacy Policy, need to exercise your data rights, or have privacy concerns, 
            please reach out to our dedicated privacy team.
          </p>
          <div className="mt-4">
            <p className="text-base text-gray-800">
              <strong>Email:</strong>{' '}
              <a 
                href="mailto:privacy@ecopilot.app" 
                className="text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2ecc71]"
                aria-label="Email privacy team"
              >
                privacy@ecopilot.app
              </a>
            </p>
          </div>
        </section>

        {/* Last Updated */}
        <section className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Last Updated:</strong> November 9, 2025
          </p>
          <p className="text-sm text-gray-600 mt-2">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by 
            email or through a prominent notice on our platform.
          </p>
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

