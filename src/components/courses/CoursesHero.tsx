import React from 'react';
import { ArrowRight } from 'lucide-react';

const CoursesHero = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160607-ee22731c2f54?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Start Your Journey in Robotics with ORC
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get hands-on training in embedded systems and combat robotics under professional supervision. Unlock your future in technology with real-world projects and expert mentors.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 text-lg font-medium">
              Enroll Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400"
                alt="Student working on robot"
                className="rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=400"
                alt="Robot assembly"
                className="rounded-lg"
              />
            </div>
            <div className="mt-8 space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=400"
                alt="Programming interface"
                className="rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400"
                alt="Robot testing"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesHero;