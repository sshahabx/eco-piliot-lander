import React from 'react';

export default function About() {
  return (
    <section id="about" className="w-full bg-[#F7F7F5] px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#111111] mb-6">
          About EcoPilot
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-center text-[#111111] font-medium max-w-4xl mx-auto mb-8">
          Measure. Reduce. Report. With AI. Smarter carbon management software that helps your business cut emissions and stay compliant — automatically.
        </p>

        {/* Mission Paragraph */}
        <p className="text-base md:text-lg text-center text-gray-700 max-w-3xl mx-auto leading-relaxed">
          EcoPilot empowers SMBs to take control of their carbon footprint, automate sustainability reporting, and make data-driven decisions effortlessly.
        </p>
      </div>
    </section>
  );
}

