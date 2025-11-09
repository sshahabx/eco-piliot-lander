'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg flex flex-col gap-3 sm:gap-4 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
    >
      {/* Green Accent Dot */}
      <div className="flex items-center gap-2 sm:gap-3">
        <motion.div
          className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#2ecc71] flex-shrink-0"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Card Content */}
      <div>
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#111111] mb-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const features = [
    {
      title: 'Simple Onboarding & Business Profiling',
      description: 'Get started in minutes with tailored setup based on your industry, number of employees, and business activities.',
    },
    {
      title: 'AI Sustainability Assistant',
      description: 'Ask questions about your footprint and get clear, step-by-step action guidance. Removes confusion and helps teams know what to do next.',
    },
    {
      title: 'Emissions Hotspot Dashboard',
      description: 'Visualize your biggest emission sources with interactive charts and prioritize actions that matter most.',
    },
    {
      title: 'Prioritized Action Feed',
      description: 'Get AI-powered recommendations with high-impact actions ranked by ROI, presented as an actionable to-do feed.',
    },
    {
      title: 'Open CEDA CO₂ Estimates',
      description: 'Automatically convert company spending into CO₂ emissions. No manual calculations saves time and gives a clearer view of Scope 3 impact.',
    },
    {
      title: 'Reporting & ROI Insights',
      description: 'Generate one-click compliance reports, track financial savings, benchmark against peers, and monitor goal progress.',
    },
  ];

  return (
    <section id="features" className="w-full bg-[#F7F7F5] px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24 pt-44 sm:pt-72 md:pt-80 lg:pt-96">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#111111] mb-4 sm:mb-6 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Key Features
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Practical tools to help your business cut emissions and stay compliant
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

