import React from 'react';

const companies = [
  { name: 'Microsoft', width: 168 },
  { name: 'Amazon', width: 140 },
  { name: 'Unilever', width: 154 },
  { name: 'Walmart', width: 154 },
  { name: 'Siemens', width: 140 },
  { name: 'DHL', width: 112 },
];

export default function Ticker() {
  return (
    <section className="w-full py-16 pt-48 sm:pt-56 md:pt-72 overflow-hidden bg-white border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Optional heading */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wide">Trusted by leading companies</p>
        </div>

        {/* Ticker container with gradient masks */}
        <div className="relative max-w-4xl mx-auto">
          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          
          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling content */}
          <div className="overflow-hidden py-8">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {companies.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center justify-center mx-16 flex-shrink-0"
                  style={{ width: `${company.width}px` }}
                >
                  <CompanyLogo name={company.name} />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companies.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center justify-center mx-16 flex-shrink-0"
                  style={{ width: `${company.width}px` }}
                >
                  <CompanyLogo name={company.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyLogo({ name }: { name: string }) {
  const logos: { [key: string]: JSX.Element } = {
    Microsoft: (
      <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto opacity-50 grayscale">
        <rect x="20" y="20" width="16" height="16" fill="#737373"/>
        <rect x="38" y="20" width="16" height="16" fill="#737373"/>
        <rect x="20" y="38" width="16" height="16" fill="#737373"/>
        <rect x="38" y="38" width="16" height="16" fill="#737373"/>
        <text x="70" y="45" fill="#525252" fontSize="24" fontWeight="600" fontFamily="serif">Microsoft</text>
      </svg>
    ),
    Amazon: (
      <svg viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto opacity-50 grayscale">
        <text x="20" y="40" fill="#525252" fontSize="32" fontWeight="700" fontFamily="serif">amazon</text>
        <path d="M40 50 Q 90 58 140 50" stroke="#525252" strokeWidth="3" fill="none"/>
        <circle cx="140" cy="50" r="2" fill="#525252"/>
      </svg>
    ),
    Unilever: (
      <svg viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto opacity-50 grayscale">
        <text x="30" y="50" fill="#525252" fontSize="28" fontWeight="600" fontFamily="serif">Unilever</text>
        <circle cx="20" cy="40" r="8" fill="none" stroke="#525252" strokeWidth="2"/>
      </svg>
    ),
    Walmart: (
      <svg viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto opacity-50 grayscale">
        <path d="M 30 40 L 34 30 L 38 40 L 30 40 Z" fill="#525252"/>
        <path d="M 30 40 L 20 36 L 26 32 L 30 40 Z" fill="#525252"/>
        <path d="M 30 40 L 26 48 L 20 44 L 30 40 Z" fill="#525252"/>
        <path d="M 30 40 L 38 40 L 34 50 L 30 40 Z" fill="#525252"/>
        <path d="M 38 40 L 48 36 L 42 32 L 38 40 Z" fill="#525252"/>
        <path d="M 38 40 L 42 48 L 48 44 L 38 40 Z" fill="#525252"/>
        <text x="55" y="48" fill="#525252" fontSize="26" fontWeight="600" fontFamily="serif">Walmart</text>
      </svg>
    ),
    Siemens: (
      <svg viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto opacity-50 grayscale">
        <rect x="20" y="32" width="18" height="18" fill="none" stroke="#525252" strokeWidth="2.5"/>
        <text x="45" y="48" fill="#525252" fontSize="26" fontWeight="600" fontFamily="serif">SIEMENS</text>
      </svg>
    ),
    DHL: (
      <svg viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto opacity-50 grayscale">
        <rect x="20" y="28" width="90" height="24" fill="#525252"/>
        <text x="28" y="46" fill="white" fontSize="20" fontWeight="700" fontFamily="serif">DHL</text>
      </svg>
    ),
  };

  return logos[name] || null;
}

