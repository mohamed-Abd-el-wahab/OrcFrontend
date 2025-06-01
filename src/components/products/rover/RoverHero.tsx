import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const RoverHero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.createElement('video');
    video.src = "https://d1hqi5mu4fov5n.cloudfront.net/videos/MAV/MAV_Compilation_D.mp4";
    video.onloadeddata = () => setIsVideoLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-50' : 'opacity-0'
          }`}
        >
          <source
            src="https://d1hqi5mu4fov5n.cloudfront.net/videos/MAV/MAV_Compilation_D.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Meet ROVER
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-8">
          The Future of Robotic Exploration
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          A versatile mobile robot platform designed for innovators, educators, and robotics enthusiasts.
        </p>
        
        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300">
          Download Specifications
          <ChevronRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default RoverHero;