interface EmptyStateProps {
  searchQuery?: string;
}

export default function EmptyState({ searchQuery }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
      <div className="w-16 h-16 bg-slate-50 border border-slate-100/50 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
        <svg
          className="w-8 h-8 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          {searchQuery ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          )}
        </svg>
      </div>
      <h3 className="text-[20px] font-[600] text-slate-900 mb-2">
        {searchQuery ? 'No items found' : 'No items available'}
      </h3>
      <p className="text-[14px] font-[450] text-slate-500 text-center max-w-md mb-8 leading-relaxed">
        {searchQuery
          ? `No results match "${searchQuery}". Try adjusting your search terms.`
          : 'There are no items to display at the moment.'}
      </p>
      
      {/* Search suggestions */}
      {searchQuery && (
        <div className="mt-2 p-6 bg-white/50 backdrop-blur-md rounded-2xl border border-white/80 max-w-md shadow-sm">
          <p className="text-[14px] font-[600] text-slate-800 mb-3">Search tips:</p>
          <ul className="text-[13px] font-[450] text-slate-500 space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-violet-400 rounded-full"></div>
              Try different keywords
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-violet-400 rounded-full"></div>
              Check spelling
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-violet-400 rounded-full"></div>
              Use category names (Electronics, Fitness, etc.)
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
