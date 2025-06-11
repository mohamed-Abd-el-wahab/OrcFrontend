import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Lightbulb } from 'lucide-react';

const LearningSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-bright-cyan" />,
      title: "Comprehensive Curriculum",
      description: "From basic electronics to advanced autonomous systems"
    },
    {
      icon: <Users className="w-6 h-6 text-electric-blue" />,
      title: "Expert Community",
      description: "Learn from engineers, makers, and innovators worldwide"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-bright-cyan" />,
      title: "Real-World Projects",
      description: "Build robots that compete in actual challenges"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-deep-charcoal to-dark-navy relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(79, 125, 243, 0.08) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(79, 125, 243, 0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="relative animate-fade-in">
            {/* Geometric accent */}
            <div className="absolute -left-6 top-0 w-1 h-40 bg-gradient-to-b from-bright-cyan via-electric-blue to-transparent rounded-full"></div>
            
            <div className="pl-8">
              {/* Section Header */}
              <div className="mb-12">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-bright-cyan"></div>
                  <BookOpen className="w-6 h-6 text-bright-cyan animate-pulse" />
                  <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-bright-cyan"></div>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black text-primary-text mb-6 leading-tight tracking-tight">
                  MASTER ROBOTICS
                  <br />
                  <span className="text-bright-cyan">THROUGH INNOVATION</span>
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
                    <div className="p-3 glass-effect rounded-xl border border-bright-cyan/20 group-hover:border-bright-cyan/40 transition-all duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-text mb-2 group-hover:text-bright-cyan transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-secondary-text font-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Description */}
              <div className="space-y-6 mb-10">
                <p className="text-xl text-secondary-text leading-relaxed font-light">
                  Our comprehensive curriculum covers everything from basic electronics to advanced autonomous systems. 
                  <span className="text-bright-cyan font-medium"> Learn by building real robots</span> that compete in actual challenges.
                </p>
                
                <p className="text-xl text-secondary-text leading-relaxed font-light">
                  Join a community of engineers, makers, and innovators who are 
                  <span className="text-electric-blue font-medium"> pushing the boundaries</span> of what's possible in robotics and automation.
                </p>
              </div>
              
              {/* CTA Button */}
              <Link
                to="/courses"
                className="inline-flex items-center px-10 py-5 gradient-accent text-primary-text rounded-xl hover:scale-105 transition-all duration-300 text-lg font-semibold group shadow-lg animate-pulse-glow"
              >
                <span className="mr-3">Explore Curriculum</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative group animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Multiple glow layers for depth */}
            <div className="absolute -inset-6 bg-gradient-to-r from-bright-cyan/10 to-electric-blue/10 rounded-3xl blur-3xl group-hover:from-bright-cyan/20 group-hover:to-electric-blue/20 transition-all duration-700"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-electric-blue/20 to-bright-cyan/20 rounded-2xl blur-xl group-hover:opacity-75 transition-opacity duration-500"></div>
            
            {/* Main image container */}
            <div className="relative glass-effect rounded-2xl overflow-hidden border border-bright-cyan/20 hover:border-bright-cyan/40 transition-all duration-500 group-hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
                alt="Advanced robotics learning environment"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-dark-navy/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-navy/40 via-transparent to-transparent" />
              
              {/* Floating elements */}
              <div className="absolute top-6 right-6 w-4 h-4 bg-bright-cyan rounded-full animate-pulse opacity-80"></div>
              <div className="absolute bottom-8 left-8 w-3 h-3 bg-electric-blue rounded-full animate-float-gentle opacity-60"></div>
              
              {/* Bottom info overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-effect rounded-xl p-4 border border-bright-cyan/20">
                  <p className="text-primary-text font-semibold text-sm">
                    Advanced Robotics Lab
                  </p>
                  <p className="text-secondary-text text-xs font-light">
                    State-of-the-art learning environment
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