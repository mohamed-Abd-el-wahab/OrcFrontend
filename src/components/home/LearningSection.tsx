import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LearningSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="relative">
            {/* Blue accent line */}
            <div className="absolute left-0 top-0 w-1 h-32 bg-blue-500"></div>
            
            <div className="pl-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Master Robotics Through
                <br />
                Hands-On Learning
              </h2>
              
              <div className="space-y-6 mb-8">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our comprehensive curriculum covers everything from basic electronics to advanced autonomous systems. Learn by building real robots that compete in actual challenges.
                </p>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Join a community of engineers, makers, and innovators who are pushing the boundaries of what's possible in robotics and automation.
                </p>
              </div>
              
              <Link
                to="/courses"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-lg font-semibold group"
              >
                See Curriculum
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
                alt="Robotics workshop with industrial robots"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;