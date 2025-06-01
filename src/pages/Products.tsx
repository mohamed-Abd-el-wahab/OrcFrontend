import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import ProductHero from '../components/products/ProductHero';
import CartNotification from '../components/cart/CartNotification';
import { products } from '../data/products';
import { ProductStatus } from '../types/products';

const Products = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);
  const [addedItemName, setAddedItemName] = useState('');

  const handleAddToCart = (product: any) => {
    // Only allow adding available products to cart
    if (product.status !== 'available') return;

    // Add the default variant to cart
    const defaultVariant = product.variants[0];
    addToCart({
      id: defaultVariant.id,
      type: 'product',
      name: `${defaultVariant.name} ${defaultVariant.size}`,
      price: defaultVariant.price,
      image: product.image
    });

    // Show notification
    setAddedItemName(`${defaultVariant.name} ${defaultVariant.size}`);
    setShowNotification(true);
  };

  const getStatusBadge = (status: ProductStatus) => {
    const statusConfig = {
      available: { color: 'bg-green-500', text: 'Available' },
      coming_soon: { color: 'bg-yellow-500', text: 'Coming Soon' },
      out_of_stock: { color: 'bg-red-500', text: 'Out of Stock' }
    };

    const config = statusConfig[status];
    return (
      <span className={`px-3 py-1 ${config.color} text-white text-sm font-medium rounded-full`}>
        {config.text}
      </span>
    );
  };

  return (
    <div className="bg-black">
      <ProductHero />
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 ${
                      product.status === 'out_of_stock' ? 'opacity-50 blur-[2px]' : ''
                    }`}
                  />
                  {product.status === 'out_of_stock' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white bg-black/50 px-6 py-2 rounded-lg">
                        SOLD OUT
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    {getStatusBadge(product.status)}
                  </div>
                  <p className="text-gray-400 mb-4">{product.title}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-blue-400">
                      From ${product.variants[0].price.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-700">
                    <button 
                      onClick={() => navigate(`/products/${product.id}`)}
                      className="px-4 py-2 bg-transparent border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-colors duration-300"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      disabled={product.status !== 'available'}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {product.status === 'available' ? 'Add to Cart' : 'Not Available'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CartNotification
        isOpen={showNotification}
        onClose={() => setShowNotification(false)}
        itemName={addedItemName}
      />
    </div>
  );
};

export default Products;