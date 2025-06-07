import React from 'react';
import HeroContent from './hero/HeroContent';
import ScrollIndicator from './hero/ScrollIndicator';
import HeroBackground from './hero/HeroBackground';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <HeroBackground />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      
      <div className="relative z-10">
        <HeroContent />
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default Hero;