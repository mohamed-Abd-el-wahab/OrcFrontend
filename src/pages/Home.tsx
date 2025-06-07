import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <ServicesSection />
    </div>
  );
};

export default Home;