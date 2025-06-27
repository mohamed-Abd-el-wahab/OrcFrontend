import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative bg-orc-black overflow-hidden min-h-screen flex items-center">
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="about-hero-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-hero-arrows)"/>
        </svg>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orc-blue rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-orc-blue rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-orc-blue rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Brand Geometric Accent */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
              <div className="w-3 h-3 bg-orc-blue rounded-full animate-pulse"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="font-montserrat font-extrabold text-5xl lg:text-7xl leading-tight text-orc-white">
                We Build the Future—
                <span className="text-orc-blue">Together</span>
              </h1>
              
              <p className="font-aileron text-xl leading-relaxed text-gray-300 max-w-2xl">
                ORC is the home of innovators, dreamers, and robot builders across Egypt and the MENA region. Where passion meets purpose, and ideas become reality.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Link
                to="/community"
                className="inline-flex items-center justify-center px-10 py-5 bg-orc-blue text-orc-white font-medium rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-orc-blue/25 transition-all duration-300 group text-lg font-montserrat"
              >
                <Users className="w-6 h-6 mr-3" />
                Join the Movement
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Blue Glow Effect */}
              <div className="absolute -inset-1 bg-orc-blue/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video">
                {/* Brand Accent Dot */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full z-20"></div>
                
                {/* Hero Image */}
                <img 
                  src="/community.png" 
                  alt="ORC community building robots together"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-left">
                    <h3 className="font-montserrat font-bold text-orc-white text-lg mb-1">
                      Innovation in Action
                    </h3>
                    <p className="font-aileron text-gray-300 text-sm">
                      Building tomorrow's technology with today's dreamers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parallax Tilt Effect (Desktop) */}
            <style dangerouslySetInnerHTML={{
              __html: `
                @media (min-width: 1024px) {
                  .group:hover .relative {
                    transform: perspective(1000px) rotateY(-2deg);
                    transition: transform 0.6s ease-out;
                  }
                }
              `
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;