import React from 'react';
import { Link } from 'react-router-dom';

const LearningSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="relative">
            {/* Blue accent line */}
            <div className="absolute left-0 top-0 w-1 h-32 bg-blue-600"></div>
            
            <div className="pl-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Master Robotics Through Hands-On Learning
              </h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Our comprehensive curriculum covers everything from basic electronics to advanced autonomous systems. Learn by building real robots that compete in actual challenges.
                </p>
                
                <p>
                  Join a community of engineers, makers, and innovators who are pushing the boundaries of what's possible in robotics and automation.
                </p>
              </div>
              
              <div className="mt-8">
                <Link
                  to="/courses"
                  className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  See Curriculum
                </Link>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/image.png"
                alt="Robotics learning environment with industrial robots"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;