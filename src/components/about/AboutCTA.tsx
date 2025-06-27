import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, Play } from 'lucide-react';

const AboutCTA = () => {
  return (
    <section className="relative bg-orc-black overflow-hidden py-24 md:py-32">
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="about-cta-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-cta-arrows)"/>
        </svg>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orc-blue rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-orc-blue rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-orc-blue rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-orc-blue rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center space-y-12">
          {/* Brand Geometric Accent */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
            <div className="w-4 h-4 bg-orc-blue rounded-full animate-pulse"></div>
            <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
          </div>

          {/* Main Headline */}
          <div className="space-y-8">
            <h2 className="font-montserrat font-extrabold text-5xl lg:text-7xl leading-tight text-orc-white">
              🔥 Ready to{' '}
              <span className="text-orc-blue">Build?</span>
            </h2>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="font-aileron text-xl lg:text-2xl leading-relaxed text-gray-300">
                The tools are here. The team is growing. The challenges are waiting.
              </p>
              
              <p className="font-montserrat font-bold text-2xl lg:text-3xl text-orc-blue">
                Join the ORC Community
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center pt-8">
            <Link
              to="/community"
              className="group inline-flex items-center justify-center px-12 py-6 bg-orc-blue text-orc-white font-medium rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-orc-blue/25 transition-all duration-300 text-lg font-montserrat min-w-[240px]"
            >
              <Users className="w-6 h-6 mr-3" />
              Join Now
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              to="/builder-challenge"
              className="group inline-flex items-center justify-center px-12 py-6 bg-transparent border-2 border-orc-blue text-orc-blue font-medium rounded-xl hover:bg-orc-blue hover:text-orc-white hover:scale-105 transition-all duration-300 text-lg font-montserrat min-w-[240px]"
            >
              <Zap className="w-6 h-6 mr-3" />
              Explore Builder Challenges
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Optional Video/Highlight Section */}
          <div className="pt-16">
            <div className="relative max-w-4xl mx-auto">
              {/* Video Placeholder */}
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video group cursor-pointer">
                {/* Brand Accent Dot */}
                <div className="absolute top-6 right-6 w-4 h-4 bg-orc-blue rounded-full z-20"></div>
                
                {/* Background Image */}
                <img 
                  src="/community.png" 
                  alt="ORC community highlights"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors duration-300">
                  <div className="w-20 h-20 bg-orc-blue/90 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-orc-blue transition-all duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="text-left">
                    <h3 className="font-montserrat font-bold text-orc-white text-xl mb-2">
                      Watch ORC in Action
                    </h3>
                    <p className="font-aileron text-gray-300">
                      See our community building the future, one robot at a time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA; 