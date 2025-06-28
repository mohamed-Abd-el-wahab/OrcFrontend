import React from 'react';
import { ArrowLeft, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { designClasses, SPACING } from '../../../config/design';
import { ProductType, ProductVariant } from '../../../types/products';

interface ProductDetailsHeroProps {
  product: ProductType;
  selectedVariant: ProductVariant;
  onBuyNow: () => void;
  onRequestDemo: () => void;
}

const ProductDetailsHero = ({ product, selectedVariant, onBuyNow, onRequestDemo }: ProductDetailsHeroProps) => {
  const navigate = useNavigate();

  const getLowestPrice = () => {
    return Math.min(...product.variants.map(v => v.price));
  };

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden bg-orc-black ${SPACING.sectionPaddingY}`}>
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>

      {/* Geometric SVG Background */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none select-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="product-hero-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#product-hero-arrows)"/>
        </svg>
      </div>

      {/* Animated Blue Dots */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orc-blue rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-orc-blue rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-orc-blue rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[60vh]">
          {/* Left: Text & CTAs */}
          <div className="space-y-8">
            {/* Geometric Accent */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
              <div className="w-3 h-3 bg-orc-blue rounded-full animate-pulse"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
            </div>

            {/* Headline & Tagline */}
            <div className="space-y-6">
              <h1 className="font-montserrat font-extrabold text-4xl lg:text-6xl leading-tight text-orc-white">
                {product.name} — <span className="text-orc-blue">{product.title.split(' ')[0]}</span>
              </h1>
              <div className="space-y-2">
                <p className="font-aileron text-lg font-semibold text-gray-200">
                  Modular. Wireless. Built for Learning.
                </p>
                <p className="font-aileron text-base leading-relaxed text-gray-300 max-w-2xl">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-2">
              <p className="text-sm text-gray-400">💰 Starting Price:</p>
              <p className="text-3xl font-bold text-orc-blue">EGP {getLowestPrice().toLocaleString()}</p>
              <p className="text-sm text-gray-500">Available in multiple configurations</p>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-green-400 font-medium">Available</span>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row ${SPACING.gridGap} pt-2`}>
              <button onClick={onBuyNow} className={`${designClasses.button} px-8 py-4`}>
                Buy Now
              </button>
              <button onClick={onRequestDemo} className={`${designClasses.buttonSecondary} px-8 py-4`}>
                <Play className="w-5 h-5 mr-2" />
                Request Demo
              </button>
            </div>
          </div>

          {/* Right: Product Image */}
          <div className="relative group flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Blue Glow Effect */}
              <div className="absolute -inset-1 bg-orc-blue/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Brand Accent Dot */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full z-20"></div>
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain max-h-[420px] min-w-[280px] bg-gray-900 rounded-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsHero; 