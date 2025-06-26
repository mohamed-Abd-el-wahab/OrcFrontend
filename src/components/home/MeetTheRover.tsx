import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check, Zap } from 'lucide-react';

const MeetTheRover = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % slides.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 0, 242, 0.1) 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#0000F2]"></div>
            <Zap className="w-6 h-6 text-[#0000F2] animate-pulse" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#0000F2]"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-['Montserrat',sans-serif] font-black text-white mb-6 tracking-tight">
            MEET THE ROVER
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-['Aileron',sans-serif] font-light leading-relaxed">
            The ultimate modular combat robot platform, engineered in Egypt for global competition
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Carousel */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0000F2]/20 to-blue-400/20 rounded-3xl blur-2xl"></div>
            
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                  src={slides[currentImageIndex].image}
                  alt={slides[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 backdrop-blur-sm rounded-full text-white hover:text-[#0000F2] border border-gray-600 hover:border-[#0000F2]/40 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 backdrop-blur-sm rounded-full text-white hover:text-[#0000F2] border border-gray-600 hover:border-[#0000F2]/40 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              {/* Slide Indicators */}
              <div className="flex justify-center mt-6 space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentImageIndex === index 
                        ? 'bg-[#0000F2] scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
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
              <h3 className="text-2xl font-['Montserrat',sans-serif] font-bold text-white mb-8 flex items-center">
                <div className="w-1 h-8 bg-gradient-to-b from-[#0000F2] to-blue-400 mr-4 rounded-full"></div>
                KEY SPECIFICATIONS
              </h3>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div 
                    key={index} 
                    className="flex items-start group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-1 bg-gray-900/50 backdrop-blur-sm rounded-full mr-4 mt-1 border border-gray-700 group-hover:border-[#0000F2]/40 transition-colors duration-300">
                      <Check className="w-4 h-4 text-[#0000F2]" />
                    </div>
                    <span className="text-gray-300 font-['Aileron',sans-serif] font-light leading-relaxed group-hover:text-white transition-colors duration-300">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing and CTA */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-[#0000F2]/40 transition-all duration-500">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-['Montserrat',sans-serif] font-black text-white mb-2 flex items-baseline">
                    <span className="text-[#0000F2]">From EGP</span>
                    <span className="ml-2">25,000</span>
                  </div>
                  <p className="text-gray-400 font-['Aileron',sans-serif] font-light">
                    Base configuration. Additional modules and customizations available.
                  </p>
                </div>
                
                <Link
                  to="/products/rover"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#0000F2] text-white rounded-xl hover:bg-blue-700 transition-all duration-300 text-lg font-['Montserrat',sans-serif] font-semibold group shadow-lg transform hover:scale-105"
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