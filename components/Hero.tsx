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
    <section id="hero" className="w-full min-h-[calc(100vh-73px)] flex items-center justify-center relative pb-32 sm:pb-48 md:pb-64 bg-[#043915]">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <motion.div 
          className="flex flex-col items-center justify-center text-center space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
            variants={fadeInUp}
          >
            Measure. Reduce. Report. With AI.
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed"
            variants={fadeInUp}
          >
            Smarter carbon management software that helps your business cut emissions and stay compliant — automatically.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            variants={fadeInUp}
          >
            <Button variant="primary" showDot dotColor="green" radarEffect>
              Try for free
            </Button>
            <Button variant="outline" showDot dotColor="black">
              Book a call
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Dashboard Preview Image - Overlapping */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-full px-6 z-10">
        <motion.div 
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}

