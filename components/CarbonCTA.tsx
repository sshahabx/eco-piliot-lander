'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function AnimatedButton() {
  return (
    <a href="https://platform.ecopilot.app" className="w-full inline-flex items-center justify-center gap-2 font-medium rounded-[25px] bg-[#F7F7F5] text-black border-[1.5px] border-[#F7F7F5] px-6 py-3 hover:bg-white hover:border-white group relative transition-all duration-200">
      {/* Radar-animated black dot */}
      <span className="relative inline-flex">
        <span className="w-2 h-2 rounded-full bg-black animate-radar-pulse" />
        <span className="absolute inset-0 w-2 h-2 rounded-full bg-black opacity-75 animate-radar-ring" />
        <span className="absolute inset-0 w-2 h-2 rounded-full bg-black opacity-75 animate-radar-ring" style={{ animationDelay: '1s' }} />
      </span>
      
      {/* Animated text */}
      <span className="inline-block overflow-hidden" style={{ height: '1.25rem' }}>
        <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
          <span className="flex items-center justify-center" style={{ height: '1.25rem' }}>Launch</span>
          <span className="flex items-center justify-center" style={{ height: '1.25rem' }}>Launch</span>
        </span>
      </span>
    </a>
  );
}

export default function CarbonCTA() {
  return (
    <section id="contact" className="w-full bg-[#F7F7F5] relative py-6 sm:py-8 md:py-10 lg:py-12">
      <motion.div 
        className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] max-w-[1200px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div 
          className="bg-[#111111] rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                #111111 0px,
                #111111 2px,
                #1a1a1a 2px,
                #1a1a1a 4px
              ),
              repeating-linear-gradient(
                -45deg,
                #111111 0px,
                #111111 2px,
                #1a1a1a 2px,
                #1a1a1a 4px
              )
            `,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
            {/* Left Column - CTA Content */}
            <motion.div 
              className="flex flex-col gap-3 sm:gap-4 text-white text-center lg:text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                Make carbon management easy for yourself
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2 justify-center lg:justify-start min-h-[44px]">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs sm:text-sm md:text-base font-medium text-gray-300">No card needed</p>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start min-h-[44px]">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs sm:text-sm md:text-base font-medium text-gray-300">Sign up in 2 mins</p>
                </div>
              </div>

              <div className="mt-1 sm:mt-2 w-full">
                <AnimatedButton />
              </div>
            </motion.div>

            {/* Right Column - Dashboard Card */}
            <motion.div 
              className="w-full"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <DashboardCard />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function DashboardCard() {
  return (
    <div className="bg-black/40 backdrop-blur-sm text-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 overflow-hidden border border-gray-700/50 w-full max-w-full shadow-xl">
      <div className="grid grid-cols-12 gap-3 sm:gap-4 items-start">
        {/* Sidebar Navigation - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:flex lg:col-span-3 flex-col space-y-3 min-w-[120px]">
          <div className="text-white font-semibold text-sm md:text-base mb-2">EcoPilot</div>
          <NavItem label="Overview" active />
          <NavItem label="Carbon Footprint" />
          <NavItem label="Action Plan" />
          <NavItem label="Settings" />
        </div>

        {/* Main Metrics Area */}
        <div className="col-span-12 lg:col-span-9 flex flex-col gap-3 sm:gap-4">
          {/* Mobile Title - Hidden on desktop */}
          <div className="lg:hidden text-white font-semibold text-sm mb-2">EcoPilot Overview</div>
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <MetricCard
              label="Total emissions"
              value="1,200"
              growth="-18%"
              unit="tCO2e"
            />
            <MetricCard
              label="Emissions per employee"
              value="3.4"
              growth="-12%"
              unit="tCO2e"
            />
            <MetricCard
              label="Emissions intensity"
              value="220"
              growth="-22%"
              unit="tCO2e / $M"
            />
          </div>

          {/* Chart Section */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-700/30">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h3 className="text-white text-xs sm:text-sm md:text-base font-semibold">Emissions Trend</h3>
              <span className="text-gray-400 text-[10px] sm:text-xs md:text-sm">tCO2e</span>
            </div>

            {/* Bar Chart */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="flex flex-col justify-between text-gray-400 text-[10px] sm:text-xs h-32 sm:h-36 md:h-40 min-w-[32px] sm:min-w-[36px]">
                  <span>1,500</span>
                  <span>1,000</span>
                  <span>500</span>
                  <span>0</span>
                </div>

                {/* Chart area - Showing downward trend over time */}
                <div className="relative flex-1 h-32 sm:h-36 md:h-40 border-l border-b border-gray-600/60 pl-3 pb-2">
                  {/* Trendline SVG overlay */}
                  <TrendlineSVG />
                  
                  {/* Bars */}
                  <div className="flex items-end gap-2 sm:gap-3 h-full relative" style={{ zIndex: 2 }}>
                    <ChartBar height="90%" label="Q1" delay={0} />
                    <ChartBar height="75%" label="Q2" delay={0.15} />
                    <ChartBar height="55%" label="Q3" delay={0.3} />
                    <ChartBar height="40%" label="Q4" delay={0.45} />
                    <ChartBar height="30%" label="2024" delay={0.6} />
                  </div>
                </div>
              </div>

              {/* X-axis labels */}
              <div className="flex justify-between text-gray-400 text-[10px] sm:text-xs ml-[32px] sm:ml-[36px] mt-1">
                <span>2023</span>
                <span className="text-gray-500">→</span>
                <span>2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendlineSVG() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <svg ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      <motion.polyline
        points="10,10 28,25 46,50 64,70 82,80"
        fill="none"
        stroke="#7DFFA0"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.6"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
      />
    </svg>
  );
}

function NavItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      className={`text-xs md:text-sm cursor-pointer transition-colors ${
        active ? 'text-white font-medium' : 'text-gray-400 hover:text-gray-200'
      }`}
    >
      {label}
    </div>
  );
}

function MetricCard({
  label,
  value,
  growth,
  unit,
}: {
  label: string;
  value: string;
  growth: string;
  unit: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);
  const [displayGrowth, setDisplayGrowth] = useState(0);
  
  const targetValue = parseFloat(value.replace(/,/g, ''));
  const targetGrowth = parseInt(growth);

  useEffect(() => {
    if (isInView) {
      const duration = 1500; // 1.5 seconds
      const steps = 60;
      const increment = targetValue / steps;
      const growthIncrement = targetGrowth / steps;
      let current = 0;
      let currentGrowth = 0;

      const timer = setInterval(() => {
        current += increment;
        currentGrowth += growthIncrement;
        
        if (current >= targetValue) {
          setDisplayValue(targetValue);
          setDisplayGrowth(targetGrowth);
          clearInterval(timer);
        } else {
          setDisplayValue(current);
          setDisplayGrowth(currentGrowth);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, targetValue, targetGrowth]);

  const formatValue = (val: number) => {
    if (val >= 1000) {
      return Math.round(val).toLocaleString();
    }
    return val.toFixed(1);
  };

  const formatGrowth = (val: number) => {
    return val >= 0 ? `+${Math.round(val)}%` : `${Math.round(val)}%`;
  };

  return (
    <motion.div
      ref={ref}
      className="bg-black/30 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-700/30 flex flex-col gap-1.5 sm:gap-2 items-start min-h-[90px] sm:min-h-[100px] md:min-h-[110px] hover:border-gray-600/50 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-gray-400 text-[10px] sm:text-xs md:text-sm">{label}</div>
      <div className="flex items-baseline gap-1.5 sm:gap-2">
        <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
          {formatValue(displayValue)}
        </span>
        <span className="text-[#7DFFA0] text-xs sm:text-sm md:text-base font-semibold">
          {formatGrowth(displayGrowth)}
        </span>
      </div>
      <div className="text-gray-500 text-[10px] sm:text-xs md:text-sm mt-auto">{unit}</div>
    </motion.div>
  );
}

function ChartBar({ height, label, delay = 0 }: { height: string; label: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="flex-1 flex flex-col items-center justify-end gap-1.5 min-w-[40px] sm:min-w-[45px] md:min-w-[50px]">
      <motion.div 
        className="w-full rounded-t-md relative overflow-hidden border border-[#7DFFA0]/20"
        initial={{ height: 0 }}
        animate={isInView ? { height } : { height: 0 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      >
        <div className="w-full h-full bg-gradient-to-t from-[#7DFFA0]/50 via-[#7DFFA0]/30 to-[#7DFFA0]/20 rounded-t-md" />
        {/* Highlight top */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-1 bg-[#7DFFA0]/80"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: delay + 0.8 }}
        />
      </motion.div>
      <motion.span 
        className="text-gray-400 text-[9px] sm:text-[10px] md:text-[11px] font-medium"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: delay + 0.5 }}
      >
        {label}
      </motion.span>
    </div>
  );
}

