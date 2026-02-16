import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`
        bg-white/50 backdrop-blur-md rounded-xl 
        border border-white/80 p-6
        shadow-[0_8px_32px_rgba(0,0,0,0.04)]
        ${hover ? 'transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
