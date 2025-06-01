import React from 'react';
import { GraduationCap, BookOpen, Users, Database, Video, MessageSquare } from 'lucide-react';

const Education = () => {
  const services = [
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-500" />,
      title: "Combat Robot Competitions",
      description: "Hosting intense, high-energy battles between custom-built robots in our signature arena."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-500" />,
      title: "Educational Courses",
      description: "Structured training in robotics—covering mechanical design, electronics, programming, and AI."
    },
    {
      icon: <Database className="w-12 h-12 text-blue-500" />,
      title: "Open Component Database",
      description: "A shared platform for finding, rating, and contributing parts and modules for robot building."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Technical Support & Mentorship",
      description: "Community-driven support, project help, and mentorship opportunities."
    },
    {
      icon: <Video className="w-12 h-12 text-blue-500" />,
      title: "Content Creation",
      description: "Producing engaging content like video essays, tutorials, and behind-the-scenes features."
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-blue-500" />,
      title: "Community Engagement",
      description: "Building a global network of robotics enthusiasts, makers, and innovators."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">What We Do</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive services and support to grow the robotics community and advance innovation in the field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;