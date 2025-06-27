import React from 'react';
import { Hand, Palette, Users, Cog, Globe } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: Hand,
      title: "Hands-On Learning",
      description: "Learning by doing, building, and experimenting with real robotics technology",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Palette,
      title: "Creative Freedom", 
      description: "Encouraging innovative thinking and unique approaches to robotic challenges",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Open Collaboration",
      description: "Building together, sharing knowledge, and growing as a united community",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Cog,
      title: "Engineering Excellence",
      description: "Pursuing the highest standards in design, construction, and innovation",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Globe,
      title: "Tech for Good",
      description: "Using robotics and technology to solve real-world problems and benefit society",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="relative bg-orc-black overflow-hidden py-20 md:py-24">
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="core-values-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#core-values-arrows)"/>
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-8 mb-20">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
            <div className="w-3 h-3 bg-orc-blue rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
          </div>

          <h2 className="font-montserrat font-extrabold text-4xl lg:text-6xl leading-tight text-orc-white">
            Our Core{' '}
            <span className="text-orc-blue">Values</span>
          </h2>

          <p className="font-aileron text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            These fundamental principles guide everything we do at ORC, from curriculum design to community building.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="group text-center cursor-default"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Futuristic Icon Container */}
              <div className="relative mb-8">
                {/* Background Gradient Circle */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-lg scale-110`}></div>
                
                {/* Icon Circle */}
                <div className={`relative w-24 h-24 mx-auto bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                  <value.icon className="w-12 h-12 text-white drop-shadow-lg" />
                  
                  {/* Pulse Animation */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-full animate-ping opacity-20`}></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-orc-blue rounded-full opacity-60 group-hover:scale-125 transition-transform duration-300"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orc-blue rounded-full opacity-40 group-hover:scale-125 transition-transform duration-300" style={{animationDelay: '0.2s'}}></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-montserrat font-bold text-xl lg:text-2xl text-orc-white group-hover:text-orc-blue transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="font-aileron text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {value.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="mt-6 mx-auto w-12 h-0.5 bg-gray-800 group-hover:bg-orc-blue group-hover:w-16 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-20">
          <blockquote className="text-xl lg:text-2xl font-montserrat font-light text-gray-300 leading-relaxed italic max-w-4xl mx-auto">
            "These values aren't just words on a page—they're the foundation of everything we build, every decision we make, and every relationship we foster in the ORC community."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default CoreValues; 