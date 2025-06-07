import React, { useState } from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: 'competition' | 'workshop' | 'expo';
  description: string;
  registrationLink: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'ORC Championship 2025',
    date: '8/15/2025',
    location: 'Berlin, Germany',
    type: 'competition',
    description: 'The ultimate robot combat championship with £100,000 prize pool',
    registrationLink: '/register'
  },
  {
    id: '2',
    title: 'Robotics Workshop',
    date: '6/20/2025',
    location: 'London, UK',
    type: 'workshop',
    description: 'Hands-on robotics workshop for beginners and advanced builders',
    registrationLink: '/courses'
  },
  {
    id: '3',
    title: 'Tech Expo',
    date: '7/10/2025',
    location: 'Paris, France',
    type: 'expo',
    description: 'Showcase of the latest robotics technology and innovations',
    registrationLink: '/contact'
  }
];

const EventsSection = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'competition' | 'workshop' | 'expo'>('all');

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.type === activeFilter);

  const getFilterLabel = (filter: string) => {
    switch (filter) {
      case 'all': return 'All Events';
      case 'competition': return 'Competitions';
      case 'workshop': return 'Workshops';
      case 'expo': return 'Expos';
      default: return filter;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Upcoming Events & Competitions
          </h2>
          
          {/* Filter Tabs */}
          <div className="flex justify-center space-x-2">
            {['all', 'competition', 'workshop', 'expo'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-green-500 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {getFilterLabel(filter)}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 group"
            >
              {/* Event Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                {event.title}
              </h3>

              {/* Event Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-5 h-5 text-green-500 mr-3" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 text-green-500 mr-3" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {event.description}
              </p>

              {/* Register Button */}
              <Link
                to={event.registrationLink}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-all duration-300 font-semibold group"
              >
                Register Now
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Events Link */}
        <div className="text-center mt-12">
          <Link
            to="/competition"
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-green-500 text-green-400 rounded-lg hover:bg-green-500/10 transition-all duration-300 text-lg font-semibold group"
          >
            View All Events
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;