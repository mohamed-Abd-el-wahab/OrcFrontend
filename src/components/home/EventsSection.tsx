import React, { useState } from 'react';
import { Calendar, MapPin, ChevronRight, Sparkles, Trophy, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import events data from the Events page
const eventsData = [
  {
    id: '1',
    title: 'ORC Championship 2025',
    date: '2025-08-15',
    location: 'Berlin, Germany',
    type: 'competition',
    description: 'The ultimate robot combat championship featuring teams from around the world competing for the £100,000 grand prize.',
    registrationLink: '/register',
    featured: true
  },
  {
    id: '2',
    title: 'Advanced Robotics Workshop',
    date: '2025-06-20',
    location: 'London, UK',
    type: 'workshop',
    description: 'Hands-on workshop covering advanced robotics concepts, AI integration, and combat strategies.',
    registrationLink: '/courses',
    featured: false
  },
  {
    id: '3',
    title: 'Robotics Tech Expo 2025',
    date: '2025-07-10',
    location: 'Paris, France',
    type: 'expo',
    description: 'Showcase of the latest robotics technology, innovations, and industry trends.',
    registrationLink: '/contact',
    featured: true
  },
  {
    id: '4',
    title: 'Beginner Robot Building Workshop',
    date: '2025-05-15',
    location: 'Manchester, UK',
    type: 'workshop',
    description: 'Perfect for newcomers to robotics. Learn the basics of robot construction and programming.',
    registrationLink: '/courses',
    featured: false
  },
  {
    id: '5',
    title: 'Combat Robotics Webinar Series',
    date: '2025-04-25',
    location: 'Online',
    type: 'webinar',
    description: 'Monthly online sessions covering various aspects of combat robotics design and strategy.',
    registrationLink: '/contact',
    featured: false
  },
  {
    id: '6',
    title: 'Regional Qualifier - Northern Europe',
    date: '2025-06-05',
    location: 'Stockholm, Sweden',
    type: 'competition',
    description: 'Regional qualifying event for teams from Northern European countries.',
    registrationLink: '/register',
    featured: false
  }
];

// Blog posts data
const blogPostsData = [
  {
    id: '1',
    title: 'The Future of Combat Robotics: Trends and Innovations',
    date: '2024-12-15',
    category: 'Technology',
    description: 'Explore the cutting-edge technologies shaping the next generation of combat robots, from AI-driven strategies to advanced materials.',
    featured: true
  },
  {
    id: '2',
    title: 'Building Your First Combat Robot: A Complete Guide',
    date: '2024-12-10',
    category: 'Tutorial',
    description: 'Step-by-step guide for beginners entering the world of robot combat, covering design principles, materials, and safety considerations.',
    featured: false
  },
  {
    id: '3',
    title: 'ORC Championship 2024: Highlights and Winner Analysis',
    date: '2024-12-05',
    category: 'Competition',
    description: 'Recap of the most exciting moments from this year\'s championship and detailed analysis of winning strategies.',
    featured: true
  }
];

const EventsSection = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'competition' | 'workshop' | 'expo' | 'webinar' | 'blog'>('all');

  // Combine events and blog posts
  const allContent = [
    ...eventsData.map(event => ({ ...event, contentType: 'event' as const })),
    ...blogPostsData.map(post => ({ ...post, contentType: 'blog' as const }))
  ];

  // Filter content based on active filter
  const filteredContent = activeFilter === 'all' 
    ? allContent.filter(item => item.featured || item.contentType === 'event')
    : activeFilter === 'blog'
    ? allContent.filter(item => item.contentType === 'blog')
    : allContent.filter(item => item.contentType === 'event' && item.type === activeFilter);

  // Sort by date (newest first)
  const sortedContent = filteredContent.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const getFilterLabel = (filter: string) => {
    switch (filter) {
      case 'all': return 'All Content';
      case 'competition': return 'Competitions';
      case 'workshop': return 'Workshops';
      case 'expo': return 'Expos';
      case 'webinar': return 'Webinars';
      case 'blog': return 'Blog Posts';
      default: return filter;
    }
  };

  const getContentLink = (item: any) => {
    if (item.contentType === 'blog') {
      return `/blog/${item.id}`;
    } else {
      return `/events/${item.id}`;
    }
  };

  const getActionText = (item: any) => {
    if (item.contentType === 'blog') {
      return 'Read More';
    } else {
      return 'Learn More';
    }
  };

  const getTypeIcon = (item: any) => {
    if (item.contentType === 'blog') {
      return <BookOpen className="w-4 h-4" />;
    } else {
      return <Trophy className="w-4 h-4" />;
    }
  };

  const getTypeColor = (item: any) => {
    if (item.contentType === 'blog') {
      return 'from-purple-500/20 to-pink-500/20';
    } else {
      switch (item.type) {
        case 'competition': return 'from-yellow-500/20 to-orange-500/20';
        case 'workshop': return 'from-green-500/20 to-emerald-500/20';
        case 'expo': return 'from-blue-500/20 to-cyan-500/20';
        default: return 'from-gray-500/20 to-gray-600/20';
      }
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1),transparent_50%)]"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.3
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center space-x-2 mb-8">
            <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <span className="text-blue-400 text-sm font-medium px-4 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
              Latest Updates
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-blue-500 via-blue-500 to-transparent"></div>
            <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
            Upcoming Events & Latest Updates
          </h2>
          
          {/* Enhanced Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {['all', 'competition', 'workshop', 'expo', 'webinar', 'blog'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 border ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border-gray-700 hover:border-gray-600'
                }`}
              >
                {getFilterLabel(filter)}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Content Grid - Limited to 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sortedContent.slice(0, 3).map((item, index) => (
            <div
              key={`${item.contentType}-${item.id}`}
              className="group relative"
            >
              {/* Animated background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(item)} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>
              
              {/* Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 group-hover:border-gray-600 transition-all duration-500 overflow-hidden h-full flex flex-col">
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getTypeColor(item)} flex items-center justify-center border border-white/10`}>
                        {getTypeIcon(item)}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.contentType === 'blog' 
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          : item.type === 'competition'
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          : item.type === 'workshop'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : item.type === 'expo'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {item.contentType === 'blog' ? item.category : item.type?.charAt(0).toUpperCase() + item.type?.slice(1)}
                      </span>
                    </div>
                    {item.featured && (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="p-6 pt-0 mt-auto">
                  {/* Meta Information */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 text-blue-500 mr-3" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    {item.location && (
                      <div className="flex items-center text-gray-400">
                        <MapPin className="w-4 h-4 text-blue-500 mr-3" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <Link
                    to={getContentLink(item)}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold group/btn transform hover:-translate-y-0.5"
                  >
                    <span className="relative z-10">{getActionText(item)}</span>
                    <ChevronRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced View All Links */}
        <div className="text-center flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/events"
            className="group relative overflow-hidden inline-flex items-center px-10 py-5 bg-transparent border-2 border-blue-500 text-blue-400 rounded-xl hover:bg-blue-500/10 transition-all duration-500 text-lg font-semibold transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center">
              <Trophy className="w-5 h-5 mr-3" />
              View All Events
              <ChevronRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
          
          <Link
            to="/blog"
            className="group relative overflow-hidden inline-flex items-center px-10 py-5 bg-transparent border-2 border-purple-500 text-purple-400 rounded-xl hover:bg-purple-500/10 transition-all duration-500 text-lg font-semibold transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center">
              <BookOpen className="w-5 h-5 mr-3" />
              Read Our Blog
              <ChevronRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;