import React from 'react';
import { Shield, Zap, Cpu, PenTool as Tool, Brain, Target } from 'lucide-react';

const MavInfo = () => {
  const specs = [
    { label: 'Payload', value: 'Up to 100 kg' },
    { label: 'Speed', value: 'Up to 2.0 m/s' },
    { label: 'Operating Time', value: 'Up to 8 hours' },
    { label: 'Dimensions', value: 'L800 x W600 x H400 mm' },
    { label: 'Weight', value: '80 kg' },
    { label: 'Positioning Accuracy', value: '±2 mm' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Autonomous Navigation',
      description: 'Advanced SLAM algorithms for precise indoor and outdoor navigation'
    },
    {
      icon: Target,
      title: 'Dynamic Mobility',
      description: 'Versatile locomotion system for various terrains and environments'
    },
    {
      icon: Tool,
      title: 'Precision Control',
      description: 'High-accuracy positioning and movement control systems'
    },
    {
      icon: Shield,
      title: 'Robust Design',
      description: 'Durable construction for reliable operation in challenging conditions'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Powerful processing capabilities for complex tasks'
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Built-in support for machine learning and AI applications'
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

export default MavInfo;