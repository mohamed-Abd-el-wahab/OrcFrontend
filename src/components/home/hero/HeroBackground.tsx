import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Left Blue Spine - consistent with other sections */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Main dark background */}
      <div className="absolute inset-0 bg-orc-black">
        {/* Blue Wave Patterns - Multiple layers for depth */}
        <div className="absolute inset-0">
          {/* Primary Wave Layer */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
              <defs>
                <radialGradient id="wave-gradient-1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0000F2" stopOpacity="0.4"/>
                  <stop offset="50%" stopColor="#0000F2" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#0000F2" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="wave-gradient-2" cx="30%" cy="70%" r="60%">
                  <stop offset="0%" stopColor="#0000F2" stopOpacity="0.3"/>
                  <stop offset="70%" stopColor="#0000F2" stopOpacity="0.1"/>
                  <stop offset="100%" stopColor="#0000F2" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="wave-gradient-3" cx="80%" cy="30%" r="40%">
                  <stop offset="0%" stopColor="#0000F2" stopOpacity="0.35"/>
                  <stop offset="60%" stopColor="#0000F2" stopOpacity="0.15"/>
                  <stop offset="100%" stopColor="#0000F2" stopOpacity="0"/>
                </radialGradient>
              </defs>
              
              {/* Wave shapes */}
              <path d="M0,400 Q480,200 960,400 T1920,400 L1920,800 Q1440,600 960,800 T0,800 Z" fill="url(#wave-gradient-1)"/>
              <path d="M0,600 Q320,350 640,600 T1280,600 Q1600,450 1920,600 L1920,1080 L0,1080 Z" fill="url(#wave-gradient-2)"/>
              <path d="M960,200 Q1280,50 1600,200 T1920,200 L1920,500 Q1600,350 1280,500 T640,500 Q320,350 0,500 L0,200 Q320,50 640,200 T960,200 Z" fill="url(#wave-gradient-3)"/>
            </svg>
          </div>
          
          {/* Secondary Wave Layer - Animated */}
          <div className="absolute inset-0 animate-pulse">
            <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
              <defs>
                <radialGradient id="wave-gradient-animated" cx="60%" cy="40%" r="70%">
                  <stop offset="0%" stopColor="#0000F2" stopOpacity="0.2"/>
                  <stop offset="80%" stopColor="#0000F2" stopOpacity="0.05"/>
                  <stop offset="100%" stopColor="#0000F2" stopOpacity="0"/>
                </radialGradient>
              </defs>
              <path d="M0,300 Q400,100 800,300 T1600,300 Q1760,200 1920,300 L1920,700 Q1760,500 1600,700 T800,700 Q400,500 0,700 Z" fill="url(#wave-gradient-animated)"/>
            </svg>
          </div>
        </div>
        
        {/* Center spotlight effect - enhanced */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-orc-blue/8 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orc-blue/5 rounded-full blur-2xl"></div>
        </div>
      </div>
      
      {/* Soft overlay for enhanced contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
    </div>
  );
};

export default HeroBackground;