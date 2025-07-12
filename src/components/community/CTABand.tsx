import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, MessageCircle } from 'lucide-react';

const CTABand = () => {
  return (
    <>
      {/* Main CTA Section */}
      <section className="relative bg-orc-black overflow-hidden py-20 md:py-24">
        {/* Left Blue Spine */}
        <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
        
        {/* Background Pattern - Diagonal Arrows */}
        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="cta-band-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
                <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
                <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-band-arrows)"/>
          </svg>
        </div>

        {/* Gradient Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orc-blue/5 via-transparent to-purple-500/5"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center space-y-12">
            {/* Brand Geometric Accent */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
              <div className="w-3 h-3 bg-orc-blue rounded-full animate-pulse"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
            </div>

            {/* Main CTA Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-montserrat font-extrabold text-4xl lg:text-6xl leading-tight text-orc-white">
                  Ready to{' '}
                  <span className="text-orc-blue">Start Building?</span>
                </h2>
              </div>
              
              <p className="font-aileron text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
                Join Egypt's leading robotics community and start your journey toward innovation, creativity, and technical excellence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-6 pt-8">
              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <Link
                  to="/register"
                  className="relative inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-orc-blue to-blue-600 text-orc-white font-bold rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-orc-blue/25 transition-all duration-300 group text-lg font-montserrat"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orc-blue to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative flex items-center">
                    <Users className="w-6 h-6 mr-3" />
                    Join the Community
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
                
                <a
                  href="https://wa.me/201031928810?text=Hello%20ORC%20Team!%20I%20have%20some%20questions%20about%20joining%20the%20robotics%20community."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-12 py-6 bg-white/10 text-orc-white font-medium rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group text-lg font-montserrat"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Ask Questions First
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Social Proof */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-gray-900"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-2 border-gray-900"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-2 border-gray-900"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-gray-900"></div>
                  </div>
                  <span className="font-aileron">8 people joined in the last hour</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <span className="font-aileron">⭐ 4.9/5 rating from members</span>
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="pt-12 border-t border-gray-800">
              <div className="max-w-2xl mx-auto bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-2xl p-6 border border-green-500/20">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-white">
                    100% Money-Back Guarantee
                  </h3>
                  <p className="font-aileron text-gray-300 text-sm">
                    Not satisfied within your first 14 days? Get a full refund, no questions asked. Plus, keep any resources you've downloaded!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTABand; 