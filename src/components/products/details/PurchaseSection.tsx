import React from 'react';
import { ShoppingCart, Quote, BarChart3, HelpCircle, Shield, Truck, Headphones } from 'lucide-react';
import { designClasses, SPACING } from '../../../config/design';

interface PurchaseSectionProps {
  productName: string;
  startingPrice: number;
  currency?: string;
  onBuyNow: () => void;
  onGetQuote: () => void;
  onCompare: () => void;
  onContact: () => void;
}

const PurchaseSection = ({ productName, startingPrice, currency = "EGP", onBuyNow, onGetQuote, onCompare, onContact }: PurchaseSectionProps) => {
  return (
    <section className={`${designClasses.section} py-16 md:py-20`}>
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="purchase-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#purchase-arrows)"/>
        </svg>
      </div>

      <div className={designClasses.sectionContainer}>
        {/* Section Header */}
        <div className={designClasses.sectionHeader}>
          <h2 className={designClasses.sectionHeadline}>
            Ready to <span className="text-orc-blue">Purchase</span>?
          </h2>
          <p className={`${designClasses.leadText} max-w-3xl mx-auto`}>
            Get your {productName} today and start building the future
          </p>
        </div>

        {/* Purchase Options */}
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Primary CTA Strip */}
          <div className={`${designClasses.card} p-6 md:p-8 flex flex-col md:flex-row items-center md:items-stretch gap-6 relative group`}>
            {/* Glow */}
            <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            {/* Icon */}
            <div className="w-16 h-16 bg-orc-blue/20 rounded-full flex items-center justify-center shrink-0">
              <ShoppingCart className="w-8 h-8 text-orc-blue" />
            </div>
            {/* Price & benefits */}
            <div className="flex-1 md:flex md:items-center md:justify-between w-full">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">Starting at</p>
                <p className="text-3xl md:text-4xl font-bold text-orc-blue">{currency} {startingPrice.toLocaleString()}</p>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-1 text-gray-300 text-sm"><Shield className="w-4 h-4 text-green-500"/> Warranty</div>
                <div className="flex items-center gap-1 text-gray-300 text-sm"><Truck className="w-4 h-4 text-green-500"/> Fast Shipping</div>
                <div className="flex items-center gap-1 text-gray-300 text-sm"><Headphones className="w-4 h-4 text-green-500"/> Lifetime Support</div>
              </div>
            </div>
            {/* Button */}
            <button onClick={onBuyNow} className={`${designClasses.button} px-8 py-3 text-lg w-full md:w-auto`}>Buy {productName}</button>
          </div>

          {/* Secondary Options - Responsive Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Quote */}
            <div className={`${designClasses.card} p-4 md:p-6 text-center hover:shadow-lg transition`}>
              <div className="relative">
                {/* Blue Glow Effect */}
                <div className="absolute -inset-1 bg-green-500/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Brand Accent Dot */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
                
                <div className="relative p-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Quote className="w-6 h-6 text-green-500" />
                  </div>
                  
                  <h4 className="font-montserrat font-bold text-lg text-orc-white mb-2">
                    Quote
                  </h4>
                  
                  <p className={`${designClasses.bodyText} text-gray-300 mb-4`}>
                    For schools & bulk orders
                  </p>
                  
                  <button onClick={onGetQuote} className={`${designClasses.buttonSecondary} w-full`}>
                    Get Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Compare */}
            <div className={`${designClasses.card} p-4 md:p-6 text-center hover:shadow-lg transition`}>
              <div className="relative">
                {/* Blue Glow Effect */}
                <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Brand Accent Dot */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
                
                <div className="relative p-6">
                  <div className="w-12 h-12 bg-orc-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-6 h-6 text-orc-blue" />
                  </div>
                  
                  <h4 className="font-montserrat font-bold text-lg text-orc-white mb-2">
                    Compare
                  </h4>
                  
                  <p className={`${designClasses.bodyText} text-gray-300 mb-4`}>
                    See all ORC robots
                  </p>
                  
                  <button onClick={onCompare} className={`${designClasses.buttonSecondary} w-full`}>
                    Compare
                  </button>
                </div>
              </div>
            </div>

            {/* Help */}
            <div className={`${designClasses.card} p-4 md:p-6 text-center hover:shadow-lg transition`}>
              <div className="relative">
                {/* Blue Glow Effect */}
                <div className="absolute -inset-1 bg-orange-500/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Brand Accent Dot */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
                
                <div className="relative p-6">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HelpCircle className="w-6 h-6 text-orange-500" />
                  </div>
                  
                  <h4 className="font-montserrat font-bold text-lg text-orc-white mb-2">
                    Help
                  </h4>
                  
                  <p className={`${designClasses.bodyText} text-gray-300 mb-4`}>
                    Need assistance?
                  </p>
                  
                  <button onClick={onContact} className={`${designClasses.buttonSecondary} w-full`}>
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection; 