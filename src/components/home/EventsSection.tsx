import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Workshops', 'Competitions', 'Webinars'];

  const events = [
    {
      id: 1,
      title: "Combat Robotics Workshop",
      description: "Learn the fundamentals of combat robot design and construction with hands-on building sessions.",
      date: "2024-02-15",
      time: "2:00 PM",
      location: "ORC Labs, Cairo",
      category: "Workshops",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      attendees: 24,
      maxAttendees: 30,
      featured: true
    },
    {
      id: 2,
      title: "International Robot Battle",
      description: "Annual competition featuring the best combat robots from across the MENA region.",
      date: "2024-03-10",
      time: "10:00 AM",
      location: "Cairo Conference Center",
      category: "Competitions",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
      attendees: 156,
      maxAttendees: 200,
      featured: true
    },
    {
      id: 3,
      title: "AI in Robotics Webinar",
      description: "Exploring the latest advances in artificial intelligence applications for robotics.",
      date: "2024-02-28",
      time: "7:00 PM",
      location: "Online",
      category: "Webinars",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800",
      attendees: 89,
      maxAttendees: 100,
      featured: false
    }
  ];

  const filteredEvents = activeFilter === 'All' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  return (
    <section className="relative bg-orc-black overflow-hidden py-16 md:py-20">
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="events-diagonal-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#events-diagonal-arrows)"/>
        </svg>
      </div>

      <div className="brand-container relative z-20 px-4 lg:px-8">
        <div className="text-center space-y-6 mb-12">
          <h2 className="font-montserrat font-extrabold text-4xl lg:text-5xl leading-tight text-orc-white">
            Upcoming <span className="text-orc-blue">Events</span>
          </h2>
          <p className="font-aileron text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto">
            Join workshops, competitions, and webinars that push the boundaries of robotics innovation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-orc-blue text-orc-white shadow-lg shadow-orc-blue/25'
                  : 'bg-gray-900/50 text-gray-300 border border-gray-800 hover:border-orc-blue/50 hover:text-orc-blue'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div 
              key={event.id}
              className="group relative bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-orc-blue/60 hover:bg-gray-900/80 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-orc-blue/10"
            >
              {/* Blue Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orc-blue/20 to-blue-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Brand Accent Dot */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-orc-blue rounded-full z-20"></div>
              
              {/* Featured Badge */}
              {event.featured && (
                <div className="absolute top-3 left-3 px-2 py-1 bg-orc-blue text-white text-xs font-medium rounded-md backdrop-blur-sm z-20">
                  Featured
                </div>
              )}
              
              <div className="relative">
                {/* Event Image */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-orc-blue/90 text-white text-xs font-medium rounded-lg backdrop-blur-sm">
                    {event.category}
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-5 space-y-4">
                  {/* Title */}
                  <h3 className="font-montserrat font-bold text-lg text-orc-white group-hover:text-orc-blue transition-colors duration-300 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-aileron text-gray-300 text-sm leading-relaxed line-clamp-2">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar className="w-4 h-4 text-orc-blue flex-shrink-0" />
                      <span className="font-aileron text-sm">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Clock className="w-4 h-4 text-orc-blue flex-shrink-0" />
                      <span className="font-aileron text-sm">{event.time}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-400">
                      <MapPin className="w-4 h-4 text-orc-blue flex-shrink-0" />
                      <span className="font-aileron text-sm truncate">{event.location}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Users className="w-4 h-4 text-orc-blue flex-shrink-0" />
                      <span className="font-aileron text-sm">
                        {event.attendees}/{event.maxAttendees} attending
                      </span>
                    </div>
                  </div>



                  {/* CTA */}
                  <button className="w-full bg-gray-800/50 border border-gray-700 text-gray-300 font-medium rounded-lg hover:bg-orc-blue hover:border-orc-blue hover:text-white transition-all duration-300 group/cta py-3 px-4">
                    <span className="inline-flex items-center justify-center">
                      Register Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-12">
          <Link
            to="/events"
            className="btn-brand-primary inline-flex items-center justify-center px-8 py-4 bg-orc-blue text-orc-white font-medium rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-orc-blue/25 transition-all duration-300 group"
          >
            View All Events
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;