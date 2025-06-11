import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: "8k+",
      label: "Active Builders",
      description: "Innovators worldwide",
      color: "text-bright-cyan"
    },
    {
      number: "25",
      label: "Global Events",
      description: "Annual competitions",
      color: "text-electric-blue"
    },
    {
      number: "120k",
      label: "Community Members",
      description: "Growing network",
      color: "text-bright-cyan"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-deep-charcoal to-dark-navy relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-bright-cyan/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-electric-blue/25 rounded-full animate-float-gentle"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Stat Container */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-bright-cyan/10 to-electric-blue/10 rounded-2xl blur-xl group-hover:from-bright-cyan/20 group-hover:to-electric-blue/20 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative glass-effect rounded-2xl p-8 border border-bright-cyan/20 hover:border-bright-cyan/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                  {/* Number */}
                  <div className={`text-5xl md:text-6xl font-black ${stat.color} mb-4 tracking-tight group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-primary-text text-xl font-semibold mb-2 group-hover:text-bright-cyan transition-colors duration-300">
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-secondary-text text-sm font-light tracking-wide">
                    {stat.description}
                  </div>
                  
                  {/* Decorative line */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-bright-cyan to-electric-blue mx-auto mt-6 group-hover:w-full transition-all duration-500"></div>
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