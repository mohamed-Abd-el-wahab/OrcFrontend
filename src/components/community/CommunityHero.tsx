import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, Trophy, Code, Wrench, Bot, Star, Heart, Target } from 'lucide-react';

const CommunityHero = () => {
  return (
    <section className="relative min-h-screen bg-orc-black overflow-hidden flex items-center pt-20">
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orc-blue rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-orc-blue rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-orc-blue rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="community-hero-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#community-hero-arrows)"/>
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="text-center space-y-16">
          {/* Brand Geometric Accent */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
            <div className="w-3 h-3 bg-orc-blue rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
          </div>

          {/* Main Headline */}
          <div className="space-y-8">
            <h1 className="font-montserrat font-extrabold text-5xl lg:text-7xl leading-tight text-orc-white">
              Build Robots.{' '}
              <span className="text-orc-blue">Build the Future.</span>
            </h1>
            
            <p className="font-aileron text-xl md:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
              A vibrant community where builders, students & pros power the next wave of robotics innovation across Egypt and beyond.
            </p>
          </div>

          {/* Community Stats Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Growing Community */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-orc-blue/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-orc-blue/50 transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-orc-blue/20 rounded-full flex items-center justify-center mx-auto">
                      <Users className="w-8 h-8 text-orc-blue" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-montserrat font-bold text-2xl text-orc-white">Growing</h3>
                      <p className="font-aileron text-gray-300">Community</p>
                      <p className="font-aileron text-sm text-gray-400">Join builders worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Endless Possibilities */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-orc-blue/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-orc-blue/50 transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-orc-blue/20 rounded-full flex items-center justify-center mx-auto">
                      <Bot className="w-8 h-8 text-orc-blue" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-montserrat font-bold text-2xl text-orc-white">Endless</h3>
                      <p className="font-aileron text-gray-300">Possibilities</p>
                      <p className="font-aileron text-sm text-gray-400">Build your dream robots</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expert Guidance */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-orc-blue/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-orc-blue/50 transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-orc-blue/20 rounded-full flex items-center justify-center mx-auto">
                      <Trophy className="w-8 h-8 text-orc-blue" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-montserrat font-bold text-2xl text-orc-white">Expert</h3>
                      <p className="font-aileron text-gray-300">Guidance</p>
                      <p className="font-aileron text-sm text-gray-400">24/7 community support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Technologies Grid */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
              {[
                { icon: Code, label: 'Programming' },
                { icon: Wrench, label: 'Hardware' },
                { icon: Zap, label: 'Electronics' },
                { icon: Target, label: 'AI/ML' },
                { icon: Heart, label: 'Mentorship' },
                { icon: Star, label: 'Innovation' }
              ].map((skill, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-orc-blue/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gray-900/30 rounded-xl p-6 border border-gray-800/50 hover:border-orc-blue/30 transition-all duration-300">
                    <div className="text-center space-y-3">
                      <div className="w-10 h-10 bg-orc-blue/20 rounded-lg flex items-center justify-center mx-auto">
                        <skill.icon className="w-5 h-5 text-orc-blue" />
                      </div>
                      <p className="font-aileron text-sm text-gray-300">{skill.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-12 py-6 bg-orc-blue text-orc-white font-medium rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-orc-blue/25 transition-all duration-300 group text-lg font-montserrat"
            >
              <Users className="w-6 h-6 mr-3" />
              Join the Movement
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-12 py-6 bg-white/10 text-orc-white font-medium rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group text-lg font-montserrat"
            >
              <Bot className="w-6 h-6 mr-3" />
              Explore Projects
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-gray-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orc-blue rounded-full animate-pulse"></div>
              <span className="font-aileron text-sm">8 people joined in the last hour</span>
            </div>
            <span className="hidden sm:inline text-gray-400">•</span>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-orc-blue" />
              <span className="font-aileron text-sm">4.9/5 from 150+ reviews</span>
            </div>
            <span className="hidden sm:inline text-gray-400">•</span>
            <div className="flex items-center space-x-2">
              <Trophy className="w-4 h-4 text-orc-blue" />
              <span className="font-aileron text-sm">Award-winning community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityHero; 