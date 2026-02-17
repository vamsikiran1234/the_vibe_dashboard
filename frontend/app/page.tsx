'use client';

import { useState, useEffect, useCallback } from 'react';
import type { AxiosError } from 'axios';
import SearchBar from '@/components/SearchBar';
import ItemCard from '@/components/ItemCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';
import EmptyState from '@/components/EmptyState';
import { getItems } from '@/services';
import { Item } from '@/types/item';

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [errorType, setErrorType] = useState<'network' | 'search' | 'unknown'>('unknown');

  const fetchItems = useCallback(async (query = '') => {
    const trimmedQuery = query.trim();

    try {
      setLoading(true);
      setError(null);
      setErrorType('unknown');

      const data = await getItems(trimmedQuery);
      setItems(data);
    } catch (err: unknown) {
      const axiosError = err as AxiosError<{ message?: string }>;
      const statusCode = axiosError.response?.status;
      const backendMessage = axiosError.response?.data?.message;
      const fallbackMessage = axiosError.message || 'Failed to load items';

      if (axiosError.code === 'ERR_NETWORK' || !axiosError.response) {
        setErrorType('network');
        setError('Unable to connect to the server. Please ensure the backend is running.');
      } else if (statusCode === 404 && trimmedQuery) {
        setErrorType('search');
        setError(backendMessage || 'The requested resource was not found.');
      } else if (statusCode && statusCode >= 500) {
        setErrorType('unknown');
        setError('Server error occurred. Please try again later.');
      } else {
        setErrorType('unknown');
        setError(backendMessage || fallbackMessage);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchItems();
  }, [fetchItems]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    void fetchItems(query);
  };

  const handleRetry = () => {
    void fetchItems(searchQuery);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Futuristic gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />

      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-linear-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-linear-to-tr from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

      {/* Main container - CENTERED */}
      <div className="relative w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-12 flex flex-col items-center">
        {/* Header section - CENTERED */}
        <header className="mb-20 w-full max-w-[1400px]">
          <div className="flex items-center justify-between gap-6">
            <h1 className="text-[42px] sm:text-[52px] lg:text-[62px] font-[650] tracking-tight bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Vibe Dashboard
            </h1>
            <SearchBar onSearch={handleSearch} />
          </div>
        </header>

        {/* Main content area */}
        <main className="w-full max-w-[1400px] mt-8 sm:mt-10">
          <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-8 sm:p-10 lg:p-12 border border-white/10">
            {/* Results count */}
            {!loading && !error && (
              <div className="mb-10 text-center">
                <p className="text-[14px] text-slate-400 font-[500]">
                  {searchQuery ? (
                    <>
                      Found <span className="font-[600] text-white">{items.length}</span> items for &quot;{searchQuery}&quot;
                    </>
                  ) : (
                    <>
                      Showing <span className="font-[600] text-white">{items.length}</span> items
                    </>
                  )}
                </p>
              </div>
            )}

            {/* Loading state */}
            {loading && <LoadingSpinner />}

            {/* Error state */}
            {error && !loading && <ErrorMessage message={error} onRetry={handleRetry} type={errorType} />}

            {/* Empty state */}
            {!loading && !error && items.length === 0 && <EmptyState searchQuery={searchQuery} />}

            {/* Items grid - CENTERED */}
            {!loading && !error && items.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    style={{
                      animationDelay: `${index * 0.04}s`,
                      animationFillMode: 'both',
                    }}
                    className="animate-fade-in w-full"
                  >
                    <ItemCard item={item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>

        {/* Footer - CENTERED */}
        <footer className="mt-20 text-center text-slate-500 text-[13px] font-[450]">
          <p>Built with Next.js, Tailwind CSS & Express</p>
        </footer>
      </div>
    </div>
  );
}