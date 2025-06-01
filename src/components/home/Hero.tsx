import React from 'react';
import HeroContent from './hero/HeroContent';
import ScrollIndicator from './hero/ScrollIndicator';
import HeroBackground from './hero/HeroBackground';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <HeroBackground />
      <div className="relative z-10">
        <HeroContent />
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default Hero;