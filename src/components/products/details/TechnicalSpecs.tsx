import React from 'react';
import { designClasses, SPACING } from '../../../config/design';
import { Battery, Weight, Zap, Ruler, Cpu, Settings, Package, Gauge, Layers, Wifi, Shield, ArrowUpRight, Eye } from 'lucide-react';

interface TechnicalSpecsProps {
  specs: {
    [key: string]: string;
  };
}

// Map spec keys to icons (add more as needed)
const specIcons: { [key: string]: React.ReactNode } = {
  'Battery': <Battery className="w-5 h-5 text-orc-blue" />,
  'Payload': <Weight className="w-5 h-5 text-orc-blue" />,
  'Runtime': <Zap className="w-5 h-5 text-orc-blue" />,
  'Dimensions': <Ruler className="w-5 h-5 text-orc-blue" />,
  'Controller': <Cpu className="w-5 h-5 text-orc-blue" />,
  'Motors': <Gauge className="w-5 h-5 text-orc-blue" />,
  'Chassis Material': <Shield className="w-5 h-5 text-orc-blue" />,
  'Drive System': <Settings className="w-5 h-5 text-orc-blue" />,
  'Communication': <Wifi className="w-5 h-5 text-orc-blue" />,
  'Add-on Support': <Package className="w-5 h-5 text-orc-blue" />,
  'Expansion Ports': <Layers className="w-5 h-5 text-orc-blue" />,
  'Max Speed': <ArrowUpRight className="w-5 h-5 text-orc-blue" />,
  'Safety Features': <Shield className="w-5 h-5 text-orc-blue" />,
  'Firmware Updates': <Settings className="w-5 h-5 text-orc-blue" />,
  'Weather Rating': <Shield className="w-5 h-5 text-orc-blue" />,
  'Accuracy': <Eye className="w-5 h-5 text-orc-blue" />,
};

// Highlight these keys
const highlightKeys = ['Runtime', 'Payload', 'Battery', 'Max Speed'];

const TechnicalSpecs = ({ specs }: TechnicalSpecsProps) => {
  const specEntries = Object.entries(specs);

  return (
    <section className={`${designClasses.section} ${SPACING.sectionPaddingY}`}>
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="specs-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#specs-arrows)"/>
        </svg>
      </div>

      <div className={designClasses.sectionContainer}>
        {/* Section Header with Icon */}
        <div className="flex flex-col items-center mb-10">
          <h2 className={designClasses.sectionHeadline}>
            Technical <span className="text-orc-blue">Specifications</span>
          </h2>
          <p className={`${designClasses.leadText} max-w-2xl text-center mt-2`}>All the details you need to compare, build, and deploy with confidence.</p>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2">
            <tbody>
              {specEntries.map(([key, value], index) => (
                <tr
                  key={key}
                  className={`transition group ${index % 2 === 0 ? 'bg-gray-800/40' : 'bg-gray-900/40'} hover:bg-orc-blue/10`}
                >
                  <td className="py-4 px-4 md:px-6 flex items-center gap-3 font-semibold text-orc-white text-base md:text-lg min-w-[180px]">
                    {specIcons[key] && <span>{specIcons[key]}</span>}
                    <span className={highlightKeys.includes(key) ? 'text-orc-blue font-bold' : ''}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </td>
                  <td className={`py-4 px-4 md:px-6 text-right md:text-left text-orc-white text-base md:text-lg ${highlightKeys.includes(key) ? 'text-orc-blue font-bold' : 'text-gray-200'}`}>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs; 