import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Building2, Ticket, ChevronRight, Globe, Eye, Handshake, Star, Crown } from 'lucide-react';

const ParticipationOptions = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1),transparent_50%)]"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.3
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Revolution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of the world's most advanced robotics competition
          </p>
        </div>

        {/* Main Option - Compete */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-transparent rounded-2xl"></div>
          <div className="relative p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Icon & Title */}
              <div className="text-center md:text-left">
                <div className="w-24 h-24 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <Users className="w-14 h-14 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Compete</h3>
                <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                  Featured
                </span>
              </div>

              {/* Features */}
              <div className="flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">£100,000</div>
                    <p className="text-gray-300">Grand Prize</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                    <p className="text-gray-300">Technical Support</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">Global</div>
                    <p className="text-gray-300">Recognition</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div>
                <Link
                  to="/register"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-lg font-semibold group"
                >
                  Register Now
                  <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Options */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sponsor Option */}
          <Link to="/sponsorship" className="group">
            <div className="relative h-full overflow-hidden">
              {/* Enhanced glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
              
              {/* Content container */}
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 group-hover:border-yellow-500/50 transition-all duration-300">
                <div className="flex flex-col h-full">
                  {/* Icon container with animation */}
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Crown className="w-10 h-10 text-yellow-400" />
                  </div>

                  {/* Title with gradient */}
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                    Sponsor
                  </h3>
                  <p className="text-xl text-gray-300 mb-6">Power the future of robotics</p>

                  {/* Features with icons */}
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                      <Globe className="w-5 h-5 text-yellow-400 mr-3" />
                      Access to Global Audience
                    </div>
                    <div className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                      <Eye className="w-5 h-5 text-yellow-400 mr-3" />
                      Brand Visibility
                    </div>
                    <div className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                      <Handshake className="w-5 h-5 text-yellow-400 mr-3" />
                      Innovation Partnership
                    </div>
                  </div>

                  {/* Enhanced CTA button with gold gradient and glow */}
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    
                    {/* Button */}
                    <button className="relative w-full px-8 py-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-lg transform hover:-translate-y-1 transition-all duration-200">
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400/50 via-transparent to-amber-600/50 rounded-lg blur-sm"></div>
                      <div className="relative flex items-center justify-center text-lg font-bold text-black">
                        Join the Elite Sponsors Today
                        <ChevronRight className="ml-2 w-5 h-5" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Watch Option */}
          <Link to="/watch" className="group">
            <div className="relative h-full overflow-hidden">
              {/* Enhanced glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
              
              {/* Content container */}
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 group-hover:border-purple-500/50 transition-all duration-300">
                <div className="flex flex-col h-full">
                  {/* Icon container with animation */}
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-10 h-10 text-purple-400" />
                  </div>

                  {/* Title with gradient */}
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Watch Live
                  </h3>
                  <p className="text-xl text-gray-300 mb-6">Experience the ultimate showdown</p>

                  {/* Features with icons */}
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                      <Crown className="w-5 h-5 text-purple-400 mr-3" />
                      VIP Access Available
                    </div>
                    <div className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                      <Eye className="w-5 h-5 text-purple-400 mr-3" />
                      Interactive Experience
                    </div>
                    <div className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                      <Users className="w-5 h-5 text-purple-400 mr-3" />
                      Meet the Teams
                    </div>
                  </div>

                  {/* Enhanced CTA button with purple gradient and glow */}
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    
                    {/* Button */}
                    <button className="relative w-full px-8 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 rounded-lg transform hover:-translate-y-1 transition-all duration-200">
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-400/50 via-transparent to-blue-600/50 rounded-lg blur-sm"></div>
                      <div className="relative flex items-center justify-center text-lg font-bold text-white">
                        Get Your VIP Experience Now
                        <ChevronRight className="ml-2 w-5 h-5" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ParticipationOptions;