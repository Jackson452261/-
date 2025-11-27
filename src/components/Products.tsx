import React from 'react';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';
import { Search, X } from 'lucide-react';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [selectedPriceRange, setSelectedPriceRange] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');

  const products = [
    {
      id: '1',
      name: 'Velocity Pro Carbon',
      category: 'Road Racing',
      price: 4999,
      originalPrice: 5499,
      image: 'https://images.unsplash.com/photo-1456990493443-0d0ee2a630cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHJvYWQlMjBiaWtlfGVufDB8fDB8fHww',
      rating: 4.9,
      reviews: 127,
      features: ['Carbon fiber frame', 'Shimano Ultegra Di2', 'Aero wheelset'],
      isBestseller: true
    },
    {
      id: '2',
      name: 'Aero Elite TT',
      category: 'Time Trial',
      price: 6299,
      image: 'https://plus.unsplash.com/premium_photo-1682125270920-39b89bb20867?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGltZSUyMFRyaWFsJTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D',
      rating: 4.8,
      reviews: 89,
      features: ['Aerodynamic design', 'Integrated cockpit', 'Disc brakes'],
      isNew: true
    },
    {
      id: '3',
      name: 'Endurance Comfort',
      category: 'Mountain',
      price: 3299,
      image: 'https://images.unsplash.com/photo-1534150034764-046bf225d3fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TU9VTlRBSU4lMjBCSUtFfGVufDB8fDB8fHww',
      rating: 4.7,
      reviews: 203,
      features: ['Comfort geometry', 'Vibration damping', '32mm tire clearance']
    },
    {
      id: '4',
      name: 'Sprint Master',
      category: 'Gravel',
      price: 5799,
      image: 'https://images.unsplash.com/photo-1578949678951-d4d4d390f582?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyYXZlbCUyMGJpa2V8ZW58MHx8MHx8fDA%3D',
      rating: 4.9,
      reviews: 156,
      features: ['Lightweight carbon', 'Aggressive geometry', 'Electronic shifting']
    },
    
    
    
  ];

  const categories = [...new Set(products.map(product => product.category))];
  const priceRanges = [
    { label: 'Under $2,500', min: 0, max: 2500 },
    { label: '$2,500 - $4,000', min: 2500, max: 4000 },
    { label: '$4,000 - $6,000', min: 4000, max: 6000 },
    { label: 'Over $6,000', min: 6000, max: Infinity }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = !selectedCategory || product.category === selectedCategory;
    
    let priceMatch = true;
    if (selectedPriceRange) {
      const range = priceRanges.find(r => r.label === selectedPriceRange);
      if (range) {
        priceMatch = product.price >= range.min && product.price < range.max;
      }
    }
    
    const searchMatch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && priceMatch && searchMatch;
  });

  const handleClearFilters = () => {
    setSelectedCategory('');
    setSelectedPriceRange('');
    setSearchQuery('');
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Bike Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our complete range of professional road bikes, each engineered 
            for specific riding styles and performance requirements.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">
                Showing {filteredProducts.length} of {products.length} bikes
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              {/* Search Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full md:w-64 pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
              
              <ProductFilter
                categories={categories}
                priceRanges={priceRanges}
                selectedCategory={selectedCategory}
                selectedPriceRange={selectedPriceRange}
                onCategoryChange={setSelectedCategory}
                onPriceRangeChange={setSelectedPriceRange}
                onClearFilters={handleClearFilters}
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.691-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No bikes found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
            <button
              onClick={handleClearFilters}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        
      </div>
    </section>
  );
};

export default Products;