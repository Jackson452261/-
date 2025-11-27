import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Check, Heart, Share2, ShoppingCart } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Product data (in a real app, this would come from an API)
  const products = [
    {
      id: '1',
      name: 'Road bike one',
      category: 'Road Racing',
      price: 4999,
      originalPrice: 5499,
      images: [
        'https://images.unsplash.com/photo-1456990493443-0d0ee2a630cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHJvYWQlMjBiaWtlfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1668763144355-cf09becd5b32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxyb2FkJTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D',
         
      ],
      rating: 4.9,
      reviews: 127,
      description: 'The Velocity Pro Carbon represents the pinnacle of road racing technology. Engineered for professional cyclists who demand nothing but the best, this bike combines ultra-lightweight carbon fiber construction with aerodynamic excellence.',
      features: [
        'High-modulus carbon fiber frame',
        'Shimano Ultegra Di2 electronic shifting',
        'Carbon aero wheelset with ceramic bearings',
        'Integrated cable routing',
        'Aerodynamic tube shapes',
        'Professional racing geometry'
      ],
      specifications: {
        'Frame Material': 'High-Modulus Carbon Fiber',
        'Weight': '6.8 kg (14.9 lbs)',
        'Drivetrain': 'Shimano Ultegra Di2 22-Speed',
        'Brakes': 'Hydraulic Disc Brakes',
        'Wheels': 'Carbon Aero Wheelset',
        'Tires': 'Continental GP5000 25mm',
        'Handlebars': 'Integrated Carbon Aero Bars',
        'Saddle': 'Ergonomic Performance Saddle'
      },
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Matte Black', 'Racing Red', 'Pearl White'],
      isBestseller: true
    },
    {
      id: '2',
      name: 'Aero Elite TT',
      category: 'Time Trial',
      price: 6299,
      images: [
        'https://plus.unsplash.com/premium_photo-1682125270920-39b89bb20867?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGltZSUyMFRyaWFsJTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1753738125825-af6565b70309?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VGltZSUyMFRyaWFsJTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D'
      ],
      rating: 4.8,
      reviews: 89,
      description: 'Designed for time trial specialists and triathletes, the Aero Elite TT maximizes aerodynamic efficiency while maintaining comfort for long-distance events.',
      features: [
        'Aerodynamic frame design',
        'Integrated cockpit system',
        'Disc brake compatibility',
        'Internal cable routing',
        'Time trial geometry',
        'Wind tunnel tested'
      ],
      specifications: {
        'Frame Material': 'Aero Carbon Fiber',
        'Weight': '7.2 kg (15.9 lbs)',
        'Drivetrain': 'Shimano Dura-Ace Di2',
        'Brakes': 'Hydraulic Disc Brakes',
        'Wheels': 'Deep Section Carbon',
        'Tires': 'Continental GP TT 23mm',
        'Handlebars': 'Integrated Aero Cockpit',
        'Saddle': 'Time Trial Specific'
      },
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Stealth Black', 'Electric Blue'],
      isNew: true
    },
    // Add more products as needed
    {
      id: '3',
      name: 'Aero Elite TT',
      category: 'Time Trial',
      price: 6299,
      images: [
        'https://images.unsplash.com/photo-1534150034764-046bf225d3fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TU9VTlRBSU4lMjBCSUtFfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1515412512744-6e4adc8b5e55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1PVU5UQUlOJTIwQklLRXxlbnwwfHwwfHx8MA%3D%3D'
      ],
      rating: 4.8,
      reviews: 89,
      description: 'Designed for time trial specialists and triathletes, the Aero Elite TT maximizes aerodynamic efficiency while maintaining comfort for long-distance events.',
      features: [
        'Aerodynamic frame design',
        'Integrated cockpit system',
        'Disc brake compatibility',
        'Internal cable routing',
        'Time trial geometry',
        'Wind tunnel tested'
      ],
      specifications: {
        'Frame Material': 'Aero Carbon Fiber',
        'Weight': '7.2 kg (15.9 lbs)',
        'Drivetrain': 'Shimano Dura-Ace Di2',
        'Brakes': 'Hydraulic Disc Brakes',
        'Wheels': 'Deep Section Carbon',
        'Tires': 'Continental GP TT 23mm',
        'Handlebars': 'Integrated Aero Cockpit',
        'Saddle': 'Time Trial Specific'
      },
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Stealth Black', 'Electric Blue'],
      isNew: true
    },
    // Add more products as needed
    {
      id: '4',
      name: 'Aero Elite TT',
      category: 'Gravel',
      price: 6299,
      images: [
        'https://images.unsplash.com/photo-1578949678951-d4d4d390f582?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyYXZlbCUyMGJpa2V8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1670002395973-fc53c2b92a88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYXZlbCUyMGJpa2V8ZW58MHx8MHx8fDA%3D'
      ],
      rating: 4.8,
      reviews: 89,
      description: 'Designed for time trial specialists and triathletes, the Aero Elite TT maximizes aerodynamic efficiency while maintaining comfort for long-distance events.',
      features: [
        'Aerodynamic frame design',
        'Integrated cockpit system',
        'Disc brake compatibility',
        'Internal cable routing',
        'Time trial geometry',
        'Wind tunnel tested'
      ],
      specifications: {
        'Frame Material': 'Aero Carbon Fiber',
        'Weight': '7.2 kg (15.9 lbs)',
        'Drivetrain': 'Shimano Dura-Ace Di2',
        'Brakes': 'Hydraulic Disc Brakes',
        'Wheels': 'Deep Section Carbon',
        'Tires': 'Continental GP TT 23mm',
        'Handlebars': 'Integrated Aero Cockpit',
        'Saddle': 'Time Trial Specific'
      },
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Stealth Black', 'Electric Blue'],
      isNew: true
    },
    // Add more products as needed
    {
      id: '5',
      name: 'Aero Elite TT',
      category: 'Time Trial',
      price: 6299,
      images: [
        'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      rating: 4.8,
      reviews: 89,
      description: 'Designed for time trial specialists and triathletes, the Aero Elite TT maximizes aerodynamic efficiency while maintaining comfort for long-distance events.',
      features: [
        'Aerodynamic frame design',
        'Integrated cockpit system',
        'Disc brake compatibility',
        'Internal cable routing',
        'Time trial geometry',
        'Wind tunnel tested'
      ],
      specifications: {
        'Frame Material': 'Aero Carbon Fiber',
        'Weight': '7.2 kg (15.9 lbs)',
        'Drivetrain': 'Shimano Dura-Ace Di2',
        'Brakes': 'Hydraulic Disc Brakes',
        'Wheels': 'Deep Section Carbon',
        'Tires': 'Continental GP TT 23mm',
        'Handlebars': 'Integrated Aero Cockpit',
        'Saddle': 'Time Trial Specific'
      },
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Stealth Black', 'Electric Blue'],
      isNew: true
    },
    // Add more products as needed
    {
      id: '6',
      name: 'Aero Elite TT',
      category: 'Time Trial',
      price: 6299,
      images: [
        'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      rating: 4.8,
      reviews: 89,
      description: 'Designed for time trial specialists and triathletes, the Aero Elite TT maximizes aerodynamic efficiency while maintaining comfort for long-distance events.',
      features: [
        'Aerodynamic frame design',
        'Integrated cockpit system',
        'Disc brake compatibility',
        'Internal cable routing',
        'Time trial geometry',
        'Wind tunnel tested'
      ],
      specifications: {
        'Frame Material': 'Aero Carbon Fiber',
        'Weight': '7.2 kg (15.9 lbs)',
        'Drivetrain': 'Shimano Dura-Ace Di2',
        'Brakes': 'Hydraulic Disc Brakes',
        'Wheels': 'Deep Section Carbon',
        'Tires': 'Continental GP TT 23mm',
        'Handlebars': 'Integrated Aero Cockpit',
        'Saddle': 'Time Trial Specific'
      },
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Stealth Black', 'Electric Blue'],
      isNew: true
    },
    // Add more products as needed
    {
      id: '7',
      name: 'Aero Elite TT',
      category: 'Time Trial',
      price: 6299,
      images: [
        'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      rating: 4.8,
      reviews: 89,
      description: 'Designed for time trial specialists and triathletes, the Aero Elite TT maximizes aerodynamic efficiency while maintaining comfort for long-distance events.',
      features: [
        'Aerodynamic frame design',
        'Integrated cockpit system',
        'Disc brake compatibility',
        'Internal cable routing',
        'Time trial geometry',
        'Wind tunnel tested'
      ],
      specifications: {
        'Frame Material': 'Aero Carbon Fiber',
        'Weight': '7.2 kg (15.9 lbs)',
        'Drivetrain': 'Shimano Dura-Ace Di2',
        'Brakes': 'Hydraulic Disc Brakes',
        'Wheels': 'Deep Section Carbon',
        'Tires': 'Continental GP TT 23mm',
        'Handlebars': 'Integrated Aero Cockpit',
        'Saddle': 'Time Trial Specific'
      },
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Stealth Black', 'Electric Blue'],
      isNew: true
    },
    // Add more products as needed
    {
      id: '2',
      name: 'Aero Elite TT',
      category: 'Time Trial',
      price: 6299,
      images: [
        'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      rating: 4.8,
      reviews: 89,
      description: 'Designed for time trial specialists and triathletes, the Aero Elite TT maximizes aerodynamic efficiency while maintaining comfort for long-distance events.',
      features: [
        'Aerodynamic frame design',
        'Integrated cockpit system',
        'Disc brake compatibility',
        'Internal cable routing',
        'Time trial geometry',
        'Wind tunnel tested'
      ],
      specifications: {
        'Frame Material': 'Aero Carbon Fiber',
        'Weight': '7.2 kg (15.9 lbs)',
        'Drivetrain': 'Shimano Dura-Ace Di2',
        'Brakes': 'Hydraulic Disc Brakes',
        'Wheels': 'Deep Section Carbon',
        'Tires': 'Continental GP TT 23mm',
        'Handlebars': 'Integrated Aero Cockpit',
        'Saddle': 'Time Trial Specific'
      },
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Stealth Black', 'Electric Blue'],
      isNew: true
    }
  ];

  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState('');
  const [selectedColor, setSelectedColor] = React.useState('');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/products')}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                      selectedImage === index ? 'border-red-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm font-medium text-red-600 uppercase tracking-wide">
                  {product.category}
                </span>
                {product.isBestseller && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Bestseller
                  </span>
                )}
                {product.isNew && (
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    New
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm font-medium text-gray-700 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
              <div className="flex space-x-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg border-2 font-semibold transition-colors duration-200 ${
                      selectedSize === size
                        ? 'border-red-500 bg-red-50 text-red-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors duration-200 ${
                      selectedColor === color
                        ? 'border-red-500 bg-red-50 text-red-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
              <button className="p-4 border-2 border-gray-300 hover:border-gray-400 rounded-lg transition-colors duration-200">
                <Heart size={20} />
              </button>
              <button className="p-4 border-2 border-gray-300 hover:border-gray-400 rounded-lg transition-colors duration-200">
                <Share2 size={20} />
              </button>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Specifications</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <span className="text-gray-600 font-medium">{key}</span>
                  <span className="text-gray-900 font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;