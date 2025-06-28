import React from 'react';
import HeroContent from './hero/HeroContent';
import HeroBackground from './hero/HeroBackground';

const Hero = () => {
  return (
    <div className="relative min-h-screen gradient-primary overflow-hidden">
      <HeroBackground />
      <div className="relative z-10">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;