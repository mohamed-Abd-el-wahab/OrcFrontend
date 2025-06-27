import React, { useState } from 'react';
import { ChevronRight, Download } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import RoverHero from '../components/products/rover/RoverHero';
import RoverInfo from '../components/products/rover/RoverInfo';
import CartNotification from '../components/cart/CartNotification';

const RoverProduct = () => {
  const [selectedModel, setSelectedModel] = useState<'ROVER' | 'ROVER Pro'>('ROVER');
  const [selectedSize, setSelectedSize] = useState<'Large' | 'Medium'>('Large');
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);
  const [addedItemName, setAddedItemName] = useState('');
  
  const rover = products[0]; // Our Rover product
  const selectedVariant = rover.variants.find(
    v => v.name === selectedModel && v.size === selectedSize
  );

  const getProductImage = (model: string) => {
    return model === 'ROVER Pro' ? '/rover_pro.jpg' : '/rover.jpg';
  };

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCart({
        id: selectedVariant.id,
        type: 'product',
        name: `${selectedVariant.name} ${selectedVariant.size}`,
        price: selectedVariant.price,
        image: getProductImage(selectedVariant.name)
      });

      // Show notification
      setAddedItemName(`${selectedVariant.name} ${selectedVariant.size}`);
      setShowNotification(true);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <RoverHero />
      
      {/* Model Selection */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Choose Your Model</h2>
            <p className="text-xl text-gray-300">Select the perfect ROVER for your needs</p>
          </div>

          {/* Model Tabs */}
          <div className="flex justify-center mb-12 space-x-4">
            {['ROVER', 'ROVER Pro'].map((model) => (
              <button
                key={model}
                onClick={() => setSelectedModel(model as 'ROVER' | 'ROVER Pro')}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  selectedModel === model
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {model}
              </button>
            ))}
          </div>

          {/* Size Selection */}
          <div className="flex justify-center mb-12 space-x-4">
            {['Large', 'Medium'].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size as 'Large' | 'Medium')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedSize === size
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Product Details */}
          {selectedVariant && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-900">
                  <img
                    src={getProductImage(selectedVariant.name)}
                    alt={`${selectedVariant.name} ${selectedVariant.size}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Specifications */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedVariant.name} {selectedVariant.size}
                  </h3>
                  <p className="text-2xl text-blue-400 font-semibold">
                    ${selectedVariant.price.toLocaleString()}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(selectedVariant.specs).map(([key, value]) => (
                    <div key={key} className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="text-gray-400 text-sm mb-1 capitalize">
                        {key}
                      </div>
                      <div className="text-white font-semibold">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    Add to Cart
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                  <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center">
                    <Download className="w-5 h-5 mr-2" />
                    Specs PDF
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <RoverInfo />

      <CartNotification
        isOpen={showNotification}
        onClose={() => setShowNotification(false)}
        itemName={addedItemName}
      />
    </div>
  );
};

export default RoverProduct;