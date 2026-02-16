'use client';

import { useState } from 'react';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
    // API call will be added in next step
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      {/* Main Container - Full Width */}
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
            Vibe Dashboard
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover amazing products with our modern, responsive dashboard
          </p>

          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} />
        </header>

        {/* Content Area - Wider Layout */}
        <main className="w-full max-w-[1400px] mx-auto">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 border border-white/20">
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mb-8 shadow-lg">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h2 className="text-4xl font-semibold text-gray-800 mb-4">
                Search Component Ready
              </h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto mb-4">
                Try typing in the search bar above ✨
              </p>
              {searchQuery && (
                <p className="text-purple-600 font-medium">
                  Searching for: "{searchQuery}"
                </p>
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>Built with Next.js, Tailwind CSS & Express</p>
        </footer>
      </div>
    </div>
  );
}
