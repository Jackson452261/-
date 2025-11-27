import React from 'react';
import { Filter, X } from 'lucide-react';

interface FilterProps {
  categories: string[];
  priceRanges: { label: string; min: number; max: number }[];
  selectedCategory: string;
  selectedPriceRange: string;
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: string) => void;
  onClearFilters: () => void;
}

const ProductFilter: React.FC<FilterProps> = ({
  categories,
  priceRanges,
  selectedCategory,
  selectedPriceRange,
  onCategoryChange,
  onPriceRangeChange,
  onClearFilters
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors duration-200"
      >
        <Filter size={20} />
        <span>Filters</span>
      </button>

      {/* Filter Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 right-0 z-10 md:z-auto bg-white md:bg-transparent border md:border-0 rounded-lg md:rounded-none shadow-lg md:shadow-none mt-2 md:mt-0 p-4 md:p-0`}>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
          {/* Category Filter */}
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Category:
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Price Range:
            </label>
            <select
              value={selectedPriceRange}
              onChange={(e) => onPriceRangeChange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
            >
              <option value="">All Prices</option>
              {priceRanges.map((range) => (
                <option key={range.label} value={range.label}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          {(selectedCategory || selectedPriceRange) && (
            <button
              onClick={onClearFilters}
              className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors duration-200"
            >
              <X size={16} />
              <span className="text-sm">Clear Filters</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;