import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import StatsSection from '../components/home/StatsSection';
import MeetTheRover from '../components/home/MeetTheRover';
import LearningSection from '../components/home/LearningSection';

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <ServicesSection />
      <StatsSection />
      <MeetTheRover />
      <LearningSection />
    </div>
  );
};

export default Home;