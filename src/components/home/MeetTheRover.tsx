import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check, Zap } from 'lucide-react';

const MeetTheRover = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: "/rover.jpg",
      alt: "ROVER front view"
    },
    {
      id: 2,
      image: "/rover_pro.jpg",
      alt: "ROVER side view"
    },
    {
      id: 3,
      image: "/mav.jpg",
      alt: "ROVER back view"
    }
  ];

  const specifications = [
    "Modular aluminum chassis with quick-release system",
    "High-torque brushless motors (up to 1000W)",
    "Advanced sensor suite with gyroscope and accelerometer",
    "Customizable weapon mounts and armor configurations",
    "Wireless control system with 100m range",
    "Rechargeable lithium battery (up to 30 minutes runtime)",
    "Compatible with all ORC course levels"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-dark-navy to-deep-charcoal relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(79, 125, 243, 0.1) 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-electric-blue"></div>
            <Zap className="w-6 h-6 text-electric-blue animate-pulse" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-electric-blue"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-primary-text mb-6 tracking-tight">
            MEET THE ROVER
          </h2>
          <p className="text-xl text-secondary-text max-w-2xl mx-auto font-light leading-relaxed">
            The ultimate modular combat robot platform, engineered in Egypt for global competition
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Carousel */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-electric-blue/20 to-bright-cyan/20 rounded-3xl blur-2xl"></div>
            
            <div className="relative glass-effect rounded-2xl p-6 border border-electric-blue/20">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-deep-charcoal to-dark-navy">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass-effect rounded-full text-primary-text hover:text-bright-cyan border border-bright-cyan/20 hover:border-bright-cyan/40 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass-effect rounded-full text-primary-text hover:text-bright-cyan border border-bright-cyan/20 hover:border-bright-cyan/40 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              {/* Slide Indicators */}
              <div className="flex justify-center mt-6 space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-bright-cyan scale-125 animate-pulse-glow' 
                        : 'bg-secondary-text/30 hover:bg-secondary-text/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Specifications */}
            <div>
              <h3 className="text-2xl font-bold text-primary-text mb-8 flex items-center">
                <div className="w-1 h-8 bg-gradient-to-b from-bright-cyan to-electric-blue mr-4 rounded-full"></div>
                KEY SPECIFICATIONS
              </h3>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div 
                    key={index} 
                    className="flex items-start group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-1 glass-effect rounded-full mr-4 mt-1 border border-bright-cyan/20 group-hover:border-bright-cyan/40 transition-colors duration-300">
                      <Check className="w-4 h-4 text-bright-cyan" />
                    </div>
                    <span className="text-secondary-text font-light leading-relaxed group-hover:text-primary-text transition-colors duration-300">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing and CTA */}
            <div className="glass-effect rounded-2xl p-8 border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-500">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-black text-primary-text mb-2 flex items-baseline">
                    <span className="text-bright-cyan">From EGP</span>
                    <span className="ml-2">25,000</span>
                  </div>
                  <p className="text-secondary-text font-light">
                    Base configuration. Additional modules and customizations available.
                  </p>
                </div>
                
                <Link
                  to="/products/rover"
                  className="w-full inline-flex items-center justify-center px-8 py-4 gradient-accent text-primary-text rounded-xl hover:scale-105 transition-all duration-300 text-lg font-semibold group shadow-lg animate-pulse-glow"
                >
                  Configure & Buy
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheRover;