import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const CommunitySection = () => {
  const benefits = [
    "Weekly mentor AMAs & build sprints",
    "Member-only hackathons and labs", 
    "Early access to ROVER / REACH kits",
    "Lifelong career & collaboration network"
  ];

  return (
    <section className="relative bg-orc-black overflow-hidden py-16 md:py-20">
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="diagonal-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-arrows)"/>
        </svg>
      </div>

      <div className="brand-container relative z-20 px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[60vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <h2 className="font-montserrat font-extrabold text-4xl lg:text-5xl leading-tight text-orc-white">
              Join the{' '}
              <span className="text-orc-blue">ORC Community</span>
            </h2>

            {/* Lead Paragraph */}
            <p className="font-aileron text-lg leading-relaxed text-gray-300 max-w-lg">
              Connect with Egypt's brightest makers and engineers. Share ideas, build together, and compete in cutting-edge robotics challenges across the MENA region — then the world.
            </p>

            {/* Benefit Bullets */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 group cursor-default"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-orc-blue rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-aileron text-gray-300 text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-brand-primary inline-flex items-center justify-center px-8 py-4 bg-orc-blue text-orc-white font-medium rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-orc-blue/25 transition-all duration-300 group">
                Explore Community
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="btn-brand-secondary inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-orc-blue text-orc-blue font-medium rounded-xl hover:bg-orc-blue hover:text-orc-white hover:scale-105 transition-all duration-300 group">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group community-image-container">
            <div className="relative rounded-2xl overflow-hidden community-image">
              {/* Blue Glow Effect */}
              <div className="absolute -inset-1 bg-orc-blue/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video">
                {/* Brand Accent Dot */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full z-20"></div>
                
                {/* Community Image */}
                <img 
                  src="/community.png" 
                  alt="ORC members collaborating on robot build"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-left">
                    <h3 className="font-montserrat font-bold text-orc-white text-lg mb-1">
                      Real-World Collaboration
                    </h3>
                    <p className="font-aileron text-gray-300 text-sm">
                      Build, test, and battle alongside fellow innovators.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parallax Tilt Effect (Desktop) */}
            <style dangerouslySetInnerHTML={{
              __html: `
                @media (min-width: 1024px) {
                  .community-image-container:hover .community-image {
                    transform: perspective(1000px) rotateY(2deg);
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

export default CommunitySection; 