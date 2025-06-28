import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Trophy, ArrowRight, Users } from 'lucide-react';
import { designClasses } from '../../../config/design';

const HeroContent = () => {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center container-spacing pb-20">
      {/* Main Logo Section - Using SVG Hero Logo */}
      <div className="flex flex-col items-center justify-center mb-6">
        {/* Brand Geometric Accent */}
     
        
        {/* Hero Logo SVG - Properly Sized for All Screens */}
        <div className="mb-6 sm:mb-8">
          <img 
            src="/hero_section_logo.svg" 
            alt="ORC - A Place for Builders"
            className={`w-auto ${designClasses.heroLogo} max-w-full object-contain`}
            loading="eager"
          />
        </div>
        
        {/* Main Tagline */}
        <h1 className={`${designClasses.heroHeadline} mb-4 sm:mb-6 tracking-tight max-w-5xl px-2`}>
          Empowering the Next Generation
          <br />
          <span className="text-orc-blue">of Robotic Innovators</span>
        </h1>
        
        {/* Subtitle */}
        <p className="font-aileron text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl leading-relaxed px-2">
          Through cutting-edge competitions, collaborative learning, and hands-on experience with professional-grade robotics technology
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <Link
            to="/community"
            className={`${designClasses.button} w-full sm:w-auto`}
          >
            <Users className="w-4 h-4 mr-2" />
            Join Community
            <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <Link
            to="/services"
            className={`${designClasses.buttonSecondary} w-full sm:w-auto`}
          >
            <Rocket className="w-4 h-4 mr-2" />
            Explore Services
            <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;