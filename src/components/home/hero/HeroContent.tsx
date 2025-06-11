import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Trophy, ArrowRight } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 animate-fade-in">
      {/* Main Logo with Floating Animation */}
      <div className="flex flex-col items-center justify-center animate-float-gentle">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-bright-cyan/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <img 
            src="/header_logo.svg" 
            alt="ORC Logo" 
            className="relative w-80 h-auto drop-shadow-2xl"
          />
        </div>
        
        {/* Geometric accent lines */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-bright-cyan"></div>
          <div className="w-3 h-3 bg-bright-cyan rounded-full animate-pulse"></div>
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-bright-cyan"></div>
        </div>
        
        {/* Main Tagline */}
        <h1 className="text-5xl md:text-7xl font-black text-primary-text mb-6 tracking-tight">
          A PLACE
        </h1>
        <h2 className="text-3xl md:text-5xl font-light text-bright-cyan mb-8 tracking-wide">
          for Builders
        </h2>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-secondary-text mb-16 max-w-2xl leading-relaxed font-light">
          Empowering the next generation of robotic innovators through cutting-edge competitions and collaborative learning
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
          <Link
            to="/competition"
            className="group relative overflow-hidden px-12 py-5 gradient-accent text-primary-text rounded-xl hover:scale-105 transition-all duration-300 text-lg font-semibold shadow-2xl animate-pulse-glow"
          >
            <span className="relative z-10 flex items-center">
              <Trophy className="w-6 h-6 mr-3" />
              Join Competition
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-bright-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          
          <Link
            to="/services"
            className="group flex items-center px-12 py-5 glass-effect text-primary-text rounded-xl text-lg font-medium hover:scale-105 transition-all duration-300 border border-bright-cyan/30 hover:border-bright-cyan/60"
          >
            <Rocket className="w-6 h-6 mr-3" />
            Explore Services
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
          <div className="w-96 h-96 border border-bright-cyan/10 rounded-full animate-spin-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-electric-blue/20 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;