'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      className="mb-4 sm:mb-6 border-b border-gray-200 pb-4 sm:pb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left flex items-start justify-between gap-3 sm:gap-4 group cursor-pointer min-h-[44px]"
      >
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-black group-hover:text-gray-700 transition-colors pr-2">
          {question}
        </h3>
        <span className="flex-shrink-0 mt-1 transition-transform duration-300 ease-out" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: isOpen ? '500px' : '0',
          opacity: isOpen ? 1 : 0
        }}
      >
        <p className="text-xs sm:text-sm md:text-base text-gray-700 mt-2 sm:mt-3 leading-relaxed">
          {answer}
        </p>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does EcoPilot help my business reduce carbon emissions?",
      answer: "EcoPilot uses AI-powered analytics to identify emission hotspots and provides actionable recommendations tailored to your industry, helping you track progress in real-time."
    },
    {
      question: "Is EcoPilot suitable for small and medium-sized businesses?",
      answer: "Absolutely. EcoPilot is designed to scale with businesses of all sizes, with flexible pricing tiers that make enterprise-grade carbon management accessible to SMBs."
    },
    {
      question: "Can EcoPilot integrate with our existing systems?",
      answer: "Yes, EcoPilot integrates seamlessly with popular ERP systems, accounting software, and data sources. Our API-first architecture allows custom integrations with dedicated support."
    },
    {
      question: "How do I stay compliant with environmental regulations using EcoPilot?",
      answer: "EcoPilot automatically tracks regulatory changes and generates audit-ready reports aligned with GHG Protocol, CDP, TCFD, and local regulations."
    },
    {
      question: "What kind of insights does EcoPilot provide to management?",
      answer: "EcoPilot delivers executive dashboards with KPIs like carbon intensity, reduction trends, and ROI on sustainability initiatives with industry benchmarking."
    },
    {
      question: "How quickly can my team start using EcoPilot?",
      answer: "Most teams are up and running within 2 weeks. Our onboarding includes data migration, system integration, and personalized training for immediate results."
    },
    {
      question: "Is the data secure and private?",
      answer: "Data security is our top priority. EcoPilot uses bank-level encryption (AES-256), SOC 2 Type II compliance, and we never share your data without consent."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#F7F7F5] px-4 sm:px-6 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            In case you missed anything and had some more questions.
          </motion.p>
        </div>

        {/* FAQ List - Single Column */}
        <div className="max-w-3xl mx-auto px-2 sm:px-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

