import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock, Users, Trophy, Share2, CheckCircle } from 'lucide-react';

// This would typically come from an API or database
const getEvent = (id: string) => {
  const events = {
    '1': {
      id: '1',
      title: 'ORC Championship 2025',
      description: 'The ultimate robot combat championship featuring teams from around the world competing for the £100,000 grand prize.',
      fullDescription: `
        Join us for the most anticipated robotics event of the year! The ORC Championship 2025 brings together the world's best combat robot builders for an epic showdown.

        This year's championship features:
        - 64 teams from 15 countries
        - Multiple weight classes and competition formats
        - Live streaming to global audience
        - Expert commentary and analysis
        - Meet and greet with top builders
        - Technical workshops and demonstrations

        The competition will span three days with qualifying rounds, elimination matches, and the grand finale. Spectators will witness cutting-edge robotics technology in action as teams battle for supremacy and the largest prize pool in combat robotics history.

        Don't miss this incredible celebration of engineering excellence, innovation, and competitive spirit!
      `,
      date: '2025-08-15',
      endDate: '2025-08-17',
      time: '09:00 AM',
      location: 'Berlin, Germany',
      venue: 'Berlin Convention Center',
      address: 'Messedamm 22, 14055 Berlin, Germany',
      type: 'competition',
      status: 'upcoming',
      capacity: 500,
      registered: 342,
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
      organizer: 'ORC Team',
      contact: 'events@openrobotcombat.com',
      website: 'https://openrobotcombat.com',
      schedule: [
        { time: '09:00 AM', activity: 'Registration & Check-in' },
        { time: '10:00 AM', activity: 'Opening Ceremony' },
        { time: '11:00 AM', activity: 'Qualifying Rounds Begin' },
        { time: '01:00 PM', activity: 'Lunch Break' },
        { time: '02:00 PM', activity: 'Elimination Rounds' },
        { time: '05:00 PM', activity: 'Day 1 Wrap-up' }
      ],
      requirements: [
        'Valid ID for entry',
        'Safety equipment provided',
        'No prior experience required',
        'Age restriction: 12+ (under 16 with guardian)'
      ],
      amenities: [
        'Free parking available',
        'Food and beverages on-site',
        'Live streaming setup',
        'Photography allowed',
        'Accessibility accommodations'
      ]
    }
    // Add more events as needed
  };
  
  return events[id as keyof typeof events] || null;
};

const EventDetails = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const event = getEvent(eventId || '');

  if (!event) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Event not found</h2>
          <button
            onClick={() => navigate('/events')}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  const handleRegister = () => {
    setIsRegistered(true);
    // Here you would typically handle the registration logic
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-500/20 text-blue-400';
      case 'ongoing': return 'bg-green-500/20 text-green-400';
      case 'completed': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/events')}
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Events
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}>
                  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {event.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {event.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-6 h-6 mr-3 text-blue-500" />
                  <div>
                    <div className="font-semibold">
                      {new Date(event.date).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-400">Starting at {event.time}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-6 h-6 mr-3 text-blue-500" />
                  <div>
                    <div className="font-semibold">{event.venue}</div>
                    <div className="text-sm text-gray-400">{event.location}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Users className="w-6 h-6 mr-3 text-blue-500" />
                  <div>
                    <div className="font-semibold">{event.registered}/{event.capacity} Registered</div>
                    <div className="text-sm text-gray-400">
                      {event.capacity - event.registered} spots remaining
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Trophy className="w-6 h-6 mr-3 text-blue-500" />
                  <div>
                    <div className="font-semibold">{event.price}</div>
                    <div className="text-sm text-gray-400">Entry fee</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Registration Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{event.price}</div>
                  <div className="text-gray-400">per person</div>
                </div>
                
                {isRegistered ? (
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <div className="text-green-400 font-semibold mb-2">Successfully Registered!</div>
                    <div className="text-gray-400 text-sm">Check your email for confirmation details</div>
                  </div>
                ) : (
                  <button
                    onClick={handleRegister}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold mb-4"
                  >
                    Register Now
                  </button>
                )}
                
                <button className="w-full px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">About This Event</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                {event.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Schedule */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Event Schedule</h2>
              <div className="space-y-4">
                {event.schedule.map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <Clock className="w-5 h-5 text-blue-500 mr-4" />
                    <div className="flex-1">
                      <div className="font-semibold text-white">{item.time}</div>
                      <div className="text-gray-300">{item.activity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Event Info */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Event Information</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-400">Organizer:</span>
                  <span className="text-white ml-2">{event.organizer}</span>
                </div>
                <div>
                  <span className="text-gray-400">Contact:</span>
                  <span className="text-blue-400 ml-2">{event.contact}</span>
                </div>
                <div>
                  <span className="text-gray-400">Address:</span>
                  <span className="text-white ml-2">{event.address}</span>
                </div>
              </div>
            </div>
            
            {/* Requirements */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Requirements</h3>
              <ul className="space-y-2">
                {event.requirements.map((req, index) => (
                  <li key={index} className="flex items-start text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Amenities */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">What's Included</h3>
              <ul className="space-y-2">
                {event.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-start text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;