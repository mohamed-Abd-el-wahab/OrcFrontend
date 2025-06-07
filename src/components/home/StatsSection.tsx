import React from 'react';
import { TrendingUp, Users, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      number: "8k+",
      label: "builders",
      color: "text-blue-400",
      icon: <Users className="w-8 h-8" />,
      description: "Active community members"
    },
    {
      number: "25",
      label: "events",
      color: "text-green-400",
      icon: <Award className="w-8 h-8" />,
      description: "Successful competitions"
    },
    {
      number: "120k",
      label: "subs",
      color: "text-purple-400",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Global reach & engagement"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center">
              {/* Icon container */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 group-hover:border-gray-600 mb-6 group-hover:scale-110 transition-all duration-300">
                <div className={stat.color}>
                  {stat.icon}
                </div>
              </div>
              
              {/* Number */}
              <div className={`text-5xl md:text-6xl font-bold ${stat.color} mb-2 group-hover:scale-105 transition-transform duration-300`}>
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="text-xl text-gray-400 mb-2 uppercase tracking-wider font-medium group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
              
              {/* Description */}
              <div className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;