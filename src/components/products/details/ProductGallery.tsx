import React from 'react';
import { designClasses, SPACING } from '../../../config/design';

interface ProductGalleryProps {
  productName: string;
  images: string[];
}

const ProductGallery = ({ productName, images }: ProductGalleryProps) => {
  return (
    <section className={`${designClasses.section} ${SPACING.sectionPaddingY}`}>
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="gallery-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gallery-arrows)"/>
        </svg>
      </div>

      <div className={designClasses.sectionContainer}>
        {/* Section Header */}
        <div className={designClasses.sectionHeader}>
          <h2 className={designClasses.sectionHeadline}>
            <span className="text-orc-blue">{productName}</span> Gallery
          </h2>
          <p className={`${designClasses.leadText} max-w-3xl mx-auto`}>
            Explore {productName} from every angle
          </p>
        </div>

        {/* Gallery Grid */}
        <div className={`${designClasses.grid} md:grid-cols-2 lg:grid-cols-3 ${SPACING.gridGap}`}>
          {images.map((image, index) => (
            <div 
              key={index}
              className={`relative group overflow-hidden rounded-2xl ${SPACING.cardPadding}`}
            >
              {/* Blue Glow Effect */}
              <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image */}
              <div className="relative aspect-square bg-gray-900 overflow-hidden">
                <img
                  src={image}
                  alt={`${productName} - View ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional 3D Viewer Note */}
        <div className="text-center mt-12">
          <p className={`${designClasses.bodyText} text-gray-400`}>
            Optional: 3D viewer or model exploder available for detailed inspection
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery; 