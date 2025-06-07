import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: "8k+",
      label: "builders",
      color: "text-blue-400"
    },
    {
      number: "25",
      label: "events",
      color: "text-green-400"
    },
    {
      number: "120k",
      label: "subs",
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;