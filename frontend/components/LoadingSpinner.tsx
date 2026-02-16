/**
 * LoadingSpinner Component
 * Displays animated spinner during data fetching
 */
export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
      {/* Animated spinner */}
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-[3px] border-slate-100/50 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-[3px] border-violet-500 rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-violet-500/10 rounded-full blur-md animate-pulse"></div>
      </div>
      <p className="mt-6 text-slate-500 text-[15px] font-[500] tracking-tight">Updating dashboard...</p>
    </div>
  );
}
