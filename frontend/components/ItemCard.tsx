import { Item } from '@/types/item';

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="group bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/80 hover:border-slate-200 transition-all duration-200 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-0.5">
      {/* Category Badge */}
      <div className="mb-3">
        <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-[500] tracking-wide uppercase text-slate-600 bg-slate-100 rounded-md">
          {item.category}
        </span>
      </div>

      {/* Item Name */}
      <h3 className="text-[17px] font-[600] text-slate-900 mb-2 line-clamp-1 leading-snug">
        {item.name}
      </h3>

      {/* Description */}
      <p className="text-[13px] font-[450] text-slate-600 mb-4 line-clamp-2 leading-relaxed">
        {item.description}
      </p>

      {/* Price & Button */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
        <span className="text-[20px] font-[650] text-slate-900 tracking-tight">
          ${item.price.toFixed(2)}
        </span>
        <button className="px-3 py-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200 text-[13px] font-[500] shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.16)]">
          View
        </button>
      </div>
    </div>
  );
}
