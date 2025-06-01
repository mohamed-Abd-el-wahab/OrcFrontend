import React from 'react';

const Partners = () => {
  return (
    <section className="py-20 bg-[#020B1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12">OUR PARTNERS & SPONSORS</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="aspect-[4/3] bg-gray-800/30 rounded-xl backdrop-blur-sm border border-gray-700"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;