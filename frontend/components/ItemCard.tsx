import { Item } from '@/types/item';

interface ItemCardProps {
  item?: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  if (!item) return null;

  return (
    <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(59,130,246,0.3)] flex flex-col h-full overflow-hidden">
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-500 rounded-2xl pointer-events-none" />

      {/* Shimmer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      <div className="relative z-10 py-8 px-8">
        
        {/* Category */}
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1.5 text-xs font-bold tracking-wider uppercase bg-linear-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 border border-blue-500/30 rounded-lg backdrop-blur-sm">
            {item.category ?? 'General'}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-3 line-clamp-1 leading-tight group-hover:text-blue-300 transition-colors duration-300">
          {item.name ?? 'Untitled Item'}
        </h3>

        {/* Description */}
        <p className="text-sm font-medium text-slate-400 mb-6 line-clamp-2 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
          {item.description ?? 'No description available.'}
        </p>

        {/* Price */}
        <div className="mt-auto pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Price
            </span>
            <span className="text-2xl font-bold bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-indigo-300 transition-all duration-300">
              ${Number(item.price ?? 0).toFixed(2)}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}