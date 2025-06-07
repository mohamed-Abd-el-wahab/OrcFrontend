import React from 'react';
import { Star, ShoppingCart, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const featuredProducts = [
  {
    id: 'rover-large',
    name: 'ROVER Large',
    price: 15000,
    originalPrice: 18000,
    image: '/rover.jpg',
    rating: 4.8,
    reviews: 124,
    category: 'Mobile Robots',
    inStock: true,
    badge: 'Best Seller'
  },
  {
    id: 'mav-standard',
    name: 'MAV Standard',
    price: 25000,
    originalPrice: 30000,
    image: '/mav.jpg',
    rating: 4.9,
    reviews: 89,
    category: 'Autonomous Vehicles',
    inStock: false,
    badge: 'Coming Soon'
  },
  {
    id: 'rover-medium',
    name: 'ROVER Medium',
    price: 12000,
    originalPrice: 15000,
    image: '/rover.jpg',
    rating: 4.7,
    reviews: 156,
    category: 'Mobile Robots',
    inStock: false,
    badge: 'Sold Out'
  },
  {
    id: 'rover-pro-large',
    name: 'ROVER Pro Large',
    price: 22000,
    originalPrice: 25000,
    image: '/rover_pro.jpg',
    rating: 4.9,
    reviews: 67,
    category: 'Professional Series',
    inStock: false,
    badge: 'Pre-Order'
  },
  {
    id: 'mav-pro',
    name: 'MAV Pro',
    price: 35000,
    originalPrice: 40000,
    image: '/mav.jpg',
    rating: 5.0,
    reviews: 23,
    category: 'Autonomous Vehicles',
    inStock: false,
    badge: 'Coming Soon'
  },
  {
    id: 'rover-pro-medium',
    name: 'ROVER Pro Medium',
    price: 18000,
    originalPrice: 21000,
    image: '/rover_pro.jpg',
    rating: 4.8,
    reviews: 45,
    category: 'Professional Series',
    inStock: false,
    badge: 'Pre-Order'
  }
];

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleShopNow = (productId: string) => {
    navigate(`/products/${productId.split('-')[0]}`);
  };

  const handleAddToCart = (product: any) => {
    if (!product.inStock) return;
    
    addToCart({
      id: product.id,
      type: 'product',
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Best Seller': return 'bg-green-500';
      case 'Coming Soon': return 'bg-yellow-500';
      case 'Sold Out': return 'bg-red-500';
      case 'Pre-Order': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(59,130,246,0.1),transparent_50%)]"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.2
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full mb-4">
            Featured Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Best-Selling Robots
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most popular robotics platforms trusted by professionals worldwide
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ${
                    !product.inStock ? 'opacity-50 blur-[1px]' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 ${getBadgeColor(product.badge)} text-white text-sm font-medium rounded-full`}>
                    {product.badge}
                  </span>
                </div>

                {/* Category */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Overlay for out of stock */}
                {!product.inStock && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white bg-black/70 px-6 py-2 rounded-lg">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-blue-400">
                      ${product.price.toLocaleString()}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-lg text-gray-500 line-through">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {product.originalPrice > product.price && (
                    <span className="text-green-400 text-sm font-medium">
                      Save ${(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleShopNow(product.id)}
                    className="flex-1 px-4 py-3 bg-transparent border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className="px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Link */}
        <div className="text-center">
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 font-semibold text-lg"
          >
            View All Products
            <ChevronRight className="ml-2 w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;