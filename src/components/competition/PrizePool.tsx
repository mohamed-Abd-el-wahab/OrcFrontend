import React from 'react';
import { Trophy, Crown } from 'lucide-react';

const PrizePool = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(234,179,8,0.1),transparent_50%)]"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-500 rounded-full animate-float"
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
          <div className="inline-flex items-center justify-center space-x-2 mb-8">
            <Trophy className="w-8 h-8 text-yellow-500 animate-pulse" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            <span className="text-yellow-400 text-sm font-medium px-4 py-1 bg-yellow-500/10 rounded-full border border-yellow-500/20">
              Glory Awaits
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-yellow-500 via-yellow-500 to-transparent"></div>
            <Trophy className="w-8 h-8 text-yellow-500 animate-pulse" />
          </div>

          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
            Prize Pool
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compete for the largest prize in competitive robotics history
          </p>
        </div>

        {/* Main Prize */}
        <div className="max-w-lg mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-gray-800/50 p-12 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Crown className="w-20 h-20 text-yellow-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Grand Champion</h3>
              <div className="text-6xl font-bold text-yellow-400 mb-6">£100,000</div>
              <p className="text-xl text-gray-300">
                Ultimate glory and the largest prize in competitive robotics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;