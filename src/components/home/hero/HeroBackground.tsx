import React, { useState, useEffect } from 'react';

const HeroBackground = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);

  useEffect(() => {
    // Preload the video
    const video = document.createElement('video');
    video.src = "https://neura-robotics.com/wp-content/uploads/2024/09/website-landing_1.mp4";
    video.onloadeddata = () => setIsVideoLoaded(true);
    video.onerror = () => setIsVideoError(true);
  }, []);

  return (
    <div className="absolute inset-0">
      {/* Primary blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-blue-300/15 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-32 h-32 border border-blue-500/25 rounded-full animate-pulse delay-500"></div>
        </div>
        
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-radial-gradient from-blue-600/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Video Background - very subtle */}
      {!isVideoError && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={() => setIsVideoError(true)}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-5' : 'opacity-0'
            }`}
          >
            <source 
              src="https://neura-robotics.com/wp-content/uploads/2024/09/website-landing_1.mp4" 
              type="video/mp4"
            />
          </video>
        </div>
      )}

      {/* Futuristic overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
    </div>
  );
};

export default HeroBackground;