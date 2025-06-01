import React from 'react';
import AboutHero from '../components/about/AboutHero';
import Mission from '../components/about/Mission';
import Story from '../components/about/Story';
import CoreValues from '../components/about/CoreValues';
import Partners from '../components/about/Partners';
import JoinMovement from '../components/about/JoinMovement';

const About = () => {
  return (
    <div className="bg-black">
      <AboutHero />
      <Mission />
      <Story />
      <CoreValues />
      <Partners />
      <JoinMovement />
    </div>
  );
};

export default About;