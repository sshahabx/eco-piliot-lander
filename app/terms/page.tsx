import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - EcoPilot',
  description: 'Terms and conditions for using the EcoPilot carbon management platform.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-[1000px] px-6 py-16">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Terms of Service
        </h1>

        {/* Introduction */}
        <p className="text-base text-gray-800 leading-relaxed mt-3">
          Welcome to EcoPilot. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our 
          carbon management platform, including our website, application, and any related services. By creating 
          an account or using our services, you agree to be bound by these Terms.
        </p>
        <p className="text-base text-gray-800 leading-relaxed mt-3">
          Please read these Terms carefully. If you do not agree with any part of these Terms, you must not use 
          our platform. We may update these Terms from time to time, and your continued use constitutes acceptance 
          of the updated Terms.
        </p>

        {/* Acceptance of Terms */}
        <section>
          <h2 className="text-lg font-semibold mt-6 text-gray-900">
            Acceptance of Terms
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            By registering for an EcoPilot account, accessing our platform, or using any of our services, you 
            acknowledge that you have read, understood, and agree to be bound by these Terms of Service, as well 
            as our Privacy Policy.
          </p>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            If you are accepting these Terms on behalf of a company or organization, you represent and warrant 
            that you have the authority to bind that entity to these Terms, and references to &quot;you&quot; 
            in these Terms refer to that entity.
          </p>
        </section>

        {/* Account Responsibilities */}
        <section>
          <h2 className="text-lg font-semibold mt-6 text-gray-900">
            Account Responsibilities
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            You are responsible for maintaining the confidentiality of your account credentials and for all 
            activities that occur under your account. You must notify us immediately of any unauthorized access 
            or security breach.
          </p>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            You agree to provide accurate, complete, and current information during registration and to update 
            your information as necessary. You must not share your account with others or allow multiple users 
            to access your account unless explicitly permitted under your subscription plan.
          </p>
        </section>

        {/* Acceptable Use */}
        <section>
          <h2 className="text-lg font-semibold mt-6 text-gray-900">
            Acceptable Use
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            You agree to use EcoPilot&apos;s platform only for lawful purposes and in accordance with these Terms. 
            You must not use our services to transmit harmful code, engage in unauthorized access, interfere with 
            system integrity, or violate any applicable laws or regulations.
          </p>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            Prohibited activities include but are not limited to: attempting to reverse engineer our software, 
            scraping or mining data without permission, impersonating others, or using our platform to distribute 
            spam or malicious content. Violations may result in immediate account suspension or termination.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-lg font-semibold mt-6 text-gray-900">
            Limitation of Liability
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            EcoPilot provides its platform and services &quot;as is&quot; without warranties of any kind. 
            To the maximum extent permitted by law, we disclaim all liability for indirect, incidental, special, 
            or consequential damages arising from your use of our services.
          </p>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            Our total liability for any claims related to the platform shall not exceed the amount you paid 
            to EcoPilot in the 12 months preceding the claim. Some jurisdictions do not allow certain limitations 
            of liability, so these limitations may not apply to you.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="text-lg font-semibold mt-6 text-gray-900">
            Governing Law
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction to be 
            specified by legal team], without regard to its conflict of law provisions. Any disputes arising 
            from these Terms or your use of the platform shall be subject to the exclusive jurisdiction of the 
            courts located in [Location to be specified].
          </p>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            You and EcoPilot agree to attempt to resolve any disputes through good faith negotiations before 
            pursuing formal legal action. If negotiations fail, either party may initiate binding arbitration 
            or litigation as permitted under applicable law.
          </p>
        </section>

        {/* Service Modifications & Termination */}
        <section>
          <h2 className="text-lg font-semibold mt-6 text-gray-900">
            Service Modifications &amp; Termination
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            EcoPilot reserves the right to modify, suspend, or discontinue any aspect of our services at any time, 
            with or without notice. We may also terminate or suspend your account for violations of these Terms 
            or for any other reason at our discretion.
          </p>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            Upon termination, your right to use the platform will immediately cease. Provisions of these Terms 
            that by their nature should survive termination (including limitation of liability, indemnification, 
            and dispute resolution) will continue to apply.
          </p>
        </section>

        {/* Contact & Support */}
        <section>
          <h2 className="text-lg font-semibold mt-6 text-gray-900">
            Questions About These Terms
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mt-3">
            If you have questions about these Terms of Service or need assistance with your account, please 
            contact our support team. We&apos;re here to help.
          </p>
          <div className="mt-4">
            <p className="text-base text-gray-800">
              <strong>Email:</strong>{' '}
              <a 
                href="mailto:support@ecopilot.app" 
                className="text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2ecc71]"
                aria-label="Email support team"
              >
                support@ecopilot.app
              </a>
            </p>
            <p className="text-base text-gray-800 mt-2">
              <strong>Legal inquiries:</strong>{' '}
              <a 
                href="mailto:legal@ecopilot.app" 
                className="text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2ecc71]"
                aria-label="Email legal team"
              >
                legal@ecopilot.app
              </a>
            </p>
          </div>
        </section>

        {/* Last Updated */}
        <section className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Last Updated:</strong> [Date to be added by legal team]
          </p>
          <p className="text-sm text-gray-600 mt-2">
            We may revise these Terms from time to time. Material changes will be communicated via email or 
            platform notification at least 30 days before taking effect.
          </p>
        </section>

        {/* Contact Support CTA */}
        <div className="mt-8 p-6 bg-[#F7F7F5] rounded-lg border border-gray-200">
          <h3 className="text-base font-semibold text-gray-900">Need Help?</h3>
          <p className="text-sm text-gray-700 mt-2">
            Our support team is available to answer questions about your account, features, or these Terms.
          </p>
          <Link 
            href="/#contact" 
            className="inline-block mt-4 px-6 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2ecc71]"
            aria-label="Contact support"
          >
            Contact Support
          </Link>
        </div>

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

