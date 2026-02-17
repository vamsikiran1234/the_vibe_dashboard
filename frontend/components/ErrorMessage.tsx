interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
  type?: 'network' | 'search' | 'unknown';
}

export default function ErrorMessage({ message, onRetry, type = 'unknown' }: ErrorMessageProps) {
  const getIcon = () => {
    const iconClass = "w-10 h-10 transition-transform duration-300 group-hover:scale-110";

    if (type === 'network') {
      return (
        <svg className={`${iconClass} text-red-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
        </svg>
      );
    }

    return (
      <svg className={`${iconClass} text-amber-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    );
  };

  const getTitle = () => {
    if (type === 'network') return 'Connection Error';
    if (type === 'search') return 'Search Failed';
    return 'Something Went Wrong';
  };

  return (
    <div className="flex flex-col items-center justify-center py-24">
      {/* Icon container */}
      <div className="relative mb-8 group">
        <div className="w-20 h-20 bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-2xl flex items-center justify-center shadow-[0_8px_32px_rgba(239,68,68,0.1)] transition-all duration-300 group-hover:shadow-[0_12px_40px_rgba(239,68,68,0.2)] group-hover:border-red-500/30">
          {getIcon()}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-3">
        {getTitle()}
      </h3>

      {/* Error message */}
      <p className="text-base font-medium text-slate-400 text-center max-w-md mb-10 leading-relaxed">
        {message}
      </p>

      {/* Additional help for network errors */}
      {type === 'network' && (
        <div className="mb-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 max-w-md shadow-[0_8px_32px_rgba(59,130,246,0.1)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)] hover:border-white/20">
          <p className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Troubleshooting steps
          </p>
          <ol className="text-sm font-medium text-slate-400 space-y-3">
            <li className="flex items-start gap-3 transition-all duration-200 hover:translate-x-1 hover:text-slate-300">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-xs font-bold text-slate-300">1</span>
              <span>Ensure backend server is running</span>
            </li>
            <li className="flex items-start gap-3 transition-all duration-200 hover:translate-x-1 hover:text-slate-300">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-xs font-bold text-slate-300">2</span>
              <span>Check if port 5000 is available</span>
            </li>
            <li className="flex items-start gap-3 transition-all duration-200 hover:translate-x-1 hover:text-slate-300">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-xs font-bold text-slate-300">3</span>
              <span>Verify your network connection</span>
            </li>
          </ol>
        </div>
      )}

      {/* Retry button */}
      <button
        onClick={onRetry}
        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl font-semibold text-sm shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-95 transition-all duration-300 flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Try Again
      </button>
    </div>
  );
}