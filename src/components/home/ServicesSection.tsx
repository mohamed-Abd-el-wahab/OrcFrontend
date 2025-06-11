import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Target, Wrench } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Advanced Robotics Courses",
      description: "Master robotics fundamentals through hands-on learning with cutting-edge MAV technology and expert instruction.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      icon: <Cpu className="w-8 h-8 text-bright-cyan" />,
      link: "/courses"
    },
    {
      id: 2,
      title: "Competitive Labs",
      description: "Join exciting competitions and challenges that push the boundaries of what's possible in robotics engineering.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
      icon: <Target className="w-8 h-8 text-bright-cyan" />,
      link: "/competition"
    },
    {
      id: 3,
      title: "Professional Hardware",
      description: "Access professional-grade robotics hardware and tools to bring your most innovative ideas to life.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800",
      icon: <Wrench className="w-8 h-8 text-bright-cyan" />,
      link: "/products"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-dark-navy to-deep-charcoal relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(79, 125, 243, 0.1) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-bright-cyan"></div>
            <div className="w-4 h-4 bg-bright-cyan rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-bright-cyan"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-primary-text mb-6 tracking-tight">
            SERVICES
          </h2>
          <p className="text-xl text-secondary-text max-w-2xl mx-auto font-light leading-relaxed">
            Empowering innovation through cutting-edge robotics education and professional-grade tools
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-bright-cyan to-electric-blue rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              
              {/* Card */}
              <div className="relative glass-effect rounded-2xl overflow-hidden border border-bright-cyan/20 hover:border-bright-cyan/40 transition-all duration-500 hover:transform hover:scale-105">
                {/* Image */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-bright-cyan/10 rounded-xl mr-4 group-hover:bg-bright-cyan/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary-text group-hover:text-bright-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-secondary-text mb-8 leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  {/* CTA Link */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-bright-cyan hover:text-electric-blue transition-colors duration-300 group/link font-medium"
                  >
                    <span className="relative">
                      Explore Now
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-bright-cyan group-hover/link:w-full transition-all duration-300"></div>
                    </span>
                    <ArrowRight className="ml-3 w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;