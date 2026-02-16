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

  // Fetch items whenever searchQuery changes
  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getItems(searchQuery || undefined);
        setItems(data);
      } catch (err) {
        setError('Failed to fetch items. Please check if the backend server is running.');
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
            {/* Results Count */}
            {!loading && !error && (
              <div className="mb-8 text-center">
                <p className="text-gray-600 text-lg">
                  {searchQuery ? (
                    <>
                      Found <span className="font-bold text-purple-600">{items.length}</span> items
                      for "{searchQuery}"
                    </>
                  ) : (
                    <>
                      Showing <span className="font-bold text-purple-600">{items.length}</span> items
                    </>
                  )}
                </p>
              </div>
            )}

            {/* Loading State */}
            {loading && <LoadingSpinner />}

            {/* Error State */}
            {error && !loading && <ErrorMessage message={error} onRetry={handleRetry} />}

            {/* Empty State */}
            {!loading && !error && items.length === 0 && <EmptyState searchQuery={searchQuery} />}

            {/* Items Grid */}
            {!loading && !error && items.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            )}
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
