import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Zap } from 'lucide-react';

const LearningSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Curriculum",
      description: "From basics to advanced autonomous systems"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Mentors",
      description: "Learn from industry professionals"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Real Projects",
      description: "Build robots that compete in challenges"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Hands-On Learning",
      description: "Practice with cutting-edge equipment"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(168,85,247,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <div className="relative">
            {/* Accent line */}
            <div className="absolute left-0 top-0 w-2 h-32 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="pl-12">
              <div className="inline-flex items-center space-x-2 mb-8">
                <BookOpen className="w-6 h-6 text-blue-500" />
                <span className="text-blue-400 text-sm font-medium px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                  Education
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Master Robotics Through
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Hands-On Learning
                </span>
              </h2>
              
              <div className="space-y-8 mb-12">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our comprehensive curriculum covers everything from basic electronics to advanced autonomous systems. Learn by building real robots that compete in actual challenges.
                </p>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Join a community of engineers, makers, and innovators who are pushing the boundaries of what's possible in robotics and automation.
                </p>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="group p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-colors duration-300">
                        <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <Link
                to="/courses"
                className="group relative overflow-hidden inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-500 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center">
                  See Curriculum
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </div>
          </div>
          
          {/* Enhanced Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border border-gray-700 group-hover:border-gray-600 transition-colors duration-500">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
                alt="Robotics workshop with industrial robots"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Overlay content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <BookOpen className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Interactive Learning</h3>
                    <p className="text-gray-300 text-sm">Real-world robotics experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;