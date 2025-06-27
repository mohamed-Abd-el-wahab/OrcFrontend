import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { designClasses, SPACING } from '../../config/design';

const ProductHero = () => {
  return (
    <section className="relative bg-orc-black overflow-hidden min-h-screen flex items-center">
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="products-hero-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#products-hero-arrows)"/>
        </svg>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orc-blue rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-orc-blue rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-orc-blue rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className={designClasses.sectionContainer}>
        <div className={`${designClasses.grid} lg:grid-cols-2 items-center`}>
          {/* Left Content */}
          <div className={designClasses.content}>
            {/* Brand Geometric Accent */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
              <div className="w-3 h-3 bg-orc-blue rounded-full animate-pulse"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
            </div>

            {/* Main Headline */}
            <div className={designClasses.elements}>
              <h1 className={designClasses.heroHeadline}>
                Explore the Future of{' '}
                <span className="text-orc-blue">Robotics</span>, One Bot at a Time
              </h1>
              
              <p className={`${designClasses.leadText} max-w-2xl`}>
                From classrooms to field research — meet the powerful, modular robots built by ORC to drive hands-on learning and innovation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products/rio"
                className={designClasses.button}
              >
                Meet RIO
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/products/rover"
                className={designClasses.buttonSecondary}
              >
                Meet ROVER
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative group">
            <div className={`grid grid-cols-1 md:grid-cols-2 ${SPACING.gridGap}`}>
              {/* RIO Visual */}
              <div className="relative group/card">
                <div className="absolute -inset-1 bg-orc-blue/20 rounded-2xl blur-sm opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 group-hover/card:border-orc-blue/50">
                  <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full z-20"></div>
                  <div className={SPACING.cardPadding}>
                    <div className="w-full h-48 bg-gradient-to-br from-orc-blue/20 to-orc-blue/10 rounded-lg mb-4 flex items-center justify-center">
                      <img 
                        src="/rio.jpg" 
                        alt="RIO Indoor Robot"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-montserrat font-bold text-orc-white mb-2">RIO</h3>
                    <p className={`${designClasses.bodyText} text-gray-400`}>Indoor with tablet controller</p>
                  </div>
                </div>
              </div>

              {/* ROVER Visual */}
              <div className="relative group/card">
                <div className="absolute -inset-1 bg-orc-blue/20 rounded-2xl blur-sm opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 group-hover/card:border-orc-blue/50">
                  <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full z-20"></div>
                  <div className={SPACING.cardPadding}>
                    <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-lg mb-4 flex items-center justify-center">
                      <img 
                        src="/rover.jpg" 
                        alt="ROVER Outdoor Robot"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-montserrat font-bold text-orc-white mb-2">ROVER</h3>
                    <p className={`${designClasses.bodyText} text-gray-400`}>Navigating gravel outdoors</p>
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

export default ProductHero;