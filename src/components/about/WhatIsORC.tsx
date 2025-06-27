import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Bot, Trophy, Wrench, ArrowRight } from 'lucide-react';

const WhatIsORC = () => {
  const services = [
    {
      icon: Users,
      title: "Community-Driven Learning",
      subtitle: "Learning in the Field",
      description: "We believe learning happens best in the field—not the classroom. ORC members explore robotics through real builds, mentor feedback, and challenges that test ideas, not grades.",
      image: "/community.png",
      link: "/community",
      features: [
        "Real builds, not theory",
        "Mentor-guided learning", 
        "Idea-testing challenges",
        "Field-based exploration"
      ]
    },
    {
      icon: Bot,
      title: "Professional Hardware",
      subtitle: "ROVER & RIO",
      description: "Our flagship robotics kits—ROVER for rugged terrain, and RIO for labs and classrooms—are designed for exploration, prototyping, and pushing technical limits. Built by us, made for you.",
      image: "/rover.png",
      link: "/products",
      features: [
        "Rugged terrain capability",
        "Lab & classroom ready",
        "Exploration focused",
        "Technical limit pushing"
      ]
    },
    {
      icon: Trophy,
      title: "Builder & Combat Competitions",
      subtitle: "Build. Battle. Win.",
      description: "From rapid prototyping contests to full-blown combat robot battles, our competitions inspire creativity, pressure-test skills, and unite the community under one arena.",
      image: "/community.png",
      link: "/builder-challenge",
      features: [
        "Rapid prototyping contests",
        "Combat robot battles",
        "Creativity inspiration",
        "Skill pressure-testing"
      ]
    },
    {
      icon: Wrench,
      title: "Workshops & Build Days",
      subtitle: "Tools. Guidance. Real Goals.",
      description: "No long lectures. Just tools, guidance, and a real goal. Join our exclusive hands-on labs, mentor-led sessions, and team builds to learn what no textbook can teach.",
      image: "/community.png",
      link: "/events",
      features: [
        "Hands-on labs",
        "Mentor-led sessions",
        "Team build projects",
        "Real-world learning"
      ]
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
            <pattern id="what-we-do-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#what-we-do-arrows)"/>
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
            What We{' '}
            <span className="text-orc-blue">Do</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gray-900/50 rounded-xl flex items-center justify-center border border-gray-800">
                    <service.icon className="w-8 h-8 text-orc-blue" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-2xl lg:text-3xl text-orc-white">
                      {service.title}
                    </h3>
                    <p className="font-aileron text-orc-blue font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <p className="font-aileron text-lg leading-relaxed text-gray-300">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orc-blue rounded-full"></div>
                      <span className="font-aileron text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-orc-blue hover:text-blue-400 font-medium font-aileron group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="absolute -inset-1 bg-orc-blue/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video">
                    <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full z-20"></div>
                    
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <div className="text-left">
                        <h4 className="font-montserrat font-bold text-orc-white text-lg mb-1">
                          {service.title}
                        </h4>
                        <p className="font-aileron text-gray-300 text-sm">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsORC;