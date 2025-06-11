import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <div className="flex flex-col items-center space-y-2">
        <span className="text-secondary-text text-sm font-light tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-bright-cyan/0 via-bright-cyan/60 to-bright-cyan/0" />
        <ChevronDown className="w-4 h-4 text-bright-cyan animate-pulse" />
      </div>
    </div>
  );
};

export default ScrollIndicator;