import React from 'react';

const ProductHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover opacity-50"
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
          Our product family
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Meet MAiRA, MAV, LARA, and MiPA. Robotic assistants built to collaborate with you in a natural way.
        </p>
      </div>
    </section>
  );
};

export default ProductHero;