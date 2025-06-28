import React from 'react';
import { Puzzle, Code, Download, Github } from 'lucide-react';
import { designClasses, SPACING } from '../../../config/design';

interface ExpansionCustomizationProps {
  productName: string;
}

const ExpansionCustomization = ({ productName }: ExpansionCustomizationProps) => {
  const expansionFeatures = [
    {
      icon: Puzzle,
      title: "Standard Modules",
      description: "Works with LIDAR, arms, screens, and more"
    },
    {
      icon: Code,
      title: "Open Firmware + APIs",
      description: "Full access to firmware and programming interfaces"
    },
    {
      icon: Download,
      title: "Custom Enclosures",
      description: "Can be used with custom payloads and enclosures"
    },
    {
      icon: Github,
      title: "Community Mods",
      description: "Access to community-created modifications"
    }
  ];

  return (
    <section className={`${designClasses.section} ${SPACING.sectionPaddingY}`}>
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="expansion-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#expansion-arrows)"/>
        </svg>
      </div>

      <div className={designClasses.sectionContainer}>
        {/* Section Header */}
        <div className={designClasses.sectionHeader}>
          <h2 className={designClasses.sectionHeadline}>
            Expansion & <span className="text-orc-blue">Customization</span>
          </h2>
          <p className={`${designClasses.leadText} max-w-3xl mx-auto`}>
            Mod it your way - {productName} is designed for endless possibilities
          </p>
        </div>

        {/* Expansion Features Grid */}
        <div className={`${designClasses.grid} md:grid-cols-2 lg:grid-cols-4 ${SPACING.gridGap}`}>
          {expansionFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className={`${designClasses.card} text-center ${SPACING.cardPadding}`}
              >
                {/* Blue Glow Effect */}
                <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Brand Accent Dot */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-orc-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orc-blue group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-orc-blue group-hover:text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-orc-white mb-4 group-hover:text-orc-blue transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className={`${designClasses.bodyText} text-gray-300`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12`}>
          <div className={`${designClasses.card} max-w-2xl mx-auto ${SPACING.cardPadding}`}>
            <div className="relative">
              {/* Blue Glow Effect */}
              <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Brand Accent Dot */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
              
              <div className="relative p-8">
                <h3 className="font-montserrat font-extrabold text-2xl text-orc-white mb-4">
                  Ready to Customize?
                </h3>
                <p className={`${designClasses.bodyText} mb-6`}>
                  Start building with {productName} and unlock your creativity
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className={designClasses.button}>
                    View Documentation
                  </button>
                  <button className={designClasses.buttonSecondary}>
                    Join Community
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

export default ExpansionCustomization; 