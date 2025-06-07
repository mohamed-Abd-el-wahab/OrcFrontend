import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Target, Wrench, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Advanced Robotics Courses",
      description: "Master robotics fundamentals through hands-on learning with cutting-edge MAV technology and expert instruction.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      link: "/courses",
      gradient: "from-blue-500/20 to-cyan-500/20",
      hoverGradient: "from-blue-500/30 to-cyan-500/30"
    },
    {
      id: 2,
      title: "Competitive Labs",
      description: "Join exciting competitions and challenges that push the boundaries of what's possible in robotics engineering.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
      icon: <Target className="w-8 h-8 text-purple-500" />,
      link: "/competition",
      gradient: "from-purple-500/20 to-pink-500/20",
      hoverGradient: "from-purple-500/30 to-pink-500/30"
    },
    {
      id: 3,
      title: "Professional Hardware",
      description: "Access professional-grade robotics hardware and tools to bring your most innovative ideas to life.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800",
      icon: <Wrench className="w-8 h-8 text-green-500" />,
      link: "/products",
      gradient: "from-green-500/20 to-emerald-500/20",
      hoverGradient: "from-green-500/30 to-emerald-500/30"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(168,85,247,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center space-x-2 mb-8">
            <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <span className="text-blue-400 text-sm font-medium px-4 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
              Our Services
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-blue-500 via-blue-500 to-transparent"></div>
            <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
            Build the Future
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive ecosystem designed to accelerate your robotics journey
          </p>
        </div>

        {/* Enhanced services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="group relative">
              {/* Animated background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110`}></div>
              
              {/* Card container */}
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 group-hover:border-gray-600 transition-all duration-500 overflow-hidden">
                {/* Image with overlay */}
                <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Floating icon */}
                  <div className="absolute top-6 right-6 w-14 h-14 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Enhanced CTA */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 group/link font-semibold"
                  >
                    <span className="relative">
                      Explore Now
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover/link:w-full transition-all duration-300"></div>
                    </span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;