interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  type?: 'network' | 'search' | 'unknown';
}

export default function ErrorMessage({ message, onRetry, type = 'unknown' }: ErrorMessageProps) {
  const getIcon = () => {
    switch (type) {
      case 'network':
        return (
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
          </svg>
        );
      case 'search':
        return (
          <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'network':
        return 'Connection Failed';
      case 'search':
        return 'Search Error';
      default:
        return 'Something went wrong';
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'network':
        return 'bg-red-50';
      case 'search':
        return 'bg-amber-50';
      default:
        return 'bg-red-50';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
      <div className={`w-16 h-16 ${getBgColor()} rounded-xl flex items-center justify-center mb-6`}>
        {getIcon()}
      </div>
      <h3 className="text-[20px] font-[600] text-slate-900 mb-2">{getTitle()}</h3>
      <p className="text-[14px] font-[450] text-slate-600 mb-6 text-center max-w-md leading-relaxed">{message}</p>
      
      {/* Additional help text for network errors */}
      {type === 'network' && (
        <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200 max-w-md">
          <p className="text-[13px] font-[450] text-slate-700 mb-2">
            <span className="font-[600]">Quick fix:</span>
          </p>
          <ol className="text-[13px] font-[450] text-slate-600 space-y-1 list-decimal list-inside">
            <li>Ensure backend server is running</li>
            <li>Check if port 5000 is available</li>
            <li>Verify API URL in .env.local</li>
          </ol>
        </div>
      )}

      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200 text-[14px] font-[500] shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
        >
          {type === 'network' ? 'Retry Connection' : 'Try Again'}
        </button>
      )}
    </div>
  );
}
