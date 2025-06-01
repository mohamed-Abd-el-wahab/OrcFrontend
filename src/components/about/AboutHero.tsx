import React from 'react';

const AboutHero = () => {
  return (
    <div className="relative bg-[#020B1C] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070"
          alt="Robot in workshop"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            ABOUT ORC
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Building the future of robotics – one machine at time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;