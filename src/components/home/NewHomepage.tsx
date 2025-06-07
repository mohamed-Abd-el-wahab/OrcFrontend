import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  Star,
  Users,
  Trophy,
  Cpu,
  Zap,
  Shield,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

// Particle animation component
const ParticleBackground = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const particleCount = 50;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.1
    }));
    setParticles(newParticles);

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.speedX,
        y: particle.y + particle.speedY,
        x: particle.x > window.innerWidth ? 0 : particle.x < 0 ? window.innerWidth : particle.x,
        y: particle.y > window.innerHeight ? 0 : particle.y < 0 ? window.innerHeight : particle.y
      })));
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-[#00ffcc]"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  );
};

const NewHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentProductImage, setCurrentProductImage] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Product images for carousel
  const productImages = [
    '/rover.jpg',
    '/rover_pro.jpg',
    '/mav.jpg'
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "ORC transformed my understanding of robotics. The hands-on approach is unmatched.",
      name: "Ahmed Hassan",
      role: "Engineering Student",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "The combat events are incredible. Real engineering challenges with real rewards.",
      name: "Sara Mohamed",
      role: "Robotics Engineer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "From beginner to competitor in just 6 months. ORC's structured approach works.",
      name: "Omar Ali",
      role: "Tech Entrepreneur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0e] text-[#e6e6e6] font-['Inter'] overflow-x-hidden">
      <ParticleBackground />
      
      {/* Critical CSS for above-the-fold content */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        
        /* Focus styles with accent color */
        *:focus {
          outline: 2px solid #00ffcc;
          outline-offset: 2px;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0d0d0e;
        }
        ::-webkit-scrollbar-thumb {
          background: #00ffcc;
          border-radius: 4px;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0d0d0e]/95 backdrop-blur-md border-b border-[#00ffcc]/20">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/header_logo.svg" 
                alt="ORC Logo" 
                className="h-8 w-auto"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/products" className="text-[#e6e6e6] hover:text-[#00ffcc] transition-colors duration-200">
                Products
              </Link>
              <Link to="/courses" className="text-[#e6e6e6] hover:text-[#00ffcc] transition-colors duration-200">
                Courses
              </Link>
              <Link to="/competition" className="text-[#e6e6e6] hover:text-[#00ffcc] transition-colors duration-200">
                Battles
              </Link>
              <Link to="/about" className="text-[#e6e6e6] hover:text-[#00ffcc] transition-colors duration-200">
                About
              </Link>
              <Link to="/contact" className="text-[#e6e6e6] hover:text-[#00ffcc] transition-colors duration-200">
                Contact
              </Link>
              <Link 
                to="/products/rover" 
                className="bg-[#00ffcc] text-[#0d0d0e] px-6 py-2 rounded-lg font-semibold hover:bg-[#00ffcc]/90 transition-colors duration-200"
              >
                Buy ROVER
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#e6e6e6] hover:text-[#00ffcc] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-[#00ffcc]/20 py-4">
              <div className="flex flex-col space-y-4">
                <Link to="/products" className="text-[#e6e6e6] hover:text-[#00ffcc] transition-colors duration-200">
                  Products
                </Link>
                <Link to="/courses" className="text-[#e6e6e6] hover:text-[#00ffcc] transition-colors duration-200">
                  Courses
                </Link>
                <Link to="/competition" className="text-[#e6e6e6] hover:text-[#00ffcc] transition-colors duration-200">
                  Battles
                </Link>
                <Link to="/about" className="text-[#e6e6e6] hover:text-[#00ffcc] transition-colors duration-200">
                  About
                </Link>
                <Link to="/contact" className="text-[#e6e6e6] hover:text-[#00ffcc] transition-colors duration-200">
                  Contact
                </Link>
                <Link 
                  to="/products/rover" 
                  className="bg-[#00ffcc] text-[#0d0d0e] px-6 py-2 rounded-lg font-semibold hover:bg-[#00ffcc]/90 transition-colors duration-200 text-center"
                >
                  Buy ROVER
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Hero Background Image - Replace with actual ROVER image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070"
              alt="ROVER robot in action"
              className="w-full h-full object-cover opacity-30"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0e]/80 via-[#0d0d0e]/60 to-[#0d0d0e]/80" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-rajdhani text-5xl md:text-7xl lg:text-8xl font-bold uppercase mb-6 tracking-wider">
              Build. Learn. Compete.
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Custom robots, hands-on courses, and adrenaline-pumping battles—right here in Egypt.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/products/rover"
                className="bg-[#00ffcc] text-[#0d0d0e] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00ffcc]/90 transition-all duration-300 transform hover:scale-105"
              >
                Shop ROVER
              </Link>
              <Link
                to="/courses"
                className="border-2 border-[#00ffcc] text-[#00ffcc] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00ffcc] hover:text-[#0d0d0e] transition-all duration-300 transform hover:scale-105"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </section>

        {/* Value Props Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Modular Robots */}
              <div className="bg-[#0d0d0e]/80 backdrop-blur-sm border border-[#00ffcc]/20 rounded-xl p-8 hover:border-[#00ffcc]/40 transition-all duration-300 transform hover:scale-105">
                <Cpu className="w-12 h-12 text-[#00ffcc] mb-6" />
                <h3 className="font-rajdhani text-2xl font-bold uppercase mb-4">Modular Robots</h3>
                <p className="text-[#e6e6e6]/80 leading-relaxed">
                  Configure wheels, sensors, arms. Build exactly what you need with our modular system.
                </p>
              </div>

              {/* Structured Courses */}
              <div className="bg-[#0d0d0e]/80 backdrop-blur-sm border border-[#00ffcc]/20 rounded-xl p-8 hover:border-[#00ffcc]/40 transition-all duration-300 transform hover:scale-105">
                <Zap className="w-12 h-12 text-[#00ffcc] mb-6" />
                <h3 className="font-rajdhani text-2xl font-bold uppercase mb-4">Structured Courses</h3>
                <p className="text-[#e6e6e6]/80 leading-relaxed">
                  Level 0 → Level 1 → Level 2. Progressive learning that builds real skills.
                </p>
              </div>

              {/* Combat Events */}
              <div className="bg-[#0d0d0e]/80 backdrop-blur-sm border border-[#00ffcc]/20 rounded-xl p-8 hover:border-[#00ffcc]/40 transition-all duration-300 transform hover:scale-105">
                <Shield className="w-12 h-12 text-[#00ffcc] mb-6" />
                <h3 className="font-rajdhani text-2xl font-bold uppercase mb-4">Combat Events</h3>
                <p className="text-[#e6e6e6]/80 leading-relaxed">
                  Real arenas. Real prizes. Test your robots against the best in Egypt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Product Section */}
        <section className="py-20 bg-[#0d0d0e]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Product Image Carousel */}
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden bg-[#0d0d0e]/80 border border-[#00ffcc]/20">
                  <img
                    src={productImages[currentProductImage]}
                    alt="ROVER robot product showcase"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Carousel Controls */}
                <button
                  onClick={() => setCurrentProductImage(prev => (prev - 1 + productImages.length) % productImages.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#0d0d0e]/80 text-[#00ffcc] p-2 rounded-full hover:bg-[#00ffcc] hover:text-[#0d0d0e] transition-all duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setCurrentProductImage(prev => (prev + 1) % productImages.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#0d0d0e]/80 text-[#00ffcc] p-2 rounded-full hover:bg-[#00ffcc] hover:text-[#0d0d0e] transition-all duration-300"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProductImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentProductImage ? 'bg-[#00ffcc]' : 'bg-[#e6e6e6]/30'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-rajdhani text-4xl md:text-5xl font-bold uppercase mb-6">
                    Meet ROVER
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#00ffcc] rounded-full mr-4" />
                      <span>All-terrain capability with advanced drive system</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#00ffcc] rounded-full mr-4" />
                      <span>Modular design supporting various sensors</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#00ffcc] rounded-full mr-4" />
                      <span>Extended operation up to 8 hours</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#00ffcc] rounded-full mr-4" />
                      <span>Payload capacity up to 500kg</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#00ffcc] rounded-full mr-4" />
                      <span>Precision control with ±5mm accuracy</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#00ffcc]/20 pt-8">
                  <p className="text-3xl font-bold text-[#00ffcc] mb-6">From EGP 12,000</p>
                  <Link
                    to="/products/rover"
                    className="inline-block bg-[#00ffcc] text-[#0d0d0e] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00ffcc]/90 transition-all duration-300 transform hover:scale-105"
                  >
                    Configure & Buy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Preview Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-rajdhani text-4xl md:text-5xl font-bold uppercase mb-6">
                Master Robotics Step by Step
              </h2>
              <p className="text-xl text-[#e6e6e6]/80 max-w-3xl mx-auto">
                Our structured learning path takes you from beginner to expert
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Level 0 */}
              <div className="bg-[#0d0d0e]/80 backdrop-blur-sm border border-[#00ffcc]/20 rounded-xl p-8 hover:border-[#00ffcc]/40 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#00ffcc]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-rajdhani text-2xl font-bold text-[#00ffcc]">0</span>
                  </div>
                  <h3 className="font-rajdhani text-2xl font-bold uppercase">Level 0</h3>
                  <p className="text-[#e6e6e6]/60">Foundation</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span>Modules:</span>
                    <span className="text-[#00ffcc]">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="text-[#00ffcc]">4 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Projects:</span>
                    <span className="text-[#00ffcc]">3</span>
                  </div>
                </div>

                <Link
                  to="/courses/intro-robotics"
                  className="block w-full text-center border-2 border-[#00ffcc] text-[#00ffcc] py-3 rounded-lg font-semibold hover:bg-[#00ffcc] hover:text-[#0d0d0e] transition-all duration-300"
                >
                  Enroll
                </Link>
              </div>

              {/* Level 1 */}
              <div className="bg-[#0d0d0e]/80 backdrop-blur-sm border border-[#00ffcc]/20 rounded-xl p-8 hover:border-[#00ffcc]/40 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#00ffcc]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-rajdhani text-2xl font-bold text-[#00ffcc]">1</span>
                  </div>
                  <h3 className="font-rajdhani text-2xl font-bold uppercase">Level 1</h3>
                  <p className="text-[#e6e6e6]/60">Intermediate</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span>Modules:</span>
                    <span className="text-[#00ffcc]">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="text-[#00ffcc]">8 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Projects:</span>
                    <span className="text-[#00ffcc]">5</span>
                  </div>
                </div>

                <Link
                  to="/courses/embedded-systems"
                  className="block w-full text-center border-2 border-[#00ffcc] text-[#00ffcc] py-3 rounded-lg font-semibold hover:bg-[#00ffcc] hover:text-[#0d0d0e] transition-all duration-300"
                >
                  Enroll
                </Link>
              </div>

              {/* Level 2 */}
              <div className="bg-[#0d0d0e]/80 backdrop-blur-sm border border-[#00ffcc]/20 rounded-xl p-8 hover:border-[#00ffcc]/40 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#00ffcc]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-rajdhani text-2xl font-bold text-[#00ffcc]">2</span>
                  </div>
                  <h3 className="font-rajdhani text-2xl font-bold uppercase">Level 2</h3>
                  <p className="text-[#e6e6e6]/60">Advanced</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span>Modules:</span>
                    <span className="text-[#00ffcc]">16</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="text-[#00ffcc]">12 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Projects:</span>
                    <span className="text-[#00ffcc]">8</span>
                  </div>
                </div>

                <Link
                  to="/courses/combat-robotics"
                  className="block w-full text-center border-2 border-[#00ffcc] text-[#00ffcc] py-3 rounded-lg font-semibold hover:bg-[#00ffcc] hover:text-[#0d0d0e] transition-all duration-300"
                >
                  Enroll
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Community Battles Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Video Background - Replace with actual battle footage */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=2070"
              alt="Robot battle arena"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#0d0d0e]/80" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-rajdhani text-4xl md:text-6xl font-bold uppercase mb-6">
                Next ORC Battle: Sept 2025
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-[#e6e6e6]/80">
                Register Now for the Ultimate Robot Combat Championship
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/register"
                  className="bg-[#00ffcc] text-[#0d0d0e] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00ffcc]/90 transition-all duration-300 transform hover:scale-105"
                >
                  Sign Up
                </Link>
                <Link
                  to="/watch"
                  className="border-2 border-[#00ffcc] text-[#00ffcc] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00ffcc] hover:text-[#0d0d0e] transition-all duration-300 transform hover:scale-105 flex items-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Live
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 bg-[#0d0d0e]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Sponsor Logos */}
            <div className="text-center mb-16">
              <h3 className="font-rajdhani text-2xl font-bold uppercase mb-8 text-[#e6e6e6]/60">
                Trusted by Industry Leaders
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                {/* Placeholder sponsor logos - Replace with actual sponsor images */}
                <div className="w-32 h-16 bg-[#e6e6e6]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[#e6e6e6]/40 text-sm">Sponsor 1</span>
                </div>
                <div className="w-32 h-16 bg-[#e6e6e6]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[#e6e6e6]/40 text-sm">Sponsor 2</span>
                </div>
                <div className="w-32 h-16 bg-[#e6e6e6]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[#e6e6e6]/40 text-sm">Sponsor 3</span>
                </div>
                <div className="w-32 h-16 bg-[#e6e6e6]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[#e6e6e6]/40 text-sm">Sponsor 4</span>
                </div>
              </div>
            </div>

            {/* Testimonial Slider */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#0d0d0e]/80 backdrop-blur-sm border border-[#00ffcc]/20 rounded-xl p-8 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-[#00ffcc] fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full mr-4"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-[#00ffcc]">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-[#e6e6e6]/60">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>

                {/* Testimonial Indicators */}
                <div className="flex justify-center space-x-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-[#00ffcc]' : 'bg-[#e6e6e6]/30'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0d0d0e] border-t border-[#00ffcc]/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="font-rajdhani text-xl font-bold uppercase mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/products" className="text-[#e6e6e6]/80 hover:text-[#00ffcc] transition-colors duration-200">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-[#e6e6e6]/80 hover:text-[#00ffcc] transition-colors duration-200">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/competition" className="text-[#e6e6e6]/80 hover:text-[#00ffcc] transition-colors duration-200">
                    Battles
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-[#e6e6e6]/80 hover:text-[#00ffcc] transition-colors duration-200">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div>
              <h4 className="font-rajdhani text-xl font-bold uppercase mb-6">Stay Updated</h4>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-[#0d0d0e] border border-[#00ffcc]/20 rounded-lg text-[#e6e6e6] placeholder-[#e6e6e6]/40 focus:border-[#00ffcc] transition-colors duration-200"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#00ffcc] text-[#0d0d0e] py-3 rounded-lg font-semibold hover:bg-[#00ffcc]/90 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-rajdhani text-xl font-bold uppercase mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-[#00ffcc] mr-3" />
                  <span className="text-[#e6e6e6]/80">Cairo, Egypt</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[#00ffcc] mr-3" />
                  <span className="text-[#e6e6e6]/80">+20 123 456 7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-[#00ffcc] mr-3" />
                  <span className="text-[#e6e6e6]/80">info@orc-egypt.com</span>
                </div>
              </div>
            </div>

            {/* Social & Map */}
            <div>
              <h4 className="font-rajdhani text-xl font-bold uppercase mb-6">Follow Us</h4>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://facebook.com/orc-egypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e6e6e6]/80 hover:text-[#00ffcc] transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com/orc-egypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e6e6e6]/80 hover:text-[#00ffcc] transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com/orc-egypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e6e6e6]/80 hover:text-[#00ffcc] transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
              
              {/* Embedded Map Placeholder */}
              <div className="w-full h-32 bg-[#0d0d0e]/80 border border-[#00ffcc]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#e6e6e6]/40 text-sm">
                  {/* Insert Google Maps embed here */}
                  Map Location
                </span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[#00ffcc]/20 mt-12 pt-8 text-center">
            <p className="text-[#e6e6e6]/60">
              © {new Date().getFullYear()} ORC Egypt. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewHomepage;