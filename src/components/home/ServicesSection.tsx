import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, GraduationCap, Trophy, Wrench } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-500" />,
      title: "Advanced Robotics Courses",
      description: "Master robotics fundamentals through hands-on learning with cutting-edge MAV technology and expert instruction.",
      link: "/courses",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Trophy className="w-12 h-12 text-blue-500" />,
      title: "Competitive Labs",
      description: "Join exciting competitions and challenges that push the boundaries of what's possible in robotics engineering.",
      link: "/competition",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-500" />,
      title: "Professional Hardware",
      description: "Access professional-grade robotics hardware and tools to bring your most innovative ideas to life.",
      link: "/products",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const stats = [
    { value: "8k+", label: "builders" },
    { value: "25", label: "events" },
    { value: "120k", label: "subs" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:bg-blue-500/30 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                {/* Service Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold text-white ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group/link"
                  >
                    Learn more
                    <ChevronRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-black py-16 rounded-2xl border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-lg">
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

export default ServicesSection;