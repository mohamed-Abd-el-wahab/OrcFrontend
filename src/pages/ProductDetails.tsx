import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import CartNotification from '../components/cart/CartNotification';
import { ProductVariant } from '../types/products';

// Import new components
import {
  ProductDetailsHero,
  ProductOverview,
  VariantSelector,
  TechnicalSpecs,
  UseCases,
  ProductGallery,
  ExpansionCustomization,
  WhatsInTheBox,
  Resources,
  PurchaseSection,
  StickyBuyBar,
  CompareModal,
  SupportCTA
} from '../components/products/details';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);
  const [addedItemName, setAddedItemName] = useState('');
  const [isCompareOpen, setCompareOpen] = useState(false);
  
  const product = products.find(p => p.id === productId);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

  useEffect(() => {
    if (product) {
      // Default to the first variant (Normal - Small)
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  if (!product || !selectedVariant) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleVariantChange = (newVariant: ProductVariant) => {
    setSelectedVariant(newVariant);
  };

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

  const navigateToCart = () => {
    navigate('/cart');
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigateToCart();
  };

  const handleRequestDemo = () => {
    navigate(`/contact?type=demo&product=${product.id}`);
  };

  const handleGetQuote = () => {
    navigate(`/contact?type=quote&product=${product.id}`);
  };

  const handleCompare = () => {
    setCompareOpen(true);
  };

  const handleContact = () => {
    navigate('/contact');
  };

  const handleBuyFromCompare = (variant: ProductVariant) => {
    setSelectedVariant(variant);
    handleBuyNow();
    setCompareOpen(false);
  };

  // Get variant-specific product images
  const getProductImages = () => {
    if (product.id === 'rio') {
      return [
        '/rio.jpg',
        '/rio2.png',
        '/rio3.jpg'
      ];
    } else if (product.id === 'rover') {
      return [
        '/rover.jpg',
        '/rover2.jpg',
        '/rover3.jpg'
      ];
    }
    return [product.image];
  };

  // Convert selectedVariant.specs to the format expected by TechnicalSpecs
  const getFormattedSpecs = () => {
    const specs = selectedVariant.specs;
    return {
      'Payload': specs.payload,
      'Max Speed': specs.speed,
      'Runtime': specs.runtime,
      'Dimensions': specs.dimensions,
      'Weight': specs.weight,
      'Accuracy': specs.accuracy,
      ...(specs.controller && { 'Controller': specs.controller }),
      ...(specs.motors && { 'Motors': specs.motors }),
      ...(specs.communication && { 'Communication': specs.communication }),
      ...(specs.battery && { 'Battery': specs.battery }),
      ...(specs.firmware && { 'Firmware': specs.firmware }),
      ...(specs.safety && { 'Safety Features': specs.safety })
    };
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Banner */}
      <ProductDetailsHero 
        product={product}
        selectedVariant={selectedVariant}
        onBuyNow={handleBuyNow}
        onRequestDemo={handleRequestDemo}
      />

      {/* Overview Section */}
      <ProductOverview 
        product={product}
        highlights={product.features.map(f => f.title)}
      />

      {/* Variant Selector */}
      <VariantSelector 
        product={product}
        selectedVariant={selectedVariant}
        onVariantChange={handleVariantChange}
      />

      {/* Technical Specifications (Dynamic based on variant) */}
      <TechnicalSpecs specs={getFormattedSpecs()} />

      {/* Use Cases */}
      <UseCases productName={product.name} />

      {/* Gallery */}
      <ProductGallery 
        productName={product.name}
        images={getProductImages()}
      />

      {/* Expansion & Customization */}
      <ExpansionCustomization productName={product.name} />

      {/* What's in the Box (Dynamic based on variant) */}
      <WhatsInTheBox variantData={selectedVariant.whatsInTheBox} />

      {/* Resources */}
      <Resources productName={product.name} />

      {/* Purchase Section (Dynamic pricing) */}
      <PurchaseSection 
        productName={selectedVariant.name}
        startingPrice={selectedVariant.price}
        onBuyNow={handleBuyNow}
        onGetQuote={handleGetQuote}
        onCompare={handleCompare}
        onContact={handleContact}
      />

      {/* Support CTA */}
      <SupportCTA />

      {/* Sticky bottom buy bar */}
      <StickyBuyBar variant={selectedVariant} onBuy={handleBuyNow} />

      {/* Compare Modal */}
      <CompareModal product={product} isOpen={isCompareOpen} onClose={() => setCompareOpen(false)} onBuy={handleBuyFromCompare} />

      <CartNotification
        isOpen={showNotification}
        onClose={() => setShowNotification(false)}
        itemName={addedItemName}
      />
    </div>
  );
};

export default ProductDetails;