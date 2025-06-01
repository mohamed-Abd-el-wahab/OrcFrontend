import React from 'react';
import { Shield, Zap, Cpu, PenTool as Tool, Mountain, Battery } from 'lucide-react';

const RoverInfo = () => {
  const specs = [
    { label: 'Payload', value: 'Up to 500 kg' },
    { label: 'Speed', value: 'Up to 1.5 m/s' },
    { label: 'Operating Time', value: 'Up to 5 hours' },
    { label: 'Dimensions', value: 'L1255 x W678 x H294 mm' },
    { label: 'Weight', value: '300 kg' },
    { label: 'Positioning Accuracy', value: '±5 mm' }
  ];

  const features = [
    {
      icon: Mountain,
      title: 'All-Terrain Capability',
      description: 'Advanced drive system with high-performance motors for any environment'
    },
    {
      icon: Tool,
      title: 'Modular Design',
      description: 'Easily customizable platform supporting various sensors and attachments'
    },
    {
      icon: Battery,
      title: 'Extended Operation',
      description: 'Long-lasting battery life for extended field operations'
    },
    {
      icon: Shield,
      title: 'Robust Safety',
      description: 'Comprehensive safety features and fail-safe mechanisms'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Powerful processing capabilities for real-time operations'
    },
    {
      icon: Cpu,
      title: 'Smart Control',
      description: 'Intuitive interface with advanced automation options'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technical Specifications */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specs.map((spec, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">{spec.label}</h3>
                <p className="text-2xl text-blue-400 font-bold">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-blue-500 mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoverInfo;