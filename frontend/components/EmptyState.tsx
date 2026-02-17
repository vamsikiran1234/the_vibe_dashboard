interface EmptyStateProps {
  searchQuery?: string;
}

export default function EmptyState({ searchQuery }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      {/* Icon container */}
      <div className="relative mb-8 group">
        <div className="w-20 h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_8px_32px_rgba(59,130,246,0.1)] transition-all duration-300 group-hover:shadow-[0_12px_40px_rgba(59,130,246,0.2)] group-hover:border-white/20">
          <svg
            className="w-10 h-10 text-slate-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-slate-400"
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
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-3">
        {searchQuery ? 'No items found' : 'No items available'}
      </h3>

      {/* Description */}
      <p className="text-base font-medium text-slate-400 text-center max-w-md mb-10 leading-relaxed">
        {searchQuery
          ? `No results match "${searchQuery}". Try adjusting your search terms.`
          : 'There are no items to display at the moment.'}
      </p>

      {/* Search suggestions */}
      {searchQuery && (
        <div className="mt-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 max-w-md shadow-[0_8px_32px_rgba(59,130,246,0.1)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)] hover:border-white/20">
          <p className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Search tips
          </p>
          <ul className="text-sm font-medium text-slate-400 space-y-3">
            <li className="flex items-center gap-3 transition-all duration-200 hover:translate-x-1 hover:text-slate-300">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              Try different keywords
            </li>
            <li className="flex items-center gap-3 transition-all duration-200 hover:translate-x-1 hover:text-slate-300">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              Check spelling
            </li>
            <li className="flex items-center gap-3 transition-all duration-200 hover:translate-x-1 hover:text-slate-300">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              Use category names (Electronics, Fitness, etc.)
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}