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
        bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl 
        border border-white/20 p-6
        ${hover ? 'transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
