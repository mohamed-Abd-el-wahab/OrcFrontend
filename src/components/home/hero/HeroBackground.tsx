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
      {/* Fallback background for loading state */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Video Background */}
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
              isVideoLoaded ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <source 
              src="https://neura-robotics.com/wp-content/uploads/2024/09/website-landing_1.mp4" 
              type="video/mp4"
            />
          </video>
        </div>
      )}

      {/* Overlay gradient for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90" />
    </div>
  );
};

export default HeroBackground;