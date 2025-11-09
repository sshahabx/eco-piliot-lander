import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import About from '@/components/About';
import Features from '@/components/Features';
import CarbonCTA from '@/components/CarbonCTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Ticker />
      <Features />
      <About />
      <FAQ />
      <CarbonCTA />
      <Footer />
    </main>
  );
}

