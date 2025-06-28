import React from 'react';
import { Package, Plus, Check } from 'lucide-react';
import { designClasses, SPACING } from '../../../config/design';
import { WhatsInTheBox as WhatsInTheBoxType } from '../../../types/products';

interface WhatsInTheBoxProps {
  variantData: WhatsInTheBoxType;
}

const colorMap = {
  green: {
    bg: 'bg-green-500/20',
    border: 'border-green-500/30',
    accent: 'text-green-400',
    glow: 'bg-green-500/10'
  },
  blue: {
    bg: 'bg-blue-500/20',
    border: 'border-blue-500/30',
    accent: 'text-blue-400',
    glow: 'bg-blue-500/10'
  },
  red: {
    bg: 'bg-red-500/20',
    border: 'border-red-500/30',
    accent: 'text-red-400',
    glow: 'bg-red-500/10'
  },
  yellow: {
    bg: 'bg-yellow-500/20',
    border: 'border-yellow-500/30',
    accent: 'text-yellow-400',
    glow: 'bg-yellow-500/10'
  },
  orange: {
    bg: 'bg-orange-500/20',
    border: 'border-orange-500/30',
    accent: 'text-orange-400',
    glow: 'bg-orange-500/10'
  }
};

const WhatsInTheBox = ({ variantData }: WhatsInTheBoxProps) => {
  const colors = colorMap[variantData.color as keyof typeof colorMap] || colorMap.blue;

  return (
    <section className={`${designClasses.section} ${SPACING.sectionPaddingY}`}>
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="box-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#box-arrows)"/>
        </svg>
      </div>

      <div className={designClasses.sectionContainer}>
        {/* Section Header */}
        <div className={designClasses.sectionHeader}>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <h2 className={designClasses.sectionHeadline}>
              What's in the <span className="text-orc-blue">Box</span>
            </h2>
          </div>
          <p className={`${designClasses.leadText} max-w-3xl mx-auto`}>
            ✳️ Each variant includes unique hardware to suit different learning levels and budgets.
          </p>
        </div>

        {/* Variant-Specific Content */}
        <div className="max-w-4xl mx-auto">
          <div className={`relative group ${SPACING.cardPadding}`}>
            {/* Color-coded Card */}
            <div className={`${designClasses.card} border-2 ${colors.border} relative overflow-hidden`}>
              {/* Color Glow Effect */}
              <div className={`absolute -inset-1 ${colors.glow} rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Color Accent Dot */}
              <div className={`absolute top-6 right-6 w-4 h-4 ${colors.bg} rounded-full border-2 ${colors.border}`}></div>
              
              <div className="relative p-8">
                {/* Variant Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center px-4 py-2 ${colors.bg} ${colors.border} border rounded-full mb-4`}>
                    <span className={`font-bold text-lg ${colors.accent}`}>
                      {variantData.title}
                    </span>
                  </div>
                  <p className={`${designClasses.bodyText} text-gray-300 text-lg`}>
                    {variantData.description}
                  </p>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {variantData.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                      <div className={`flex-shrink-0 w-6 h-6 ${colors.bg} rounded-full flex items-center justify-center`}>
                        <Check className={`w-4 h-4 ${colors.accent}`} />
                      </div>
                      <span className={`${designClasses.bodyText} text-gray-200 font-medium`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Variant Info Footer */}
                <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                  <p className={`text-sm ${colors.accent} font-semibold`}>
                    Perfect for {variantData.title.toLowerCase()} users
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Reference */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">🧪 Where This Variant Shines</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
              <span className="text-sm text-gray-300">🧠 STEM Labs</span>
            </div>
            <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
              <span className="text-sm text-gray-300">🧪 Prototyping</span>
            </div>
            <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
              <span className="text-sm text-gray-300">🔬 Research</span>
            </div>
            <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
              <span className="text-sm text-gray-300">🧰 Hackathons</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsInTheBox; 