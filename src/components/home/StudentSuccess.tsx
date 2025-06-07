import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    course: "Introduction to Robotics",
    outcome: "Landed a robotics engineer position at Tesla",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    testimonial: "The course completely transformed my understanding of robotics. The hands-on projects and expert guidance helped me transition from a complete beginner to landing my dream job at Tesla. The practical approach made complex concepts easy to grasp.",
    category: "Career Change",
    timeframe: "6 months after completion"
  },
  {
    id: 2,
    name: "Marcus Chen",
    course: "Combat Robotics Masterclass",
    outcome: "Won 1st place in National Robot Combat Championship",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    testimonial: "This masterclass gave me the competitive edge I needed. The advanced strategies and weapon system designs taught in the course directly contributed to my championship win. Prof. Torres is an incredible mentor.",
    category: "Competition Success",
    timeframe: "3 months after completion"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    course: "Embedded Systems Bootcamp",
    outcome: "Launched successful robotics startup valued at $2M",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    testimonial: "The embedded systems knowledge I gained was instrumental in developing our flagship product. The course's focus on real-world applications and industry best practices gave me the confidence to start my own company.",
    category: "Entrepreneurship",
    timeframe: "1 year after completion"
  }
];

const StudentSuccess = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(59,130,246,0.1),transparent_50%)]"></div>
        {[...Array(25)].map((_, i) => (
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
          <span className="inline-block px-4 py-1 bg-green-500/10 text-green-400 text-sm font-medium rounded-full mb-4">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real achievements from our students who transformed their careers through our courses
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="w-12 h-12 text-blue-500" />
              </div>

              {/* Student Photo & Info */}
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/30"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                  <p className="text-blue-400 text-sm font-medium">{testimonial.course}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-600'
                    }`}
                  />
                ))}
                <span className="text-gray-400 text-sm ml-2">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.testimonial}"
              </blockquote>

              {/* Outcome Highlight */}
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 mb-4">
                <h4 className="text-white font-semibold mb-1">Achievement:</h4>
                <p className="text-green-400 font-medium">{testimonial.outcome}</p>
                <p className="text-gray-400 text-sm mt-1">{testimonial.timeframe}</p>
              </div>

              {/* Category Badge */}
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                  {testimonial.category}
                </span>
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
            <div className="text-gray-300">Job Placement Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">$75K</div>
            <div className="text-gray-300">Average Salary Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">4.9/5</div>
            <div className="text-gray-300">Student Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSuccess;