import React from 'react';
import Hero from '../components/home/Hero';
import CommunitySection from '../components/home/CommunitySection';
import ServicesSection from '../components/home/ServicesSection';
// import StatsSection from '../components/home/StatsSection';
import MeetTheRover from '../components/home/MeetTheRover';
// import LearningSection from '../components/home/LearningSection';
import EventsSection from '../components/home/EventsSection';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-orc-black via-deep-charcoal to-orc-black">
      <Hero />
      <ServicesSection />
      {/* <StatsSection /> */}
      <MeetTheRover />
      <CommunitySection />
      <EventsSection />
    </div>
  );
};

export default Home;