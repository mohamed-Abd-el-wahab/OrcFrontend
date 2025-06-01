import React from 'react';
import { History, Eye, Award, Target, Users, Rocket } from 'lucide-react';

const Story = () => {
  const visionPoints = [
    {
      icon: <Award className="w-6 h-6 text-blue-500" />,
      text: "Robotics competitions are as thrilling as any motorsport"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      text: "Students learn robotics through hands-on challenges"
    },
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      text: "Builders collaborate across borders"
    },
    {
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      text: "Breakthrough innovations emerge from sport-based R&D"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <History className="w-12 h-12 text-blue-500" />
          </div>
          <h2 className="text-4xl font-bold text-white text-center mb-6">Our Story</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8">
              ORC began with a simple idea: What if there was a sport for robotics — one that pushed boundaries, 
              built community, and accelerated innovation?
            </p>
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
              <p className="text-lg text-gray-300 mb-6">
                Founded by passionate engineers and makers, ORC has grown into an international hub for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <span className="text-blue-400">Robotics competitions</span>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <span className="text-blue-400">Educational resources</span>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <span className="text-blue-400">Builder communities</span>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <span className="text-blue-400">Industry partnerships</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Vision */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Eye className="w-12 h-12 text-blue-500" />
          </div>
          <h2 className="text-4xl font-bold text-white text-center mb-6">Our Vision</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
              <p className="text-xl text-gray-300 mb-8 text-center">
                We envision a world where:
              </p>
              <div className="space-y-6">
                {visionPoints.map((point, index) => (
                  <div key={index} className="flex items-center bg-gray-900/50 p-4 rounded-lg">
                    {point.icon}
                    <span className="ml-4 text-gray-300">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xl text-gray-300 text-center mt-8">
              ORC is building the future — one builder, one robot, one competition at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;