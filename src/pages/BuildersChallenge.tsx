import React from 'react';
import { Clock, Tool, Swords, Trophy, Users, Brain } from 'lucide-react';

const BuildersChallenge = () => {
  const phases = [
    {
      icon: Users,
      title: "Kickoff and Briefing",
      duration: "30 minutes",
      description: "Teams receive orientation, safety rules, and challenge guidelines. Each team gets a designated build area with provided tools."
    },
    {
      icon: Tool,
      title: "Build and Test Phase",
      duration: "3 hours",
      description: "Teams construct their robots using provided components, test drive capabilities, and fine-tune weapon systems."
    },
    {
      icon: Brain,
      title: "Final Preparation",
      duration: "15 minutes",
      description: "Final safety checks, battery securing, and weapon system arming before the match."
    },
    {
      icon: Swords,
      title: "Combat Match",
      duration: "Variable",
      description: "Single-elimination match until one robot is disabled or ejected from the arena."
    },
    {
      icon: Trophy,
      title: "Awards and Closing",
      duration: "45 minutes",
      description: "Winner announcement, awards ceremony, and community engagement session."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Builders' Challenge
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A five-hour robotics competition where teams compete to design, build, and battle combat robots
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 rounded-lg border border-blue-500/50">
            <Trophy className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-400">Grand Prize: 25,000 EGP</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Event Overview</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Teams compete in a high-pressure environment to build and battle combat robots, testing their engineering skills and teamwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
              <Clock className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Total Duration</h3>
              <p className="text-gray-300">
                5 hours of intense competition, from initial briefing to final awards ceremony
              </p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
              <Trophy className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Victory Conditions</h3>
              <p className="text-gray-300">
                Disable opponent for 10 continuous seconds or eject them from the arena
              </p>
            </div>
          </div>

          {/* Event Phases */}
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <phase.icon className="w-12 h-12 text-blue-500" />
                    </div>
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-2xl font-semibold text-white">{phase.title}</h3>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-gray-300">{phase.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules and Requirements */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Rules & Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Competition Rules</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Teams must use only provided components and tools</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Internet access is allowed during build phase</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>All robots must pass safety inspection before combat</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Match continues until clear victory conditions are met</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Safety Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>All team members must wear appropriate safety gear</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Weapon systems must have safety locks</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Battery connections must be properly secured</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Testing only allowed in designated safety zones</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Build?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the Builders' Challenge and showcase your robotics skills in an intense competition
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Register Now
            <Trophy className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BuildersChallenge;