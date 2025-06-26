import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Lightbulb } from 'lucide-react';

const LearningSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-[#0000F2]" />,
      title: "Comprehensive Curriculum",
      description: "From basic electronics to advanced autonomous systems"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Expert Community",
      description: "Learn from engineers, makers, and innovators worldwide"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#0000F2]" />,
      title: "Real-World Projects",
      description: "Build robots that compete in actual challenges"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-black relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 242, 0.08) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 0, 242, 0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="relative animate-fade-in">
            {/* Geometric accent */}
            <div className="absolute -left-6 top-0 w-1 h-40 bg-gradient-to-b from-[#0000F2] via-blue-400 to-transparent rounded-full"></div>
            
            <div className="pl-8">
              {/* Section Header */}
              <div className="mb-12">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#0000F2]"></div>
                  <BookOpen className="w-6 h-6 text-[#0000F2] animate-pulse" />
                  <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#0000F2]"></div>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-['Montserrat',sans-serif] font-black text-white mb-6 leading-tight tracking-tight">
                  MASTER ROBOTICS
                  <br />
                  <span className="text-[#0000F2]">THROUGH INNOVATION</span>
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
                    <div className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 group-hover:border-[#0000F2]/40 transition-all duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-['Montserrat',sans-serif] font-bold text-white mb-2 group-hover:text-[#0000F2] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 font-['Aileron',sans-serif] font-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Description */}
              <div className="space-y-6 mb-10">
                <p className="text-xl text-gray-300 leading-relaxed font-['Aileron',sans-serif] font-light">
                  Our comprehensive curriculum covers everything from basic electronics to advanced autonomous systems. 
                  <span className="text-[#0000F2] font-medium"> Learn by building real robots</span> that compete in actual challenges.
                </p>
                
                <p className="text-xl text-gray-300 leading-relaxed font-['Aileron',sans-serif] font-light">
                  Join a community of engineers, makers, and innovators who are 
                  <span className="text-blue-400 font-medium"> pushing the boundaries</span> of what's possible in robotics and automation.
                </p>
              </div>
              
              {/* CTA Button */}
              <Link
                to="/courses"
                className="inline-flex items-center px-10 py-5 bg-[#0000F2] text-white rounded-xl hover:bg-blue-700 transition-all duration-300 text-lg font-['Montserrat',sans-serif] font-semibold group shadow-lg transform hover:scale-105"
              >
                <span className="mr-3">Explore Curriculum</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative group animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Multiple glow layers for depth */}
            <div className="absolute -inset-6 bg-gradient-to-r from-[#0000F2]/10 to-blue-400/10 rounded-3xl blur-3xl group-hover:from-[#0000F2]/20 group-hover:to-blue-400/20 transition-all duration-700"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 to-[#0000F2]/20 rounded-2xl blur-xl group-hover:opacity-75 transition-opacity duration-500"></div>
            
            {/* Main image container */}
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-[#0000F2]/40 transition-all duration-500 group-hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
                alt="Advanced robotics learning environment"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 via-transparent to-transparent" />
              
              {/* Floating elements */}
              <div className="absolute top-6 right-6 w-4 h-4 bg-[#0000F2] rounded-full animate-pulse opacity-80"></div>
              <div className="absolute bottom-8 left-8 w-3 h-3 bg-blue-400 rounded-full animate-float-gentle opacity-60"></div>
              
              {/* Bottom info overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                  <p className="text-white font-['Montserrat',sans-serif] font-semibold text-sm">
                    Advanced Robotics Lab
                  </p>
                  <p className="text-gray-300 text-xs font-['Aileron',sans-serif] font-light">
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