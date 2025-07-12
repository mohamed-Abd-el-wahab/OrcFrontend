import React, { useState } from 'react';
import { X, Play, Users, Calendar, Award } from 'lucide-react';

const CommunityInAction = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      type: 'image',
      src: '/community.png',
      alt: 'Campus roadshow at Cairo University',
      title: 'Campus Roadshow',
      description: 'Inspiring students across Egyptian universities',
      category: 'Education',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      type: 'image',
      src: '/rover.jpg',
      alt: 'Students building RIO robot',
      title: 'RIO Building Session',
      description: 'Hands-on robotics construction workshop',
      category: 'Workshop',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      type: 'image',
      src: '/rover2.jpg',
      alt: 'ROVER robot demonstration',
      title: 'ROVER Demo Day',
      description: 'Advanced robotics showcase and testing',
      category: 'Demo',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      type: 'image',
      src: '/rio.jpg',
      alt: 'Creativa-hub hackathon',
      title: 'Creativa-hub Hackathon',
      description: '48-hour robotics innovation challenge',
      category: 'Competition',
      aspectRatio: 'aspect-[16/9]'
    },
    {
      type: 'image',
      src: '/rover3.jpg',
      alt: 'Makers building robots',
      title: 'Maker Space',
      description: 'Community members collaborating on projects',
      category: 'Community',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      type: 'image',
      src: '/rio2.png',
      alt: 'Technical workshop session',
      title: 'Technical Workshop',
      description: 'Advanced programming and electronics training',
      category: 'Workshop',
      aspectRatio: 'aspect-[4/3]'
    }
  ];

  const categories = ['All', 'Education', 'Workshop', 'Demo', 'Competition', 'Community'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="relative bg-orc-black overflow-hidden py-20 md:py-24">
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="community-action-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#community-action-arrows)"/>
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
            Community in{' '}
            <span className="text-orc-blue">Action</span>
          </h2>
          
          <p className="font-aileron text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            See our vibrant community building the future of robotics across Egypt and beyond.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-montserrat font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-orc-blue text-white shadow-lg shadow-orc-blue/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative break-inside-avoid cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-900/50">
                {/* RGB Hover Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-green-500/20 to-blue-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Brand Accent Dot */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full z-20"></div>
                
                {/* Image */}
                <div className={`relative ${item.aspectRatio} overflow-hidden`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="px-3 py-1 bg-orc-blue/20 text-orc-blue text-xs font-medium rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="font-montserrat font-bold text-white text-lg">
                          {item.title}
                        </h3>
                        <p className="font-aileron text-gray-300 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, number: "2000+", label: "Community Members" },
              { icon: Calendar, number: "150+", label: "Events Hosted" },
              { icon: Award, number: "50+", label: "Awards Won" },
              { icon: Play, number: "300+", label: "Projects Completed" }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-12 h-12 bg-orc-blue/20 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="w-6 h-6 text-orc-blue" />
                </div>
                <div className="font-montserrat font-extrabold text-2xl md:text-3xl text-orc-blue">
                  {stat.number}
                </div>
                <div className="font-aileron text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-orc-blue transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative">
              <img
                src={filteredItems[selectedImage].src}
                alt={filteredItems[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-orc-blue/20 text-orc-blue text-xs font-medium rounded-full">
                      {filteredItems[selectedImage].category}
                    </span>
                  </div>
                  <h3 className="font-montserrat font-bold text-white text-xl">
                    {filteredItems[selectedImage].title}
                  </h3>
                  <p className="font-aileron text-gray-300">
                    {filteredItems[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CommunityInAction; 