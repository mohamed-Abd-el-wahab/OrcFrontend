import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Users, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    id: 'intro-robotics',
    title: "Introduction to Robotics",
    description: "Perfect starting point for beginners. Learn fundamental concepts, basic electronics, and programming.",
    instructor: "Dr. Sarah Chen",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
    duration: "6 weeks",
    students: 1250,
    rating: 4.8,
    level: "Beginner"
  },
  {
    id: 'combat-robotics',
    title: "Combat Robotics Masterclass",
    description: "Advanced course covering combat robot design, weapon systems, and competition strategies.",
    instructor: "Prof. Michael Torres",
    price: 599,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1581092160607-ee22731c2f54?auto=format&fit=crop&q=80&w=800",
    duration: "12 weeks",
    students: 890,
    rating: 4.9,
    level: "Advanced"
  },
  {
    id: 'embedded-systems',
    title: "Embedded Systems Bootcamp",
    description: "Comprehensive training in embedded systems programming and hardware integration.",
    instructor: "Dr. Alex Kumar",
    price: 449,
    originalPrice: 599,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800",
    duration: "8 weeks",
    students: 675,
    rating: 4.7,
    level: "Intermediate"
  },
  {
    id: 'ai-robotics',
    title: "AI in Robotics",
    description: "Explore machine learning and artificial intelligence applications in modern robotics.",
    instructor: "Dr. Emma Rodriguez",
    price: 699,
    originalPrice: 899,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    duration: "10 weeks",
    students: 520,
    rating: 4.9,
    level: "Advanced"
  }
];

const FeaturedCourses = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const handleEnrollNow = (courseId: string) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
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
            Featured Learning
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest Courses
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master cutting-edge robotics skills with our expert-led courses
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Course Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Level Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    {course.level}
                  </span>
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-red-500/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center text-gray-300 text-sm mb-4">
                  <span className="font-medium">{course.instructor}</span>
                </div>

                {/* Course Stats */}
                <div className="flex items-center justify-between text-gray-400 text-sm mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-blue-400">${course.price}</span>
                    <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => handleEnrollNow(course.id)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 font-semibold transform hover:scale-105"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {courses.map((course) => (
                <div key={course.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700">
                    <div className="relative aspect-video">
                      <img 
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                          {course.level}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                      <p className="text-gray-400 mb-4">{course.description}</p>
                      
                      <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                        <span>{course.instructor}</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                          <span>{course.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-blue-400">${course.price}</span>
                          <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                        </div>
                      </div>

                      <button 
                        onClick={() => handleEnrollNow(course.id)}
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 font-semibold"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {courses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Courses Link */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/courses')}
            className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold"
          >
            View All Courses
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;