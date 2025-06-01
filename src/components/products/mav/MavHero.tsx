import React from 'react';
import { ChevronRight } from 'lucide-react';

const MavHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover opacity-50"
      >
        <source
          src="https://neura-robotics.com/wp-content/uploads/2024/09/website-landing_1.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Meet MAV
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-8">
          The Future of Autonomous Mobility
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Advanced autonomous vehicle platform designed for research, exploration, and complex robotics applications.
        </p>
        
        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300">
          Download Specifications
          <ChevronRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default MavHero;