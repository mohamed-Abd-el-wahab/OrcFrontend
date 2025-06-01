import React from 'react';

const Story = () => {
  const pillars = [
    "Robotics competitions",
    "Educational resources",
    "Builder communities",
    "Industry partnerships"
  ];

  return (
    <section className="py-20 bg-[#020B1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-white mb-8">OUR STORY</h2>
          <p className="text-xl text-gray-300 mb-8">
            What if there was a sport for robotics – one that pushed boundaries, built community, and accelerated innovation.
          </p>
          
          <p className="text-xl text-gray-300 mb-8">
            Founded by engineers in makers.
          </p>

          <ul className="space-y-3">
            {pillars.map((pillar, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                {pillar}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Story;