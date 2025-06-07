import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Trophy, ArrowRight, Zap } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
        {/* Logo with enhanced styling */}
        <div className="relative mb-12 group">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl scale-150 group-hover:scale-175 transition-transform duration-1000"></div>
          <img 
            src="/header_logo.svg" 
            alt="Logo" 
            className="relative w-80 h-auto transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Enhanced tagline */}
        <div className="relative mb-16">
          <h1 className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 font-light tracking-wide mb-4">
            A Place for Builders
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        </div>
        
        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
          <Link
            to="/competition"
            className="group relative overflow-hidden px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:via-blue-600 hover:to-purple-700 transition-all duration-500 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center">
              <Trophy className="w-6 h-6 mr-3" />
              Join Competition
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
          </Link>
          
          <Link
            to="/services"
            className="group relative overflow-hidden px-10 py-5 bg-black/50 backdrop-blur-sm border-2 border-gray-700 hover:border-blue-500 text-white rounded-xl text-lg font-semibold transition-all duration-500 hover:bg-gray-900/50 transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center">
              <Rocket className="w-6 h-6 mr-3" />
              Explore Services
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        </div>

        {/* Enhanced stats */}
        <div className="grid grid-cols-3 gap-8 w-full max-w-2xl">
          {[
            { value: '8k+', label: 'builders', icon: <Zap className="w-5 h-5" /> },
            { value: '25', label: 'events', icon: <Trophy className="w-5 h-5" /> },
            { value: '120k', label: 'subs', icon: <Rocket className="w-5 h-5" /> }
          ].map((stat, index) => (
            <div key={index} className="group text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/10">
              <div className="flex items-center justify-center mb-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;