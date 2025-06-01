import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  "Access to all basic courses",
  "Community support",
  "Project resources",
  "Certificate of completion"
];

const CoursesCTA = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070')] mix-blend-overlay opacity-20" />
          
          <div className="relative px-8 py-16 sm:px-16 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Start Learning Today
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Join our community of learners and kickstart your robotics career with our free introduction course.
                </p>
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-blue-300 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 text-lg font-semibold">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800"
                  alt="Student working on robot"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCTA;