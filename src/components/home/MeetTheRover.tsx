import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check, Zap } from 'lucide-react';
import { designClasses } from '../../config/design';

const MeetTheRover = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: "/rover.png",
      alt: "RIO front view"
    },
    {
      id: 2,
      image: "/rover4.png",
      alt: "RIO side view"
    },
    {
      id: 3,
      image: "/rover3.png",
      alt: "RIO back view"
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
    <section className={`${designClasses.section} bg-orc-black overflow-hidden ${designClasses.sectionPadding}`}>
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="rover-diagonal-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#rover-diagonal-arrows)"/>
        </svg>
      </div>

      <div className={`${designClasses.sectionContainer} relative z-20`}>
        {/* Section Header */}
        <div className={`${designClasses.sectionHeader} space-y-6`}>
          {/* Brand Geometric Accent */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
            <Zap className="w-6 h-6 text-orc-blue animate-pulse" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
          </div>

          {/* Brand Headline Typography */}
          <h2 className={designClasses.sectionHeadline}>
            Meet{' '}
            <span className="text-orc-blue">RIO</span>
          </h2>
          
          {/* Brand Body Typography */}
          <p className={`${designClasses.leadText} max-w-2xl mx-auto`}>
            Professional-grade combat robotics platform engineered in Egypt. Build, customize, and compete with cutting-edge modular technology designed for the next generation of innovators.
          </p>
        </div>

        <div className={`${designClasses.grid} grid-cols-1 lg:grid-cols-2 items-center`}>
          {/* Image Carousel */}
          <div className="relative group rover-image-container">
            <div className="relative rounded-2xl overflow-hidden rover-image">
              {/* Blue Glow Effect */}
              <div className="absolute -inset-1 bg-orc-blue/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-square">
                {/* Brand Accent Dot */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full z-20"></div>
                
                {/* Rover Image */}
                <img
                  src={slides[currentImageIndex].image}
                  alt={slides[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm border border-orc-blue/30 rounded-full text-orc-white hover:text-orc-blue hover:border-orc-blue hover:bg-black/70 transition-all duration-300 hover:scale-110 z-30"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm border border-orc-blue/30 rounded-full text-orc-white hover:text-orc-blue hover:border-orc-blue hover:bg-black/70 transition-all duration-300 hover:scale-110 z-30"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Image Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-left">
                    <h3 className="font-montserrat font-bold text-orc-white text-lg mb-1">
                      Combat-Ready Engineering
                    </h3>
                    <p className="font-aileron text-gray-300 text-sm">
                      Professional-grade robotics platform built for competition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentImageIndex === index 
                      ? 'bg-orc-blue scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            {/* Parallax Tilt Effect (Desktop) */}
            <style dangerouslySetInnerHTML={{
              __html: `
                @media (min-width: 1024px) {
                  .rover-image-container:hover .rover-image {
                    transform: perspective(1000px) rotateY(-2deg);
                    transition: transform 0.6s ease-out;
                  }
                }
              `
            }} />
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Specifications */}
            <div>
              <h3 className={`${designClasses.sectionHeadline} mb-6`}>
                Built for{' '}
                <span className="text-orc-blue">Competition</span>
              </h3>
              
              <p className={`${designClasses.leadText} max-w-lg mb-8`}>
                Every component engineered for performance, durability, and modularity. From weekend workshops to international championships — this is your platform to innovate and dominate.
              </p>
              
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-4 group cursor-default"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-orc-blue rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-aileron text-gray-300 text-base">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing and CTA */}
            <div className="space-y-6 pt-4">
              <div>
                <div className="text-3xl font-montserrat font-bold text-orc-white mb-2 flex items-baseline">
                  <span className="text-orc-blue">From EGP</span>
                  <span className="ml-2">25,000</span>
                </div>
                <p className="font-aileron text-gray-300 text-base">
                  Base configuration with modular upgrades available. Professional engineering meets accessible innovation.
                </p>
              </div>
              
              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products/rover"
                  className={designClasses.button}
                >
                  Configure & Buy
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link
                  to="/services"
                  className={designClasses.buttonSecondary}
                >
                  Custom Build
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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