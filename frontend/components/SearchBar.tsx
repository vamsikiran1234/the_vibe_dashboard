'use client';

import { useState, useEffect, useRef } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const hasMounted = useRef(false);
  const skipNextDebounce = useRef(false);
  const onSearchRef = useRef(onSearch);

  // Update ref when onSearch changes
  useEffect(() => {
    onSearchRef.current = onSearch;
  }, [onSearch]);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    if (skipNextDebounce.current) {
      skipNextDebounce.current = false;
      return;
    }

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      onSearchRef.current(query);
    }, 300);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [query]); // Only depend on query, not onSearch

  const handleClear = () => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    skipNextDebounce.current = true;
    setQuery('');
    onSearchRef.current('');
  };

  return (
    <div className="relative w-full max-w-xs ml-auto">
      <div
        className={`
          flex items-center h-11 px-4 rounded-lg
          bg-white/5 backdrop-blur-xl
          border transition-all duration-300
          ${isFocused
            ? 'border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
            : 'border-white/10 hover:border-white/20'
          }
        `}
      >
        {/* Search Icon */}
        <svg
          className={`w-4 h-4 transition-colors duration-300 ${isFocused ? 'text-blue-400' : 'text-slate-400'
            }`}
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

        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search products..."
          className="
            flex-1 ml-3 bg-transparent border-none outline-none
            text-white placeholder-slate-500
            text-sm font-medium
            transition-all duration-300
          "
        />

        {/* Clear Button */}
        {query && (
          <button
            onClick={handleClear}
            className="ml-2 p-2 hover:bg-white/10 rounded-lg transition-all duration-200 active:scale-95"
            aria-label="Clear search"
          >
            <svg
              className="w-4 h-4 text-slate-400 hover:text-white transition-colors"
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
    </div>
  );
}