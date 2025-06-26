import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Trophy, ArrowRight } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 animate-fade-in">
      {/* Main Logo with Clean Design */}
      <div className="flex flex-col items-center justify-center mb-16">
        {/* ORC Logo Section */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-8">
            {/* Large ORC Text Logo */}
            <div className="text-8xl md:text-9xl font-['Montserrat',sans-serif] font-black text-white tracking-tight">
              ORC
            </div>
            
            {/* Tagline */}
            <div className="text-left">
              <div className="text-3xl md:text-4xl font-['Montserrat',sans-serif] font-light text-white">
                A Place
              </div>
              <div className="text-3xl md:text-4xl font-['Montserrat',sans-serif] font-light text-white">
                for Builders
              </div>
            </div>
          </div>
        </div>
        
        {/* Geometric accent lines */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#0000F2]"></div>
          <div className="w-3 h-3 bg-[#0000F2] rounded-full animate-pulse"></div>
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#0000F2]"></div>
        </div>
        
        {/* Main Tagline */}
        <h1 className="text-4xl md:text-6xl font-['Montserrat',sans-serif] font-bold text-white mb-6 tracking-tight leading-tight">
          Empowering the Next Generation
          <br />
          <span className="text-[#0000F2]">of Robotic Innovators</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-200 mb-16 max-w-3xl leading-relaxed font-['Aileron',sans-serif] font-light">
          Through cutting-edge competitions, collaborative learning, and hands-on experience with professional-grade robotics technology
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
          <Link
            to="/competition"
            className="group relative overflow-hidden px-12 py-5 bg-[#0000F2] text-white rounded-xl hover:bg-blue-700 transition-all duration-300 text-lg font-['Montserrat',sans-serif] font-semibold shadow-2xl transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              <Trophy className="w-6 h-6 mr-3" />
              Join Competition
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          
          <Link
            to="/services"
            className="group flex items-center px-12 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl text-lg font-['Montserrat',sans-serif] font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
          >
            <Rocket className="w-6 h-6 mr-3" />
            Explore Services
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;