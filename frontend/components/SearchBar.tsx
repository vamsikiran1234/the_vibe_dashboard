'use client';

import { useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  debounceMs?: number;
}

/**
 * SearchBar Component
 * Premium search input with debouncing and clear functionality
 * Features focus states and smooth transitions
 */
export default function SearchBar({
  onSearch,
  placeholder = 'Search items by name or category...',
  debounceMs = 300,
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  /**
   * Debounce search to avoid excessive API calls
   * Triggers onSearch callback after specified delay
   */
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
      {/* Search icon - changes color on focus */}
      <div
        className={`absolute left-4.5 top-1/2 -translate-y-1/2 transition-colors duration-300 z-10 ${
          isFocused ? 'text-violet-500' : 'text-slate-400'
        }`}
      >
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Input field with premium styling */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="w-full h-[52px] pl-12 pr-12 text-[15px] font-[450] text-slate-900 placeholder:text-slate-400 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-xl focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-500/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] focus:shadow-[0_8px_32px_rgba(139,92,246,0.12)]"
      />

      {/* Clear button - only visible when there's text */}
      {searchTerm && (
        <button
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 transition-all duration-200 rounded-lg hover:bg-slate-100/80 active:scale-90"
          aria-label="Clear search"
        >
          <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
