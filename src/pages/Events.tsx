import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Trophy, ChevronRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  type: 'competition' | 'workshop' | 'expo' | 'webinar';
  status: 'upcoming' | 'ongoing' | 'completed';
  capacity: number;
  registered: number;
  price: string;
  image: string;
  featured: boolean;
  tags: string[];
  organizer: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'ORC Championship 2025',
    description: 'The ultimate robot combat championship featuring teams from around the world competing for the £100,000 grand prize.',
    date: '2025-08-15',
    time: '09:00 AM',
    location: 'Berlin, Germany',
    venue: 'Berlin Convention Center',
    type: 'competition',
    status: 'upcoming',
    capacity: 500,
    registered: 342,
    price: 'Free',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    featured: true,
    tags: ['Championship', 'Prize Money', 'International'],
    organizer: 'ORC Team'
  },
  {
    id: '2',
    title: 'Advanced Robotics Workshop',
    description: 'Hands-on workshop covering advanced robotics concepts, AI integration, and combat strategies.',
    date: '2025-06-20',
    time: '10:00 AM',
    location: 'London, UK',
    venue: 'Imperial College London',
    type: 'workshop',
    status: 'upcoming',
    capacity: 50,
    registered: 38,
    price: '£150',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
    featured: false,
    tags: ['Workshop', 'AI', 'Hands-on'],
    organizer: 'ORC Education'
  },
  {
    id: '3',
    title: 'Robotics Tech Expo 2025',
    description: 'Showcase of the latest robotics technology, innovations, and industry trends.',
    date: '2025-07-10',
    time: '09:00 AM',
    location: 'Paris, France',
    venue: 'Paris Expo Porte de Versailles',
    type: 'expo',
    status: 'upcoming',
    capacity: 1000,
    registered: 756,
    price: '€75',
    image: 'https://images.unsplash.com/photo-1573164574472-797cdf4a583a?auto=format&fit=crop&q=80&w=800',
    featured: true,
    tags: ['Technology', 'Innovation', 'Industry'],
    organizer: 'Tech Expo International'
  },
  {
    id: '4',
    title: 'Beginner Robot Building Workshop',
    description: 'Perfect for newcomers to robotics. Learn the basics of robot construction and programming.',
    date: '2025-05-15',
    time: '02:00 PM',
    location: 'Manchester, UK',
    venue: 'University of Manchester',
    type: 'workshop',
    status: 'upcoming',
    capacity: 30,
    registered: 25,
    price: '£75',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800',
    featured: false,
    tags: ['Beginner', 'Workshop', 'Programming'],
    organizer: 'ORC Education'
  },
  {
    id: '5',
    title: 'Combat Robotics Webinar Series',
    description: 'Monthly online sessions covering various aspects of combat robotics design and strategy.',
    date: '2025-04-25',
    time: '07:00 PM',
    location: 'Online',
    venue: 'Virtual Event',
    type: 'webinar',
    status: 'upcoming',
    capacity: 500,
    registered: 234,
    price: 'Free',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800',
    featured: false,
    tags: ['Online', 'Strategy', 'Design'],
    organizer: 'ORC Community'
  },
  {
    id: '6',
    title: 'Regional Qualifier - Northern Europe',
    description: 'Regional qualifying event for teams from Northern European countries.',
    date: '2025-06-05',
    time: '10:00 AM',
    location: 'Stockholm, Sweden',
    venue: 'Stockholm International Fairs',
    type: 'competition',
    status: 'upcoming',
    capacity: 200,
    registered: 156,
    price: 'Free',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    featured: false,
    tags: ['Qualifier', 'Regional', 'Competition'],
    organizer: 'ORC Europe'
  }
];

const eventTypes = ['All', 'Competition', 'Workshop', 'Expo', 'Webinar'];
const eventStatuses = ['All', 'Upcoming', 'Ongoing', 'Completed'];

const Events = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredEvents = events.filter(event => {
    const matchesType = selectedType === 'All' || event.type === selectedType.toLowerCase();
    const matchesStatus = selectedStatus === 'All' || event.status === selectedStatus.toLowerCase();
    return matchesType && matchesStatus;
  });

  const featuredEvents = filteredEvents.filter(event => event.featured);
  const regularEvents = filteredEvents.filter(event => !event.featured);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-500/20 text-blue-400';
      case 'ongoing': return 'bg-green-500/20 text-green-400';
      case 'completed': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'competition': return <Trophy className="w-4 h-4" />;
      case 'workshop': return <Users className="w-4 h-4" />;
      case 'expo': return <MapPin className="w-4 h-4" />;
      case 'webinar': return <Calendar className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Events & Competitions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for exciting robotics events, competitions, and learning opportunities
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </button>
            
            <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
              <div className="flex flex-col md:flex-row gap-4">
                {/* Type Filter */}
                <div className="flex flex-wrap gap-2">
                  {eventTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedType === type
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                
                {/* Status Filter */}
                <div className="flex flex-wrap gap-2">
                  {eventStatuses.map((status) => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedStatus === status
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-bold text-white mb-8">Featured Events</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event) => (
                <div
                  key={event.id}
                  className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}>
                        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium flex items-center">
                        {getTypeIcon(event.type)}
                        <span className="ml-1">{event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-gray-300 mb-4 line-clamp-2">{event.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-3 text-blue-500" />
                        <span>{new Date(event.date).toLocaleDateString()} at {event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="w-4 h-4 mr-3 text-blue-500" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Users className="w-4 h-4 mr-3 text-blue-500" />
                        <span>{event.registered}/{event.capacity} registered</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-blue-400">{event.price}</span>
                      <Link
                        to={`/events/${event.id}`}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
                      >
                        Learn More
                        <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium flex items-center">
                    {getTypeIcon(event.type)}
                    <span className="ml-1">{event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {event.title}
                </h4>
                <p className="text-gray-300 mb-4 line-clamp-2">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-3 h-3 mr-2 text-blue-500" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="w-3 h-3 mr-2 text-blue-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-blue-400">{event.price}</span>
                  <Link
                    to={`/events/${event.id}`}
                    className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm group"
                  >
                    Details
                    <ChevronRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-white mb-2">No events found</h3>
            <p className="text-gray-400">Try adjusting your filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;