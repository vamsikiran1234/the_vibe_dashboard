'use client';

import { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import ItemCard from '@/components/ItemCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';
import EmptyState from '@/components/EmptyState';
import { getItems } from '@/services';
import { Item } from '@/types/item';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [errorType, setErrorType] = useState<'network' | 'search' | 'unknown'>('unknown');

  // Fetch items whenever searchQuery changes
  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        setError(null);
        setErrorType('unknown');
        const data = await getItems(searchQuery || undefined);
        setItems(data);
      } catch (err: any) {
        // Determine error type
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
        console.error('Error fetching items:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleRetry = () => {
    setSearchQuery('');
    setError(null);
    setErrorType('unknown');
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] relative overflow-hidden">
      {/* Subtle layered background depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.02),transparent_50%)]" />
      
      {/* Main Container - Full Width */}
      <div className="relative w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-12">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-[42px] sm:text-[52px] lg:text-[62px] font-[650] tracking-tight text-slate-900 mb-3">
            Vibe Dashboard
          </h1>
          <p className="text-[15px] sm:text-[16px] text-slate-600 font-[450] max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover amazing products with our modern, responsive dashboard
          </p>

          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} />
        </header>

        {/* Content Area - Wider Layout */}
        <main className="w-full max-w-[1400px] mx-auto">
          <div className="bg-white/40 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-8 sm:p-10 lg:p-12 border border-white/60">
            {/* Results Count */}
            {!loading && !error && (
              <div className="mb-10 text-center">
                <p className="text-[14px] text-slate-600 font-[500]">
                  {searchQuery ? (
                    <>
                      Found <span className="font-[600] text-slate-900">{items.length}</span> items
                      for "{searchQuery}"
                    </>
                  ) : (
                    <>
                      Showing <span className="font-[600] text-slate-900">{items.length}</span> items
                    </>
                  )}
                </p>
              </div>
            )}

            {/* Loading State */}
            {loading && <LoadingSpinner />}

            {/* Error State */}
            {error && !loading && <ErrorMessage message={error} onRetry={handleRetry} type={errorType} />}

            {/* Empty State */}
            {!loading && !error && items.length === 0 && <EmptyState searchQuery={searchQuery} />}

            {/* Items Grid */}
            {!loading && !error && items.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 animate-fade-in">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    style={{
                      animationDelay: `${index * 0.04}s`,
                      animationFillMode: 'both',
                    }}
                    className="animate-fade-in"
                  >
                    <ItemCard item={item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-20 text-center text-slate-500 text-[13px] font-[450]">
          <p>Built with Next.js, Tailwind CSS & Express</p>
        </footer>
      </div>
    </div>
  );
}
