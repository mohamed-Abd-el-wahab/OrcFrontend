import React from 'react';
import { Calendar, ChevronRight, Clock } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "ORC 2025 Championship Announces Record Prize Pool",
    excerpt: "The upcoming Open Robot Combat championship will feature the largest prize pool in competitive robotics history, with over $100,000 in total rewards.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    date: "2024-12-15",
    readTime: "3 min read",
    category: "Competition",
    featured: true
  },
  {
    id: 2,
    title: "New AI-Powered Robotics Course Launches",
    excerpt: "Introducing our latest course combining artificial intelligence with practical robotics applications, taught by industry experts from leading tech companies.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
    date: "2024-12-10",
    readTime: "5 min read",
    category: "Education",
    featured: false
  },
  {
    id: 3,
    title: "Student Team Wins International Robotics Competition",
    excerpt: "ORC alumni team takes first place at the World Robotics Championship, showcasing skills learned in our advanced combat robotics program.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22731c2f54?auto=format&fit=crop&q=80&w=800",
    date: "2024-12-05",
    readTime: "4 min read",
    category: "Success Story",
    featured: false
  }
];

const LatestNews = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Competition': return 'bg-red-500/20 text-red-400';
      case 'Education': return 'bg-blue-500/20 text-blue-400';
      case 'Success Story': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(59,130,246,0.1),transparent_50%)]"></div>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full animate-float"
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
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full mb-4">
            Latest Updates
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            News & Updates
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest developments in robotics education and competitions
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className={`group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 ${
                item.featured && index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm font-bold rounded-full">
                    FEATURED
                  </span>
                </div>
              )}

              {/* News Image */}
              <div className={`relative overflow-hidden ${item.featured && index === 0 ? 'aspect-video' : 'aspect-video'}`}>
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className={`p-6 ${item.featured && index === 0 ? 'lg:p-8' : ''}`}>
                {/* Date and Read Time */}
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{formatDate(item.date)}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{item.readTime}</span>
                </div>

                {/* Title */}
                <h3 className={`font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2 ${
                  item.featured && index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                }`}>
                  {item.title}
                </h3>
                
                {/* Excerpt */}
                <p className={`text-gray-400 mb-6 line-clamp-3 ${
                  item.featured && index === 0 ? 'text-lg' : ''
                }`}>
                  {item.excerpt}
                </p>

                {/* Read More Link */}
                <button className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium group">
                  Read More
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All News Link */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold">
            View All News
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;