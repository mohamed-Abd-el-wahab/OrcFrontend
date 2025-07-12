import React from 'react';
import { Users, Wrench, Calendar, GraduationCap, Briefcase, ShoppingBag } from 'lucide-react';

const WhyJoinORC = () => {
  const benefits = [
    {
      icon: Users,
      title: "Direct Access to Experts",
      description: "Connect with industry professionals and experienced mentors who guide your robotics journey.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Wrench,
      title: "Hands-On Projects & Kits",
      description: "Build real robots using professional-grade components and cutting-edge technology.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Calendar,
      title: "Exclusive Workshops & Resources",
      description: "Access member-only events, advanced tutorials, and specialized training sessions.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: GraduationCap,
      title: "Structured Learning Path",
      description: "Follow our proven curriculum designed by experts to take you from beginner to advanced.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Briefcase,
      title: "Career & Internship Pathways",
      description: "Access exclusive job opportunities and internship programs with leading robotics companies.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: ShoppingBag,
      title: "Member Exclusive Discounts",
      description: "Save up to 30% on robotics parts, kits, and equipment through our partner network.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="relative bg-orc-black overflow-hidden py-20 md:py-24">
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - ORC Arrow Pattern (10% opacity) */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="orc-arrow-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              {/* ORC Arrow Pattern */}
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.8" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.8" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.8" fill="none"/>
              <path d="M15,15 L25,25 M25,15 L15,25" stroke="#0000F2" strokeWidth="0.8" fill="none"/>
              <path d="M5,20 L15,30 M15,20 L5,30" stroke="#0000F2" strokeWidth="0.8" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#orc-arrow-pattern)"/>
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
            Why Join{' '}
            <span className="text-orc-blue">ORC</span>
          </h2>
          
          <p className="font-aileron text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            Join a community where your passion for robotics transforms into expertise, connections, and career opportunities.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/40 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm hover:border-orc-blue/50 transition-all duration-500 hover:scale-105"
            >
              {/* Blue Glow Effect */}
              <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Brand Accent Dot */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
              
              <div className="relative space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-orc-blue/20 rounded-full flex items-center justify-center text-orc-blue group-hover:bg-orc-blue group-hover:text-white transition-all duration-300">
                  <benefit.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="font-montserrat font-bold text-xl text-orc-white group-hover:text-orc-blue transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="font-aileron text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Active Members" },
              { number: "50+", label: "Expert Mentors" },
              { number: "100+", label: "Projects Completed" },
              { number: "15+", label: "Partner Companies" }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="font-montserrat font-extrabold text-3xl md:text-4xl text-orc-blue">
                  {stat.number}
                </div>
                <div className="font-aileron text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinORC; 