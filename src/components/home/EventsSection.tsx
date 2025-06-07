import React, { useState } from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
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
    title: 'ORC Advanced Robotics Workshop',
    date: '2025-06-20',
    location: 'London, UK',
    type: 'workshop',
    description: 'Hands-on workshop covering advanced robotics concepts, AI integration, and combat strategies for ORC competitors.',
    registrationLink: '/courses',
    featured: false
  },
  {
    id: '3',
    title: 'ORC Robotics Tech Expo 2025',
    date: '2025-07-10',
    location: 'Paris, France',
    type: 'expo',
    description: 'Showcase of the latest robotics technology, innovations, and industry trends in combat robotics.',
    registrationLink: '/contact',
    featured: true
  },
  {
    id: '4',
    title: 'ORC Beginner Robot Building Workshop',
    date: '2025-05-15',
    location: 'Manchester, UK',
    type: 'workshop',
    description: 'Perfect for newcomers to ORC. Learn the basics of combat robot construction and programming.',
    registrationLink: '/courses',
    featured: false
  },
  {
    id: '5',
    title: 'ORC Combat Robotics Webinar Series',
    date: '2025-04-25',
    location: 'Online',
    type: 'webinar',
    description: 'Monthly online sessions covering various aspects of ORC combat robotics design and strategy.',
    registrationLink: '/contact',
    featured: false
  },
  {
    id: '6',
    title: 'ORC Regional Qualifier - Northern Europe',
    date: '2025-06-05',
    location: 'Stockholm, Sweden',
    type: 'competition',
    description: 'Regional qualifying event for ORC teams from Northern European countries.',
    registrationLink: '/register',
    featured: false
  }
];

// Blog posts data
const blogPostsData = [
  {
    id: '1',
    title: 'The Future of ORC Combat Robotics: Trends and Innovations',
    date: '2024-12-15',
    category: 'Technology',
    description: 'Explore the cutting-edge technologies shaping the next generation of ORC combat robots, from AI-driven strategies to advanced materials.',
    featured: true
  },
  {
    id: '2',
    title: 'Building Your First ORC Combat Robot: A Complete Guide',
    date: '2024-12-10',
    category: 'Tutorial',
    description: 'Step-by-step guide for beginners entering the world of ORC robot combat, covering design principles, materials, and safety considerations.',
    featured: false
  },
  {
    id: '3',
    title: 'ORC Championship 2024: Highlights and Winner Analysis',
    date: '2024-12-05',
    category: 'Competition',
    description: 'Recap of the most exciting moments from this year\'s ORC championship and detailed analysis of winning strategies.',
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
      case 'competition': return 'ORC Competitions';
      case 'workshop': return 'ORC Workshops';
      case 'expo': return 'ORC Expos';
      case 'webinar': return 'ORC Webinars';
      case 'blog': return 'ORC Blog Posts';
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

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ORC Events & Latest Updates
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest Open Robot Combat events, competitions, and insights from the world of combat robotics
          </p>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {['all', 'competition', 'workshop', 'expo', 'webinar', 'blog'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {getFilterLabel(filter)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid - Limited to 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedContent.slice(0, 3).map((item) => (
            <div
              key={`${item.contentType}-${item.id}`}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              {/* Content Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.contentType === 'blog' 
                    ? 'bg-purple-500/20 text-purple-400'
                    : item.type === 'competition'
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : item.type === 'workshop'
                    ? 'bg-green-500/20 text-green-400'
                    : item.type === 'expo'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {item.contentType === 'blog' ? item.category : item.type?.charAt(0).toUpperCase() + item.type?.slice(1)}
                </span>
                {item.featured && (
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                {item.description}
              </p>

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
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold group"
              >
                {getActionText(item)}
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Links */}
        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/events"
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all duration-300 text-lg font-semibold group"
          >
            View All ORC Events
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-300 text-lg font-semibold group"
          >
            Read ORC Blog
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;