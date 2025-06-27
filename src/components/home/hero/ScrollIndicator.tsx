import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-30">
      <div className="flex flex-col items-center space-y-2">
        <span className="text-gray-400 text-sm font-light tracking-widest uppercase font-aileron">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-orc-blue/0 via-orc-blue/60 to-orc-blue/0" />
        <ChevronDown className="w-4 h-4 text-orc-blue animate-pulse" />
      </div>
    </div>
  );
};

export default ScrollIndicator;