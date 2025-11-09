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
    <motion.nav 
      className="w-full border-b border-gray-200 bg-white sticky top-0 z-50"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4">
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
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span className="text-xl font-bold text-black">EcoPilot</span>
          </motion.a>

          {/* Navigation Links - Hidden on mobile */}
          <motion.div 
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <NavLink href="#features" label="Features" />
            <NavLink href="#about" label="About" />
            <NavLink href="#contact" label="Contact" />
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button variant="primary" showDot dotColor="green">
              Try for free
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

