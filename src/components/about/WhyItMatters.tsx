import React from 'react';
import { TrendingUp, Lightbulb, Users, Globe } from 'lucide-react';

const WhyItMatters = () => {
  const impacts = [
    {
      icon: TrendingUp,
      title: "Skills Gap Solution",
      before: "Theory-heavy education with no practical application",
      after: "Hands-on learning with real robotics projects",
      stat: "80% increase in practical skills"
    },
    {
      icon: Lightbulb,
      title: "Innovation Catalyst", 
      before: "Limited exposure to cutting-edge technology",
      after: "Direct access to AI, ROS2, and advanced robotics",
      stat: "50+ student innovations"
    },
    {
      icon: Users,
      title: "Community Building",
      before: "Isolated learning with minimal collaboration",
      after: "Vibrant ecosystem of mentors, peers, and industry connections",
      stat: "200+ active members"
    },
    {
      icon: Globe,
      title: "Regional Leadership",
      before: "MENA region lagging in robotics education",
      after: "Egypt emerging as robotics hub in the region",
      stat: "First of its kind in MENA"
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
            <pattern id="why-it-matters-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#why-it-matters-arrows)"/>
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-8 mb-16">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
            <div className="w-3 h-3 bg-orc-blue rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
          </div>

          <h2 className="font-montserrat font-extrabold text-4xl lg:text-6xl leading-tight text-orc-white">
            Why It{' '}
            <span className="text-orc-blue">Matters</span>
          </h2>

          <p className="font-aileron text-xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
            Traditional education often stops at theory. ORC brings it to life—with code, circuits, simulations, and teamwork. We're creating an ecosystem where learning never stops and where today's students become tomorrow's innovators.
          </p>
        </div>

        {/* Impact Timeline */}
        <div className="space-y-12">
          {impacts.map((impact, index) => (
            <div 
              key={impact.title}
              className="group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Impact Card */}
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 group-hover:border-orc-blue/50 group-hover:bg-orc-blue/5 transition-all duration-500">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-900/50 rounded-xl flex items-center justify-center group-hover:bg-orc-blue/10 group-hover:scale-110 transition-all duration-300 border border-gray-800 group-hover:border-orc-blue/50">
                      <impact.icon className="w-8 h-8 text-orc-blue group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-xl text-orc-white group-hover:text-orc-blue transition-colors duration-300">
                        {impact.title}
                      </h3>
                      <div className="text-orc-blue font-aileron font-medium text-sm">
                        {impact.stat}
                      </div>
                    </div>
                  </div>

                  {/* Before/After */}
                  <div className="lg:col-span-2">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Before */}
                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="font-montserrat font-medium text-gray-400 text-sm">Before</span>
                        </div>
                        <p className="font-aileron text-gray-300 text-sm leading-relaxed">
                          {impact.before}
                        </p>
                      </div>

                      {/* After */}
                      <div className="bg-orc-blue/10 rounded-xl p-6 border border-orc-blue/30">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-3 h-3 bg-orc-blue rounded-full"></div>
                          <span className="font-montserrat font-medium text-orc-blue text-sm">After</span>
                        </div>
                        <p className="font-aileron text-gray-300 text-sm leading-relaxed">
                          {impact.after}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="text-center mt-20">
          <div className="max-w-4xl mx-auto bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <blockquote className="text-2xl lg:text-3xl font-montserrat font-light text-gray-300 leading-relaxed italic mb-6">
              "ORC transformed my understanding of robotics from theoretical concepts to practical skills I use every day in my startup."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-orc-blue/20 rounded-full flex items-center justify-center">
                <span className="text-orc-blue font-montserrat font-bold">M</span>
              </div>
              <div className="text-left">
                <p className="font-montserrat font-medium text-orc-white">Mohamed Hassan</p>
                <p className="font-aileron text-gray-400 text-sm">ORC Alumni, Robotics Startup Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters; 