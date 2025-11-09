'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="w-full bg-[#F7F7F5] px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#111111] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About EcoPilot
        </motion.h2>

        {/* Subheading */}
        <motion.p 
          className="text-lg md:text-xl text-center text-[#111111] font-medium max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Measure. Reduce. Report. With AI. Smarter carbon management software that helps your business cut emissions and stay compliant — automatically.
        </motion.p>

        {/* Mission Paragraph */}
        <motion.p 
          className="text-base md:text-lg text-center text-gray-700 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          EcoPilot empowers SMBs to take control of their carbon footprint, automate sustainability reporting, and make data-driven decisions effortlessly.
        </motion.p>
      </div>
    </section>
  );
}

