import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <div className="relative">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-800">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                MEET THE ROVER
              </h2>
              <p className="text-xl text-gray-300">
                The ultimate modular combat robot platform, designed and built in Egypt
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">KEY SPECIFICATIONS</h3>
              <div className="space-y-3">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold text-white mb-2">
                From EGP 25,000
              </div>
              <p className="text-gray-400 mb-6">
                Base configuration. Additional modules and customizations available.
              </p>
              <Link
                to="/products/rover"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold"
              >
                Configure & Buy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheRover;