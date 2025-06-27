import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: "8k+",
      label: "Active Builders",
      description: "Innovators worldwide",
      color: "text-orc-blue"
    },
    {
      number: "25",
      label: "Global Events",
      description: "Annual competitions",
      color: "text-blue-400"
    },
    {
      number: "120k",
      label: "Community Members",
      description: "Growing network",
      color: "text-orc-blue"
    }
  ];

  return (
    <section className="section-padding-sm bg-gradient-to-r from-deep-charcoal to-orc-black relative">
      {/* Brand Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-orc-blue/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-blue-400/25 rounded-full animate-float-gentle"></div>
      </div>
      
      <div className="brand-container relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Stat Container */}
              <div className="relative">
                {/* Brand Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orc-blue/10 to-blue-400/10 rounded-2xl blur-xl group-hover:from-orc-blue/20 group-hover:to-blue-400/20 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative glass-effect-brand rounded-2xl p-8 hover:scale-105 transition-all duration-500">
                  {/* Number */}
                  <div className={`text-5xl md:text-6xl brand-headline ${stat.color} mb-4 tracking-tight group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="brand-subhead text-orc-white text-xl mb-2 group-hover:text-orc-blue transition-colors duration-300">
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <div className="brand-body text-secondary-text text-sm tracking-wide">
                    {stat.description}
                  </div>
                  
                  {/* Decorative line */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-orc-blue to-blue-400 mx-auto mt-6 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;