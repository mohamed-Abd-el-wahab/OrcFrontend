import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check, Star, Zap, Shield } from 'lucide-react';

const MeetTheRover = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: "/rover.jpg",
      alt: "ROVER front view",
      title: "Precision Engineering"
    },
    {
      id: 2,
      image: "/rover_pro.jpg",
      alt: "ROVER side view", 
      title: "Advanced Technology"
    },
    {
      id: 3,
      image: "/mav.jpg",
      alt: "ROVER back view",
      title: "Future Ready"
    }
  ];

  const specifications = [
    { icon: <Zap className="w-5 h-5" />, text: "Modular aluminum chassis with quick-release system" },
    { icon: <Shield className="w-5 h-5" />, text: "High-torque brushless motors (up to 1000W)" },
    { icon: <Star className="w-5 h-5" />, text: "Advanced sensor suite with gyroscope and accelerometer" },
    { icon: <Check className="w-5 h-5" />, text: "Customizable weapon mounts and armor configurations" },
    { icon: <Zap className="w-5 h-5" />, text: "Wireless control system with 100m range" },
    { icon: <Shield className="w-5 h-5" />, text: "Rechargeable lithium battery (up to 30 minutes runtime)" },
    { icon: <Star className="w-5 h-5" />, text: "Compatible with all ORC course levels" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Carousel */}
          <div className="relative group">
            {/* Main image container */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Slide title */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">{slides[currentSlide].title}</h3>
                <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
            </div>
            
            {/* Enhanced Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="space-y-10">
            {/* Header */}
            <div>
              <div className="inline-flex items-center space-x-2 mb-6">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="text-yellow-400 text-sm font-medium px-3 py-1 bg-yellow-500/10 rounded-full border border-yellow-500/20">
                  Featured Product
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                MEET THE
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ROVER
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                The ultimate modular combat robot platform, designed and built in Egypt with precision engineering and cutting-edge technology.
              </p>
            </div>

            {/* Enhanced Specifications */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Zap className="w-6 h-6 text-blue-500 mr-3" />
                KEY SPECIFICATIONS
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="group flex items-start p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                      <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        {spec.icon}
                      </div>
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                      {spec.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Pricing & CTA */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 backdrop-blur-sm">
              <div className="flex items-baseline mb-4">
                <div className="text-4xl font-bold text-white mr-2">From EGP</div>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">25,000</div>
              </div>
              <p className="text-gray-400 mb-8 text-lg">
                Base configuration. Additional modules and customizations available.
              </p>
              <Link
                to="/products/rover"
                className="group relative overflow-hidden w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-500 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-1"
              >
                <span className="relative z-10">Configure & Buy</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheRover;