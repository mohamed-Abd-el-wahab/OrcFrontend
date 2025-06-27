import React from 'react';
import { GraduationCap, Wrench, Code, Briefcase, Heart } from 'lucide-react';

const Education = () => {
  const targetAudience = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "High school and university students passionate about robotics and engineering",
      persona: "Ahmed, 19",
      details: "Computer Science student looking to apply theory in hands-on projects"
    },
    {
      icon: Wrench,
      title: "Educators",
      description: "Robotics educators and trainers seeking engaging curriculum and tools",
      persona: "Dr. Sara, 35",
      details: "Engineering professor integrating practical robotics into coursework"
    },
    {
      icon: Code,
      title: "Makers & Hobbyists",
      description: "DIY enthusiasts and makers exploring robotics as a creative outlet",
      persona: "Omar, 28",
      details: "Software developer building robots as weekend passion projects"
    },
    {
      icon: Briefcase,
      title: "Startup Builders",
      description: "Entrepreneurs and early-stage tech builders developing robotic solutions",
      persona: "Fatima, 26",
      details: "Startup founder prototyping automation solutions for local businesses"
    },
    {
      icon: Heart,
      title: "Robot Enthusiasts",
      description: "Anyone passionate about the future of robots and automation technology",
      persona: "Youssef, 22",
      details: "Mechanical engineering graduate exploring career in robotics industry"
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
            <pattern id="who-its-for-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#who-its-for-arrows)"/>
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
            Is ORC Right for{' '}
            <span className="text-orc-blue">You?</span>
          </h2>
          
          <p className="font-aileron text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            Our community welcomes builders from all backgrounds and experience levels. Here's who thrives in the ORC ecosystem.
          </p>
        </div>

        {/* Target Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetAudience.map((audience, index) => (
            <div 
              key={audience.title}
              className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-orc-blue/50 hover:bg-orc-blue/5 transition-all duration-500 hover:scale-105"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gray-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orc-blue/10 group-hover:scale-110 transition-all duration-300 border border-gray-800 group-hover:border-orc-blue/50">
                <audience.icon className="w-8 h-8 text-orc-blue group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-montserrat font-bold text-xl text-orc-white group-hover:text-orc-blue transition-colors duration-300">
                  {audience.title}
                </h3>
                
                <p className="font-aileron text-gray-300 leading-relaxed text-sm">
                  {audience.description}
                </p>

                {/* Persona Example */}
                <div className="pt-4 border-t border-gray-800 group-hover:border-orc-blue/30 transition-colors duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orc-blue/20 rounded-full flex items-center justify-center">
                      <span className="text-orc-blue font-montserrat font-bold text-sm">
                        {audience.persona.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-montserrat font-medium text-orc-white text-sm">
                        {audience.persona}
                      </p>
                      <p className="font-aileron text-gray-400 text-xs leading-tight">
                        {audience.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="font-aileron text-lg text-gray-300 mb-6">
            Ready to discover where you fit in the ORC community?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-brand-primary inline-flex items-center justify-center px-8 py-4 bg-orc-blue text-orc-white font-medium rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-orc-blue/25 transition-all duration-300 group font-montserrat">
              Take Our Quiz
            </button>
            <button className="btn-brand-secondary inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-orc-blue text-orc-blue font-medium rounded-xl hover:bg-orc-blue hover:text-orc-white hover:scale-105 transition-all duration-300 group font-montserrat">
              Browse Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;