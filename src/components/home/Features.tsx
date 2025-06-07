import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Trophy, Wrench, ChevronRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Cpu className="w-12 h-12 text-blue-500" />,
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
      description: "Access professional-grade robotics hardware and tools to bring your innovative ideas to life.",
      link: "/products",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const stats = [
    { number: "8k+", label: "builders" },
    { number: "25", label: "events" },
    { number: "120k", label: "subs" }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group"
                >
                  Learn more
                  <ChevronRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-black rounded-2xl py-16 px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg font-medium">
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

export default Features;