import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Target, Brain, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Lazy-loaded components
const About = lazy(() => import('../components/home/About'));
const Services = lazy(() => import('../components/home/Services'));
const Benefits = lazy(() => import('../components/home/Benefits'));
const Newsletter = lazy(() => import('../components/home/Newsletter'));

const Home = () => {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover opacity-30"
          >
            <source
              src="https://neura-robotics.com/wp-content/uploads/2024/09/website-landing_1.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              The Future of Combat Robotics
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join the revolution in competitive robotics where innovation meets survival
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/register"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
                >
                  Register Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
              
              <Link
                to="/competition"
                className="inline-flex items-center px-8 py-4 border border-blue-500/50 text-white rounded-lg hover:bg-blue-500/10 transition-all duration-300"
              >
                Learn More
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent rounded-2xl blur-xl group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <Shield className="w-12 h-12 text-blue-500 mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">Advanced Safety</h3>
                <p className="text-gray-300">
                  State-of-the-art safety systems and protocols ensuring secure competition environment
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent rounded-2xl blur-xl group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <Target className="w-12 h-12 text-blue-500 mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">Strategic Combat</h3>
                <p className="text-gray-300">
                  Complex battle scenarios testing both engineering prowess and tactical thinking
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent rounded-2xl blur-xl group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <Brain className="w-12 h-12 text-blue-500 mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">Innovation Hub</h3>
                <p className="text-gray-300">
                  Platform for showcasing cutting-edge robotics technology and engineering solutions
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Teams Registered" },
              { number: "£100K", label: "Prize Pool" },
              { number: "50+", label: "Countries" },
              { number: "1M+", label: "Viewers" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">{stat.number}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lazy-loaded sections */}
      <Suspense fallback={<div className="h-96 bg-black" />}>
        <About />
        <Services />
        <Benefits />
        <Newsletter />
      </Suspense>
    </div>
  );
};

export default Home;