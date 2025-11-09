'use client';

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="mb-6">
      <button
        onClick={onToggle}
        className="w-full text-left flex items-start justify-between gap-4 group cursor-pointer"
      >
        <h3 className="text-base md:text-lg font-semibold text-black group-hover:text-gray-700 transition-colors">
          {question}
        </h3>
        <span className="flex-shrink-0 mt-1 transition-transform duration-300 ease-out" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <p className="text-sm md:text-base text-gray-700 mt-3 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
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
    <section id="faq" className="w-full bg-[#F7F7F5] px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            In case you missed anything and had some more questions.
          </p>
        </div>

        {/* FAQ List - Single Column */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
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

