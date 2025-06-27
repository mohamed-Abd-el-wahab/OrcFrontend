import React from 'react';
import { Puzzle, Code, Wifi, Shield, Wrench, Palette } from 'lucide-react';
import { designClasses, SPACING } from '../../config/design';

const ProductFeatures = () => {
  const highlights = [
    {
      icon: Puzzle,
      title: 'Modular and Expandable',
      description: 'Built with expansion in mind - add sensors, arms, and custom modules'
    },
    {
      icon: Code,
      title: 'ROS2 and Python Compatible',
      description: 'Industry-standard frameworks for professional robotics development'
    },
    {
      icon: Wifi,
      title: 'Wireless Control (ESP-NOW, WiFi)',
      description: 'Real-time control without the need for complex network setup'
    },
    {
      icon: Shield,
      title: 'Durable Chassis & Safety Ready',
      description: 'Built to withstand classroom use and outdoor environments'
    },
    {
      icon: Wrench,
      title: 'Designed for Learning & Prototyping',
      description: 'Perfect for education, research, and rapid development cycles'
    },
    {
      icon: Palette,
      title: 'Customization-Friendly',
      description: 'Open architecture allows for unlimited customization possibilities'
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
            <pattern id="features-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#features-arrows)"/>
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
            Why <span className="text-orc-blue">ORC Robots?</span>
          </h2>
          <p className={`${designClasses.leadText} max-w-4xl mx-auto`}>
            ORC designs robots that are more than just machines — they're platforms for building, 
            experimenting, and engineering the future. Our robots are used in educational programs, 
            research labs, and competitions across MENA and beyond.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className={`${designClasses.grid} md:grid-cols-2 lg:grid-cols-3`}>
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div 
                key={index}
                className={`${designClasses.card} text-left`}
              >
                {/* Blue Glow Effect */}
                <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Brand Accent Dot */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
                
                <div className="relative flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-orc-blue/20 rounded-full flex items-center justify-center group-hover:bg-orc-blue group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-orc-blue group-hover:text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-orc-white mb-3 group-hover:text-orc-blue transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className={designClasses.bodyText}>
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures; 