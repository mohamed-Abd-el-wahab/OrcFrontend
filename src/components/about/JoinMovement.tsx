import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const JoinMovement = () => {
  return (
    <section className="py-20 bg-[#020B1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">JOIN THE MOVEMENT</h2>
        
        <Link
          to="/register"
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-medium"
        >
          Get Started
          <ChevronRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default JoinMovement;