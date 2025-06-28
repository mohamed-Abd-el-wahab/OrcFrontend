import React, { useState, useEffect } from 'react';
import { designClasses, SPACING } from '../../../config/design';
import { ProductType, ProductVariant, ProductEdition, ProductSize } from '../../../types/products';
import { Settings } from 'lucide-react';

interface VariantSelectorProps {
  product: ProductType;
  selectedVariant: ProductVariant;
  onVariantChange: (variant: ProductVariant) => void;
}

const VariantSelector = ({ product, selectedVariant, onVariantChange }: VariantSelectorProps) => {
  const [selectedEdition, setSelectedEdition] = useState<ProductEdition>(selectedVariant.edition);
  const [selectedSize, setSelectedSize] = useState<ProductSize>(selectedVariant.size);

  // Update variant when edition or size changes
  useEffect(() => {
    const newVariant = product.variants.find(
      variant => variant.edition === selectedEdition && variant.size === selectedSize
    );
    if (newVariant && newVariant.id !== selectedVariant.id) {
      onVariantChange(newVariant);
    }
  }, [selectedEdition, selectedSize, product.variants, selectedVariant.id, onVariantChange]);

  const editions: ProductEdition[] = ['Normal', 'Pro'];
  const sizes: ProductSize[] = ['Small', 'Medium', 'Large'];

  return (
    <section className={`${designClasses.section} py-12 md:py-16`}>
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="variant-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#variant-arrows)"/>
        </svg>
      </div>

      <div className={designClasses.sectionContainer}>
        {/* Section Header */}
        <div className={`${designClasses.sectionHeader} space-y-2`}>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <h2 className={designClasses.sectionHeadline}>
              Choose Your <span className="text-orc-blue">{product.name}</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            {product.name} is available in multiple configurations to match your goals—from student learning kits to full research-ready platforms.
          </p>
        </div>

        {/* Variant Selector */}
        <div className="max-w-3xl mx-auto">
          <div className={`${designClasses.card} p-4 md:p-6 relative group`}>
            {/* Blue Glow Effect */}
            <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Brand Accent Dot */}
            <div className="absolute top-6 right-6 w-3 h-3 bg-orc-blue rounded-full"></div>
            
            <div className="relative space-y-8">
              {/* Edition Selector */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white">Edition:</label>
                <div className="flex gap-3 flex-wrap">
                  {editions.map(edition => {
                    const label = edition === 'Normal' ? product.name : `${product.name} Pro`;
                    return (
                      <button
                        key={edition}
                        onClick={() => setSelectedEdition(edition)}
                        className={`px-4 py-2 rounded-md border transition-all duration-200 text-sm ${
                          selectedEdition === edition
                            ? 'bg-orc-blue border-orc-blue text-white shadow-md shadow-orc-blue/25'
                            : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-orc-blue/50 hover:bg-gray-700'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white">Size:</label>
                <div className="flex gap-3 flex-wrap">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-md border transition-all duration-200 text-sm ${
                        selectedSize === size
                          ? 'bg-orc-blue border-orc-blue text-white shadow-md shadow-orc-blue/25'
                          : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-orc-blue/50 hover:bg-gray-700'
                      }`}
                    >
                      {size.charAt(0)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Variant Display */}
              <div className="pt-4 border-t border-gray-700 bg-gray-800/50 rounded-lg p-4">
                <div className="grid md:grid-cols-2 gap-4 items-center">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">🛒 Selected Variant:</p>
                    <p className="text-lg font-bold text-white">{selectedVariant.name}</p>
                    <p className="text-gray-300 mt-0.5 text-sm">{selectedVariant.whatsInTheBox.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 mb-1">💰 Price:</p>
                    <p className="text-xl font-bold text-orc-blue">EGP {selectedVariant.price.toLocaleString()}</p>
                    <div className="inline-flex items-center px-2 py-0.5 bg-green-500/20 border border-green-500/30 rounded-full mt-1">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></div>
                      <span className="text-green-400 text-xs font-medium">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VariantSelector; 