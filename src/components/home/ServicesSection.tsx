import React from 'react';
import { ArrowRight, Cog, Zap, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Robotics Consultation",
      description: "Expert guidance for your robotics projects from concept to competition-ready builds.",
      features: ["Custom design solutions", "Performance optimization", "Technical mentorship"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Simulation & Optimization",
      description: "Advanced testing and refinement using cutting-edge simulation technologies.",
      features: ["Physics simulation", "Combat analysis", "Strategy optimization"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Testing & Quality Assurance",
      description: "Rigorous testing protocols to ensure your robot performs when it matters most.",
      features: ["Stress testing", "Safety validation", "Performance metrics"]
    }
  ];

  return (
    <section className="relative bg-orc-black overflow-hidden py-16 md:py-20">
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="services-diagonal-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-diagonal-arrows)"/>
        </svg>
      </div>

      <div className="brand-container relative z-20 px-4 lg:px-8">
        <div className="text-center space-y-6 mb-12">
          <h2 className="font-montserrat font-extrabold text-4xl lg:text-5xl leading-tight text-orc-white">
            Our <span className="text-orc-blue">Services</span>
          </h2>
          <p className="font-aileron text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto">
            From concept to competition, we provide comprehensive robotics solutions that push the boundaries of innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-orc-blue/50 transition-all duration-500 hover:scale-105"
            >
              {/* Blue Glow Effect */}
              <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Brand Accent Dot */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
              
              <div className="relative space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-orc-blue/20 rounded-full flex items-center justify-center text-orc-blue group-hover:bg-orc-blue group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="font-montserrat font-bold text-xl text-orc-white group-hover:text-orc-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="font-aileron text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-orc-blue rounded-full"></div>
                        <span className="font-aileron text-sm text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button className="inline-flex items-center text-orc-blue font-medium hover:text-white transition-colors duration-300 group/cta">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-12">
          <button className="btn-brand-primary inline-flex items-center justify-center px-8 py-4 bg-orc-blue text-orc-white font-medium rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-orc-blue/25 transition-all duration-300 group">
            Explore All Services
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;