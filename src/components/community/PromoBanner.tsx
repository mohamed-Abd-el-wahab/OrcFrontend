import React, { useState, useEffect } from 'react';
import { Clock, Gift, X, Zap } from 'lucide-react';

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  // Set target date to August 1st, 2025
  const targetDate = new Date('2025-08-01T23:59:59').getTime();

  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const bannerTransform = `translateY(${Math.min(scrollY * 0.5, 100)}px)`;

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 overflow-hidden"
      style={{ transform: bannerTransform }}
    >
      {/* Animated Background */}
      <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 animate-pulse">
        {/* Moving Sparkles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-2 left-1/4 w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-4 left-3/4 w-1 h-1 bg-yellow-300 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-2 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-3 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        </div>

        <div className="relative px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left Content */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                  <Gift className="w-4 h-4 text-white" />
                </div>
                <div className="text-white font-montserrat">
                  <span className="font-bold text-lg">🎉 LIMITED TIME!</span>
                  <span className="ml-2 font-medium">Get 6 Months FREE</span>
                </div>
              </div>
            </div>

            {/* Center - Countdown Timer */}
            <div className="hidden md:flex items-center space-x-4">
              <Clock className="w-5 h-5 text-white" />
              <div className="flex items-center space-x-2 text-white font-montserrat font-bold">
                <div className="bg-white/20 px-2 py-1 rounded text-center min-w-[40px]">
                  <div className="text-lg">{timeLeft.days}</div>
                  <div className="text-xs opacity-80">Days</div>
                </div>
                <span className="text-xl">:</span>
                <div className="bg-white/20 px-2 py-1 rounded text-center min-w-[40px]">
                  <div className="text-lg">{timeLeft.hours}</div>
                  <div className="text-xs opacity-80">Hours</div>
                </div>
                <span className="text-xl">:</span>
                <div className="bg-white/20 px-2 py-1 rounded text-center min-w-[40px]">
                  <div className="text-lg">{timeLeft.minutes}</div>
                  <div className="text-xs opacity-80">Min</div>
                </div>
                <span className="text-xl">:</span>
                <div className="bg-white/20 px-2 py-1 rounded text-center min-w-[40px]">
                  <div className="text-lg">{timeLeft.seconds}</div>
                  <div className="text-xs opacity-80">Sec</div>
                </div>
              </div>
            </div>

            {/* Right - CTA & Close */}
            <div className="flex items-center space-x-3">
              <a href="/register?promo=banner" className="bg-white text-red-600 px-4 py-2 rounded-lg font-montserrat font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2 animate-pulse">
                <Zap className="w-4 h-4" />
                <span className="hidden sm:inline">Claim Now</span>
                <span className="sm:hidden">Claim</span>
              </a>
              
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white transition-colors duration-300 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Timer */}
          <div className="md:hidden mt-2 flex justify-center">
            <div className="flex items-center space-x-2 text-white font-montserrat font-bold text-sm">
              <Clock className="w-4 h-4" />
              <div className="flex items-center space-x-1">
                <span className="bg-white/20 px-2 py-1 rounded">{timeLeft.days}d</span>
                <span>:</span>
                <span className="bg-white/20 px-2 py-1 rounded">{timeLeft.hours}h</span>
                <span>:</span>
                <span className="bg-white/20 px-2 py-1 rounded">{timeLeft.minutes}m</span>
                <span>:</span>
                <span className="bg-white/20 px-2 py-1 rounded">{timeLeft.seconds}s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 animate-pulse"></div>
      </div>
    </div>
  );
};

export default PromoBanner; 