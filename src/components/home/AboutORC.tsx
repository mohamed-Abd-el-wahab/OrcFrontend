import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Target, Users, ChevronRight } from 'lucide-react';

const AboutORC = () => {
  const highlights = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Revolutionary Format",
      description: "Extended combat sessions that test endurance, strategy, and engineering excellence beyond traditional robot battles."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Global Competition",
      description: "Teams from around the world compete in the most advanced robotics championship with cutting-edge technology."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Community Driven",
      description: "Building a worldwide community of engineers, makers, and innovators pushing the boundaries of robotics."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1),transparent_50%)]"></div>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.4
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center justify-center space-x-2 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <span className="text-blue-400 text-sm font-medium px-4 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                About ORC
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 via-blue-500 to-transparent"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Future of
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Robot Combat
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Open Robot Combat (ORC) is revolutionizing competitive robotics by creating the world's most advanced 
              platform for robot combat innovation. We're not just hosting competitions—we're building the future 
              of engineering excellence.
            </p>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Like Formula 1 drives automotive innovation, ORC accelerates robotics technology through intense 
              competition, pushing teams to develop breakthrough solutions that shape tomorrow's robotic systems.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-lg font-semibold group"
            >
              Discover Our Mission
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Highlights */}
          <div className="space-y-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 blur-xl"></div>
                
                <div className="relative flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">£100K+</div>
            <div className="text-gray-400">Prize Pool</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-400">Global Teams</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">1M+</div>
            <div className="text-gray-400">Viewers Worldwide</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutORC;