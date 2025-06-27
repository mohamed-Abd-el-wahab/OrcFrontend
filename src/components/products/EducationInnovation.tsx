import React from 'react';
import { GraduationCap, BookOpen, Trophy } from 'lucide-react';
import { designClasses, SPACING } from '../../config/design';

const EducationInnovation = () => {
  const benefits = [
    {
      icon: GraduationCap,
      title: 'Use in classrooms, hackathons, research labs',
      description: 'Perfect for hands-on STEM education, competitive events, and advanced research across all learning environments',
      features: ['Interactive classroom learning', 'Hackathon competitions', 'Academic research projects', 'Professional development']
    },
    {
      icon: BookOpen,
      title: 'Comes with support tools, guides, and firmware access',
      description: 'Complete development ecosystem with comprehensive documentation and direct firmware access for customization',
      features: ['Detailed setup guides', 'Development tools', 'Firmware source code', 'Technical documentation']
    },
    {
      icon: Trophy,
      title: 'Join competitions and live workshops using your robot',
      description: 'Connect with the robotics community through official competitions and hands-on workshop experiences',
      features: ['Regional competitions', 'Live workshops', 'Community events', 'Skill-building sessions']
    }
  ];

  return (
    <section className={designClasses.section}>
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="education-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#education-arrows)"/>
        </svg>
      </div>

      <div className={designClasses.sectionContainer}>
        {/* Section Header */}
        <div className={designClasses.sectionHeader}>
          {/* Brand Geometric Accent */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
            <div className="w-3 h-3 bg-orc-blue rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
          </div>

          <h2 className={designClasses.sectionHeadline}>
            Built for Education &{' '}
            <span className="text-orc-blue">Innovation</span>
          </h2>
          <p className={`${designClasses.leadText} max-w-4xl mx-auto`}>
            Our robots are designed to accelerate learning and drive innovation across educational institutions and research facilities.
          </p>
        </div>

        {/* Main Benefits */}
        <div className={`${designClasses.grid} lg:grid-cols-3 mb-16`}>
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className={`${designClasses.card} text-center`}
              >
                {/* Blue Glow Effect */}
                <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Brand Accent Dot */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
                
                <div className="relative text-center mb-6">
                  <div className="w-16 h-16 bg-orc-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orc-blue group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-orc-blue group-hover:text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-orc-white mb-3 leading-tight group-hover:text-orc-blue transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className={`${designClasses.bodyText} mb-6`}>
                    {benefit.description}
                  </p>
                </div>

                {/* Feature List */}
                <div className={`relative ${designClasses.elements}`}>
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orc-blue rounded-full flex-shrink-0"></div>
                      <span className={`${designClasses.bodyText} text-gray-300`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="relative bg-gray-900/30 rounded-2xl border border-gray-800 p-8 text-center group">
          <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
          
          <div className="relative">
            <h3 className="font-montserrat font-extrabold text-xl text-orc-white mb-4">
              Ready to Transform Your Learning Experience?
            </h3>
            <p className={`${designClasses.bodyText} max-w-3xl mx-auto mb-6`}>
              Join educators, researchers, and students who are pushing the boundaries of robotics education across the MENA region and beyond.
            </p>
            <div className={`flex flex-col sm:flex-row ${SPACING.gridGap} justify-center`}>
              <button className={designClasses.button}>
                Explore Educational Programs
              </button>
              <button className={designClasses.buttonSecondary}>
                View Upcoming Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationInnovation; 