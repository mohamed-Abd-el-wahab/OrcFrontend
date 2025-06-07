import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import StatsSection from '../components/home/StatsSection';
import MeetTheRover from '../components/home/MeetTheRover';

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <ServicesSection />
      <StatsSection />
      <MeetTheRover />
    </div>
  );
};

export default Home;