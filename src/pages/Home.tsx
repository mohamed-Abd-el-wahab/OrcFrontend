import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import StatsSection from '../components/home/StatsSection';
import MeetTheRover from '../components/home/MeetTheRover';
import LearningSection from '../components/home/LearningSection';
import EventsSection from '../components/home/EventsSection';

const Home = () => {
  return (
    <div className="gradient-primary">
      <Hero />
      <ServicesSection />
      <StatsSection />
      <MeetTheRover />
      <LearningSection />
      <EventsSection />
    </div>
  );
};

export default Home;