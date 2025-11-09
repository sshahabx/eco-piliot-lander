'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  showDot?: boolean;
  dotColor?: 'green' | 'black';
  radarEffect?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  showDot = false,
  dotColor = 'black',
  radarEffect = false,
  onClick,
  href,
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

  const Component = href ? motion.a : motion.button;
  const componentProps = href ? { href } : { onClick };

  return (
    <Component
      {...componentProps}
      className={`${baseStyles} ${variantStyles[variant]} ${className} group`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
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
    </Component>
  );
}

