import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Trophy } from 'lucide-react';

const CompetitionHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover opacity-30"
      >
        <source
          src="https://neura-robotics.com/wp-content/uploads/2024/09/website-landing_1.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          ORC: Battle of Survival
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-8">
          The Ultimate Robot Combat Championship
        </h2>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Enter the arena where engineering excellence meets combat strategy in the world's most advanced robot fighting competition.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <Link
            to="/register"
            className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              Register Now
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <div className="flex items-center px-6 py-3 bg-white/5 rounded-lg border border-white/10">
            <Calendar className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-400">August 15, 2025</span>
          </div>
        </div>

        <div className="inline-flex items-center px-6 py-3 bg-white/5 rounded-lg border border-white/10">
          <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
          <span className="text-yellow-400">£100,000 Prize Pool</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0" />
        <div className="w-2 h-2 rounded-full bg-blue-500" />
      </div>
    </section>
  );
};

export default CompetitionHero;