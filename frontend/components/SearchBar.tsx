'use client';

import { useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  debounceMs?: number;
}

export default function SearchBar({
  onSearch,
  placeholder = 'Search items by name or category...',
  debounceMs = 300,
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [searchTerm, debounceMs, onSearch]);

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Search Icon */}
      <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${isFocused ? 'text-slate-700' : 'text-slate-400'}`}>
        <svg
          className="w-[18px] h-[18px]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="w-full h-[44px] pl-11 pr-11 text-[15px] font-[450] text-slate-900 placeholder:text-slate-400 bg-white/90 backdrop-blur-md border border-slate-200 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-50 transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] focus:shadow-[0_4px_16px_rgba(139,92,246,0.08)]"
      />

      {/* Clear Button */}
      {searchTerm && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 transition-colors duration-200 rounded-md hover:bg-slate-100"
          aria-label="Clear search"
        >
          <svg
            className="w-[16px] h-[16px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
