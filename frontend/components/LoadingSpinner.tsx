export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-[3px] border-slate-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-[3px] border-slate-900 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-6 text-slate-600 text-[14px] font-[500]">Loading items...</p>
    </div>
  );
}
