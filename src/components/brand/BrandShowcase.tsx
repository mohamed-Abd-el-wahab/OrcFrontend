import React from 'react';
import { ArrowRight, Zap, Trophy, Rocket } from 'lucide-react';

const BrandShowcase = () => {
  return (
    <section className="section-padding bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 brand-pattern-dots opacity-5"></div>
      
      <div className="brand-container relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Brand Geometric Accent */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
            <div className="w-4 h-4 bg-orc-blue rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
          </div>
          
          {/* Main Headline - Brand Typography */}
          <h2 className="brand-headline text-4xl md:text-6xl text-orc-white mb-6 tracking-tight">
            EXPERIENCE THE 
            <br />
            <span className="text-brand-gradient">FUTURE OF ROBOTICS</span>
          </h2>
          
          {/* Subheading */}
          <p className="brand-body text-xl text-secondary-text max-w-3xl mx-auto leading-relaxed">
            Where innovation meets competition in the ultimate robotics challenge. 
            Join the movement that's shaping tomorrow's engineers.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="glass-effect-brand rounded-2xl p-8 hover:scale-105 transition-all duration-300 group">
            <div className="brand-accent-line">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orc-blue/20 rounded-xl mr-4 group-hover:bg-orc-blue/30 transition-colors duration-300">
                  <Zap className="w-6 h-6 text-orc-blue" />
                </div>
                <h3 className="brand-subhead text-xl text-orc-white">
                  Advanced Technology
                </h3>
              </div>
              <p className="brand-body text-secondary-text mb-6 leading-relaxed">
                State-of-the-art robotics platforms designed for competitive combat and learning excellence.
              </p>
              <button className="inline-flex items-center text-orc-blue hover:text-blue-400 transition-colors duration-300 group/link font-montserrat font-medium">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="glass-effect-brand rounded-2xl p-8 hover:scale-105 transition-all duration-300 group">
            <div className="brand-accent-line">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orc-blue/20 rounded-xl mr-4 group-hover:bg-orc-blue/30 transition-colors duration-300">
                  <Trophy className="w-6 h-6 text-orc-blue" />
                </div>
                <h3 className="brand-subhead text-xl text-orc-white">
                  Global Competition
                </h3>
              </div>
              <p className="brand-body text-secondary-text mb-6 leading-relaxed">
                Compete with innovators worldwide in our structured tournament system and win amazing prizes.
              </p>
              <button className="inline-flex items-center text-orc-blue hover:text-blue-400 transition-colors duration-300 group/link font-montserrat font-medium">
                Join Competition
                <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="glass-effect-brand rounded-2xl p-8 hover:scale-105 transition-all duration-300 group">
            <div className="brand-accent-line">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orc-blue/20 rounded-xl mr-4 group-hover:bg-orc-blue/30 transition-colors duration-300">
                  <Rocket className="w-6 h-6 text-orc-blue" />
                </div>
                <h3 className="brand-subhead text-xl text-orc-white">
                  Professional Tools
                </h3>
              </div>
              <p className="brand-body text-secondary-text mb-6 leading-relaxed">
                Access industry-grade simulation software and development environments for serious builders.
              </p>
              <button className="inline-flex items-center text-orc-blue hover:text-blue-400 transition-colors duration-300 group/link font-montserrat font-medium">
                Explore Tools
                <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          {/* Brand Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="brand-headline text-3xl md:text-4xl text-orc-blue mb-2">500+</div>
              <div className="brand-body text-secondary-text">Active Builders</div>
            </div>
            <div className="text-center">
              <div className="brand-headline text-3xl md:text-4xl text-orc-blue mb-2">50+</div>
              <div className="brand-body text-secondary-text">Countries</div>
            </div>
            <div className="text-center">
              <div className="brand-headline text-3xl md:text-4xl text-orc-blue mb-2">100+</div>
              <div className="brand-body text-secondary-text">Competitions</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-brand-primary text-lg px-8 py-4 flex items-center group">
              Start Building Today
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="btn-brand-secondary text-lg px-8 py-4 flex items-center group">
              Watch Demo
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase; 