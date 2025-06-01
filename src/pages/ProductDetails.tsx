import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Download, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import CartNotification from '../components/cart/CartNotification';
import { ProductStatus } from '../types/products';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);
  const [addedItemName, setAddedItemName] = useState('');
  
  const product = products.find(p => p.id === productId);
  const [selectedModel, setSelectedModel] = useState('');

  useEffect(() => {
    if (product) {
      setSelectedModel(product.variants[0].name);
    }
  }, [product]);
  
  const selectedVariant = product?.variants.find(v => v.name === selectedModel);

  if (!product || !selectedVariant) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (selectedVariant.status !== 'available') return;

    addToCart({
      id: selectedVariant.id,
      type: 'product',
      name: selectedVariant.name,
      price: selectedVariant.price,
      image: product.image
    });

    setAddedItemName(selectedVariant.name);
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
    <div className="bg-black min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => navigate('/products')}
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {product.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-8">
            {product.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            {product.description}
          </p>
          {getStatusBadge(product.status)}
        </div>
      </section>
      
      {/* Model Selection */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Choose Your Model</h2>
            <p className="text-xl text-gray-300">Select the perfect {product.name} for your needs</p>
          </div>

          {/* Model Tabs */}
          <div className="flex justify-center mb-12 space-x-4">
            {[...new Set(product.variants.map(v => v.name))].map((model) => (
              <button
                key={model}
                onClick={() => setSelectedModel(model)}
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

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-900">
                <img
                  src={product.image}
                  alt={`${selectedVariant.name}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedVariant.name}
                  </h3>
                  <p className="text-2xl text-blue-400 font-semibold">
                    ${selectedVariant.price.toLocaleString()}
                  </p>
                </div>
                {getStatusBadge(selectedVariant.status)}
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
                  disabled={selectedVariant.status !== 'available'}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {selectedVariant.status === 'available' ? 'Add to Cart' : 'Not Available'}
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Specs PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-blue-500 mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
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

export default ProductDetails;