/**
 * LoadingSpinner Component
 * Modern dark theme loading indicator
 */
export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      {/* Spinner container */}
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_8px_32px_rgba(59,130,246,0.1)]">
          <div className="w-10 h-10 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin" />
        </div>
      </div>

      {/* Loading text */}
      <p className="text-slate-400 font-medium text-sm animate-pulse">
        Loading products...
      </p>
    </div>
  );
}