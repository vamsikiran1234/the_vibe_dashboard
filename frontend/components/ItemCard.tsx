import { Item } from '@/types/item';

interface ItemCardProps {
  item: Item;
}

/**
 * ItemCard Component
 * Displays individual item with category, name, description, price, and action button
 * Features hover effects and glassmorphism design
 */
export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="group bg-white/50 backdrop-blur-md rounded-xl p-6 border border-white/80 hover:border-slate-200 transition-all duration-300 cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 flex flex-col h-full">
      {/* Category badge */}
      <div className="mb-4">
        <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-[600] tracking-wider uppercase text-slate-500 bg-slate-100/80 rounded-md border border-slate-200/50">
          {item.category}
        </span>
      </div>

      {/* Item name */}
      <h3 className="text-[18px] font-[600] text-slate-900 mb-2 line-clamp-1 leading-snug group-hover:text-violet-600 transition-colors duration-300">
        {item.name}
      </h3>

      {/* Item description */}
      <p className="text-[14px] font-[450] text-slate-600 mb-6 line-clamp-2 leading-relaxed">
        {item.description}
      </p>

      {/* Price and action button */}
      <div className="flex items-center justify-between mt-auto pt-5 border-t border-slate-100/80">
        <div className="flex flex-col">
          <span className="text-[11px] font-[500] text-slate-400 uppercase tracking-tighter">Price</span>
          <span className="text-[22px] font-[650] text-slate-900 tracking-tight">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <button className="px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 active:scale-95 transition-all duration-200 text-[13px] font-[500] shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]">
          View Details
        </button>
      </div>
    </div>
  );
}
