'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="text-xs sm:text-sm text-black hover:opacity-70 transition-opacity duration-200"
    >
      {label}
    </a>
  );
}

function SocialIcon({ href, children, label }: { href: string; children: React.ReactNode; label: string }) {
  return (
    <span
      aria-label={`${label} (coming soon)`}
      title="Coming soon"
      className="text-black opacity-40 cursor-not-allowed p-2"
    >
      {children}
    </span>
  );
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Footer() {
  return (
    <motion.footer 
      className="w-full bg-[#F7F7F5] text-[#111111]"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {/* Column 1: Brand & Social */}
          <div className="flex flex-col gap-2 sm:gap-3 col-span-2 sm:col-span-1">
            <a href="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-200">
              <Image
                src="/images/logo.png"
                alt="EcoPilot Logo"
                width={28}
                height={28}
                className="w-7 h-7 sm:w-8 sm:h-8"
              />
              <h3 className="text-sm sm:text-base font-bold">EcoPilot</h3>
            </a>
            <p className="text-[10px] sm:text-xs text-gray-600">Smarter carbon management.</p>
            <div className="flex items-center gap-2 sm:gap-3 mt-1">
              <SocialIcon href="https://instagram.com" label="Instagram">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </SocialIcon>
              
              <SocialIcon href="https://youtube.com" label="YouTube">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </SocialIcon>

              <SocialIcon href="https://twitter.com" label="Twitter">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </SocialIcon>

              <SocialIcon href="https://linkedin.com" label="LinkedIn">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <h3 className="text-xs sm:text-sm font-semibold">Sitemap</h3>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <FooterLink href="#features" label="Features" />
              <FooterLink href="#about" label="About" />
              <FooterLink href="#faq" label="FAQ" />
              <FooterLink href="#contact" label="Contact" />
            </div>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <h3 className="text-xs sm:text-sm font-semibold">Legal</h3>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <FooterLink href="/privacy" label="Privacy" />
              <FooterLink href="/terms" label="Terms" />
              <FooterLink href="/legal" label="Legal" />
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-2 sm:gap-3 col-span-2 sm:col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold">Newsletter</h3>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                disabled
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 text-xs sm:text-sm text-gray-400 cursor-not-allowed opacity-60"
                aria-label="Newsletter email input (coming soon)"
              />
              <button 
                disabled
                className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium rounded-lg bg-gray-400 text-gray-200 px-4 py-2 cursor-not-allowed w-full opacity-60"
                aria-label="Submit newsletter (coming soon)"
                title="Newsletter feature coming soon"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                Submit
              </button>
            </div>
            <p className="text-[10px] text-gray-500 italic">Coming soon</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 sm:mt-8 text-[10px] sm:text-xs text-gray-500">
          ©2025 EcoPilot. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}

