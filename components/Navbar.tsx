import React from 'react';
import Image from 'next/image';
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
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="EcoPilot Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span className="text-xl font-bold text-black">EcoPilot</span>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#features" label="Features" />
            <NavLink href="#about" label="About" />
            <NavLink href="#contact" label="Contact" />
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button variant="primary" showDot dotColor="green">
              Try for free
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

