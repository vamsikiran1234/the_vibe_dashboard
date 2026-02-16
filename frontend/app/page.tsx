'use client';

import { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import ItemCard from '@/components/ItemCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';
import EmptyState from '@/components/EmptyState';
import { getItems } from '@/services';
import { Item } from '@/types/item';

/**
 * Home Page Component
 * Main dashboard view with search functionality and item grid
 */
export default function Home() {
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [errorType, setErrorType] = useState<'network' | 'search' | 'unknown'>('unknown');

  /**
   * Fetch items from API
   * Triggers on mount and when searchQuery changes
   */
  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        setError(null);
        setErrorType('unknown');
        
        const data = await getItems(searchQuery || undefined);
        setItems(data);
      } catch (err: any) {
        // Determine error type for appropriate user messaging
        if (err.code === 'ERR_NETWORK' || err.message?.includes('Network Error')) {
          setErrorType('network');
          setError('Unable to connect to the server. Please ensure the backend is running on port 5000.');
        } else if (err.response?.status === 404) {
          setErrorType('search');
          setError('The requested resource was not found.');
        } else if (err.response?.status >= 500) {
          setErrorType('unknown');
          setError('Server error occurred. Please try again later.');
        } else {
          setErrorType('unknown');
          setError('An unexpected error occurred. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [searchQuery]);

  /**
   * Handle search query updates from SearchBar component
   */
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  /**
   * Handle retry action from error state
   * Resets search and error states
   */
  const handleRetry = () => {
    setSearchQuery('');
    setError(null);
    setErrorType('unknown');
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] relative overflow-hidden">
      {/* Layered background with subtle gradients and mesh effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-200/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      {/* Main container with responsive padding */}
      <div className="relative w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-24">
        {/* Header section */}
        <header className="mb-20 text-center relative">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100/50 border border-violet-200/50 text-violet-600 text-[12px] font-[600] mb-6 tracking-wide uppercase animate-fade-in">
            Premium Dashboard
          </div>
          <h1 className="text-[48px] sm:text-[64px] lg:text-[82px] font-[750] tracking-tight text-slate-900 mb-6 leading-[1.05]">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600">Vibe</span> Dashboard
          </h1>
          <p className="text-[16px] sm:text-[18px] text-slate-500 font-[450] max-w-2xl mx-auto mb-12 leading-relaxed">
            Experience the next generation of product discovery with our meticulously crafted glassmorphism interface.
          </p>

          <SearchBar onSearch={handleSearch} />
        </header>

        {/* Main content area */}
        <main className="w-full max-w-[1400px] mx-auto">
          <div className="bg-white/30 backdrop-blur-xl rounded-[24px] shadow-[0_20px_80px_rgba(0,0,0,0.03)] p-8 sm:p-12 lg:p-16 border border-white/60 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            
            {/* Results count - shown when data is loaded successfully */}
            {!loading && !error && (
              <div className="mb-12 flex items-center justify-between border-b border-slate-100/50 pb-8">
                <h2 className="text-[20px] font-[600] text-slate-900">
                  {searchQuery ? 'Search Results' : 'Featured Items'}
                </h2>
                <p className="text-[14px] text-slate-500 font-[500] bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                  {items.length} {items.length === 1 ? 'item' : 'items'} found
                </p>
              </div>
            )}

            {/* Loading state */}
            {loading && (
              <div className="py-20 flex flex-col items-center justify-center">
                <LoadingSpinner />
                <p className="mt-4 text-slate-400 text-[14px] font-[450] animate-pulse">Syncing with database...</p>
              </div>
            )}

            {/* Error state with retry functionality */}
            {error && !loading && (
              <div className="py-12">
                <ErrorMessage message={error} onRetry={handleRetry} type={errorType} />
              </div>
            )}

            {/* Empty state - no items found */}
            {!loading && !error && items.length === 0 && (
              <div className="py-12">
                <EmptyState searchQuery={searchQuery} />
              </div>
            )}

            {/* Items grid with staggered animation */}
            {!loading && !error && items.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    style={{
                      animationDelay: `${index * 0.05}s`,
                    }}
                    className="animate-fade-in fill-mode-both"
                  >
                    <ItemCard item={item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-24 text-center">
          <div className="flex justify-center gap-8 mb-6">
            <div className="h-px w-12 bg-slate-200 self-center" />
            <div className="text-slate-400 text-[14px] font-[500]">THE VIBE</div>
            <div className="h-px w-12 bg-slate-200 self-center" />
          </div>
          <p className="text-slate-400 text-[13px] font-[450]">
            Built with Precision • Next.js 15 • Tailwind CSS 4
          </p>
        </footer>
      </div>
    </div>
  );
}
