import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Play, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { number: "8000+", label: "builders" },
    { number: "25", label: "global events" },
    { number: "120k", label: "YouTube subs" }
  ];

  const products = [
    {
      title: "MAV",
      description: "Advanced autonomous vehicle for research and exploration",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      link: "/products/mav"
    },
    {
      title: "ROVER",
      description: "Versatile mobile robot platform for innovators",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
      link: "/products/rover"
    },
    {
      title: "LARA",
      description: "Lightweight autonomous research assistant",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800",
      link: "/products/lara"
    }
  ];

  const testimonials = [
    {
      quote: "ORC has revolutionized how we approach robotics education.",
      author: "Dr. Sarah Chen",
      role: "Professor of Robotics, MIT"
    },
    {
      quote: "The best platform for learning advanced robotics concepts.",
      author: "James Wilson",
      role: "Lead Engineer, Boston Dynamics"
    },
    {
      quote: "Incredible community and cutting-edge resources.",
      author: "Maria Garcia",
      role: "Robotics Researcher"
    }
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-brand-blue/20"></div>
        
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Engineering the Fight Forward.
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-lg">
                Join the revolution in competitive robotics and shape the future of automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center px-8 py-4 bg-white text-brand-black rounded-lg hover:bg-brand-neutral-5 transition-colors duration-300"
                >
                  Join the Community
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <button
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Robots in Action
                </button>
              </div>
            </motion.div>
            
            <div className="hidden md:block">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="rounded-lg shadow-2xl"
              >
                <source
                  src="https://neura-robotics.com/wp-content/uploads/2024/09/website-landing_1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-20 bg-brand-neutral-5">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            className="grid md:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-black mb-2">{product.title}</h3>
                  <p className="text-brand-neutral-20 mb-4">{product.description}</p>
                  <span className="inline-flex items-center text-brand-blue font-medium">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics Strip */}
      <section className="py-12 bg-brand-black">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="border-l-4 border-brand-blue pl-8">
              <h2 className="text-4xl font-bold text-brand-black mb-6">
                Master Robotics Engineering
              </h2>
              <p className="text-brand-neutral-20 mb-8">
                From basic electronics to advanced AI integration, our comprehensive curriculum
                is designed to transform beginners into robotics experts.
              </p>
              <Link
                to="/courses"
                className="inline-flex items-center px-8 py-4 bg-brand-blue text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                See Curriculum
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1470"
                alt="Student working on robot"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-brand-blue/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-neutral-5">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-8 pb-8 snap-x">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-full md:w-1/3 snap-center"
              >
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <p className="text-lg text-brand-neutral-20 mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-bold text-brand-black">{testimonial.author}</div>
                    <div className="text-sm text-brand-neutral-20">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated with ORC
            </h2>
            <p className="text-white/60 mb-8">
              Get the latest news about robotics competitions, courses, and community events.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white rounded-lg text-brand-black placeholder-brand-neutral-20"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-brand-blue text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;