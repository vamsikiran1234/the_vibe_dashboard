import { Item } from '@/types/item';

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-purple-100">
      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full">
          {item.category}
        </span>
      </div>

      {/* Item Name */}
      <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
        {item.name}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {item.description}
      </p>

      {/* Price */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
        <span className="text-2xl font-bold text-purple-600">
          ${item.price.toFixed(2)}
        </span>
        <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-sm font-medium">
          View Details
        </button>
      </div>
    </div>
  );
}
