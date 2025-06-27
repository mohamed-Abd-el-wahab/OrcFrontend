import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Trophy, ArrowRight, Users } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 lg:px-8 pb-20">
      {/* Main Logo Section - Using SVG Hero Logo */}
      <div className="flex flex-col items-center justify-center mb-8">
        {/* Brand Geometric Accent */}
        <div className="flex items-center justify-center space-x-6 mb-8">
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
          <div className="w-3 h-3 bg-orc-blue rounded-full animate-pulse"></div>
          <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
        </div>
        
        {/* Hero Logo SVG - Made Much Bigger */}
        <div className="mb-8">
          <img 
            src="/hero_section_logo.svg" 
            alt="ORC - A Place for Builders"
            className="w-auto h-40 md:h-56 lg:h-72 xl:h-96 max-w-full object-contain"
            loading="eager"
          />
        </div>
        
        {/* Main Tagline */}
        <h1 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-orc-white mb-6 tracking-tight leading-tight max-w-5xl">
          Empowering the Next Generation
          <br />
          <span className="text-orc-blue">of Robotic Innovators</span>
        </h1>
        
        {/* Subtitle */}
        <p className="font-aileron text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl leading-relaxed">
          Through cutting-edge competitions, collaborative learning, and hands-on experience with professional-grade robotics technology
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link
            to="/community"
            className="btn-brand-primary inline-flex items-center justify-center px-8 py-4 bg-orc-blue text-orc-white font-medium rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-orc-blue/25 transition-all duration-300 group text-lg"
          >
            <Users className="w-5 h-5 mr-3" />
            Join Community
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <Link
            to="/services"
            className="btn-brand-secondary inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-orc-blue text-orc-blue font-medium rounded-xl hover:bg-orc-blue hover:text-orc-white hover:scale-105 transition-all duration-300 group text-lg"
          >
            <Rocket className="w-5 h-5 mr-3" />
            Explore Services
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;