'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from './Button';

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="relative text-sm text-gray-700 hover:text-black overflow-hidden inline-block group"
      style={{ height: '1.25rem' }}
    >
      <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
        <span className="flex items-center" style={{ height: '1.25rem' }}>{label}</span>
        <span className="flex items-center" style={{ height: '1.25rem' }}>{label}</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  return (
    <>
      {/* Top Navbar */}
      <motion.nav 
        className="w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a 
              href="/" 
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/images/logo.png"
                alt="EcoPilot Logo"
                width={40}
                height={40}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <span className="text-lg sm:text-xl font-bold text-black">EcoPilot</span>
            </motion.a>

            {/* Desktop Navigation Links */}
            <motion.div 
              className="hidden md:flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <NavLink href="#features" label="Features" />
              <NavLink href="#about" label="About" />
              <NavLink href="#faq" label="FAQ" />
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button variant="primary" showDot dotColor="green" href="https://platform.ecopilot.app" className="text-sm sm:text-base px-4 sm:px-6">
                Launch
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Floating Bottom Navigation - Mobile Only */}
      <div className="md:hidden fixed left-1/2 z-50" style={{ bottom: '25vh', transform: 'translateX(-50%)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-200/50 px-3 py-2.5">
            <div className="flex items-center gap-3">
            <a
              href="#features"
              className="flex flex-col items-center gap-0.5 px-2.5 py-1 rounded-full hover:bg-gray-100 transition-colors active:scale-95"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-[9px] text-gray-600 font-medium">Features</span>
            </a>
            
            <a
              href="#about"
              className="flex flex-col items-center gap-0.5 px-2.5 py-1 rounded-full hover:bg-gray-100 transition-colors active:scale-95"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[9px] text-gray-600 font-medium">About</span>
            </a>

            <a
              href="#faq"
              className="flex flex-col items-center gap-0.5 px-2.5 py-1 rounded-full hover:bg-gray-100 transition-colors active:scale-95"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[9px] text-gray-600 font-medium">FAQ</span>
            </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

