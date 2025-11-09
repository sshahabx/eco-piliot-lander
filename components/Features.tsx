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
      className="bg-white rounded-2xl p-6 shadow-lg flex flex-col gap-4 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
    >
      {/* Green Accent Dot */}
      <div className="flex items-center gap-3">
        <motion.div 
          className="w-3 h-3 rounded-full bg-[#2ecc71] flex-shrink-0"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Card Content */}
      <div>
        <h3 className="text-lg md:text-xl font-bold text-[#111111] mb-2">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
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
      title: 'Automated Footprint Calculator',
      description: 'Track Scope 1, 2, and 3 emissions automatically with smart input wizards and real-time data integration.',
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
      title: 'Team Challenges & Gamification',
      description: 'Engage employees with EcoPoints, achievement badges, and leaderboards that make sustainability fun and competitive.',
    },
    {
      title: 'Reporting & ROI Insights',
      description: 'Generate one-click compliance reports, track financial savings, benchmark against peers, and monitor goal progress.',
    },
  ];

  return (
    <section id="features" className="w-full bg-[#F7F7F5] px-6 pb-24 pt-64 sm:pt-80 md:pt-96">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#111111] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Key Features
        </motion.h2>

        {/* Subheading */}
        <motion.p 
          className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Practical tools to help your business cut emissions and stay compliant
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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

