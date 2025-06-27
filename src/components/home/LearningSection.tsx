import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Lightbulb } from 'lucide-react';

const LearningSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-orc-blue" />,
      title: "Comprehensive Curriculum",
      description: "From basic electronics to advanced autonomous systems"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Expert Community",
      description: "Learn from engineers, makers, and innovators worldwide"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-orc-blue" />,
      title: "Real-World Projects",
      description: "Build robots that compete in actual challenges"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-deep-charcoal to-orc-black relative">
      {/* Brand Background Pattern */}
      <div className="absolute inset-0 brand-pattern-grid opacity-5"></div>
      
      <div className="brand-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="relative animate-fade-in">
            {/* Brand Accent Line */}
            <div className="brand-accent-line">
              {/* Section Header */}
              <div className="mb-12">
                {/* Brand Geometric Accent */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
                  <BookOpen className="w-6 h-6 text-orc-blue animate-pulse" />
                  <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
                </div>
                
                {/* Brand Headline Typography */}
                <h2 className="brand-headline text-4xl md:text-6xl text-orc-white mb-6 leading-tight tracking-tight">
                  MASTER ROBOTICS
                  <br />
                  <span className="text-orc-blue">THROUGH INNOVATION</span>
                </h2>
              </div>
              
              {/* Features Grid */}
              <div className="space-y-8 mb-12">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group flex items-start space-x-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="p-3 glass-effect-brand rounded-xl group-hover:scale-110 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="brand-subhead text-xl text-orc-white mb-2 group-hover:text-orc-blue transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="brand-body text-secondary-text leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Description */}
              <div className="space-y-6 mb-10">
                <p className="brand-body text-xl text-secondary-text leading-relaxed">
                  Our comprehensive curriculum covers everything from basic electronics to advanced autonomous systems. 
                  <span className="text-orc-blue font-medium"> Learn by building real robots</span> that compete in actual challenges.
                </p>
                
                <p className="brand-body text-xl text-secondary-text leading-relaxed">
                  Join a community of engineers, makers, and innovators who are 
                  <span className="text-blue-400 font-medium"> pushing the boundaries</span> of what's possible in robotics and automation.
                </p>
              </div>
              
              {/* CTA Button */}
              <Link
                to="/courses"
                className="btn-brand-primary text-lg px-10 py-5 flex items-center group w-fit"
              >
                <span className="mr-3">Explore Curriculum</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative group animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Brand Glow Effects */}
            <div className="absolute -inset-6 bg-gradient-to-r from-orc-blue/10 to-blue-400/10 rounded-3xl blur-3xl group-hover:from-orc-blue/20 group-hover:to-blue-400/20 transition-all duration-700"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 to-orc-blue/20 rounded-2xl blur-xl group-hover:opacity-75 transition-opacity duration-500"></div>
            
            {/* Main image container */}
            <div className="relative glass-effect-brand rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
                alt="Advanced robotics learning environment"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-orc-black/80 via-transparent to-orc-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-orc-black/40 via-transparent to-transparent" />
              
              {/* Brand Floating elements */}
              <div className="absolute top-6 right-6 w-4 h-4 bg-orc-blue rounded-full animate-pulse opacity-80"></div>
              <div className="absolute bottom-8 left-8 w-3 h-3 bg-blue-400 rounded-full animate-float-gentle opacity-60"></div>
              
              {/* Bottom info overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-effect-brand rounded-xl p-4">
                  <p className="brand-subhead text-orc-white text-sm">
                    Advanced Robotics Lab
                  </p>
                  <p className="brand-body text-secondary-text text-xs mt-1">
                    Professional development environment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;