import React from 'react';

function AnimatedButton() {
  return (
    <button className="w-full inline-flex items-center justify-center gap-2 font-medium rounded-[25px] bg-[#F7F7F5] text-black border-[1.5px] border-[#F7F7F5] px-6 py-3 hover:bg-white hover:border-white group relative transition-all duration-200">
      {/* Radar-animated black dot */}
      <span className="relative inline-flex">
        <span className="w-2 h-2 rounded-full bg-black animate-radar-pulse" />
        <span className="absolute inset-0 w-2 h-2 rounded-full bg-black opacity-75 animate-radar-ring" />
        <span className="absolute inset-0 w-2 h-2 rounded-full bg-black opacity-75 animate-radar-ring" style={{ animationDelay: '1s' }} />
      </span>
      
      {/* Animated text */}
      <span className="inline-block overflow-hidden" style={{ height: '1.25rem' }}>
        <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
          <span className="flex items-center justify-center" style={{ height: '1.25rem' }}>Try for free</span>
          <span className="flex items-center justify-center" style={{ height: '1.25rem' }}>Try for free</span>
        </span>
      </span>
    </button>
  );
}

export default function CarbonCTA() {
  return (
    <section className="w-full bg-[#F7F7F5] relative py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div 
          className="bg-[#111111] rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
            {/* Left Column - CTA Content */}
            <div className="flex flex-col gap-4 text-white">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Make carbon management easy for yourself
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm md:text-base font-medium">No card needed</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm md:text-base font-medium text-gray-300">Sign up in 2 mins</p>
                </div>
              </div>

              <div className="mt-2 w-full">
                <AnimatedButton />
              </div>
            </div>

            {/* Right Column - Dashboard Card */}
            <div className="w-full">
              <DashboardCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardCard() {
  return (
    <div className="bg-black/40 backdrop-blur-sm text-white rounded-2xl p-4 md:p-5 overflow-hidden border border-gray-700/50 w-full max-w-full shadow-xl">
      <div className="grid grid-cols-12 gap-3 items-start">
        {/* Sidebar Navigation */}
        <div className="col-span-12 lg:col-span-3 space-y-3 min-w-[120px]">
          <div className="text-white font-semibold text-sm md:text-base mb-2">EcoPilot</div>
          <NavItem label="Dashboard" active />
          <NavItem label="Targets" />
          <NavItem label="Data Sources" />
          <NavItem label="Profile" />
          <NavItem label="Organisation" />
          <NavItem label="Settings" />
        </div>

        {/* Main Metrics Area */}
        <div className="col-span-12 lg:col-span-9 flex flex-col gap-4">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <MetricCard
              label="Total emissions"
              value="1,200"
              growth="+11%"
              unit="tCO2e"
            />
            <MetricCard
              label="Emissions per employee"
              value="3.4"
              growth="+3%"
              unit="tCO2e"
            />
            <MetricCard
              label="Emissions intensity"
              value="220"
              growth="+5%"
              unit="tCO2e / $M"
            />
          </div>

          {/* Chart Section */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-sm md:text-base font-semibold">Emissions by Scope</h3>
              <span className="text-gray-400 text-xs md:text-sm">tCO2e</span>
            </div>

            {/* Simple Bar Chart Visualization */}
            <div className="flex flex-col gap-2">
              {/* Y-axis labels and chart */}
              <div className="flex gap-2">
                <div className="flex flex-col justify-between text-gray-500 text-xs h-32 min-w-[40px]">
                  <span>1,500</span>
                  <span>1,000</span>
                  <span>500</span>
                  <span>0</span>
                </div>

                {/* Chart area */}
                <div className="flex-1 h-32 flex items-end gap-2 border-l border-b border-gray-700/50 pl-2 pb-2">
                  <ChartBar height="65%" label="Scope 1" />
                  <ChartBar height="85%" label="Scope 2" />
                  <ChartBar height="45%" label="Scope 3" />
                </div>
              </div>

              {/* X-axis labels */}
              <div className="flex justify-between text-gray-500 text-xs ml-[40px] mt-1">
                <span>2023</span>
                <span className="text-gray-600">Date</span>
                <span className="text-gray-600">View</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  return (
    <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700/30 flex flex-col gap-2 items-start min-h-[110px] hover:border-gray-600/50 transition-colors">
      <div className="text-gray-400 text-xs md:text-sm">{label}</div>
      <div className="flex items-baseline gap-2">
        <span className="text-white text-2xl md:text-3xl font-bold">{value}</span>
        <span className="text-[#7DFFA0] text-sm md:text-base font-semibold">{growth}</span>
      </div>
      <div className="text-gray-500 text-xs md:text-sm mt-auto">{unit}</div>
    </div>
  );
}

function ChartBar({ height, label }: { height: string; label: string }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-end gap-1 min-w-[50px]">
      <div className="w-full bg-gray-700/50 rounded-t relative overflow-hidden" style={{ height }}>
        <div className="w-full h-full bg-gradient-to-t from-[#7DFFA0]/30 to-[#7DFFA0]/10 rounded-t" />
      </div>
      <span className="text-gray-500 text-[9px] md:text-[10px]">{label}</span>
    </div>
  );
}

