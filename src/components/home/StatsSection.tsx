import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: "8k+",
      label: "Active Builders",
      description: "Innovators worldwide",
      color: "text-[#0000F2]"
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
      color: "text-[#0000F2]"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-black relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-[#0000F2]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-blue-400/25 rounded-full animate-float-gentle"></div>
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#0000F2]/10 to-blue-400/10 rounded-2xl blur-xl group-hover:from-[#0000F2]/20 group-hover:to-blue-400/20 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-[#0000F2]/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                  {/* Number */}
                  <div className={`text-5xl md:text-6xl font-['Montserrat',sans-serif] font-black ${stat.color} mb-4 tracking-tight group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-white text-xl font-['Montserrat',sans-serif] font-semibold mb-2 group-hover:text-[#0000F2] transition-colors duration-300">
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-gray-400 text-sm font-['Aileron',sans-serif] font-light tracking-wide">
                    {stat.description}
                  </div>
                  
                  {/* Decorative line */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#0000F2] to-blue-400 mx-auto mt-6 group-hover:w-full transition-all duration-500"></div>
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