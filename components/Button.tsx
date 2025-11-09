import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  showDot?: boolean;
  dotColor?: 'green' | 'black';
  radarEffect?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  showDot = false,
  dotColor = 'black',
  radarEffect = false,
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 whitespace-nowrap';
  
  const variantStyles = {
    primary: 'rounded-[25px] bg-black text-white border-[1.5px] border-black px-6 py-2 hover:bg-gray-800',
    outline: 'rounded-[25px] bg-[#F7F7F5] text-black border-[1.5px] border-black px-6 py-2 hover:bg-gray-100',
  };

  const dotStyles = {
    green: 'bg-green-500',
    black: 'bg-black',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className} group`}
    >
      {showDot && (
        <span className="relative inline-flex">
          <span className={`w-2 h-2 rounded-full ${dotStyles[dotColor]} ${radarEffect ? 'animate-radar-pulse' : ''}`} />
          {radarEffect && (
            <>
              <span className={`absolute inset-0 w-2 h-2 rounded-full ${dotStyles[dotColor]} opacity-75 animate-radar-ring`} />
              <span className={`absolute inset-0 w-2 h-2 rounded-full ${dotStyles[dotColor]} opacity-75 animate-radar-ring`} style={{ animationDelay: '1s' }} />
            </>
          )}
        </span>
      )}
      <span className="relative overflow-hidden inline-block" style={{ height: '1.25rem' }}>
        <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
          <span className="flex items-center" style={{ height: '1.25rem' }}>{children}</span>
          <span className="flex items-center" style={{ height: '1.25rem' }}>{children}</span>
        </span>
      </span>
    </button>
  );
}

