'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Hero() {
  return (
    <section id="hero" className="w-full min-h-[49vh] sm:min-h-[calc(100vh-73px)] flex items-center justify-center relative pb-24 sm:pb-40 md:pb-56 bg-[#043915]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-10 md:py-12">
        <motion.div
          className="flex flex-col items-center justify-center text-center space-y-3 sm:space-y-6 md:space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Main Heading */}
          <motion.h1
            className="text-xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight px-2"
            variants={fadeInUp}
          >
            Measure. Reduce. Report. With AI.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl leading-relaxed px-4"
            variants={fadeInUp}
          >
            <span className="hidden sm:inline">Smarter carbon management software that helps your business cut emissions and stay compliant — automatically.</span>
            <span className="sm:hidden">Cut emissions and stay compliant — automatically.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto px-4 sm:px-0 max-w-md sm:max-w-none"
            variants={fadeInUp}
          >
            <Button variant="primary" showDot dotColor="green" radarEffect className="w-full sm:w-auto">
              Try for free
            </Button>
            <Button variant="outline" showDot dotColor="black" className="w-full sm:w-auto">
              Book a call
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Dashboard Preview Image - Overlapping */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-full px-4 sm:px-6 z-10">
        <motion.div 
          className="relative max-w-[80%] sm:max-w-[90%] md:max-w-[95%] lg:max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          {/* Gradient fade background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#043915] via-[#043915]/50 to-transparent rounded-lg sm:rounded-xl md:rounded-2xl blur-xl" />
          
          {/* Image - Cropped to top-left on mobile, full on desktop */}
          <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.12)] sm:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <div className="relative w-full h-[200px] sm:h-auto">
              <Image
                src="/images/dashboard.png"
                alt="Carbon management dashboard preview"
                width={1200}
                height={750}
                className="w-full h-full object-cover object-left-top sm:object-contain sm:h-auto"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

