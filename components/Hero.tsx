import React from 'react';
import Button from './Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="w-full min-h-[calc(100vh-73px)] flex items-center justify-center relative pb-32 sm:pb-48 md:pb-64 bg-[#043915]">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Measure. Reduce. Report. With AI.
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
            Smarter carbon management software that helps your business cut emissions and stay compliant — automatically.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="primary" showDot dotColor="green" radarEffect>
              Try for free
            </Button>
            <Button variant="outline" showDot dotColor="black">
              Book a call
            </Button>
          </div>
        </div>
      </div>

      {/* Dashboard Preview Image - Overlapping */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-full px-6 z-10">
        <div className="relative max-w-5xl mx-auto">
          {/* Gradient fade background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#043915] via-[#043915]/50 to-transparent rounded-2xl blur-xl" />
          
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/dashboard.png"
              alt="Carbon management dashboard preview"
              width={1200}
              height={750}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

