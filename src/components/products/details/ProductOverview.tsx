import React from 'react';
import { Check } from 'lucide-react';
import { designClasses, SPACING } from '../../../config/design';

interface ProductOverviewProps {
  product: {
    name: string;
    description: string;
  };
  highlights: string[];
}

const ProductOverview = ({ product, highlights }: ProductOverviewProps) => {
  return (
    <section className={`${designClasses.section} ${SPACING.sectionPaddingY}`}>
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="overview-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#overview-arrows)"/>
        </svg>
      </div>

      <div className={designClasses.sectionContainer}>
        <div className={`${designClasses.grid} lg:grid-cols-2 items-center ${SPACING.gridGap}`}>
          {/* Content */}
          <div className={designClasses.content}>
            <h2 className={designClasses.sectionHeadline}>
              Overview
            </h2>
            <p className={`${designClasses.leadText} mb-8`}>
              {product.name} is a compact, powerful robot designed for indoor environments like classrooms and labs. 
              Built with real-time wireless control, safety features, and modular expansion, it's perfect for 
              teaching robotics or building your next prototype.
            </p>
          </div>

          {/* Highlights */}
          <div className="relative">
            <div className={`${designClasses.card} text-left ${SPACING.cardPadding}`}>
              {/* Blue Glow Effect */}
              <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Brand Accent Dot */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
              
              <div className="relative">
                <h3 className="font-montserrat font-bold text-xl text-orc-white mb-6">
                  Key Highlights
                </h3>
                <div className={designClasses.elements}>
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-orc-blue/20 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-orc-blue" />
                      </div>
                      <span className={`${designClasses.bodyText} text-gray-300`}>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview; 