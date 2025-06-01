import React from 'react';
import { Clock, ChevronRight, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    id: 'intro-robotics',
    title: "Introduction to Robotics",
    description: "Perfect starting point for beginners. Learn fundamental concepts, basic electronics, and programming.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
    duration: "4 Weeks",
    level: "Beginner",
    sessions: 12,
    rating: 4.8
  },
  {
    id: 'combat-robotics',
    title: "Combat Robotics Masterclass",
    description: "Advanced course covering combat robot design, weapon systems, and competition strategies.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
    duration: "8 Weeks",
    level: "Advanced",
    sessions: 24,
    rating: 4.9
  },
  {
    id: 'embedded-systems',
    title: "Embedded Systems Bootcamp",
    description: "Comprehensive training in embedded systems programming and hardware integration.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800",
    duration: "6 Weeks",
    level: "Intermediate",
    sessions: 18,
    rating: 4.7
  }
];

const CoursesList = () => {
  const navigate = useNavigate();

  const handleLearnMore = (courseId: string) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Explore Our Robotics Courses
        </h2>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Course Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                
                {/* Level Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    {course.level}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-300 text-sm">
                    <Clock className="w-4 h-4 text-blue-400 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <BookOpen className="w-4 h-4 text-blue-400 mr-2" />
                    <span>{course.sessions} Sessions</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-gray-700">
                  <button 
                    onClick={() => handleLearnMore(course.id)}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 group"
                  >
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;