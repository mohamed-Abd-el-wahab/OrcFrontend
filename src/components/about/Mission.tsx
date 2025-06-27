import React from 'react';
import { GraduationCap, Wrench, Users } from 'lucide-react';

const Mission = () => {
  return (
    <section className="relative bg-orc-black overflow-hidden py-20 md:py-24">
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="mission-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mission-arrows)"/>
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-8 mb-16">
          {/* Brand Geometric Accent */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
            <div className="w-3 h-3 bg-orc-blue rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
          </div>

          <h2 className="font-montserrat font-extrabold text-4xl lg:text-6xl leading-tight text-orc-white">
            More Than a Community.{' '}
            <span className="text-orc-blue">A Mission.</span>
          </h2>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
          <blockquote className="text-2xl lg:text-3xl font-montserrat font-bold text-orc-blue leading-relaxed italic">
            "To inspire, educate, and empower the next generation of roboticists through a vibrant, collaborative ecosystem that merges learning with real-world application."
          </blockquote>
          
          <div className="space-y-6 text-lg leading-relaxed text-gray-300 font-aileron">
            <p>
              ORC is not just a robotics platform—it's a movement. We are building the future of robotics in the MENA region by empowering makers, students, and engineers with hands-on education, thrilling competitions, and access to real-world robotics technology.
            </p>
            <p>
              From beginner workshops to advanced AI-driven systems, ORC transforms learners into leaders—one robot at a time.
            </p>
          </div>
        </div>

        {/* Animated Icons */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              description: "Structured learning paths from basics to advanced robotics"
            },
            {
              icon: Wrench,
              title: "Innovation", 
              description: "Cutting-edge tools and technology for real-world impact"
            },
            {
              icon: Users,
              title: "Community",
              description: "Collaborative network of builders, dreamers, and innovators"
            }
          ].map((item, index) => (
            <div 
              key={item.title}
              className="flex flex-col items-center text-center group cursor-default"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="w-20 h-20 bg-gray-900/50 rounded-full flex items-center justify-center mb-6 group-hover:bg-orc-blue/10 group-hover:scale-110 transition-all duration-500 border border-gray-800 group-hover:border-orc-blue/50">
                <item.icon className="w-10 h-10 text-orc-blue group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-orc-white mb-3 group-hover:text-orc-blue transition-colors duration-300">
                {item.title}
              </h3>
              <p className="font-aileron text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;