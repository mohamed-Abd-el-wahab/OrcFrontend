import React from 'react';
import { designClasses, SPACING } from '../../config/design';

const CompareModels = () => {
  const comparisonData = [
    {
      feature: 'Use Case',
      rio: 'Indoor STEM, labs',
      rover: 'Outdoor research, prototyping'
    },
    {
      feature: 'Controller',
      rio: 'ESP32',
      rover: 'STM32 / Pi / Jetson'
    },
    {
      feature: 'Communication',
      rio: 'ESP-NOW, BT',
      rover: 'Wi-Fi, 4G optional'
    },
    {
      feature: 'Max Payload',
      rio: '50 kg',
      rover: '25 kg'
    },
    {
      feature: 'Runtime',
      rio: 'Up to 5 hrs',
      rover: '4–6 hrs'
    },
    {
      feature: 'Terrain',
      rio: 'Flat surfaces, classrooms',
      rover: 'Grass, gravel, slopes'
    },
    {
      feature: 'Add-On Support',
      rio: 'Arms, LIDAR, cameras',
      rover: 'Arms, GPS, solar, sensors'
    },
    {
      feature: 'Price',
      rio: 'From EGP 4,500',
      rover: 'From EGP 9,800'
    }
  ];

  return (
    <section className={designClasses.section}>
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="compare-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#compare-arrows)"/>
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
            Compare <span className="text-orc-blue">Models</span>
          </h2>
          <p className={`${designClasses.leadText} max-w-3xl mx-auto`}>
            Choose the right robot for your specific needs and environment
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden group">
            {/* Blue Glow Effect */}
            <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Brand Accent Dot */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full z-20"></div>
            
            {/* Table Header */}
            <div className={`relative grid grid-cols-3 bg-gray-800/80 border-b border-gray-700/50 ${SPACING.cardPadding}`}>
              <div>
                <h3 className="font-montserrat font-bold text-lg text-gray-300">Feature</h3>
              </div>
              <div className="border-l border-gray-700/50 pl-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orc-blue rounded-full"></div>
                  <h3 className="font-montserrat font-extrabold text-lg text-orc-white">RIO</h3>
                </div>
              </div>
              <div className="border-l border-gray-700/50 pl-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h3 className="font-montserrat font-extrabold text-lg text-orc-white">ROVER</h3>
                </div>
              </div>
            </div>

            {/* Table Body */}
            {comparisonData.map((row, index) => (
              <div 
                key={index}
                className={`relative grid grid-cols-3 ${SPACING.cardPadding} ${index % 2 === 0 ? 'bg-gray-800/20' : 'bg-gray-800/40'} ${
                  index !== comparisonData.length - 1 ? 'border-b border-gray-700/30' : ''
                }`}
              >
                <div>
                  <p className="font-montserrat font-bold text-gray-300">{row.feature}</p>
                </div>
                <div className="border-l border-gray-700/30 pl-6">
                  <p className={`${designClasses.bodyText} text-orc-white`}>{row.rio}</p>
                </div>
                <div className="border-l border-gray-700/30 pl-6">
                  <p className={`${designClasses.bodyText} text-orc-white`}>{row.rover}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - Cards */}
          <div className={`lg:hidden ${designClasses.content} mt-8`}>
            <div className="relative bg-gray-900/50 rounded-2xl border border-gray-800 p-6 group">
              <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
              <div className="relative flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-orc-blue rounded-full"></div>
                <h3 className="font-montserrat font-extrabold text-xl text-orc-white">RIO</h3>
              </div>
              {comparisonData.map((row, index) => (
                <div key={index} className="flex justify-between py-3 border-b border-gray-700/30 last:border-b-0">
                  <span className="font-montserrat font-medium text-gray-400">{row.feature}</span>
                  <span className={`${designClasses.bodyText} text-orc-white font-medium`}>{row.rio}</span>
                </div>
              ))}
            </div>

            <div className="relative bg-gray-900/50 rounded-2xl border border-gray-800 p-6 group">
              <div className="absolute -inset-1 bg-green-500/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
              <div className="relative flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h3 className="font-montserrat font-extrabold text-xl text-orc-white">ROVER</h3>
              </div>
              {comparisonData.map((row, index) => (
                <div key={index} className="flex justify-between py-3 border-b border-gray-700/30 last:border-b-0">
                  <span className="font-montserrat font-medium text-gray-400">{row.feature}</span>
                  <span className={`${designClasses.bodyText} text-orc-white font-medium`}>{row.rover}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareModels; 