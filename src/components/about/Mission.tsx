import React from 'react';
import { Target, Zap, Users, Book, Code, Share } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      icon: <Target className="w-12 h-12 text-blue-500" />,
      title: "Innovation",
      description: "We push creative and technical boundaries in robotics and automation."
    },
    {
      icon: <Share className="w-12 h-12 text-blue-500" />,
      title: "Openness",
      description: "We embrace open-source principles and knowledge sharing across our community."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Community",
      description: "We grow stronger through collaboration and mentorship."
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: "Excellence",
      description: "We strive for quality in every build, battle, and course."
    },
    {
      icon: <Book className="w-12 h-12 text-blue-500" />,
      title: "Education",
      description: "We provide structured, hands-on training in robotics and engineering."
    },
    {
      icon: <Code className="w-12 h-12 text-blue-500" />,
      title: "Innovation",
      description: "We inspire the next generation of roboticists and engineers."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            To democratize robotics by creating a powerful ecosystem of education, competition, and open collaboration—empowering the next generation of roboticists to build, share, and compete.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm text-center">
              <div className="flex justify-center mb-6">{value.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;