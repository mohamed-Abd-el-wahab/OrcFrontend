import React from 'react';

const CoreValues = () => {
  const values = [
    {
      title: "Innovation",
      description: "pushing the limits of what's possible"
    },
    {
      title: "Community",
      description: "learning and building together"
    },
    {
      title: "Excellence",
      description: "engineering with precise and purpose"
    },
    {
      title: "Inspiration",
      description: "sparking curiosity and passion"
    },
    {
      title: "Integrity",
      description: "competing with respect and fairness"
    }
  ];

  return (
    <section className="py-20 bg-[#020B1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12">OUR CORE VALUES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;