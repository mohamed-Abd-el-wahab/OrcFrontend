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
      {/* Primary gradient background */}
      <div className="absolute inset-0 gradient-primary" />
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-bright-cyan/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-electric-blue/25 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 border border-bright-cyan/15 rounded-full animate-float-gentle"></div>
      </div>
      
      {/* Video Background - reduced opacity for more subtle effect */}
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
              isVideoLoaded ? 'opacity-10' : 'opacity-0'
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
      <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/95 via-transparent to-dark-navy/95" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(79, 125, 243, 0.08) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(79, 125, 243, 0.08) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </div>
  );
};

export default HeroBackground;