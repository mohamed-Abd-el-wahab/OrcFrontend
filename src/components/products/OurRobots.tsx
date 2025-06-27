import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Clock, Package, Monitor } from 'lucide-react';
import { designClasses, SPACING } from '../../config/design';

const OurRobots = () => {
  return (
    <section className={designClasses.section}>
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="robots-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#robots-arrows)"/>
        </svg>
      </div>

      <div className={designClasses.sectionContainer}>
        {/* Section Header */}
        <div className={designClasses.sectionHeader}>
          {/* Brand Geometric Accent */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
            <div className="w-3 h-3 bg-orc-blue rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
          </div>

          <h2 className={designClasses.sectionHeadline}>
            Our <span className="text-orc-blue">Robots</span>
          </h2>
        </div>

        {/* Robots Grid */}
        <div className={`${designClasses.grid} lg:grid-cols-2`}>
          {/* RIO */}
          <div className="relative bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 group hover:border-orc-blue/50 transition-all duration-300">
            {/* Blue Glow Effect */}
            <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Brand Accent Dot */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full z-20"></div>
            
            {/* Robot Image */}
            <div className="relative h-64 bg-gradient-to-br from-orc-blue/20 to-orc-blue/10 overflow-hidden">
              <img 
                src="/rio.jpg" 
                alt="RIO Indoor Robot"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <div className="flex items-center space-x-2 bg-orc-blue/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className={`${designClasses.bodyText} text-white font-medium`}>Available</span>
                </div>
              </div>
            </div>

            <div className={`relative ${SPACING.cardPadding}`}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-orc-blue rounded-full"></div>
                <h3 className="font-montserrat font-extrabold text-2xl text-orc-white">RIO</h3>
              </div>
              
              <p className="font-montserrat font-bold text-lg text-gray-300 mb-2">Indoor Robot for STEM, Labs & Prototyping</p>
              <p className={`${designClasses.bodyText} text-gray-400 mb-8`}>
                RIO is compact, durable, and ready for rapid testing and teaching. Built on ESP32 and 
                supporting OTA updates, it's perfect for controlled environments.
              </p>

              {/* Specs */}
              <div className={`grid grid-cols-2 ${SPACING.gridGap} mb-8`}>
                <div className="flex items-center space-x-3">
                  <Monitor className="w-5 h-5 text-orc-blue" />
                  <div>
                    <p className={`${designClasses.bodyText} text-gray-500`}>Dimensions</p>
                    <p className={`${designClasses.bodyText} text-orc-white font-medium`}>250×250×80 mm</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Cpu className="w-5 h-5 text-orc-blue" />
                  <div>
                    <p className={`${designClasses.bodyText} text-gray-500`}>Controller</p>
                    <p className={`${designClasses.bodyText} text-orc-white font-medium`}>ESP32</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orc-blue" />
                  <div>
                    <p className={`${designClasses.bodyText} text-gray-500`}>Runtime</p>
                    <p className={`${designClasses.bodyText} text-orc-white font-medium`}>Up to 5 hrs</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Package className="w-5 h-5 text-orc-blue" />
                  <div>
                    <p className={`${designClasses.bodyText} text-gray-500`}>Payload</p>
                    <p className={`${designClasses.bodyText} text-orc-white font-medium`}>Up to 50 kg</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <p className={`${designClasses.bodyText} text-gray-400`}>Features: Safety Switch, RGB LEDs</p>
              </div>

              <Link 
                to="/products/rio"
                className={`${designClasses.button} w-full justify-center`}
              >
                <span>View Product</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* ROVER */}
          <div className="relative bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 group hover:border-green-500/50 transition-all duration-300">
            {/* Blue Glow Effect */}
            <div className="absolute -inset-1 bg-green-500/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Brand Accent Dot */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full z-20"></div>
            
            {/* Robot Image */}
            <div className="relative h-64 bg-gradient-to-br from-green-500/20 to-green-500/10 overflow-hidden">
              <img 
                src="/rover.jpg" 
                alt="ROVER Outdoor Robot"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <div className="flex items-center space-x-2 bg-green-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className={`${designClasses.bodyText} text-white font-medium`}>Available</span>
                </div>
              </div>
            </div>

            <div className={`relative ${SPACING.cardPadding}`}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h3 className="font-montserrat font-extrabold text-2xl text-orc-white">ROVER</h3>
              </div>
              
              <p className="font-montserrat font-bold text-lg text-gray-300 mb-2">All-Terrain Outdoor Robot for Field Robotics & Research</p>
              <p className={`${designClasses.bodyText} text-gray-400 mb-8`}>
                ROVER is tough, expandable, and engineered for real-world exploration. Whether it's in a 
                test field or a university campus, ROVER adapts.
              </p>

              {/* Specs */}
              <div className={`grid grid-cols-2 ${SPACING.gridGap} mb-8`}>
                <div className="flex items-center space-x-3">
                  <Monitor className="w-5 h-5 text-green-500" />
                  <div>
                    <p className={`${designClasses.bodyText} text-gray-500`}>Dimensions</p>
                    <p className={`${designClasses.bodyText} text-orc-white font-medium`}>300×300×120 mm</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Cpu className="w-5 h-5 text-green-500" />
                  <div>
                    <p className={`${designClasses.bodyText} text-gray-500`}>Controller</p>
                    <p className={`${designClasses.bodyText} text-orc-white font-medium`}>STM32 / Pi / Jetson</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-500" />
                  <div>
                    <p className={`${designClasses.bodyText} text-gray-500`}>Runtime</p>
                    <p className={`${designClasses.bodyText} text-orc-white font-medium`}>Up to 6 hrs</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Package className="w-5 h-5 text-green-500" />
                  <div>
                    <p className={`${designClasses.bodyText} text-gray-500`}>Payload</p>
                    <p className={`${designClasses.bodyText} text-orc-white font-medium`}>Up to 25 kg</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <p className={`${designClasses.bodyText} text-gray-400`}>Features: IP54-rated, 4WD, Solar Optional</p>
              </div>

              <Link 
                to="/products/rover"
                className={`${designClasses.buttonSecondary} w-full justify-center border-green-500 text-green-500 hover:bg-green-500 hover:text-white`}
              >
                <span>View Product</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRobots; 