import React from 'react';
import { CheckCircle } from 'lucide-react';

const Mission = () => {
  const missionPoints = [
    "Learn new skills",
    "Build advanced robots",
    "Compete in exciting challenges",
    "Inspire the next generation of creators"
  ];

  return (
    <section className="py-20 bg-[#020B1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-white mb-8">OUR MISSION</h2>
          <p className="text-xl text-gray-300 mb-8">
            At ORC, we believe that robotics is a sport, art, and community – it's a platform to drive innovation in technology.
          </p>
          
          <div className="space-y-4 mb-8">
            {missionPoints.map((point, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <p className="text-xl text-gray-300">
            Just as Formula 1 drives innovation in automotive, ORC aims to drive innovation in robotics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;