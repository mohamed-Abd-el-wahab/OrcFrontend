import React from 'react';
import { Clock, Sword, Brain, Shield, Target, Zap, Users, Layers, Settings } from 'lucide-react';

const WhatIsORC = () => {
  const mainFeatures = [
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Endurance Warfare",
      description: "Hour-long battles where stamina meets strategy. Push your robot's limits in intense, sustained combat scenarios.",
      stat: "1hr+ Battles"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Engineering Challenge",
      description: "Build a champion within 15,000 budget. Every component choice matters in this test of resourceful engineering.",
      stat: "15k Cap"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Arena Mayhem",
      description: "10 robots, one arena. Form alliances, outmaneuver opponents, and survive in this ultimate battle royale.",
      stat: "10 Competitors"
    }
  ];

  const formatFeatures = [
    {
      icon: <Sword className="w-8 h-8 text-blue-500" />,
      title: "Open Arena Combat",
      description: "Unrestricted battle environment with dynamic obstacles and terrain challenges. Adapt or perish.",
      stat: "Dynamic Arena"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Team Warfare",
      description: "Form tactical alliances, execute coordinated strikes, and navigate complex team dynamics.",
      stat: "Multi-Team"
    },
    {
      icon: <Layers className="w-8 h-8 text-blue-500" />,
      title: "Tournament Structure",
      description: "Progress through qualification rounds, eliminations, and the championship finale.",
      stat: "3 Phases"
    }
  ];

  const technicalFeatures = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "Tactical Mastery",
      description: "Victory demands more than raw power. Adapt your strategy, manage resources, and outsmart opponents.",
      stat: "Strategic Combat"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Future Tech",
      description: "Push the boundaries of robotics with cutting-edge technology, from AI assistance to advanced control systems.",
      stat: "Innovation"
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Dynamic background */}
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
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center space-x-2 mb-8">
            <Settings className="w-8 h-8 text-blue-500 animate-spin-slow" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <span className="text-blue-400 text-sm font-medium px-4 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
              Battle of Survival
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-blue-500 via-blue-500 to-transparent"></div>
            <Settings className="w-8 h-8 text-blue-500 animate-spin-slow" />
          </div>

          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
            What is ORC?
          </h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-2xl text-blue-400 font-semibold">
              Where Engineering Meets Combat Excellence
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Open Robot Combat (ORC) redefines competitive robotics. It's not just a battle—it's a test of 
              engineering brilliance, strategic thinking, and technological innovation. In this high-stakes arena, 
              teams push the boundaries of what's possible in robot combat.
            </p>
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 blur-xl"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                      {feature.stat}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competition Format */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Competition Format</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formatFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 blur-xl"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                      {feature.stat}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Aspects */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technicalFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 blur-xl"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                      {feature.stat}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsORC;