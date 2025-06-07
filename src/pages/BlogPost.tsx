import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Tag, Share2 } from 'lucide-react';

// This would typically come from an API or database
const getBlogPost = (id: string) => {
  const posts = {
    '1': {
      id: '1',
      title: 'The Future of Combat Robotics: Trends and Innovations',
      content: `
        <p>Combat robotics has evolved dramatically over the past decade, transforming from a niche hobby into a sophisticated engineering discipline that pushes the boundaries of technology and innovation. As we look toward the future, several key trends are emerging that will shape the next generation of combat robots.</p>

        <h2>Artificial Intelligence Integration</h2>
        <p>One of the most significant developments in combat robotics is the integration of artificial intelligence and machine learning algorithms. Modern combat robots are beginning to incorporate AI systems that can:</p>
        <ul>
          <li>Analyze opponent behavior patterns in real-time</li>
          <li>Adapt strategies mid-battle based on environmental conditions</li>
          <li>Optimize weapon deployment for maximum effectiveness</li>
          <li>Predict and counter opponent moves</li>
        </ul>

        <h2>Advanced Materials and Manufacturing</h2>
        <p>The materials science revolution is having a profound impact on combat robot design. Engineers are now utilizing:</p>
        <ul>
          <li>Carbon fiber composites for lightweight yet incredibly strong armor</li>
          <li>3D-printed titanium components for complex geometries</li>
          <li>Smart materials that can change properties under different conditions</li>
          <li>Nano-enhanced coatings for improved durability and performance</li>
        </ul>

        <h2>Energy Storage and Power Systems</h2>
        <p>Battery technology advances are enabling longer fight times and more powerful weapon systems. Lithium-polymer batteries with higher energy densities, combined with more efficient motor controllers, are allowing robots to maintain peak performance throughout extended battles.</p>

        <h2>Sensor Technology and Perception</h2>
        <p>Modern combat robots are equipped with sophisticated sensor arrays including:</p>
        <ul>
          <li>High-speed cameras for visual tracking</li>
          <li>LIDAR systems for precise distance measurement</li>
          <li>Accelerometers and gyroscopes for stability control</li>
          <li>Pressure sensors for impact detection</li>
        </ul>

        <h2>The Road Ahead</h2>
        <p>As we move forward, we can expect to see even more revolutionary changes in combat robotics. The convergence of AI, advanced materials, and sophisticated control systems will create robots that are not just more powerful, but more intelligent and adaptable than ever before.</p>

        <p>The future of combat robotics is bright, and competitions like ORC are at the forefront of driving these innovations forward, creating a platform where the best minds in engineering can showcase their creations and push the boundaries of what's possible.</p>
      `,
      author: 'Dr. Sarah Chen',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'Technology',
      tags: ['AI', 'Innovation', 'Combat Robotics'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
    }
    // Add more posts as needed
  };
  
  return posts[id as keyof typeof posts] || null;
};

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = getBlogPost(postId || '');

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Post not found</h2>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </button>
          
          <div className="mb-8">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-300">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2 text-blue-500" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-500" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-500" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                color: '#d1d5db',
                lineHeight: '1.75'
              }}
            />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <Tag className="w-5 h-5 text-blue-500" />
                <span className="text-white font-semibold">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Share */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">Share this article:</span>
                <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Author Info */}
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{post.author}</div>
                    <div className="text-sm text-gray-400">Robotics Expert</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Leading researcher in combat robotics with over 10 years of experience in AI and autonomous systems.
                </p>
              </div>
              
              {/* Related Articles */}
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Related Articles</h3>
                <div className="space-y-4">
                  <a href="#" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    Building Your First Combat Robot
                  </a>
                  <a href="#" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    Advanced Weapon Systems Guide
                  </a>
                  <a href="#" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    Safety in Robot Combat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;