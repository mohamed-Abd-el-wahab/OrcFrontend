import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const stories = [
    {
      id: 1,
      name: "Ahmed Hassan",
      age: 19,
      title: "Cairo University Engineering Student",
      achievement: "Prototype inspection robot won RoboCup demo",
      quote: "The Cairo University 'Falcons' team wouldn't exist without ORC. Our prototype inspection robot that won the RoboCup demo competition was built using everything we learned here. The mentorship and hands-on experience gave us the confidence to compete at the highest level.",
      image: "/rover.jpg",
      team: "Cairo Univ. 'Falcons' Team"
    },
    {
      id: 2,
      name: "Nour El-Haddad",
      age: 17,
      title: "High School Student & Environmental Activist",
      achievement: "Built Nile-cleaning mini-ROV, received DECI grant",
      quote: "At 17, I built a mini-ROV that cleans plastic from the Nile River. ORC gave me the technical skills and the platform to showcase my project. Receiving the DECI grant was just the beginning - now I'm working with environmental groups across Egypt.",
      image: "/rover2.jpg",
      team: "Individual Project"
    },
    {
      id: 3,
      name: "Omar Mahmoud",
      age: 22,
      title: "Robotics Freelancer & Open Source Developer",
      achievement: "Open-sourced Arabic voice-assistant bot, now freelances via ORC pro projects",
      quote: "My Arabic voice-assistant robot started as an ORC project and is now used by thousands of developers. The community connections I made here led to freelance opportunities that changed my career. ORC doesn't just teach you robotics - it opens doors.",
      image: "/rover3.jpg",
      team: "ORC Pro Projects"
    },
    {
      id: 4,
      name: "Fatima Al-Rashid",
      age: 20,
      title: "Mechatronics Student & Startup Founder",
      achievement: "Founded AgriBot startup, secured seed funding",
      quote: "The agricultural robotics startup I founded with my ORC teammates just secured our first round of seed funding. We met through the community, built our prototype in ORC labs, and pitched to investors we connected with through ORC's network. This community is powerful.",
      image: "/rio.jpg",
      team: "AgriBot Startup"
    },
    {
      id: 5,
      name: "Karim Hosny",
      age: 24,
      title: "Software Engineer at Tesla",
      achievement: "Landed dream job at Tesla through ORC connections",
      quote: "I'm now working as a software engineer at Tesla, and it all started with ORC. The advanced AI robotics projects I worked on here, combined with the professional network I built, opened doors I never imagined. ORC transformed my career trajectory completely.",
      image: "/rio2.png",
      team: "Tesla Autopilot Team"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [stories.length]);

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  const goToStory = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative bg-orc-black overflow-hidden py-20 md:py-24">
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="success-stories-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#success-stories-arrows)"/>
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-8 mb-16">
          {/* Brand Geometric Accent */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
            <div className="w-3 h-3 bg-orc-blue rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
          </div>

          <h2 className="font-montserrat font-extrabold text-4xl lg:text-6xl leading-tight text-orc-white">
            Success{' '}
            <span className="text-orc-blue">Stories</span>
          </h2>
          
          <p className="font-aileron text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            Meet the innovators, builders, and dreamers who transformed their passion into success through ORC.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Story Card */}
          <div className="relative bg-black rounded-3xl overflow-hidden border border-gray-800 min-h-[500px]">
            {/* Blue Glow Effect */}
            <div className="absolute -inset-1 bg-orc-blue/10 rounded-3xl blur-sm opacity-50"></div>
            
            {/* Brand Accent Dot */}
            <div className="absolute top-6 right-6 w-4 h-4 bg-orc-blue rounded-full z-20"></div>
            
            <div className="relative grid md:grid-cols-2 gap-0 h-full">
              {/* Left Side - Image */}
              <div className="relative overflow-hidden">
                <img
                  src={stories[currentIndex].image}
                  alt={stories[currentIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50"></div>
              </div>
              
              {/* Right Side - Content */}
              <div className="relative p-8 md:p-12 flex flex-col justify-center space-y-8">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-orc-blue/20 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-orc-blue" />
                </div>
                
                {/* Quote */}
                <blockquote className="font-montserrat text-lg md:text-xl leading-relaxed text-orc-white italic">
                  "{stories[currentIndex].quote}"
                </blockquote>
                
                {/* Author Info */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-montserrat font-bold text-2xl text-orc-white">
                      {stories[currentIndex].name}
                    </h3>
                    <p className="font-aileron text-orc-blue font-medium">
                      {stories[currentIndex].title}
                    </p>
                    <p className="font-aileron text-gray-300 text-sm">
                      Age {stories[currentIndex].age} • {stories[currentIndex].team}
                    </p>
                  </div>
                  
                  {/* Achievement Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-orc-blue/20 rounded-full">
                    <span className="font-montserrat font-medium text-orc-blue text-sm">
                      {stories[currentIndex].achievement}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevStory}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-orc-blue/20 backdrop-blur-sm rounded-full flex items-center justify-center text-orc-blue hover:bg-orc-blue hover:text-white transition-all duration-300 z-30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextStory}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-orc-blue/20 backdrop-blur-sm rounded-full flex items-center justify-center text-orc-blue hover:bg-orc-blue hover:text-white transition-all duration-300 z-30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStory(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-orc-blue scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
        
        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
          {stories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => goToStory(index)}
              className={`group relative bg-gray-900/50 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'border-orc-blue scale-105'
                  : 'border-gray-800 hover:border-gray-600'
              }`}
            >
              <div className="aspect-square">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h4 className="font-montserrat font-bold text-white text-sm truncate">
                    {story.name}
                  </h4>
                  <p className="font-aileron text-gray-300 text-xs truncate">
                    {story.title}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories; 